import { createRoute, z } from '@hono/zod-openapi'

const AddNewCollaboratorRequestSchema = z
  .object({
    collaborator_type: z.string().exactOptional(),
    user_email: z.string().exactOptional(),
    user_id: z.uuid().exactOptional(),
  })
  .openapi({
    description: 'required subset of collaborator data to get a permission',
    title: 'Collaborator permission data',
    required: [],
  })
  .openapi('AddNewCollaboratorRequest')

const BaseModelSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ 'x-nullable': true }),
    created_by: z.uuid().exactOptional().openapi({ 'x-nullable': true }),
    id: z.uuid().exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ 'x-nullable': true }),
    updated_by: z.uuid().exactOptional().openapi({ 'x-nullable': true }),
  })
  .openapi({ description: 'Base model for all types', title: 'BaseModel', required: [] })
  .openapi('BaseModel')

const CachePostRequestSchema = z
  .object({
    current_user_id: z.uuid().exactOptional(),
    nonce: z.uuid().exactOptional(),
    subdocument: z.string().exactOptional(),
  })
  .openapi({ title: 'Cache Post Request body', required: [] })
  .openapi('CachePostRequest')

const CollaboratorBulkUpdateRequestSchema = z
  .object({
    active: z.boolean().exactOptional(),
    lead_id: z.int32().exactOptional(),
    user_id: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      'allows for bulk updating of user_ids and active status based on a lead id or user_id',
    title: 'Collaborator data to change',
    required: [],
  })
  .openapi('CollaboratorBulkUpdateRequest')

const CreateSessionRequestSchema = z
  .object({ collaboratorUserId: z.uuid().exactOptional(), host: z.string().exactOptional() })
  .openapi({
    description: 'Request body for creating a session',
    title: 'session-create',
    required: [],
  })
  .openapi('CreateSessionRequest')

