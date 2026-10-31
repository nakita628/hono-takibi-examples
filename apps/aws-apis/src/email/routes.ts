import { createRoute, z } from '@hono/zod-openapi'

const EnabledSchema = z.boolean().openapi('Enabled')

const VerificationStatusSchema = z
  .enum(['Pending', 'Success', 'Failed', 'TemporaryFailure', 'NotStarted'])
  .openapi('VerificationStatus')

const VerificationTokenSchema = z.string().openapi('VerificationToken')

const VerificationTokenListSchema = z
  .array(VerificationTokenSchema)
  .openapi('VerificationTokenList')

const IdentityDkimAttributesSchema = z
  .object({
    DkimEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            "Is true if DKIM signing is enabled for email sent from the identity. It's false otherwise. The default value is true.",
        }),
    ),
    DkimVerificationStatus: VerificationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes whether Amazon SES has successfully verified the DKIM DNS records (tokens) published in the domain name's DNS. (This only applies to domain identities, not email address identities.)",
        }),
    ),
    DkimTokens: VerificationTokenListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of character strings that represent the domain\'s identity. Using these tokens, you need to create DNS CNAME records that point to DKIM public keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you\'ve updated your DNS records. This detection process might take up to 72 hours. After successful detection, Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.)</p> <p>For more information about creating DNS records using DKIM tokens, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DkimEnabled', 'DkimVerificationStatus'],
    description: 'Represents the DKIM attributes of a verified email address or a domain.',
  })
  .openapi('IdentityDkimAttributes')

type DkimAttributesType = { [key: string]: z.infer<typeof IdentityDkimAttributesSchema> }

const MailFromDomainNameSchema = z.string().openapi('MailFromDomainName')

const CustomMailFromStatusSchema = z
  .enum(['Pending', 'Success', 'Failed', 'TemporaryFailure'])
  .openapi('CustomMailFromStatus')

const BehaviorOnMXFailureSchema = z
  .enum(['UseDefaultValue', 'RejectMessage'])
  .openapi('BehaviorOnMXFailure')

const IdentityMailFromDomainAttributesSchema = z
  .object({
    MailFromDomain: MailFromDomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The custom MAIL FROM domain that the identity is configured to use.',
        }),
    ),
    MailFromDomainStatus: CustomMailFromStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state that indicates whether Amazon SES has successfully read the MX record required for custom MAIL FROM domain setup. If the state is <code>Success</code>, Amazon SES uses the specified custom MAIL FROM domain when the verified identity sends an email. All other states indicate that Amazon SES takes the action described by <code>BehaviorOnMXFailure</code>.',
        }),
    ),
    BehaviorOnMXFailure: BehaviorOnMXFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action that Amazon SES takes if it cannot successfully read the required MX record when you send an email. A value of <code>UseDefaultValue</code> indicates that if Amazon SES cannot read the required MX record, it uses amazonses.com (or a subdomain of that) as the MAIL FROM domain. A value of <code>RejectMessage</code> indicates that if Amazon SES cannot read the required MX record, Amazon SES returns a <code>MailFromDomainNotVerified</code> error and does not send the email.</p> <p>The custom MAIL FROM setup states that result in this behavior are <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['MailFromDomain', 'MailFromDomainStatus', 'BehaviorOnMXFailure'],
    description:
      'Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).',
  })
  .openapi('IdentityMailFromDomainAttributes')

type MailFromDomainAttributesType = {
  [key: string]: z.infer<typeof IdentityMailFromDomainAttributesSchema>
}

const NotificationTopicSchema = z.string().openapi('NotificationTopic')

const IdentityNotificationAttributesSchema = z
  .object({
    BounceTopic: NotificationTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish bounce notifications.',
        }),
    ),
    ComplaintTopic: NotificationTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish complaint notifications.',
        }),
    ),
    DeliveryTopic: NotificationTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish delivery notifications.',
        }),
    ),
    ForwardingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether Amazon SES will forward bounce and complaint notifications as email. <code>true</code> indicates that Amazon SES will forward bounce and complaint notifications as email, while <code>false</code> indicates that bounce and complaint notifications will be published only to the specified bounce and complaint Amazon SNS topics.',
        }),
    ),
    HeadersInBounceNotificationsEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type <code>Bounce</code>. A value of <code>true</code> specifies that Amazon SES will include headers in bounce notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in bounce notifications.',
        }),
    ).exactOptional(),
    HeadersInComplaintNotificationsEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type <code>Complaint</code>. A value of <code>true</code> specifies that Amazon SES will include headers in complaint notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in complaint notifications.',
        }),
    ).exactOptional(),
    HeadersInDeliveryNotificationsEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type <code>Delivery</code>. A value of <code>true</code> specifies that Amazon SES will include headers in delivery notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in delivery notifications.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BounceTopic', 'ComplaintTopic', 'DeliveryTopic', 'ForwardingEnabled'],
    description:
      'Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.',
  })
  .openapi('IdentityNotificationAttributes')

type NotificationAttributesType = {
  [key: string]: z.infer<typeof IdentityNotificationAttributesSchema>
}

const IdentityVerificationAttributesSchema = z
  .object({
    VerificationStatus: VerificationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The verification status of the identity: "Pending", "Success", "Failed", or "TemporaryFailure".',
        }),
    ),
    VerificationToken: VerificationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The verification token for a domain identity. Null for email address identities.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VerificationStatus'],
    description: 'Represents the verification attributes of a single identity.',
  })
  .openapi('IdentityVerificationAttributes')

type VerificationAttributesType = {
  [key: string]: z.infer<typeof IdentityVerificationAttributesSchema>
}

const CloneReceiptRuleSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CloneReceiptRuleSetResponse')

const RuleSetDoesNotExistExceptionSchema = z.any().openapi('RuleSetDoesNotExistException')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CreateConfigurationSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CreateConfigurationSetResponse')

const ConfigurationSetNameSchema = z.string().openapi('ConfigurationSetName')

const ConfigurationSetAlreadyExistsExceptionSchema = z
  .any()
  .openapi('ConfigurationSetAlreadyExistsException')

const InvalidConfigurationSetExceptionSchema = z.any().openapi('InvalidConfigurationSetException')

const CreateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CreateConfigurationSetEventDestinationResponse')

const EventDestinationNameSchema = z.string().openapi('EventDestinationName')

const EventTypeSchema = z
  .enum(['send', 'reject', 'bounce', 'complaint', 'delivery', 'open', 'click', 'renderingFailure'])
  .openapi('EventType')

const EventTypesSchema = z.array(EventTypeSchema).openapi('EventTypes')

const AmazonResourceNameSchema = z.string().openapi('AmazonResourceName')

const KinesisFirehoseDestinationSchema = z
  .object({
    IAMRoleARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.',
        }),
    ),
    DeliveryStreamARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.',
        }),
    ),
  })
  .openapi({
    required: ['IAMRoleARN', 'DeliveryStreamARN'],
    description:
      '<p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('KinesisFirehoseDestination')

const DimensionNameSchema = z.string().openapi('DimensionName')

const DimensionValueSourceSchema = z
  .enum(['messageTag', 'emailHeader', 'linkTag'])
  .openapi('DimensionValueSource')

const DefaultDimensionValueSchema = z.string().openapi('DefaultDimensionValue')

const CloudWatchDimensionConfigurationSchema = z
  .object({
    DimensionName: DimensionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 256 characters.</p> </li> </ul>',
        }),
    ),
    DimensionValueSource: DimensionValueSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon SES to use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code>/<code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want Amazon SES to use your own email headers, choose <code>emailHeader</code>.',
        }),
    ),
    DefaultDimensionValue: DefaultDimensionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. The default value must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 256 characters.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['DimensionName', 'DimensionValueSource', 'DefaultDimensionValue'],
    description:
      '<p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
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
            'A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.',
        }),
    ),
  })
  .openapi({
    required: ['DimensionConfigurations'],
    description:
      '<p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('CloudWatchDestination')

const SNSDestinationSchema = z
  .object({
    TopicARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon SNS topic that email sending events will be published to. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ),
  })
  .openapi({
    required: ['TopicARN'],
    description:
      '<p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('SNSDestination')

const ConfigurationSetDoesNotExistExceptionSchema = z
  .any()
  .openapi('ConfigurationSetDoesNotExistException')

const EventDestinationAlreadyExistsExceptionSchema = z
  .any()
  .openapi('EventDestinationAlreadyExistsException')

const InvalidCloudWatchDestinationExceptionSchema = z
  .any()
  .openapi('InvalidCloudWatchDestinationException')

const InvalidFirehoseDestinationExceptionSchema = z
  .any()
  .openapi('InvalidFirehoseDestinationException')

const InvalidSNSDestinationExceptionSchema = z.any().openapi('InvalidSNSDestinationException')

const CreateConfigurationSetTrackingOptionsResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CreateConfigurationSetTrackingOptionsResponse')

const CustomRedirectDomainSchema = z.string().openapi('CustomRedirectDomain')

const TrackingOptionsAlreadyExistsExceptionSchema = z
  .any()
  .openapi('TrackingOptionsAlreadyExistsException')

const InvalidTrackingOptionsExceptionSchema = z.any().openapi('InvalidTrackingOptionsException')

const CustomVerificationEmailTemplateAlreadyExistsExceptionSchema = z
  .any()
  .openapi('CustomVerificationEmailTemplateAlreadyExistsException')

const FromEmailAddressNotVerifiedExceptionSchema = z
  .any()
  .openapi('FromEmailAddressNotVerifiedException')

const CustomVerificationEmailInvalidContentExceptionSchema = z
  .any()
  .openapi('CustomVerificationEmailInvalidContentException')

const CreateReceiptFilterResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CreateReceiptFilterResponse')

const ReceiptFilterNameSchema = z.string().openapi('ReceiptFilterName')

const ReceiptFilterPolicySchema = z.enum(['Block', 'Allow']).openapi('ReceiptFilterPolicy')

const CidrSchema = z.string().openapi('Cidr')

const ReceiptIpFilterSchema = z
  .object({
    Policy: ReceiptFilterPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to block or allow incoming mail from the specified IP addresses.',
        }),
    ),
    Cidr: CidrSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single IP address or a range of IP addresses that you want to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see <a href="https://tools.ietf.org/html/rfc2317">RFC 2317</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Policy', 'Cidr'],
    description:
      '<p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('ReceiptIpFilter')

const CreateReceiptRuleResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CreateReceiptRuleResponse')

const ReceiptRuleNameSchema = z.string().openapi('ReceiptRuleName')

const TlsPolicySchema = z.enum(['Require', 'Optional']).openapi('TlsPolicy')

const RecipientSchema = z.string().openapi('Recipient')

const RecipientsListSchema = z.array(RecipientSchema).openapi('RecipientsList')

const S3BucketNameSchema = z.string().openapi('S3BucketName')

const S3KeyPrefixSchema = z.string().openapi('S3KeyPrefix')

const S3ActionSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ).exactOptional(),
    BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon S3 bucket that incoming email will be saved to.',
        }),
    ),
    ObjectKeyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.',
        }),
    ).exactOptional(),
    KmsKeyArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The customer master key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket. You can use the default master key or a custom master key you created in AWS KMS as follows:</p> <ul> <li> <p>To use the default master key, provide an ARN in the form of <code>arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses</code>. For example, if your AWS account ID is 123456789012 and you want to use the default master key in the US West (Oregon) region, the ARN of the default master key would be <code>arn:aws:kms:us-west-2:123456789012:alias/aws/ses</code>. If you use the default master key, you don\'t need to perform any extra steps to give Amazon SES permission to use the key.</p> </li> <li> <p>To use a custom master key you created in AWS KMS, provide the ARN of the master key and ensure that you add a statement to your key\'s policy to give Amazon SES permission to use it. For more information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> </li> </ul> <p>For more information about key policies, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">AWS KMS Developer Guide</a>. If you do not specify a master key, Amazon SES will not encrypt your emails.</p> <important> <p>Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side encryption. This means that you must use the Amazon S3 encryption client to decrypt the email after retrieving it from Amazon S3, as the service has no access to use your AWS KMS keys for decryption. This encryption client is currently available with the <a href="http://aws.amazon.com/sdk-for-java/">AWS SDK for Java</a> and <a href="http://aws.amazon.com/sdk-for-ruby/">AWS SDK for Ruby</a> only. For more information about client-side encryption using AWS KMS master keys, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 Developer Guide</a>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketName'],
    description:
      '<p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('S3Action')

const BounceSmtpReplyCodeSchema = z.string().openapi('BounceSmtpReplyCode')

const BounceStatusCodeSchema = z.string().openapi('BounceStatusCode')

const BounceMessageSchema = z.string().openapi('BounceMessage')

const AddressSchema = z.string().openapi('Address')

const BounceActionSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ).exactOptional(),
    SmtpReplyCode: BounceSmtpReplyCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMTP reply code, as defined by <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.',
        }),
    ),
    StatusCode: BounceStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMTP enhanced status code, as defined by <a href="https://tools.ietf.org/html/rfc3463">RFC 3463</a>.',
        }),
    ).exactOptional(),
    Message: BounceMessageSchema.and(
      z.any().openapi({ description: 'Human-readable text to include in the bounce message.' }),
    ),
    Sender: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the sender of the bounced email. This is the address from which the bounce message will be sent.',
        }),
    ),
  })
  .openapi({
    required: ['SmtpReplyCode', 'Message', 'Sender'],
    description:
      '<p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('BounceAction')

const WorkmailActionSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action is called. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ).exactOptional(),
    OrganizationArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon WorkMail organization. An example of an Amazon WorkMail organization ARN is <code>arn:aws:workmail:us-west-2:123456789012:organization/m-68755160c4cb4e29a2b2f8fb58f359d7</code>. For information about Amazon WorkMail organizations, see the <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html">Amazon WorkMail Administrator Guide</a>.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationArn'],
    description:
      '<p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('WorkmailAction')

const InvocationTypeSchema = z.enum(['Event', 'RequestResponse']).openapi('InvocationType')

const LambdaActionSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is taken. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ).exactOptional(),
    FunctionArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Lambda function. An example of an AWS Lambda function ARN is <code>arn:aws:lambda:us-west-2:account-id:function:MyFunction</code>. For more information about AWS Lambda, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">AWS Lambda Developer Guide</a>.',
        }),
    ),
    InvocationType: InvocationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The invocation type of the AWS Lambda function. An invocation type of <code>RequestResponse</code> means that the execution of the function will immediately result in a response, and a value of <code>Event</code> means that the function will be invoked asynchronously. The default value is <code>Event</code>. For information about AWS Lambda invocation types, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html">AWS Lambda Developer Guide</a>.</p> <important> <p>There is a 30-second timeout on <code>RequestResponse</code> invocations. You should use <code>Event</code> invocation in most cases. Use <code>RequestResponse</code> only when you want to make a mail flow decision, such as whether to stop the receipt rule or the receipt rule set.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FunctionArn'],
    description:
      '<p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('LambdaAction')

const StopScopeSchema = z.literal('RuleSet').openapi('StopScope')

const StopActionSchema = z
  .object({
    Scope: StopScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scope of the StopAction. The only acceptable value is <code>RuleSet</code>.',
        }),
    ),
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is taken. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Scope'],
    description:
      '<p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('StopAction')

const HeaderNameSchema = z.string().openapi('HeaderName')

const HeaderValueSchema = z.string().openapi('HeaderValue')

const AddHeaderActionSchema = z
  .object({
    HeaderName: HeaderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.',
        }),
    ),
    HeaderValue: HeaderValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Must be less than 2048 characters, and must not contain newline characters ("\\r" or "\\n").',
        }),
    ),
  })
  .openapi({
    required: ['HeaderName', 'HeaderValue'],
    description:
      '<p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('AddHeaderAction')

const SNSActionEncodingSchema = z.enum(['UTF-8', 'Base64']).openapi('SNSActionEncoding')

const SNSActionSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic to notify. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.',
        }),
    ),
    Encoding: SNSActionEncodingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encoding to use for the email within the Amazon SNS notification. UTF-8 is easier to use, but may not preserve all special characters when a message was encoded with a different encoding format. Base64 preserves all special characters. The default value is UTF-8.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TopicArn'],
    description:
      '<p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don\'t need to do anything to give Amazon SES permission to publish emails to it. However, if you don\'t own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('SNSAction')

const ReceiptActionSchema = z
  .object({
    S3Action: S3ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.',
        }),
    ).exactOptional(),
    BounceAction: BounceActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).',
        }),
    ).exactOptional(),
    WorkmailAction: WorkmailActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Calls Amazon WorkMail and, optionally, publishes a notification to Amazon Amazon SNS.',
        }),
    ).exactOptional(),
    LambdaAction: LambdaActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.',
        }),
    ).exactOptional(),
    StopAction: StopActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.',
        }),
    ).exactOptional(),
    AddHeaderAction: AddHeaderActionSchema.and(
      z.any().openapi({ description: 'Adds a header to the received email.' }),
    ).exactOptional(),
    SNSAction: SNSActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Publishes the email content within a notification to Amazon SNS.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>',
    required: [],
  })
  .openapi('ReceiptAction')

const ReceiptActionsListSchema = z.array(ReceiptActionSchema).openapi('ReceiptActionsList')

const InvalidSnsTopicExceptionSchema = z.any().openapi('InvalidSnsTopicException')

const InvalidS3ConfigurationExceptionSchema = z.any().openapi('InvalidS3ConfigurationException')

const InvalidLambdaFunctionExceptionSchema = z.any().openapi('InvalidLambdaFunctionException')

const RuleDoesNotExistExceptionSchema = z.any().openapi('RuleDoesNotExistException')

const CreateReceiptRuleSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('CreateReceiptRuleSetResponse')

const CreateTemplateResponseSchema = z.object({}).openapi('CreateTemplateResponse')

const TemplateNameSchema = z.string().openapi('TemplateName')

const SubjectPartSchema = z.string().openapi('SubjectPart')

const TextPartSchema = z.string().openapi('TextPart')

const HtmlPartSchema = z.string().openapi('HtmlPart')

const InvalidTemplateExceptionSchema = z.any().openapi('InvalidTemplateException')

const DeleteConfigurationSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteConfigurationSetResponse')

const DeleteConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteConfigurationSetEventDestinationResponse')

const EventDestinationDoesNotExistExceptionSchema = z
  .any()
  .openapi('EventDestinationDoesNotExistException')

const DeleteConfigurationSetTrackingOptionsResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteConfigurationSetTrackingOptionsResponse')

const TrackingOptionsDoesNotExistExceptionSchema = z
  .any()
  .openapi('TrackingOptionsDoesNotExistException')

const DeleteIdentityResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteIdentityResponse')

const DeleteIdentityPolicyResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteIdentityPolicyResponse')

const DeleteReceiptFilterResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteReceiptFilterResponse')

const DeleteReceiptRuleResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteReceiptRuleResponse')

const DeleteReceiptRuleSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('DeleteReceiptRuleSetResponse')

const CannotDeleteExceptionSchema = z.any().openapi('CannotDeleteException')

const DeleteTemplateResponseSchema = z.object({}).openapi('DeleteTemplateResponse')

const ReceiptRuleSetNameSchema = z.string().openapi('ReceiptRuleSetName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ReceiptRuleSetMetadataSchema = z
  .object({
    Name: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the receipt rule set. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the receipt rule set was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account\'s verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p>',
    required: [],
  })
  .openapi('ReceiptRuleSetMetadata')

const ReceiptRuleSchema = z
  .object({
    Name: ReceiptRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the receipt rule. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
        }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, the receipt rule is active. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
    TlsPolicy: TlsPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The default is <code>Optional</code>.',
        }),
    ).exactOptional(),
    Recipients: RecipientsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.',
        }),
    ).exactOptional(),
    Actions: ReceiptActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.',
        }),
    ).exactOptional(),
    ScanEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule\'s actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('ReceiptRule')

const ReceiptRulesListSchema = z.array(ReceiptRuleSchema).openapi('ReceiptRulesList')

const DescribeActiveReceiptRuleSetResponseSchema = z
  .object({
    Metadata: ReceiptRuleSetMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata for the currently active receipt rule set. The metadata consists of the rule set name and a timestamp of when the rule set was created.',
        }),
    ).exactOptional(),
    Rules: ReceiptRulesListSchema.and(
      z.any().openapi({ description: 'The receipt rules that belong to the active rule set.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Metadata: { CreatedTimestamp: '2016-07-15T16:25:59.607Z', Name: 'default-rule-set' },
      Rules: [
        {
          Actions: [{ S3Action: { BucketName: 'MyBucket', ObjectKeyPrefix: 'email' } }],
          Enabled: true,
          Name: 'MyRule',
          ScanEnabled: true,
          TlsPolicy: 'Optional',
        },
      ],
    },
    description:
      'Represents the metadata and receipt rules for the receipt rule set that is currently active.',
    required: [],
  })
  .openapi('DescribeActiveReceiptRuleSetResponse')

const ConfigurationSetSchema = z
  .object({
    Name: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the configuration set. The name must meet the following requirements:</p> <ul> <li> <p>Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain 64 characters or fewer.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('ConfigurationSet')

const EventDestinationSchema = z
  .object({
    Name: EventDestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the event destination. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
        }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to <code>true</code> to enable publishing to this destination; set to <code>false</code> to prevent publishing to this destination. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
    MatchingEventTypes: EventTypesSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of email sending events to publish to the event destination.',
        }),
    ),
    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.',
        }),
    ).exactOptional(),
    CloudWatchDestination: CloudWatchDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.',
        }),
    ).exactOptional(),
    SNSDestination: SNSDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MatchingEventTypes'],
    description:
      '<p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('EventDestination')

const EventDestinationsSchema = z.array(EventDestinationSchema).openapi('EventDestinations')

const TrackingOptionsSchema = z
  .object({
    CustomRedirectDomain: CustomRedirectDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom subdomain that will be used to redirect email recipients to the Amazon SES event tracking domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>',
    required: [],
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
  })
  .openapi({
    description:
      'Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).',
    required: [],
  })
  .openapi('DeliveryOptions')

const LastFreshStartSchema = z.iso.datetime({ offset: true }).openapi('LastFreshStart')

const ReputationOptionsSchema = z
  .object({
    SendingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether email sending is enabled or disabled for the configuration set. If the value is <code>true</code>, then Amazon SES will send emails that use the configuration set. If the value is <code>false</code>, Amazon SES will not send emails that use the configuration set. The default value is <code>true</code>. You can change this setting using <a>UpdateConfigurationSetSendingEnabled</a>.',
        }),
    ).exactOptional(),
    ReputationMetricsEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.</p> <p>If the value is <code>true</code>, reputation metrics are published. If the value is <code>false</code>, reputation metrics are not published. The default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    LastFreshStart: LastFreshStartSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time at which the reputation metrics for the configuration set were last reset. Resetting these metrics is known as a <i>fresh start</i>.</p> <p>When you disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a> and later re-enable it, the reputation metrics for the configuration set (but not for the entire Amazon SES account) are reset.</p> <p>If email sending for the configuration set has never been disabled and later re-enabled, the value of this attribute is <code>null</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the reputation settings for a configuration set.',
    required: [],
  })
  .openapi('ReputationOptions')

