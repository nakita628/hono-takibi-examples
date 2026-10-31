import { createRoute, z } from '@hono/zod-openapi'

const ActivitySchema = z
  .object({
    activity_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead.',
      }),
    activity_type_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key for a custom activity type for the workspace. Will create a new activity type if it does not exist.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the activity; displayed in the timeline' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Supply a key that must be unique or leave blank to have one generated.',
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL for the activity; displayed in the timeline' }),
    link_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text for the timeline link' }),
    occurred_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time the activity occurred; defaults to now' }),
    properties: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Key-value pairs to provide contextual metadata about an activity.',
      }),
    title: z
      .string()
      .openapi({ description: 'A title for the activity; displayed in the timeline' }),
    weight: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom weight to be used in filters and reports; defaults to 1.',
      }),
  })
  .openapi({ required: ['title'], title: 'Custom Activity' })
  .openapi('Activity')

const MemberSchema = z
  .object({
    bio: z.string().exactOptional(),
    birthday: z.string().exactOptional(),
    company: z.string().exactOptional(),
    devto: z.string().exactOptional().openapi({ description: "The member's DEV username" }),
    email: z.string().exactOptional().openapi({ description: "The member's email" }),
    github: z.string().exactOptional().openapi({ description: "The member's GitHub username" }),
    linkedin: z
      .string()
      .exactOptional()
      .openapi({ description: "The member's LinkedIn username, without the in/ or pub/" }),
    location: z.string().exactOptional(),
    name: z.string().exactOptional(),
    pronouns: z.string().exactOptional(),
    shipping_address: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    tag_list: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated: Please use the tags attribute instead' }),
    tags: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Replaces all tags for the member; comma-separated string or array',
      }),
    tags_to_add: z
      .string()
      .exactOptional()
      .openapi({ description: 'Adds tags to member; comma-separated string or array' }),
    teammate: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    tshirt: z.string().exactOptional(),
    twitter: z.string().exactOptional().openapi({ description: "The member's Twitter username" }),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Member')

const ActivityWithMemberSchema = ActivitySchema.and(
  z.object({ member: MemberSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({ title: 'Custom Activity' })
  .openapi('ActivityWithMember')

const PostActivitySchema = z
  .object({
    activity_type: z.literal('content'),
    occurred_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time at which the content was published; defaults to now',
      }),
    url: z.string().openapi({ description: 'The url representing the post' }),
  })
  .openapi({ required: ['url', 'activity_type'], title: 'Content Activity' })
  .openapi('PostActivity')

const PostActivityWithMemberSchema = PostActivitySchema.and(
  z.object({ member: MemberSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({ title: 'Content Activity' })
  .openapi('PostActivityWithMember')

const IdentitySchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the person in the source system' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the person in the source system' }),
    source: z
      .string()
      .openapi({
        description:
          'The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used',
      }),
    source_host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the location of the source, such as the host of a Discourse instance',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The uid of the person in the source system' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For custom identities, an optional link to the profile on the source system',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username of the person in the source system' }),
  })
  .openapi({
    description:
      'Represents an email address, a profile on networks like github and twitter, or a record in another system.',
    required: ['source'],
  })
  .openapi('Identity')

