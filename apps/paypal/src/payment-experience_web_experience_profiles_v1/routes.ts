import { createRoute, z } from '@hono/zod-openapi'

const ErrorDetails_2Schema = z
  .object({
    field: z.string().openapi({ description: 'The name of the field that caused the error.' }),
    issue: z.string().openapi({ description: 'The reason for the error.' }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['field', 'issue'],
  })
  .openapi('ErrorDetails_2')

const ErrorDetailsListSchema = z
  .array(ErrorDetails_2Schema)
  .openapi({ description: 'An array of additional details for the error.', readOnly: true })
  .openapi('ErrorDetailsList')

const ErrorSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The human-readable, unique name of the error.', readOnly: true }),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The PayPal internal ID. Used for correlation purposes.',
        readOnly: true,
      }),
    message: z
      .string()
      .openapi({ description: 'The message that describes the error.', readOnly: true }),
    information_link: z
      .string()
      .openapi({
        description: 'The URI to detailed information related to this error for the developer.',
        readOnly: true,
      }),
    details: ErrorDetailsListSchema.exactOptional(),
  })
  .openapi({
    title: 'Error',
    description: 'The error information.',
    required: ['name', 'message', 'information_link'],
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

const FlowConfigSchema = z
  .object({
    landing_page_type: z
      .enum(['login', 'billing'])
      .exactOptional()
      .openapi({
        description:
          'The type of landing page to display on the PayPal site for user checkout. To use the non-PayPal account landing page, set to `Billing`. To use the PayPal account login landing page, set to `Login`.',
        'x-enumDescriptions': ['login', 'billing'],
      }),
    bank_txn_pending_url: z
      .url()
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The merchant site URL to display after a bank transfer payment. In Germany, valid only for the Giropay payment method or bank transfer payment method.',
      }),
    user_action: z
      .literal('COMMIT')
      .exactOptional()
      .openapi({
        description:
          'Presents either the **Continue** or **Pay Now** checkout flow to the customer.<br/><br/>Default is **Continue**, or `user_action=continue`. When you do not know the final payment amount, accept this default flow, which redirects the customer to the PayPal payment page with the **Continue** button. When the customer clicks **Continue**, the customer can change the payment amount.<br/><br/> When you know the final payment amount, set `user_action=commit` to choose the **Pay Now** flow, which redirects the customer to the PayPal payment page with the **Pay Now** button. When the customer clicks **Pay Now**, the payment is processed immediately.',
        'x-enumDescriptions': ['COMMIT'],
      }),
    return_uri_http_method: z
      .enum(['GET', 'POST'])
      .exactOptional()
      .openapi({
        description:
          'The HTTP method to use to redirect the customer to a return URL. Value is `GET` or `POST`.',
        'x-enumDescriptions': ['GET', 'POST'],
      }),
  })
  .openapi({
    title: 'Flow Configuration',
    description: 'The flow configuration parameters.',
    required: [],
  })
  .openapi('FlowConfig')

const InputFieldsSchema = z
  .object({
    no_shipping: z
      .int()
      .min(0)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          "Indicates whether PayPal displays shipping address fields on the experience pages. Value is:<ul><li><code>0</code>. Displays the shipping address on the PayPal pages.</li><li><code>1</code>. Redacts shipping address fields from the PayPal pages. For digital goods, this field is required and must be <code>1</code>.</li><li><code>2</code>. Gets the shipping address from the customer's account profile.</li></ul>",
      }),
    address_override: z
      .int()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to display the shipping address that is passed to this call rather than the one on file for this buyer on the PayPal experience pages. Value is:<ul><li><code>0</code>. Displays the shipping address on file.</li><li><code>1</code>. Displays the shipping address specified in this call. the customer cannot edit this shipping address.</li></ul>',
      }),
  })
  .openapi({
    title: 'Input Field Customization',
    description: 'The input field customization parameters.',
    required: [],
  })
  .openapi('InputFields')

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