const DescribeConfigurationSetResponseSchema = z
  .object({
    ConfigurationSet: ConfigurationSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration set object associated with the specified configuration set.',
        }),
    ).exactOptional(),
    EventDestinations: EventDestinationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of event destinations associated with the configuration set. ',
        }),
    ).exactOptional(),
    TrackingOptions: TrackingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom open and click tracking domain associated with the configuration set.',
        }),
    ).exactOptional(),
    DeliveryOptions: DeliveryOptionsSchema.exactOptional(),
    ReputationOptions: ReputationOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the reputation settings for the configuration set. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
    required: [],
  })
  .openapi('DescribeConfigurationSetResponse')

const ConfigurationSetAttributeSchema = z
  .enum(['eventDestinations', 'trackingOptions', 'deliveryOptions', 'reputationOptions'])
  .openapi('ConfigurationSetAttribute')

const DescribeReceiptRuleResponseSchema = z
  .object({
    Rule: ReceiptRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A data structure that contains the specified receipt rule's name, actions, recipients, domains, enabled status, scan status, and Transport Layer Security (TLS) policy.",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Rule: {
        Actions: [{ S3Action: { BucketName: 'MyBucket', ObjectKeyPrefix: 'email' } }],
        Enabled: true,
        Name: 'MyRule',
        ScanEnabled: true,
        TlsPolicy: 'Optional',
      },
    },
    description: 'Represents the details of a receipt rule.',
    required: [],
  })
  .openapi('DescribeReceiptRuleResponse')

const DescribeReceiptRuleSetResponseSchema = z
  .object({
    Metadata: ReceiptRuleSetMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata for the receipt rule set, which consists of the rule set name and the timestamp of when the rule set was created.',
        }),
    ).exactOptional(),
    Rules: ReceiptRulesListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the receipt rules that belong to the specified receipt rule set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Metadata: { CreatedTimestamp: '2016-07-15T16:25:59.607Z', Name: 'MyRuleSet' },
      Rules: [
        {
          Actions: [{ S3Action: { BucketName: 'MyBucket', ObjectKeyPrefix: 'email' } }],
          Enabled: true,
          Name: 'MyRule',
          ScanEnabled: true,
          TlsPolicy: 'Optional',
        },
      ],
    },
    description: 'Represents the details of the specified receipt rule set.',
    required: [],
  })
  .openapi('DescribeReceiptRuleSetResponse')

const GetAccountSendingEnabledResponseSchema = z
  .object({
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Enabled: true },
    description:
      'Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.',
    required: [],
  })
  .openapi('GetAccountSendingEnabledResponse')

const FromAddressSchema = z.string().openapi('FromAddress')

const SubjectSchema = z.string().openapi('Subject')

const TemplateContentSchema = z.string().openapi('TemplateContent')

const SuccessRedirectionURLSchema = z.string().openapi('SuccessRedirectionURL')

const FailureRedirectionURLSchema = z.string().openapi('FailureRedirectionURL')

const GetCustomVerificationEmailTemplateResponseSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the custom verification email template.' }),
    ).exactOptional(),
    FromEmailAddress: FromAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ).exactOptional(),
    TemplateSubject: SubjectSchema.and(
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
  .openapi({ description: 'The content of the custom verification email template.', required: [] })
  .openapi('GetCustomVerificationEmailTemplateResponse')

const CustomVerificationEmailTemplateDoesNotExistExceptionSchema = z
  .any()
  .openapi('CustomVerificationEmailTemplateDoesNotExistException')

const DkimAttributesSchema: z.ZodType<DkimAttributesType> = z
  .lazy(() => z.record(z.string(), IdentityDkimAttributesSchema))
  .openapi('DkimAttributes')

const GetIdentityDkimAttributesResponseSchema = z
  .object({
    DkimAttributes: DkimAttributesSchema.and(
      z.any().openapi({ description: 'The DKIM attributes for an email address or a domain.' }),
    ),
  })
  .openapi({
    required: ['DkimAttributes'],
    example: {
      DkimAttributes: {
        'example.com': {
          DkimEnabled: true,
          DkimTokens: [
            'EXAMPLEjcs5xoyqytjsotsijas7236gr',
            'EXAMPLEjr76cvoc6mysspnioorxsn6ep',
            'EXAMPLEkbmkqkhlm2lyz77ppkulerm4k',
          ],
          DkimVerificationStatus: 'Success',
        },
        'user@example.com': { DkimEnabled: false, DkimVerificationStatus: 'NotStarted' },
      },
    },
    description:
      'Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.',
  })
  .openapi('GetIdentityDkimAttributesResponse')

const IdentitySchema = z.string().openapi('Identity')

const MailFromDomainAttributesSchema: z.ZodType<MailFromDomainAttributesType> = z
  .lazy(() => z.record(z.string(), IdentityMailFromDomainAttributesSchema))
  .openapi('MailFromDomainAttributes')

const GetIdentityMailFromDomainAttributesResponseSchema = z
  .object({
    MailFromDomainAttributes: MailFromDomainAttributesSchema.and(
      z.any().openapi({ description: 'A map of identities to custom MAIL FROM attributes.' }),
    ),
  })
  .openapi({
    required: ['MailFromDomainAttributes'],
    example: {
      MailFromDomainAttributes: {
        'example.com': {
          BehaviorOnMXFailure: 'UseDefaultValue',
          MailFromDomain: 'bounces.example.com',
          MailFromDomainStatus: 'Success',
        },
      },
    },
    description: 'Represents the custom MAIL FROM attributes for a list of identities.',
  })
  .openapi('GetIdentityMailFromDomainAttributesResponse')

const NotificationAttributesSchema: z.ZodType<NotificationAttributesType> = z
  .lazy(() => z.record(z.string(), IdentityNotificationAttributesSchema))
  .openapi('NotificationAttributes')

const GetIdentityNotificationAttributesResponseSchema = z
  .object({
    NotificationAttributes: NotificationAttributesSchema.and(
      z.any().openapi({ description: 'A map of Identity to IdentityNotificationAttributes.' }),
    ),
  })
  .openapi({
    required: ['NotificationAttributes'],
    example: {
      NotificationAttributes: {
        'example.com': {
          BounceTopic: 'arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic',
          ComplaintTopic: 'arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic',
          DeliveryTopic: 'arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic',
          ForwardingEnabled: true,
          HeadersInBounceNotificationsEnabled: false,
          HeadersInComplaintNotificationsEnabled: false,
          HeadersInDeliveryNotificationsEnabled: false,
        },
      },
    },
    description: 'Represents the notification attributes for a list of identities.',
  })
  .openapi('GetIdentityNotificationAttributesResponse')

const PolicySchema = z.string().min(1).openapi('Policy')

const PolicyMapSchema = z.record(z.string(), PolicySchema).openapi('PolicyMap')

const GetIdentityPoliciesResponseSchema = z
  .object({
    Policies: PolicyMapSchema.and(
      z.any().openapi({ description: 'A map of policy names to policies.' }),
    ),
  })
  .openapi({
    required: ['Policies'],
    example: {
      Policies: {
        MyPolicy:
          '{"Version":"2008-10-17","Statement":[{"Sid":"stmt1469123904194","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::123456789012:root"},"Action":["ses:SendEmail","ses:SendRawEmail"],"Resource":"arn:aws:ses:us-east-1:EXAMPLE65304:identity/example.com"}]}',
      },
    },
    description: 'Represents the requested sending authorization policies.',
  })
  .openapi('GetIdentityPoliciesResponse')

const PolicyNameSchema = z.string().min(1).max(64).openapi('PolicyName')

const VerificationAttributesSchema: z.ZodType<VerificationAttributesType> = z
  .lazy(() => z.record(z.string(), IdentityVerificationAttributesSchema))
  .openapi('VerificationAttributes')

const GetIdentityVerificationAttributesResponseSchema = z
  .object({
    VerificationAttributes: VerificationAttributesSchema.and(
      z
        .any()
        .openapi({ description: 'A map of Identities to IdentityVerificationAttributes objects.' }),
    ),
  })
  .openapi({
    required: ['VerificationAttributes'],
    example: {
      VerificationAttributes: {
        'example.com': {
          VerificationStatus: 'Success',
          VerificationToken: 'EXAMPLE3VYb9EDI2nTOQRi/Tf6MI/6bD6THIGiP1MVY=',
        },
      },
    },
    description:
      'The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.',
  })
  .openapi('GetIdentityVerificationAttributesResponse')

const Max24HourSendSchema = z.float64().openapi('Max24HourSend')

const MaxSendRateSchema = z.float64().openapi('MaxSendRate')

const SentLast24HoursSchema = z.float64().openapi('SentLast24Hours')

const GetSendQuotaResponseSchema = z
  .object({
    Max24HourSend: Max24HourSendSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of emails the user is allowed to send in a 24-hour interval. A value of -1 signifies an unlimited quota.',
        }),
    ).exactOptional(),
    MaxSendRate: MaxSendRateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of emails that Amazon SES can accept from the user's account per second.</p> <note> <p>The rate at which Amazon SES accepts the user's messages might be less than the maximum send rate.</p> </note>",
        }),
    ).exactOptional(),
    SentLast24Hours: SentLast24HoursSchema.and(
      z.any().openapi({ description: 'The number of emails sent during the previous 24 hours.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Max24HourSend: 200, MaxSendRate: 1, SentLast24Hours: 1 },
    description:
      'Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.',
    required: [],
  })
  .openapi('GetSendQuotaResponse')

const CounterSchema = z.int().openapi('Counter')

const SendDataPointSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'Time of the data point.' }),
    ).exactOptional(),
    DeliveryAttempts: CounterSchema.and(
      z.any().openapi({ description: 'Number of emails that have been sent.' }),
    ).exactOptional(),
    Bounces: CounterSchema.and(
      z.any().openapi({ description: 'Number of emails that have bounced.' }),
    ).exactOptional(),
    Complaints: CounterSchema.and(
      z
        .any()
        .openapi({ description: 'Number of unwanted emails that were rejected by recipients.' }),
    ).exactOptional(),
    Rejects: CounterSchema.and(
      z.any().openapi({ description: 'Number of emails rejected by Amazon SES.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. ',
    required: [],
  })
  .openapi('SendDataPoint')

const SendDataPointListSchema = z.array(SendDataPointSchema).openapi('SendDataPointList')

const GetSendStatisticsResponseSchema = z
  .object({
    SendDataPoints: SendDataPointListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of data points, each of which represents 15 minutes of activity.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SendDataPoints: [
        {
          Bounces: 0,
          Complaints: 0,
          DeliveryAttempts: 5,
          Rejects: 0,
          Timestamp: '2016-07-13T22:43:00Z',
        },
        {
          Bounces: 0,
          Complaints: 0,
          DeliveryAttempts: 3,
          Rejects: 0,
          Timestamp: '2016-07-13T23:13:00Z',
        },
        {
          Bounces: 0,
          Complaints: 0,
          DeliveryAttempts: 1,
          Rejects: 0,
          Timestamp: '2016-07-13T21:13:00Z',
        },
      ],
    },
    description:
      'Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.',
    required: [],
  })
  .openapi('GetSendStatisticsResponse')

const TemplateSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
        }),
    ),
    SubjectPart: SubjectPartSchema.and(
      z.any().openapi({ description: 'The subject line of the email.' }),
    ).exactOptional(),
    TextPart: TextPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email body that will be visible to recipients whose email clients do not display HTML.',
        }),
    ).exactOptional(),
    HtmlPart: HtmlPartSchema.and(
      z.any().openapi({ description: 'The HTML body of the email.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TemplateName'],
    description:
      'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
  })
  .openapi('Template')

const GetTemplateResponseSchema = z
  .object({ Template: TemplateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetTemplateResponse')

const TemplateDoesNotExistExceptionSchema = z.any().openapi('TemplateDoesNotExistException')

const ConfigurationSetsSchema = z.array(ConfigurationSetSchema).openapi('ConfigurationSets')

const NextTokenSchema = z.string().openapi('NextToken')

const ListConfigurationSetsResponseSchema = z
  .object({
    ConfigurationSets: ConfigurationSetsSchema.and(
      z.any().openapi({ description: 'A list of configuration sets.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token indicating that there are additional configuration sets available to be listed. Pass this token to successive calls of <code>ListConfigurationSets</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
    required: [],
  })
  .openapi('ListConfigurationSetsResponse')

const CustomVerificationEmailTemplateSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the custom verification email template.' }),
    ).exactOptional(),
    FromEmailAddress: FromAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ).exactOptional(),
    TemplateSubject: SubjectSchema.and(
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
  .openapi('CustomVerificationEmailTemplate')

const CustomVerificationEmailTemplatesSchema = z
  .array(CustomVerificationEmailTemplateSchema)
  .openapi('CustomVerificationEmailTemplates')

const ListCustomVerificationEmailTemplatesResponseSchema = z
  .object({
    CustomVerificationEmailTemplates: CustomVerificationEmailTemplatesSchema.and(
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
            'A token indicating that there are additional custom verification email templates available to be listed. Pass this token to a subsequent call to <code>ListTemplates</code> to retrieve the next 50 custom verification email templates.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A paginated list of custom verification email templates.',
    required: [],
  })
  .openapi('ListCustomVerificationEmailTemplatesResponse')

const IdentityListSchema = z.array(IdentitySchema).openapi('IdentityList')

const ListIdentitiesResponseSchema = z
  .object({
    Identities: IdentityListSchema.and(z.any().openapi({ description: 'A list of identities.' })),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token used for pagination.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Identities'],
    example: { Identities: ['user@example.com'], NextToken: '' },
    description:
      'A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.',
  })
  .openapi('ListIdentitiesResponse')

const PolicyNameListSchema = z.array(PolicyNameSchema).openapi('PolicyNameList')

const ListIdentityPoliciesResponseSchema = z
  .object({
    PolicyNames: PolicyNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of names of policies that apply to the specified identity.',
        }),
    ),
  })
  .openapi({
    required: ['PolicyNames'],
    example: { PolicyNames: ['MyPolicy'] },
    description: 'A list of names of sending authorization policies that apply to an identity.',
  })
  .openapi('ListIdentityPoliciesResponse')

const ReceiptFilterSchema = z
  .object({
    Name: ReceiptFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the IP address filter. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
        }),
    ),
    IpFilter: ReceiptIpFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'IpFilter'],
    description:
      '<p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('ReceiptFilter')

const ReceiptFilterListSchema = z.array(ReceiptFilterSchema).openapi('ReceiptFilterList')

const ListReceiptFiltersResponseSchema = z
  .object({
    Filters: ReceiptFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IP address filter data structures, which each consist of a name, an IP address range, and whether to allow or block mail from it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Filters: [{ IpFilter: { Cidr: '1.2.3.4/24', Policy: 'Block' }, Name: 'MyFilter' }] },
    description: 'A list of IP address filters that exist under your AWS account.',
    required: [],
  })
  .openapi('ListReceiptFiltersResponse')

const ReceiptRuleSetsListsSchema = z
  .array(ReceiptRuleSetMetadataSchema)
  .openapi('ReceiptRuleSetsLists')

const ListReceiptRuleSetsResponseSchema = z
  .object({
    RuleSets: ReceiptRuleSetsListsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata for the currently active receipt rule set. The metadata consists of the rule set name and the timestamp of when the rule set was created.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token indicating that there are additional receipt rule sets available to be listed. Pass this token to successive calls of <code>ListReceiptRuleSets</code> to retrieve up to 100 receipt rule sets at a time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      NextToken: '',
      RuleSets: [{ CreatedTimestamp: '2016-07-15T16:25:59.607Z', Name: 'MyRuleSet' }],
    },
    description: 'A list of receipt rule sets that exist under your AWS account.',
    required: [],
  })
  .openapi('ListReceiptRuleSetsResponse')

const TemplateMetadataSchema = z
  .object({
    Name: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time and date the template was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an email template.', required: [] })
  .openapi('TemplateMetadata')

const TemplateMetadataListSchema = z.array(TemplateMetadataSchema).openapi('TemplateMetadataList')

const ListTemplatesResponseSchema = z
  .object({
    TemplatesMetadata: TemplateMetadataListSchema.and(
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
            'A token indicating that there are additional email templates available to be listed. Pass this token to a subsequent call to <code>ListTemplates</code> to retrieve the next 50 email templates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTemplatesResponse')

const AddressListSchema = z.array(AddressSchema).openapi('AddressList')

const ListVerifiedEmailAddressesResponseSchema = z
  .object({
    VerifiedEmailAddresses: AddressListSchema.and(
      z.any().openapi({ description: 'A list of email addresses that have been verified.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { VerifiedEmailAddresses: ['user1@example.com', 'user2@example.com'] },
    description:
      'A list of email addresses that you have verified with Amazon SES under your AWS account.',
    required: [],
  })
  .openapi('ListVerifiedEmailAddressesResponse')

const PutConfigurationSetDeliveryOptionsResponseSchema = z
  .object({})
  .openapi({
    description:
      'An HTTP 200 response if the request succeeds, or an error message if the request fails.',
  })
  .openapi('PutConfigurationSetDeliveryOptionsResponse')

const InvalidDeliveryOptionsExceptionSchema = z.any().openapi('InvalidDeliveryOptionsException')

const PutIdentityPolicyResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('PutIdentityPolicyResponse')

const InvalidPolicyExceptionSchema = z.any().openapi('InvalidPolicyException')

const ReorderReceiptRuleSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('ReorderReceiptRuleSetResponse')

const MessageIdSchema = z.string().openapi('MessageId')

const SendBounceResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The message ID of the bounce message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a unique message ID.', required: [] })
  .openapi('SendBounceResponse')

const ReportingMtaSchema = z.string().openapi('ReportingMta')

const ArrivalDateSchema = z.iso.datetime({ offset: true }).openapi('ArrivalDate')

const ExtensionFieldNameSchema = z.string().openapi('ExtensionFieldName')

const ExtensionFieldValueSchema = z.string().openapi('ExtensionFieldValue')

const ExtensionFieldSchema = z
  .object({
    Name: ExtensionFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.',
        }),
    ),
    Value: ExtensionFieldValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the header to add. Must be less than 2048 characters, and must not contain newline characters ("\\r" or "\\n").',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      '<p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('ExtensionField')

const ExtensionFieldListSchema = z.array(ExtensionFieldSchema).openapi('ExtensionFieldList')

const BounceTypeSchema = z
  .enum([
    'DoesNotExist',
    'MessageTooLarge',
    'ExceededQuota',
    'ContentRejected',
    'Undefined',
    'TemporaryFailure',
  ])
  .openapi('BounceType')

const DsnActionSchema = z
  .enum(['failed', 'delayed', 'delivered', 'relayed', 'expanded'])
  .openapi('DsnAction')

const RemoteMtaSchema = z.string().openapi('RemoteMta')

const DsnStatusSchema = z.string().openapi('DsnStatus')

const DiagnosticCodeSchema = z.string().openapi('DiagnosticCode')

const LastAttemptDateSchema = z.iso.datetime({ offset: true }).openapi('LastAttemptDate')

const RecipientDsnFieldsSchema = z
  .object({
    FinalRecipient: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address that the message was ultimately delivered to. This corresponds to the <code>Final-Recipient</code> in the DSN. If not specified, <code>FinalRecipient</code> will be set to the <code>Recipient</code> specified in the <code>BouncedRecipientInfo</code> structure. Either <code>FinalRecipient</code> or the recipient in <code>BouncedRecipientInfo</code> must be a recipient of the original bounced message.</p> <note> <p>Do not prepend the <code>FinalRecipient</code> email address with <code>rfc 822;</code>, as described in <a href="https://tools.ietf.org/html/rfc3798">RFC 3798</a>.</p> </note>',
        }),
    ).exactOptional(),
    Action: DsnActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action performed by the reporting mail transfer agent (MTA) as a result of its attempt to deliver the message to the recipient address. This is required by <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>.',
        }),
    ),
    RemoteMta: RemoteMtaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MTA to which the remote MTA attempted to deliver the message, formatted as specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a> (<code>mta-name-type; mta-name</code>). This parameter typically applies only to propagating synchronous bounces.',
        }),
    ).exactOptional(),
    Status: DsnStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status code that indicates what went wrong. This is required by <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>.',
        }),
    ),
    DiagnosticCode: DiagnosticCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An extended explanation of what went wrong; this is usually an SMTP response. See <a href="https://tools.ietf.org/html/rfc3463">RFC 3463</a> for the correct formatting of this parameter.',
        }),
    ).exactOptional(),
    LastAttemptDate: LastAttemptDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the final delivery attempt was made, in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.',
        }),
    ).exactOptional(),
    ExtensionFields: ExtensionFieldListSchema.and(
      z.any().openapi({ description: 'Additional X-headers to include in the DSN.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Action', 'Status'],
    description:
      '<p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('RecipientDsnFields')

const BouncedRecipientInfoSchema = z
  .object({
    Recipient: AddressSchema.and(
      z.any().openapi({ description: 'The email address of the recipient of the bounced email.' }),
    ),
    RecipientArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to receive email for the recipient of the bounced email. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
        }),
    ).exactOptional(),
    BounceType: BounceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason for the bounce. You must provide either this parameter or <code>RecipientDsnFields</code>.',
        }),
    ).exactOptional(),
    RecipientDsnFields: RecipientDsnFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recipient-related DSN fields, most of which would normally be filled in automatically when provided with a <code>BounceType</code>. You must provide either this parameter or <code>BounceType</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Recipient'],
    description:
      '<p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('BouncedRecipientInfo')

const MessageRejectedSchema = z.any().openapi('MessageRejected')

const BulkEmailStatusSchema = z
  .enum([
    'Success',
    'MessageRejected',
    'MailFromDomainNotVerified',
    'ConfigurationSetDoesNotExist',
    'TemplateDoesNotExist',
    'AccountSuspended',
    'AccountThrottled',
    'AccountDailyQuotaExceeded',
    'InvalidSendingPoolName',
    'AccountSendingPaused',
    'ConfigurationSetSendingPaused',
    'InvalidParameterValue',
    'TransientFailure',
    'Failed',
  ])
  .openapi('BulkEmailStatus')

const ErrorSchema = z.string().openapi('Error')

