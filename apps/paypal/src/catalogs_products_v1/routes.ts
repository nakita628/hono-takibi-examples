import { createRoute, z } from '@hono/zod-openapi'

const _400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_400')

const _401Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_ACCOUNT_STATUS').exactOptional(),
              description: z.literal('Account validations failed for the user.').exactOptional(),
            })
            .openapi({ title: 'INVALID_ACCOUNT_STATUS', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_401')

const _403Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PERMISSION_DENIED').exactOptional(),
              description: z
                .literal(
                  'You do not have permission to access or perform operations on this resource.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'PERMISSION_DENIED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_403')

const _404Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_RESOURCE_ID').exactOptional(),
              description: z
                .literal(
                  'Specified resource ID does not exist. Please check the resource ID and try again.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_RESOURCE_ID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_404')

const _422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('DUPLICATE_RESOURCE_IDENTIFIER').exactOptional(),
              description: z.literal('Identifier must be unique.').exactOptional(),
            })
            .openapi({ title: 'DUPLICATE_RESOURCE_IDENTIFIER', required: [] }),
          z
            .object({
              issue: z.literal('COUNTRY_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('This merchant country is not currently supported.')
                .exactOptional(),
            })
            .openapi({ title: 'COUNTRY_NOT_SUPPORTED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_422')

const DateTimeSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    description:
      'The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>',
  })
  .openapi('DateTime')

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
    description: 'An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

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

const ProductCategorySchema = z
  .enum([
    'AC_REFRIGERATION_REPAIR',
    'ACADEMIC_SOFTWARE',
    'ACCESSORIES',
    'ACCOUNTING',
    'ADULT',
    'ADVERTISING',
    'AFFILIATED_AUTO_RENTAL',
    'AGENCIES',
    'AGGREGATORS',
    'AGRICULTURAL_COOPERATIVE_FOR_MAIL_ORDER',
    'AIR_CARRIERS_AIRLINES',
    'AIRLINES',
    'AIRPORTS_FLYING_FIELDS',
    'ALCOHOLIC_BEVERAGES',
    'AMUSEMENT_PARKS_CARNIVALS',
    'ANIMATION',
    'ANTIQUES',
    'APPLIANCES',
    'AQUARIAMS_SEAQUARIUMS_DOLPHINARIUMS',
    'ARCHITECTURAL_ENGINEERING_AND_SURVEYING_SERVICES',
    'ART_AND_CRAFT_SUPPLIES',
    'ART_DEALERS_AND_GALLERIES',
    'ARTIFACTS_GRAVE_RELATED_AND_NATIVE_AMERICAN_CRAFTS',
    'ARTS_AND_CRAFTS',
    'ARTS_CRAFTS_AND_COLLECTIBLES',
    'AUDIO_BOOKS',
    'AUTO_ASSOCIATIONS_CLUBS',
    'AUTO_DEALER_USED_ONLY',
    'AUTO_RENTALS',
    'AUTO_SERVICE',
    'AUTOMATED_FUEL_DISPENSERS',
    'AUTOMOBILE_ASSOCIATIONS',
    'AUTOMOTIVE',
    'AUTOMOTIVE_REPAIR_SHOPS_NON_DEALER',
    'AUTOMOTIVE_TOP_AND_BODY_SHOPS',
    'AVIATION',
    'BABIES_CLOTHING_AND_SUPPLIES',
    'BABY',
    'BANDS_ORCHESTRAS_ENTERTAINERS',
    'BARBIES',
    'BATH_AND_BODY',
    'BATTERIES',
    'BEAN_BABIES',
    'BEAUTY',
    'BEAUTY_AND_FRAGRANCES',
    'BED_AND_BATH',
    'BICYCLE_SHOPS_SALES_AND_SERVICE',
    'BICYCLES_AND_ACCESSORIES',
    'BILLIARD_POOL_ESTABLISHMENTS',
    'BOAT_DEALERS',
    'BOAT_RENTALS_AND_LEASING',
    'BOATING_SAILING_AND_ACCESSORIES',
    'BOOKS',
    'BOOKS_AND_MAGAZINES',
    'BOOKS_MANUSCRIPTS',
    'BOOKS_PERIODICALS_AND_NEWSPAPERS',
    'BOWLING_ALLEYS',
    'BULLETIN_BOARD',
    'BUS_LINE',
    'BUS_LINES_CHARTERS_TOUR_BUSES',
    'BUSINESS',
    'BUSINESS_AND_SECRETARIAL_SCHOOLS',
    'BUYING_AND_SHOPPING_SERVICES_AND_CLUBS',
    'CABLE_SATELLITE_AND_OTHER_PAY_TELEVISION_AND_RADIO_SERVICES',
    'CABLE_SATELLITE_AND_OTHER_PAY_TV_AND_RADIO',
    'CAMERA_AND_PHOTOGRAPHIC_SUPPLIES',
    'CAMERAS',
    'CAMERAS_AND_PHOTOGRAPHY',
    'CAMPER_RECREATIONAL_AND_UTILITY_TRAILER_DEALERS',
    'CAMPING_AND_OUTDOORS',
    'CAMPING_AND_SURVIVAL',
    'CAR_AND_TRUCK_DEALERS',
    'CAR_AND_TRUCK_DEALERS_USED_ONLY',
    'CAR_AUDIO_AND_ELECTRONICS',
    'CAR_RENTAL_AGENCY',
    'CATALOG_MERCHANT',
    'CATALOG_RETAIL_MERCHANT',
    'CATERING_SERVICES',
    'CHARITY',
    'CHECK_CASHIER',
    'CHILD_CARE_SERVICES',
    'CHILDREN_BOOKS',
    'CHIROPODISTS_PODIATRISTS',
    'CHIROPRACTORS',
    'CIGAR_STORES_AND_STANDS',
    'CIVIC_SOCIAL_FRATERNAL_ASSOCIATIONS',
    'CIVIL_SOCIAL_FRAT_ASSOCIATIONS',
    'CLOTHING',
    'CLOTHING_ACCESSORIES_AND_SHOES',
    'CLOTHING_RENTAL',
    'COFFEE_AND_TEA',
    'COIN_OPERATED_BANKS_AND_CASINOS',
    'COLLECTIBLES',
    'COLLECTION_AGENCY',
    'COLLEGES_AND_UNIVERSITIES',
    'COMMERCIAL_EQUIPMENT',
    'COMMERCIAL_FOOTWEAR',
    'COMMERCIAL_PHOTOGRAPHY',
    'COMMERCIAL_PHOTOGRAPHY_ART_AND_GRAPHICS',
    'COMMERCIAL_SPORTS_PROFESSIONA',
    'COMMODITIES_AND_FUTURES_EXCHANGE',
    'COMPUTER_AND_DATA_PROCESSING_SERVICES',
    'COMPUTER_HARDWARE_AND_SOFTWARE',
    'COMPUTER_MAINTENANCE_REPAIR_AND_SERVICES_NOT_ELSEWHERE_CLAS',
    'CONSTRUCTION',
    'CONSTRUCTION_MATERIALS_NOT_ELSEWHERE_CLASSIFIED',
    'CONSULTING_SERVICES',
    'CONSUMER_CREDIT_REPORTING_AGENCIES',
    'CONVALESCENT_HOMES',
    'COSMETIC_STORES',
    'COUNSELING_SERVICES_DEBT_MARRIAGE_PERSONAL',
    'COUNTERFEIT_CURRENCY_AND_STAMPS',
    'COUNTERFEIT_ITEMS',
    'COUNTRY_CLUBS',
    'COURIER_SERVICES',
    'COURIER_SERVICES_AIR_AND_GROUND_AND_FREIGHT_FORWARDERS',
    'COURT_COSTS_ALIMNY_CHILD_SUPT',
    'COURT_COSTS_INCLUDING_ALIMONY_AND_CHILD_SUPPORT_COURTS_OF_LAW',
    'CREDIT_CARDS',
    'CREDIT_UNION',
    'CULTURE_AND_RELIGION',
    'DAIRY_PRODUCTS_STORES',
    'DANCE_HALLS_STUDIOS_AND_SCHOOLS',
    'DECORATIVE',
    'DENTAL',
    'DENTISTS_AND_ORTHODONTISTS',
    'DEPARTMENT_STORES',
    'DESKTOP_PCS',
    'DEVICES',
    'DIECAST_TOYS_VEHICLES',
    'DIGITAL_GAMES',
    'DIGITAL_MEDIA_BOOKS_MOVIES_MUSIC',
    'DIRECT_MARKETING',
    'DIRECT_MARKETING_CATALOG_MERCHANT',
    'DIRECT_MARKETING_INBOUND_TELE',
    'DIRECT_MARKETING_OUTBOUND_TELE',
    'DIRECT_MARKETING_SUBSCRIPTION',
    'DISCOUNT_STORES',
    'DOOR_TO_DOOR_SALES',
    'DRAPERY_WINDOW_COVERING_AND_UPHOLSTERY',
    'DRINKING_PLACES',
    'DRUGSTORE',
    'DURABLE_GOODS',
    'ECOMMERCE_DEVELOPMENT',
    'ECOMMERCE_SERVICES',
    'EDUCATIONAL_AND_TEXTBOOKS',
    'ELECTRIC_RAZOR_STORES',
    'ELECTRICAL_AND_SMALL_APPLIANCE_REPAIR',
    'ELECTRICAL_CONTRACTORS',
    'ELECTRICAL_PARTS_AND_EQUIPMENT',
    'ELECTRONIC_CASH',
    'ELEMENTARY_AND_SECONDARY_SCHOOLS',
    'EMPLOYMENT',
    'ENTERTAINERS',
    'ENTERTAINMENT_AND_MEDIA',
    'EQUIP_TOOL_FURNITURE_AND_APPLIANCE_RENTAL_AND_LEASING',
    'ESCROW',
    'EVENT_AND_WEDDING_PLANNING',
    'EXERCISE_AND_FITNESS',
    'EXERCISE_EQUIPMENT',
    'EXTERMINATING_AND_DISINFECTING_SERVICES',
    'FABRICS_AND_SEWING',
    'FAMILY_CLOTHING_STORES',
    'FASHION_JEWELRY',
    'FAST_FOOD_RESTAURANTS',
    'FICTION_AND_NONFICTION',
    'FINANCE_COMPANY',
    'FINANCIAL_AND_INVESTMENT_ADVICE',
    'FINANCIAL_INSTITUTIONS_MERCHANDISE_AND_SERVICES',
    'FIREARM_ACCESSORIES',
    'FIREARMS_WEAPONS_AND_KNIVES',
    'FIREPLACE_AND_FIREPLACE_SCREENS',
    'FIREWORKS',
    'FISHING',
    'FLORISTS',
    'FLOWERS',
    'FOOD_DRINK_AND_NUTRITION',
    'FOOD_PRODUCTS',
    'FOOD_RETAIL_AND_SERVICE',
    'FRAGRANCES_AND_PERFUMES',
    'FREEZER_AND_LOCKER_MEAT_PROVISIONERS',
    'FUEL_DEALERS_FUEL_OIL_WOOD_AND_COAL',
    'FUEL_DEALERS_NON_AUTOMOTIVE',
    'FUNERAL_SERVICES_AND_CREMATORIES',
    'FURNISHING_AND_DECORATING',
    'FURNITURE',
    'FURRIERS_AND_FUR_SHOPS',
    'GADGETS_AND_OTHER_ELECTRONICS',
    'GAMBLING',
    'GAME_SOFTWARE',
    'GAMES',
    'GARDEN_SUPPLIES',
    'GENERAL',
    'GENERAL_CONTRACTORS',
    'GENERAL_GOVERNMENT',
    'GENERAL_SOFTWARE',
    'GENERAL_TELECOM',
    'GIFTS_AND_FLOWERS',
    'GLASS_PAINT_AND_WALLPAPER_STORES',
    'GLASSWARE_CRYSTAL_STORES',
    'GOVERNMENT',
    'GOVERNMENT_IDS_AND_LICENSES',
    'GOVERNMENT_LICENSED_ON_LINE_CASINOS_ON_LINE_GAMBLING',
    'GOVERNMENT_OWNED_LOTTERIES',
    'GOVERNMENT_SERVICES',
    'GRAPHIC_AND_COMMERCIAL_DESIGN',
    'GREETING_CARDS',
    'GROCERY_STORES_AND_SUPERMARKETS',
    'HARDWARE_AND_TOOLS',
    'HARDWARE_EQUIPMENT_AND_SUPPLIES',
    'HAZARDOUS_RESTRICTED_AND_PERISHABLE_ITEMS',
    'HEALTH_AND_BEAUTY_SPAS',
    'HEALTH_AND_NUTRITION',
    'HEALTH_AND_PERSONAL_CARE',
    'HEARING_AIDS_SALES_AND_SUPPLIES',
    'HEATING_PLUMBING_AC',
    'HIGH_RISK_MERCHANT',
    'HIRING_SERVICES',
    'HOBBIES_TOYS_AND_GAMES',
    'HOME_AND_GARDEN',
    'HOME_AUDIO',
    'HOME_DECOR',
    'HOME_ELECTRONICS',
    'HOSPITALS',
    'HOTELS_MOTELS_INNS_RESORTS',
    'HOUSEWARES',
    'HUMAN_PARTS_AND_REMAINS',
    'HUMOROUS_GIFTS_AND_NOVELTIES',
    'HUNTING',
    'IDS_LICENSES_AND_PASSPORTS',
    'ILLEGAL_DRUGS_AND_PARAPHERNALIA',
    'INDUSTRIAL',
    'INDUSTRIAL_AND_MANUFACTURING_SUPPLIES',
    'INSURANCE_AUTO_AND_HOME',
    'INSURANCE_DIRECT',
    'INSURANCE_LIFE_AND_ANNUITY',
    'INSURANCE_SALES_UNDERWRITING',
    'INSURANCE_UNDERWRITING_PREMIUMS',
    'INTERNET_AND_NETWORK_SERVICES',
    'INTRA_COMPANY_PURCHASES',
    'LABORATORIES_DENTAL_MEDICAL',
    'LANDSCAPING',
    'LANDSCAPING_AND_HORTICULTURAL_SERVICES',
    'LAUNDRY_CLEANING_SERVICES',
    'LEGAL',
    'LEGAL_SERVICES_AND_ATTORNEYS',
    'LOCAL_DELIVERY_SERVICE',
    'LOCKSMITH',
    'LODGING_AND_ACCOMMODATIONS',
    'LOTTERY_AND_CONTESTS',
    'LUGGAGE_AND_LEATHER_GOODS',
    'LUMBER_AND_BUILDING_MATERIALS',
    'MAGAZINES',
    'MAINTENANCE_AND_REPAIR_SERVICES',
    'MAKEUP_AND_COSMETICS',
    'MANUAL_CASH_DISBURSEMENTS',
    'MASSAGE_PARLORS',
    'MEDICAL',
    'MEDICAL_AND_PHARMACEUTICAL',
    'MEDICAL_CARE',
    'MEDICAL_EQUIPMENT_AND_SUPPLIES',
    'MEDICAL_SERVICES',
    'MEETING_PLANNERS',
    'MEMBERSHIP_CLUBS_AND_ORGANIZATIONS',
    'MEMBERSHIP_COUNTRY_CLUBS_GOLF',
    'MEMORABILIA',
    'MEN_AND_BOY_CLOTHING_AND_ACCESSORY_STORES',
    'MEN_CLOTHING',
    'MERCHANDISE',
    'METAPHYSICAL',
    'MILITARIA',
    'MILITARY_AND_CIVIL_SERVICE_UNIFORMS',
    'MISC._AUTOMOTIVE_AIRCRAFT_AND_FARM_EQUIPMENT_DEALERS',
    'MISC._GENERAL_MERCHANDISE',
    'MISCELLANEOUS_GENERAL_SERVICES',
    'MISCELLANEOUS_REPAIR_SHOPS_AND_RELATED_SERVICES',
    'MODEL_KITS',
    'MONEY_TRANSFER_MEMBER_FINANCIAL_INSTITUTION',
    'MONEY_TRANSFER_MERCHANT',
    'MOTION_PICTURE_THEATERS',
    'MOTOR_FREIGHT_CARRIERS_AND_TRUCKING',
    'MOTOR_HOME_AND_RECREATIONAL_VEHICLE_RENTAL',
    'MOTOR_HOMES_DEALERS',
    'MOTOR_VEHICLE_SUPPLIES_AND_NEW_PARTS',
    'MOTORCYCLE_DEALERS',
    'MOTORCYCLES',
    'MOVIE',
    'MOVIE_TICKETS',
    'MOVING_AND_STORAGE',
    'MULTI_LEVEL_MARKETING',
    'MUSIC_CDS_CASSETTES_AND_ALBUMS',
    'MUSIC_STORE_INSTRUMENTS_AND_SHEET_MUSIC',
    'NETWORKING',
    'NEW_AGE',
    'NEW_PARTS_AND_SUPPLIES_MOTOR_VEHICLE',
    'NEWS_DEALERS_AND_NEWSTANDS',
    'NON_DURABLE_GOODS',
    'NON_FICTION',
    'NON_PROFIT_POLITICAL_AND_RELIGION',
    'NONPROFIT',
    'NOVELTIES',
    'OEM_SOFTWARE',
    'OFFICE_SUPPLIES_AND_EQUIPMENT',
    'ONLINE_DATING',
    'ONLINE_GAMING',
    'ONLINE_GAMING_CURRENCY',
    'ONLINE_SERVICES',
    'OOUTBOUND_TELEMARKETING_MERCH',
    'OPHTHALMOLOGISTS_OPTOMETRIST',
    'OPTICIANS_AND_DISPENSING',
    'ORTHOPEDIC_GOODS_PROSTHETICS',
    'OSTEOPATHS',
    'OTHER',
    'PACKAGE_TOUR_OPERATORS',
    'PAINTBALL',
    'PAINTS_VARNISHES_AND_SUPPLIES',
    'PARKING_LOTS_AND_GARAGES',
    'PARTS_AND_ACCESSORIES',
    'PAWN_SHOPS',
    'PAYCHECK_LENDER_OR_CASH_ADVANCE',
    'PERIPHERALS',
    'PERSONALIZED_GIFTS',
    'PET_SHOPS_PET_FOOD_AND_SUPPLIES',
    'PETROLEUM_AND_PETROLEUM_PRODUCTS',
    'PETS_AND_ANIMALS',
    'PHOTOFINISHING_LABORATORIES_PHOTO_DEVELOPING',
    'PHOTOGRAPHIC_STUDIOS_PORTRAITS',
    'PHOTOGRAPHY',
    'PHYSICAL_GOOD',
    'PICTURE_VIDEO_PRODUCTION',
    'PIECE_GOODS_NOTIONS_AND_OTHER_DRY_GOODS',
    'PLANTS_AND_SEEDS',
    'PLUMBING_AND_HEATING_EQUIPMENTS_AND_SUPPLIES',
    'POLICE_RELATED_ITEMS',
    'POLITICAL_ORGANIZATIONS',
    'POSTAL_SERVICES_GOVERNMENT_ONLY',
    'POSTERS',
    'PREPAID_AND_STORED_VALUE_CARDS',
    'PRESCRIPTION_DRUGS',
    'PROMOTIONAL_ITEMS',
    'PUBLIC_WAREHOUSING_AND_STORAGE',
    'PUBLISHING_AND_PRINTING',
    'PUBLISHING_SERVICES',
    'RADAR_DECTORS',
    'RADIO_TELEVISION_AND_STEREO_REPAIR',
    'REAL_ESTATE',
    'REAL_ESTATE_AGENT',
    'REAL_ESTATE_AGENTS_AND_MANAGERS_RENTALS',
    'RELIGION_AND_SPIRITUALITY_FOR_PROFIT',
    'RELIGIOUS',
    'RELIGIOUS_ORGANIZATIONS',
    'REMITTANCE',
    'RENTAL_PROPERTY_MANAGEMENT',
    'RESIDENTIAL',
    'RETAIL',
    'RETAIL_FINE_JEWELRY_AND_WATCHES',
    'REUPHOLSTERY_AND_FURNITURE_REPAIR',
    'RINGS',
    'ROOFING_SIDING_SHEET_METAL',
    'RUGS_AND_CARPETS',
    'SCHOOLS_AND_COLLEGES',
    'SCIENCE_FICTION',
    'SCRAPBOOKING',
    'SCULPTURES',
    'SECURITIES_BROKERS_AND_DEALERS',
    'SECURITY_AND_SURVEILLANCE',
    'SECURITY_AND_SURVEILLANCE_EQUIPMENT',
    'SECURITY_BROKERS_AND_DEALERS',
    'SEMINARS',
    'SERVICE_STATIONS',
    'SERVICES',
    'SEWING_NEEDLEWORK_FABRIC_AND_PIECE_GOODS_STORES',
    'SHIPPING_AND_PACKING',
    'SHOE_REPAIR_HAT_CLEANING',
    'SHOE_STORES',
    'SHOES',
    'SNOWMOBILE_DEALERS',
    'SOFTWARE',
    'SPECIALTY_AND_MISC._FOOD_STORES',
    'SPECIALTY_CLEANING_POLISHING_AND_SANITATION_PREPARATIONS',
    'SPECIALTY_OR_RARE_PETS',
    'SPORT_GAMES_AND_TOYS',
    'SPORTING_AND_RECREATIONAL_CAMPS',
    'SPORTING_GOODS',
    'SPORTS_AND_OUTDOORS',
    'SPORTS_AND_RECREATION',
    'STAMP_AND_COIN',
    'STATIONARY_PRINTING_AND_WRITING_PAPER',
    'STENOGRAPHIC_AND_SECRETARIAL_SUPPORT_SERVICES',
    'STOCKS_BONDS_SECURITIES_AND_RELATED_CERTIFICATES',
    'STORED_VALUE_CARDS',
    'SUPPLIES',
    'SUPPLIES_AND_TOYS',
    'SURVEILLANCE_EQUIPMENT',
    'SWIMMING_POOLS_AND_SPAS',
    'SWIMMING_POOLS_SALES_SUPPLIES_SERVICES',
    'TAILORS_AND_ALTERATIONS',
    'TAX_PAYMENTS',
    'TAX_PAYMENTS_GOVERNMENT_AGENCIES',
    'TAXICABS_AND_LIMOUSINES',
    'TELECOMMUNICATION_SERVICES',
    'TELEPHONE_CARDS',
    'TELEPHONE_EQUIPMENT',
    'TELEPHONE_SERVICES',
    'THEATER',
    'TIRE_RETREADING_AND_REPAIR',
    'TOLL_OR_BRIDGE_FEES',
    'TOOLS_AND_EQUIPMENT',
    'TOURIST_ATTRACTIONS_AND_EXHIBITS',
    'TOWING_SERVICE',
    'TOYS_AND_GAMES',
    'TRADE_AND_VOCATIONAL_SCHOOLS',
    'TRADEMARK_INFRINGEMENT',
    'TRAILER_PARKS_AND_CAMPGROUNDS',
    'TRAINING_SERVICES',
    'TRANSPORTATION_SERVICES',
    'TRAVEL',
    'TRUCK_AND_UTILITY_TRAILER_RENTALS',
    'TRUCK_STOP',
    'TYPESETTING_PLATE_MAKING_AND_RELATED_SERVICES',
    'USED_MERCHANDISE_AND_SECONDHAND_STORES',
    'USED_PARTS_MOTOR_VEHICLE',
    'UTILITIES',
    'UTILITIES_ELECTRIC_GAS_WATER_SANITARY',
    'VARIETY_STORES',
    'VEHICLE_SALES',
    'VEHICLE_SERVICE_AND_ACCESSORIES',
    'VIDEO_EQUIPMENT',
    'VIDEO_GAME_ARCADES_ESTABLISH',
    'VIDEO_GAMES_AND_SYSTEMS',
    'VIDEO_TAPE_RENTAL_STORES',
    'VINTAGE_AND_COLLECTIBLE_VEHICLES',
    'VINTAGE_AND_COLLECTIBLES',
    'VITAMINS_AND_SUPPLEMENTS',
    'VOCATIONAL_AND_TRADE_SCHOOLS',
    'WATCH_CLOCK_AND_JEWELRY_REPAIR',
    'WEB_HOSTING_AND_DESIGN',
    'WELDING_REPAIR',
    'WHOLESALE_CLUBS',
    'WHOLESALE_FLORIST_SUPPLIERS',
    'WHOLESALE_PRESCRIPTION_DRUGS',
    'WILDLIFE_PRODUCTS',
    'WIRE_TRANSFER',
    'WIRE_TRANSFER_AND_MONEY_ORDER',
    'WOMEN_ACCESSORY_SPECIALITY',
    'WOMEN_CLOTHING',
  ])
  .openapi({
    description: 'The product category.',
    title: 'Product Category',
    'x-enumDescriptions': [
      { value: 'AC_REFRIGERATION_REPAIR', description: 'A/C, Refrigeration Repair' },
      { value: 'ACADEMIC_SOFTWARE', description: 'Academic Software' },
      { value: 'ACCESSORIES', description: 'Accessories' },
      { value: 'ACCOUNTING', description: 'Accounting' },
      { value: 'ADULT', description: 'Adult' },
      { value: 'ADVERTISING', description: 'Advertising' },
      { value: 'AFFILIATED_AUTO_RENTAL', description: 'Affiliated Auto Rental' },
      { value: 'AGENCIES', description: 'Agencies' },
      { value: 'AGGREGATORS', description: 'Aggregators' },
      {
        value: 'AGRICULTURAL_COOPERATIVE_FOR_MAIL_ORDER',
        description: 'Agricultural Cooperative for Mail Order',
      },
      { value: 'AIR_CARRIERS_AIRLINES', description: 'Air Carriers, Airlines' },
      { value: 'AIRLINES', description: 'Airlines' },
      { value: 'AIRPORTS_FLYING_FIELDS', description: 'Airports, Flying Fields' },
      { value: 'ALCOHOLIC_BEVERAGES', description: 'Alcoholic Beverages' },
      { value: 'AMUSEMENT_PARKS_CARNIVALS', description: 'Amusement Parks/Carnivals' },
      { value: 'ANIMATION', description: 'Animation' },
      { value: 'ANTIQUES', description: 'Antiques' },
      { value: 'APPLIANCES', description: 'Appliances' },
      {
        value: 'AQUARIAMS_SEAQUARIUMS_DOLPHINARIUMS',
        description: 'Aquariams Seaquariums Dolphinariums',
      },
      {
        value: 'ARCHITECTURAL_ENGINEERING_AND_SURVEYING_SERVICES',
        description: 'Architectural,Engineering,And Surveying Services',
      },
      { value: 'ART_AND_CRAFT_SUPPLIES', description: 'Art & Craft Supplies' },
      { value: 'ART_DEALERS_AND_GALLERIES', description: 'Art dealers and galleries' },
      {
        value: 'ARTIFACTS_GRAVE_RELATED_AND_NATIVE_AMERICAN_CRAFTS',
        description: 'Artifacts, Grave related, and Native American Crafts',
      },
      { value: 'ARTS_AND_CRAFTS', description: 'Arts and crafts' },
      { value: 'ARTS_CRAFTS_AND_COLLECTIBLES', description: 'Arts, crafts, and collectibles' },
      { value: 'AUDIO_BOOKS', description: 'Audio books' },
      { value: 'AUTO_ASSOCIATIONS_CLUBS', description: 'Auto Associations/Clubs' },
      { value: 'AUTO_DEALER_USED_ONLY', description: 'Auto dealer - used only' },
      { value: 'AUTO_RENTALS', description: 'Auto Rentals' },
      { value: 'AUTO_SERVICE', description: 'Auto service' },
      { value: 'AUTOMATED_FUEL_DISPENSERS', description: 'Automated Fuel Dispensers' },
      { value: 'AUTOMOBILE_ASSOCIATIONS', description: 'Automobile Associations' },
      { value: 'AUTOMOTIVE', description: 'Automotive' },
      {
        value: 'AUTOMOTIVE_REPAIR_SHOPS_NON_DEALER',
        description: 'Automotive Repair Shops - Non-Dealer',
      },
      { value: 'AUTOMOTIVE_TOP_AND_BODY_SHOPS', description: 'Automotive Top And Body Shops' },
      { value: 'AVIATION', description: 'Aviation' },
      { value: 'BABIES_CLOTHING_AND_SUPPLIES', description: 'Babies Clothing & Supplies' },
      { value: 'BABY', description: 'Baby' },
      { value: 'BANDS_ORCHESTRAS_ENTERTAINERS', description: 'Bands,Orchestras,Entertainers' },
      { value: 'BARBIES', description: 'Barbies' },
      { value: 'BATH_AND_BODY', description: 'Bath and body' },
      { value: 'BATTERIES', description: 'Batteries' },
      { value: 'BEAN_BABIES', description: 'Bean Babies' },
      { value: 'BEAUTY', description: 'Beauty' },
      { value: 'BEAUTY_AND_FRAGRANCES', description: 'Beauty and fragrances' },
      { value: 'BED_AND_BATH', description: 'Bed & Bath' },
      { value: 'BICYCLE_SHOPS_SALES_AND_SERVICE', description: 'Bicycle Shops-Sales And Service' },
      { value: 'BICYCLES_AND_ACCESSORIES', description: 'Bicycles & Accessories' },
      { value: 'BILLIARD_POOL_ESTABLISHMENTS', description: 'Billiard/Pool Establishments' },
      { value: 'BOAT_DEALERS', description: 'Boat Dealers' },
      { value: 'BOAT_RENTALS_AND_LEASING', description: 'Boat Rentals And Leasing' },
      { value: 'BOATING_SAILING_AND_ACCESSORIES', description: 'Boating, sailing and accessories' },
      { value: 'BOOKS', description: 'Books' },
      { value: 'BOOKS_AND_MAGAZINES', description: 'Books and magazines' },
      { value: 'BOOKS_MANUSCRIPTS', description: 'Books, Manuscripts' },
      {
        value: 'BOOKS_PERIODICALS_AND_NEWSPAPERS',
        description: 'Books, Periodicals And Newspapers',
      },
      { value: 'BOWLING_ALLEYS', description: 'Bowling Alleys' },
      { value: 'BULLETIN_BOARD', description: 'Bulletin board' },
      { value: 'BUS_LINE', description: 'Bus line' },
      { value: 'BUS_LINES_CHARTERS_TOUR_BUSES', description: 'Bus Lines,Charters,Tour Buses' },
      { value: 'BUSINESS', description: 'Business' },
      {
        value: 'BUSINESS_AND_SECRETARIAL_SCHOOLS',
        description: 'Business and secretarial schools',
      },
      {
        value: 'BUYING_AND_SHOPPING_SERVICES_AND_CLUBS',
        description: 'Buying And Shopping Services And Clubs',
      },
      {
        value: 'CABLE_SATELLITE_AND_OTHER_PAY_TELEVISION_AND_RADIO_SERVICES',
        description: 'Cable,Satellite,And Other Pay Television And Radio Services',
      },
      {
        value: 'CABLE_SATELLITE_AND_OTHER_PAY_TV_AND_RADIO',
        description: 'Cable, satellite, and other pay TV and radio',
      },
      {
        value: 'CAMERA_AND_PHOTOGRAPHIC_SUPPLIES',
        description: 'Camera and photographic supplies',
      },
      { value: 'CAMERAS', description: 'Cameras' },
      { value: 'CAMERAS_AND_PHOTOGRAPHY', description: 'Cameras & Photography' },
      {
        value: 'CAMPER_RECREATIONAL_AND_UTILITY_TRAILER_DEALERS',
        description: 'Camper,Recreational And Utility Trailer Dealers',
      },
      { value: 'CAMPING_AND_OUTDOORS', description: 'Camping and outdoors' },
      { value: 'CAMPING_AND_SURVIVAL', description: 'Camping & Survival' },
      { value: 'CAR_AND_TRUCK_DEALERS', description: 'Car And Truck Dealers' },
      {
        value: 'CAR_AND_TRUCK_DEALERS_USED_ONLY',
        description: 'Car And Truck Dealers - Used Only',
      },
      { value: 'CAR_AUDIO_AND_ELECTRONICS', description: 'Car Audio & Electronics' },
      { value: 'CAR_RENTAL_AGENCY', description: 'Car rental agency' },
      { value: 'CATALOG_MERCHANT', description: 'Catalog Merchant' },
      { value: 'CATALOG_RETAIL_MERCHANT', description: 'Catalog/Retail Merchant' },
      { value: 'CATERING_SERVICES', description: 'Catering services' },
      { value: 'CHARITY', description: 'Charity' },
      { value: 'CHECK_CASHIER', description: 'Check Cashier' },
      { value: 'CHILD_CARE_SERVICES', description: 'Child Care Services' },
      { value: 'CHILDREN_BOOKS', description: 'Children Books' },
      { value: 'CHIROPODISTS_PODIATRISTS', description: 'Chiropodists/Podiatrists' },
      { value: 'CHIROPRACTORS', description: 'Chiropractors' },
      { value: 'CIGAR_STORES_AND_STANDS', description: 'Cigar Stores And Stands' },
      {
        value: 'CIVIC_SOCIAL_FRATERNAL_ASSOCIATIONS',
        description: 'Civic, Social, Fraternal Associations',
      },
      { value: 'CIVIL_SOCIAL_FRAT_ASSOCIATIONS', description: 'Civil/Social/Frat Associations' },
      { value: 'CLOTHING', description: 'Clothing' },
      { value: 'CLOTHING_ACCESSORIES_AND_SHOES', description: 'Clothing, accessories, and shoes' },
      { value: 'CLOTHING_RENTAL', description: 'Clothing Rental' },
      { value: 'COFFEE_AND_TEA', description: 'Coffee and tea' },
      { value: 'COIN_OPERATED_BANKS_AND_CASINOS', description: 'Coin Operated Banks & Casinos' },
      { value: 'COLLECTIBLES', description: 'Collectibles' },
      { value: 'COLLECTION_AGENCY', description: 'Collection agency' },
      { value: 'COLLEGES_AND_UNIVERSITIES', description: 'Colleges and universities' },
      { value: 'COMMERCIAL_EQUIPMENT', description: 'Commercial Equipment' },
      { value: 'COMMERCIAL_FOOTWEAR', description: 'Commercial Footwear' },
      { value: 'COMMERCIAL_PHOTOGRAPHY', description: 'Commercial photography' },
      {
        value: 'COMMERCIAL_PHOTOGRAPHY_ART_AND_GRAPHICS',
        description: 'Commercial photography, art, and graphics',
      },
      { value: 'COMMERCIAL_SPORTS_PROFESSIONA', description: 'Commercial Sports/Professiona' },
      {
        value: 'COMMODITIES_AND_FUTURES_EXCHANGE',
        description: 'Commodities and futures exchange',
      },
      {
        value: 'COMPUTER_AND_DATA_PROCESSING_SERVICES',
        description: 'Computer and data processing services',
      },
      { value: 'COMPUTER_HARDWARE_AND_SOFTWARE', description: 'Computer Hardware & Software' },
      {
        value: 'COMPUTER_MAINTENANCE_REPAIR_AND_SERVICES_NOT_ELSEWHERE_CLAS',
        description: 'Computer Maintenance, Repair And Services Not Elsewhere Clas',
      },
      { value: 'CONSTRUCTION', description: 'Construction' },
      {
        value: 'CONSTRUCTION_MATERIALS_NOT_ELSEWHERE_CLASSIFIED',
        description: 'Construction Materials Not Elsewhere Classified',
      },
      { value: 'CONSULTING_SERVICES', description: 'Consulting services' },
      {
        value: 'CONSUMER_CREDIT_REPORTING_AGENCIES',
        description: 'Consumer Credit Reporting Agencies',
      },
      { value: 'CONVALESCENT_HOMES', description: 'Convalescent Homes' },
      { value: 'COSMETIC_STORES', description: 'Cosmetic Stores' },
      {
        value: 'COUNSELING_SERVICES_DEBT_MARRIAGE_PERSONAL',
        description: 'Counseling Services--Debt,Marriage,Personal',
      },
      { value: 'COUNTERFEIT_CURRENCY_AND_STAMPS', description: 'Counterfeit Currency and Stamps' },
      { value: 'COUNTERFEIT_ITEMS', description: 'Counterfeit Items' },
      { value: 'COUNTRY_CLUBS', description: 'Country Clubs' },
      { value: 'COURIER_SERVICES', description: 'Courier services' },
      {
        value: 'COURIER_SERVICES_AIR_AND_GROUND_AND_FREIGHT_FORWARDERS',
        description: 'Courier Services-Air And Ground,And Freight Forwarders',
      },
      { value: 'COURT_COSTS_ALIMNY_CHILD_SUPT', description: 'Court Costs/Alimny/Child Supt' },
      {
        value: 'COURT_COSTS_INCLUDING_ALIMONY_AND_CHILD_SUPPORT_COURTS_OF_LAW',
        description: 'Court Costs, Including Alimony and Child Support - Courts of Law',
      },
      { value: 'CREDIT_CARDS', description: 'Credit Cards' },
      { value: 'CREDIT_UNION', description: 'Credit union' },
      { value: 'CULTURE_AND_RELIGION', description: 'Culture & Religion' },
      { value: 'DAIRY_PRODUCTS_STORES', description: 'Dairy Products Stores' },
      { value: 'DANCE_HALLS_STUDIOS_AND_SCHOOLS', description: 'Dance Halls,Studios,And Schools' },
      { value: 'DECORATIVE', description: 'Decorative' },
      { value: 'DENTAL', description: 'Dental' },
      { value: 'DENTISTS_AND_ORTHODONTISTS', description: 'Dentists And Orthodontists' },
      { value: 'DEPARTMENT_STORES', description: 'Department Stores' },
      { value: 'DESKTOP_PCS', description: 'Desktop PCs' },
      { value: 'DEVICES', description: 'Devices' },
      { value: 'DIECAST_TOYS_VEHICLES', description: 'Diecast, Toys Vehicles' },
      { value: 'DIGITAL_GAMES', description: 'Digital games' },
      {
        value: 'DIGITAL_MEDIA_BOOKS_MOVIES_MUSIC',
        description: 'Digital media,books,movies,music',
      },
      { value: 'DIRECT_MARKETING', description: 'Direct Marketing' },
      {
        value: 'DIRECT_MARKETING_CATALOG_MERCHANT',
        description: 'Direct Marketing - Catalog Merchant',
      },
      { value: 'DIRECT_MARKETING_INBOUND_TELE', description: 'Direct Marketing - Inbound Tele' },
      { value: 'DIRECT_MARKETING_OUTBOUND_TELE', description: 'Direct Marketing - Outbound Tele' },
      { value: 'DIRECT_MARKETING_SUBSCRIPTION', description: 'Direct Marketing - Subscription' },
      { value: 'DISCOUNT_STORES', description: 'Discount Stores' },
      { value: 'DOOR_TO_DOOR_SALES', description: 'Door-To-Door Sales' },
      {
        value: 'DRAPERY_WINDOW_COVERING_AND_UPHOLSTERY',
        description: 'Drapery, window covering, and upholstery',
      },
      { value: 'DRINKING_PLACES', description: 'Drinking Places' },
      { value: 'DRUGSTORE', description: 'Drugstore' },
      { value: 'DURABLE_GOODS', description: 'Durable goods' },
      { value: 'ECOMMERCE_DEVELOPMENT', description: 'eCommerce Development' },
      { value: 'ECOMMERCE_SERVICES', description: 'eCommerce Services' },
      { value: 'EDUCATIONAL_AND_TEXTBOOKS', description: 'Educational and textbooks' },
      { value: 'ELECTRIC_RAZOR_STORES', description: 'Electric Razor Stores' },
      {
        value: 'ELECTRICAL_AND_SMALL_APPLIANCE_REPAIR',
        description: 'Electrical and small appliance repair',
      },
      { value: 'ELECTRICAL_CONTRACTORS', description: 'Electrical Contractors' },
      { value: 'ELECTRICAL_PARTS_AND_EQUIPMENT', description: 'Electrical Parts and Equipment' },
      { value: 'ELECTRONIC_CASH', description: 'Electronic Cash' },
      {
        value: 'ELEMENTARY_AND_SECONDARY_SCHOOLS',
        description: 'Elementary and secondary schools',
      },
      { value: 'EMPLOYMENT', description: 'Employment' },
      { value: 'ENTERTAINERS', description: 'Entertainers' },
      { value: 'ENTERTAINMENT_AND_MEDIA', description: 'Entertainment and media' },
      {
        value: 'EQUIP_TOOL_FURNITURE_AND_APPLIANCE_RENTAL_AND_LEASING',
        description: 'Equip, Tool, Furniture, And Appliance Rental And Leasing',
      },
      { value: 'ESCROW', description: 'Escrow' },
      { value: 'EVENT_AND_WEDDING_PLANNING', description: 'Event & Wedding Planning' },
      { value: 'EXERCISE_AND_FITNESS', description: 'Exercise and fitness' },
      { value: 'EXERCISE_EQUIPMENT', description: 'Exercise Equipment' },
      {
        value: 'EXTERMINATING_AND_DISINFECTING_SERVICES',
        description: 'Exterminating and disinfecting services',
      },
      { value: 'FABRICS_AND_SEWING', description: 'Fabrics & Sewing' },
      { value: 'FAMILY_CLOTHING_STORES', description: 'Family Clothing Stores' },
      { value: 'FASHION_JEWELRY', description: 'Fashion jewelry' },
      { value: 'FAST_FOOD_RESTAURANTS', description: 'Fast Food Restaurants' },
      { value: 'FICTION_AND_NONFICTION', description: 'Fiction and nonfiction' },
      { value: 'FINANCE_COMPANY', description: 'Finance company' },
      { value: 'FINANCIAL_AND_INVESTMENT_ADVICE', description: 'Financial and investment advice' },
      {
        value: 'FINANCIAL_INSTITUTIONS_MERCHANDISE_AND_SERVICES',
        description: 'Financial Institutions - Merchandise And Services',
      },
      { value: 'FIREARM_ACCESSORIES', description: 'Firearm accessories' },
      { value: 'FIREARMS_WEAPONS_AND_KNIVES', description: 'Firearms, Weapons and Knives' },
      { value: 'FIREPLACE_AND_FIREPLACE_SCREENS', description: 'Fireplace, and fireplace screens' },
      { value: 'FIREWORKS', description: 'Fireworks' },
      { value: 'FISHING', description: 'Fishing' },
      { value: 'FLORISTS', description: 'Florists' },
      { value: 'FLOWERS', description: 'Flowers' },
      { value: 'FOOD_DRINK_AND_NUTRITION', description: 'Food, Drink & Nutrition' },
      { value: 'FOOD_PRODUCTS', description: 'Food Products' },
      { value: 'FOOD_RETAIL_AND_SERVICE', description: 'Food retail and service' },
      { value: 'FRAGRANCES_AND_PERFUMES', description: 'Fragrances and perfumes' },
      {
        value: 'FREEZER_AND_LOCKER_MEAT_PROVISIONERS',
        description: 'Freezer and Locker Meat Provisioners',
      },
      {
        value: 'FUEL_DEALERS_FUEL_OIL_WOOD_AND_COAL',
        description: 'Fuel Dealers-Fuel Oil, Wood & Coal',
      },
      { value: 'FUEL_DEALERS_NON_AUTOMOTIVE', description: 'Fuel Dealers - Non Automotive' },
      { value: 'FUNERAL_SERVICES_AND_CREMATORIES', description: 'Funeral Services & Crematories' },
      { value: 'FURNISHING_AND_DECORATING', description: 'Furnishing & Decorating' },
      { value: 'FURNITURE', description: 'Furniture' },
      { value: 'FURRIERS_AND_FUR_SHOPS', description: 'Furriers and Fur Shops' },
      { value: 'GADGETS_AND_OTHER_ELECTRONICS', description: 'Gadgets & other electronics' },
      { value: 'GAMBLING', description: 'Gambling' },
      { value: 'GAME_SOFTWARE', description: 'Game Software' },
      { value: 'GAMES', description: 'Games' },
      { value: 'GARDEN_SUPPLIES', description: 'Garden supplies' },
      { value: 'GENERAL', description: 'General' },
      { value: 'GENERAL_CONTRACTORS', description: 'General contractors' },
      { value: 'GENERAL_GOVERNMENT', description: 'General - Government' },
      { value: 'GENERAL_SOFTWARE', description: 'General - Software' },
      { value: 'GENERAL_TELECOM', description: 'General - Telecom' },
      { value: 'GIFTS_AND_FLOWERS', description: 'Gifts and flowers' },
      {
        value: 'GLASS_PAINT_AND_WALLPAPER_STORES',
        description: 'Glass,Paint,And Wallpaper Stores',
      },
      { value: 'GLASSWARE_CRYSTAL_STORES', description: 'Glassware, Crystal Stores' },
      { value: 'GOVERNMENT', description: 'Government' },
      { value: 'GOVERNMENT_IDS_AND_LICENSES', description: 'Government IDs and Licenses' },
      {
        value: 'GOVERNMENT_LICENSED_ON_LINE_CASINOS_ON_LINE_GAMBLING',
        description: 'Government Licensed On-Line Casinos - On-Line Gambling',
      },
      { value: 'GOVERNMENT_OWNED_LOTTERIES', description: 'Government-Owned Lotteries' },
      { value: 'GOVERNMENT_SERVICES', description: 'Government services' },
      { value: 'GRAPHIC_AND_COMMERCIAL_DESIGN', description: 'Graphic & Commercial Design' },
      { value: 'GREETING_CARDS', description: 'Greeting Cards' },
      { value: 'GROCERY_STORES_AND_SUPERMARKETS', description: 'Grocery Stores & Supermarkets' },
      { value: 'HARDWARE_AND_TOOLS', description: 'Hardware & Tools' },
      {
        value: 'HARDWARE_EQUIPMENT_AND_SUPPLIES',
        description: 'Hardware, Equipment, and Supplies',
      },
      {
        value: 'HAZARDOUS_RESTRICTED_AND_PERISHABLE_ITEMS',
        description: 'Hazardous, Restricted and Perishable Items',
      },
      { value: 'HEALTH_AND_BEAUTY_SPAS', description: 'Health and beauty spas' },
      { value: 'HEALTH_AND_NUTRITION', description: 'Health & Nutrition' },
      { value: 'HEALTH_AND_PERSONAL_CARE', description: 'Health and personal care' },
      { value: 'HEARING_AIDS_SALES_AND_SUPPLIES', description: 'Hearing Aids Sales and Supplies' },
      { value: 'HEATING_PLUMBING_AC', description: 'Heating, Plumbing, AC' },
      { value: 'HIGH_RISK_MERCHANT', description: 'High Risk Merchant' },
      { value: 'HIRING_SERVICES', description: 'Hiring services' },
      { value: 'HOBBIES_TOYS_AND_GAMES', description: 'Hobbies, Toys & Games' },
      { value: 'HOME_AND_GARDEN', description: 'Home and garden' },
      { value: 'HOME_AUDIO', description: 'Home Audio' },
      { value: 'HOME_DECOR', description: 'Home decor' },
      { value: 'HOME_ELECTRONICS', description: 'Home Electronics' },
      { value: 'HOSPITALS', description: 'Hospitals' },
      { value: 'HOTELS_MOTELS_INNS_RESORTS', description: 'Hotels/Motels/Inns/Resorts' },
      { value: 'HOUSEWARES', description: 'Housewares' },
      { value: 'HUMAN_PARTS_AND_REMAINS', description: 'Human Parts and Remains' },
      { value: 'HUMOROUS_GIFTS_AND_NOVELTIES', description: 'Humorous Gifts & Novelties' },
      { value: 'HUNTING', description: 'Hunting' },
      { value: 'IDS_LICENSES_AND_PASSPORTS', description: 'IDs, licenses, and passports' },
      { value: 'ILLEGAL_DRUGS_AND_PARAPHERNALIA', description: 'Illegal Drugs & Paraphernalia' },
      { value: 'INDUSTRIAL', description: 'Industrial' },
      {
        value: 'INDUSTRIAL_AND_MANUFACTURING_SUPPLIES',
        description: 'Industrial and manufacturing supplies',
      },
      { value: 'INSURANCE_AUTO_AND_HOME', description: 'Insurance - auto and home' },
      { value: 'INSURANCE_DIRECT', description: 'Insurance - Direct' },
      { value: 'INSURANCE_LIFE_AND_ANNUITY', description: 'Insurance - life and annuity' },
      { value: 'INSURANCE_SALES_UNDERWRITING', description: 'Insurance Sales/Underwriting' },
      { value: 'INSURANCE_UNDERWRITING_PREMIUMS', description: 'Insurance Underwriting, Premiums' },
      { value: 'INTERNET_AND_NETWORK_SERVICES', description: 'Internet & Network Services' },
      { value: 'INTRA_COMPANY_PURCHASES', description: 'Intra-Company Purchases' },
      { value: 'LABORATORIES_DENTAL_MEDICAL', description: 'Laboratories-Dental/Medical' },
      { value: 'LANDSCAPING', description: 'Landscaping' },
      {
        value: 'LANDSCAPING_AND_HORTICULTURAL_SERVICES',
        description: 'Landscaping And Horticultural Services',
      },
      { value: 'LAUNDRY_CLEANING_SERVICES', description: 'Laundry, Cleaning Services' },
      { value: 'LEGAL', description: 'Legal' },
      { value: 'LEGAL_SERVICES_AND_ATTORNEYS', description: 'Legal services and attorneys' },
      { value: 'LOCAL_DELIVERY_SERVICE', description: 'Local delivery service' },
      { value: 'LOCKSMITH', description: 'Locksmith' },
      { value: 'LODGING_AND_ACCOMMODATIONS', description: 'Lodging and accommodations' },
      { value: 'LOTTERY_AND_CONTESTS', description: 'Lottery and contests' },
      { value: 'LUGGAGE_AND_LEATHER_GOODS', description: 'Luggage and leather goods' },
      { value: 'LUMBER_AND_BUILDING_MATERIALS', description: 'Lumber & Building Materials' },
      { value: 'MAGAZINES', description: 'Magazines' },
      { value: 'MAINTENANCE_AND_REPAIR_SERVICES', description: 'Maintenance and repair services' },
      { value: 'MAKEUP_AND_COSMETICS', description: 'Makeup and cosmetics' },
      { value: 'MANUAL_CASH_DISBURSEMENTS', description: 'Manual Cash Disbursements' },
      { value: 'MASSAGE_PARLORS', description: 'Massage Parlors' },
      { value: 'MEDICAL', description: 'Medical' },
      { value: 'MEDICAL_AND_PHARMACEUTICAL', description: 'Medical & Pharmaceutical' },
      { value: 'MEDICAL_CARE', description: 'Medical care' },
      { value: 'MEDICAL_EQUIPMENT_AND_SUPPLIES', description: 'Medical equipment and supplies' },
      { value: 'MEDICAL_SERVICES', description: 'Medical Services' },
      { value: 'MEETING_PLANNERS', description: 'Meeting Planners' },
      {
        value: 'MEMBERSHIP_CLUBS_AND_ORGANIZATIONS',
        description: 'Membership clubs and organizations',
      },
      { value: 'MEMBERSHIP_COUNTRY_CLUBS_GOLF', description: 'Membership/Country Clubs/Golf' },
      { value: 'MEMORABILIA', description: 'Memorabilia' },
      {
        value: 'MEN_AND_BOY_CLOTHING_AND_ACCESSORY_STORES',
        description: "Men's And Boy's Clothing And Accessory Stores",
      },
      { value: 'MEN_CLOTHING', description: "Men's Clothing" },
      { value: 'MERCHANDISE', description: 'Merchandise' },
      { value: 'METAPHYSICAL', description: 'Metaphysical' },
      { value: 'MILITARIA', description: 'Militaria' },
      {
        value: 'MILITARY_AND_CIVIL_SERVICE_UNIFORMS',
        description: 'Military and civil service uniforms',
      },
      {
        value: 'MISC._AUTOMOTIVE_AIRCRAFT_AND_FARM_EQUIPMENT_DEALERS',
        description: 'Misc. Automotive,Aircraft,And Farm Equipment Dealers',
      },
      { value: 'MISC._GENERAL_MERCHANDISE', description: 'Misc. General Merchandise' },
      { value: 'MISCELLANEOUS_GENERAL_SERVICES', description: 'Miscellaneous General Services' },
      {
        value: 'MISCELLANEOUS_REPAIR_SHOPS_AND_RELATED_SERVICES',
        description: 'Miscellaneous Repair Shops And Related Services',
      },
      { value: 'MODEL_KITS', description: 'Model Kits' },
      {
        value: 'MONEY_TRANSFER_MEMBER_FINANCIAL_INSTITUTION',
        description: 'Money Transfer - Member Financial Institution',
      },
      { value: 'MONEY_TRANSFER_MERCHANT', description: 'Money Transfer--Merchant' },
      { value: 'MOTION_PICTURE_THEATERS', description: 'Motion Picture Theaters' },
      {
        value: 'MOTOR_FREIGHT_CARRIERS_AND_TRUCKING',
        description: 'Motor Freight Carriers & Trucking',
      },
      {
        value: 'MOTOR_HOME_AND_RECREATIONAL_VEHICLE_RENTAL',
        description: 'Motor Home And Recreational Vehicle Rental',
      },
      { value: 'MOTOR_HOMES_DEALERS', description: 'Motor Homes Dealers' },
      {
        value: 'MOTOR_VEHICLE_SUPPLIES_AND_NEW_PARTS',
        description: 'Motor Vehicle Supplies and New Parts',
      },
      { value: 'MOTORCYCLE_DEALERS', description: 'Motorcycle Dealers' },
      { value: 'MOTORCYCLES', description: 'Motorcycles' },
      { value: 'MOVIE', description: 'Movie' },
      { value: 'MOVIE_TICKETS', description: 'Movie tickets' },
      { value: 'MOVING_AND_STORAGE', description: 'Moving and storage' },
      { value: 'MULTI_LEVEL_MARKETING', description: 'Multi-level marketing' },
      { value: 'MUSIC_CDS_CASSETTES_AND_ALBUMS', description: 'Music - CDs, cassettes and albums' },
      {
        value: 'MUSIC_STORE_INSTRUMENTS_AND_SHEET_MUSIC',
        description: 'Music store - instruments and sheet music',
      },
      { value: 'NETWORKING', description: 'Networking' },
      { value: 'NEW_AGE', description: 'New Age' },
      {
        value: 'NEW_PARTS_AND_SUPPLIES_MOTOR_VEHICLE',
        description: 'New parts and supplies - motor vehicle',
      },
      { value: 'NEWS_DEALERS_AND_NEWSTANDS', description: 'News Dealers and Newstands' },
      { value: 'NON_DURABLE_GOODS', description: 'Non-durable goods' },
      { value: 'NON_FICTION', description: 'Non-Fiction' },
      {
        value: 'NON_PROFIT_POLITICAL_AND_RELIGION',
        description: 'Non-Profit, Political & Religion',
      },
      { value: 'NONPROFIT', description: 'Nonprofit' },
      { value: 'NOVELTIES', description: 'Novelties' },
      { value: 'OEM_SOFTWARE', description: 'Oem Software' },
      { value: 'OFFICE_SUPPLIES_AND_EQUIPMENT', description: 'Office Supplies and Equipment' },
      { value: 'ONLINE_DATING', description: 'Online Dating' },
      { value: 'ONLINE_GAMING', description: 'Online gaming' },
      { value: 'ONLINE_GAMING_CURRENCY', description: 'Online gaming currency' },
      { value: 'ONLINE_SERVICES', description: 'online services' },
      { value: 'OOUTBOUND_TELEMARKETING_MERCH', description: 'Ooutbound Telemarketing Merch' },
      { value: 'OPHTHALMOLOGISTS_OPTOMETRIST', description: 'Ophthalmologists/Optometrist' },
      { value: 'OPTICIANS_AND_DISPENSING', description: 'Opticians And Dispensing' },
      { value: 'ORTHOPEDIC_GOODS_PROSTHETICS', description: 'Orthopedic Goods/Prosthetics' },
      { value: 'OSTEOPATHS', description: 'Osteopaths' },
      { value: 'OTHER', description: 'Other' },
      { value: 'PACKAGE_TOUR_OPERATORS', description: 'Package Tour Operators' },
      { value: 'PAINTBALL', description: 'Paintball' },
      { value: 'PAINTS_VARNISHES_AND_SUPPLIES', description: 'Paints, Varnishes, and Supplies' },
      { value: 'PARKING_LOTS_AND_GARAGES', description: 'Parking Lots & Garages' },
      { value: 'PARTS_AND_ACCESSORIES', description: 'Parts and accessories' },
      { value: 'PAWN_SHOPS', description: 'Pawn Shops' },
      { value: 'PAYCHECK_LENDER_OR_CASH_ADVANCE', description: 'Paycheck lender or cash advance' },
      { value: 'PERIPHERALS', description: 'Peripherals' },
      { value: 'PERSONALIZED_GIFTS', description: 'Personalized Gifts' },
      {
        value: 'PET_SHOPS_PET_FOOD_AND_SUPPLIES',
        description: 'Pet shops, pet food, and supplies',
      },
      {
        value: 'PETROLEUM_AND_PETROLEUM_PRODUCTS',
        description: 'Petroleum and Petroleum Products',
      },
      { value: 'PETS_AND_ANIMALS', description: 'Pets and animals' },
      {
        value: 'PHOTOFINISHING_LABORATORIES_PHOTO_DEVELOPING',
        description: 'Photofinishing Laboratories,Photo Developing',
      },
      { value: 'PHOTOGRAPHIC_STUDIOS_PORTRAITS', description: 'Photographic studios - portraits' },
      { value: 'PHOTOGRAPHY', description: 'Photography' },
      { value: 'PHYSICAL_GOOD', description: 'Physical Good' },
      { value: 'PICTURE_VIDEO_PRODUCTION', description: 'Picture/Video Production' },
      {
        value: 'PIECE_GOODS_NOTIONS_AND_OTHER_DRY_GOODS',
        description: 'Piece Goods Notions and Other Dry Goods',
      },
      { value: 'PLANTS_AND_SEEDS', description: 'Plants and Seeds' },
      {
        value: 'PLUMBING_AND_HEATING_EQUIPMENTS_AND_SUPPLIES',
        description: 'Plumbing & Heating Equipments & Supplies',
      },
      { value: 'POLICE_RELATED_ITEMS', description: 'Police-Related Items' },
      { value: 'POLITICAL_ORGANIZATIONS', description: 'Politcal Organizations' },
      {
        value: 'POSTAL_SERVICES_GOVERNMENT_ONLY',
        description: 'Postal Services - Government Only',
      },
      { value: 'POSTERS', description: 'Posters' },
      { value: 'PREPAID_AND_STORED_VALUE_CARDS', description: 'Prepaid and stored value cards' },
      { value: 'PRESCRIPTION_DRUGS', description: 'Prescription Drugs' },
      { value: 'PROMOTIONAL_ITEMS', description: 'Promotional Items' },
      { value: 'PUBLIC_WAREHOUSING_AND_STORAGE', description: 'Public Warehousing and Storage' },
      { value: 'PUBLISHING_AND_PRINTING', description: 'Publishing and printing' },
      { value: 'PUBLISHING_SERVICES', description: 'Publishing Services' },
      { value: 'RADAR_DECTORS', description: 'Radar Dectors' },
      {
        value: 'RADIO_TELEVISION_AND_STEREO_REPAIR',
        description: 'Radio, television, and stereo repair',
      },
      { value: 'REAL_ESTATE', description: 'Real Estate' },
      { value: 'REAL_ESTATE_AGENT', description: 'Real estate agent' },
      {
        value: 'REAL_ESTATE_AGENTS_AND_MANAGERS_RENTALS',
        description: 'Real Estate Agents And Managers - Rentals',
      },
      {
        value: 'RELIGION_AND_SPIRITUALITY_FOR_PROFIT',
        description: 'Religion and spirituality for profit',
      },
      { value: 'RELIGIOUS', description: 'Religious' },
      { value: 'RELIGIOUS_ORGANIZATIONS', description: 'Religious Organizations' },
      { value: 'REMITTANCE', description: 'Remittance' },
      { value: 'RENTAL_PROPERTY_MANAGEMENT', description: 'Rental property management' },
      { value: 'RESIDENTIAL', description: 'Residential' },
      { value: 'RETAIL', description: 'Retail' },
      {
        value: 'RETAIL_FINE_JEWELRY_AND_WATCHES',
        description: 'Retail - fine jewelry and watches',
      },
      {
        value: 'REUPHOLSTERY_AND_FURNITURE_REPAIR',
        description: 'Reupholstery and furniture repair',
      },
      { value: 'RINGS', description: 'Rings' },
      { value: 'ROOFING_SIDING_SHEET_METAL', description: 'Roofing/Siding, Sheet Metal' },
      { value: 'RUGS_AND_CARPETS', description: 'Rugs & Carpets' },
      { value: 'SCHOOLS_AND_COLLEGES', description: 'Schools and Colleges' },
      { value: 'SCIENCE_FICTION', description: 'Science Fiction' },
      { value: 'SCRAPBOOKING', description: 'Scrapbooking' },
      { value: 'SCULPTURES', description: 'Sculptures' },
      { value: 'SECURITIES_BROKERS_AND_DEALERS', description: 'Securities - Brokers And Dealers' },
      { value: 'SECURITY_AND_SURVEILLANCE', description: 'Security and surveillance' },
      {
        value: 'SECURITY_AND_SURVEILLANCE_EQUIPMENT',
        description: 'Security and surveillance equipment',
      },
      { value: 'SECURITY_BROKERS_AND_DEALERS', description: 'Security brokers and dealers' },
      { value: 'SEMINARS', description: 'Seminars' },
      { value: 'SERVICE_STATIONS', description: 'Service Stations' },
      { value: 'SERVICES', description: 'Services' },
      {
        value: 'SEWING_NEEDLEWORK_FABRIC_AND_PIECE_GOODS_STORES',
        description: 'Sewing,Needlework,Fabric And Piece Goods Stores',
      },
      { value: 'SHIPPING_AND_PACKING', description: 'Shipping & Packaging' },
      { value: 'SHOE_REPAIR_HAT_CLEANING', description: 'Shoe Repair/Hat Cleaning' },
      { value: 'SHOE_STORES', description: 'Shoe Stores' },
      { value: 'SHOES', description: 'Shoes' },
      { value: 'SNOWMOBILE_DEALERS', description: 'Snowmobile Dealers' },
      { value: 'SOFTWARE', description: 'Software' },
      { value: 'SPECIALTY_AND_MISC._FOOD_STORES', description: 'Specialty and misc. food stores' },
      {
        value: 'SPECIALTY_CLEANING_POLISHING_AND_SANITATION_PREPARATIONS',
        description: 'Specialty Cleaning, Polishing And Sanitation Preparations',
      },
      { value: 'SPECIALTY_OR_RARE_PETS', description: 'Specialty or rare pets' },
      { value: 'SPORT_GAMES_AND_TOYS', description: 'Sport games and toys' },
      { value: 'SPORTING_AND_RECREATIONAL_CAMPS', description: 'Sporting And Recreational Camps' },
      { value: 'SPORTING_GOODS', description: 'Sporting Goods' },
      { value: 'SPORTS_AND_OUTDOORS', description: 'Sports and outdoors' },
      { value: 'SPORTS_AND_RECREATION', description: 'Sports & Recreation' },
      { value: 'STAMP_AND_COIN', description: 'Stamp and coin' },
      {
        value: 'STATIONARY_PRINTING_AND_WRITING_PAPER',
        description: 'Stationary, printing, and writing paper',
      },
      {
        value: 'STENOGRAPHIC_AND_SECRETARIAL_SUPPORT_SERVICES',
        description: 'Stenographic and secretarial support services',
      },
      {
        value: 'STOCKS_BONDS_SECURITIES_AND_RELATED_CERTIFICATES',
        description: 'Stocks, Bonds, Securities and Related Certificates',
      },
      { value: 'STORED_VALUE_CARDS', description: 'Stored Value Cards' },
      { value: 'SUPPLIES', description: 'Supplies' },
      { value: 'SUPPLIES_AND_TOYS', description: 'Supplies & Toys' },
      { value: 'SURVEILLANCE_EQUIPMENT', description: 'Surveillance Equipment' },
      { value: 'SWIMMING_POOLS_AND_SPAS', description: 'Swimming Pools & Spas' },
      {
        value: 'SWIMMING_POOLS_SALES_SUPPLIES_SERVICES',
        description: 'Swimming Pools-Sales,Supplies,Services',
      },
      { value: 'TAILORS_AND_ALTERATIONS', description: 'Tailors and alterations' },
      { value: 'TAX_PAYMENTS', description: 'Tax Payments' },
      {
        value: 'TAX_PAYMENTS_GOVERNMENT_AGENCIES',
        description: 'Tax Payments - Government Agencies',
      },
      { value: 'TAXICABS_AND_LIMOUSINES', description: 'Taxicabs and limousines' },
      { value: 'TELECOMMUNICATION_SERVICES', description: 'Telecommunication Services' },
      { value: 'TELEPHONE_CARDS', description: 'Telephone Cards' },
      { value: 'TELEPHONE_EQUIPMENT', description: 'Telephone Equipment' },
      { value: 'TELEPHONE_SERVICES', description: 'Telephone Services' },
      { value: 'THEATER', description: 'Theater' },
      { value: 'TIRE_RETREADING_AND_REPAIR', description: 'Tire Retreading and Repair' },
      { value: 'TOLL_OR_BRIDGE_FEES', description: 'Toll or Bridge Fees' },
      { value: 'TOOLS_AND_EQUIPMENT', description: 'Tools and equipment' },
      {
        value: 'TOURIST_ATTRACTIONS_AND_EXHIBITS',
        description: 'Tourist Attractions And Exhibits',
      },
      { value: 'TOWING_SERVICE', description: 'Towing service' },
      { value: 'TOYS_AND_GAMES', description: 'Toys and games' },
      { value: 'TRADE_AND_VOCATIONAL_SCHOOLS', description: 'Trade And Vocational Schools' },
      { value: 'TRADEMARK_INFRINGEMENT', description: 'Trademark Infringement' },
      { value: 'TRAILER_PARKS_AND_CAMPGROUNDS', description: 'Trailer Parks And Campgrounds' },
      { value: 'TRAINING_SERVICES', description: 'Training services' },
      { value: 'TRANSPORTATION_SERVICES', description: 'Transportation Services' },
      { value: 'TRAVEL', description: 'Travel' },
      {
        value: 'TRUCK_AND_UTILITY_TRAILER_RENTALS',
        description: 'Truck And Utility Trailer Rentals',
      },
      { value: 'TRUCK_STOP', description: 'Truck Stop' },
      {
        value: 'TYPESETTING_PLATE_MAKING_AND_RELATED_SERVICES',
        description: 'Typesetting, Plate Making, and Related Services',
      },
      {
        value: 'USED_MERCHANDISE_AND_SECONDHAND_STORES',
        description: 'Used Merchandise And Secondhand Stores',
      },
      { value: 'USED_PARTS_MOTOR_VEHICLE', description: 'Used parts - motor vehicle' },
      { value: 'UTILITIES', description: 'Utilities' },
      {
        value: 'UTILITIES_ELECTRIC_GAS_WATER_SANITARY',
        description: 'Utilities - Electric,Gas,Water,Sanitary',
      },
      { value: 'VARIETY_STORES', description: 'Variety Stores' },
      { value: 'VEHICLE_SALES', description: 'Vehicle sales' },
      { value: 'VEHICLE_SERVICE_AND_ACCESSORIES', description: 'Vehicle service and accessories' },
      { value: 'VIDEO_EQUIPMENT', description: 'Video Equipment' },
      { value: 'VIDEO_GAME_ARCADES_ESTABLISH', description: 'Video Game Arcades/Establish' },
      { value: 'VIDEO_GAMES_AND_SYSTEMS', description: 'Video Games & Systems' },
      { value: 'VIDEO_TAPE_RENTAL_STORES', description: 'Video Tape Rental Stores' },
      {
        value: 'VINTAGE_AND_COLLECTIBLE_VEHICLES',
        description: 'Vintage and Collectible Vehicles',
      },
      { value: 'VINTAGE_AND_COLLECTIBLES', description: 'Vintage and collectibles' },
      { value: 'VITAMINS_AND_SUPPLEMENTS', description: 'Vitamins & Supplements' },
      { value: 'VOCATIONAL_AND_TRADE_SCHOOLS', description: 'Vocational and trade schools' },
      { value: 'WATCH_CLOCK_AND_JEWELRY_REPAIR', description: 'Watch, clock, and jewelry repair' },
      { value: 'WEB_HOSTING_AND_DESIGN', description: 'Web hosting and design' },
      { value: 'WELDING_REPAIR', description: 'Welding Repair' },
      { value: 'WHOLESALE_CLUBS', description: 'Wholesale Clubs' },
      { value: 'WHOLESALE_FLORIST_SUPPLIERS', description: 'Wholesale Florist Suppliers' },
      { value: 'WHOLESALE_PRESCRIPTION_DRUGS', description: 'Wholesale Prescription Drugs' },
      { value: 'WILDLIFE_PRODUCTS', description: 'Wildlife Products' },
      { value: 'WIRE_TRANSFER', description: 'Wire Transfer' },
      { value: 'WIRE_TRANSFER_AND_MONEY_ORDER', description: 'Wire transfer and money order' },
      { value: 'WOMEN_ACCESSORY_SPECIALITY', description: "Women's Accessory/Speciality" },
      { value: 'WOMEN_CLOTHING', description: "Women's clothing" },
    ],
  })
  .openapi('ProductCategory')

const ProductSchema = z
  .object({
    id: z
      .string()
      .min(6)
      .max(50)
      .exactOptional()
      .openapi({ description: 'The ID of the product.' }),
    name: z.string().min(1).max(127).exactOptional().openapi({ description: 'The product name.' }),
    description: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'The product description.' }),
    type: z
      .enum(['PHYSICAL', 'DIGITAL', 'SERVICE'])
      .default('PHYSICAL')
      .exactOptional()
      .openapi({
        description:
          'The product type. Indicates whether the product is physical or digital goods, or a service.',
        'x-enumDescriptions': [
          { value: 'PHYSICAL', description: 'Physical goods' },
          {
            value: 'DIGITAL',
            description:
              'For digital goods, the value must be set to DIGITAL to get the best rates. For more details, please contact your account manager.',
          },
          {
            value: 'SERVICE',
            description: 'Product representing a service. Example: Tech Support',
          },
        ],
      }),
    category: ProductCategorySchema.exactOptional(),
    image_url: z
      .url()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The image URL for the product.' }),
    home_url: z
      .url()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The home page URL for the product.' }),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the product was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    update_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the product was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Product Details', description: 'The product details.', required: [] })
  .openapi('Product')

