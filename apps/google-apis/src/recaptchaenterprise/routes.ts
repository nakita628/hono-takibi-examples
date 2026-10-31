import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentSchema = z
  .object({
    labels: z
      .array(
        z.enum([
          'ACCOUNT_DEFENDER_LABEL_UNSPECIFIED',
          'PROFILE_MATCH',
          'SUSPICIOUS_LOGIN_ACTIVITY',
          'SUSPICIOUS_ACCOUNT_CREATION',
          'RELATED_ACCOUNTS_NUMBER_HIGH',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Labels for this request.' }),
  })
  .openapi({ description: 'Account defender risk assessment.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment')

const GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address for which to trigger a verification request.' }),
    lastVerificationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp of the last successful verification for the endpoint, if any.',
        readOnly: true,
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Phone number for which to trigger a verification request. Should be given in E.164 format.',
      }),
    requestToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Information about a verification endpoint that can be used for 2FA.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo')

const GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoSchema = z
  .object({
    endpoints: z
      .array(GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoSchema)
      .exactOptional()
      .openapi({ description: 'Endpoints that can be used for identity verification.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language code preference for the verification message, set as a IETF BCP 47 language code.',
      }),
    latestVerificationResult: z
      .enum([
        'RESULT_UNSPECIFIED',
        'SUCCESS_USER_VERIFIED',
        'ERROR_USER_NOT_VERIFIED',
        'ERROR_SITE_ONBOARDING_INCOMPLETE',
        'ERROR_RECIPIENT_NOT_ALLOWED',
        'ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED',
        'ERROR_CRITICAL_INTERNAL',
        'ERROR_CUSTOMER_QUOTA_EXHAUSTED',
        'ERROR_VERIFICATION_BYPASSED',
        'ERROR_VERDICT_MISMATCH',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Result of the latest account verification challenge.',
        readOnly: true,
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Username of the account that is being verified. Deprecated. Customers should now provide the hashed account ID field in Event.',
      }),
  })
  .openapi({
    description: 'Information about account verification, used for identity verification.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo')

const GoogleCloudRecaptchaenterpriseV1AndroidKeySettingsSchema = z
  .object({
    allowAllPackageNames: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, allowed_package_names are not enforced.' }),
    allowedPackageNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Android package names of apps allowed to use the key. Example: 'com.companyname.appname'",
      }),
    supportNonGoogleAppStoreDistribution: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store.',
      }),
  })
  .openapi({
    description: 'Settings specific to keys that can be used by Android apps.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1AndroidKeySettings')

const GoogleCloudRecaptchaenterpriseV1TransactionEventSchema = z
  .object({
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call.',
      }),
    eventType: z
      .enum([
        'TRANSACTION_EVENT_TYPE_UNSPECIFIED',
        'MERCHANT_APPROVE',
        'MERCHANT_DENY',
        'MANUAL_REVIEW',
        'AUTHORIZATION',
        'AUTHORIZATION_DECLINE',
        'PAYMENT_CAPTURE',
        'PAYMENT_CAPTURE_DECLINE',
        'CANCEL',
        'CHARGEBACK_INQUIRY',
        'CHARGEBACK_ALERT',
        'FRAUD_NOTIFICATION',
        'CHARGEBACK',
        'CHARGEBACK_REPRESENTMENT',
        'CHARGEBACK_REVERSE',
        'REFUND_REQUEST',
        'REFUND_DECLINE',
        'REFUND',
        'REFUND_REVERSE',
      ])
      .exactOptional()
      .openapi({ description: 'Optional. The type of this transaction event.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005.',
      }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data.',
      }),
  })
  .openapi({
    description: 'Describes an event in the lifecycle of a payment transaction.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1TransactionEvent')

const GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestSchema = z
  .object({
    annotation: z
      .enum([
        'ANNOTATION_UNSPECIFIED',
        'LEGITIMATE',
        'FRAUDULENT',
        'PASSWORD_CORRECT',
        'PASSWORD_INCORRECT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.',
      }),
    hashedAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Unique stable hashed user identifier to apply to the assessment. This is an alternative to setting the hashed_account_id in CreateAssessment, for example when the account identifier is not yet known in the initial request. It is recommended that the identifier is hashed using hmac-sha256 with stable secret.',
      }),
    reasons: z
      .array(
        z.enum([
          'REASON_UNSPECIFIED',
          'CHARGEBACK',
          'CHARGEBACK_FRAUD',
          'CHARGEBACK_DISPUTE',
          'REFUND',
          'REFUND_FRAUD',
          'TRANSACTION_ACCEPTED',
          'TRANSACTION_DECLINED',
          'PAYMENT_HEURISTICS',
          'INITIATED_TWO_FACTOR',
          'PASSED_TWO_FACTOR',
          'FAILED_TWO_FACTOR',
          'CORRECT_PASSWORD',
          'INCORRECT_PASSWORD',
          'SOCIAL_SPAM',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional reasons for the annotation that will be assigned to the Event.',
      }),
    transactionEvent:
      GoogleCloudRecaptchaenterpriseV1TransactionEventSchema.exactOptional().openapi({
        description:
          'Optional. If the assessment is part of a payment transaction, provide details on payment lifecycle events that occur in the transaction.',
      }),
  })
  .openapi({ description: 'The request message to annotate an Assessment.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest')

const GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponseSchema = z
  .object({})
  .openapi({ description: 'Empty response for AnnotateAssessment.' })
  .openapi('GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse')

const GoogleCloudRecaptchaenterpriseV1TransactionDataAddressSchema = z
  .object({
    address: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number.',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The state, province, or otherwise administrative area of the address.',
      }),
    locality: z.string().exactOptional().openapi({ description: 'The town/city of the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal or ZIP code of the address.' }),
    recipient: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recipient name, potentially including information such as "care of".',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CLDR country/region of the address.' }),
  })
  .openapi({
    description: 'Structured address format for billing and shipping addresses.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1TransactionDataAddress')

const GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfoSchema = z
  .object({
    avsResponseCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).',
      }),
    cvvResponseCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).',
      }),
    gatewayResponseCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gateway response code describing the state of the transaction.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the gateway service (for example, stripe, square, paypal).',
      }),
  })
  .openapi({ description: 'Details about the transaction from the gateway.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo')

const GoogleCloudRecaptchaenterpriseV1TransactionDataItemSchema = z
  .object({
    merchantAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The full name of the item.' }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quantity of this item that is being purchased.' }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The value per item that the user is paying, in the transaction currency, after discounts.',
      }),
  })
  .openapi({ description: 'Line items being purchased in this transaction.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1TransactionDataItem')

const GoogleCloudRecaptchaenterpriseV1TransactionDataUserSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account.',
      }),
    creationMs: z
      .string()
      .exactOptional()
      .openapi({ description: "The epoch milliseconds of the user's account creation." }),
    email: z.string().exactOptional().openapi({ description: 'The email address of the user.' }),
    emailVerified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the email has been verified to be accessible by the user (OTP or similar).',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the user, with country code.' }),
    phoneVerified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the phone number has been verified to be accessible by the user (OTP or similar).',
      }),
  })
  .openapi({
    description: "Details about a user's account involved in the transaction.",
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1TransactionDataUser')

const GoogleCloudRecaptchaenterpriseV1TransactionDataSchema = z
  .object({
    billingAddress:
      GoogleCloudRecaptchaenterpriseV1TransactionDataAddressSchema.exactOptional().openapi({
        description: 'Address associated with the payment method when applicable.',
      }),
    cardBin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Bank Identification Number - generally the first 6 or 8 digits of the card.',
      }),
    cardLastFour: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the card.' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code in ISO-4217 format.' }),
    gatewayInfo:
      GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfoSchema.exactOptional().openapi({
        description: "Information about the payment gateway's response to the transaction.",
      }),
    items: z
      .array(GoogleCloudRecaptchaenterpriseV1TransactionDataItemSchema)
      .exactOptional()
      .openapi({ description: 'Items purchased in this transaction.' }),
    merchants: z
      .array(GoogleCloudRecaptchaenterpriseV1TransactionDataUserSchema)
      .exactOptional()
      .openapi({ description: 'Information about the user or users fulfilling the transaction.' }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name} (If a third-party is used, for example, processor-paypal) * custom-{name} (If an alternative method is used, for example, custom-crypto)',
      }),
    shippingAddress:
      GoogleCloudRecaptchaenterpriseV1TransactionDataAddressSchema.exactOptional().openapi({
        description: 'Destination address if this transaction involves shipping a physical item.',
      }),
    shippingValue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The value of shipping in the specified currency. 0 for free or no shipping.',
      }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.',
      }),
    user: GoogleCloudRecaptchaenterpriseV1TransactionDataUserSchema.exactOptional().openapi({
      description: 'Information about the user paying/initiating the transaction.',
    }),
    value: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The decimal value of the transaction in the specified currency.' }),
  })
  .openapi({
    description:
      'Transaction data associated with a payment protected by reCAPTCHA Enterprise. All fields are optional.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1TransactionData')

const GoogleCloudRecaptchaenterpriseV1EventSchema = z
  .object({
    expectedAction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise.',
      }),
    express: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, `site_key` must reference a SCORE key with WAF feature set to EXPRESS.',
      }),
    firewallPolicyEvaluation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy will be evaluated and a suggested firewall action will be returned in the response.',
      }),
    hashedAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret.',
      }),
    headers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. HTTP header information about the request.' }),
    ja3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Optional JA3 fingerprint for SSL clients.' }),
    requestedUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The URI resource the user requested that triggered an assessment.',
      }),
    siteKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token.',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site.',
      }),
    transactionData: GoogleCloudRecaptchaenterpriseV1TransactionDataSchema.exactOptional().openapi({
      description:
        'Optional. Data describing a payment transaction to be assessed. Sending this data enables reCAPTCHA Enterprise Fraud Prevention and the FraudPreventionAssessment component in the response.',
    }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The user agent present in the request from the user's device related to this event.",
      }),
    userIpAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The IP address in the request from the user's device related to this event.",
      }),
    wafTokenAssessment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key.',
      }),
  })
  .openapi({ description: 'The event being assessed.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1Event')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleCloudRecaptchaenterpriseV1FirewallActionAllowActionSchema = z
  .object({})
  .openapi({ description: 'An allow action continues processing a request unimpeded.' })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction')

const GoogleCloudRecaptchaenterpriseV1FirewallActionBlockActionSchema = z
  .object({})
  .openapi({
    description:
      'A block action serves an HTTP error code a prevents the request from hitting the backend.',
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction')

const GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectActionSchema = z
  .object({})
  .openapi({
    description:
      'A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token.',
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction')

const GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderActionSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header key to set in the request to the backend server.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header value to set in the request to the backend server.' }),
  })
  .openapi({
    description:
      'A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction')

const GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteActionSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The address to redirect to. The target is a relative path in the current host. Example: "/blog/404.html".',
      }),
  })
  .openapi({
    description:
      'A substitute action transparently serves a different page than the one requested.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction')

const GoogleCloudRecaptchaenterpriseV1FirewallActionSchema = z
  .object({
    allow: GoogleCloudRecaptchaenterpriseV1FirewallActionAllowActionSchema.exactOptional().openapi({
      description:
        'The user request did not match any policy and should be allowed access to the requested resource.',
    }),
    block: GoogleCloudRecaptchaenterpriseV1FirewallActionBlockActionSchema.exactOptional().openapi({
      description:
        'This action will deny access to a given page. The user will get an HTTP error code.',
    }),
    redirect:
      GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectActionSchema.exactOptional().openapi({
        description:
          'This action will redirect the request to a ReCaptcha interstitial to attach a token.',
      }),
    setHeader:
      GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderActionSchema.exactOptional().openapi({
        description:
          'This action will set a custom header but allow the request to continue to the customer backend.',
      }),
    substitute:
      GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteActionSchema.exactOptional().openapi({
        description: 'This action will transparently serve a different page to an offending user.',
      }),
  })
  .openapi({
    description: 'An individual action. Each action represents what to do if a policy matches.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallAction')

const GoogleCloudRecaptchaenterpriseV1FirewallPolicySchema = z
  .object({
    actions: z
      .array(GoogleCloudRecaptchaenterpriseV1FirewallActionSchema)
      .exactOptional()
      .openapi({
        description:
          'The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as AllowAction, BlockAction or SubstituteAction. Zero or more non-terminal actions such as SetHeader might be specified. A single policy can contain up to 16 actions.',
      }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name for the FirewallPolicy in the format "projects/{project}/firewallpolicies/{firewallpolicy}".',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters.',
      }),
  })
  .openapi({
    description:
      'A FirewallPolicy represents a single matching pattern and resulting actions to take.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallPolicy')

const GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessmentSchema = z
  .object({
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'If the processing of a policy config fails, an error will be populated and the firewall_policy will be left empty.',
    }),
    firewallPolicy: GoogleCloudRecaptchaenterpriseV1FirewallPolicySchema.exactOptional().openapi({
      description:
        'Output only. The policy that matched the request. If more than one policy may match, this is the first match. If no policy matches the incoming request, the policy field will be left empty.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Policy config assessment.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment')

const GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdictSchema = z
  .object({
    trust: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Probability (0-1) of this transaction attempt being executed in a behaviorally trustworthy way.',
      }),
  })
  .openapi({ description: 'Information about behavioral trust of the transaction.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict')

const GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdictSchema = z
  .object({
    risk: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Probability (0-1) of this transaction attempt being part of a card testing attack.',
      }),
  })
  .openapi({
    description:
      'Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict')

const GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdictSchema = z
  .object({
    risk: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Probability (0-1) of this transaction being executed with a stolen instrument.',
      }),
  })
  .openapi({
    description:
      'Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict')

const GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentSchema = z
  .object({
    behavioralTrustVerdict:
      GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdictSchema.exactOptional().openapi(
        { description: 'Assessment of this transaction for behavioral trust.' },
      ),
    cardTestingVerdict:
      GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdictSchema.exactOptional().openapi(
        {
          description:
            'Assessment of this transaction for risk of being part of a card testing attack.',
        },
      ),
    stolenInstrumentVerdict:
      GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdictSchema.exactOptional().openapi(
        { description: 'Assessment of this transaction for risk of a stolen instrument.' },
      ),
    transactionRisk: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Probability (0-1) of this transaction being fraudulent. Summarizes the combined risk of attack vectors below.',
      }),
  })
  .openapi({ description: 'Assessment for Fraud Prevention.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment')

const GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationSchema = z
  .object({
    encryptedLeakMatchPrefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. List of prefixes of the encrypted potential password leaks that matched the given parameters. They must be compared with the client-side decryption prefix of `reencrypted_user_credentials_hash`',
        readOnly: true,
      }),
    encryptedUserCredentialsHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`.',
      }),
    lookupHashPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix.',
      }),
    reencryptedUserCredentialsHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Corresponds to the re-encryption of the `encrypted_user_credentials_hash` field. It is used to match potential password leaks within `encrypted_leak_match_prefixes`.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Private password leak verification info.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification')

const GoogleCloudRecaptchaenterpriseV1RiskAnalysisSchema = z
  .object({
    extendedVerdictReasons: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Extended verdict reasons to be used for experimentation only. The set of possible reasons is subject to change.',
      }),
    reasons: z
      .array(
        z.enum([
          'CLASSIFICATION_REASON_UNSPECIFIED',
          'AUTOMATION',
          'UNEXPECTED_ENVIRONMENT',
          'TOO_MUCH_TRAFFIC',
          'UNEXPECTED_USAGE_PATTERNS',
          'LOW_CONFIDENCE_SCORE',
          'SUSPECTED_CARDING',
          'SUSPECTED_CHARGEBACK',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Reasons contributing to the risk analysis verdict.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic).',
      }),
  })
  .openapi({ description: 'Risk analysis result for an event.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1RiskAnalysis')

const GoogleCloudRecaptchaenterpriseV1TokenPropertiesSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action name provided at token generation.' }),
    androidPackageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Android package with which the token was generated (Android keys only).',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp corresponding to the generation of the token.' }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hostname of the page on which the token was generated (Web keys only).',
      }),
    invalidReason: z
      .enum([
        'INVALID_REASON_UNSPECIFIED',
        'UNKNOWN_INVALID_REASON',
        'MALFORMED',
        'EXPIRED',
        'DUPE',
        'MISSING',
        'BROWSER_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'Reason associated with the response when valid = false.' }),
    iosBundleId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the iOS bundle with which the token was generated (iOS keys only).',
      }),
    valid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment).',
      }),
  })
  .openapi({ description: 'Properties of the provided event token.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1TokenProperties')

const GoogleCloudRecaptchaenterpriseV1AssessmentSchema = z
  .object({
    accountDefenderAssessment:
      GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentSchema.exactOptional().openapi({
        description:
          'Assessment returned by account defender when a hashed_account_id is provided.',
      }),
    accountVerification:
      GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoSchema.exactOptional().openapi({
        description:
          'Account verification information for identity verification. The assessment event must include a token and site key to use this feature.',
      }),
    event: GoogleCloudRecaptchaenterpriseV1EventSchema.exactOptional().openapi({
      description: 'The event being assessed.',
    }),
    firewallPolicyAssessment:
      GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessmentSchema.exactOptional().openapi({
        description:
          'Assessment returned when firewall policies belonging to the project are evaluated using the field firewall_policy_evaluation.',
      }),
    fraudPreventionAssessment:
      GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentSchema.exactOptional().openapi({
        description: 'Assessment returned by Fraud Prevention when TransactionData is provided.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for the Assessment in the format "projects/{project}/assessments/{assessment}".',
        readOnly: true,
      }),
    privatePasswordLeakVerification:
      GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationSchema.exactOptional().openapi(
        {
          description:
            'The private password leak verification field contains the parameters that are used to to check for leaks privately without sharing user credentials.',
        },
      ),
    riskAnalysis: GoogleCloudRecaptchaenterpriseV1RiskAnalysisSchema.exactOptional().openapi({
      description: 'Output only. The risk analysis result for the event being assessed.',
      readOnly: true,
    }),
    tokenProperties: GoogleCloudRecaptchaenterpriseV1TokenPropertiesSchema.exactOptional().openapi({
      description: 'Output only. Properties of the provided event token.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A reCAPTCHA Enterprise assessment resource.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1Assessment')

const GoogleCloudRecaptchaenterpriseV1ChallengeMetricsSchema = z
  .object({
    failedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered.',
      }),
    nocaptchaCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Count of nocaptchas (successful verification without a challenge) issued.',
      }),
    pageloadCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA.',
      }),
    passedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification.',
      }),
  })
  .openapi({ description: 'Metrics related to challenges.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1ChallengeMetrics')

const GoogleCloudRecaptchaenterpriseV1IOSKeySettingsSchema = z
  .object({
    allowAllBundleIds: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, allowed_bundle_ids are not enforced.' }),
    allowedBundleIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'",
      }),
  })
  .openapi({ description: 'Settings specific to keys that can be used by iOS apps.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1IOSKeySettings')

const GoogleCloudRecaptchaenterpriseV1TestingOptionsSchema = z
  .object({
    testingChallenge: z
      .enum(['TESTING_CHALLENGE_UNSPECIFIED', 'NOCAPTCHA', 'UNSOLVABLE_CHALLENGE'])
      .exactOptional()
      .openapi({
        description:
          'For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE.',
      }),
    testingScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.',
      }),
  })
  .openapi({ description: 'Options for user acceptance testing.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1TestingOptions')

const GoogleCloudRecaptchaenterpriseV1WafSettingsSchema = z
  .object({
    wafFeature: z
      .enum([
        'WAF_FEATURE_UNSPECIFIED',
        'CHALLENGE_PAGE',
        'SESSION_TOKEN',
        'ACTION_TOKEN',
        'EXPRESS',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The WAF feature for which this key is enabled.' }),
    wafService: z
      .enum(['WAF_SERVICE_UNSPECIFIED', 'CA', 'FASTLY'])
      .exactOptional()
      .openapi({ description: 'Required. The WAF service that uses this key.' }),
  })
  .openapi({
    description: 'Settings specific to keys that can be used for WAF (Web Application Firewall).',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1WafSettings')

const GoogleCloudRecaptchaenterpriseV1WebKeySettingsSchema = z
  .object({
    allowAllDomains: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, it means allowed_domains will not be enforced.' }),
    allowAmpTraffic: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.',
      }),
    allowedDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'",
      }),
    challengeSecurityPreference: z
      .enum(['CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED', 'USABILITY', 'BALANCE', 'SECURITY'])
      .exactOptional()
      .openapi({
        description:
          'Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE.',
      }),
    integrationType: z
      .enum(['INTEGRATION_TYPE_UNSPECIFIED', 'SCORE', 'CHECKBOX', 'INVISIBLE'])
      .exactOptional()
      .openapi({ description: 'Required. Describes how this key is integrated with the website.' }),
  })
  .openapi({ description: 'Settings specific to keys that can be used by websites.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1WebKeySettings')

const GoogleCloudRecaptchaenterpriseV1KeySchema = z
  .object({
    androidSettings:
      GoogleCloudRecaptchaenterpriseV1AndroidKeySettingsSchema.exactOptional().openapi({
        description: 'Settings for keys that can be used by Android apps.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp corresponding to the creation of this key.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable display name of this key. Modifiable by user.' }),
    iosSettings: GoogleCloudRecaptchaenterpriseV1IOSKeySettingsSchema.exactOptional().openapi({
      description: 'Settings for keys that can be used by iOS apps.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'See Creating and managing labels.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The resource name for the Key in the format "projects/{project}/keys/{key}".',
      }),
    testingOptions: GoogleCloudRecaptchaenterpriseV1TestingOptionsSchema.exactOptional().openapi({
      description: 'Options for user acceptance testing.',
    }),
    wafSettings: GoogleCloudRecaptchaenterpriseV1WafSettingsSchema.exactOptional().openapi({
      description: 'Settings for WAF',
    }),
    webSettings: GoogleCloudRecaptchaenterpriseV1WebKeySettingsSchema.exactOptional().openapi({
      description: 'Settings for keys that can be used by websites.',
    }),
  })
  .openapi({
    description:
      'A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1Key')

const GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponseSchema = z
  .object({
    firewallPolicies: z
      .array(GoogleCloudRecaptchaenterpriseV1FirewallPolicySchema)
      .exactOptional()
      .openapi({ description: 'Policy details.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. It is set to empty if no policies remain in results.',
      }),
  })
  .openapi({
    description: 'Response to request to list firewall policies belonging to a key.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse')

const GoogleCloudRecaptchaenterpriseV1ListKeysResponseSchema = z
  .object({
    keys: z
      .array(GoogleCloudRecaptchaenterpriseV1KeySchema)
      .exactOptional()
      .openapi({ description: 'Key details.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. It is set to empty if no keys remain in results.',
      }),
  })
  .openapi({ description: 'Response to request to list keys in a project.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1ListKeysResponse')

const GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembershipSchema = z
  .object({
    hashedAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique stable hashed user identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name for this membership in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}/memberships/{membership}`.',
      }),
  })
  .openapi({ description: 'A membership in a group of related accounts.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership')

const GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    relatedAccountGroupMemberships: z
      .array(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembershipSchema)
      .exactOptional()
      .openapi({ description: 'The memberships listed by the query.' }),
  })
  .openapi({
    description: 'The response to a `ListRelatedAccountGroupMemberships` call.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse')

const GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{related_account_group}`.',
      }),
  })
  .openapi({ description: 'A group of related accounts.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup')

const GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    relatedAccountGroups: z
      .array(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupSchema)
      .exactOptional()
      .openapi({ description: 'The groups of related accounts listed by the query.' }),
  })
  .openapi({ description: 'The response to a `ListRelatedAccountGroups` call.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse')

const GoogleCloudRecaptchaenterpriseV1ScoreDistributionSchema = z
  .object({
    scoreBuckets: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10).',
      }),
  })
  .openapi({ description: 'Score distribution.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1ScoreDistribution')

const GoogleCloudRecaptchaenterpriseV1ScoreMetricsSchema = z
  .object({
    actionMetrics: z
      .record(z.string(), GoogleCloudRecaptchaenterpriseV1ScoreDistributionSchema)
      .exactOptional()
      .openapi({
        description:
          'Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call.',
      }),
    overallMetrics: GoogleCloudRecaptchaenterpriseV1ScoreDistributionSchema.exactOptional().openapi(
      { description: 'Aggregated score metrics for all traffic.' },
    ),
  })
  .openapi({ description: 'Metrics related to scoring.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1ScoreMetrics')

const GoogleCloudRecaptchaenterpriseV1MetricsSchema = z
  .object({
    challengeMetrics: z
      .array(GoogleCloudRecaptchaenterpriseV1ChallengeMetricsSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics will be continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE), will have challenge-based data.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the metrics, in the format "projects/{project}/keys/{key}/metrics".',
        readOnly: true,
      }),
    scoreMetrics: z
      .array(GoogleCloudRecaptchaenterpriseV1ScoreMetricsSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics will be continuous and in order by dates, and in the granularity of day. All Key types should have score-based data.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Inclusive start time aligned to a day (UTC).' }),
  })
  .openapi({ description: 'Metrics for a single Key.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1Metrics')

const GoogleCloudRecaptchaenterpriseV1MigrateKeyRequestSchema = z
  .object({
    skipBillingCheck: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha-enterprise/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha-enterprise/docs/billing-information.',
      }),
  })
  .openapi({ description: 'The migrate key request message.', required: [] })
  .openapi('GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest')

const GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponseSchema = z
  .object({
    legacySecretKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes.',
      }),
  })
  .openapi({
    description:
      'Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse')

const GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequestSchema = z
  .object({
    hashedAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The unique stable hashed user identifier we should search connections to. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token.',
      }),
  })
  .openapi({
    description: 'The request message to search related account group memberships.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest')

const GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    relatedAccountGroupMemberships: z
      .array(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembershipSchema)
      .exactOptional()
      .openapi({ description: 'The queried memberships.' }),
  })
  .openapi({
    description: 'The response to a `SearchRelatedAccountGroupMemberships` call.',
    required: [],
  })
  .openapi('GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1KeyRetrieveLegacySecretKeyRoute = createRoute({
  method: 'get',
  path: '/v1/{key}:retrieveLegacySecretKey',
  tags: ['projects'],
  description:
    'Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.',
  operationId: 'recaptchaenterprise.projects.keys.retrieveLegacySecretKey',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The public key name linked to the requested secret key in the format "projects/{project}/keys/{key}".',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Get some aggregated metrics for a Key. This data can be used to build dashboards.',
  operationId: 'recaptchaenterprise.projects.keys.getMetrics',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the requested metrics, in the format "projects/{project}/keys/{key}/metrics".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1MetricsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes the specified key.',
  operationId: 'recaptchaenterprise.projects.keys.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the key to be deleted, in the format "projects/{project}/keys/{key}".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates the specified key.',
  operationId: 'recaptchaenterprise.projects.keys.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name for the Key in the format "projects/{project}/keys/{key}".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1KeySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1KeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:annotate',
  tags: ['projects'],
  description:
    'Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.',
  operationId: 'recaptchaenterprise.projects.assessments.annotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Assessment, in the format "projects/{project}/assessments/{assessment}".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameMigrateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:migrate',
  tags: ['projects'],
  description:
    'Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.',
  operationId: 'recaptchaenterprise.projects.keys.migrate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the key to be migrated, in the format "projects/{project}/keys/{key}".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecaptchaenterpriseV1MigrateKeyRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1KeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAssessmentsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/assessments',
  tags: ['projects'],
  description: 'Creates an Assessment of the likelihood an event is legitimate.',
  operationId: 'recaptchaenterprise.projects.assessments.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project in which the assessment will be created, in the format "projects/{project}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1AssessmentSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1AssessmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentFirewallpoliciesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/firewallpolicies',
  tags: ['projects'],
  description: 'Returns the list of all firewall policies that belong to a project.',
  operationId: 'recaptchaenterprise.projects.firewallpolicies.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project to list the policies for, in the format "projects/{project}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentFirewallpoliciesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/firewallpolicies',
  tags: ['projects'],
  description:
    'Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.',
  operationId: 'recaptchaenterprise.projects.firewallpolicies.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project this policy will apply to, in the format "projects/{project}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecaptchaenterpriseV1FirewallPolicySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecaptchaenterpriseV1FirewallPolicySchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentKeysRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/keys',
  tags: ['projects'],
  description: 'Returns the list of all keys that belong to a project.',
  operationId: 'recaptchaenterprise.projects.keys.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project that contains the keys that will be listed, in the format "projects/{project}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecaptchaenterpriseV1ListKeysResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentKeysRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/keys',
  tags: ['projects'],
  description: 'Creates a new reCAPTCHA Enterprise key.',
  operationId: 'recaptchaenterprise.projects.keys.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project in which the key will be created, in the format "projects/{project}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1KeySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRecaptchaenterpriseV1KeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentMembershipsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/memberships',
  tags: ['projects'],
  description: 'Get memberships in a group of related accounts.',
  operationId: 'recaptchaenterprise.projects.relatedaccountgroups.memberships.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRelatedaccountgroupsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/relatedaccountgroups',
  tags: ['projects'],
  description: 'List groups of related accounts.',
  operationId: 'recaptchaenterprise.projects.relatedaccountgroups.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project to list related account groups from, in the format "projects/{project}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectRelatedaccountgroupmembershipsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/{project}/relatedaccountgroupmemberships:search',
  tags: ['projects'],
  description: 'Search group memberships related to a given account.',
  operationId: 'recaptchaenterprise.projects.relatedaccountgroupmemberships.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project to search related account group memberships from. Specify the project name in the following format: "projects/{project}".',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema:
            GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
