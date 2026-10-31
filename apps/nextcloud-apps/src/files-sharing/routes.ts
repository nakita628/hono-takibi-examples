import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    files_sharing: z
      .object({
        api_enabled: z.boolean(),
        public: z
          .object({
            enabled: z.boolean(),
            password: z
              .object({ enforced: z.boolean(), askForOptionalPassword: z.boolean() })
              .exactOptional()
              .openapi({ required: ['enforced', 'askForOptionalPassword'] }),
            multiple_links: z.boolean().exactOptional(),
            expire_date: z
              .object({
                enabled: z.boolean(),
                days: z
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
                default_days: z
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
                enforced: z.boolean().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: ['enabled'] }),
            expire_date_internal: z
              .object({
                enabled: z.boolean(),
                days: z
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
                enforced: z.boolean().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: ['enabled'] }),
            expire_date_remote: z
              .object({
                enabled: z.boolean(),
                days: z
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
                enforced: z.boolean().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: ['enabled'] }),
            send_mail: z.boolean().exactOptional(),
            upload: z.boolean().exactOptional(),
            upload_files_drop: z.boolean().exactOptional(),
            custom_tokens: z.boolean().exactOptional(),
          })
          .openapi({ required: ['enabled'] }),
        user: z
          .object({
            send_mail: z.boolean(),
            expire_date: z
              .object({ enabled: z.boolean() })
              .exactOptional()
              .openapi({ required: ['enabled'] }),
          })
          .openapi({ required: ['send_mail'] }),
        resharing: z.boolean(),
        group_sharing: z.boolean().exactOptional(),
        group: z
          .object({
            enabled: z.boolean(),
            expire_date: z
              .object({ enabled: z.boolean() })
              .exactOptional()
              .openapi({ required: ['enabled'] }),
          })
          .exactOptional()
          .openapi({ required: ['enabled'] }),
        default_permissions: z
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
        exclude_reshare_from_edit: z.boolean().exactOptional(),
        federation: z
          .object({
            outgoing: z.boolean(),
            incoming: z.boolean(),
            expire_date: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
            expire_date_supported: z
              .object({ enabled: z.boolean() })
              .openapi({ required: ['enabled'] }),
          })
          .openapi({ required: ['outgoing', 'incoming', 'expire_date', 'expire_date_supported'] }),
        sharee: z
          .object({
            minSearchStringLength: z
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
            query_lookup_default: z.boolean(),
            always_show_unique: z.boolean(),
          })
          .openapi({
            required: ['minSearchStringLength', 'query_lookup_default', 'always_show_unique'],
          }),
      })
      .openapi({
        required: ['api_enabled', 'public', 'user', 'resharing', 'federation', 'sharee'],
      }),
  })
  .openapi({ required: ['files_sharing'] })
  .openapi('Capabilities')

const DeletedShareSchema = z
  .object({
    id: z.string(),
    share_type: z
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
    uid_owner: z.string(),
    displayname_owner: z.string(),
    permissions: z
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
    stime: z
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
    uid_file_owner: z.string(),
    displayname_file_owner: z.string(),
    path: z.string(),
    item_type: z.string(),
    mimetype: z.string(),
    storage: z
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
    item_source: z
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
    file_source: z
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
    file_parent: z
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
    file_target: z
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
    expiration: z.string().nullable(),
    share_with: z.string().nullable(),
    share_with_displayname: z.string().nullable(),
    share_with_link: z.string().nullable(),
  })
  .openapi({
    required: [
      'id',
      'share_type',
      'uid_owner',
      'displayname_owner',
      'permissions',
      'stime',
      'uid_file_owner',
      'displayname_file_owner',
      'path',
      'item_type',
      'mimetype',
      'storage',
      'item_source',
      'file_source',
      'file_parent',
      'file_target',
      'expiration',
      'share_with',
      'share_with_displayname',
      'share_with_link',
    ],
  })
  .openapi('DeletedShare')

