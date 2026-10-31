import { createRoute, z } from '@hono/zod-openapi'

const DelegateSchema = z.string().openapi('Delegate')

const ActionSchema = z.string().openapi('Action')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const AuthorizationErrorExceptionSchema = z.any().openapi('AuthorizationErrorException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const BooleanSchema = z.boolean().openapi('Boolean')

const CheckIfPhoneNumberIsOptedOutResponseSchema = z
  .object({
    isOptedOut: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the phone number is opted out:</p> <ul> <li> <p> <code>true</code> – The phone number is opted out, meaning you cannot publish SMS messages to it.</p> </li> <li> <p> <code>false</code> – The phone number is opted in, meaning you can publish SMS messages to it.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.',
    required: [],
  })
  .openapi('CheckIfPhoneNumberIsOptedOutResponse')

const ThrottledExceptionSchema = z.any().openapi('ThrottledException')

const SubscriptionARNSchema = z.string().openapi('SubscriptionARN')

const ConfirmSubscriptionResponseSchema = z
  .object({
    SubscriptionArn: SubscriptionARNSchema.and(
      z.any().openapi({ description: 'The ARN of the created subscription.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for ConfirmSubscriptions action.', required: [] })
  .openapi('ConfirmSubscriptionResponse')

const SubscriptionLimitExceededExceptionSchema = z
  .any()
  .openapi('SubscriptionLimitExceededException')

const FilterPolicyLimitExceededExceptionSchema = z
  .any()
  .openapi('FilterPolicyLimitExceededException')

const StringSchema = z.string().openapi('String')

const CreatePlatformApplicationResponseSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z.any().openapi({ description: 'PlatformApplicationArn is returned.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response from CreatePlatformApplication action.', required: [] })
  .openapi('CreatePlatformApplicationResponse')

const CreateEndpointResponseSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z.any().openapi({ description: 'EndpointArn returned from CreateEndpoint action.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response from CreateEndpoint action.', required: [] })
  .openapi('CreateEndpointResponse')

const CreateSMSSandboxPhoneNumberResultSchema = z
  .object({})
  .openapi('CreateSMSSandboxPhoneNumberResult')

const OptedOutExceptionSchema = z.any().openapi('OptedOutException')

const UserErrorExceptionSchema = z.any().openapi('UserErrorException')

const TopicARNSchema = z.string().openapi('TopicARN')

const CreateTopicResponseSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) assigned to the created topic.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response from CreateTopic action.', required: [] })
  .openapi('CreateTopicResponse')

const AttributeValueSchema = z.string().openapi('AttributeValue')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The required key portion of the tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The optional value portion of the tag.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'The list of tags to be added to the specified topic.',
  })
  .openapi('Tag')

const TopicLimitExceededExceptionSchema = z.any().openapi('TopicLimitExceededException')

const InvalidSecurityExceptionSchema = z.any().openapi('InvalidSecurityException')

const TagLimitExceededExceptionSchema = z.any().openapi('TagLimitExceededException')

const StaleTagExceptionSchema = z.any().openapi('StaleTagException')

const TagPolicyExceptionSchema = z.any().openapi('TagPolicyException')

const ConcurrentAccessExceptionSchema = z.any().openapi('ConcurrentAccessException')

const DeleteSMSSandboxPhoneNumberResultSchema = z
  .object({})
  .openapi('DeleteSMSSandboxPhoneNumberResult')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const GetDataProtectionPolicyResponseSchema = z
  .object({
    DataProtectionPolicy: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Retrieves the <code>DataProtectionPolicy</code> in JSON string format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataProtectionPolicyResponse')

const MapStringToStringSchema = z.record(z.string(), StringSchema).openapi('MapStringToString')

const GetEndpointAttributesResponseSchema = z
  .object({
    Attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Attributes include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> <note> <p>The device token for the iOS platform is returned in lowercase.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response from GetEndpointAttributes of the EndpointArn.', required: [] })
  .openapi('GetEndpointAttributesResponse')

const GetPlatformApplicationAttributesResponseSchema = z
  .object({
    Attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Attributes include the following:</p> <ul> <li> <p> <code>AppleCertificateExpiryDate</code> – The expiry date of the SSL certificate used to configure certificate-based authentication.</p> </li> <li> <p> <code>ApplePlatformTeamID</code> – The Apple developer account ID used to configure token-based authentication.</p> </li> <li> <p> <code>ApplePlatformBundleID</code> – The app identifier used to configure token-based authentication.</p> </li> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which EndpointCreated event notifications should be sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which EndpointDeleted event notifications should be sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which EndpointUpdate event notifications should be sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for GetPlatformApplicationAttributes action.', required: [] })
  .openapi('GetPlatformApplicationAttributesResponse')

const GetSMSAttributesResponseSchema = z
  .object({
    attributes: MapStringToStringSchema.and(
      z.any().openapi({ description: 'The SMS attribute names and their values.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response from the <code>GetSMSAttributes</code> request.',
    required: [],
  })
  .openapi('GetSMSAttributesResponse')

const GetSMSSandboxAccountStatusResultSchema = z
  .object({
    IsInSandbox: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the calling Amazon Web Services account is in the SMS sandbox.',
        }),
    ),
  })
  .openapi({ required: ['IsInSandbox'] })
  .openapi('GetSMSSandboxAccountStatusResult')

const SubscriptionAttributesMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('SubscriptionAttributesMap')

const GetSubscriptionAttributesResponseSchema = z
  .object({
    Attributes: SubscriptionAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of the subscription's attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>ConfirmationWasAuthenticated</code> – <code>true</code> if the subscription confirmation request was authenticated.</p> </li> <li> <p> <code>DeliveryPolicy</code> – The JSON serialization of the subscription's delivery policy.</p> </li> <li> <p> <code>EffectiveDeliveryPolicy</code> – The JSON serialization of the effective delivery policy that takes into account the topic delivery policy and account system defaults.</p> </li> <li> <p> <code>FilterPolicy</code> – The filter policy JSON that is assigned to the subscription. For more information, see <a href=\"https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html\">Amazon SNS Message Filtering</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>Owner</code> – The Amazon Web Services account ID of the subscription's owner.</p> </li> <li> <p> <code>PendingConfirmation</code> – <code>true</code> if the subscription hasn't been confirmed. To confirm a pending subscription, call the <code>ConfirmSubscription</code> action with a confirmation token.</p> </li> <li> <p> <code>RawMessageDelivery</code> – <code>true</code> if raw message delivery is enabled for the subscription. Raw messages are free of JSON formatting and can be sent to HTTP/S and Amazon SQS endpoints.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> <li> <p> <code>SubscriptionArn</code> – The subscription's ARN.</p> </li> <li> <p> <code>TopicArn</code> – The topic ARN that the subscription is associated with.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href=\"https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html\">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for GetSubscriptionAttributes action.', required: [] })
  .openapi('GetSubscriptionAttributesResponse')

const TopicAttributesMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('TopicAttributesMap')

const GetTopicAttributesResponseSchema = z
  .object({
    Attributes: TopicAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of the topic\'s attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The JSON serialization of the topic\'s delivery policy.</p> </li> <li> <p> <code>DisplayName</code> – The human-readable name used in the <code>From</code> field for notifications to <code>email</code> and <code>email-json</code> endpoints.</p> </li> <li> <p> <code>EffectiveDeliveryPolicy</code> – The JSON serialization of the effective delivery policy, taking system defaults into account.</p> </li> <li> <p> <code>Owner</code> – The Amazon Web Services account ID of the topic\'s owner.</p> </li> <li> <p> <code>Policy</code> – The JSON serialization of the topic\'s access control policy.</p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.</p> <ul> <li> <p>By default, <code>SignatureVersion</code> is set to <b>1</b>. The signature is a Base64-encoded <b>SHA1withRSA</b> signature.</p> </li> <li> <p>When you set <code>SignatureVersion</code> to <b>2</b>. Amazon SNS uses a Base64-encoded <b>SHA256withRSA</b> signature. </p> <note> <p>If the API response does not include the <code>SignatureVersion</code> attribute, it means that the <code>SignatureVersion</code> for the topic has value <b>1</b>.</p> </note> </li> </ul> </li> <li> <p> <code>SubscriptionsConfirmed</code> – The number of confirmed subscriptions for the topic.</p> </li> <li> <p> <code>SubscriptionsDeleted</code> – The number of deleted subscriptions for the topic.</p> </li> <li> <p> <code>SubscriptionsPending</code> – The number of subscriptions pending confirmation for the topic.</p> </li> <li> <p> <code>TopicArn</code> – The topic\'s ARN.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> - The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO topic is created.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for GetTopicAttributes action.', required: [] })
  .openapi('GetTopicAttributesResponse')

const EndpointSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The <code>EndpointArn</code> for mobile app and device.' }),
    ).exactOptional(),
    Attributes: MapStringToStringSchema.and(
      z.any().openapi({ description: 'Attributes for endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The endpoint for mobile app and device.', required: [] })
  .openapi('Endpoint')

const ListOfEndpointsSchema = z.array(EndpointSchema).openapi('ListOfEndpoints')

const ListEndpointsByPlatformApplicationResponseSchema = z
  .object({
    Endpoints: ListOfEndpointsSchema.and(
      z
        .any()
        .openapi({
          description: 'Endpoints returned for ListEndpointsByPlatformApplication action.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'NextToken string is returned when calling ListEndpointsByPlatformApplication action if additional records are available after the first page results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for ListEndpointsByPlatformApplication action.', required: [] })
  .openapi('ListEndpointsByPlatformApplicationResponse')

const NextTokenSchema = z.string().openapi('NextToken')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const Iso2CountryCodeSchema = z
  .string()
  .regex(/^[A-Za-z]{2}$/)
  .max(2)
  .openapi({
    description:
      'The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. For example, GB or US.',
  })
  .openapi('Iso2CountryCode')

const RouteTypeSchema = z
  .enum(['Transactional', 'Promotional', 'Premium'])
  .openapi({
    description:
      'Enum listing out all supported route types. The following enum values are supported. 1. Transactional : Non-marketing traffic 2. Promotional : Marketing 3. Premium : Premium routes for OTP delivery to the carriers',
  })
  .openapi('RouteType')

const NumberCapabilitySchema = z
  .enum(['SMS', 'MMS', 'VOICE'])
  .openapi({ description: 'Enum listing out all supported number capabilities.' })
  .openapi('NumberCapability')

const NumberCapabilityListSchema = z
  .array(NumberCapabilitySchema)
  .openapi({ description: 'List of number capability (SMS,MMS,Voice).' })
  .openapi('NumberCapabilityList')

const PhoneNumberInformationSchema = z
  .object({
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the phone number was created.' }),
    ).exactOptional(),
    PhoneNumber: StringSchema.and(
      z.any().openapi({ description: 'The phone number.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the phone number.' }),
    ).exactOptional(),
    Iso2CountryCode: Iso2CountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-character code for the country or region, in ISO 3166-1 alpha-2 format.',
        }),
    ).exactOptional(),
    RouteType: RouteTypeSchema.and(
      z.any().openapi({ description: 'The list of supported routes.' }),
    ).exactOptional(),
    NumberCapabilities: NumberCapabilityListSchema.and(
      z.any().openapi({ description: 'The capabilities of each phone number.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of phone numbers and their metadata.', required: [] })
  .openapi('PhoneNumberInformation')

const PhoneNumberInformationListSchema = z
  .array(PhoneNumberInformationSchema)
  .openapi({ description: 'List of customer owned phone numbers.' })
  .openapi('PhoneNumberInformationList')

const ListOriginationNumbersResultSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>NextToken</code> string is returned when you call the <code>ListOriginationNumbers</code> operation if additional pages of records are available.',
        }),
    ).exactOptional(),
    PhoneNumbers: PhoneNumberInformationListSchema.and(
      z
        .any()
        .openapi({
          description: "A list of the calling account's verified and pending origination numbers.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOriginationNumbersResult')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const PhoneNumberSchema = z.string().openapi('PhoneNumber')

const PhoneNumberListSchema = z.array(PhoneNumberSchema).openapi('PhoneNumberList')

const String2Schema = z.string().openapi('String2')

const ListPhoneNumbersOptedOutResponseSchema = z
  .object({
    phoneNumbers: PhoneNumberListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of phone numbers that are opted out of receiving SMS messages. The list is paginated, and each page can contain up to 100 phone numbers.',
        }),
    ).exactOptional(),
    nextToken: String2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>NextToken</code> string is returned when you call the <code>ListPhoneNumbersOptedOut</code> action if additional records are available after the first page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response from the <code>ListPhoneNumbersOptedOut</code> action.',
    required: [],
  })
  .openapi('ListPhoneNumbersOptedOutResponse')

const PlatformApplicationSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z.any().openapi({ description: 'PlatformApplicationArn for platform application object.' }),
    ).exactOptional(),
    Attributes: MapStringToStringSchema.and(
      z.any().openapi({ description: 'Attributes for platform application object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Platform application object.', required: [] })
  .openapi('PlatformApplication')

const ListOfPlatformApplicationsSchema = z
  .array(PlatformApplicationSchema)
  .openapi('ListOfPlatformApplications')

const ListPlatformApplicationsResponseSchema = z
  .object({
    PlatformApplications: ListOfPlatformApplicationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Platform applications returned when calling ListPlatformApplications action.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'NextToken string is returned when calling ListPlatformApplications action if additional records are available after the first page results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for ListPlatformApplications action.', required: [] })
  .openapi('ListPlatformApplicationsResponse')

const PhoneNumberStringSchema = z
  .string()
  .regex(/^(\+[0-9]{8,}|[0-9]{0,9})$/)
  .max(20)
  .openapi('PhoneNumberString')

const SMSSandboxPhoneNumberVerificationStatusSchema = z
  .enum(['Pending', 'Verified'])
  .openapi({
    description:
      'Enum listing out all supported destination phone number verification statuses. The following enum values are supported. 1. PENDING : The destination phone number is pending verification. 2. VERIFIED : The destination phone number is verified.',
  })
  .openapi('SMSSandboxPhoneNumberVerificationStatus')

const SMSSandboxPhoneNumberSchema = z
  .object({
    PhoneNumber: PhoneNumberStringSchema.and(
      z.any().openapi({ description: 'The destination phone number.' }),
    ).exactOptional(),
    Status: SMSSandboxPhoneNumberVerificationStatusSchema.and(
      z.any().openapi({ description: "The destination phone number's verification status." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A verified or pending destination phone number in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('SMSSandboxPhoneNumber')

const SMSSandboxPhoneNumberListSchema = z
  .array(SMSSandboxPhoneNumberSchema)
  .openapi('SMSSandboxPhoneNumberList')

const ListSMSSandboxPhoneNumbersResultSchema = z
  .object({
    PhoneNumbers: SMSSandboxPhoneNumberListSchema.and(
      z
        .any()
        .openapi({
          description: "A list of the calling account's pending and verified phone numbers.",
        }),
    ),
    NextToken: String2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>NextToken</code> string is returned when you call the <code>ListSMSSandboxPhoneNumbersInput</code> operation if additional pages of records are available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PhoneNumbers'] })
  .openapi('ListSMSSandboxPhoneNumbersResult')

const AccountSchema = z.string().openapi('Account')

const ProtocolSchema = z.string().openapi('Protocol')

const Endpoint2Schema = z.string().openapi('Endpoint2')

const SubscriptionSchema = z
  .object({
    SubscriptionArn: SubscriptionARNSchema.and(
      z.any().openapi({ description: "The subscription's ARN." }),
    ).exactOptional(),
    Owner: AccountSchema.and(
      z.any().openapi({ description: "The subscription's owner." }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ description: "The subscription's protocol." }),
    ).exactOptional(),
    Endpoint: Endpoint2Schema.and(
      z
        .any()
        .openapi({ description: "The subscription's endpoint (format depends on the protocol)." }),
    ).exactOptional(),
    TopicArn: TopicARNSchema.and(
      z.any().openapi({ description: "The ARN of the subscription's topic." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A wrapper type for the attributes of an Amazon SNS subscription.',
    required: [],
  })
  .openapi('Subscription')

const SubscriptionsListSchema = z.array(SubscriptionSchema).openapi('SubscriptionsList')

const ListSubscriptionsResponseSchema = z
  .object({
    Subscriptions: SubscriptionsListSchema.and(
      z.any().openapi({ description: 'A list of subscriptions.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to pass along to the next <code>ListSubscriptions</code> request. This element is returned if there are more subscriptions to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for ListSubscriptions action', required: [] })
  .openapi('ListSubscriptionsResponse')

const ListSubscriptionsByTopicResponseSchema = z
  .object({
    Subscriptions: SubscriptionsListSchema.and(
      z.any().openapi({ description: 'A list of subscriptions.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to pass along to the next <code>ListSubscriptionsByTopic</code> request. This element is returned if there are more subscriptions to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for ListSubscriptionsByTopic action.', required: [] })
  .openapi('ListSubscriptionsByTopicResponse')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the specified topic.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TopicSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z.any().openapi({ description: "The topic's ARN." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>.",
    required: [],
  })
  .openapi('Topic')

const TopicsListSchema = z.array(TopicSchema).openapi('TopicsList')

const ListTopicsResponseSchema = z
  .object({
    Topics: TopicsListSchema.and(
      z.any().openapi({ description: 'A list of topic ARNs.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token to pass along to the next <code>ListTopics</code> request. This element is returned if there are additional topics to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for ListTopics action.', required: [] })
  .openapi('ListTopicsResponse')

const OptInPhoneNumberResponseSchema = z
  .object({})
  .openapi({ description: 'The response for the OptInPhoneNumber action.' })
  .openapi('OptInPhoneNumberResponse')

const MessageIdSchema = z.string().openapi('MessageId')

const PublishResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Unique identifier assigned to the published message.</p> <p>Length Constraint: Maximum 100 characters</p>',
        }),
    ).exactOptional(),
    SequenceNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This response element applies only to FIFO (first-in-first-out) topics. </p> <p>The sequence number is a large, non-consecutive number that Amazon SNS assigns to each message. The length of <code>SequenceNumber</code> is 128 bits. <code>SequenceNumber</code> continues to increase for each <code>MessageGroupId</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for Publish action.', required: [] })
  .openapi('PublishResponse')

const BinarySchema = z.string().openapi('Binary')

const MessageAttributeValueSchema = z
  .object({
    DataType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon SNS supports the following logical data types: String, String.Array, Number, and Binary. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html#SNSMessageAttributes.DataTypes">Message Attribute Data Types</a>.',
        }),
    ),
    StringValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Strings are Unicode with UTF8 binary encoding. For a list of code values, see <a href="https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.',
        }),
    ).exactOptional(),
    BinaryValue: BinarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Binary type attributes can store any binary data, for example, compressed data, encrypted data, or images.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataType'],
    description:
      '<p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p>',
  })
  .openapi('MessageAttributeValue')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const EndpointDisabledExceptionSchema = z.any().openapi('EndpointDisabledException')

const PlatformApplicationDisabledExceptionSchema = z
  .any()
  .openapi('PlatformApplicationDisabledException')

const KMSDisabledExceptionSchema = z.any().openapi('KMSDisabledException')

const KMSInvalidStateExceptionSchema = z.any().openapi('KMSInvalidStateException')

const KMSNotFoundExceptionSchema = z.any().openapi('KMSNotFoundException')

const KMSOptInRequiredSchema = z.any().openapi('KMSOptInRequired')

const KMSThrottlingExceptionSchema = z.any().openapi('KMSThrottlingException')

const KMSAccessDeniedExceptionSchema = z.any().openapi('KMSAccessDeniedException')

const PublishBatchResultEntrySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The <code>Id</code> of an entry in a batch request.' }),
    ).exactOptional(),
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'An identifier for the message.' }),
    ).exactOptional(),
    SequenceNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter applies only to FIFO (first-in-first-out) topics.</p> <p>The large, non-consecutive number that Amazon SNS assigns to each message.</p> <p>The length of <code>SequenceNumber</code> is 128 bits. <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Encloses data related to a successful message in a batch request for topic.',
    required: [],
  })
  .openapi('PublishBatchResultEntry')

const PublishBatchResultEntryListSchema = z
  .array(PublishBatchResultEntrySchema)
  .openapi('PublishBatchResultEntryList')

const BatchResultErrorEntrySchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The <code>Id</code> of an entry in a batch request' }),
    ),
    Code: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'An error code representing why the action failed on this entry.',
        }),
    ),
    Message: StringSchema.and(
      z.any().openapi({ description: 'A message explaining why the action failed on this entry.' }),
    ).exactOptional(),
    SenderFault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the error happened due to the caller of the batch API action.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'Code', 'SenderFault'],
    description: 'Gives a detailed description of failed messages in the batch.',
  })
  .openapi('BatchResultErrorEntry')

const BatchResultErrorEntryListSchema = z
  .array(BatchResultErrorEntrySchema)
  .openapi('BatchResultErrorEntryList')

const PublishBatchResponseSchema = z
  .object({
    Successful: PublishBatchResultEntryListSchema.and(
      z.any().openapi({ description: 'A list of successful <code>PublishBatch</code> responses.' }),
    ).exactOptional(),
    Failed: BatchResultErrorEntryListSchema.and(
      z.any().openapi({ description: 'A list of failed <code>PublishBatch</code> responses. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishBatchResponse')

const MessageSchema = z.string().openapi('Message')

const SubjectSchema = z.string().openapi('Subject')

const MessageStructureSchema = z.string().openapi('MessageStructure')

const MessageAttributeMapSchema = z
  .record(z.string(), MessageAttributeValueSchema)
  .openapi('MessageAttributeMap')

const PublishBatchRequestEntrySchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An identifier for the message in this batch.</p> <note> <p>The <code>Ids</code> of a batch request must be unique within a request. </p> <p>This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_). </p> </note>',
        }),
    ),
    Message: MessageSchema.and(z.any().openapi({ description: 'The body of the message.' })),
    Subject: SubjectSchema.and(
      z.any().openapi({ description: 'The subject of the batch message.' }),
    ).exactOptional(),
    MessageStructure: MessageStructureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p> <ul> <li> <p>be a syntactically valid JSON object; and</p> </li> <li> <p>contain at least a top-level JSON key of "default" with a value that is a string.</p> </li> </ul> <p>You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g. http). </p>',
        }),
    ).exactOptional(),
    MessageAttributes: MessageAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html">Amazon SNS message attributes</a> in the Amazon SNS Developer Guide.',
        }),
    ).exactOptional(),
    MessageDeduplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter applies only to FIFO (first-in-first-out) topics.</p> <p>The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, subsequent messages with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your topic, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the topic doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the topic has a <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one. </p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled, and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SNS can't detect duplicate messages. </p> <p>Amazon SNS continues to keep track of the message deduplication ID even after the message is received and deleted. </p> </note> <p>The length of <code>MessageDeduplicationId</code> is 128 characters.</p> <p> <code>MessageDeduplicationId</code> can contain alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p>",
        }),
    ).exactOptional(),
    MessageGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>This parameter applies only to FIFO (first-in-first-out) topics.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single topic, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the topic, but the session data of each user is processed in a FIFO fashion. </p> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails. </p> <p>The length of <code>MessageGroupId</code> is 128 characters.</p> <p> <code>MessageGroupId</code> can contain alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO topics. You can't use it for standard topics. </p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'Message'],
    description:
      'Contains the details of a single Amazon SNS message along with an <code>Id</code> that identifies a message within the batch. ',
  })
  .openapi('PublishBatchRequestEntry')

