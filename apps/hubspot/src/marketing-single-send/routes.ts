import { createRoute, z } from '@hono/zod-openapi'

const EventIdViewSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time of event creation.', example: null }),
    id: z.uuid().openapi({ description: 'Identifier of event.', example: null }),
  })
  .openapi({ required: ['created', 'id'], example: null })
  .openapi('EventIdView')

const EmailSendStatusViewSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time when the send was completed.', example: null }),
    eventId: EventIdViewSchema.exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time when the send was requested.', example: null }),
    sendResult: z
      .enum([
        'ADDRESS_LIST_BOMBED',
        'ADDRESS_ONLY_ACCEPTED_ON_PROD',
        'ADDRESS_OPTED_OUT',
        'ATTACHMENT_DOWNLOAD_QUEUE_FULL',
        'BLOCKED_ADDRESS',
        'BLOCKED_DOMAIN',
        'BRAND_RECIPIENT_FATIGUE_SUPPRESSED',
        'CAMPAIGN_CANCELLED',
        'CANCELLED_ABUSE',
        'CONTACT_VIEW_PERMISSION',
        'CORRUPT_INPUT',
        'EMAIL_DISABLED',
        'EMAIL_UNCONFIRMED',
        'GDPR_DOI_ENABLED',
        'GRAYMAIL_SUPPRESSED',
        'HUBL_LIMIT_EXCEEDED',
        'IDEMPOTENT_FAIL',
        'IDEMPOTENT_IGNORE',
        'INVALID_APP_ID_ATTRIBUTION',
        'INVALID_FROM_ADDRESS',
        'INVALID_TO_ADDRESS',
        'LOW_CONTACT_QUALITY_SCORE',
        'MARKETING_ACTIVATION_DISALLOWED',
        'MISSING_CONTENT',
        'MISSING_REQUIRED_PARAMETER',
        'MISSING_TEMPLATE_PROPERTIES',
        'MTA_IGNORE',
        'NON_MARKETABLE_CONTACT',
        'PORTAL_AUTHENTICATION_FAILURE',
        'PORTAL_EXPIRED',
        'PORTAL_MISSING_MARKETING_SCOPE',
        'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION',
        'PORTAL_OVER_LIMIT',
        'PORTAL_SUSPENDED',
        'PREVIOUS_SPAM',
        'PREVIOUSLY_BOUNCED',
        'PREVIOUSLY_UNSUBSCRIBED_BRAND',
        'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT',
        'PREVIOUSLY_UNSUBSCRIBED_MESSAGE',
        'PREVIOUSLY_UNSUBSCRIBED_PORTAL',
        'QUARANTINED_ADDRESS',
        'QUEUED',
        'RECIPIENT_FATIGUE_SUPPRESSED',
        'SENT',
        'TEMPLATE_RENDER_EXCEPTION',
        'THROTTLED',
        'TOO_MANY_RECIPIENTS',
        'UBB_GOVERNANCE_MISSING',
        'UNCONFIGURED_SENDING_DOMAIN',
        'UNDELIVERABLE',
        'VALIDATION_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'Result of the send.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time when the send began processing.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({ description: 'Status of the send request.', example: null }),
    statusId: z
      .string()
      .openapi({ description: 'Identifier used to query the status of the send.', example: null }),
  })
  .openapi({ required: ['status', 'statusId'], example: null })
  .openapi('EmailSendStatusView')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PublicSingleSendEmailSchema = z
  .object({
    bcc: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'List of email addresses to send as Bcc.', example: null }),
    cc: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'List of email addresses to send as Cc.', example: null }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The From header for the email.', example: null }),
    replyTo: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'List of Reply-To header values for the email.', example: null }),
    sendId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID for a particular send. No more than one email will be sent per sendId.',
        example: null,
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({ description: 'The recipient of the email.', example: null }),
  })
  .openapi({ required: ['bcc', 'cc', 'replyTo'], example: null })
  .openapi('PublicSingleSendEmail')

const PublicSingleSendRequestEggSchema = z
  .object({
    contactProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'The contactProperties field is a map of contact property values. Each contact property value contains a name and value property. Each property will get set on the contact record and will be visible in the template under {{ contact.NAME }}. Use these properties when you want to set a contact property while you’re sending the email. For example, when sending a receipt you may want to set a last_paid_date property, as the sending of the receipt will have information about the last payment.',
        example: null,
      }),
    customProperties: z
      .record(z.string(), z.object({}).openapi({ example: null }))
      .openapi({
        description:
          'The customProperties field is a map of property values. Each property value contains a name and value property. Each property will be visible in the template under {{ custom.NAME }}.\nNote: Custom properties do not currently support arrays. To provide a listing in an email, one workaround is to build an HTML list (either with tables or ul) and specify it as a custom property.',
        example: null,
      }),
    emailId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The content ID for the email, which can be found in email tool UI.',
        example: null,
      }),
    message: PublicSingleSendEmailSchema,
  })
  .openapi({
    required: ['contactProperties', 'customProperties', 'emailId', 'message'],
    example: null,
  })
  .openapi('PublicSingleSendRequestEgg')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { 'marketing-email': '', 'transactional-email': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postMarketingEmailCampaigns202609SingleSendRoute = createRoute({
  method: 'post',
  path: '/marketing/email-campaigns/2026-09/single-send',
  tags: ['Advanced'],
  summary: 'Send an email',
  description: 'Send a template email to a specific recipient.',
  operationId:
    'post-/marketing/email-campaigns/2026-09/single-send_/marketing/v4/email/single-send',
  request: {
    body: {
      content: { 'application/json': { schema: PublicSingleSendRequestEggSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: EmailSendStatusViewSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['transactional-email'] }, { oauth2: ['marketing-email'] }],
})
