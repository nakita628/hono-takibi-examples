import { createRoute, z } from '@hono/zod-openapi'

const EventVersionSchema = z
  .string()
  .regex(/^([0-9]+.[0-9]+)$/)
  .openapi({
    title: 'Event Version',
    description: 'The event version in the webhook notification.',
    deprecated: true,
  })
  .openapi('EventVersion')

const ResourceVersionSchema = z
  .string()
  .regex(/^([0-9]+.[0-9]+)$/)
  .openapi({
    title: 'Resource Version',
    description: 'The resource version in the webhook notification.',
  })
  .openapi('ResourceVersion')

const ResourceSchema = z
  .looseObject({})
  .openapi({
    title: 'Resource',
    description: 'The resource that triggered the webhook event notification.',
    readOnly: true,
  })
  .openapi('Resource')

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

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const EventSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the webhook event notification.', readOnly: true }),
    create_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the webhook event notification was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        readOnly: true,
      }),
    resource_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the resource related to the webhook notification event.',
        readOnly: true,
      }),
    event_version: EventVersionSchema.exactOptional(),
    event_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The event that triggered the webhook event notification.',
        readOnly: true,
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A summary description for the event notification.',
        readOnly: true,
      }),
    resource_version: ResourceVersionSchema.exactOptional(),
    resource: ResourceSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Event', description: 'A webhook event notification.', required: [] })
  .openapi('Event')

const EventList2Schema = z
  .array(EventSchema)
  .openapi({ description: 'An array of webhooks events.' })
  .openapi('EventList2')

const EventListSchema = z
  .object({
    events: EventList2Schema.exactOptional(),
    count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of items in each range of results. Note that the response might have fewer items than the requested `page_size` value.',
      }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Event List', description: 'A list of webhooks events.', required: [] })
  .openapi('EventList')

const ResourceVersionsSchema = z
  .string()
  .openapi({ description: 'The ID for an event type. For example, `1.0` or `2.0`.' })
  .openapi('ResourceVersions')

const ResourceVersionsListSchema = z
  .array(ResourceVersionsSchema)
  .openapi({ description: 'Identifier for the event type example: 1.0/2.0 etc.', readOnly: true })
  .openapi('ResourceVersionsList')

const EventTypeSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The unique event name.<blockquote><strong>Note:</strong> To subscribe to all events, including events as they are added, specify an `*` as the value to represent a wildcard.</blockquote>',
        readOnly: false,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the event.', readOnly: true }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of a webhook event.', readOnly: true }),
    resource_versions: ResourceVersionsListSchema.exactOptional(),
  })
  .openapi({ title: 'Event Type', description: 'An event type.', required: ['name'] })
  .openapi('EventType')

const EventTypeList2Schema = z
  .array(EventTypeSchema)
  .openapi({ description: 'An array of webhook events.' })
  .openapi('EventTypeList2')

const EventTypeListSchema = z
  .object({ event_types: EventTypeList2Schema.exactOptional() })
  .openapi({ title: 'Event Type List', description: 'A list of webhook events.', required: [] })
  .openapi('EventTypeList')

const DefinitionsEventTypeListSchema = z
  .array(EventTypeSchema)
  .max(500)
  .openapi({
    description:
      'An array of events to which to subscribe your webhook. To subscribe to all events, including events as they are added, specify the asterisk wild card. To replace the `event_types` array, specify the asterisk wild card. To list all supported events, <a href="#event-type_list">list available events</a>.',
    readOnly: false,
  })
  .openapi('DefinitionsEventTypeList')

const DefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).',
    readOnly: true,
  })
  .openapi('DefinitionsLinkDescriptionList')

const WebhookSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the webhook.', readOnly: true }),
    url: z
      .url()
      .max(2048)
      .openapi({
        description:
          'The URL that is configured to listen on `localhost` for incoming `POST` notification messages that contain event information.',
        readOnly: false,
      }),
    event_types: DefinitionsEventTypeListSchema,
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Webhook',
    description: 'One or more webhook objects.',
    required: ['url', 'event_types'],
  })
  .openapi('Webhook')

const WebhookList2Schema = z
  .array(WebhookSchema)
  .openapi({ description: 'An array of webhooks.' })
  .openapi('WebhookList2')

const WebhookListSchema = z
  .object({ webhooks: WebhookList2Schema.exactOptional() })
  .openapi({ title: 'Webhook List', description: 'A list of webhooks.', required: [] })
  .openapi('WebhookList')

const WebhooksLookupSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the webhook lookup.', readOnly: true }),
    client_id: z
      .string()
      .regex(/^(?!\d+$)\w+\S+/)
      .max(128)
      .exactOptional()
      .openapi({ description: 'The application client ID.', readOnly: true }),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Webhook Lookup', description: 'The webhook lookup details.', required: [] })
  .openapi('WebhooksLookup')

const WebhooksLookupListSchema = z
  .array(WebhooksLookupSchema)
  .openapi({ description: 'An array of webhook lookups.' })
  .openapi('WebhooksLookupList')

const WebhookLookupListSchema = z
  .object({ webhooks_lookups: WebhooksLookupListSchema.exactOptional() })
  .openapi({
    title: 'Webhook Lookup List',
    description: 'A list of webhook lookups.',
    required: [],
  })
  .openapi('WebhookLookupList')

const ErrorSchema = z.any().openapi('Error')

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

const Error_2Schema = z
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
  .openapi('Error_2')

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

const ErrorTypeSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID for the webhook error type.', readOnly: true }),
    name: z.string().openapi({ description: 'The unique error type name.', readOnly: false }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the error type.', readOnly: true }),
  })
  .openapi({
    title: 'Error Type',
    description: 'The type of webhook error that occurred.',
    required: ['name'],
  })
  .openapi('ErrorType')

const WebhookIdsSchema = z
  .string()
  .openapi({ description: 'The ID of the webhook event notification to resend.' })
  .openapi('WebhookIds')

const WebhookIdsListSchema = z
  .array(WebhookIdsSchema)
  .max(500)
  .openapi({ description: 'An array of webhook account IDs.' })
  .openapi('WebhookIdsList')

const EventResendSchema = z
  .object({ webhook_ids: WebhookIdsListSchema.exactOptional() })
  .openapi({
    title: 'Event Resend',
    description: 'Resends a webhook event notification, by ID.',
    required: [],
  })
  .openapi('EventResend')

const PatchSchema = z
  .object({
    op: z.enum(['add', 'remove', 'replace', 'move', 'copy', 'test']).openapi({
      description: 'The operation.',
      'x-enumDescriptions': [
        {
          value: 'add',
          description:
            'Depending on the target location reference, completes one of these functions:<ul><li><strong>The target location is an array index</strong>. Inserts a new value into the array at the specified index.</li><li><strong>The target location is an object parameter that does not already exist</strong>. Adds a new parameter to the object.</li><li><strong>The target location is an object parameter that does exist</strong>. Replaces that parameter\'s value.</li></ul>The <code>value</code> parameter defines the value to add. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.1">4.1. add</a>.',
        },
        {
          value: 'remove',
          description:
            'Removes the value at the target location. For the operation to succeed, the target location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.2">4.2. remove</a>.',
        },
        {
          value: 'replace',
          description:
            'Replaces the value at the target location with a new value. The operation object must contain a <code>value</code> parameter that defines the replacement value. For the operation to succeed, the target location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.3">4.3. replace</a>.',
        },
        {
          value: 'move',
          description:
            'Removes the value at a specified location and adds it to the target location. The operation object must contain a <code>from</code> parameter, which is a string that contains a JSON pointer value that references the location in the target document from which to move the value. For the operation to succeed, the <code>from</code> location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.4">4.4. move</a>.',
        },
        {
          value: 'copy',
          description:
            'Copies the value at a specified location to the target location. The operation object must contain a <code>from</code> parameter, which is a string that contains a JSON pointer value that references the location in the target document from which to copy the value. For the operation to succeed, the <code>from</code> location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.5">4.5. copy</a>.',
        },
        {
          value: 'test',
          description:
            'Tests that a value at the target location is equal to a specified value. The operation object must contain a <code>value</code> parameter that defines the value to compare to the target location\'s value. For the operation to succeed, the target location must be equal to the <code>value</code> value. For test, <code>equal</code> indicates that the value at the target location and the value that <code>value</code> defines are of the same JSON type. The data type of the value determines how equality is defined:<table><thead align="left"><tr><th>Type</th><th>Considered equal if both values</th></tr></thead><tbody align="left"><tr><td><strong>strings</strong></td><td>Contain the same number of Unicode characters and their code points are byte-by-byte equal.</td></tr><tr><td><strong>numbers</strong></td><td>Are numerically equal.</td></tr><tr><td><strong>arrays</strong></td><td>Contain the same number of values, and each value is equal to the value at the corresponding position in the other array, by using these type-specific rules.</td></tr><tr><td><strong>objects</strong></td><td>Contain the same number of parameters, and each parameter is equal to a parameter in the other object, by comparing their keys (as strings) and their values (by using these type-specific rules).</td></tr><tr><td><strong>literals (<code>false</code>, <code>true</code>, and <code>null</code>)</strong></td><td>Are the same. The comparison is a logical comparison. For example, whitespace between the parameter values of an array is not significant. Also, ordering of the serialization of object parameters is not significant.</td></tr></tbody></table>For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.6">4.6. test</a>.',
        },
      ],
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.',
      }),
    value: z
      .union([z.number(), z.int(), z.string(), z.boolean(), z.array(z.any()), z.object({})])
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Patch Value',
        description:
          'The value to apply. The <code>remove</code> operation does not require a value.',
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.',
      }),
  })
  .openapi({
    title: 'Patch',
    description: 'The JSON patch object to apply partial updates to resources.',
    required: ['op'],
  })
  .openapi('Patch')

