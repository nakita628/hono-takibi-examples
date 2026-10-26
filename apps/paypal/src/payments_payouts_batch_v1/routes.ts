import { createRoute, z } from '@hono/zod-openapi'

const PhoneSchema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .openapi({
        description:
          'The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    extension_number: z
      .string()
      .regex(/^[0-9]{1,15}?$/)
      .min(1)
      .max(15)
      .exactOptional()
      .openapi({ description: 'The extension number.' }),
  })
  .openapi({
    title: 'Phone',
    description:
      'The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
    required: ['country_code', 'national_number'],
  })
  .openapi('Phone')

const AlternateNotificationMethodSchema = z
  .object({
    phone: PhoneSchema.exactOptional().openapi({
      description: 'The mobile phone number of the receiver.',
    }),
  })
  .openapi({
    title: 'Alternate Notification Method',
    description:
      'Captures additional notification modes to reach out to the receiver regarding this payment.',
    required: [],
  })
  .openapi('AlternateNotificationMethod')

const ApplicationContextSchema = z
  .object({
    social_feed_privacy: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(15)
      .default('PRIVATE')
      .exactOptional()
      .openapi({
        description:
          "This attribute controls the privacy of a payout transaction in recipient’s feed. PUBLIC, FRIENDS_ONLY & PRIVATE are the values that can be used. PUBLIC - The payment displays on the recipient's public Venmo feed. FRIENDS_ONLY - The payment displays only to the recipient's Venmo friends. PRIVATE - The payment displays only on the recipient's personal feed. Defaults to `PRIVATE` if left blank.",
      }),
    holler_url: z
      .url()
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'Link to a Holler sticker. For Venmo recipients, the sticker displays with the payout message. The maximum URL length is 151.',
        deprecated: true,
      }),
    logo_url: z
      .url()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          "Link to a logo that displays as the sender's profile image in the recipient's Venmo feed. Used to add or update the business profile image. Max image size: 1024 x 1024 pixels. The image should be square and maximum URL length is 2000.",
      }),
  })
  .openapi({
    title: 'Application Context',
    description: 'Metadata for Venmo transactions.',
    required: [],
  })
  .openapi('ApplicationContext')

const BatchEnumSchema = z
  .enum(['DENIED', 'PENDING', 'PROCESSING', 'SUCCESS', 'CANCELED'])
  .openapi({
    title: 'Batch status',
    description: 'The payouts status.',
    'x-enumDescriptions': [
      {
        value: 'DENIED',
        description:
          'Your payout requests were denied, so they were not processed. Check the error messages to see any steps necessary to fix these issues.',
      },
      {
        value: 'PENDING',
        description: 'Your payout requests were received and will be processed soon.',
      },
      {
        value: 'PROCESSING',
        description: 'Your payout requests were received and are now being processed.',
      },
      {
        value: 'SUCCESS',
        description:
          'Your payout batch was processed and completed. Check the status of each item for any holds or unclaimed transactions.',
      },
      {
        value: 'CANCELED',
        description:
          'The payouts file that was uploaded through the PayPal portal was cancelled by the sender.',
      },
    ],
  })
  .openapi('BatchEnum')

const SenderBatchHeaderSchema = z
  .object({
    sender_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'A sender-specified ID number. Tracks the payout in an accounting system.<blockquote><strong>Note:</strong> <p>PayPal does not process duplicate payouts. If you specify a <code>sender_batch_id</code> that was used in the last 30 days, the API rejects the request with an error message that shows the duplicate <code>sender_batch_id</code> and includes a HATEOAS link to the original payout with the same <code>sender_batch_id</code>.</p><p>If you receive an HTTP <code>5<i>nn</i></code> status code, you can safely retry the request with the same <code>sender_batch_id</code>. The API completes a payment only once for a <code>sender_batch_id</code> that is used within 30 days.</p></blockquote>',
      }),
    recipient_type: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(13)
      .exactOptional()
      .openapi({
        description:
          'The ID type that identifies the recipient of the payment. For example, <code>EMAIL</code>.',
      }),
    email_subject: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The subject line for the email that PayPal sends when payment for a payout item completes. The subject line is the same for all recipients. Value is an alphanumeric string of up to 255 single-byte characters.',
      }),
    email_message: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'The email message that PayPal sends when the payout item completes. The message is the same for all recipients.',
      }),
    note: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'The payouts and item-level notes are concatenated in the email. The maximum combined length of the notes is 1000 characters.',
      }),
  })
  .openapi({
    title: 'Sender Batch Header',
    description: 'The sender-provided payout header for a payout request.',
    required: [],
  })
  .openapi('SenderBatchHeader')

