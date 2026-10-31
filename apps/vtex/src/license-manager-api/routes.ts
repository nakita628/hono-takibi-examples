import { createRoute, z } from '@hono/zod-openapi'

const AppKeyItemsSchema = z
  .object({
    appKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'AppKey (Access Key in the license manager UI)' }),
    appToken: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'AppToken. For security reasons, should always be null.' }),
    createdIn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation date of the application key' }),
    id: z.string().exactOptional().openapi({ description: 'ID of the application key' }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the application key is active' }),
    isBlocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the application key is blocked' }),
    label: z.string().exactOptional().openapi({ description: 'Label of the application key' }),
  })
  .openapi({ description: 'Object representing application keys', required: [] })
  .openapi('AppKeyItems')

const LicenseItemsSchema = z
  .object({
    expiration: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true }),
    id: z.number().exactOptional().openapi({ description: 'ID of the category of the license' }),
    isPurchased: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the license is purchased' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the category of the license' }),
    products: z
      .array(
        z
          .object({
            domains: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
            endpoints: z
              .object({
                consoleUrl: z.string().nullable().exactOptional().openapi({ deprecated: true }),
                webApiUrl: z.string().nullable().exactOptional().openapi({ deprecated: true }),
              })
              .exactOptional()
              .openapi({ deprecated: true, required: [] }),
            id: z.number().exactOptional().openapi({ description: 'ID of the product' }),
            name: z.string().exactOptional().openapi({ description: 'Name of the product' }),
          })
          .openapi({ description: 'Object representing products of licenses', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of products' }),
  })
  .openapi({ description: 'Object representing licenses', required: [] })
  .openapi('LicenseItems')

const SiteItemsSchema = z
  .object({
    LV: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    aliases: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
    domains: z.array(z.string()).nullable().exactOptional().openapi({ deprecated: true }),
    hosts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Hosts associated to the store' }),
    id: z.number().exactOptional().openapi({ description: 'ID of the store' }),
    logo: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    monetaryUnitId: z.number().exactOptional().openapi({ deprecated: true }),
    name: z.string().exactOptional().openapi({ description: 'Store name' }),
    tradingName: z.string().exactOptional().openapi({ description: 'Trading name of the store' }),
  })
  .openapi({ description: 'Object containing complete information from a store', required: [] })
  .openapi('SiteItems')

const AccountResponseSchema = z
  .object({
    accountName: z.string().exactOptional().openapi({ description: 'Account name' }),
    address: z.string().nullable().exactOptional().openapi({ description: 'Address of contact' }),
    appKey: z
      .object({
        name: z.string().nullable().exactOptional().openapi({ deprecated: true }),
        token: z.string().nullable().exactOptional().openapi({ deprecated: true }),
      })
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated. Check appKeys object for all appKeys',
        required: [],
      }),
    appKeys: z
      .array(AppKeyItemsSchema)
      .exactOptional()
      .openapi({ description: 'Array of application keys' }),
    city: z.string().nullable().exactOptional().openapi({ description: 'City of contact' }),
    cnpj: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'CNPJ (Tax ID) of account' }),
    companyName: z.string().exactOptional().openapi({ description: 'Company name' }),
    complement: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional address of contact' }),
    contact: z
      .object({
        email: z.string().exactOptional().openapi({ description: 'Email of the contact' }),
        name: z.string().exactOptional().openapi({ description: 'Name of the contact' }),
        phone: z.string().exactOptional().openapi({ description: 'Phone of the contact' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    country: z.string().nullable().exactOptional().openapi({ description: 'Country of contact' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the account was created' }),
    defaultUrl: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    district: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Neighborhood of contact' }),
    hasLogo: z.boolean().exactOptional().openapi({ description: 'If logo has been setup' }),
    haveParentAccount: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If it has a parent account' }),
    hosts: z.array(z.string()).exactOptional().openapi({ description: 'Hosts of all stores' }),
    id: z.string().exactOptional().openapi({ description: 'ID of the account' }),
    inactivationDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when the account was deactivated' }),
    isActive: z.boolean().exactOptional().openapi({ description: 'If account is active or not' }),
    isOperating: z.boolean().exactOptional().openapi({ description: 'If it is in production' }),
    licenses: z
      .array(LicenseItemsSchema)
      .exactOptional()
      .openapi({ description: 'Licenses of the account' }),
    logo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Filename of account logo' }),
    lv: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    name: z.string().exactOptional().openapi({ description: 'Trading name' }),
    number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of the address of contact' }),
    operationDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when the account went into production' }),
    parentAccountId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the parent account' }),
    parentAccountName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the parent account' }),
    postalCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Zip Code of contact' }),
    sites: z
      .array(SiteItemsSchema)
      .exactOptional()
      .openapi({ description: 'Array of objects representing a store' }),
    sponsor: z
      .object({
        email: z.string().exactOptional().openapi({ description: 'Email of the sponsor user' }),
        name: z.string().exactOptional().openapi({ description: 'Name of the sponsor user' }),
        phone: z.string().exactOptional().openapi({ description: 'Phone of the sponsor user' }),
      })
      .exactOptional()
      .openapi({ description: 'Object representing the sponsor user', required: [] }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State/Province of contact' }),
    telephone: z.string().exactOptional().openapi({ description: 'Telephone of contact' }),
    tradingName: z.string().exactOptional().openapi({ description: 'Trading name' }),
  })
  .openapi({ description: 'Successful response for `/api/vlm/account`', required: [] })
  .openapi('AccountResponse')

const CreateUserRequestSchema = z
  .object({
    email: z.string().openapi({ description: 'Email of the user' }),
    name: z.string().openapi({ description: 'Name of the user' }),
  })
  .openapi({ description: 'Request body for creating users', required: ['name', 'email'] })
  .openapi('CreateUserRequest')

const CreatenewappkeyRequestSchema = z
  .object({ label: z.string().openapi({ description: 'Label for application key' }) })
  .openapi({
    description: 'Request body for creating new application key (/api/vlm/appkeys)',
    required: ['label'],
  })
  .openapi('CreatenewappkeyRequest')

const CreatenewappkeyResponseSchema = z
  .object({
    appKey: z.string().openapi({ description: 'AppKey (Access Key in the license manager UI)' }),
    appToken: z.string().openapi({ description: 'Secret of application key' }),
    createdIn: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date of creation of application key' }),
    id: z.string().openapi({ description: 'ID of application key' }),
    isActive: z.boolean().openapi({ description: 'If the application key is active' }),
    label: z.string().openapi({ description: 'Label for application key' }),
  })
  .openapi({
    description: 'Response body of sucessful call to /api/vlm/appkeys',
    required: ['id', 'appKey', 'appToken', 'label', 'createdIn', 'isActive'],
  })
  .openapi('CreatenewappkeyResponse')

const GetappkeysfromaccountSchema = z
  .object({
    appKey: z.string().openapi({ description: 'AppKey (Access Key in the license manager UI)' }),
    createdIn: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date of creation of application key' }),
    id: z.string().openapi({ description: 'ID of application key' }),
    isActive: z.boolean().openapi({ description: 'If the application key is active' }),
    label: z.string().openapi({ description: 'Label for application key' }),
  })
  .openapi({
    description: 'Response body for getting all application keys from the account',
    required: ['id', 'appKey', 'label', 'createdIn', 'isActive'],
  })
  .openapi('Getappkeysfromaccount')

const ProductItemsSchema = z
  .object({
    categoryId: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    categoryName: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    consoleUrlMask: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    description: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    id: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    name: z.string().exactOptional().openapi({ description: 'Name of the product' }),
    productResources: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    url: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    urlConfiguration: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    webApiUrlMask: z.string().nullable().exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ description: 'Object representing products', required: [] })
  .openapi('ProductItems')

const RoleItemsSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'ID of the role' }),
    isAdmin: z.boolean().exactOptional().openapi({ description: 'If the role is admin' }),
    logins: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    name: z.string().exactOptional().openapi({ description: 'Name of the role' }),
    products: z
      .array(ProductItemsSchema)
      .exactOptional()
      .openapi({ description: 'Array of product objects' }),
    resources: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    roleType: z
      .int()
      .exactOptional()
      .openapi({ description: 'Returns 1 for custom roles, and 0 otherwise' }),
  })
  .openapi({ description: 'Object representing roles', required: [] })
  .openapi('RoleItems')

const PagingSchema = z
  .object({
    page: z.int().openapi({ description: 'Current page number' }),
    pages: z.int().openapi({ description: 'Total of pages' }),
    perPage: z.int().openapi({ description: 'Items per page' }),
    total: z.int().openapi({ description: 'Total of items' }),
  })
  .openapi({ description: 'Paging object', required: ['page', 'perPage', 'total', 'pages'] })
  .openapi('Paging')

const ListRolesResponseSchema = z
  .object({
    items: z
      .array(RoleItemsSchema)
      .exactOptional()
      .openapi({ description: 'Array of role objects' }),
    paging: PagingSchema.exactOptional(),
  })
  .openapi({ description: 'Response body for listing all roles', required: [] })
  .openapi('ListRolesResponse')

const UserItemsSchema = z
  .object({
    accountNames: z
      .array(z.string())
      .max(0)
      .exactOptional()
      .openapi({ description: 'Array of account names' }),
    email: z.string().exactOptional().openapi({ description: 'Email of the user' }),
    id: z.string().exactOptional().openapi({ description: 'ID of the user' }),
    isAdmin: z.boolean().exactOptional().openapi({ description: 'If user is admin' }),
    isBlocked: z.boolean().exactOptional().openapi({ description: 'If user is blocked' }),
    isReliable: z.boolean().exactOptional().openapi({ description: 'For internal use only' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the user' }),
    roles: z.array(z.string()).max(0).exactOptional().openapi({ description: 'Array of roles' }),
  })
  .openapi({ description: 'Object representing users', required: [] })
  .openapi('UserItems')

const ListUsersResponseSchema = z
  .object({
    items: z
      .array(UserItemsSchema)
      .exactOptional()
      .openapi({ description: 'Array of user objects' }),
    paging: PagingSchema.exactOptional(),
  })
  .openapi({ description: 'Response body for listing all users', required: [] })
  .openapi('ListUsersResponse')

const StoreItemsSchema = z
  .object({
    hosts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of hosts corresponding to the store' }),
    id: z.number().exactOptional().openapi({ description: 'ID of the store' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the store' }),
  })
  .openapi({ description: 'Object containing summarized information from a store', required: [] })
  .openapi('StoreItems')

const UpdateappkeyRequestSchema = z
  .object({
    isActive: z
      .boolean()
      .openapi({ description: 'If the application key should be active or inactive' }),
  })
  .openapi({
    description: 'Request body for activating/deactivating application keys',
    required: ['isActive'],
  })
  .openapi('UpdateappkeyRequest')

const VLMErrorSchema = z
  .object({
    Detais: z.string().nullable().exactOptional().openapi({ description: 'Details of error' }),
    HttpStatusCode: z
      .int()
      .exactOptional()
      .openapi({ description: 'Status code of HTTP response' }),
    Message: z.string().exactOptional().openapi({ description: 'Error message' }),
    VLMErrorCode: z
      .int()
      .exactOptional()
      .openapi({ description: 'Error code for License Manager' }),
  })
  .openapi({ description: 'Object representing VLMError', required: [] })
  .openapi('VLMError')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiLicenseManagerSitePvtLoginsListPagedRoute = createRoute({
  method: 'get',
  path: '/api/license-manager/site/pvt/logins/list/paged',
  tags: ['User'],
  summary: 'Get List of Users',
  description:
    'Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.',
  operationId: 'GetListUsers',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The media type of the body of the request. Default value for license manager protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      numItems: z
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
            description: 'Number of items in the returned page',
            in: 'query',
            name: 'numItems',
            required: false,
            schema: { default: 10, type: 'integer' },
            style: 'form',
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Which page from the whole list will be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { default: 1, type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'Chooses the field that the list will be sorted by',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'name', type: 'string' },
            style: 'form',
          },
        }),
      sortType: z
        .string()
        .default('ASC')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order',
            in: 'query',
            name: 'sortType',
            required: false,
            schema: { default: 'ASC', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ListUsersResponseSchema,
          example: {
            items: [
              {
                accountNames: [],
                email: 'mynewuser@mydomain.com',
                id: 'a404870467d24533a085a6b3c6a5a320',
                isAdmin: false,
                isBlocked: false,
                isReliable: false,
                name: 'testuser',
                roles: [],
              },
            ],
            paging: { page: 1, pages: 1, perPage: 1, total: 1 },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiLicenseManagerSitePvtRolesListPagedRoute = createRoute({
  method: 'get',
  path: '/api/license-manager/site/pvt/roles/list/paged',
  tags: ['Roles'],
  summary: 'Get List of Roles',
  description:
    'Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.',
  operationId: 'GetListRoles',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The media type of the body of the request. Default value for license manager protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      numItems: z
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
            description: 'Number of items in the returned page',
            in: 'query',
            name: 'numItems',
            required: false,
            schema: { default: 10, type: 'integer' },
            style: 'form',
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Which page from the whole list will be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { default: 1, type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            description: 'Chooses the field that the list will be sorted by',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'id', type: 'string' },
            style: 'form',
          },
        }),
      sortType: z
        .string()
        .default('ASC')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the sorting order. ASC is used for ascendant order. DSC is used for descendant order',
            in: 'query',
            name: 'sortType',
            required: false,
            schema: { default: 'ASC', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ListRolesResponseSchema,
          example: {
            items: [
              {
                id: 957,
                isAdmin: false,
                logins: null,
                name: 'Call center operator',
                products: [
                  {
                    categoryId: null,
                    categoryName: null,
                    consoleUrlMask: null,
                    description: null,
                    id: null,
                    name: 'Catalog',
                    productResources: null,
                    url: null,
                    urlConfiguration: null,
                    webApiUrlMask: null,
                  },
                  {
                    categoryId: null,
                    categoryName: null,
                    consoleUrlMask: null,
                    description: null,
                    id: null,
                    name: 'OMS',
                    productResources: null,
                    url: null,
                    urlConfiguration: null,
                    webApiUrlMask: null,
                  },
                ],
                resources: null,
                roleType: 0,
              },
            ],
            paging: { page: 1, pages: 1, perPage: 1, total: 1 },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiLicenseManagerUsersRoute = createRoute({
  method: 'post',
  path: '/api/license-manager/users',
  tags: ['User'],
  summary: 'Create User',
  description:
    'Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.',
  operationId: 'CreateUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateUserRequestSchema,
          example: { email: 'mynewuser@mydomain.com', name: 'My New User Name' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ description: 'Email of user' }),
              id: z.string().exactOptional().openapi({ description: 'ID of user' }),
              name: z.string().exactOptional().openapi({ description: 'Name of user' }),
            })
            .openapi({ required: [] }),
          example: {
            email: 'mynewuser@mydomain.com',
            id: 'a404870467d24533a085a6b3c6a5a320',
            name: 'testuser',
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({ Message: z.string().exactOptional() }).openapi({ required: [] }),
          example: { Message: 'Invalid email' },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiLicenseManagerUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/api/license-manager/users/{userId}',
  tags: ['User'],
  summary: 'Get User',
  description: 'Allows you to get a user from the database, using the `userId` as the identifier.',
  operationId: 'GetUser',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The media type of the body of the request. Default value for license manager protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID from queried user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ description: 'Email of user' }),
              id: z.string().exactOptional().openapi({ description: 'ID of user' }),
              name: z.string().exactOptional().openapi({ description: 'Name of user' }),
            })
            .openapi({ required: [] }),
          example: {
            email: 'mynewuser@mydomain.com',
            id: 'a404870467d24533a085a6b3c6a5a320',
            name: 'testuser',
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z.string().exactOptional().openapi({ description: 'Error message' }),
            })
            .openapi({ required: [] }),
          example: { Message: 'Invalid UserId' },
        },
      },
      headers: z.object({}),
    },
    405: {
      description:
        'Method Not Allowed - A null `userId` sends the request to a path that is not allowed.',
      headers: z.object({}),
    },
  },
})