const PatchRequestSchema = z
  .array(PatchSchema)
  .openapi({
    title: 'Patch Request',
    description: 'An array of JSON patch objects to apply partial updates to resources.',
  })
  .openapi('PatchRequest')

const SimulateEventSchema = z
  .object({
    webhook_id: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The ID of the webhook. If omitted, the URL is required.',
        readOnly: false,
      }),
    url: z
      .url()
      .max(2048)
      .exactOptional()
      .openapi({
        description: 'The URL for the webhook endpoint. If omitted, the webhook ID is required.',
        readOnly: false,
      }),
    event_type: z
      .string()
      .regex(/^[a-zA-Z0-9.]+$/)
      .max(50)
      .openapi({
        description:
          'The event name. Specify one of the subscribed events. For each request, provide only one event.',
        readOnly: false,
      }),
    resource_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier for event type ex: 1.0/2.0 etc.', readOnly: false }),
  })
  .openapi({
    title: 'Simulate Event',
    description: 'Simulates a mock webhook event.',
    required: ['event_type'],
  })
  .openapi('SimulateEvent')

const SwaggerLinkDescriptionSchema = LinkDescriptionSchema.openapi('SwaggerLinkDescription')

const VerifyWebhookSignatureSchema = z
  .object({
    auth_algo: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .max(100)
      .openapi({
        description:
          'The algorithm that PayPal uses to generate the signature and that you can use to verify the signature. Extract this value from the `PAYPAL-AUTH-ALGO` response header, which is received with the webhook notification.',
      }),
    cert_url: z
      .url()
      .max(500)
      .openapi({
        description:
          'The X.509 public key certificate. Download the certificate from this URL and use it to verify the signature. Extract this value from the `PAYPAL-CERT-URL` response header, which is received with the webhook notification.',
      }),
    transmission_id: z
      .string()
      .regex(/^(?!\d+$)\w+\S+/)
      .max(50)
      .openapi({
        description:
          'The ID of the HTTP transmission. Contained in the `PAYPAL-TRANSMISSION-ID` header of the notification message.',
      }),
    transmission_sig: z
      .string()
      .regex(/^(?!\d+$)\w+\S+/)
      .max(500)
      .openapi({
        description:
          'The PayPal-generated asymmetric signature. Appears in the `PAYPAL-TRANSMISSION-SIG` header of the notification message.',
      }),
    transmission_time: z.iso
      .datetime({ offset: true })
      .max(100)
      .openapi({
        description:
          'The date and time of the HTTP transmission, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Appears in the `PAYPAL-TRANSMISSION-TIME` header of the notification message.',
      }),
    webhook_id: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .max(50)
      .openapi({
        description: 'The ID of the webhook as configured in your Developer Portal account.',
      }),
    webhook_event: EventSchema,
  })
  .openapi({
    title: 'Verify Webhook Signature',
    description: 'A verify webhook signature request.',
    required: [
      'auth_algo',
      'cert_url',
      'transmission_id',
      'transmission_sig',
      'transmission_time',
      'webhook_id',
      'webhook_event',
    ],
  })
  .openapi('VerifyWebhookSignature')

const VerifyWebhookSignatureResponseSchema = z
  .object({
    verification_status: z
      .enum(['SUCCESS', 'FAILURE'])
      .openapi({ description: 'The status of the signature verification.' }),
  })
  .openapi({
    title: 'Verify Webhook Signature Response',
    description: 'The verify webhook signature response.',
    required: ['verification_status'],
  })
  .openapi('VerifyWebhookSignatureResponse')

