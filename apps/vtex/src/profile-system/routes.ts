import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    administrativeAreaLevel1: z
      .string()
      .openapi({
        description: 'Name of administrative area, such as the state or province.',
        example: 'RJ',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Two letter country code.', example: 'BR' }),
    countryName: z
      .string()
      .openapi({ description: 'Name of the address country.', example: 'Brasil' }),
    locality: z
      .string()
      .openapi({ description: 'Name of address locality, such as the city.', example: 'Locality' }),
    localityAreaLevel1: z
      .string()
      .openapi({
        description: 'Name of the address locality area, such as the neighborhood or district.',
        example: 'Locality area',
      }),
    postalCode: z.string().openapi({ description: 'Address postal code.', example: '20200-000' }),
    route: z.string().openapi({ description: 'Address route or street name.', example: '51' }),
    streetNumber: z.string().openapi({ description: 'Address street number.', example: '999' }),
  })
  .openapi({
    required: [
      'postalCode',
      'countryName',
      'administrativeAreaLevel1',
      'locality',
      'localityAreaLevel1',
      'route',
      'streetNumber',
    ],
    title: 'Address',
  })
  .openapi('Address')

const ProfileSchema = z
  .object({
    birthDate: z
      .string()
      .exactOptional()
      .openapi({ description: "Client's birth date in ISO 8601 format.", example: '1925-11-17' }),
    document: z.string().openapi({ description: "Client's document.", example: '12345678900' }),
    documentType: z
      .string()
      .openapi({ description: 'Type of document informed in `document`.', example: 'CPF' }),
    email: z
      .string()
      .openapi({ description: "Client's email address.", example: 'john.doe@example.com' }),
    firstName: z.string().openapi({ description: "Client's first name.", example: 'John' }),
    lastName: z.string().openapi({ description: "Client's last name.", example: 'Doe' }),
  })
  .openapi({
    required: ['firstName', 'lastName', 'email', 'document', 'documentType'],
    title: 'Profile.',
  })
  .openapi('Profile')

const ProspectSchema = z.any().openapi('Prospect')

const SchemaSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description: "Schema's human readable description.",
        example: 'This schema describes a b2c customer profile.',
      }),
    documentTTL: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted.',
        example: 1825,
      }),
    properties: z
      .object({
        '{fieldName}': z
          .object({
            items: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing the type of the items if the field is an array. Typically, arrays will contain strings and will be used for fields such as `email`.',
                example: { type: 'string' },
              }),
            pii: z
              .boolean()
              .openapi({
                description: 'Indicates whether property is Personal Identifiable Information.',
                example: true,
              }),
            sensitive: z
              .boolean()
              .openapi({
                description: 'Indicates whether property is sensitive data.',
                example: true,
              }),
            type: z.string().openapi({ description: 'Schema property type.', example: 'string' }),
          })
          .exactOptional()
          .openapi({
            description: 'Schema of any given field described in the `properties` field.',
            required: ['type', 'sensitive', 'pii'],
          }),
      })
      .openapi({
        description:
          'Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and; `items.type` (if field is array).',
        required: [],
      }),
    required: z
      .array(z.string().openapi({ description: 'Key of a field that is rqeuired in the schema.' }))
      .openapi({
        description: 'Schema required fields.',
        example: ['firstName', 'lastName', 'email', 'document', 'documentType'],
      }),
    title: z.string().openapi({ description: 'Schema title.', example: 'Client profile schema' }),
    type: z.string().openapi({ description: 'Schema type.', example: 'object' }),
    'v-indexed': z
      .array(z.any())
      .exactOptional()
      .openapi({ description: '', example: ['email', 'document'] }),
    'v-unique': z
      .array(z.any())
      .exactOptional()
      .openapi({ description: '', example: ['email', 'document'] }),
    version: z.int().exactOptional().openapi({ description: 'Schema version.', example: 1 }),
  })
  .openapi({
    required: ['title', 'type', 'description', 'required', 'properties'],
    title: 'Schema',
  })
  .openapi('Schema')

const AcceptParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
      in: 'header',
      name: 'Accept',
      required: true,
      schema: { example: 'application/json', type: 'string' },
      style: 'simple',
    },
    example: 'application/json',
  })

const ContentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Type of the content being sent.',
      in: 'header',
      name: 'Content-Type',
      required: true,
      schema: { example: 'application/json', type: 'string' },
      style: 'simple',
    },
    example: 'application/json',
  })

const AddressIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        "ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.",
      in: 'path',
      name: 'addressId',
      required: true,
      schema: { example: 'bf82180e-cf9e-4089-9af6-ae1518555992', type: 'string' },
      style: 'simple',
    },
    example: 'bf82180e-cf9e-4089-9af6-ae1518555992',
  })

const AddressVersionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        "ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field.",
      in: 'path',
      name: 'addressVersionId',
      required: true,
      schema: { example: '86dfae79-1d23-43f2-a643-2fc8f1839461', type: 'string' },
      style: 'simple',
    },
    example: '86dfae79-1d23-43f2-a643-2fc8f1839461',
  })

const AlternativeKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.\n\r\n\r> Currently, there are two possible values for this parameter: `email` and `document`.',
      in: 'query',
      name: 'alternativeKey',
      required: false,
      schema: { example: 'email', type: 'string' },
      style: 'form',
    },
    example: 'email',
  })

const OnBehalfOfParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Identification of the unmasked information requester.',
      in: 'query',
      name: 'onBehalfOf',
      required: false,
      schema: { example: 'johndoe@store.com', type: 'string' },
      style: 'form',
    },
    example: 'johndoe@store.com',
  })

const ProfileIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        "ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.",
      in: 'path',
      name: 'profileId',
      required: true,
      schema: { example: '70caf394-8534-447e-a0ca-1803c669c771', type: 'string' },
      style: 'simple',
    },
    example: '70caf394-8534-447e-a0ca-1803c669c771',
  })

const ProfileVersionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        "ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field.",
      in: 'path',
      name: 'profileVersionId',
      required: true,
      schema: { example: '70caf394-8534-447e-a0ca-1803c669c771', type: 'string' },
      style: 'simple',
    },
    example: '70caf394-8534-447e-a0ca-1803c669c771',
  })

const ProspectIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        "ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.",
      in: 'path',
      name: 'prospectId',
      required: true,
      schema: { example: '51clk394-8534-447e-a0ca-1803p669c987', type: 'string' },
      style: 'simple',
    },
    example: '51clk394-8534-447e-a0ca-1803p669c987',
  })

const ReasonParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Reason for requesting unmasked data.',
      in: 'query',
      name: 'reason',
      required: true,
      schema: { example: 'data-validation', type: 'string' },
      style: 'form',
    },
    example: 'data-validation',
  })

const TtlParamsSchema = z
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
        'This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.\n\r\n\r> Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating.',
      in: 'query',
      name: 'ttl',
      required: false,
      schema: { example: 365, type: 'integer' },
      style: 'form',
    },
    example: 365,
  })

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiStorageProfileSystemProfilesRoute = createRoute({
  method: 'post',
  path: '/api/storage/profile-system/profiles',
  tags: ['Profiles'],
  summary: 'Create client profile',
  description:
    "Creates new client profile.\n\r\n\r> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.\n\r\n\r> The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
  operationId: 'CreateClientProfile',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ ttl: TtlParamsSchema }),
    body: { content: { 'application/json': { schema: ProfileSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            document: {
              birthDate: '1925-11-17',
              document: '12345678911',
              documentType: 'CPF',
              email: 'john.doe@example.com',
              firstName: 'John',
              lastName: 'Doe',
            },
            id: 'c2cbebba-214e-40b2-b68f-98f862e755d5',
            meta: {
              author: '82a2b53d-39be-4f49-bb7c-8971b58cb7dc',
              creationDate: '2022-01-05T15:41:37.5009471+00:00',
              lastUpdateDate: '2022-01-05T15:41:37.5009471+00:00',
              version: '27112371-a71b-45d6-b3bc-93436a3a0b4f',
            },
          },
        },
      },
    },
  },
})

