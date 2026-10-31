import { createRoute, z } from '@hono/zod-openapi'

const TextContentSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the note. The limits on this vary with the specific field using this type.',
      }),
  })
  .openapi({
    description: 'The block of text for a single text section or list item.',
    required: [],
  })
  .openapi('TextContent')

type ListItemType = {
  checked?: boolean
  childListItems?: ListItemType[]
  text?: z.infer<typeof TextContentSchema>
}

const AttachmentSchema = z
  .object({
    mimeType: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The MIME types (IANA media types) in which the attachment is available.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The resource name;' }),
  })
  .openapi({ description: 'An attachment to a note.', required: [] })
  .openapi('Attachment')

const FamilySchema = z
  .object({})
  .openapi({ description: 'Describes a single Google Family.' })
  .openapi('Family')

const GroupSchema = z
  .object({ email: z.string().exactOptional().openapi({ description: 'The group email.' }) })
  .openapi({ description: 'Describes a single Group.', required: [] })
  .openapi('Group')

const UserSchema = z
  .object({ email: z.string().exactOptional().openapi({ description: "The user's email." }) })
  .openapi({ description: 'Describes a single user.', required: [] })
  .openapi('User')

const PermissionSchema = z
  .object({
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note.',
        readOnly: true,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email associated with the member. If set on create, the `email` field in the `User` or `Group` message must either be empty or match this field. On read, may be unset if the member does not have an associated email.',
      }),
    family: FamilySchema.exactOptional().openapi({
      description: 'Output only. The Google Family to which this role applies.',
      readOnly: true,
    }),
    group: GroupSchema.exactOptional().openapi({
      description: 'Output only. The group to which this role applies.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name.', readOnly: true }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'OWNER', 'WRITER'])
      .exactOptional()
      .openapi({
        description:
          'The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.',
      }),
    user: UserSchema.exactOptional().openapi({
      description: 'Output only. The user to whom this role applies.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'A single permission on the note. Associates a `member` with a `role`.',
    required: [],
  })
  .openapi('Permission')

const CreatePermissionRequestSchema = z
  .object({
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The parent note where this permission will be created. Format: `notes/{note}`',
      }),
    permission: PermissionSchema.exactOptional().openapi({
      description:
        'Required. The permission to create. One of Permission.email, User.email or Group.email must be supplied.',
    }),
  })
  .openapi({ description: 'The request to add a single permission on the note.', required: [] })
  .openapi('CreatePermissionRequest')

const BatchCreatePermissionsRequestSchema = z
  .object({
    requests: z
      .array(CreatePermissionRequestSchema)
      .exactOptional()
      .openapi({ description: 'The request message specifying the resources to create.' }),
  })
  .openapi({
    description:
      'The request to add one or more permissions on the note. Currently, only the `WRITER` role may be specified. If adding a permission fails, then the entire request fails and no changes are made.',
    required: [],
  })
  .openapi('BatchCreatePermissionsRequest')

const BatchCreatePermissionsResponseSchema = z
  .object({
    permissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({ description: 'Permissions created.' }),
  })
  .openapi({ description: 'The response for creating permissions on a note.', required: [] })
  .openapi('BatchCreatePermissionsResponse')

