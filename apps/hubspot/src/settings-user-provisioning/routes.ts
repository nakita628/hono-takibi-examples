import { createRoute, z } from '@hono/zod-openapi'

const PublicPermissionSetSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the permission set. It is a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the permission set. It is a string.', example: null }),
    requiresBillingWrite: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the permission set requires billing write access.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'name', 'requiresBillingWrite'], example: null })
  .openapi('PublicPermissionSet')

const CollectionResponsePublicPermissionSetNoPagingSchema = z
  .object({
    results: z
      .array(PublicPermissionSetSchema)
      .openapi({
        description:
          'An array of PublicPermissionSet objects, each representing a specific permission set. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicPermissionSetNoPaging')

const PublicSeatSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional details about the seat.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the seat. This is a required string property.',
        example: null,
      }),
    remainingSeats: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the number of seats that are still available.',
        example: null,
      }),
  })
  .openapi({ required: ['name'], example: null })
  .openapi('PublicSeat')

const CollectionResponsePublicSeatNoPagingSchema = z
  .object({
    results: z
      .array(PublicSeatSchema)
      .openapi({
        description:
          'An array of PublicSeat objects, each representing a seat with its associated properties.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicSeatNoPaging')

const PublicTeamSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the team, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the team, represented as a string.', example: null }),
    secondaryUserIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of users who are secondary members of the team.',
        example: null,
      }),
    userIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of users who are primary members of the team.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'name', 'secondaryUserIds', 'userIds'], example: null })
  .openapi('PublicTeam')

const CollectionResponsePublicTeamNoPagingSchema = z
  .object({
    results: z
      .array(PublicTeamSchema)
      .openapi({
        description:
          'An array of PublicTeam objects, each representing a team with its associated properties.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicTeamNoPaging')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token that indicates the position after the last item in the current page. It is used as a cursor to fetch the next set of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a direct link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const PublicUserSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description: 'The email address of the user. This is a required field and must be unique.',
        example: null,
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The first name of the user, represented as a string.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the user, represented as a string.',
        example: null,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last name of the user, represented as a string.',
        example: null,
      }),
    primaryTeamId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the primary team to which the user belongs, represented as a string.',
        example: null,
      }),
    roleId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a single role ID assigned to the user.',
        example: null,
      }),
    roleIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of the roles assigned to the user. This is a required field.',
        example: null,
      }),
    seatNames: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of strings representing the names of seats assigned to the user.',
        example: null,
      }),
    secondaryTeamIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of secondary teams to which the user is associated.',
        example: null,
      }),
    sendWelcomeEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether a welcome email should be sent to the user.',
        example: null,
      }),
    superAdmin: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the user has super admin privileges. This is a required field.',
        example: null,
      }),
  })
  .openapi({ required: ['email', 'id', 'roleIds', 'superAdmin'], example: null })
  .openapi('PublicUser')

const CollectionResponsePublicUserForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicUserSchema)
      .openapi({
        description:
          'An array of PublicUser objects representing the users returned in the current page.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicUserForwardPaging')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.',
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
          'A human readable message describing the error along with remediation steps where appropriate. This is a required field.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
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
    category: z
      .string()
      .openapi({
        description: 'The error category, providing a general classification of the error.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties that are arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Further information about the error, represented as an array of ErrorDetail objects.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
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

const PublicUserUpdateSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user. It is a string value.', example: null }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user. It is a string value.', example: null }),
    primaryTeamId: z
      .string()
      .exactOptional()
      .openapi({
        description: "The identifier for the user's primary team. It is a string value.",
        example: null,
      }),
    roleId: z
      .string()
      .exactOptional()
      .openapi({
        description: "The identifier for the user's role. It is a string value.",
        example: null,
      }),
    seatNames: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of seat names associated with the user. Each item in the array is a string.',
        example: null,
      }),
    secondaryTeamIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of identifiers for the user's secondary teams. Each item in the array is a string.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicUserUpdate')

const UserProvisionRequestSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description:
          'The email address of the user being provisioned. This is a required field and must be unique.',
        example: null,
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user.', example: null }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user.', example: null }),
    primaryTeamId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the primary team to which the user belongs.',
        example: null,
      }),
    roleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier for the role assigned to the user.', example: null }),
    seatNames: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of seat names assigned to the user, representing different permissions or access levels.',
        example: null,
      }),
    secondaryTeamIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of identifiers for secondary teams to which the user is associated.',
        example: null,
      }),
    sendWelcomeEmail: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether a welcome email should be sent to the user upon provisioning. This is a required field.',
        example: null,
      }),
  })
  .openapi({ required: ['email', 'sendWelcomeEmail'], example: null })
  .openapi('UserProvisionRequest')

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
      scopes: {
        'crm.objects.users.read': '',
        'crm.objects.users.write': '',
        'settings.billing.write': '',
        'settings.users.read': '',
        'settings.users.teams.read': '',
        'settings.users.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getSettingsUsers202609Route = createRoute({
  method: 'get',
  path: '/settings/users/2026-09',
  tags: ['Basic'],
  summary: 'Retrieves users',
  description:
    'Retrieve a paginated list of users in your HubSpot account. This endpoint allows you to specify the maximum number of results per page and to use a paging cursor for navigating through the list of users.',
  operationId: 'get-/settings/users/2026-09',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicUserForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.users.read'] }, { oauth2: ['settings.users.read'] }],
})