const PresentationSchema = z
  .object({
    brand_name: z
      .string()
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'A label that overrides the business name in the PayPal account on the PayPal pages. Character length and limitations: 127 single-byte alphanumeric characters.',
      }),
    logo_image: z
      .string()
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          "A URL to the logo image. A valid media type is `.gif`, `.jpg`, or `.png`. The image's maximum width is 190 pixels and maximum height is 60 pixels. PayPal crops images that are larger. PayPal places your logo image at the top of the cart review area. PayPal recommends that you store the image on a secure (HTTPS) server. Otherwise, web browsers display a message that checkout pages contain non-secure items. Character length and limitations: 127 single-byte alphanumeric characters.",
      }),
    locale_code: z
      .string()
      .min(2)
      .max(5)
      .exactOptional()
      .openapi({
        description:
          'The locale of pages that the PayPal payment experience displays. A valid value is `AU`, `AT`, `BE`, `BR`, `CA`, `CH`, `CN`, `DE`, `ES`, `GB`, `FR`, `IT`, `NL`, `PL`, `PT`, `RU`, or `US`. A 5-character code is also valid for languages in these countries: `da_DK`, `he_IL`, `id_ID`, `ja_JP`, `no_NO`, `pt_BR`, `ru_RU`, `sv_SE`, `th_TH`, `zh_CN`, `zh_HK`, or `zh_TW`.',
      }),
  })
  .openapi({
    title: 'Style and Presentation',
    description: 'The style and presentation parameters.',
    required: [],
  })
  .openapi('Presentation')

const WebProfileSchema = z
  .object({
    id: z
      .string()
      .length(22)
      .exactOptional()
      .openapi({ readOnly: true, description: 'The ID of the web experience profile.' }),
    name: z
      .string()
      .min(1)
      .max(50)
      .openapi({
        description:
          'The web experience profile name. Must be unique for a set of profiles for a merchant.',
      }),
    temporary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the profile persists for three hours or permanently. To persist the profile permanently, set to `false`. To persist the profile for three hours, set to `true`.',
      }),
    flow_config: FlowConfigSchema.exactOptional(),
    input_fields: InputFieldsSchema.exactOptional(),
    presentation: PresentationSchema.exactOptional(),
  })
  .openapi({
    description: 'A payment web experience profile.',
    title: 'Web Profile',
    required: ['name'],
  })
  .openapi('WebProfile')

const WebProfileListSchema = z
  .array(WebProfileSchema)
  .min(1)
  .max(20)
  .openapi({ title: 'Web Profile List', description: 'An array of web profiles.' })
  .openapi('WebProfileList')

const PaypalRequestIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'PayPal-Request-Id',
      in: 'header',
      description: 'The server stores keys for three hours.',
      required: true,
      schema: { type: 'string' },
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'id',
      in: 'path',
      description: 'The ID of the profile to delete.',
      required: true,
      schema: { type: 'string' },
    },
  })

const WebProfileRequestBody = { content: { 'application/json': { schema: WebProfileSchema } } }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/payments/payment':
          'New special privileged scope available for payment and manage payment experience profiles. Available to internal clients only.',
        'https://uri.paypal.com/services/payments/realtimepayment':
          'Permission to do any real-time payment and manage-payment experience profiles with support for sale, authorize, and order intents.',
      },
    },
  },
}