const BulkEmailDestinationStatusSchema = z
  .object({
    Status: BulkEmailStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of a message sent using the <code>SendBulkTemplatedEmail</code> operation.</p> <p>Possible values for this parameter include:</p> <ul> <li> <p> <code>Success</code>: Amazon SES accepted the message, and will attempt to deliver it to the recipients.</p> </li> <li> <p> <code>MessageRejected</code>: The message was rejected because it contained a virus.</p> </li> <li> <p> <code>MailFromDomainNotVerified</code>: The sender's email address or domain was not verified.</p> </li> <li> <p> <code>ConfigurationSetDoesNotExist</code>: The configuration set you specified does not exist.</p> </li> <li> <p> <code>TemplateDoesNotExist</code>: The template you specified does not exist.</p> </li> <li> <p> <code>AccountSuspended</code>: Your account has been shut down because of issues related to your email sending practices.</p> </li> <li> <p> <code>AccountThrottled</code>: The number of emails you can send has been reduced because your account has exceeded its allocated sending limit.</p> </li> <li> <p> <code>AccountDailyQuotaExceeded</code>: You have reached or exceeded the maximum number of emails you can send from your account in a 24-hour period.</p> </li> <li> <p> <code>InvalidSendingPoolName</code>: The configuration set you specified refers to an IP pool that does not exist.</p> </li> <li> <p> <code>AccountSendingPaused</code>: Email sending for the Amazon SES account was disabled using the <a>UpdateAccountSendingEnabled</a> operation.</p> </li> <li> <p> <code>ConfigurationSetSendingPaused</code>: Email sending for this configuration set was disabled using the <a>UpdateConfigurationSetSendingEnabled</a> operation.</p> </li> <li> <p> <code>InvalidParameterValue</code>: One or more of the parameters you specified when calling this operation was invalid. See the error message for additional information.</p> </li> <li> <p> <code>TransientFailure</code>: Amazon SES was unable to process your request because of a temporary issue.</p> </li> <li> <p> <code>Failed</code>: Amazon SES was unable to process your request. See the error message for additional information.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Error: ErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of an error that prevented a message being sent using the <code>SendBulkTemplatedEmail</code> operation.',
        }),
    ).exactOptional(),
    MessageId: MessageIdSchema.and(
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
      'An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.',
    required: [],
  })
  .openapi('BulkEmailDestinationStatus')

const BulkEmailDestinationStatusListSchema = z
  .array(BulkEmailDestinationStatusSchema)
  .openapi('BulkEmailDestinationStatusList')

const SendBulkTemplatedEmailResponseSchema = z
  .object({
    Status: BulkEmailDestinationStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendBulkTemplatedEmail</code> action.',
        }),
    ),
  })
  .openapi({ required: ['Status'] })
  .openapi('SendBulkTemplatedEmailResponse')

const MessageTagNameSchema = z.string().openapi('MessageTagName')

const MessageTagValueSchema = z.string().openapi('MessageTagValue')

const MessageTagSchema = z
  .object({
    Name: MessageTagNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the tag. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 256 characters.</p> </li> </ul>',
        }),
    ),
    Value: MessageTagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of the tag. The value must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 256 characters.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      '<p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('MessageTag')

const DestinationSchema = z
  .object({
    ToAddresses: AddressListSchema.and(
      z.any().openapi({ description: 'The recipients to place on the To: line of the message.' }),
    ).exactOptional(),
    CcAddresses: AddressListSchema.and(
      z.any().openapi({ description: 'The recipients to place on the CC: line of the message.' }),
    ).exactOptional(),
    BccAddresses: AddressListSchema.and(
      z.any().openapi({ description: 'The recipients to place on the BCC: line of the message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
    required: [],
  })
  .openapi('Destination')

const MessageTagListSchema = z.array(MessageTagSchema).openapi('MessageTagList')

const TemplateDataSchema = z.string().max(262144).openapi('TemplateData')

const BulkEmailDestinationSchema = z
  .object({
    Destination: DestinationSchema,
    ReplacementTags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendBulkTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
        }),
    ).exactOptional(),
    ReplacementTemplateData: TemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Destination'],
    description:
      'An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations.',
  })
  .openapi('BulkEmailDestination')

const MailFromDomainNotVerifiedExceptionSchema = z
  .any()
  .openapi('MailFromDomainNotVerifiedException')

const ConfigurationSetSendingPausedExceptionSchema = z
  .any()
  .openapi('ConfigurationSetSendingPausedException')

const AccountSendingPausedExceptionSchema = z.any().openapi('AccountSendingPausedException')

const SendCustomVerificationEmailResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendCustomVerificationEmail</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response received when attempting to send the custom verification email.',
    required: [],
  })
  .openapi('SendCustomVerificationEmailResponse')

const ProductionAccessNotGrantedExceptionSchema = z
  .any()
  .openapi('ProductionAccessNotGrantedException')

const SendEmailResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendEmail</code> action. ',
        }),
    ),
  })
  .openapi({
    required: ['MessageId'],
    example: { MessageId: 'EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000' },
    description: 'Represents a unique message ID.',
  })
  .openapi('SendEmailResponse')

const MessageDataSchema = z.string().openapi('MessageData')

const CharsetSchema = z.string().openapi('Charset')

const ContentSchema = z
  .object({
    Data: MessageDataSchema.and(
      z.any().openapi({ description: 'The textual data of the content.' }),
    ),
    Charset: CharsetSchema.and(
      z.any().openapi({ description: 'The character set of the content.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Data'],
    description:
      '<p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>',
  })
  .openapi('Content')

const BodySchema = z
  .object({
    Text: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).',
        }),
    ).exactOptional(),
    Html: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.',
    required: [],
  })
  .openapi('Body')

const SendRawEmailResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendRawEmail</code> action. ',
        }),
    ),
  })
  .openapi({
    required: ['MessageId'],
    example: { MessageId: 'EXAMPLEf3f73d99b-c63fb06f-d263-41f8-a0fb-d0dc67d56c07-000000' },
    description: 'Represents a unique message ID.',
  })
  .openapi('SendRawEmailResponse')

const RawMessageDataSchema = z.string().openapi('RawMessageData')

const SendTemplatedEmailResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique message identifier returned from the <code>SendTemplatedEmail</code> action. ',
        }),
    ),
  })
  .openapi({ required: ['MessageId'] })
  .openapi('SendTemplatedEmailResponse')

const SetActiveReceiptRuleSetResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetActiveReceiptRuleSetResponse')

const SetIdentityDkimEnabledResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetIdentityDkimEnabledResponse')

const SetIdentityFeedbackForwardingEnabledResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetIdentityFeedbackForwardingEnabledResponse')

const SetIdentityHeadersInNotificationsEnabledResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetIdentityHeadersInNotificationsEnabledResponse')

const SetIdentityMailFromDomainResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetIdentityMailFromDomainResponse')

const SetIdentityNotificationTopicResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetIdentityNotificationTopicResponse')

const SetReceiptRulePositionResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('SetReceiptRulePositionResponse')

const RenderedTemplateSchema = z.string().openapi('RenderedTemplate')

const TestRenderTemplateResponseSchema = z
  .object({
    RenderedTemplate: RenderedTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestRenderTemplateResponse')

const InvalidRenderingParameterExceptionSchema = z
  .any()
  .openapi('InvalidRenderingParameterException')

const MissingRenderingAttributeExceptionSchema = z
  .any()
  .openapi('MissingRenderingAttributeException')

const UpdateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('UpdateConfigurationSetEventDestinationResponse')

const UpdateConfigurationSetTrackingOptionsResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('UpdateConfigurationSetTrackingOptionsResponse')

const UpdateReceiptRuleResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('UpdateReceiptRuleResponse')

const UpdateTemplateResponseSchema = z.object({}).openapi('UpdateTemplateResponse')

const VerifyDomainDkimResponseSchema = z
  .object({
    DkimTokens: VerificationTokenListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of character strings that represent the domain\'s identity. If the identity is an email address, the tokens represent the domain of that address.</p> <p>Using these tokens, you need to create DNS CNAME records that point to DKIM public keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you\'ve updated your DNS records. This detection process might take up to 72 hours. After successful detection, Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.)</p> <p>For more information about creating DNS records using DKIM tokens, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['DkimTokens'],
    example: {
      DkimTokens: [
        'EXAMPLEq76owjnks3lnluwg65scbemvw',
        'EXAMPLEi3dnsj67hstzaj673klariwx2',
        'EXAMPLEwfbtcukvimehexktmdtaz6naj',
      ],
    },
    description:
      'Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.',
  })
  .openapi('VerifyDomainDkimResponse')

const VerifyDomainIdentityResponseSchema = z
  .object({
    VerificationToken: VerificationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A TXT record that you must place in the DNS settings of the domain to complete domain verification with Amazon SES.</p> <p>As Amazon SES searches for the TXT record, the domain\'s verification status is "Pending". When Amazon SES detects the record, the domain\'s verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain\'s verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p>',
        }),
    ),
  })
  .openapi({
    required: ['VerificationToken'],
    example: { VerificationToken: 'eoEmxw+YaYhb3h3iVJHuXMJXqeu1q1/wwmvjuEXAMPLE' },
    description:
      'Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.',
  })
  .openapi('VerifyDomainIdentityResponse')

const VerifyEmailIdentityResponseSchema = z
  .object({})
  .openapi({ description: 'An empty element returned on a successful request.' })
  .openapi('VerifyEmailIdentityResponse')

const BouncedRecipientInfoListSchema = z
  .array(BouncedRecipientInfoSchema)
  .openapi('BouncedRecipientInfoList')

const BulkEmailDestinationListSchema = z
  .array(BulkEmailDestinationSchema)
  .openapi('BulkEmailDestinationList')

const CloneReceiptRuleSetRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
        }),
    ),
    OriginalRuleSetName: ReceiptRuleSetNameSchema.and(
      z.any().openapi({ description: 'The name of the rule set to clone.' }),
    ),
  })
  .openapi({
    required: ['RuleSetName', 'OriginalRuleSetName'],
    title: 'CloneReceiptRuleSetRequest',
    description:
      'Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CloneReceiptRuleSetRequest')

const ConfigurationSetAttributeListSchema = z
  .array(ConfigurationSetAttributeSchema)
  .openapi('ConfigurationSetAttributeList')

const CreateConfigurationSetEventDestinationRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set that the event destination should be associated with.',
        }),
    ),
    EventDestination: EventDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that describes the AWS service that email sending event information will be published to.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName', 'EventDestination'],
    title: 'CreateConfigurationSetEventDestinationRequest',
    description:
      'Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateConfigurationSetEventDestinationRequest')

const CreateConfigurationSetRequestSchema = z
  .object({
    ConfigurationSet: ConfigurationSetSchema.and(
      z
        .any()
        .openapi({
          description: 'A data structure that contains the name of the configuration set.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationSet'],
    title: 'CreateConfigurationSetRequest',
    description:
      'Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateConfigurationSetRequest')

const CreateConfigurationSetTrackingOptionsRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set that the tracking options should be associated with.',
        }),
    ),
    TrackingOptions: TrackingOptionsSchema,
  })
  .openapi({
    required: ['ConfigurationSetName', 'TrackingOptions'],
    title: 'CreateConfigurationSetTrackingOptionsRequest',
    description:
      'Represents a request to create an open and click tracking option object in a configuration set. ',
  })
  .openapi('CreateConfigurationSetTrackingOptionsRequest')

const CreateCustomVerificationEmailTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the custom verification email template.' }),
    ),
    FromEmailAddress: FromAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ),
    TemplateSubject: SubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the custom verification email.' }),
    ),
    TemplateContent: TemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.',
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

const CreateReceiptFilterRequestSchema = z
  .object({
    Filter: ReceiptFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.',
        }),
    ),
  })
  .openapi({
    required: ['Filter'],
    title: 'CreateReceiptFilterRequest',
    description:
      'Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateReceiptFilterRequest')

const CreateReceiptRuleRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the rule set that the receipt rule will be added to.',
        }),
    ),
    After: ReceiptRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an existing rule after which the new rule will be placed. If this parameter is null, the new rule will be inserted at the beginning of the rule list.',
        }),
    ).exactOptional(),
    Rule: ReceiptRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.",
        }),
    ),
  })
  .openapi({
    required: ['RuleSetName', 'Rule'],
    title: 'CreateReceiptRuleRequest',
    description:
      'Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateReceiptRuleRequest')

const CreateReceiptRuleSetRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['RuleSetName'],
    title: 'CreateReceiptRuleSetRequest',
    description:
      'Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateReceiptRuleSetRequest')

const CreateTemplateRequestSchema = z
  .object({
    Template: TemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
        }),
    ),
  })
  .openapi({
    required: ['Template'],
    title: 'CreateTemplateRequest',
    description:
      'Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('CreateTemplateRequest')

const DeleteConfigurationSetEventDestinationRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set from which to delete the event destination.',
        }),
    ),
    EventDestinationName: EventDestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the event destination to delete.' }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName', 'EventDestinationName'],
    title: 'DeleteConfigurationSetEventDestinationRequest',
    description:
      'Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteConfigurationSetEventDestinationRequest')

const DeleteConfigurationSetRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration set to delete.' }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName'],
    title: 'DeleteConfigurationSetRequest',
    description:
      'Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteConfigurationSetRequest')

const DeleteConfigurationSetTrackingOptionsRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set from which you want to delete the tracking options.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName'],
    title: 'DeleteConfigurationSetTrackingOptionsRequest',
    description:
      'Represents a request to delete open and click tracking options in a configuration set. ',
  })
  .openapi('DeleteConfigurationSetTrackingOptionsRequest')

const DeleteCustomVerificationEmailTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom verification email template that you want to delete.',
        }),
    ),
  })
  .openapi({
    required: ['TemplateName'],
    title: 'DeleteCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to delete an existing custom verification email template.',
  })
  .openapi('DeleteCustomVerificationEmailTemplateRequest')

const DeleteIdentityPolicyRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identity that is associated with the policy that you want to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
        }),
    ),
    PolicyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the policy to be deleted.' }),
    ),
  })
  .openapi({
    required: ['Identity', 'PolicyName'],
    title: 'DeleteIdentityPolicyRequest',
    description:
      'Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteIdentityPolicyRequest')

const DeleteIdentityRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity to be removed from the list of identities for the AWS Account.',
        }),
    ),
  })
  .openapi({
    required: ['Identity'],
    title: 'DeleteIdentityRequest',
    description:
      'Represents a request to delete one of your Amazon SES identities (an email address or domain).',
  })
  .openapi('DeleteIdentityRequest')

const DeleteReceiptFilterRequestSchema = z
  .object({
    FilterName: ReceiptFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the IP address filter to delete.' }),
    ),
  })
  .openapi({
    required: ['FilterName'],
    title: 'DeleteReceiptFilterRequest',
    description:
      'Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteReceiptFilterRequest')

const DeleteReceiptRuleRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the receipt rule set that contains the receipt rule to delete.',
        }),
    ),
    RuleName: ReceiptRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the receipt rule to delete.' }),
    ),
  })
  .openapi({
    required: ['RuleSetName', 'RuleName'],
    title: 'DeleteReceiptRuleRequest',
    description:
      'Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteReceiptRuleRequest')

const DeleteReceiptRuleSetRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z.any().openapi({ description: 'The name of the receipt rule set to delete.' }),
    ),
  })
  .openapi({
    required: ['RuleSetName'],
    title: 'DeleteReceiptRuleSetRequest',
    description:
      'Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteReceiptRuleSetRequest')

const DeleteTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template to be deleted.' }),
    ),
  })
  .openapi({
    required: ['TemplateName'],
    title: 'DeleteTemplateRequest',
    description:
      'Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DeleteTemplateRequest')

const DeleteVerifiedEmailAddressRequestSchema = z
  .object({
    EmailAddress: AddressSchema.and(
      z
        .any()
        .openapi({
          description: 'An email address to be removed from the list of verified addresses.',
        }),
    ),
  })
  .openapi({
    required: ['EmailAddress'],
    title: 'DeleteVerifiedEmailAddressRequest',
    description:
      'Represents a request to delete an email address from the list of email addresses you have attempted to verify under your AWS account.',
  })
  .openapi('DeleteVerifiedEmailAddressRequest')

const DescribeActiveReceiptRuleSetRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeActiveReceiptRuleSetRequest',
    description:
      'Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DescribeActiveReceiptRuleSetRequest')

const DescribeConfigurationSetRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration set to describe.' }),
    ),
    ConfigurationSetAttributeNames: ConfigurationSetAttributeListSchema.and(
      z.any().openapi({ description: 'A list of configuration set attributes to return.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationSetName'],
    title: 'DescribeConfigurationSetRequest',
    description:
      'Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DescribeConfigurationSetRequest')

const DescribeReceiptRuleRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the receipt rule set that the receipt rule belongs to.',
        }),
    ),
    RuleName: ReceiptRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the receipt rule.' }),
    ),
  })
  .openapi({
    required: ['RuleSetName', 'RuleName'],
    title: 'DescribeReceiptRuleRequest',
    description:
      'Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DescribeReceiptRuleRequest')

const DescribeReceiptRuleSetRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z.any().openapi({ description: 'The name of the receipt rule set to describe.' }),
    ),
  })
  .openapi({
    required: ['RuleSetName'],
    title: 'DescribeReceiptRuleSetRequest',
    description:
      'Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('DescribeReceiptRuleSetRequest')

const DomainSchema = z.string().openapi('Domain')

const ExplanationSchema = z.string().openapi('Explanation')

const GetCustomVerificationEmailTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom verification email template that you want to retrieve.',
        }),
    ),
  })
  .openapi({
    required: ['TemplateName'],
    title: 'GetCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to retrieve an existing custom verification email template.',
  })
  .openapi('GetCustomVerificationEmailTemplateRequest')

const GetIdentityDkimAttributesRequestSchema = z
  .object({
    Identities: IdentityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more verified identities - email addresses, domains, or both.',
        }),
    ),
  })
  .openapi({
    required: ['Identities'],
    title: 'GetIdentityDkimAttributesRequest',
    description:
      'Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('GetIdentityDkimAttributesRequest')

const GetIdentityMailFromDomainAttributesRequestSchema = z
  .object({
    Identities: IdentityListSchema.and(
      z.any().openapi({ description: 'A list of one or more identities.' }),
    ),
  })
  .openapi({
    required: ['Identities'],
    title: 'GetIdentityMailFromDomainAttributesRequest',
    description:
      'Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('GetIdentityMailFromDomainAttributesRequest')

const GetIdentityNotificationAttributesRequestSchema = z
  .object({
    Identities: IdentityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Identities'],
    title: 'GetIdentityNotificationAttributesRequest',
    description:
      'Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('GetIdentityNotificationAttributesRequest')

const GetIdentityPoliciesRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identity for which the policies will be retrieved. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
        }),
    ),
    PolicyNames: PolicyNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use <code>ListIdentityPolicies</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Identity', 'PolicyNames'],
    title: 'GetIdentityPoliciesRequest',
    description:
      'Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('GetIdentityPoliciesRequest')

const GetIdentityVerificationAttributesRequestSchema = z
  .object({
    Identities: IdentityListSchema.and(z.any().openapi({ description: 'A list of identities.' })),
  })
  .openapi({
    required: ['Identities'],
    title: 'GetIdentityVerificationAttributesRequest',
    description:
      'Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('GetIdentityVerificationAttributesRequest')

const GetTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template you want to retrieve.' }),
    ),
  })
  .openapi({ required: ['TemplateName'], title: 'GetTemplateRequest' })
  .openapi('GetTemplateRequest')

const IdentityTypeSchema = z.enum(['EmailAddress', 'Domain']).openapi('IdentityType')

const MaxItemsSchema = z.int().openapi('MaxItems')

const ListConfigurationSetsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position of the configuration set in the configuration set list.',
        }),
    ).exactOptional(),
    MaxItems: MaxItemsSchema.and(
      z.any().openapi({ description: 'The number of configuration sets to return.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListConfigurationSetsRequest',
    description:
      'Represents a request to list the configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
    required: [],
  })
  .openapi('ListConfigurationSetsRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListCustomVerificationEmailTemplatesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array the contains the name and creation time stamp for each template in your Amazon SES account.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of custom verification email templates to return. This value must be at least 1 and less than or equal to 50. If you do not specify a value, or if you specify a value less than 1 or greater than 50, the operation will return up to 50 results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListCustomVerificationEmailTemplatesRequest',
    description:
      '<p>Represents a request to list the existing custom verification email templates for your account.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('ListCustomVerificationEmailTemplatesRequest')

const ListIdentitiesRequestSchema = z
  .object({
    IdentityType: IdentityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to use for pagination.' }),
    ).exactOptional(),
    MaxItems: MaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of identities per page. Possible values are 1-1000 inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListIdentitiesRequest',
    description:
      'Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status.',
    required: [],
  })
  .openapi('ListIdentitiesRequest')

const ListIdentityPoliciesRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identity that is associated with the policy for which the policies will be listed. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Identity'],
    title: 'ListIdentityPoliciesRequest',
    description:
      'Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('ListIdentityPoliciesRequest')

const ListReceiptFiltersRequestSchema = z
  .object({})
  .openapi({
    title: 'ListReceiptFiltersRequest',
    description:
      'Represents a request to list the IP address filters that exist under your AWS account. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('ListReceiptFiltersRequest')

const ListReceiptRuleSetsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token returned from a previous call to <code>ListReceiptRuleSets</code> to indicate the position in the receipt rule set list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListReceiptRuleSetsRequest',
    description:
      'Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
    required: [],
  })
  .openapi('ListReceiptRuleSetsRequest')

const ListTemplatesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token returned from a previous call to <code>ListTemplates</code> to indicate the position in the list of email templates.',
        }),
    ).exactOptional(),
    MaxItems: MaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of templates to return. This value must be at least 1 and less than or equal to 10. If you do not specify a value, or if you specify a value less than 1 or greater than 10, the operation will return up to 10 results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTemplatesRequest', required: [] })
  .openapi('ListTemplatesRequest')

const MessageSchema = z
  .object({
    Subject: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            "The subject of the message: A short summary of the content, which will appear in the recipient's inbox.",
        }),
    ),
    Body: BodySchema.and(z.any().openapi({ description: 'The message body.' })),
  })
  .openapi({
    required: ['Subject', 'Body'],
    description: 'Represents the message to be sent, composed of a subject and a body.',
  })
  .openapi('Message')

const MessageDsnSchema = z
  .object({
    ReportingMta: ReportingMtaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reporting MTA that attempted to deliver the message, formatted as specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a> (<code>mta-name-type; mta-name</code>). The default value is <code>dns; inbound-smtp.[region].amazonaws.com</code>.',
        }),
    ),
    ArrivalDate: ArrivalDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the message was received by the reporting mail transfer agent (MTA), in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.',
        }),
    ).exactOptional(),
    ExtensionFields: ExtensionFieldListSchema.and(
      z.any().openapi({ description: 'Additional X-headers to include in the DSN.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReportingMta'],
    description:
      '<p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>',
  })
  .openapi('MessageDsn')

