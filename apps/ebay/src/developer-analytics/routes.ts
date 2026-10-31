import { createRoute, z } from '@hono/zod-openapi'

const ErrorParameterSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The object of the error.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the object.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorParameter')

const ErrorSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'Identifies the type of erro.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the primary system where the error occurred. This is relevant for application errors.',
      }),
    errorId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'A unique number to identify the error.' }),
    inputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    longMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A more detailed explanation of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Information on how to correct the problem, in the end user's terms and language where applicable.",
      }),
    outputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    parameters: z
      .array(ErrorParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.',
      }),
  })
  .openapi({
    description: 'This type defines the fields that can be returned in an error.',
    required: [],
  })
  .openapi('Error')

const RateSchema = z
  .object({
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of requests that can be made to this resource during a set time period. The length of time to which the limit is applied is defined by the associated <b>timeWindow</b> value.  <br><br>This value is often referred to as the "call quota" for the resource.',
      }),
    remaining: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The remaining number of requests that can be made to this resource before the associated time window resets.',
      }),
    reset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data and time the time window and accumulated calls for this resource reset.  <br><br>When the <b>reset</b> time is reached, the <b>remaining</b> value is reset to the value of <b>limit</b>, and this <b>reset</b> value is reset to the current time plus the number of seconds defined by the <b>timeWindow</b> value. <br><br>The time stamp is formatted as an <a href="http://www.iso.org/iso/home/standards/iso8601.htm " target="_blank">ISO 8601</a> string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2018-08-04T07:09:00.000Z</code>',
      }),
    timeWindow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A period of time, expressed in seconds. The call quota for a resource is applied to the period of time defined by the value of this field.',
      }),
  })
  .openapi({
    description:
      'This complex type defines a "rate" as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).',
    required: [],
  })
  .openapi('Rate')

const ResourceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the resource (an API or an API method) to which the rate-limit data applies.',
      }),
    rates: z
      .array(RateSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of rate-limit data, where each list element represents the rate-limit data for a specific resource.',
      }),
  })
  .openapi({
    description:
      'This complex type defines the resource (API method) and the current rate-limit data for that resource.',
    required: [],
  })
  .openapi('Resource')

const RateLimitSchema = z
  .object({
    apiContext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The context of the API for which rate-limit data is returned. For example <code>buy</code>, <code>sell</code>, <code>commerce</code>, <code>developer</code> or <code>tradingapi</code>.',
      }),
    apiName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the API for which rate-limit data is returned. For example <code>browse</code> for the Buy API, <code>inventory</code> for the Sell API, <code>taxonomy</code> for the Commerce API, or <code>tradingapi</code> for Trading API.',
      }),
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the API for which rate-limit data is returned. For example <code>v1</code> or <code>v2</code>.',
      }),
    resources: z
      .array(ResourceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of the methods for which rate-limit data is returned. For example <code>item</code> for the Feed API, <code>getOrder</code> for the Fulfillment API, <code>getProduct</code> for the Catalog API, <code>AddItems</code> for the Trading API.',
      }),
  })
  .openapi({
    description:
      'This complex types defines the resource (such as an API method) for which the rate-limit data is returned.  <br><br>A method is included in an API, and an API is part of an API context for the API version specified.',
    required: [],
  })
  .openapi('RateLimit')

const RateLimitsResponseSchema = z
  .object({
    rateLimits: z
      .array(RateLimitSchema)
      .exactOptional()
      .openapi({
        description:
          'The rate-limit data for the specified APIs. The rate-limit data is returned for all the methods in the specified APIs and data pertains to the current time window.',
      }),
  })
  .openapi({
    description:
      'This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.',
    required: [],
  })
  .openapi('RateLimitsResponse')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.ebay.com/oauth2/authorize',
      scopes: {
        'https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly':
          ' This scope would allow signed in user to read catalog data.',
        'https://api.ebay.com/oauth/api_scope/sell.inventory':
          'View and manage your inventory and offers',
        'https://api.ebay.com/oauth/api_scope/sell.inventory.readonly':
          'View your inventory and offers',
        'https://api.ebay.com/oauth/api_scope/sell.marketing':
          'View and manage your eBay marketing activities, such as ad campaigns and listing promotions',
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly':
          'View your eBay marketing activities, such as ad campaigns and listing promotions',
        'https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly':
          ' This scope would allow signed in users read only access to marketplace insights.',
      },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
    clientCredentials: {
      scopes: { 'https://api.ebay.com/oauth/api_scope': 'View public data from eBay' },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getRateLimitIndexRoute = createRoute({
  method: 'get',
  path: '/rate_limit/',
  tags: ['rate_limit'],
  description:
    'This method retrieves the call limit and utilization data for an application. The data is retrieved for all RESTful APIs and the legacy Trading API.  <br><br>The response from <b>getRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful API and the legacy Trading API resources. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.',
  operationId: 'getRateLimits',
  request: {
    query: z.object({
      api_context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li><li><code>sell</code></li> <li><code>commerce</code></li><li><code>developer</code></li><li><code>tradingapi</code></li></ul>',
            in: 'query',
            name: 'api_context',
            required: false,
            schema: { type: 'string' },
          },
        }),
      api_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul> <li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>',
            in: 'query',
            name: 'api_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RateLimitsResponseSchema } },
    },
    204: { description: 'No Content' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getUserRateLimitIndexRoute = createRoute({
  method: 'get',
  path: '/user_rate_limit/',
  tags: ['user_rate_limit'],
  description:
    'This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and the legacy Trading API that limit calls on a per-user basis.  <br><br>The response from <b>getUserRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful APIs resources and the legacy Trading API calls that limit request access by user. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.',
  operationId: 'getUserRateLimits',
  request: {
    query: z.object({
      api_context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li> <li><code>sell</code></li> <li><code>commerce</code></li> <li><code>developer</code></li> <li><code>tradingapi</code></li></ul>',
            in: 'query',
            name: 'api_context',
            required: false,
            schema: { type: 'string' },
          },
        }),
      api_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul><li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>',
            in: 'query',
            name: 'api_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RateLimitsResponseSchema } },
    },
    204: { description: 'No Content' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.inventory',
        'https://api.ebay.com/oauth/api_scope/sell.inventory.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly',
        'https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly',
        'https://api.ebay.com/oauth/api_scope/sell.marketing',
        'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
      ],
    },
  ],
})
