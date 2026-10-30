import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor for pagination, indicating the position after the last item on the current page.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL link to the next page of results.',
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
    primary: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this team is the primary team.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'name', 'primary'], example: null })
  .openapi('PublicTeam')

const PublicOwnerSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({ description: 'Indicates whether the owner is archived.', example: null }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the owner was created.', example: null }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the owner.', example: null }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the owner.', example: null }),
    id: z.string().openapi({ description: 'The unique identifier of the owner.', example: null }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the owner.', example: null }),
    teams: z
      .array(PublicTeamSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of teams associated with the owner, where each team is represented by a PublicTeam object.',
        example: null,
      }),
    type: z
      .enum(['PERSON', 'QUEUE'])
      .openapi({
        description: 'The type of the owner, which can be either PERSON or QUEUE.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the owner was last updated.',
        example: null,
      }),
    userId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The user ID of the owner.', example: null }),
    userIdIncludingInactive: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The user ID of the owner, including inactive users.',
        example: null,
      }),
  })
  .openapi({ required: ['archived', 'createdAt', 'id', 'type', 'updatedAt'], example: null })
  .openapi('PublicOwner')

const CollectionResponsePublicOwnerForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicOwnerSchema)
      .openapi({
        description:
          'An array of PublicOwner objects, each representing an individual owner with their specific details.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicOwnerForwardPaging')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
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
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
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
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
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
        automation: '',
        'crm.objects.owners.read': '',
        'crm.pipelines.approval.read': '',
        'crm.pipelines.governance.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmOwners202609Route = createRoute({
  method: 'get',
  path: '/crm/owners/2026-09',
  tags: ['Basic'],
  summary: 'List owners',
  description:
    "Retrieve a paginated list of owners from your HubSpot account. This endpoint allows filtering by email and supports pagination through the 'after' parameter. You can also specify the maximum number of results per page and choose to include archived owners in the response.",
  operationId: 'get-/crm/owners/2026-09_/crm/owners/v3',
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
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'Filter by email address (optional)',
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 100 },
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
          schema: CollectionResponsePublicOwnerForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.pipelines.governance.write'] },
  ],
})

export const getCrmOwners202609OwnerIdRoute = createRoute({
  method: 'get',
  path: '/crm/owners/2026-09/{ownerId}',
  tags: ['Basic'],
  summary: 'Retrieve a specific owner by ID',
  description: "Retrieve details of a specific owner using either their 'id' or 'userId'.",
  operationId: 'get-/crm/owners/2026-09/{ownerId}_getById',
  request: {
    params: z.object({
      ownerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'ownerId',
            in: 'path',
            description: 'The unique identifier of the owner to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      idProperty: z
        .enum(['id', 'userId'])
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'idProperty',
            in: 'query',
            description:
              "Specifies which property to use for identifying the owner. Valid values are 'id' or 'userId'. Defaults to 'id'.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, default: 'id', enum: ['id', 'userId'] },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicOwnerSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.pipelines.governance.write'] },
  ],
})