const AnchorTypeParamsSchema = z
  .enum(['APPLICATION', 'ACCOUNT'])
  .default('APPLICATION')
  .exactOptional()
  .openapi({
    param: {
      name: 'anchor_type',
      in: 'query',
      description: 'Filters the webhooks in the response by an `anchor_id` entity type.',
      schema: { type: 'string', enum: ['APPLICATION', 'ACCOUNT'], default: 'APPLICATION' },
      required: false,
    },
  })

const WebhookIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'webhook_id',
      in: 'path',
      description: 'The ID of the webhook for which to list subscriptions.',
      required: true,
      schema: { type: 'string' },
    },
  })

const WebhookLookupIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'webhook_lookup_id',
      in: 'path',
      description: 'The ID of the webhook lookup to delete.',
      required: true,
      schema: { type: 'string' },
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
    z.int(),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description: 'The number of webhook event notifications to return in the response.',
      schema: { type: 'integer', default: 10 },
      required: false,
    },
  })

const StartTimeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_time',
      in: 'query',
      description:
        'Filters the webhook event notifications in the response to those created on or after this date and time and on or before the `end_time` value. Both values are in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6) format. Example: `start_time=2013-03-06T11:00:00Z`.',
      schema: { type: 'string' },
      required: false,
    },
  })

const EndTimeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_time',
      in: 'query',
      description:
        'Filters the webhook event notifications in the response to those created on or after the `start_time` and on or before this date and time. Both values are in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6) format. Example: `end_time=2013-03-06T11:00:00Z`.',
      schema: { type: 'string' },
      required: false,
    },
  })

const TransactionIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'transaction_id',
      in: 'query',
      description: 'Filters the response to a single transaction, by ID.',
      schema: { type: 'string' },
      required: false,
    },
  })

const EventTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'event_type',
      in: 'query',
      description: 'Filters the response to a single event.',
      schema: { type: 'string' },
      required: false,
    },
  })

const EventIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/)
  .max(50)
  .openapi({
    param: {
      name: 'event_id',
      in: 'path',
      description: 'The ID of the webhook event notification to resend.',
      required: true,
      schema: { type: 'string', maxLength: 50, pattern: '^[a-zA-Z0-9]+$' },
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/applications/webhooks': 'Access/update Webhooks.',
        'https://uri.paypal.com/services/applications/verify-webhook-signature':
          'Verify Webhook Signature',
      },
    },
  },
}