const LookupSchema = z
  .object({
    value: z.string(),
    verified: z
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
  .openapi({ required: ['value', 'verified'] })
  .openapi('Lookup')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const RemoteShareSchema = z
  .object({
    accepted: z
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
    file_id: z
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
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    id: z.string(),
    mimetype: z.string().nullable(),
    mountpoint: z.string(),
    mtime: z
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
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    name: z.string(),
    owner: z.string(),
    parent: z.string().nullable(),
    permissions: z
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
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    remote: z.string(),
    remote_id: z.string(),
    refresh_token: z.string(),
    share_type: z
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
    type: z.string().nullable(),
    user: z.string(),
    item_size: z
      .union([
        z
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
        z.float64(),
      ])
      .nullable(),
  })
  .openapi({
    required: [
      'accepted',
      'file_id',
      'id',
      'mimetype',
      'mountpoint',
      'mtime',
      'name',
      'owner',
      'parent',
      'permissions',
      'remote',
      'remote_id',
      'refresh_token',
      'share_type',
      'type',
      'user',
      'item_size',
    ],
  })
  .openapi('RemoteShare')

const ShareSchema = z
  .object({
    attributes: z.string().nullable(),
    can_delete: z.boolean(),
    can_edit: z.boolean(),
    displayname_file_owner: z.string(),
    displayname_owner: z.string(),
    expiration: z.string().nullable(),
    file_parent: z
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
    file_source: z
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
    file_target: z.string(),
    has_preview: z.boolean(),
    hide_download: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n)]),
      )
      .openapi({ type: 'integer', format: 'int64', enum: [0, 1] }),
    is_trusted_server: z.boolean().exactOptional(),
    'is-mount-root': z.boolean(),
    id: z.string(),
    item_mtime: z
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
    item_permissions: z
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
    item_size: z.union([
      z.float64(),
      z
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
    ]),
    item_source: z
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
    item_type: z.enum(['file', 'folder']),
    label: z.string(),
    mail_send: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n)]),
      )
      .openapi({ type: 'integer', format: 'int64', enum: [0, 1] }),
    mimetype: z.string(),
    'mount-type': z.string(),
    note: z.string(),
    original_displayname: z.string().nullable(),
    parent: z.any().nullable(),
    password: z.string().nullable().exactOptional(),
    password_expiration_time: z.string().nullable().exactOptional(),
    path: z.string().nullable(),
    permissions: z
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
    send_password_by_talk: z.boolean().exactOptional(),
    share_type: z
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
    share_with: z.string().nullable().exactOptional(),
    share_with_avatar: z.string().exactOptional(),
    share_with_displayname: z.string().exactOptional(),
    share_with_displayname_unique: z.string().nullable().exactOptional(),
    share_with_link: z.string().exactOptional(),
    status: z
      .object({
        clearAt: z
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
          .openapi({ type: ['integer', 'null'], format: 'int64' }),
        icon: z.string().nullable(),
        message: z.string().nullable(),
        status: z.string(),
      })
      .exactOptional()
      .openapi({ required: ['clearAt', 'icon', 'message', 'status'] }),
    stime: z
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
    storage: z
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
    storage_id: z.string(),
    token: z.string().nullable(),
    uid_file_owner: z.string(),
    uid_owner: z.string(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: [
      'attributes',
      'can_delete',
      'can_edit',
      'displayname_file_owner',
      'displayname_owner',
      'expiration',
      'file_parent',
      'file_source',
      'file_target',
      'has_preview',
      'hide_download',
      'is-mount-root',
      'id',
      'item_mtime',
      'item_size',
      'item_source',
      'item_type',
      'label',
      'mail_send',
      'mimetype',
      'mount-type',
      'note',
      'original_displayname',
      'parent',
      'path',
      'permissions',
      'share_type',
      'stime',
      'storage',
      'storage_id',
      'token',
      'uid_file_owner',
      'uid_owner',
    ],
  })
  .openapi('Share')

const ShareInfoSchema = z
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
    parentId: z
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
    mtime: z
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
    name: z.string(),
    permissions: z
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
    mimetype: z.string(),
    size: z.union([
      z
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
      z.float64(),
    ]),
    type: z.string(),
    etag: z.string(),
    children: z.array(z.record(z.string(), z.object({}))).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'parentId',
      'mtime',
      'name',
      'permissions',
      'mimetype',
      'size',
      'type',
      'etag',
    ],
  })
  .openapi('ShareInfo')