const NotificationTypeSchema = z
  .enum(['Bounce', 'Complaint', 'Delivery'])
  .openapi('NotificationType')

const PutConfigurationSetDeliveryOptionsRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set that you want to specify the delivery options for.',
        }),
    ),
    DeliveryOptions: DeliveryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationSetName'],
    title: 'PutConfigurationSetDeliveryOptionsRequest',
    description: 'A request to modify the delivery options for a configuration set.',
  })
  .openapi('PutConfigurationSetDeliveryOptionsRequest')

const PutIdentityPolicyRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identity that the policy will apply to. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
        }),
    ),
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
        }),
    ),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer Guide</a>. </p>',
        }),
    ),
  })
  .openapi({
    required: ['Identity', 'PolicyName', 'Policy'],
    title: 'PutIdentityPolicyRequest',
    description:
      'Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('PutIdentityPolicyRequest')

const RawMessageSchema = z
  .object({
    Data: RawMessageDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The raw data of the message. This data needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an AWS SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, and MIME encoding.</p> <p>The To:, CC:, and BCC: headers in the raw message can contain a group list.</p> <p>If you are using <code>SendRawEmail</code> with sending authorization, you can include X-headers in the raw message to specify the "Source," "From," and "Return-Path" addresses. For more information, see the documentation for <code>SendRawEmail</code>. </p> <important> <p>Do not include these X-headers in the DKIM signature, because they are removed by Amazon SES before sending the email.</p> </important> <p>For more information, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['Data'], description: 'Represents the raw data of the message.' })
  .openapi('RawMessage')

const ReceiptRuleNamesListSchema = z.array(ReceiptRuleNameSchema).openapi('ReceiptRuleNamesList')

const ReorderReceiptRuleSetRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z.any().openapi({ description: 'The name of the receipt rule set to reorder.' }),
    ),
    RuleNames: ReceiptRuleNamesListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of the specified receipt rule set's receipt rules in the order that you want to put them.",
        }),
    ),
  })
  .openapi({
    required: ['RuleSetName', 'RuleNames'],
    title: 'ReorderReceiptRuleSetRequest',
    description:
      'Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('ReorderReceiptRuleSetRequest')

const SendBounceRequestSchema = z
  .object({
    OriginalMessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The message ID of the message to be bounced.' }),
    ),
    BounceSender: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.',
        }),
    ),
    Explanation: ExplanationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Human-readable text for the bounce message to explain the failure. If not specified, the text will be auto-generated based on the bounced recipient information.',
        }),
    ).exactOptional(),
    MessageDsn: MessageDsnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Message-related DSN fields. If not specified, Amazon SES will choose the values.',
        }),
    ).exactOptional(),
    BouncedRecipientInfoList: BouncedRecipientInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one <code>BouncedRecipientInfo</code> in the list.',
        }),
    ),
    BounceSenderArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OriginalMessageId', 'BounceSender', 'BouncedRecipientInfoList'],
    title: 'SendBounceRequest',
    description:
      'Represents a request to send a bounce message to the sender of an email you received through Amazon SES.',
  })
  .openapi('SendBounceRequest')

const SendBulkTemplatedEmailRequestSchema = z
  .object({
    Source: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>',
        }),
    ),
    SourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    ReplyToAddresses: AddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.',
        }),
    ).exactOptional(),
    ReturnPath: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. ",
        }),
    ).exactOptional(),
    ReturnPathArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set to use when you send an email using <code>SendBulkTemplatedEmail</code>.',
        }),
    ).exactOptional(),
    DefaultTags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using <code>SendBulkTemplatedEmail</code>.',
        }),
    ).exactOptional(),
    Template: TemplateNameSchema.and(
      z.any().openapi({ description: 'The template to use when sending this email.' }),
    ),
    TemplateArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the template to use when sending this email.' }),
    ).exactOptional(),
    DefaultTemplateData: TemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available.</p> <p>The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</p>',
        }),
    ).exactOptional(),
    Destinations: BulkEmailDestinationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more <code>Destination</code> objects. All of the recipients in a <code>Destination</code> will receive the same version of the email. You can specify up to 50 <code>Destination</code> objects within a <code>Destinations</code> array.',
        }),
    ),
  })
  .openapi({
    required: ['Source', 'Template', 'Destinations'],
    title: 'SendBulkTemplatedEmailRequest',
    description:
      'Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SendBulkTemplatedEmailRequest')

const SendCustomVerificationEmailRequestSchema = z
  .object({
    EmailAddress: AddressSchema.and(
      z.any().openapi({ description: 'The email address to verify.' }),
    ),
    TemplateName: TemplateNameSchema.and(
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
    Source: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>',
        }),
    ),
    Destination: DestinationSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination for this email, composed of To:, CC:, and BCC: fields.',
        }),
    ),
    Message: MessageSchema.and(z.any().openapi({ description: 'The message to be sent.' })),
    ReplyToAddresses: AddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.',
        }),
    ).exactOptional(),
    ReturnPath: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. ",
        }),
    ).exactOptional(),
    SourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    ReturnPathArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    Tags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set to use when you send an email using <code>SendEmail</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Source', 'Destination', 'Message'],
    title: 'SendEmailRequest',
    description:
      'Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SendEmailRequest')

const SendRawEmailRequestSchema = z
  .object({
    Source: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identity\'s email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in<a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note> <p>If you specify the <code>Source</code> parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.</p>',
        }),
    ).exactOptional(),
    Destinations: AddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.',
        }),
    ).exactOptional(),
    RawMessage: RawMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The raw email message itself. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by a blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html">Unsupported Attachment Types</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>The entire message must be base64-encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Sending Raw Email</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> </ul>',
        }),
    ),
    FromArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-FROM-ARN</code> in the raw message of the email. If you use both the <code>FromArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>FromArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>',
        }),
    ).exactOptional(),
    SourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-SOURCE-ARN</code> in the raw message of the email. If you use both the <code>SourceArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>SourceArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>',
        }),
    ).exactOptional(),
    ReturnPathArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-RETURN-PATH-ARN</code> in the raw message of the email. If you use both the <code>ReturnPathArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>ReturnPathArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>',
        }),
    ).exactOptional(),
    Tags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendRawEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set to use when you send an email using <code>SendRawEmail</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RawMessage'],
    title: 'SendRawEmailRequest',
    description:
      'Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SendRawEmailRequest')

const SendTemplatedEmailRequestSchema = z
  .object({
    Source: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in<a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>',
        }),
    ),
    Destination: DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination for this email, composed of To:, CC:, and BCC: fields. A Destination can include up to 50 recipients across these three fields.',
        }),
    ),
    ReplyToAddresses: AddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.',
        }),
    ).exactOptional(),
    ReturnPath: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. ",
        }),
    ).exactOptional(),
    SourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    ReturnPathArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    Tags: MessageTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
        }),
    ).exactOptional(),
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set to use when you send an email using <code>SendTemplatedEmail</code>.',
        }),
    ).exactOptional(),
    Template: TemplateNameSchema.and(
      z.any().openapi({ description: 'The template to use when sending this email.' }),
    ),
    TemplateArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the template to use when sending this email.' }),
    ).exactOptional(),
    TemplateData: TemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
        }),
    ),
  })
  .openapi({
    required: ['Source', 'Destination', 'Template', 'TemplateData'],
    title: 'SendTemplatedEmailRequest',
    description:
      'Represents a request to send a templated email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SendTemplatedEmailRequest')

const SetActiveReceiptRuleSetRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the receipt rule set to make active. Setting this value to null disables all email receiving.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SetActiveReceiptRuleSetRequest',
    description:
      'Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
    required: [],
  })
  .openapi('SetActiveReceiptRuleSetRequest')

const SetIdentityDkimEnabledRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description: 'The identity for which DKIM signing should be enabled or disabled.',
        }),
    ),
    DkimEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets whether DKIM signing is enabled for an identity. Set to <code>true</code> to enable DKIM signing for this identity; <code>false</code> to disable it. ',
        }),
    ),
  })
  .openapi({
    required: ['Identity', 'DkimEnabled'],
    title: 'SetIdentityDkimEnabledRequest',
    description:
      'Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SetIdentityDkimEnabledRequest')

const SetIdentityFeedbackForwardingEnabledRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity for which to set bounce and complaint notification forwarding. Examples: <code>user@example.com</code>, <code>example.com</code>.',
        }),
    ),
    ForwardingEnabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets whether Amazon SES will forward bounce and complaint notifications as email. <code>true</code> specifies that Amazon SES will forward bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. <code>false</code> specifies that Amazon SES will publish bounce and complaint notifications only through Amazon SNS. This value can only be set to <code>false</code> when Amazon SNS topics are set for both <code>Bounce</code> and <code>Complaint</code> notification types.',
        }),
    ),
  })
  .openapi({
    required: ['Identity', 'ForwardingEnabled'],
    title: 'SetIdentityFeedbackForwardingEnabledRequest',
    description:
      'Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SetIdentityFeedbackForwardingEnabledRequest')

const SetIdentityHeadersInNotificationsEnabledRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity for which to enable or disable headers in notifications. Examples: <code>user@example.com</code>, <code>example.com</code>.',
        }),
    ),
    NotificationType: NotificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The notification type for which to enable or disable headers in notifications. ',
        }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of <code>true</code> specifies that Amazon SES will include headers in notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in notifications.</p> <p>This value can only be set when <code>NotificationType</code> is already set to use a particular Amazon SNS topic.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Identity', 'NotificationType', 'Enabled'],
    title: 'SetIdentityHeadersInNotificationsEnabledRequest',
    description:
      'Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SetIdentityHeadersInNotificationsEnabledRequest')

const SetIdentityMailFromDomainRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The verified identity for which you want to enable or disable the specified custom MAIL FROM domain.',
        }),
    ),
    MailFromDomain: MailFromDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>), and 3) not be used to receive emails. A value of <code>null</code> disables the custom MAIL FROM setting for the identity.',
        }),
    ).exactOptional(),
    BehaviorOnMXFailure: BehaviorOnMXFailureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose <code>UseDefaultValue</code>, Amazon SES will use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose <code>RejectMessage</code>, Amazon SES will return a <code>MailFromDomainNotVerified</code> error and not send the email.</p> <p>The action specified in <code>BehaviorOnMXFailure</code> is taken when the custom MAIL FROM domain setup is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Identity'],
    title: 'SetIdentityMailFromDomainRequest',
    description:
      'Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SetIdentityMailFromDomainRequest')

const SetIdentityNotificationTopicRequestSchema = z
  .object({
    Identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identity (email address or domain) that you want to set the Amazon SNS topic for.</p> <important> <p>You can only specify a verified identity for this parameter.</p> </important> <p>You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: <code>sender@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>',
        }),
    ),
    NotificationType: NotificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of notifications that will be published to the specified Amazon SNS topic.',
        }),
    ),
    SnsTopic: NotificationTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, <code>SnsTopic</code> is cleared and publishing is disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Identity', 'NotificationType'],
    title: 'SetIdentityNotificationTopicRequest',
    description:
      'Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SetIdentityNotificationTopicRequest')

const SetReceiptRulePositionRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the receipt rule set that contains the receipt rule to reposition.',
        }),
    ),
    RuleName: ReceiptRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the receipt rule to reposition.' }),
    ),
    After: ReceiptRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the receipt rule after which to place the specified receipt rule.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleSetName', 'RuleName'],
    title: 'SetReceiptRulePositionRequest',
    description:
      'Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('SetReceiptRulePositionRequest')

const TestRenderTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template that you want to render.' }),
    ),
    TemplateData: TemplateDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
        }),
    ),
  })
  .openapi({ required: ['TemplateName', 'TemplateData'], title: 'TestRenderTemplateRequest' })
  .openapi('TestRenderTemplateRequest')

const UpdateAccountSendingEnabledRequestSchema = z
  .object({
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateAccountSendingEnabledRequest',
    description:
      'Represents a request to enable or disable the email sending capabilities for your entire Amazon SES account.',
    required: [],
  })
  .openapi('UpdateAccountSendingEnabledRequest')

const UpdateConfigurationSetEventDestinationRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set that contains the event destination that you want to update.',
        }),
    ),
    EventDestination: EventDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event destination object that you want to apply to the specified configuration set.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName', 'EventDestination'],
    title: 'UpdateConfigurationSetEventDestinationRequest',
    description:
      'Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('UpdateConfigurationSetEventDestinationRequest')

const UpdateConfigurationSetReputationMetricsEnabledRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the configuration set that you want to update.' }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether or not Amazon SES will publish reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName', 'Enabled'],
    title: 'UpdateConfigurationSetReputationMetricsEnabledRequest',
    description:
      'Represents a request to modify the reputation metric publishing settings for a configuration set.',
  })
  .openapi('UpdateConfigurationSetReputationMetricsEnabledRequest')

const UpdateConfigurationSetSendingEnabledRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the configuration set that you want to update.' }),
    ),
    Enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether email sending is enabled or disabled for the configuration set. ',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationSetName', 'Enabled'],
    title: 'UpdateConfigurationSetSendingEnabledRequest',
    description:
      'Represents a request to enable or disable the email sending capabilities for a specific configuration set.',
  })
  .openapi('UpdateConfigurationSetSendingEnabledRequest')

const UpdateConfigurationSetTrackingOptionsRequestSchema = z
  .object({
    ConfigurationSetName: ConfigurationSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set for which you want to update the custom tracking domain.',
        }),
    ),
    TrackingOptions: TrackingOptionsSchema,
  })
  .openapi({
    required: ['ConfigurationSetName', 'TrackingOptions'],
    title: 'UpdateConfigurationSetTrackingOptionsRequest',
    description: 'Represents a request to update the tracking options for a configuration set. ',
  })
  .openapi('UpdateConfigurationSetTrackingOptionsRequest')

const UpdateCustomVerificationEmailTemplateRequestSchema = z
  .object({
    TemplateName: TemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom verification email template that you want to update.',
        }),
    ),
    FromEmailAddress: FromAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address that the custom verification email is sent from.',
        }),
    ).exactOptional(),
    TemplateSubject: SubjectSchema.and(
      z.any().openapi({ description: 'The subject line of the custom verification email.' }),
    ).exactOptional(),
    TemplateContent: TemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.',
        }),
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
    required: ['TemplateName'],
    title: 'UpdateCustomVerificationEmailTemplateRequest',
    description: 'Represents a request to update an existing custom verification email template.',
  })
  .openapi('UpdateCustomVerificationEmailTemplateRequest')