const ActivityAndIdentitySchema = z
  .object({
    activity: z.xor([ActivityWithMemberSchema, PostActivityWithMemberSchema]).exactOptional(),
    identity: IdentitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityAndIdentity')

const AlertSchema = z
  .object({
    activity_types: z.array(z.string()).exactOptional(),
    event_type: z.string().exactOptional(),
    member_tags: z.array(z.string()).exactOptional(),
    name: z.string(),
  })
  .openapi({ required: ['name'] })
  .openapi('Alert')

const CustomOrPostActivitySchema = z
  .xor([ActivitySchema, PostActivitySchema])
  .openapi('CustomOrPostActivity')

const DestinationSchema = z
  .object({ alerts: z.array(AlertSchema).exactOptional(), name: z.string(), url: z.string() })
  .openapi({ required: ['name', 'url'] })
  .openapi('Destination')

const MemberAndIdentitySchema = z
  .object({ identity: IdentitySchema.exactOptional(), member: MemberSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MemberAndIdentity')

const NoteSchema = z
  .object({ body: z.string() })
  .openapi({ required: ['body'] })
  .openapi('Note')

const OrganizationSchema = z
  .object({
    crm_uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the organization in your CRM.' }),
    crm_url: z.string().openapi({ description: 'A link to the organization profile in your CRM.' }),
    deal_closed_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the organization became a customer.' }),
    lifecycle_stage: z
      .string()
      .openapi({
        description: 'The current stage of the organization in the marketing or sales process.',
      }),
    owner_email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email of the team member who is in charge of the organization.',
      }),
    owner_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the team member who is in charge of the organization.',
      }),
    price_plan: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pricing plan the organization is on.' }),
    source: z
      .string()
      .openapi({ description: 'The name of the CRM you use for tracking the organization.' }),
  })
  .openapi({ required: ['lifecycle_stage', 'crm_url', 'source'] })
  .openapi('Organization')

const WebhookSubscriptionSchema = z
  .object({
    activity_tags: z.array(z.string()).exactOptional(),
    activity_types: z.array(z.string()).exactOptional(),
    event_type: z.string(),
    member_tags: z.array(z.string()).exactOptional(),
    name: z.string(),
    secret: z.string().exactOptional(),
    url: z.string(),
  })
  .openapi({ required: ['name', 'event_type', 'url'] })
  .openapi('WebhookSubscription')

const ApiKeySecurityScheme = {
  description:
    'Provide the API key in a query param called api_key. This is the least secure method, please use only for testing.',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

const BearerSecurityScheme = {
  description:
    "Provide a Authorization header with format 'Bearer <api_key>'. This is the recommended approach. Make sure to include the 'Bearer' part in the text box here.",
  scheme: 'bearer',
  type: 'http',
}

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['Users'],
  summary: 'Get info about the current user',
  responses: { 200: { description: 'success', content: {} }, 401: { description: 'unauthorized' } },
  security: [{ bearer: [] }],
})