const ProductCollectionElementSchema = z
  .object({
    id: z
      .string()
      .min(6)
      .max(50)
      .exactOptional()
      .openapi({ description: 'The ID of the product.', readOnly: true }),
    name: z.string().min(1).max(127).exactOptional().openapi({ description: 'The product name.' }),
    description: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'The product description.' }),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the product was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Product Element',
    description: 'The details for a product in the collection response.',
    required: [],
  })
  .openapi('ProductCollectionElement')

const ProductCollectionElementListSchema = z
  .array(ProductCollectionElementSchema)
  .min(1)
  .max(32767)
  .openapi({ description: 'An array of products.' })
  .openapi('ProductCollectionElementList')

const ProductCollectionSchema = z
  .object({
    products: ProductCollectionElementListSchema.exactOptional(),
    total_items: z
      .int()
      .min(0)
      .max(500000000)
      .exactOptional()
      .openapi({ description: 'The total number of items.' }),
    total_pages: z
      .int()
      .min(0)
      .max(100000000)
      .exactOptional()
      .openapi({ description: 'The total number of pages.' }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Product Collection',
    description: 'The list of products, with details.',
    required: [],
  })
  .openapi('ProductCollection')

const ProductRequestPOSTSchema = z
  .object({
    id: z
      .string()
      .min(6)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The ID of the product. You can specify the SKU for the product. If you omit the ID, the system generates it. System-generated IDs have the `PROD-` prefix.',
      }),
    name: z.string().min(1).max(127).openapi({ description: 'The product name.' }),
    description: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'The product description.' }),
    type: z
      .enum(['PHYSICAL', 'DIGITAL', 'SERVICE'])
      .default('PHYSICAL')
      .openapi({
        description:
          'The product type. Indicates whether the product is physical or digital goods, or a service.',
        'x-enumDescriptions': [
          { value: 'PHYSICAL', description: 'Physical goods.' },
          {
            value: 'DIGITAL',
            description:
              'For digital goods, the value must be set to DIGITAL to get the best rates. For more details, please contact your account manager.',
          },
          { value: 'SERVICE', description: 'A service. For example, technical support.' },
        ],
      }),
    category: ProductCategorySchema.exactOptional(),
    image_url: z
      .url()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The image URL for the product.' }),
    home_url: z
      .url()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The home page URL for the product.' }),
  })
  .openapi({
    title: 'Create Product Request',
    description: 'The create product request details.',
    required: ['name', 'type'],
  })
  .openapi('ProductRequestPOST')

