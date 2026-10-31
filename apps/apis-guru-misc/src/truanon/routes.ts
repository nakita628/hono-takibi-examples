import { createRoute, z } from '@hono/zod-openapi'

export const getApiGetProfileRoute = createRoute({
  method: 'get',
  path: '/api/get_profile',
  summary: 'Get Profile',
  description: 'get_profile Private API: Request confirmed profile data for your unique member ID',
  operationId: 'getProfile',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This is your unique username or member ID',
            in: 'query',
            name: 'id',
            schema: { example: '{{your-member-id}}', type: 'string' },
            required: false,
          },
          example: '{{your-member-id}}',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The service name given to you by TruAnon',
            in: 'query',
            name: 'service',
            schema: { example: '{{service-identifier}}', type: 'string' },
            required: false,
          },
          example: '{{service-identifier}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiRequestTokenRoute = createRoute({
  method: 'get',
  path: '/api/request_token',
  summary: 'Get Token',
  description:
    'request_token Private API: Request a Proof token to let the member confirm in a popup interface\n\n        {"id":"qjgblv72bzzio","type":"Proof","active":true,"name":"New Proof"}\n\nStep 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.\n    \n        https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio',
  operationId: 'getToken',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This is your unique username or member ID',
            in: 'query',
            name: 'id',
            schema: { example: '{{your-member-id}}', type: 'string' },
            required: false,
          },
          example: '{{your-member-id}}',
        }),
      service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The service name given to you by TruAnon',
            in: 'query',
            name: 'service',
            schema: { example: '{{service-identifier}}', type: 'string' },
            required: false,
          },
          example: '{{service-identifier}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})
