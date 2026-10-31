import { createRoute, z } from '@hono/zod-openapi'

type DocumentFilterType =
  | {
      field:
        | 'createdAt'
        | 'updatedAt'
        | 'publishedAt'
        | 'archivedAt'
        | 'title'
        | 'templateId'
        | 'collectionId'
        | 'createdById'
        | 'userId'
        | 'documentId'
        | 'parentDocumentId'
      operator:
        | 'eq'
        | 'neq'
        | 'lt'
        | 'lte'
        | 'gt'
        | 'gte'
        | 'contains'
        | 'startsWith'
        | 'endsWith'
        | 'containsStrict'
        | 'startsWithStrict'
        | 'endsWithStrict'
        | 'in'
        | 'notIn'
        | 'isNull'
        | 'isNotNull'
      value?: { [key: string]: unknown }
    }
  | { operator: 'AND' | 'OR'; filters: DocumentFilterType[] }

type DocumentsDeletedFilterType =
  | {
      field: 'deletedAt' | 'deletedById'
      operator: 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte' | 'in' | 'notIn' | 'isNull' | 'isNotNull'
      value?: { [key: string]: unknown }
    }
  | { operator: 'AND' | 'OR'; filters: DocumentsDeletedFilterType[] }

type CollectionFilterType =
  | {
      field: 'name' | 'createdAt' | 'updatedAt' | 'archivedAt' | 'createdById' | 'permission'
      operator:
        | 'eq'
        | 'neq'
        | 'lt'
        | 'lte'
        | 'gt'
        | 'gte'
        | 'contains'
        | 'startsWith'
        | 'endsWith'
        | 'containsStrict'
        | 'startsWithStrict'
        | 'endsWithStrict'
        | 'in'
        | 'notIn'
        | 'isNull'
        | 'isNotNull'
      value?: { [key: string]: unknown }
    }
  | { operator: 'AND' | 'OR'; filters: CollectionFilterType[] }

type UserFilterType =
  | {
      field:
        | 'id'
        | 'name'
        | 'email'
        | 'role'
        | 'createdAt'
        | 'updatedAt'
        | 'lastActiveAt'
        | 'suspendedAt'
      operator:
        | 'eq'
        | 'neq'
        | 'lt'
        | 'lte'
        | 'gt'
        | 'gte'
        | 'contains'
        | 'startsWith'
        | 'endsWith'
        | 'containsStrict'
        | 'startsWithStrict'
        | 'endsWithStrict'
        | 'in'
        | 'notIn'
        | 'isNull'
        | 'isNotNull'
      value?: { [key: string]: unknown }
    }
  | { operator: 'AND' | 'OR'; filters: UserFilterType[] }

type NavigationNodeType = {
  id?: string
  title?: string
  url?: string
  children?: NavigationNodeType[]
}

const UserRoleSchema = z.enum(['admin', 'member', 'viewer', 'guest']).openapi('UserRole')

type UserType = {
  id?: string
  name?: string
  avatarUrl?: string
  color?: string
  email?: string
  role?: z.infer<typeof UserRoleSchema>
  isSuspended?: boolean
  lastActiveAt?: string | null
  timezone?: string | null
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
  invitedBy?: UserType | null
}

const PermissionSchema = z.enum(['read', 'read_write']).openapi('Permission')

const TextEditModeSchema = z
  .enum(['append', 'prepend', 'replace', 'patch'])
  .openapi({
    description:
      'The editing mode for text updates to a document. When set to `patch`, the `findText` parameter is required and the existing occurrence of `findText` will be replaced with the value of `text`.',
  })
  .openapi('TextEditMode')

const UserSchema: z.ZodType<UserType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of this user, it is migrated from Slack or Google Workspace when the SSO connection is made but can be changed if necessary.',
            example: 'Jane Doe',
          }),
        avatarUrl: z
          .url()
          .exactOptional()
          .openapi({
            description:
              'The URL for the image associated with this user, it will be displayed in the application UI and email notifications.',
          }),
        color: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A color representing the user, used in the UI for avatars without an image.',
            readOnly: true,
          }),
        email: z
          .email()
          .exactOptional()
          .openapi({
            description:
              'The email associated with this user, it is migrated from Slack or Google Workspace when the SSO connection is made but can be changed if necessary.',
            readOnly: true,
          }),
        role: UserRoleSchema.exactOptional(),
        isSuspended: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this user has been suspended.', readOnly: true }),
        lastActiveAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The last time this user made an API request, this value is updated at most every 5 minutes.',
            readOnly: true,
          }),
        timezone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The timezone this user has registered.' }),
        createdAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The date and time that this user first signed in or was invited as a guest.',
            readOnly: true,
          }),
        updatedAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'The date and time that this user was last updated.',
            readOnly: true,
          }),
        deletedAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The date and time that this user was deleted, if applicable.',
            readOnly: true,
          }),
        invitedBy: UserSchema.nullable()
          .exactOptional()
          .openapi({
            description:
              'The user that invited this user, if they were invited. Only included in responses to admin users.',
            readOnly: true,
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('User')

const AccessRequestSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    documentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the document this request is for.' }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the user that made the request.' }),
    user: UserSchema.exactOptional(),
    teamId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the workspace the request belongs to.' }),
    status: z
      .enum(['pending', 'approved', 'dismissed'])
      .exactOptional()
      .openapi({ description: 'The current status of the access request.' }),
    responderId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the user that responded to the request, if any.' }),
    responder: UserSchema.exactOptional(),
    respondedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time the request was responded to, if any.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('AccessRequest')

const AttachmentSchema = z
  .object({
    contentType: z.string().exactOptional().openapi({ example: 'image/png' }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The size of the attachment in bytes. Returned as a string as the value may exceed the safe integer range.',
      }),
    name: z.string().exactOptional(),
    url: z.url().exactOptional(),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document, if any.' }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the user that created the attachment.' }),
  })
  .openapi({ required: [] })
  .openapi('Attachment')

const PaginationSchema = z
  .object({
    offset: z.number().exactOptional().openapi({ example: 0 }),
    limit: z.number().exactOptional().openapi({ example: 25 }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const SortingSchema = z
  .object({
    sort: z.string().exactOptional().openapi({ example: 'updatedAt' }),
    direction: z.enum(['ASC', 'DESC']).exactOptional().openapi({ example: 'DESC' }),
  })
  .openapi({ required: [] })
  .openapi('Sorting')

const DocumentFilterSchema: z.ZodType<DocumentFilterType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({
            field: z
              .enum([
                'createdAt',
                'updatedAt',
                'publishedAt',
                'archivedAt',
                'title',
                'templateId',
                'collectionId',
                'createdById',
                'userId',
                'documentId',
                'parentDocumentId',
              ])
              .openapi({ description: 'Name of the document field to filter on.' }),
            operator: z
              .enum([
                'eq',
                'neq',
                'lt',
                'lte',
                'gt',
                'gte',
                'contains',
                'startsWith',
                'endsWith',
                'containsStrict',
                'startsWithStrict',
                'endsWithStrict',
                'in',
                'notIn',
                'isNull',
                'isNotNull',
              ])
              .openapi({
                description:
                  'Comparison operator to apply. Note that some fields only accept a subset of operators – for example `createdById`, `userId` and `documentId` only support `eq` and `in`.',
              }),
            value: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'Value to compare against. May be a string, number, boolean or array of these depending on the field and operator. Date fields accept an ISO 8601 date or an ISO 8601 duration (relative to now). Omit for `isNull` and `isNotNull`.',
              }),
          })
          .openapi({
            description: 'A condition that compares a document field against a value.',
            required: ['field', 'operator'],
          }),
        z
          .object({ operator: z.enum(['AND', 'OR']), filters: z.array(DocumentFilterSchema) })
          .openapi({
            description:
              'A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.',
            required: ['operator', 'filters'],
          }),
      ])
      .openapi({
        description:
          'A single filter node, either a leaf condition matching a document field or a group combining nested filters with a logical operator.',
      }),
  )
  .openapi('DocumentFilter')

const DocumentsDeletedFilterSchema: z.ZodType<DocumentsDeletedFilterType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({
            field: z
              .enum(['deletedAt', 'deletedById'])
              .openapi({ description: 'Name of the field to filter on.' }),
            operator: z
              .enum(['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in', 'notIn', 'isNull', 'isNotNull'])
              .openapi({
                description:
                  'Comparison operator to apply. `deletedById` only supports `eq` and `in`.',
              }),
            value: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'Value to compare against. `deletedAt` accepts an ISO 8601 date or an ISO 8601 duration (relative to now); `deletedById` accepts a user UUID (or an array of UUIDs with `in`/`notIn`). Omit for `isNull` and `isNotNull`.',
              }),
          })
          .openapi({
            description: 'A condition that compares a deleted-document field against a value.',
            required: ['field', 'operator'],
          }),
        z
          .object({
            operator: z.enum(['AND', 'OR']),
            filters: z.array(DocumentsDeletedFilterSchema),
          })
          .openapi({
            description:
              'A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.',
            required: ['operator', 'filters'],
          }),
      ])
      .openapi({
        description:
          'A single filter node for `/documents.deleted`, either a leaf condition matching a supported field or a group combining nested filters with a logical operator.',
      }),
  )
  .openapi('DocumentsDeletedFilter')

const CollectionFilterSchema: z.ZodType<CollectionFilterType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({
            field: z
              .enum(['name', 'createdAt', 'updatedAt', 'archivedAt', 'createdById', 'permission'])
              .openapi({ description: 'Name of the collection field to filter on.' }),
            operator: z
              .enum([
                'eq',
                'neq',
                'lt',
                'lte',
                'gt',
                'gte',
                'contains',
                'startsWith',
                'endsWith',
                'containsStrict',
                'startsWithStrict',
                'endsWithStrict',
                'in',
                'notIn',
                'isNull',
                'isNotNull',
              ])
              .openapi({
                description:
                  'Comparison operator to apply. Note that some fields only accept a subset of operators – for example `permission` only supports `eq`, `neq`, `in`, `notIn`, `isNull` and `isNotNull`.',
              }),
            value: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'Value to compare against. May be a string, boolean or array of these depending on the field and operator. Date fields accept an ISO 8601 date or an ISO 8601 duration (relative to now). `permission` accepts a `Permission` enum value (or an array with `in`/`notIn`). Omit for `isNull` and `isNotNull`.',
              }),
          })
          .openapi({
            description: 'A condition that compares a collection field against a value.',
            required: ['field', 'operator'],
          }),
        z
          .object({ operator: z.enum(['AND', 'OR']), filters: z.array(CollectionFilterSchema) })
          .openapi({
            description:
              'A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.',
            required: ['operator', 'filters'],
          }),
      ])
      .openapi({
        description:
          'A single filter node for `/collections.list`, either a leaf condition matching a collection field or a group combining nested filters with a logical operator.',
      }),
  )
  .openapi('CollectionFilter')

const UserFilterSchema: z.ZodType<UserFilterType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({
            field: z
              .enum([
                'id',
                'name',
                'email',
                'role',
                'createdAt',
                'updatedAt',
                'lastActiveAt',
                'suspendedAt',
              ])
              .openapi({ description: 'Name of the user field to filter on.' }),
            operator: z
              .enum([
                'eq',
                'neq',
                'lt',
                'lte',
                'gt',
                'gte',
                'contains',
                'startsWith',
                'endsWith',
                'containsStrict',
                'startsWithStrict',
                'endsWithStrict',
                'in',
                'notIn',
                'isNull',
                'isNotNull',
              ])
              .openapi({
                description:
                  'Comparison operator to apply. Note that some fields only accept a subset of operators – `id` and `role` only support `eq`, `neq`, `in` and `notIn`.',
              }),
            value: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'Value to compare against. May be a string, number, boolean or array of these depending on the field and operator. Date fields accept an ISO 8601 date or an ISO 8601 duration (relative to now). `role` accepts one of the values in `UserRole`. Omit for `isNull` and `isNotNull`.',
              }),
          })
          .openapi({
            description: 'A condition that compares a user field against a value.',
            required: ['field', 'operator'],
          }),
        z
          .object({ operator: z.enum(['AND', 'OR']), filters: z.array(UserFilterSchema) })
          .openapi({
            description:
              'A logical group that combines nested filters with an `AND` or `OR` operator. Groups may themselves contain further groups.',
            required: ['operator', 'filters'],
          }),
      ])
      .openapi({
        description:
          'A single filter node for `/users.list`, either a leaf condition matching a user field or a group combining nested filters with a logical operator.',
      }),
  )
  .openapi('UserFilter')

const NavigationNodeSchema: z.ZodType<NavigationNodeType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Unique identifier for the document.' }),
        title: z.string().exactOptional(),
        url: z.string().exactOptional(),
        children: z.array(NavigationNodeSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('NavigationNode')

const PlanSchema = z
  .enum(['community', 'standard', 'business', 'enterprise', 'legacy'])
  .openapi({ description: 'The subscription plan that a workspace is on.' })
  .openapi('Plan')

const PlanFeatureSchema = z
  .enum([
    'auditLog',
    'advancedSecurity',
    'guests',
    'groupSync',
    'premiumIntegrations',
    'apiKeyManagement',
    'contentManagement',
    'aiAnswers',
    'customDomain',
    'saml',
  ])
  .openapi({ description: 'A feature that may be entitled to a workspace based on its plan.' })
  .openapi('PlanFeature')

const TeamSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of this workspace, it is usually auto-generated when the first SSO connection is made but can be changed if necessary.',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A short description of this workspace.' }),
    avatarUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The URL for the image associated with this workspace, it will be displayed in the workspace switcher and in the top left of the knowledge base along with the name.',
      }),
    sharing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this workspace has share links globally enabled. If this value is false then all sharing UI and APIs are disabled.',
      }),
    defaultCollectionId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'If set then the referenced collection is where users will be redirected to after signing in instead of the Home screen',
      }),
    defaultUserRole: UserRoleSchema.exactOptional(),
    memberCollectionCreate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether members are allowed to create new collections. If false then only admins can create collections.',
      }),
    memberTeamCreate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether members are allowed to create new groups. If false then only admins can create groups.',
      }),
    documentEmbeds: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this workspace has embeds in documents globally enabled. It can be disabled to reduce potential data leakage to third parties.',
      }),
    inviteRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether an invite is required to join this workspace, if false users may join with a linked SSO provider.',
      }),
    allowedDomains: z
      .array(z.string().openapi({ description: 'A hostname that user emails are restricted to' }))
      .exactOptional(),
    guestSignin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this workspace has guest signin enabled. Guests can signin with an email address and are not required to have a Google Workspace/Slack SSO account once invited.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Represents the subdomain at which this workspace's knowledge base can be accessed.",
      }),
    domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The custom domain configured for this workspace, if any.' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "The fully qualified URL at which this workspace's knowledge base can be accessed.",
        readOnly: true,
      }),
    passkeysEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether passkey authentication is enabled for this workspace.' }),
    preferences: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Workspace-level preference flags.' }),
    guidanceMCP: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Guidance text provided to MCP integrations.' }),
    plan: PlanSchema.exactOptional().openapi({
      description: 'The plan that this workspace is currently on.',
      readOnly: true,
    }),
    entitlements: z
      .array(PlanFeatureSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of plan-based features that this workspace is entitled to use, derived from its current plan.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Team')

const AuthSchema = z
  .object({ user: UserSchema.exactOptional(), team: TeamSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Auth')

const CollectionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The relative URL path at which the collection can be accessed.',
        readOnly: true,
      }),
    urlId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short unique identifier that can be used to identify the collection instead of the UUID.',
        readOnly: true,
        example: 'hDYep1TPAM',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the collection.', example: 'Human Resources' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A description of the collection, may contain markdown formatting',
        example: '',
      }),
    data: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The collection description as rich-text JSON, when available.' }),
    sort: z
      .object({
        field: z.string().exactOptional(),
        direction: z.enum(['asc', 'desc']).exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'The sort of documents in the collection. Note that not all API responses respect this and it is left as a frontend concern to implement.',
        required: [],
      }),
    index: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The position of the collection in the sidebar', example: 'P' }),
    color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A color representing the collection, this is used to help make collections more identifiable in the UI. It should be in HEX format including the #',
        example: '#123123',
      }),
    icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A string that represents an icon in the outline-icons package or an emoji',
      }),
    ownerId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the user who owns this collection when it is a personal collection. This is `null` for regular shared collections.',
        readOnly: true,
      }),
    permission: PermissionSchema.exactOptional(),
    templateManagement: PermissionSchema.exactOptional(),
    sharing: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether public document sharing is enabled in this collection' }),
    commenting: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether commenting is enabled in this collection' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that this object was deleted', readOnly: true }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that this object was archived', readOnly: true }),
    archivedBy: UserSchema.exactOptional(),
    deprecatedReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason the collection was archived or deleted, if one was provided.',
        readOnly: true,
      }),
    sourceMetadata: z
      .object({
        externalId: z.string().exactOptional(),
        externalName: z.string().exactOptional(),
        createdByName: z.string().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Metadata about the external source this collection was imported from, if any.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Collection')

const CommentSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    data: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The editor data representing this comment.' }),
    documentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the document this is related to.' }),
    parentCommentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the comment this is a child of, if any.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    createdBy: UserSchema.exactOptional(),
    createdById: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user who created this comment.',
        readOnly: true,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
    resolvedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time that this comment was resolved, if it has been.',
        readOnly: true,
      }),
    resolvedBy: UserSchema.nullable().exactOptional(),
    resolvedById: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user who resolved this comment, if any.',
        readOnly: true,
      }),
    reactions: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'List of emoji reactions on this comment.', readOnly: true }),
    anchorText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The document text that the comment is anchored to, only included if includeAnchorText=true.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Comment')