const CurrencySchema = z
  .object({
    currency: z
      .string()
      .openapi({
        description:
          'The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/).',
      }),
    value: z
      .string()
      .openapi({
        description:
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency codes - ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).',
      }),
  })
  .openapi({
    title: 'Currency',
    description:
      'The currency and amount for a financial transaction, such as a balance or payment due.',
    required: ['currency', 'value'],
  })
  .openapi('Currency')

const LanguageSchema = z
  .string()
  .regex(/^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}))?$/)
  .min(2)
  .max(10)
  .openapi({
    description:
      'The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/docs/integration/direct/rest/country-codes/).',
  })
  .openapi('Language')

const PurposeEnumSchema = z
  .enum([
    'AWARDS',
    'PRIZES',
    'DONATIONS',
    'GOODS',
    'SERVICES',
    'REBATES',
    'CASHBACK',
    'DISCOUNTS',
    'NON_GOODS_OR_SERVICES',
  ])
  .openapi({
    title: 'Purpose',
    description: 'The purpose of the transaction.',
    'x-enumDescriptions': [
      { value: 'AWARDS', description: 'Awards payouts.' },
      { value: 'PRIZES', description: 'Prizes payouts.' },
      { value: 'DONATIONS', description: 'Donation payouts.' },
      { value: 'GOODS', description: 'Payouts for goods sold.' },
      { value: 'SERVICES', description: 'Payouts for services provided.' },
      { value: 'REBATES', description: 'Rebate payouts.' },
      { value: 'CASHBACK', description: 'Cashback payouts.' },
      { value: 'DISCOUNTS', description: 'Discount payouts.' },
      { value: 'NON_GOODS_OR_SERVICES', description: 'Payouts for any non-goods or services.' },
    ],
  })
  .openapi('PurposeEnum')

const PayoutItemRequestSchema = z
  .object({
    recipient_type: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(13)
      .exactOptional()
      .openapi({
        description:
          'The recipient type. Value is:<ul><li><p><code>EMAIL</code>. The unencrypted email. Value is a string of up to 127 single-byte characters.</p></li><li><p><code>PHONE</code>. The unencrypted phone number.</p><blockquote><strong>Note:</strong> The PayPal sandbox does not support the <code>PHONE</code> recipient type.</blockquote></li><li><p><code>PAYPAL_ID</code>. The encrypted PayPal account number.</p></li><li><p><code>USER_HANDLE</code>. User handle (or) Username associated with Venmo account.</p></li></ul><br/>If the <code>sender_batch_header</code> includes the <code>recipient_type</code> attribute, payout items use the <code>recipient_type</code> of the <code>sender_batch_header</code>, unless a payout item has its own <code>recipient_type</code> attribute. If the <code>sender_batch_header</code> omits the <code>recipient_type</code> attribute, each payout item must include its own <code>recipient_type</code> value.',
      }),
    amount: CurrencySchema.openapi({ description: 'The currency and amount to pay the receiver.' }),
    note: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The sender-specified note for notifications. Supports up to 4000 ASCII characters and 1000 non-ASCII characters.',
      }),
    receiver: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(127)
      .openapi({
        description:
          'The receiver of the payment. Corresponds to the `recipient_type` value in the request. Max value of up to 127 single-byte characters.',
      }),
    sender_item_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(63)
      .exactOptional()
      .openapi({
        description: 'The sender-specified ID number. Tracks the payout in an accounting system.',
      }),
    recipient_wallet: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(36)
      .default('PAYPAL')
      .exactOptional()
      .openapi({ description: 'The recipient wallet.' }),
    alternate_notification_method: AlternateNotificationMethodSchema.exactOptional().openapi({
      description:
        'Captures additional notification modes to reach out to the receiver regarding this payment.',
    }),
    notification_language: LanguageSchema.exactOptional().openapi({
      description:
        "The language in which to show the payout recipient's email message. Used only when the recipient does not have a PayPal account. If you omit the language or provide invalid language and the recipient does not have a PayPal account, the email message is sent in the language of the merchant's PayPal account.",
    }),
    application_context: ApplicationContextSchema.exactOptional().openapi({
      description: 'Metadata for accepting additional information from merchants to Venmo.',
    }),
    purpose: PurposeEnumSchema.exactOptional().openapi({
      description: 'The purpose of the transaction.',
    }),
  })
  .openapi({
    title: 'Payout Item',
    description: 'The sender-created payout to a recipient.',
    required: ['amount', 'receiver'],
  })
  .openapi('PayoutItemRequest')