export const putApiStorageProfileSystemProfilesSchemaRoute = createRoute({
  method: 'put',
  path: '/api/storage/profile-system/profiles/schema',
  tags: ['Schemas'],
  summary: 'Create or update profile schema',
  description:
    'Creates or updates profile schema.\n\r\n\r> Each account has one profile schema. Updating it with this request will substitute the previous version.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'CreateOrUpdateProfileSchema',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    body: { content: { 'application/json': { schema: SchemaSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}), example: {} } },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}',
  tags: ['Profiles'],
  summary: 'Get profile',
  description:
    "Retrieves the information of a specific client, by its `profileId`.\n\r\n\r> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.\n\r\n\r> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
  operationId: 'GetProfile',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.any()),
          example: [
            {
              document: {
                birthDate: '1925-11-17',
                document: '1**********',
                documentType: 'CPF',
                email: 'j***.d**@e******.c**',
                firstName: 'J***',
                lastName: 'D**',
              },
              id: '70caf394-8534-447e-a0ca-1803c669c771',
              meta: {
                author: 'e40e0b6d-0605-4fa6-8176-1d69fbaf0818',
                creationDate: '13/12/2021T00:00:00Z',
                lastUpdate: '13/12/2021T00:00:00Z',
                version: 'abc',
              },
            },
          ],
        },
      },
    },
  },
})

export const deleteApiStorageProfileSystemProfilesProfileIdRoute = createRoute({
  method: 'delete',
  path: '/api/storage/profile-system/profiles/{profileId}',
  tags: ['Profiles'],
  summary: 'Delete client profile',
  description:
    'Deletes a client profile by `profileId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'DeleteClientProfile',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
  },
  responses: { 204: { description: 'No content' } },
})

export const patchApiStorageProfileSystemProfilesProfileIdRoute = createRoute({
  method: 'patch',
  path: '/api/storage/profile-system/profiles/{profileId}',
  tags: ['Profiles'],
  summary: 'Updates client profile',
  description:
    "Updates one or more fields of an existing client profile.\n\r\n\r> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
  operationId: 'UpdateClientProfile',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema, ttl: TtlParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              birthDate: z.lazy(() => ProfileSchema).exactOptional(),
              document: z.lazy(() => ProfileSchema).exactOptional(),
              documentType: z.lazy(() => ProfileSchema).exactOptional(),
              email: z.lazy(() => ProfileSchema).exactOptional(),
              firstName: z.lazy(() => ProfileSchema).exactOptional(),
              lastName: z.lazy(() => ProfileSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            document: {
              birthDate: '17/11/1992',
              document: '12345678911',
              documentType: 'CPF',
              email: 'john.doe@gmail.com',
              firstName: 'João',
              lastName: 'Gomes',
            },
            id: '70caf394-8534-447e-a0ca-1803c669c771',
            meta: {
              author: 'e40e0b6d-0605-4fa6-8176-1d69fbaf0818',
              creationDate: '13/12/2021T00:00:00Z',
              lastUpdate: '15/12/2021T00:00:00Z',
              version: 'bb996089-b77c-4bf3-be35-b99b6d91f91c',
            },
          },
        },
      },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdAddressesRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}/addresses',
  tags: ['Addresses'],
  summary: 'Get client addresses',
  description:
    'Retrieves information of all addresses of a given client, by its `profileId`.\n\r\n\r> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetClientAddresses',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.any()),
          example: [
            {
              document: {
                administrativeAreaLevel1: 'RJ',
                countryCode: 'BR',
                countryName: 'B*****',
                locality: 'L*******',
                localityAreaLevel1: 'locality area',
                postalCode: '2****-0**',
                profileId: '70caf394-8534-447e-a0ca-1803c669c771',
                route: '51',
                streetNumber: '999',
              },
              id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
              meta: {
                author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
                creationDate: '2022-01-18T18:51:34.1293829+00:00',
                lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
                version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
              },
            },
          ],
        },
      },
    },
  },
})