const EventSchema = BaseModelSchema.and(
  z
    .object({
      attributes: z.string().exactOptional(),
      chat_prompt: z.string().exactOptional(),
      conversation_id: z.string().exactOptional(),
      dom_selectors: z.string().exactOptional(),
      is_chat_hidden: z.boolean().exactOptional(),
      is_notify_enabled: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'An Story Event object', title: 'Event' })
  .openapi('Event')

const FileUploadSchema = z
  .object({
    content_length: z.int().exactOptional(),
    file: z.string().exactOptional(),
    file_name: z.string().exactOptional(),
    mimetype: z.string().exactOptional(),
  })
  .openapi({ description: 'A Base64 encoded file object', title: 'File Upload', required: [] })
  .openapi('FileUpload')

const ManageEventSchema = z
  .object({
    action: z.enum(['create', 'fire', 'change', 'delete']).exactOptional(),
    action_params: z.looseObject({}).exactOptional(),
    name: z.string().nullable().exactOptional().openapi({ 'x-nullable': true }),
  })
  .openapi({ title: 'Event Actions', required: [] })
  .openapi('ManageEvent')

const MessageSchema = z
  .object({
    body: z.string().exactOptional(),
    id: z.string().exactOptional(),
    remote: z.boolean().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    userId: z.uuid().exactOptional(),
    userName: z.string().exactOptional(),
  })
  .openapi({ description: 'A conversation message', title: 'Message', required: [] })
  .openapi('Message')

const ModifyInactiveCollaboratorSchema = z
  .object({
    action: z.string().exactOptional(),
    lead_id: z.int32().exactOptional(),
    user_id: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      'Action can be either "delete" or "activate".  Either lead_id or user_id is required.  user_id takes precedence.',
    title: 'Collaborator permission data',
    required: [],
  })
  .openapi('ModifyInactiveCollaborator')

const OoxmlDocumentSchema = BaseModelSchema.and(
  z
    .object({
      delete_target_on_story_delete: z.boolean().exactOptional(),
      ooxml_automation_id: z.uuid().exactOptional(),
      story_id: z.uuid().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API',
    title: 'Ooxml Document',
  })
  .openapi('OoxmlDocument')

const OutlineSchema = z
  .object({ outline: z.string().exactOptional() })
  .openapi({ description: 'story_outline (json object)', title: 'Story Outline', required: [] })
  .openapi('Outline')

const PermissionTypeSchema = BaseModelSchema.and(
  z
    .object({
      can_add_collaborators: z.boolean().exactOptional(),
      can_delete: z.boolean().exactOptional(),
      can_edit: z.boolean().exactOptional(),
      can_view: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A permission type that can be applied to story collaborator',
    title: 'Permission Type',
  })
  .openapi('PermissionType')

const ProblemDetailSchema = z
  .object({
    detail: z.string().exactOptional(),
    status: z.int32().exactOptional(),
    title: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ description: 'Error reponse model', title: 'Problem Detail', required: [] })
  .openapi('ProblemDetail')

const StoryCollaboratorSchema = BaseModelSchema.and(
  z
    .object({
      active: z.boolean().nullable().exactOptional().openapi({ 'x-nullable': true }),
      email: z.string().exactOptional(),
      lead_id: z.int32().nullable().exactOptional().openapi({ 'x-nullable': true }),
      name: z.string().exactOptional(),
      permission_type: PermissionTypeSchema.nullable()
        .exactOptional()
        .openapi({ 'x-nullable': true }),
      permission_type_id: z.uuid().exactOptional(),
      story_id: z.uuid().exactOptional(),
      user_id: z.uuid().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'Description of a user that can collaborate on a story',
    title: 'Story Collaborator',
  })
  .openapi('StoryCollaborator')

const ViewSchema = BaseModelSchema.and(
  z
    .object({
      active_msecs: z.int().exactOptional(),
      additional: z.string().exactOptional(),
      end_time: z.iso.datetime({ offset: true }).exactOptional(),
      page_number: z.int().exactOptional(),
      session_id: z.uuid().exactOptional(),
      start_time: z.iso.datetime({ offset: true }).exactOptional(),
      total_msecs: z.int().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'A Page view within a session-create', title: 'View' })
  .openapi('View')

const SessionSchema = BaseModelSchema.and(
  z
    .object({
      collaborator: StoryCollaboratorSchema.exactOptional(),
      collaborator_id: z.uuid().exactOptional(),
      host: z.string().exactOptional(),
      outline_revision: z.int().exactOptional(),
      views: z.array(ViewSchema).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'A user session with an open story', title: 'Session' })
  .openapi('Session')

const StatusSchema = z
  .object({ status: z.string().exactOptional() })
  .openapi({ description: 'Status response when returning 202s', title: 'Status', required: [] })
  .openapi('Status')

const StoryOutlineHistorySchema = BaseModelSchema.and(
  z
    .object({
      collaborator_user_id: z.uuid().exactOptional(),
      outline: z.string().exactOptional(),
      revision_number: z.int().exactOptional(),
      story_id: z.uuid().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A revision repository for story outlines',
    title: 'Story Outline History',
  })
  .openapi('StoryOutlineHistory')

const StorySchema = BaseModelSchema.and(
  z
    .object({
      collaborators: z
        .array(StoryCollaboratorSchema)
        .exactOptional()
        .openapi({ 'x-nullable': true }),
      is_public: z.boolean().exactOptional().openapi({ 'x-nullable': true }),
      ooxml_documents: z.array(OoxmlDocumentSchema).exactOptional().openapi({ 'x-nullable': true }),
      outline: z.string().nullable().exactOptional().openapi({ 'x-nullable': true }),
      outline_history: z
        .array(StoryOutlineHistorySchema)
        .exactOptional()
        .openapi({ 'x-nullable': true }),
      revision: z.int().exactOptional().openapi({ 'x-nullable': true }),
      title: z.string().exactOptional().openapi({ 'x-nullable': true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Model for story objects', title: 'Story' })
  .openapi('Story')

const AcceptedResponse = {
  description: 'Accepted',
  content: { 'application/json': { schema: StatusSchema } },
}

const BadrequestResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: ProblemDetailSchema } },
}

const ForbiddenResponse = {
  description: 'Forbidden',
  content: { 'application/json': { schema: ProblemDetailSchema } },
}

const GoneResponse = { description: 'Gone' }

const NotfoundResponse = {
  description: 'Not found',
  content: { 'application/json': { schema: ProblemDetailSchema } },
}

const OutlineResponse = {
  description: 'Success responses with story object',
  content: { 'application/json': { schema: OutlineSchema } },
}

const StoryResponse = {
  description: 'Success responses with story object',
  content: { 'application/json': { schema: StorySchema } },
}

const SuccessResponseNoContentResponse = { description: 'Success' }

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: ProblemDetailSchema } },
}

const UnprocessableEntityResponse = {
  description: 'Unprocessable Entity',
  content: { 'application/json': { schema: ProblemDetailSchema } },
}

const UnsupportedMediaTypeResponse = {
  description: 'Unsupported Media Type',
  content: { 'application/json': { schema: ProblemDetailSchema } },
}

const D3IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A d3 figure id from a D3Widget instance in the Presaltyics Python Library',
      in: 'path',
      name: 'd3_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const FigureIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'A matplotlib figure id from a MatplotlibResponsiveFigure instance in the Presaltyics Python Library',
      in: 'path',
      name: 'figure_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const FullParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Pull a story object with associated collaborator user, permission, and session data(faster if cached from prior api call)',
      in: 'query',
      name: 'full',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const IdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'the id from the story object',
      in: 'path',
      name: 'id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const IncludeOutlineParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.',
      in: 'query',
      name: 'include_outline',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const IncludeRelationshipsParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicate whether the returned object should include child relationships',
      in: 'query',
      name: 'include_relationships',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const NonceParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'A one-time use token for retieving items in the users cache',
      in: 'path',
      name: 'nonce',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ObsoleteIdParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A primary key pointing to an obsolete item in the story. Item type is context-dependent',
      in: 'query',
      name: 'obsolete_id',
      required: false,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const OoxmlAutomationIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'the id of the ooxml_automation object',
      in: 'path',
      name: 'ooxml_automation_id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const PermissiontypeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The type of access required.  Must match - admin, owner, editor, viewer',
      in: 'path',
      name: 'permissiontype',
      required: true,
      schema: { type: 'string' },
    },
  })

const RefreshCacheParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Force the api reload the `Story full` object',
      in: 'query',
      name: 'refresh_cache',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ReplaceExistingParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates whether a put or post method would replace the existing contents',
      in: 'query',
      name: 'replace_existing',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const SchemaVersionParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "The semanitic version of a schema (e.g. '0.3.1')",
      in: 'path',
      name: 'schema_version',
      required: true,
      schema: { type: 'string' },
    },
  })

const SessionIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'The primary key for a view session',
      in: 'path',
      name: 'session_id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const StoryCollaboratorUseridParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'The presalytics userid (NOT the Id of the story_collaborator object)',
      in: 'path',
      name: 'story_collaborator_userid',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ViewIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'The primary key for a page view within a session',
      in: 'path',
      name: 'view_id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const JwtSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Story'],
  summary: 'Story: Get List of User Stories',
  description:
    'Returns a list of stories for this user identifie via the access token presentated to the api',
  operationId: 'story_get',
  request: {
    query: z.object({
      include_relationships: IncludeRelationshipsParamsSchema,
      include_outline: IncludeOutlineParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of stories for this user',
      content: { 'application/json': { schema: z.array(StorySchema) } },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Story'],
  summary: 'Story: Upload',
  description: 'Upload new story to presalytics api',
  operationId: 'story_post',
  request: {
    query: z.object({ include_outline: IncludeOutlineParamsSchema }),
    body: {
      description: 'A story outline json object',
      content: { 'application/json': { schema: OutlineSchema } },
      required: true,
    },
  },
  responses: {
    200: StoryResponse,
    415: UnsupportedMediaTypeResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postCacheRoute = createRoute({
  method: 'post',
  path: '/cache',
  tags: ['Cache'],
  summary: 'Cache: Store Subdocument',
  description:
    'An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.',
  operationId: 'cache_post',
  request: {
    body: {
      description: 'parameters to identify an update a collaborator across multiple stories',
      content: { 'application/json': { schema: CachePostRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getCacheNonceRoute = createRoute({
  method: 'get',
  path: '/cache/{nonce}',
  tags: ['Cache'],
  summary: 'Cache: Get Subdocument',
  description:
    'An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)',
  operationId: 'cache_nonce_get',
  request: { params: z.object({ nonce: NonceParamsSchema }) },
  responses: {
    200: {
      description: 'A cached html subdocument (typically loaded via iframe)',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              description: 'html document with a link to the login page',
              title: 'Login Button',
            }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const postCollaboratorsRoute = createRoute({
  method: 'post',
  path: '/collaborators',
  tags: ['Restricted'],
  summary: 'Collborators: Bulk Update (Admin Only)',
  description: 'Allows for bulk updates on collaborator metadata.  Restricted to internal admins',
  operationId: 'collaborators_post',
  request: {
    body: {
      description: 'parameters to identify an update a collaborator across multiple stories',
      content: { 'application/json': { schema: CollaboratorBulkUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Array of all possible permission types',
      content: {
        'application/json': {
          schema: z.array(PermissionTypeSchema).openapi({ title: 'List of Permission Types' }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const getEnvironmentIndexRoute = createRoute({
  method: 'get',
  path: '/environment/',
  summary: 'Environment: Get',
  description: 'pass rendering metadata to the client-side scripts',
  operationId: 'get_environment',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
  },
})

export const postFileRoute = createRoute({
  method: 'post',
  path: '/file',
  tags: ['Story'],
  summary: 'Story: Upload a File',
  description: 'Upload new story to presalytics api via an Open Office Xml file',
  operationId: 'story_post_file',
  request: {
    query: z.object({ include_outline: IncludeOutlineParamsSchema }),
    body: {
      description: 'A pptx or xlsx file upload or story outline json object',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .exactOptional(),
            })
            .openapi({
              description: 'A pptx or xlsx object from which to start creation of a story',
              title: 'Open Office Xml document (e.g., xlsx, pptx file)',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: StoryResponse,
    415: UnsupportedMediaTypeResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postFileJsonRoute = createRoute({
  method: 'post',
  path: '/file/json',
  tags: ['Story'],
  summary: 'Story: Upload a File (base64)',
  description: 'Upload new story to presalytics api via an Open Office Xml file',
  operationId: 'story_post_file_json',
  request: {
    query: z.object({ include_outline: IncludeOutlineParamsSchema }),
    body: {
      description:
        'A json-formatted object that includes a base64 encoded file (file encoded utf-8)',
      content: { 'application/json': { schema: FileUploadSchema } },
    },
  },
  responses: {
    200: StoryResponse,
    415: UnsupportedMediaTypeResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getNoTagsSpecRoute = createRoute({
  method: 'get',
  path: '/no_tags_spec',
  summary: 'Specification: No tags',
  description:
    'json-formatted version of this spec with the tags removed to help with codegen processes',
  operationId: 'spec_no_tags',
  responses: { 200: { description: 'Success' }, 400: BadrequestResponse },
})

export const getOutlineSchemaSchemaVersionStoryOutlineJsonRoute = createRoute({
  method: 'get',
  path: '/outline-schema/{schema_version}/story-outline.json',
  tags: ['Schemas'],
  summary: 'Story Outline Schema',
  description: 'Json Schema for validating Story Outline objects',
  operationId: 'story_outline_schema',
  request: { params: z.object({ schema_version: SchemaVersionParamsSchema }) },
  responses: { 200: { description: 'Success' }, 400: BadrequestResponse },
})

export const getPermissionTypesRoute = createRoute({
  method: 'get',
  path: '/permission_types',
  tags: ['Permissions'],
  summary: 'Permissions: List Permission Types',
  description: 'Returns a list of possible user permission types',
  operationId: 'story_permission_types_get',
  responses: {
    200: {
      description: 'Array of all possible permission types',
      content: {
        'application/json': {
          schema: z.array(PermissionTypeSchema).openapi({ title: 'List of Permission Types' }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const getSessionsSessionIdRoute = createRoute({
  method: 'get',
  path: '/sessions/{session_id}',
  tags: ['Sessions'],
  summary: 'Sessions: Get',
  description: 'Get session metadata',
  operationId: 'session_id_get',
  request: {
    params: z.object({ session_id: SessionIdParamsSchema }),
    query: z.object({ include_relationships: IncludeRelationshipsParamsSchema }),
  },
  responses: {
    200: {
      description: 'A session object',
      content: { 'application/json': { schema: SessionSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const deleteSessionsSessionIdRoute = createRoute({
  method: 'delete',
  path: '/sessions/{session_id}',
  tags: ['Sessions'],
  summary: 'Sessions: Delete by Id',
  description: 'Remove a session and dependant data.',
  operationId: 'session_id_delete',
  request: { params: z.object({ session_id: SessionIdParamsSchema }) },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getSessionsSessionIdViewsRoute = createRoute({
  method: 'get',
  path: '/sessions/{session_id}/views',
  tags: ['Views'],
  summary: 'Views: List Session Views',
  description: 'Get data for all views in a session',
  operationId: 'sessions_id_views_get',
  request: { params: z.object({ session_id: SessionIdParamsSchema }) },
  responses: {
    200: {
      description: 'A List of session views',
      content: { 'application/json': { schema: z.array(ViewSchema) } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const postSessionsSessionIdViewsRoute = createRoute({
  method: 'post',
  path: '/sessions/{session_id}/views',
  tags: ['Views'],
  summary: 'Views: Create A Session View',
  description: 'Create a page view object for a viewing session',
  operationId: 'sessions_id_views_post',
  request: {
    params: z.object({ session_id: SessionIdParamsSchema }),
    body: {
      description: 'Collaborator user id and permission type',
      content: {
        'application/json': {
          schema: z
            .object({
              activeMSecs: z.int().exactOptional(),
              additional: z.string().exactOptional(),
              endTime: z.iso.datetime({ offset: true }),
              pageNumber: z.int(),
              startTime: z.iso.datetime({ offset: true }),
            })
            .openapi({
              description:
                'A page view required a page number from the story outline to be created',
              required: ['pageNumber', 'startTime', 'endTime'],
              title: 'Required parameters to create a view',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A new view object',
      content: { 'application/json': { schema: ViewSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const getViewsViewIdRoute = createRoute({
  method: 'get',
  path: '/views/{view_id}',
  tags: ['Views'],
  summary: 'Views: Get View',
  description: 'Get view meta data',
  operationId: 'views_id_get',
  request: { params: z.object({ view_id: ViewIdParamsSchema }) },
  responses: {
    200: {
      description: 'A List of session views',
      content: { 'application/json': { schema: ViewSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const deleteViewsViewIdRoute = createRoute({
  method: 'delete',
  path: '/views/{view_id}',
  tags: ['Views'],
  summary: 'Views: Delete by Id',
  description: 'Remove a view and dependant data.',
  operationId: 'views_id_delete',
  request: { params: z.object({ view_id: ViewIdParamsSchema }) },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdRoute = createRoute({
  method: 'get',
  path: '/{id}',
  tags: ['Story'],
  summary: 'Story: Get by Id',
  description: 'Returns story metadata, inlcuding json object with story outline',
  operationId: 'story_id_get',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({
      include_relationships: IncludeRelationshipsParamsSchema,
      include_outline: IncludeOutlineParamsSchema,
      full: FullParamsSchema,
      refresh_cache: RefreshCacheParamsSchema,
    }),
  },
  responses: {
    200: StoryResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const putIdRoute = createRoute({
  method: 'put',
  path: '/{id}',
  tags: ['Story'],
  summary: 'Story: Modify',
  description: 'Update story metadata, including story outline',
  operationId: 'story_id_put',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ include_outline: IncludeOutlineParamsSchema }),
    body: {
      description: 'The updated story object',
      content: { 'application/json': { schema: StorySchema } },
      required: true,
    },
  },
  responses: {
    200: StoryResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const deleteIdRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  tags: ['Story'],
  summary: 'Story: Delete by Id',
  description: 'Remove a story and dependant data.',
  operationId: 'story_id_delete',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdAnalyticsRoute = createRoute({
  method: 'get',
  path: '/{id}/analytics',
  tags: ['Story'],
  summary: 'Story: View Analytics',
  description: 'returns an html document containing session and event metrics for the story',
  operationId: 'story_id_analytics',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'An html document containing session analytics for the story',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              description: 'html document with reveal.js presenation of story',
              title: 'reveal.js presenation with analytics data',
            }),
        },
      },
    },
    400: BadrequestResponse,
    401: {
      description: 'An html document containing a login button',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              description: 'html document with a link to the login page',
              title: 'Login Button',
            }),
        },
      },
    },
    404: NotfoundResponse,
  },
})

export const getIdCollaboratorsRoute = createRoute({
  method: 'get',
  path: '/{id}/collaborators',
  tags: ['Story Collaborators'],
  summary: 'Story Collaborators: List',
  description: 'Gets a list users that can read or edit this story',
  operationId: 'story_id_collaborators_get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'List of collaborators on the story',
      content: { 'application/json': { schema: z.array(StoryCollaboratorSchema) } },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const postIdCollaboratorsRoute = createRoute({
  method: 'post',
  path: '/{id}/collaborators',
  tags: ['Story Collaborators'],
  summary: 'Story Collaborators: Add New User',
  description: 'Add a colloborator to this story',
  operationId: 'story_id_collaborators_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      description: 'Collaborator user id and permission type',
      content: { 'application/json': { schema: AddNewCollaboratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collaborator data',
      content: { 'application/json': { schema: StoryCollaboratorSchema } },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute = createRoute({
  method: 'get',
  path: '/{id}/collaborators/authorize/{story_collaborator_userid}/{permissiontype}',
  tags: ['Permissions'],
  summary: 'Permissions: Story Authorization for a User',
  description:
    'Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden',
  operationId: 'story_id_collaborators_userid_permissiontype_get',
  request: {
    params: z.object({
      id: IdParamsSchema,
      story_collaborator_userid: StoryCollaboratorUseridParamsSchema,
      permissiontype: z
        .string()
        .openapi({
          param: {
            description:
              'the type of permission requested.  can be a permission_type object name (e.g., owner, editor, create, viewer, admin) or a permission type field (e.g., can_edit, can_view, can_add_collaborators, can_delete)',
            in: 'path',
            name: 'permissiontype',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: SuccessResponseNoContentResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const postIdCollaboratorsInactiveRoute = createRoute({
  method: 'post',
  path: '/{id}/collaborators/inactive',
  tags: ['Story Collaborators'],
  summary: 'Story Collaborators: Edit Inactive User Permission',
  description: 'Edit story permissions for inactive users.  Requires admin rights.',
  operationId: 'story_id_collaborators_inactive_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      description: 'Collaborator user id and permission type',
      content: { 'application/json': { schema: ModifyInactiveCollaboratorSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collaborator data',
      content: { 'application/json': { schema: StoryCollaboratorSchema } },
    },
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdCollaboratorsStoryCollaboratorUseridRoute = createRoute({
  method: 'get',
  path: '/{id}/collaborators/{story_collaborator_userid}',
  tags: ['Story Collaborators'],
  summary: 'Story Collaborators: Access Permissions',
  description:
    'Data to help you understand the access rights of a particular collaborator on this story',
  operationId: 'story_id_collaborators_userid_get',
  request: {
    params: z.object({
      id: IdParamsSchema,
      story_collaborator_userid: StoryCollaboratorUseridParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Collaborator data',
      content: { 'application/json': { schema: StoryCollaboratorSchema } },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const putIdCollaboratorsStoryCollaboratorUseridRoute = createRoute({
  method: 'put',
  path: '/{id}/collaborators/{story_collaborator_userid}',
  tags: ['Story Collaborators'],
  summary: 'Story Collaborators: Edit Access Rights',
  description: "Modify a user's access right to this story (e.g., grant edit permissions)",
  operationId: 'story_id_collaborators_userid_put',
  request: {
    params: z.object({
      id: IdParamsSchema,
      story_collaborator_userid: StoryCollaboratorUseridParamsSchema,
    }),
    body: {
      description: 'Collaborator user id (presalytics userid) and permission type',
      content: { 'application/json': { schema: StoryCollaboratorSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collaborator data',
      content: { 'application/json': { schema: StoryCollaboratorSchema } },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const deleteIdCollaboratorsStoryCollaboratorUseridRoute = createRoute({
  method: 'delete',
  path: '/{id}/collaborators/{story_collaborator_userid}',
  tags: ['Story Collaborators'],
  summary: 'Story Collaborators: Remove User',
  description: 'Remove a collaborator from this story',
  operationId: 'story_id_collaborators_userid_delete',
  request: {
    params: z.object({
      id: IdParamsSchema,
      story_collaborator_userid: StoryCollaboratorUseridParamsSchema,
    }),
  },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdEventsRoute = createRoute({
  method: 'get',
  path: '/{id}/events',
  tags: ['Events'],
  summary: 'Events: List Events',
  description: 'Get a list of Events available to users of this story',
  operationId: 'story_id_events_get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'An Array of events',
      content: { 'application/json': { schema: z.array(EventSchema) } },
    },
    401: UnauthorizedResponse,
  },
})

export const postIdEventsRoute = createRoute({
  method: 'post',
  path: '/{id}/events',
  tags: ['Events'],
  summary: 'Events: Manage Events',
  description: "Add a message to the Story's conversation",
  operationId: 'story_id_events_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      description: 'Collaborator user id and permission type',
      content: { 'application/json': { schema: ManageEventSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A repsonse to the requested action',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const postIdFileRoute = createRoute({
  method: 'post',
  path: '/{id}/file',
  tags: ['Story'],
  summary: 'Story: Upload a File To Existing Story',
  description: 'Upload a file to an existing story',
  operationId: 'story_id_file_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({
      replace_existing: ReplaceExistingParamsSchema,
      obsolete_id: ObsoleteIdParamsSchema,
      include_outline: IncludeOutlineParamsSchema,
    }),
    body: {
      description: 'A pptx or xlsx file upload or story outline json object',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .exactOptional(),
            })
            .openapi({
              description: 'A pptx or xlsx object from which to start creation of a story',
              title: 'Open Office Xml document (e.g., xlsx, pptx file)',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: StoryResponse,
    415: UnsupportedMediaTypeResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getIdFileOoxmlAutomationIdRoute = createRoute({
  method: 'get',
  path: '/{id}/file/{ooxml_automation_id}',
  tags: ['Story'],
  summary: 'Story: Download Updated File',
  description: 'Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)',
  operationId: 'story_id_file_ooxmlautomationid_get',
  request: {
    params: z.object({ id: IdParamsSchema, ooxml_automation_id: OoxmlAutomationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'The latest versiono of the story, in its orginal file format',
      content: {
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', title: 'Powerpoint presentation' }),
        },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.file().openapi({ type: 'string', format: 'binary', title: 'Word document' }),
        },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', title: 'Excel spreadsheet' }),
        },
      },
    },
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const deleteIdFileOoxmlAutomationIdRoute = createRoute({
  method: 'delete',
  path: '/{id}/file/{ooxml_automation_id}',
  tags: ['Story'],
  summary: 'Story: Delete Subdocument',
  description: 'Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)',
  operationId: 'story_id_file_ooxmlautomationid_delete',
  request: {
    params: z.object({ id: IdParamsSchema, ooxml_automation_id: OoxmlAutomationIdParamsSchema }),
  },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdMessagesRoute = createRoute({
  method: 'get',
  path: '/{id}/messages',
  tags: ['Conversation'],
  summary: 'Conversation: List Conversation Messages',
  description: 'Get a list of messages that have been send in this story',
  operationId: 'story_id_messages_get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'An Array of conversation messages',
      content: { 'application/json': { schema: z.array(MessageSchema) } },
    },
    401: UnauthorizedResponse,
  },
})

export const postIdMessagesRoute = createRoute({
  method: 'post',
  path: '/{id}/messages',
  tags: ['Conversation'],
  summary: 'Conversation: Send a Message',
  description: "Add a message to the Story's conversation",
  operationId: 'story_id_messages_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      description: 'The message text',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdOutlineRoute = createRoute({
  method: 'get',
  path: '/{id}/outline',
  tags: ['Story'],
  summary: 'Story: Get Story Outline',
  description: "Returns Story's outline",
  operationId: 'story_id_outline_get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'Stringified Story outline',
      content: { 'application/json': { schema: z.string() } },
    },
    202: AcceptedResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
    410: GoneResponse,
  },
})

export const postIdOutlineRoute = createRoute({
  method: 'post',
  path: '/{id}/outline',
  tags: ['Story'],
  summary: 'Story: Post Story Outline',
  description: 'Update a story outline.',
  operationId: 'story_id_outline_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      description: 'A story outline object',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})

export const getIdPublicIndexRoute = createRoute({
  method: 'get',
  path: '/{id}/public/',
  tags: ['Story'],
  summary: 'Story: Public Link to Story Reveal.js Document',
  description:
    'returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True',
  operationId: 'story_id_public',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'An html document containing a reveal.js represenation of the story',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              description: 'html document with reveal.js presenation of story',
              title: 'reveal.js presenation',
            }),
        },
      },
    },
    302: { description: 'Not Found redirect' },
    400: BadrequestResponse,
  },
})

export const getIdRevealRoute = createRoute({
  method: 'get',
  path: '/{id}/reveal',
  tags: ['Story'],
  summary: 'Story: Get Story at Reveal.js Document',
  description: 'returns an html document containing a reveal.js epresentation of the story',
  operationId: 'story_id_reveal',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'An html document containing a reveal.js represenation of the story',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              description: 'html document with reveal.js presenation of story',
              title: 'reveal.js presenation',
            }),
        },
      },
    },
    400: BadrequestResponse,
    401: {
      description: 'An html document containing a login button',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              description: 'html document with a link to the login page',
              title: 'Login Button',
            }),
        },
      },
    },
    404: NotfoundResponse,
  },
})

export const getIdSessionsRoute = createRoute({
  method: 'get',
  path: '/{id}/sessions',
  tags: ['Sessions'],
  summary: 'Sessions: List Story Sessions',
  description: 'Get a list of sessions asscoaited with this story',
  operationId: 'story_id_sessions_get',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ include_relationships: IncludeRelationshipsParamsSchema }),
  },
  responses: {
    200: {
      description: 'An array of session objects',
      content: { 'application/json': { schema: z.array(SessionSchema) } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const postIdSessionsRoute = createRoute({
  method: 'post',
  path: '/{id}/sessions',
  tags: ['Sessions'],
  summary: 'Sessions: Create a Session',
  description: 'Create a new session',
  operationId: 'story_id_session_post',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      description: 'Collaborator user id and permission type',
      content: { 'application/json': { schema: CreateSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A new session object',
      content: { 'application/json': { schema: SessionSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotfoundResponse,
  },
})

export const getIdStatusRoute = createRoute({
  method: 'get',
  path: '/{id}/status',
  tags: ['Story'],
  summary: 'Story: Get Story Status',
  description:
    'Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)',
  operationId: 'story_id_status_get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: AcceptedResponse,
    204: SuccessResponseNoContentResponse,
    400: BadrequestResponse,
    401: UnauthorizedResponse,
    404: NotfoundResponse,
  },
})