const PayoutItemRequestListSchema = z
  .array(PayoutItemRequestSchema)
  .min(1)
  .max(15000)
  .openapi({ description: 'An array of individual payout items.' })
  .openapi('PayoutItemRequestList')

const CreatePayoutRequestSchema = z
  .object({
    sender_batch_header: SenderBatchHeaderSchema.openapi({
      description: 'The sender-provided payout header for a payout request.',
    }),
    items: PayoutItemRequestListSchema,
  })
  .openapi({
    title: 'Create Payout Request',
    description: 'The create payout request.',
    required: ['sender_batch_header', 'items'],
  })
  .openapi('CreatePayoutRequest')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const DefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(15000)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('DefinitionsLinkDescriptionList')

const ErrorDetails_2Schema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: z
      .string()
      .default('body')
      .exactOptional()
      .openapi({
        description:
          'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
      }),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails_2')

const ErrorDetailsListSchema = z
  .array(ErrorDetails_2Schema)
  .openapi({ description: 'An array of additional details about the error.' })
  .openapi('ErrorDetailsList')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const ErrorSchema = z
  .object({
    name: z.string().openapi({ description: 'The human-readable, unique name of the error.' }),
    message: z.string().openapi({ description: 'The message that describes the error.' }),
    debug_id: z
      .string()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    information_link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The information link, or URI, that shows detailed information about this error for the developer.',
        readOnly: true,
      }),
    details: ErrorDetailsListSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Error',
    description: 'The error details.',
    required: ['name', 'message', 'debug_id'],
  })
  .openapi('Error')

const ErrorLocationSchema = z
  .enum(['body', 'path', 'query'])
  .default('body')
  .openapi({
    description:
      'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
  })
  .openapi('ErrorLocation')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: ErrorLocationSchema.exactOptional(),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails')

const ErrorLinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(20000)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(100)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('ErrorLinkDescription')

