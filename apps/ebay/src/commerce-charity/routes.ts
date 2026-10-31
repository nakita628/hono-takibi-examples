import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city of the charitable organization.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard of the country of the address. For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum\'>eBay API documentation</a>',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the charitable organization.' }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state or province of the charitable organization.' }),
  })
  .openapi({ description: 'The physical location of the item.', required: [] })
  .openapi('Address')

const GeoCoordinatesSchema = z
  .object({
    latitude: z
      .number()
      .exactOptional()
      .openapi({ description: 'The latitude component of the geographic coordinate.' }),
    longitude: z
      .number()
      .exactOptional()
      .openapi({ description: 'The longitude component of the geographic coordinate.' }),
  })
  .openapi({ description: 'Defines the format of a geographic coordinate.', required: [] })
  .openapi('GeoCoordinates')

const LocationSchema = z
  .object({
    address: AddressSchema.exactOptional().openapi({
      description: 'The address of the charitable organization.',
    }),
    geoCoordinates: GeoCoordinatesSchema.exactOptional().openapi({
      description: 'The geo-coordinates of the charitable organization.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Location')

const ImageSchema = z
  .object({
    height: z.string().exactOptional().openapi({ description: 'The height of the logo image.' }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to the logo image location.' }),
    width: z.string().exactOptional().openapi({ description: 'The width of the logo image.' }),
  })
  .openapi({ description: 'The logo of the charitable organization.', required: [] })
  .openapi('Image')

const CharityOrgSchema = z
  .object({
    charityOrgId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the charitable organization.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the charitable organization.' }),
    location: LocationSchema.exactOptional().openapi({
      description: 'The location details of the charitable organization.',
    }),
    logoImage: ImageSchema.exactOptional().openapi({
      description: 'The logo of the charitable organization.',
    }),
    missionStatement: z
      .string()
      .exactOptional()
      .openapi({ description: 'The mission statement of the charitable organization.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the charitable organization.' }),
    registrationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The registration ID for the charitable organization.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> For the US marketplace, this is the EIN.</span>',
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to the website for the charitable organization.' }),
  })
  .openapi({
    description: 'The full location, ID, logo and other details of the charity organization.',
    required: [],
  })
  .openapi('CharityOrg')

const CharitySearchResponseSchema = z
  .object({
    charityOrgs: z
      .array(CharityOrgSchema)
      .exactOptional()
      .openapi({
        description: 'The list of charitable organizations that match the search criteria.',
      }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the current set of results.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the next set of results.' }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the previous set of results.' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of matches for the search criteria.' }),
  })
  .openapi({
    description: 'A single set of search results, with information for accessing other sets.',
    required: [],
  })
  .openapi('CharitySearchResponse')

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

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    clientCredentials: {
      scopes: { 'https://api.ebay.com/oauth/api_scope': 'View public data from eBay' },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getCharityOrgRoute = createRoute({
  method: 'get',
  path: '/charity_org',
  tags: ['charity_org'],
  description:
    'This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.',
  operationId: 'getCharityOrgs',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A query string that matches the keywords in name, mission statement, or description.',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      registration_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of charitable organization registration IDs.<br /><br /><span class="tablenote"><b>Note: </b>Do not specify this parameter for query-based searches. Specify either the <b>q</b> or <b>registration_ids</b> parameter, but not both.</span><br /><br /><b>Maximum Limit:</b> <code>20</code>',
            in: 'query',
            name: 'registration_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description:
              'A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CharitySearchResponseSchema } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})

export const getCharityOrgCharityOrgIdRoute = createRoute({
  method: 'get',
  path: '/charity_org/{charity_org_id}',
  tags: ['charity_org'],
  description:
    'This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.',
  operationId: 'getCharityOrg',
  request: {
    params: z.object({
      charity_org_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the charitable organization.',
            in: 'path',
            name: 'charity_org_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description:
              'A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CharityOrgSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})