export const postSettingsUsers202609Route = createRoute({
  method: 'post',
  path: '/settings/users/2026-09',
  tags: ['Basic'],
  summary: 'Create a user',
  description:
    'Create a new user in your HubSpot account using the specified details. This endpoint requires a JSON request body with user information such as email, first name, last name, role, and seats. A welcome email can be optionally sent to the new user. ',
  operationId: 'post-/settings/users/2026-09',
  request: {
    body: {
      content: { 'application/json': { schema: UserProvisionRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicUserSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.write'] }, { oauth2: ['crm.objects.users.write'] }],
})

export const getSettingsUsers202609RolesRoute = createRoute({
  method: 'get',
  path: '/settings/users/2026-09/roles',
  tags: ['Roles'],
  summary: 'Retrieves the roles on an account',
  description:
    'Retrieve a list of user roles available in your HubSpot account. This endpoint provides information about the different permission sets that can be assigned to users, which is useful for managing user access and permissions within the account.',
  operationId: 'get-/settings/users/2026-09/roles',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicPermissionSetNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.users.read'] }, { oauth2: ['settings.users.read'] }],
})

export const getSettingsUsers202609SeatsRoute = createRoute({
  method: 'get',
  path: '/settings/users/2026-09/seats',
  tags: ['Seats'],
  summary: 'Retrieves the seats on this account',
  description:
    'Retrieve the list of seats available in the account. This endpoint provides details about each seat, including its name, description, and the number of remaining seats. It is useful for managing and reviewing seat allocations within your organization.',
  operationId: 'get-/settings/users/2026-09/seats',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponsePublicSeatNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.billing.write'] }],
})

export const getSettingsUsers202609TeamsRoute = createRoute({
  method: 'get',
  path: '/settings/users/2026-09/teams',
  tags: ['Teams'],
  summary: "See details about this account's teams",
  description: 'View teams for this account',
  operationId: 'get-/settings/users/2026-09/teams',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponsePublicTeamNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.teams.read'] }],
})

export const getSettingsUsers202609UserIdRoute = createRoute({
  method: 'get',
  path: '/settings/users/2026-09/{userId}',
  tags: ['Users'],
  summary: 'Retrieves a user',
  description:
    "Retrieves a user identified by `userId`. `userId` refers to the user's ID by default, or optionally email as specified by the `IdProperty` query param.",
  operationId: 'get-/settings/users/2026-09/{userId}',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The unique identifier of the user to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      idProperty: z
        .enum(['EMAIL', 'USER_ID'])
        .exactOptional()
        .openapi({
          param: {
            name: 'idProperty',
            in: 'query',
            description:
              "Specifies the property used to identify the user. Valid values are 'USER_ID' and 'EMAIL'.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL', 'USER_ID'] },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicUserSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.objects.users.read'] }, { oauth2: ['settings.users.read'] }],
})

export const putSettingsUsers202609UserIdRoute = createRoute({
  method: 'put',
  path: '/settings/users/2026-09/{userId}',
  tags: ['Users'],
  summary: 'Modifies a user',
  description:
    "Modifies a user identified by `userId`. `userId` refers to the user's ID by default, or optionally email as specified by the `IdProperty` query param.",
  operationId: 'put-/settings/users/2026-09/{userId}',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The unique identifier of the user to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      idProperty: z
        .enum(['EMAIL', 'USER_ID'])
        .exactOptional()
        .openapi({
          param: {
            name: 'idProperty',
            in: 'query',
            description:
              "Specifies the property to use for identifying the user. Valid values are 'USER_ID' or 'EMAIL'.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL', 'USER_ID'] },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicUserUpdateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicUserSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.write'] }, { oauth2: ['crm.objects.users.write'] }],
})

export const deleteSettingsUsers202609UserIdRoute = createRoute({
  method: 'delete',
  path: '/settings/users/2026-09/{userId}',
  tags: ['Users'],
  summary: 'Removes a user',
  description:
    "Removes a user identified by `userId`. `userId` refers to the user's ID by default, or optionally email as specified by the `IdProperty` query param.",
  operationId: 'delete-/settings/users/2026-09/{userId}',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The unique identifier of the user to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      idProperty: z
        .enum(['EMAIL', 'USER_ID'])
        .exactOptional()
        .openapi({
          param: {
            name: 'idProperty',
            in: 'query',
            description:
              "Specifies the property to identify the user. Valid values are 'USER_ID' or 'EMAIL'.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL', 'USER_ID'] },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['settings.users.write'] }, { oauth2: ['crm.objects.users.write'] }],
})