const Error_400Schema = z
  .object({
    name: z.literal('INVALID_REQUEST').exactOptional(),
    message: z
      .literal('Request is not well-formed, syntactically incorrect, or violates schema.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Bad Request Error',
    description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
    required: [],
  })
  .openapi('Error_400')

const Error_401Schema = z
  .object({
    name: z.literal('AUTHENTICATION_FAILURE').exactOptional(),
    message: z
      .literal(
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unauthorized Error',
    description:
      'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
    required: [],
  })
  .openapi('Error_401')

const Error_403Schema = z
  .object({
    name: z.literal('NOT_AUTHORIZED').exactOptional(),
    message: z.literal('Authorization failed due to insufficient permissions.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not Authorized Error',
    description:
      'The client is not authorized to access this resource, although it may have valid credentials. ',
    required: [],
  })
  .openapi('Error_403')

const Error_404Schema = z
  .object({
    name: z.literal('RESOURCE_NOT_FOUND').exactOptional(),
    message: z.literal('The specified resource does not exist.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not found Error',
    description:
      'The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.',
    required: [],
  })
  .openapi('Error_404')

const Error_409Schema = z
  .object({
    name: z.literal('RESOURCE_CONFLICT').exactOptional(),
    message: z
      .literal('The server has detected a conflict while processing this request.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Resource Conflict Error',
    description: 'The server has detected a conflict while processing this request.',
    required: [],
  })
  .openapi('Error_409')

const Error_415Schema = z
  .object({
    name: z.literal('UNSUPPORTED_MEDIA_TYPE').exactOptional(),
    message: z
      .literal("The server does not support the request payload's media type.")
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unsupported Media Type Error',
    description: "The server does not support the request payload's media type.",
    required: [],
  })
  .openapi('Error_415')

const Error_422Schema = z
  .object({
    name: z.literal('UNPROCESSABLE_ENTITY').exactOptional(),
    message: z
      .literal(
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unprocessable Entity Error',
    description:
      'The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.',
    required: [],
  })
  .openapi('Error_422')

const Error_500Schema = z
  .object({
    name: z.literal('INTERNAL_SERVER_ERROR').exactOptional(),
    message: z.literal('An internal server error occurred.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Internal Server Error',
    description:
      'This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.',
    example: {
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An internal server error occurred.',
      debug_id: '90957fca61718',
      links: [
        {
          href: 'https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR',
          rel: 'information_link',
        },
      ],
    },
    required: [],
  })
  .openapi('Error_500')

const Error_503Schema = z
  .object({
    name: z.literal('SERVICE_UNAVAILABLE').exactOptional(),
    message: z.literal('Service Unavailable.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Service Unavailable Error',
    description:
      'The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.',
    example: {
      name: 'SERVICE_UNAVAILABLE',
      message: 'Service Unavailable.',
      debug_id: '90957fca61718',
      information_link:
        'https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE',
    },
    required: [],
  })
  .openapi('Error_503')

const ErrorDefaultSchema = z
  .xor([
    Error_400Schema,
    Error_401Schema,
    Error_403Schema,
    Error_404Schema,
    Error_409Schema,
    Error_415Schema,
    Error_422Schema,
    Error_500Schema,
    Error_503Schema,
  ])
  .openapi({ description: 'The default error response.' })
  .openapi('ErrorDefault')

const FundingSourceSchema = z
  .literal('BALANCE')
  .openapi({
    title: 'Funding source',
    description: 'Identifies a funding source type.',
    'x-enumDescriptions': [{ value: 'BALANCE', description: 'Funded by balance.' }],
  })
  .openapi('FundingSource')

const NameSchema = z
  .object({
    prefix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The prefix, or title, to the party's name." }),
    given_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's given, or first, name." }),
    surname: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
      }),
    middle_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.",
      }),
    suffix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The suffix for the party's name." }),
    alternate_full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          "DEPRECATED. The party's alternate name. Can be a business name, nickname, or any other name that cannot be split into first, last name. Required when the party is a business.",
      }),
    full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's full name." }),
  })
  .openapi({ title: 'Name', description: 'The name of the party.', required: [] })
  .openapi('Name')

const RecipientEnumSchema = z
  .enum(['EMAIL', 'PHONE', 'PAYPAL_ID'])
  .openapi({
    title: 'Recipient type',
    description: 'The ID type that identifies the payment receiver.',
    'x-enumDescriptions': [
      {
        value: 'EMAIL',
        description: 'An unencrypted email. Value is a string of up to 127 single-byte characters.',
      },
      { value: 'PHONE', description: 'An unencrypted phone number.' },
      { value: 'PAYPAL_ID', description: 'An encrypted PayPal account number.' },
    ],
  })
  .openapi('RecipientEnum')

const PayoutSenderBatchHeaderSchema = z
  .object({
    sender_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'The sender-specified ID number. Tracks the payout in an accounting system.<blockquote><strong>Note:</strong> <p>PayPal does not process duplicate payouts. If you specify a <code>sender_batch_id</code> that was used in the last 30 days, the API rejects the request with an error message that shows the duplicate <code>sender_batch_id</code> and includes a HATEOAS link to the original payout with the same <code>sender_batch_id</code>.</p><p>If you receive an HTTP <code>5<i>nn</i></code> status code, you can safely retry the request with the same <code>sender_batch_id</code>. The API completes a payment only once for a <code>sender_batch_id</code> that is used within 30 days.</p></blockquote>',
      }),
    recipient_type: RecipientEnumSchema.exactOptional(),
    email_subject: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The subject line for the email that PayPal sends when payment for a payout item completes. The subject line is the same for all recipients. Value is an alphanumeric string with a maximum length of 255 single-byte characters.',
      }),
    email_message: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'The email message that PayPal sends when the payout item completes. The message is the same for all recipients.',
      }),
  })
  .openapi({
    title: 'Payout Sender Batch Header',
    description: 'The sender-provided header for a payout request.',
    required: [],
  })
  .openapi('PayoutSenderBatchHeader')

const PayoutHeaderSchema = z
  .object({
    payout_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .openapi({ description: 'The PayPal-generated ID for a payout.' }),
    batch_status: BatchEnumSchema.openapi({
      description:
        'The PayPal-generated payout status. If the payout passes preliminary checks, the status is `PENDING`.',
    }),
    time_created: z.iso
      .datetime({ offset: true })
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The date and time when processing for the payout began, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
    sender_batch_header: PayoutSenderBatchHeaderSchema.openapi({
      description: 'The original payout header, as provided by the payment sender.',
    }),
  })
  .openapi({
    title: 'Payout Header',
    description:
      'The payout header that is returned in response to a payout header request. Shows details for an entire payout request.',
    required: ['batch_status', 'payout_batch_id', 'sender_batch_header'],
  })
  .openapi('PayoutHeader')

const PayoutSchema = z
  .object({
    batch_header: PayoutHeaderSchema.exactOptional().openapi({ description: 'The payout header.' }),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Create Payout Response',
    description: 'The create payout response.',
    required: [],
  })
  .openapi('Payout')