export const getV1NotificationsWebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks',
  tags: ['webhooks'],
  summary: 'List webhooks',
  description: 'Lists webhooks for an app.',
  operationId: 'webhooks.list',
  request: { query: z.object({ anchor_type: AnchorTypeParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists webhooks with webhook details.',
      content: { 'application/json': { schema: WebhookListSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const postV1NotificationsWebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/webhooks',
  tags: ['webhooks'],
  summary: 'Create webhook',
  description: 'Subscribes your webhook listener to events.',
  operationId: 'webhooks.post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: WebhookSchema,
          examples: {
            webhook: {
              value: {
                url: 'https://example.com/example_webhook',
                event_types: [
                  { name: 'PAYMENT.AUTHORIZATION.CREATED' },
                  { name: 'PAYMENT.AUTHORIZATION.VOIDED' },
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
        'A successful request returns the HTTP `201 Created` status code and a JSON response body with a [`webhook`](/docs/api/webhooks/v1/#definition-webhook) object that includes the webhook ID for later use.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const getV1NotificationsWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks/{webhook_id}',
  tags: ['webhooks'],
  summary: 'Show webhook details',
  description: 'Shows details for a webhook, by ID.',
  operationId: 'webhooks.get',
  request: { params: z.object({ webhook_id: WebhookIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhook details.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const deleteV1NotificationsWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v1/notifications/webhooks/{webhook_id}',
  tags: ['webhooks'],
  summary: 'Delete webhook',
  description: 'Deletes a webhook, by ID.',
  operationId: 'webhooks.delete',
  request: { params: z.object({ webhook_id: WebhookIdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const patchV1NotificationsWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/v1/notifications/webhooks/{webhook_id}',
  tags: ['webhooks'],
  summary: 'Update webhook',
  description:
    'Updates a webhook to replace webhook fields with new values. Supports only the `replace` operation. Pass a `json_patch` object with `replace` operation and `path`, which is `/url` for a URL or `/event_types` for events. The `value` is either the URL or a list of events.',
  operationId: 'webhooks.update',
  request: {
    params: z.object({ webhook_id: WebhookIdParamsSchema }),
    body: { content: { 'application/json': { schema: PatchRequestSchema } } },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhook details.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const getV1NotificationsWebhooksWebhookIdEventTypesRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks/{webhook_id}/event-types',
  tags: ['webhooks'],
  summary: 'List event subscriptions for webhook',
  description: 'Lists event subscriptions for a webhook, by ID.',
  operationId: 'event-types.list',
  request: { params: z.object({ webhook_id: WebhookIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists event subscriptions for a webhook.',
      content: { 'application/json': { schema: EventTypeListSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const getV1NotificationsWebhooksLookupRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks-lookup',
  tags: ['webhooks-lookup'],
  summary: 'List webhook lookups',
  description: 'Lists webhook lookups.',
  operationId: 'webhooks-lookup.list',
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists webhook lookups with webhook lookup details.',
      content: { 'application/json': { schema: WebhookLookupListSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const postV1NotificationsWebhooksLookupRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/webhooks-lookup',
  tags: ['webhooks-lookup'],
  summary: 'Create webhook lookup',
  description:
    "Creates a webhook lookup. A webhook lookup ties the API caller's REST API app to the subject account (or, if no subject is specified, to the API caller's account). If a webhook event is generated for an event that is tied to the account but not to a particular REST API app (for example, payments initiated with the NVP/SOAP APIs or through the user interface on PayPal.com), those webhook events will treated as if they were intended for the REST API app registered in the webhook lookup instead. Webhook events will then be delivered to any webhooks registered to that REST API app.",
  operationId: 'webhooks-lookup.post',
  responses: {
    201: {
      description:
        'A successful request returns the HTTP `201 Created` status code and a JSON response body that shows webhook lookup details.',
      content: { 'application/json': { schema: WebhooksLookupSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const getV1NotificationsWebhooksLookupWebhookLookupIdRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks-lookup/{webhook_lookup_id}',
  tags: ['webhooks-lookup'],
  summary: 'Show webhook lookup details',
  description: 'Shows details for a webhook lookup, by ID.',
  operationId: 'webhooks-lookup.get',
  request: { params: z.object({ webhook_lookup_id: WebhookLookupIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhook lookup details.',
      content: { 'application/json': { schema: WebhooksLookupSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const deleteV1NotificationsWebhooksLookupWebhookLookupIdRoute = createRoute({
  method: 'delete',
  path: '/v1/notifications/webhooks-lookup/{webhook_lookup_id}',
  tags: ['webhooks-lookup'],
  summary: 'Delete webhook lookup',
  description: 'Deletes a webhook lookup, by ID.',
  operationId: 'webhooks-lookup.delete',
  request: { params: z.object({ webhook_lookup_id: WebhookLookupIdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const postV1NotificationsVerifyWebhookSignatureRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/verify-webhook-signature',
  tags: ['verify-webhook-signature'],
  summary: 'Verify webhook signature',
  description: 'Verifies a webhook signature.',
  operationId: 'verify-webhook-signature.post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: VerifyWebhookSignatureSchema,
          examples: {
            verify_webhook_signature: {
              value: {
                transmission_id: '69cd13f0-d67a-11e5-baa3-778b53f4ae55',
                transmission_time: '2016-02-18T20:01:35Z',
                cert_url: 'cert_url',
                auth_algo: 'SHA256withRSA',
                transmission_sig:
                  'lmI95Jx3Y9nhR5SJWlHVIWpg4AgFk7n9bCHSRxbrd8A9zrhdu2rMyFrmz+Zjh3s3boXB07VXCXUZy/UFzUlnGJn0wDugt7FlSvdKeIJenLRemUxYCPVoEZzg9VFNqOa48gMkvF+XTpxBeUx/kWy6B5cp7GkT2+pOowfRK7OaynuxUoKW3JcMWw272VKjLTtTAShncla7tGF+55rxyt2KNZIIqxNMJ48RDZheGU5w1npu9dZHnPgTXB9iomeVRoD8O/jhRpnKsGrDschyNdkeh81BJJMH4Ctc6lnCCquoP/GzCzz33MMsNdid7vL/NIWaCsekQpW26FpWPi/tfj8nLA==',
                webhook_id: '1JE4291016473214C',
                webhook_event: {
                  id: '8PT597110X687430LKGECATA',
                  create_time: '2013-06-25T21:41:28Z',
                  resource_type: 'authorization',
                  event_type: 'PAYMENT.AUTHORIZATION.CREATED',
                  summary: 'A payment authorization was created',
                  resource: {
                    id: '2DC87612EK520411B',
                    create_time: '2013-06-25T21:39:15Z',
                    update_time: '2013-06-25T21:39:17Z',
                    state: 'authorized',
                    amount: { total: '7.47', currency: 'USD', details: { subtotal: '7.47' } },
                    parent_payment: 'PAY-36246664YD343335CKHFA4AY',
                    valid_until: '2013-07-24T21:39:15Z',
                    links: [
                      {
                        href: 'https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B',
                        rel: 'self',
                        method: 'GET',
                      },
                      {
                        href: 'https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B/capture',
                        rel: 'capture',
                        method: 'POST',
                      },
                      {
                        href: 'https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B/void',
                        rel: 'void',
                        method: 'POST',
                      },
                      {
                        href: 'https://api-m.paypal.com/v1/payments/payment/PAY-36246664YD343335CKHFA4AY',
                        rel: 'parent_payment',
                        method: 'GET',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the verification status.',
      content: { 'application/json': { schema: VerifyWebhookSignatureResponseSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/applications/webhooks',
        'https://uri.paypal.com/services/applications/verify-webhook-signature',
      ],
    },
  ],
})

export const getV1NotificationsWebhooksEventTypesRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks-event-types',
  tags: ['webhooks-event-types'],
  summary: 'List available events',
  description:
    'Lists available events to which any webhook can subscribe. For a list of supported events, see [Webhook event names](/docs/api/notifications/webhooks/event-names/).',
  operationId: 'webhooks-event-types.list',
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists available events to which any webhook can subscribe.',
      content: { 'application/json': { schema: EventTypeListSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
})

export const getV1NotificationsWebhooksEventsRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks-events',
  tags: ['webhooks-events'],
  summary: 'List event notifications',
  description: 'Lists webhooks event notifications. Use query parameters to filter the response.',
  operationId: 'webhooks-events.list',
  request: {
    query: z.object({
      page_size: PageSizeParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
      transaction_id: TransactionIdParamsSchema,
      event_type: EventTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists webhooks event notifications.',
      content: { 'application/json': { schema: EventListSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const getV1NotificationsWebhooksEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/v1/notifications/webhooks-events/{event_id}',
  tags: ['webhooks-events'],
  summary: 'Show event notification details',
  description: 'Shows details for a webhooks event notification, by ID.',
  operationId: 'webhooks-events.get',
  request: { params: z.object({ event_id: EventIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhooks event notification details.',
      content: { 'application/json': { schema: EventSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const postV1NotificationsWebhooksEventsEventIdResendRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/webhooks-events/{event_id}/resend',
  tags: ['webhooks-events'],
  summary: 'Resend event notification',
  description:
    'Resends a webhook event notification, by ID. Any pending notifications are not resent.',
  operationId: 'webhooks-events.resend',
  request: {
    params: z.object({ event_id: EventIdParamsSchema }),
    body: { content: { 'application/json': { schema: EventResendSchema } } },
  },
  responses: {
    202: {
      description:
        'A successful request returns the HTTP `202 Accepted` status code and a JSON response body that shows webhook event notification details.',
      content: { 'application/json': { schema: EventSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})

export const postV1NotificationsSimulateEventRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/simulate-event',
  tags: ['simulate-event'],
  summary: 'Simulate webhook event',
  description:
    'Simulates a webhook event. In the JSON request body, specify a sample payload.<br>You need to subscribe to the following webhook events for Pay upon Invoice:<br><table><thead><tr><th>Event</th><th>Trigger</th></tr></thead><tbody><tr><td><code>PAYMENT.CAPTURE.COMPLETED</code></td><td>A payment capture completes.</td></tr><tr><td><code>PAYMENT.CAPTURE.DENIED</code></td><td>A payment capture is denied.</td></tr><tr><td><code>CHECKOUT.PAYMENT-APPROVAL.REVERSED</code></td><td>PayPal reverses a payment capture.</td></tr></tbody></table>',
  operationId: 'simulate-event.post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SimulateEventSchema,
          examples: {
            simulate_event: {
              value: {
                url: 'https://example.com/example_webhook',
                event_type: 'PAYMENT.AUTHORIZATION.CREATED',
                resource_version: '1.0',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    202: {
      description:
        'A successful request returns the HTTP `202 Accepted` status code and a JSON response body that shows details for the mock event.',
      content: { 'application/json': { schema: EventSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: Error_2Schema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/applications/webhooks'] }],
})