const DataAttributeDataTypeSchema = z
  .enum(['string', 'number', 'boolean', 'list'])
  .openapi({ description: 'The data type of the attribute value.' })
  .openapi('DataAttributeDataType')

const DataAttributeOptionsSchema = z
  .object({
    icon: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An icon representing the data attribute from the outline-icons package.',
      }),
    options: z
      .array(
        z
          .object({
            value: z
              .string()
              .exactOptional()
              .openapi({ description: 'The label/value of the option.' }),
            color: z
              .string()
              .exactOptional()
              .openapi({ description: 'Optional color for the option.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Valid options for list data type.' }),
  })
  .openapi({ description: 'Additional options for certain data attribute types.', required: [] })
  .openapi('DataAttributeOptions')

const DataAttributeSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this data attribute.', example: 'Status' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the data attribute.',
        example: 'The current status of the document.',
      }),
    dataType: DataAttributeDataTypeSchema.exactOptional(),
    options: DataAttributeOptionsSchema.exactOptional(),
    pinned: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether this data attribute is pinned to the top of documents.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that this object was deleted', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DataAttribute')

const DocumentDataAttributeSchema = z
  .object({
    dataAttributeId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the associated data attribute.' }),
    value: z
      .xor([z.string(), z.boolean(), z.number()])
      .exactOptional()
      .openapi({
        description: 'The value of the data attribute for this document.',
        example: 'In Progress',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object attribute was last changed',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DocumentDataAttribute')

const DocumentSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated collection.' }),
    parentDocumentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the document this is a child of, if any.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the document.', example: 'Welcome to Acme Inc' }),
    fullWidth: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this document should be displayed in a full-width view.' }),
    icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An emoji or icon associated with the document.', example: '🎉' }),
    color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The color of the document icon in hex format.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The text content of the document, contains markdown formatting',
        example: '…',
      }),
    data: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The body of the document as a Prosemirror document, returned in place of text when requested.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL path to access the document.', readOnly: true }),
    urlId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short unique ID that can be used to identify the document as an alternative to the UUID',
        example: 'hDYep1TPAM',
      }),
    collaboratorIds: z
      .array(z.uuid())
      .exactOptional()
      .openapi({ description: 'Identifiers of users who have edited the document.' }),
    tasks: z
      .object({ completed: z.number().exactOptional(), total: z.number().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Task completion counts for the document.', required: [] }),
    templateId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the template this document was created from, if any',
      }),
    revision: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'A number that is auto incrementing with every revision of the document that is saved',
        readOnly: true,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    createdBy: UserSchema.exactOptional(),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
    updatedBy: UserSchema.exactOptional(),
    publishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that this object was published', readOnly: true }),
    dataAttributes: z.array(DocumentDataAttributeSchema).nullable().exactOptional(),
    archivedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that this object was archived', readOnly: true }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that this object was deleted', readOnly: true }),
    deletedBy: UserSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The user who deleted this document, if any. Only present on deleted documents.',
      }),
    deprecatedReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason the document was archived or deleted, if one was provided.',
        readOnly: true,
      }),
    preferences: z
      .object({
        headingPrefix: z
          .enum(['none', 'numeric', 'alphanumeric', 'outline'])
          .exactOptional()
          .openapi({
            description: "Numbering style applied to the document's headings when rendered.",
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Document-level display preferences.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Document')

const DocumentInsightSchema = z
  .object({
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The UTC day the rollup represents. For weekly rollups this is the first day (Monday) of the week.',
      }),
    period: z
      .enum(['day', 'week'])
      .exactOptional()
      .openapi({
        description:
          'The length of time the rollup covers. Daily rollups are stored for recent activity, older rollups are aggregated into weekly buckets.',
      }),
    viewCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of document views on this day.' }),
    viewerCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of unique viewers on this day.' }),
    commentCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total comments made on this day.' }),
    reactionCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total reactions added on this day.' }),
    revisionCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of document revisions on this day.' }),
    editorCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of unique editors on this day.' }),
  })
  .openapi({
    description: 'A rollup of activity counts for a document over a daily or weekly period.',
    required: [],
  })
  .openapi('DocumentInsight')

const EventSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    name: z.string().exactOptional().openapi({ example: 'documents.create', readOnly: true }),
    modelId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the object this event is associated with when it is not one of document, collection, or user.',
        readOnly: true,
      }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user associated with the event, if any.',
        readOnly: true,
      }),
    actorId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The user that performed the action.', readOnly: true }),
    authType: z
      .enum(['api', 'app', 'mcp', 'oauth'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The authentication method used to perform the action.',
        readOnly: true,
      }),
    actorIpAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ip address the action was performed from. This field is only returned when the `auditLog` boolean is true.',
        example: '60.169.88.100',
        readOnly: true,
      }),
    collectionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated collection, if any', readOnly: true }),
    documentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document, if any', readOnly: true }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this event was created', readOnly: true }),
    data: z
      .object({})
      .exactOptional()
      .openapi({
        example: { name: 'Equipment list' },
        description: 'Additional unstructured data associated with the event',
        readOnly: true,
      }),
    changes: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The set of changes made by this event. This field is only returned when the `auditLog` boolean is true.',
        readOnly: true,
      }),
    actor: UserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Event')

const ErrorSchema = z
  .object({
    ok: z.boolean().exactOptional().openapi({ example: false }),
    error: z.string().exactOptional(),
    message: z.string().exactOptional(),
    status: z.number().exactOptional(),
    data: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const FileOperationSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    type: z
      .enum(['import', 'export'])
      .exactOptional()
      .openapi({ example: 'export', description: 'The type of file operation.', readOnly: true }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The file format of the resulting file.',
        example: 'outline-markdown',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the file operation, derived from the collection name, document title, or file name.',
        readOnly: true,
      }),
    state: z
      .enum(['creating', 'uploading', 'complete', 'error', 'expired'])
      .exactOptional()
      .openapi({
        description: 'The state of the file operation.',
        example: 'complete',
        readOnly: true,
      }),
    error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An error message if the file operation failed.', readOnly: true }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The size of the resulting file in bytes. Returned as a string as the value may exceed the safe integer range.',
        readOnly: true,
        example: '2048',
      }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the associated collection, if the file operation is scoped to a single collection.',
        readOnly: true,
      }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the associated document, if the file operation is scoped to a single document.',
        readOnly: true,
      }),
    user: UserSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('FileOperation')

const GroupSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this group.', example: 'Engineering' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A short description of this group.' }),
    icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An icon or emoji to use as the group icon.' }),
    color: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The color of the group icon in hex format.' }),
    externalId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An identifier for this group in an external system, if linked.' }),
    disableMentions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether mentioning this group is disabled.' }),
    externalGroup: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the linked external group, if any.' }),
    memberCount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The number of users that are members of the group',
        example: 11,
        readOnly: true,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this object was last changed',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Group')

const OAuthClientSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this OAuth client.', example: 'Acme Inc' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A short description of this OAuth client.',
        example: "Integrate Acme Inc's services into Outline.",
      }),
    developerName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the developer who created this OAuth client.',
        example: 'Acme Inc',
      }),
    developerUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL of the developer who created this OAuth client.',
        example: 'https://example.com',
      }),
    avatarUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A URL pointing to an image representing the OAuth client.' }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The client ID for the OAuth client.',
        readOnly: true,
        example: '2bquf8avrpdv31par42a',
      }),
    clientSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The client secret for the OAuth client. Only returned when the request is authenticated with a credential whose scope permits managing OAuth clients.',
        readOnly: true,
        example: 'ol_sk_rapdv31...',
      }),
    clientType: z
      .enum(['public', 'confidential'])
      .exactOptional()
      .openapi({ description: 'The type of the OAuth client.', readOnly: true }),
    redirectUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The redirect URIs for the OAuth client.',
        example: ['https://example.com/callback'],
      }),
    published: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the OAuth client is available to other workspaces.',
        example: true,
      }),
    lastActiveAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date and time when this OAuth client was last used.',
        readOnly: true,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this OAuth client was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this OAuth client was updated', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('OAuthClient')

const OAuthAuthenticationSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    oauthClientId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated OAuthClient.', readOnly: true }),
    oauthClient: z
      .object({
        name: z.string().exactOptional(),
        description: z.string().nullable().exactOptional(),
        developerName: z.string().nullable().exactOptional(),
        developerUrl: z.string().nullable().exactOptional(),
        avatarUrl: z.string().nullable().exactOptional(),
        clientId: z.string().exactOptional(),
        published: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'A reduced, public representation of the associated OAuth client.',
        required: [],
      }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated User.', readOnly: true }),
    scope: z.array(z.string()).exactOptional(),
    lastActiveAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date and time when this authentication was last used',
        readOnly: true,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date and time when this authentication was created',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('OAuthAuthentication')

const RevisionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    documentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document.', readOnly: true }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the document.', readOnly: true }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the revision, if any.', readOnly: true }),
    icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An emoji or icon associated with the revision.', readOnly: true }),
    color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The color of the revision icon in hex format.', readOnly: true }),
    collaborators: z.array(UserSchema).exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this revision was created', readOnly: true }),
    createdBy: UserSchema.exactOptional(),
    createdById: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user who created this revision.',
        readOnly: true,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date and time when this revision was deleted, if applicable.',
        readOnly: true,
      }),
    sourceMetadata: z
      .object({
        authType: z
          .enum(['api', 'app', 'mcp', 'oauth'])
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The authentication method used to create the revision.',
            readOnly: true,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Metadata about how the revision was created, if any.',
        readOnly: true,
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Revision')

const RevisionDetailSchema = RevisionSchema.and(
  z
    .object({
      data: z
        .object({})
        .exactOptional()
        .openapi({
          description: 'The body of the revision as a Prosemirror document.',
          readOnly: true,
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Body of the document, may contain markdown formatting',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
).openapi('RevisionDetail')

const ShareSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    documentTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Title of the shared document.',
        example: 'React best practices',
        readOnly: true,
      }),
    documentUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL of the original document.', readOnly: true }),
    sourceTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the shared document or collection.', readOnly: true }),
    sourcePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path of the shared document or collection.', readOnly: true }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier of the shared document, if any.', readOnly: true }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier of the shared collection, if any.', readOnly: true }),
    urlId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Short URL identifier for the share, if set.', readOnly: true }),
    url: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL of the publicly shared document.', readOnly: true }),
    domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom domain the share is served on, if any.' }),
    title: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Override title displayed on the publicly shared page. If not set the source document or collection title is used.',
      }),
    iconUrl: z
      .url()
      .max(4096)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'URL of an icon displayed on the publicly shared page, overriding the workspace branding.',
      }),
    published: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description: 'If true the share can be loaded without a user account.',
      }),
    includeChildDocuments: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description: 'If to also give permission to view documents nested beneath this one.',
      }),
    allowSubscriptions: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description:
          'Whether visitors to the public share can subscribe to receive email notifications when the document is updated. Requires SMTP to be configured on the workspace.',
      }),
    allowIndexing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the shared page may be indexed by search engines.' }),
    showLastUpdated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to show the last-updated time on the shared page.' }),
    showTOC: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to show a table of contents on the shared page.' }),
    views: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The number of times the shared page has been viewed.',
        readOnly: true,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this share was created', readOnly: true }),
    createdBy: UserSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The user that created the share. Only returned to viewers with access to read the share; omitted from responses to unauthenticated viewers of a published share, and when the creating user has been deleted.',
        readOnly: true,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this share was edited', readOnly: true }),
    lastAccessedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date and time when this share was last viewed. Only returned to workspace admins.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Share')

const StarSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    index: z
      .string()
      .exactOptional()
      .openapi({ description: 'Index of the star in the list of stars.' }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the starred document.', readOnly: true }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the starred collection.', readOnly: true }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this star was created', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this star was last changed', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Star')

const InviteSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of the user being invited' }),
    email: z.string().exactOptional().openapi({ description: 'The email address to invite' }),
    role: UserRoleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Invite')

const CollectionStatusSchema = z.literal('archived').openapi('CollectionStatus')

const MembershipSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated user.', readOnly: true }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document, if any.', readOnly: true }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the associated collection, if any.',
        readOnly: true,
      }),
    permission: PermissionSchema.exactOptional(),
    createdById: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user who created this membership.',
        readOnly: true,
      }),
    sourceId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the membership this one was inherited from, if any.',
        readOnly: true,
      }),
    index: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The position of the collection in the user's sidebar." }),
  })
  .openapi({ required: [] })
  .openapi('Membership')

const SearchResultSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user-provided search query',
        example: 'What is our hiring policy?',
        readOnly: true,
      }),
    answer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An answer to the query, if possible',
        example: 'Our hiring policy can be summarized as…',
        readOnly: true,
      }),
    source: z
      .enum(['api', 'app', 'mcp'])
      .exactOptional()
      .openapi({ example: 'app', description: 'The source of the query', readOnly: true }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this object was created', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('SearchResult')

const AbilitySchema = z
  .xor([z.array(z.string()), z.boolean()])
  .openapi({ description: 'A single permission granted by a policy', example: true })
  .openapi('Ability')

const PolicySchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the object this policy references.',
        readOnly: true,
      }),
    abilities: z
      .record(z.string(), AbilitySchema)
      .exactOptional()
      .openapi({
        description:
          "The abilities that are allowed by this policy, if an array is returned then the individual ID's in the array represent the memberships that grant the ability.",
        example: { read: true, update: true, delete: false },
      }),
  })
  .openapi({ required: [] })
  .openapi('Policy')

const GroupMembershipSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    groupId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated group.', readOnly: true }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document, if any.', readOnly: true }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the associated collection, if any.',
        readOnly: true,
      }),
    permission: PermissionSchema.exactOptional(),
    createdById: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user who created this membership.',
        readOnly: true,
      }),
    createdBy: UserSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that this membership was created.',
        readOnly: true,
      }),
    sourceId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the membership this one was inherited from, if any.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupMembership')

const CollectionGroupMembershipSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    groupId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated group.', readOnly: true }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document, if any.', readOnly: true }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the associated collection, if any.',
        readOnly: true,
      }),
    permission: PermissionSchema.exactOptional(),
    sourceId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier for the membership this one was inherited from, if any.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('CollectionGroupMembership')

const TemplateSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL path to access the template.', readOnly: true }),
    urlId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short unique identifier for the template used in URLs.',
        readOnly: true,
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the template.' }),
    data: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The body of the template as a Prosemirror document.' }),
    icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An emoji to use as the template icon.' }),
    color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The color of the template icon in hex format.' }),
    fullWidth: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the template should be displayed full width.' }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated collection, if any.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the template was created.', readOnly: true }),
    createdBy: UserSchema.exactOptional(),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that the template was last changed.',
        readOnly: true,
      }),
    updatedBy: UserSchema.exactOptional(),
    deletedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time that the template was deleted.', readOnly: true }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time that the template was published.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Template')

const WebhookSubscriptionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the webhook subscription.', readOnly: true }),
    name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'The descriptive name of the webhook subscription.',
        example: 'Production webhook',
      }),
    url: z
      .url()
      .max(1024)
      .exactOptional()
      .openapi({
        description: 'The URL that receives webhook requests.',
        example: 'https://example.com/webhooks/outline',
      }),
    secret: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The optional secret used to sign webhook requests.',
        example: 'ol_whs_1234567890abcdef',
      }),
    events: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Event names or namespaces that trigger the webhook. `*` subscribes to all events.',
        example: ['documents.create', 'documents.update'],
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the webhook subscription is enabled.', readOnly: true }),
    createdBy: UserSchema.exactOptional().openapi({
      description: 'The user who created the webhook subscription, if available.',
      readOnly: true,
    }),
    createdById: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user who created the webhook subscription.',
        readOnly: true,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that the webhook subscription was created.',
        readOnly: true,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that the webhook subscription was last changed.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookSubscription')

const ViewSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    documentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document.', readOnly: true }),
    firstViewedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the document was first viewed by the user', readOnly: true }),
    lastViewedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the document was last viewed by the user', readOnly: true }),
    count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The number of times the user has viewed the document.',
        example: 22,
        readOnly: true,
      }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier of the user who viewed the document.', readOnly: true }),
    user: UserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('View')

const ApiKeySchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user provided name for the API key.' }),
    scope: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional list of scopes that restrict which endpoints the key can access. When `null` the key has access to all endpoints available to the user.',
      }),
    last4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last four characters of the key, used to help identify it.',
        readOnly: true,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full secret value of the key. Only returned once, in the response to `apiKeys.create`.',
        readOnly: true,
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date and time when this key expires, if ever.' }),
    lastActiveAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Date and time when this key was last used.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Date and time when this key was created.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Date and time when this key was last updated.' }),
  })
  .openapi({ required: [] })
  .openapi('ApiKey')

const PinSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    documentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the pinned document.' }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the collection the document is pinned to. When `null` the document is pinned to the home screen.',
      }),
    index: z
      .string()
      .exactOptional()
      .openapi({ description: 'The position of the pin, used for ordering.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Date and time when this pin was created.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Date and time when this pin was last updated.' }),
  })
  .openapi({ required: [] })
  .openapi('Pin')

const SubscriptionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier for the subscribed user.', readOnly: true }),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the subscribed document, if any.' }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the subscribed collection, if any.' }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of event that is subscribed to.', example: 'documents' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Date and time when this subscription was created.',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Date and time when this subscription was last updated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Subscription')

const NotificationSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of event that triggered the notification.' }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Identifier for the user the notification belongs to.',
      }),
    actorId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the user that triggered the notification, if any.' }),
    actor: UserSchema.exactOptional(),
    documentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated document, if any.' }),
    collectionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated collection, if any.' }),
    commentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated comment, if any.' }),
    revisionId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for the associated revision, if any.' }),
    viewedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date and time the notification was marked as viewed, if it has been.',
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date and time the notification was archived, if it has been.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Date and time when this notification was created.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const ReactionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the object.', readOnly: true }),
    emoji: z
      .string()
      .exactOptional()
      .openapi({ description: 'The native emoji that was reacted with.' }),
    commentId: z
      .uuid()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Identifier for the comment this reaction belongs to.',
      }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({ readOnly: true, description: 'Identifier for the user that added the reaction.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Date and time when this reaction was created.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Date and time when this reaction was last updated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Reaction')

const NotFoundResponse = {
  description: 'The specified resource was not found.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ValidationResponse = {
  description: 'The request failed one or more validations.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const UnauthorizedResponse = {
  description: 'The current API key is not authorized to perform this action.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const UnauthenticatedResponse = {
  description: 'The API key is missing or otherwise invalid.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const RetryAfterHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'Seconds in the future to retry the request, if rate limited.',
    param: { required: false },
  })

const RateLimitLimitHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The maximum requests available in the current duration.',
    param: { required: false },
  })

const RateLimitRemainingHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'How many requests are left in the current duration.',
    param: { required: false },
  })

const RateLimitResetHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'Timestamp in the future the duration will reset.',
    param: { required: false },
  })

const RateLimitedResponse = {
  description: 'The request was rate limited.',
  content: {
    'application/json': {
      schema: z
        .object({
          ok: z.boolean().exactOptional().openapi({ example: false }),
          error: z.string().exactOptional().openapi({ example: 'rate_limit_exceeded' }),
          status: z.number().exactOptional().openapi({ example: 429 }),
        })
        .openapi({ required: [] }),
    },
  },
  headers: z.object({
    'Retry-After': RetryAfterHeaderSchema,
    'RateLimit-Limit': RateLimitLimitHeaderSchema,
    'RateLimit-Remaining': RateLimitRemainingHeaderSchema,
    'RateLimit-Reset': RateLimitResetHeaderSchema,
  }),
}

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

const OAuth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.getoutline.com/oauth/authorize',
      tokenUrl: 'https://app.getoutline.com/oauth/token',
      refreshUrl: 'https://app.getoutline.com/oauth/token',
      scopes: { read: 'Read access', write: 'Write access' },
    },
  },
}