const PayoutBatchHeaderSchema = z
  .object({
    payout_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .openapi({ description: 'The PayPal-generated ID for a payout.' }),
    batch_status: BatchEnumSchema.openapi({
      description:
        'The PayPal-generated payout status. If the payout passes preliminary checks, the status is `PENDING`.',
    }),
    time_created: z.iso
      .datetime({ offset: true })
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The date and time when processing for the payout began, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
    time_completed: z.iso
      .datetime({ offset: true })
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The date and time when processing for the payout was completed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
    time_closed: z.iso
      .datetime({ offset: true })
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The date and time when the payout was closed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). A payout is considered closed when all items in a batch are processed and the available balance from the temporary hold is released.',
      }),
    sender_batch_header: PayoutSenderBatchHeaderSchema.openapi({
      description: 'The original payout header, as provided by the payment sender.',
    }),
    funding_source: FundingSourceSchema.exactOptional().openapi({
      description:
        'The ID to differentiate a PayPal balance-funded transaction from a PayPal treasury-funded transaction.',
    }),
    amount: CurrencySchema.exactOptional().openapi({
      description: 'The currency and total amount requested for the payouts.',
    }),
    fees: CurrencySchema.exactOptional().openapi({
      description:
        'The currency and amount of the total estimate for the applicable payouts fees. Initially, the fee is `0`. The fee is populated after the payout moves to the `PROCESSING` state.',
    }),
  })
  .openapi({
    title: 'Payout Batch Header',
    description:
      'The payout header that is returned in response to a payout header request. Shows details for an entire payout request.',
    required: ['payout_batch_id', 'batch_status', 'sender_batch_header'],
  })
  .openapi('PayoutBatchHeader')

const TransactionEnumSchema = z
  .enum([
    'SUCCESS',
    'FAILED',
    'PENDING',
    'UNCLAIMED',
    'RETURNED',
    'ONHOLD',
    'BLOCKED',
    'REFUNDED',
    'REVERSED',
  ])
  .openapi({
    title: 'Transaction status',
    description:
      'The item transaction status.<blockquote><strong>Note:</strong> For <code>POST/v1/payments/payouts-item/{payout_item_id}/cancel</code>, the only possible <code>transaction_status</code> value is <code>RETURNED</code>.</blockquote>',
    'x-enumDescriptions': [
      { value: 'SUCCESS', description: 'Funds have been credited to the recipient’s account.' },
      {
        value: 'FAILED',
        description:
          'This payout request has failed, so funds were not deducted from the sender’s account.',
      },
      {
        value: 'PENDING',
        description:
          'Payout request has been submitted and is being processed. Recipient will get the funds once the request is processed successfully, else the funds will be returned to you.',
      },
      {
        value: 'UNCLAIMED',
        description:
          'The recipient for this payout does not have a PayPal account. A link to sign up for a PayPal account was sent to the recipient. However, if the recipient does not claim this payout within 30 days, the funds are returned to your account.',
      },
      {
        value: 'RETURNED',
        description:
          'Funds have been returned to your account. This can be because the recipient has not claimed this payout, or you have cancelled the payout.',
      },
      { value: 'ONHOLD', description: 'This payout request is being reviewed and is on hold.' },
      { value: 'BLOCKED', description: 'This payout request has been blocked.' },
      {
        value: 'REFUNDED',
        description:
          'Funds have been refunded back to your account. This is  because the recipient(PayPal Business verified account) has issued a refund for the payout initiated by you.',
      },
      {
        value: 'REVERSED',
        description: 'This payout request was reversed. This status is specific to web uploads.',
      },
    ],
  })
  .openapi('TransactionEnum')

const RecipientWalletEnumSchema = z
  .enum(['PAYPAL', 'VENMO'])
  .default('PAYPAL')
  .openapi({
    title: 'Recipient wallet',
    description:
      "The wallet where the recipient receives the payout. Payouts to Venmo recipients require a 'note' string and a US mobile phone number.",
    'x-enumDescriptions': [
      { value: 'PAYPAL', description: 'PayPal Wallet.' },
      { value: 'VENMO', description: 'Venmo Wallet.' },
    ],
  })
  .openapi('RecipientWalletEnum')

