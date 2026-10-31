import { createRoute, z } from '@hono/zod-openapi'

const CountrySchema = z
  .object({ value: z.string() })
  .openapi({ example: { value: 'BR' }, required: ['value'], title: 'Country' })
  .openapi('Country')

const PostalCodeSchema = z
  .object({ value: z.string() })
  .openapi({ example: { value: '12345' }, required: ['value'], title: 'PostalCode' })
  .openapi('PostalCode')

const PublicSchema = z
  .object({ country: CountrySchema, postalCode: PostalCodeSchema })
  .openapi({
    example: { country: { value: 'BR' }, postalCode: { value: '12345' } },
    required: ['country', 'postalCode'],
    title: 'Public',
  })
  .openapi('Public')

const CreatenewsessionRequestSchema = z
  .object({ public: PublicSchema })
  .openapi({
    example: { public: { country: { value: 'BR' }, postalCode: { value: '12345' } } },
    required: ['public'],
    title: 'CreatenewsessionRequest',
  })
  .openapi('CreatenewsessionRequest')

const NewValueSchema = z
  .object({ value: z.string() })
  .openapi({ example: { value: 'patched' }, required: ['value'], title: 'NewValue' })
  .openapi('NewValue')

const Public1Schema = z
  .object({ newValue: NewValueSchema })
  .openapi({ example: { newValue: { value: 'patched' } }, required: ['newValue'], title: 'Public' })
  .openapi('Public1')

const EditsessionRequestSchema = z
  .object({ public: Public1Schema })
  .openapi({
    example: { public: { newValue: { value: 'patched' } } },
    required: ['public'],
    title: 'EditsessionRequest',
  })
  .openapi('EditsessionRequest')

const ModifysessiongettingspecificparametersRequestSchema = z
  .object({ public: PublicSchema })
  .openapi({
    example: { public: { country: { value: 'BR' }, postalCode: { value: '12345' } } },
    required: ['public'],
    title: 'ModifysessiongettingspecificparametersRequest',
  })
  .openapi('ModifysessiongettingspecificparametersRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getSegmentsRoute = createRoute({
  method: 'get',
  path: '/segments',
  tags: ['Segment'],
  summary: 'Get Segment',
  description:
    "You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.\n\r\n\rIf you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.",
  operationId: 'GetSegment',
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getSessionsRoute = createRoute({
  method: 'get',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Get Session',
  description:
    "Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.\n\r\n\r> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.\n\r\n\r> If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).",
  operationId: 'GetSession',
  request: {
    query: z.object({
      items: z
        .string()
        .openapi({
          param: {
            description:
              'Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`',
            explode: true,
            in: 'query',
            name: 'items',
            required: true,
            schema: { example: 'namespace1.key1,namespace2.key2', type: 'string' },
            style: 'form',
          },
          example: 'namespace1.key1,namespace2.key2',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postSessionsRoute = createRoute({
  method: 'post',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Create new session',
  description:
    "The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.\n\r\n\r> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.",
  operationId: 'Createnewsession',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CreatenewsessionRequestSchema,
          example: { public: { country: { value: 'BR' }, postalCode: { value: '12345' } } },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const patchSessionsRoute = createRoute({
  method: 'patch',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Edit session',
  description:
    "This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.\n\r\n\rAs with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.\n\r\n\r> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.",
  operationId: 'Editsession',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: EditsessionRequestSchema,
          example: { public: { newValue: { value: 'patched' } } },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})