export const getWorkspacesRoute = createRoute({
  method: 'get',
  path: '/workspaces',
  tags: ['Workspaces'],
  summary: 'Get all workspaces for the current user',
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspacesWorkspaceSlugRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_slug}',
  tags: ['Workspaces'],
  summary: 'Get a workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      include_orbit_level_counts: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the number of members by Orbit Level in the attributes',
            in: 'query',
            name: 'include_orbit_level_counts',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugActivitiesRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/activities',
  tags: ['Activities'],
  summary: 'List activities for a workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      affiliation: z
        .enum(['member', 'teammate'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'affiliation',
            schema: { enum: ['member', 'teammate'], type: 'string' },
            required: false,
          },
        }),
      member_tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)',
            in: 'query',
            name: 'member_tags',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orbit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.',
            in: 'query',
            name: 'orbit',
            schema: { type: 'string' },
            required: false,
          },
        }),
      activity_type: z
        .enum([
          'discourse:topic:created',
          'discourse:post:liked',
          'discourse:user:created',
          'discourse:post:created',
          'slack:message:sent',
          'slack:thread:replied',
          'slack:channel:joined',
          'note:created',
          'post:created',
          'issues:opened',
          'discord:message:sent',
          'issue_comment:created',
          'discord:thread:replied',
          'custom:happened',
          'dev:comment',
          'discord:message:replied',
          'discord:server:joined',
          'insided:conversation:started',
          'fork:created',
          'insided:idea:replied',
          'insided:article:created',
          'discussions:discussion_created',
          'insided:question:replied',
          'discussions:comment',
          'discussions:reply',
          'insided:article:replied',
          'insided:question:asked',
          'insided:conversation:replied',
          'insided:idea:submitted',
          'reddit:comment',
          'reddit:post',
          'stackoverflow:answer',
          'linkedin:comment',
          'pull_requests:opened',
          'pull_requests:merged',
          'star:created',
          'stackoverflow:question',
          'tweet:sent',
          'twitter:followed',
          'youtube:comment',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of activity types',
            in: 'query',
            name: 'activity_type',
            schema: {
              enum: [
                'discourse:topic:created',
                'discourse:post:liked',
                'discourse:user:created',
                'discourse:post:created',
                'slack:message:sent',
                'slack:thread:replied',
                'slack:channel:joined',
                'note:created',
                'post:created',
                'issues:opened',
                'discord:message:sent',
                'issue_comment:created',
                'discord:thread:replied',
                'custom:happened',
                'dev:comment',
                'discord:message:replied',
                'discord:server:joined',
                'insided:conversation:started',
                'fork:created',
                'insided:idea:replied',
                'insided:article:created',
                'discussions:discussion_created',
                'insided:question:replied',
                'discussions:comment',
                'discussions:reply',
                'insided:article:replied',
                'insided:question:asked',
                'insided:conversation:replied',
                'insided:idea:submitted',
                'reddit:comment',
                'reddit:post',
                'stackoverflow:answer',
                'linkedin:comment',
                'pull_requests:opened',
                'pull_requests:merged',
                'star:created',
                'stackoverflow:question',
                'tweet:sent',
                'twitter:followed',
                'youtube:comment',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      identity: z
        .enum(['github', 'twitter', 'email', 'discourse', 'linkedin', 'devto', 'slack', 'discord'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'identity',
            schema: {
              enum: [
                'github',
                'twitter',
                'email',
                'discourse',
                'linkedin',
                'devto',
                'slack',
                'discord',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      'company[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of companies. The union (OR) of companies is applied.',
            in: 'query',
            name: 'company[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'title[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of job titles. The union (OR) of job titles is applied.',
            in: 'query',
            name: 'title[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'regions[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of regions. The union (OR) of regions is applied.',
            in: 'query',
            name: 'regions[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'countries[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of countries. The union (OR) of countries is applied.',
            in: 'query',
            name: 'countries[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'cities[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of cities. The union (OR) of cities is applied.',
            in: 'query',
            name: 'cities[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter activities after this date. Format: YYYY-MM-DD.',
            in: 'query',
            name: 'start_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter activities before this date. Format: YYYY-MM-DD.',
            in: 'query',
            name: 'end_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relative: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.',
            in: 'query',
            name: 'relative',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
      items: z
        .enum(['10', '50', '100'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'items',
            schema: { enum: ['10', '50', '100'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['occurred_at', 'member'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { enum: ['occurred_at', 'member'], type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'Deprecated in favor of the activity_type parameter.',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const postWorkspaceSlugActivitiesRoute = createRoute({
  method: 'post',
  path: '/{workspace_slug}/activities',
  tags: ['Activities'],
  summary: 'Create a Custom or a Content activity for a new or existing member',
  description:
    'Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivityAndIdentitySchema } } },
  },
  responses: {
    201: { description: 'success', content: {} },
    403: { description: 'forbidden' },
    422: { description: 'unprocessable', content: {} },
  },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugActivitiesIdRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/activities/{id}',
  tags: ['Activities'],
  summary: 'Get an activity in the workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugActivityTypesRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/activity_types',
  tags: ['Activity Types'],
  summary: 'List all activity types for a workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugMembersRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/members',
  tags: ['Members'],
  summary: 'List members in a workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      affiliation: z
        .enum(['member', 'teammate'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'affiliation',
            schema: { enum: ['member', 'teammate'], type: 'string' },
            required: false,
          },
        }),
      member_tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)',
            in: 'query',
            name: 'member_tags',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orbit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.',
            in: 'query',
            name: 'orbit',
            schema: { type: 'string' },
            required: false,
          },
        }),
      activity_type: z
        .enum([
          'discourse:topic:created',
          'discourse:post:liked',
          'discourse:user:created',
          'discourse:post:created',
          'slack:message:sent',
          'slack:thread:replied',
          'slack:channel:joined',
          'note:created',
          'post:created',
          'issues:opened',
          'discord:message:sent',
          'issue_comment:created',
          'discord:thread:replied',
          'custom:happened',
          'dev:comment',
          'discord:message:replied',
          'discord:server:joined',
          'insided:conversation:started',
          'fork:created',
          'insided:idea:replied',
          'insided:article:created',
          'discussions:discussion_created',
          'insided:question:replied',
          'discussions:comment',
          'discussions:reply',
          'insided:article:replied',
          'insided:question:asked',
          'insided:conversation:replied',
          'insided:idea:submitted',
          'reddit:comment',
          'reddit:post',
          'stackoverflow:answer',
          'linkedin:comment',
          'pull_requests:opened',
          'pull_requests:merged',
          'star:created',
          'stackoverflow:question',
          'tweet:sent',
          'twitter:followed',
          'youtube:comment',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of activity types',
            in: 'query',
            name: 'activity_type',
            schema: {
              enum: [
                'discourse:topic:created',
                'discourse:post:liked',
                'discourse:user:created',
                'discourse:post:created',
                'slack:message:sent',
                'slack:thread:replied',
                'slack:channel:joined',
                'note:created',
                'post:created',
                'issues:opened',
                'discord:message:sent',
                'issue_comment:created',
                'discord:thread:replied',
                'custom:happened',
                'dev:comment',
                'discord:message:replied',
                'discord:server:joined',
                'insided:conversation:started',
                'fork:created',
                'insided:idea:replied',
                'insided:article:created',
                'discussions:discussion_created',
                'insided:question:replied',
                'discussions:comment',
                'discussions:reply',
                'insided:article:replied',
                'insided:question:asked',
                'insided:conversation:replied',
                'insided:idea:submitted',
                'reddit:comment',
                'reddit:post',
                'stackoverflow:answer',
                'linkedin:comment',
                'pull_requests:opened',
                'pull_requests:merged',
                'star:created',
                'stackoverflow:question',
                'tweet:sent',
                'twitter:followed',
                'youtube:comment',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      identity: z
        .enum(['github', 'twitter', 'email', 'discourse', 'linkedin', 'devto', 'slack', 'discord'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'identity',
            schema: {
              enum: [
                'github',
                'twitter',
                'email',
                'discourse',
                'linkedin',
                'devto',
                'slack',
                'discord',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      'company[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of companies. The union (OR) of companies is applied.',
            in: 'query',
            name: 'company[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'title[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of job titles. The union (OR) of job titles is applied.',
            in: 'query',
            name: 'title[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'regions[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of regions. The union (OR) of regions is applied.',
            in: 'query',
            name: 'regions[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'countries[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of countries. The union (OR) of countries is applied.',
            in: 'query',
            name: 'countries[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'cities[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of cities. The union (OR) of cities is applied.',
            in: 'query',
            name: 'cities[]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter activities after this date. Format: YYYY-MM-DD.',
            in: 'query',
            name: 'start_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter activities before this date. Format: YYYY-MM-DD.',
            in: 'query',
            name: 'end_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relative: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.',
            in: 'query',
            name: 'relative',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
      items: z
        .enum(['10', '50', '100'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'items',
            schema: { enum: ['10', '50', '100'], type: 'string' },
            required: false,
          },
        }),
      activities_count_min: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'activities_count_min',
            schema: { type: 'string' },
            required: false,
          },
        }),
      activities_count_max: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'activities_count_max',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum([
          'activities_count',
          'company',
          'created_at',
          'first_activity',
          'github_followers',
          'id',
          'last_activity',
          'location',
          'love',
          'name',
          'orbit',
          'reach',
          'title',
          'twitter_followers',
          'updated_at',
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: {
              enum: [
                'activities_count',
                'company',
                'created_at',
                'first_activity',
                'github_followers',
                'id',
                'last_activity',
                'location',
                'love',
                'name',
                'orbit',
                'reach',
                'title',
                'twitter_followers',
                'updated_at',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'Deprecated in favor of the activity_type parameter.',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const postWorkspaceSlugMembersRoute = createRoute({
  method: 'post',
  path: '/{workspace_slug}/members',
  tags: ['Members'],
  summary: 'Create or update a member',
  description:
    "This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.",
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MemberAndIdentitySchema } } },
  },
  responses: {
    200: { description: 'success', content: {} },
    201: { description: 'created', content: {} },
    403: { description: 'forbidden' },
    422: { description: 'unprocessable', content: {} },
  },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugMembersFindRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/members/find',
  tags: ['Members'],
  summary: 'Find a member by an identity',
  description:
    'Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'source', schema: { type: 'string' }, required: false },
        }),
      source_host: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'source_host', schema: { type: 'string' }, required: false },
        }),
      uid: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'uid', schema: { type: 'string' }, required: false },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'username', schema: { type: 'string' }, required: false },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'email', schema: { type: 'string' }, required: false },
        }),
      github: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated, please use source=github and username=<username> instead',
            in: 'query',
            name: 'github',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'success', content: {} },
    404: { description: 'Not found', content: {} },
  },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugMembersMemberSlugRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/members/{member_slug}',
  tags: ['Members'],
  summary: 'Get a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const putWorkspaceSlugMembersMemberSlugRoute = createRoute({
  method: 'put',
  path: '/{workspace_slug}/members/{member_slug}',
  tags: ['Members'],
  summary: 'Update a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MemberSchema } } },
  },
  responses: { 204: { description: 'member updated' }, 403: { description: 'forbidden' } },
  security: [{ bearer: [] }],
})

export const deleteWorkspaceSlugMembersMemberSlugRoute = createRoute({
  method: 'delete',
  path: '/{workspace_slug}/members/{member_slug}',
  tags: ['Members'],
  summary: 'Delete a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'member deleted' }, 403: { description: 'forbidden' } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugMembersMemberSlugActivitiesRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/members/{member_slug}/activities',
  tags: ['Activities'],
  summary: 'List activities for a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
      items: z
        .enum(['10', '50', '100'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'items',
            schema: { enum: ['10', '50', '100'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['occurred_at', 'member'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { enum: ['occurred_at', 'member'], type: 'string' },
            required: false,
          },
        }),
      activity_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'activity_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'Deprecated in favor of the activity_type parameter.',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const postWorkspaceSlugMembersMemberSlugActivitiesRoute = createRoute({
  method: 'post',
  path: '/{workspace_slug}/members/{member_slug}/activities',
  tags: ['Activities'],
  summary: 'Create a Custom or a Content activity for a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomOrPostActivitySchema } } },
  },
  responses: {
    201: { description: 'success', content: {} },
    403: { description: 'forbidden' },
    422: { description: 'unprocessable entity', content: {} },
  },
  security: [{ bearer: [] }],
})

export const putWorkspaceSlugMembersMemberSlugActivitiesIdRoute = createRoute({
  method: 'put',
  path: '/{workspace_slug}/members/{member_slug}/activities/{id}',
  tags: ['Activities'],
  summary: 'Update a custom activity for a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ActivitySchema } } },
  },
  responses: {
    204: { description: 'activity updated' },
    403: { description: 'forbidden' },
    422: { description: 'unprocessable entity', content: {} },
  },
  security: [{ bearer: [] }],
})

export const deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute = createRoute({
  method: 'delete',
  path: '/{workspace_slug}/members/{member_slug}/activities/{id}',
  tags: ['Activities'],
  summary: 'Delete a post activity',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'activity deleted' }, 403: { description: 'forbidden' } },
  security: [{ bearer: [] }],
})

export const postWorkspaceSlugMembersMemberSlugIdentitiesRoute = createRoute({
  method: 'post',
  path: '/{workspace_slug}/members/{member_slug}/identities',
  tags: ['Members'],
  summary: 'Add identity to a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentitySchema } } },
  },
  responses: {
    201: { description: 'success', content: {} },
    403: { description: 'forbidden' },
    422: { description: 'identity is invalid', content: {} },
  },
  security: [{ bearer: [] }],
})

export const deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute = createRoute({
  method: 'delete',
  path: '/{workspace_slug}/members/{member_slug}/identities',
  tags: ['Members'],
  summary: 'Remove identity from a member',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentitySchema } } },
  },
  responses: {
    204: { description: 'identity deleted' },
    403: { description: 'forbidden' },
    422: { description: 'identity is invalid or not attached to member', content: {} },
  },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugMembersMemberSlugNotesRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/members/{member_slug}/notes',
  tags: ['Notes'],
  summary: "Get the member's notes",
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const postWorkspaceSlugMembersMemberSlugNotesRoute = createRoute({
  method: 'post',
  path: '/{workspace_slug}/members/{member_slug}/notes',
  tags: ['Notes'],
  summary: 'Create a note',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: NoteSchema } } },
  },
  responses: {
    201: { description: 'note created', content: {} },
    403: { description: 'forbidden' },
  },
  security: [{ bearer: [] }],
})