const PayoutItemDetailSchema = z
  .object({
    recipient_type: RecipientEnumSchema.exactOptional(),
    amount: CurrencySchema.openapi({
      description:
        'The currency and amount of payout item. Might be an integer for currencies like `JPY` that are not typically fractional or a decimal fraction for currencies like `TND` that are subdivided into thousandths. For the required number of decimal places for a currency code, see [Currency codes - ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).',
    }),
    note: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The sender-specified note for notifications. Supports up to 4000 ASCII characters and 1000 non-ASCII characters.',
      }),
    receiver: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(127)
      .openapi({
        description:
          'The receiver of the payment. Corresponds to the `recipient_type` value in the request.',
      }),
    sender_item_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(63)
      .exactOptional()
      .openapi({
        description: 'A sender-specified ID number. Tracks the payout in an accounting system.',
      }),
    recipient_name: NameSchema.exactOptional().openapi({
      description:
        'The name of the recipient where money is credited. For `UNCLAIMED` payments, the recipient name is populated after the payment is claimed.',
    }),
    recipient_wallet: RecipientWalletEnumSchema.exactOptional().openapi({
      description: 'The recipient wallet.',
    }),
    purpose: PurposeEnumSchema.exactOptional().openapi({
      description: 'The purpose of the transaction.',
    }),
  })
  .openapi({
    title: 'Payout Item Detail',
    description: 'The details for a sender-created payout to a single recipient.',
    required: ['amount', 'receiver'],
  })
  .openapi('PayoutItemDetail')

const PayoutCurrencyConversionSchema = z
  .object({
    from_amount: CurrencySchema.exactOptional().openapi({
      description: 'The amount that is converted from.',
    }),
    to_amount: CurrencySchema.exactOptional().openapi({
      description: 'The amount that is converted to.',
    }),
    exchange_rate: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({ description: 'The exchange rate that is applied for this payout.' }),
  })
  .openapi({
    title: 'Currency conversion resource',
    description: 'The currency conversion resource.',
    required: [],
  })
  .openapi('PayoutCurrencyConversion')

const PayoutBatchItemsDefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(0)
  .max(15000)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('PayoutBatchItemsDefinitionsLinkDescriptionList')

const PayoutBatchItemsSchema = z
  .object({
    payout_item_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .openapi({
        description: 'The ID for the payout item. Viewable when you show details for a payout.',
      }),
    transaction_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({ description: 'The PayPal-generated ID for the transaction.' }),
    activity_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The unique PayPal-generated common ID created to link sender side and receiver side transaction. Used for tracking.',
      }),
    transaction_status: TransactionEnumSchema.exactOptional(),
    payout_item_fee: CurrencySchema.exactOptional().openapi({
      description: 'The fee, in U.S. dollars.',
    }),
    payout_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .openapi({ description: 'The PayPal-generated ID for the payout.' }),
    payout_item: PayoutItemDetailSchema.openapi({
      description: 'The sender-provided information for the payout item.',
    }),
    currency_conversion: PayoutCurrencyConversionSchema.exactOptional().openapi({
      description: 'The currency conversion applicable for this payout item.',
    }),
    time_processed: z.iso
      .datetime({ offset: true })
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The date and time when this item was last processed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
    errors: ErrorSchema.exactOptional(),
    links: PayoutBatchItemsDefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Payout Item',
    description: 'The payout item status and other details.',
    required: ['payout_item_id', 'payout_batch_id', 'payout_item'],
  })
  .openapi('PayoutBatchItems')

const PayoutBatchItemsListSchema = z
  .array(PayoutBatchItemsSchema)
  .min(0)
  .max(15000)
  .openapi({ description: 'An array of individual items.' })
  .openapi('PayoutBatchItemsList')

const PayoutBatchDefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(0)
  .max(15000)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('PayoutBatchDefinitionsLinkDescriptionList')

const PayoutBatchSchema = z
  .object({
    total_items: z
      .int()
      .min(0)
      .max(15000)
      .exactOptional()
      .openapi({ description: 'The total number of items in the full result list.' }),
    total_pages: z
      .int()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'The total number of pages.' }),
    batch_header: PayoutBatchHeaderSchema.exactOptional().openapi({
      description: 'A payout header. Includes the generated payout status.',
    }),
    items: PayoutBatchItemsListSchema.exactOptional(),
    links: PayoutBatchDefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Payout Batch',
    description: 'The PayPal-generated batch status.',
    required: [],
  })
  .openapi('PayoutBatch')

const PayoutItemDefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(0)
  .max(15000)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('PayoutItemDefinitionsLinkDescriptionList')