const BatchDeletePermissionsRequestSchema = z
  .object({
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The names of the permissions to delete. Format: `notes/{note}/permissions/{permission}`',
      }),
  })
  .openapi({
    description:
      "The request to remove one or more permissions from a note. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.",
    required: [],
  })
  .openapi('BatchDeletePermissionsRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ListItemSchema: z.ZodType<ListItemType> = z
  .lazy(() =>
    z
      .object({
        checked: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this item has been checked off or not.' }),
        childListItems: z
          .array(ListItemSchema)
          .exactOptional()
          .openapi({
            description:
              'If set, list of list items nested under this list item. Only one level of nesting is allowed.',
          }),
        text: TextContentSchema.exactOptional().openapi({
          description: 'The text of this item. Length must be less than 1,000 characters.',
        }),
      })
      .openapi({ description: "A single list item in a note's list.", required: [] }),
  )
  .openapi('ListItem')

const ListContentSchema = z
  .object({
    listItems: z
      .array(ListItemSchema)
      .exactOptional()
      .openapi({
        description: 'The items in the list. The number of items must be less than 1,000.',
      }),
  })
  .openapi({ description: 'The list of items for a single list note.', required: [] })
  .openapi('ListContent')

const SectionSchema = z
  .object({
    list: ListContentSchema.exactOptional().openapi({
      description: "Used if this section's content is a list.",
    }),
    text: TextContentSchema.exactOptional().openapi({
      description:
        "Used if this section's content is a block of text. The length of the text content must be less than 20,000 characters.",
    }),
  })
  .openapi({ description: 'The content of the note.', required: [] })
  .openapi('Section')

const NoteSchema = z
  .object({
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The attachments attached to this note.',
        readOnly: true,
      }),
    body: SectionSchema.exactOptional().openapi({ description: 'The body of the note.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. When this note was created.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of this note. See general note on identifiers in KeepService.',
        readOnly: true,
      }),
    permissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of permissions set on the note. Contains at least one entry for the note owner.',
        readOnly: true,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title of the note. Length must be less than 1,000 characters.',
      }),
    trashTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. When this note was trashed. If `trashed`, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is `false`).',
        readOnly: true,
      }),
    trashed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. `true` if this note has been trashed. If trashed, the note is eventually deleted.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. When this note was last modified.', readOnly: true }),
  })
  .openapi({ description: 'A single note.', required: [] })
  .openapi('Note')

const ListNotesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: "Next page's `page_token` field." }),
    notes: z.array(NoteSchema).exactOptional().openapi({ description: 'A page of notes.' }),
  })
  .openapi({ description: 'The response when listing a page of notes.', required: [] })
  .openapi('ListNotesResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/keep':
          'See, edit, create and permanently delete all your Google Keep data',
        'https://www.googleapis.com/auth/keep.readonly': 'View all your Google Keep data',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/keep':
          'See, edit, create and permanently delete all your Google Keep data',
        'https://www.googleapis.com/auth/keep.readonly': 'View all your Google Keep data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NotesRoute = createRoute({
  method: 'get',
  path: '/v1/notes',
  tags: ['notes'],
  description:
    "Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.",
  operationId: 'keep.notes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'The maximum number of results to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The previous page's `next_page_token` field.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNotesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/keep'],
      Oauth2c: ['https://www.googleapis.com/auth/keep'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/keep.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/keep.readonly'],
    },
  ],
})

export const postV1NotesRoute = createRoute({
  method: 'post',
  path: '/v1/notes',
  tags: ['notes'],
  description: 'Creates a new note.',
  operationId: 'keep.notes.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: NoteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NoteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/keep'],
      Oauth2c: ['https://www.googleapis.com/auth/keep'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['notes'],
  description: 'Gets a note.',
  operationId: 'keep.notes.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      mimeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The IANA MIME type format requested. The requested MIME type must be one specified in the attachment.mime_type. Required when downloading attachment media and ignored otherwise.',
            in: 'query',
            name: 'mimeType',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NoteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/keep'],
      Oauth2c: ['https://www.googleapis.com/auth/keep'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/keep.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/keep.readonly'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['notes'],
  description:
    'Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.',
  operationId: 'keep.notes.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the note to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/keep'],
      Oauth2c: ['https://www.googleapis.com/auth/keep'],
    },
  ],
})

export const postV1ParentPermissionsBatchCreateRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/permissions:batchCreate',
  tags: ['notes'],
  description:
    'Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.',
  operationId: 'keep.notes.permissions.batchCreate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The parent resource shared by all Permissions being created. Format: `notes/{note}` If this is set, the parent field in the CreatePermission messages must either be empty or match this field.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchCreatePermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchCreatePermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/keep'],
      Oauth2c: ['https://www.googleapis.com/auth/keep'],
    },
  ],
})

export const postV1ParentPermissionsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/permissions:batchDelete',
  tags: ['notes'],
  description:
    "Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.",
  operationId: 'keep.notes.permissions.batchDelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The parent resource shared by all permissions being deleted. Format: `notes/{note}` If this is set, the parent of all of the permissions specified in the DeletePermissionRequest messages must match this field.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchDeletePermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/keep'],
      Oauth2c: ['https://www.googleapis.com/auth/keep'],
    },
  ],
})