const ShareeSchema = z
  .object({ label: z.string() })
  .openapi({ required: ['label'] })
  .openapi('Sharee')

const ShareeValueSchema = z
  .object({
    shareType: z
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
    shareWith: z.string(),
  })
  .openapi({ required: ['shareType', 'shareWith'] })
  .openapi('ShareeValue')

const ShareeCircleSchema = ShareeSchema.and(
  z
    .object({
      shareWithDescription: z.string(),
      value: ShareeValueSchema.and(
        z.object({ circle: z.string() }).openapi({ required: ['circle'] }),
      ),
    })
    .openapi({ required: ['shareWithDescription', 'value'] }),
).openapi('ShareeCircle')

const ShareeEmailSchema = ShareeSchema.and(
  z
    .object({
      uuid: z.string(),
      name: z.string(),
      type: z.string(),
      shareWithDisplayNameUnique: z.string(),
      value: ShareeValueSchema,
    })
    .openapi({ required: ['uuid', 'name', 'type', 'shareWithDisplayNameUnique', 'value'] }),
).openapi('ShareeEmail')

const ShareeGroupSchema = ShareeSchema.and(
  z.object({ value: ShareeValueSchema }).openapi({ required: ['value'] }),
).openapi('ShareeGroup')

const ShareeLookupSchema = ShareeSchema.and(
  z
    .object({
      extra: z
        .object({
          federationId: z.string(),
          name: LookupSchema.nullable(),
          email: LookupSchema.nullable(),
          address: LookupSchema.nullable(),
          website: LookupSchema.nullable(),
          twitter: LookupSchema.nullable(),
          phone: LookupSchema.nullable(),
          twitter_signature: LookupSchema.nullable(),
          website_signature: LookupSchema.nullable(),
          userid: LookupSchema.nullable(),
        })
        .openapi({
          required: [
            'federationId',
            'name',
            'email',
            'address',
            'website',
            'twitter',
            'phone',
            'twitter_signature',
            'website_signature',
            'userid',
          ],
        }),
      value: ShareeValueSchema.and(
        z.object({ globalScale: z.boolean() }).openapi({ required: ['globalScale'] }),
      ),
    })
    .openapi({ required: ['extra', 'value'] }),
).openapi('ShareeLookup')

const ShareeRemoteSchema = ShareeSchema.and(
  z
    .object({
      uuid: z.string(),
      name: z.string(),
      type: z.string(),
      value: ShareeValueSchema.and(
        z.object({ server: z.string() }).openapi({ required: ['server'] }),
      ),
    })
    .openapi({ required: ['uuid', 'name', 'type', 'value'] }),
).openapi('ShareeRemote')

const ShareeRemoteGroupSchema = ShareeSchema.and(
  z
    .object({
      guid: z.string(),
      name: z.string(),
      value: ShareeValueSchema.and(
        z.object({ server: z.string() }).openapi({ required: ['server'] }),
      ),
    })
    .openapi({ required: ['guid', 'name', 'value'] }),
).openapi('ShareeRemoteGroup')

const ShareeRoomSchema = ShareeSchema.and(
  z.object({ value: ShareeValueSchema }).openapi({ required: ['value'] }),
).openapi('ShareeRoom')

const ShareeUserSchema = ShareeSchema.and(
  z
    .object({
      subline: z.string(),
      icon: z.string(),
      shareWithDisplayNameUnique: z.string(),
      status: z
        .object({
          status: z.string(),
          message: z.string(),
          icon: z.string(),
          clearAt: z
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
            .openapi({ type: ['integer', 'null'], format: 'int64' }),
        })
        .openapi({ required: ['status', 'message', 'icon', 'clearAt'] }),
      value: ShareeValueSchema,
    })
    .openapi({ required: ['subline', 'icon', 'shareWithDisplayNameUnique', 'status', 'value'] }),
).openapi('ShareeUser')