export const postApiStorageProfileSystemProfilesProfileIdAddressesRoute = createRoute({
  method: 'post',
  path: '/api/storage/profile-system/profiles/{profileId}/addresses',
  tags: ['Addresses'],
  summary: 'Create client address',
  description:
    'Creates new address for a given client profile.\n\r\n\r> The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'CreateClientAddress',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
    body: { content: { 'application/json': { schema: AddressSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            document: {
              administrativeAreaLevel1: 'RJ',
              countryCode: 'BR',
              countryName: 'Brasil',
              locality: 'Locality',
              localityAreaLevel1: 'locality area',
              postalCode: '20200-000',
              profileId: '70caf394-8534-447e-a0ca-1803c669c771',
              route: '51',
              streetNumber: '999',
            },
            id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
            meta: {
              author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
              creationDate: '2022-01-18T18:51:34.1293829+00:00',
              lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
              version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
            },
          },
        },
      },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}/addresses/unmask',
  tags: ['Addresses'],
  summary: 'Get unmasked client addresses',
  description:
    'Retrieves unmasked information of all addresses of a given client, by its `profileId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetUnmaskedClientAddresses',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.looseObject({})),
          example: [
            {
              document: {
                administrativeAreaLevel1: 'RJ',
                countryCode: 'BR',
                countryName: 'Brasil',
                locality: 'Locality',
                localityAreaLevel1: 'locality area',
                postalCode: '20200-000',
                profileId: '70caf394-8534-447e-a0ca-1803c669c771',
                route: '51',
                streetNumber: '999',
              },
              id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
              meta: {
                author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
                creationDate: '2022-01-18T18:51:34.1293829+00:00',
                lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
                version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
              },
            },
          ],
        },
      },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}',
  tags: ['Addresses'],
  summary: 'Get address',
  description:
    'Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.\n\r\n\r> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetAddress',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema, addressId: AddressIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            document: {
              administrativeAreaLevel1: 'RJ',
              countryCode: 'BR',
              countryName: 'B*****',
              locality: 'L*******',
              localityAreaLevel1: 'locality area',
              postalCode: '2****-0**',
              profileId: '70caf394-8534-447e-a0ca-1803c669c771',
              route: '51',
              streetNumber: '999',
            },
            id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
            meta: {
              author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
              creationDate: '2022-01-18T18:51:34.1293829+00:00',
              lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
              version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
            },
          },
        },
      },
    },
  },
})

export const deleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute = createRoute({
  method: 'delete',
  path: '/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}',
  tags: ['Addresses'],
  summary: 'Delete address',
  description:
    "Deletes a client's address by `profileId` and `addressId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
  operationId: 'DeleteAddress',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema, addressId: AddressIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: { 204: { description: 'No content' } },
})