export const putWorkspaceSlugMembersMemberSlugNotesIdRoute = createRoute({
  method: 'put',
  path: '/{workspace_slug}/members/{member_slug}/notes/{id}',
  tags: ['Notes'],
  summary: 'Update a note',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      member_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'member_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: NoteSchema } } },
  },
  responses: { 204: { description: 'note updated' } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugOrganizationsRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/organizations',
  tags: ['Organizations'],
  summary: 'List organizations in a workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
      items: z
        .enum(['10', '50', '100'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'items',
            schema: { enum: ['10', '50', '100'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['name', 'website', 'members_count', 'employees_count'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: {
              enum: ['name', 'website', 'members_count', 'employees_count'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/organizations/{organization_id}',
  tags: ['Organizations'],
  summary: 'Get an organization',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const putWorkspaceSlugOrganizationsOrganizationIdRoute = createRoute({
  method: 'put',
  path: '/{workspace_slug}/organizations/{organization_id}',
  tags: ['Organizations'],
  summary: 'Update an organization',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrganizationSchema } } },
  },
  responses: {
    204: { description: 'organization updated' },
    403: { description: 'forbidden' },
    422: { description: 'deal_closed_date is invalid' },
  },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/organizations/{organization_id}/activities',
  tags: ['Activities'],
  summary: 'List member activities in an organization',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
      items: z
        .enum(['10', '50', '100'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'items',
            schema: { enum: ['10', '50', '100'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['occurred_at', 'member'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { enum: ['occurred_at', 'member'], type: 'string' },
            required: false,
          },
        }),
      activity_type: z
        .enum(['content', 'custom', 'discord', 'discourse', 'github', 'slack', 'twitter'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'activity_type',
            schema: {
              enum: ['content', 'custom', 'discord', 'discourse', 'github', 'slack', 'twitter'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugOrganizationsOrganizationIdMembersRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/organizations/{organization_id}/members',
  tags: ['Members'],
  summary: 'List members in an organization',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      items: z
        .enum(['10', '50', '100'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'items',
            schema: { enum: ['10', '50', '100'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugReportsRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/reports',
  tags: ['Reports'],
  summary: 'Get a workspace stats',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter activities after this date. Format: YYYY-MM-DD.',
            in: 'query',
            name: 'start_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter activities before this date. Format: YYYY-MM-DD.',
            in: 'query',
            name: 'end_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relative: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.',
            in: 'query',
            name: 'relative',
            schema: { type: 'string' },
            required: false,
          },
        }),
      properties: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'properties', schema: { type: 'string' }, required: false },
        }),
      activity_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'activity_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'Deprecated in favor of the activity_type parameter.',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugWebhooksRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhooks in a workspace',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const postWorkspaceSlugWebhooksRoute = createRoute({
  method: 'post',
  path: '/{workspace_slug}/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookSubscriptionSchema } } },
  },
  responses: { 201: { description: 'webhook created' }, 403: { description: 'forbidden' } },
  security: [{ bearer: [] }],
})

export const getWorkspaceSlugWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/{workspace_slug}/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Get a webhook',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'success', content: {} } },
  security: [{ bearer: [] }],
})

export const putWorkspaceSlugWebhooksIdRoute = createRoute({
  method: 'put',
  path: '/{workspace_slug}/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: WebhookSubscriptionSchema } } },
  },
  responses: { 204: { description: 'webhook updated' }, 403: { description: 'forbidden' } },
  security: [{ bearer: [] }],
})

export const deleteWorkspaceSlugWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/{workspace_slug}/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  request: {
    params: z.object({
      workspace_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_slug', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'webhook deleted' }, 403: { description: 'forbidden' } },
  security: [{ bearer: [] }],
})