const BatchEntryIdsNotDistinctExceptionSchema = z.any().openapi('BatchEntryIdsNotDistinctException')

const BatchRequestTooLongExceptionSchema = z.any().openapi('BatchRequestTooLongException')

const EmptyBatchRequestExceptionSchema = z.any().openapi('EmptyBatchRequestException')

const InvalidBatchEntryIdExceptionSchema = z.any().openapi('InvalidBatchEntryIdException')

const TooManyEntriesInBatchRequestExceptionSchema = z
  .any()
  .openapi('TooManyEntriesInBatchRequestException')

const SetSMSAttributesResponseSchema = z
  .object({})
  .openapi({ description: 'The response for the SetSMSAttributes action.' })
  .openapi('SetSMSAttributesResponse')

const SubscribeResponseSchema = z
  .object({
    SubscriptionArn: SubscriptionARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the subscription if it is confirmed, or the string "pending confirmation" if the subscription requires confirmation. However, if the API request parameter <code>ReturnSubscriptionArn</code> is true, then the value is always the subscription ARN, even if the subscription requires confirmation.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for Subscribe action.', required: [] })
  .openapi('SubscribeResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const VerifySMSSandboxPhoneNumberResultSchema = z
  .object({})
  .openapi({ description: "The destination phone number's verification status." })
  .openapi('VerifySMSSandboxPhoneNumberResult')

const VerificationExceptionSchema = z.any().openapi('VerificationException')

const ActionsListSchema = z.array(ActionSchema).openapi('ActionsList')

const LabelSchema = z.string().openapi('Label')

const DelegatesListSchema = z.array(DelegateSchema).openapi('DelegatesList')

const AddPermissionInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the topic whose access control policy you wish to modify.',
        }),
    ),
    Label: LabelSchema.and(
      z.any().openapi({ description: 'A unique identifier for the new policy statement.' }),
    ),
    AWSAccountId: DelegatesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account IDs of the users (principals) who will be given access to the specified actions. The users must have Amazon Web Services account, but do not need to be signed up for this service.',
        }),
    ),
    ActionName: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action you want to allow for the specified principal(s).</p> <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['TopicArn', 'Label', 'AWSAccountId', 'ActionName'],
    title: 'AddPermissionInput',
  })
  .openapi('AddPermissionInput')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const CheckIfPhoneNumberIsOptedOutInputSchema = z
  .object({
    phoneNumber: PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'The phone number for which you want to check the opt out status.',
        }),
    ),
  })
  .openapi({
    required: ['phoneNumber'],
    title: 'CheckIfPhoneNumberIsOptedOutInput',
    description: 'The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.',
  })
  .openapi('CheckIfPhoneNumberIsOptedOutInput')

const TokenSchema = z.string().openapi('Token')

const AuthenticateOnUnsubscribeSchema = z.string().openapi('AuthenticateOnUnsubscribe')

const ConfirmSubscriptionInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the topic for which you wish to confirm a subscription.',
        }),
    ),
    Token: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Short-lived token sent to an endpoint during the <code>Subscribe</code> action.',
        }),
    ),
    AuthenticateOnUnsubscribe: AuthenticateOnUnsubscribeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is <code>true</code> and the request has an Amazon Web Services signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires Amazon Web Services authentication. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TopicArn', 'Token'],
    title: 'ConfirmSubscriptionInput',
    description: 'Input for ConfirmSubscription action.',
  })
  .openapi('ConfirmSubscriptionInput')

const CreatePlatformApplicationInputSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.',
        }),
    ),
    Platform: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).',
        }),
    ),
    Attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Platform', 'Attributes'],
    title: 'CreatePlatformApplicationInput',
    description: 'Input for CreatePlatformApplication action.',
  })
  .openapi('CreatePlatformApplicationInput')

const CreatePlatformEndpointInputSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'PlatformApplicationArn returned from CreatePlatformApplication is used to create a an endpoint.',
        }),
    ),
    Token: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token equivalent is called the registration ID.',
        }),
    ),
    CustomUserData: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.',
        }),
    ).exactOptional(),
    Attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PlatformApplicationArn', 'Token'],
    title: 'CreatePlatformEndpointInput',
    description: 'Input for CreatePlatformEndpoint action.',
  })
  .openapi('CreatePlatformEndpointInput')