export const patchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute = createRoute({
  method: 'patch',
  path: '/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}',
  tags: ['Addresses'],
  summary: 'Update client address',
  description:
    'Updates one or more fields of an existing address for a given client profile.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'UpdateClientAddress',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema, addressId: AddressIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              administrativeAreaLevel1: z.lazy(() => AddressSchema).exactOptional(),
              countryCode: z.lazy(() => AddressSchema).exactOptional(),
              countryName: z.lazy(() => AddressSchema).exactOptional(),
              locality: z.lazy(() => AddressSchema).exactOptional(),
              localityAreaLevel1: z.lazy(() => AddressSchema).exactOptional(),
              postalCode: z.lazy(() => AddressSchema).exactOptional(),
              route: z.lazy(() => AddressSchema).exactOptional(),
              streetNumber: z.lazy(() => AddressSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            document: {
              administrativeAreaLevel1: 'RJ',
              countryCode: 'BR',
              countryName: 'Brasil',
              locality: 'Locality',
              localityAreaLevel1: 'locality area',
              postalCode: '20200-000',
              profileId: '70caf394-8534-447e-a0ca-1803c669c771',
              route: '34',
              streetNumber: '333',
            },
            id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
            meta: {
              author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
              creationDate: '2022-01-18T18:51:34.1293829+00:00',
              lastUpdateDate: '2022-01-18T21:08:02.9364099+00:00',
              version: '86dfae79-1d23-43f2-a643-2fc8f1839461',
            },
          },
        },
      },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskRoute = createRoute(
  {
    method: 'get',
    path: '/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/unmask',
    tags: ['Addresses'],
    summary: 'Get unmasked address',
    description:
      'Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
    operationId: 'GetUnmaskedAddress',
    request: {
      headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
      params: z.object({ profileId: ProfileIdParamsSchema, addressId: AddressIdParamsSchema }),
      query: z.object({ reason: ReasonParamsSchema, alternativeKey: AlternativeKeyParamsSchema }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z.object({}),
            example: {
              document: {
                administrativeAreaLevel1: 'RJ',
                countryCode: 'BR',
                countryName: 'Brasil',
                locality: 'Locality',
                localityAreaLevel1: 'locality area',
                postalCode: '20200-000',
                profileId: '70caf394-8534-447e-a0ca-1803c669c771',
                route: '51',
                streetNumber: '999',
              },
              id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
              meta: {
                author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
                creationDate: '2022-01-18T18:51:34.1293829+00:00',
                lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
                version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
              },
            },
          },
        },
      },
    },
  },
)

export const getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}',
    tags: ['Addresses'],
    summary: 'Get address by version',
    description:
      'Retrieves information of a specific version address of a given client.\n\r\n\r> For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
    operationId: 'GetAddressByVersion',
    request: {
      headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
      params: z.object({
        profileId: ProfileIdParamsSchema,
        addressId: AddressIdParamsSchema,
        addressVersionId: AddressVersionIdParamsSchema,
      }),
      query: z.object({ reason: ReasonParamsSchema, alternativeKey: AlternativeKeyParamsSchema }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z.object({}),
            example: {
              document: {
                administrativeAreaLevel1: 'RJ',
                countryCode: 'BR',
                countryName: 'B*****',
                locality: 'L*******',
                localityAreaLevel1: 'locality area',
                postalCode: '2****-0**',
                profileId: '70caf394-8534-447e-a0ca-1803c669c771',
                route: '51',
                streetNumber: '999',
              },
              id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
              meta: {
                author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
                creationDate: '2022-01-18T18:51:34.1293829+00:00',
                lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
                version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
              },
            },
          },
        },
      },
    },
  })

export const getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskRoute =
  createRoute({
    method: 'get',
    path: '/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}/unmask',
    tags: ['Addresses'],
    summary: 'Get unmasked address by version',
    description:
      'Retrieves unmasked information of a specific address version of a given client.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
    operationId: 'GetUnmaskedAddressByVersion',
    request: {
      headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
      params: z.object({
        profileId: ProfileIdParamsSchema,
        addressId: AddressIdParamsSchema,
        addressVersionId: AddressVersionIdParamsSchema,
      }),
      query: z.object({ reason: ReasonParamsSchema, alternativeKey: AlternativeKeyParamsSchema }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z.object({}),
            example: {
              document: {
                administrativeAreaLevel1: 'RJ',
                countryCode: 'BR',
                countryName: 'Brasil',
                locality: 'Locality',
                localityAreaLevel1: 'locality area',
                postalCode: '20200-000',
                profileId: '70caf394-8534-447e-a0ca-1803c669c771',
                route: '51',
                streetNumber: '999',
              },
              id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
              meta: {
                author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
                creationDate: '2022-01-18T18:51:34.1293829+00:00',
                lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
                version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
              },
            },
          },
        },
      },
    },
  })

export const getApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}/purchase-info',
  tags: ['Purchase information'],
  summary: 'Get purchase information',
  description:
    'Retrieves purchase information of a given client, by its `profileId`.\n\r\n\r> For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetPurchaseInformation',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.any()), example: [{}] } },
    },
  },
})