const PayoutItemSchema = z
  .object({
    payout_item_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .openapi({
        description: 'The ID for the payout item. Visible when you show details for a payout.',
      }),
    transaction_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({ description: 'The PayPal-generated ID for the transaction.' }),
    activity_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The unique PayPal-generated common ID that links the sender- and receiver-side transactions. Used for tracking.',
      }),
    transaction_status: TransactionEnumSchema.exactOptional(),
    payout_item_fee: CurrencySchema.exactOptional().openapi({
      description:
        'The estimate for the payout fee. Initially, the fee is `0`. The fee is populated after the item moves to the `PENDING` state',
    }),
    payout_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(30)
      .openapi({ description: 'The PayPal-generated ID for the payout batch.' }),
    sender_batch_id: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'A sender-specified ID. Tracks the payout in an accounting system. Should be unique within 30 days.',
      }),
    payout_item: PayoutItemDetailSchema.openapi({
      description: 'The sender-provided information for the payout item.',
    }),
    currency_conversion: PayoutCurrencyConversionSchema.exactOptional().openapi({
      description: 'The currency conversion applicable for this payout item.',
    }),
    time_processed: z.iso
      .datetime({ offset: true })
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The date and time when this item was last processed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
    errors: ErrorSchema.exactOptional().openapi({ description: 'The error details.' }),
    links: PayoutItemDefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Payout Item',
    description:
      'The payout item status and other details. A <code>payout_item_id</code> helps you identify denied payments. If a payment is denied, you can use the <code>payout_item_id</code> to identify the payment even if it lacks a <code>transaction_id</code>.',
    required: ['payout_item_id', 'payout_batch_id', 'payout_item'],
  })
  .openapi('PayoutItem')

const PaypalRequestIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(1000)
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Request-Id',
      in: 'header',
      description: 'The server stores keys for 30 days.',
      required: false,
      schema: { type: 'string', minLength: 1, maxLength: 1000, pattern: '^.*$' },
    },
  })

const IdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(1000)
  .openapi({
    param: {
      name: 'id',
      in: 'path',
      description: 'The ID of the payout for which to show details.',
      required: true,
      schema: { type: 'string', minLength: 1, maxLength: 1000, pattern: '^.*$' },
    },
  })

const FieldsParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(1000)
  .exactOptional()
  .openapi({
    param: {
      name: 'fields',
      in: 'query',
      description: 'Shows details for only the specified fields.',
      required: false,
      schema: { type: 'string', minLength: 1, maxLength: 1000, pattern: '^.*$' },
    },
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(1000),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description: 'A non-zero integer representing the page of the results.',
      required: false,
      schema: { type: 'integer', minimum: 0, maximum: 1000, default: 1 },
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(1000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description:
        'The maximum number of results to return at one time. Value is a non-negative, non-zero integer. If the user chooses pagination, the maximum page is `1000`.',
      required: false,
      schema: { type: 'integer', minimum: 0, maximum: 1000 },
    },
  })

const TotalRequiredParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      name: 'total_required',
      in: 'query',
      description:
        'Indicates whether to show the total items and total pages count in the response.',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const PayoutItemIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(32)
  .openapi({
    param: {
      name: 'payout_item_id',
      in: 'path',
      description: 'The ID of the payout item to cancel.',
      required: true,
      schema: { type: 'string', minLength: 1, maxLength: 32, pattern: '^.*$' },
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/payments/payouts': 'Payout to a list of recipients.',
        'https://uri.paypal.com/services/payments/payouts-item/reverse':
          'For reversing a completed payout item.',
        'https://uri.paypal.com/services/payments/payout-applications/status':
          'For retrieving payouts application status',
        'https://uri.paypal.com/services/payments/payout-applications/update-status':
          'For updating payouts application status',
      },
    },
  },
}