export const postAccessRequestsCreateRoute = createRoute({
  method: 'post',
  path: '/accessRequests.create',
  tags: ['AccessRequests'],
  summary: 'Create an access request',
  description:
    'Request access to a document. The request will be sent to users with permission to share the document for approval or dismissal.',
  operationId: 'accessRequestsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documentId: z
                .uuid()
                .openapi({ description: 'Identifier for the document to request access to.' }),
            })
            .openapi({ required: ['documentId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: AccessRequestSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postAccessRequestsInfoRoute = createRoute({
  method: 'post',
  path: '/accessRequests.info',
  tags: ['AccessRequests'],
  summary: 'Retrieve an access request',
  description:
    "Retrieve information about an access request by `id`, or the current user's pending request for a document by `documentId`. At least one of these parameters must be provided.",
  operationId: 'accessRequestsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Unique identifier for the access request.' }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the document to find a pending request for the current user.',
                }),
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
          schema: z
            .object({
              data: AccessRequestSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postAccessRequestsApproveRoute = createRoute({
  method: 'post',
  path: '/accessRequests.approve',
  tags: ['AccessRequests'],
  summary: 'Approve an access request',
  description:
    'Approve a pending access request, granting the requesting user a membership on the document with the specified permission.',
  operationId: 'accessRequestsApprove',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the access request.' }),
              permission: z
                .enum(['read', 'read_write', 'admin'])
                .default('read')
                .exactOptional()
                .openapi({ description: 'The permission to grant the requesting user.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: AccessRequestSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postAccessRequestsDismissRoute = createRoute({
  method: 'post',
  path: '/accessRequests.dismiss',
  tags: ['AccessRequests'],
  summary: 'Dismiss an access request',
  description:
    'Dismiss a pending access request without granting the requesting user access to the document.',
  operationId: 'accessRequestsDismiss',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the access request.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: AccessRequestSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postApiKeysCreateRoute = createRoute({
  method: 'post',
  path: '/apiKeys.create',
  tags: ['ApiKeys'],
  summary: 'Create an API key',
  description:
    'Create a new personal API key for the authenticated user. The full key `value` is only returned in this response and cannot be retrieved again, so it should be stored securely.',
  operationId: 'apiKeysCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(255).openapi({ description: 'A name to identify the API key.' }),
              expiresAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'An optional date and time when the key should expire.' }),
              scope: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An optional list of scopes to restrict which endpoints the key can access.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: ApiKeySchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postApiKeysListRoute = createRoute({
  method: 'post',
  path: '/apiKeys.list',
  tags: ['ApiKeys'],
  summary: 'List API keys',
  description:
    'List API keys for the authenticated user, or for all users in the workspace when called by an administrator. The secret key `value` is never included in this response.',
  operationId: 'apiKeysList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                userId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to keys belonging to this user (admin only).' }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Filter to keys whose name matches this search term.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ApiKeySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postApiKeysDeleteRoute = createRoute({
  method: 'post',
  path: '/apiKeys.delete',
  tags: ['ApiKeys'],
  summary: 'Delete an API key',
  description:
    'Permanently revoke an API key. Any requests made with the key afterwards will be rejected.',
  operationId: 'apiKeysDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the API key.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postAttachmentsCreateRoute = createRoute({
  method: 'post',
  path: '/attachments.create',
  tags: ['Attachments'],
  summary: 'Create an attachment',
  description:
    'Creating an attachment object creates a database record and returns the inputs needed to generate a signed url and upload the file from the client to cloud storage.',
  operationId: 'attachmentsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'Name of the file attachment.', example: 'image.png' }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Identifier for the associated document, if any.' }),
              contentType: z
                .string()
                .openapi({
                  description: 'MIME type of the file attachment.',
                  example: 'image/png',
                }),
              size: z
                .int()
                .min(0)
                .openapi({ description: 'Size of the file attachment in bytes.' }),
            })
            .openapi({ required: ['name', 'contentType', 'size'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  maxUploadSize: z.number().exactOptional(),
                  mode: z
                    .enum(['post', 'put'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates which presigned upload method the server is configured to use. When `post`, the client should perform a multipart form POST using `uploadUrl` and `form`. When `put`, the client should perform a PUT request to `url` with the supplied `headers`.',
                    }),
                  uploadUrl: z
                    .url()
                    .exactOptional()
                    .openapi({
                      description:
                        'Present when `mode` is `post`. The endpoint to POST a multipart form upload to.',
                    }),
                  form: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Present when `mode` is `post`. The form fields to include in the multipart upload, including signed credentials.',
                    }),
                  url: z
                    .url()
                    .exactOptional()
                    .openapi({
                      description:
                        'Present when `mode` is `put`. The presigned URL to PUT the file contents to.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Present when `mode` is `put`. The HTTP headers that must be sent with the PUT request.',
                    }),
                  attachment: AttachmentSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postAttachmentsRedirectRoute = createRoute({
  method: 'post',
  path: '/attachments.redirect',
  tags: ['Attachments'],
  summary: 'Retrieve an attachment',
  description:
    'Load an attachment from where it is stored based on the id. If the attachment is private then a temporary, signed url with embedded credentials is generated on demand.',
  operationId: 'attachmentsRedirect',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the attachment.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    302: { description: 'Redirect to the attachment URL' },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postAttachmentsDeleteRoute = createRoute({
  method: 'post',
  path: '/attachments.delete',
  tags: ['Attachments'],
  summary: 'Delete an attachment',
  description:
    'Deleting an attachment is permanent. It will not delete references or links to the attachment that may exist in your documents.',
  operationId: 'attachmentsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the attachment.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postAttachmentsListRoute = createRoute({
  method: 'post',
  path: '/attachments.list',
  tags: ['Attachments'],
  summary: 'List all attachments',
  description:
    'List all attachments in the workspace, optionally filtered by the document or user they are associated with.',
  operationId: 'attachmentsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to attachments associated with this document.' }),
                userId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to attachments uploaded by this user.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(AttachmentSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postAttachmentsCreateFromUrlRoute = createRoute({
  method: 'post',
  path: '/attachments.createFromUrl',
  tags: ['Attachments'],
  summary: 'Create an attachment from a URL',
  description:
    'Fetch a file from a remote URL and store it as an attachment. Unlike `attachments.create`, the server downloads and uploads the file, so the returned attachment is immediately available.',
  operationId: 'attachmentsCreateFromUrl',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.url().openapi({ description: 'The remote URL to fetch the file from.' }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Identifier for the associated document, if any.' }),
              id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description: 'An optional client-generated identifier for the attachment.',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: AttachmentSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postAuthInfoRoute = createRoute({
  method: 'post',
  path: '/auth.info',
  tags: ['Auth'],
  summary: 'Retrieve auth',
  description: 'Retrieve authentication details for the current API key',
  operationId: 'authInfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: AuthSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    429: RateLimitedResponse,
  },
})

export const postAuthConfigRoute = createRoute({
  method: 'post',
  path: '/auth.config',
  tags: ['Auth'],
  summary: 'Retrieve auth config',
  description: 'Retrieve authentication options',
  operationId: 'authConfig',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  name: z.string().exactOptional().openapi({ example: 'Acme Inc' }),
                  hostname: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'acme-inc.getoutline.com' }),
                  services: z
                    .array(
                      z
                        .object({
                          id: z.string().exactOptional().openapi({ example: 'slack' }),
                          name: z.string().exactOptional().openapi({ example: 'Slack' }),
                          authUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'https://acme-inc.getoutline.com/auth/slack' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: RateLimitedResponse,
  },
  security: [],
})

export const postAuthDeleteRoute = createRoute({
  method: 'post',
  path: '/auth.delete',
  tags: ['Auth'],
  summary: 'Sign out',
  description:
    "Sign out the authenticated user. This rotates the user's token secret, immediately invalidating all existing API tokens and sessions for that user.",
  operationId: 'authDelete',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsInfoRoute = createRoute({
  method: 'post',
  path: '/collections.info',
  tags: ['Collections'],
  summary: 'Retrieve a collection',
  description: 'Retrieve the details of a collection by its unique identifier.',
  operationId: 'collectionsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the collection.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CollectionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsDocumentsRoute = createRoute({
  method: 'post',
  path: '/collections.documents',
  tags: ['Collections'],
  summary: 'Retrieve a collections document structure',
  description:
    'Returns the document structure of a collection as a tree of navigation nodes, representing the hierarchy of documents within the collection.',
  operationId: 'collectionsDocuments',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the collection.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NavigationNodeSchema).exactOptional().openapi({ example: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsListRoute = createRoute({
  method: 'post',
  path: '/collections.list',
  tags: ['Collections'],
  summary: 'List all collections',
  description: 'List all collections that the authenticated user has access to.',
  operationId: 'collectionsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                filters: z
                  .array(CollectionFilterSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `query` or `statusFilter` parameters.',
                  }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'If set, will filter the results by collection name. Deprecated – prefer the `filters` parameter.',
                  }),
                statusFilter: z
                  .array(CollectionStatusSchema)
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'An optional array of statuses to filter by. Deprecated – prefer the `filters` parameter.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CollectionSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsCreateRoute = createRoute({
  method: 'post',
  path: '/collections.create',
  tags: ['Collections'],
  summary: 'Create a collection',
  description:
    'Create a new collection with the specified name, description, icon, color, and permission settings. Collections are used to organize documents.',
  operationId: 'collectionsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(100).openapi({ example: 'Human Resources' }),
              description: z
                .string()
                .max(100000)
                .exactOptional()
                .openapi({
                  description:
                    'A brief description of the collection, markdown supported. Only one of `description` or `data` may be provided.',
                  example: 'HR documentation is confidential and should be handled with care.',
                }),
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The collection description as a rich-text ProseMirror JSON document. Only one of `description` or `data` may be provided.',
                }),
              permission: PermissionSchema.exactOptional(),
              icon: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string that represents an icon in the outline-icons package or an emoji',
                }),
              color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A hex color code for the collection icon',
                  example: '#123123',
                }),
              sharing: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether public sharing of documents is allowed',
                  example: false,
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CollectionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsDuplicateRoute = createRoute({
  method: 'post',
  path: '/collections.duplicate',
  tags: ['Collections'],
  summary: 'Duplicate a collection',
  description:
    "Duplicate an existing collection along with its published documents. The\noriginal collection's settings – icon, color, permission, sharing, and\nsorting – are preserved on the copy. Draft and archived documents are\nnot duplicated. Document duplication runs asynchronously in the\nbackground, so the copy may initially be returned before all of its\ndocuments have been created.\n",
  operationId: 'collectionsDuplicate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({ description: 'Unique identifier for the collection to duplicate.' }),
              name: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    "An optional name for the new collection. If omitted, the original collection's name is reused.",
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CollectionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsUpdateRoute = createRoute({
  method: 'post',
  path: '/collections.update',
  tags: ['Collections'],
  summary: 'Update a collection',
  description:
    "Update an existing collection's properties such as name, description, icon, color, sharing settings, or permission level.",
  operationId: 'collectionsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              name: z.string().max(100).exactOptional().openapi({ example: 'Human Resources' }),
              description: z
                .string()
                .max(100000)
                .exactOptional()
                .openapi({
                  description:
                    'A brief description of the collection, markdown supported. Only one of `description` or `data` may be provided.',
                  example: 'HR documentation is confidential and should be handled with care.',
                }),
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The collection description as a rich-text ProseMirror JSON document. Only one of `description` or `data` may be provided.',
                }),
              permission: PermissionSchema.exactOptional(),
              icon: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string that represents an icon in the outline-icons package or an emoji',
                }),
              color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A hex color code for the collection icon',
                  example: '#123123',
                }),
              sharing: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether public sharing of documents is allowed',
                  example: false,
                }),
              deprecatedReason: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The reason the collection was archived. Can only be updated on an archived collection.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CollectionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsAddUserRoute = createRoute({
  method: 'post',
  path: '/collections.add_user',
  tags: ['Collections'],
  summary: 'Add a collection user',
  description: 'This method allows you to add a user membership to the specified collection.',
  operationId: 'collectionsAddUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Identifier for the collection' }),
              userId: z
                .uuid()
                .openapi({ description: 'Identifier for the user to add to the collection' }),
              permission: PermissionSchema.exactOptional(),
            })
            .openapi({ required: ['id', 'userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  memberships: z.array(MembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsRemoveUserRoute = createRoute({
  method: 'post',
  path: '/collections.remove_user',
  tags: ['Collections'],
  summary: 'Remove a collection user',
  description: 'This method allows you to remove a user from the specified collection.',
  operationId: 'collectionsRemoveUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Identifier for the collection' }),
              userId: z
                .uuid()
                .openapi({ description: 'Identifier for the user to remove from the collection' }),
            })
            .openapi({ required: ['id', 'userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsMembershipsRoute = createRoute({
  method: 'post',
  path: '/collections.memberships',
  tags: ['Collections'],
  summary: 'List all collection memberships',
  description:
    "This method allows you to list a collections individual memberships. It's important to note that memberships returned from this endpoint do not include group memberships.",
  operationId: 'collectionsMemberships',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                id: z.uuid().openapi({ description: 'Identifier for the collection' }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Filter memberships by user names', example: 'jenny' }),
                permission: PermissionSchema.exactOptional(),
              })
              .openapi({ required: ['id'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  memberships: z.array(MembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsAddGroupRoute = createRoute({
  method: 'post',
  path: '/collections.add_group',
  tags: ['Collections'],
  summary: 'Add a group to a collection',
  description: 'This method allows you to give all members in a group access to a collection.',
  operationId: 'collectionsAddGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              groupId: z.uuid(),
              permission: PermissionSchema.exactOptional(),
            })
            .openapi({ required: ['id', 'groupId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  collectionGroupMemberships: z
                    .array(CollectionGroupMembershipSchema)
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsRemoveGroupRoute = createRoute({
  method: 'post',
  path: '/collections.remove_group',
  tags: ['Collections'],
  summary: 'Remove a collection group',
  description:
    'This method allows you to revoke all members in a group access to a collection. Note that members of the group may still retain access through other groups or individual memberships.',
  operationId: 'collectionsRemoveGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Identifier for the collection' }),
              groupId: z.uuid(),
            })
            .openapi({ required: ['id', 'groupId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsGroupMembershipsRoute = createRoute({
  method: 'post',
  path: '/collections.group_memberships',
  tags: ['Collections'],
  summary: 'List all collection group members',
  description:
    'This method allows you to list a collections group memberships. This is the list of groups that have been given access to the collection.',
  operationId: 'collectionsGroupMemberships',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                id: z.uuid().openapi({ description: 'Identifier for the collection' }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Filter memberships by group names',
                    example: 'developers',
                  }),
                permission: PermissionSchema.exactOptional(),
              })
              .openapi({ required: ['id'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  groups: z.array(GroupSchema).exactOptional(),
                  collectionGroupMemberships: z
                    .array(CollectionGroupMembershipSchema)
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsDeleteRoute = createRoute({
  method: 'post',
  path: '/collections.delete',
  tags: ['Collections'],
  summary: 'Delete a collection',
  description:
    'Delete a collection and all of its documents. This action can’t be undone so please be careful.',
  operationId: 'collectionsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              reason: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An optional reason for deleting the collection. This is stored and returned as `deprecatedReason`.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsExportRoute = createRoute({
  method: 'post',
  path: '/collections.export',
  tags: ['Collections'],
  summary: 'Export a collection',
  description:
    'Triggers a bulk export of the collection in markdown format and their attachments. If documents are nested then they will be nested in folders inside the zip file. The endpoint returns a `FileOperation` that can be queried to track the progress of the export and get the url for the final file.',
  operationId: 'collectionsExport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              format: z.enum(['outline-markdown', 'json', 'html', 'okf']).exactOptional(),
              id: z.uuid(),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ fileOperation: FileOperationSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsExportAllRoute = createRoute({
  method: 'post',
  path: '/collections.export_all',
  tags: ['Collections'],
  summary: 'Export all collections',
  description:
    'Triggers a bulk export of multiple collections and their documents. The endpoint returns a `FileOperation` that can be queried through the fileOperations endpoint to track the progress of the export and get the url for the final file.',
  operationId: 'collectionsExportAll',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              format: z.enum(['outline-markdown', 'json', 'html', 'okf']).exactOptional(),
              includeAttachments: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Whether to include attachments in the export.' }),
              includePrivate: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Whether to include private collections in the export.' }),
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
          schema: z
            .object({
              data: z
                .object({ fileOperation: FileOperationSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsArchiveRoute = createRoute({
  method: 'post',
  path: '/collections.archive',
  tags: ['Collections'],
  summary: 'Archive a collection',
  description:
    'Archiving a collection hides it, and all of the documents within it, from the sidebar and search results. Archived collections can be restored at a later date.',
  operationId: 'collectionsArchive',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the collection.' }),
              reason: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An optional reason for archiving the collection. This is stored and returned as `deprecatedReason`.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CollectionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsRestoreRoute = createRoute({
  method: 'post',
  path: '/collections.restore',
  tags: ['Collections'],
  summary: 'Restore an archived collection',
  description:
    'Restore a previously archived collection, making it and the documents within it visible in the sidebar and search results once again.',
  operationId: 'collectionsRestore',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the collection.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CollectionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsMoveRoute = createRoute({
  method: 'post',
  path: '/collections.move',
  tags: ['Collections'],
  summary: 'Move a collection',
  description:
    'Move a collection to a new position in the sidebar. Collections are ordered using a fractional index; provide the new index to reposition the collection relative to its siblings.',
  operationId: 'collectionsMove',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the collection.' }),
              index: z
                .string()
                .openapi({
                  description:
                    'The fractional index to move the collection to, used for ordering in the sidebar.',
                }),
            })
            .openapi({ required: ['id', 'index'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  index: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The fractional index the collection was moved to.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCollectionsImportRoute = createRoute({
  method: 'post',
  path: '/collections.import',
  tags: ['Collections'],
  summary: 'Import documents into a new collection',
  description:
    'Import a file that was previously uploaded through `attachments.create` and create a new collection from its contents. The endpoint returns a `FileOperation` that can be queried to track the progress of the import.',
  operationId: 'collectionsImport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attachmentId: z
                .uuid()
                .openapi({
                  description: 'Identifier for the attachment that contains the file to import.',
                }),
              format: z
                .enum(['outline-markdown', 'json'])
                .default('outline-markdown')
                .exactOptional()
                .openapi({ description: 'The format of the file being imported.' }),
              permission: PermissionSchema.exactOptional(),
            })
            .openapi({ required: ['attachmentId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ fileOperation: FileOperationSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsCreateRoute = createRoute({
  method: 'post',
  path: '/comments.create',
  tags: ['Comments'],
  summary: 'Create a comment',
  description:
    'Add a comment or reply to a document, either `data` or `text` is required. Provide `anchorText` to create an inline comment attached to a specific text range in the document.',
  operationId: 'commentsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().exactOptional(),
              documentId: z.uuid(),
              parentCommentId: z.uuid().exactOptional(),
              data: z
                .object({})
                .exactOptional()
                .openapi({ description: 'The body of the comment.' }),
              text: z
                .string()
                .max(10000)
                .exactOptional()
                .openapi({
                  description: 'The body of the comment in markdown.',
                  example: 'Sounds great',
                }),
              anchorText: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Plain text substring to anchor the comment to as an inline comment. The first occurrence in the document's plain text is used unless disambiguated by `anchorPrefix` and/or `anchorSuffix`.",
                }),
              anchorPrefix: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text immediately preceding `anchorText`, used to disambiguate between multiple occurrences. Requires `anchorText`.',
                }),
              anchorSuffix: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text immediately following `anchorText`, used to disambiguate between multiple occurrences. Requires `anchorText`.',
                }),
            })
            .openapi({ required: ['documentId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: CommentSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsInfoRoute = createRoute({
  method: 'post',
  path: '/comments.info',
  tags: ['Comments'],
  summary: 'Retrieve a comment',
  description: 'Retrieve a comment',
  operationId: 'commentsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              includeAnchorText: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Include the document text that the comment is anchored to, if any, in the response.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CommentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsUpdateRoute = createRoute({
  method: 'post',
  path: '/comments.update',
  tags: ['Comments'],
  summary: 'Update a comment',
  description: 'Update a comment, either `data` or `text` is required.',
  operationId: 'commentsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              data: z
                .object({})
                .exactOptional()
                .openapi({ description: 'The body of the comment.' }),
              text: z
                .string()
                .max(10000)
                .exactOptional()
                .openapi({
                  description: 'The body of the comment in markdown.',
                  example: 'Sounds great',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CommentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsDeleteRoute = createRoute({
  method: 'post',
  path: '/comments.delete',
  tags: ['Comments'],
  summary: 'Delete a comment',
  description:
    'Deletes a comment. If the comment is a top-level comment, all its children will be deleted as well.',
  operationId: 'commentsDelete',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({ id: z.uuid() }).openapi({ required: ['id'] }) },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsListRoute = createRoute({
  method: 'post',
  path: '/comments.list',
  tags: ['Comments'],
  summary: 'List all comments',
  description: 'This method will list all comments matching the given properties.',
  operationId: 'commentsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to a specific document' }),
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to a specific collection' }),
                includeAnchorText: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Include the document text that the comment is anchored to, if any, in the response.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CommentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsResolveRoute = createRoute({
  method: 'post',
  path: '/comments.resolve',
  tags: ['Comments'],
  summary: 'Resolve a comment',
  description:
    'Mark a comment thread as resolved. Resolved comments are hidden from the document by default and indicate that the discussion has been dealt with.',
  operationId: 'commentsResolve',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the comment.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CommentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsUnresolveRoute = createRoute({
  method: 'post',
  path: '/comments.unresolve',
  tags: ['Comments'],
  summary: 'Unresolve a comment',
  description:
    'Mark a previously resolved comment thread as unresolved, making it visible on the document again.',
  operationId: 'commentsUnresolve',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the comment.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CommentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsAddReactionRoute = createRoute({
  method: 'post',
  path: '/comments.add_reaction',
  tags: ['Comments'],
  summary: 'Add a reaction to a comment',
  description: 'Add an emoji reaction to a comment on behalf of the authenticated user.',
  operationId: 'commentsAddReaction',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the comment.' }),
              emoji: z
                .string()
                .openapi({ description: 'A native emoji to react with, for example `😄`.' }),
            })
            .openapi({ required: ['id', 'emoji'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postCommentsRemoveReactionRoute = createRoute({
  method: 'post',
  path: '/comments.remove_reaction',
  tags: ['Comments'],
  summary: 'Remove a reaction from a comment',
  description:
    'Remove an emoji reaction that the authenticated user previously added to a comment.',
  operationId: 'commentsRemoveReaction',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the comment.' }),
              emoji: z
                .string()
                .openapi({ description: 'The native emoji reaction to remove, for example `😄`.' }),
            })
            .openapi({ required: ['id', 'emoji'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDataAttributesInfoRoute = createRoute({
  method: 'post',
  path: '/dataAttributes.info',
  tags: ['DataAttributes'],
  summary: 'Retrieve a data attribute',
  description: 'Retrieve a data attribute by its unique identifier.',
  operationId: 'dataAttributesInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the data attribute.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: DataAttributeSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDataAttributesListRoute = createRoute({
  method: 'post',
  path: '/dataAttributes.list',
  tags: ['DataAttributes'],
  summary: 'List all data attributes',
  description: 'List all data attributes.',
  operationId: 'dataAttributesList',
  request: {
    body: { content: { 'application/json': { schema: PaginationSchema.and(SortingSchema) } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DataAttributeSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDataAttributesCreateRoute = createRoute({
  method: 'post',
  path: '/dataAttributes.create',
  tags: ['DataAttributes'],
  summary: 'Create a data attribute',
  description: 'Create a new data attribute. Only admins can create data attributes.',
  operationId: 'dataAttributesCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'Name of the data attribute.', example: 'Status' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Description of the data attribute.',
                  example: 'The current status of the document.',
                }),
              dataType: DataAttributeDataTypeSchema,
              options: DataAttributeOptionsSchema.exactOptional(),
              pinned: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'Whether the data attribute is pinned to the top of document.',
                }),
            })
            .openapi({ required: ['name', 'dataType'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DataAttributeSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDataAttributesUpdateRoute = createRoute({
  method: 'post',
  path: '/dataAttributes.update',
  tags: ['DataAttributes'],
  summary: 'Update a data attribute',
  description:
    'Update an existing data attribute. Only admins can update data attributes. Note that the dataType cannot be changed after creation.',
  operationId: 'dataAttributesUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the data attribute.' }),
              name: z
                .string()
                .openapi({ description: 'Name of the data attribute.', example: 'Status' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Description of the data attribute.' }),
              options: DataAttributeOptionsSchema.exactOptional(),
              pinned: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the data attribute is pinned to the top of document.',
                }),
            })
            .openapi({ required: ['id', 'name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DataAttributeSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDataAttributesDeleteRoute = createRoute({
  method: 'post',
  path: '/dataAttributes.delete',
  tags: ['DataAttributes'],
  summary: 'Delete a data attribute',
  description: 'Delete a data attribute. Only admins can delete data attributes.',
  operationId: 'dataAttributesDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the data attribute.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsInfoRoute = createRoute({
  method: 'post',
  path: '/documents.info',
  tags: ['Documents'],
  summary: 'Retrieve a document',
  description:
    'Retrieve a document by its `UUID`, `urlId`, or `shareId`. At least one of these parameters must be provided.',
  operationId: 'documentsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              shareId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier for a document share, a shareId may be used in place of a document UUID',
                }),
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
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsInsightsRoute = createRoute({
  method: 'post',
  path: '/documents.insights',
  tags: ['Documents'],
  summary: 'Retrieve insights for a document',
  description:
    'Retrieve a chronologically sorted array of activity rollups (views, comments, reactions, revisions, editors) for a document. Recent activity is returned as daily rollups, while older activity is aggregated into weekly rollups. Insights must be enabled on the document. Defaults to the last 30 days when no date range is provided.',
  operationId: 'documentsInsights',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the document.' }),
              startDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'Start of the insights window (inclusive). Defaults to 30 days ago.',
                }),
              endDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'End of the insights window (inclusive). Defaults to today.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(DocumentInsightSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsImportRoute = createRoute({
  method: 'post',
  path: '/documents.import',
  tags: ['Documents'],
  summary: 'Import a file as a document',
  description:
    'This method allows you to create a new document by importing an existing file. By default a document is set to the collection root. If you want to create a nested/child document, you should pass parentDocumentId to set the parent document.',
  operationId: 'documentsImport',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .object({})
                .openapi({
                  description:
                    'Plain text, markdown, docx, pdf, csv, tsv, html, mhtml (or mht) web pages, eml email messages, and textbundle/textpack bundles are supported.',
                }),
              collectionId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Identifier for the collection to import into. One of collectionId or parentDocumentId is required. Pass the literal string `personal` to import into the authenticated user's personal collection.",
                }),
              parentDocumentId: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.uuid().nullable(),
              )
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the parent document to import under. One of collectionId or parentDocumentId is required.',
                }),
              publish: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether to publish the imported document' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsExportRoute = createRoute({
  method: 'post',
  path: '/documents.export',
  tags: ['Documents'],
  summary: 'Export a document.',
  description:
    'Export a document in Markdown, HTML, PDF, or TextBundle format. The response format is determined by the Accept header (`text/markdown`, `text/html`, `application/pdf`, or `application/x-textbundle`). Optionally include child documents in the export as a zip file.',
  operationId: 'documentsExport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              paperSize: z
                .string()
                .exactOptional()
                .openapi({ description: 'Paper size for PDF export (e.g., "A4", "Letter")' }),
              signedUrls: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'How long signed URLs should remain valid for attachment links (in seconds)',
                }),
              includeChildDocuments: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to include child documents in the export. Using this option will always return a zip file.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'The document content in Markdown formatting' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsListRoute = createRoute({
  method: 'post',
  path: '/documents.list',
  tags: ['Documents'],
  summary: 'List all documents',
  description:
    'This method will list all published documents and draft documents belonging to the current user.',
  operationId: 'documentsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                filters: z
                  .array(DocumentFilterSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `collectionId`, `userId`, `parentDocumentId` or `statusFilter` parameters.',
                  }),
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Optionally filter to a specific collection. Deprecated – prefer the `filters` parameter.',
                  }),
                userId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Optionally filter to documents created by a specific user. Deprecated – prefer the `filters` parameter.',
                  }),
                backlinkDocumentId: z.uuid().exactOptional(),
                parentDocumentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Optionally filter to child documents of a specific parent. Deprecated – prefer the `filters` parameter.',
                  }),
                statusFilter: z
                  .array(z.enum(['draft', 'archived', 'published']))
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Document statuses to include in results. Deprecated – prefer the `filters` parameter.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsDocumentsRoute = createRoute({
  method: 'post',
  path: '/documents.documents',
  tags: ['Documents'],
  summary: "Retrieve a document's child structure",
  description:
    'This method returns the nested document structure (tree) for the children of the specified document.',
  operationId: 'documentsDocuments',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: NavigationNodeSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsDraftsRoute = createRoute({
  method: 'post',
  path: '/documents.drafts',
  tags: ['Documents'],
  summary: 'List all draft documents',
  description: 'This method will list all draft documents belonging to the current user.',
  operationId: 'documentsDrafts',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'A collection to search within' }),
                dateFilter: z
                  .enum(['day', 'week', 'month', 'year'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Any documents that have not been updated within the specified period will be filtered out',
                    example: 'month',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsViewedRoute = createRoute({
  method: 'post',
  path: '/documents.viewed',
  tags: ['Documents'],
  summary: 'List all recently viewed documents',
  description: 'This method will list all documents recently viewed by the current user.',
  operationId: 'documentsViewed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                sort: z
                  .enum(['updatedAt', 'createdAt'])
                  .default('updatedAt')
                  .exactOptional()
                  .openapi({
                    description:
                      'The field to sort by. Note that sorting is by a column of the view record, not the document itself.',
                  }),
                direction: z
                  .enum(['ASC', 'DESC'])
                  .default('DESC')
                  .exactOptional()
                  .openapi({ example: 'DESC' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsAnswerQuestionRoute = createRoute({
  method: 'post',
  path: '/documents.answerQuestion',
  tags: ['Documents'],
  summary: 'Query documents with natural language',
  description:
    'This method allows asking direct questions of your documents – where possible an answer will be provided. Search results will be restricted to those accessible by the current access token. Note that "AI answers" must be enabled for the workspace.',
  operationId: 'documentsAnswerQuestion',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z.string().exactOptional().openapi({ example: 'What is our holiday policy?' }),
              userId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Any documents that have not been edited by the user identifier will be filtered out',
                }),
              collectionId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'A collection to search within' }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'A document to search within' }),
              statusFilter: z
                .enum(['draft', 'archived', 'published'])
                .exactOptional()
                .openapi({
                  description:
                    'Any documents that are not in the specified status will be filtered out',
                }),
              dateFilter: z
                .enum(['day', 'week', 'month', 'year'])
                .exactOptional()
                .openapi({
                  description:
                    'Any documents that have not been updated within the specified period will be filtered out',
                }),
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
          schema: z
            .object({
              documents: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              search: SearchResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsSearchTitlesRoute = createRoute({
  method: 'post',
  path: '/documents.search_titles',
  tags: ['Documents'],
  summary: 'Search document titles',
  description:
    'This method allows you to search document titles with keywords. Unlike documents.search, this only searches titles and returns faster results.',
  operationId: 'documentsSearchTitles',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                query: z
                  .string()
                  .openapi({ description: 'Search query to match against document titles' }),
                filters: z
                  .array(DocumentFilterSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `collectionId`, `userId`, `documentId`, `dateFilter` or `statusFilter` parameters.',
                  }),
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Filter to a specific collection. Deprecated – prefer the `filters` parameter.',
                  }),
                userId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Filter results based on user. Deprecated – prefer the `filters` parameter.',
                  }),
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Filter results based on content within a document and its children. Deprecated – prefer the `filters` parameter.',
                  }),
                statusFilter: z
                  .array(z.enum(['draft', 'archived', 'published']))
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Document statuses to include in results. Deprecated – prefer the `filters` parameter.',
                  }),
                dateFilter: z
                  .enum(['day', 'week', 'month', 'year'])
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Any documents that have not been updated within the specified period will be filtered out. Deprecated – prefer the `filters` parameter with a date field and an ISO 8601 duration value.',
                  }),
                shareId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filter results for the collection or document referenced by the shareId',
                  }),
                sort: z
                  .enum(['relevance', 'createdAt', 'updatedAt', 'title'])
                  .exactOptional()
                  .openapi({
                    description: 'Specifies the attributes by which search results will be sorted',
                  }),
                direction: z
                  .enum(['ASC', 'DESC'])
                  .exactOptional()
                  .openapi({ description: 'Specifies the sort order with respect to sort field' }),
              })
              .openapi({ required: ['query'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsSearchRoute = createRoute({
  method: 'post',
  path: '/documents.search',
  tags: ['Documents'],
  summary: 'Search all documents',
  description:
    "This methods allows you to search your workspace's documents with keywords. Note that search results will be restricted to those accessible by the current access token.",
  operationId: 'documentsSearch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                query: z.string().exactOptional().openapi({ example: 'hiring' }),
                filters: z
                  .array(DocumentFilterSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `collectionId`, `userId`, `documentId`, `dateFilter` or `statusFilter` parameters.',
                  }),
                userId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Any documents that have not been edited by the user identifier will be filtered out. Deprecated – prefer the `filters` parameter.',
                  }),
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'A collection to search within. Deprecated – prefer the `filters` parameter.',
                  }),
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'A document to search within. Deprecated – prefer the `filters` parameter.',
                  }),
                statusFilter: z
                  .array(z.enum(['draft', 'archived', 'published']))
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Document statuses to include in results. Deprecated – prefer the `filters` parameter.',
                  }),
                dateFilter: z
                  .enum(['day', 'week', 'month', 'year'])
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Any documents that have not been updated within the specified period will be filtered out. Deprecated – prefer the `filters` parameter with a date field and an ISO 8601 duration value.',
                    example: 'month',
                  }),
                shareId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filter results to the collection or document referenced by the shareId',
                  }),
                snippetMinWords: z
                  .number()
                  .default(20)
                  .exactOptional()
                  .openapi({
                    description: 'Minimum number of words to show in search result snippets',
                  }),
                snippetMaxWords: z
                  .number()
                  .default(30)
                  .exactOptional()
                  .openapi({
                    description: 'Maximum number of words to show in search result snippets',
                  }),
                sort: z
                  .enum(['relevance', 'createdAt', 'updatedAt', 'title'])
                  .exactOptional()
                  .openapi({
                    description: 'Specifies the attributes by which search results will be sorted',
                  }),
                direction: z
                  .enum(['ASC', 'DESC'])
                  .exactOptional()
                  .openapi({ description: 'Specifies the sort order with respect to sort field' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      context: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short snippet of context from the document that includes the search query.',
                          example: 'At Acme Inc our hiring practices are inclusive',
                        }),
                      ranking: z
                        .float32()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ranking used to order search results based on relevance.',
                          example: 1.1844109,
                        }),
                      document: DocumentSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsCreateRoute = createRoute({
  method: 'post',
  path: '/documents.create',
  tags: ['Documents'],
  summary: 'Create a document',
  description:
    'This method allows you to create or publish a new document. By default a document is set to the collection root. If you want to create a nested/child document, you should pass parentDocumentId to set the parent document.',
  operationId: 'documentsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Optional identifier for the document' }),
              title: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ example: 'Welcome to Acme Inc' }),
              text: z
                .string()
                .max(1536000)
                .exactOptional()
                .openapi({ description: 'The body of the document in markdown' }),
              icon: z
                .string()
                .exactOptional()
                .openapi({ description: 'Icon displayed alongside the document title' }),
              color: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Color for the document icon (hex format)' }),
              collectionId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Identifier for the collection. Required to publish unless parentDocumentId is provided. Pass the literal string `personal` to create the document in the authenticated user's personal collection.",
                }),
              parentDocumentId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the parent document. Required to publish unless collectionId is provided',
                }),
              templateId: z.uuid().exactOptional(),
              publish: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this document should be immediately published and made visible to other workspace members.',
                }),
              fullWidth: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the document should be displayed in full width' }),
              preferences: z
                .object({
                  headingPrefix: z
                    .enum(['none', 'numeric', 'alphanumeric', 'outline'])
                    .exactOptional()
                    .openapi({
                      description:
                        "Numbering style applied to the document's headings when rendered.",
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Document-level display preferences. Only the fields supplied are updated; existing values for other preferences are preserved. Pass `null` to clear all preferences.',
                  required: [],
                }),
              createdAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Optionally set the created date in the past' }),
              dataAttributes: z
                .array(
                  z
                    .object({
                      dataAttributeId: z
                        .uuid()
                        .openapi({ description: 'Unique identifier for the data attribute.' }),
                      value: z
                        .xor([z.string(), z.boolean(), z.number()])
                        .openapi({
                          description:
                            'The value of the data attribute. Can be a string, boolean, or number depending on the data attribute type.',
                          example: 'In Progress',
                        }),
                    })
                    .openapi({ required: ['dataAttributeId', 'value'] }),
                )
                .exactOptional()
                .openapi({ description: 'Data attributes to be included on the document.' }),
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
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsUpdateRoute = createRoute({
  method: 'post',
  path: '/documents.update',
  tags: ['Documents'],
  summary: 'Update a document',
  description: 'This method allows you to modify an already created document',
  operationId: 'documentsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              title: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The title of the document.' }),
              text: z
                .string()
                .max(1536000)
                .exactOptional()
                .openapi({ description: 'The body of the document in markdown.' }),
              icon: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Icon displayed alongside the document title' }),
              color: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Color for the document icon (hex format)' }),
              fullWidth: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the document should be displayed in full width' }),
              preferences: z
                .object({
                  headingPrefix: z
                    .enum(['none', 'numeric', 'alphanumeric', 'outline'])
                    .exactOptional()
                    .openapi({
                      description:
                        "Numbering style applied to the document's headings when rendered.",
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Document-level display preferences. Only the fields supplied are updated; existing values for other preferences are preserved. Pass `null` to clear all preferences.',
                  required: [],
                }),
              templateId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Identifier for the template this document is based on' }),
              collectionId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Identifier for the collection to move the document to' }),
              insightsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether insights should be visible on the document' }),
              editMode: TextEditModeSchema.exactOptional(),
              findText: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The text to find within the document when using `patch` editMode. This text will be replaced with the value of `text`. Required when `editMode` is `patch`.',
                }),
              publish: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this document should be published and made visible to other workspace members, if a draft',
                }),
              lastRevision: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "If set, the update is rejected with a 409 response when the document's current revision number does not match this value. Use this for optimistic concurrency control to avoid overwriting changes made since the client last loaded the document.",
                }),
              dataAttributes: z
                .array(
                  z
                    .object({
                      dataAttributeId: z
                        .uuid()
                        .openapi({ description: 'Unique identifier for the data attribute.' }),
                      value: z
                        .xor([z.string(), z.boolean(), z.number()])
                        .openapi({
                          description:
                            'The value of the data attribute. Can be a string, boolean, or number depending on the data attribute type.',
                          example: 'In Progress',
                        }),
                    })
                    .openapi({ required: ['dataAttributeId', 'value'] }),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Data attributes to be updated. Attributes not included will be removed from the document.',
                }),
              deprecatedReason: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The reason the document was archived or deleted. Can only be updated on an archived or deleted document.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    409: {
      description:
        "The provided `lastRevision` did not match the document's current revision, indicating a conflicting update.",
    },
    429: RateLimitedResponse,
  },
})