const ProductsCreate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('Input identifier must not use system prefix(PROD-).')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MIN_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too short.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MIN_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductsCreate_400')

const ProductsPatch_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('UNSUPPORTED_PATCH_OPERATION').exactOptional(),
              description: z
                .literal('The specified patch operation not supported for this field.')
                .exactOptional(),
            })
            .openapi({ title: 'UNSUPPORTED_PATCH_OPERATION', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PATCH_PATH').exactOptional(),
              description: z.literal('The specified field cannot be patched.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PATCH_PATH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductsPatch_400')

const ProductsPatch_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('DUPLICATE_RESOURCE_IDENTIFIER').exactOptional(),
              description: z.literal('Identifier must be unique.').exactOptional(),
            })
            .openapi({ title: 'DUPLICATE_RESOURCE_IDENTIFIER', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductsPatch_422')

const DefaultResponse = {
  description: 'The default response.',
  content: { 'application/json': { schema: ErrorDefaultSchema } },
}

const PreferParamsSchema = z
  .string()
  .default('return=minimal')
  .exactOptional()
  .openapi({
    param: {
      name: 'Prefer',
      in: 'header',
      description:
        'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
      required: false,
      schema: { type: 'string', default: 'return=minimal' },
    },
  })

const PaypalRequestIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Request-Id',
      in: 'header',
      description: 'The server stores keys for 72 hours.',
      required: false,
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
    z.int().min(1).max(20),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description: 'The number of items to return in the response.',
      schema: { type: 'integer', minimum: 1, maximum: 20, default: 10 },
      required: false,
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
    z.int().min(1).max(100000),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description:
        'A non-zero integer which is the start index of the entire list of items that are returned in the response. So, the combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.',
      schema: { type: 'integer', minimum: 1, maximum: 100000, default: 1 },
      required: false,
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
      description: 'Indicates whether to show the total items and total pages in the response.',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const ProductIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'product_id',
      in: 'path',
      required: true,
      description: 'The product ID.',
      schema: { type: 'string' },
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: { 'https://uri.paypal.com/services/subscriptions': 'Create and manage products' },
    },
  },
}