export const getApiLicenseManagerUsersUserIdRolesRoute = createRoute({
  method: 'get',
  path: '/api/license-manager/users/{userId}/roles',
  tags: ['Roles'],
  summary: 'Get Roles by User/appKey',
  description: 'Gets roles of a particular user or application key.',
  operationId: 'GetRolesbyUser',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The media type of the body of the request. Default value for license manager protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID corresponding to the user',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.int32().exactOptional().openapi({ description: 'ID of role' }),
                  name: z.string().exactOptional().openapi({ description: 'Name of role' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({ description: 'Array of role objects' }),
          example: [
            { id: 957, name: 'Call center operator' },
            { id: 1, name: 'Owner (Admin Super)' },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiLicenseManagerUsersUserIdRolesRoute = createRoute({
  method: 'put',
  path: '/api/license-manager/users/{userId}/roles',
  tags: ['Roles'],
  summary: 'Put Roles in User/appKey',
  description:
    "Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.",
  operationId: 'PutRolesinUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID corresponding to the user',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: "List of roles' IDs to add to the user or application key.",
      content: {
        'application/json': {
          schema: z.array(z.int32()).openapi({ description: 'Array containing IDs of the roles' }),
          example: [9000, 9111, 9333, 9444],
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success - A no-content response, but the roles were added successfully.',
      headers: z.object({}),
    },
    400: {
      description:
        'Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z.string().exactOptional().openapi({ description: 'Error message' }),
            })
            .openapi({ required: [] }),
          example: { Message: 'Roles list contains roles that do not exist in this account' },
        },
      },
      headers: z.object({}),
    },
    500: {
      description:
        'Unexpected error - One possible reason is that the userId is not present on the database.',
      content: {
        'application/json': {
          schema: z.object({ Message: z.string().exactOptional() }).openapi({ required: [] }),
          example: { Message: 'Unexpected error' },
        },
      },
      headers: z.object({}),
    },
  },
})

export const deleteApiLicenseManagerUsersUserIdRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/api/license-manager/users/{userId}/roles/{roleId}',
  tags: ['Roles'],
  summary: 'Remove Role from User/appKey',
  description:
    "Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.\n\r\n\r> Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.",
  operationId: 'RemoveRolefromUser',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The media type of the body of the request. Default value for license manager protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID corresponding to the user',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the role which will be removed from the user',
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'Success - A no-content response, but the role deletion was performed successfully.',
      headers: z.object({}),
    },
    400: {
      description:
        'Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.',
      content: {
        'application/json': {
          schema: z.object({ Message: z.string().exactOptional() }).openapi({ required: [] }),
          example: { Message: 'Invalid UserId' },
        },
      },
      headers: z.object({}),
    },
    405: { description: 'Method Not Allowed', headers: z.object({}) },
  },
})