const LanguageCodeStringSchema = z
  .enum([
    'en-US',
    'en-GB',
    'es-419',
    'es-ES',
    'de-DE',
    'fr-CA',
    'fr-FR',
    'it-IT',
    'ja-JP',
    'pt-BR',
    'kr-KR',
    'zh-CN',
    'zh-TW',
  ])
  .openapi({ description: 'Supported language code for sending OTP message' })
  .openapi('LanguageCodeString')

const CreateSMSSandboxPhoneNumberInputSchema = z
  .object({
    PhoneNumber: PhoneNumberStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination phone number to verify. On verification, Amazon SNS adds this phone number to the list of verified phone numbers that you can send SMS messages to.',
        }),
    ),
    LanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language to use for sending the OTP. The default value is <code>en-US</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PhoneNumber'], title: 'CreateSMSSandboxPhoneNumberInput' })
  .openapi('CreateSMSSandboxPhoneNumberInput')

const TopicNameSchema = z.string().openapi('TopicName')

const CreateTopicInputSchema = z
  .object({
    Name: TopicNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the topic you want to create.</p> <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.</p> <p>For a FIFO (first-in-first-out) topic, the name must end with the <code>.fifo</code> suffix. </p>',
        }),
    ),
    Attributes: TopicAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateTopic</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>FifoTopic</code> – Set to true to create a FIFO topic.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO topic is created.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of tags to add to a new topic.</p> <note> <p>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</p> </note>',
        }),
    ).exactOptional(),
    DataProtectionPolicy: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The body of the policy document you want to use for this topic.</p> <p>You can only add one policy per topic.</p> <p>The policy must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    title: 'CreateTopicInput',
    description: 'Input for CreateTopic action.',
  })
  .openapi('CreateTopicInput')

const DeleteEndpointInputSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z.any().openapi({ description: 'EndpointArn of endpoint to delete.' }),
    ),
  })
  .openapi({
    required: ['EndpointArn'],
    title: 'DeleteEndpointInput',
    description: 'Input for DeleteEndpoint action.',
  })
  .openapi('DeleteEndpointInput')

const DeletePlatformApplicationInputSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'PlatformApplicationArn of platform application object to delete.',
        }),
    ),
  })
  .openapi({
    required: ['PlatformApplicationArn'],
    title: 'DeletePlatformApplicationInput',
    description: 'Input for DeletePlatformApplication action.',
  })
  .openapi('DeletePlatformApplicationInput')

const DeleteSMSSandboxPhoneNumberInputSchema = z
  .object({
    PhoneNumber: PhoneNumberStringSchema.and(
      z.any().openapi({ description: 'The destination phone number to delete.' }),
    ),
  })
  .openapi({ required: ['PhoneNumber'], title: 'DeleteSMSSandboxPhoneNumberInput' })
  .openapi('DeleteSMSSandboxPhoneNumberInput')

const DeleteTopicInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z.any().openapi({ description: 'The ARN of the topic you want to delete.' }),
    ),
  })
  .openapi({ required: ['TopicArn'], title: 'DeleteTopicInput' })
  .openapi('DeleteTopicInput')

const GetDataProtectionPolicyInputSchema = z
  .object({
    ResourceArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to get.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetDataProtectionPolicyInput' })
  .openapi('GetDataProtectionPolicyInput')

const GetEndpointAttributesInputSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z.any().openapi({ description: 'EndpointArn for GetEndpointAttributes input.' }),
    ),
  })
  .openapi({
    required: ['EndpointArn'],
    title: 'GetEndpointAttributesInput',
    description: 'Input for GetEndpointAttributes action.',
  })
  .openapi('GetEndpointAttributesInput')

const GetPlatformApplicationAttributesInputSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'PlatformApplicationArn for GetPlatformApplicationAttributesInput.',
        }),
    ),
  })
  .openapi({
    required: ['PlatformApplicationArn'],
    title: 'GetPlatformApplicationAttributesInput',
    description: 'Input for GetPlatformApplicationAttributes action.',
  })
  .openapi('GetPlatformApplicationAttributesInput')

const ListStringSchema = z.array(StringSchema).openapi('ListString')

const GetSMSAttributesInputSchema = z
  .object({
    attributes: ListStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for which you want values.</p> <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p> <p>If you don\'t use this parameter, Amazon SNS returns all SMS attributes.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'GetSMSAttributesInput',
    description: 'The input for the <code>GetSMSAttributes</code> request.',
    required: [],
  })
  .openapi('GetSMSAttributesInput')

const GetSMSSandboxAccountStatusInputSchema = z
  .object({})
  .openapi({ title: 'GetSMSSandboxAccountStatusInput' })
  .openapi('GetSMSSandboxAccountStatusInput')

const GetSubscriptionAttributesInputSchema = z
  .object({
    SubscriptionArn: SubscriptionARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the subscription whose properties you want to get.' }),
    ),
  })
  .openapi({
    required: ['SubscriptionArn'],
    title: 'GetSubscriptionAttributesInput',
    description: 'Input for GetSubscriptionAttributes.',
  })
  .openapi('GetSubscriptionAttributesInput')

const GetTopicAttributesInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z.any().openapi({ description: 'The ARN of the topic whose properties you want to get.' }),
    ),
  })
  .openapi({
    required: ['TopicArn'],
    title: 'GetTopicAttributesInput',
    description: 'Input for GetTopicAttributes action.',
  })
  .openapi('GetTopicAttributesInput')

const ListEndpointsByPlatformApplicationInputSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'NextToken string is used when calling ListEndpointsByPlatformApplication action to retrieve additional records that are available after the first page results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PlatformApplicationArn'],
    title: 'ListEndpointsByPlatformApplicationInput',
    description: 'Input for ListEndpointsByPlatformApplication action.',
  })
  .openapi('ListEndpointsByPlatformApplicationInput')

const MaxItemsListOriginationNumbersSchema = z
  .int()
  .min(1)
  .max(30)
  .openapi('MaxItemsListOriginationNumbers')

const ListOriginationNumbersRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token that the previous <code>ListOriginationNumbers</code> request returns.',
        }),
    ).exactOptional(),
    MaxResults: MaxItemsListOriginationNumbersSchema.and(
      z.any().openapi({ description: 'The maximum number of origination numbers to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListOriginationNumbersRequest', required: [] })
  .openapi('ListOriginationNumbersRequest')

const ListPhoneNumbersOptedOutInputSchema = z
  .object({
    nextToken: String2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>NextToken</code> string is used when you call the <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are available after the first page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListPhoneNumbersOptedOutInput',
    description: 'The input for the <code>ListPhoneNumbersOptedOut</code> action.',
    required: [],
  })
  .openapi('ListPhoneNumbersOptedOutInput')

const ListPlatformApplicationsInputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListPlatformApplicationsInput',
    description: 'Input for ListPlatformApplications action.',
    required: [],
  })
  .openapi('ListPlatformApplicationsInput')

const MaxItemsSchema = z.int().min(1).max(100).openapi('MaxItems')

const ListSMSSandboxPhoneNumbersInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token that the previous <code>ListSMSSandboxPhoneNumbersInput</code> request returns.',
        }),
    ).exactOptional(),
    MaxResults: MaxItemsSchema.and(
      z.any().openapi({ description: 'The maximum number of phone numbers to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSMSSandboxPhoneNumbersInput', required: [] })
  .openapi('ListSMSSandboxPhoneNumbersInput')

const ListSubscriptionsByTopicInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the topic for which you wish to find subscriptions.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token returned by the previous <code>ListSubscriptionsByTopic</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TopicArn'],
    title: 'ListSubscriptionsByTopicInput',
    description: 'Input for ListSubscriptionsByTopic action.',
  })
  .openapi('ListSubscriptionsByTopicInput')

const ListSubscriptionsInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Token returned by the previous <code>ListSubscriptions</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListSubscriptionsInput',
    description: 'Input for ListSubscriptions action.',
    required: [],
  })
  .openapi('ListSubscriptionsInput')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the topic for which to list tags.' }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTopicsInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Token returned by the previous <code>ListTopics</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTopicsInput', required: [] })
  .openapi('ListTopicsInput')

const OTPCodeSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(5)
  .max(8)
  .openapi({
    description:
      'String of Origination/Destination address including phone numbers and email addresses',
  })
  .openapi('OTPCode')

const OptInPhoneNumberInputSchema = z
  .object({
    phoneNumber: PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number to opt in. Use E.164 format.' }),
    ),
  })
  .openapi({
    required: ['phoneNumber'],
    title: 'OptInPhoneNumberInput',
    description: 'Input for the OptInPhoneNumber action.',
  })
  .openapi('OptInPhoneNumberInput')

const PublishBatchRequestEntryListSchema = z
  .array(PublishBatchRequestEntrySchema)
  .openapi('PublishBatchRequestEntryList')

const PublishBatchInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon resource name (ARN) of the topic you want to batch publish to.',
        }),
    ),
    PublishBatchRequestEntries: PublishBatchRequestEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>PublishBatch</code> request entries to be sent to the SNS topic.',
        }),
    ),
  })
  .openapi({ required: ['TopicArn', 'PublishBatchRequestEntries'], title: 'PublishBatchInput' })
  .openapi('PublishBatchInput')

const PublishInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The topic you want to publish to.</p> <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>",
        }),
    ).exactOptional(),
    TargetArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If you don't specify a value for the <code>TargetArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code> parameters.",
        }),
    ).exactOptional(),
    PhoneNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p> <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must specify a value for the <code>TargetArn</code> or <code>TopicArn</code> parameters.</p>",
        }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The message you want to send.</p> <p>If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the <code>MessageStructure</code> parameter to <code>json</code> and use a JSON object for the <code>Message</code> parameter. </p> <p/> <p>Constraints:</p> <ul> <li> <p>With the exception of SMS, messages must be UTF-8 encoded strings and at most 256 KB in size (262,144 bytes, not 262,144 characters).</p> </li> <li> <p>For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters.</p> <p>If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren\'t truncated mid-word but are cut off at whole-word boundaries.</p> <p>The total size limit for a single SMS <code>Publish</code> action is 1,600 characters.</p> </li> </ul> <p>JSON-specific constraints:</p> <ul> <li> <p>Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.</p> </li> <li> <p>The values will be parsed (unescaped) before they are used in outgoing messages.</p> </li> <li> <p>Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).</p> </li> <li> <p>Values have a minimum length of 0 (the empty string, "", is allowed).</p> </li> <li> <p>Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).</p> </li> <li> <p>Non-string values will cause the key to be ignored.</p> </li> <li> <p>Keys that do not correspond to supported transport protocols are ignored.</p> </li> <li> <p>Duplicate keys are not allowed.</p> </li> <li> <p>Failure to parse or validate any key or value in the message will cause the <code>Publish</code> call to return an error (no partial delivery).</p> </li> </ul>',
        }),
    ),
    Subject: SubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints.</p> <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.</p>',
        }),
    ).exactOptional(),
    MessageStructure: MessageStructureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p> <ul> <li> <p>be a syntactically valid JSON object; and</p> </li> <li> <p>contain at least a top-level JSON key of "default" with a value that is a string.</p> </li> </ul> <p>You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http").</p> <p>Valid value: <code>json</code> </p>',
        }),
    ).exactOptional(),
    MessageAttributes: MessageAttributeMapSchema.and(
      z.any().openapi({ description: 'Message attributes for Publish action.' }),
    ).exactOptional(),
    MessageDeduplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageDeduplicationId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>Every message must have a unique <code>MessageDeduplicationId</code>, which is a token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any message sent with the same <code>MessageDeduplicationId</code> during the 5-minute deduplication interval is treated as a duplicate. </p> <p>If the topic has <code>ContentBasedDeduplication</code> set, the system generates a <code>MessageDeduplicationId</code> based on the contents of the message. Your <code>MessageDeduplicationId</code> overrides the generated one.</p>',
        }),
    ).exactOptional(),
    MessageGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageGroupId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>The <code>MessageGroupId</code> is a tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). Every message must include a <code>MessageGroupId</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Message'],
    title: 'PublishInput',
    description: 'Input for Publish action.',
  })
  .openapi('PublishInput')

const PutDataProtectionPolicyInputSchema = z
  .object({
    ResourceArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to add or update.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>',
        }),
    ),
    DataProtectionPolicy: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The JSON serialization of the topic's <code>DataProtectionPolicy</code>.</p> <p>The <code>DataProtectionPolicy</code> must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>",
        }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'DataProtectionPolicy'],
    title: 'PutDataProtectionPolicyInput',
  })
  .openapi('PutDataProtectionPolicyInput')

const RemovePermissionInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the topic whose access control policy you wish to modify.',
        }),
    ),
    Label: LabelSchema.and(
      z.any().openapi({ description: 'The unique label of the statement you want to remove.' }),
    ),
  })
  .openapi({
    required: ['TopicArn', 'Label'],
    title: 'RemovePermissionInput',
    description: 'Input for RemovePermission action.',
  })
  .openapi('RemovePermissionInput')

const SetEndpointAttributesInputSchema = z
  .object({
    EndpointArn: StringSchema.and(
      z.any().openapi({ description: 'EndpointArn used for SetEndpointAttributes action.' }),
    ),
    Attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of the endpoint attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['EndpointArn', 'Attributes'],
    title: 'SetEndpointAttributesInput',
    description: 'Input for SetEndpointAttributes action.',
  })
  .openapi('SetEndpointAttributesInput')

const SetPlatformApplicationAttributesInputSchema = z
  .object({
    PlatformApplicationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'PlatformApplicationArn for SetPlatformApplicationAttributes action.',
        }),
    ),
    Attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of the platform application attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>PlatformCredential</code> – The credential received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformCredential</code>is client secret.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformCredential</code> is private key.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformCredential</code> is signing key.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), <code>PlatformCredential</code> is API key. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>PlatformPrincipal</code> – The principal received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformPrincipal</code>is client id.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformPrincipal</code> is SSL certificate.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformPrincipal</code> is signing key ID.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code>. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which <code>EndpointCreated</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which <code>EndpointDeleted</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which <code>EndpointUpdate</code> event notifications are sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which <code>DeliveryFailure</code> event notifications are sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> <li> <p> <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100) of successfully delivered messages.</p> </li> </ul> <p>The following attributes only apply to <code>APNs</code> token-based authentication:</p> <ul> <li> <p> <code>ApplePlatformTeamID</code> – The identifier that's assigned to your Apple developer account team.</p> </li> <li> <p> <code>ApplePlatformBundleID</code> – The bundle identifier that's assigned to your iOS app.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['PlatformApplicationArn', 'Attributes'],
    title: 'SetPlatformApplicationAttributesInput',
    description: 'Input for SetPlatformApplicationAttributes action.',
  })
  .openapi('SetPlatformApplicationAttributesInput')