export const getV1PaymentExperienceWebProfilesRoute = createRoute({
  method: 'get',
  path: '/v1/payment-experience/web-profiles',
  tags: ['web-profiles'],
  summary: 'List web experience profiles',
  description:
    'Lists the latest 20 web experience profiles for a merchant or subject. To show details for these or additional profiles, you can show web experience profile details by ID.',
  operationId: 'web-profile.get-list',
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists the latest 20 profiles that the merchant owns, with details. To show details for these or additional profiles, you can show web experience profile details by ID.',
      content: { 'application/json': { schema: WebProfileListSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/payments/payment'] },
    { Oauth2: ['https://uri.paypal.com/services/payments/realtimepayment'] },
  ],
})

export const postV1PaymentExperienceWebProfilesRoute = createRoute({
  method: 'post',
  path: '/v1/payment-experience/web-profiles',
  tags: ['web-profiles'],
  summary: 'Create web experience profile',
  description:
    'Creates a web experience profile. In the JSON request body, specify the profile name and details.',
  operationId: 'web-profile.create',
  request: {
    headers: z.object({ 'PayPal-Request-Id': PaypalRequestIdParamsSchema }),
    body: WebProfileRequestBody,
  },
  responses: {
    200: {
      description:
        'A successful request, with or without the optional <code>PayPal-Request-Id</code> request header, returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the profile details and the ID of the profile. Any subsequent calls with the same <code>PayPal-Request-Id</code> request header value within a three-hour window returns the HTTP <code>200 OK</code> status code and a JSON response body that shows the profile details and the ID of the profile.',
      content: { 'application/json': { schema: WebProfileSchema } },
    },
    201: {
      description:
        'A successful request, with or without the optional <code>PayPal-Request-Id</code> request header, returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the profile details and the ID of the profile. Any subsequent calls with the same <code>PayPal-Request-Id</code> request header value within a three-hour window returns the HTTP <code>200 OK</code> status code and a JSON response body that shows the profile details and the ID of the profile.',
      content: { 'application/json': { schema: WebProfileSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/payments/payment'] },
    { Oauth2: ['https://uri.paypal.com/services/payments/realtimepayment'] },
  ],
})

export const getV1PaymentExperienceWebProfilesIdRoute = createRoute({
  method: 'get',
  path: '/v1/payment-experience/web-profiles/{id}',
  tags: ['web-profiles'],
  summary: 'Show web experience profile details by ID',
  description: 'Shows details for a web experience profile, by ID.',
  operationId: 'web-profile.get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the profile details.',
      content: { 'application/json': { schema: WebProfileSchema } },
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/payments/payment'] },
    { Oauth2: ['https://uri.paypal.com/services/payments/realtimepayment'] },
  ],
})

export const putV1PaymentExperienceWebProfilesIdRoute = createRoute({
  method: 'put',
  path: '/v1/payment-experience/web-profiles/{id}',
  tags: ['web-profiles'],
  summary: 'Update web experience profile',
  description:
    'Updates a web experience profile, by ID. In the JSON request body, specify the profile details. If your request omits any profile parameters, any previously set values for those parameters are removed.',
  operationId: 'web-profile.update',
  request: { params: z.object({ id: IdParamsSchema }), body: WebProfileRequestBody },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/payments/payment'] },
    { Oauth2: ['https://uri.paypal.com/services/payments/realtimepayment'] },
  ],
})

export const deleteV1PaymentExperienceWebProfilesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/payment-experience/web-profiles/{id}',
  tags: ['web-profiles'],
  summary: 'Delete web experience profile',
  description: 'Deletes a web experience profile, by ID.',
  operationId: 'web-profile.delete',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/payments/payment'] },
    { Oauth2: ['https://uri.paypal.com/services/payments/realtimepayment'] },
  ],
})

export const patchV1PaymentExperienceWebProfilesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/payment-experience/web-profiles/{id}',
  tags: ['web-profiles'],
  summary: 'Partially update web experience profile',
  description:
    'Partially-updates a web experience profile, by ID. In the JSON request body, specify a patch object, the path of the profile location to update, and a new value.',
  operationId: 'web-profile.partial-update',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PatchRequestSchema,
          examples: {
            patch_request: {
              value: [
                { op: 'add', path: '/presentation/brand_name', value: 'new_brand_name' },
                { op: 'remove', path: '/flow_config/landing_page_type' },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    500: {
      description:
        'An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'The error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { Oauth2: ['https://uri.paypal.com/services/payments/payment'] },
    { Oauth2: ['https://uri.paypal.com/services/payments/realtimepayment'] },
  ],
})