export const postApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute = createRoute({
  method: 'post',
  path: '/api/storage/profile-system/profiles/{profileId}/purchase-info',
  tags: ['Purchase information'],
  summary: 'Create purchase information',
  description:
    'Creates purchase information for a given client profile.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'CreatePurchaseInformation',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
    body: { content: { 'application/json': { schema: z.any() } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}), example: {} } },
    },
  },
})

export const deleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute = createRoute({
  method: 'delete',
  path: '/api/storage/profile-system/profiles/{profileId}/purchase-info',
  tags: ['Purchase information'],
  summary: 'Delete purchase information',
  description:
    'Deletes purchase informaiton by `profileId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'DeletePurchaseInformation',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: { 204: { description: 'No content' } },
})

export const patchApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute = createRoute({
  method: 'patch',
  path: '/api/storage/profile-system/profiles/{profileId}/purchase-info',
  tags: ['Purchase information'],
  summary: 'Update purchase information',
  description:
    'Updates one or more fields of existing purchase information for a given client profile.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'UpdatePurchaseInformation',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ alternativeKey: AlternativeKeyParamsSchema }),
    body: { content: { 'application/json': { schema: z.any() } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.object({}), example: {} } },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}/purchase-info/unmask',
  tags: ['Purchase information'],
  summary: 'Get unmasked purchase information',
  description:
    'Retrieves unmasked purchase information of a given client, by its `profileId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetUnmaskedPurchaseInformation',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          example: [
            {
              document: {
                administrativeAreaLevel1: 'RJ',
                countryCode: 'BR',
                countryName: 'Brasil',
                locality: 'Locality',
                localityAreaLevel1: 'locality area',
                postalCode: '20200-000',
                profileId: '70caf394-8534-447e-a0ca-1803c669c771',
                route: '51',
                streetNumber: '999',
              },
              id: 'bf82180e-cf9e-4089-9af6-ae1518555992',
              meta: {
                author: '80aa79a3-aa89-4912-a20e-8ef69af19a6c',
                creationDate: '2022-01-18T18:51:34.1293829+00:00',
                lastUpdateDate: '2022-01-18T18:51:34.1293829+00:00',
                version: 'c9c44895-4589-4d0d-a28d-e0e656ca1926',
              },
            },
          ],
        },
      },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdUnmaskRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/profiles/{profileId}/unmask',
  tags: ['Profiles'],
  summary: 'Get unmasked profile',
  description:
    "Retrieves unmasked information of a specific client, by its `profileId`.\n\r\n\r> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
  operationId: 'GetUnmaskedProfile',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ profileId: ProfileIdParamsSchema }),
    query: z.object({ reason: ReasonParamsSchema, alternativeKey: AlternativeKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.any()),
          example: [
            {
              document: {
                birthDate: '1925-11-17',
                document: '12345678911',
                documentType: 'CPF',
                email: 'john.doe@example.com',
                firstName: 'John',
                lastName: 'Doe',
              },
              id: '70caf394-8534-447e-a0ca-1803c669c771',
              meta: {
                author: 'e40e0b6d-0605-4fa6-8176-1d69fbaf0818',
                creationDate: '13/12/2021T00:00:00Z',
                lastUpdate: '13/12/2021T00:00:00Z',
                version: 'abc',
              },
            },
          ],
        },
      },
    },
  },
})

export const getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdRoute = createRoute(
  {
    method: 'get',
    path: '/api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}',
    tags: ['Profiles'],
    summary: 'Get profile by version',
    description:
      "Retrieves the information of a specific version of a client profile.\n\r\n\r> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.\n\r\n\r> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
    operationId: 'GetProfileByVersion',
    request: {
      headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
      params: z.object({
        profileId: ProfileIdParamsSchema,
        profileVersionId: ProfileVersionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z.array(z.any()),
            example: [
              {
                document: {
                  birthDate: '1925-11-17',
                  document: '1********',
                  documentType: 'CPF',
                  email: 'j***********',
                  firstName: 'J***',
                  lastName: 'G****',
                },
                id: '70caf394-8534-447e-a0ca-1803c669c771',
                meta: {
                  author: 'e40e0b6d-0605-4fa6-8176-1d69fbaf0818',
                  creationDate: '13/12/2021T00:00:00Z',
                  lastUpdate: '15/12/2021T00:00:00Z',
                  version: 'bb996089-b77c-4bf3-be35-b99b6d91f91c',
                },
              },
            ],
          },
        },
      },
    },
  },
)