const SetSMSAttributesInputSchema = z
  .object({
    attributes: MapStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default settings for sending SMS messages from your Amazon Web Services account. You can set values for the following attribute names:</p> <p> <code>MonthlySpendLimit</code> – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.</p> <important> <p>Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.</p> </important> <p>By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sns">SNS Limit Increase case</a>. For <b>New limit value</b>, enter your desired monthly spend limit. In the <b>Use Case Description</b> field, explain that you are requesting an SMS monthly spend limit increase.</p> <p> <code>DeliveryStatusIAMRole</code> – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.</p> <p> <code>DeliveryStatusSuccessSamplingRate</code> – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to <code>0</code>. To write logs for 10% of your successful deliveries, set it to <code>10</code>.</p> <p> <code>DefaultSenderID</code> – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.</p> <p> <code>DefaultSMSType</code> – The type of SMS message that you will send by default. You can assign the following values:</p> <ul> <li> <p> <code>Promotional</code> – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.</p> </li> <li> <p> <code>Transactional</code> – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.</p> </li> </ul> <p> <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your Amazon Web Services account:</p> <ul> <li> <p>Time that the message was published (in UTC)</p> </li> <li> <p>Message ID</p> </li> <li> <p>Destination phone number</p> </li> <li> <p>Message type</p> </li> <li> <p>Delivery status</p> </li> <li> <p>Message price (in USD)</p> </li> <li> <p>Part number (a message is split into multiple parts if it is too long for a single message)</p> </li> <li> <p>Total number of parts</p> </li> </ul> <p>To receive the report, the bucket must have a policy that allows the Amazon SNS service principal to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code> actions.</p> <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['attributes'],
    title: 'SetSMSAttributesInput',
    description: 'The input for the SetSMSAttributes action.',
  })
  .openapi('SetSMSAttributesInput')

const AttributeNameSchema = z.string().openapi('AttributeName')

const SetSubscriptionAttributesInputSchema = z
  .object({
    SubscriptionArn: SubscriptionARNSchema.and(
      z.any().openapi({ description: 'The ARN of the subscription to modify.' }),
    ),
    AttributeName: AttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that this action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can\'t be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>',
        }),
    ),
    AttributeValue: AttributeValueSchema.and(
      z.any().openapi({ description: 'The new value for the attribute in JSON format.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionArn', 'AttributeName'],
    title: 'SetSubscriptionAttributesInput',
    description: 'Input for SetSubscriptionAttributes action.',
  })
  .openapi('SetSubscriptionAttributesInput')

const SetTopicAttributesInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z.any().openapi({ description: 'The ARN of the topic to modify.' }),
    ),
    AttributeName: AttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.</p> </li> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> <li> <p>HTTP</p> <ul> <li> <p> <code>HTTPSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p> </li> <li> <p> <code>HTTPSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> <li> <p> <code>HTTPFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> </ul> </li> <li> <p>Amazon Kinesis Data Firehose</p> <ul> <li> <p> <code>FirehoseSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint. </p> </li> </ul> </li> <li> <p>Lambda</p> <ul> <li> <p> <code>LambdaSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. </p> </li> </ul> </li> <li> <p>Platform application endpoint</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> </ul> <note> <p>In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services.</p> <p>For example, For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. </p> </note> </li> <li> <p>Amazon SQS</p> <ul> <li> <p> <code>SQSSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> </ul> </li> </ul> <note> <p>The &lt;ENDPOINT&gt;SuccessFeedbackRoleArn and &lt;ENDPOINT&gt;FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The &lt;ENDPOINT&gt;SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the &lt;ENDPOINT&gt;FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. </p> </note> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>',
        }),
    ),
    AttributeValue: AttributeValueSchema.and(
      z.any().openapi({ description: 'The new value for the attribute.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TopicArn', 'AttributeName'],
    title: 'SetTopicAttributesInput',
    description: 'Input for SetTopicAttributes action.',
  })
  .openapi('SetTopicAttributesInput')

const SubscribeInputSchema = z
  .object({
    TopicArn: TopicARNSchema.and(
      z.any().openapi({ description: 'The ARN of the topic you want to subscribe to.' }),
    ),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol that you want to use. Supported protocols include:</p> <ul> <li> <p> <code>http</code> – delivery of JSON-encoded message via HTTP POST</p> </li> <li> <p> <code>https</code> – delivery of JSON-encoded message via HTTPS POST</p> </li> <li> <p> <code>email</code> – delivery of message via SMTP</p> </li> <li> <p> <code>email-json</code> – delivery of JSON-encoded message via SMTP</p> </li> <li> <p> <code>sms</code> – delivery of message via SMS</p> </li> <li> <p> <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS queue</p> </li> <li> <p> <code>application</code> – delivery of JSON-encoded message to an EndpointArn for a mobile app and device</p> </li> <li> <p> <code>lambda</code> – delivery of JSON-encoded message to an Lambda function</p> </li> <li> <p> <code>firehose</code> – delivery of JSON-encoded message to an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>',
        }),
    ),
    Endpoint: Endpoint2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The endpoint that you want to receive notifications. Endpoints vary by protocol:</p> <ul> <li> <p>For the <code>http</code> protocol, the (public) endpoint is a URL beginning with <code>http://</code>.</p> </li> <li> <p>For the <code>https</code> protocol, the (public) endpoint is a URL beginning with <code>https://</code>.</p> </li> <li> <p>For the <code>email</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>email-json</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>sms</code> protocol, the endpoint is a phone number of an SMS-enabled device.</p> </li> <li> <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS queue.</p> </li> <li> <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of a mobile app and device.</p> </li> <li> <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Lambda function.</p> </li> <li> <p>For the <code>firehose</code> protocol, the endpoint is the ARN of an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Attributes: SubscriptionAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>Subscribe</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can\'t be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ReturnSubscriptionArn: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets whether the response from the <code>Subscribe</code> request includes the subscription ARN, even if the subscription is not yet confirmed.</p> <p>If you set this parameter to <code>true</code>, the response includes the ARN in all cases, even if the subscription is not yet confirmed. In addition to the ARN for confirmed subscriptions, the response also includes the <code>pending subscription</code> ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the <code>ConfirmSubscription</code> action with a confirmation token.</p> <p/> <p>The default value is <code>false</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TopicArn', 'Protocol'],
    title: 'SubscribeInput',
    description: 'Input for Subscribe action.',
  })
  .openapi('SubscribeInput')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the topic to which to add tags.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to be added to the specified topic. A tag consists of a required key and an optional value.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnsubscribeInputSchema = z
  .object({
    SubscriptionArn: SubscriptionARNSchema.and(
      z.any().openapi({ description: 'The ARN of the subscription to be deleted.' }),
    ),
  })
  .openapi({
    required: ['SubscriptionArn'],
    title: 'UnsubscribeInput',
    description: 'Input for Unsubscribe action.',
  })
  .openapi('UnsubscribeInput')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the topic from which to remove tags.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The list of tag keys to remove from the specified topic.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const VerifySMSSandboxPhoneNumberInputSchema = z
  .object({
    PhoneNumber: PhoneNumberStringSchema.and(
      z.any().openapi({ description: 'The destination phone number to verify.' }),
    ),
    OneTimePassword: OTPCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The OTP sent to the destination number from the <code>CreateSMSSandBoxPhoneNumber</code> call.',
        }),
    ),
  })
  .openapi({
    required: ['PhoneNumber', 'OneTimePassword'],
    title: 'VerifySMSSandboxPhoneNumberInput',
  })
  .openapi('VerifySMSSandboxPhoneNumberInput')

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