export const postV1PaymentsPayoutsRoute = createRoute({
  method: 'post',
  path: '/v1/payments/payouts',
  tags: ['payouts'],
  summary: 'Create batch payout',
  description:
    'Creates a batch payout. In the JSON request body, pass a `sender_batch_header` and an `items` array. The `sender_batch_header` defines how to handle the payout. The `items` array defines the payout items.<br/>You can make payouts to one or more recipients.<blockquote><strong>Notes:</strong> <ul><li><p>PayPal does not process duplicate payouts. If you specify a <code>sender_batch_id</code> that was used in the last 30 days, the API rejects the request with an error message that shows the duplicate <code>sender_batch_id</code> and includes a HATEOAS link to the original payout with the same <code>sender_batch_id</code>.</p><p>If you receive an HTTP <code>5<i>nn</i></code> status code, you can safely retry the request with the same <code>sender_batch_id</code>.</p></li><li><p>The Payouts API does not support build notation (BN) codes. In a future Payouts release, you can optionally provide BN codes in the <code>PayPal-Partner-Attribution-Id</code> request header.</p><p>For information about the <code>PayPal-Partner-Attribution-Id</code> header, see <a href="/api/rest/requests/#http-request-headers">HTTP request headers</a>. To learn about or request a BN code, contact your partner manager or see <a href="https://www.paypal.com/us/webapps/mpp/partner-program">PayPal Partner Program</a>.</p></li></ul></blockquote>',
  operationId: 'payouts.post',
  request: {
    headers: z.object({ 'PayPal-Request-Id': PaypalRequestIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CreatePayoutRequestSchema,
          examples: {
            create_payout_request: {
              value: {
                sender_batch_header: {
                  sender_batch_id: 'Payouts_2018_100007',
                  email_subject: 'You have a payout!',
                  email_message: 'You have received a payout! Thanks for using our service!',
                },
                items: [
                  {
                    recipient_type: 'EMAIL',
                    amount: { value: '9.87', currency: 'USD' },
                    note: 'Thanks for your patronage!',
                    sender_item_id: '201403140001',
                    receiver: 'receiver@example.com',
                    alternate_notification_method: {
                      phone: { country_code: '91', national_number: '9999988888' },
                    },
                    notification_language: 'fr-FR',
                  },
                  {
                    recipient_type: 'PHONE',
                    amount: { value: '112.34', currency: 'USD' },
                    note: 'Thanks for your support!',
                    sender_item_id: '201403140002',
                    receiver: '91-734-234-1234',
                  },
                  {
                    recipient_type: 'PAYPAL_ID',
                    amount: { value: '5.32', currency: 'USD' },
                    note: 'Thanks for your patronage!',
                    sender_item_id: '201403140003',
                    receiver: 'G83JXTJ5EHCQ2',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description:
        'A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the ID for the payout and payout details. To show payout status, use the <code>payout_batch_id</code> value that appears in the response. If the initial scan that checks for syntax errors, missing or duplicated keywords, and more succeeds, the <code>batch_status</code> is <code>PENDING</code>. The initial scan checks for syntax errors and missing or duplicated keywords. The API does not immediately validate some payout item values, such as the receiver phone numbers.',
      content: { 'application/json': { schema: PayoutSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/payments/payouts'] }],
})

export const getV1PaymentsPayoutsIdRoute = createRoute({
  method: 'get',
  path: '/v1/payments/payouts/{id}',
  tags: ['payouts'],
  summary: 'Show payout batch details',
  description:
    'Shows the latest status of a batch payout. Includes the transaction status and other data for individual payout items.',
  operationId: 'payouts.get',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({
      fields: FieldsParamsSchema,
      page: PageParamsSchema,
      page_size: PageSizeParamsSchema,
      total_required: TotalRequiredParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows batch payout details.',
      content: { 'application/json': { schema: PayoutBatchSchema } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/payments/payouts'] }],
})

export const getV1PaymentsPayoutsItemPayoutItemIdRoute = createRoute({
  method: 'get',
  path: '/v1/payments/payouts-item/{payout_item_id}',
  tags: ['payouts-item'],
  summary: 'Show payout item details',
  description:
    'Shows details for a payout item, by ID. A <code>payout_item_id</code> helps you identify denied payments. If a payment is denied, you can use the <code>payout_item_id</code> to identify the payment even if it lacks a <code>transaction_id</code>.',
  operationId: 'payouts-item.get',
  request: { params: z.object({ payout_item_id: PayoutItemIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body with a <code>payout_item_details</code> object, which contains data about a payout item including the transaction status.',
      content: { 'application/json': { schema: PayoutItemSchema } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/payments/payouts'] }],
})

export const postV1PaymentsPayoutsItemPayoutItemIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/payments/payouts-item/{payout_item_id}/cancel',
  tags: ['payouts-item'],
  summary: 'Cancel unclaimed payout item',
  description:
    'Cancels an unclaimed payout item, by ID. If no one claims the unclaimed item within 30 days, the API automatically returns the funds to the sender. Use this call to cancel the unclaimed item before the automatic 30-day refund. You can cancel payout items with a <code>transaction_status</code> of <code>UNCLAIMED</code>.',
  operationId: 'payouts-item.cancel',
  request: { params: z.object({ payout_item_id: PayoutItemIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code with a JSON response body that shows payout item details.',
      content: { 'application/json': { schema: PayoutItemSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/payments/payouts'] }],
})