export const postDocumentsTemplatizeRoute = createRoute({
  method: 'post',
  path: '/documents.templatize',
  tags: ['Documents'],
  summary: 'Create a template from a document',
  description:
    'This method allows you to create a new template using an existing document as the basis',
  operationId: 'documentsTemplatize',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              collectionId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Identifier for the collection where the template should be created',
                }),
              publish: z
                .boolean()
                .openapi({ description: 'Whether the new template should be published' }),
            })
            .openapi({ required: ['id', 'publish'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: TemplateSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsUnpublishRoute = createRoute({
  method: 'post',
  path: '/documents.unpublish',
  tags: ['Documents'],
  summary: 'Unpublish a document',
  description: 'Unpublishing a document moves it back to a draft status and out of the collection.',
  operationId: 'documentsUnpublish',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              detach: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Whether to detach the document from the collection' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsMoveRoute = createRoute({
  method: 'post',
  path: '/documents.move',
  tags: ['Documents'],
  summary: 'Move a document',
  description:
    'Move a document to a new location or collection. If no parent document is provided, the document will be moved to the collection root.',
  operationId: 'documentsMove',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              collectionId: z.uuid().exactOptional(),
              parentDocumentId: z.uuid().exactOptional(),
              index: z
                .number()
                .exactOptional()
                .openapi({ description: 'The position index in the collection structure' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  documents: z.array(DocumentSchema).exactOptional(),
                  collections: z.array(CollectionSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsArchiveRoute = createRoute({
  method: 'post',
  path: '/documents.archive',
  tags: ['Documents'],
  summary: 'Archive a document',
  description:
    'Archiving a document allows outdated information to be moved out of sight whilst retaining the ability to optionally search and restore it later.',
  operationId: 'documentsArchive',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              reason: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An optional reason for archiving the document. This is stored and returned as `deprecatedReason`.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsRestoreRoute = createRoute({
  method: 'post',
  path: '/documents.restore',
  tags: ['Documents'],
  summary: 'Restore a document',
  description:
    'If a document has been archived or deleted, it can be restored. Optionally a revision can be passed to restore the document to a previous point in time.',
  operationId: 'documentsRestore',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              collectionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description: 'Identifier for the collection to restore the document to.',
                }),
              revisionId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Identifier for the revision to restore to.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: DocumentSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsDeleteRoute = createRoute({
  method: 'post',
  path: '/documents.delete',
  tags: ['Documents'],
  summary: 'Delete a document',
  description:
    'Deleting a document moves it to the trash. If not restored within 30 days it is permanently deleted.',
  operationId: 'documentsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              permanent: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'If set to true the document will be destroyed with no way to recover rather than moved to the trash.',
                }),
              reason: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An optional reason for deleting the document. This is stored and returned as `deprecatedReason`.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsUsersRoute = createRoute({
  method: 'post',
  path: '/documents.users',
  tags: ['Documents'],
  summary: 'List document users',
  description:
    'All users with access to a document. To list only users with direct membership to the document use `documents.memberships`',
  operationId: 'documentsUsers',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              query: z
                .string()
                .exactOptional()
                .openapi({ description: 'If set, will filter the results by user name.' }),
              userId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'If set, will filter the results to a specific user.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(UserSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsMembershipsRoute = createRoute({
  method: 'post',
  path: '/documents.memberships',
  tags: ['Documents'],
  summary: 'List document memberships',
  description:
    'Users with direct membership to a document. To list all users with access to a document use `documents.users`.',
  operationId: 'documentsMemberships',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  example: 'hDYep1TPAM',
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              query: z
                .string()
                .exactOptional()
                .openapi({ description: 'If set, will filter the results by user name' }),
              permission: PermissionSchema.exactOptional(),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  memberships: z.array(MembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsAddUserRoute = createRoute({
  method: 'post',
  path: '/documents.add_user',
  tags: ['Documents'],
  summary: 'Add a document user',
  description: 'This method allows you to add a user membership to the specified document.',
  operationId: 'documentsAddUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              userId: z.uuid(),
              permission: PermissionSchema.exactOptional(),
            })
            .openapi({ required: ['id', 'userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  memberships: z.array(MembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsRemoveUserRoute = createRoute({
  method: 'post',
  path: '/documents.remove_user',
  tags: ['Documents'],
  summary: 'Remove a document user',
  description: 'This method allows you to remove a user membership from the specified document.',
  operationId: 'documentsRemoveUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              userId: z.uuid(),
            })
            .openapi({ required: ['id', 'userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsArchivedRoute = createRoute({
  method: 'post',
  path: '/documents.archived',
  tags: ['Documents'],
  summary: 'List all archived documents',
  description:
    'This method will list all archived documents belonging to the workspace that the current user has access to.',
  operationId: 'documentsArchived',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Optionally filter to a specific collection' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsDeletedRoute = createRoute({
  method: 'post',
  path: '/documents.deleted',
  tags: ['Documents'],
  summary: 'List all deleted documents',
  description:
    'This method will list all deleted documents belonging to the workspace that the current user has access to.',
  operationId: 'documentsDeleted',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                filters: z
                  .array(DocumentsDeletedFilterSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Structured filter expression, evaluated as an AND of top-level entries. Supported fields are `deletedAt` (date) and `deletedById` (uuid, identifier of the user who deleted the document).',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsDuplicateRoute = createRoute({
  method: 'post',
  path: '/documents.duplicate',
  tags: ['Documents'],
  summary: 'Duplicate a document',
  description:
    'This method allows you to duplicate an existing document and optionally all of its child documents.',
  operationId: 'documentsDuplicate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              title: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'New title for the duplicated document' }),
              recursive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether child documents should also be duplicated' }),
              publish: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the new document should be published' }),
              collectionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description: 'Identifier for the collection the document should be copied to',
                }),
              parentDocumentId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the parent document the document should be copied to',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ documents: z.array(DocumentSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsAddGroupRoute = createRoute({
  method: 'post',
  path: '/documents.add_group',
  tags: ['Documents'],
  summary: 'Add a group to a document',
  description: 'This method allows you to give all members in a group access to a document.',
  operationId: 'documentsAddGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              groupId: z.uuid(),
              permission: PermissionSchema.exactOptional(),
            })
            .openapi({ required: ['id', 'groupId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  groupMemberships: z.array(CollectionGroupMembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsRemoveGroupRoute = createRoute({
  method: 'post',
  path: '/documents.remove_group',
  tags: ['Documents'],
  summary: 'Remove a group from a document',
  description: 'This method allows you to revoke all members in a group access to a document.',
  operationId: 'documentsRemoveGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                }),
              groupId: z.uuid(),
            })
            .openapi({ required: ['id', 'groupId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsGroupMembershipsRoute = createRoute({
  method: 'post',
  path: '/documents.group_memberships',
  tags: ['Documents'],
  summary: 'List document group memberships',
  description: "This method allows you to list a document's group memberships.",
  operationId: 'documentsGroupMemberships',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                id: z
                  .string()
                  .openapi({
                    description:
                      'Unique identifier for the document. Either the UUID or the urlId is acceptable.',
                  }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Filter memberships by group names' }),
                permission: PermissionSchema.exactOptional(),
              })
              .openapi({ required: ['id'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  groups: z.array(GroupSchema).exactOptional(),
                  groupMemberships: z.array(CollectionGroupMembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postDocumentsEmptyTrashRoute = createRoute({
  method: 'post',
  path: '/documents.empty_trash',
  tags: ['Documents'],
  summary: 'Empty trash',
  description:
    'Permanently delete all documents in the trash. This action is irreversible. Only available to admin users.',
  operationId: 'documentsEmptyTrash',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postEventsListRoute = createRoute({
  method: 'post',
  path: '/events.list',
  tags: ['Events'],
  summary: 'List all events',
  description: 'Events are an audit trail of important events that happen in the knowledge base.',
  operationId: 'eventsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filter to a specific event, e.g. "collections.create". Event names are in the format "objects.verb"',
                  }),
                actorId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to events performed by the selected user' }),
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to events performed in the selected document' }),
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    description: 'Filter to events performed in the selected collection',
                  }),
                auditLog: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Whether to return detailed events suitable for an audit log. Without this flag less detailed event types will be returned.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(EventSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postFileOperationsInfoRoute = createRoute({
  method: 'post',
  path: '/fileOperations.info',
  tags: ['FileOperations'],
  summary: 'Retrieve a file operation',
  description:
    'Retrieve the details and current status of a file operation by its unique identifier. File operations represent long-running import or export tasks.',
  operationId: 'fileOperationsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the file operation.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: FileOperationSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postFileOperationsDeleteRoute = createRoute({
  method: 'post',
  path: '/fileOperations.delete',
  tags: ['FileOperations'],
  summary: 'Delete a file operation',
  description:
    'Delete a file operation and its associated files. This is useful for cleaning up completed or failed import/export operations.',
  operationId: 'fileOperationsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the file operation.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postFileOperationsRedirectRoute = createRoute({
  method: 'post',
  path: '/fileOperations.redirect',
  tags: ['FileOperations'],
  summary: 'Retrieve the file',
  description:
    'Load the resulting file from where it is stored based on the id. A temporary, signed url with embedded credentials is generated on demand.',
  operationId: 'fileOperationsRedirect',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the file operation.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postFileOperationsListRoute = createRoute({
  method: 'post',
  path: '/fileOperations.list',
  tags: ['FileOperations'],
  summary: 'List all file operations',
  description:
    'List all file operations for the current workspace, filtered by type (import or export).',
  operationId: 'fileOperationsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                type: z
                  .enum(['export', 'import'])
                  .openapi({ description: 'The type of fileOperation', example: 'export' }),
              })
              .openapi({ required: ['type'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FileOperationSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupMembershipsListRoute = createRoute({
  method: 'post',
  path: '/groupMemberships.list',
  tags: ['GroupMemberships'],
  summary: 'List group memberships',
  description:
    'List the documents that have been shared with groups the authenticated user belongs to, along with the associated group membership records.',
  operationId: 'groupMembershipsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                groupId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to memberships for a specific group.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  groupMemberships: z.array(GroupMembershipSchema).exactOptional(),
                  groups: z.array(GroupSchema).exactOptional(),
                  documents: z.array(DocumentSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsInfoRoute = createRoute({
  method: 'post',
  path: '/groups.info',
  tags: ['Groups'],
  summary: 'Retrieve a group',
  description:
    'Retrieve the details of a group by its unique identifier, including its name and member count.',
  operationId: 'groupsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the group.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: GroupSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsListRoute = createRoute({
  method: 'post',
  path: '/groups.list',
  tags: ['Groups'],
  summary: 'List all groups',
  description:
    'List all groups in the workspace. Groups are used to organize users and manage permissions for collections.',
  operationId: 'groupsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                userId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to groups including a specific user' }),
                externalId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to groups matching an external ID' }),
                query: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Filter to groups matching a search query' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  groups: z.array(GroupSchema).exactOptional(),
                  groupMemberships: z
                    .array(GroupMembershipSchema)
                    .exactOptional()
                    .openapi({
                      description:
                        'A preview of memberships in the group, note that this is not all memberships which can be queried from `groups.memberships`.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsCreateRoute = createRoute({
  method: 'post',
  path: '/groups.create',
  tags: ['Groups'],
  summary: 'Create a group',
  description:
    'Create a new group with the specified name. Groups can be used to organize users and assign collection permissions to multiple users at once.',
  operationId: 'groupsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(255).openapi({ example: 'Designers' }),
              description: z
                .string()
                .max(2000)
                .nullable()
                .exactOptional()
                .openapi({ description: 'A short description of the group.' }),
              icon: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'An icon or emoji to use as the group icon.' }),
              color: z
                .string()
                .regex(/^#[0-9A-Fa-f]{6}$/)
                .nullable()
                .exactOptional()
                .openapi({ description: 'The color of the group icon in hex format.' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: GroupSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsUpdateRoute = createRoute({
  method: 'post',
  path: '/groups.update',
  tags: ['Groups'],
  summary: 'Update a group',
  description: "Update an existing group's name. The group is identified by its unique identifier.",
  operationId: 'groupsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              name: z.string().max(255).openapi({ example: 'Designers' }),
              icon: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'An icon or emoji to use as the group icon.' }),
              color: z
                .string()
                .regex(/^#[0-9A-Fa-f]{6}$/)
                .nullable()
                .exactOptional()
                .openapi({ description: 'The color of the group icon in hex format.' }),
            })
            .openapi({ required: ['id', 'name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: GroupSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsDeleteRoute = createRoute({
  method: 'post',
  path: '/groups.delete',
  tags: ['Groups'],
  summary: 'Delete a group',
  description:
    'Deleting a group will cause all of its members to lose access to any collections the group has previously been added to. This action can’t be undone so please be careful.',
  operationId: 'groupsDelete',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({ id: z.uuid() }).openapi({ required: ['id'] }) },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsMembershipsRoute = createRoute({
  method: 'post',
  path: '/groups.memberships',
  tags: ['Groups'],
  summary: 'List all group members',
  description: 'List and filter all the members in a group.',
  operationId: 'groupsMemberships',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'Group id',
                    example: 'a32c2ee6-fbde-4654-841b-0eabdc71b812',
                  }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Filter memberships by user names', example: 'jenny' }),
              })
              .openapi({ required: ['id'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  groupMemberships: z.array(GroupMembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsAddUserRoute = createRoute({
  method: 'post',
  path: '/groups.add_user',
  tags: ['Groups'],
  summary: 'Add a group member',
  description: 'This method allows you to add a user to the specified group.',
  operationId: 'groupsAddUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Identifier for the group' }),
              userId: z
                .uuid()
                .openapi({ description: 'Identifier for the user to add to the group' }),
              permission: z
                .enum(['member', 'admin'])
                .exactOptional()
                .openapi({
                  description:
                    "The permission level for the user within the group. When omitted for a new membership this defaults to `member`, and an existing membership's permission is left unchanged.",
                }),
            })
            .openapi({ required: ['id', 'userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  groups: z.array(GroupSchema).exactOptional(),
                  groupMemberships: z.array(GroupMembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsRemoveUserRoute = createRoute({
  method: 'post',
  path: '/groups.remove_user',
  tags: ['Groups'],
  summary: 'Remove a group member',
  description: 'This method allows you to remove a user from the group.',
  operationId: 'groupsRemoveUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Identifier for the group' }),
              userId: z
                .uuid()
                .openapi({ description: 'Identifier for the user to remove from the group' }),
            })
            .openapi({ required: ['id', 'userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ groups: z.array(GroupSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postGroupsUpdateUserRoute = createRoute({
  method: 'post',
  path: '/groups.update_user',
  tags: ['Groups'],
  summary: 'Update a group member',
  description:
    'Update the role of an existing member of a group, for example to promote them to a group admin or demote them back to a regular member.',
  operationId: 'groupsUpdateUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Identifier for the group' }),
              userId: z
                .uuid()
                .openapi({
                  description: 'Identifier for the user whose membership should be updated',
                }),
              permission: z
                .enum(['member', 'admin'])
                .openapi({ description: 'The permission the user should have within the group' }),
            })
            .openapi({ required: ['id', 'userId', 'permission'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  users: z.array(UserSchema).exactOptional(),
                  groups: z.array(GroupSchema).exactOptional(),
                  groupMemberships: z.array(GroupMembershipSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postNotificationsListRoute = createRoute({
  method: 'post',
  path: '/notifications.list',
  tags: ['Notifications'],
  summary: 'List notifications',
  description:
    "List the authenticated user's notifications, most recent first, optionally filtered by event type or archived status.",
  operationId: 'notificationsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                eventType: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Filter to notifications of a specific event type.' }),
                archived: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'When true, only archived notifications are returned.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NotificationSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postNotificationsUpdateRoute = createRoute({
  method: 'post',
  path: '/notifications.update',
  tags: ['Notifications'],
  summary: 'Update a notification',
  description:
    'Update a single notification, for example to mark it as viewed or archived by setting the relevant timestamp.',
  operationId: 'notificationsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the notification.' }),
              viewedAt: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The date and time the notification was viewed, or `null` to mark it unviewed.',
                }),
              archivedAt: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The date and time the notification was archived, or `null` to unarchive it.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: NotificationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postNotificationsUpdateAllRoute = createRoute({
  method: 'post',
  path: '/notifications.update_all',
  tags: ['Notifications'],
  summary: 'Update all notifications',
  description:
    "Update all of the authenticated user's notifications at once, for example to mark them all as viewed or archived.",
  operationId: 'notificationsUpdateAll',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              viewedAt: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The date and time to mark notifications viewed, or `null` to mark them unviewed.',
                }),
              archivedAt: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The date and time to archive notifications, or `null` to unarchive them.',
                }),
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
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthAuthenticationsListRoute = createRoute({
  method: 'post',
  path: '/oauthAuthentications.list',
  tags: ['OAuthAuthentications'],
  summary: 'List accessible OAuth authentications',
  description:
    'List all OAuth authentications for the current user. These represent the third-party applications that the user has authorized to access their account.',
  operationId: 'oauthAuthenticationsList',
  request: { body: { content: { 'application/json': { schema: PaginationSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(OAuthAuthenticationSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthAuthenticationsDeleteRoute = createRoute({
  method: 'post',
  path: '/oauthAuthentications.delete',
  tags: ['OAuthAuthentications'],
  summary: 'Delete an OAuth authentiation',
  description:
    "Revoke an OAuth authentication, removing the third-party application's access to the user's account.",
  operationId: 'oauthAuthenticationsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ oauthClientId: z.uuid(), scope: z.array(z.string()).exactOptional() })
            .openapi({ required: ['oauthClientId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthClientsInfoRoute = createRoute({
  method: 'post',
  path: '/oauthClients.info',
  tags: ['OAuthClients'],
  summary: 'Retrieve an OAuth client',
  description:
    'To retrieve information about an OAuth client you must pass either an `id` or a `clientId`.',
  operationId: 'oauthClientsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Unique identifier for the OAuth client.' }),
              clientId: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    "Public identifier for the OAuth client. This may also be the URL of a client ID metadata document, in which case the client's details are resolved from that document.",
                  example: '2bquf8avrpdv31par42a',
                }),
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
          schema: z
            .object({
              data: OAuthClientSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthClientsListRoute = createRoute({
  method: 'post',
  path: '/oauthClients.list',
  tags: ['OAuthClients'],
  summary: 'List accessible OAuth clients',
  description:
    'List all OAuth clients that the authenticated user has access to. This includes both clients created by the user and published clients available to the workspace.',
  operationId: 'oauthClientsList',
  request: { body: { content: { 'application/json': { schema: PaginationSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(OAuthClientSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthClientsCreateRoute = createRoute({
  method: 'post',
  path: '/oauthClients.create',
  tags: ['OAuthClients'],
  summary: 'Create an OAuth client',
  description:
    'Create a new OAuth client application that can be used to authenticate users and access the API on their behalf.',
  operationId: 'oauthClientsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .max(100)
                .openapi({ description: 'Name of the OAuth client.', example: 'My App' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'A short description of this OAuth client.',
                  example: "Integrate Acme Inc's services into Outline.",
                }),
              developerName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The name of the developer who created this OAuth client.',
                  example: 'Acme Inc',
                }),
              developerUrl: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The URL of the developer who created this OAuth client.',
                  example: 'https://example.com',
                }),
              avatarUrl: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'A URL pointing to an image representing the OAuth client.',
                }),
              redirectUris: z
                .array(z.string().max(1024))
                .openapi({
                  description:
                    'List of redirect URIs for the OAuth client. Each entry must be an absolute URL that includes a scheme, for example `https://example.com/callback`. Private-use URI schemes for native applications are also accepted, for example `com.example.app:/oauth2redirect` (see RFC 8252).',
                  example: ['https://example.com/callback', 'com.example.app:/oauth2redirect'],
                }),
              published: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the OAuth client is available to other workspaces.',
                  example: true,
                }),
            })
            .openapi({ required: ['name', 'redirectUris'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: OAuthClientSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthClientsUpdateRoute = createRoute({
  method: 'post',
  path: '/oauthClients.update',
  tags: ['OAuthClients'],
  summary: 'Update an OAuth client',
  description:
    "Update an existing OAuth client's properties such as name, description, redirect URIs, or published status.",
  operationId: 'oauthClientsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the OAuth client.' }),
              name: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'Name of the OAuth client.', example: 'My App' }),
              description: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'A short description of this OAuth client.',
                  example: "Integrate Acme Inc's services into Outline.",
                }),
              developerName: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The name of the developer who created this OAuth client.',
                  example: 'Acme Inc',
                }),
              developerUrl: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The URL of the developer who created this OAuth client.',
                  example: 'https://example.com',
                }),
              avatarUrl: z
                .string()
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'A URL pointing to an image representing the OAuth client.',
                }),
              redirectUris: z
                .array(z.string().max(1024))
                .exactOptional()
                .openapi({
                  description:
                    'List of redirect URIs for the OAuth client. Each entry must be an absolute URL that includes a scheme, for example `https://example.com/callback`. Private-use URI schemes for native applications are also accepted, for example `com.example.app:/oauth2redirect` (see RFC 8252).',
                  example: ['https://example.com/callback', 'com.example.app:/oauth2redirect'],
                }),
              published: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the OAuth client is available to other workspaces.',
                  example: true,
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: OAuthClientSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthClientsRotateSecretRoute = createRoute({
  method: 'post',
  path: '/oauthClients.rotate_secret',
  tags: ['OAuthClients'],
  summary: 'Rotate the secret for an OAuth client',
  description:
    'Generate a new client secret for an OAuth client. The old secret will be invalidated immediately, so ensure your application is updated to use the new secret.',
  operationId: 'oauthClientsRotateSecret',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the OAuth client.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: OAuthClientSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postOauthClientsDeleteRoute = createRoute({
  method: 'post',
  path: '/oauthClients.delete',
  tags: ['OAuthClients'],
  summary: 'Delete an OAuth client',
  description:
    'Permanently delete an OAuth client and revoke all associated access tokens. This action cannot be undone.',
  operationId: 'oauthClientsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the OAuth client.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postPinsCreateRoute = createRoute({
  method: 'post',
  path: '/pins.create',
  tags: ['Pins'],
  summary: 'Pin a document',
  description:
    'Pin a document to the top of a collection or to the home screen. Pinned documents are visible to all members of the workspace. Provide a `collectionId` to pin within a collection, or omit it to pin to the home screen.',
  operationId: 'pinsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documentId: z.uuid().openapi({ description: 'Identifier for the document to pin.' }),
              collectionId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the collection to pin the document to. Omit to pin to the home screen.',
                }),
              index: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An optional fractional index to control the position of the pin.',
                }),
            })
            .openapi({ required: ['documentId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: PinSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postPinsInfoRoute = createRoute({
  method: 'post',
  path: '/pins.info',
  tags: ['Pins'],
  summary: 'Retrieve a pin',
  description: 'Retrieve the pin for a document, either within a collection or on the home screen.',
  operationId: 'pinsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documentId: z.uuid().openapi({ description: 'Identifier for the pinned document.' }),
              collectionId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the collection. Omit to retrieve the home screen pin.',
                }),
            })
            .openapi({ required: ['documentId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: PinSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postPinsListRoute = createRoute({
  method: 'post',
  path: '/pins.list',
  tags: ['Pins'],
  summary: 'List pins',
  description:
    'List the pinned documents for a collection, or for the home screen when no `collectionId` is provided.',
  operationId: 'pinsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                collectionId: z
                  .uuid()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'The collection to list pins for. Omit to list home screen pins.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PinSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postPinsUpdateRoute = createRoute({
  method: 'post',
  path: '/pins.update',
  tags: ['Pins'],
  summary: 'Update a pin',
  description: 'Update the position of an existing pin, used to reorder pinned documents.',
  operationId: 'pinsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the pin.' }),
              index: z
                .string()
                .openapi({ description: 'The fractional index to move the pin to.' }),
            })
            .openapi({ required: ['id', 'index'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: PinSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postPinsDeleteRoute = createRoute({
  method: 'post',
  path: '/pins.delete',
  tags: ['Pins'],
  summary: 'Delete a pin',
  description:
    'Remove a pin, un-pinning the document from its collection or the home screen. The document itself is not affected.',
  operationId: 'pinsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the pin.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postReactionsListRoute = createRoute({
  method: 'post',
  path: '/reactions.list',
  tags: ['Reactions'],
  summary: 'List reactions',
  description: 'List the emoji reactions that have been added to a comment.',
  operationId: 'reactionsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                commentId: z
                  .uuid()
                  .openapi({ description: 'Identifier for the comment to list reactions for.' }),
              })
              .openapi({ required: ['commentId'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ReactionSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postRevisionsInfoRoute = createRoute({
  method: 'post',
  path: '/revisions.info',
  tags: ['Revisions'],
  summary: 'Retrieve a revision',
  description:
    'A revision is a snapshot of a document at a specific point in time. This endpoint allows you to retrieve a specific version of a document by its unique identifier.',
  operationId: 'revisionsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the revision.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: RevisionDetailSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postRevisionsListRoute = createRoute({
  method: 'post',
  path: '/revisions.list',
  tags: ['Revisions'],
  summary: 'List all revisions',
  description:
    "List all revisions for a specific document. Revisions represent historical snapshots of a document's content and can be used to track changes over time. The `data` and `text` fields are omitted from listed revisions for performance; use `revisions.info` to retrieve the full content of a specific revision.",
  operationId: 'revisionsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'The document ID to retrieve revisions for' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RevisionSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postRevisionsUpdateRoute = createRoute({
  method: 'post',
  path: '/revisions.update',
  tags: ['Revisions'],
  summary: 'Update a revision',
  description:
    'Update the details of a revision. Currently only the name of the revision can be changed, which is used to label significant versions of a document.',
  operationId: 'revisionsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the revision.' }),
              name: z
                .string()
                .max(255)
                .nullable()
                .openapi({
                  description: 'The name of the revision, or `null` to remove an existing name.',
                }),
            })
            .openapi({ required: ['id', 'name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: RevisionSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postRevisionsDeleteRoute = createRoute({
  method: 'post',
  path: '/revisions.delete',
  tags: ['Revisions'],
  summary: 'Delete a revision',
  description:
    'Delete a specific revision of a document. The latest revision of a document cannot be deleted.',
  operationId: 'revisionsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the revision.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postRevisionsExportRoute = createRoute({
  method: 'post',
  path: '/revisions.export',
  tags: ['Revisions'],
  summary: 'Export a revision',
  description:
    'Triggers an export of a single revision to a file. The endpoint returns a `FileOperation` that can be queried to track the progress of the export and get the url for the final file.',
  operationId: 'revisionsExport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the revision.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ fileOperation: FileOperationSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postSharesInfoRoute = createRoute({
  method: 'post',
  path: '/shares.info',
  tags: ['Shares'],
  summary: 'Retrieve a share object',
  description:
    'Retrieve the details of a share link by its unique identifier or by the associated document ID. Shares allow documents to be accessed publicly or by specific users.',
  operationId: 'sharesInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier for the share. Either the UUID or the share slug is acceptable.',
                }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier for a document. One of id or documentId must be provided.',
                }),
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
          schema: z
            .object({
              data: ShareSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postSharesListRoute = createRoute({
  method: 'post',
  path: '/shares.list',
  tags: ['Shares'],
  summary: 'List all shares',
  description: 'List all share links in the workspace.',
  operationId: 'sharesList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                query: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Filter to shared documents matching a search query' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ShareSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postSharesCreateRoute = createRoute({
  method: 'post',
  path: '/shares.create',
  tags: ['Shares'],
  summary: 'Create a share',
  description:
    'Creates a new share link that can be used by to access a document or collection. If you request multiple shares for the same resource with the same API key, the same share object will be returned. By default all shares are unpublished. Exactly one of `documentId` or `collectionId` must be provided.',
  operationId: 'sharesCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'documentId')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['documentId'] }),
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'collectionId')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['collectionId'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: ShareSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postSharesUpdateRoute = createRoute({
  method: 'post',
  path: '/shares.update',
  tags: ['Shares'],
  summary: 'Update a share',
  description:
    "Allows changing an existing share's published status, which removes authentication and makes it available to anyone with the link.",
  operationId: 'sharesUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid(),
              published: z.boolean(),
              title: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Override title displayed on the publicly shared page. If not set the source document or collection title is used.',
                }),
              iconUrl: z
                .url()
                .max(4096)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'URL of an icon to display on the publicly shared page, overriding the workspace branding.',
                }),
            })
            .openapi({ required: ['id', 'published'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: ShareSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postSharesRevokeRoute = createRoute({
  method: 'post',
  path: '/shares.revoke',
  tags: ['Shares'],
  summary: 'Revoke a share',
  description:
    'Makes the share link inactive so that it can no longer be used to access the document.',
  operationId: 'sharesRevoke',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({ id: z.uuid() }).openapi({ required: ['id'] }) },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postStarsCreateRoute = createRoute({
  method: 'post',
  path: '/stars.create',
  tags: ['Stars'],
  summary: 'Create a star',
  description:
    'Stars a document or collection so it appears in the users sidebar. One of either `documentId` or `collectionId` must be provided.',
  operationId: 'starsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documentId: z.uuid().exactOptional(),
              collectionId: z.uuid().exactOptional(),
              index: z.string().exactOptional(),
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
          schema: z
            .object({
              data: StarSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postStarsListRoute = createRoute({
  method: 'post',
  path: '/stars.list',
  tags: ['Stars'],
  summary: 'List all stars',
  description:
    'List all starred documents for the authenticated user. Stars allow users to bookmark important documents for quick access in the sidebar.',
  operationId: 'starsList',
  request: { body: { content: { 'application/json': { schema: PaginationSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  stars: z.array(StarSchema).exactOptional(),
                  documents: z.array(DocumentSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postStarsUpdateRoute = createRoute({
  method: 'post',
  path: '/stars.update',
  tags: ['Stars'],
  summary: 'Update a stars order in the sidebar',
  description:
    'Update the position of a starred document in the sidebar. The index parameter determines the display order relative to other starred documents.',
  operationId: 'starsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid(), index: z.string() })
            .openapi({ required: ['id', 'index'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: StarSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postStarsDeleteRoute = createRoute({
  method: 'post',
  path: '/stars.delete',
  tags: ['Stars'],
  summary: 'Delete a star',
  description:
    "Remove a star from a document, removing it from the user's starred documents list in the sidebar.",
  operationId: 'starsDelete',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({ id: z.uuid() }).openapi({ required: ['id'] }) },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postSubscriptionsListRoute = createRoute({
  method: 'post',
  path: '/subscriptions.list',
  tags: ['Subscriptions'],
  summary: 'List subscriptions',
  description: "List the authenticated user's subscriptions for a given document or collection.",
  operationId: 'subscriptionsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                event: z
                  .literal('documents')
                  .openapi({ description: 'The type of event that is subscribed to.' }),
                documentId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filter to subscriptions for this document. Provide exactly one of documentId or collectionId.',
                  }),
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filter to subscriptions for this collection. Provide exactly one of documentId or collectionId.',
                  }),
              })
              .openapi({ required: ['event'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(SubscriptionSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postSubscriptionsInfoRoute = createRoute({
  method: 'post',
  path: '/subscriptions.info',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription',
  description:
    "Retrieve the authenticated user's subscription for a specific document or collection, if one exists.",
  operationId: 'subscriptionsInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              event: z
                .literal('documents')
                .openapi({ description: 'The type of event that is subscribed to.' }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The subscribed document. Provide exactly one of documentId or collectionId.',
                }),
              collectionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The subscribed collection. Provide exactly one of documentId or collectionId.',
                }),
            })
            .openapi({ required: ['event'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: SubscriptionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postSubscriptionsCreateRoute = createRoute({
  method: 'post',
  path: '/subscriptions.create',
  tags: ['Subscriptions'],
  summary: 'Create a subscription',
  description:
    'Subscribe the authenticated user to a document or collection so that they receive notifications when it changes. Provide exactly one of `documentId` or `collectionId`.',
  operationId: 'subscriptionsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              event: z
                .literal('documents')
                .openapi({ description: 'The type of event to subscribe to.' }),
              documentId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The document to subscribe to. Provide exactly one of documentId or collectionId.',
                }),
              collectionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The collection to subscribe to. Provide exactly one of documentId or collectionId.',
                }),
            })
            .openapi({ required: ['event'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: SubscriptionSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postSubscriptionsDeleteRoute = createRoute({
  method: 'post',
  path: '/subscriptions.delete',
  tags: ['Subscriptions'],
  summary: 'Delete a subscription',
  description:
    "Unsubscribe the authenticated user from a document or collection by the subscription's identifier.",
  operationId: 'subscriptionsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the subscription.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesCreateRoute = createRoute({
  method: 'post',
  path: '/templates.create',
  tags: ['Templates'],
  summary: 'Create a template',
  description:
    'Create a new template that can be used as a starting point for new documents. Templates can optionally be scoped to a specific collection.',
  operationId: 'templatesCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Optionally provide a specific UUID for the template.' }),
              title: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'The title of the template. Required when publishing.' }),
              data: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The body of the template as a Prosemirror document. Required when publishing.',
                }),
              icon: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'An emoji to use as the template icon.' }),
              color: z
                .string()
                .regex(/^#[0-9A-Fa-f]{6}$/)
                .nullable()
                .exactOptional()
                .openapi({ description: 'The color of the template icon in hex format.' }),
              collectionId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description: 'Identifier for the collection to which the template belongs.',
                }),
              publish: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Whether the template is available to other members. Set to false to create a draft that is only visible to its creator.',
                }),
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
          schema: z
            .object({
              data: TemplateSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesListRoute = createRoute({
  method: 'post',
  path: '/templates.list',
  tags: ['Templates'],
  summary: 'List all templates',
  description:
    'List all templates available to the current user. Optionally filter by collection. Templates not associated with a collection are workspace-wide.',
  operationId: 'templatesList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                collectionId: z
                  .uuid()
                  .exactOptional()
                  .openapi({ description: 'Optionally filter to a specific collection' }),
                query: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Search query to filter templates by title' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TemplateSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesInfoRoute = createRoute({
  method: 'post',
  path: '/templates.info',
  tags: ['Templates'],
  summary: 'Retrieve a template',
  description: 'Retrieve a template by its unique identifier.',
  operationId: 'templatesInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the template. Either the UUID or the urlId is acceptable.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: TemplateSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesUpdateRoute = createRoute({
  method: 'post',
  path: '/templates.update',
  tags: ['Templates'],
  summary: 'Update a template',
  description: 'Update an existing template by its unique identifier.',
  operationId: 'templatesUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the template. Either the UUID or the urlId is acceptable.',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'The title of the template.' }),
              data: z
                .object({})
                .exactOptional()
                .openapi({ description: 'The body of the template as a Prosemirror document.' }),
              icon: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'An emoji to use as the template icon.' }),
              color: z
                .string()
                .regex(/^#[0-9A-Fa-f]{6}$/)
                .nullable()
                .exactOptional()
                .openapi({ description: 'The color of the template icon in hex format.' }),
              fullWidth: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the template should be displayed full width.' }),
              collectionId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Identifier for the collection to which the template belongs. Set to null for a workspace-wide template.',
                }),
              publish: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true to publish a draft template so it becomes available to other members.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: TemplateSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesDeleteRoute = createRoute({
  method: 'post',
  path: '/templates.delete',
  tags: ['Templates'],
  summary: 'Delete a template',
  description:
    'Delete a template by its unique identifier. This will soft-delete the template, it can be restored later.',
  operationId: 'templatesDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the template. Either the UUID or the urlId is acceptable.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesRestoreRoute = createRoute({
  method: 'post',
  path: '/templates.restore',
  tags: ['Templates'],
  summary: 'Restore a template',
  description: 'Restore a previously deleted template by its unique identifier.',
  operationId: 'templatesRestore',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the template. Either the UUID or the urlId is acceptable.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: TemplateSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postTemplatesDuplicateRoute = createRoute({
  method: 'post',
  path: '/templates.duplicate',
  tags: ['Templates'],
  summary: 'Duplicate a template',
  description:
    'Create a copy of an existing template. Optionally override the title and target collection.',
  operationId: 'templatesDuplicate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description:
                    'Unique identifier for the template to duplicate. Either the UUID or the urlId is acceptable.',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Override the title of the duplicated template.' }),
              collectionId: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Identifier for the collection to place the duplicated template in. If not provided, uses the original template's collection.",
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: TemplateSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUserMembershipsListRoute = createRoute({
  method: 'post',
  path: '/userMemberships.list',
  tags: ['UserMemberships'],
  summary: 'List document memberships',
  description:
    'List the documents that have been shared directly with the authenticated user, along with the associated membership records.',
  operationId: 'userMembershipsList',
  request: { body: { content: { 'application/json': { schema: PaginationSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  memberships: z.array(MembershipSchema).exactOptional(),
                  documents: z.array(DocumentSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              pagination: PaginationSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postUserMembershipsUpdateRoute = createRoute({
  method: 'post',
  path: '/userMemberships.update',
  tags: ['UserMemberships'],
  summary: 'Update a document membership',
  description:
    "Update the authenticated user's membership of a shared document, used to reorder documents in the sidebar.",
  operationId: 'userMembershipsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the membership.' }),
              index: z
                .string()
                .openapi({
                  description: 'The fractional index to move the document to in the sidebar.',
                }),
            })
            .openapi({ required: ['id', 'index'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: MembershipSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersInviteRoute = createRoute({
  method: 'post',
  path: '/users.invite',
  tags: ['Users'],
  summary: 'Invite users',
  description:
    'Send email invitations to one or more users to join the workspace. Invitations include a link to create an account and join the workspace.',
  operationId: 'usersInvite',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              invites: z.array(InviteSchema),
              suppressEmail: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, the invitation emails will not be sent to the invited users. Defaults to false.',
                }),
            })
            .openapi({ required: ['invites'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  sent: z.array(InviteSchema).exactOptional(),
                  users: z.array(UserSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersInfoRoute = createRoute({
  method: 'post',
  path: '/users.info',
  tags: ['Users'],
  summary: 'Retrieve a user',
  description:
    'Retrieve the details of a user by their unique identifier, including their name, email, avatar, and role within the workspace.',
  operationId: 'usersInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the user.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: UserSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersListRoute = createRoute({
  method: 'post',
  path: '/users.list',
  tags: ['Users'],
  summary: 'List all users',
  description: 'List and filter all the users in the workspace',
  operationId: 'usersList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                query: z.string().exactOptional().openapi({ example: 'jane' }),
                filters: z
                  .array(UserFilterSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Structured filter expression, evaluated as an AND of top-level entries. Cannot be combined with the deprecated `emails`, `role` or `filter` parameters.',
                  }),
                emails: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'Array of emails. Deprecated – prefer the `filters` parameter with an `email` field and the `in` operator.',
                    example: ['jane.crandall@mail.com', 'prudence.crandall@mail.com'],
                  }),
                filter: z
                  .enum(['all', 'invited', 'active', 'suspended'])
                  .exactOptional()
                  .openapi({
                    deprecated: true,
                    description:
                      'The status to filter by. Deprecated – prefer the `filters` parameter (for example filter on `suspendedAt` or `lastActiveAt`).',
                  }),
                role: UserRoleSchema.exactOptional().openapi({
                  deprecated: true,
                  description:
                    'The role to filter by. Deprecated – prefer the `filters` parameter with a `role` field.',
                }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(UserSchema).exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersUpdateRoute = createRoute({
  method: 'post',
  path: '/users.update',
  tags: ['Users'],
  summary: 'Update a user',
  description:
    'Update a users name or avatar. If no `id` is passed then the user associated with the authentication will be updated by default.',
  operationId: 'usersUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(255).exactOptional(),
              language: z.string().exactOptional(),
              avatarUrl: z.url().exactOptional(),
              preferences: z
                .object({
                  sidebarSectionOrder: z
                    .array(z.enum(['starred', 'shared', 'collections']))
                    .exactOptional()
                    .openapi({
                      description:
                        'The order in which the top-level sections appear in the sidebar of the app UI.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'User-level preference flags. Only the fields supplied are updated; existing values for other preferences are preserved.',
                  required: [],
                }),
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
          schema: z
            .object({
              data: UserSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersUpdateRoleRoute = createRoute({
  method: 'post',
  path: '/users.update_role',
  tags: ['Users'],
  summary: 'Change a users role',
  description: 'Change the role of a user, only available to admin authorization.',
  operationId: 'usersUpdateRole',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'Unique identifier for the user.' }),
              role: UserRoleSchema,
            })
            .openapi({ required: ['id', 'role'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: UserSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersSuspendRoute = createRoute({
  method: 'post',
  path: '/users.suspend',
  tags: ['Users'],
  summary: 'Suspend a user',
  description:
    'Suspending a user prevents the user from signing in. Users that are suspended are also not counted against billing totals in the hosted version.',
  operationId: 'usersSuspend',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the user.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: UserSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersActivateRoute = createRoute({
  method: 'post',
  path: '/users.activate',
  tags: ['Users'],
  summary: 'Activate a user',
  description:
    'Activating a previously suspended user allows them to signin again. Users that are activated will cause billing totals to be re-calculated in the hosted version.',
  operationId: 'usersActivate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the user.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: UserSchema.exactOptional(),
              policies: z.array(PolicySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersDeleteRoute = createRoute({
  method: 'post',
  path: '/users.delete',
  tags: ['Users'],
  summary: 'Delete a user',
  description:
    'Deleting a user removes the object entirely. In almost every circumstance it is preferable to suspend a user, as a deleted user can be recreated by signing in with SSO again.',
  operationId: 'usersDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Unique identifier for the user.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersResendInviteRoute = createRoute({
  method: 'post',
  path: '/users.resendInvite',
  tags: ['Users'],
  summary: 'Resend a user invite',
  description:
    'Resend the invitation email to a user who has been invited but has not yet signed in. Only applies to users in the invited state.',
  operationId: 'usersResendInvite',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'Identifier for the invited user.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersNotificationsSubscribeRoute = createRoute({
  method: 'post',
  path: '/users.notificationsSubscribe',
  tags: ['Users'],
  summary: 'Subscribe to a notification type',
  description:
    'Enable a specific type of notification for the authenticated user. This controls which events the user receives email and in-app notifications for.',
  operationId: 'usersNotificationsSubscribe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              eventType: z
                .enum([
                  'documents.publish',
                  'documents.update',
                  'documents.add_user',
                  'collections.add_user',
                  'revisions.create',
                  'collections.create',
                  'comments.create',
                  'comments.resolve',
                  'reactions.create',
                  'documents.mentioned',
                  'comments.mentioned',
                  'documents.group_mentioned',
                  'comments.group_mentioned',
                  'emails.invite_accepted',
                  'emails.onboarding',
                  'emails.features',
                  'emails.export_completed',
                  'access_requests.create',
                ])
                .exactOptional()
                .openapi({ description: 'The notification event type to subscribe to.' }),
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
          schema: z.object({ data: UserSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postUsersNotificationsUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/users.notificationsUnsubscribe',
  tags: ['Users'],
  summary: 'Unsubscribe from a notification type',
  description: 'Disable a specific type of notification for the authenticated user.',
  operationId: 'usersNotificationsUnsubscribe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              eventType: z
                .enum([
                  'documents.publish',
                  'documents.update',
                  'documents.add_user',
                  'collections.add_user',
                  'revisions.create',
                  'collections.create',
                  'comments.create',
                  'comments.resolve',
                  'reactions.create',
                  'documents.mentioned',
                  'comments.mentioned',
                  'documents.group_mentioned',
                  'comments.group_mentioned',
                  'emails.invite_accepted',
                  'emails.onboarding',
                  'emails.features',
                  'emails.export_completed',
                  'access_requests.create',
                ])
                .exactOptional()
                .openapi({ description: 'The notification event type to unsubscribe from.' }),
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
          schema: z.object({ data: UserSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postViewsListRoute = createRoute({
  method: 'post',
  path: '/views.list',
  tags: ['Views'],
  summary: 'List all views',
  description: 'List all users that have viewed a document and the overall view count.',
  operationId: 'viewsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(
            z
              .object({
                documentId: z
                  .uuid()
                  .openapi({ description: 'The document ID to retrieve views for' }),
                includeSuspended: z
                  .boolean()
                  .default(false)
                  .exactOptional()
                  .openapi({ description: 'Whether to include views from suspended users' }),
              })
              .openapi({ required: ['documentId'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ViewSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postWebhookSubscriptionsListRoute = createRoute({
  method: 'post',
  path: '/webhookSubscriptions.list',
  tags: ['WebhookSubscriptions'],
  summary: 'List all webhook subscriptions',
  description:
    'List all webhook subscriptions for the workspace. Only workspace administrators can access this endpoint.',
  operationId: 'webhookSubscriptionsList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaginationSchema.and(SortingSchema).and(
            z
              .object({
                query: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Search query to filter webhook subscriptions by name.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(WebhookSubscriptionSchema).exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postWebhookSubscriptionsCreateRoute = createRoute({
  method: 'post',
  path: '/webhookSubscriptions.create',
  tags: ['WebhookSubscriptions'],
  summary: 'Create a webhook subscription',
  description:
    'Create a webhook subscription for the workspace. Only workspace administrators can access this endpoint.',
  operationId: 'webhookSubscriptionsCreate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .max(255)
                .openapi({
                  description: 'A descriptive name for the webhook subscription.',
                  example: 'Production webhook',
                }),
              url: z
                .url()
                .max(1024)
                .openapi({
                  description:
                    'The URL that receives webhook requests. Cloud-hosted workspaces require an HTTPS URL.',
                  example: 'https://example.com/webhooks/outline',
                }),
              secret: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'An optional secret used to sign webhook requests.',
                  example: 'ol_whs_1234567890abcdef',
                }),
              events: z
                .array(z.string())
                .openapi({
                  description:
                    'Event names or namespaces that trigger the webhook. Use `*` to subscribe to all events.',
                  example: ['documents.create', 'documents.update'],
                }),
            })
            .openapi({ required: ['name', 'url', 'events'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookSubscriptionSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    429: RateLimitedResponse,
  },
})

export const postWebhookSubscriptionsUpdateRoute = createRoute({
  method: 'post',
  path: '/webhookSubscriptions.update',
  tags: ['WebhookSubscriptions'],
  summary: 'Update a webhook subscription',
  description:
    'Update an existing webhook subscription. Updating a disabled subscription enables it again. Only workspace administrators can access this endpoint.',
  operationId: 'webhookSubscriptionsUpdate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({ description: 'Unique identifier for the webhook subscription.' }),
              name: z
                .string()
                .max(255)
                .openapi({
                  description: 'A descriptive name for the webhook subscription.',
                  example: 'Production webhook',
                }),
              url: z
                .url()
                .max(1024)
                .openapi({
                  description:
                    'The URL that receives webhook requests. Cloud-hosted workspaces require an HTTPS URL.',
                  example: 'https://example.com/webhooks/outline',
                }),
              secret: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'An optional secret used to sign webhook requests.',
                  example: 'ol_whs_1234567890abcdef',
                }),
              events: z
                .array(z.string())
                .openapi({
                  description:
                    'Event names or namespaces that trigger the webhook. Use `*` to subscribe to all events.',
                  example: ['documents.create', 'documents.update'],
                }),
            })
            .openapi({ required: ['id', 'name', 'url', 'events'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: WebhookSubscriptionSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})

export const postWebhookSubscriptionsDeleteRoute = createRoute({
  method: 'post',
  path: '/webhookSubscriptions.delete',
  tags: ['WebhookSubscriptions'],
  summary: 'Delete a webhook subscription',
  description:
    'Delete a webhook subscription. Only workspace administrators can access this endpoint.',
  operationId: 'webhookSubscriptionsDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({ description: 'Unique identifier for the webhook subscription.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: ValidationResponse,
    401: UnauthenticatedResponse,
    403: UnauthorizedResponse,
    404: NotFoundResponse,
    429: RateLimitedResponse,
  },
})