export const getActionAddPermissionRoute = createRoute({
  method: 'get',
  path: '/#Action=AddPermission',
  description:
    "<p>Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>",
  operationId: 'GET_AddPermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic whose access control policy you wish to modify.',
            schema: { type: 'string' },
          },
        }),
      Label: z
        .string()
        .openapi({
          param: {
            name: 'Label',
            in: 'query',
            required: true,
            description: 'A unique identifier for the new policy statement.',
            schema: { type: 'string' },
          },
        }),
      AWSAccountId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DelegateSchema),
        )
        .openapi({
          param: {
            name: 'AWSAccountId',
            in: 'query',
            required: true,
            description:
              'The Amazon Web Services account IDs of the users (principals) who will be given access to the specified actions. The users must have Amazon Web Services account, but do not need to be signed up for this service.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/delegate' } },
          },
        }),
      ActionName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ActionSchema),
        )
        .openapi({
          param: {
            name: 'ActionName',
            in: 'query',
            required: true,
            description:
              '<p>The action you want to allow for the specified principal(s).</p> <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/action' } },
          },
        }),
      Action: z
        .literal('AddPermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddPermission'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionAddPermissionRoute = createRoute({
  method: 'post',
  path: '/#Action=AddPermission',
  description:
    "<p>Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>",
  operationId: 'POST_AddPermission',
  request: {
    headers: z.object({
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
        .literal('AddPermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddPermission'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddPermissionInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionCheckIfPhoneNumberIsOptedOutRoute = createRoute({
  method: 'get',
  path: '/#Action=CheckIfPhoneNumberIsOptedOut',
  description:
    '<p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>',
  operationId: 'GET_CheckIfPhoneNumberIsOptedOut',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      phoneNumber: z
        .string()
        .openapi({
          param: {
            name: 'phoneNumber',
            in: 'query',
            required: true,
            description: 'The phone number for which you want to check the opt out status.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CheckIfPhoneNumberIsOptedOut')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CheckIfPhoneNumberIsOptedOut'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CheckIfPhoneNumberIsOptedOutResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postActionCheckIfPhoneNumberIsOptedOutRoute = createRoute({
  method: 'post',
  path: '/#Action=CheckIfPhoneNumberIsOptedOut',
  description:
    '<p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>',
  operationId: 'POST_CheckIfPhoneNumberIsOptedOut',
  request: {
    headers: z.object({
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
        .literal('CheckIfPhoneNumberIsOptedOut')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CheckIfPhoneNumberIsOptedOut'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CheckIfPhoneNumberIsOptedOutInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CheckIfPhoneNumberIsOptedOutResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const getActionConfirmSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=ConfirmSubscription',
  description:
    'Verifies an endpoint owner\'s intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".',
  operationId: 'GET_ConfirmSubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic for which you wish to confirm a subscription.',
            schema: { type: 'string' },
          },
        }),
      Token: z
        .string()
        .openapi({
          param: {
            name: 'Token',
            in: 'query',
            required: true,
            description:
              'Short-lived token sent to an endpoint during the <code>Subscribe</code> action.',
            schema: { type: 'string' },
          },
        }),
      AuthenticateOnUnsubscribe: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthenticateOnUnsubscribe',
            in: 'query',
            required: false,
            description:
              'Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is <code>true</code> and the request has an Amazon Web Services signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires Amazon Web Services authentication. ',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ConfirmSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ConfirmSubscription'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfirmSubscriptionResponseSchema } },
    },
    480: {
      description: 'SubscriptionLimitExceededException',
      content: { 'text/xml': { schema: SubscriptionLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    485: {
      description: 'FilterPolicyLimitExceededException',
      content: { 'text/xml': { schema: FilterPolicyLimitExceededExceptionSchema } },
    },
  },
})

export const postActionConfirmSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#Action=ConfirmSubscription',
  description:
    'Verifies an endpoint owner\'s intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".',
  operationId: 'POST_ConfirmSubscription',
  request: {
    headers: z.object({
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
        .literal('ConfirmSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ConfirmSubscription'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ConfirmSubscriptionInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfirmSubscriptionResponseSchema } },
    },
    480: {
      description: 'SubscriptionLimitExceededException',
      content: { 'text/xml': { schema: SubscriptionLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    485: {
      description: 'FilterPolicyLimitExceededException',
      content: { 'text/xml': { schema: FilterPolicyLimitExceededExceptionSchema } },
    },
  },
})

export const getActionCreatePlatformApplicationRoute = createRoute({
  method: 'get',
  path: '/#Action=CreatePlatformApplication',
  description:
    '<p>Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify <code>PlatformPrincipal</code> and <code>PlatformCredential</code> attributes when using the <code>CreatePlatformApplication</code> action.</p> <p> <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from the notification service.</p> <ul> <li> <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code> and <code>PlatformCredential</code> is <code>client secret</code>.</p> </li> <li> <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using certificate credentials, <code>PlatformPrincipal</code> is <code>SSL certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using token credentials, <code>PlatformPrincipal</code> is <code>signing key ID</code> and <code>PlatformCredential</code> is <code>signing key</code>.</p> </li> <li> <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is <code>API key</code>.</p> </li> <li> <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security Identifier</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> </ul> <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the <code>CreatePlatformEndpoint</code> action.</p>',
  operationId: 'GET_CreatePlatformApplication',
  request: {
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
        const open: string[] = ['Attributes']
        const taken: string[] = ['Name', 'Platform', 'Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Name: z
            .string()
            .openapi({
              param: {
                name: 'Name',
                in: 'query',
                required: true,
                description:
                  'Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.',
                schema: { type: 'string' },
              },
            }),
          Platform: z
            .string()
            .openapi({
              param: {
                name: 'Platform',
                in: 'query',
                required: true,
                description:
                  'The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .record(z.string(), StringSchema)
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: true,
                description:
                  'For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a>.',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
          Action: z
            .literal('CreatePlatformApplication')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreatePlatformApplication'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreatePlatformApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionCreatePlatformApplicationRoute = createRoute({
  method: 'post',
  path: '/#Action=CreatePlatformApplication',
  description:
    '<p>Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify <code>PlatformPrincipal</code> and <code>PlatformCredential</code> attributes when using the <code>CreatePlatformApplication</code> action.</p> <p> <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from the notification service.</p> <ul> <li> <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code> and <code>PlatformCredential</code> is <code>client secret</code>.</p> </li> <li> <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using certificate credentials, <code>PlatformPrincipal</code> is <code>SSL certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using token credentials, <code>PlatformPrincipal</code> is <code>signing key ID</code> and <code>PlatformCredential</code> is <code>signing key</code>.</p> </li> <li> <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is <code>API key</code>.</p> </li> <li> <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security Identifier</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> </ul> <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the <code>CreatePlatformEndpoint</code> action.</p>',
  operationId: 'POST_CreatePlatformApplication',
  request: {
    headers: z.object({
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
        .literal('CreatePlatformApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreatePlatformApplication'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreatePlatformApplicationInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreatePlatformApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionCreatePlatformEndpointRoute = createRoute({
  method: 'get',
  path: '/#Action=CreatePlatformEndpoint',
  description:
    '<p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code> that is returned from <code>CreatePlatformApplication</code>. You can use the returned <code>EndpointArn</code> to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint\'s ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>',
  operationId: 'GET_CreatePlatformEndpoint',
  request: {
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
        const open: string[] = ['Attributes']
        const taken: string[] = [
          'PlatformApplicationArn',
          'Token',
          'CustomUserData',
          'Action',
          'Version',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          PlatformApplicationArn: z
            .string()
            .openapi({
              param: {
                name: 'PlatformApplicationArn',
                in: 'query',
                required: true,
                description:
                  'PlatformApplicationArn returned from CreatePlatformApplication is used to create a an endpoint.',
                schema: { type: 'string' },
              },
            }),
          Token: z
            .string()
            .openapi({
              param: {
                name: 'Token',
                in: 'query',
                required: true,
                description:
                  'Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token equivalent is called the registration ID.',
                schema: { type: 'string' },
              },
            }),
          CustomUserData: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'CustomUserData',
                in: 'query',
                required: false,
                description:
                  'Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .record(z.string(), StringSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: false,
                description:
                  'For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
          Action: z
            .literal('CreatePlatformEndpoint')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreatePlatformEndpoint'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionCreatePlatformEndpointRoute = createRoute({
  method: 'post',
  path: '/#Action=CreatePlatformEndpoint',
  description:
    '<p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code> that is returned from <code>CreatePlatformApplication</code>. You can use the returned <code>EndpointArn</code> to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint\'s ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>',
  operationId: 'POST_CreatePlatformEndpoint',
  request: {
    headers: z.object({
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
        .literal('CreatePlatformEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreatePlatformEndpoint'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreatePlatformEndpointInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionCreateSMSSandboxPhoneNumberRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateSMSSandboxPhoneNumber',
  description:
    '<p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'GET_CreateSMSSandboxPhoneNumber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PhoneNumber: z
        .string()
        .regex(/^(\+[0-9]{8,}|[0-9]{0,9})$/)
        .max(20)
        .openapi({
          param: {
            name: 'PhoneNumber',
            in: 'query',
            required: true,
            description:
              'The destination phone number to verify. On verification, Amazon SNS adds this phone number to the list of verified phone numbers that you can send SMS messages to.',
            schema: { type: 'string', pattern: '^(\\+[0-9]{8,}|[0-9]{0,9})$', maxLength: 20 },
          },
        }),
      LanguageCode: z
        .enum([
          'en-US',
          'en-GB',
          'es-419',
          'es-ES',
          'de-DE',
          'fr-CA',
          'fr-FR',
          'it-IT',
          'ja-JP',
          'pt-BR',
          'kr-KR',
          'zh-CN',
          'zh-TW',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'LanguageCode',
            in: 'query',
            required: false,
            description:
              'The language to use for sending the OTP. The default value is <code>en-US</code>.',
            schema: {
              type: 'string',
              enum: [
                'en-US',
                'en-GB',
                'es-419',
                'es-ES',
                'de-DE',
                'fr-CA',
                'fr-FR',
                'it-IT',
                'ja-JP',
                'pt-BR',
                'kr-KR',
                'zh-CN',
                'zh-TW',
              ],
              description: 'Supported language code for sending OTP message',
            },
          },
          description: 'Supported language code for sending OTP message',
        }),
      Action: z
        .literal('CreateSMSSandboxPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateSMSSandboxPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateSMSSandboxPhoneNumberResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OptedOutException',
      content: { 'text/xml': { schema: OptedOutExceptionSchema } },
    },
    484: {
      description: 'UserErrorException',
      content: { 'text/xml': { schema: UserErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postActionCreateSMSSandboxPhoneNumberRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateSMSSandboxPhoneNumber',
  description:
    '<p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'POST_CreateSMSSandboxPhoneNumber',
  request: {
    headers: z.object({
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
        .literal('CreateSMSSandboxPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateSMSSandboxPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateSMSSandboxPhoneNumberInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateSMSSandboxPhoneNumberResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OptedOutException',
      content: { 'text/xml': { schema: OptedOutExceptionSchema } },
    },
    484: {
      description: 'UserErrorException',
      content: { 'text/xml': { schema: UserErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const getActionCreateTopicRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateTopic',
  description:
    'Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic\'s ARN is returned without creating a new topic.',
  operationId: 'GET_CreateTopic',
  request: {
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
        const open: string[] = ['Attributes']
        const taken: string[] = ['Name', 'Tags', 'DataProtectionPolicy', 'Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Name: z
            .string()
            .openapi({
              param: {
                name: 'Name',
                in: 'query',
                required: true,
                description:
                  '<p>The name of the topic you want to create.</p> <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.</p> <p>For a FIFO (first-in-first-out) topic, the name must end with the <code>.fifo</code> suffix. </p>',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .record(z.string(), AttributeValueSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: false,
                description:
                  '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateTopic</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>FifoTopic</code> – Set to true to create a FIFO topic.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO topic is created.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/attributeValue' },
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
                  '<p>The list of tags to add to a new topic.</p> <note> <p>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</p> </note>',
                schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
              },
            }),
          DataProtectionPolicy: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'DataProtectionPolicy',
                in: 'query',
                required: false,
                description:
                  '<p>The body of the policy document you want to use for this topic.</p> <p>You can only add one policy per topic.</p> <p>The policy must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>',
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('CreateTopic')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateTopic'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateTopicResponseSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'TopicLimitExceededException',
      content: { 'text/xml': { schema: TopicLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
    485: {
      description: 'TagLimitExceededException',
      content: { 'text/xml': { schema: TagLimitExceededExceptionSchema } },
    },
    486: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    487: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    488: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postActionCreateTopicRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateTopic',
  description:
    'Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic\'s ARN is returned without creating a new topic.',
  operationId: 'POST_CreateTopic',
  request: {
    headers: z.object({
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
        .literal('CreateTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateTopic'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateTopicInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateTopicResponseSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'TopicLimitExceededException',
      content: { 'text/xml': { schema: TopicLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
    485: {
      description: 'TagLimitExceededException',
      content: { 'text/xml': { schema: TagLimitExceededExceptionSchema } },
    },
    486: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    487: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    488: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const getActionDeleteEndpointRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteEndpoint',
  description:
    '<p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>',
  operationId: 'GET_DeleteEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      EndpointArn: z
        .string()
        .openapi({
          param: {
            name: 'EndpointArn',
            in: 'query',
            required: true,
            description: 'EndpointArn of endpoint to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteEndpoint'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionDeleteEndpointRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteEndpoint',
  description:
    '<p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>',
  operationId: 'POST_DeleteEndpoint',
  request: {
    headers: z.object({
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
        .literal('DeleteEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteEndpoint'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteEndpointInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionDeletePlatformApplicationRoute = createRoute({
  method: 'get',
  path: '/#Action=DeletePlatformApplication',
  description:
    'Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'GET_DeletePlatformApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PlatformApplicationArn: z
        .string()
        .openapi({
          param: {
            name: 'PlatformApplicationArn',
            in: 'query',
            required: true,
            description: 'PlatformApplicationArn of platform application object to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeletePlatformApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeletePlatformApplication'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionDeletePlatformApplicationRoute = createRoute({
  method: 'post',
  path: '/#Action=DeletePlatformApplication',
  description:
    'Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'POST_DeletePlatformApplication',
  request: {
    headers: z.object({
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
        .literal('DeletePlatformApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeletePlatformApplication'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeletePlatformApplicationInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionDeleteSMSSandboxPhoneNumberRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteSMSSandboxPhoneNumber',
  description:
    '<p>Deletes an Amazon Web Services account\'s verified or pending phone number from the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'GET_DeleteSMSSandboxPhoneNumber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PhoneNumber: z
        .string()
        .regex(/^(\+[0-9]{8,}|[0-9]{0,9})$/)
        .max(20)
        .openapi({
          param: {
            name: 'PhoneNumber',
            in: 'query',
            required: true,
            description: 'The destination phone number to delete.',
            schema: { type: 'string', pattern: '^(\\+[0-9]{8,}|[0-9]{0,9})$', maxLength: 20 },
          },
        }),
      Action: z
        .literal('DeleteSMSSandboxPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteSMSSandboxPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteSMSSandboxPhoneNumberResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'UserErrorException',
      content: { 'text/xml': { schema: UserErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postActionDeleteSMSSandboxPhoneNumberRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteSMSSandboxPhoneNumber',
  description:
    '<p>Deletes an Amazon Web Services account\'s verified or pending phone number from the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'POST_DeleteSMSSandboxPhoneNumber',
  request: {
    headers: z.object({
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
        .literal('DeleteSMSSandboxPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteSMSSandboxPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteSMSSandboxPhoneNumberInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteSMSSandboxPhoneNumberResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'UserErrorException',
      content: { 'text/xml': { schema: UserErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const getActionDeleteTopicRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteTopic',
  description:
    'Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.',
  operationId: 'GET_DeleteTopic',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic you want to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteTopic'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    485: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    486: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postActionDeleteTopicRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteTopic',
  description:
    'Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.',
  operationId: 'POST_DeleteTopic',
  request: {
    headers: z.object({
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
        .literal('DeleteTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteTopic'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteTopicInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    485: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    486: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const getActionGetDataProtectionPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=GetDataProtectionPolicy',
  description:
    'Retrieves the specified inline <code>DataProtectionPolicy</code> document that is stored in the specified Amazon SNS topic. ',
  operationId: 'GET_GetDataProtectionPolicy',
  request: {
    headers: z.object({
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
              '<p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to get.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetDataProtectionPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetDataProtectionPolicy'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetDataProtectionPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const postActionGetDataProtectionPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=GetDataProtectionPolicy',
  description:
    'Retrieves the specified inline <code>DataProtectionPolicy</code> document that is stored in the specified Amazon SNS topic. ',
  operationId: 'POST_GetDataProtectionPolicy',
  request: {
    headers: z.object({
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
        .literal('GetDataProtectionPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetDataProtectionPolicy'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetDataProtectionPolicyInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetDataProtectionPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const getActionGetEndpointAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetEndpointAttributes',
  description:
    'Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'GET_GetEndpointAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      EndpointArn: z
        .string()
        .openapi({
          param: {
            name: 'EndpointArn',
            in: 'query',
            required: true,
            description: 'EndpointArn for GetEndpointAttributes input.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetEndpointAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetEndpointAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetEndpointAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionGetEndpointAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetEndpointAttributes',
  description:
    'Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'POST_GetEndpointAttributes',
  request: {
    headers: z.object({
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
        .literal('GetEndpointAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetEndpointAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetEndpointAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetEndpointAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionGetPlatformApplicationAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetPlatformApplicationAttributes',
  description:
    'Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'GET_GetPlatformApplicationAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PlatformApplicationArn: z
        .string()
        .openapi({
          param: {
            name: 'PlatformApplicationArn',
            in: 'query',
            required: true,
            description: 'PlatformApplicationArn for GetPlatformApplicationAttributesInput.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetPlatformApplicationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetPlatformApplicationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetPlatformApplicationAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionGetPlatformApplicationAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetPlatformApplicationAttributes',
  description:
    'Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'POST_GetPlatformApplicationAttributes',
  request: {
    headers: z.object({
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
        .literal('GetPlatformApplicationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetPlatformApplicationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetPlatformApplicationAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetPlatformApplicationAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionGetSMSAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetSMSAttributes',
  description:
    '<p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>',
  operationId: 'GET_GetSMSAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      attributes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'attributes',
            in: 'query',
            required: false,
            description:
              '<p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for which you want values.</p> <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p> <p>If you don\'t use this parameter, Amazon SNS returns all SMS attributes.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      Action: z
        .literal('GetSMSAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSMSAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSMSAttributesResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postActionGetSMSAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetSMSAttributes',
  description:
    '<p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>',
  operationId: 'POST_GetSMSAttributes',
  request: {
    headers: z.object({
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
        .literal('GetSMSAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSMSAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetSMSAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSMSAttributesResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const getActionGetSMSSandboxAccountStatusRoute = createRoute({
  method: 'get',
  path: '/#Action=GetSMSSandboxAccountStatus',
  description:
    '<p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'GET_GetSMSSandboxAccountStatus',
  request: {
    headers: z.object({
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
        .literal('GetSMSSandboxAccountStatus')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSMSSandboxAccountStatus'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSMSSandboxAccountStatusResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postActionGetSMSSandboxAccountStatusRoute = createRoute({
  method: 'post',
  path: '/#Action=GetSMSSandboxAccountStatus',
  description:
    '<p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'POST_GetSMSSandboxAccountStatus',
  request: {
    headers: z.object({
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
        .literal('GetSMSSandboxAccountStatus')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSMSSandboxAccountStatus'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetSMSSandboxAccountStatusInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSMSSandboxAccountStatusResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const getActionGetSubscriptionAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetSubscriptionAttributes',
  description: 'Returns all of the properties of a subscription.',
  operationId: 'GET_GetSubscriptionAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      SubscriptionArn: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionArn',
            in: 'query',
            required: true,
            description: 'The ARN of the subscription whose properties you want to get.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetSubscriptionAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSubscriptionAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSubscriptionAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionGetSubscriptionAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetSubscriptionAttributes',
  description: 'Returns all of the properties of a subscription.',
  operationId: 'POST_GetSubscriptionAttributes',
  request: {
    headers: z.object({
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
        .literal('GetSubscriptionAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetSubscriptionAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetSubscriptionAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetSubscriptionAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionGetTopicAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=GetTopicAttributes',
  description:
    'Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.',
  operationId: 'GET_GetTopicAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic whose properties you want to get.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('GetTopicAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetTopicAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetTopicAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const postActionGetTopicAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=GetTopicAttributes',
  description:
    'Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.',
  operationId: 'POST_GetTopicAttributes',
  request: {
    headers: z.object({
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
        .literal('GetTopicAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetTopicAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetTopicAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetTopicAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const getActionListEndpointsByPlatformApplicationRoute = createRoute({
  method: 'get',
  path: '/#Action=ListEndpointsByPlatformApplication',
  description:
    '<p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>',
  operationId: 'GET_ListEndpointsByPlatformApplication',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PlatformApplicationArn: z
        .string()
        .openapi({
          param: {
            name: 'PlatformApplicationArn',
            in: 'query',
            required: true,
            description:
              'PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.',
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
              'NextToken string is used when calling ListEndpointsByPlatformApplication action to retrieve additional records that are available after the first page results.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListEndpointsByPlatformApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListEndpointsByPlatformApplication'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListEndpointsByPlatformApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionListEndpointsByPlatformApplicationRoute = createRoute({
  method: 'post',
  path: '/#Action=ListEndpointsByPlatformApplication',
  description:
    '<p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>',
  operationId: 'POST_ListEndpointsByPlatformApplication',
  request: {
    headers: z.object({
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
        .literal('ListEndpointsByPlatformApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListEndpointsByPlatformApplication'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListEndpointsByPlatformApplicationInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListEndpointsByPlatformApplicationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionListOriginationNumbersRoute = createRoute({
  method: 'get',
  path: '/#Action=ListOriginationNumbers',
  description:
    'Lists the calling Amazon Web Services account\'s dedicated origination numbers and their metadata. For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer Guide</i>.',
  operationId: 'GET_ListOriginationNumbers',
  request: {
    headers: z.object({
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
              'Token that the previous <code>ListOriginationNumbers</code> request returns.',
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
          z.int().min(1).max(30),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of origination numbers to return.',
            schema: { type: 'integer', minimum: 1, maximum: 30 },
          },
        }),
      Action: z
        .literal('ListOriginationNumbers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListOriginationNumbers'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListOriginationNumbersResultSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    482: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionListOriginationNumbersRoute = createRoute({
  method: 'post',
  path: '/#Action=ListOriginationNumbers',
  description:
    'Lists the calling Amazon Web Services account\'s dedicated origination numbers and their metadata. For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer Guide</i>.',
  operationId: 'POST_ListOriginationNumbers',
  request: {
    headers: z.object({
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
        .literal('ListOriginationNumbers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListOriginationNumbers'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListOriginationNumbersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListOriginationNumbersResultSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    482: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionListPhoneNumbersOptedOutRoute = createRoute({
  method: 'get',
  path: '/#Action=ListPhoneNumbersOptedOut',
  description:
    '<p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>',
  operationId: 'GET_ListPhoneNumbersOptedOut',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A <code>NextToken</code> string is used when you call the <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are available after the first page of results.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListPhoneNumbersOptedOut')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPhoneNumbersOptedOut'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPhoneNumbersOptedOutResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postActionListPhoneNumbersOptedOutRoute = createRoute({
  method: 'post',
  path: '/#Action=ListPhoneNumbersOptedOut',
  description:
    '<p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>',
  operationId: 'POST_ListPhoneNumbersOptedOut',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
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
      Action: z
        .literal('ListPhoneNumbersOptedOut')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPhoneNumbersOptedOut'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListPhoneNumbersOptedOutInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPhoneNumbersOptedOutResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const getActionListPlatformApplicationsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListPlatformApplications',
  description:
    '<p>Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>',
  operationId: 'GET_ListPlatformApplications',
  request: {
    headers: z.object({
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
              'NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListPlatformApplications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPlatformApplications'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPlatformApplicationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionListPlatformApplicationsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListPlatformApplications',
  description:
    '<p>Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>',
  operationId: 'POST_ListPlatformApplications',
  request: {
    headers: z.object({
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
        .literal('ListPlatformApplications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPlatformApplications'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListPlatformApplicationsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPlatformApplicationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionListSMSSandboxPhoneNumbersRoute = createRoute({
  method: 'get',
  path: '/#Action=ListSMSSandboxPhoneNumbers',
  description:
    '<p>Lists the calling Amazon Web Services account\'s current verified and pending destination phone numbers in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'GET_ListSMSSandboxPhoneNumbers',
  request: {
    headers: z.object({
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
              'Token that the previous <code>ListSMSSandboxPhoneNumbersInput</code> request returns.',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of phone numbers to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      Action: z
        .literal('ListSMSSandboxPhoneNumbers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListSMSSandboxPhoneNumbers'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListSMSSandboxPhoneNumbersResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postActionListSMSSandboxPhoneNumbersRoute = createRoute({
  method: 'post',
  path: '/#Action=ListSMSSandboxPhoneNumbers',
  description:
    '<p>Lists the calling Amazon Web Services account\'s current verified and pending destination phone numbers in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'POST_ListSMSSandboxPhoneNumbers',
  request: {
    headers: z.object({
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
        .literal('ListSMSSandboxPhoneNumbers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListSMSSandboxPhoneNumbers'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListSMSSandboxPhoneNumbersInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListSMSSandboxPhoneNumbersResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const getActionListSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListSubscriptions',
  description:
    "<p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>",
  operationId: 'GET_ListSubscriptions',
  request: {
    headers: z.object({
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
            description: 'Token returned by the previous <code>ListSubscriptions</code> request.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListSubscriptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListSubscriptions'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListSubscriptionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionListSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListSubscriptions',
  description:
    "<p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>",
  operationId: 'POST_ListSubscriptions',
  request: {
    headers: z.object({
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
        .literal('ListSubscriptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListSubscriptions'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListSubscriptionsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListSubscriptionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionListSubscriptionsByTopicRoute = createRoute({
  method: 'get',
  path: '/#Action=ListSubscriptionsByTopic',
  description:
    '<p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>',
  operationId: 'GET_ListSubscriptionsByTopic',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic for which you wish to find subscriptions.',
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
              'Token returned by the previous <code>ListSubscriptionsByTopic</code> request.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListSubscriptionsByTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListSubscriptionsByTopic'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListSubscriptionsByTopicResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionListSubscriptionsByTopicRoute = createRoute({
  method: 'post',
  path: '/#Action=ListSubscriptionsByTopic',
  description:
    '<p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>',
  operationId: 'POST_ListSubscriptionsByTopic',
  request: {
    headers: z.object({
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
        .literal('ListSubscriptionsByTopic')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListSubscriptionsByTopic'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListSubscriptionsByTopicInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListSubscriptionsByTopicResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionListTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTagsForResource',
  description:
    'List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.',
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
      ResourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic for which to list tags.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
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
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postActionListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTagsForResource',
  description:
    'List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.',
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
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTagsForResourceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const getActionListTopicsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTopics',
  description:
    "<p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>",
  operationId: 'GET_ListTopics',
  request: {
    headers: z.object({
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
            description: 'Token returned by the previous <code>ListTopics</code> request.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListTopics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTopics'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListTopicsResponseSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionListTopicsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTopics',
  description:
    "<p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>",
  operationId: 'POST_ListTopics',
  request: {
    headers: z.object({
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
        .literal('ListTopics')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTopics'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTopicsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListTopicsResponseSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionOptInPhoneNumberRoute = createRoute({
  method: 'get',
  path: '/#Action=OptInPhoneNumber',
  description:
    '<p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>',
  operationId: 'GET_OptInPhoneNumber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      phoneNumber: z
        .string()
        .openapi({
          param: {
            name: 'phoneNumber',
            in: 'query',
            required: true,
            description: 'The phone number to opt in. Use E.164 format.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('OptInPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['OptInPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: OptInPhoneNumberResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postActionOptInPhoneNumberRoute = createRoute({
  method: 'post',
  path: '/#Action=OptInPhoneNumber',
  description:
    '<p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>',
  operationId: 'POST_OptInPhoneNumber',
  request: {
    headers: z.object({
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
        .literal('OptInPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['OptInPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: OptInPhoneNumberInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: OptInPhoneNumberResponseSchema } },
    },
    480: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const getActionPublishRoute = createRoute({
  method: 'get',
  path: '/#Action=Publish',
  description:
    '<p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the <code>TargetArn</code>).</p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately delivers it to subscribers.</p> <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p> <important> <p>You can publish messages only to topics and endpoints in the same Amazon Web Services Region.</p> </important>',
  operationId: 'GET_Publish',
  request: {
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
        const open: string[] = ['MessageAttributes']
        const taken: string[] = [
          'TopicArn',
          'TargetArn',
          'PhoneNumber',
          'Message',
          'Subject',
          'MessageStructure',
          'MessageDeduplicationId',
          'MessageGroupId',
          'Action',
          'Version',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          TopicArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'TopicArn',
                in: 'query',
                required: false,
                description:
                  "<p>The topic you want to publish to.</p> <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>",
                schema: { type: 'string' },
              },
            }),
          TargetArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'TargetArn',
                in: 'query',
                required: false,
                description:
                  "If you don't specify a value for the <code>TargetArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code> parameters.",
                schema: { type: 'string' },
              },
            }),
          PhoneNumber: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'PhoneNumber',
                in: 'query',
                required: false,
                description:
                  "<p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p> <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must specify a value for the <code>TargetArn</code> or <code>TopicArn</code> parameters.</p>",
                schema: { type: 'string' },
              },
            }),
          Message: z
            .string()
            .openapi({
              param: {
                name: 'Message',
                in: 'query',
                required: true,
                description:
                  '<p>The message you want to send.</p> <p>If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the <code>MessageStructure</code> parameter to <code>json</code> and use a JSON object for the <code>Message</code> parameter. </p> <p/> <p>Constraints:</p> <ul> <li> <p>With the exception of SMS, messages must be UTF-8 encoded strings and at most 256 KB in size (262,144 bytes, not 262,144 characters).</p> </li> <li> <p>For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters.</p> <p>If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren\'t truncated mid-word but are cut off at whole-word boundaries.</p> <p>The total size limit for a single SMS <code>Publish</code> action is 1,600 characters.</p> </li> </ul> <p>JSON-specific constraints:</p> <ul> <li> <p>Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.</p> </li> <li> <p>The values will be parsed (unescaped) before they are used in outgoing messages.</p> </li> <li> <p>Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).</p> </li> <li> <p>Values have a minimum length of 0 (the empty string, "", is allowed).</p> </li> <li> <p>Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).</p> </li> <li> <p>Non-string values will cause the key to be ignored.</p> </li> <li> <p>Keys that do not correspond to supported transport protocols are ignored.</p> </li> <li> <p>Duplicate keys are not allowed.</p> </li> <li> <p>Failure to parse or validate any key or value in the message will cause the <code>Publish</code> call to return an error (no partial delivery).</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          Subject: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'Subject',
                in: 'query',
                required: false,
                description:
                  '<p>Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints.</p> <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.</p>',
                schema: { type: 'string' },
              },
            }),
          MessageStructure: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageStructure',
                in: 'query',
                required: false,
                description:
                  '<p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p> <ul> <li> <p>be a syntactically valid JSON object; and</p> </li> <li> <p>contain at least a top-level JSON key of "default" with a value that is a string.</p> </li> </ul> <p>You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http").</p> <p>Valid value: <code>json</code> </p>',
                schema: { type: 'string' },
              },
            }),
          MessageAttributes: z
            .record(z.string(), MessageAttributeValueSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageAttributes',
                in: 'query',
                required: false,
                description: 'Message attributes for Publish action.',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/MessageAttributeValue' },
                },
              },
            }),
          MessageDeduplicationId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageDeduplicationId',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageDeduplicationId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>Every message must have a unique <code>MessageDeduplicationId</code>, which is a token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any message sent with the same <code>MessageDeduplicationId</code> during the 5-minute deduplication interval is treated as a duplicate. </p> <p>If the topic has <code>ContentBasedDeduplication</code> set, the system generates a <code>MessageDeduplicationId</code> based on the contents of the message. Your <code>MessageDeduplicationId</code> overrides the generated one.</p>',
                schema: { type: 'string' },
              },
            }),
          MessageGroupId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MessageGroupId',
                in: 'query',
                required: false,
                description:
                  '<p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageGroupId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;\'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)</code>.</p> <p>The <code>MessageGroupId</code> is a tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). Every message must include a <code>MessageGroupId</code>.</p>',
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('Publish')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['Publish'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: PublishResponseSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'EndpointDisabledException',
      content: { 'text/xml': { schema: EndpointDisabledExceptionSchema } },
    },
    485: {
      description: 'PlatformApplicationDisabledException',
      content: { 'text/xml': { schema: PlatformApplicationDisabledExceptionSchema } },
    },
    486: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    487: {
      description: 'KMSDisabledException',
      content: { 'text/xml': { schema: KMSDisabledExceptionSchema } },
    },
    488: {
      description: 'KMSInvalidStateException',
      content: { 'text/xml': { schema: KMSInvalidStateExceptionSchema } },
    },
    489: {
      description: 'KMSNotFoundException',
      content: { 'text/xml': { schema: KMSNotFoundExceptionSchema } },
    },
    490: {
      description: 'KMSOptInRequired',
      content: { 'text/xml': { schema: KMSOptInRequiredSchema } },
    },
    491: {
      description: 'KMSThrottlingException',
      content: { 'text/xml': { schema: KMSThrottlingExceptionSchema } },
    },
    492: {
      description: 'KMSAccessDeniedException',
      content: { 'text/xml': { schema: KMSAccessDeniedExceptionSchema } },
    },
    493: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
    494: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionPublishRoute = createRoute({
  method: 'post',
  path: '/#Action=Publish',
  description:
    '<p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the <code>TargetArn</code>).</p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately delivers it to subscribers.</p> <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p> <important> <p>You can publish messages only to topics and endpoints in the same Amazon Web Services Region.</p> </important>',
  operationId: 'POST_Publish',
  request: {
    headers: z.object({
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
        .literal('Publish')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Publish'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PublishInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: PublishResponseSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'EndpointDisabledException',
      content: { 'text/xml': { schema: EndpointDisabledExceptionSchema } },
    },
    485: {
      description: 'PlatformApplicationDisabledException',
      content: { 'text/xml': { schema: PlatformApplicationDisabledExceptionSchema } },
    },
    486: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    487: {
      description: 'KMSDisabledException',
      content: { 'text/xml': { schema: KMSDisabledExceptionSchema } },
    },
    488: {
      description: 'KMSInvalidStateException',
      content: { 'text/xml': { schema: KMSInvalidStateExceptionSchema } },
    },
    489: {
      description: 'KMSNotFoundException',
      content: { 'text/xml': { schema: KMSNotFoundExceptionSchema } },
    },
    490: {
      description: 'KMSOptInRequired',
      content: { 'text/xml': { schema: KMSOptInRequiredSchema } },
    },
    491: {
      description: 'KMSThrottlingException',
      content: { 'text/xml': { schema: KMSThrottlingExceptionSchema } },
    },
    492: {
      description: 'KMSAccessDeniedException',
      content: { 'text/xml': { schema: KMSAccessDeniedExceptionSchema } },
    },
    493: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
    494: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionPublishBatchRoute = createRoute({
  method: 'get',
  path: '/#Action=PublishBatch',
  description:
    '<p>Publishes up to ten messages to the specified topic. This is a batch version of <code>Publish</code>. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for 5 minutes.</p> <p>The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). </p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this: </p> <p>&amp;AttributeName.1=first</p> <p>&amp;AttributeName.2=second</p> <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS immediately delivers the message to subscribers.</p>',
  operationId: 'GET_PublishBatch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description:
              'The Amazon resource name (ARN) of the topic you want to batch publish to.',
            schema: { type: 'string' },
          },
        }),
      PublishBatchRequestEntries: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PublishBatchRequestEntrySchema),
        )
        .openapi({
          param: {
            name: 'PublishBatchRequestEntries',
            in: 'query',
            required: true,
            description:
              'A list of <code>PublishBatch</code> request entries to be sent to the SNS topic.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/PublishBatchRequestEntry' },
            },
          },
        }),
      Action: z
        .literal('PublishBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PublishBatch'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PublishBatchResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'EndpointDisabledException',
      content: { 'text/xml': { schema: EndpointDisabledExceptionSchema } },
    },
    485: {
      description: 'PlatformApplicationDisabledException',
      content: { 'text/xml': { schema: PlatformApplicationDisabledExceptionSchema } },
    },
    486: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    487: {
      description: 'BatchEntryIdsNotDistinctException',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctExceptionSchema } },
    },
    488: {
      description: 'BatchRequestTooLongException',
      content: { 'text/xml': { schema: BatchRequestTooLongExceptionSchema } },
    },
    489: {
      description: 'EmptyBatchRequestException',
      content: { 'text/xml': { schema: EmptyBatchRequestExceptionSchema } },
    },
    490: {
      description: 'InvalidBatchEntryIdException',
      content: { 'text/xml': { schema: InvalidBatchEntryIdExceptionSchema } },
    },
    491: {
      description: 'TooManyEntriesInBatchRequestException',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestExceptionSchema } },
    },
    492: {
      description: 'KMSDisabledException',
      content: { 'text/xml': { schema: KMSDisabledExceptionSchema } },
    },
    493: {
      description: 'KMSInvalidStateException',
      content: { 'text/xml': { schema: KMSInvalidStateExceptionSchema } },
    },
    494: {
      description: 'KMSNotFoundException',
      content: { 'text/xml': { schema: KMSNotFoundExceptionSchema } },
    },
    495: {
      description: 'KMSOptInRequired',
      content: { 'text/xml': { schema: KMSOptInRequiredSchema } },
    },
    496: {
      description: 'KMSThrottlingException',
      content: { 'text/xml': { schema: KMSThrottlingExceptionSchema } },
    },
    497: {
      description: 'KMSAccessDeniedException',
      content: { 'text/xml': { schema: KMSAccessDeniedExceptionSchema } },
    },
    498: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
    499: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postActionPublishBatchRoute = createRoute({
  method: 'post',
  path: '/#Action=PublishBatch',
  description:
    '<p>Publishes up to ten messages to the specified topic. This is a batch version of <code>Publish</code>. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for 5 minutes.</p> <p>The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). </p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this: </p> <p>&amp;AttributeName.1=first</p> <p>&amp;AttributeName.2=second</p> <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS immediately delivers the message to subscribers.</p>',
  operationId: 'POST_PublishBatch',
  request: {
    headers: z.object({
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
        .literal('PublishBatch')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PublishBatch'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PublishBatchInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PublishBatchResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'EndpointDisabledException',
      content: { 'text/xml': { schema: EndpointDisabledExceptionSchema } },
    },
    485: {
      description: 'PlatformApplicationDisabledException',
      content: { 'text/xml': { schema: PlatformApplicationDisabledExceptionSchema } },
    },
    486: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    487: {
      description: 'BatchEntryIdsNotDistinctException',
      content: { 'text/xml': { schema: BatchEntryIdsNotDistinctExceptionSchema } },
    },
    488: {
      description: 'BatchRequestTooLongException',
      content: { 'text/xml': { schema: BatchRequestTooLongExceptionSchema } },
    },
    489: {
      description: 'EmptyBatchRequestException',
      content: { 'text/xml': { schema: EmptyBatchRequestExceptionSchema } },
    },
    490: {
      description: 'InvalidBatchEntryIdException',
      content: { 'text/xml': { schema: InvalidBatchEntryIdExceptionSchema } },
    },
    491: {
      description: 'TooManyEntriesInBatchRequestException',
      content: { 'text/xml': { schema: TooManyEntriesInBatchRequestExceptionSchema } },
    },
    492: {
      description: 'KMSDisabledException',
      content: { 'text/xml': { schema: KMSDisabledExceptionSchema } },
    },
    493: {
      description: 'KMSInvalidStateException',
      content: { 'text/xml': { schema: KMSInvalidStateExceptionSchema } },
    },
    494: {
      description: 'KMSNotFoundException',
      content: { 'text/xml': { schema: KMSNotFoundExceptionSchema } },
    },
    495: {
      description: 'KMSOptInRequired',
      content: { 'text/xml': { schema: KMSOptInRequiredSchema } },
    },
    496: {
      description: 'KMSThrottlingException',
      content: { 'text/xml': { schema: KMSThrottlingExceptionSchema } },
    },
    497: {
      description: 'KMSAccessDeniedException',
      content: { 'text/xml': { schema: KMSAccessDeniedExceptionSchema } },
    },
    498: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
    499: {
      description: 'ValidationException',
      content: { 'text/xml': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getActionPutDataProtectionPolicyRoute = createRoute({
  method: 'get',
  path: '/#Action=PutDataProtectionPolicy',
  description:
    'Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.',
  operationId: 'GET_PutDataProtectionPolicy',
  request: {
    headers: z.object({
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
              '<p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to add or update.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>',
            schema: { type: 'string' },
          },
        }),
      DataProtectionPolicy: z
        .string()
        .openapi({
          param: {
            name: 'DataProtectionPolicy',
            in: 'query',
            required: true,
            description:
              "<p>The JSON serialization of the topic's <code>DataProtectionPolicy</code>.</p> <p>The <code>DataProtectionPolicy</code> must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>",
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('PutDataProtectionPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutDataProtectionPolicy'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const postActionPutDataProtectionPolicyRoute = createRoute({
  method: 'post',
  path: '/#Action=PutDataProtectionPolicy',
  description:
    'Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.',
  operationId: 'POST_PutDataProtectionPolicy',
  request: {
    headers: z.object({
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
        .literal('PutDataProtectionPolicy')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PutDataProtectionPolicy'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PutDataProtectionPolicyInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const getActionRemovePermissionRoute = createRoute({
  method: 'get',
  path: '/#Action=RemovePermission',
  description:
    "<p>Removes a statement from a topic's access control policy.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>",
  operationId: 'GET_RemovePermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic whose access control policy you wish to modify.',
            schema: { type: 'string' },
          },
        }),
      Label: z
        .string()
        .openapi({
          param: {
            name: 'Label',
            in: 'query',
            required: true,
            description: 'The unique label of the statement you want to remove.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RemovePermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemovePermission'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionRemovePermissionRoute = createRoute({
  method: 'post',
  path: '/#Action=RemovePermission',
  description:
    "<p>Removes a statement from a topic's access control policy.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>",
  operationId: 'POST_RemovePermission',
  request: {
    headers: z.object({
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
        .literal('RemovePermission')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemovePermission'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemovePermissionInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionSetEndpointAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=SetEndpointAttributes',
  description:
    'Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'GET_SetEndpointAttributes',
  request: {
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
        const open: string[] = ['Attributes']
        const taken: string[] = ['EndpointArn', 'Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          EndpointArn: z
            .string()
            .openapi({
              param: {
                name: 'EndpointArn',
                in: 'query',
                required: true,
                description: 'EndpointArn used for SetEndpointAttributes action.',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .record(z.string(), StringSchema)
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: true,
                description:
                  '<p>A map of the endpoint attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> </li> </ul>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
          Action: z
            .literal('SetEndpointAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SetEndpointAttributes'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionSetEndpointAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetEndpointAttributes',
  description:
    'Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. ',
  operationId: 'POST_SetEndpointAttributes',
  request: {
    headers: z.object({
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
        .literal('SetEndpointAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetEndpointAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetEndpointAttributesInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionSetPlatformApplicationAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=SetPlatformApplicationAttributes',
  description:
    'Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. ',
  operationId: 'GET_SetPlatformApplicationAttributes',
  request: {
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
        const open: string[] = ['Attributes']
        const taken: string[] = ['PlatformApplicationArn', 'Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          PlatformApplicationArn: z
            .string()
            .openapi({
              param: {
                name: 'PlatformApplicationArn',
                in: 'query',
                required: true,
                description: 'PlatformApplicationArn for SetPlatformApplicationAttributes action.',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .record(z.string(), StringSchema)
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: true,
                description:
                  "<p>A map of the platform application attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>PlatformCredential</code> – The credential received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformCredential</code>is client secret.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformCredential</code> is private key.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformCredential</code> is signing key.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), <code>PlatformCredential</code> is API key. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>PlatformPrincipal</code> – The principal received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformPrincipal</code>is client id.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformPrincipal</code> is SSL certificate.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformPrincipal</code> is signing key ID.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code>. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which <code>EndpointCreated</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which <code>EndpointDeleted</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which <code>EndpointUpdate</code> event notifications are sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which <code>DeliveryFailure</code> event notifications are sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> <li> <p> <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100) of successfully delivered messages.</p> </li> </ul> <p>The following attributes only apply to <code>APNs</code> token-based authentication:</p> <ul> <li> <p> <code>ApplePlatformTeamID</code> – The identifier that's assigned to your Apple developer account team.</p> </li> <li> <p> <code>ApplePlatformBundleID</code> – The bundle identifier that's assigned to your iOS app.</p> </li> </ul>",
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
          Action: z
            .literal('SetPlatformApplicationAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SetPlatformApplicationAttributes'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postActionSetPlatformApplicationAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetPlatformApplicationAttributes',
  description:
    'Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. ',
  operationId: 'POST_SetPlatformApplicationAttributes',
  request: {
    headers: z.object({
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
        .literal('SetPlatformApplicationAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetPlatformApplicationAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetPlatformApplicationAttributesInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getActionSetSMSAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=SetSMSAttributes',
  description:
    '<p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide</i>.</p> <note> <p>To use this operation, you must grant the Amazon SNS service principal (<code>sns.amazonaws.com</code>) permission to perform the <code>s3:ListBucket</code> action. </p> </note>',
  operationId: 'GET_SetSMSAttributes',
  request: {
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
        const open: string[] = ['attributes']
        const taken: string[] = ['Action', 'Version']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          attributes: z
            .record(z.string(), StringSchema)
            .openapi({
              param: {
                name: 'attributes',
                in: 'query',
                required: true,
                description:
                  '<p>The default settings for sending SMS messages from your Amazon Web Services account. You can set values for the following attribute names:</p> <p> <code>MonthlySpendLimit</code> – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.</p> <important> <p>Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.</p> </important> <p>By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sns">SNS Limit Increase case</a>. For <b>New limit value</b>, enter your desired monthly spend limit. In the <b>Use Case Description</b> field, explain that you are requesting an SMS monthly spend limit increase.</p> <p> <code>DeliveryStatusIAMRole</code> – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.</p> <p> <code>DeliveryStatusSuccessSamplingRate</code> – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to <code>0</code>. To write logs for 10% of your successful deliveries, set it to <code>10</code>.</p> <p> <code>DefaultSenderID</code> – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.</p> <p> <code>DefaultSMSType</code> – The type of SMS message that you will send by default. You can assign the following values:</p> <ul> <li> <p> <code>Promotional</code> – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.</p> </li> <li> <p> <code>Transactional</code> – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.</p> </li> </ul> <p> <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your Amazon Web Services account:</p> <ul> <li> <p>Time that the message was published (in UTC)</p> </li> <li> <p>Message ID</p> </li> <li> <p>Destination phone number</p> </li> <li> <p>Message type</p> </li> <li> <p>Delivery status</p> </li> <li> <p>Message price (in USD)</p> </li> <li> <p>Part number (a message is split into multiple parts if it is too long for a single message)</p> </li> <li> <p>Total number of parts</p> </li> </ul> <p>To receive the report, the bucket must have a policy that allows the Amazon SNS service principal to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code> actions.</p> <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
          Action: z
            .literal('SetSMSAttributes')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['SetSMSAttributes'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetSMSAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionSetSMSAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetSMSAttributes',
  description:
    '<p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide</i>.</p> <note> <p>To use this operation, you must grant the Amazon SNS service principal (<code>sns.amazonaws.com</code>) permission to perform the <code>s3:ListBucket</code> action. </p> </note>',
  operationId: 'POST_SetSMSAttributes',
  request: {
    headers: z.object({
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
        .literal('SetSMSAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSMSAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetSMSAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetSMSAttributesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionSetSubscriptionAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=SetSubscriptionAttributes',
  description:
    'Allows a subscription owner to set an attribute of the subscription to a new value.',
  operationId: 'GET_SetSubscriptionAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      SubscriptionArn: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionArn',
            in: 'query',
            required: true,
            description: 'The ARN of the subscription to modify.',
            schema: { type: 'string' },
          },
        }),
      AttributeName: z
        .string()
        .openapi({
          param: {
            name: 'AttributeName',
            in: 'query',
            required: true,
            description:
              '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that this action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can\'t be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      AttributeValue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeValue',
            in: 'query',
            required: false,
            description: 'The new value for the attribute in JSON format.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SetSubscriptionAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSubscriptionAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'FilterPolicyLimitExceededException',
      content: { 'text/xml': { schema: FilterPolicyLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const postActionSetSubscriptionAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetSubscriptionAttributes',
  description:
    'Allows a subscription owner to set an attribute of the subscription to a new value.',
  operationId: 'POST_SetSubscriptionAttributes',
  request: {
    headers: z.object({
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
        .literal('SetSubscriptionAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSubscriptionAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetSubscriptionAttributesInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'FilterPolicyLimitExceededException',
      content: { 'text/xml': { schema: FilterPolicyLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
  },
})

export const getActionSetTopicAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=SetTopicAttributes',
  description:
    '<p>Allows a topic owner to set an attribute of the topic to a new value.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>',
  operationId: 'GET_SetTopicAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TopicArn: z
        .string()
        .openapi({
          param: {
            name: 'TopicArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic to modify.',
            schema: { type: 'string' },
          },
        }),
      AttributeName: z
        .string()
        .openapi({
          param: {
            name: 'AttributeName',
            in: 'query',
            required: true,
            description:
              '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.</p> </li> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> <li> <p>HTTP</p> <ul> <li> <p> <code>HTTPSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p> </li> <li> <p> <code>HTTPSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> <li> <p> <code>HTTPFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> </ul> </li> <li> <p>Amazon Kinesis Data Firehose</p> <ul> <li> <p> <code>FirehoseSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint. </p> </li> </ul> </li> <li> <p>Lambda</p> <ul> <li> <p> <code>LambdaSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. </p> </li> </ul> </li> <li> <p>Platform application endpoint</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> </ul> <note> <p>In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services.</p> <p>For example, For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. </p> </note> </li> <li> <p>Amazon SQS</p> <ul> <li> <p> <code>SQSSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> </ul> </li> </ul> <note> <p>The &lt;ENDPOINT&gt;SuccessFeedbackRoleArn and &lt;ENDPOINT&gt;FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The &lt;ENDPOINT&gt;SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the &lt;ENDPOINT&gt;FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. </p> </note> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      AttributeValue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeValue',
            in: 'query',
            required: false,
            description: 'The new value for the attribute.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('SetTopicAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetTopicAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const postActionSetTopicAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetTopicAttributes',
  description:
    '<p>Allows a topic owner to set an attribute of the topic to a new value.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>',
  operationId: 'POST_SetTopicAttributes',
  request: {
    headers: z.object({
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
        .literal('SetTopicAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetTopicAttributes'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetTopicAttributesInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const getActionSubscribeRoute = createRoute({
  method: 'get',
  path: '/#Action=Subscribe',
  description:
    '<p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the <code>ConfirmSubscription</code> action to confirm the subscription.</p> <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>',
  operationId: 'GET_Subscribe',
  request: {
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
        const open: string[] = ['Attributes']
        const taken: string[] = [
          'TopicArn',
          'Protocol',
          'Endpoint',
          'ReturnSubscriptionArn',
          'Action',
          'Version',
        ]
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          TopicArn: z
            .string()
            .openapi({
              param: {
                name: 'TopicArn',
                in: 'query',
                required: true,
                description: 'The ARN of the topic you want to subscribe to.',
                schema: { type: 'string' },
              },
            }),
          Protocol: z
            .string()
            .openapi({
              param: {
                name: 'Protocol',
                in: 'query',
                required: true,
                description:
                  '<p>The protocol that you want to use. Supported protocols include:</p> <ul> <li> <p> <code>http</code> – delivery of JSON-encoded message via HTTP POST</p> </li> <li> <p> <code>https</code> – delivery of JSON-encoded message via HTTPS POST</p> </li> <li> <p> <code>email</code> – delivery of message via SMTP</p> </li> <li> <p> <code>email-json</code> – delivery of JSON-encoded message via SMTP</p> </li> <li> <p> <code>sms</code> – delivery of message via SMS</p> </li> <li> <p> <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS queue</p> </li> <li> <p> <code>application</code> – delivery of JSON-encoded message to an EndpointArn for a mobile app and device</p> </li> <li> <p> <code>lambda</code> – delivery of JSON-encoded message to an Lambda function</p> </li> <li> <p> <code>firehose</code> – delivery of JSON-encoded message to an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          Endpoint: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'Endpoint',
                in: 'query',
                required: false,
                description:
                  '<p>The endpoint that you want to receive notifications. Endpoints vary by protocol:</p> <ul> <li> <p>For the <code>http</code> protocol, the (public) endpoint is a URL beginning with <code>http://</code>.</p> </li> <li> <p>For the <code>https</code> protocol, the (public) endpoint is a URL beginning with <code>https://</code>.</p> </li> <li> <p>For the <code>email</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>email-json</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>sms</code> protocol, the endpoint is a phone number of an SMS-enabled device.</p> </li> <li> <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS queue.</p> </li> <li> <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of a mobile app and device.</p> </li> <li> <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Lambda function.</p> </li> <li> <p>For the <code>firehose</code> protocol, the endpoint is the ARN of an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          Attributes: z
            .record(z.string(), AttributeValueSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'Attributes',
                in: 'query',
                required: false,
                description:
                  '<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>Subscribe</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can\'t be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/attributeValue' },
                },
              },
            }),
          ReturnSubscriptionArn: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReturnSubscriptionArn',
                in: 'query',
                required: false,
                description:
                  "<p>Sets whether the response from the <code>Subscribe</code> request includes the subscription ARN, even if the subscription is not yet confirmed.</p> <p>If you set this parameter to <code>true</code>, the response includes the ARN in all cases, even if the subscription is not yet confirmed. In addition to the ARN for confirmed subscriptions, the response also includes the <code>pending subscription</code> ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the <code>ConfirmSubscription</code> action with a confirmation token.</p> <p/> <p>The default value is <code>false</code>.</p>",
                schema: { type: 'boolean' },
              },
            }),
          Action: z
            .literal('Subscribe')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['Subscribe'] },
              },
            }),
          Version: z
            .literal('2010-03-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-03-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SubscribeResponseSchema } } },
    480: {
      description: 'SubscriptionLimitExceededException',
      content: { 'text/xml': { schema: SubscriptionLimitExceededExceptionSchema } },
    },
    481: {
      description: 'FilterPolicyLimitExceededException',
      content: { 'text/xml': { schema: FilterPolicyLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    486: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const postActionSubscribeRoute = createRoute({
  method: 'post',
  path: '/#Action=Subscribe',
  description:
    '<p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the <code>ConfirmSubscription</code> action to confirm the subscription.</p> <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>',
  operationId: 'POST_Subscribe',
  request: {
    headers: z.object({
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
        .literal('Subscribe')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Subscribe'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SubscribeInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SubscribeResponseSchema } } },
    480: {
      description: 'SubscriptionLimitExceededException',
      content: { 'text/xml': { schema: SubscriptionLimitExceededExceptionSchema } },
    },
    481: {
      description: 'FilterPolicyLimitExceededException',
      content: { 'text/xml': { schema: FilterPolicyLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    486: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const getActionTagResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=TagResource',
  description:
    '<p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn\'t recommended.</p> </li> <li> <p>Tags don\'t have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul>',
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
      ResourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic to which to add tags.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
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
            description:
              'The tags to be added to the specified topic. A tag consists of a required key and an optional value.',
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
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagResourceResponseSchema } } },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TagLimitExceededException',
      content: { 'text/xml': { schema: TagLimitExceededExceptionSchema } },
    },
    482: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    483: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    486: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postActionTagResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=TagResource',
  description:
    '<p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn\'t recommended.</p> </li> <li> <p>Tags don\'t have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul>',
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
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: TagResourceRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagResourceResponseSchema } } },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TagLimitExceededException',
      content: { 'text/xml': { schema: TagLimitExceededExceptionSchema } },
    },
    482: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    483: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    486: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const getActionUnsubscribeRoute = createRoute({
  method: 'get',
  path: '/#Action=Unsubscribe',
  description:
    "<p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <note> <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services signature.</p> </note> <p>This action is throttled at 100 transactions per second (TPS).</p>",
  operationId: 'GET_Unsubscribe',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      SubscriptionArn: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionArn',
            in: 'query',
            required: true,
            description: 'The ARN of the subscription to be deleted.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('Unsubscribe')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Unsubscribe'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const postActionUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/#Action=Unsubscribe',
  description:
    "<p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <note> <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services signature.</p> </note> <p>This action is throttled at 100 transactions per second (TPS).</p>",
  operationId: 'POST_Unsubscribe',
  request: {
    headers: z.object({
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
        .literal('Unsubscribe')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['Unsubscribe'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UnsubscribeInputSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'text/xml': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidSecurityException',
      content: { 'text/xml': { schema: InvalidSecurityExceptionSchema } },
    },
  },
})

export const getActionUntagResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=UntagResource',
  description:
    'Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.',
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
      ResourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the topic from which to remove tags.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
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
            description: 'The list of tag keys to remove from the specified topic.',
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
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TagLimitExceededException',
      content: { 'text/xml': { schema: TagLimitExceededExceptionSchema } },
    },
    482: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    483: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    486: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const postActionUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=UntagResource',
  description:
    'Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.',
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
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UntagResourceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TagLimitExceededException',
      content: { 'text/xml': { schema: TagLimitExceededExceptionSchema } },
    },
    482: {
      description: 'StaleTagException',
      content: { 'text/xml': { schema: StaleTagExceptionSchema } },
    },
    483: {
      description: 'TagPolicyException',
      content: { 'text/xml': { schema: TagPolicyExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    486: {
      description: 'ConcurrentAccessException',
      content: { 'text/xml': { schema: ConcurrentAccessExceptionSchema } },
    },
  },
})

export const getActionVerifySMSSandboxPhoneNumberRoute = createRoute({
  method: 'get',
  path: '/#Action=VerifySMSSandboxPhoneNumber',
  description:
    '<p>Verifies a destination phone number with a one-time password (OTP) for the calling Amazon Web Services account.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'GET_VerifySMSSandboxPhoneNumber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      PhoneNumber: z
        .string()
        .regex(/^(\+[0-9]{8,}|[0-9]{0,9})$/)
        .max(20)
        .openapi({
          param: {
            name: 'PhoneNumber',
            in: 'query',
            required: true,
            description: 'The destination phone number to verify.',
            schema: { type: 'string', pattern: '^(\\+[0-9]{8,}|[0-9]{0,9})$', maxLength: 20 },
          },
        }),
      OneTimePassword: z
        .string()
        .regex(/^[0-9]+$/)
        .min(5)
        .max(8)
        .openapi({
          param: {
            name: 'OneTimePassword',
            in: 'query',
            required: true,
            description:
              'The OTP sent to the destination number from the <code>CreateSMSSandBoxPhoneNumber</code> call.',
            schema: {
              type: 'string',
              pattern: '^[0-9]+$',
              description:
                'String of Origination/Destination address including phone numbers and email addresses',
              minLength: 5,
              maxLength: 8,
            },
          },
          description:
            'String of Origination/Destination address including phone numbers and email addresses',
        }),
      Action: z
        .literal('VerifySMSSandboxPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifySMSSandboxPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifySMSSandboxPhoneNumberResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'VerificationException',
      content: { 'text/xml': { schema: VerificationExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postActionVerifySMSSandboxPhoneNumberRoute = createRoute({
  method: 'post',
  path: '/#Action=VerifySMSSandboxPhoneNumber',
  description:
    '<p>Verifies a destination phone number with a one-time password (OTP) for the calling Amazon Web Services account.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>',
  operationId: 'POST_VerifySMSSandboxPhoneNumber',
  request: {
    headers: z.object({
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
        .literal('VerifySMSSandboxPhoneNumber')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['VerifySMSSandboxPhoneNumber'] },
          },
        }),
      Version: z
        .literal('2010-03-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-03-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: VerifySMSSandboxPhoneNumberInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: VerifySMSSandboxPhoneNumberResultSchema } },
    },
    480: {
      description: 'AuthorizationErrorException',
      content: { 'text/xml': { schema: AuthorizationErrorExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'text/xml': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'VerificationException',
      content: { 'text/xml': { schema: VerificationExceptionSchema } },
    },
    485: {
      description: 'ThrottledException',
      content: { 'text/xml': { schema: ThrottledExceptionSchema } },
    },
  },
})