const ShareesRecommendedResultSchema = z
  .object({
    exact: z
      .object({
        emails: z.array(ShareeEmailSchema),
        groups: z.array(ShareeGroupSchema),
        remote_groups: z.array(ShareeRemoteGroupSchema),
        remotes: z.array(ShareeRemoteSchema),
        users: z.array(ShareeUserSchema),
      })
      .openapi({ required: ['emails', 'groups', 'remote_groups', 'remotes', 'users'] }),
    emails: z.array(ShareeEmailSchema),
    groups: z.array(ShareeGroupSchema),
    remote_groups: z.array(ShareeRemoteGroupSchema),
    remotes: z.array(ShareeRemoteSchema),
    users: z.array(ShareeUserSchema),
  })
  .openapi({ required: ['exact', 'emails', 'groups', 'remote_groups', 'remotes', 'users'] })
  .openapi('ShareesRecommendedResult')

const ShareesSearchResultSchema = z
  .object({
    exact: z
      .object({
        circles: z.array(ShareeCircleSchema),
        emails: z.array(ShareeEmailSchema),
        groups: z.array(ShareeGroupSchema),
        remote_groups: z.array(ShareeRemoteGroupSchema),
        remotes: z.array(ShareeRemoteSchema),
        rooms: z.array(ShareeRoomSchema),
        users: z.array(ShareeUserSchema),
      })
      .openapi({
        required: ['circles', 'emails', 'groups', 'remote_groups', 'remotes', 'rooms', 'users'],
      }),
    circles: z.array(ShareeCircleSchema),
    emails: z.array(ShareeEmailSchema),
    groups: z.array(ShareeGroupSchema),
    lookup: z.array(ShareeLookupSchema),
    remote_groups: z.array(ShareeRemoteGroupSchema),
    remotes: z.array(ShareeRemoteSchema),
    rooms: z.array(ShareeRoomSchema),
    users: z.array(ShareeUserSchema),
    lookupEnabled: z.boolean(),
  })
  .openapi({
    required: [
      'exact',
      'circles',
      'emails',
      'groups',
      'lookup',
      'remote_groups',
      'remotes',
      'rooms',
      'users',
      'lookupEnabled',
    ],
  })
  .openapi('ShareesSearchResult')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpSTokenPreviewRoute = createRoute({
  method: 'get',
  path: '/index.php/s/{token}/preview',
  tags: ['public_preview'],
  summary: 'Get a direct link preview for a shared file',
  operationId: 'public_preview-direct-link',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: {
      description: 'Getting preview is not possible',
      content: { 'application/json': { schema: z.any() } },
    },
    403: {
      description: 'Getting preview is not allowed',
      content: { 'application/json': { schema: z.any() } },
    },
    404: {
      description: 'Share or preview not found',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsFilesSharingPublicpreviewTokenRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/files_sharing/publicpreview/{token}',
  tags: ['public_preview'],
  summary: 'Get a preview for a public share',
  description:
    'For shares pointing to a single file, the file parameter is ignored. For folder shares, file must be the relative path to a file inside the shared folder.',
  operationId: 'public_preview-get-preview',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      file: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description:
              'Relative path to a file inside a shared folder; ignored for single-file shares',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      x: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'x',
            in: 'query',
            description: 'Width of the preview',
            schema: { type: 'integer', format: 'int64', default: 32 },
            required: false,
          },
        }),
      y: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'y',
            in: 'query',
            description: 'Height of the preview',
            schema: { type: 'integer', format: 'int64', default: 32 },
            required: false,
          },
        }),
      a: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'a',
            in: 'query',
            description: 'Whether to not crop the preview',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      mimeFallback: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mimeFallback',
            in: 'query',
            description: 'Whether to fallback to the mime icon if no preview is available',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nc-preview': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nc-preview',
            in: 'header',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    303: {
      description: 'Redirect to the mime icon url if mimeFallback is true',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Getting preview is not possible',
      content: { 'application/json': { schema: z.any() } },
    },
    403: {
      description: 'Getting preview is not allowed',
      content: { 'application/json': { schema: z.any() } },
    },
    404: {
      description: 'Share or preview not found',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpAppsFilesSharingShareinfoRoute = createRoute({
  method: 'post',
  path: '/index.php/apps/files_sharing/shareinfo',
  tags: ['share_info'],
  summary: 'Get the info about a share',
  operationId: 'share_info-info',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              t: z.string().openapi({ description: 'Token of the share' }),
              password: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Password of the share' }),
              dir: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Subdirectory to get info about' }),
              depth: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(-1n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: -1,
                  description: 'Maximum depth to get info about',
                }),
            })
            .openapi({ required: ['t'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share info returned',
      content: { 'application/json': { schema: ShareInfoSchema } },
    },
    403: {
      description: 'Getting share info is not allowed',
      content: { 'application/json': { schema: z.any() } },
    },
    404: { description: 'Share not found', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1SharesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares',
  tags: ['shareapi'],
  summary: 'Get shares of the current user',
  operationId: 'shareapi-get-shares',
  request: {
    query: z.object({
      shared_with_me: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'shared_with_me',
            in: 'query',
            description: 'Only get shares with the current user',
            schema: { type: 'string', default: 'false' },
            required: false,
          },
        }),
      reshares: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'reshares',
            in: 'query',
            description: 'Only get shares by the current user and reshares',
            schema: { type: 'string', default: 'false' },
            required: false,
          },
        }),
      subfiles: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'subfiles',
            in: 'query',
            description: 'Only get all shares in a folder',
            schema: { type: 'string', default: 'false' },
            required: false,
          },
        }),
      path: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Get shares for a specific path',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      include_tags: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'include_tags',
            in: 'query',
            description: 'Include tags in the share',
            schema: { type: 'string', default: 'false' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The folder was not found or is inaccessible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesSharingApiV1SharesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares',
  tags: ['shareapi'],
  summary: 'Create a share',
  operationId: 'shareapi-create-share',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              path: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Path of the share' }),
              permissions: z
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
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description: 'Permissions for the share',
                }),
              shareType: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(-1n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: -1,
                  description: 'Type of the share',
                }),
              shareWith: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'The entity this should be shared with' }),
              publicUpload: z
                .enum(['true', 'false'])
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'If public uploading is allowed (deprecated)' }),
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Password for the share' }),
              sendPasswordByTalk: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Send the password for the share over Talk' }),
              expireDate: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    "The expiry date of the share in the user's timezone at 00:00. If $expireDate is not supplied or set to `null`, the system default will be used.",
                }),
              note: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Note for the share' }),
              label: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Label for the share (only used in link and email)' }),
              attributes: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Additional attributes for the share' }),
              sendMail: z
                .enum(['false', 'true'])
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Send a mail to the recipient' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share created',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Unknown share type',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Creating the share is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Creating the share failed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1SharesInheritedRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/inherited',
  tags: ['shareapi'],
  summary: 'Get all shares relative to a file, including parent folders shares rights',
  operationId: 'shareapi-get-inherited-shares',
  request: {
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Path all shares will be relative to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The given path is invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1SharesPendingRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/pending',
  tags: ['shareapi'],
  summary: 'Get all shares that are still pending',
  operationId: 'shareapi-pending-shares',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pending shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1SharesIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/{id}',
  tags: ['shareapi'],
  summary: 'Get a specific share by id',
  operationId: 'shareapi-get-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_tags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_tags',
            in: 'query',
            description: 'Include tags in the share',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsFilesSharingApiV1SharesIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/{id}',
  tags: ['shareapi'],
  summary: 'Update a share',
  operationId: 'shareapi-update-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              permissions: z
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
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description: 'New permissions',
                }),
              password: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New password' }),
              sendPasswordByTalk: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New condition if the password should be send over Talk' }),
              publicUpload: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New condition if public uploading is allowed' }),
              expireDate: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New expiry date' }),
              note: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New note' }),
              label: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New label' }),
              hideDownload: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New condition if the download should be hidden' }),
              attributes: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New additional attributes' }),
              sendMail: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'if the share should be send by mail. Considering the share already exists, no mail will be send after the share is updated. You will have to use the sendMail action to send the mail.',
                }),
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New token' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Share could not be updated because the requested changes are invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to update the share',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsFilesSharingApiV1SharesIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/{id}',
  tags: ['shareapi'],
  summary: 'Delete a share',
  operationId: 'shareapi-delete-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to delete the share',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmailRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/{id}/send-email',
  tags: ['shareapi'],
  summary:
    'Send a mail notification again for a share. The mail_send option must be enabled for the given share.',
  operationId: 'shareapi-send-share-email',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'the share ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'the password to check against. Necessary for password protected shares.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The email notification was sent successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid request or wrong password',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'You are not allowed to send mail notifications',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesSharingApiV1SharesPendingIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/shares/pending/{id}',
  tags: ['shareapi'],
  summary: 'Accept a share',
  operationId: 'shareapi-accept-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share accepted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Share could not be accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1DeletedsharesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/deletedshares',
  tags: ['deleted_shareapi'],
  summary: 'Get a list of all deleted shares',
  operationId: 'deleted_shareapi-index',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(DeletedShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesSharingApiV1DeletedsharesIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/deletedshares/{id}',
  tags: ['deleted_shareapi'],
  summary: 'Undelete a deleted share',
  operationId: 'deleted_shareapi-undelete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share undeleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1ShareesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/sharees',
  tags: ['shareesapi'],
  summary: 'Search for sharees',
  operationId: 'shareesapi-search',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      itemType: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'itemType',
            in: 'query',
            description: 'Limit to specific item types',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page offset for searching',
            schema: { type: 'integer', format: 'int64', default: 1 },
            required: false,
          },
        }),
      perPage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(200n)
        .exactOptional()
        .openapi({
          param: {
            name: 'perPage',
            in: 'query',
            description: 'Limit amount of search results per page',
            schema: { type: 'integer', format: 'int64', default: 200 },
            required: false,
          },
        }),
      shareType: z
        .xor([
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .openapi({ type: 'integer', format: 'int64' }),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        ])
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'shareType',
            in: 'query',
            description: 'Limit to specific share types',
            schema: {
              nullable: true,
              default: null,
              oneOf: [
                { type: 'integer', format: 'int64' },
                { type: 'array', items: { type: 'integer', format: 'int64' } },
              ],
            },
            required: false,
          },
        }),
      lookup: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'lookup',
            in: 'query',
            description: 'If a global lookup should be performed too',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sharees search result returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareesSearchResultSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Invalid search parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1ShareesRecommendedRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/sharees_recommended',
  tags: ['shareesapi'],
  summary: 'Find recommended sharees',
  operationId: 'shareesapi-find-recommended',
  request: {
    query: z.object({
      itemType: z
        .string()
        .openapi({
          param: {
            name: 'itemType',
            in: 'query',
            description: 'Limit to specific item types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shareType: z
        .xor([
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .openapi({ type: 'integer', format: 'int64' }),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        ])
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'shareType',
            in: 'query',
            description: 'Limit to specific share types',
            schema: {
              nullable: true,
              default: null,
              oneOf: [
                { type: 'integer', format: 'int64' },
                { type: 'array', items: { type: 'integer', format: 'int64' } },
              ],
            },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recommended sharees returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareesRecommendedResultSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1RemoteSharesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares',
  tags: ['remote'],
  summary: 'Get a list of accepted remote shares',
  operationId: 'remote-get-shares',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accepted remote shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RemoteShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending',
  tags: ['remote'],
  summary: 'Get list of pending remote shares',
  operationId: 'remote-get-open-shares',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pending remote shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RemoteShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/{id}',
  tags: ['remote'],
  summary: 'Accept a remote share.',
  operationId: 'remote-accept-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share accepted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/{id}',
  tags: ['remote'],
  summary: 'Decline a remote share.',
  operationId: 'remote-decline-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share declined successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/{id}',
  tags: ['remote'],
  summary: 'Get info of a remote share',
  operationId: 'remote-get-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RemoteShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/{id}',
  tags: ['remote'],
  summary: 'Unshare a remote share',
  operationId: 'remote-unshare',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Share unshared successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Unsharing is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFilesSharingApiV1TokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_sharing/api/v1/token',
  tags: ['shareapi'],
  summary: 'Get a unique share token',
  operationId: 'shareapi-generate-token',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Token generated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ token: z.string() }).openapi({ required: ['token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