const UpdateReceiptRuleRequestSchema = z
  .object({
    RuleSetName: ReceiptRuleSetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the receipt rule set that the receipt rule belongs to.',
        }),
    ),
    Rule: ReceiptRuleSchema.and(
      z
        .any()
        .openapi({
          description: 'A data structure that contains the updated receipt rule information.',
        }),
    ),
  })
  .openapi({
    required: ['RuleSetName', 'Rule'],
    title: 'UpdateReceiptRuleRequest',
    description:
      'Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('UpdateReceiptRuleRequest')

const UpdateTemplateRequestSchema = z
  .object({ Template: TemplateSchema })
  .openapi({ required: ['Template'], title: 'UpdateTemplateRequest' })
  .openapi('UpdateTemplateRequest')

const VerifyDomainDkimRequestSchema = z
  .object({
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the domain to be verified for Easy DKIM signing.' }),
    ),
  })
  .openapi({
    required: ['Domain'],
    title: 'VerifyDomainDkimRequest',
    description:
      'Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('VerifyDomainDkimRequest')

const VerifyDomainIdentityRequestSchema = z
  .object({
    Domain: DomainSchema.and(z.any().openapi({ description: 'The domain to be verified.' })),
  })
  .openapi({
    required: ['Domain'],
    title: 'VerifyDomainIdentityRequest',
    description:
      'Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('VerifyDomainIdentityRequest')

const VerifyEmailAddressRequestSchema = z
  .object({
    EmailAddress: AddressSchema.and(
      z.any().openapi({ description: 'The email address to be verified.' }),
    ),
  })
  .openapi({
    required: ['EmailAddress'],
    title: 'VerifyEmailAddressRequest',
    description:
      'Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('VerifyEmailAddressRequest')

const VerifyEmailIdentityRequestSchema = z
  .object({
    EmailAddress: AddressSchema.and(
      z.any().openapi({ description: 'The email address to be verified.' }),
    ),
  })
  .openapi({
    required: ['EmailAddress'],
    title: 'VerifyEmailIdentityRequest',
    description:
      'Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.',
  })
  .openapi('VerifyEmailIdentityRequest')

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

export const getActionCloneReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=CloneReceiptRuleSet',
  description:
    '<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CloneReceiptRuleSet',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      OriginalRuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'OriginalRuleSetName',
            in: 'query',
            required: true,
            description: 'The name of the rule set to clone.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CloneReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CloneReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CloneReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCloneReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=CloneReceiptRuleSet',
  description:
    '<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CloneReceiptRuleSet',
  request: {
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
        .literal('CloneReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CloneReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CloneReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CloneReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreateConfigurationSetRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateConfigurationSet',
  description:
    '<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateConfigurationSet',
  request: {
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
        const spread = new Map<string, string[]>([['Name', ['ConfigurationSet']]])
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
          ConfigurationSet: z
            .object({
              Name: ConfigurationSetNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of the configuration set. The name must meet the following requirements:</p> <ul> <li> <p>Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain 64 characters or fewer.</p> </li> </ul>',
                  }),
              ),
            })
            .openapi({
              param: {
                name: 'ConfigurationSet',
                in: 'query',
                required: true,
                description: 'A data structure that contains the name of the configuration set.',
                schema: {
                  type: 'object',
                  required: ['Name'],
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/ConfigurationSetName' },
                        {
                          description:
                            '<p>The name of the configuration set. The name must meet the following requirements:</p> <ul> <li> <p>Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain 64 characters or fewer.</p> </li> </ul>',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['Name'],
              description:
                '<p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>',
            }),
          Action: z
            .literal('CreateConfigurationSet')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateConfigurationSet'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateConfigurationSetResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetAlreadyExistsException',
      content: { 'text/xml': { schema: ConfigurationSetAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationSetException',
      content: { 'text/xml': { schema: InvalidConfigurationSetExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCreateConfigurationSetRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateConfigurationSet',
  description:
    '<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateConfigurationSet',
  request: {
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
        .literal('CreateConfigurationSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateConfigurationSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateConfigurationSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateConfigurationSetResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetAlreadyExistsException',
      content: { 'text/xml': { schema: ConfigurationSetAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationSetException',
      content: { 'text/xml': { schema: InvalidConfigurationSetExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreateConfigurationSetEventDestinationRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateConfigurationSetEventDestination',
  description:
    '<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateConfigurationSetEventDestination',
  request: {
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
          ['Name', ['EventDestination']],
          ['Enabled', ['EventDestination']],
          ['MatchingEventTypes', ['EventDestination']],
          ['KinesisFirehoseDestination', ['EventDestination']],
          ['CloudWatchDestination', ['EventDestination']],
          ['SNSDestination', ['EventDestination']],
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
          ConfigurationSetName: z
            .string()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: true,
                description:
                  'The name of the configuration set that the event destination should be associated with.',
                schema: { type: 'string' },
              },
            }),
          EventDestination: z
            .object({
              Name: EventDestinationNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of the event destination. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                  }),
              ),
              Enabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  EnabledSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to <code>true</code> to enable publishing to this destination; set to <code>false</code> to prevent publishing to this destination. The default value is <code>false</code>.',
                    }),
                )
                .exactOptional(),
              MatchingEventTypes: EventTypesSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The type of email sending events to publish to the event destination.',
                  }),
              ),
              KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.',
                  }),
              ).exactOptional(),
              CloudWatchDestination: CloudWatchDestinationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.',
                  }),
              ).exactOptional(),
              SNSDestination: SNSDestinationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.',
                  }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'EventDestination',
                in: 'query',
                required: true,
                description:
                  'An object that describes the AWS service that email sending event information will be published to.',
                schema: {
                  type: 'object',
                  required: ['Name', 'MatchingEventTypes'],
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/EventDestinationName' },
                        {
                          description:
                            '<p>The name of the event destination. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                        },
                      ],
                    },
                    Enabled: {
                      allOf: [
                        { $ref: '#/components/schemas/Enabled' },
                        {
                          description:
                            'Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to <code>true</code> to enable publishing to this destination; set to <code>false</code> to prevent publishing to this destination. The default value is <code>false</code>.',
                        },
                      ],
                    },
                    MatchingEventTypes: {
                      allOf: [
                        { $ref: '#/components/schemas/EventTypes' },
                        {
                          description:
                            'The type of email sending events to publish to the event destination.',
                        },
                      ],
                    },
                    KinesisFirehoseDestination: {
                      allOf: [
                        { $ref: '#/components/schemas/KinesisFirehoseDestination' },
                        {
                          description:
                            'An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.',
                        },
                      ],
                    },
                    CloudWatchDestination: {
                      allOf: [
                        { $ref: '#/components/schemas/CloudWatchDestination' },
                        {
                          description:
                            'An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.',
                        },
                      ],
                    },
                    SNSDestination: {
                      allOf: [
                        { $ref: '#/components/schemas/SNSDestination' },
                        {
                          description:
                            'An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['Name', 'MatchingEventTypes'],
              description:
                '<p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
            }),
          Action: z
            .literal('CreateConfigurationSetEventDestination')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateConfigurationSetEventDestination'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateConfigurationSetEventDestinationResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EventDestinationAlreadyExistsException',
      content: { 'text/xml': { schema: EventDestinationAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidCloudWatchDestinationException',
      content: { 'text/xml': { schema: InvalidCloudWatchDestinationExceptionSchema } },
    },
    483: {
      description: 'InvalidFirehoseDestinationException',
      content: { 'text/xml': { schema: InvalidFirehoseDestinationExceptionSchema } },
    },
    484: {
      description: 'InvalidSNSDestinationException',
      content: { 'text/xml': { schema: InvalidSNSDestinationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCreateConfigurationSetEventDestinationRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateConfigurationSetEventDestination',
  description:
    '<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateConfigurationSetEventDestination',
  request: {
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
        .literal('CreateConfigurationSetEventDestination')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateConfigurationSetEventDestination'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: CreateConfigurationSetEventDestinationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateConfigurationSetEventDestinationResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EventDestinationAlreadyExistsException',
      content: { 'text/xml': { schema: EventDestinationAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidCloudWatchDestinationException',
      content: { 'text/xml': { schema: InvalidCloudWatchDestinationExceptionSchema } },
    },
    483: {
      description: 'InvalidFirehoseDestinationException',
      content: { 'text/xml': { schema: InvalidFirehoseDestinationExceptionSchema } },
    },
    484: {
      description: 'InvalidSNSDestinationException',
      content: { 'text/xml': { schema: InvalidSNSDestinationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreateConfigurationSetTrackingOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateConfigurationSetTrackingOptions',
  description:
    '<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_CreateConfigurationSetTrackingOptions',
  request: {
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
        const spread = new Map<string, string[]>([['CustomRedirectDomain', ['TrackingOptions']]])
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
          ConfigurationSetName: z
            .string()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: true,
                description:
                  'The name of the configuration set that the tracking options should be associated with.',
                schema: { type: 'string' },
              },
            }),
          TrackingOptions: z
            .object({
              CustomRedirectDomain: CustomRedirectDomainSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The custom subdomain that will be used to redirect email recipients to the Amazon SES event tracking domain.',
                  }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'TrackingOptions',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    CustomRedirectDomain: {
                      allOf: [
                        { $ref: '#/components/schemas/CustomRedirectDomain' },
                        {
                          description:
                            'The custom subdomain that will be used to redirect email recipients to the Amazon SES event tracking domain.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>',
                },
              },
              description:
                '<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>',
              required: [],
            }),
          Action: z
            .literal('CreateConfigurationSetTrackingOptions')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateConfigurationSetTrackingOptions'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'TrackingOptionsAlreadyExistsException',
      content: { 'text/xml': { schema: TrackingOptionsAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidTrackingOptionsException',
      content: { 'text/xml': { schema: InvalidTrackingOptionsExceptionSchema } },
    },
  },
})

export const postActionCreateConfigurationSetTrackingOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateConfigurationSetTrackingOptions',
  description:
    '<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_CreateConfigurationSetTrackingOptions',
  request: {
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
        .literal('CreateConfigurationSetTrackingOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateConfigurationSetTrackingOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: CreateConfigurationSetTrackingOptionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'TrackingOptionsAlreadyExistsException',
      content: { 'text/xml': { schema: TrackingOptionsAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidTrackingOptionsException',
      content: { 'text/xml': { schema: InvalidTrackingOptionsExceptionSchema } },
    },
  },
})

export const getActionCreateCustomVerificationEmailTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateCustomVerificationEmailTemplate',
  description:
    '<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description: 'The name of the custom verification email template.',
            schema: { type: 'string' },
          },
        }),
      FromEmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'FromEmailAddress',
            in: 'query',
            required: true,
            description: 'The email address that the custom verification email is sent from.',
            schema: { type: 'string' },
          },
        }),
      TemplateSubject: z
        .string()
        .openapi({
          param: {
            name: 'TemplateSubject',
            in: 'query',
            required: true,
            description: 'The subject line of the custom verification email.',
            schema: { type: 'string' },
          },
        }),
      TemplateContent: z
        .string()
        .openapi({
          param: {
            name: 'TemplateContent',
            in: 'query',
            required: true,
            description:
              'The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.',
            schema: { type: 'string' },
          },
        }),
      SuccessRedirectionURL: z
        .string()
        .openapi({
          param: {
            name: 'SuccessRedirectionURL',
            in: 'query',
            required: true,
            description:
              'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
            schema: { type: 'string' },
          },
        }),
      FailureRedirectionURL: z
        .string()
        .openapi({
          param: {
            name: 'FailureRedirectionURL',
            in: 'query',
            required: true,
            description:
              'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CreateCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CustomVerificationEmailTemplateAlreadyExistsException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateAlreadyExistsExceptionSchema },
      },
    },
    481: {
      description: 'FromEmailAddressNotVerifiedException',
      content: { 'text/xml': { schema: FromEmailAddressNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'CustomVerificationEmailInvalidContentException',
      content: { 'text/xml': { schema: CustomVerificationEmailInvalidContentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCreateCustomVerificationEmailTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateCustomVerificationEmailTemplate',
  description:
    '<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateCustomVerificationEmailTemplate',
  request: {
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
        .literal('CreateCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: CreateCustomVerificationEmailTemplateRequestSchema } },
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CustomVerificationEmailTemplateAlreadyExistsException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateAlreadyExistsExceptionSchema },
      },
    },
    481: {
      description: 'FromEmailAddressNotVerifiedException',
      content: { 'text/xml': { schema: FromEmailAddressNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'CustomVerificationEmailInvalidContentException',
      content: { 'text/xml': { schema: CustomVerificationEmailInvalidContentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreateReceiptFilterRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateReceiptFilter',
  description:
    '<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateReceiptFilter',
  request: {
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
          ['Name', ['Filter']],
          ['IpFilter', ['Filter']],
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
          Filter: z
            .object({
              Name: ReceiptFilterNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of the IP address filter. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                  }),
              ),
              IpFilter: ReceiptIpFilterSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.',
                  }),
              ),
            })
            .openapi({
              param: {
                name: 'Filter',
                in: 'query',
                required: true,
                description:
                  'A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.',
                schema: {
                  type: 'object',
                  required: ['Name', 'IpFilter'],
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/ReceiptFilterName' },
                        {
                          description:
                            '<p>The name of the IP address filter. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                        },
                      ],
                    },
                    IpFilter: {
                      allOf: [
                        { $ref: '#/components/schemas/ReceiptIpFilter' },
                        {
                          description:
                            'A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['Name', 'IpFilter'],
              description:
                '<p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>',
            }),
          Action: z
            .literal('CreateReceiptFilter')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateReceiptFilter'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReceiptFilterResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const postActionCreateReceiptFilterRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateReceiptFilter',
  description:
    '<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateReceiptFilter',
  request: {
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
        .literal('CreateReceiptFilter')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateReceiptFilter'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateReceiptFilterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReceiptFilterResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const getActionCreateReceiptRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateReceiptRule',
  description:
    '<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateReceiptRule',
  request: {
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
          ['Name', ['Rule']],
          ['Enabled', ['Rule']],
          ['TlsPolicy', ['Rule']],
          ['Recipients', ['Rule']],
          ['Actions', ['Rule']],
          ['ScanEnabled', ['Rule']],
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
          RuleSetName: z
            .string()
            .openapi({
              param: {
                name: 'RuleSetName',
                in: 'query',
                required: true,
                description: 'The name of the rule set that the receipt rule will be added to.',
                schema: { type: 'string' },
              },
            }),
          After: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'After',
                in: 'query',
                required: false,
                description:
                  'The name of an existing rule after which the new rule will be placed. If this parameter is null, the new rule will be inserted at the beginning of the rule list.',
                schema: { type: 'string' },
              },
            }),
          Rule: z
            .object({
              Name: ReceiptRuleNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of the receipt rule. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                  }),
              ),
              Enabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  EnabledSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'If <code>true</code>, the receipt rule is active. The default value is <code>false</code>.',
                    }),
                )
                .exactOptional(),
              TlsPolicy: TlsPolicySchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The default is <code>Optional</code>.',
                  }),
              ).exactOptional(),
              Recipients: RecipientsListSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.',
                  }),
              ).exactOptional(),
              Actions: ReceiptActionsListSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.',
                  }),
              ).exactOptional(),
              ScanEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  EnabledSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'If <code>true</code>, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is <code>false</code>.',
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              param: {
                name: 'Rule',
                in: 'query',
                required: true,
                description:
                  "A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.",
                schema: {
                  type: 'object',
                  required: ['Name'],
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/ReceiptRuleName' },
                        {
                          description:
                            '<p>The name of the receipt rule. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                        },
                      ],
                    },
                    Enabled: {
                      allOf: [
                        { $ref: '#/components/schemas/Enabled' },
                        {
                          description:
                            'If <code>true</code>, the receipt rule is active. The default value is <code>false</code>.',
                        },
                      ],
                    },
                    TlsPolicy: {
                      allOf: [
                        { $ref: '#/components/schemas/TlsPolicy' },
                        {
                          description:
                            'Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The default is <code>Optional</code>.',
                        },
                      ],
                    },
                    Recipients: {
                      allOf: [
                        { $ref: '#/components/schemas/RecipientsList' },
                        {
                          description:
                            'The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.',
                        },
                      ],
                    },
                    Actions: {
                      allOf: [
                        { $ref: '#/components/schemas/ReceiptActionsList' },
                        {
                          description:
                            'An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.',
                        },
                      ],
                    },
                    ScanEnabled: {
                      allOf: [
                        { $ref: '#/components/schemas/Enabled' },
                        {
                          description:
                            'If <code>true</code>, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is <code>false</code>.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule\'s actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['Name'],
              description:
                '<p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule\'s actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>',
            }),
          Action: z
            .literal('CreateReceiptRule')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateReceiptRule'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReceiptRuleResponseSchema } },
    },
    480: {
      description: 'InvalidSnsTopicException',
      content: { 'text/xml': { schema: InvalidSnsTopicExceptionSchema } },
    },
    481: {
      description: 'InvalidS3ConfigurationException',
      content: { 'text/xml': { schema: InvalidS3ConfigurationExceptionSchema } },
    },
    482: {
      description: 'InvalidLambdaFunctionException',
      content: { 'text/xml': { schema: InvalidLambdaFunctionExceptionSchema } },
    },
    483: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCreateReceiptRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateReceiptRule',
  description:
    '<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateReceiptRule',
  request: {
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
        .literal('CreateReceiptRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateReceiptRule'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateReceiptRuleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReceiptRuleResponseSchema } },
    },
    480: {
      description: 'InvalidSnsTopicException',
      content: { 'text/xml': { schema: InvalidSnsTopicExceptionSchema } },
    },
    481: {
      description: 'InvalidS3ConfigurationException',
      content: { 'text/xml': { schema: InvalidS3ConfigurationExceptionSchema } },
    },
    482: {
      description: 'InvalidLambdaFunctionException',
      content: { 'text/xml': { schema: InvalidLambdaFunctionExceptionSchema } },
    },
    483: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreateReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateReceiptRuleSet',
  description:
    '<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateReceiptRuleSet',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CreateReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCreateReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateReceiptRuleSet',
  description:
    '<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateReceiptRuleSet',
  request: {
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
        .literal('CreateReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreateTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateTemplate',
  description:
    '<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_CreateTemplate',
  request: {
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
          ['TemplateName', ['Template']],
          ['SubjectPart', ['Template']],
          ['TextPart', ['Template']],
          ['HtmlPart', ['Template']],
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
          Template: z
            .object({
              TemplateName: TemplateNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                  }),
              ),
              SubjectPart: SubjectPartSchema.and(
                z.any().openapi({ description: 'The subject line of the email.' }),
              ).exactOptional(),
              TextPart: TextPartSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The email body that will be visible to recipients whose email clients do not display HTML.',
                  }),
              ).exactOptional(),
              HtmlPart: HtmlPartSchema.and(
                z.any().openapi({ description: 'The HTML body of the email.' }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'Template',
                in: 'query',
                required: true,
                description:
                  'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
                schema: {
                  type: 'object',
                  required: ['TemplateName'],
                  properties: {
                    TemplateName: {
                      allOf: [
                        { $ref: '#/components/schemas/TemplateName' },
                        {
                          description:
                            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                        },
                      ],
                    },
                    SubjectPart: {
                      allOf: [
                        { $ref: '#/components/schemas/SubjectPart' },
                        { description: 'The subject line of the email.' },
                      ],
                    },
                    TextPart: {
                      allOf: [
                        { $ref: '#/components/schemas/TextPart' },
                        {
                          description:
                            'The email body that will be visible to recipients whose email clients do not display HTML.',
                        },
                      ],
                    },
                    HtmlPart: {
                      allOf: [
                        { $ref: '#/components/schemas/HtmlPart' },
                        { description: 'The HTML body of the email.' },
                      ],
                    },
                  },
                  description:
                    'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
                },
              },
              required: ['TemplateName'],
              description:
                'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
            }),
          Action: z
            .literal('CreateTemplate')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateTemplate'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTemplateResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InvalidTemplateException',
      content: { 'text/xml': { schema: InvalidTemplateExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionCreateTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateTemplate',
  description:
    '<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_CreateTemplate',
  request: {
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
        .literal('CreateTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTemplateResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'text/xml': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InvalidTemplateException',
      content: { 'text/xml': { schema: InvalidTemplateExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionDeleteConfigurationSetRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteConfigurationSet',
  description:
    '<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteConfigurationSet',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: true,
            description: 'The name of the configuration set to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteConfigurationSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteConfigurationSetResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDeleteConfigurationSetRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteConfigurationSet',
  description:
    '<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteConfigurationSet',
  request: {
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
        .literal('DeleteConfigurationSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteConfigurationSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteConfigurationSetResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionDeleteConfigurationSetEventDestinationRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteConfigurationSetEventDestination',
  description:
    '<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteConfigurationSetEventDestination',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: true,
            description:
              'The name of the configuration set from which to delete the event destination.',
            schema: { type: 'string' },
          },
        }),
      EventDestinationName: z
        .string()
        .openapi({
          param: {
            name: 'EventDestinationName',
            in: 'query',
            required: true,
            description: 'The name of the event destination to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteConfigurationSetEventDestination')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationSetEventDestination'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteConfigurationSetEventDestinationResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EventDestinationDoesNotExistException',
      content: { 'text/xml': { schema: EventDestinationDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDeleteConfigurationSetEventDestinationRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteConfigurationSetEventDestination',
  description:
    '<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteConfigurationSetEventDestination',
  request: {
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
        .literal('DeleteConfigurationSetEventDestination')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationSetEventDestination'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DeleteConfigurationSetEventDestinationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteConfigurationSetEventDestinationResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EventDestinationDoesNotExistException',
      content: { 'text/xml': { schema: EventDestinationDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionDeleteConfigurationSetTrackingOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteConfigurationSetTrackingOptions',
  description:
    '<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>',
  operationId: 'GET_DeleteConfigurationSetTrackingOptions',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: true,
            description:
              'The name of the configuration set from which you want to delete the tracking options.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteConfigurationSetTrackingOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationSetTrackingOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'TrackingOptionsDoesNotExistException',
      content: { 'text/xml': { schema: TrackingOptionsDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDeleteConfigurationSetTrackingOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteConfigurationSetTrackingOptions',
  description:
    '<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>',
  operationId: 'POST_DeleteConfigurationSetTrackingOptions',
  request: {
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
        .literal('DeleteConfigurationSetTrackingOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationSetTrackingOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DeleteConfigurationSetTrackingOptionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'TrackingOptionsDoesNotExistException',
      content: { 'text/xml': { schema: TrackingOptionsDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionDeleteCustomVerificationEmailTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteCustomVerificationEmailTemplate',
  description:
    '<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description:
              'The name of the custom verification email template that you want to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionDeleteCustomVerificationEmailTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteCustomVerificationEmailTemplate',
  description:
    '<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteCustomVerificationEmailTemplate',
  request: {
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
        .literal('DeleteCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DeleteCustomVerificationEmailTemplateRequestSchema } },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionDeleteIdentityRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteIdentity',
  description:
    '<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteIdentity',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              'The identity to be removed from the list of identities for the AWS Account.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteIdentity')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteIdentity'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteIdentityResponseSchema } },
    },
  },
})

export const postActionDeleteIdentityRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteIdentity',
  description:
    '<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteIdentity',
  request: {
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
        .literal('DeleteIdentity')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteIdentity'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteIdentityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteIdentityResponseSchema } },
    },
  },
})

export const getActionDeleteIdentityPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteIdentityPolicy',
  description:
    '<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteIdentityPolicy',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              '<p>The identity that is associated with the policy that you want to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
            schema: { type: 'string' },
          },
        }),
      PolicyName: z
        .string()
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'query',
            required: true,
            description: 'The name of the policy to be deleted.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
      Action: z
        .literal('DeleteIdentityPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteIdentityPolicy'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteIdentityPolicyResponseSchema } },
    },
  },
})

export const postActionDeleteIdentityPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteIdentityPolicy',
  description:
    '<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteIdentityPolicy',
  request: {
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
        .literal('DeleteIdentityPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteIdentityPolicy'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteIdentityPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteIdentityPolicyResponseSchema } },
    },
  },
})

export const getActionDeleteReceiptFilterRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteReceiptFilter',
  description:
    '<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteReceiptFilter',
  request: {
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
      FilterName: z
        .string()
        .openapi({
          param: {
            name: 'FilterName',
            in: 'query',
            required: true,
            description: 'The name of the IP address filter to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteReceiptFilter')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReceiptFilter'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReceiptFilterResponseSchema } },
    },
  },
})

export const postActionDeleteReceiptFilterRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteReceiptFilter',
  description:
    '<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteReceiptFilter',
  request: {
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
        .literal('DeleteReceiptFilter')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReceiptFilter'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteReceiptFilterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReceiptFilterResponseSchema } },
    },
  },
})

export const getActionDeleteReceiptRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteReceiptRule',
  description:
    '<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteReceiptRule',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description:
              'The name of the receipt rule set that contains the receipt rule to delete.',
            schema: { type: 'string' },
          },
        }),
      RuleName: z
        .string()
        .openapi({
          param: {
            name: 'RuleName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteReceiptRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReceiptRule'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReceiptRuleResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDeleteReceiptRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteReceiptRule',
  description:
    '<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteReceiptRule',
  request: {
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
        .literal('DeleteReceiptRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReceiptRule'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteReceiptRuleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReceiptRuleResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionDeleteReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteReceiptRuleSet',
  description:
    '<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteReceiptRuleSet',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule set to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'CannotDeleteException',
      content: { 'text/xml': { schema: CannotDeleteExceptionSchema } },
    },
  },
})

export const postActionDeleteReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteReceiptRuleSet',
  description:
    '<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteReceiptRuleSet',
  request: {
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
        .literal('DeleteReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'CannotDeleteException',
      content: { 'text/xml': { schema: CannotDeleteExceptionSchema } },
    },
  },
})

export const getActionDeleteTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteTemplate',
  description:
    '<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DeleteTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description: 'The name of the template to be deleted.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteTemplateResponseSchema } },
    },
  },
})

export const postActionDeleteTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteTemplate',
  description:
    '<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DeleteTemplate',
  request: {
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
        .literal('DeleteTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteTemplateResponseSchema } },
    },
  },
})

export const getActionDeleteVerifiedEmailAddressRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteVerifiedEmailAddress',
  description:
    'Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.',
  operationId: 'GET_DeleteVerifiedEmailAddress',
  request: {
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
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'query',
            required: true,
            description: 'An email address to be removed from the list of verified addresses.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteVerifiedEmailAddress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteVerifiedEmailAddress'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionDeleteVerifiedEmailAddressRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteVerifiedEmailAddress',
  description:
    'Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.',
  operationId: 'POST_DeleteVerifiedEmailAddress',
  request: {
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
        .literal('DeleteVerifiedEmailAddress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteVerifiedEmailAddress'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteVerifiedEmailAddressRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionDescribeActiveReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeActiveReceiptRuleSet',
  description:
    '<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DescribeActiveReceiptRuleSet',
  request: {
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
        .literal('DescribeActiveReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeActiveReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeActiveReceiptRuleSetResponseSchema } },
    },
  },
})

export const postActionDescribeActiveReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeActiveReceiptRuleSet',
  description:
    '<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DescribeActiveReceiptRuleSet',
  request: {
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
        .literal('DescribeActiveReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeActiveReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeActiveReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeActiveReceiptRuleSetResponseSchema } },
    },
  },
})

export const getActionDescribeConfigurationSetRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeConfigurationSet',
  description:
    '<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DescribeConfigurationSet',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: true,
            description: 'The name of the configuration set to describe.',
            schema: { type: 'string' },
          },
        }),
      ConfigurationSetAttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ConfigurationSetAttributeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ConfigurationSetAttributeNames',
            in: 'query',
            required: false,
            description: 'A list of configuration set attributes to return.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ConfigurationSetAttribute' },
            },
          },
        }),
      Action: z
        .literal('DescribeConfigurationSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeConfigurationSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeConfigurationSetResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDescribeConfigurationSetRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeConfigurationSet',
  description:
    '<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DescribeConfigurationSet',
  request: {
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
        .literal('DescribeConfigurationSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeConfigurationSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeConfigurationSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeConfigurationSetResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionDescribeReceiptRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeReceiptRule',
  description:
    '<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DescribeReceiptRule',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule set that the receipt rule belongs to.',
            schema: { type: 'string' },
          },
        }),
      RuleName: z
        .string()
        .openapi({
          param: {
            name: 'RuleName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeReceiptRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReceiptRule'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeReceiptRuleResponseSchema } },
    },
    480: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDescribeReceiptRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeReceiptRule',
  description:
    '<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DescribeReceiptRule',
  request: {
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
        .literal('DescribeReceiptRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReceiptRule'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeReceiptRuleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeReceiptRuleResponseSchema } },
    },
    480: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionDescribeReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeReceiptRuleSet',
  description:
    '<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_DescribeReceiptRuleSet',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule set to describe.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionDescribeReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeReceiptRuleSet',
  description:
    '<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_DescribeReceiptRuleSet',
  request: {
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
        .literal('DescribeReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionGetAccountSendingEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=GetAccountSendingEnabled',
  description:
    '<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_GetAccountSendingEnabled',
  request: {
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
        .literal('GetAccountSendingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetAccountSendingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccountSendingEnabledResponseSchema } },
    },
  },
})

export const postActionGetAccountSendingEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=GetAccountSendingEnabled',
  description:
    '<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_GetAccountSendingEnabled',
  request: {
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
        .literal('GetAccountSendingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetAccountSendingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetAccountSendingEnabledResponseSchema } },
    },
  },
})

export const getActionGetCustomVerificationEmailTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=GetCustomVerificationEmailTemplate',
  description:
    '<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_GetCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description:
              'The name of the custom verification email template that you want to retrieve.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCustomVerificationEmailTemplateResponseSchema } },
    },
    480: {
      description: 'CustomVerificationEmailTemplateDoesNotExistException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateDoesNotExistExceptionSchema },
      },
    },
  },
})

export const postActionGetCustomVerificationEmailTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=GetCustomVerificationEmailTemplate',
  description:
    '<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_GetCustomVerificationEmailTemplate',
  request: {
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
        .literal('GetCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetCustomVerificationEmailTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetCustomVerificationEmailTemplateResponseSchema } },
    },
    480: {
      description: 'CustomVerificationEmailTemplateDoesNotExistException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateDoesNotExistExceptionSchema },
      },
    },
  },
})

export const getActionGetIdentityDkimAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetIdentityDkimAttributes',
  description:
    '<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain\'s DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_GetIdentityDkimAttributes',
  request: {
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
      Identities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(IdentitySchema),
        )
        .openapi({
          param: {
            name: 'Identities',
            in: 'query',
            required: true,
            description:
              'A list of one or more verified identities - email addresses, domains, or both.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Identity' } },
          },
        }),
      Action: z
        .literal('GetIdentityDkimAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityDkimAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityDkimAttributesResponseSchema } },
    },
  },
})

export const postActionGetIdentityDkimAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetIdentityDkimAttributes',
  description:
    '<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain\'s DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_GetIdentityDkimAttributes',
  request: {
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
        .literal('GetIdentityDkimAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityDkimAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetIdentityDkimAttributesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityDkimAttributesResponseSchema } },
    },
  },
})

export const getActionGetIdentityMailFromDomainAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetIdentityMailFromDomainAttributes',
  description:
    '<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>',
  operationId: 'GET_GetIdentityMailFromDomainAttributes',
  request: {
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
      Identities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(IdentitySchema),
        )
        .openapi({
          param: {
            name: 'Identities',
            in: 'query',
            required: true,
            description: 'A list of one or more identities.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Identity' } },
          },
        }),
      Action: z
        .literal('GetIdentityMailFromDomainAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityMailFromDomainAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityMailFromDomainAttributesResponseSchema } },
    },
  },
})

export const postActionGetIdentityMailFromDomainAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetIdentityMailFromDomainAttributes',
  description:
    '<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>',
  operationId: 'POST_GetIdentityMailFromDomainAttributes',
  request: {
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
        .literal('GetIdentityMailFromDomainAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityMailFromDomainAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetIdentityMailFromDomainAttributesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityMailFromDomainAttributesResponseSchema } },
    },
  },
})

export const getActionGetIdentityNotificationAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetIdentityNotificationAttributes',
  description:
    '<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_GetIdentityNotificationAttributes',
  request: {
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
      Identities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(IdentitySchema),
        )
        .openapi({
          param: {
            name: 'Identities',
            in: 'query',
            required: true,
            description:
              'A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Identity' } },
          },
        }),
      Action: z
        .literal('GetIdentityNotificationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityNotificationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityNotificationAttributesResponseSchema } },
    },
  },
})

export const postActionGetIdentityNotificationAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetIdentityNotificationAttributes',
  description:
    '<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_GetIdentityNotificationAttributes',
  request: {
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
        .literal('GetIdentityNotificationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityNotificationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetIdentityNotificationAttributesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityNotificationAttributesResponseSchema } },
    },
  },
})

export const getActionGetIdentityPoliciesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetIdentityPolicies',
  description:
    '<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_GetIdentityPolicies',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              '<p>The identity for which the policies will be retrieved. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
            schema: { type: 'string' },
          },
        }),
      PolicyNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyNameSchema),
        )
        .openapi({
          param: {
            name: 'PolicyNames',
            in: 'query',
            required: true,
            description:
              'A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use <code>ListIdentityPolicies</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyName' } },
          },
        }),
      Action: z
        .literal('GetIdentityPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityPolicies'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityPoliciesResponseSchema } },
    },
  },
})

export const postActionGetIdentityPoliciesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetIdentityPolicies',
  description:
    '<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_GetIdentityPolicies',
  request: {
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
        .literal('GetIdentityPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityPolicies'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetIdentityPoliciesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityPoliciesResponseSchema } },
    },
  },
})

export const getActionGetIdentityVerificationAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetIdentityVerificationAttributes',
  description:
    '<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain\'s verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain\'s verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain\'s verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>',
  operationId: 'GET_GetIdentityVerificationAttributes',
  request: {
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
      Identities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(IdentitySchema),
        )
        .openapi({
          param: {
            name: 'Identities',
            in: 'query',
            required: true,
            description: 'A list of identities.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Identity' } },
          },
        }),
      Action: z
        .literal('GetIdentityVerificationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityVerificationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityVerificationAttributesResponseSchema } },
    },
  },
})

export const postActionGetIdentityVerificationAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetIdentityVerificationAttributes',
  description:
    '<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain\'s verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain\'s verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain\'s verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>',
  operationId: 'POST_GetIdentityVerificationAttributes',
  request: {
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
        .literal('GetIdentityVerificationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetIdentityVerificationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetIdentityVerificationAttributesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetIdentityVerificationAttributesResponseSchema } },
    },
  },
})

export const getActionGetSendQuotaRoute = createRoute({
  method: 'get',
  path: '/#Action=GetSendQuota',
  description:
    '<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_GetSendQuota',
  request: {
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
        .literal('GetSendQuota')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSendQuota'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSendQuotaResponseSchema } },
    },
  },
})

export const postActionGetSendQuotaRoute = createRoute({
  method: 'post',
  path: '/#Action=GetSendQuota',
  description:
    '<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_GetSendQuota',
  request: {
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
        .literal('GetSendQuota')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSendQuota'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSendQuotaResponseSchema } },
    },
  },
})

export const getActionGetSendStatisticsRoute = createRoute({
  method: 'get',
  path: '/#Action=GetSendStatistics',
  description:
    '<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_GetSendStatistics',
  request: {
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
        .literal('GetSendStatistics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSendStatistics'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSendStatisticsResponseSchema } },
    },
  },
})

export const postActionGetSendStatisticsRoute = createRoute({
  method: 'post',
  path: '/#Action=GetSendStatistics',
  description:
    '<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_GetSendStatistics',
  request: {
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
        .literal('GetSendStatistics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSendStatistics'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSendStatisticsResponseSchema } },
    },
  },
})

export const getActionGetTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=GetTemplate',
  description:
    '<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_GetTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description: 'The name of the template you want to retrieve.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetTemplateResponseSchema } } },
    480: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionGetTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=GetTemplate',
  description:
    '<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_GetTemplate',
  request: {
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
        .literal('GetTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetTemplateRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetTemplateResponseSchema } } },
    480: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionListConfigurationSetsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListConfigurationSets',
  description:
    '<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>',
  operationId: 'GET_ListConfigurationSets',
  request: {
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
              'A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position of the configuration set in the configuration set list.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
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
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'The number of configuration sets to return.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ListConfigurationSets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListConfigurationSets'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListConfigurationSetsResponseSchema } },
    },
  },
})

export const postActionListConfigurationSetsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListConfigurationSets',
  description:
    '<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>',
  operationId: 'POST_ListConfigurationSets',
  request: {
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
        .literal('ListConfigurationSets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListConfigurationSets'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListConfigurationSetsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListConfigurationSetsResponseSchema } },
    },
  },
})

export const getActionListCustomVerificationEmailTemplatesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListCustomVerificationEmailTemplates',
  description:
    '<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ListCustomVerificationEmailTemplates',
  request: {
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
              'An array the contains the name and creation time stamp for each template in your Amazon SES account.',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of custom verification email templates to return. This value must be at least 1 and less than or equal to 50. If you do not specify a value, or if you specify a value less than 1 or greater than 50, the operation will return up to 50 results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      Action: z
        .literal('ListCustomVerificationEmailTemplates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListCustomVerificationEmailTemplates'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListCustomVerificationEmailTemplatesResponseSchema } },
    },
  },
})

export const postActionListCustomVerificationEmailTemplatesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListCustomVerificationEmailTemplates',
  description:
    '<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ListCustomVerificationEmailTemplates',
  request: {
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
        .literal('ListCustomVerificationEmailTemplates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListCustomVerificationEmailTemplates'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: ListCustomVerificationEmailTemplatesRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListCustomVerificationEmailTemplatesResponseSchema } },
    },
  },
})

export const getActionListIdentitiesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListIdentities',
  description:
    '<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ListIdentities',
  request: {
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
      IdentityType: z
        .enum(['EmailAddress', 'Domain'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IdentityType',
            in: 'query',
            required: false,
            description:
              'The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.',
            schema: { type: 'string', enum: ['EmailAddress', 'Domain'] },
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
            description: 'The token to use for pagination.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
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
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of identities per page. Possible values are 1-1000 inclusive.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ListIdentities')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListIdentities'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListIdentitiesResponseSchema } },
    },
  },
})

export const postActionListIdentitiesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListIdentities',
  description:
    '<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ListIdentities',
  request: {
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
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
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
        .literal('ListIdentities')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListIdentities'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListIdentitiesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListIdentitiesResponseSchema } },
    },
  },
})

export const getActionListIdentityPoliciesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListIdentityPolicies',
  description:
    '<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ListIdentityPolicies',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              '<p>The identity that is associated with the policy for which the policies will be listed. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListIdentityPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListIdentityPolicies'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListIdentityPoliciesResponseSchema } },
    },
  },
})

export const postActionListIdentityPoliciesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListIdentityPolicies',
  description:
    '<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ListIdentityPolicies',
  request: {
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
        .literal('ListIdentityPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListIdentityPolicies'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListIdentityPoliciesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListIdentityPoliciesResponseSchema } },
    },
  },
})

export const getActionListReceiptFiltersRoute = createRoute({
  method: 'get',
  path: '/#Action=ListReceiptFilters',
  description:
    '<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ListReceiptFilters',
  request: {
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
        .literal('ListReceiptFilters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListReceiptFilters'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListReceiptFiltersResponseSchema } },
    },
  },
})

export const postActionListReceiptFiltersRoute = createRoute({
  method: 'post',
  path: '/#Action=ListReceiptFilters',
  description:
    '<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ListReceiptFilters',
  request: {
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
        .literal('ListReceiptFilters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListReceiptFilters'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListReceiptFiltersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListReceiptFiltersResponseSchema } },
    },
  },
})

export const getActionListReceiptRuleSetsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListReceiptRuleSets',
  description:
    '<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ListReceiptRuleSets',
  request: {
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
              'A token returned from a previous call to <code>ListReceiptRuleSets</code> to indicate the position in the receipt rule set list.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListReceiptRuleSets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListReceiptRuleSets'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListReceiptRuleSetsResponseSchema } },
    },
  },
})

export const postActionListReceiptRuleSetsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListReceiptRuleSets',
  description:
    '<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ListReceiptRuleSets',
  request: {
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
        .literal('ListReceiptRuleSets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListReceiptRuleSets'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListReceiptRuleSetsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListReceiptRuleSetsResponseSchema } },
    },
  },
})

export const getActionListTemplatesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTemplates',
  description:
    '<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ListTemplates',
  request: {
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
              'A token returned from a previous call to <code>ListTemplates</code> to indicate the position in the list of email templates.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
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
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              'The maximum number of templates to return. This value must be at least 1 and less than or equal to 10. If you do not specify a value, or if you specify a value less than 1 or greater than 10, the operation will return up to 10 results.',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('ListTemplates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTemplates'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTemplatesResponseSchema } },
    },
  },
})

export const postActionListTemplatesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTemplates',
  description:
    '<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ListTemplates',
  request: {
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
        .literal('ListTemplates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTemplates'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTemplatesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTemplatesResponseSchema } },
    },
  },
})

export const getActionListVerifiedEmailAddressesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListVerifiedEmailAddresses',
  description:
    'Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.',
  operationId: 'GET_ListVerifiedEmailAddresses',
  request: {
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
        .literal('ListVerifiedEmailAddresses')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListVerifiedEmailAddresses'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListVerifiedEmailAddressesResponseSchema } },
    },
  },
})

export const postActionListVerifiedEmailAddressesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListVerifiedEmailAddresses',
  description:
    'Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.',
  operationId: 'POST_ListVerifiedEmailAddresses',
  request: {
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
        .literal('ListVerifiedEmailAddresses')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListVerifiedEmailAddresses'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListVerifiedEmailAddressesResponseSchema } },
    },
  },
})

export const getActionPutConfigurationSetDeliveryOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=PutConfigurationSetDeliveryOptions',
  description: 'Adds or updates the delivery options for a configuration set.',
  operationId: 'GET_PutConfigurationSetDeliveryOptions',
  request: {
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
        const spread = new Map<string, string[]>([['TlsPolicy', ['DeliveryOptions']]])
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
          ConfigurationSetName: z
            .string()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: true,
                description:
                  'The name of the configuration set that you want to specify the delivery options for.',
                schema: { type: 'string' },
              },
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
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'DeliveryOptions',
                in: 'query',
                required: false,
                description:
                  'Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).',
                schema: {
                  type: 'object',
                  properties: {
                    TlsPolicy: {
                      allOf: [
                        { $ref: '#/components/schemas/TlsPolicy' },
                        {
                          description:
                            "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.",
                        },
                      ],
                    },
                  },
                  description:
                    'Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).',
                },
              },
              description:
                'Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).',
              required: [],
            }),
          Action: z
            .literal('PutConfigurationSetDeliveryOptions')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['PutConfigurationSetDeliveryOptions'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutConfigurationSetDeliveryOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidDeliveryOptionsException',
      content: { 'text/xml': { schema: InvalidDeliveryOptionsExceptionSchema } },
    },
  },
})

export const postActionPutConfigurationSetDeliveryOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=PutConfigurationSetDeliveryOptions',
  description: 'Adds or updates the delivery options for a configuration set.',
  operationId: 'POST_PutConfigurationSetDeliveryOptions',
  request: {
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
        .literal('PutConfigurationSetDeliveryOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutConfigurationSetDeliveryOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutConfigurationSetDeliveryOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutConfigurationSetDeliveryOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidDeliveryOptionsException',
      content: { 'text/xml': { schema: InvalidDeliveryOptionsExceptionSchema } },
    },
  },
})

export const getActionPutIdentityPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=PutIdentityPolicy',
  description:
    '<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_PutIdentityPolicy',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              '<p>The identity that the policy will apply to. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>',
            schema: { type: 'string' },
          },
        }),
      PolicyName: z
        .string()
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'PolicyName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
      Policy: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'Policy',
            in: 'query',
            required: true,
            description:
              '<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer Guide</a>. </p>',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      Action: z
        .literal('PutIdentityPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutIdentityPolicy'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutIdentityPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidPolicyException',
      content: { 'text/xml': { schema: InvalidPolicyExceptionSchema } },
    },
  },
})

export const postActionPutIdentityPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=PutIdentityPolicy',
  description:
    '<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_PutIdentityPolicy',
  request: {
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
        .literal('PutIdentityPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutIdentityPolicy'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutIdentityPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PutIdentityPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidPolicyException',
      content: { 'text/xml': { schema: InvalidPolicyExceptionSchema } },
    },
  },
})

export const getActionReorderReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=ReorderReceiptRuleSet',
  description:
    '<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn\'t explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_ReorderReceiptRuleSet',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule set to reorder.',
            schema: { type: 'string' },
          },
        }),
      RuleNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ReceiptRuleNameSchema),
        )
        .openapi({
          param: {
            name: 'RuleNames',
            in: 'query',
            required: true,
            description:
              "A list of the specified receipt rule set's receipt rules in the order that you want to put them.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/ReceiptRuleName' } },
          },
        }),
      Action: z
        .literal('ReorderReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ReorderReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReorderReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionReorderReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=ReorderReceiptRuleSet',
  description:
    '<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn\'t explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_ReorderReceiptRuleSet',
  request: {
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
        .literal('ReorderReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ReorderReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ReorderReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReorderReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionSendBounceRoute = createRoute({
  method: 'get',
  path: '/#Action=SendBounce',
  description:
    '<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_SendBounce',
  request: {
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
          ['ReportingMta', ['MessageDsn']],
          ['ArrivalDate', ['MessageDsn']],
          ['ExtensionFields', ['MessageDsn']],
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
          OriginalMessageId: z
            .string()
            .openapi({
              param: {
                name: 'OriginalMessageId',
                in: 'query',
                required: true,
                description: 'The message ID of the message to be bounced.',
                schema: { type: 'string' },
              },
            }),
          BounceSender: z
            .string()
            .openapi({
              param: {
                name: 'BounceSender',
                in: 'query',
                required: true,
                description:
                  'The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.',
                schema: { type: 'string' },
              },
            }),
          Explanation: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'Explanation',
                in: 'query',
                required: false,
                description:
                  'Human-readable text for the bounce message to explain the failure. If not specified, the text will be auto-generated based on the bounced recipient information.',
                schema: { type: 'string' },
              },
            }),
          MessageDsn: z
            .object({
              ReportingMta: ReportingMtaSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The reporting MTA that attempted to deliver the message, formatted as specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a> (<code>mta-name-type; mta-name</code>). The default value is <code>dns; inbound-smtp.[region].amazonaws.com</code>.',
                  }),
              ),
              ArrivalDate: ArrivalDateSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'When the message was received by the reporting mail transfer agent (MTA), in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.',
                  }),
              ).exactOptional(),
              ExtensionFields: ExtensionFieldListSchema.and(
                z.any().openapi({ description: 'Additional X-headers to include in the DSN.' }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageDsn',
                in: 'query',
                required: false,
                description:
                  'Message-related DSN fields. If not specified, Amazon SES will choose the values.',
                schema: {
                  type: 'object',
                  required: ['ReportingMta'],
                  properties: {
                    ReportingMta: {
                      allOf: [
                        { $ref: '#/components/schemas/ReportingMta' },
                        {
                          description:
                            'The reporting MTA that attempted to deliver the message, formatted as specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a> (<code>mta-name-type; mta-name</code>). The default value is <code>dns; inbound-smtp.[region].amazonaws.com</code>.',
                        },
                      ],
                    },
                    ArrivalDate: {
                      allOf: [
                        { $ref: '#/components/schemas/ArrivalDate' },
                        {
                          description:
                            'When the message was received by the reporting mail transfer agent (MTA), in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.',
                        },
                      ],
                    },
                    ExtensionFields: {
                      allOf: [
                        { $ref: '#/components/schemas/ExtensionFieldList' },
                        { description: 'Additional X-headers to include in the DSN.' },
                      ],
                    },
                  },
                  description:
                    '<p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['ReportingMta'],
              description:
                '<p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>',
            }),
          BouncedRecipientInfoList: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(BouncedRecipientInfoSchema),
            )
            .openapi({
              param: {
                name: 'BouncedRecipientInfoList',
                in: 'query',
                required: true,
                description:
                  'A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one <code>BouncedRecipientInfo</code> in the list.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/BouncedRecipientInfo' },
                },
              },
            }),
          BounceSenderArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'BounceSenderArn',
                in: 'query',
                required: false,
                description:
                  'This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.',
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('SendBounce')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SendBounce'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SendBounceResponseSchema } } },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
  },
})

export const postActionSendBounceRoute = createRoute({
  method: 'post',
  path: '/#Action=SendBounce',
  description:
    '<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_SendBounce',
  request: {
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
        .literal('SendBounce')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendBounce'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendBounceRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SendBounceResponseSchema } } },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
  },
})

export const getActionSendBulkTemplatedEmailRoute = createRoute({
  method: 'get',
  path: '/#Action=SendBulkTemplatedEmail',
  description:
    '<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account\'s maximum sending rate.</p> </li> </ul>',
  operationId: 'GET_SendBulkTemplatedEmail',
  request: {
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
      Source: z
        .string()
        .openapi({
          param: {
            name: 'Source',
            in: 'query',
            required: true,
            description:
              '<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      SourceArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceArn',
            in: 'query',
            required: false,
            description:
              '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
            schema: { type: 'string' },
          },
        }),
      ReplyToAddresses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AddressSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplyToAddresses',
            in: 'query',
            required: false,
            description:
              'The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Address' } },
          },
        }),
      ReturnPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReturnPath',
            in: 'query',
            required: false,
            description:
              "The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. ",
            schema: { type: 'string' },
          },
        }),
      ReturnPathArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReturnPathArn',
            in: 'query',
            required: false,
            description:
              '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
            schema: { type: 'string' },
          },
        }),
      ConfigurationSetName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: false,
            description:
              'The name of the configuration set to use when you send an email using <code>SendBulkTemplatedEmail</code>.',
            schema: { type: 'string' },
          },
        }),
      DefaultTags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(MessageTagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'DefaultTags',
            in: 'query',
            required: false,
            description:
              'A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using <code>SendBulkTemplatedEmail</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/MessageTag' } },
          },
        }),
      Template: z
        .string()
        .openapi({
          param: {
            name: 'Template',
            in: 'query',
            required: true,
            description: 'The template to use when sending this email.',
            schema: { type: 'string' },
          },
        }),
      TemplateArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateArn',
            in: 'query',
            required: false,
            description: 'The ARN of the template to use when sending this email.',
            schema: { type: 'string' },
          },
        }),
      DefaultTemplateData: z
        .string()
        .max(262144)
        .exactOptional()
        .openapi({
          param: {
            name: 'DefaultTemplateData',
            in: 'query',
            required: false,
            description:
              '<p>A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available.</p> <p>The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</p>',
            schema: { type: 'string', maxLength: 262144 },
          },
        }),
      Destinations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(BulkEmailDestinationSchema),
        )
        .openapi({
          param: {
            name: 'Destinations',
            in: 'query',
            required: true,
            description:
              'One or more <code>Destination</code> objects. All of the recipients in a <code>Destination</code> will receive the same version of the email. You can specify up to 50 <code>Destination</code> objects within a <code>Destinations</code> array.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/BulkEmailDestination' } },
          },
        }),
      Action: z
        .literal('SendBulkTemplatedEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendBulkTemplatedEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendBulkTemplatedEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    485: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const postActionSendBulkTemplatedEmailRoute = createRoute({
  method: 'post',
  path: '/#Action=SendBulkTemplatedEmail',
  description:
    '<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account\'s maximum sending rate.</p> </li> </ul>',
  operationId: 'POST_SendBulkTemplatedEmail',
  request: {
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
        .literal('SendBulkTemplatedEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendBulkTemplatedEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendBulkTemplatedEmailRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendBulkTemplatedEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    485: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const getActionSendCustomVerificationEmailRoute = createRoute({
  method: 'get',
  path: '/#Action=SendCustomVerificationEmail',
  description:
    '<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_SendCustomVerificationEmail',
  request: {
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
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'query',
            required: true,
            description: 'The email address to verify.',
            schema: { type: 'string' },
          },
        }),
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description:
              'The name of the custom verification email template to use when sending the verification email.',
            schema: { type: 'string' },
          },
        }),
      ConfigurationSetName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: false,
            description: 'Name of a configuration set to use when sending the verification email.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SendCustomVerificationEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendCustomVerificationEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendCustomVerificationEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'CustomVerificationEmailTemplateDoesNotExistException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateDoesNotExistExceptionSchema },
      },
    },
    483: {
      description: 'FromEmailAddressNotVerifiedException',
      content: { 'text/xml': { schema: FromEmailAddressNotVerifiedExceptionSchema } },
    },
    484: {
      description: 'ProductionAccessNotGrantedException',
      content: { 'text/xml': { schema: ProductionAccessNotGrantedExceptionSchema } },
    },
  },
})