export const getApiVlmAccountRoute = createRoute({
  method: 'get',
  path: '/api/vlm/account',
  tags: ['Account'],
  summary: 'Get information about account',
  description:
    'Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.\n\r\n\rThis endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).',
  operationId: 'GetAccount',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountResponseSchema,
          example: {
            accountName: 'apiexamples',
            address: null,
            appKey: { name: null, token: null },
            appKeys: [
              {
                appKey: 'vtexappkey-apiexamples-YSTRGZ',
                appToken: null,
                createdIn: '2019-12-11T21:06:33',
                id: '03ccde55547d43b09bbb2e1e6f7d455e',
                isActive: true,
                isBlocked: false,
                label: 'apiexamples',
              },
              {
                appKey: 'vtexappkey-apiexamples-LVQVVA',
                appToken: null,
                createdIn: '2021-10-21T20:00:21.308679',
                id: 'd585d6d94fd5415fb36c574a4c22986f',
                isActive: true,
                isBlocked: false,
                label: 'tadashi-test',
              },
            ],
            city: null,
            cnpj: null,
            companyName: 'UNISUPER, SOCIEDAD ANONIMA',
            complement: null,
            contact: { email: 'john.doe@vtex.com.br', name: 'John Doe', phone: '+219999999' },
            country: null,
            creationDate: '2019-12-11T17:02:34',
            defaultUrl: null,
            district: null,
            hasLogo: false,
            haveParentAccount: false,
            hosts: [],
            id: '71fe5fdabc4940ad81c226d43b754ba8',
            inactivationDate: null,
            isActive: true,
            isOperating: false,
            licenses: [
              {
                expiration: null,
                id: 24,
                isPurchased: false,
                name: 'Carrier',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 10,
                isPurchased: false,
                name: 'CRM',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 3,
                    name: 'Master Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 25,
                    name: 'Dynamic Storage',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 30,
                    name: 'Key Store',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 51,
                    name: 'Vtex My Account',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 67,
                    name: 'VTable',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 68,
                    name: 'Zendesk',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 8,
                isPurchased: false,
                name: 'E-Commerce Professional',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 3,
                    name: 'Master Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 4,
                    name: 'Request Capture',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 13,
                    name: 'Channels',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 20,
                    name: 'Conversation Tracker',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 25,
                    name: 'Dynamic Storage',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 27,
                    name: 'Portal',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 38,
                    name: 'CMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 50,
                    name: 'Suggestion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 51,
                    name: 'Vtex My Account',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 53,
                    name: 'Network',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 57,
                    name: 'Insights',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 58,
                    name: 'Credit Control',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 61,
                    name: 'WebService',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 67,
                    name: 'VTable',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 69,
                    name: 'Conditions Evaluator',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 70,
                    name: 'GiftCard',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 76,
                    name: 'Search',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 81,
                    name: 'Application Logs Stream',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 83,
                    name: 'Subscriptions',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 84,
                    name: 'CDN Service',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 85,
                    name: 'Dandelion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 88,
                    name: 'Tenant Switcher',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 6,
                isPurchased: false,
                name: 'E-Commerce Starter',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 3,
                    name: 'Master Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 4,
                    name: 'Request Capture',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 7,
                    name: 'Buscapé Connect',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 13,
                    name: 'Channels',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 20,
                    name: 'Conversation Tracker',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 25,
                    name: 'Dynamic Storage',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 27,
                    name: 'Portal',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 38,
                    name: 'CMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 50,
                    name: 'Suggestion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 51,
                    name: 'Vtex My Account',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 53,
                    name: 'Network',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 57,
                    name: 'Insights',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 58,
                    name: 'Credit Control',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 61,
                    name: 'WebService',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 67,
                    name: 'VTable',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 68,
                    name: 'Zendesk',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 69,
                    name: 'Conditions Evaluator',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 70,
                    name: 'GiftCard',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 76,
                    name: 'Search',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 81,
                    name: 'Application Logs Stream',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 83,
                    name: 'Subscriptions',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 84,
                    name: 'CDN Service',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 85,
                    name: 'Dandelion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 88,
                    name: 'Tenant Switcher',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 7,
                isPurchased: true,
                name: 'E-Commerce Unlimited',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 3,
                    name: 'Master Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 4,
                    name: 'Request Capture',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 7,
                    name: 'Buscapé Connect',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 8,
                    name: 'VTEX Events',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 10,
                    name: 'Shipping Notification',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 13,
                    name: 'Channels',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 15,
                    name: 'VTEX Fulfilment',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 20,
                    name: 'Conversation Tracker',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 22,
                    name: 'VtexID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 25,
                    name: 'Dynamic Storage',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 27,
                    name: 'Portal',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 28,
                    name: 'Dumbo',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 30,
                    name: 'Key Store',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 31,
                    name: 'Dashboard',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 37,
                    name: 'Vtex PAI',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 38,
                    name: 'CMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 39,
                    name: 'Availability',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 41,
                    name: 'Big Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 45,
                    name: 'Healthcheck',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 46,
                    name: 'VTEX Home',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 50,
                    name: 'Suggestion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 51,
                    name: 'Vtex My Account',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 53,
                    name: 'Network',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 57,
                    name: 'Insights',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 58,
                    name: 'Credit Control',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 60,
                    name: 'Extension Store',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 61,
                    name: 'WebService',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 67,
                    name: 'VTable',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 68,
                    name: 'Zendesk',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 69,
                    name: 'Conditions Evaluator',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 70,
                    name: 'GiftCard',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 76,
                    name: 'Search',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 81,
                    name: 'Application Logs Stream',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 83,
                    name: 'Subscriptions',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 84,
                    name: 'CDN Service',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 85,
                    name: 'Dandelion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 88,
                    name: 'Tenant Switcher',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 28,
                isPurchased: false,
                name: 'E-Commerce Unlimited No Billing',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 3,
                    name: 'Master Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 4,
                    name: 'Request Capture',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 7,
                    name: 'Buscapé Connect',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 8,
                    name: 'VTEX Events',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 10,
                    name: 'Shipping Notification',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 13,
                    name: 'Channels',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 15,
                    name: 'VTEX Fulfilment',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 20,
                    name: 'Conversation Tracker',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 22,
                    name: 'VtexID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 25,
                    name: 'Dynamic Storage',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 27,
                    name: 'Portal',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 28,
                    name: 'Dumbo',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 30,
                    name: 'Key Store',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 31,
                    name: 'Dashboard',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 37,
                    name: 'Vtex PAI',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 38,
                    name: 'CMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 39,
                    name: 'Availability',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 41,
                    name: 'Big Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 45,
                    name: 'Healthcheck',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 46,
                    name: 'VTEX Home',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 50,
                    name: 'Suggestion',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 51,
                    name: 'Vtex My Account',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 53,
                    name: 'Network',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 57,
                    name: 'Insights',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 58,
                    name: 'Credit Control',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 60,
                    name: 'Extension Store',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 61,
                    name: 'WebService',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 67,
                    name: 'VTable',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 68,
                    name: 'Zendesk',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 69,
                    name: 'Conditions Evaluator',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 70,
                    name: 'GiftCard',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 76,
                    name: 'Search',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 81,
                    name: 'Application Logs Stream',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 83,
                    name: 'Subscriptions',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 84,
                    name: 'CDN Service',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 88,
                    name: 'Tenant Switcher',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 11,
                isPurchased: false,
                name: 'Gateway',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 8,
                    name: 'VTEX Events',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 22,
                    name: 'VtexID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 15,
                isPurchased: false,
                name: 'Gateway Seller Nao VTEX',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 8,
                    name: 'VTEX Events',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 17,
                    name: 'VTEX DWT',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 18,
                    name: 'Unikey',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 22,
                    name: 'VtexID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 48,
                    name: 'VTEX Bridge',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 29,
                isPurchased: false,
                name: 'Indeva',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 30,
                isPurchased: false,
                name: 'Marketplace Seller',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 13,
                    name: 'Channels',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 20,
                    name: 'Conversation Tracker',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 46,
                    name: 'VTEX Home',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 86,
                    name: 'CatalogV2',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 23,
                isPurchased: false,
                name: 'VTEX Backoffice',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 84,
                    name: 'CDN Service',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 88,
                    name: 'Tenant Switcher',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 90,
                    name: "Payments' Provider Manager",
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 26,
                isPurchased: false,
                name: 'VTEX Bank',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 82,
                    name: 'Banking Service',
                  },
                ],
              },
              {
                expiration: null,
                id: 22,
                isPurchased: false,
                name: 'VTEX Billing',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                ],
              },
              {
                expiration: null,
                id: 27,
                isPurchased: false,
                name: 'VTEX Partner',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 88,
                    name: 'Tenant Switcher',
                  },
                ],
              },
              {
                expiration: null,
                id: 25,
                isPurchased: false,
                name: 'VTEX Payment',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 72,
                    name: 'VTEX Payment',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                ],
              },
              {
                expiration: null,
                id: 19,
                isPurchased: false,
                name: 'WhiteLabel',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 3,
                    name: 'Master Data',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 25,
                    name: 'Dynamic Storage',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 27,
                    name: 'Portal',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 39,
                    name: 'Availability',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 57,
                    name: 'Insights',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 67,
                    name: 'VTable',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 68,
                    name: 'Zendesk',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 76,
                    name: 'Search',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 81,
                    name: 'Application Logs Stream',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 21,
                isPurchased: false,
                name: 'Whitelabel Instore',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 14,
                    name: 'Log',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 73,
                    name: 'Seller Register',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 75,
                    name: 'Time Series',
                  },
                ],
              },
              {
                expiration: null,
                id: 31,
                isPurchased: false,
                name: 'Marketplace Seller Whitelabel',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 2,
                    name: 'Catalog',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 5,
                    name: 'Checkout',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 6,
                    name: 'PCI Gateway',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 9,
                    name: 'Logistics',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 16,
                    name: 'Rates and Benefits',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 19,
                    name: 'OMS',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 20,
                    name: 'Conversation Tracker',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 23,
                    name: 'Message Center',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 43,
                    name: 'Billing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 46,
                    name: 'VTEX Home',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 65,
                    name: 'Pricing',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 66,
                    name: 'VTEX IO',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 74,
                    name: 'Order Authorization',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 86,
                    name: 'CatalogV2',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 89,
                    name: 'Promotions Policy Engine',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
              {
                expiration: null,
                id: 33,
                isPurchased: false,
                name: 'Buyer Organization',
                products: [
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 1,
                    name: 'License Manager',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 55,
                    name: 'Audit',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 64,
                    name: 'Vtex ID',
                  },
                  {
                    domains: [],
                    endpoints: { consoleUrl: null, webApiUrl: null },
                    id: 91,
                    name: 'Releases',
                  },
                ],
              },
            ],
            logo: null,
            lv: null,
            name: 'UNISUPER, SOCIEDAD ANONIMA',
            number: null,
            operationDate: null,
            parentAccountId: null,
            parentAccountName: null,
            postalCode: null,
            sites: [
              {
                LV: null,
                aliases: [],
                domains: null,
                hosts: [],
                id: 23117,
                logo: null,
                monetaryUnitId: 1,
                name: 'apiexamples',
                tradingName: 'UNISUPER, SOCIEDAD ANONIMA',
              },
            ],
            sponsor: { email: 'john.doe@vtex.com.br', name: 'John Doe', phone: '+219999999' },
            state: null,
            telephone: '+219999999',
            tradingName: 'UNISUPER, SOCIEDAD ANONIMA',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiVlmAccountStoresRoute = createRoute({
  method: 'get',
  path: '/api/vlm/account/stores',
  tags: ['Store'],
  summary: 'Get Stores',
  description: 'Gets the stores and respective hosts of the account',
  operationId: 'GetByAccount',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(StoreItemsSchema).openapi({ description: 'Array of store objects' }),
          example: [
            {
              hosts: ['loja.ambientecrm.com.br', 'www.ambientecrm.com.br'],
              id: 1213,
              name: 'ambientecrm',
            },
            { hosts: ['loja.blackbox.com.br', 'www.blackbox.com.br'], id: 213, name: 'ambienteqa' },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiVlmAppkeysRoute = createRoute({
  method: 'get',
  path: '/api/vlm/appkeys',
  tags: ['App Keys'],
  summary: 'Get appKeys from account',
  description: 'Gets all application keys from an account.',
  operationId: 'Getappkeysfromaccount',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The media type of the body of the request. Default value for license manager protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(GetappkeysfromaccountSchema)
            .openapi({ description: 'Array of AppKeys object' }),
          example: [
            {
              appKey: 'vtexappkey-myaccount-ORYNWX',
              createdIn: '2018-07-04T14:09:08.2718405Z',
              id: 'a2555e95-9db8-48be-94f8-2a28577c0b4a',
              isActive: true,
              label: 'my new appkey',
            },
            {
              appKey: 'vtexappkey-myaccount-ORKPDC',
              createdIn: '2018-07-04T14:09:08.2718405Z',
              id: 'a2555e95-9db8-48be-94f8-2a28577c0b4a',
              isActive: true,
              label: 'my other appkey',
            },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiVlmAppkeysRoute = createRoute({
  method: 'post',
  path: '/api/vlm/appkeys',
  tags: ['App Keys'],
  summary: 'Create new appkey',
  description: 'Creates a new pair of `appKey` and `appToken`.',
  operationId: 'Createnewappkey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreatenewappkeyRequestSchema,
          example: { label: 'my new appkey' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: CreatenewappkeyResponseSchema,
          example: {
            appKey: 'vtexappkey-myaccount-ORYNWX',
            appToken:
              'WNVUJKYFKJFLTPXHQGAZDHPBHSDQVJJWSFZUBOGCKPEXAIFHTPANKJTOXUKRIIJAAJSOPCFBAXOODRABMUXFJVLJLKWGEOUCFDXRPRRQKYNNUFLGTIEOKERFXJCFFYXL',
            createdIn: '2018-07-04T14:09:08.2718405Z',
            id: 'a2555e95-9db8-48be-94f8-2a28577c0b4a',
            isActive: true,
            label: 'my new appkey',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiVlmAppkeysIdRoute = createRoute({
  method: 'put',
  path: '/api/vlm/appkeys/{id}',
  tags: ['App Keys'],
  summary: 'Update appkey',
  description: 'Activates or deactivates an `appKey` by its ID.',
  operationId: 'Updateappkey',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID from the appKey which will be updated',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Request body for updating AppKeys',
      content: {
        'application/json': { schema: UpdateappkeyRequestSchema, example: { isActive: false } },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', headers: z.object({}) },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: VLMErrorSchema,
          example: {
            Details: null,
            HttpStatusCode: 400,
            Message: 'Token not exists for this account',
            VLMErrorCode: 17,
          },
        },
      },
      headers: z.object({}),
    },
  },
})