export const getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskRoute =
  createRoute({
    method: 'get',
    path: '/api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}/unmask',
    tags: ['Profiles'],
    summary: 'Get unmasked profile by version',
    description:
      "Retrieves unmasked information of a specific version of a client profile.\n\r\n\r> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.",
    operationId: 'GetUnmaskedProfileByVersion',
    request: {
      headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
      params: z.object({
        profileId: ProfileIdParamsSchema,
        profileVersionId: ProfileVersionIdParamsSchema,
      }),
      query: z.object({ reason: ReasonParamsSchema }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z.array(z.any()),
            example: [
              {
                document: {
                  birthDate: '1925-11-17',
                  document: '12345678911',
                  documentType: 'CPF',
                  email: 'john.doe@example.com',
                  firstName: 'João',
                  lastName: 'Gomes',
                },
                id: '70caf394-8534-447e-a0ca-1803c669c771',
                meta: {
                  author: 'e40e0b6d-0605-4fa6-8176-1d69fbaf0818',
                  creationDate: '13/12/2021T00:00:00Z',
                  lastUpdate: '15/12/2021T00:00:00Z',
                  version: 'bb996089-b77c-4bf3-be35-b99b6d91f91c',
                },
              },
            ],
          },
        },
      },
    },
  })

export const postApiStorageProfileSystemProspectsRoute = createRoute({
  method: 'post',
  path: '/api/storage/profile-system/prospects',
  tags: ['Prospects'],
  summary: 'Create prospect',
  description:
    'Creates new prospect.\n\r\n\r> The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'CreateProspect',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    body: { content: { 'application/json': { schema: ProspectSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: z.object({}), example: {} } },
    },
  },
})

export const getApiStorageProfileSystemProspectsProspectIdRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/prospects/{prospectId}',
  tags: ['Prospects'],
  summary: 'Get prospect',
  description:
    'Retrieves the information of a specific prospect, by its `prospectId`.\n\r\n\r> For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetProspect',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ prospectId: ProspectIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.any()), example: [{}] } },
    },
  },
})

export const deleteApiStorageProfileSystemProspectsProspectIdRoute = createRoute({
  method: 'delete',
  path: '/api/storage/profile-system/prospects/{prospectId}',
  tags: ['Prospects'],
  summary: 'Delete prospect',
  description:
    'Deletes a prospect by `prospectId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'DeleteProspect',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ prospectId: ProspectIdParamsSchema }),
  },
  responses: { 204: { description: 'No content' } },
})

export const patchApiStorageProfileSystemProspectsProspectIdRoute = createRoute({
  method: 'patch',
  path: '/api/storage/profile-system/prospects/{prospectId}',
  tags: ['Prospects'],
  summary: 'Update prospect',
  description:
    'Updates one or more fields of an existing prospect.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'UpdateProspect',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ prospectId: ProspectIdParamsSchema }),
    body: { content: { 'application/json': { schema: z.any() } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.object({}), example: {} } },
    },
  },
})

export const getApiStorageProfileSystemProspectsProspectIdUnmaskRoute = createRoute({
  method: 'get',
  path: '/api/storage/profile-system/prospects/{prospectId}/unmask',
  tags: ['Prospects'],
  summary: 'Get unmasked prospect',
  description:
    'Retrieves unmasked information of a specific prospect, by its `prospectId`.\n\r\n\r> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.',
  operationId: 'GetUnmaskedProspect',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ prospectId: ProspectIdParamsSchema }),
    query: z.object({ reason: ReasonParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.any()), example: [{}] } },
    },
  },
})