export const getV1CatalogsProductsRoute = createRoute({
  method: 'get',
  path: '/v1/catalogs/products',
  tags: ['products'],
  summary: 'List products',
  description: 'Lists products.',
  operationId: 'products.list',
  request: {
    query: z.object({
      page_size: PageSizeParamsSchema,
      page: PageParamsSchema,
      total_required: TotalRequiredParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists products with details.',
      content: { 'application/json': { schema: ProductCollectionSchema } },
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(_400Schema) } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1CatalogsProductsRoute = createRoute({
  method: 'post',
  path: '/v1/catalogs/products',
  tags: ['products'],
  summary: 'Create product',
  description: 'Creates a product.',
  operationId: 'products.create',
  request: {
    headers: z.object({
      Prefer: PreferParamsSchema,
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: ProductRequestPOSTSchema,
          examples: {
            product_request_POST: {
              value: {
                name: 'Video Streaming Service',
                description: 'Video streaming service',
                type: 'SERVICE',
                category: 'SOFTWARE',
                image_url: 'https://example.com/streaming.jpg',
                home_url: 'https://example.com/home',
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
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows product details.',
      content: { 'application/json': { schema: ProductSchema } },
    },
    201: {
      description:
        'A successful request returns the HTTP `201 Created` status code and a JSON response body that shows product details.',
      content: { 'application/json': { schema: ProductSchema } },
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(ProductsCreate_400Schema) } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: Error_422Schema.and(_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const getV1CatalogsProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/v1/catalogs/products/{product_id}',
  tags: ['products'],
  summary: 'Show product details',
  description: 'Shows details for a product, by ID.',
  operationId: 'products.get',
  request: { params: z.object({ product_id: ProductIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows product details.',
      content: { 'application/json': { schema: ProductSchema } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const patchV1CatalogsProductsProductIdRoute = createRoute({
  method: 'patch',
  path: '/v1/catalogs/products/{product_id}',
  tags: ['products'],
  summary: 'Update product',
  description:
    'Updates a product, by ID. You can patch these attributes and objects:<table><thead><tr><th>Attribute or object</th><th>Operations</th></tr></thead><tbody><tr><td><code>description</code></td><td>add, replace, remove</td></tr><tr><td><code>category</code></td><td>add, replace, remove</td></tr><tr><td><code>image_url</code></td><td>add, replace, remove</td></tr><tr><td><code>home_url</code></td><td>add, replace, remove</td></tr></tbody></table>',
  operationId: 'products.patch',
  request: {
    params: z.object({ product_id: ProductIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PatchRequestSchema,
          examples: {
            patch_request: {
              value: [
                { op: 'replace', path: '/description', value: 'Premium video streaming service' },
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
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(ProductsPatch_400Schema) } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: Error_422Schema.and(ProductsPatch_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})
