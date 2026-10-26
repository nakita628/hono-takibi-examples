import { createRoute, z } from '@hono/zod-openapi'

type ContainerType = { [key: string]: unknown } | null

const SpaceSchema: z.ZodType<SpaceType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        key: z.string(),
        alias: z.string().exactOptional(),
        name: z.string(),
        icon: IconSchema.exactOptional(),
        description: z
          .object({
            plain: SpaceDescriptionSchema.exactOptional(),
            view: SpaceDescriptionSchema.exactOptional(),
            _expandable: z
              .object({ view: z.string().exactOptional(), plain: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        homepage: ContentSchema.exactOptional(),
        type: z.string(),
        metadata: z
          .object({
            labels: LabelArraySchema.exactOptional(),
            _expandable: z.object({}).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        operations: z.array(OperationCheckResultSchema).exactOptional(),
        permissions: z.array(SpacePermissionSchema).exactOptional(),
        status: z.string(),
        settings: SpaceSettingsSchema.exactOptional(),
        theme: ThemeSchema.exactOptional(),
        lookAndFeel: LookAndFeelSchema.exactOptional(),
        history: z
          .object({
            createdDate: z.iso.datetime({ offset: true }),
            createdBy: UserSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['createdDate'] }),
        _expandable: z
          .object({
            settings: z.string().exactOptional(),
            metadata: z.string().exactOptional(),
            operations: z.string().exactOptional(),
            lookAndFeel: z.string().exactOptional(),
            permissions: z.string().exactOptional(),
            icon: z.string().exactOptional(),
            description: z.string().exactOptional(),
            theme: z.string().exactOptional(),
            history: z.string().exactOptional(),
            homepage: z.string().exactOptional(),
            identifiers: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
        _links: GenericLinksSchema,
      })
      .nullable()
      .openapi({ required: ['_expandable', '_links', 'key', 'name', 'status', 'type'] }),
  )
  .openapi('Space')

const ContentHistorySchema: z.ZodType<ContentHistoryType> = z
  .lazy(() =>
    z
      .object({
        latest: z.boolean(),
        createdBy: UserSchema.exactOptional(),
        ownedBy: UserSchema.exactOptional(),
        lastOwnedBy: UserSchema.exactOptional(),
        createdDate: z.iso.datetime({ offset: true }).exactOptional(),
        lastUpdated: VersionSchema.exactOptional(),
        previousVersion: VersionSchema.exactOptional(),
        contributors: z
          .object({ publishers: UsersUserKeysSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        nextVersion: VersionSchema.exactOptional(),
        _expandable: z
          .object({
            lastUpdated: z.string().exactOptional(),
            previousVersion: z.string().exactOptional(),
            contributors: z.string().exactOptional(),
            nextVersion: z.string().exactOptional(),
            ownedBy: z.string().exactOptional(),
            lastOwnedBy: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        _links: GenericLinksSchema.exactOptional(),
      })
      .nullable()
      .openapi({ required: ['latest'] }),
  )
  .openapi('ContentHistory')

const VersionSchema: z.ZodType<VersionType> = z
  .lazy(() =>
    z
      .looseObject({
        by: UserSchema.exactOptional(),
        when: z.iso.datetime({ offset: true }).nullable(),
        friendlyWhen: z.string().nullable().exactOptional(),
        message: z.string().nullable().exactOptional(),
        number: z
          .int32()
          .openapi({ description: 'Set this to the current version number incremented by one' }),
        minorEdit: z
          .boolean()
          .openapi({
            description:
              "If `minorEdit` is set to 'true', no notification email or activity\nstream will be generated for the change.",
          }),
        content: ContentSchema.exactOptional(),
        collaborators: UsersUserKeysSchema.exactOptional(),
        _expandable: z
          .object({
            content: z.string().exactOptional(),
            collaborators: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        _links: GenericLinksSchema.exactOptional(),
        contentTypeModified: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'True if content type is modifed in this version (e.g. page to blog)',
          }),
        confRev: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The revision id provided by confluence to be used as a revision in Synchrony',
          }),
        syncRev: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The revision id provided by Synchrony' }),
        syncRevSource: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Source of the synchrony revision' }),
      })
      .nullable()
      .openapi({ required: ['minorEdit', 'number', 'when'] }),
  )
  .openapi('Version')

type OperationCheckResultType = {
  operation:
    | 'administer'
    | 'archive'
    | 'clear_permissions'
    | 'copy'
    | 'create'
    | 'create_space'
    | 'delete'
    | 'export'
    | 'move'
    | 'purge'
    | 'purge_version'
    | 'read'
    | 'restore'
    | 'restrict_content'
    | 'update'
    | 'use'
  targetType: string
}

const OperationCheckResultSchema: z.ZodType<OperationCheckResultType> = z
  .object({
    operation: z
      .enum([
        'administer',
        'archive',
        'clear_permissions',
        'copy',
        'create',
        'create_space',
        'delete',
        'export',
        'move',
        'purge',
        'purge_version',
        'read',
        'restore',
        'restrict_content',
        'update',
        'use',
      ])
      .openapi({ description: 'The operation itself.' }),
    targetType: z
      .string()
      .openapi({
        description:
          'The space or content type that the operation applies to. Could be one of- - application - page - blogpost - comment - attachment - space',
      }),
  })
  .openapi({
    required: ['operation', 'targetType'],
    description: 'An operation and the target entity that it applies to, e.g. create page.',
  })
  .openapi('OperationCheckResult')

const ContentChildrenSchema: z.ZodType<ContentChildrenType> = z
  .lazy(() =>
    z
      .looseObject({
        attachment: ContentArraySchema.exactOptional(),
        comment: ContentArraySchema.exactOptional(),
        page: ContentArraySchema.exactOptional(),
        whiteboard: ContentArraySchema.exactOptional(),
        database: ContentArraySchema.exactOptional(),
        embed: ContentArraySchema.exactOptional(),
        folder: ContentArraySchema.exactOptional(),
        _expandable: z
          .looseObject({
            attachment: z.string().exactOptional(),
            comment: z.string().exactOptional(),
            page: z.string().exactOptional(),
            whiteboard: z.string().exactOptional(),
            database: z.string().exactOptional(),
            embed: z.string().exactOptional(),
            folder: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        _links: GenericLinksSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ContentChildren')

type GenericLinksType = { [key: string]: { [key: string]: unknown } | string }

const GenericLinksSchema: z.ZodType<GenericLinksType> = z
  .record(z.string(), z.xor([z.looseObject({}), z.string()]))
  .openapi('GenericLinks')

type ContentChildTypeType = {
  attachment?: { value: boolean; _links: z.infer<typeof GenericLinksSchema> }
  comment?: { value: boolean; _links: z.infer<typeof GenericLinksSchema> }
  page?: { value: boolean; _links: z.infer<typeof GenericLinksSchema> }
  _expandable?: {
    all?: string
    attachment?: string
    comment?: string
    page?: string
    whiteboard?: string
    database?: string
    embed?: string
    folder?: string
  }
}

const ContentChildTypeSchema: z.ZodType<ContentChildTypeType> = z
  .looseObject({
    attachment: z
      .object({ value: z.boolean(), _links: GenericLinksSchema })
      .exactOptional()
      .openapi({ required: ['_links', 'value'] }),
    comment: z
      .object({ value: z.boolean(), _links: GenericLinksSchema })
      .exactOptional()
      .openapi({ required: ['_links', 'value'] }),
    page: z
      .object({ value: z.boolean(), _links: GenericLinksSchema })
      .exactOptional()
      .openapi({ required: ['_links', 'value'] }),
    _expandable: z
      .object({
        all: z.string().exactOptional(),
        attachment: z.string().exactOptional(),
        comment: z.string().exactOptional(),
        page: z.string().exactOptional(),
        whiteboard: z.string().exactOptional(),
        database: z.string().exactOptional(),
        embed: z.string().exactOptional(),
        folder: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      "Shows whether a piece of content has attachments, comments, or child pages/whiteboards.\nNote, this doesn't actually contain the child objects.",
    required: [],
  })
  .openapi('ContentChildType')

const ContainerSchema: z.ZodType<ContainerType> = z
  .looseObject({})
  .nullable()
  .openapi({
    description:
      'Container for content. This can be either a space (containing a page or blogpost)\nor a page/blog post (containing an attachment or comment)',
  })
  .openapi('Container')

const EmbeddableSchema = z.looseObject({}).openapi('Embeddable')

const EmbeddedContentSchema = z
  .looseObject({
    entityId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    entityType: z.string().exactOptional(),
    entity: EmbeddableSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmbeddedContent')

const SuperBatchWebResourcesSchema = z
  .object({
    uris: z
      .object({
        all: z.xor([z.array(z.string()), z.string()]).exactOptional(),
        css: z.xor([z.array(z.string()), z.string()]).exactOptional(),
        js: z.xor([z.array(z.string()), z.string()]).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    tags: z
      .object({
        all: z.string().exactOptional(),
        css: z.string().exactOptional(),
        data: z.string().exactOptional(),
        js: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    metatags: z.string().exactOptional(),
    _expandable: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SuperBatchWebResources')

const WebResourceDependenciesSchema = z
  .object({
    _expandable: z
      .looseObject({ uris: z.xor([z.string(), z.looseObject({})]).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    keys: z.array(z.string()).exactOptional(),
    contexts: z.array(z.string()).exactOptional(),
    uris: z
      .object({
        all: z.xor([z.array(z.string()), z.string()]).exactOptional(),
        css: z.xor([z.array(z.string()), z.string()]).exactOptional(),
        js: z.xor([z.array(z.string()), z.string()]).exactOptional(),
        _expandable: z
          .looseObject({
            css: z.xor([z.array(z.string()), z.string()]).exactOptional(),
            js: z.xor([z.array(z.string()), z.string()]).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    tags: z
      .object({
        all: z.string().exactOptional(),
        css: z.string().exactOptional(),
        data: z.string().exactOptional(),
        js: z.string().exactOptional(),
        _expandable: z.looseObject({}).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    superbatch: SuperBatchWebResourcesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebResourceDependencies')

type ContentBodyType = {
  value: string
  representation:
    | 'view'
    | 'export_view'
    | 'styled_view'
    | 'storage'
    | 'editor'
    | 'editor2'
    | 'anonymous_export_view'
    | 'wiki'
    | 'atlas_doc_format'
    | 'raw'
  embeddedContent?: z.infer<typeof EmbeddedContentSchema>[]
  webresource?: z.infer<typeof WebResourceDependenciesSchema>
  mediaToken?: {
    collectionIds?: string[]
    contentId?: string
    expiryDateTime?: string
    fileIds?: string[]
    token?: string
  }
  _expandable?: {
    content?: string
    embeddedContent?: string
    webresource?: string
    mediaToken?: string
  }
  _links?: z.infer<typeof GenericLinksSchema>
}

const ContentBodySchema: z.ZodType<ContentBodyType> = z
  .object({
    value: z.string(),
    representation: z.enum([
      'view',
      'export_view',
      'styled_view',
      'storage',
      'editor',
      'editor2',
      'anonymous_export_view',
      'wiki',
      'atlas_doc_format',
      'raw',
    ]),
    embeddedContent: z.array(EmbeddedContentSchema).exactOptional(),
    webresource: WebResourceDependenciesSchema.exactOptional(),
    mediaToken: z
      .object({
        collectionIds: z.array(z.string()).exactOptional(),
        contentId: z.string().exactOptional(),
        expiryDateTime: z.string().exactOptional(),
        fileIds: z.array(z.string()).exactOptional(),
        token: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _expandable: z
      .object({
        content: z.string().exactOptional(),
        embeddedContent: z.string().exactOptional(),
        webresource: z.string().exactOptional(),
        mediaToken: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['representation', 'value'] })
  .openapi('ContentBody')

const ContentRestrictionSchema: z.ZodType<ContentRestrictionType> = z
  .lazy(() =>
    z
      .object({
        operation: z.enum([
          'administer',
          'copy',
          'create',
          'delete',
          'export',
          'move',
          'purge',
          'purge_version',
          'read',
          'restore',
          'update',
          'use',
        ]),
        restrictions: z
          .object({
            user: UserArraySchema.exactOptional(),
            group: GroupArraySchema.exactOptional(),
            _expandable: z
              .object({ user: z.string().exactOptional(), group: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        content: ContentSchema.exactOptional(),
        _expandable: z
          .object({ restrictions: z.string().exactOptional(), content: z.string().exactOptional() })
          .openapi({ required: [] }),
        _links: GenericLinksSchema,
      })
      .openapi({ required: ['_expandable', '_links', 'operation'] }),
  )
  .openapi('ContentRestriction')

const ContentMetadataSchema: z.ZodType<ContentMetadataType> = z
  .lazy(() =>
    z
      .looseObject({
        currentuser: z
          .object({
            favourited: z
              .object({
                isFavourite: z.boolean().exactOptional(),
                favouritedDate: z.iso.datetime({ offset: true }).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            lastmodified: z
              .object({
                version: VersionSchema.exactOptional(),
                friendlyLastModified: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            lastcontributed: z
              .object({
                status: z.string().exactOptional(),
                when: z.iso.datetime({ offset: true }).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            viewed: z
              .object({
                lastSeen: z.iso.datetime({ offset: true }).exactOptional(),
                friendlyLastSeen: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            scheduled: z.object({}).exactOptional(),
            _expandable: z
              .object({
                favourited: z.string().exactOptional(),
                lastmodified: z.string().exactOptional(),
                lastcontributed: z.string().exactOptional(),
                viewed: z.string().exactOptional(),
                scheduled: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        properties: GenericLinksSchema.exactOptional(),
        frontend: z.looseObject({}).exactOptional(),
        labels: z.xor([LabelArraySchema, z.array(LabelSchema)]).exactOptional(),
      })
      .openapi({
        description: 'Metadata object for page, blogpost, comment content',
        required: [],
      }),
  )
  .openapi('ContentMetadata')

type ContentType = {
  id?: string
  type: string
  status: string
  title?: string
  space?: z.infer<typeof SpaceSchema>
  history?: z.infer<typeof ContentHistorySchema>
  version?: z.infer<typeof VersionSchema>
  ancestors?: ContentType[] | null
  operations?: z.infer<typeof OperationCheckResultSchema>[]
  children?: z.infer<typeof ContentChildrenSchema>
  childTypes?: z.infer<typeof ContentChildTypeSchema>
  descendants?: z.infer<typeof ContentChildrenSchema>
  container?: z.infer<typeof ContainerSchema>
  body?: {
    view?: z.infer<typeof ContentBodySchema>
    export_view?: z.infer<typeof ContentBodySchema>
    styled_view?: z.infer<typeof ContentBodySchema>
    storage?: z.infer<typeof ContentBodySchema>
    wiki?: z.infer<typeof ContentBodySchema>
    editor?: z.infer<typeof ContentBodySchema>
    editor2?: z.infer<typeof ContentBodySchema>
    anonymous_export_view?: z.infer<typeof ContentBodySchema>
    atlas_doc_format?: z.infer<typeof ContentBodySchema>
    dynamic?: z.infer<typeof ContentBodySchema>
    raw?: z.infer<typeof ContentBodySchema>
    _expandable?: {
      editor?: string
      view?: string
      export_view?: string
      styled_view?: string
      storage?: string
      editor2?: string
      anonymous_export_view?: string
      atlas_doc_format?: string
      wiki?: string
      dynamic?: string
      raw?: string
    }
  }
  restrictions?: {
    read?: z.infer<typeof ContentRestrictionSchema>
    update?: z.infer<typeof ContentRestrictionSchema>
    _expandable?: { read?: string; update?: string }
    _links?: z.infer<typeof GenericLinksSchema>
  }
  metadata?: z.infer<typeof ContentMetadataSchema>
  macroRenderedOutput?: { [key: string]: { [key: string]: unknown } }
  extensions?: { [key: string]: unknown }
  _expandable?: {
    childTypes?: string
    container?: string
    metadata?: string
    operations?: string
    children?: string
    restrictions?: string
    history?: string
    ancestors?: string
    body?: string
    version?: string
    descendants?: string
    space?: string
    extensions?: string
    schedulePublishDate?: string
    schedulePublishInfo?: string
    macroRenderedOutput?: string
  }
  _links?: z.infer<typeof GenericLinksSchema>
} | null

const ContentSchema: z.ZodType<ContentType> = z
  .lazy(() =>
    z
      .looseObject({
        id: z.string().exactOptional(),
        type: z
          .string()
          .openapi({ description: 'Can be "page", "blogpost", "attachment" or "content"' }),
        status: z.string(),
        title: z.string().exactOptional(),
        space: SpaceSchema.exactOptional(),
        history: ContentHistorySchema.exactOptional(),
        version: VersionSchema.exactOptional(),
        ancestors: z.array(ContentSchema).nullable().exactOptional(),
        operations: z.array(OperationCheckResultSchema).exactOptional(),
        children: ContentChildrenSchema.exactOptional(),
        childTypes: ContentChildTypeSchema.exactOptional(),
        descendants: ContentChildrenSchema.exactOptional(),
        container: ContainerSchema.exactOptional(),
        body: z
          .object({
            view: ContentBodySchema.exactOptional(),
            export_view: ContentBodySchema.exactOptional(),
            styled_view: ContentBodySchema.exactOptional(),
            storage: ContentBodySchema.exactOptional(),
            wiki: ContentBodySchema.exactOptional(),
            editor: ContentBodySchema.exactOptional(),
            editor2: ContentBodySchema.exactOptional(),
            anonymous_export_view: ContentBodySchema.exactOptional(),
            atlas_doc_format: ContentBodySchema.exactOptional(),
            dynamic: ContentBodySchema.exactOptional(),
            raw: ContentBodySchema.exactOptional(),
            _expandable: z
              .object({
                editor: z.string().exactOptional(),
                view: z.string().exactOptional(),
                export_view: z.string().exactOptional(),
                styled_view: z.string().exactOptional(),
                storage: z.string().exactOptional(),
                editor2: z.string().exactOptional(),
                anonymous_export_view: z.string().exactOptional(),
                atlas_doc_format: z.string().exactOptional(),
                wiki: z.string().exactOptional(),
                dynamic: z.string().exactOptional(),
                raw: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        restrictions: z
          .object({
            read: ContentRestrictionSchema.exactOptional(),
            update: ContentRestrictionSchema.exactOptional(),
            _expandable: z
              .object({ read: z.string().exactOptional(), update: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            _links: GenericLinksSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        metadata: ContentMetadataSchema.exactOptional(),
        macroRenderedOutput: z.record(z.string(), z.object({})).exactOptional(),
        extensions: z.object({}).exactOptional(),
        _expandable: z
          .object({
            childTypes: z.string().exactOptional(),
            container: z.string().exactOptional(),
            metadata: z.string().exactOptional(),
            operations: z.string().exactOptional(),
            children: z.string().exactOptional(),
            restrictions: z.string().exactOptional(),
            history: z.string().exactOptional(),
            ancestors: z.string().exactOptional(),
            body: z.string().exactOptional(),
            version: z.string().exactOptional(),
            descendants: z.string().exactOptional(),
            space: z.string().exactOptional(),
            extensions: z.string().exactOptional(),
            schedulePublishDate: z.string().exactOptional(),
            schedulePublishInfo: z.string().exactOptional(),
            macroRenderedOutput: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        _links: GenericLinksSchema.exactOptional(),
      })
      .nullable()
      .openapi({ required: ['status', 'type'], description: 'Base object for all content types.' }),
  )
  .openapi('Content')

type ContentArrayType = {
  results: z.infer<typeof ContentSchema>[]
  start?: number
  limit?: number
  size: number
  _links: z.infer<typeof GenericLinksSchema>
}

const ContentArraySchema: z.ZodType<ContentArrayType> = z
  .lazy(() =>
    z
      .object({
        results: z.array(ContentSchema),
        start: z.int32().exactOptional(),
        limit: z.int32().exactOptional(),
        size: z.int32(),
        _links: GenericLinksSchema,
      })
      .openapi({ required: ['_links', 'results', 'size'] }),
  )
  .openapi('ContentArray')

type ContentChildrenType = {
  attachment?: z.infer<typeof ContentArraySchema>
  comment?: z.infer<typeof ContentArraySchema>
  page?: z.infer<typeof ContentArraySchema>
  whiteboard?: z.infer<typeof ContentArraySchema>
  database?: z.infer<typeof ContentArraySchema>
  embed?: z.infer<typeof ContentArraySchema>
  folder?: z.infer<typeof ContentArraySchema>
  _expandable?: {
    attachment?: string
    comment?: string
    page?: string
    whiteboard?: string
    database?: string
    embed?: string
    folder?: string
  }
  _links?: z.infer<typeof GenericLinksSchema>
}

const UserSchema: z.ZodType<UserType> = z
  .lazy(() =>
    z
      .looseObject({
        type: z.enum(['known', 'unknown', 'anonymous', 'user']),
        username: GenericUserNameSchema.exactOptional(),
        userKey: GenericUserKeySchema.exactOptional(),
        accountId: GenericAccountIdSchema.exactOptional(),
        accountType: z
          .enum(['atlassian', 'app', ''])
          .exactOptional()
          .openapi({
            description:
              'The account type of the user, may return empty string if unavailable. App is if the user is a bot user created on behalf of an Atlassian app.',
          }),
        email: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "The email address of the user. Depending on the user's privacy setting, this may return an empty string.",
          }),
        publicName: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The public name or nickname of the user. Will always contain a value.',
          }),
        profilePicture: IconSchema.exactOptional(),
        displayName: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "The displays name of the user. Depending on the user's privacy setting, this may be the same as publicName.",
          }),
        timeZone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "This displays user time zone. Depending on the user's privacy setting, this may return null.",
          }),
        externalCollaborator: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'This is deprecated. Use `isGuest` instead to find out whether the user is a guest user.',
          }),
        isExternalCollaborator: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'This is deprecated. Use `isGuest` instead to find out whether the user is a guest user.',
          }),
        isGuest: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the user is a guest user' }),
        operations: z.array(OperationCheckResultSchema).nullable().exactOptional(),
        details: UserDetailsSchema.exactOptional(),
        personalSpace: SpaceSchema.exactOptional(),
        _expandable: z
          .object({
            operations: z.string().exactOptional(),
            details: z.string().exactOptional(),
            personalSpace: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        _links: GenericLinksSchema.exactOptional(),
      })
      .nullable()
      .openapi({ required: ['type'] }),
  )
  .openapi('User')

const UsersUserKeysSchema: z.ZodType<UsersUserKeysType> = z
  .lazy(() =>
    z
      .looseObject({
        users: z.array(UserSchema).exactOptional(),
        userKeys: z.array(z.string()).exactOptional(),
        _links: GenericLinksSchema.exactOptional(),
      })
      .nullable()
      .openapi({ required: ['userAccountIds'] }),
  )
  .openapi('UsersUserKeys')

type ContentHistoryType = {
  latest: boolean
  createdBy?: z.infer<typeof UserSchema>
  ownedBy?: z.infer<typeof UserSchema>
  lastOwnedBy?: z.infer<typeof UserSchema>
  createdDate?: string
  lastUpdated?: z.infer<typeof VersionSchema>
  previousVersion?: z.infer<typeof VersionSchema>
  contributors?: { publishers?: z.infer<typeof UsersUserKeysSchema> }
  nextVersion?: z.infer<typeof VersionSchema>
  _expandable?: {
    lastUpdated?: string
    previousVersion?: string
    contributors?: string
    nextVersion?: string
    ownedBy?: string
    lastOwnedBy?: string
  }
  _links?: z.infer<typeof GenericLinksSchema>
} | null

type LabelType = { prefix: string; name: string; id: string; label: string }

const LabelSchema: z.ZodType<LabelType> = z
  .object({ prefix: z.string(), name: z.string(), id: z.string(), label: z.string() })
  .openapi({ required: ['id', 'label', 'name', 'prefix'] })
  .openapi('Label')

type LabelArrayType = {
  results: z.infer<typeof LabelSchema>[]
  start?: number
  limit?: number
  size: number
  _links?: z.infer<typeof GenericLinksSchema>
}

const LabelArraySchema: z.ZodType<LabelArrayType> = z
  .object({
    results: z.array(LabelSchema),
    start: z.int32().exactOptional(),
    limit: z.int32().exactOptional(),
    size: z.int32(),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['results', 'size'] })
  .openapi('LabelArray')

type ContentMetadataType = {
  currentuser?: {
    favourited?: { isFavourite?: boolean; favouritedDate?: string }
    lastmodified?: { version?: z.infer<typeof VersionSchema>; friendlyLastModified?: string }
    lastcontributed?: { status?: string; when?: string }
    viewed?: { lastSeen?: string; friendlyLastSeen?: string }
    scheduled?: { [key: string]: unknown }
    _expandable?: {
      favourited?: string
      lastmodified?: string
      lastcontributed?: string
      viewed?: string
      scheduled?: string
    }
  }
  properties?: z.infer<typeof GenericLinksSchema>
  frontend?: { [key: string]: unknown }
  labels?: z.infer<typeof LabelArraySchema> | z.infer<typeof LabelSchema>[]
}

const UserArraySchema: z.ZodType<UserArrayType> = z
  .lazy(() =>
    z
      .object({
        results: z.array(UserSchema),
        start: z.int32().exactOptional(),
        limit: z.int32().exactOptional(),
        size: z.int32().exactOptional(),
        totalSize: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .default(0n)
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            default: 0,
            description:
              'This property will return total count of the objects before pagination is applied.\nThis value is returned if `shouldReturnTotalSize` is set to `true`.',
          }),
        _links: GenericLinksSchema.exactOptional(),
      })
      .openapi({ required: ['results'] }),
  )
  .openapi('UserArray')

type GroupType = {
  type: 'group'
  name: string
  id: string
  usageType?: 'USERBASE_GROUP' | 'TEAM_COLLABORATION'
  managedBy?: 'ADMINS' | 'EXTERNAL' | 'TEAM_MEMBERS' | 'OPEN'
  _links?: z.infer<typeof GenericLinksSchema>
}

const GroupSchema: z.ZodType<GroupType> = z
  .object({
    type: z.literal('group').default('group'),
    name: z.string(),
    id: z.string(),
    usageType: z
      .enum(['USERBASE_GROUP', 'TEAM_COLLABORATION'])
      .default('USERBASE_GROUP')
      .exactOptional()
      .openapi({
        description:
          'This property represents how this collection of users is used:\n  - `USERBASE_GROUP`: This value indicates that the collection of users is used as a group.\n  - `TEAM_COLLABORATION`: This value indicates that the collection of users is used as a team.',
      }),
    managedBy: z
      .enum(['ADMINS', 'EXTERNAL', 'TEAM_MEMBERS', 'OPEN'])
      .default('ADMINS')
      .exactOptional()
      .openapi({
        description:
          'This property represents how this collection of users is managed:\n  - `ADMINS`: This value indicates that the collection of users is managed by org, site or product admins.\n  - `EXTERNAL`: This value indicates that the collection of users is managed externally (through SCIM, HRIS, etc.).\n  - `TEAM_MEMBERS`: This value indicates that the collection of users is managed by its members.\n  - `OPEN`: This value indicates that the collection of users is not actively managed by any users.',
      }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'type', 'id'] })
  .openapi('Group')

type GroupArrayType = {
  results: z.infer<typeof GroupSchema>[]
  start: number
  limit: number
  size: number
}

const GroupArraySchema: z.ZodType<GroupArrayType> = z
  .object({ results: z.array(GroupSchema), start: z.int32(), limit: z.int32(), size: z.int32() })
  .openapi({ required: ['limit', 'results', 'size', 'start'] })
  .openapi('GroupArray')

type ContentRestrictionType = {
  operation:
    | 'administer'
    | 'copy'
    | 'create'
    | 'delete'
    | 'export'
    | 'move'
    | 'purge'
    | 'purge_version'
    | 'read'
    | 'restore'
    | 'update'
    | 'use'
  restrictions?: {
    user?: z.infer<typeof UserArraySchema>
    group?: z.infer<typeof GroupArraySchema>
    _expandable?: { user?: string; group?: string }
  }
  content?: z.infer<typeof ContentSchema>
  _expandable: { restrictions?: string; content?: string }
  _links: z.infer<typeof GenericLinksSchema>
}

type GenericAccountIdType = string | null

type GenericUserNameType = string | null

type GenericUserKeyType = string | null

type IconType = { path: string; width: number; height: number; isDefault: boolean } | null

const MenusLookAndFeelSchema = z
  .object({
    hoverOrFocus: z
      .object({ backgroundColor: z.string() })
      .openapi({ required: ['backgroundColor'] }),
    color: z.string(),
  })
  .openapi({ required: ['color', 'hoverOrFocus'] })
  .openapi('MenusLookAndFeel')

const ButtonLookAndFeelSchema = z
  .object({ backgroundColor: z.string(), color: z.string() })
  .nullable()
  .openapi({ required: ['backgroundColor', 'color'] })
  .openapi('ButtonLookAndFeel')

const NavigationLookAndFeelSchema = z
  .object({
    color: z.string(),
    highlightColor: z.string().nullable().exactOptional(),
    hoverOrFocus: z
      .object({ backgroundColor: z.string(), color: z.string() })
      .openapi({ required: ['backgroundColor', 'color'] }),
  })
  .nullable()
  .openapi({ required: ['color', 'hoverOrFocus'] })
  .openapi('NavigationLookAndFeel')

const SearchFieldLookAndFeelSchema = z
  .object({ backgroundColor: z.string(), color: z.string() })
  .nullable()
  .openapi({ required: ['backgroundColor', 'color'] })
  .openapi('SearchFieldLookAndFeel')

const HeaderLookAndFeelSchema = z
  .object({
    backgroundColor: z.string(),
    button: ButtonLookAndFeelSchema,
    primaryNavigation: NavigationLookAndFeelSchema,
    secondaryNavigation: NavigationLookAndFeelSchema,
    search: SearchFieldLookAndFeelSchema,
  })
  .openapi({
    required: ['backgroundColor', 'button', 'primaryNavigation', 'search', 'secondaryNavigation'],
  })
  .openapi('HeaderLookAndFeel')

const TopNavigationLookAndFeelSchema = z
  .object({
    color: z.string().nullable().exactOptional(),
    highlightColor: z.string(),
    hoverOrFocus: z
      .object({ backgroundColor: z.string().exactOptional(), color: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['highlightColor'] })
  .openapi('TopNavigationLookAndFeel')

const HorizontalHeaderLookAndFeelSchema = z
  .object({
    backgroundColor: z.string(),
    button: ButtonLookAndFeelSchema.exactOptional(),
    primaryNavigation: TopNavigationLookAndFeelSchema,
    secondaryNavigation: NavigationLookAndFeelSchema.exactOptional(),
    search: SearchFieldLookAndFeelSchema.exactOptional(),
  })
  .openapi({ required: ['backgroundColor', 'primaryNavigation'] })
  .openapi('HorizontalHeaderLookAndFeel')

const ScreenLookAndFeelSchema = z
  .object({
    background: z.string(),
    backgroundAttachment: z.string().nullable().exactOptional(),
    backgroundBlendMode: z.string().nullable().exactOptional(),
    backgroundClip: z.string().nullable().exactOptional(),
    backgroundColor: z.string().nullable().exactOptional(),
    backgroundImage: z.string().nullable().exactOptional(),
    backgroundOrigin: z.string().nullable().exactOptional(),
    backgroundPosition: z.string().nullable().exactOptional(),
    backgroundRepeat: z.string().nullable().exactOptional(),
    backgroundSize: z.string().nullable().exactOptional(),
    layer: z
      .object({ width: z.string().exactOptional(), height: z.string().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    gutterTop: z.string().nullable().exactOptional(),
    gutterRight: z.string().nullable().exactOptional(),
    gutterBottom: z.string().nullable().exactOptional(),
    gutterLeft: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['background'] })
  .openapi('ScreenLookAndFeel')

const ContainerLookAndFeelSchema = z
  .object({
    background: z.string(),
    backgroundAttachment: z.string().nullable().exactOptional(),
    backgroundBlendMode: z.string().nullable().exactOptional(),
    backgroundClip: z.string().nullable().exactOptional(),
    backgroundColor: z.string().nullable(),
    backgroundImage: z.string().nullable(),
    backgroundOrigin: z.string().nullable().exactOptional(),
    backgroundPosition: z.string().nullable().exactOptional(),
    backgroundRepeat: z.string().nullable().exactOptional(),
    backgroundSize: z.string().nullable(),
    padding: z.string(),
    borderRadius: z.string(),
  })
  .nullable()
  .openapi({
    required: [
      'background',
      'backgroundColor',
      'backgroundImage',
      'backgroundSize',
      'borderRadius',
      'padding',
    ],
  })
  .openapi('ContainerLookAndFeel')

const ContentLookAndFeelSchema = z
  .object({
    screen: ScreenLookAndFeelSchema.exactOptional(),
    container: ContainerLookAndFeelSchema.exactOptional(),
    header: ContainerLookAndFeelSchema.exactOptional(),
    body: ContainerLookAndFeelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContentLookAndFeel')

type LookAndFeelType = {
  headings: { color: string }
  links: { color: string }
  menus: z.infer<typeof MenusLookAndFeelSchema>
  header: z.infer<typeof HeaderLookAndFeelSchema>
  horizontalHeader?: z.infer<typeof HorizontalHeaderLookAndFeelSchema>
  content: z.infer<typeof ContentLookAndFeelSchema>
  bordersAndDividers: { color: string }
  spaceReference?: { [key: string]: unknown } | null
}

const IconSchema: z.ZodType<IconType> = z
  .object({ path: z.string(), width: z.int32(), height: z.int32(), isDefault: z.boolean() })
  .nullable()
  .openapi({
    required: ['height', 'isDefault', 'path', 'width'],
    description:
      "This object represents an icon. If used as a profilePicture, this may be returned as null, depending on the user's privacy setting.",
  })
  .openapi('Icon')

type SpaceDescriptionType = {
  value: string
  representation: 'plain' | 'view'
  embeddedContent: { [key: string]: unknown }[]
}

const SpaceDescriptionSchema: z.ZodType<SpaceDescriptionType> = z
  .looseObject({
    value: z.string(),
    representation: z.enum(['plain', 'view']),
    embeddedContent: z.array(z.object({})),
  })
  .openapi({ required: ['embeddedContent', 'representation', 'value'] })
  .openapi('SpaceDescription')

const SpacePermissionSchema: z.ZodType<SpacePermissionType> = z
  .lazy(() =>
    z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        subjects: z
          .object({
            user: z
              .object({
                results: z.array(UserSchema),
                size: z.int32(),
                start: z.int32().exactOptional(),
                limit: z.int32().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: ['results', 'size'] }),
            group: z
              .object({
                results: z.array(GroupSchema),
                size: z.int32(),
                start: z.int32().exactOptional(),
                limit: z.int32().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: ['results', 'size'] }),
            _expandable: z
              .object({ user: z.string().exactOptional(), group: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({
            description: 'The users and/or groups that the permission applies to.',
            required: [],
          }),
        operation: OperationCheckResultSchema,
        anonymousAccess: z
          .boolean()
          .default(false)
          .openapi({ description: 'Grant anonymous users permission to use the operation.' }),
        unlicensedAccess: z
          .boolean()
          .default(false)
          .openapi({
            description:
              "Grants access to unlicensed users from JIRA Service Desk when used\nwith the 'read space' operation.",
          }),
      })
      .openapi({
        required: ['anonymousAccess', 'operation', 'unlicensedAccess'],
        description:
          "This object represents a permission for given space. Permissions consist of\nat least one operation object with an accompanying subjects object.\n\nThe following combinations of `operation` and `targetType` values are\nvalid for the `operation` object:\n\n  - 'create': 'page', 'blogpost', 'comment', 'attachment'\n  - 'read': 'space'\n  - 'delete': 'page', 'blogpost', 'comment', 'attachment'\n  - 'export': 'space'\n  - 'administer': 'space'",
      }),
  )
  .openapi('SpacePermission')

type SpaceSettingsType = {
  routeOverrideEnabled: boolean
  editor?: { page: string; blogpost: string; default: string }
  contentMode?: 'standard' | 'compact' | null
  spaceKey?: string
  _links: z.infer<typeof GenericLinksSchema>
} | null

const SpaceSettingsSchema: z.ZodType<SpaceSettingsType> = z
  .object({
    routeOverrideEnabled: z
      .boolean()
      .openapi({
        description:
          'Defines whether an override for the space home should be used. This is\nused in conjunction with a space theme provided by an app. For\nexample, if this property is set to true, a theme can display a page\nother than the space homepage when users visit the root URL for a\nspace. This property allows apps to provide content-only theming\nwithout overriding the space home.',
      }),
    editor: z
      .object({ page: z.string(), blogpost: z.string(), default: z.string() })
      .exactOptional()
      .openapi({ required: ['page', 'blogpost', 'default'] }),
    contentMode: z
      .enum(['standard', 'compact'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The content rendering mode for the space. Controls spacing and typography\nin the editor and renderer. Valid values are "standard" and "compact".\nWhen set to "compact", content is rendered more densely with smaller\nspacing and typography.',
      }),
    spaceKey: z.string().exactOptional(),
    _links: GenericLinksSchema,
  })
  .nullable()
  .openapi({ required: ['_links', 'routeOverrideEnabled'] })
  .openapi('SpaceSettings')

type ThemeType = {
  themeKey: string
  name?: string
  description?: string
  icon?: z.infer<typeof IconSchema>
  _links?: z.infer<typeof GenericLinksSchema>
}

const ThemeSchema: z.ZodType<ThemeType> = z
  .object({
    themeKey: z.string(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    icon: IconSchema.exactOptional(),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['themeKey'] })
  .openapi('Theme')

const LookAndFeelSchema: z.ZodType<LookAndFeelType> = z
  .lazy(() =>
    z
      .object({
        headings: z.object({ color: z.string() }).openapi({ required: ['color'] }),
        links: z.object({ color: z.string() }).openapi({ required: ['color'] }),
        menus: MenusLookAndFeelSchema,
        header: HeaderLookAndFeelSchema,
        horizontalHeader: HorizontalHeaderLookAndFeelSchema.exactOptional(),
        content: ContentLookAndFeelSchema,
        bordersAndDividers: z.object({ color: z.string() }).openapi({ required: ['color'] }),
        spaceReference: z.object({}).nullable().exactOptional(),
      })
      .openapi({
        required: ['bordersAndDividers', 'content', 'header', 'headings', 'links', 'menus'],
      }),
  )
  .openapi('LookAndFeel')

type SpaceType = {
  id?: bigint
  key: string
  alias?: string
  name: string
  icon?: z.infer<typeof IconSchema>
  description?: {
    plain?: z.infer<typeof SpaceDescriptionSchema>
    view?: z.infer<typeof SpaceDescriptionSchema>
    _expandable?: { view?: string; plain?: string }
  }
  homepage?: z.infer<typeof ContentSchema>
  type: string
  metadata?: { labels?: z.infer<typeof LabelArraySchema>; _expandable?: { [key: string]: unknown } }
  operations?: z.infer<typeof OperationCheckResultSchema>[]
  permissions?: z.infer<typeof SpacePermissionSchema>[]
  status: string
  settings?: z.infer<typeof SpaceSettingsSchema>
  theme?: z.infer<typeof ThemeSchema>
  lookAndFeel?: z.infer<typeof LookAndFeelSchema>
  history?: { createdDate: string; createdBy?: z.infer<typeof UserSchema> }
  _expandable: {
    settings?: string
    metadata?: string
    operations?: string
    lookAndFeel?: string
    permissions?: string
    icon?: string
    description?: string
    theme?: string
    history?: string
    homepage?: string
    identifiers?: string
  }
  _links: z.infer<typeof GenericLinksSchema>
} | null

type SpacePermissionType = {
  id?: bigint
  subjects?: {
    user?: { results: z.infer<typeof UserSchema>[]; size: number; start?: number; limit?: number }
    group?: { results: z.infer<typeof GroupSchema>[]; size: number; start?: number; limit?: number }
    _expandable?: { user?: string; group?: string }
  }
  operation: z.infer<typeof OperationCheckResultSchema>
  anonymousAccess: boolean
  unlicensedAccess: boolean
}

const GenericUserNameSchema: z.ZodType<GenericUserNameType> = z
  .string()
  .nullable()
  .openapi({
    description:
      'This property is no longer available and will be removed from the documentation soon.\nUse `accountId` instead.\nSee the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.',
  })
  .openapi('GenericUserName')

const GenericUserKeySchema: z.ZodType<GenericUserKeyType> = z
  .string()
  .nullable()
  .openapi({
    description:
      'This property is no longer available and will be removed from the documentation soon.\nUse `accountId` instead.\nSee the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.',
  })
  .openapi('GenericUserKey')

const GenericAccountIdSchema: z.ZodType<GenericAccountIdType> = z
  .string()
  .nullable()
  .openapi({
    description:
      'The account ID of the user, which uniquely identifies the user across all Atlassian products.\nFor example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.',
  })
  .openapi('GenericAccountId')

type UserDetailsType = {
  business?: { position?: string; department?: string; location?: string }
  personal?: { phone?: string; im?: string; website?: string; email?: string }
}

const UserDetailsSchema: z.ZodType<UserDetailsType> = z
  .object({
    business: z
      .object({
        position: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. There is no replacement. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
        department: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. There is no replacement. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
        location: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. There is no replacement. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    personal: z
      .object({
        phone: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. There is no replacement. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
        im: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. There is no replacement. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
        website: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. There is no replacement. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
        email: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This property has been deprecated due to privacy changes. Use the `User.email` property instead. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UserDetails')

type UserType = {
  type: 'known' | 'unknown' | 'anonymous' | 'user'
  username?: z.infer<typeof GenericUserNameSchema>
  userKey?: z.infer<typeof GenericUserKeySchema>
  accountId?: z.infer<typeof GenericAccountIdSchema>
  accountType?: 'atlassian' | 'app' | ''
  email?: string | null
  publicName?: string
  profilePicture?: z.infer<typeof IconSchema>
  displayName?: string | null
  timeZone?: string | null
  externalCollaborator?: boolean
  isExternalCollaborator?: boolean
  isGuest?: boolean
  operations?: z.infer<typeof OperationCheckResultSchema>[] | null
  details?: z.infer<typeof UserDetailsSchema>
  personalSpace?: z.infer<typeof SpaceSchema>
  _expandable?: { operations?: string; details?: string; personalSpace?: string }
  _links?: z.infer<typeof GenericLinksSchema>
} | null

type UserArrayType = {
  results: z.infer<typeof UserSchema>[]
  start?: number
  limit?: number
  size?: number
  totalSize?: bigint
  _links?: z.infer<typeof GenericLinksSchema>
}

type UsersUserKeysType = {
  users?: z.infer<typeof UserSchema>[]
  userKeys?: string[]
  _links?: z.infer<typeof GenericLinksSchema>
} | null

type VersionType = {
  by?: z.infer<typeof UserSchema>
  when: string | null
  friendlyWhen?: string | null
  message?: string | null
  number: number
  minorEdit: boolean
  content?: z.infer<typeof ContentSchema>
  collaborators?: z.infer<typeof UsersUserKeysSchema>
  _expandable?: { content?: string; collaborators?: string }
  _links?: z.infer<typeof GenericLinksSchema>
  contentTypeModified?: boolean
  confRev?: string | null
  syncRev?: string | null
  syncRevSource?: string | null
} | null

const AccountIdSchema = z
  .object({ accountId: z.string() })
  .openapi({ required: ['accountId'] })
  .openapi('AccountId')

const AccountIdEmailRecordSchema = z
  .object({ accountId: z.string(), email: z.string() })
  .openapi({ required: ['accountId', 'email'] })
  .openapi('AccountIdEmailRecord')

const AccountIdEmailRecordArraySchema = z
  .array(AccountIdEmailRecordSchema)
  .openapi('AccountIdEmailRecordArray')

const AffectedObjectSchema = z
  .object({ name: z.string(), objectType: z.string() })
  .openapi({ required: ['name', 'objectType'] })
  .openapi('AffectedObject')

const AsyncIdSchema = z
  .object({ asyncId: z.string() })
  .openapi({ required: ['asyncId'] })
  .openapi('AsyncId')

const AsyncIdArraySchema = z.array(AsyncIdSchema).openapi('AsyncIdArray')

const AttachmentUpdateSchema = z
  .object({
    version: z
      .object({ number: z.int32().openapi({ description: 'The version number.' }) })
      .openapi({
        required: ['number'],
        description:
          'The attachment version. Set this to the current version number of the\nattachment. Note, the version number only needs to be incremented when\nupdating the actual attachment, not its properties.',
      }),
    id: z.string().openapi({ description: 'The ID of the attachment to be updated.' }),
    type: z.literal('attachment').openapi({ description: 'Set this to `attachment`.' }),
    title: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'The updated name of the attachment.' }),
    metadata: z
      .object({
        mediaType: z
          .string()
          .exactOptional()
          .openapi({ description: "The media type of the attachment, e.g. 'img/jpg'." }),
        comment: z
          .string()
          .exactOptional()
          .openapi({ description: 'The comment for this update.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    container: z
      .object({
        id: z.string().openapi({ description: 'The `id` of the parent content.' }),
        type: z
          .string()
          .openapi({
            description:
              'The content type. You can only attach attachments to content\nof type: `page`, `blogpost`.',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['id', 'type'],
        description: 'The new content to attach the attachment to.',
      }),
  })
  .openapi({ required: ['id', 'type', 'version'] })
  .openapi('AttachmentUpdate')

const ChangedValueSchema = z
  .object({
    name: z.string(),
    oldValue: z.string(),
    hiddenOldValue: z.string().exactOptional(),
    newValue: z.string(),
    hiddenNewValue: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'newValue', 'oldValue'] })
  .openapi('ChangedValue')

const AuditRecordSchema = z
  .object({
    author: z
      .object({
        type: z.literal('user').default('user'),
        displayName: z.string(),
        operations: z.array(OperationCheckResultSchema).nullable().exactOptional(),
        username: GenericUserNameSchema.exactOptional(),
        userKey: GenericUserKeySchema.exactOptional(),
        accountId: GenericAccountIdSchema.exactOptional(),
        accountType: z.string().exactOptional(),
        externalCollaborator: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'This is deprecated. Use `isGuest` instead.' }),
        isExternalCollaborator: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'This is deprecated. Use `isGuest` instead. Whether the user is an external collaborator user',
          }),
        isGuest: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the user is a guest user' }),
        publicName: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The public name or nickname of the user. Will always contain a value.',
          }),
      })
      .openapi({ required: ['displayName', 'type'] }),
    remoteAddress: z.string(),
    creationDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The creation date-time of the audit record, as a timestamp.',
      }),
    summary: z.string(),
    description: z.string(),
    category: z.string(),
    sysAdmin: z.boolean(),
    superAdmin: z.boolean().exactOptional(),
    affectedObject: AffectedObjectSchema,
    changedValues: z.array(ChangedValueSchema),
    associatedObjects: z.array(AffectedObjectSchema),
  })
  .openapi({
    required: [
      'affectedObject',
      'associatedObjects',
      'author',
      'category',
      'changedValues',
      'creationDate',
      'description',
      'remoteAddress',
      'summary',
      'sysAdmin',
    ],
  })
  .openapi('AuditRecord')

const AuditRecordArraySchema = z
  .object({
    results: z.array(AuditRecordSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('AuditRecordArray')

const AuditRecordCreateSchema = z
  .object({
    author: z
      .object({
        type: z.literal('user').default('user').openapi({ description: "Set to 'user'." }),
        displayName: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name that is displayed on the audit log in the Confluence UI.',
          }),
        operations: z
          .array(OperationCheckResultSchema)
          .exactOptional()
          .openapi({ description: 'Always defaults to null.' }),
        username: GenericUserNameSchema.exactOptional(),
        userKey: GenericUserKeySchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        required: ['type'],
        description:
          "The user that actioned the event. If `author` is not specified, then all\n`author` properties will be set to null/empty, except for `type` which\nwill be set to 'user'.",
      }),
    remoteAddress: z
      .string()
      .openapi({
        description: 'The IP address of the computer where the event was initiated from.',
      }),
    creationDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The creation date-time of the audit record, as a timestamp. This is converted\nto a date-time display in the Confluence UI. If the `creationDate` is not\nspecified, then it will be set to the timestamp for the current date-time.',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The summary of the event, which is displayed in the 'Change' column on\nthe audit log in the Confluence UI.",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A long description of the event, which is displayed in the 'Description'\nfield on the audit log in the Confluence UI.",
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The category of the event, which is displayed in the 'Event type' column\non the audit log in the Confluence UI.",
      }),
    sysAdmin: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Indicates whether the event was actioned by a system administrator.',
      }),
    affectedObject: AffectedObjectSchema.exactOptional(),
    changedValues: z
      .array(ChangedValueSchema)
      .exactOptional()
      .openapi({ description: 'The values that were changed in the event.' }),
    associatedObjects: z
      .array(AffectedObjectSchema)
      .exactOptional()
      .openapi({
        description:
          'Objects that were associated with the event. For example, if the event\nwas a space permission change then the associated object would be the\nspace.',
      }),
  })
  .openapi({ required: ['remoteAddress'] })
  .openapi('AuditRecordCreate')

const ContentStateSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'identifier of content state. If 0, 1, or 2, this is a default space state',
      }),
    name: z.string().openapi({ description: 'name of content state.' }),
    color: z.string().openapi({ description: 'hex string representing color of state' }),
  })
  .openapi({ required: ['id', 'name', 'color'] })
  .openapi('ContentState')

const AvailableContentStatesSchema = z
  .object({
    spaceContentStates: z
      .array(ContentStateSchema)
      .openapi({
        description:
          'Space suggested content states that can be used in the space.\nThis list can be empty if there are no space content states defined in the space or if space content states are disabled in the space.\nAll spaces start with 4 default space content states, and this can be modified in the UI under space settings.',
      }),
    customContentStates: z
      .array(ContentStateSchema)
      .openapi({
        description:
          'Custom content states that can be used by the user on the content of this call.\nThis list can be empty if there are no custom content states defined by the user or if custom content states are disabled in the space of the content.\nThis will at most have 3 of the most recently published content states. \nOnly the calling user has access to place these states on content, but all users can see these states once they are placed.',
      }),
  })
  .openapi({ required: ['spaceContentStates', 'customContentStates'] })
  .openapi('AvailableContentStates')

const ContentTemplateBodySchema = z
  .object({
    view: ContentBodySchema.exactOptional(),
    export_view: ContentBodySchema.exactOptional(),
    styled_view: ContentBodySchema.exactOptional(),
    storage: ContentBodySchema.exactOptional(),
    editor: ContentBodySchema.exactOptional(),
    editor2: ContentBodySchema.exactOptional(),
    wiki: ContentBodySchema.exactOptional(),
    atlas_doc_format: ContentBodySchema.exactOptional(),
    anonymous_export_view: ContentBodySchema.exactOptional(),
  })
  .openapi({
    description:
      'The body of the new content. Does not apply to attachments.\nOnly one body format should be specified as the property for\nthis object, e.g. `storage`.\n\nNote, `editor2` format is used by Atlassian only. `anonymous_export_view` is\nthe same as `export_view` format but only content viewable by an anonymous\nuser is included.',
    required: [],
  })
  .openapi('ContentTemplateBody')

const BlueprintTemplateSchema = z
  .object({
    templateId: z.string(),
    originalTemplate: z
      .object({ pluginKey: z.string(), moduleKey: z.string() })
      .openapi({ required: ['moduleKey', 'pluginKey'] }),
    referencingBlueprint: z.string(),
    name: z.string(),
    description: z.string(),
    space: z.looseObject({}).exactOptional(),
    labels: z.array(LabelSchema),
    templateType: z.string(),
    editorVersion: z.string().exactOptional(),
    body: ContentTemplateBodySchema.exactOptional(),
    _expandable: z
      .object({ body: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    _links: GenericLinksSchema,
  })
  .openapi({
    required: [
      '_links',
      'description',
      'labels',
      'name',
      'originalTemplate',
      'referencingBlueprint',
      'templateId',
      'templateType',
    ],
  })
  .openapi('BlueprintTemplate')

const BlueprintTemplateArraySchema = z
  .object({
    results: z.array(BlueprintTemplateSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('BlueprintTemplateArray')

const BreadcrumbSchema = z
  .object({ label: z.string(), url: z.string(), separator: z.string() })
  .openapi({ required: ['label', 'separator', 'url'] })
  .openapi('Breadcrumb')

const ConnectModuleSchema = z
  .object({})
  .openapi({
    description:
      'A [Connect module](https://developer.atlassian.com/cloud/confluence/modules/admin-page/) in the same format as in the\n[app descriptor](https://developer.atlassian.com/cloud/confluence/app-descriptor/).',
    example: {
      key: 'my-webitem',
      location: 'system.admin/globalsettings',
      url: '/my-web-item',
      name: { value: 'My Web Item' },
    },
  })
  .openapi('ConnectModule')

const ConnectModulesSchema = z
  .object({
    modules: z
      .array(ConnectModuleSchema)
      .openapi({
        description:
          'A list of app modules in the same format as the `modules` property in the\n[app descriptor](https://developer.atlassian.com/cloud/confluence/app-descriptor/).',
      }),
  })
  .openapi({
    required: ['modules'],
    example: {
      webItems: [
        {
          key: 'my-webitem',
          location: 'system.admin/globalsettings',
          url: '/my-web-item',
          name: { value: 'My Web Item' },
        },
      ],
      adminPages: [
        { key: 'my-admin-page', name: { value: 'My Admin Page' }, url: '/my-admin-page' },
      ],
    },
  })
  .openapi('ConnectModules')

const ContainerSummarySchema = z
  .object({ title: z.string(), displayUrl: z.string() })
  .openapi({ required: ['displayUrl', 'title'] })
  .openapi('ContainerSummary')

const AttachmentPropertiesUpdateBodySchema = z
  .looseObject({
    id: z.string(),
    type: z.string().openapi({ description: 'Set this to "attachment"' }),
    status: z.string().exactOptional(),
    title: z.string().exactOptional(),
    container: ContainerSchema.exactOptional(),
    metadata: z
      .object({ mediaType: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    extensions: z.object({}).exactOptional(),
    version: VersionSchema,
  })
  .openapi({ required: ['id', 'type', 'version'] })
  .openapi('AttachmentPropertiesUpdateBody')

const ContentBlogpostSchema = ContentSchema.and(
  z
    .object({ metadata: ContentMetadataSchema, _links: GenericLinksSchema })
    .openapi({ required: ['_links', 'metadata'] }),
)
  .openapi({ description: 'Representation of a blogpost (content)' })
  .openapi('ContentBlogpost')

const ContentBlueprintDraftSchema = z
  .looseObject({
    version: z
      .looseObject({
        number: z.int32().openapi({ description: 'The version number. Set this to `1`.' }),
      })
      .openapi({ required: ['number'], description: 'The version for the new content.' }),
    title: z
      .string()
      .max(255)
      .openapi({
        description:
          "The title of the content. If you don't want to change the title,\nset this to the current title of the draft.",
      }),
    type: z.literal('page').openapi({ description: 'The type of content. Set this to `page`.' }),
    status: z
      .literal('current')
      .default('current')
      .exactOptional()
      .openapi({
        description: 'The status of the content. Set this to `current` or omit it altogether.',
      }),
    space: z
      .looseObject({ key: z.string().openapi({ description: 'The key of the space' }) })
      .exactOptional()
      .openapi({ required: ['key'], description: 'The space for the content.' }),
    ancestors: z
      .array(
        z
          .object({ id: z.string().openapi({ description: 'The content ID of the ancestor.' }) })
          .openapi({ required: ['id'] }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The new ancestor (i.e. parent page) for the content. If you have\nspecified an ancestor, you must also specify a `space` property\nin the request body for the space that the ancestor is in.\n\nNote, if you specify more than one ancestor, the last ID in the array\nwill be selected as the parent page for the content.',
      }),
  })
  .openapi({ required: ['title', 'type', 'version'] })
  .openapi('ContentBlueprintDraft')

const AsyncContentBodySchema = z
  .object({
    value: z.string().exactOptional(),
    representation: z
      .enum([
        'view',
        'export_view',
        'styled_view',
        'storage',
        'editor',
        'editor2',
        'anonymous_export_view',
        'wiki',
        'atlas_doc_format',
      ])
      .exactOptional(),
    renderTaskId: z.string().exactOptional(),
    error: z.string().exactOptional(),
    status: z
      .enum(['WORKING', 'QUEUED', 'FAILED', 'COMPLETED', 'RERUNNING'])
      .exactOptional()
      .openapi({
        description:
          "Rerunning is reserved for when the job is working, but there is a previous run's value in the cache. You may choose to continue polling, or use the cached value.",
      }),
    embeddedContent: z.array(EmbeddedContentSchema).exactOptional(),
    webresource: WebResourceDependenciesSchema.exactOptional(),
    mediaToken: z
      .object({
        collectionIds: z.array(z.string()).exactOptional(),
        contentId: z.string().exactOptional(),
        expiryDateTime: z.string().exactOptional(),
        fileIds: z.array(z.string()).exactOptional(),
        token: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _expandable: z
      .object({
        content: z.string().exactOptional(),
        embeddedContent: z.string().exactOptional(),
        webresource: z.string().exactOptional(),
        mediaToken: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AsyncContentBody')

const AsyncContentBodyArraySchema = z.array(AsyncContentBodySchema).openapi('AsyncContentBodyArray')

const ContentBodyCreateSchema = z
  .looseObject({
    value: z.string().openapi({ description: 'The body of the content in the relevant format.' }),
    representation: z
      .enum([
        'view',
        'export_view',
        'styled_view',
        'storage',
        'editor',
        'editor2',
        'anonymous_export_view',
        'wiki',
        'atlas_doc_format',
        'plain',
        'raw',
      ])
      .openapi({
        description:
          "The content format type. Set the value of this property to\nthe name of the format being used, e.g. 'storage'.",
      }),
  })
  .openapi({
    required: ['representation', 'value'],
    description: 'This object is used when creating or updating content.',
  })
  .openapi('ContentBodyCreate')

const ContentBodyCreateStorageSchema = z
  .looseObject({
    value: z.string().openapi({ description: 'The body of the content in the relevant format.' }),
    representation: z
      .enum([
        'storage',
        'view',
        'export_view',
        'styled_view',
        'editor',
        'editor2',
        'anonymous_export_view',
        'wiki',
        'atlas_doc_format',
      ])
      .openapi({
        description:
          "The content format type. Set the value of this property to\nthe name of the format being used, e.g. 'storage'.",
      }),
  })
  .openapi({
    required: ['representation', 'value'],
    description: 'This object is used when creating or updating content.',
  })
  .openapi('ContentBodyCreateStorage')

const GlobalSpaceIdentifierSchema = z
  .object({ spaceIdentifier: z.string() })
  .nullable()
  .openapi({ required: ['spaceIdentifier'] })
  .openapi('GlobalSpaceIdentifier')

const ContentCreateSchema = z
  .looseObject({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the draft content. Required when publishing a draft.' }),
    title: z.string().max(255).nullable().exactOptional(),
    type: z
      .string()
      .openapi({
        description:
          "The type of the new content. Custom content types defined by apps are also supported. eg. 'page', 'blogpost', 'comment' etc.",
      }),
    space: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .exactOptional()
          .openapi({ type: ['integer', 'null'], format: 'int64' }),
        name: z.string().nullable().exactOptional(),
        icon: IconSchema.exactOptional(),
        identifiers: GlobalSpaceIdentifierSchema.exactOptional(),
        description: z
          .object({
            plain: SpaceDescriptionSchema.exactOptional(),
            view: SpaceDescriptionSchema.exactOptional(),
            _expandable: z
              .object({ view: z.string().exactOptional(), plain: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
        homepage: ContentSchema.exactOptional(),
        type: z.string().nullable().exactOptional(),
        metadata: z
          .object({
            labels: LabelArraySchema.exactOptional(),
            _expandable: z.object({}).exactOptional(),
          })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
        operations: z.array(OperationCheckResultSchema).nullable().exactOptional(),
        permissions: z.array(SpacePermissionSchema).nullable().exactOptional(),
        status: z.string().nullable().exactOptional(),
        settings: SpaceSettingsSchema.exactOptional(),
        theme: ThemeSchema.exactOptional(),
        lookAndFeel: LookAndFeelSchema.exactOptional(),
        history: z
          .object({
            createdDate: z.iso.datetime({ offset: true }),
            createdBy: UserSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['createdDate'] }),
        key: z.string().openapi({ description: 'The key of the space.' }),
        links: z.looseObject({}).nullable().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({
        required: ['key'],
        description: 'The space that the content is being created in.',
      }),
    status: z
      .enum(['current', 'deleted', 'historical', 'draft'])
      .default('current')
      .exactOptional()
      .openapi({ description: 'The status of the new content.' }),
    container: z
      .looseObject({
        id: z.xor([z.int(), z.string()]).openapi({ description: 'The `id` of the container.' }),
        type: z.string().openapi({ description: 'The `type` of the container.' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        required: ['id', 'type'],
        description:
          'The container of the content. Required if type is `comment` or certain types of\ncustom content. If you are trying to create a comment that is a child of another comment,\nspecify the parent comment in the ancestors field, not in this field.',
      }),
    ancestors: z
      .array(
        z
          .looseObject({
            id: z.string().openapi({ description: 'The `id` of the parent content.' }),
          })
          .openapi({ required: ['id'] }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parent content of the new content.  If you are creating a top-level `page` or `comment`,\nthis can be left blank. If you are creating a child page, this is where the parent page id goes.\nIf you are creating a child comment, this is where the parent comment id goes. Only one parent\ncontent id can be specified.',
      }),
    body: z
      .object({
        view: ContentBodyCreateSchema.exactOptional(),
        export_view: ContentBodyCreateSchema.exactOptional(),
        styled_view: ContentBodyCreateSchema.exactOptional(),
        storage: ContentBodyCreateSchema.exactOptional(),
        editor: ContentBodyCreateSchema.exactOptional(),
        editor2: ContentBodyCreateSchema.exactOptional(),
        wiki: ContentBodyCreateSchema.exactOptional(),
        anonymous_export_view: ContentBodyCreateSchema.exactOptional(),
        plain: ContentBodyCreateSchema.exactOptional(),
        atlas_doc_format: ContentBodyCreateSchema.exactOptional(),
        raw: ContentBodyCreateSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'The body of the new content. Does not apply to attachments.\nOnly one body format should be specified as the property for\nthis object, e.g. `storage`.\n\nNote, `editor2` format is used by Atlassian only. `anonymous_export_view` is\nthe same as `export_view` format but only content viewable by an anonymous\nuser is included.',
        required: [],
      }),
  })
  .nullable()
  .openapi({ required: ['type'] })
  .openapi('ContentCreate')

const ContentIdSchema = z.string().openapi('ContentId')

const ContentPropertySchema = z
  .looseObject({
    id: z.string(),
    key: z.string(),
    value: z
      .xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()])
      .openapi({
        description: 'The value of the content property. This can be empty or a complex object.',
      }),
    version: z
      .looseObject({
        when: z.iso.datetime({ offset: true }),
        message: z.string(),
        number: z.int32(),
        minorEdit: z.boolean(),
        contentTypeModified: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'True if content type is modifed in this version (e.g. page to blog)',
          }),
      })
      .exactOptional()
      .openapi({ required: ['message', 'minorEdit', 'number', 'when'] }),
    _links: GenericLinksSchema,
    _expandable: z
      .object({
        content: z.string().exactOptional(),
        additionalProperties: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['_links', 'id', 'key', 'value'] })
  .openapi('ContentProperty')

const ContentPropertyArraySchema = z
  .object({
    results: z.array(ContentPropertySchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('ContentPropertyArray')

const ContentPropertyCreateSchema = z
  .looseObject({
    key: z.string().max(255).openapi({ description: 'The key of the new property.' }),
    value: z
      .xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()])
      .openapi({
        description: 'The value of the content property. This can be empty or a complex object.',
      }),
  })
  .openapi({ required: ['key', 'value'] })
  .openapi('ContentPropertyCreate')

const ContentPropertyCreateNoKeySchema = z
  .looseObject({
    value: z
      .xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()])
      .openapi({
        description: 'The value of the content property. This can be empty or a complex object.',
      }),
  })
  .openapi({ required: ['value'] })
  .openapi('ContentPropertyCreateNoKey')

const ContentPropertyUpdateSchema = z
  .looseObject({
    value: z
      .xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()])
      .openapi({
        description: 'The value of the content property. This can be empty or a complex object.',
      }),
    version: z
      .looseObject({
        number: z
          .xor([z.int(), z.string()])
          .openapi({
            description:
              "The new version for the updated content property. Set this to the\ncurrent version number incremented by one. To get the current\nversion number, use 'Get content property' and retrieve\n`version.number`.",
          }),
        minorEdit: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description:
              "If `minorEdit` is set to 'true', no notification email or activity\nstream will be generated for the change.",
          }),
      })
      .nullable()
      .openapi({ required: ['number'], description: 'The version number of the property.' }),
  })
  .openapi({ required: ['value', 'version'] })
  .openapi('ContentPropertyUpdate')

const ContentRestrictionArraySchema = z
  .object({
    results: z.array(ContentRestrictionSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    restrictionsHash: z
      .string()
      .openapi({
        description:
          'This property is used by the UI to figure out whether a set of restrictions\nhas changed.',
      }),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'restrictionsHash', 'results', 'size', 'start'] })
  .openapi('ContentRestrictionArray')

const ContentRestrictionUserInputSchema = z
  .object({
    accountId: z.string().openapi({ description: 'The Atlassian Account ID of the user.' }),
    type: z
      .literal('known')
      .exactOptional()
      .openapi({ description: 'Optional user type. If supplied, use `known`.' }),
  })
  .openapi({
    description: 'A user to restrict. Only the Atlassian Account ID is required.',
    required: ['accountId'],
  })
  .openapi('ContentRestrictionUserInput')

const ContentRestrictionGroupInputSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the group.' }),
    type: z
      .literal('group')
      .exactOptional()
      .openapi({ description: 'Optional group type. If supplied, use `group`.' }),
  })
  .openapi({ description: 'A group to restrict. Only the group ID is required.', required: ['id'] })
  .openapi('ContentRestrictionGroupInput')

const ContentRestrictionUpdateSchema = z
  .object({
    operation: z
      .enum(['read', 'update'])
      .openapi({
        description: 'The operation to restrict. Include each operation at most once per request.',
      }),
    restrictions: z
      .union([
        z
          .unknown()
          .superRefine((val, ctx) => {
            if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
              if (!Object.hasOwn(val, 'user')) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          })
          .openapi({ required: ['user'] }),
        z
          .unknown()
          .superRefine((val, ctx) => {
            if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
              if (!Object.hasOwn(val, 'group')) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          })
          .openapi({ required: ['group'] }),
      ])
      .and(
        z
          .object({
            user: z
              .xor([
                z
                  .object({ results: z.array(ContentRestrictionUserInputSchema) })
                  .openapi({ required: ['results'] }),
                z.array(ContentRestrictionUserInputSchema),
              ])
              .exactOptional()
              .openapi({ description: 'Users to restrict, as a results object or a plain array.' }),
            group: z
              .xor([
                z
                  .object({ results: z.array(ContentRestrictionGroupInputSchema) })
                  .openapi({ required: ['results'] }),
                z.array(ContentRestrictionGroupInputSchema),
              ])
              .exactOptional()
              .openapi({
                description: 'Groups to restrict, as a results object or a plain array.',
              }),
          })
          .openapi({ required: [] }),
      )
      .openapi({
        description:
          'At least one of `user` or `group` must be supplied. On PUT, a supplied list\nreplaces the existing list for this operation and subject type; an empty\nlist clears it. Omitted lists are preserved. On POST, supplied lists add\nto existing restrictions and empty lists add nothing.',
      }),
    content: z
      .object({ id: z.string().openapi({ description: 'The ID of the content to restrict.' }) })
      .exactOptional()
      .openapi({
        description:
          'Optional content reference. If supplied, its ID must match the path parameter.',
        required: ['id'],
      }),
  })
  .openapi({ required: ['operation', 'restrictions'] })
  .openapi('ContentRestrictionUpdate')

const ContentRestrictionAddOrUpdateArraySchema = z
  .xor([
    z
      .object({ results: z.array(ContentRestrictionUpdateSchema).min(1) })
      .openapi({ required: ['results'] }),
    z.array(ContentRestrictionUpdateSchema).min(1),
  ])
  .openapi({
    description:
      'Restrictions to add or update. Supply at least one entry and at most one entry\nper operation. Both the results wrapper and a plain array are accepted.',
  })
  .openapi('ContentRestrictionAddOrUpdateArray')

const AddContentRestrictionSchema = z
  .object({
    operation: z
      .enum(['read', 'update'])
      .openapi({ description: 'The restriction operation applied to content.' }),
    restrictions: z
      .object({
        user: z
          .array(
            z
              .object({
                type: z
                  .enum(['known', 'unknown', 'anonymous', 'user'])
                  .openapi({ description: "Set to 'known'." }),
                username: GenericUserNameSchema.exactOptional(),
                userKey: GenericUserKeySchema.exactOptional(),
                accountId: GenericAccountIdSchema,
              })
              .openapi({
                required: ['accountId', 'type'],
                description:
                  'A user that the restriction will be applied to. Either the `username`\nor the `userKey` must be specified to identify the user.',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'The users that the restrictions will be applied to. This array must\nhave at least one item, otherwise it should be omitted.',
          }),
        group: z
          .array(
            z
              .object({
                type: z.literal('group').openapi({ description: "Set to 'group'." }),
                name: z.string().openapi({ description: 'The name of the group.' }),
              })
              .openapi({
                required: ['name', 'type'],
                description: 'A group that the restriction will be applied to.',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'The groups that the restrictions will be applied to. This array must\nhave at least one item, otherwise it should be omitted.',
          }),
      })
      .openapi({
        description:
          'The users/groups that the restrictions will be applied to. At least one of\n`user` or `group` must be specified for this object.',
        required: [],
      }),
  })
  .openapi({ required: ['operation', 'restrictions'] })
  .openapi('AddContentRestriction')

const AddContentRestrictionUpdateArraySchema = z
  .array(AddContentRestrictionSchema)
  .openapi('AddContentRestrictionUpdateArray')

const ContentPageResponseSchema = z
  .object({ results: z.array(ContentSchema), start: z.int32(), limit: z.int32(), size: z.int32() })
  .openapi({ required: ['limit', 'results', 'size', 'start'] })
  .openapi('ContentPageResponse')

const ContentStateRestInputSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of content state. Maximum 20 characters.' }),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Color of state. Must be in 6 digit hex form (#FFFFFF). The default colors offered in the UI are:\n #ff7452 (red),\n #2684ff (blue),\n #ffc400 (yellow),\n #57d9a3 (green), and\n #8777d9 (purple)',
      }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'id of state. This can be 0,1, or 2 if you wish to specify a default space state.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ContentStateRestInput')

const ContentStateResponseSchema = z
  .object({
    contentState: ContentStateSchema.exactOptional().openapi({
      description: 'Null or content state',
    }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of last publish event where content state changed' }),
  })
  .openapi({ required: [] })
  .openapi('ContentStateResponse')

const ContentStateSettingsSchema = z
  .object({
    contentStatesAllowed: z
      .boolean()
      .openapi({ description: 'Whether users can place any content states on content' }),
    customContentStatesAllowed: z
      .boolean()
      .openapi({ description: 'Whether users can place their custom states on content' }),
    spaceContentStatesAllowed: z
      .boolean()
      .openapi({ description: 'Whether users can place space suggested states on content' }),
    spaceContentStates: z
      .array(ContentStateSchema)
      .exactOptional()
      .openapi({ description: 'space suggested content states that users can choose from' }),
  })
  .openapi({
    required: ['contentStatesAllowed', 'customContentStatesAllowed', 'spaceContentStatesAllowed'],
  })
  .openapi('ContentStateSettings')

const ContentTemplateSchema = z
  .object({
    templateId: z.string(),
    originalTemplate: z
      .object({ pluginKey: z.string().exactOptional(), moduleKey: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    referencingBlueprint: z.string().exactOptional(),
    name: z.string(),
    description: z.string(),
    space: z.looseObject({}).exactOptional(),
    labels: z.array(LabelSchema),
    templateType: z.string(),
    editorVersion: z.string().exactOptional(),
    body: ContentTemplateBodySchema.exactOptional(),
    _expandable: z
      .object({ body: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'description', 'labels', 'name', 'templateId', 'templateType'] })
  .openapi('ContentTemplate')

const ContentTemplateArraySchema = z
  .object({
    results: z.array(ContentTemplateSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('ContentTemplateArray')

const ContentTemplateBodyCreateSchema = z
  .object({
    view: ContentBodyCreateSchema.exactOptional(),
    export_view: ContentBodyCreateSchema.exactOptional(),
    styled_view: ContentBodyCreateSchema.exactOptional(),
    storage: ContentBodyCreateSchema.exactOptional(),
    editor: ContentBodyCreateSchema.exactOptional(),
    editor2: ContentBodyCreateSchema.exactOptional(),
    wiki: ContentBodyCreateSchema.exactOptional(),
    atlas_doc_format: ContentBodyCreateSchema.exactOptional(),
    anonymous_export_view: ContentBodyCreateSchema.exactOptional(),
  })
  .openapi({
    description:
      'The body of the new content. Does not apply to attachments.\nOnly one body format should be specified as the property for\nthis object, e.g. `storage`.\n\nNote, `editor2` format is used by Atlassian only. `anonymous_export_view` is\nthe same as `export_view` format but only content viewable by an anonymous\nuser is included.',
    required: [],
  })
  .openapi('ContentTemplateBodyCreate')

const ContentTemplateCreateSchema = z
  .looseObject({
    name: z.string().openapi({ description: 'The name of the new template.' }),
    templateType: z
      .string()
      .openapi({ description: 'The type of the new template. Set to `page`.' }),
    body: ContentTemplateBodyCreateSchema,
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'A description of the new template.' }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'Labels for the new template.' }),
    space: z
      .looseObject({ key: z.string() })
      .nullable()
      .exactOptional()
      .openapi({
        required: ['key'],
        description:
          'The key for the space of the new template. Only applies to space templates.\nIf the spaceKey is not specified, the template will be created as a global\ntemplate.',
      }),
  })
  .openapi({
    required: ['body', 'name', 'templateType'],
    description: 'This object is used to create content templates.',
  })
  .openapi('ContentTemplateCreate')

const ContentTemplateUpdateSchema = z
  .looseObject({
    templateId: z.string().openapi({ description: 'The ID of the template being updated.' }),
    name: z
      .string()
      .openapi({
        description:
          'The name of the template. Set to the current `name` if this field is\nnot being updated.',
      }),
    templateType: z
      .literal('page')
      .openapi({ description: 'The type of the template. Set to `page`.' }),
    body: ContentTemplateBodyCreateSchema,
    description: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'A description of the template.' }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'Labels for the template.' }),
    space: z
      .looseObject({ key: z.string() })
      .nullable()
      .exactOptional()
      .openapi({
        required: ['key'],
        description:
          'The key for the space of the template. Required if the template is a\nspace template. Set this to the current `space.key`.',
      }),
  })
  .openapi({
    required: ['body', 'name', 'templateId', 'templateType'],
    description: 'This object is used to update content templates.',
  })
  .openapi('ContentTemplateUpdate')

const ContentUpdateSchema = z
  .looseObject({
    version: z
      .looseObject({
        number: z.int32().openapi({ description: 'The version number.' }),
        message: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'An optional message to be stored with the corresponding version.',
          }),
      })
      .nullable()
      .openapi({
        required: ['number'],
        description:
          "The new version for the updated content. Set this to the current version number incremented by one, unless you are changing the status to 'draft' which must have a version number of 1.\n\nTo get the current version number, use [Get content by ID](#api-content-id-get) and retrieve `version.number`.",
      }),
    title: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The updated title of the content. If you are updating a non-draft `page` or `blogpost`, title is required. If you are not changing the title, set this field to the the current title.',
      }),
    type: z
      .string()
      .nullable()
      .openapi({
        description:
          'The type of content. Set this to the current type of the content. For example, - page - blogpost - comment - attachment',
      }),
    status: z
      .enum(['current', 'trashed', 'deleted', 'historical', 'draft'])
      .exactOptional()
      .openapi({
        description:
          "The updated status of the content. Note, if you change the status of a page from\n'current' to 'draft' and it has an existing draft, the existing draft will be deleted\nin favor of the updated page.",
      }),
    ancestors: z
      .array(
        z
          .looseObject({
            id: z
              .xor([z.int(), z.string()])
              .openapi({ description: 'The `id` of the parent content.' }),
          })
          .openapi({ required: ['id'] }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The new parent for the content. Only one parent content 'id' can be specified.",
      }),
    body: z
      .object({
        view: ContentBodyCreateSchema.exactOptional(),
        export_view: ContentBodyCreateSchema.exactOptional(),
        styled_view: ContentBodyCreateSchema.exactOptional(),
        storage: ContentBodyCreateStorageSchema.exactOptional(),
        editor: ContentBodyCreateSchema.exactOptional(),
        editor2: ContentBodyCreateSchema.exactOptional(),
        wiki: ContentBodyCreateSchema.exactOptional(),
        atlas_doc_format: ContentBodyCreateSchema.exactOptional(),
        anonymous_export_view: ContentBodyCreateSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'The updated body of the content. Does not apply to attachments.\nIf you are not sure how to generate these formats, you can create a page in the\nConfluence application, retrieve the content using [Get content](#api-content-get),\nand expand the desired content format, e.g. `expand=body.storage`.',
        required: [],
      }),
  })
  .openapi({ required: ['type', 'version'] })
  .openapi('ContentUpdate')

const ContentBodyConversionInputSchema = z
  .object({
    to: z
      .string()
      .openapi({ description: 'The name of the target format for the content body conversion.' }),
    allowCache: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Controls whether conversion results are cached and reused for identical requests.\n\n- `false`: Each request creates a new conversion task, even if an identical request was made previously.\n- `true`: Enables caching behavior for identical requests from the same user.\n  - If no cached result exists, a new conversion task is created\n  - If a cached result exists, the existing task is marked as RERUNNING and will complete with status COMPLETED\n  - Returns the same task ID for identical requests, allowing you to retrieve the cached result',
      }),
    spaceKeyContext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>` and the `spaceKeyContext=TEST` parameter is provided, then the link will be converted into a link to the "Example page" page in the "TEST" space.',
      }),
    contentIdContext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content ID used to find the space for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>` and the `contentIdContext=123` parameter is provided, then the link will be converted into a link to the "Example page" page in the same space that has the content with ID=123. Note that `spaceKeyContext` will be ignored if this parameter is provided.',
      }),
    embeddedContentRender: z
      .enum(['current', 'version-at-save'])
      .default('current')
      .exactOptional()
      .openapi({
        description:
          'Mode used for rendering embedded content, such as attachments. - `current` renders the embedded content using the latest version. - `version-at-save` renders the embedded content using the version at the time of save.',
      }),
    expand: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A multi-value, comma-separated parameter indicating which properties of the content to expand and populate. Expands are dependent\non the `to` conversion format and may be irrelevant for certain conversions (e.g. `macroRenderedOutput` is redundant when\nconverting to `view` format). \n\nIf rendering to `view` format, and the body content being converted includes arbitrary nested content (such as macros); then it is \nnecessary to include webresource expands in the request. Webresources for content body are the batched JS and CSS dependencies for\nany nested dynamic content (i.e. macros).\n\n- `embeddedContent` returns metadata for nested content (e.g. page included using page include macro)\n- `mediaToken` returns JWT token for retrieving attachment data from Media API\n- `macroRenderedOutput` additionally converts body to view format\n- `webresource.superbatch.uris.js` returns all common JS dependencies as static URLs\n- `webresource.superbatch.uris.css` returns all common CSS dependencies as static URLs\n- `webresource.superbatch.uris.all` returns all common dependencies as static URLs\n- `webresource.superbatch.tags.all` returns all common JS dependencies as html `<script>` tags\n- `webresource.superbatch.tags.css` returns all common CSS dependencies as html `<style>` tags\n- `webresource.superbatch.tags.js` returns all common dependencies as html `<script>` and `<style>` tags\n- `webresource.uris.js` returns JS dependencies specific to conversion\n- `webresource.uris.css` returns CSS dependencies specific to conversion\n- `webresource.uris.all` returns all dependencies specific to conversion     \n- `webresource.tags.all` returns common JS dependencies as html `<script>` tags\n- `webresource.tags.css` returns common CSS dependencies as html `<style>` tags\n- `webresource.tags.js` returns common dependencies as html `<script>` and `<style>` tags',
      }),
    body: ContentBodyCreateSchema,
  })
  .openapi({ required: ['to', 'body'] })
  .openapi('ContentBodyConversionInput')

const BulkContentBodyConversionInputSchema = z
  .object({ conversionInputs: z.array(ContentBodyConversionInputSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BulkContentBodyConversionInput')

const CopyPageHierarchyTitleOptionsSchema = z
  .object({
    prefix: z.string().exactOptional(),
    replace: z.string().exactOptional(),
    search: z.string().exactOptional(),
  })
  .openapi({ description: 'Required for copying page in the same space.', required: [] })
  .openapi('CopyPageHierarchyTitleOptions')

const CopyPageHierarchyRequestSchema = z
  .object({
    copyAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, attachments are copied to the destination page.',
      }),
    copyPermissions: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, page permissions are copied to the destination page.',
      }),
    copyProperties: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, content properties are copied to the destination page.',
      }),
    copyLabels: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If set to `true`, labels are copied to the destination page.' }),
    copyCustomContents: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, custom contents are copied to the destination page.',
      }),
    copyDescendants: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, descendants are copied to the destination page.',
      }),
    destinationPageId: ContentIdSchema,
    titleOptions: CopyPageHierarchyTitleOptionsSchema.exactOptional(),
  })
  .openapi({ required: ['destinationPageId'] })
  .openapi('CopyPageHierarchyRequest')

const CopyPageRequestDestinationSchema = z
  .object({
    type: z.enum(['space', 'existing_page', 'parent_page', 'parent_content']),
    value: z
      .string()
      .openapi({
        description:
          'The space key for `space` type, and content id for `parent_page`, `parent_content`, and `existing_page`',
      }),
  })
  .openapi({
    required: ['type', 'value'],
    description:
      'Defines where the page will be copied to, and can be one of the following types.\n\n  - `parent_page`: page will be copied as a child of the specified parent page\n  - `parent_content`: page will be copied as a child of the specified parent content\n  - `space`: page will be copied to the specified space as a root page on the space\n  - `existing_page`: page will be copied and replace the specified page',
  })
  .openapi('CopyPageRequestDestination')

const CopyPageRequestSchema = z
  .object({
    copyAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, attachments are copied to the destination page.',
      }),
    copyPermissions: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, page permissions are copied to the destination page.',
      }),
    copyProperties: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, content properties are copied to the destination page.',
      }),
    copyLabels: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If set to `true`, labels are copied to the destination page.' }),
    copyCustomContents: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If set to `true`, custom contents are copied to the destination page.',
      }),
    destination: CopyPageRequestDestinationSchema,
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'If defined, this will replace the title of the destination page.' }),
    body: z
      .object({
        storage: ContentBodyCreateSchema.exactOptional(),
        editor2: ContentBodyCreateSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'If defined, this will replace the body of the destination page.',
        required: [],
      }),
  })
  .openapi({ required: ['destination'] })
  .openapi('CopyPageRequest')

const CQLPersonalDataConvertedQueriesSchema = z
  .object({
    queryStrings: z
      .array(z.string())
      .openapi({
        description:
          'The list of converted CQL query strings with account IDs in\nplace of user identifiers.',
      }),
  })
  .openapi({ required: ['queryStrings'], description: 'The converted CQL queries.' })
  .openapi('CQLPersonalDataConvertedQueries')

const CQLPersonalDataMigrationRequestSchema = z
  .object({
    queryStrings: z
      .array(z.string())
      .openapi({
        description: 'A list of queries with user identifiers. Maximum of 100 queries.',
        example: ['type = page and creator != admin and space = DEV'],
      }),
  })
  .openapi({ required: ['queryStrings'], description: 'The CQL queries to be converted.' })
  .openapi('CQLPersonalDataMigrationRequest')

const DynamicModulesErrorMessageSchema = z
  .object({ message: z.string().openapi({ description: 'The error message.' }) })
  .openapi({
    required: ['message'],
    example: { message: 'The request is not from a Connect app.' },
  })
  .openapi('DynamicModulesErrorMessage')

const GroupCreateSchema = z
  .looseObject({ type: z.literal('group').default('group'), id: z.string().exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('GroupCreate')

const GroupArrayWithLinksSchema = z
  .object({
    results: z.array(GroupSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    totalSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'This property will return total count of the objects before pagination is applied.\nThis value is returned if `shouldReturnTotalSize` is set to `true`.',
      }),
    _links: GenericLinksSchema,
  })
  .openapi({
    description: 'Same as GroupArray but with `_links` property.',
    required: ['limit', 'results', 'size', 'start', '_links'],
  })
  .openapi('GroupArrayWithLinks')

const GroupNameSchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('GroupName')

const LabeledContentTypeSchema = z
  .enum(['page', 'blogpost', 'attachment', 'page_template'])
  .openapi('LabeledContentType')

const LabeledContentSchema = z
  .object({
    contentType: LabeledContentTypeSchema,
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    title: z.string().openapi({ description: 'Title of the content.' }),
  })
  .openapi({ required: ['contentId', 'contentType', 'title'] })
  .openapi('LabeledContent')

const LabeledContentPageResponseSchema = z
  .object({
    results: z.array(LabeledContentSchema),
    start: z.int32().exactOptional(),
    limit: z.int32().exactOptional(),
    size: z.int32(),
  })
  .openapi({ required: ['results', 'size'] })
  .openapi('LabeledContentPageResponse')

const LabelDetailsSchema = z
  .object({
    label: LabelSchema,
    associatedContents: LabeledContentPageResponseSchema.exactOptional(),
  })
  .openapi({ required: ['label'] })
  .openapi('LabelDetails')

const LabelCreateSchema = z
  .looseObject({
    prefix: z
      .string()
      .openapi({ description: 'The prefix for the label. `global`, `my` `team`, etc.' }),
    name: z
      .string()
      .openapi({ description: 'The name of the label, which will be shown in the UI.' }),
  })
  .openapi({ required: ['name', 'prefix'] })
  .openapi('LabelCreate')

const LabelCreateArraySchema = z.array(LabelCreateSchema).openapi('LabelCreateArray')

const LongTaskSchema = z
  .object({
    ari: z
      .string()
      .exactOptional()
      .openapi({ description: 'the ARI for the long task, based on its ID' }),
    id: z.string().openapi({ description: 'a unique identifier for the long task' }),
    links: z
      .looseObject({
        status: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL to retrive status of long task.' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'links'] })
  .openapi('LongTask')

const LookAndFeelWithLinksSchema = LookAndFeelSchema.and(
  z.object({ _links: GenericLinksSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({ description: 'Look and feel settings returned after an update.' })
  .openapi('LookAndFeelWithLinks')

const LookAndFeelSelectionSchema = z
  .object({
    spaceKey: z
      .string()
      .openapi({
        description: 'The key of the space for which the look and feel settings will be\nset.',
      }),
    lookAndFeelType: z.enum(['global', 'custom', 'theme']),
  })
  .openapi({ required: ['lookAndFeelType', 'spaceKey'], description: 'Look and feel selection' })
  .openapi('LookAndFeelSelection')

const LookAndFeelSettingsSchema = z
  .object({
    selected: z.enum(['global', 'custom']),
    global: LookAndFeelSchema,
    theme: LookAndFeelSchema.exactOptional(),
    custom: LookAndFeelSchema,
  })
  .openapi({ required: ['custom', 'global', 'selected'] })
  .openapi('LookAndFeelSettings')

const MessageSchema = z
  .looseObject({
    translation: z.string().exactOptional(),
    args: z.array(z.xor([z.string(), z.looseObject({})])),
  })
  .openapi({ required: ['args'] })
  .openapi('Message')

const LongTaskStatusSchema = z
  .object({
    ari: z
      .string()
      .exactOptional()
      .openapi({ description: 'the ARI for the long task, based on its ID' }),
    id: z.string(),
    name: z
      .object({ key: z.string(), args: z.array(z.object({})) })
      .openapi({ required: ['args', 'key'] }),
    elapsedTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    percentageComplete: z.int32(),
    successful: z.boolean(),
    finished: z.boolean(),
    messages: z.array(MessageSchema),
    status: z.string().exactOptional(),
    errors: z.array(MessageSchema).exactOptional(),
    additionalDetails: z
      .object({
        destinationId: z.string().exactOptional(),
        destinationUrl: z.string().exactOptional(),
        totalPageNeedToCopy: z.int().exactOptional(),
        additionalProperties: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    required: [
      'elapsedTime',
      'finished',
      'id',
      'messages',
      'name',
      'percentageComplete',
      'successful',
    ],
    description:
      'Current status of a long running task\n\nStatus keys:\n\n- `ERROR_UNKNOWN` - Generic error\n- `ERROR_LOCK_FAILED` - Could not get the lock on destination space\n- `ERROR_RELINK` - Error when relink pages/attachments\n- `ERROR_COPY_PAGE` - Error while copying 1 page\n- `WARN_RENAME_PAGE` - Warning page is rename during copy\n- `WARN_IGNORE_COPY_PERMISSION` - Warning could not copy permission\n- `WARN_IGNORE_COPY_ATTACHMENT` - Warning could not copy attachment\n- `WARN_IGNORE_DELETE_PAGE` - Warning ignoring delete of a non agreed on page\n- `STATUS_COPIED_PAGES` - Message total pages are copied\n- `STATUS_COPYING_PAGES` - Message copy pages\n- `STATUS_RELINK_PAGES` - Message relink pages/attachments\n- `STATUS_DELETING_PAGES` - Message delete pages\n- `STATUS_DELETED_PAGES` - Message total pages are deleted\n- `STATUS_MOVING_PAGES` - Message move pages\n- `WARN_IGNORE_VIEW_RESTRICTED` - Permission changed - view restricted\n- `WARN_IGNORE_EDIT_RESTRICTED` - Permission changed - edit restricted\n- `INITIALIZING_TASK` - Message when initializing task\n- `UNKNOWN_STATUS` - Message when status is unknown',
  })
  .openapi('LongTaskStatus')

const LongTaskStatusArraySchema = z
  .object({
    results: z.array(LongTaskStatusSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('LongTaskStatusArray')

const LongTaskStatusWithLinksSchema = z
  .object({
    ari: z
      .string()
      .exactOptional()
      .openapi({ description: 'the ARI for the long task, based on its ID' }),
    id: z.string(),
    name: z
      .object({ key: z.string(), args: z.array(z.object({})) })
      .openapi({ required: ['args', 'key'] }),
    elapsedTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    percentageComplete: z.int32(),
    successful: z.boolean(),
    finished: z.boolean(),
    messages: z.array(MessageSchema),
    _links: GenericLinksSchema,
    status: z.string().exactOptional(),
    errors: z.array(MessageSchema).exactOptional(),
    additionalDetails: z
      .object({
        destinationId: z.string().nullable().exactOptional(),
        destinationUrl: z.string().exactOptional(),
        totalPageNeedToCopy: z.int().exactOptional(),
        additionalProperties: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    required: [
      '_links',
      'elapsedTime',
      'finished',
      'id',
      'messages',
      'name',
      'percentageComplete',
      'successful',
    ],
    description:
      'Same as LongTaskStatus but with `_links` property.\n\nStatus keys:\n\n- `ERROR_UNKNOWN` - Generic error\n- `ERROR_LOCK_FAILED` - Could not get the lock on destination space\n- `ERROR_RELINK` - Error when relink pages/attachments\n- `ERROR_COPY_PAGE` - Error while copying 1 page\n- `WARN_RENAME_PAGE` - Warning page is rename during copy\n- `WARN_IGNORE_COPY_PERMISSION` - Warning could not copy permission\n- `WARN_IGNORE_COPY_ATTACHMENT` - Warning could not copy attachment\n- `WARN_IGNORE_DELETE_PAGE` - Warning ignoring delete of a non agreed on page\n- `STATUS_COPIED_PAGES` - Message total pages are copied\n- `STATUS_COPYING_PAGES` - Message copy pages\n- `STATUS_RELINK_PAGES` - Message relink pages/attachments\n- `STATUS_DELETING_PAGES` - Message delete pages\n- `STATUS_DELETED_PAGES` - Message total pages are deleted\n- `STATUS_MOVING_PAGES` - Message move pages\n- `WARN_IGNORE_VIEW_RESTRICTED` - Permission changed - view restricted\n- `WARN_IGNORE_EDIT_RESTRICTED` - Permission changed - edit restricted\n- `INITIALIZING_TASK` - Message when initializing task\n- `UNKNOWN_STATUS` - Message when status is unknown',
  })
  .openapi('LongTaskStatusWithLinks')

const MacroInstanceSchema = z
  .object({
    name: z.string().exactOptional(),
    body: z.string().exactOptional(),
    parameters: z.object({}).exactOptional(),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MacroInstance')

const BulkUserLookupSchema = z
  .object({
    type: z.enum(['known', 'unknown', 'anonymous', 'user']),
    username: GenericUserNameSchema.exactOptional(),
    userKey: GenericUserKeySchema.exactOptional(),
    accountId: GenericAccountIdSchema,
    accountType: z
      .string()
      .openapi({
        description: 'The account type of the user, may return empty string if unavailable.',
      }),
    email: z
      .string()
      .openapi({
        description:
          "The email address of the user. Depending on the user's privacy setting, this may return an empty string.",
      }),
    publicName: z
      .string()
      .openapi({
        description: 'The public name or nickname of the user. Will always contain a value.',
      }),
    profilePicture: IconSchema,
    displayName: z
      .string()
      .openapi({
        description:
          "The displays name of the user. Depending on the user's privacy setting, this may be the same as publicName.",
      }),
    timeZone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "This displays user time zone. Depending on the user's privacy setting, this may return null.",
      }),
    isExternalCollaborator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This is deprecated. Use `isGuest` instead to find out whether the user is a guest user.',
      }),
    isGuest: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user is a guest user' }),
    operations: z.array(OperationCheckResultSchema).exactOptional(),
    details: UserDetailsSchema.exactOptional(),
    personalSpace: SpaceSchema.exactOptional(),
    _expandable: z
      .object({
        operations: z.string().exactOptional(),
        details: z.string().exactOptional(),
        personalSpace: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    _links: GenericLinksSchema,
  })
  .openapi({
    required: [
      '_expandable',
      '_links',
      'accountId',
      'accountType',
      'displayName',
      'email',
      'profilePicture',
      'publicName',
      'type',
    ],
  })
  .openapi('BulkUserLookup')

const BulkUserLookupArraySchema = z
  .object({
    results: z.array(BulkUserLookupSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('BulkUserLookupArray')

const PropertyValueSchema = z
  .xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()])
  .openapi({
    description:
      'The value of the property. This can be empty or a complex object. 64KB Size Limit\nFor example,\n```\n"value": {\n  "example1": "value",\n  "example2": true,\n  "example3": 123,\n  "example4": ["value1", "value2"],\n}\n```',
  })
  .openapi('PropertyValue')

const RelationDataSchema = z
  .object({
    createdBy: UserSchema.exactOptional(),
    createdDate: z.iso.datetime({ offset: true }).exactOptional(),
    friendlyCreatedDate: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelationData')

const RelationSchema = z
  .object({
    name: z.string(),
    relationData: RelationDataSchema.exactOptional(),
    source: z.xor([ContentSchema, UserSchema, SpaceSchema]).exactOptional(),
    target: z.xor([ContentSchema, UserSchema, SpaceSchema]).exactOptional(),
    _expandable: z
      .object({
        relationData: z.string().exactOptional(),
        source: z.string().exactOptional(),
        target: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'name'] })
  .openapi('Relation')

const RelationArraySchema = z
  .object({
    results: z.array(RelationSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('RelationArray')

const RetentionPeriodSchema = z
  .object({
    number: z.int32().openapi({ description: 'The number of units for the retention period.' }),
    units: z
      .enum([
        'NANOS',
        'MICROS',
        'MILLIS',
        'SECONDS',
        'MINUTES',
        'HOURS',
        'HALF_DAYS',
        'DAYS',
        'WEEKS',
        'MONTHS',
        'YEARS',
        'DECADES',
        'CENTURIES',
        'MILLENNIA',
        'ERAS',
        'FOREVER',
      ])
      .openapi({ description: 'The unit of time that the retention period is measured in.' }),
  })
  .openapi({ required: ['number', 'units'] })
  .openapi('RetentionPeriod')

const SearchResultSchema = z
  .object({
    content: ContentSchema.exactOptional(),
    user: UserSchema.exactOptional(),
    space: SpaceSchema.exactOptional(),
    title: z.string(),
    excerpt: z.string(),
    url: z.string(),
    resultParentContainer: ContainerSummarySchema.exactOptional(),
    resultGlobalContainer: ContainerSummarySchema.exactOptional(),
    breadcrumbs: z.array(BreadcrumbSchema),
    entityType: z.string(),
    iconCssClass: z.string(),
    lastModified: z.iso.datetime({ offset: true }),
    friendlyLastModified: z.string().exactOptional(),
    score: z.number().exactOptional(),
  })
  .openapi({
    required: [
      'breadcrumbs',
      'entityType',
      'excerpt',
      'iconCssClass',
      'lastModified',
      'title',
      'url',
    ],
  })
  .openapi('SearchResult')

const SearchPageResponseSearchResultSchema = z
  .object({
    results: z.array(SearchResultSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    totalSize: z.int32(),
    cqlQuery: z.string(),
    searchDuration: z.int32(),
    archivedResultCount: z.int32().exactOptional(),
    _links: GenericLinksSchema,
  })
  .openapi({
    required: [
      '_links',
      'cqlQuery',
      'limit',
      'results',
      'searchDuration',
      'size',
      'start',
      'totalSize',
    ],
  })
  .openapi('SearchPageResponseSearchResult')

const SpaceArraySchema = z
  .object({
    results: z.array(SpaceSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('SpaceArray')

const SpaceDescriptionCreateSchema = z
  .object({
    plain: z
      .looseObject({
        value: z.string().exactOptional().openapi({ description: 'The space description.' }),
        representation: z.string().exactOptional().openapi({ description: "Set to 'plain'." }),
      })
      .openapi({ required: [] }),
  })
  .nullable()
  .openapi({
    required: ['plain'],
    description:
      "The description of the new/updated space. Note, only the 'plain' representation\ncan be used for the description when creating or updating a space.",
  })
  .openapi('SpaceDescriptionCreate')

const SpacePermissionCreateSchema = z
  .looseObject({
    subjects: z
      .object({
        user: z
          .object({ results: z.array(UserSchema), size: z.int32() })
          .exactOptional()
          .openapi({ required: ['results', 'size'] }),
        group: z
          .object({ results: z.array(GroupCreateSchema), size: z.int32() })
          .exactOptional()
          .openapi({ required: ['results', 'size'] }),
      })
      .exactOptional()
      .openapi({
        description: 'The users and/or groups that the permission applies to.',
        required: [],
      }),
    operation: OperationCheckResultSchema,
    anonymousAccess: z
      .boolean()
      .default(false)
      .openapi({ description: 'Grant anonymous users permission to use the operation.' }),
    unlicensedAccess: z
      .boolean()
      .default(false)
      .openapi({
        description:
          "Grants access to unlicensed users from JIRA Service Desk when used\nwith the 'read space' operation.",
      }),
  })
  .openapi({
    required: ['anonymousAccess', 'operation', 'unlicensedAccess'],
    description:
      "This object represents a permission for given space. Permissions consist of\nat least one operation object with an accompanying subjects object.\n\nThe following combinations of `operation` and `targetType` values are\nvalid for the `operation` object:\n\n  - 'create': 'page', 'blogpost', 'comment', 'attachment'\n  - 'read': 'space'\n  - 'delete': 'page', 'blogpost', 'comment', 'attachment'\n  - 'export': 'space'\n  - 'administer': 'space'",
  })
  .openapi('SpacePermissionCreate')

const SpaceCreateSchema = z
  .looseObject({
    name: z.string().max(200).openapi({ description: 'The name of the new space.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key for the new space. Format: See [Space\nkeys](https://confluence.atlassian.com/x/lqNMMQ). If `alias` is not provided, this is required.',
      }),
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field will be used as the new identifier for the space in confluence page URLs.\nIf the property is not provided the alias will be the provided key.\nThis property is experimental and may be changed or removed in the future.',
      }),
    description: SpaceDescriptionCreateSchema.exactOptional(),
    permissions: z
      .array(SpacePermissionCreateSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The permissions for the new space. If no permissions are provided, the\n[Confluence default space permissions](https://confluence.atlassian.com/x/UAgzKw#CreateaSpace-Spacepermissions)\nare applied. Note that if permissions are provided, the space is\ncreated with only the provided set of permissions, not\nincluding the default space permissions. Space permissions\ncan be modified after creation using the space permissions\nendpoints, and a private space can be created using the\ncreate private space endpoint.',
      }),
  })
  .openapi({
    required: ['name'],
    description: 'This is the request object used when creating a new space.',
  })
  .openapi('SpaceCreate')

const SpaceUpdateSchema = z
  .looseObject({
    name: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The updated name of the space.' }),
    description: SpaceDescriptionCreateSchema.exactOptional(),
    homepage: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The updated homepage for this space' }),
    type: z.string().exactOptional().openapi({ description: 'The updated type for this space.' }),
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The updated status for this space.' }),
  })
  .openapi({ description: 'The properties of a space that can be updated.', required: [] })
  .openapi('SpaceUpdate')

const SpacePropertySchema = z
  .object({
    id: z.string(),
    key: z.string(),
    value: z.xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()]),
    version: VersionSchema.exactOptional(),
    space: SpaceSchema.exactOptional(),
    _links: GenericLinksSchema.exactOptional(),
    _expandable: z
      .object({ version: z.string().exactOptional(), space: z.string().exactOptional() })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['_expandable', 'id', 'key', 'value'] })
  .openapi('SpaceProperty')

const SpacePropertyArraySchema = z
  .object({
    results: z.array(SpacePropertySchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('SpacePropertyArray')

const SpacePropertyCreateSchema = z
  .object({
    key: z.string().openapi({ description: 'The key of the new property.' }),
    value: PropertyValueSchema,
    space: z
      .looseObject({
        key: z.string().exactOptional().openapi({ description: 'The key of the space' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['key', 'value'] })
  .openapi('SpacePropertyCreate')

const SpacePropertyCreateNoKeySchema = z
  .object({ value: PropertyValueSchema })
  .openapi({ required: ['value'] })
  .openapi('SpacePropertyCreateNoKey')

const SpacePropertyUpdateSchema = z
  .object({
    key: z.string().exactOptional(),
    value: z.xor([z.array(z.string()), z.boolean(), z.looseObject({}), z.string()]),
    version: VersionSchema,
    space: z
      .looseObject({
        key: z.string().exactOptional().openapi({ description: 'The key of the space' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['value', 'version'] })
  .openapi('SpacePropertyUpdate')

const SpaceSettingsUpdateSchema = z
  .object({
    routeOverrideEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether an override for the space home should be used. This is\nused in conjunction with a space theme provided by an app. For\nexample, if this property is set to true, a theme can display a page\nother than the space homepage when users visit the root URL for a\nspace. This property allows apps to provide content-only theming\nwithout overriding the space home.',
      }),
    contentMode: z
      .enum(['standard', 'compact'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The content rendering mode for the space. Controls spacing and typography\nin the editor and renderer. Valid values are "standard" and "compact".\nWhen set to "compact", content is rendered more densely with smaller\nspacing and typography.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpaceSettingsUpdate')

const WatchUserSchema = z
  .object({
    type: z.string(),
    username: GenericUserNameSchema.exactOptional(),
    userKey: GenericUserKeySchema.exactOptional(),
    accountId: GenericAccountIdSchema,
    profilePicture: IconSchema,
    displayName: z.string(),
    timeZone: z.string().nullable().exactOptional(),
    operations: z.array(OperationCheckResultSchema).nullable(),
    externalCollaborator: z.boolean(),
    isGuest: z.boolean().nullable(),
    isExternalCollaborator: z.boolean(),
    details: UserDetailsSchema.exactOptional(),
    accountType: z.string(),
    email: z.string(),
    publicName: z.string(),
    personalSpace: z.object({}).nullable(),
  })
  .openapi({
    required: [
      'type',
      'accountId',
      'profilePicture',
      'displayName',
      'operations',
      'isExternalCollaborator',
      'isGuest',
      'accountType',
      'email',
      'publicName',
      'personalSpace',
      'externalCollaborator',
    ],
    description:
      'This essentially the same as the `User` object, but no `_links` property and\nno `_expandable` property (therefore, different required fields).',
  })
  .openapi('WatchUser')

const SpaceWatchSchema = z
  .object({
    type: z.string(),
    watcher: WatchUserSchema,
    spaceKey: z.string().exactOptional(),
    labelName: z.string().exactOptional(),
    prefix: z.string().exactOptional(),
  })
  .openapi({ required: ['type', 'watcher'] })
  .openapi('SpaceWatch')

const SpaceWatchArraySchema = z
  .object({
    results: z.array(SpaceWatchSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['limit', 'results', 'size', 'start'] })
  .openapi('SpaceWatchArray')

const SystemInfoEntitySchema = z
  .object({
    cloudId: z.string(),
    commitHash: z.string(),
    baseUrl: z.string().exactOptional(),
    fallbackBaseUrl: z.string().exactOptional(),
    edition: z.string().exactOptional(),
    siteTitle: z.string().exactOptional(),
    defaultLocale: z.string().exactOptional(),
    defaultTimeZone: z.string().exactOptional(),
    microsPerimeter: z.string().exactOptional(),
  })
  .nullable()
  .openapi({ required: ['cloudId', 'commitHash'] })
  .openapi('SystemInfoEntity')

const TaskStatusUpdateSchema = z
  .object({ status: z.enum(['complete', 'incomplete']) })
  .openapi({ required: ['status'] })
  .openapi('TaskStatusUpdate')

const TaskSchema = z
  .object({
    globalId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    status: z.string(),
    title: z.string().exactOptional(),
    description: z.string().exactOptional(),
    body: z.string().exactOptional(),
    creator: z.string(),
    assignee: z.string().exactOptional(),
    completeUser: z.string().exactOptional(),
    createDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    dueDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    updateDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    completeDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['contentId', 'createDate', 'creator', 'globalId', 'id', 'status'] })
  .openapi('Task')

const TaskPageResponseSchema = z
  .object({ results: z.array(TaskSchema), start: z.int32(), limit: z.int32(), size: z.int32() })
  .openapi({ required: ['limit', 'results', 'size', 'start'] })
  .openapi('TaskPageResponse')

const ThemeNoLinksSchema = z
  .object({
    themeKey: z.string(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    icon: IconSchema.exactOptional(),
  })
  .openapi({
    required: ['themeKey'],
    description: 'Theme object without links. Used in ThemeArray.',
  })
  .openapi('ThemeNoLinks')

const ThemeArraySchema = z
  .object({
    results: z.array(ThemeNoLinksSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('ThemeArray')

const ThemeUpdateSchema = z
  .object({
    themeKey: z
      .string()
      .openapi({ description: 'The key of the theme to be set as the space theme.' }),
  })
  .openapi({ required: ['themeKey'] })
  .openapi('ThemeUpdate')

const UserAnonymousSchema = z
  .object({
    type: z.string(),
    profilePicture: IconSchema,
    displayName: z.string(),
    operations: z.array(OperationCheckResultSchema).exactOptional(),
    _expandable: z
      .object({ operations: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'displayName', 'profilePicture', 'type'] })
  .openapi('UserAnonymous')

const UserPropertySchema = z
  .object({
    key: z.string(),
    value: z.looseObject({}).openapi({ description: 'The value of the content property.' }),
    id: z.string().openapi({ description: 'a unique identifier for the user property' }),
    lastModifiedDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'datetime when the property was last modified such as `2022-02-01T12:00:00.111Z`',
      }),
    createdDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'datetime when the property was created such as `2022-01-01T12:00:00.111Z`',
      }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['key', 'value', 'id', 'lastModifiedDate', 'createdDate'] })
  .openapi('UserProperty')

const UserPropertyKeyArraySchema = z
  .object({
    results: z.array(z.object({ key: z.string().exactOptional() }).openapi({ required: [] })),
    start: z.int32().exactOptional(),
    limit: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({ required: ['results'] })
  .openapi('UserPropertyKeyArray')

const UserPropertyCreateSchema = z
  .strictObject({
    value: z.looseObject({}).openapi({ description: 'The value of the user property.' }),
  })
  .openapi({ required: ['value'] })
  .openapi('UserPropertyCreate')

const UserPropertyUpdateSchema = z
  .strictObject({
    value: z.looseObject({}).openapi({ description: 'The value of the user property.' }),
  })
  .openapi({ required: ['value'] })
  .openapi('UserPropertyUpdate')

const UserWatchSchema = z
  .object({ watching: z.boolean() })
  .openapi({ required: ['watching'] })
  .openapi('UserWatch')

const VersionArraySchema = z
  .object({
    results: z.array(VersionSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('VersionArray')

const VersionRestoreSchema = z
  .object({
    operationKey: z.literal('restore').openapi({ description: "Set to 'restore'." }),
    params: z
      .object({
        versionNumber: z.int32().openapi({ description: 'The version number to be restored.' }),
        message: z.string().openapi({ description: 'Description for the version.' }),
        restoreTitle: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'If true, the content title will be the same as the title from the version restored. Defaults to `false`.',
          }),
      })
      .openapi({ required: ['message', 'versionNumber'] }),
  })
  .openapi({ required: ['operationKey', 'params'] })
  .openapi('VersionRestore')

const WatchSchema = z
  .object({
    type: z.string(),
    watcher: WatchUserSchema,
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['contentId', 'type', 'watcher'] })
  .openapi('Watch')

const WatchArraySchema = z
  .object({
    results: z.array(WatchSchema),
    start: z.int32(),
    limit: z.int32(),
    size: z.int32(),
    _links: GenericLinksSchema,
  })
  .openapi({ required: ['_links', 'limit', 'results', 'size', 'start'] })
  .openapi('WatchArray')

const PermissionSubjectSchema = z
  .object({
    type: z.enum(['user', 'group']),
    identifier: z
      .string()
      .openapi({
        description:
          "for `type=user`, identifier should be user's accountId or `anonymous` for anonymous users\n\nfor `type=group`, identifier should be the groupId.",
      }),
  })
  .openapi({
    required: ['identifier', 'type'],
    description: 'The user or group that the permission applies to.',
  })
  .openapi('PermissionSubject')

const PermissionSubjectWithGroupIdSchema = z
  .object({
    type: z.enum(['user', 'group']),
    identifier: z
      .string()
      .openapi({
        description:
          "for `type=user`, identifier should be user's accountId or `anonymous` for anonymous users\n\nfor `type=group`, identifier should be ID of the group",
      }),
  })
  .openapi({
    required: ['identifier', 'type'],
    description: 'The user or group that the permission applies to.',
  })
  .openapi('PermissionSubjectWithGroupId')

const SpacePermissionV2Schema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    subject: PermissionSubjectSchema,
    operation: z
      .object({
        key: z.enum([
          'administer',
          'archive',
          'copy',
          'create',
          'delete',
          'export',
          'move',
          'purge',
          'purge_version',
          'read',
          'restore',
          'restrict_content',
          'update',
          'use',
        ]),
        target: z
          .enum(['page', 'blogpost', 'comment', 'attachment', 'space'])
          .openapi({ description: 'The space or content type that the operation applies to.' }),
      })
      .openapi({ required: ['key', 'target'] }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'subject', 'operation'],
    description:
      "This object represents a single space permission. Permissions consist of\nat least one operation object with an accompanying subjects object.\n\nThe following combinations of `operation.key` and `operation.target` values are\nvalid for the `operation` object:\n``` bash\n'create': 'page', 'blogpost', 'comment', 'attachment'\n'read': 'space'\n'delete': 'page', 'blogpost', 'comment', 'attachment', 'space'\n'export': 'space'\n'administer': 'space'\n'archive': 'page'\n'restrict_content': 'space'\n```\n\nFor example, to enable Delete Own permission, set the `operation` object to the following:\n```\n\"operation\": {\n    \"key\": \"delete\",\n    \"target\": \"space\"\n}\n```\nTo enable Add/Delete Restrictions permissions, set the `operation` object to the following:\n```\n\"operation\": {\n    \"key\": \"restrict_content\",\n    \"target\": \"space\"\n}\n```",
  })
  .openapi('SpacePermissionV2')

const SpacePermissionRequestSchema = z
  .looseObject({
    subject: PermissionSubjectSchema,
    operation: z
      .object({
        key: z.enum([
          'administer',
          'archive',
          'copy',
          'create',
          'delete',
          'export',
          'move',
          'purge',
          'purge_version',
          'read',
          'restore',
          'restrict_content',
          'update',
          'use',
        ]),
        target: z
          .enum(['page', 'blogpost', 'comment', 'attachment', 'space'])
          .openapi({ description: 'The space or content type that the operation applies to.' }),
      })
      .openapi({ required: ['key', 'target'] }),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({
    required: ['subject', 'operation'],
    description:
      "This object represents the request for the single space permission. Permissions consist of\none operation object with an accompanying subjects object.\n\nThe following combinations of `operation.key` and `operation.target` values are\nvalid for the `operation` object:\n``` bash\n'create': 'page', 'blogpost', 'comment', 'attachment'\n'read': 'space'\n'delete': 'page', 'blogpost', 'comment', 'attachment', 'space'\n'export': 'space'\n'administer': 'space'\n'archive': 'page'\n'restrict_content': 'space'\n```\n\nFor example, to enable Delete Own permission, set the `operation` object to the following:\n```\n\"operation\": {\n    \"key\": \"delete\",\n    \"target\": \"space\"\n}\n```\nTo enable Add/Delete Restrictions permissions, set the `operation` object to the following:\n```\n\"operation\": {\n    \"key\": \"restrict_content\",\n    \"target\": \"space\"\n}\n```",
  })
  .openapi('SpacePermissionRequest')

const SpacePermissionCustomContentSchema = z
  .object({
    subject: PermissionSubjectSchema,
    operations: z.array(
      z
        .object({
          key: z.enum(['read', 'create', 'delete']).openapi({ description: 'The operation type' }),
          target: z.string().openapi({ description: 'The custom content type' }),
          access: z.boolean().openapi({ description: 'Grant or restrict access' }),
        })
        .openapi({ required: ['access', 'key', 'target'] }),
    ),
  })
  .openapi({
    required: ['operations', 'subject'],
    description:
      'This object represents a list of space permissions for custom content type for an individual user. Permissions consist of\na subjects object and a list with at least one operation object.',
  })
  .openapi('SpacePermissionCustomContent')

const ContentPermissionRequestSchema = z
  .object({
    subject: PermissionSubjectWithGroupIdSchema,
    operation: z
      .enum(['read', 'update', 'delete'])
      .openapi({ description: 'The content permission operation to check.' }),
  })
  .openapi({
    required: ['operation', 'subject'],
    description: 'This object represents the request for the content permission check API.',
  })
  .openapi('ContentPermissionRequest')

const PermissionCheckResponseSchema = z
  .object({
    hasPermission: z.boolean(),
    errors: z.array(MessageSchema).exactOptional(),
    _links: GenericLinksSchema.exactOptional(),
  })
  .openapi({
    required: ['hasPermission'],
    description:
      'This object represents the response for the content permission check API. If the user or group does not have\npermissions, the following errors may be returned:\n\n- Group does not have permission to the space\n- Group does not have permission to the content\n- User is not allowed to use Confluence\n- User does not have permission to the space\n- User does not have permission to the content\n- Anonymous users are not allowed to use Confluence\n- Anonymous user does not have permission to the space\n- Anonymous user does not have permission to the content',
  })
  .openapi('PermissionCheckResponse')

const ContentExpandParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'expand',
      in: 'query',
      description:
        "A multi-value parameter indicating which properties of the content to expand.\n\n- `childTypes.all` returns whether the content has attachments, comments, or child pages/whiteboards.\nUse this if you only need to check whether the content has children of a particular type.\n- `childTypes.attachment` returns whether the content has attachments.\n- `childTypes.comment` returns whether the content has comments.\n- `childTypes.page` returns whether the content has child pages.\n- `childTypes.whiteboard` returns whether the content has child whiteboards.\n- `childTypes.database` returns whether the content has child databases.\n- `childTypes.embed` returns whether the content has child embeds (smartlinks).\n- `childTypes.folder` returns whether the content has child folders.\n- `container` returns the space that the content is in. This is the same as the information\nreturned by [Get space](#api-space-spaceKey-get).\n- `metadata.currentuser` returns information about the current user in relation to the content,\nincluding when they last viewed it, modified it, contributed to it, or added it as a favorite.\n- `metadata.properties` returns content properties that have been set via the Confluence REST API.\n- `metadata.labels` returns the labels that have been added to the content.\n- `metadata.frontend` this property is only used by Atlassian.\n- `operations` returns the operations for the content, which are used when setting permissions.\n- `children.page` returns pages that are descendants at the level immediately below the content.\n- `children.whiteboard` returns whiteboards that are descendants at the level immediately below the content.\n- `children.database` returns databases that are descendants at the level immediately below the content.\n- `children.embed` returns embeds (smartlinks) that are descendants at the level immediately below the content.\n- `children.folder` returns folders that are descendants at the level immediately below the content.\n- `children.attachment` returns all attachments for the content.\n- `children.comment` returns all comments on the content.\n- `restrictions.read.restrictions.user` returns the users that have permission to read the content.\n- `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that\nthis may return deleted groups, because deleting a group doesn't remove associated restrictions.\n- `restrictions.update.restrictions.user` returns the users that have permission to update the content.\n- `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that\nthis may return deleted groups because deleting a group doesn't remove associated restrictions.\n- `history` returns the history of the content, including the date it was created.\n- `history.lastUpdated` returns information about the most recent update of the content, including\nwho updated it and when it was updated.\n- `history.previousVersion` returns information about the update prior to the current content update.\n- `history.contributors` returns all of the users who have contributed to the content.\n- `history.nextVersion` returns information about the update after to the current content update.\n- `ancestors` returns the parent content, if the content is a page or whiteboard.\n- `body` returns the body of the content in different formats, including the editor format,\nview format, and export format.\n- `body.storage` returns the body of content in storage format.\n- `body.view` returns the body of content in view format.\n- `version` returns information about the most recent update of the content, including who updated it\nand when it was updated.\n- `descendants.page` returns pages that are descendants at any level below the content.\n- `descendants.whiteboard` returns whiteboards that are descendants at any level below the content.\n- `descendants.database` returns databases that are descendants at any level below the content.\n- `descendants.embed` returns embeds (smartlinks) that are descendants at any level below the content.\n- `descendants.folder` returns folders that are descendants at any level below the content.\n- `descendants.attachment` returns all attachments for the content, same as `children.attachment`.\n- `descendants.comment` returns all comments on the content, same as `children.comment`.\n- `space` returns the space that the content is in. This is the same as the information returned by\n[Get space](#api-space-spaceKey-get).\n\nIn addition, the following comment-specific expansions can be used:\n- `extensions.inlineProperties` returns inline comment-specific properties.\n- `extensions.resolution` returns the resolution status of each comment.",
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
      required: false,
    },
  })

const BodyConversionExpandParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'expand',
      in: 'query',
      description:
        'A multi-value parameter indicating which properties of the content to expand and populate. Expands are dependent on the\n`to` conversion format and may be irrelevant for certain conversions (e.g. `macroRenderedOutput` is redundant when\nconverting to `view` format). \n\nIf rendering to `view` format, and the body content being converted includes arbitrary nested content (such as macros); then it is \nnecessary to include webresource expands in the request. Webresources for content body are the batched JS and CSS dependencies for\nany nested dynamic content (i.e. macros).\n\n- `embeddedContent` returns metadata for nested content (e.g. page included using page include macro)\n- `mediaToken` returns JWT token for retrieving attachment data from Media API\n- `macroRenderedOutput` additionally converts body to view format\n- `webresource.superbatch.uris.js` returns all common JS dependencies as static URLs\n- `webresource.superbatch.uris.css` returns all common CSS dependencies as static URLs\n- `webresource.superbatch.uris.all` returns all common dependencies as static URLs\n- `webresource.superbatch.tags.all` returns all common JS dependencies as html `<script>` tags\n- `webresource.superbatch.tags.css` returns all common CSS dependencies as html `<style>` tags\n- `webresource.superbatch.tags.js` returns all common dependencies as html `<script>` and `<style>` tags\n- `webresource.uris.js` returns JS dependencies specific to conversion\n- `webresource.uris.css` returns CSS dependencies specific to conversion\n- `webresource.uris.all` returns all dependencies specific to conversion     \n- `webresource.tags.all` returns common JS dependencies as html `<script>` tags\n- `webresource.tags.css` returns common CSS dependencies as html `<style>` tags\n- `webresource.tags.js` returns common dependencies as html `<script>` and `<style>` tags',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
      required: false,
    },
  })

const ContentExpandWithSubExpandLimitParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'expand',
      in: 'query',
      description:
        "A multi-value parameter indicating which properties of the content to expand.\nMaximum sub-expansions allowed is `8`.\n\n- `childTypes.all` returns whether the content has attachments, comments, or child pages/whiteboards.\nUse this if you only need to check whether the content has children of a particular type.\n- `childTypes.attachment` returns whether the content has attachments.\n- `childTypes.comment` returns whether the content has comments.\n- `childTypes.page` returns whether the content has child pages.\n- `childTypes.whiteboard` returns whether the content has child whiteboards.\n- `childTypes.database` returns whether the content has child databases.\n- `childTypes.embed` returns whether the content has child embeds (smartlinks).\n- `childTypes.folder` returns whether the content has child folder.\n- `container` returns the space that the content is in. This is the same as the information\nreturned by [Get space](#api-space-spaceKey-get).\n- `metadata.currentuser` returns information about the current user in relation to the content,\nincluding when they last viewed it, modified it, contributed to it, or added it as a favorite.\n- `metadata.properties` returns content properties that have been set via the Confluence REST API.\n- `metadata.labels` returns the labels that have been added to the content.\n- `metadata.frontend` this property is only used by Atlassian.\n- `operations` returns the operations for the content, which are used when setting permissions.\n- `children.page` returns pages that are descendants at the level immediately below the content.\n- `children.whiteboard` returns whiteboards that are descendants at the level immediately below the content.\n- `children.database` returns databases that are descendants at the level immediately below the content.\n- `children.embed` returns embeds (smartlinks) that are descendants at the level immediately below the content.\n- `children.folder` returns folders that are descendants at the level immediately below the content.\n- `children.attachment` returns all attachments for the content.\n- `children.comment` returns all comments on the content.\n- `restrictions.read.restrictions.user` returns the users that have permission to read the content.\n- `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that\nthis may return deleted groups, because deleting a group doesn't remove associated restrictions.\n- `restrictions.update.restrictions.user` returns the users that have permission to update the content.\n- `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that\nthis may return deleted groups because deleting a group doesn't remove associated restrictions.\n- `history` returns the history of the content, including the date it was created.\n- `history.lastUpdated` returns information about the most recent update of the content, including\nwho updated it and when it was updated.\n- `history.previousVersion` returns information about the update prior to the current content update.\n- `history.contributors` returns all of the users who have contributed to the content.\n- `history.nextVersion` returns information about the update after to the current content update.\n- `ancestors` returns the parent content, if the content is a page or whiteboard.\n- `body` returns the body of the content in different formats, including the editor format,\nview format, and export format.\n- `body.storage` returns the body of content in storage format.\n- `body.view` returns the body of content in view format.\n- `version` returns information about the most recent update of the content, including who updated it\nand when it was updated.\n- `descendants.page` returns pages that are descendants at any level below the content.\n- `descendants.whiteboard` returns whiteboards that are descendants at any level below the content.\n- `descendants.database` returns databases that are descendants at any level below the content.\n- `descendants.embed` returns embeds (smartlinks) that are descendants at any level below the content.\n- `descendants.folder` returns folders that are descendants at any level below the content.\n- `descendants.attachment` returns all attachments for the content, same as `children.attachment`.\n- `descendants.comment` returns all comments on the content, same as `children.comment`.\n- `space` returns the space that the content is in. This is the same as the information returned by\n[Get space](#api-space-spaceKey-get).\n\nIn addition, the following comment-specific expansions can be used:\n- `extensions.inlineProperties` returns inline comment-specific properties.\n- `extensions.resolution` returns the resolution status of each comment.",
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
      required: false,
    },
  })

const TemplateExpandParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['body', 'body.storage'])),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'expand',
      in: 'query',
      description:
        'A multi-value parameter indicating which properties of the template\nto expand.\n\n- `body` or `body.storage` returns the content of the template in storage format.',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string', enum: ['body', 'body.storage'] } },
      required: false,
    },
  })

const SpaceExpandParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(
      z.enum([
        'settings',
        'metadata',
        'metadata.labels',
        'operations',
        'lookAndFeel',
        'permissions',
        'icon',
        'description',
        'description.plain',
        'description.view',
        'theme',
        'homepage',
        'history',
      ]),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'expand',
      in: 'query',
      description:
        "A multi-value parameter indicating which properties of the spaces to\nexpand, where:\n\n  - `settings` returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).\n  - `metadata` returns the space metadata.\n  - `metadata.labels` returns the space labels, which are used to categorize the space.\n  - `operations` returns the operations for a space, which are used when setting permissions.\n  - `lookAndFeel` returns information about the look and feel of the space, including the color scheme.\n  - `permissions` returns the permissions for the space. Note that this may return permissions for deleted groups,\n  because deleting a group doesn't remove associated space permissions.\n  - `icon` returns information about space icon.\n  - `description` returns the description of the space.\n  - `description.plain` returns the description of the space, the plain format.\n  - `description.view` returns the description of the space, the view format.\n  - `theme` returns information about the space theme.\n  - `homepage` returns information about the space homepage.\n  - `history` returns information about the history of the space.",
      style: 'form',
      explode: false,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'settings',
            'metadata',
            'metadata.labels',
            'operations',
            'lookAndFeel',
            'permissions',
            'icon',
            'description',
            'description.plain',
            'description.view',
            'theme',
            'homepage',
            'history',
          ],
        },
      },
      required: false,
    },
  })

const UserLookupKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'key',
      in: 'query',
      deprecated: true,
      description:
        'This parameter is no longer available and will be removed from the documentation soon.\nUse `accountId` instead.\nSee the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserLookupUsernameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'username',
      in: 'query',
      deprecated: true,
      description:
        'This parameter is no longer available and will be removed from the documentation soon.\nUse `accountId` instead.\nSee the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserLookupAccountIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'accountId',
      in: 'query',
      description:
        'The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.\nFor example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.',
      schema: { type: 'string' },
      required: false,
    },
  })

const BasicAuthSecurityScheme = {
  type: 'http',
  description: 'You can access this resource via basic auth.',
  scheme: 'basic',
}

const OAuthDefinitionsSecurityScheme = {
  type: 'oauth2',
  description: 'This API uses OAuth 2 with the authorizationCode grant flow.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.atlassian.com/authorize',
      tokenUrl: 'https://auth.atlassian.com/oauth/token',
      scopes: {
        'read:confluence-content.all':
          'Read all content, including content body (expansions permitted). Note, APIs using this scope may also return data allowed by read:confluence-space.summary. However, this scope is not a substitute for read:confluence-space.summary.',
        'read:confluence-content.permission': 'Read content permissions.',
        'read:confluence-content.summary':
          'Read a summary of the content, which is the content without expansions. Note, APIs using this scope may also return data allowed by read:confluence-space.summary. However, this scope is not a substitute for read:confluence-space.summary.',
        'write:confluence-content': 'Permits the creation of pages, blogs, comments and questions.',
        'read:confluence-space.summary': 'Read a summary of space information without expansions.',
        'write:confluence-space': 'Create, update and delete space information.',
        'write:confluence-file': 'Upload attachments.',
        'read:confluence-props': 'Read content properties.',
        'write:confluence-props': 'Write content properties.',
        'search:confluence':
          'Search Confluence. Note, APIs using this scope may also return data allowed by read:confluence-space.summary and read:confluence-content.summary. However, this scope is not a substitute for read:confluence-space.summary or read:confluence-content.summary.',
        'manage:confluence-configuration': 'Manage global settings.',
        'read:confluence-groups': 'Read user groups.',
        'write:confluence-groups': 'Create, remove and update user groups.',
        'read:confluence-user': 'Read users.',
        'readonly:content.attachment:confluence':
          'Download attachments of a Confluence page or blogpost that you have access to.',
        'read:content:confluence': 'View content.',
        'read:content-details:confluence': 'View content details.',
        'write:content:confluence': 'Create and update content.',
        'delete:content:confluence': 'Delete content.',
        'read:space-details:confluence': 'View space details.',
        'read:analytics.content:confluence': 'View analytics for content.',
        'read:audit-log:confluence': 'View audit records.',
        'write:audit-log:confluence': 'Create audit records.',
        'read:configuration:confluence': 'View Confluence settings.',
        'write:configuration:confluence': 'Update Confluence settings.',
        'read:page:confluence': 'View pages.',
        'write:page:confluence': 'Create and update pages.',
        'delete:page:confluence': 'Delete pages.',
        'read:blogpost:confluence': 'View blogposts.',
        'write:blogpost:confluence': 'Create and update blogposts.',
        'delete:blogpost:confluence': 'Delete blogposts.',
        'read:whiteboard:confluence': 'View whiteboards.',
        'write:whiteboard:confluence': 'Create and update whiteboards.',
        'delete:whiteboard:confluence': 'Delete whiteboards.',
        'read:custom-content:confluence': 'View custom content.',
        'write:custom-content:confluence': 'Create and update custom content.',
        'delete:custom-content:confluence': 'Delete custom content.',
        'read:attachment:confluence': 'View and download content attachments.',
        'write:attachment:confluence': 'Create and update attachments.',
        'delete:attachment:confluence': 'Delete attachments.',
        'read:comment:confluence': 'View comments.',
        'write:comment:confluence': 'Create and update comments.',
        'delete:comment:confluence': 'Delete comments.',
        'read:template:confluence': 'View content templates.',
        'write:template:confluence': 'Create, update and delete content templates.',
        'read:label:confluence': 'View labels.',
        'write:label:confluence': 'Add and remove labels.',
        'read:content.permission:confluence': 'Check content permissions.',
        'read:content.property:confluence': 'View content properties.',
        'write:content.property:confluence': 'Create, update and delete content properties.',
        'read:content.restriction:confluence': 'View content restrictions.',
        'write:content.restriction:confluence': 'Update content restrictions.',
        'read:content.metadata:confluence': 'View content summaries.',
        'read:watcher:confluence': 'View content watchers.',
        'write:watcher:confluence': 'Add and remove content watchers.',
        'read:group:confluence': 'View groups.',
        'write:group:confluence': 'Create and delete groups.',
        'read:inlinetask:confluence': 'View tasks.',
        'write:inlinetask:confluence': 'Update tasks.',
        'read:relation:confluence': 'View entity relationships.',
        'write:relation:confluence': 'Create and update entity relationships.',
        'read:space:confluence': 'View spaces.',
        'write:space:confluence': 'Create and update spaces.',
        'delete:space:confluence': 'Delete spaces.',
        'read:space.permission:confluence': 'View space permissions.',
        'write:space.permission:confluence': 'Update space permissions.',
        'read:space.property:confluence': 'View space properties.',
        'write:space.property:confluence': 'Create, update and delete space properties.',
        'read:user.property:confluence': 'View user properties.',
        'write:user.property:confluence': 'Create, update and delete user properties.',
        'read:space.setting:confluence': 'View space settings.',
        'write:space.setting:confluence': 'Update space settings.',
        'read:user:confluence': 'View user details.',
        'moderate:core-content:confluence': 'Moderate core contents',
        'moderate:comment:confluence': 'Moderate comments',
        'read:email-address:confluence':
          'View email addresses of all users regardless of the user’s profile visibility settings.',
      },
    },
  },
}

export const getWikiRestApiAuditRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/audit',
  tags: ['Audit'],
  summary: 'Get audit records',
  description:
    "Returns all records in the audit log, optionally for a certain date range.\nThis contains information about events like space exports, group membership\nchanges, app installations, etc. For more information, see\n[Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html)\nin the Confluence administrator's guide.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission.",
  operationId: 'getAuditRecords',
  request: {
    query: z.object({
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description:
              'Filters the results to the records on or after the `startDate`.\nThe `startDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description:
              'Filters the results to the records on or before the `endDate`.\nThe `endDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'searchString',
            in: 'query',
            description:
              'Filters the results to records that have string property values\nmatching the `searchString`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned records.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of records to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 1000 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested records are returned.',
      content: { 'application/json': { schema: AuditRecordArraySchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description: 'Returned if the calling user does not have permission to view the audit\nlog.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:audit-log:confluence'] }],
})

export const postWikiRestApiAuditRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/audit',
  tags: ['Audit'],
  summary: 'Create audit record',
  description:
    "Creates a record in the audit log.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission.",
  operationId: 'createAuditRecord',
  request: {
    body: {
      description: 'The record to be created in the audit log.',
      content: { 'application/json': { schema: AuditRecordCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the record is created in the audit log.',
      content: { 'application/json': { schema: AuditRecordSchema } },
    },
    400: { description: 'Returned if the `remoteAddress` property is not specified.', content: {} },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
  },
  security: [
    { basicAuth: [] },
    { oAuthDefinitions: ['read:audit-log:confluence', 'write:audit-log:confluence'] },
  ],
})

export const getWikiRestApiAuditExportRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/audit/export',
  tags: ['Audit'],
  summary: 'Export audit records',
  description:
    "Exports audit records as a CSV file or ZIP file.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission.",
  operationId: 'exportAuditRecords',
  request: {
    query: z.object({
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description:
              'Filters the exported results to the records on or after the `startDate`.\nThe `startDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description:
              'Filters the exported results to the records on or before the `endDate`.\nThe `endDate` must be specified as [epoch time](https://www.epochconverter.com/) in milliseconds.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'searchString',
            in: 'query',
            description:
              'Filters the exported results to records that have string property values\nmatching the `searchString`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['csv', 'zip'])
        .default('csv')
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            description: 'The format of the export file for the audit records.',
            schema: { type: 'string', default: 'csv', enum: ['csv', 'zip'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested export of the audit records is returned.',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view the audit\nlog.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:audit-log:confluence'] }],
})

export const getWikiRestApiAuditRetentionRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/audit/retention',
  tags: ['Audit'],
  summary: 'Get retention period',
  description:
    "Returns the retention period for records in the audit log. The retention\nperiod is how long an audit record is kept for, from creation date until\nit is deleted.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission.",
  operationId: 'getRetentionPeriod',
  responses: {
    200: {
      description: 'Returned if the requested retention period is returned.',
      content: { 'application/json': { schema: RetentionPeriodSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view the audit\nlog.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:audit-log:confluence'] }],
})

export const putWikiRestApiAuditRetentionRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/audit/retention',
  tags: ['Audit'],
  summary: 'Set retention period',
  description:
    "Sets the retention period for records in the audit log. The retention period\ncan be set to a maximum of 1 year.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission.",
  operationId: 'setRetentionPeriod',
  request: {
    body: {
      description: 'The updated retention period.',
      content: { 'application/json': { schema: RetentionPeriodSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the retention period is updated.',
      content: { 'application/json': { schema: RetentionPeriodSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view the audit\nlog.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:audit-log:confluence'] }],
})

export const getWikiRestApiAuditSinceRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/audit/since',
  tags: ['Audit'],
  summary: 'Get audit records for time period',
  description:
    "Returns records from the audit log, for a time period back from the current\ndate. For example, you can use this method to get the last 3 months of records.\n\nThis contains information about events like space exports, group membership\nchanges, app installations, etc. For more information, see\n[Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html)\nin the Confluence administrator's guide.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission.",
  operationId: 'getAuditRecordsForTimePeriod',
  request: {
    query: z.object({
      number: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(3n)
        .exactOptional()
        .openapi({
          param: {
            name: 'number',
            in: 'query',
            description: 'The number of units for the time period.',
            schema: { type: 'integer', format: 'int64', default: 3 },
            required: false,
          },
        }),
      units: z
        .enum([
          'NANOS',
          'MICROS',
          'MILLIS',
          'SECONDS',
          'MINUTES',
          'HOURS',
          'HALF_DAYS',
          'DAYS',
          'WEEKS',
          'MONTHS',
          'YEARS',
          'DECADES',
          'CENTURIES',
        ])
        .default('MONTHS')
        .exactOptional()
        .openapi({
          param: {
            name: 'units',
            in: 'query',
            description: 'The unit of time that the time period is measured in.',
            schema: {
              type: 'string',
              default: 'MONTHS',
              enum: [
                'NANOS',
                'MICROS',
                'MILLIS',
                'SECONDS',
                'MINUTES',
                'HOURS',
                'HALF_DAYS',
                'DAYS',
                'WEEKS',
                'MONTHS',
                'YEARS',
                'DECADES',
                'CENTURIES',
              ],
            },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'searchString',
            in: 'query',
            description:
              'Filters the results to records that have string property values\nmatching the `searchString`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned records.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of records to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 1000 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested records are returned.',
      content: { 'application/json': { schema: AuditRecordArraySchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view the audit\nlog.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:audit-log:confluence'] }],
})

export const postWikiRestApiContentArchiveRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/archive',
  tags: ['Content'],
  summary: 'Archive pages',
  description:
    "Archives a list of pages. The pages to be archived are specified as a list of content IDs.\nThis API accepts the archival request and returns a task ID.\nThe archival process happens asynchronously.\nUse the /longtask/<taskId> REST API to get the copy task status.\n\nEach content ID needs to resolve to page objects that are not already in an archived state.\nThe content IDs need not belong to the same space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Archive' permission for each of the pages in the corresponding space it belongs to.",
  operationId: 'archivePages',
  request: {
    body: {
      description: 'The pages to be archived.',
      content: {
        'application/json': {
          schema: z
            .object({
              pages: z
                .array(
                  z
                    .object({
                      id: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          description: 'The `id` of the page to be archived.',
                        }),
                    })
                    .openapi({ required: ['id'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Returned if the archive request has been submitted.',
      content: { 'application/json': { schema: LongTaskSchema } },
    },
    400: {
      description:
        'Returned if:\n- there is an archival job already running for the tenant.\n- the number of pages to archive is larger than the limit of 300.\n- any of the content IDs specified in the array do not resolve to pages.\n- any of the specified pages are already archived.\n- the request is coming from a free edition tenant.\n- the request is coming from a non premium edition tenant with more than 1 page ID\n  in the archive request.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const putWikiRestApiContentBlueprintInstanceDraftIdRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/blueprint/instance/{draftId}',
  tags: ['Content'],
  summary: 'Publish shared draft',
  description:
    "Publishes a shared draft of a page created from a blueprint.\n\nBy default, the following objects are expanded: `body.storage`, `history`, `space`, `version`, `ancestors`.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the draft and 'Add' permission for the space that\nthe content will be created in.",
  operationId: 'publishSharedDraft',
  request: {
    params: z.object({
      draftId: z
        .string()
        .openapi({
          param: {
            name: 'draftId',
            in: 'path',
            description:
              'The ID of the draft page that was created from a blueprint.\nYou can find the `draftId` in the Confluence application by\nopening the draft page and checking the page URL.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .string()
        .default('draft')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              "The status of the content to be updated, i.e. the draft. This is set\nto 'draft' by default, so you shouldn't need to specify it.",
            schema: { type: 'string', default: 'draft' },
            required: false,
          },
        }),
      expand: ContentExpandParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: ContentBlueprintDraftSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the draft was successfully published.',
      content: { 'application/json': { schema: ContentSchema } },
    },
    400: {
      description: 'Returned if a title is not specified or a page with the\ntitle already exists.',
      content: {},
    },
    409: { description: 'Returned if the version is not set to 1.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const postWikiRestApiContentBlueprintInstanceDraftIdRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/blueprint/instance/{draftId}',
  tags: ['Content'],
  summary: 'Publish legacy draft',
  description:
    "Publishes a legacy draft of a page created from a blueprint. Legacy drafts\nwill eventually be removed in favor of shared drafts. For now, this method\nworks the same as [Publish shared draft](#api-content-blueprint-instance-draftId-put).\n\nBy default, the following objects are expanded: `body.storage`, `history`, `space`, `version`, `ancestors`.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the draft and 'Add' permission for the space that\nthe content will be created in.",
  operationId: 'publishLegacyDraft',
  request: {
    params: z.object({
      draftId: z
        .string()
        .openapi({
          param: {
            name: 'draftId',
            in: 'path',
            description:
              'The ID of the draft page that was created from a blueprint.\nYou can find the `draftId` in the Confluence application by\nopening the draft page and checking the page URL.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .string()
        .default('draft')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              "The status of the content to be updated, i.e. the draft. This is set\nto 'draft' by default, so you shouldn't need to specify it.",
            schema: { type: 'string', default: 'draft' },
            required: false,
          },
        }),
      expand: ContentExpandParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: ContentBlueprintDraftSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the draft was successfully published.',
      content: { 'application/json': { schema: ContentSchema } },
    },
    400: {
      description: 'Returned if a title is not specified or a page with the\ntitle already exists.',
      content: {},
    },
    409: { description: 'Returned if the version is not set to 1.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiContentSearchRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/search',
  tags: ['Content'],
  summary: 'Search content by CQL',
  description:
    'Returns the list of content that matches a Confluence Query Language\n(CQL) query. For information on CQL, see:\n[Advanced searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).\n\nExample initial call:\n```\n/wiki/rest/api/content/search?cql=type=page&limit=25\n```\n\nExample response:\n```\n{\n  "results": [\n    { ... },\n    { ... },\n    ...\n    { ... }\n  ],\n  "limit": 25,\n  "size": 25,\n  ...\n  "_links": {\n    "base": "<url>",\n    "context": "<url>",\n    "next": "/rest/api/content/search?cql=type=page&limit=25&cursor=raNDoMsTRiNg",\n    "self": "<url>"\n  }\n}\n```\n\nWhen additional results are available, returns `next` and `prev` URLs to retrieve them in subsequent calls. The URLs each contain a cursor that points to the appropriate set of results. Use `limit` to specify the number of results returned in each call.\nExample subsequent call (taken from example response):\n```\n/wiki/rest/api/content/search?cql=type=page&limit=25&cursor=raNDoMsTRiNg\n```\nThe response to this will have a `prev` URL similar to the `next` in the example response.\n\nIf the expand query parameter is used with the `body.export_view` and/or `body.styled_view` properties, then the query limit parameter will be restricted to a maximum value of 25.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site (\'Can use\' global permission).\nOnly content that the user has permission to view will be returned.',
  operationId: 'searchContentByCQL',
  request: {
    query: z.object({
      cql: z
        .string()
        .openapi({
          param: {
            name: 'cql',
            in: 'query',
            description: 'The CQL string that is used to find the requested content.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cqlcontext: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cqlcontext',
            in: 'query',
            description:
              'The space, content, and content status to execute the search against.\nSpecify this as an object with the following properties:\n\n- `spaceKey` Key of the space to search against. Optional.\n- `contentId` ID of the content to search against. Optional. Must\nbe in the space spacified by `spaceKey`.\n- `contentStatuses` Content statuses to search against. Optional.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: ContentExpandParamsSchema,
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'Pointer to a set of search results, returned as part of the `next` or `prev` URL from the previous search call.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of content objects to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested list of content is returned.',
      content: { 'application/json': { schema: ContentArraySchema } },
    },
    400: { description: 'Returned if the CQL is invalid or missing.', content: {} },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['search:confluence'] }],
})

export const deleteWikiRestApiContentIdPageTreeRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/pageTree',
  tags: ['Experimental'],
  summary: 'Delete page tree',
  description:
    'Moves a pagetree rooted at a page to the space\'s trash:\n\n- If the content\'s type is `page` and its status is `current`, it will be trashed including\nall its descendants.\n- For every other combination of content type and status, this API is not supported.\n\nThis API accepts the pageTree delete request and returns a task ID.\nThe delete process happens asynchronously.\n\n Response example:\n <pre><code>\n {\n      "id" : "1180606",\n      "links" : {\n           "status" : "/rest/api/longtask/1180606"\n      }\n }\n </code></pre>\n Use the `/longtask/<taskId>` REST API to get the copy task status.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n\'Delete\' permission for the space that the content is in.',
  operationId: 'deletePageTree',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content which forms root of the page tree, to be deleted.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        'Returned if the request to trash content and all its current page descendants, is successfully accepted.',
      content: { 'application/json': { schema: LongTaskSchema } },
    },
    400: {
      description:
        "Returned if the content id is invalid or id does not represents a 'CURRENT' page.",
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description: 'Returned if the calling user can not delete the content with specified id.',
      content: {},
    },
    404: {
      description:
        "Returned if;\n\n- There is no content with the given ID.\n- The requesting user does not have permission to trash the content or any of it's descendant pages.",
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const putWikiRestApiContentPageIdMovePositionTargetIdRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/{pageId}/move/{position}/{targetId}',
  tags: ['Content - children and descendants'],
  summary: 'Move a page to a new location relative to a target page',
  description:
    'Move a page to a new location relative to a target page:\n\n* `before` - move the page under the same parent as the target, before the target in the list of children\n* `after` - move the page under the same parent as the target, after the target in the list of children\n* `append` - move the page to be a child of the target\n\nCaution: This API can move pages to the top level of a space. Top-level pages are difficult to find in the UI\nbecause they do not show up in the page tree display. To avoid this, never use `before` or `after` positions\nwhen the `targetId` is a top-level page.',
  operationId: 'movePage',
  request: {
    params: z.object({
      pageId: z
        .string()
        .openapi({
          param: {
            name: 'pageId',
            in: 'path',
            description: 'The ID of the page to be moved',
            required: true,
            schema: { type: 'string' },
          },
        }),
      position: z
        .enum(['before', 'after', 'append'])
        .openapi({
          param: {
            name: 'position',
            in: 'path',
            description:
              'The position to move the page to relative to the target page:\n* `before` - move the page under the same parent as the target, before the target in the list of children\n* `after` - move the page under the same parent as the target, after the target in the list of children\n* `append` - move the page to be a child of the target',
            required: true,
            schema: { type: 'string', enum: ['before', 'after', 'append'] },
          },
        }),
      targetId: z
        .string()
        .openapi({
          param: {
            name: 'targetId',
            in: 'path',
            description: 'The ID of the target page for this operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Page was successfully moved',
      content: {
        'application/json': {
          schema: z.object({ pageId: ContentIdSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Returned if;\n\n- A page already exists in the target space with the same name.\n  User is advised to rename page before moving.\n- The move would create a parent-child loop (page becomes a descendant and ancestor of itself)\n- The page has permission restrictions that the user does not have permission to create in the target space.\n  User is advised to remove restrictions before moving.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- User does not have permission to remove page from current space\n- User does not have permission to create a page in target space',
      content: {},
    },
    404: {
      description: 'Returned if;\n\n- The id or targetId refer to non-existent pages',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const putWikiRestApiContentIdChildAttachmentRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/{id}/child/attachment',
  tags: ['Content - attachments'],
  summary: 'Create or update attachment',
  description:
    "Adds an attachment to a piece of content. If the attachment already exists\nfor the content, then the attachment is updated (i.e. a new version of the\nattachment is created).\n\nNote, you must set a `X-Atlassian-Token: nocheck` header on the request\nfor this method, otherwise it will be blocked. This protects against XSRF\nattacks, which is necessary as this method accepts multipart/form-data.\n\nThe media type 'multipart/form-data' is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt).\nMost client libraries have classes that make it easier to implement\nmultipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/)\nJava class provided by Apache HTTP Components.\n\nNote, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5),\nin the case where the form data is text,\nthe charset parameter for the \"text/plain\" Content-Type may be used to\nindicate the character encoding used in that part. In the case of this\nAPI endpoint, the `comment` body parameter should be sent with `type=text/plain`\nand `charset=utf-8` values. This will force the charset to be UTF-8.\n\nExample: This curl command attaches a file ('example.txt') to a piece of\ncontent (id='123') with a comment and `minorEdits`=true. If the 'example.txt'\nfile already exists, it will update it with a new version of the attachment.\n\n``` bash\ncurl -D- \\\n  -u admin:admin \\\n  -X PUT \\\n  -H 'X-Atlassian-Token: nocheck' \\\n  -F 'file=@\"example.txt\"' \\\n  -F 'minorEdit=\"true\"' \\\n  -F 'comment=\"Example attachment comment\"; type=text/plain; charset=utf-8' \\\n  http://myhost/rest/api/content/123/child/attachment\n```\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.",
  operationId: 'createOrUpdateAttachments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to add the attachment to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['current', 'draft'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              "The status of the content that the attachment is being added to.\nThis should always be set to 'current'.",
            schema: { type: 'string', default: 'current', enum: ['current', 'draft'] },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The relative location and name of the attachment to be added to\nthe content.',
                }),
              comment: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "The comment for the attachment that is being added.\nIf you specify a comment, then every file must have a comment and\nthe comments must be in the same order as the files. Alternatively,\ndon't specify any comments.",
                }),
              minorEdit: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "If `minorEdits` is set to 'true', no notification email or activity stream\nwill be generated when the attachment is added to the content.",
                }),
            })
            .openapi({ required: ['file', 'minorEdit'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the attachments were added to the content.',
      content: { 'application/json': { schema: ContentArraySchema } },
    },
    403: {
      description:
        'Returned if;\n\n- Attachments are disabled.\n- The calling user does not have permission to add attachments to the\ncontent.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- The requested content is not found.\n- The user does not have permission to view it.\n- The attachment exceeds the maximum configured attachment size.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-file'] }],
})

export const postWikiRestApiContentIdChildAttachmentRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/child/attachment',
  tags: ['Content - attachments'],
  summary: 'Create attachment',
  description:
    "Adds an attachment to a piece of content. This method only adds a new\nattachment. If you want to update an existing attachment, use\n[Create or update attachments](#api-content-id-child-attachment-put).\n\nNote, you must set a `X-Atlassian-Token: nocheck` header on the request\nfor this method, otherwise it will be blocked. This protects against XSRF\nattacks, which is necessary as this method accepts multipart/form-data.\n\nThe media type 'multipart/form-data' is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt).\nMost client libraries have classes that make it easier to implement\nmultipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/)\nJava class provided by Apache HTTP Components.\n\nNote, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5),\nin the case where the form data is text,\nthe charset parameter for the \"text/plain\" Content-Type may be used to\nindicate the character encoding used in that part. In the case of this\nAPI endpoint, the `comment` body parameter should be sent with `type=text/plain`\nand `charset=utf-8` values. This will force the charset to be UTF-8.\n\nExample: This curl command attaches a file ('example.txt') to a container\n(id='123') with a comment and `minorEdits`=true.\n\n``` bash\ncurl -D- \\\n  -u admin:admin \\\n  -X POST \\\n  -H 'X-Atlassian-Token: nocheck' \\\n  -F 'file=@\"example.txt\"' \\\n  -F 'minorEdit=\"true\"' \\\n  -F 'comment=\"Example attachment comment\"; type=text/plain; charset=utf-8' \\\n  https://myhost/wiki/rest/api/content/123/child/attachment\n```\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.",
  operationId: 'createAttachment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to add the attachment to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['current', 'draft'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'The status of the content that the attachment is being added to.',
            schema: { type: 'string', default: 'current', enum: ['current', 'draft'] },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The relative location and name of the attachment to be added to\nthe content.',
                }),
              comment: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "The comment for the attachment that is being added.\nIf you specify a comment, then every file must have a comment and\nthe comments must be in the same order as the files. Alternatively,\ndon't specify any comments.",
                }),
              minorEdit: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "If `minorEdits` is set to 'true', no notification email or activity stream\nwill be generated when the attachment is added to the content.",
                }),
            })
            .openapi({ required: ['file', 'minorEdit'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the attachments were added to the content.',
      content: { 'application/json': { schema: ContentArraySchema } },
    },
    400: {
      description: 'Returned if the content already has an attachment with the same filename.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- Attachments are disabled in Confluence.\n- The calling user does not have permission to add attachments to the\ncontent.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- The requested content is not found.\n- The user does not have permission to view it\n- The attachment exceeds the maximum configured attachment size.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-file'] }],
})

export const putWikiRestApiContentIdChildAttachmentAttachmentIdRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/{id}/child/attachment/{attachmentId}',
  tags: ['Content - attachments'],
  summary: 'Update attachment properties',
  description:
    'Updates the attachment properties, i.e. the non-binary data of an attachment\nlike the filename, media-type, comment, and parent container.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'updateAttachmentProperties',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the attachment is attached to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .string()
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            description: 'The ID of the attachment to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The details of the attachment to be updated.',
      content: { 'application/json': { schema: AttachmentPropertiesUpdateBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the attachment is updated.',
      content: { 'application/json': { schema: ContentSchema } },
    },
    400: {
      description:
        'Returned if;\n\n- The attachment id is invalid.\n- The attachment version number is invalid.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The calling user is not permitted to update or move the attachment.\n- The attachment is being moved to an invalid content type.',
      content: {},
    },
    404: { description: 'Returned if no attachment is found for the attachment ID.', content: {} },
    409: {
      description:
        'Returned if the version of the supplied attachment does not match\nthe version of the attachment stored in the database.',
      content: {},
    },
  },
  security: [
    { basicAuth: [] },
    { oAuthDefinitions: ['write:confluence-file', 'write:confluence-props'] },
  ],
})

export const postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/child/attachment/{attachmentId}/data',
  tags: ['Content - attachments'],
  summary: 'Update attachment data',
  description:
    "Updates the binary data of an attachment, given the attachment ID, and\noptionally the comment and the minor edit field.\n\nThis method is essentially the same as [Create or update attachments](#api-content-id-child-attachment-put),\nexcept that it matches the attachment ID rather than the name.\n\nNote, you must set a `X-Atlassian-Token: nocheck` header on the request\nfor this method, otherwise it will be blocked. This protects against XSRF\nattacks, which is necessary as this method accepts multipart/form-data.\n\nThe media type 'multipart/form-data' is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt).\nMost client libraries have classes that make it easier to implement\nmultipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/)\nJava class provided by Apache HTTP Components.\n\nNote, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5),\nin the case where the form data is text,\nthe charset parameter for the \"text/plain\" Content-Type may be used to\nindicate the character encoding used in that part. In the case of this\nAPI endpoint, the `comment` body parameter should be sent with `type=text/plain`\nand `charset=utf-8` values. This will force the charset to be UTF-8.\n\nExample: This curl command updates an attachment (id='att456') that is attached\nto a piece of content (id='123') with a comment and `minorEdits`=true.\n\n``` bash\ncurl -D- \\\n  -u admin:admin \\\n  -X POST \\\n  -H 'X-Atlassian-Token: nocheck' \\\n  -F 'file=@\"example.txt\"' \\\n  -F 'minorEdit=\"true\"' \\\n  -F 'comment=\"Example attachment comment\"; type=text/plain; charset=utf-8' \\\n  http://myhost/rest/api/content/123/child/attachment/att456/data\n```\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.",
  operationId: 'updateAttachmentData',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the attachment is attached to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .string()
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            description: 'The ID of the attachment to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The relative location and name of the attachment to be added to\nthe content.',
                }),
              comment: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "The comment for the attachment that is being added.\nIf you specify a comment, then every file must have a comment and\nthe comments must be in the same order as the files. Alternatively,\ndon't specify any comments.",
                }),
              minorEdit: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "If `minorEdits` is set to 'true', no notification email or activity stream\nwill be generated when the attachment is added to the content.",
                }),
            })
            .openapi({ required: ['file', 'minorEdit'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the attachment is updated.',
      content: { 'application/json': { schema: ContentSchema } },
    },
    400: { description: 'Returned if the attachment id is invalid.', content: {} },
    404: { description: 'Returned if no attachment is found for the attachment ID.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-file'] }],
})

export const getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/child/attachment/{attachmentId}/download',
  tags: ['Content - attachments'],
  summary: 'Get URI to download attachment',
  description: "Redirects the client to a URL that serves an attachment's binary data.",
  operationId: 'downloadAttatchment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the attachment is attached to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .string()
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            description: 'The ID of the attachment to download.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
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
            name: 'version',
            in: 'query',
            description:
              'The version of the attachment. If this parameter is absent, the redirect URI will download the latest version of the attachment.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'The statuses allowed on the retrieved attachment. If this parameter is absent, it will default to `current`.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    302: { description: 'Returned if download URL is found.' },
    400: {
      description:
        "Returned if version number is greater than attachment's latest version number or an invalid value.",
    },
    401: { description: 'Returned if there are authentication issues in request.' },
    404: {
      description:
        'Returned if;\n\n- No content is found with the specified content ID.\n- The specified content does not contain an attachment with the specified attachment ID.\n- The calling user does not have permission to view the attachment.',
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['readonly:content.attachment:confluence'] }],
})

export const getWikiRestApiContentIdDescendantRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/descendant',
  tags: ['Content - children and descendants'],
  summary: 'Get content descendants',
  description:
    "Returns a map of the descendants of a piece of content. This is similar\nto [Get content children](#api-content-id-child-get), except that this\nmethod returns child pages at all levels, rather than just the direct\nchild pages.\n\nA piece of content has different types of descendants, depending on its type:\n\n- `page`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `whiteboard`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `database`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `embed`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `folder`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `blogpost`: descendant is `comment`, `attachment`\n- `attachment`: descendant is `comment`\n- `comment`: descendant is `attachment`\n\nThe map will always include all descendant types that are valid for the content.\nHowever, if the content has no instances of a descendant type, the map will\ncontain an empty array for that descendant type.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space, and permission to view the content if it\nis a page.",
  operationId: 'getContentDescendants',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its descendants.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['attachment', 'comment', 'page'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the children to\nexpand, where:\n\n- `attachment` returns all attachments for the content.\n- `comments` returns all comments for the content.\n- `page` returns all child pages of the content.\n- `whiteboard` returns all child whiteboards of the content.\n- `database` returns all child databases of the content.\n- `embed` returns all child embeds of the content.\n- `folder` returns all child folders of the content.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['attachment', 'comment', 'page'] },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested descendants are returned.',
      content: { 'application/json': { schema: ContentChildrenSchema } },
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  deprecated: true,
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiContentIdDescendantTypeRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/descendant/{type}',
  tags: ['Content - children and descendants'],
  summary: 'Get content descendants by type',
  description:
    "Returns all descendants of a given type, for a piece of content. This is\nsimilar to [Get content children by type](#api-content-id-child-type-get),\nexcept that this method returns child pages at all levels, rather than just\nthe direct child pages.\n\nA piece of content has different types of descendants, depending on its type:\n\n- `page`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `whiteboard`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `database`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `embed`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `folder`: descendant is `page`, `whiteboard`, `database`, `embed`, `folder`, `comment`, `attachment`\n- `blogpost`: descendant is `comment`, `attachment`\n- `attachment`: descendant is `comment`\n- `comment`: descendant is `attachment`\n\nCustom content types that are provided by apps can also be returned.\n\nIf the expand query parameter is used with the `body.export_view` and/or `body.styled_view` properties, then the query limit parameter will be restricted to a maximum value of 25.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space, and permission to view the content if it\nis a page.",
  operationId: 'getDescendantsOfType',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its descendants.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['page', 'comment', 'attachment'])
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'The type of descendants to return.',
            required: true,
            schema: { type: 'string', enum: ['page', 'comment', 'attachment'] },
          },
        }),
    }),
    query: z.object({
      depth: z
        .enum(['all', 'root', '<any positive integer argument in the range of 1 and 100>'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'depth',
            in: 'query',
            description:
              'Filter the results to descendants upto a desired level of the content. Note, the maximum value supported is 100. root level of the content means immediate (level 1) descendants of the type requested. all represents returning all descendants of the type requested.',
            schema: {
              type: 'string',
              default: 'all',
              enum: ['all', 'root', '<any positive integer argument in the range of 1 and 100>'],
            },
            required: false,
          },
        }),
      expand: ContentExpandParamsSchema,
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned content.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of content to return per page. Note,\nthis may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested content is returned.',
      content: { 'application/json': { schema: ContentArraySchema } },
    },
    400: {
      description:
        'Returned if;\n\n- Any of the required request params are missing.\n- The request is invalid such as negative start param, a format besides int32 for limit etc.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  deprecated: true,
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}',
  tags: ['Content - macro body'],
  summary: 'Get macro body by macro ID',
  description:
    'Returns the body of a macro in storage format, for the given macro ID.\nThis includes information like the name of the macro, the body of the macro,\nand any macro parameters. This method is mainly used by Cloud apps.\n\nAbout the macro ID: When a macro is created in a new version of content,\nConfluence will generate a random ID for it, unless an ID is specified\n(by an app). The macro ID will look similar to this: \'50884bd9-0cb8-41d5-98be-f80943c14f96\'.\nThe ID is then persisted as new versions of content are created, and is\nonly modified by Confluence if there are conflicting IDs.\n\nFor Forge macros, the value for macro ID is the "local ID" of that particular ADF node.\nThis value can be retrieved either client-side by calling view.getContext() and accessing "localId"\non the resulting object, or server-side by examining the "local-id" parameter node inside the "parameters" node.\n\nNote that there are other attributes named "local-id", but only this particular one is used to store the macro ID.\n\nExample:\n<ac:adf-node type="extension">\n  <ac:adf-attribute key="extension-type">com.atlassian.ecosystem</ac:adf-attribute>\n  <ac:adf-attribute key="parameters">\n      <ac:adf-parameter key="local-id">e9c4aa10-73fa-417c-888d-48c719ae4165</ac:adf-parameter>\n  </ac:adf-parameter>\n</ac:adf-node>\n\nNote, to preserve backwards compatibility this resource will also match on\nthe hash of the macro body, even if a macro ID is found. This check will\neventually become redundant, as macro IDs are generated for pages and\ntransparently propagate out to all instances.\n\nThis backwards compatibility logic does not apply to Forge macros; those\ncan only be retrieved by their ID.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content that the macro is in.',
  operationId: 'getMacroBodyByMacroId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID for the content that contains the macro.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
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
            name: 'version',
            in: 'path',
            description:
              'The version of the content that contains the macro. Specifying `0` as the `version` will return\nthe macro body for the latest content version.',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      macroId: z
        .string()
        .openapi({
          param: {
            name: 'macroId',
            in: 'path',
            description:
              "The ID of the macro. This is usually passed by the app that the\nmacro is in. Otherwise, find the macro ID by querying the desired\ncontent and version, then expanding the body in storage format.\nFor example, '/content/196611/version/7?expand=content.body.storage'.",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested macro body is returned.',
      content: { 'application/json': { schema: MacroInstanceSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- The macro does not exist in the specified version.\n- There is no macro matching the given macro ID or hash.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}/convert/{to}',
  tags: ['Content - macro body'],
  summary: 'Get macro body by macro ID and convert the representation synchronously',
  description:
    'Returns the body of a macro in format specified in path, for the given macro ID.\nThis includes information like the name of the macro, the body of the macro,\nand any macro parameters.\n\nAbout the macro ID: When a macro is created in a new version of content,\nConfluence will generate a random ID for it, unless an ID is specified\n(by an app). The macro ID will look similar to this: \'50884bd9-0cb8-41d5-98be-f80943c14f96\'.\nThe ID is then persisted as new versions of content are created, and is\nonly modified by Confluence if there are conflicting IDs.\n\nFor Forge macros, the value for macro ID is the "local ID" of that particular ADF node.\nThis value can be retrieved either client-side by calling view.getContext() and accessing "localId"\non the resulting object, or server-side by examining the "local-id" parameter node inside the "parameters" node.\n\nNote that there are other attributes named "local-id", but only this particular one is used to store the macro ID.\n\nExample:\n<ac:adf-node type="extension">\n  <ac:adf-attribute key="extension-type">com.atlassian.ecosystem</ac:adf-attribute>\n  <ac:adf-attribute key="parameters">\n      <ac:adf-parameter key="local-id">e9c4aa10-73fa-417c-888d-48c719ae4165</ac:adf-parameter>\n  </ac:adf-parameter>\n</ac:adf-node>\n\nNote, to preserve backwards compatibility this resource will also match on\nthe hash of the macro body, even if a macro ID is found. This check will\neventually become redundant, as macro IDs are generated for pages and\ntransparently propagate out to all instances.\n\nThis backwards compatibility logic does not apply to Forge macros; those\ncan only be retrieved by their ID.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content that the macro is in.',
  operationId: 'getAndConvertMacroBodyByMacroId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID for the content that contains the macro.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
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
            name: 'version',
            in: 'path',
            description:
              'The version of the content that contains the macro. Specifying `0` as the `version` will return\nthe macro body for the latest content version.',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      macroId: z
        .string()
        .openapi({
          param: {
            name: 'macroId',
            in: 'path',
            description:
              "The ID of the macro. This is usually passed by the app that the\nmacro is in. Otherwise, find the macro ID by querying the desired\ncontent and version, then expanding the body in storage format.\nFor example, '/content/196611/version/7?expand=content.body.storage'.",
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            in: 'path',
            required: true,
            description: 'The content representation to return the macro in.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: BodyConversionExpandParamsSchema,
      spaceKeyContext: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKeyContext',
            in: 'query',
            description:
              'The space key used for resolving embedded content (page includes,\nfiles, and links) in the content body. For example, if the source content\ncontains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>`\nand the `spaceKeyContext=TEST` parameter is provided, then the link\nwill be converted to a link to the "Example page" page in the "TEST" space.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      embeddedContentRender: z
        .enum(['current', 'version-at-save'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            name: 'embeddedContentRender',
            in: 'query',
            description:
              'Mode used for rendering embedded content, like attachments.\n\n- `current` renders the embedded content using the latest version.\n- `version-at-save` renders the embedded content using the version at\nthe time of save.',
            schema: { type: 'string', default: 'current', enum: ['current', 'version-at-save'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested content body is returned.',
      content: { 'application/json': { schema: ContentBodySchema } },
    },
    400: {
      description:
        'Returned if invalid content representation is requested, or context is missing.',
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- The macro does not exist in the specified version.\n- There is no macro matching the given macro ID or hash.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}/convert/async/{to}',
  tags: ['Content - macro body'],
  summary: 'Get macro body by macro ID and convert representation Asynchronously',
  description:
    'Returns Async Id of the conversion task which will convert the macro into a content body of the desired format.\nThe result will be available for 5 minutes after completion of the conversion.\n\nAbout the macro ID: When a macro is created in a new version of content,\nConfluence will generate a random ID for it, unless an ID is specified\n(by an app). The macro ID will look similar to this: \'884bd9-0cb8-41d5-98be-f80943c14f96\'.\nThe ID is then persisted as new versions of content are created, and is\nonly modified by Confluence if there are conflicting IDs.\n\nFor Forge macros, the value for macro ID is the "local ID" of that particular ADF node.\nThis value can be retrieved either client-side by calling view.getContext() and accessing "localId"\non the resulting object, or server-side by examining the "local-id" parameter node inside the "parameters" node.\n\nNote that there are other attributes named "local-id", but only this particular one is used to store the macro ID.\n\nExample:\n<ac:adf-node type="extension">\n  <ac:adf-attribute key="extension-type">com.atlassian.ecosystem</ac:adf-attribute>\n  <ac:adf-attribute key="parameters">\n      <ac:adf-parameter key="local-id">e9c4aa10-73fa-417c-888d-48c719ae4165</ac:adf-parameter>\n  </ac:adf-parameter>\n</ac:adf-node>\n\nNote, to preserve backwards compatibility this resource will also match on\nthe hash of the macro body, even if a macro ID is found. This check will\neventually become redundant, as macro IDs are generated for pages and\ntransparently propagate out to all instances.\n\nThis backwards compatibility logic does not apply to Forge macros; those\ncan only be retrieved by their ID.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content that the macro is in.',
  operationId: 'getAndAsyncConvertMacroBodyByMacroId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID for the content that contains the macro.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
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
            name: 'version',
            in: 'path',
            description:
              'The version of the content that contains the macro. Specifying `0` as the `version` will return\nthe macro body for the latest content version.',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      macroId: z
        .string()
        .openapi({
          param: {
            name: 'macroId',
            in: 'path',
            description:
              "The ID of the macro. For apps, this is passed to the macro by the Connect/Forge framework.\nOtherwise, find the macro ID by querying the desired\ncontent and version, then expanding the body in storage format.\nFor example, '/content/196611/version/7?expand=content.body.storage'.",
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .enum(['export_view', 'view', 'styled_view'])
        .openapi({
          param: {
            name: 'to',
            in: 'path',
            required: true,
            description:
              'The content representation to return the macro in.\nCurrently, the following conversions are allowed:\n\n- `export_view`\n- `styled_view`\n- `view`',
            schema: { type: 'string', enum: ['export_view', 'view', 'styled_view'] },
          },
        }),
    }),
    query: z.object({
      expand: BodyConversionExpandParamsSchema,
      allowCache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'allowCache',
            in: 'query',
            description:
              'Controls whether conversion results are cached and reused for identical requests.\n\n- `false`: Each request creates a new conversion task, even if an identical request was made previously.\n- `true`: Enables caching behavior for identical requests from the same user.\n  - If no cached result exists, a new conversion task is created\n  - If a cached result exists, the existing task is marked as RERUNNING and will complete with status COMPLETED\n  - Returns the same task ID for identical requests, allowing you to retrieve the cached result\n\nFor large macros that are slow to convert and for which it is acceptable to show cached data, set this field to `true`.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      spaceKeyContext: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKeyContext',
            in: 'query',
            description:
              'The space key used for resolving embedded content (page includes,\nfiles, and links) in the content body. For example, if the source content\ncontains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>`\nand the `spaceKeyContext=TEST` parameter is provided, then the link\nwill be converted to a link to the "Example page" page in the "TEST" space.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      embeddedContentRender: z
        .enum(['current', 'version-at-save'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            name: 'embeddedContentRender',
            in: 'query',
            description:
              'Mode used for rendering embedded content, like attachments.\n\n- `current` renders the embedded content using the latest version.\n- `version-at-save` renders the embedded content using the version at\nthe time of save.',
            schema: { type: 'string', default: 'current', enum: ['current', 'version-at-save'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested macro conversion request is created.',
      content: { 'application/json': { schema: AsyncIdSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- The macro does not exist in the specified version.\n- There is no macro matching the given macro ID or hash.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const postWikiRestApiContentIdLabelRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/label',
  tags: ['Content labels'],
  summary: 'Add labels to content',
  description:
    'Adds labels to a piece of content. Does not modify the existing labels.\n\nNotes:\n\n- Labels can also be added when creating content ([Create content](#api-content-post)).\n- Labels can be updated when updating content ([Update content](#api-content-id-put)).\nThis will delete the existing labels and replace them with the labels in\nthe request.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'addLabelsToContent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that will have labels added to it.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The labels to add to the content.',
      content: {
        'application/json': { schema: z.xor([LabelCreateArraySchema, LabelCreateSchema]) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the labels are added to the content.',
      content: { 'application/json': { schema: LabelArraySchema } },
    },
    400: {
      description:
        'Returned if;\n\n- The body contains labels with invalid characters or too many characters.\n- The body contains too many labels.\n- The target content would contain too many labels after the operation.\n- The calling user does not have permission to edit labels.',
      content: {},
    },
    403: {
      description: 'Returned if the calling user can view but not edit the content.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiContentIdLabelRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/label',
  tags: ['Content labels'],
  summary: 'Remove label from content using query parameter',
  description:
    'Removes a label from a piece of content. Labels can\'t be deleted from archived content.\nThis is similar to [Remove label from content](#api-content-id-label-label-delete)\nexcept that the label name is specified via a query parameter.\n\nUse this method if the label name has "/" characters, as\n[Remove label from content using query parameter](#api-content-id-label-delete)\ndoes not accept "/" characters for the label name.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'removeLabelFromContentUsingQueryParameter',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the label will be removed from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name of the label to be removed.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Returned if the label is removed. The response body will be empty.',
      content: {},
    },
    403: {
      description: 'Returned if the calling user can view but not edit the content.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiContentIdLabelLabelRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/label/{label}',
  tags: ['Content labels'],
  summary: 'Remove label from content',
  description:
    'Removes a label from a piece of content. Labels can\'t be deleted from archived content.\nThis is similar to [Remove label from content using query parameter](#api-content-id-label-delete)\nexcept that the label name is specified via a path parameter.\n\nUse this method if the label name does not have "/" characters, as the path\nparameter does not accept "/" characters for security reasons. Otherwise,\nuse [Remove label from content using query parameter](#api-content-id-label-delete).\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'removeLabelFromContent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the label will be removed from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'path',
            description: 'The name of the label to be removed.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Returned if the label is removed. The response body will be empty.',
      content: {},
    },
    400: { description: 'Returned if the label name has a "/" character.', content: {} },
    403: {
      description: 'Returned if the calling user can view but not edit the content.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiContentIdNotificationChildCreatedRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/notification/child-created',
  tags: ['Content watches'],
  summary: 'Get watches for page',
  description:
    "Returns the watches for a page. A user that watches a page will receive\nreceive notifications when the page is updated.\n\nIf you want to manage watches for a page, use the following `user` methods:\n\n- [Get content watch status for user](#api-user-watch-content-contentId-get)\n- [Add content watch](#api-user-watch-content-contentId-post)\n- [Remove content watch](#api-user-watch-content-contentId-delete)\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getWatchesForPage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its watches.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned watches.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of watches to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested watches are returned.',
      content: { 'application/json': { schema: WatchArraySchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiContentIdNotificationCreatedRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/notification/created',
  tags: ['Content watches'],
  summary: 'Get watches for space',
  description:
    "Returns all space watches for the space that the content is in. A user that\nwatches a space will receive receive notifications when any content in the\nspace is updated.\n\nIf you want to manage watches for a space, use the following `user` methods:\n\n- [Get space watch status for user](#api-user-watch-space-spaceKey-get)\n- [Add space watch](#api-user-watch-space-spaceKey-post)\n- [Remove space watch](#api-user-watch-space-spaceKey-delete)\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getWatchesForSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its watches.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned watches.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of watches to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested watches are returned.',
      content: { 'application/json': { schema: SpaceWatchArraySchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const postWikiRestApiContentIdPagehierarchyCopyRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/pagehierarchy/copy',
  tags: ['Content - children and descendants'],
  summary: 'Copy page hierarchy',
  description:
    'Copy page hierarchy allows the copying of an entire hierarchy of pages and their associated properties, permissions and attachments.\n The id path parameter refers to the content id of the page to copy, and the new parent of this copied page is defined using the destinationPageId in the request body.\n The titleOptions object defines the rules of renaming page titles during the copy;\n for example, search and replace can be used in conjunction to rewrite the copied page titles.\n\n Response example:\n <pre><code>\n {\n      "id" : "1180606",\n      "links" : {\n           "status" : "/rest/api/longtask/1180606"\n      }\n }\n </code></pre>\n Use the /longtask/<taskId> REST API to get the copy task status.',
  operationId: 'copyPageHierarchy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: 'Request object from json post body',
      content: { 'application/json': { schema: CopyPageHierarchyRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Returns a full JSON representation of a long running task',
      content: { 'application/json': { schema: LongTaskSchema } },
    },
    400: {
      description: 'Returned if the title prefix is invalid (e.g. is empty, creates a conflict)',
      content: {},
    },
    403: {
      description:
        'Returned if the user does not have permission to create content at source and destination',
      content: {},
    },
    404: {
      description: 'Returned if original page or destination page does not exist.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const postWikiRestApiContentIdCopyRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/copy',
  tags: ['Content - children and descendants'],
  summary: 'Copy single page',
  description:
    "Copies a single page and its associated properties, permissions, attachments, and custom contents.\n The `id` path parameter refers to the content ID of the page to copy. The target of the page to be copied\n is defined using the `destination` in the request body and can be one of the following types.\n\n  - `space`: page will be copied to the specified space as a root page on the space\n  - `parent_page`: page will be copied as a child of the specified parent page\n  - `parent_content`: page will be copied as a child of the specified parent content\n  - `existing_page`: page will be copied and replace the specified page\n\nBy default, the following objects are expanded: `space`, `history`, `version`.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: 'Add' permission for the space that the content will be copied in and permission to update the content if copying to an `existing_page`.",
  operationId: 'copyPage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({ expand: ContentExpandWithSubExpandLimitParamsSchema }),
    body: {
      description: 'Request object from json post body',
      content: { 'application/json': { schema: CopyPageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the content is copied.',
      content: { 'application/json;charset=UTF-8': { schema: ContentSchema } },
    },
    400: {
      description:
        'Returned if;\n\n- destination or any of its fields are not specified.\n- destination.type is invalid.\n- sub-expansions limit exceeds.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description:
        'Returned if the user does not have permission to create content at destination.',
      content: {},
    },
    404: {
      description:
        "Returned if;\n\n- the original page doesn't exist.\n- the destination page doesn’t exist.\n- the destination space doesn’t exist.",
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const postWikiRestApiContentIdPermissionCheckRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/permission/check',
  tags: ['Content permissions'],
  summary: 'Check content permissions',
  description:
    "Check if a user or a group can perform an operation to the specified content. The `operation` to check\nmust be provided. The user’s account ID or the ID of the group can be provided in the `subject` to check\npermissions against a specified user or group. The following permission checks are done to make sure that the\nuser or group has the proper access:\n\n- site permissions\n- space permissions\n- content restrictions\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission) if checking permission for self,\notherwise 'Confluence Administrator' global permission is required.",
  operationId: 'checkContentPermission',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to check permissions against.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The content permission request.',
      content: { 'application/json': { schema: ContentPermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the permission check completed successfully',
      content: { 'application/json': { schema: PermissionCheckResponseSchema } },
    },
    400: {
      description:
        'Returned if;\n\n- If any of the required fields are missing.\n- If specified `subject` or `operation` is invalid.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have permission perform the check.',
      content: {},
    },
    404: { description: 'Returned if there is no content with the given ID.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.permission'] }],
})

export const getWikiRestApiContentIdRestrictionRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/restriction',
  tags: ['Content restrictions'],
  summary: 'Get restrictions',
  description:
    'Returns the restrictions on a piece of content.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content.',
  operationId: 'getRestrictions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its restrictions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content\nrestrictions to expand. By default, the following objects are expanded:\n`restrictions.user`, `restrictions.group`.\n\n- `restrictions.user` returns the piece of content that the restrictions are\napplied to.\n- `restrictions.group` returns the piece of content that the restrictions are\napplied to.\n- `content` returns the piece of content that the restrictions are\napplied to.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'restrictions.user',
                  'read.restrictions.user',
                  'update.restrictions.user',
                  'restrictions.group',
                  'read.restrictions.group',
                  'update.restrictions.group',
                  'content',
                ],
              },
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the users and groups in the returned restrictions.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of users and the maximum number of groups, in the\nreturned restrictions, to return per page. Note, this may be restricted\nby fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 100 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested restrictions are returned.',
      content: { 'application/json': { schema: ContentRestrictionArraySchema } },
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const putWikiRestApiContentIdRestrictionRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/{id}/restriction',
  tags: ['Content restrictions'],
  summary: 'Update restrictions',
  description:
    'Updates restrictions for a piece of content. For each operation in the request,\nthe supplied `user` and `group` lists replace the corresponding existing lists.\nOmitted operations and omitted user or group lists are preserved. An explicitly\nempty list (`{"results": []}` or `[]`) clears that list.\n\nUse `read` for viewing restrictions and `update` for editing restrictions.\nWhile content remains view restricted, an editor must also be able to view it.\nRemoving an editor\'s `read` restriction while retaining their `update` restriction\nreturns `400`. Remove their `update` restriction too, or clear all `read`\nrestrictions to remove direct viewing restrictions. Restrictions inherited\nfrom ancestors still apply.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
  operationId: 'updateRestrictions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to update restrictions for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content\nrestrictions (returned in response) to expand.\n\n- `restrictions.user` returns the users that the restrictions apply to.\nExpanded by default.\n- `restrictions.group` returns the groups that the restrictions apply to.\nExpanded by default.\n- `content` returns the piece of content that the restrictions are\napplied to.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'restrictions.user',
                  'read.restrictions.user',
                  'update.restrictions.user',
                  'restrictions.group',
                  'read.restrictions.group',
                  'update.restrictions.group',
                  'content',
                ],
              },
            },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'Supply a `results` array containing one entry per operation (`read` or `update`).\nWithin `restrictions`, identify users by `accountId` and groups by `id`.\nThe top-level collection and each user or group collection may also be supplied\nas a plain array instead of an object with a `results` array.\n\nUser profiles, personal spaces, pagination metadata, `_links`, and `_expandable`\nare not required in the request. The `expand` parameter controls only the response.',
      content: {
        'application/json': {
          schema: ContentRestrictionAddOrUpdateArraySchema,
          examples: {
            replaceUserLists: {
              summary: 'Replace the read and update user lists',
              description:
                'Both editors are included in the read list. Existing group restrictions are preserved.',
              value: {
                results: [
                  {
                    operation: 'update',
                    restrictions: {
                      user: {
                        results: [{ accountId: '<account-id-1>' }, { accountId: '<account-id-2>' }],
                      },
                    },
                  },
                  {
                    operation: 'read',
                    restrictions: {
                      user: {
                        results: [
                          { accountId: '<account-id-1>' },
                          { accountId: '<account-id-2>' },
                          { accountId: '<viewer-account-id>' },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            clearUpdateUsers: {
              summary: 'Clear the update user list',
              description:
                'Clears the update user list. For callers without super-admin permissions,\nthis requires that no update group restrictions exist; otherwise the\nrequest returns `400`. Omitted group lists and all read restrictions\nremain unchanged.',
              value: {
                results: [{ operation: 'update', restrictions: { user: { results: [] } } }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the requested restrictions are updated.',
      content: { 'application/json': { schema: ContentRestrictionArraySchema } },
    },
    400: {
      description:
        "Returned if:\n\n- The request is empty, repeats an operation, uses an unsupported operation,\n  or specifies invalid users or groups.\n- The resulting restrictions for a supplied operation are nonempty and do not\n  include the calling user in the `user` list. Membership in a restricted group\n  does not satisfy this check. Callers with super-admin permissions are exempt.\n- An attempt is made to remove an editor's read restriction while retaining\n  their update restriction and keeping the content view restricted.",
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to update restrictions\nfor the content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const postWikiRestApiContentIdRestrictionRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/restriction',
  tags: ['Content restrictions'],
  summary: 'Add restrictions',
  description:
    "Adds the supplied users and groups to the content's restrictions, preserving\nexisting restrictions. Use `read` for viewing restrictions and `update` for\nediting restrictions. Omitted or empty user and group lists add no restrictions.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.",
  operationId: 'addRestrictions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to add restrictions to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content\nrestrictions (returned in response) to expand.\n\n- `restrictions.user` returns the users that the restrictions apply to.\nExpanded by default.\n- `restrictions.group` returns the groups that the restrictions apply to.\nExpanded by default.\n- `content` returns the piece of content that the restrictions are\napplied to.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'restrictions.user',
                  'read.restrictions.user',
                  'update.restrictions.user',
                  'restrictions.group',
                  'read.restrictions.group',
                  'update.restrictions.group',
                  'content',
                ],
              },
            },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'Supply a `results` array containing one entry per operation (`read` or `update`).\nWithin `restrictions`, identify users by `accountId` and groups by `id`.\nThe top-level collection and each user or group collection may also be supplied\nas a plain array instead of an object with a `results` array.\n\nUser profiles, personal spaces, pagination metadata, `_links`, and `_expandable`\nare not required in the request. The `expand` parameter controls only the response.',
      content: {
        'application/json': {
          schema: ContentRestrictionAddOrUpdateArraySchema,
          examples: {
            addUsers: {
              summary: 'Add two users to the update restrictions',
              value: {
                results: [
                  {
                    operation: 'update',
                    restrictions: {
                      user: {
                        results: [{ accountId: '<account-id-1>' }, { accountId: '<account-id-2>' }],
                      },
                    },
                  },
                ],
              },
            },
            addGroup: {
              summary: 'Add a group to the read restrictions',
              value: {
                results: [
                  {
                    operation: 'read',
                    restrictions: { group: { results: [{ id: '<group-id>' }] } },
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the requested restrictions are added.',
      content: { 'application/json': { schema: ContentRestrictionArraySchema } },
    },
    400: {
      description:
        'Returned if:\n\n- The request is empty, repeats an operation, uses an unsupported operation,\n  or specifies invalid users or groups.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to add restrictions to\nthe content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiContentIdRestrictionRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/restriction',
  tags: ['Content restrictions'],
  summary: 'Delete restrictions',
  description:
    'Removes all restrictions (read and update) on a piece of content.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
  operationId: 'deleteRestrictions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to remove restrictions from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content\nrestrictions (returned in response) to expand.\n\n- `restrictions.user` returns the users that the restrictions apply to.\nExpanded by default.\n- `restrictions.group` returns the groups that the restrictions apply to.\nExpanded by default.\n- `content` returns the piece of content that the restrictions are\napplied to.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'restrictions.user',
                  'read.restrictions.user',
                  'update.restrictions.user',
                  'restrictions.group',
                  'read.restrictions.group',
                  'update.restrictions.group',
                  'content',
                ],
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the restrictions are removed.',
      content: { 'application/json': { schema: ContentRestrictionArraySchema } },
    },
    400: { description: 'Returned if any of the above validation rules are violated', content: {} },
    403: {
      description:
        'Returned if the calling user does not have permission to alter the\nrestrictions on the content.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiContentIdRestrictionByOperationRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/restriction/byOperation',
  tags: ['Content restrictions'],
  summary: 'Get restrictions by operation',
  description:
    'Returns restrictions on a piece of content by operation. This method is\nsimilar to [Get restrictions](#api-content-id-restriction-get) except that\nthe operations are properties of the return object, rather than items in\na results array.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content.',
  operationId: 'getRestrictionsByOperation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its restrictions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['restrictions.user', 'restrictions.group', 'content'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content\nrestrictions to expand.\n\n- `restrictions.user` returns the users that the restrictions apply to.\nExpanded by default.\n- `restrictions.group` returns the groups that the restrictions apply to.\nExpanded by default.\n- `content` returns the piece of content that the restrictions are\napplied to.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['restrictions.user', 'restrictions.group', 'content'],
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested restrictions are returned.',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .object({
                operationType: ContentRestrictionSchema.exactOptional(),
                _links: GenericLinksSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}',
  tags: ['Content restrictions'],
  summary: 'Get restrictions for operation',
  description:
    'Returns the restictions on a piece of content for a given operation (read\nor update).\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content.',
  operationId: 'getRestrictionsForOperation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content to be queried for its restrictions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationKey: z
        .enum(['read', 'update'])
        .openapi({
          param: {
            name: 'operationKey',
            in: 'path',
            description: 'The operation type of the restrictions to be returned.',
            required: true,
            schema: { type: 'string', enum: ['read', 'update'] },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['restrictions.user', 'restrictions.group', 'content'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content\nrestrictions to expand.\n\n- `restrictions.user` returns the users that the restrictions apply to.\nExpanded by default.\n- `restrictions.group` returns the groups that the restrictions apply to.\nExpanded by default.\n- `content` returns the piece of content that the restrictions are\napplied to.',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['restrictions.user', 'restrictions.group', 'content'],
              },
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the users and groups in the returned restrictions.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of users and the maximum number of groups, in the\nreturned restrictions, to return per page. Note, this may be restricted\nby fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 100 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested restrictions are returned.',
      content: { 'application/json': { schema: ContentRestrictionSchema } },
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute =
  createRoute({
    method: 'get',
    path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId}',
    tags: ['Content restrictions'],
    summary: 'Get content restriction status for group',
    description:
      'Returns whether the specified content restriction applies to a group.\nFor example, if a page with `id=123` has a `read` restriction for the `123456` group id,\nthe following request will return `true`:\n\n`/wiki/rest/api/content/123/restriction/byOperation/read/byGroupId/123456`\n\nNote that a response of `true` does not guarantee that the group can view the page, as it does not account for\naccount-inherited restrictions, space permissions, or even product access. For more\ninformation, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content.',
    operationId: 'getIndividualGroupRestrictionStatusByGroupId',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'The ID of the content that the restriction applies to.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        operationKey: z
          .enum(['read', 'update'])
          .openapi({
            param: {
              name: 'operationKey',
              in: 'path',
              description: 'The operation that the restriction applies to.',
              required: true,
              schema: { type: 'string', enum: ['read', 'update'] },
            },
          }),
        groupId: z
          .string()
          .openapi({
            param: {
              name: 'groupId',
              in: 'path',
              description:
                'The id of the group to be queried for whether the content restriction\napplies to it.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description:
          'Returns true if the content restriction applies to the group. The response\nwill not return a response body.',
        content: {},
      },
      403: {
        description: 'Returned if the calling user does not have permission to view the\ncontent.',
        content: {},
      },
      404: {
        description:
          'Returned if\n- There is no content with the given ID.\n- An invalid operation or group is specified.\n- Given groupId is blank or has invalid characters',
        content: {},
      },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
  })

export const putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute =
  createRoute({
    method: 'put',
    path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId}',
    tags: ['Content restrictions'],
    summary: 'Add group to content restriction',
    description:
      'Adds a group to a content restriction by Group Id. That is, grant read or update\npermission to the group for a piece of content.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
    operationId: 'addGroupToContentRestrictionByGroupId',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'The ID of the content that the restriction applies to.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        operationKey: z
          .enum(['read', 'update'])
          .openapi({
            param: {
              name: 'operationKey',
              in: 'path',
              description: 'The operation that the restriction applies to.',
              required: true,
              schema: { type: 'string', enum: ['read', 'update'] },
            },
          }),
        groupId: z
          .string()
          .openapi({
            param: {
              name: 'groupId',
              in: 'path',
              description: 'The groupId of the group to add to the content restriction.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description:
          'Returned if the group is added to the content restriction by Group Id. The response\nbody will be empty.',
        content: {},
      },
      400: { description: 'Returned if;\n- Group Id is not valid', content: {} },
      403: {
        description:
          'Returned if the calling user does not have permission to update the\ncontent.',
        content: {},
      },
      404: {
        description:
          'Returned if;\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- An invalid operation or group id is specified.',
        content: {},
      },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
  })

export const deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute =
  createRoute({
    method: 'delete',
    path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId}',
    tags: ['Content restrictions'],
    summary: 'Remove group from content restriction',
    description:
      'Removes a group from a content restriction. That is, remove read or update\npermission for the group for a piece of content.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
    operationId: 'removeGroupFromContentRestriction',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'The ID of the content that the restriction applies to.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        operationKey: z
          .enum(['read', 'update'])
          .openapi({
            param: {
              name: 'operationKey',
              in: 'path',
              description: 'The operation that the restriction applies to.',
              required: true,
              schema: { type: 'string', enum: ['read', 'update'] },
            },
          }),
        groupId: z
          .string()
          .openapi({
            param: {
              name: 'groupId',
              in: 'path',
              description: 'The id of the group to remove from the content restriction.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description:
          'Returned if the group is removed from the content restriction. The response\nbody will be empty.',
        content: {},
      },
      400: {
        description:
          "The group's ID is blank, or removing its read restriction would leave it with an update restriction while the content remains view restricted.",
        content: {},
      },
      403: {
        description: 'Returned if the calling user does not have permission to view the content.',
        content: {},
      },
      404: {
        description:
          'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- The restriction to be deleted does not exist.',
        content: {},
      },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
  })

export const getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user',
  tags: ['Content restrictions'],
  summary: 'Get content restriction status for user',
  description:
    'Returns whether the specified content restriction applies to a user.\nFor example, if a page with `id=123` has a `read` restriction for a user with an account ID of\n`384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`, the following request will return `true`:\n\n`/wiki/rest/api/content/123/restriction/byOperation/read/user?accountId=384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`\n\nNote that a response of `true` does not guarantee that the user can view the page, as it does not account for\naccount-inherited restrictions, space permissions, or even product access. For more\ninformation, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content.',
  operationId: 'getContentRestrictionStatusForUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the restriction applies to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationKey: z
        .string()
        .openapi({
          param: {
            name: 'operationKey',
            in: 'path',
            description: 'The operation that is restricted.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Return true if the content restriction applies to the user. The response\nbody will be empty.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- An invalid operation or user is specified.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user',
  tags: ['Content restrictions'],
  summary: 'Add user to content restriction',
  description:
    'Adds a user to a content restriction. That is, grant read or update\npermission to the user for a piece of content.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
  operationId: 'addUserToContentRestriction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the restriction applies to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationKey: z
        .string()
        .openapi({
          param: {
            name: 'operationKey',
            in: 'path',
            description: 'The operation that the restriction applies to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Returned if the user is added to the content restriction. The response\nbody will be empty.',
      content: {},
    },
    400: { description: 'Returned if;\n\n- Provided restrictions are invalid', content: {} },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- An invalid operation or group is specified.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user',
  tags: ['Content restrictions'],
  summary: 'Remove user from content restriction',
  description:
    'Removes a user from a content restriction. That is, remove read or update\npermission for the user for a piece of content.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
  operationId: 'removeUserFromContentRestriction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the restriction applies to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationKey: z
        .enum(['read', 'update'])
        .openapi({
          param: {
            name: 'operationKey',
            in: 'path',
            description: 'The operation that the restriction applies to.',
            required: true,
            schema: { type: 'string', enum: ['read', 'update'] },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Returned if the user is removed from the content restriction. The response\nbody will be empty.',
      content: {},
    },
    400: {
      description:
        "Removing the user's read restriction would leave them with an update restriction while the content remains view restricted.",
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- The calling user does not have permission to view the content.\n- An invalid operation or group is specified.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiContentIdStateRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/state',
  tags: ['Content states'],
  summary: 'Get content state',
  description:
    'Gets the current content state of the draft or current version of content. To specify the draft version, set\nthe parameter status to draft, otherwise archived or current will get the relevant published state.\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the content.',
  operationId: 'getContentState',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the content whose content state is of interest.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['current', 'draft', 'archived'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Set status to one of [current,draft,archived]. Default value is current.',
            schema: { type: 'string', default: 'current', enum: ['current', 'draft', 'archived'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if permission allows viewing of content.',
      content: { 'application/json': { schema: ContentStateResponseSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have content view permission.' },
    404: { description: 'Returned if the content with given id can not be found.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const putWikiRestApiContentIdStateRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/content/{id}/state',
  tags: ['Content states'],
  summary: 'Set the content state of a content and publishes a new version of the content.',
  description:
    "Sets the content state of the content specified and creates a new version\n(publishes the content without changing the body) of the content with the new state.\n\nYou may pass in either an id of a state, or the name and color of a desired new state.\nIf all 3 are passed in, id will be used.\nIf the name and color passed in already exist under the current user's existing custom states, the existing state will be reused.\nIf custom states are disabled in the space of the content (which can be determined by getting the content state space settings of the content's space)\nthen this set will fail.\n\nYou may not remove a content state via this PUT request. You must use the DELETE method. A specified state is required in the body of this request.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.",
  operationId: 'setContentState',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Id of the content whose content state is to be set.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['current', 'draft'])
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'Status of content onto which state will be placed. If draft, then draft state will change.\nIf current, state will be placed onto a new version of the content with same body as previous version.',
            schema: { type: 'string', enum: ['current', 'draft'] },
            required: true,
          },
        }),
    }),
    body: {
      description:
        'Content state fields for state. Pass in id for an existing state, or new name and color for best matching existing state, or new state if allowed in space.',
      content: { 'application/json': { schema: ContentStateRestInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if content state is set successfully.',
      content: { 'application/json': { schema: ContentStateResponseSchema } },
    },
    400: {
      description:
        'Invalid Name/Color, non-existent id of content state, or type of state desired is not allowed.\nName must be less than or exactly 20 characters. Color must be a valid hex string.\nStatus must be in [draft,current].',
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have content edit permission.' },
    404: { description: 'Returned if the content with given id can not be found.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiContentIdStateRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/state',
  tags: ['Content states'],
  summary: 'Removes the content state of a content and publishes a new version.',
  description:
    'Removes the content state of the content specified and creates a new version\n(publishes the content without changing the body) of the content with the new status.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
  operationId: 'removeContentState',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Id of the content whose content state is to be set.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['current', 'draft'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'status of content state from which to delete state. Can be draft or archived',
            schema: { type: 'string', enum: ['current', 'draft'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if content state is removed from content.',
      content: { 'application/json': { schema: ContentStateResponseSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have content edit permission.' },
    404: { description: 'Returned if the content with given id can not be found.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiContentIdStateAvailableRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content/{id}/state/available',
  tags: ['Content states'],
  summary: 'Gets available content states for content.',
  description:
    'Gets content states that are available for the content to be set as.\nWill return all enabled Space Content States.\nWill only return most the 3 most recently published custom content states to match UI editor list.\nTo get all custom content states, use the /content-states endpoint.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to edit the content.',
  operationId: 'getAvailableContentStates',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'id of content to get available states for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the content is found and permission is valid.',
      content: { 'application/json': { schema: AvailableContentStatesSchema } },
    },
    400: { description: 'Invalid status for content. Must be in [current,draft,archived].' },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have content edit permission.' },
    404: { description: 'Returned if the content with given id can not be found.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const postWikiRestApiContentIdVersionRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/content/{id}/version',
  tags: ['Content versions'],
  summary: 'Restore content version',
  description:
    'Restores a historical version to be the latest version. That is, a new version\nis created with the content of the historical version.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'restoreContentVersion',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content for which the history will be restored.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content to expand. By default, the `content`\nobject is expanded.\n\n- `collaborators` returns the users that collaborated on the version.\n- `content` returns the content for the version.',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The content version to be restored.',
      content: { 'application/json': { schema: VersionRestoreSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the version is restored.',
      content: { 'application/json': { schema: VersionSchema } },
    },
    400: {
      description:
        'Returned if;\n\n- There is no content with the given ID.\n- There is no version with the given version number.\n- The version number is the current version.',
      content: {},
    },
    403: {
      description: "Returned if the calling user doesn't have permission to edit the\ncontent.",
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiContentIdVersionVersionNumberRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/content/{id}/version/{versionNumber}',
  tags: ['Content versions'],
  summary: 'Delete content version',
  description:
    'Delete a historical version. This does not delete the changes made to the\ncontent in that version, rather the changes for the deleted version are\nrolled up into the next version. Note, you cannot delete the current version.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'deleteContentVersion',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the content that the version will be deleted from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      versionNumber: z
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
            name: 'versionNumber',
            in: 'path',
            description:
              'The number of the version to be deleted. The version number starts\nfrom 1 up to current version.',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the version is deleted.', content: {} },
    400: {
      description:
        'Returned if;\n\n- The content or version cannot be found.\n- The current version is specified.',
      content: {},
    },
    403: {
      description: "Returned if the calling user doesn't have permission to edit the\ncontent.",
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiContentStatesRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/content-states',
  tags: ['Content states'],
  summary: 'Get Custom Content States',
  description:
    'Get custom content states that authenticated user has created.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**\nMust have user authentication.',
  operationId: 'getCustomContentStates',
  responses: {
    200: {
      description: 'Custom Content States that user has crated. Returned if user authenticated.',
      content: { 'application/json': { schema: z.array(ContentStateSchema) } },
    },
    401: { description: 'Returned if user is not authenticated.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:user.property:confluence'] }],
})

export const postWikiRestApiContentbodyConvertAsyncToRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/contentbody/convert/async/{to}',
  tags: ['Content body'],
  summary: 'Asynchronously convert content body',
  description:
    "Converts a content body from one format to another format asynchronously.\nReturns the asyncId for the asynchronous task.\n\nSupported conversions:\n\n- atlas_doc_format: editor, export_view, storage, styled_view, view\n- storage: atlas_doc_format, editor, export_view, styled_view, view\n- editor: storage\n\nNo other conversions are supported at the moment.\nOnce a conversion is completed, it will be available for 5 minutes at the result endpoint.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nIf request specifies 'contentIdContext', 'View' permission for the space, and permission to view the content.",
  operationId: 'asyncConvertContentBodyRequest',
  request: {
    params: z.object({
      to: z
        .literal('export_view')
        .openapi({
          param: {
            name: 'to',
            in: 'path',
            description: 'The name of the target format for the content body.',
            required: true,
            schema: { type: 'string', enum: ['export_view'] },
          },
        }),
    }),
    query: z.object({
      expand: BodyConversionExpandParamsSchema,
      spaceKeyContext: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKeyContext',
            in: 'query',
            description:
              'The space key used for resolving embedded content (page includes,\nfiles, and links) in the content body. For example, if the source content\ncontains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>`\nand the `spaceKeyContext=TEST` parameter is provided, then the link\nwill be converted to a link to the "Example page" page in the "TEST" space.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contentIdContext: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'contentIdContext',
            in: 'query',
            description:
              'The content ID used to find the space for resolving embedded content\n(page includes, files, and links) in the content body. For example,\nif the source content contains the link `<ac:link><ri:page ri:content-title="Example page" /><ac:link>`\nand the `contentIdContext=123` parameter is provided, then the link\nwill be converted to a link to the "Example page" page in the same space\nthat has the content with ID=123. Note, `spaceKeyContext` will be ignored\nif this parameter is provided.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      allowCache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'allowCache',
            in: 'query',
            description:
              'Controls whether conversion results are cached and reused for identical requests.\n\n- `false`: Each request creates a new conversion task, even if an identical request was made previously.\n- `true`: Enables caching behavior for identical requests from the same user.\n  - If no cached result exists, a new conversion task is created\n  - If a cached result exists, the existing task is marked as RERUNNING and will complete with status COMPLETED\n  - Returns the same task ID for identical requests, allowing you to retrieve the cached result',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      embeddedContentRender: z
        .enum(['current', 'version-at-save'])
        .default('current')
        .exactOptional()
        .openapi({
          param: {
            name: 'embeddedContentRender',
            in: 'query',
            description:
              'Mode used for rendering embedded content, like attachments.\n\n- `current` renders the embedded content using the latest version.\n- `version-at-save` renders the embedded content using the version at\nthe time of save.',
            schema: { type: 'string', default: 'current', enum: ['current', 'version-at-save'] },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The content body to convert.',
      content: { 'application/json': { schema: ContentBodyCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returned if the content is added to the messaging queue for conversion. This id will be available for 5 minutes after the conversion is complete.',
      content: { 'application/json': { schema: AsyncIdSchema } },
    },
    400: {
      description:
        'Returned\n- if the content body or conversion context is invalid or null\n- if the value is improperly formed\n- any conversion type other than export_view',
      content: {},
    },
    404: {
      description: 'Returned if content cannot be found with the provided context.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiContentbodyConvertAsyncIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/contentbody/convert/async/{id}',
  tags: ['Content body'],
  summary:
    'Get asynchronously converted content body from the id or the current status of the task.',
  description:
    "Returns the content body for the corresponding `asyncId` of a completed conversion task. If\nthe task is not completed, the task status is returned instead.\n\nOnce a conversion task is completed, the result can be obtained for up to 5 minutes, or\nuntil an identical conversion request is made again with the `allowCache` parameter set to\nfalse.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nIf request specifies 'contentIdContext', 'View' permission for the space, and permission to view the content.",
  operationId: 'asyncConvertContentBodyResponse',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The asyncId of the macro task to get the converted body.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returned if successfully found an async conversion task associated with the id.',
      content: { 'application/json': { schema: AsyncContentBodySchema } },
    },
    400: { description: 'Returned if the async id is invalid.', content: {} },
    401: {
      description:
        'Returned if the request was not made by an anonymous user and user is not authenticated.',
      content: {},
    },
    403: {
      description:
        'Returned if the requesting user is not the user who made the conversion request.',
      content: {},
    },
    404: {
      description: 'Returned if async macro conversion task cannot be found with the provided id.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiContentbodyConvertAsyncBulkTasksRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/contentbody/convert/async/bulk/tasks',
  tags: ['Content body'],
  summary: 'Get asynchronous content body conversion task result in bulk',
  description:
    "Returns the content body for the corresponding `asyncId` of a completed conversion task. If\nthe task is not completed, the task status is returned instead.\n\nOnce a conversion task is completed, the result can be obtained for up to 5 minutes, or\nuntil an identical conversion request is made again with the `allowCache` parameter set to\nfalse.\n\nNote that there is a maximum limit of 50 task results per request to this endpoint.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'bulkAsyncConvertContentBodyResponse',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description: 'The asyncIds of the conversion tasks.',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if asynchronous conversion tasks are successfully found.',
      content: { 'application/json': { schema: AsyncContentBodyArraySchema } },
    },
    400: { description: 'Returned if there are more than 50 results requested.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const postWikiRestApiContentbodyConvertAsyncBulkTasksRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/contentbody/convert/async/bulk/tasks',
  tags: ['Content body'],
  summary: 'Create asynchronous content body conversion tasks in bulk',
  description:
    "Asynchronously converts content bodies from one format to another format in bulk. Use the Content body\nREST API to get the status of conversion tasks. Note that there is a maximum limit of 10 conversions per\nrequest to this endpoint.\n\nSupported conversions:\n\n- storage: editor, export_view, styled_view, view\n- editor: storage\n\nOnce a conversion task is completed, it is available for polling for up to 5 minutes.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space, and permission to view the content if the `spaceKeyContext` or\n`contentIdContext` are present.",
  operationId: 'bulkAsyncConvertContentBodyRequest',
  request: {
    body: {
      description: 'An array of parameters to create content body conversion tasks.',
      content: { 'application/json': { schema: BulkContentBodyConversionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returned if asynchronous tasks are created to convert content bodies. If a conversion task fails to be created, a “FAILED_TO_QUEUE” string will be returned instead of an asyncId.',
      content: { 'application/json': { schema: AsyncIdArraySchema } },
    },
    400: { description: 'Returned if there are more than 10 conversions requested.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.all'] }],
})

export const getWikiRestApiLabelRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/label',
  tags: ['Label info'],
  summary: 'Get label information',
  description:
    "Returns label information and a list of contents associated with the label.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission). Only contents\nthat the user is permitted to view is returned.",
  operationId: 'getAllLabelContent',
  request: {
    query: z.object({
      name: z
        .string()
        .nullable()
        .default(null)
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the label to query.',
            required: true,
            schema: { type: 'string', default: null },
          },
        }),
      type: z
        .enum(['page', 'blogpost', 'attachment', 'page_template'])
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'The type of contents that are to be returned.',
            schema: {
              type: 'string',
              default: null,
              enum: ['page', 'blogpost', 'attachment', 'page_template'],
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting offset for the results.',
            schema: { type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
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
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of results to be returned.',
            schema: { type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the query fetches zero or more results.',
      content: { 'application/json': { schema: LabelDetailsSchema } },
    },
    400: {
      description:
        'Returned if no label name is provide or\nif content type provided in the query is invalid.',
      content: {},
    },
    403: {
      description:
        'Returned if the calling user does not have permission to view\nany content including label info.',
      content: {},
    },
    404: {
      description:
        'Returned if the lable name is invalid or if no label is found for a given label.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiGroupRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/group',
  tags: ['Group'],
  summary: 'Get groups',
  description:
    "Returns all user groups. The returned groups are ordered alphabetically in\nascending order by group name.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getGroups',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned groups.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of groups to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
      accessType: z
        .enum(['user', 'admin', 'site-admin'])
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'accessType',
            in: 'query',
            description: 'The group permission level for which to filter results.',
            required: false,
            schema: { type: 'string', default: null, enum: ['user', 'admin', 'site-admin'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested groups are returned.',
      content: { 'application/json': { schema: GroupArrayWithLinksSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view\ngroups.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-groups'] }],
})

export const postWikiRestApiGroupRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/group',
  tags: ['Group'],
  summary: 'Create new user group',
  description:
    'Creates a new user group.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nUser must be a site admin.',
  operationId: 'createGroup',
  request: {
    body: {
      description: 'Name of the group that is to be created.',
      content: { 'application/json': { schema: GroupNameSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returned if the group was created successfully.',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: { description: 'Returned if the name is missing or invalid.', content: {} },
    401: {
      description: 'Returned if the calling user is not logged in to Confluence.',
      content: {},
    },
    403: { description: 'Returned if the user is not a site admin.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-groups'] }],
})

export const getWikiRestApiGroupByIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/group/by-id',
  tags: ['Group'],
  summary: 'Get group',
  description:
    "Returns a user group for a given group id.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getGroupByGroupId',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'The id of the group.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested group is returned.',
      content: { 'application/json': { schema: GroupSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view\ngroups.',
      content: {},
    },
    404: { description: 'Returned if the group does not exist.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-groups'] }],
})

export const deleteWikiRestApiGroupByIdRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/group/by-id',
  tags: ['Group'],
  summary: 'Delete user group',
  description:
    'Delete user group.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nUser must be a site admin.',
  operationId: 'removeGroupById',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'Id of the group to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the group was removed successfully.', content: {} },
    400: { description: 'Returned if the id is missing or invalid.', content: {} },
    401: {
      description: 'Returned if the calling user is not logged in to Confluence.',
      content: {},
    },
    403: { description: 'Returned if the user is not a site admin.', content: {} },
    404: { description: 'If no user group by the given id exists.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-groups'] }],
})

export const getWikiRestApiGroupPickerRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/group/picker',
  tags: ['Group'],
  summary: 'Search groups by partial query',
  description: 'Get search results of groups by partial query provided.',
  operationId: 'searchGroups',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'the search term used to query results.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned groups.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of groups to return per page.\nNote, this is restricted to a maximum limit of 200 groups.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
      shouldReturnTotalSize: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'shouldReturnTotalSize',
            in: 'query',
            description:
              'Whether to include total size parameter in the results.\nNote, fetching total size property is an expensive operation; use it if your use case needs this value.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a full JSON representation of group collection.',
      content: { 'application/json': { schema: GroupArrayWithLinksSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to view\ngroups.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-groups'] }],
})

export const getWikiRestApiGroupGroupIdMembersByGroupIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/group/{groupId}/membersByGroupId',
  tags: ['Group'],
  summary: 'Get group members',
  description:
    "Returns the users that are members of a group.\n\nUse updated Get group API\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getGroupMembersByGroupId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'The id of the group to be queried for its members.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned users.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of users to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
      shouldReturnTotalSize: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'shouldReturnTotalSize',
            in: 'query',
            description:
              'Whether to include total size parameter in the results.\nNote, fetching total size property is an expensive operation; use it if your use case needs this value.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              "A multi-value parameter indicating which properties of the user to\nexpand.\n\n  - `operations` returns the operations that the user is allowed to do.\n  - `personalSpace` returns the user's personal space, if it exists.\n  - `isExternalCollaborator`(@deprecated) see `isGuest` in response to find out whether the user is a guest.",
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['operations', 'personalSpace', 'isExternalCollaborator'],
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested users are returned.',
      content: { 'application/json': { schema: UserArraySchema } },
    },
    400: { description: 'Returned if given limit is greater than 200', content: {} },
    403: {
      description: 'Returned if the calling user does not have permission to view users.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-groups'] }],
})

export const postWikiRestApiGroupUserByGroupIdRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/group/userByGroupId',
  tags: ['Group'],
  summary: 'Add member to group by groupId',
  description:
    'Adds a user as a member in a group represented by its groupId\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nUser must be a site admin.',
  operationId: 'addUserToGroupByGroupId',
  request: {
    query: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'query',
            description: 'GroupId of the group whose membership is updated',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'AccountId of the user who needs to be added as member.',
      content: { 'application/json': { schema: AccountIdSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Returned if the group was created successfully.', content: {} },
    400: {
      description: 'Returned if the groupId or accountId are missing or invalid.',
      content: {},
    },
    401: {
      description: 'Returned if the calling user is not logged in to Confluence.',
      content: {},
    },
    403: { description: 'Returned if the user is not a site admin.', content: {} },
    404: { description: 'If no user group by the give name exists.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-groups'] }],
})

export const deleteWikiRestApiGroupUserByGroupIdRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/group/userByGroupId',
  tags: ['Group'],
  summary: 'Remove member from group using group id',
  description:
    'Remove user as a member from a group.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nUser must be a site admin.',
  operationId: 'removeMemberFromGroupByGroupId',
  request: {
    query: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'query',
            description: 'Id of the group whose membership is updated.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            description:
              'The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.\nFor example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Returned if the group was removed successfully.', content: {} },
    400: { description: 'Returned if the name is missing or invalid.', content: {} },
    401: {
      description: 'Returned if the calling user is not logged in to Confluence.',
      content: {},
    },
    403: {
      description:
        'Returned if the user is not a site admin.\nNote: A 204 is returned if the user is not part of the\ngroup.',
      content: {},
    },
    404: {
      description:
        'If no user group by the give name exists or if no user exists\nfor the given accountId.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-groups'] }],
})

export const getWikiRestApiLongtaskRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/longtask',
  tags: ['Long-running task'],
  summary: 'Get long-running tasks',
  description:
    "Returns information about all active long-running tasks (e.g. space export),\nsuch as how long each task has been running and the percentage of each task\nthat has completed.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getTasks',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            description: 'The key of the tasks.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned tasks.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of tasks to return per page. Note, this may be\nrestricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 100 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested tasks are returned.',
      content: { 'application/json': { schema: LongTaskStatusArraySchema } },
    },
    401: {
      description: 'Returned if the calling user is not logged in to Confluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:content.metadata:confluence'] }],
})

export const getWikiRestApiLongtaskIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/longtask/{id}',
  tags: ['Long-running task'],
  summary: 'Get long-running task',
  description:
    "Returns information about an active long-running task (e.g. space export),\nsuch as how long it has been running and the percentage of the task that\nhas completed.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getTask',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the task.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested task is returned.',
      content: { 'application/json': { schema: LongTaskStatusWithLinksSchema } },
    },
    401: {
      description: 'Returned if the calling user is not logged in to Confluence.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no task with the given ID.\n- The calling user does not have permission to view the task.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-space.summary'] }],
})

export const getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute =
  createRoute({
    method: 'get',
    path: '/wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}',
    tags: ['Relation'],
    summary: 'Find target entities related to a source entity',
    description:
      "Returns all target entities that have a particular relationship to the\nsource entity. Note, relationships are one way.\n\nFor example, the following method finds all content that the current user\nhas an 'ignore' relationship with:\n`GET /wiki/rest/api/relation/ignore/from/user/current/to/content`\nNote, 'ignore' is an example custom relationship type.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view both the target entity and source entity.",
    operationId: 'findTargetFromSource',
    request: {
      params: z.object({
        relationName: z
          .string()
          .openapi({
            param: {
              name: 'relationName',
              in: 'path',
              description:
                "The name of the relationship. This method supports relationships created via\n[Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put).\nNote, this method does not support 'like' or 'favourite' relationships.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'sourceType',
              in: 'path',
              description: 'The source entity type of the relationship.',
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        sourceKey: z
          .string()
          .openapi({
            param: {
              name: 'sourceKey',
              in: 'path',
              description:
                "The identifier for the source entity:\n\n- If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `sourceType` is 'content', then specify the content ID.\n- If `sourceType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'targetType',
              in: 'path',
              description: 'The target entity type of the relationship.',
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
      }),
      query: z.object({
        sourceStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'sourceStatus',
              in: 'query',
              description:
                "The status of the source. This parameter is only used when the\n`sourceType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        targetStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'targetStatus',
              in: 'query',
              description:
                "The status of the target. This parameter is only used when the\n`targetType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        sourceVersion: z
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
              name: 'sourceVersion',
              in: 'query',
              description:
                "The version of the source. This parameter is only used when the\n`sourceType` is 'content' and the `sourceStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        targetVersion: z
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
              name: 'targetVersion',
              in: 'query',
              description:
                "The version of the target. This parameter is only used when the\n`targetType` is 'content' and the `targetStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        expand: z
          .preprocess(
            (val) =>
              val === undefined
                ? val
                : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                    typeof item === 'string' ? item.split(',') : [item],
                  ),
            z.array(z.enum(['relationData', 'source', 'target'])),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'expand',
              in: 'query',
              description:
                'A multi-value parameter indicating which properties of the response\nobject to expand.\n\n- `relationData` returns information about the relationship, such as\nwho created it and when it was created.\n- `source` returns the source entity.\n- `target` returns the target entity.',
              style: 'form',
              explode: false,
              schema: {
                type: 'array',
                items: { type: 'string', enum: ['relationData', 'source', 'target'] },
              },
              required: false,
            },
          }),
        start: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .default(0)
          .exactOptional()
          .openapi({
            param: {
              name: 'start',
              in: 'query',
              description: 'The starting index of the returned relationships.',
              schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
              required: false,
            },
          }),
        limit: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .default(25)
          .exactOptional()
          .openapi({
            param: {
              name: 'limit',
              in: 'query',
              description:
                'The maximum number of relationships to return per page.\nNote, this may be restricted by fixed system limits.',
              schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the requested relationships are returned.',
        content: { 'application/json': { schema: RelationArraySchema } },
      },
      400: { description: 'Returned if the request is invalid.', content: {} },
      403: {
        description: 'Returned if the user does not have permission to view the\nrelationships.',
        content: {},
      },
      404: { description: 'Returned if the target entity does not exist.', content: {} },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
  })

export const getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute =
  createRoute({
    method: 'get',
    path: '/wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey}',
    tags: ['Relation'],
    summary: 'Find relationship from source to target',
    description:
      "Find whether a particular type of relationship exists from a source\nentity to a target entity. Note, relationships are one way.\n\nFor example, you can use this method to find whether the current user has\nselected a particular page as a favorite (i.e. 'save for later'):\n`GET /wiki/rest/api/relation/favourite/from/user/current/to/content/123`\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view both the target entity and source entity.",
    operationId: 'getRelationship',
    request: {
      params: z.object({
        relationName: z
          .string()
          .openapi({
            param: {
              name: 'relationName',
              in: 'path',
              description:
                "The name of the relationship. This method supports the 'favourite'\n(i.e. 'save for later') relationship as well as any other relationship\ntypes created via [Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put).",
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'sourceType',
              in: 'path',
              description:
                "The source entity type of the relationship. This must be 'user', if\nthe `relationName` is 'favourite'.",
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        sourceKey: z
          .string()
          .openapi({
            param: {
              name: 'sourceKey',
              in: 'path',
              description:
                "- The identifier for the source entity:\n\n- If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `sourceType` is 'content', then specify the content ID.\n- If `sourceType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'targetType',
              in: 'path',
              description:
                "The target entity type of the relationship. This must be 'space' or\n'content', if the `relationName` is 'favourite'.",
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        targetKey: z
          .string()
          .openapi({
            param: {
              name: 'targetKey',
              in: 'path',
              description:
                "The identifier for the target entity:\n\n- If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `targetType` is 'content', then specify the content ID.\n- If `targetType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        sourceStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'sourceStatus',
              in: 'query',
              description:
                "The status of the source. This parameter is only used when the\n`sourceType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        targetStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'targetStatus',
              in: 'query',
              description:
                "The status of the target. This parameter is only used when the\n`targetType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        sourceVersion: z
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
              name: 'sourceVersion',
              in: 'query',
              description:
                "The version of the source. This parameter is only used when the\n`sourceType` is 'content' and the `sourceStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        targetVersion: z
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
              name: 'targetVersion',
              in: 'query',
              description:
                "The version of the target. This parameter is only used when the\n`targetType` is 'content' and the `targetStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        expand: z
          .preprocess(
            (val) =>
              val === undefined
                ? val
                : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                    typeof item === 'string' ? item.split(',') : [item],
                  ),
            z.array(z.enum(['relationData', 'source', 'target'])),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'expand',
              in: 'query',
              description:
                'A multi-value parameter indicating which properties of the response\nobject to expand.\n\n- `relationData` returns information about the relationship, such as\nwho created it and when it was created.\n- `source` returns the source entity.\n- `target` returns the target entity.',
              style: 'form',
              explode: false,
              schema: {
                type: 'array',
                items: { type: 'string', enum: ['relationData', 'source', 'target'] },
              },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the relationship exists.',
        content: { 'application/json': { schema: RelationSchema } },
      },
      400: { description: 'Returned if the request is invalid.', content: {} },
      401: {
        description:
          'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
        content: {},
      },
      403: {
        description: 'Returned if the user does not have permission to view the\nrelationship.',
        content: {},
      },
      404: { description: 'Returned if the relationship does not exist.', content: {} },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
  })

export const putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute =
  createRoute({
    method: 'put',
    path: '/wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey}',
    tags: ['Relation'],
    summary: 'Create relationship',
    description:
      "Creates a relationship between two entities (user, space, content). The\n'favourite' relationship is supported by default, but you can use this method\nto create any type of relationship between two entities.\n\nFor example, the following method creates a 'sibling' relationship between\ntwo pieces of content:\n`PUT /wiki/rest/api/relation/sibling/from/content/123/to/content/456`\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
    operationId: 'createRelationship',
    request: {
      params: z.object({
        relationName: z
          .string()
          .openapi({
            param: {
              name: 'relationName',
              in: 'path',
              description:
                "The name of the relationship. This method supports the 'favourite'\n(i.e. 'save for later') relationship. You can also specify any other\nvalue for this parameter to create a custom relationship type.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'sourceType',
              in: 'path',
              description:
                "The source entity type of the relationship. This must be 'user', if\nthe `relationName` is 'favourite'.",
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        sourceKey: z
          .string()
          .openapi({
            param: {
              name: 'sourceKey',
              in: 'path',
              description:
                "- The identifier for the source entity:\n\n- If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `sourceType` is 'content', then specify the content ID.\n- If `sourceType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'targetType',
              in: 'path',
              description:
                "The target entity type of the relationship. This must be 'space' or\n'content', if the `relationName` is 'favourite'.",
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        targetKey: z
          .string()
          .openapi({
            param: {
              name: 'targetKey',
              in: 'path',
              description:
                "- The identifier for the target entity:\n\n- If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `targetType` is 'content', then specify the content ID.\n- If `targetType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        sourceStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'sourceStatus',
              in: 'query',
              description:
                "The status of the source. This parameter is only used when the\n`sourceType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        targetStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'targetStatus',
              in: 'query',
              description:
                "The status of the target. This parameter is only used when the\n`targetType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        sourceVersion: z
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
              name: 'sourceVersion',
              in: 'query',
              description:
                "The version of the source. This parameter is only used when the\n`sourceType` is 'content' and the `sourceStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        targetVersion: z
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
              name: 'targetVersion',
              in: 'query',
              description:
                "The version of the target. This parameter is only used when the\n`targetType` is 'content' and the `targetStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the relationship is created.',
        content: { 'application/json': { schema: RelationSchema } },
      },
      400: { description: 'Returned if the request is invalid.', content: {} },
      401: {
        description:
          'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
        content: {},
      },
      403: {
        description: 'Returned if the user does not have permission to use Confluence.',
        content: {},
      },
      404: {
        description: 'Returned if the user, space or content could not be found.',
        content: {},
      },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
  })

export const deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute =
  createRoute({
    method: 'delete',
    path: '/wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey}',
    tags: ['Relation'],
    summary: 'Delete relationship',
    description:
      "Deletes a relationship between two entities (user, space, content).\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).\nFor favourite relationships, the current user can only delete their own\nfavourite relationships. A space administrator can delete favourite\nrelationships for any user.",
    operationId: 'deleteRelationship',
    request: {
      params: z.object({
        relationName: z
          .string()
          .openapi({
            param: {
              name: 'relationName',
              in: 'path',
              description: 'The name of the relationship.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'sourceType',
              in: 'path',
              description:
                "The source entity type of the relationship. This must be 'user', if\nthe `relationName` is 'favourite'.",
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        sourceKey: z
          .string()
          .openapi({
            param: {
              name: 'sourceKey',
              in: 'path',
              description:
                "- The identifier for the source entity:\n\n- If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `sourceType` is 'content', then specify the content ID.\n- If `sourceType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'targetType',
              in: 'path',
              description:
                "The target entity type of the relationship. This must be 'space' or\n'content', if the `relationName` is 'favourite'.",
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        targetKey: z
          .string()
          .openapi({
            param: {
              name: 'targetKey',
              in: 'path',
              description:
                "- The identifier for the target entity:\n\n- If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `targetType` is 'content', then specify the content ID.\n- If `targetType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        sourceStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'sourceStatus',
              in: 'query',
              description:
                "The status of the source. This parameter is only used when the\n`sourceType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        targetStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'targetStatus',
              in: 'query',
              description:
                "The status of the target. This parameter is only used when the\n`targetType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        sourceVersion: z
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
              name: 'sourceVersion',
              in: 'query',
              description:
                "The version of the source. This parameter is only used when the\n`sourceType` is 'content' and the `sourceStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        targetVersion: z
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
              name: 'targetVersion',
              in: 'query',
              description:
                "The version of the target. This parameter is only used when the\n`targetType` is 'content' and the `targetStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      204: {
        description: "Returned if the relationship is deleted or the relationship didn't\nexist.",
        content: {},
      },
      400: { description: 'Returned if the request is invalid.', content: {} },
      401: {
        description:
          'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
        content: {},
      },
      403: {
        description: 'Returned if the user does not have permission to delete the\nrelationship.',
        content: {},
      },
      404: {
        description: 'Returned if the user, space or content could not be found.',
        content: {},
      },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
  })

export const getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute =
  createRoute({
    method: 'get',
    path: '/wiki/rest/api/relation/{relationName}/to/{targetType}/{targetKey}/from/{sourceType}',
    tags: ['Relation'],
    summary: 'Find source entities related to a target entity',
    description:
      "Returns all target entities that have a particular relationship to the\nsource entity. Note, relationships are one way.\n\nFor example, the following method finds all users that have a 'collaborator'\nrelationship to a piece of content with an ID of '1234':\n`GET /wiki/rest/api/relation/collaborator/to/content/1234/from/user`\nNote, 'collaborator' is an example custom relationship type.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view both the target entity and source entity.",
    operationId: 'findSourcesForTarget',
    request: {
      params: z.object({
        relationName: z
          .string()
          .openapi({
            param: {
              name: 'relationName',
              in: 'path',
              description:
                "The name of the relationship. This method supports relationships created via\n[Create relationship](#api-wiki-rest-api-relation-relationname-from-sourcetype-sourcekey-to-targettype-targetkey-put).\nNote, this method does not support 'like' or 'favourite' relationships.",
              required: true,
              schema: { type: 'string' },
            },
          }),
        sourceType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'sourceType',
              in: 'path',
              description: 'The source entity type of the relationship.',
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        targetType: z
          .enum(['user', 'content', 'space'])
          .openapi({
            param: {
              name: 'targetType',
              in: 'path',
              description: 'The target entity type of the relationship.',
              required: true,
              schema: { type: 'string', enum: ['user', 'content', 'space'] },
            },
          }),
        targetKey: z
          .string()
          .openapi({
            param: {
              name: 'targetKey',
              in: 'path',
              description:
                "The identifier for the target entity:\n\n- If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or\nthe account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the\n[migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)\nfor details.\n- If `targetType` is 'content', then specify the content ID.\n- If `targetType` is 'space', then specify the space key.",
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        sourceStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'sourceStatus',
              in: 'query',
              description:
                "The status of the source. This parameter is only used when the\n`sourceType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        targetStatus: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'targetStatus',
              in: 'query',
              description:
                "The status of the target. This parameter is only used when the\n`targetType` is 'content'.",
              schema: { type: 'string' },
              required: false,
            },
          }),
        sourceVersion: z
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
              name: 'sourceVersion',
              in: 'query',
              description:
                "The version of the source. This parameter is only used when the\n`sourceType` is 'content' and the `sourceStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        targetVersion: z
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
              name: 'targetVersion',
              in: 'query',
              description:
                "The version of the target. This parameter is only used when the\n`targetType` is 'content' and the `targetStatus` is 'historical'.",
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        expand: z
          .preprocess(
            (val) =>
              val === undefined
                ? val
                : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                    typeof item === 'string' ? item.split(',') : [item],
                  ),
            z.array(z.enum(['relationData', 'source', 'target'])),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'expand',
              in: 'query',
              description:
                'A multi-value parameter indicating which properties of the response\nobject to expand.\n\n- `relationData` returns information about the relationship, such as\nwho created it and when it was created.\n- `source` returns the source entity.\n- `target` returns the target entity.',
              style: 'form',
              explode: false,
              schema: {
                type: 'array',
                items: { type: 'string', enum: ['relationData', 'source', 'target'] },
              },
              required: false,
            },
          }),
        start: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .default(0)
          .exactOptional()
          .openapi({
            param: {
              name: 'start',
              in: 'query',
              description: 'The starting index of the returned relationships.',
              schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
              required: false,
            },
          }),
        limit: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32().min(0),
          )
          .default(25)
          .exactOptional()
          .openapi({
            param: {
              name: 'limit',
              in: 'query',
              description:
                'The maximum number of relationships to return per page.\nNote, this may be restricted by fixed system limits.',
              schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the requested relationships are returned.',
        content: { 'application/json': { schema: RelationArraySchema } },
      },
      400: { description: 'Returned if the request is invalid.', content: {} },
      403: {
        description: 'Returned if the user does not have permission to view the\nrelationship',
        content: {},
      },
      404: { description: 'Returned if the target entity does not exist.', content: {} },
    },
    security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
  })

export const getWikiRestApiSearchRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/search',
  tags: ['Search'],
  summary: 'Search content',
  description:
    'Searches for content using the\n[Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).\n\n**Note that CQL input queries submitted through the `/wiki/rest/api/search` endpoint no longer support user-specific fields like `user`, `user.fullname`, `user.accountid`, and `user.userkey`.** \nSee this [deprecation notice](https://developer.atlassian.com/cloud/confluence/deprecation-notice-search-api/) for more details.\n\nExample initial call:\n```\n/wiki/rest/api/search?cql=type=page&limit=25\n```\n\nExample response:\n```\n{\n  "results": [\n    { ... },\n    { ... },\n    ...\n    { ... }\n  ],\n  "limit": 25,\n  "size": 25,\n  ...\n  "_links": {\n    "base": "<url>",\n    "context": "<url>",\n    "next": "/rest/api/search?cql=type=page&limit=25&cursor=raNDoMsTRiNg",\n    "self": "<url>"\n  }\n}\n```\n\nWhen additional results are available, returns `next` and `prev` URLs to retrieve them in subsequent calls. The URLs each contain a cursor that points to the appropriate set of results. Use `limit` to specify the number of results returned in each call.\n\nExample subsequent call (taken from example response):\n```\n/wiki/rest/api/search?cql=type=page&limit=25&cursor=raNDoMsTRiNg\n```\nThe response to this will have a `prev` URL similar to the `next` in the example response.\n\nIf the expand query parameter is used with the `body.export_view` and/or `body.styled_view` properties, then the query limit parameter will be restricted to a maximum value of 25.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to view the entities. Note, only entities that the user has\npermission to view will be returned.',
  operationId: 'searchByCQL',
  request: {
    query: z.object({
      cql: z
        .string()
        .openapi({
          param: {
            name: 'cql',
            in: 'query',
            description:
              'The CQL query to be used for the search. See\n[Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/)\nfor instructions on how to build a CQL query.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cqlcontext: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cqlcontext',
            in: 'query',
            description:
              'The space, content, and content status to execute the search\nagainst.\n\n- `spaceKey` Key of the space to search against. Optional.\n- `contentId` ID of the content to search against. Optional. Must be\nin the space specified by `spaceKey`.\n- `contentStatuses` Content statuses to search against. Optional.\n\nSpecify these values in an object. For example,\n`cqlcontext={%22spaceKey%22:%22TEST%22, %22contentId%22:%22123%22}`',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'Pointer to a set of search results, returned as part of the `next` or `prev` URL from the previous search call.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      next: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'next',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      prev: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'prev',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of content objects to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The start point of the collection to return',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      includeArchivedSpaces: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArchivedSpaces',
            in: 'query',
            description: 'Whether to include content from archived spaces in the results.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      excludeCurrentSpaces: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeCurrentSpaces',
            in: 'query',
            description: 'Whether to exclude current spaces and only show archived spaces.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      excerpt: z
        .enum(['highlight', 'indexed', 'none', 'highlight_unescaped', 'indexed_unescaped'])
        .default('highlight')
        .exactOptional()
        .openapi({
          param: {
            name: 'excerpt',
            in: 'query',
            description: 'The excerpt strategy to apply to the result',
            schema: {
              type: 'string',
              default: 'highlight',
              enum: ['highlight', 'indexed', 'none', 'highlight_unescaped', 'indexed_unescaped'],
            },
            required: false,
          },
        }),
      sitePermissionTypeFilter: z
        .enum(['all', 'externalCollaborator', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'sitePermissionTypeFilter',
            in: 'query',
            description:
              'Filters users by permission type. Use `none` to default to licensed users, `externalCollaborator`\nfor external/guest users, and `all` to include all permission types.',
            schema: {
              type: 'string',
              default: 'none',
              enum: ['all', 'externalCollaborator', 'none'],
            },
            required: false,
          },
        }),
      _: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: '_',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested results are returned.',
      content: { 'application/json': { schema: SearchPageResponseSearchResultSchema } },
    },
    400: { description: 'Returned if the CQL query cannot be parsed.', content: {} },
    403: {
      description: 'Returned if the calling user does not have permission to access\nConfluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['search:confluence'] }],
})

export const getWikiRestApiSearchUserRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/search/user',
  tags: ['Search'],
  summary: 'Search users',
  description:
    "Searches for users using user-specific queries from the\n[Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).\n\nNote that CQL input queries submitted through the `/wiki/rest/api/search/user` endpoint only support user-specific fields like `user`, `user.fullname`, `user.accountid`, and `user.userkey`.\n\nNote that some user fields may be set to null depending on the user's privacy settings.\nThese are: email, profilePicture, displayName, and timeZone.",
  operationId: 'searchUser',
  request: {
    query: z.object({
      cql: z
        .string()
        .openapi({
          param: {
            name: 'cql',
            in: 'query',
            description:
              'The CQL query to be used for the search. See\n[Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/)\nfor instructions on how to build a CQL query.\n\nExample queries:\n          cql=type=user will return up to 10k users\n          cql=user="1234" will return user with accountId "1234"\n          You can also use IN, NOT IN, != operators\n          cql=user IN ("12", "34") will return users with accountids "12" and "34"\n          cql=user.fullname~jo will return users with nickname/full name starting with "jo"\n          cql=user.accountid="123" will return user with accountId "123"',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned users.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of user objects to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the user to expand.\n\n- `operations` returns the operations for the user, which are used\nwhen setting permissions.\n- `personalSpace` returns the personal space of the user.',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      sitePermissionTypeFilter: z
        .enum(['all', 'externalCollaborator', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'sitePermissionTypeFilter',
            in: 'query',
            description:
              'Filters users by permission type. Use `none` to default to licensed users, `externalCollaborator`\nfor external/guest users, and `all` to include all permission types.',
            schema: {
              type: 'string',
              default: 'none',
              enum: ['all', 'externalCollaborator', 'none'],
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested results are returned.',
      content: { 'application/json': { schema: SearchPageResponseSearchResultSchema } },
    },
    400: { description: 'Returned if the CQL query cannot be parsed.', content: {} },
    403: {
      description: 'Returned if the calling user does not have permission to access\nConfluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:content-details:confluence'] }],
})

export const getWikiRestApiSettingsLookandfeelRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/settings/lookandfeel',
  tags: ['Settings'],
  summary: 'Get look and feel settings',
  description:
    'Returns the look and feel settings for the site or a single space. This\nincludes attributes such as the color scheme, padding, and border radius.\n\nThe look and feel settings for a space can be inherited from the global\nlook and feel settings or provided by a theme.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nNone',
  operationId: 'getLookAndFeelSettings',
  request: {
    query: z.object({
      spaceKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'query',
            description:
              'The key of the space for which the look and feel settings will be\nreturned. If this is not set, only the global look and feel settings\nare returned.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested look and feel settings are returned.',
      content: { 'application/json': { schema: LookAndFeelSettingsSchema } },
    },
    400: { description: 'Returned if `spaceKey` is invalid.', content: {} },
    404: { description: 'Returned if there is no space with the given `spaceKey`.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const putWikiRestApiSettingsLookandfeelRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/settings/lookandfeel',
  tags: ['Settings'],
  summary: 'Select look and feel settings',
  description:
    "Sets the look and feel settings to the default (global) settings, the\ncustom settings, or the current theme's settings for a space.\nThe custom and theme settings can only be selected if there is already\na theme set for a space. Note, the default space settings are inherited\nfrom the current global settings.\n\n**[Permissions](https://support.atlassian.com/confluence-cloud/docs/what-are-confluences-roles/) required**:\n[`manage/look-and-feel`](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) permission for the space.\n\n**Note:** To find the display name for each permission ID, call the [Get available space permissions](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) API.",
  operationId: 'updateLookAndFeel',
  request: {
    body: {
      description: 'The look and feel type to be set.',
      content: { 'application/json': { schema: LookAndFeelSelectionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the look and feel settings were set.',
      content: { 'application/json': { schema: LookAndFeelSelectionSchema } },
    },
    400: {
      description: 'Returned if;\n\n- `spaceKey` is invalid.\n- `lookAndFeelType` is invalid.',
      content: {},
    },
    403: {
      description:
        "Returned if the calling user doesn't have permission to edit the\nlook and feel settings.",
      content: {},
    },
    404: { description: 'Returned if there is no space with the given `spaceKey`.', content: {} },
    409: {
      description:
        "Returned if `lookAndFeelType` is set to 'custom' or 'theme',\nand a theme is not currently set for the space.",
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const postWikiRestApiSettingsLookandfeelCustomRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/settings/lookandfeel/custom',
  tags: ['Settings'],
  summary: 'Update look and feel settings',
  description:
    "Updates the look and feel settings for the site or for a single space.\nIf custom settings exist, they are updated. If no custom settings exist,\nthen a set of custom settings is created.\n\nNote, if a theme is selected for a space, the space look and feel settings\nare provided by the theme and cannot be overridden.\n\n**[Permissions](https://support.atlassian.com/confluence-cloud/docs/what-are-confluences-roles/) required**:\n\n- If `spaceKey` is specified, [`manage/look-and-feel`](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) permission for the space.\n- If `spaceKey` is omitted, 'Confluence Administrator' global permission.\n\n**Note:** To find the display name for each permission ID, call the [Get available space permissions](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) API.",
  operationId: 'updateLookAndFeelSettings',
  request: {
    query: z.object({
      spaceKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'query',
            description:
              'The key of the space for which the look and feel settings will be\nupdated. If this is not set, the global look and feel settings will\nbe updated.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'The updated settings. All values for the settings must be included,\nregardless of whether they are being changed.\n\nOne way to create the request body is to copy the settings from the\nresponse body of [Get look and feel settings](#api-settings-lookandfeel-get)\nand modify it as needed.',
      content: { 'application/json': { schema: LookAndFeelSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the look and feel settings are updated.',
      content: { 'application/json': { schema: LookAndFeelWithLinksSchema } },
    },
    400: {
      description:
        'Returned if;\n\n- The `spaceKey` is invalid\n- The request body contains invalid data.',
      content: {},
    },
    403: {
      description:
        "Returned if the calling user doesn't have permission to edit the\nlook and feel settings.",
      content: {},
    },
    404: { description: 'Returned if there is no space with the given `spaceKey`.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const deleteWikiRestApiSettingsLookandfeelCustomRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/settings/lookandfeel/custom',
  tags: ['Settings'],
  summary: 'Reset look and feel settings',
  description:
    "Resets the custom look and feel settings for the site or a single space.\nThis changes the values of the custom settings to be the same as the\ndefault settings. It does not change which settings (default or custom)\nare selected. Note, the default space settings are inherited from the\ncurrent global settings.\n\n**[Permissions](https://support.atlassian.com/confluence-cloud/docs/what-are-confluences-roles/) required**:\n\n- If `spaceKey` is specified, [`manage/look-and-feel`](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) permission for the space.\n- If `spaceKey` is omitted, 'Confluence Administrator' global permission.\n\n**Note:** To find the display name for each permission ID, call the [Get available space permissions](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) API.",
  operationId: 'resetLookAndFeelSettings',
  request: {
    query: z.object({
      spaceKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'query',
            description:
              'The key of the space for which the look and feel settings will be\nreset. If this is not set, the global look and feel settings will\nbe reset.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the look and feel settings have been reset.', content: {} },
    400: { description: 'Returned if `spaceKey` is invalid.', content: {} },
    403: {
      description:
        "Returned if the calling user doesn't have permission to reset the\nlook and feel.",
      content: {},
    },
    404: { description: 'Returned if there is no space with the given `spaceKey`.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const getWikiRestApiSettingsSystemInfoRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/settings/systemInfo',
  tags: ['Settings'],
  summary: 'Get system info',
  description:
    "Returns the system information for the Confluence Cloud tenant. This\ninformation is used by Atlassian.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getSystemInfo',
  responses: {
    200: {
      description:
        'Returned if the system information for the Confluence Cloud tenant\nis returned.',
      content: { 'application/json': { schema: SystemInfoEntitySchema } },
    },
    403: {
      description:
        'Returned when the user does not have permission to view the system\ninformation.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const getWikiRestApiSettingsThemeRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/settings/theme',
  tags: ['Themes'],
  summary: 'Get themes',
  description:
    'Returns all themes, not including the default theme.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None',
  operationId: 'getThemes',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned themes.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of themes to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 100 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested themes are returned.',
      content: { 'application/json': { schema: ThemeArraySchema } },
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const getWikiRestApiSettingsThemeSelectedRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/settings/theme/selected',
  tags: ['Themes'],
  summary: 'Get global theme',
  description:
    'Returns the globally assigned theme.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None',
  operationId: 'getGlobalTheme',
  responses: {
    200: {
      description: 'Returned if the global theme is returned.',
      content: { 'application/json': { schema: ThemeSchema } },
    },
    404: {
      description:
        'Returned if Confluence does not have a global theme assigned, i.e.\nthe default theme is used.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const getWikiRestApiSettingsThemeThemeKeyRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/settings/theme/{themeKey}',
  tags: ['Themes'],
  summary: 'Get theme',
  description:
    'Returns a theme. This includes information about the theme name,\ndescription, and icon.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None',
  operationId: 'getTheme',
  request: {
    params: z.object({
      themeKey: z
        .string()
        .openapi({
          param: {
            name: 'themeKey',
            in: 'path',
            description: 'The key of the theme to be returned.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested theme is returned.',
      content: { 'application/json': { schema: ThemeSchema } },
    },
    404: { description: 'Returned if there is no theme with the given key.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['manage:confluence-configuration'] }],
})

export const postWikiRestApiSpaceRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/space',
  tags: ['Space'],
  summary: 'Create space',
  description:
    "Creates a new space. Note, currently you cannot set space labels when\ncreating a space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Create Space(s)' global permission.",
  operationId: 'createSpace',
  request: {
    body: {
      description: 'The space to be created.',
      content: { 'application/json': { schema: SpaceCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the space is created.',
      content: { 'application/json': { schema: SpaceSchema } },
    },
    400: {
      description:
        'Returned if any of the following is true:\n\n- The request is invalid.\n- The space already exists.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description: 'Returned if the callig user does not have permission to create a space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const postWikiRestApiSpacePrivateRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/space/_private',
  tags: ['Space'],
  summary: 'Create private space',
  description:
    "Creates a new space that is only visible to the creator. This method is\nthe same as the [Create space](#api-space-post) method with permissions\nset to the current user only. Note, currently you cannot set space\nlabels when creating a space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Create Space(s)' global permission.",
  operationId: 'createPrivateSpace',
  request: {
    body: {
      description: 'The space to be created.',
      content: { 'application/json': { schema: SpaceCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the space is created.',
      content: { 'application/json': { schema: SpaceSchema } },
    },
    400: {
      description:
        'Returned if any of the following is true:\n\n- The request is invalid.\n- The space already exists.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have permission to create a space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const putWikiRestApiSpaceSpaceKeyRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/space/{spaceKey}',
  tags: ['Space'],
  summary: 'Update space',
  description:
    "Updates the name, description, or homepage of a space.\n\n-   For security reasons, permissions cannot be updated via the API and\nmust be changed via the user interface instead.\n-   Currently you cannot set space labels when updating a space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'updateSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The updated space.',
      content: { 'application/json': { schema: SpaceUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the space is updated.',
      content: { 'application/json': { schema: SpaceSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if any of the following is true:\n\n- There is no space with the given key\n- The calling user does not have permission to update the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const deleteWikiRestApiSpaceSpaceKeyRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/space/{spaceKey}',
  tags: ['Space'],
  summary: 'Delete space',
  description:
    "Permanently deletes a space without sending it to the trash. Note, the space will be deleted in a long running task.\nTherefore, the space may not be deleted yet when this method has\nreturned. Clients should poll the status link that is returned in the\nresponse until the task completes.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'deleteSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Returns a pointer to the status of the space deletion task.',
      content: { 'application/json': { schema: LongTaskSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if any of the following is true:\n\n- There is no space with the given key.\n- The calling user does not have permission to delete the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const postWikiRestApiSpaceSpaceKeyPermissionRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/space/{spaceKey}/permission',
  tags: ['Space permissions'],
  summary: 'Add new permission to space',
  description:
    "Adds new permission to space.\n\nIf the permission to be added is a group permission, the group can be identified\nby its group name or group id.\n\nNote: Apps cannot access this REST resource - including when utilizing user impersonation.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'addPermissionToSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its content.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The permission to be created.',
      content: { 'application/json': { schema: SpacePermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the requested content is returned.',
      content: { 'application/json': { schema: SpacePermissionV2Schema } },
    },
    400: {
      description:
        "Used for various errors. Such as:\n- Permission already exists for the given user or group.\n- 'read space' permission doesn't exist for the given user or group.\n- No group found with the given groupName or groupId",
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: { description: "Returned if the user isn't authorized.", content: {} },
    404: {
      description:
        'Returned if any of the following is true:\n- There is no space with the given key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [
    { basicAuth: [] },
    { oAuthDefinitions: ['read:space.permission:confluence', 'write:space.permission:confluence'] },
  ],
})

export const postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/space/{spaceKey}/permission/custom-content',
  tags: ['Space permissions'],
  summary: 'Add new custom content permission to space',
  description:
    "Adds new custom content permission to space.\n\nIf the permission to be added is a group permission, the group can be identified\nby its group name or group id.\n\nNote: Only apps can access this REST resource and only make changes to the respective app permissions.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'addCustomContentPermissions',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its content.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The permissions to be created.',
      content: { 'application/json': { schema: SpacePermissionCustomContentSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returned if the requested content is returned.', content: {} },
    400: {
      description:
        "Used for various errors. Such as:\n- Permission already exists for the given user or group.\n- 'read space' permission doesn't exist for the given user or group.\n- No group found with the given groupName or groupId",
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: { description: "Returned if the user isn't authorized.", content: {} },
    404: {
      description:
        'Returned if any of the following is true:\n- There is no space with the given key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [
    { basicAuth: [] },
    { oAuthDefinitions: ['read:space.permission:confluence', 'write:space.permission:confluence'] },
  ],
})

export const deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/space/{spaceKey}/permission/{id}',
  tags: ['Space permissions'],
  summary: 'Remove a space permission',
  description:
    "Removes a space permission. Note that removing Read Space permission for a user or group will remove all\nthe space permissions for that user or group.\n\nNote: Apps cannot access this REST resource - including when utilizing user impersonation.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'removePermission',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its content.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Id of the permission to be deleted.',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Permission successfully removed.', content: {} },
    400: {
      description:
        'Used for various errors. Such as:\n- All of the admin permissions cannot be removed from a space.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: { description: "Returned if the user isn't authorized.", content: {} },
    404: {
      description:
        'Returned if any of the following is true:\n- There is no permission with the given id.\n- There is no space with the given key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:space.permission:confluence'] }],
})

export const getWikiRestApiSpaceSpaceKeySettingsRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/settings',
  tags: ['Space settings'],
  summary: 'Get space settings',
  description:
    "Returns the settings of a space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space.",
  operationId: 'getSpaceSettings',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its settings.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the space settings are returned.',
      content: { 'application/json': { schema: SpaceSettingsSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no space with the given key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-space.summary'] }],
})

export const putWikiRestApiSpaceSpaceKeySettingsRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/space/{spaceKey}/settings',
  tags: ['Space settings'],
  summary: 'Update space settings',
  description:
    'Updates the settings for a space.\n\n**[Permissions](https://support.atlassian.com/confluence-cloud/docs/what-are-confluences-roles/) required**:\n[`manage/space`](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) permission for the space.\n\n**Note:** To find the display name for each permission ID, call the [Get available space permissions](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) API.',
  operationId: 'updateSpaceSettings',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space whose settings will be updated.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The space settings to update.',
      content: { 'application/json': { schema: SpaceSettingsUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if space settings are updated.',
      content: { 'application/json': { schema: SpaceSettingsSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no space with the given key.\n- The calling user does not have permission to update the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const getWikiRestApiSpaceSpaceKeyStateRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/state',
  tags: ['Content states'],
  summary: 'Get space suggested content states',
  description:
    "Get content states that are suggested in the space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space.",
  operationId: 'getSpaceContentStates',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its content state settings.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested space exists, and user has space view permission.',
      content: {
        'application/json': {
          schema: z
            .array(ContentStateSchema)
            .openapi({ description: 'Space suggested content states that users can choose from' }),
        },
      },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have space admin permission.' },
    404: { description: 'Returned if the space with given key can not be found.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-space.summary'] }],
})

export const getWikiRestApiSpaceSpaceKeyStateSettingsRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/state/settings',
  tags: ['Content states'],
  summary: 'Get content state settings for space',
  description:
    "Get object describing whether content states are allowed at all, if custom content states or space content states\nare restricted, and a list of space content states allowed for the space if they are not restricted.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'getContentStateSettings',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its content state settings.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested space exists, and user has space admin permission.',
      content: { 'application/json': { schema: ContentStateSettingsSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have space admin permission.' },
    404: { description: 'Returned if the space with given key can not be found.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-space.summary'] }],
})

export const getWikiRestApiSpaceSpaceKeyStateContentRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/state/content',
  tags: ['Content states'],
  summary: 'Get content in space with given content state',
  description:
    "Returns all content that has the provided content state in a space.\n\nIf the expand query parameter is used with the `body.export_view` and/or `body.styled_view` properties, then the query limit parameter will be restricted to a maximum value of 25.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space.",
  operationId: 'getContentsWithState',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its content state settings.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'state-id': z
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
            name: 'state-id',
            in: 'query',
            description: 'The id of the content state to filter content by',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the content to expand.\nOptions include: space, version, history, children, etc.\n\nEx: space,version',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of results to return',
            required: false,
            schema: { type: 'integer', maximum: 100, minimum: 0, format: 'int32', default: 25 },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Number of result to start returning. (0 indexed)',
            schema: { type: 'integer', minimum: 0, format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if search was successful.',
      content: { 'application/json': { schema: ContentArraySchema } },
    },
    400: { description: 'Returned if limit or start are out of range, stateId is omitted.' },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
    },
    403: { description: 'Returned if user does not have space view permission.' },
    404: { description: 'Returned if the space with given key can not be found.' },
  },
  security: [{ oAuthDefinitions: ['read:confluence-content.all'] }, { basicAuth: [] }],
})

export const getWikiRestApiSpaceSpaceKeyThemeRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/theme',
  tags: ['Themes'],
  summary: 'Get space theme',
  description:
    'Returns the theme selected for a space, if one is set. If no space\ntheme is set, this means that the space is inheriting the global look\nand feel settings.\n\n**[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘View’ permission for the space.',
  operationId: 'getSpaceTheme',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to be queried for its theme.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested theme is returned.',
      content: { 'application/json': { schema: ThemeSchema } },
    },
    404: {
      description:
        'Returned if any of the following is true:\n\n- There is no space with the given key.\n- The space does not have a theme assigned to it.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-space.summary'] }],
})

export const putWikiRestApiSpaceSpaceKeyThemeRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/space/{spaceKey}/theme',
  tags: ['Themes'],
  summary: 'Set space theme',
  description:
    "Sets the theme for a space. Note, if you want to reset the space theme to\nthe default Confluence theme, use the 'Reset space theme' method instead\nof this method.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'setSpaceTheme',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to set the theme for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ThemeUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returned if the theme was set for the space.',
      content: { 'application/json': { schema: ThemeSchema } },
    },
    403: { description: 'Returned if the theme key is invalid.', content: {} },
    404: { description: 'Returned if there is no space with the given key.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const deleteWikiRestApiSpaceSpaceKeyThemeRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/space/{spaceKey}/theme',
  tags: ['Themes'],
  summary: 'Reset space theme',
  description:
    "Resets the space theme. This means that the space will inherit the\nglobal look and feel settings\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space.",
  operationId: 'resetSpaceTheme',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to reset the theme for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the theme was reset for the space.', content: {} },
    404: { description: 'Returned if there is no space with the given key.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const getWikiRestApiSpaceSpaceKeyWatchRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/watch',
  tags: ['Content watches'],
  summary: 'Get space watchers',
  description: 'Returns a list of watchers of a space',
  operationId: 'getWatchersForSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to get watchers.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The start point of the collection to return.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The limit of the number of items to return, this may be restricted by fixed system limits.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if watchers list is returned.',
      content: { 'application/json': { schema: SpaceWatchArraySchema } },
    },
    404: { description: 'Returned if there is no space with the given key', content: {} },
  },
  security: [
    { basicAuth: [] },
    { oAuthDefinitions: ['read:watcher:confluence', 'read:user:confluence'] },
  ],
})

export const getWikiRestApiSpaceSpaceKeyLabelRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/space/{spaceKey}/label',
  tags: ['Experimental'],
  summary: 'Get Space Labels',
  description:
    'Returns a list of labels associated with a space. Can provide a prefix as well as other filters to\nselect different types of labels.',
  operationId: 'getLabelsForSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to get labels for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      prefix: z
        .enum(['global', 'my', 'team'])
        .exactOptional()
        .openapi({
          param: {
            name: 'prefix',
            in: 'query',
            description:
              "Filters the results to labels with the specified prefix. If this parameter\nis not specified, then labels with any prefix will be returned.\n\n- `global` prefix is used by labels that are on content within the provided space.\n- `my` prefix can be explicitly added by a user when adding a label\nvia the UI, e.g. 'my:example-label'.\n- `team` prefix is used for labels applied to the space.",
            schema: { type: 'string', enum: ['global', 'my', 'team'] },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned labels.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of labels to return per page. Note,\nthis may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the list of labels is returned.',
      content: { 'application/json': { schema: LabelArraySchema } },
    },
    404: {
      description:
        'Returned if;\n- There is no space with the given space key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-space.summary'] }],
})

export const postWikiRestApiSpaceSpaceKeyLabelRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/space/{spaceKey}/label',
  tags: ['Experimental'],
  summary: 'Add labels to a space',
  description:
    'Adds labels to a piece of content. Does not modify the existing labels.\n\nNotes:\n\n- Labels can also be added when creating content ([Create content](#api-content-post)).\n- Labels can be updated when updating content ([Update content](#api-content-id-put)).\nThis will delete the existing labels and replace them with the labels in\nthe request.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to update the content.',
  operationId: 'addLabelsToSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to add labels to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The labels to add to the content.',
      content: { 'application/json': { schema: z.array(LabelCreateSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the labels are added to the content.',
      content: { 'application/json': { schema: LabelArraySchema } },
    },
    400: {
      description:
        'Returned if;\n\n- The body contains labels with invalid characters or too many characters.\n- The body contains too many labels.\n- The target content would contain too many labels after the operation.\n- The calling user does not have permission to edit labels.',
      content: {},
    },
    403: {
      description: 'Returned if the calling user can view but not edit the content.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n- There is no space with the given space key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const deleteWikiRestApiSpaceSpaceKeyLabelRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/space/{spaceKey}/label',
  tags: ['Experimental'],
  summary: 'Remove label from a space',
  operationId: 'deleteLabelFromSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to remove a labels from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name of the label to remove',
            required: true,
            schema: { type: 'string' },
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefix',
            in: 'query',
            description: 'The prefix of the label to remove. If not provided defaults to global.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the label was successfully deleted.', content: {} },
    400: { description: 'Returned if;\n- The user does not provide a label name', content: {} },
    404: {
      description:
        'Returned if;\n- There is no space with the given space key.\n- The calling user does not have permission to view the space.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-space'] }],
})

export const putWikiRestApiTemplateRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/template',
  tags: ['Template'],
  summary: 'Update content template',
  description:
    "Updates a content template. Note, blueprint templates cannot be updated\nvia the REST API.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space to update a space template or 'Confluence Administrator'\nglobal permission to update a global template.",
  operationId: 'updateContentTemplate',
  request: {
    body: {
      description: 'The updated content template.',
      content: { 'application/json': { schema: ContentTemplateUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the template is updated.',
      content: { 'application/json': { schema: ContentTemplateSchema } },
    },
    400: { description: 'Returned if template name is null or an empty string.', content: {} },
    403: { description: 'Returned if the calling user does not have permission.', content: {} },
    404: {
      description:
        "Returned if the calling user does not have permission to update the\ntemplate or if the template doesn't exist.",
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const postWikiRestApiTemplateRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/template',
  tags: ['Template'],
  summary: 'Create content template',
  description:
    "Creates a new content template. Note, blueprint templates cannot be created via the REST API.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Admin' permission for the space to create a space template or 'Confluence Administrator'\nglobal permission to create a global template.",
  operationId: 'createContentTemplate',
  request: {
    body: {
      description:
        "The content template to be created.\nThe content body must be in 'storage' format.",
      content: { 'application/json': { schema: ContentTemplateCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the template is created.',
      content: { 'application/json': { schema: ContentTemplateSchema } },
    },
    400: { description: 'Returned if template name is null or an empty string.', content: {} },
    403: {
      description: 'Returned if the calling user does not have permission to create the\ntemplate.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiTemplateBlueprintRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/template/blueprint',
  tags: ['Template'],
  summary: 'Get blueprint templates',
  description:
    "Returns all templates provided by blueprints. Use this method to retrieve\nall global blueprint templates or all blueprint templates in a space.\n\nNote, all global blueprints are inherited by each space. Space blueprints\ncan be customised without affecting the global blueprints.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space to view blueprints for the space and permission\nto access the Confluence site ('Can use' global permission) to view global blueprints.",
  operationId: 'getBlueprintTemplates',
  request: {
    query: z.object({
      spaceKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'query',
            description:
              'The key of the space to be queried for templates. If the `spaceKey`\nis not specified, global blueprint templates will be returned.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned templates.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of templates to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
      expand: TemplateExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested templates are returned.',
      content: { 'application/json': { schema: BlueprintTemplateArraySchema } },
    },
    403: {
      description:
        'Returned if the calling user does not have permission to view\nblueprint templates.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiTemplatePageRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/template/page',
  tags: ['Template'],
  summary: 'Get content templates',
  description:
    "Returns all content templates. Use this method to retrieve all global\ncontent templates or all content templates in a space.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space to view space templates and permission to\naccess the Confluence site ('Can use' global permission) to view global templates.",
  operationId: 'getContentTemplates',
  request: {
    query: z.object({
      spaceKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'query',
            description:
              'The key of the space to be queried for templates. If the `spaceKey`\nis not specified, global templates will be returned.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned templates.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of templates to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
      expand: TemplateExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested templates are returned.',
      content: { 'application/json': { schema: ContentTemplateArraySchema } },
    },
    403: {
      description:
        'Returned if the calling user does not have permission to view the\ncontent templates.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiTemplateContentTemplateIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/template/{contentTemplateId}',
  tags: ['Template'],
  summary: 'Get content template',
  description:
    "Returns a content template. This includes information about template,\nlike the name, the space or blueprint that the template is in, the body\nof the template, and more.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'View' permission for the space to view space templates and permission to\naccess the Confluence site ('Can use' global permission) to view global templates.",
  operationId: 'getContentTemplate',
  request: {
    params: z.object({
      contentTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'contentTemplateId',
            in: 'path',
            description: 'The ID of the content template to be returned.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ expand: TemplateExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returned if the requested template is returned.',
      content: { 'application/json': { schema: ContentTemplateSchema } },
    },
    403: {
      description:
        'Returned if;\n\n- There is no template with the given ID.\n- The calling user does not have permission to view the template.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const deleteWikiRestApiTemplateContentTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/template/{contentTemplateId}',
  tags: ['Template'],
  summary: 'Remove template',
  description:
    "Deletes a template. This results in different actions depending on the\ntype of template:\n\n- If the template is a content template, it is deleted.\n- If the template is a modified space-level blueprint template, it reverts\nto the template inherited from the global-level blueprint template.\n- If the template is a modified global-level blueprint template, it reverts\nto the default global-level blueprint template.\n\n Note, unmodified blueprint templates cannot be deleted.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n        'Admin' permission for the space to delete a space template or 'Confluence Administrator'\n        global permission to delete a global template.",
  operationId: 'removeTemplate',
  request: {
    params: z.object({
      contentTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'contentTemplateId',
            in: 'path',
            description: 'The ID of the template to be deleted.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Returned if the template has been successfully been deleted.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- There is no template with the given ID.\n- The calling user does not have permission to delete the template.',
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiUserRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user',
  tags: ['Users'],
  summary: 'Get user',
  description:
    "Returns a user. This includes information about the user, such as the\ndisplay name, account ID, profile picture, and more. The information returned may be\nrestricted by the user's profile visibility settings.\n\n**Note:** to add, edit, or delete users in your organization, see the\n[user management REST API](/cloud/admin/user-management/about/).\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getUser',
  request: {
    query: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            description:
              'The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.\nFor example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              "A multi-value parameter indicating which properties of the user to\nexpand.\n\n  - `operations` returns the operations that the user is allowed to do.\n  - `personalSpace` returns the user's personal space, if it exists.\n  - `isExternalCollaborator`(@deprecated) see `isGuest` in response to find out whether the user is a guest.",
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['operations', 'personalSpace', 'isExternalCollaborator'],
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested user is returned.',
      content: { 'application/json': { schema: UserSchema } },
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    403: {
      description: 'Returned if the calling user does not have permission to view users.',
      content: {},
    },
    404: {
      description: 'Returned if a user with the given accountId does not exist.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-user'] }],
})

export const getWikiRestApiUserAnonymousRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/anonymous',
  tags: ['Users'],
  summary: 'Get anonymous user',
  description:
    "Returns information about how anonymous users are represented, like the\nprofile picture and display name.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getAnonymousUser',
  request: {
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.literal('operations')),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              'A multi-value parameter indicating which properties of the user to\nexpand.\n\n  - `operations` returns the operations that the user is allowed to do.',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string', enum: ['operations'] } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the anonymous user representation is returned.',
      content: { 'application/json': { schema: UserAnonymousSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to use\nConfluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-user'] }],
})

export const getWikiRestApiUserCurrentRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/current',
  tags: ['Users'],
  summary: 'Get current user',
  description:
    "Returns the currently logged-in user. This includes information about\nthe user, like the display name, userKey, account ID, profile picture,\nand more.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getCurrentUser',
  request: {
    query: z.object({
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              "A multi-value parameter indicating which properties of the user to\nexpand.\n\n  - `operations` returns the operations that the user is allowed to do.\n  - `personalSpace` returns the user's personal space, if it exists.\n  - `isExternalCollaborator`(@deprecated) see `isGuest` in response to find out whether the user is a guest.",
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['operations', 'personalSpace', 'isExternalCollaborator'],
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the current user is returned.',
      content: { 'application/json': { schema: UserSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to use\nConfluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-user'] }],
})

export const getWikiRestApiUserMemberofRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/memberof',
  tags: ['Users'],
  summary: 'Get group memberships for user',
  description:
    "Returns the groups that a user is a member of.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getGroupMembershipsForUser',
  request: {
    query: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            description:
              'The account ID of the user. The accountId uniquely identifies the user across all Atlassian products.\nFor example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned groups.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of groups to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 200 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested groups are returned.',
      content: { 'application/json': { schema: GroupArrayWithLinksSchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to use\nConfluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-user'] }],
})

export const getWikiRestApiUserBulkRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/bulk',
  tags: ['Users'],
  summary: 'Get multiple users using ids',
  description:
    "Returns user details for the ids provided in the request.\nCurrently this API returns a maximum of 100 results.\nIf more than 100 account ids are passed in, then the first 100 will be returned.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getBulkUserLookup',
  request: {
    query: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            description: "A list of accountId's of users to be returned.",
            required: true,
            schema: { type: 'string' },
          },
        }),
      expand: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'expand',
            in: 'query',
            description:
              "A multi-value parameter indicating which properties of the user to\nexpand.\n\n  - `operations` returns the operations that the user is allowed to do.\n  - `personalSpace` returns the user's personal space, if it exists.\n  - `isExternalCollaborator`(@deprecated) use `isGuest` instead to return whether the user is a guest.",
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['operations', 'personalSpace', 'isExternalCollaborator'],
              },
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if, the list of users is returned.',
      content: { 'application/json': { schema: BulkUserLookupArraySchema } },
    },
    403: {
      description: 'Returned if the calling user does not have permission to use\nConfluence.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-user'] }],
})

export const getWikiRestApiUserWatchContentContentIdRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/watch/content/{contentId}',
  tags: ['Content watches'],
  summary: 'Get content watch status',
  description:
    "Returns whether a user is watching a piece of content. Choose the user by\ndoing one of the following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission or 'Space Administrator' permission for the relevant space if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getContentWatchStatus',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            name: 'contentId',
            in: 'path',
            description:
              'The ID of the content to be queried for whether the specified user is\nwatching it.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested watch status is returned.',
      content: { 'application/json': { schema: UserWatchSchema } },
    },
    403: {
      description:
        'Returned if;\n\n- The calling user does not have permission to view the\ncontent.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator or space administrator.\n- No content exists for the specified `contentId`.',
      content: {},
    },
    404: { description: 'Returned if no `contentId` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const postWikiRestApiUserWatchContentContentIdRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/user/watch/content/{contentId}',
  tags: ['Content watches'],
  summary: 'Add content watcher',
  description:
    "Adds a user as a watcher to a piece of content. Choose the user by doing\none of the following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\nNote, you must add the `X-Atlassian-Token: no-check` header when making a\nrequest, as this operation has XSRF protection.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission or 'Space Administrator' permission for the relevant space if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'addContentWatcher',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            name: 'contentId',
            in: 'path',
            description: 'The ID of the content to add the watcher to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Returned if the watcher was successfully created. No response body is\nreturned.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The `X-Atlassian-Token: no-check` header is not specified.\n- The calling user does not have permission to view the\ncontent.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator or space administrator.\n- No content exists for the specified `contentId`.',
      content: {},
    },
    404: { description: 'Returned if no `contentId` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiUserWatchContentContentIdRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/user/watch/content/{contentId}',
  tags: ['Content watches'],
  summary: 'Remove content watcher',
  description:
    "Removes a user as a watcher from a piece of content. Choose the user by\ndoing one of the following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission or 'Space Administrator' permission for the relevant space if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'removeContentWatcher',
  request: {
    headers: z.object({
      'X-Atlassian-Token': z
        .string()
        .default('no-check')
        .openapi({
          param: {
            name: 'X-Atlassian-Token',
            in: 'header',
            description:
              'Note, you must add header when making a\nrequest, as this operation has XSRF protection.',
            required: true,
            schema: { type: 'string', default: 'no-check' },
          },
        }),
    }),
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            name: 'contentId',
            in: 'path',
            description: 'The ID of the content to remove the watcher from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Returned if the watcher was successfully deleted. No response body is\nreturned.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The `X-Atlassian-Token: no-check` header is not specified.\n- The calling user does not have permission to view the\ncontent.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator or space administrator.\n- No content exists for the specified `contentId`.',
      content: {},
    },
    404: { description: 'Returned if no `contentId` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiUserWatchLabelLabelNameRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/watch/label/{labelName}',
  tags: ['Content watches'],
  summary: 'Get label watch status',
  description:
    "Returns whether a user is watching a label. Choose the user by doing one\nof the following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'isWatchingLabel',
  request: {
    params: z.object({
      labelName: z
        .string()
        .openapi({
          param: {
            name: 'labelName',
            in: 'path',
            description:
              'The name of the label to be queried for whether the specified user is\nwatching it.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested watch status is returned.',
      content: { 'application/json': { schema: UserWatchSchema } },
    },
    403: {
      description:
        'Returned if;\n\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator.\n- No label exists for the specified `labelName`.',
      content: {},
    },
    404: { description: 'Returned if no `labelName` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const postWikiRestApiUserWatchLabelLabelNameRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/user/watch/label/{labelName}',
  tags: ['Content watches'],
  summary: 'Add label watcher',
  description:
    "Adds a user as a watcher to a label. Choose the user by doing one of the\nfollowing:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\nNote, you must add the `X-Atlassian-Token: no-check` header when making a\nrequest, as this operation has XSRF protection.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'addLabelWatcher',
  request: {
    headers: z.object({
      'X-Atlassian-Token': z
        .string()
        .default('no-check')
        .openapi({
          param: {
            name: 'X-Atlassian-Token',
            in: 'header',
            description:
              'Note, you must add header when making a\nrequest, as this operation has XSRF protection.',
            required: true,
            schema: { type: 'string', default: 'no-check' },
          },
        }),
    }),
    params: z.object({
      labelName: z
        .string()
        .openapi({
          param: {
            name: 'labelName',
            in: 'path',
            description: 'The name of the label to add the watcher to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Returned if the watcher was successfully created. No response body is\nreturned.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The `X-Atlassian-Token: no-check` header is not specified.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator.\n- No label exists for the specified `labelName`.',
      content: {},
    },
    404: { description: 'Returned if no `labelName` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiUserWatchLabelLabelNameRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/user/watch/label/{labelName}',
  tags: ['Content watches'],
  summary: 'Remove label watcher',
  description:
    "Removes a user as a watcher from a label. Choose the user by doing one of\nthe following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'removeLabelWatcher',
  request: {
    params: z.object({
      labelName: z
        .string()
        .openapi({
          param: {
            name: 'labelName',
            in: 'path',
            description: 'The name of the label to remove the watcher from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Returned if the watcher was successfully deleted. No response body is\nreturned.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The `X-Atlassian-Token: no-check` header is not specified.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator.\n- No label exists for the specified `labelName`.',
      content: {},
    },
    404: { description: 'Returned if no `labelName` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiUserWatchSpaceSpaceKeyRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/watch/space/{spaceKey}',
  tags: ['Content watches'],
  summary: 'Get space watch status',
  description:
    "Returns whether a user is watching a space. Choose the user by\ndoing one of the following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission or 'Space Administrator' permission for the relevant space if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'isWatchingSpace',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description:
              'The key of the space to be queried for whether the specified user is\nwatching it.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested watch status is returned.',
      content: { 'application/json': { schema: UserWatchSchema } },
    },
    403: {
      description:
        'Returned if;\n\n- The calling user does not have permission to view the\nspace.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator or space administrator.\n- No space exists for the specified `spaceKey`.',
      content: {},
    },
    404: { description: 'Returned if no `spaceKey` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const postWikiRestApiUserWatchSpaceSpaceKeyRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/user/watch/space/{spaceKey}',
  tags: ['Content watches'],
  summary: 'Add space watcher',
  description:
    "Adds a user as a watcher to a space. Choose the user by doing one of the\nfollowing:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\nNote, you must add the `X-Atlassian-Token: no-check` header when making a\nrequest, as this operation has XSRF protection.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission or 'Space Administrator' permission for the relevant space if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'addSpaceWatcher',
  request: {
    headers: z.object({
      'X-Atlassian-Token': z
        .string()
        .default('no-check')
        .openapi({
          param: {
            name: 'X-Atlassian-Token',
            in: 'header',
            description:
              'Note, you must add header when making a\nrequest, as this operation has XSRF protection.',
            required: true,
            schema: { type: 'string', default: 'no-check' },
          },
        }),
    }),
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to add the watcher to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Returned if the watcher was successfully created. No response body is\nreturned.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The `X-Atlassian-Token: no-check` header is not specified.\n- The calling user does not have permission to view the\nspace.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator or space administrator.\n- No space exists for the specified `spaceKey`.',
      content: {},
    },
    404: { description: 'Returned if no `spaceKey` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const deleteWikiRestApiUserWatchSpaceSpaceKeyRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/user/watch/space/{spaceKey}',
  tags: ['Content watches'],
  summary: 'Remove space watch',
  description:
    "Removes a user as a watcher from a space. Choose the user by doing one of\nthe following:\n\n- Specify a user via a query parameter: Use the `accountId` to identify the user.\n- Do not specify a user: The currently logged-in user will be used.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\n'Confluence Administrator' global permission or 'Space Administrator' permission for the relevant space if specifying a user, otherwise\npermission to access the Confluence site ('Can use' global permission).",
  operationId: 'removeSpaceWatch',
  request: {
    params: z.object({
      spaceKey: z
        .string()
        .openapi({
          param: {
            name: 'spaceKey',
            in: 'path',
            description: 'The key of the space to remove the watcher from.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: UserLookupKeyParamsSchema,
      username: UserLookupUsernameParamsSchema,
      accountId: UserLookupAccountIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'Returned if the watcher was successfully deleted. No response body is returned.',
      content: {},
    },
    403: {
      description:
        'Returned if;\n\n- The `X-Atlassian-Token: no-check` header is not specified.\n- The calling user does not have permission to view the space.\n- A user is specified via a query parameter and the calling user is\nnot a Confluence administrator or space administrator.\n- No space exists for the specified `spaceKey`.',
      content: {},
    },
    404: { description: 'Returned if no `spaceKey` is specified.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:confluence-content'] }],
})

export const getWikiRestApiUserEmailRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/email',
  tags: ['Users'],
  summary: 'Get user email address',
  description:
    "Returns a user's email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by\nAtlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).\nFor Forge apps, this API only supports access via asApp() requests.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getPrivacyUnsafeUserEmail',
  request: {
    query: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            description:
              'The account ID of the user, which uniquely identifies the user across all Atlassian products.\nFor example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. Required.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returned if the requested user's email is returned.",
      content: { 'application/json': { schema: AccountIdEmailRecordSchema } },
    },
    400: {
      description: 'Returned if the calling app is not approved to use this API.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    404: {
      description: 'Returned if a user with the given accountId does not exist.',
      content: {},
    },
    501: { description: 'Indicates that the API is not currently enabled.', content: {} },
  },
})

export const getWikiRestApiUserEmailBulkRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/email/bulk',
  tags: ['Users'],
  summary: 'Get user email addresses in batch',
  description:
    "Returns a user's email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by\nAtlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).\nFor Forge apps, this API only supports access via asApp() requests.\n\nAny accounts which are not available will not be included in the result.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getPrivacyUnsafeUserEmailBulk',
  request: {
    query: z.object({
      accountId: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            description: 'The account IDs of the users.',
            required: true,
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the request is successful.',
      content: { 'application/json': { schema: AccountIdEmailRecordArraySchema } },
    },
    400: {
      description: 'Returned if the calling app is not approved to use this API.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing\nfrom the request.',
      content: {},
    },
    501: { description: 'Indicates that the API is not currently enabled.', content: {} },
  },
})

export const getWikiRestAtlassianConnect1AppModuleDynamicRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/atlassian-connect/1/app/module/dynamic',
  tags: ['Dynamic modules'],
  summary: 'Get modules',
  description:
    'Returns all modules registered dynamically by the calling app.\n\n**[Permissions](#permissions) required:** Only Connect apps can make this request.',
  operationId: 'getModules',
  responses: {
    200: {
      description: 'Returned if the request is successful.',
      content: { '*/*': { schema: ConnectModulesSchema } },
    },
    401: {
      description: 'Returned if the call is not from a Connect app.',
      content: { '*/*': { schema: DynamicModulesErrorMessageSchema } },
    },
  },
})

export const postWikiRestAtlassianConnect1AppModuleDynamicRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/atlassian-connect/1/app/module/dynamic',
  tags: ['Dynamic modules'],
  summary: 'Register modules',
  description:
    'Registers a list of modules. For the list of modules that support dynamic registration, see [Dynamic modules](https://developer.atlassian.com/cloud/confluence/dynamic-modules/).\n\n**[Permissions](#permissions) required:** Only Connect apps can make this request.',
  operationId: 'registerModules',
  request: { body: { content: { '*/*': { schema: ConnectModulesSchema } }, required: true } },
  responses: {
    200: { description: 'Returned if the request is successful.', content: {} },
    400: {
      description:
        'Returned if:\n* any of the provided modules is invalid. For example, required properties are missing.\n* any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.\n\nDetails of the issues encountered are included in the error message.',
      content: { '*/*': { schema: DynamicModulesErrorMessageSchema } },
    },
    401: {
      description: 'Returned if the call is not from a Connect app.',
      content: { '*/*': { schema: DynamicModulesErrorMessageSchema } },
    },
  },
})

export const deleteWikiRestAtlassianConnect1AppModuleDynamicRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/atlassian-connect/1/app/module/dynamic',
  tags: ['Dynamic modules'],
  summary: 'Remove modules',
  description:
    'Remove all or a list of modules registered by the calling app.\n\n**[Permissions](#permissions) required:** Only Connect apps can make this request.',
  operationId: 'removeModules',
  request: {
    query: z.object({
      moduleKey: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'moduleKey',
            in: 'query',
            description:
              'The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.\nFor example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.\nNonexistent keys are ignored.',
            required: true,
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the request is successful.', content: {} },
    401: {
      description: 'Returned if the call is not from a Connect app.',
      content: { '*/*': { schema: DynamicModulesErrorMessageSchema } },
    },
  },
})

export const getWikiRestApiAnalyticsContentContentIdViewsRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/analytics/content/{contentId}/views',
  tags: ['Analytics'],
  summary: 'Get views',
  description: 'Get the total number of views a piece of content has.',
  operationId: 'getViews',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            name: 'contentId',
            in: 'path',
            description: 'The ID of the content to get the views for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fromDate',
            in: 'query',
            description: 'The number of views for the content since the date.',
            schema: { type: 'string' },
            example: '2021-03-21T00:00:00.000Z',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the total number of views for the content.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().exactOptional().openapi({ description: 'The content ID.' }),
              count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of views for the content.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Returned if client input is invalid.' },
    401: { description: 'Returned if the authentication credentials are incorrect.', content: {} },
    403: {
      description: 'Returned if the authentication credentials are missing\nfrom the request.',
      content: {},
    },
    404: { description: 'Returned if;\n- There is no content with the given ID.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiAnalyticsContentContentIdViewersRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/analytics/content/{contentId}/viewers',
  tags: ['Analytics'],
  summary: 'Get viewers',
  description: 'Get the total number of distinct viewers a piece of content has.',
  operationId: 'getViewers',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            name: 'contentId',
            in: 'path',
            description: 'The ID of the content to get the viewers for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fromDate',
            in: 'query',
            description: 'The number of views for the content since the date.',
            schema: { type: 'string' },
            example: '2021-03-21T00:00:00.000Z',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the total number of distinct viewers for the content.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().exactOptional().openapi({ description: 'The content ID.' }),
              count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of distinct viewers for the content.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Returned if client input is invalid.' },
    401: { description: 'Returned if the authentication credentials are incorrect.', content: {} },
    403: {
      description: 'Returned if the authentication credentials are missing\nfrom the request.',
      content: {},
    },
    404: { description: 'Returned if;\n- There is no content with the given ID.' },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:confluence-content.summary'] }],
})

export const getWikiRestApiUserUserIdPropertyRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/{userId}/property',
  tags: ['User properties'],
  summary: 'Get user properties',
  description:
    "Returns the properties for a user as list of property keys. For more information\nabout user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).\n`Note`, these properties stored against a user are on a Confluence site level and not space/content level.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getUserProperties',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The account ID of the user to be queried for its properties.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The starting index of the returned properties.',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(25),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of properties to return per page.\nNote, this may be restricted by fixed system limits.',
            schema: { minimum: 0, maximum: 25, type: 'integer', format: 'int32', default: 5 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested properties are returned.',
      content: { 'application/json': { schema: UserPropertyKeyArraySchema } },
    },
    400: {
      description: 'Returned if request has malformed syntax or userId is not a valid user id.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have the correct permissions.',
      content: {},
    },
    404: { description: 'Returned if there is no user with the given user ID.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:user.property:confluence'] }],
})

export const getWikiRestApiUserUserIdPropertyKeyRoute = createRoute({
  method: 'get',
  path: '/wiki/rest/api/user/{userId}/property/{key}',
  tags: ['User properties'],
  summary: 'Get user property',
  description:
    "Returns the property corresponding to `key` for a user. For more information\nabout user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).\n`Note`, these properties stored against a user are on a Confluence site level and not space/content level.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'getUserProperty',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The account ID of the user to be queried for its properties.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .regex(/^[-_a-zA-Z0-9]+$/)
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The key of the user property.',
            required: true,
            schema: { type: 'string', pattern: '^[-_a-zA-Z0-9]+$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the requested properties are returned.',
      content: { 'application/json': { schema: UserPropertySchema } },
    },
    400: {
      description:
        'Returned if;\n\n- The key is too long.\n- Request has malformed syntax or userId is not a valid user id.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have the correct permissions.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no user with the given user ID\n- There is no user property with the given key',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['read:user.property:confluence'] }],
})

export const putWikiRestApiUserUserIdPropertyKeyRoute = createRoute({
  method: 'put',
  path: '/wiki/rest/api/user/{userId}/property/{key}',
  tags: ['User properties'],
  summary: 'Update user property',
  description:
    "Updates a property for the given user. Note, you cannot update the key of a user property, only the value.\nFor more information about user properties, see\n[Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).\n`Note`, these properties stored against a user are on a Confluence site level and not space/content level.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'updateUserProperty',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description:
              'The account ID of the user. The accountId uniquely identifies the user across all Atlassian\nproducts. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .regex(/^[-_a-zA-Z0-9]+$/)
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The key of the user property.',
            required: true,
            schema: { type: 'string', pattern: '^[-_a-zA-Z0-9]+$' },
          },
        }),
    }),
    body: {
      description: 'The user property to be updated.',
      content: { 'application/json': { schema: UserPropertyUpdateSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Returned if the user property is updated.' },
    400: {
      description:
        'Returned if;\n\n- The key is too long.\n- The value is empty.\n- The value is too long.\n- Request has malformed syntax or userId is not a valid user id.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have the correct permissions.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no user property with the given key.\n- There is no user with the given user id.',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:user.property:confluence'] }],
})

export const postWikiRestApiUserUserIdPropertyKeyRoute = createRoute({
  method: 'post',
  path: '/wiki/rest/api/user/{userId}/property/{key}',
  tags: ['User properties'],
  summary: 'Create user property by key',
  description:
    "Creates a property for a user. For more information  about user properties, see [Confluence entity properties]\n(https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).\n`Note`, these properties stored against a user are on a Confluence site level and not space/content level.\n\n`Note:` the number of properties which could be created per app in a tenant for each user might be\nrestricted by fixed system limits.\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'createUserProperty',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description:
              'The account ID of the user. The accountId uniquely identifies the user across all Atlassian\nproducts. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .regex(/^[-_a-zA-Z0-9]+$/)
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The key of the user property.',
            required: true,
            schema: { type: 'string', pattern: '^[-_a-zA-Z0-9]+$' },
          },
        }),
    }),
    body: {
      description: 'The user property to be created.',
      content: { 'application/json': { schema: UserPropertyCreateSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Returned if the user property is created.' },
    400: {
      description:
        'Returned if;\n\n- The key is too long.\n- The value is empty.\n- The value is too long.\n- Request has malformed syntax or userId is not a valid user id.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have the correct permissions.',
      content: {},
    },
    404: { description: 'Returned if there is no user with the given user id.', content: {} },
    409: { description: 'Returned if the key already exists for the user.', content: {} },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:user.property:confluence'] }],
})

export const deleteWikiRestApiUserUserIdPropertyKeyRoute = createRoute({
  method: 'delete',
  path: '/wiki/rest/api/user/{userId}/property/{key}',
  tags: ['User properties'],
  summary: 'Delete user property',
  description:
    "Deletes a property for the given user.\nFor more information about user properties, see\n[Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).\n`Note`, these properties stored against a user are on a Confluence site level and not space/content level.\n\n**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:\nPermission to access the Confluence site ('Can use' global permission).",
  operationId: 'deleteUserProperty',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description:
              'The account ID of the user. The accountId uniquely identifies the user across all Atlassian\nproducts. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .regex(/^[-_a-zA-Z0-9]+$/)
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The key of the user property.',
            required: true,
            schema: { type: 'string', pattern: '^[-_a-zA-Z0-9]+$' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the user property is deleted.' },
    400: {
      description:
        'Returned if;\n\n- The key is too long.\n- Request has malformed syntax or userId is not a valid user id.',
      content: {},
    },
    401: {
      description:
        'Returned if the authentication credentials are incorrect or missing from the request.',
      content: {},
    },
    403: {
      description: 'Returned if the user does not have the correct permissions.',
      content: {},
    },
    404: {
      description:
        'Returned if;\n\n- There is no user property with the given key\n- There is no user with the given user id',
      content: {},
    },
  },
  security: [{ basicAuth: [] }, { oAuthDefinitions: ['write:user.property:confluence'] }],
})