export const postActionSendCustomVerificationEmailRoute = createRoute({
  method: 'post',
  path: '/#Action=SendCustomVerificationEmail',
  description:
    '<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_SendCustomVerificationEmail',
  request: {
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
        .literal('SendCustomVerificationEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendCustomVerificationEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendCustomVerificationEmailRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendCustomVerificationEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'CustomVerificationEmailTemplateDoesNotExistException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateDoesNotExistExceptionSchema },
      },
    },
    483: {
      description: 'FromEmailAddressNotVerifiedException',
      content: { 'text/xml': { schema: FromEmailAddressNotVerifiedExceptionSchema } },
    },
    484: {
      description: 'ProductionAccessNotGrantedException',
      content: { 'text/xml': { schema: ProductionAccessNotGrantedExceptionSchema } },
    },
  },
})

export const getActionSendEmailRoute = createRoute({
  method: 'get',
  path: '/#Action=SendEmail',
  description:
    '<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>',
  operationId: 'GET_SendEmail',
  request: {
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
          ['ToAddresses', ['Destination']],
          ['CcAddresses', ['Destination']],
          ['BccAddresses', ['Destination']],
          ['Subject', ['Message']],
          ['Body', ['Message']],
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
          Source: z
            .string()
            .openapi({
              param: {
                name: 'Source',
                in: 'query',
                required: true,
                description:
                  '<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          Destination: z
            .object({
              ToAddresses: AddressListSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The recipients to place on the To: line of the message.',
                  }),
              ).exactOptional(),
              CcAddresses: AddressListSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The recipients to place on the CC: line of the message.',
                  }),
              ).exactOptional(),
              BccAddresses: AddressListSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The recipients to place on the BCC: line of the message.',
                  }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'Destination',
                in: 'query',
                required: true,
                description:
                  'The destination for this email, composed of To:, CC:, and BCC: fields.',
                schema: {
                  type: 'object',
                  properties: {
                    ToAddresses: {
                      allOf: [
                        { $ref: '#/components/schemas/AddressList' },
                        { description: 'The recipients to place on the To: line of the message.' },
                      ],
                    },
                    CcAddresses: {
                      allOf: [
                        { $ref: '#/components/schemas/AddressList' },
                        { description: 'The recipients to place on the CC: line of the message.' },
                      ],
                    },
                    BccAddresses: {
                      allOf: [
                        { $ref: '#/components/schemas/AddressList' },
                        { description: 'The recipients to place on the BCC: line of the message.' },
                      ],
                    },
                  },
                  description:
                    '<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
                },
              },
              description:
                '<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
              required: [],
            }),
          Message: z
            .object({
              Subject: ContentSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "The subject of the message: A short summary of the content, which will appear in the recipient's inbox.",
                  }),
              ),
              Body: BodySchema.and(z.any().openapi({ description: 'The message body.' })),
            })
            .openapi({
              param: {
                name: 'Message',
                in: 'query',
                required: true,
                description: 'The message to be sent.',
                schema: {
                  type: 'object',
                  required: ['Subject', 'Body'],
                  properties: {
                    Subject: {
                      allOf: [
                        { $ref: '#/components/schemas/Content' },
                        {
                          description:
                            "The subject of the message: A short summary of the content, which will appear in the recipient's inbox.",
                        },
                      ],
                    },
                    Body: {
                      allOf: [
                        { $ref: '#/components/schemas/Body' },
                        { description: 'The message body.' },
                      ],
                    },
                  },
                  description:
                    'Represents the message to be sent, composed of a subject and a body.',
                },
              },
              required: ['Subject', 'Body'],
              description: 'Represents the message to be sent, composed of a subject and a body.',
            }),
          ReplyToAddresses: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(AddressSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'ReplyToAddresses',
                in: 'query',
                required: false,
                description:
                  'The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/Address' } },
              },
            }),
          ReturnPath: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReturnPath',
                in: 'query',
                required: false,
                description:
                  "The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. ",
                schema: { type: 'string' },
              },
            }),
          SourceArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'SourceArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                schema: { type: 'string' },
              },
            }),
          ReturnPathArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReturnPathArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                schema: { type: 'string' },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(MessageTagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description:
                  'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/MessageTag' } },
              },
            }),
          ConfigurationSetName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: false,
                description:
                  'The name of the configuration set to use when you send an email using <code>SendEmail</code>.',
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('SendEmail')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SendEmail'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SendEmailResponseSchema } } },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    484: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const postActionSendEmailRoute = createRoute({
  method: 'post',
  path: '/#Action=SendEmail',
  description:
    '<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>',
  operationId: 'POST_SendEmail',
  request: {
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
        .literal('SendEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendEmailRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SendEmailResponseSchema } } },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    484: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const getActionSendRawEmailRoute = createRoute({
  method: 'get',
  path: '/#Action=SendRawEmail',
  description:
    '<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn\'t verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn\'t in a valid format (that is, it\'s not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn\'t preserved. For this reason, we highly recommend that you encode all content that isn\'t 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email\'s Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don\'t include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>',
  operationId: 'GET_SendRawEmail',
  request: {
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
        const spread = new Map<string, string[]>([['Data', ['RawMessage']]])
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
          Source: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'Source',
                in: 'query',
                required: false,
                description:
                  '<p>The identity\'s email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in<a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note> <p>If you specify the <code>Source</code> parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.</p>',
                schema: { type: 'string' },
              },
            }),
          Destinations: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(AddressSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Destinations',
                in: 'query',
                required: false,
                description:
                  'A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/Address' } },
              },
            }),
          RawMessage: z
            .object({
              Data: RawMessageDataSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The raw data of the message. This data needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an AWS SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, and MIME encoding.</p> <p>The To:, CC:, and BCC: headers in the raw message can contain a group list.</p> <p>If you are using <code>SendRawEmail</code> with sending authorization, you can include X-headers in the raw message to specify the "Source," "From," and "Return-Path" addresses. For more information, see the documentation for <code>SendRawEmail</code>. </p> <important> <p>Do not include these X-headers in the DKIM signature, because they are removed by Amazon SES before sending the email.</p> </important> <p>For more information, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.</p>',
                  }),
              ),
            })
            .openapi({
              param: {
                name: 'RawMessage',
                in: 'query',
                required: true,
                description:
                  '<p>The raw email message itself. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by a blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html">Unsupported Attachment Types</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>The entire message must be base64-encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Sending Raw Email</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> </ul>',
                schema: {
                  type: 'object',
                  required: ['Data'],
                  properties: {
                    Data: {
                      allOf: [
                        { $ref: '#/components/schemas/RawMessageData' },
                        {
                          description:
                            '<p>The raw data of the message. This data needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an AWS SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, and MIME encoding.</p> <p>The To:, CC:, and BCC: headers in the raw message can contain a group list.</p> <p>If you are using <code>SendRawEmail</code> with sending authorization, you can include X-headers in the raw message to specify the "Source," "From," and "Return-Path" addresses. For more information, see the documentation for <code>SendRawEmail</code>. </p> <important> <p>Do not include these X-headers in the DKIM signature, because they are removed by Amazon SES before sending the email.</p> </important> <p>For more information, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.</p>',
                        },
                      ],
                    },
                  },
                  description: 'Represents the raw data of the message.',
                },
              },
              required: ['Data'],
              description: 'Represents the raw data of the message.',
            }),
          FromArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'FromArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-FROM-ARN</code> in the raw message of the email. If you use both the <code>FromArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>FromArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          SourceArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'SourceArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-SOURCE-ARN</code> in the raw message of the email. If you use both the <code>SourceArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>SourceArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          ReturnPathArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReturnPathArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-RETURN-PATH-ARN</code> in the raw message of the email. If you use both the <code>ReturnPathArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>ReturnPathArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(MessageTagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description:
                  'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendRawEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/MessageTag' } },
              },
            }),
          ConfigurationSetName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: false,
                description:
                  'The name of the configuration set to use when you send an email using <code>SendRawEmail</code>.',
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('SendRawEmail')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SendRawEmail'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendRawEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    484: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const postActionSendRawEmailRoute = createRoute({
  method: 'post',
  path: '/#Action=SendRawEmail',
  description:
    '<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn\'t verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn\'t in a valid format (that is, it\'s not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn\'t preserved. For this reason, we highly recommend that you encode all content that isn\'t 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email\'s Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don\'t include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>',
  operationId: 'POST_SendRawEmail',
  request: {
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
        .literal('SendRawEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendRawEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendRawEmailRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendRawEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    484: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const getActionSendTemplatedEmailRoute = createRoute({
  method: 'get',
  path: '/#Action=SendTemplatedEmail',
  description:
    '<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can\'t render the email because the template contains errors, it doesn\'t send the email. Additionally, because it already accepted the message, Amazon SES doesn\'t return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>',
  operationId: 'GET_SendTemplatedEmail',
  request: {
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
          ['ToAddresses', ['Destination']],
          ['CcAddresses', ['Destination']],
          ['BccAddresses', ['Destination']],
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
          Source: z
            .string()
            .openapi({
              param: {
                name: 'Source',
                in: 'query',
                required: true,
                description:
                  '<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in<a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          Destination: z
            .object({
              ToAddresses: AddressListSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The recipients to place on the To: line of the message.',
                  }),
              ).exactOptional(),
              CcAddresses: AddressListSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The recipients to place on the CC: line of the message.',
                  }),
              ).exactOptional(),
              BccAddresses: AddressListSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The recipients to place on the BCC: line of the message.',
                  }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'Destination',
                in: 'query',
                required: true,
                description:
                  'The destination for this email, composed of To:, CC:, and BCC: fields. A Destination can include up to 50 recipients across these three fields.',
                schema: {
                  type: 'object',
                  properties: {
                    ToAddresses: {
                      allOf: [
                        { $ref: '#/components/schemas/AddressList' },
                        { description: 'The recipients to place on the To: line of the message.' },
                      ],
                    },
                    CcAddresses: {
                      allOf: [
                        { $ref: '#/components/schemas/AddressList' },
                        { description: 'The recipients to place on the CC: line of the message.' },
                      ],
                    },
                    BccAddresses: {
                      allOf: [
                        { $ref: '#/components/schemas/AddressList' },
                        { description: 'The recipients to place on the BCC: line of the message.' },
                      ],
                    },
                  },
                  description:
                    '<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
                },
              },
              description:
                '<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>',
              required: [],
            }),
          ReplyToAddresses: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(AddressSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'ReplyToAddresses',
                in: 'query',
                required: false,
                description:
                  'The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/Address' } },
              },
            }),
          ReturnPath: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReturnPath',
                in: 'query',
                required: false,
                description:
                  "The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. ",
                schema: { type: 'string' },
              },
            }),
          SourceArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'SourceArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                schema: { type: 'string' },
              },
            }),
          ReturnPathArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReturnPathArn',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>',
                schema: { type: 'string' },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(MessageTagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description:
                  'A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/MessageTag' } },
              },
            }),
          ConfigurationSetName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: false,
                description:
                  'The name of the configuration set to use when you send an email using <code>SendTemplatedEmail</code>.',
                schema: { type: 'string' },
              },
            }),
          Template: z
            .string()
            .openapi({
              param: {
                name: 'Template',
                in: 'query',
                required: true,
                description: 'The template to use when sending this email.',
                schema: { type: 'string' },
              },
            }),
          TemplateArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'TemplateArn',
                in: 'query',
                required: false,
                description: 'The ARN of the template to use when sending this email.',
                schema: { type: 'string' },
              },
            }),
          TemplateData: z
            .string()
            .max(262144)
            .openapi({
              param: {
                name: 'TemplateData',
                in: 'query',
                required: true,
                description:
                  'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
                schema: { type: 'string', maxLength: 262144 },
              },
            }),
          Action: z
            .literal('SendTemplatedEmail')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SendTemplatedEmail'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendTemplatedEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    485: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const postActionSendTemplatedEmailRoute = createRoute({
  method: 'post',
  path: '/#Action=SendTemplatedEmail',
  description:
    '<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can\'t render the email because the template contains errors, it doesn\'t send the email. Additionally, because it already accepted the message, Amazon SES doesn\'t return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>',
  operationId: 'POST_SendTemplatedEmail',
  request: {
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
        .literal('SendTemplatedEmail')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SendTemplatedEmail'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SendTemplatedEmailRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SendTemplatedEmailResponseSchema } },
    },
    480: {
      description: 'MessageRejected',
      content: { 'text/xml': { schema: MessageRejectedSchema } },
    },
    481: {
      description: 'MailFromDomainNotVerifiedException',
      content: { 'text/xml': { schema: MailFromDomainNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'ConfigurationSetSendingPausedException',
      content: { 'text/xml': { schema: ConfigurationSetSendingPausedExceptionSchema } },
    },
    485: {
      description: 'AccountSendingPausedException',
      content: { 'text/xml': { schema: AccountSendingPausedExceptionSchema } },
    },
  },
})

export const getActionSetActiveReceiptRuleSetRoute = createRoute({
  method: 'get',
  path: '/#Action=SetActiveReceiptRuleSet',
  description:
    '<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_SetActiveReceiptRuleSet',
  request: {
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
      RuleSetName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: false,
            description:
              'The name of the receipt rule set to make active. Setting this value to null disables all email receiving.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SetActiveReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetActiveReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetActiveReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionSetActiveReceiptRuleSetRoute = createRoute({
  method: 'post',
  path: '/#Action=SetActiveReceiptRuleSet',
  description:
    '<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_SetActiveReceiptRuleSet',
  request: {
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
        .literal('SetActiveReceiptRuleSet')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetActiveReceiptRuleSet'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetActiveReceiptRuleSetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetActiveReceiptRuleSetResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionSetIdentityDkimEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=SetIdentityDkimEnabled',
  description:
    '<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn\'t complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_SetIdentityDkimEnabled',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description: 'The identity for which DKIM signing should be enabled or disabled.',
            schema: { type: 'string' },
          },
        }),
      DkimEnabled: z
        .stringbool()
        .openapi({
          param: {
            name: 'DkimEnabled',
            in: 'query',
            required: true,
            description:
              'Sets whether DKIM signing is enabled for an identity. Set to <code>true</code> to enable DKIM signing for this identity; <code>false</code> to disable it. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('SetIdentityDkimEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityDkimEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityDkimEnabledResponseSchema } },
    },
  },
})

export const postActionSetIdentityDkimEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=SetIdentityDkimEnabled',
  description:
    '<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn\'t complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_SetIdentityDkimEnabled',
  request: {
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
        .literal('SetIdentityDkimEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityDkimEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetIdentityDkimEnabledRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityDkimEnabledResponseSchema } },
    },
  },
})

export const getActionSetIdentityFeedbackForwardingEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=SetIdentityFeedbackForwardingEnabled',
  description:
    '<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_SetIdentityFeedbackForwardingEnabled',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              'The identity for which to set bounce and complaint notification forwarding. Examples: <code>user@example.com</code>, <code>example.com</code>.',
            schema: { type: 'string' },
          },
        }),
      ForwardingEnabled: z
        .stringbool()
        .openapi({
          param: {
            name: 'ForwardingEnabled',
            in: 'query',
            required: true,
            description:
              'Sets whether Amazon SES will forward bounce and complaint notifications as email. <code>true</code> specifies that Amazon SES will forward bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. <code>false</code> specifies that Amazon SES will publish bounce and complaint notifications only through Amazon SNS. This value can only be set to <code>false</code> when Amazon SNS topics are set for both <code>Bounce</code> and <code>Complaint</code> notification types.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('SetIdentityFeedbackForwardingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityFeedbackForwardingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityFeedbackForwardingEnabledResponseSchema } },
    },
  },
})

export const postActionSetIdentityFeedbackForwardingEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=SetIdentityFeedbackForwardingEnabled',
  description:
    '<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_SetIdentityFeedbackForwardingEnabled',
  request: {
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
        .literal('SetIdentityFeedbackForwardingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityFeedbackForwardingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: SetIdentityFeedbackForwardingEnabledRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityFeedbackForwardingEnabledResponseSchema } },
    },
  },
})

export const getActionSetIdentityHeadersInNotificationsEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=SetIdentityHeadersInNotificationsEnabled',
  description:
    '<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_SetIdentityHeadersInNotificationsEnabled',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              'The identity for which to enable or disable headers in notifications. Examples: <code>user@example.com</code>, <code>example.com</code>.',
            schema: { type: 'string' },
          },
        }),
      NotificationType: z
        .enum(['Bounce', 'Complaint', 'Delivery'])
        .openapi({
          param: {
            name: 'NotificationType',
            in: 'query',
            required: true,
            description:
              'The notification type for which to enable or disable headers in notifications. ',
            schema: { type: 'string', enum: ['Bounce', 'Complaint', 'Delivery'] },
          },
        }),
      Enabled: z
        .stringbool()
        .openapi({
          param: {
            name: 'Enabled',
            in: 'query',
            required: true,
            description:
              '<p>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of <code>true</code> specifies that Amazon SES will include headers in notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in notifications.</p> <p>This value can only be set when <code>NotificationType</code> is already set to use a particular Amazon SNS topic.</p>',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('SetIdentityHeadersInNotificationsEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityHeadersInNotificationsEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityHeadersInNotificationsEnabledResponseSchema } },
    },
  },
})

export const postActionSetIdentityHeadersInNotificationsEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=SetIdentityHeadersInNotificationsEnabled',
  description:
    '<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_SetIdentityHeadersInNotificationsEnabled',
  request: {
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
        .literal('SetIdentityHeadersInNotificationsEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityHeadersInNotificationsEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: SetIdentityHeadersInNotificationsEnabledRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityHeadersInNotificationsEnabledResponseSchema } },
    },
  },
})

export const getActionSetIdentityMailFromDomainRoute = createRoute({
  method: 'get',
  path: '/#Action=SetIdentityMailFromDomain',
  description:
    '<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain\'s DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_SetIdentityMailFromDomain',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              'The verified identity for which you want to enable or disable the specified custom MAIL FROM domain.',
            schema: { type: 'string' },
          },
        }),
      MailFromDomain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MailFromDomain',
            in: 'query',
            required: false,
            description:
              'The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>), and 3) not be used to receive emails. A value of <code>null</code> disables the custom MAIL FROM setting for the identity.',
            schema: { type: 'string' },
          },
        }),
      BehaviorOnMXFailure: z
        .enum(['UseDefaultValue', 'RejectMessage'])
        .exactOptional()
        .openapi({
          param: {
            name: 'BehaviorOnMXFailure',
            in: 'query',
            required: false,
            description:
              '<p>The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose <code>UseDefaultValue</code>, Amazon SES will use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose <code>RejectMessage</code>, Amazon SES will return a <code>MailFromDomainNotVerified</code> error and not send the email.</p> <p>The action specified in <code>BehaviorOnMXFailure</code> is taken when the custom MAIL FROM domain setup is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>',
            schema: { type: 'string', enum: ['UseDefaultValue', 'RejectMessage'] },
          },
        }),
      Action: z
        .literal('SetIdentityMailFromDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityMailFromDomain'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityMailFromDomainResponseSchema } },
    },
  },
})

export const postActionSetIdentityMailFromDomainRoute = createRoute({
  method: 'post',
  path: '/#Action=SetIdentityMailFromDomain',
  description:
    '<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain\'s DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_SetIdentityMailFromDomain',
  request: {
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
        .literal('SetIdentityMailFromDomain')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityMailFromDomain'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetIdentityMailFromDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityMailFromDomainResponseSchema } },
    },
  },
})

export const getActionSetIdentityNotificationTopicRoute = createRoute({
  method: 'get',
  path: '/#Action=SetIdentityNotificationTopic',
  description:
    '<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_SetIdentityNotificationTopic',
  request: {
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
      Identity: z
        .string()
        .openapi({
          param: {
            name: 'Identity',
            in: 'query',
            required: true,
            description:
              '<p>The identity (email address or domain) that you want to set the Amazon SNS topic for.</p> <important> <p>You can only specify a verified identity for this parameter.</p> </important> <p>You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: <code>sender@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>',
            schema: { type: 'string' },
          },
        }),
      NotificationType: z
        .enum(['Bounce', 'Complaint', 'Delivery'])
        .openapi({
          param: {
            name: 'NotificationType',
            in: 'query',
            required: true,
            description:
              'The type of notifications that will be published to the specified Amazon SNS topic.',
            schema: { type: 'string', enum: ['Bounce', 'Complaint', 'Delivery'] },
          },
        }),
      SnsTopic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnsTopic',
            in: 'query',
            required: false,
            description:
              'The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, <code>SnsTopic</code> is cleared and publishing is disabled.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SetIdentityNotificationTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityNotificationTopic'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityNotificationTopicResponseSchema } },
    },
  },
})

export const postActionSetIdentityNotificationTopicRoute = createRoute({
  method: 'post',
  path: '/#Action=SetIdentityNotificationTopic',
  description:
    '<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_SetIdentityNotificationTopic',
  request: {
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
        .literal('SetIdentityNotificationTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIdentityNotificationTopic'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetIdentityNotificationTopicRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIdentityNotificationTopicResponseSchema } },
    },
  },
})

export const getActionSetReceiptRulePositionRoute = createRoute({
  method: 'get',
  path: '/#Action=SetReceiptRulePosition',
  description:
    '<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_SetReceiptRulePosition',
  request: {
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
      RuleSetName: z
        .string()
        .openapi({
          param: {
            name: 'RuleSetName',
            in: 'query',
            required: true,
            description:
              'The name of the receipt rule set that contains the receipt rule to reposition.',
            schema: { type: 'string' },
          },
        }),
      RuleName: z
        .string()
        .openapi({
          param: {
            name: 'RuleName',
            in: 'query',
            required: true,
            description: 'The name of the receipt rule to reposition.',
            schema: { type: 'string' },
          },
        }),
      After: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'After',
            in: 'query',
            required: false,
            description:
              'The name of the receipt rule after which to place the specified receipt rule.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SetReceiptRulePosition')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetReceiptRulePosition'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetReceiptRulePositionResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionSetReceiptRulePositionRoute = createRoute({
  method: 'post',
  path: '/#Action=SetReceiptRulePosition',
  description:
    '<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_SetReceiptRulePosition',
  request: {
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
        .literal('SetReceiptRulePosition')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetReceiptRulePosition'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetReceiptRulePositionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetReceiptRulePositionResponseSchema } },
    },
    480: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionTestRenderTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=TestRenderTemplate',
  description:
    '<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_TestRenderTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description: 'The name of the template that you want to render.',
            schema: { type: 'string' },
          },
        }),
      TemplateData: z
        .string()
        .max(262144)
        .openapi({
          param: {
            name: 'TemplateData',
            in: 'query',
            required: true,
            description:
              'A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.',
            schema: { type: 'string', maxLength: 262144 },
          },
        }),
      Action: z
        .literal('TestRenderTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TestRenderTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: TestRenderTemplateResponseSchema } },
    },
    480: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidRenderingParameterException',
      content: { 'text/xml': { schema: InvalidRenderingParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRenderingAttributeException',
      content: { 'text/xml': { schema: MissingRenderingAttributeExceptionSchema } },
    },
  },
})

