import { createRoute, z } from '@hono/zod-openapi'

const TeamMemberAssignmentSchema = z
  .object({
    type: z
      .enum(['DEFAULT', 'EXTRA'])
      .openapi({
        description:
          "The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.",
        example: null,
      }),
    userId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the user being assigned to the team. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['type', 'userId'], example: null })
  .openapi('TeamMemberAssignment')

const BatchInputTeamMemberAssignmentSchema = z
  .object({
    inputs: z
      .array(TeamMemberAssignmentSchema)
      .openapi({
        description:
          "An array of team member assignments, where each item specifies the details of a team member to be assigned. Each item is of type 'TeamMemberAssignment'.",
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputTeamMemberAssignment')

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
          'Context about the error condition, represented as an object with additional properties that are arrays of strings.',
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

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string representing the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error condition, with keys as context names and values as arrays of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies the error instance.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message describing the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string indicating the status of the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const TeamMemberResponseSchema = z
  .object({
    type: z
      .enum(['DEFAULT', 'EXTRA'])
      .openapi({
        description:
          "The type of membership the user has in the team. Valid values are 'DEFAULT' and 'EXTRA'.",
        example: null,
      }),
    userId: z
      .string()
      .openapi({
        description: 'The unique identifier for the user, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['type', 'userId'], example: null })
  .openapi('TeamMemberResponse')

const BatchResponseTeamMemberResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors that occurred during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs providing additional information about the batch operation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(TeamMemberResponseSchema)
      .openapi({
        description:
          'An array of TeamMemberResponse objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseTeamMemberResponse')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token representing the cursor position after the last successfully read resource. This is used to fetch the next set of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides the direct link to the next page of results.',
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

const CollectionResponseTeamMemberResponseForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(TeamMemberResponseSchema)
      .openapi({
        description:
          'An array of team member responses, each represented by a TeamMemberResponse object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseTeamMemberResponseForwardPaging')

const TeamResponseSchema = z
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
    parentTeamId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the parent team, if applicable, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'name'], example: null })
  .openapi('TeamResponse')

const CollectionResponseTeamResponseForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(TeamResponseSchema)
      .openapi({
        description: 'An array of team responses, each representing a team object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseTeamResponseForwardPaging')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'The error category, represented as a string.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing context about the error condition. It includes additional properties where each is an array of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array providing further information about the error, with each item being an ErrorDetail object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing documentation about the error or recommended remediation steps. It is an object with string properties.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more detailed information about the error. It is a string.',
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

const TeamCreateRequestSchema = z
  .object({
    members: z
      .array(TeamMemberAssignmentSchema)
      .openapi({
        description:
          'An array of team members to be assigned to the new team. Each member is represented by a TeamMemberAssignment object. This is a required field.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The name of the team to be created. This is a required field and must be a string.',
        example: null,
      }),
    parentTeamId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the parent team, if the new team is a sub-team. This is an optional field and must be a string if provided.',
        example: null,
      }),
  })
  .openapi({ required: ['members', 'name'], example: null })
  .openapi('TeamCreateRequest')

const TeamUpdateRequestSchema = z
  .object({
    name: z
      .object({})
      .openapi({ description: 'An object representing the new name for the team.', example: null }),
    parentTeamId: z
      .object({})
      .openapi({
        description:
          'An object representing the ID of the parent team to which this team will be associated.',
        example: null,
      }),
  })
  .openapi({ required: ['name', 'parentTeamId'], example: null })
  .openapi('TeamUpdateRequest')

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
      scopes: { 'settings.users.teams.read': '', 'settings.users.teams.write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getSettingsTeams202609Route = createRoute({
  method: 'get',
  path: '/settings/teams/2026-09',
  tags: ['Basic'],
  summary: 'List teams',
  description:
    "Retrieve a list of teams from your HubSpot account. This endpoint allows you to paginate through the teams using the 'limit' and 'after' query parameters. It is useful for obtaining an overview of all teams configured in the account.",
  operationId: 'get-/settings/teams/2026-09',
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
          schema: CollectionResponseTeamResponseForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.teams.read'] }],
})

export const postSettingsTeams202609Route = createRoute({
  method: 'post',
  path: '/settings/teams/2026-09',
  tags: ['Basic'],
  summary: 'Create Team',
  description:
    "Create a new team in your HubSpot account. This endpoint allows you to define the team's name, parent team, and members. The request body must include the team's name and members. Upon successful creation, the response will include the URL of the newly created team resource.",
  operationId: 'post-/settings/teams/2026-09',
  request: {
    body: {
      content: { 'application/json': { schema: TeamCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: TeamResponseSchema, example: null } },
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
  security: [{ oauth2: ['settings.users.teams.write'] }],
})

export const getSettingsTeams202609TeamIdRoute = createRoute({
  method: 'get',
  path: '/settings/teams/2026-09/{teamId}',
  tags: ['Basic'],
  summary: 'Retrieve team',
  description:
    "Retrieve detailed information about a specific team in your HubSpot account using the team's unique identifier. This endpoint is useful for accessing the team's properties, such as its name and parent team ID, to manage or display team-related data.",
  operationId: 'get-/settings/teams/2026-09/{teamId}',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TeamResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.teams.read'] }],
})

export const deleteSettingsTeams202609TeamIdRoute = createRoute({
  method: 'delete',
  path: '/settings/teams/2026-09/{teamId}',
  tags: ['Basic'],
  summary: 'Delete team',
  description:
    "Delete a specific team from your HubSpot account using the team's unique identifier. This operation will remove the team and its associated data. Ensure that you have the necessary permissions to perform this action.",
  operationId: 'delete-/settings/teams/2026-09/{teamId}',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['settings.users.teams.write'] }],
})

export const patchSettingsTeams202609TeamIdRoute = createRoute({
  method: 'patch',
  path: '/settings/teams/2026-09/{teamId}',
  tags: ['Basic'],
  summary: 'Update team',
  description:
    "Update the details of a specific team in your HubSpot account. This endpoint allows you to modify the team's information, such as its name or parent team ID. Ensure that the teamId provided in the path is correct, as it identifies the team to be updated.",
  operationId: 'patch-/settings/teams/2026-09/{teamId}',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: TeamUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TeamResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.teams.write'] }],
})

export const getSettingsTeams202609TeamIdMembersRoute = createRoute({
  method: 'get',
  path: '/settings/teams/2026-09/{teamId}/members',
  tags: ['Basic'],
  summary: 'List members',
  description:
    "Retrieve a list of members for a specified team in your HubSpot account. This endpoint allows you to paginate through the team members using the 'limit' and 'after' query parameters. It is useful for managing and viewing team compositions and roles within your organization.",
  operationId: 'get-/settings/teams/2026-09/{teamId}/members',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team whose members are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.',
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
          schema: CollectionResponseTeamMemberResponseForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.teams.read'] }],
})

export const postSettingsTeams202609TeamIdMembersRoute = createRoute({
  method: 'post',
  path: '/settings/teams/2026-09/{teamId}/members',
  tags: ['Basic'],
  summary: 'Add Team Members',
  description:
    'Assign new members to a specific team in your HubSpot account. This endpoint allows you to add users to a team by specifying their user IDs and roles. It is useful for managing team compositions and ensuring the right users have access to team resources.',
  operationId: 'post-/settings/teams/2026-09/{teamId}/members',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team to which members will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: TeamMemberAssignmentSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: TeamMemberResponseSchema, example: null } },
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
  security: [{ oauth2: ['settings.users.teams.write'] }],
})

export const postSettingsTeams202609TeamIdMembersBatchRoute = createRoute({
  method: 'post',
  path: '/settings/teams/2026-09/{teamId}/members/batch',
  tags: ['Batch'],
  summary: 'Batch assign members',
  description:
    'Assign multiple members to a specific team in a single request. This endpoint allows for efficient management of team memberships by processing multiple assignments at once. It is useful for organizations looking to streamline their team management processes.',
  operationId: 'post-/settings/teams/2026-09/{teamId}/members/batch',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team to which members will be assigned.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BatchInputTeamMemberAssignmentSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseTeamMemberResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['settings.users.teams.write'] }],
})

export const deleteSettingsTeams202609TeamIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/settings/teams/2026-09/{teamId}/members/{userId}',
  tags: ['Basic'],
  summary: 'Delete member',
  description:
    'Remove a specific member from a team in your HubSpot account. This operation requires specifying both the team and user identifiers. It is useful for managing team compositions by removing users who no longer need access or association with a particular team.',
  operationId: 'delete-/settings/teams/2026-09/{teamId}/members/{userId}',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'The unique identifier of the team from which the member will be removed.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The unique identifier of the user to be removed from the team.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      type: z
        .enum(['DEFAULT', 'EXTRA'])
        .default('DEFAULT')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              "Specifies the type of removal. Acceptable values are 'DEFAULT' or 'EXTRA'. Defaults to 'DEFAULT'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              example: null,
              default: 'DEFAULT',
              enum: ['DEFAULT', 'EXTRA'],
            },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['settings.users.teams.write'] }],
})