export const postActionTestRenderTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=TestRenderTemplate',
  description:
    '<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_TestRenderTemplate',
  request: {
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
        .literal('TestRenderTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TestRenderTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: TestRenderTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: TestRenderTemplateResponseSchema } },
    },
    480: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidRenderingParameterException',
      content: { 'text/xml': { schema: InvalidRenderingParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRenderingAttributeException',
      content: { 'text/xml': { schema: MissingRenderingAttributeExceptionSchema } },
    },
  },
})

export const getActionUpdateAccountSendingEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateAccountSendingEnabled',
  description:
    '<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateAccountSendingEnabled',
  request: {
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
      Enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Enabled',
            in: 'query',
            required: false,
            description:
              'Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('UpdateAccountSendingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateAccountSendingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionUpdateAccountSendingEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateAccountSendingEnabled',
  description:
    '<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateAccountSendingEnabled',
  request: {
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
        .literal('UpdateAccountSendingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateAccountSendingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateAccountSendingEnabledRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionUpdateConfigurationSetEventDestinationRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateConfigurationSetEventDestination',
  description:
    '<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateConfigurationSetEventDestination',
  request: {
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
          ['Name', ['EventDestination']],
          ['Enabled', ['EventDestination']],
          ['MatchingEventTypes', ['EventDestination']],
          ['KinesisFirehoseDestination', ['EventDestination']],
          ['CloudWatchDestination', ['EventDestination']],
          ['SNSDestination', ['EventDestination']],
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
          ConfigurationSetName: z
            .string()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: true,
                description:
                  'The name of the configuration set that contains the event destination that you want to update.',
                schema: { type: 'string' },
              },
            }),
          EventDestination: z
            .object({
              Name: EventDestinationNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of the event destination. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                  }),
              ),
              Enabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  EnabledSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to <code>true</code> to enable publishing to this destination; set to <code>false</code> to prevent publishing to this destination. The default value is <code>false</code>.',
                    }),
                )
                .exactOptional(),
              MatchingEventTypes: EventTypesSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The type of email sending events to publish to the event destination.',
                  }),
              ),
              KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.',
                  }),
              ).exactOptional(),
              CloudWatchDestination: CloudWatchDestinationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.',
                  }),
              ).exactOptional(),
              SNSDestination: SNSDestinationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.',
                  }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'EventDestination',
                in: 'query',
                required: true,
                description:
                  'The event destination object that you want to apply to the specified configuration set.',
                schema: {
                  type: 'object',
                  required: ['Name', 'MatchingEventTypes'],
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/EventDestinationName' },
                        {
                          description:
                            '<p>The name of the event destination. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                        },
                      ],
                    },
                    Enabled: {
                      allOf: [
                        { $ref: '#/components/schemas/Enabled' },
                        {
                          description:
                            'Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to <code>true</code> to enable publishing to this destination; set to <code>false</code> to prevent publishing to this destination. The default value is <code>false</code>.',
                        },
                      ],
                    },
                    MatchingEventTypes: {
                      allOf: [
                        { $ref: '#/components/schemas/EventTypes' },
                        {
                          description:
                            'The type of email sending events to publish to the event destination.',
                        },
                      ],
                    },
                    KinesisFirehoseDestination: {
                      allOf: [
                        { $ref: '#/components/schemas/KinesisFirehoseDestination' },
                        {
                          description:
                            'An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.',
                        },
                      ],
                    },
                    CloudWatchDestination: {
                      allOf: [
                        { $ref: '#/components/schemas/CloudWatchDestination' },
                        {
                          description:
                            'An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.',
                        },
                      ],
                    },
                    SNSDestination: {
                      allOf: [
                        { $ref: '#/components/schemas/SNSDestination' },
                        {
                          description:
                            'An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['Name', 'MatchingEventTypes'],
              description:
                '<p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>',
            }),
          Action: z
            .literal('UpdateConfigurationSetEventDestination')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateConfigurationSetEventDestination'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateConfigurationSetEventDestinationResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EventDestinationDoesNotExistException',
      content: { 'text/xml': { schema: EventDestinationDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidCloudWatchDestinationException',
      content: { 'text/xml': { schema: InvalidCloudWatchDestinationExceptionSchema } },
    },
    483: {
      description: 'InvalidFirehoseDestinationException',
      content: { 'text/xml': { schema: InvalidFirehoseDestinationExceptionSchema } },
    },
    484: {
      description: 'InvalidSNSDestinationException',
      content: { 'text/xml': { schema: InvalidSNSDestinationExceptionSchema } },
    },
  },
})

export const postActionUpdateConfigurationSetEventDestinationRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateConfigurationSetEventDestination',
  description:
    '<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateConfigurationSetEventDestination',
  request: {
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
        .literal('UpdateConfigurationSetEventDestination')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationSetEventDestination'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: UpdateConfigurationSetEventDestinationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateConfigurationSetEventDestinationResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EventDestinationDoesNotExistException',
      content: { 'text/xml': { schema: EventDestinationDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidCloudWatchDestinationException',
      content: { 'text/xml': { schema: InvalidCloudWatchDestinationExceptionSchema } },
    },
    483: {
      description: 'InvalidFirehoseDestinationException',
      content: { 'text/xml': { schema: InvalidFirehoseDestinationExceptionSchema } },
    },
    484: {
      description: 'InvalidSNSDestinationException',
      content: { 'text/xml': { schema: InvalidSNSDestinationExceptionSchema } },
    },
  },
})

export const getActionUpdateConfigurationSetReputationMetricsEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateConfigurationSetReputationMetricsEnabled',
  description:
    '<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateConfigurationSetReputationMetricsEnabled',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: true,
            description: 'The name of the configuration set that you want to update.',
            schema: { type: 'string' },
          },
        }),
      Enabled: z
        .stringbool()
        .openapi({
          param: {
            name: 'Enabled',
            in: 'query',
            required: true,
            description:
              'Describes whether or not Amazon SES will publish reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('UpdateConfigurationSetReputationMetricsEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationSetReputationMetricsEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionUpdateConfigurationSetReputationMetricsEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateConfigurationSetReputationMetricsEnabled',
  description:
    '<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateConfigurationSetReputationMetricsEnabled',
  request: {
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
        .literal('UpdateConfigurationSetReputationMetricsEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationSetReputationMetricsEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: {
        'text/xml': { schema: UpdateConfigurationSetReputationMetricsEnabledRequestSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionUpdateConfigurationSetSendingEnabledRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateConfigurationSetSendingEnabled',
  description:
    '<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateConfigurationSetSendingEnabled',
  request: {
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'query',
            required: true,
            description: 'The name of the configuration set that you want to update.',
            schema: { type: 'string' },
          },
        }),
      Enabled: z
        .stringbool()
        .openapi({
          param: {
            name: 'Enabled',
            in: 'query',
            required: true,
            description:
              'Describes whether email sending is enabled or disabled for the configuration set. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('UpdateConfigurationSetSendingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationSetSendingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const postActionUpdateConfigurationSetSendingEnabledRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateConfigurationSetSendingEnabled',
  description:
    '<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateConfigurationSetSendingEnabled',
  request: {
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
        .literal('UpdateConfigurationSetSendingEnabled')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationSetSendingEnabled'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: UpdateConfigurationSetSendingEnabledRequestSchema } },
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
  },
})

export const getActionUpdateConfigurationSetTrackingOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateConfigurationSetTrackingOptions',
  description:
    '<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'GET_UpdateConfigurationSetTrackingOptions',
  request: {
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
        const spread = new Map<string, string[]>([['CustomRedirectDomain', ['TrackingOptions']]])
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
          ConfigurationSetName: z
            .string()
            .openapi({
              param: {
                name: 'ConfigurationSetName',
                in: 'query',
                required: true,
                description:
                  'The name of the configuration set for which you want to update the custom tracking domain.',
                schema: { type: 'string' },
              },
            }),
          TrackingOptions: z
            .object({
              CustomRedirectDomain: CustomRedirectDomainSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The custom subdomain that will be used to redirect email recipients to the Amazon SES event tracking domain.',
                  }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'TrackingOptions',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    CustomRedirectDomain: {
                      allOf: [
                        { $ref: '#/components/schemas/CustomRedirectDomain' },
                        {
                          description:
                            'The custom subdomain that will be used to redirect email recipients to the Amazon SES event tracking domain.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>',
                },
              },
              description:
                '<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>',
              required: [],
            }),
          Action: z
            .literal('UpdateConfigurationSetTrackingOptions')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateConfigurationSetTrackingOptions'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'TrackingOptionsDoesNotExistException',
      content: { 'text/xml': { schema: TrackingOptionsDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidTrackingOptionsException',
      content: { 'text/xml': { schema: InvalidTrackingOptionsExceptionSchema } },
    },
  },
})

export const postActionUpdateConfigurationSetTrackingOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateConfigurationSetTrackingOptions',
  description:
    '<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>',
  operationId: 'POST_UpdateConfigurationSetTrackingOptions',
  request: {
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
        .literal('UpdateConfigurationSetTrackingOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationSetTrackingOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: UpdateConfigurationSetTrackingOptionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateConfigurationSetTrackingOptionsResponseSchema } },
    },
    480: {
      description: 'ConfigurationSetDoesNotExistException',
      content: { 'text/xml': { schema: ConfigurationSetDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'TrackingOptionsDoesNotExistException',
      content: { 'text/xml': { schema: TrackingOptionsDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidTrackingOptionsException',
      content: { 'text/xml': { schema: InvalidTrackingOptionsExceptionSchema } },
    },
  },
})

export const getActionUpdateCustomVerificationEmailTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateCustomVerificationEmailTemplate',
  description:
    '<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateCustomVerificationEmailTemplate',
  request: {
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
      TemplateName: z
        .string()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description:
              'The name of the custom verification email template that you want to update.',
            schema: { type: 'string' },
          },
        }),
      FromEmailAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FromEmailAddress',
            in: 'query',
            required: false,
            description: 'The email address that the custom verification email is sent from.',
            schema: { type: 'string' },
          },
        }),
      TemplateSubject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateSubject',
            in: 'query',
            required: false,
            description: 'The subject line of the custom verification email.',
            schema: { type: 'string' },
          },
        }),
      TemplateContent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateContent',
            in: 'query',
            required: false,
            description:
              'The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.',
            schema: { type: 'string' },
          },
        }),
      SuccessRedirectionURL: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SuccessRedirectionURL',
            in: 'query',
            required: false,
            description:
              'The URL that the recipient of the verification email is sent to if his or her address is successfully verified.',
            schema: { type: 'string' },
          },
        }),
      FailureRedirectionURL: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FailureRedirectionURL',
            in: 'query',
            required: false,
            description:
              'The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('UpdateCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CustomVerificationEmailTemplateDoesNotExistException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateDoesNotExistExceptionSchema },
      },
    },
    481: {
      description: 'FromEmailAddressNotVerifiedException',
      content: { 'text/xml': { schema: FromEmailAddressNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'CustomVerificationEmailInvalidContentException',
      content: { 'text/xml': { schema: CustomVerificationEmailInvalidContentExceptionSchema } },
    },
  },
})

export const postActionUpdateCustomVerificationEmailTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateCustomVerificationEmailTemplate',
  description:
    '<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateCustomVerificationEmailTemplate',
  request: {
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
        .literal('UpdateCustomVerificationEmailTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateCustomVerificationEmailTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: UpdateCustomVerificationEmailTemplateRequestSchema } },
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CustomVerificationEmailTemplateDoesNotExistException',
      content: {
        'text/xml': { schema: CustomVerificationEmailTemplateDoesNotExistExceptionSchema },
      },
    },
    481: {
      description: 'FromEmailAddressNotVerifiedException',
      content: { 'text/xml': { schema: FromEmailAddressNotVerifiedExceptionSchema } },
    },
    482: {
      description: 'CustomVerificationEmailInvalidContentException',
      content: { 'text/xml': { schema: CustomVerificationEmailInvalidContentExceptionSchema } },
    },
  },
})

export const getActionUpdateReceiptRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateReceiptRule',
  description:
    '<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateReceiptRule',
  request: {
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
          ['Name', ['Rule']],
          ['Enabled', ['Rule']],
          ['TlsPolicy', ['Rule']],
          ['Recipients', ['Rule']],
          ['Actions', ['Rule']],
          ['ScanEnabled', ['Rule']],
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
          RuleSetName: z
            .string()
            .openapi({
              param: {
                name: 'RuleSetName',
                in: 'query',
                required: true,
                description: 'The name of the receipt rule set that the receipt rule belongs to.',
                schema: { type: 'string' },
              },
            }),
          Rule: z
            .object({
              Name: ReceiptRuleNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of the receipt rule. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                  }),
              ),
              Enabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  EnabledSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'If <code>true</code>, the receipt rule is active. The default value is <code>false</code>.',
                    }),
                )
                .exactOptional(),
              TlsPolicy: TlsPolicySchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The default is <code>Optional</code>.',
                  }),
              ).exactOptional(),
              Recipients: RecipientsListSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.',
                  }),
              ).exactOptional(),
              Actions: ReceiptActionsListSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.',
                  }),
              ).exactOptional(),
              ScanEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  EnabledSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'If <code>true</code>, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is <code>false</code>.',
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              param: {
                name: 'Rule',
                in: 'query',
                required: true,
                description: 'A data structure that contains the updated receipt rule information.',
                schema: {
                  type: 'object',
                  required: ['Name'],
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/ReceiptRuleName' },
                        {
                          description:
                            '<p>The name of the receipt rule. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>',
                        },
                      ],
                    },
                    Enabled: {
                      allOf: [
                        { $ref: '#/components/schemas/Enabled' },
                        {
                          description:
                            'If <code>true</code>, the receipt rule is active. The default value is <code>false</code>.',
                        },
                      ],
                    },
                    TlsPolicy: {
                      allOf: [
                        { $ref: '#/components/schemas/TlsPolicy' },
                        {
                          description:
                            'Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The default is <code>Optional</code>.',
                        },
                      ],
                    },
                    Recipients: {
                      allOf: [
                        { $ref: '#/components/schemas/RecipientsList' },
                        {
                          description:
                            'The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule will match all recipients under all verified domains.',
                        },
                      ],
                    },
                    Actions: {
                      allOf: [
                        { $ref: '#/components/schemas/ReceiptActionsList' },
                        {
                          description:
                            'An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.',
                        },
                      ],
                    },
                    ScanEnabled: {
                      allOf: [
                        { $ref: '#/components/schemas/Enabled' },
                        {
                          description:
                            'If <code>true</code>, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is <code>false</code>.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule\'s actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>',
                },
              },
              required: ['Name'],
              description:
                '<p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule\'s actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>',
            }),
          Action: z
            .literal('UpdateReceiptRule')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateReceiptRule'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateReceiptRuleResponseSchema } },
    },
    480: {
      description: 'InvalidSnsTopicException',
      content: { 'text/xml': { schema: InvalidSnsTopicExceptionSchema } },
    },
    481: {
      description: 'InvalidS3ConfigurationException',
      content: { 'text/xml': { schema: InvalidS3ConfigurationExceptionSchema } },
    },
    482: {
      description: 'InvalidLambdaFunctionException',
      content: { 'text/xml': { schema: InvalidLambdaFunctionExceptionSchema } },
    },
    483: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postActionUpdateReceiptRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateReceiptRule',
  description:
    '<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateReceiptRule',
  request: {
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
        .literal('UpdateReceiptRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateReceiptRule'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateReceiptRuleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateReceiptRuleResponseSchema } },
    },
    480: {
      description: 'InvalidSnsTopicException',
      content: { 'text/xml': { schema: InvalidSnsTopicExceptionSchema } },
    },
    481: {
      description: 'InvalidS3ConfigurationException',
      content: { 'text/xml': { schema: InvalidS3ConfigurationExceptionSchema } },
    },
    482: {
      description: 'InvalidLambdaFunctionException',
      content: { 'text/xml': { schema: InvalidLambdaFunctionExceptionSchema } },
    },
    483: {
      description: 'RuleSetDoesNotExistException',
      content: { 'text/xml': { schema: RuleSetDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'RuleDoesNotExistException',
      content: { 'text/xml': { schema: RuleDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'text/xml': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getActionUpdateTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateTemplate',
  description:
    '<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_UpdateTemplate',
  request: {
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
          ['TemplateName', ['Template']],
          ['SubjectPart', ['Template']],
          ['TextPart', ['Template']],
          ['HtmlPart', ['Template']],
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
          Template: z
            .object({
              TemplateName: TemplateNameSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                  }),
              ),
              SubjectPart: SubjectPartSchema.and(
                z.any().openapi({ description: 'The subject line of the email.' }),
              ).exactOptional(),
              TextPart: TextPartSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The email body that will be visible to recipients whose email clients do not display HTML.',
                  }),
              ).exactOptional(),
              HtmlPart: HtmlPartSchema.and(
                z.any().openapi({ description: 'The HTML body of the email.' }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'Template',
                in: 'query',
                required: true,
                description: '',
                schema: {
                  type: 'object',
                  required: ['TemplateName'],
                  properties: {
                    TemplateName: {
                      allOf: [
                        { $ref: '#/components/schemas/TemplateName' },
                        {
                          description:
                            'The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.',
                        },
                      ],
                    },
                    SubjectPart: {
                      allOf: [
                        { $ref: '#/components/schemas/SubjectPart' },
                        { description: 'The subject line of the email.' },
                      ],
                    },
                    TextPart: {
                      allOf: [
                        { $ref: '#/components/schemas/TextPart' },
                        {
                          description:
                            'The email body that will be visible to recipients whose email clients do not display HTML.',
                        },
                      ],
                    },
                    HtmlPart: {
                      allOf: [
                        { $ref: '#/components/schemas/HtmlPart' },
                        { description: 'The HTML body of the email.' },
                      ],
                    },
                  },
                  description:
                    'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
                },
              },
              required: ['TemplateName'],
              description:
                'The content of the email, composed of a subject line, an HTML part, and a text-only part.',
            }),
          Action: z
            .literal('UpdateTemplate')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateTemplate'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateTemplateResponseSchema } },
    },
    480: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidTemplateException',
      content: { 'text/xml': { schema: InvalidTemplateExceptionSchema } },
    },
  },
})

export const postActionUpdateTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateTemplate',
  description:
    '<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_UpdateTemplate',
  request: {
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
        .literal('UpdateTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateTemplateResponseSchema } },
    },
    480: {
      description: 'TemplateDoesNotExistException',
      content: { 'text/xml': { schema: TemplateDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidTemplateException',
      content: { 'text/xml': { schema: InvalidTemplateExceptionSchema } },
    },
  },
})

export const getActionVerifyDomainDkimRoute = createRoute({
  method: 'get',
  path: '/#Action=VerifyDomainDkim',
  description:
    "<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html\">verify it</a> or you successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>",
  operationId: 'GET_VerifyDomainDkim',
  request: {
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
      Domain: z
        .string()
        .openapi({
          param: {
            name: 'Domain',
            in: 'query',
            required: true,
            description: 'The name of the domain to be verified for Easy DKIM signing.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('VerifyDomainDkim')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyDomainDkim'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifyDomainDkimResponseSchema } },
    },
  },
})

export const postActionVerifyDomainDkimRoute = createRoute({
  method: 'post',
  path: '/#Action=VerifyDomainDkim',
  description:
    "<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html\">verify it</a> or you successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>",
  operationId: 'POST_VerifyDomainDkim',
  request: {
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
        .literal('VerifyDomainDkim')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyDomainDkim'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: VerifyDomainDkimRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifyDomainDkimResponseSchema } },
    },
  },
})

export const getActionVerifyDomainIdentityRoute = createRoute({
  method: 'get',
  path: '/#Action=VerifyDomainIdentity',
  description:
    '<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_VerifyDomainIdentity',
  request: {
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
      Domain: z
        .string()
        .openapi({
          param: {
            name: 'Domain',
            in: 'query',
            required: true,
            description: 'The domain to be verified.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('VerifyDomainIdentity')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyDomainIdentity'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifyDomainIdentityResponseSchema } },
    },
  },
})

export const postActionVerifyDomainIdentityRoute = createRoute({
  method: 'post',
  path: '/#Action=VerifyDomainIdentity',
  description:
    '<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_VerifyDomainIdentity',
  request: {
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
        .literal('VerifyDomainIdentity')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyDomainIdentity'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: VerifyDomainIdentityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifyDomainIdentityResponseSchema } },
    },
  },
})

export const getActionVerifyEmailAddressRoute = createRoute({
  method: 'get',
  path: '/#Action=VerifyEmailAddress',
  description:
    'Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.',
  operationId: 'GET_VerifyEmailAddress',
  request: {
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
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'query',
            required: true,
            description: 'The email address to be verified.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('VerifyEmailAddress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyEmailAddress'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionVerifyEmailAddressRoute = createRoute({
  method: 'post',
  path: '/#Action=VerifyEmailAddress',
  description:
    'Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.',
  operationId: 'POST_VerifyEmailAddress',
  request: {
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
        .literal('VerifyEmailAddress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyEmailAddress'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: VerifyEmailAddressRequestSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionVerifyEmailIdentityRoute = createRoute({
  method: 'get',
  path: '/#Action=VerifyEmailIdentity',
  description:
    '<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'GET_VerifyEmailIdentity',
  request: {
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
      EmailAddress: z
        .string()
        .openapi({
          param: {
            name: 'EmailAddress',
            in: 'query',
            required: true,
            description: 'The email address to be verified.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('VerifyEmailIdentity')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyEmailIdentity'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifyEmailIdentityResponseSchema } },
    },
  },
})

export const postActionVerifyEmailIdentityRoute = createRoute({
  method: 'post',
  path: '/#Action=VerifyEmailIdentity',
  description:
    '<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>',
  operationId: 'POST_VerifyEmailIdentity',
  request: {
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
        .literal('VerifyEmailIdentity')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifyEmailIdentity'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: VerifyEmailIdentityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifyEmailIdentityResponseSchema } },
    },
  },
})
