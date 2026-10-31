import { createRoute, z } from '@hono/zod-openapi'

const BlocksSchema = z
  .array(z.looseObject({ type: z.string() }).openapi({ required: ['type'] }))
  .openapi({
    description:
      "This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.",
    title: 'Block Kit blocks',
  })
  .openapi('Blocks')

const DefsAppIdSchema = z
  .string()
  .regex(/^A[A-Z0-9]{1,}$/)
  .openapi({ title: 'App ID' })
  .openapi('DefsAppId')

const DefsBotIdSchema = z
  .string()
  .regex(/^B[A-Z0-9]{8,}$/)
  .openapi({ title: 'Bot User ID' })
  .openapi('DefsBotId')

const DefsChannelSchema = z
  .string()
  .regex(/^[CGD][A-Z0-9]{8,}$/)
  .openapi({ title: 'Channel-like conversation ID' })
  .openapi('DefsChannel')

const DefsChannelIdSchema = z
  .string()
  .regex(/^[C][A-Z0-9]{2,}$/)
  .openapi({ title: 'Channel ID' })
  .openapi('DefsChannelId')

const DefsChannelNameSchema = z
  .string()
  .openapi({ title: 'Name of a channel' })
  .openapi('DefsChannelName')

const DefsCommentIdSchema = z
  .string()
  .regex(/^Fc[A-Z0-9]{8,}$/)
  .openapi({ title: 'File Comment ID' })
  .openapi('DefsCommentId')

const DefsDmIdSchema = z
  .string()
  .regex(/^[D][A-Z0-9]{8,}$/)
  .openapi({ title: 'Direct Message Channel ID' })
  .openapi('DefsDmId')

const DefsEnterpriseIdSchema = z
  .string()
  .regex(/^[E][A-Z0-9]{8,}$/)
  .openapi({ title: 'Enterprise ID' })
  .openapi('DefsEnterpriseId')

const DefsEnterpriseNameSchema = z
  .string()
  .openapi({ title: 'Name of the enterprise org' })
  .openapi('DefsEnterpriseName')

const DefsEnterpriseUserIdSchema = z
  .string()
  .regex(/^[WU][A-Z0-9]{8,}$/)
  .openapi({ title: 'Enterprise User ID' })
  .openapi('DefsEnterpriseUserId')

const DefsFileIdSchema = z
  .string()
  .regex(/^[F][A-Z0-9]{8,}$/)
  .openapi({ title: 'File ID' })
  .openapi('DefsFileId')

const DefsGroupIdSchema = z
  .string()
  .regex(/^[G][A-Z0-9]{8,}$/)
  .openapi({ title: 'Private Channel ID' })
  .openapi('DefsGroupId')

const DefsOkFalseSchema = z
  .literal(false)
  .openapi({ title: 'default failure response' })
  .openapi('DefsOkFalse')

const DefsOkTrueSchema = z
  .literal(true)
  .openapi({ title: 'default success response' })
  .openapi('DefsOkTrue')

const DefsOptionalAppIdSchema = z
  .string()
  .regex(/^(A[A-Z0-9]{1,})?$/)
  .openapi({ title: 'App ID or empty string' })
  .openapi('DefsOptionalAppId')

const DefsPinnedInfoSchema = z
  .strictObject({})
  .openapi({ title: 'Info for a pinned item' })
  .openapi('DefsPinnedInfo')

const DefsReminderIdSchema = z
  .string()
  .regex(/^Rm[A-Z0-9]{8,}$/)
  .openapi({ title: 'Reminder ID' })
  .openapi('DefsReminderId')

const DefsSubteamIdSchema = z
  .string()
  .regex(/^S[A-Z0-9]{2,}$/)
  .openapi({ title: 'Subteam ID' })
  .openapi('DefsSubteamId')

const DefsTeamSchema = z
  .string()
  .regex(/^[T][A-Z0-9]{2,}$/)
  .openapi({ title: 'Team ID' })
  .openapi('DefsTeam')

const DefsTopicPurposeCreatorSchema = z
  .string()
  .regex(/^[UW][A-Z0-9]{8,}$|^$/)
  .openapi({ title: 'User ID or empty string, used for topic and purpose creation' })
  .openapi('DefsTopicPurposeCreator')

const DefsTsSchema = z
  .string()
  .regex(/^\d{10}\.\d{6}$/)
  .openapi({ title: 'Timestamp in format 0123456789.012345' })
  .openapi('DefsTs')

const DefsUserIdSchema = z
  .string()
  .regex(/^[UW][A-Z0-9]{2,}$/)
  .openapi({ title: 'User ID' })
  .openapi('DefsUserId')

const DefsWorkspaceIdSchema = z
  .string()
  .regex(/^[TE][A-Z0-9]{8,}$/)
  .openapi({ title: 'Team or Enterprise ID' })
  .openapi('DefsWorkspaceId')

const ObjsBotProfileSchema = z
  .strictObject({
    app_id: DefsAppIdSchema,
    deleted: z.boolean(),
    icons: z
      .strictObject({ image_36: z.url(), image_48: z.url(), image_72: z.url() })
      .openapi({ required: ['image_36', 'image_48', 'image_72'] }),
    id: DefsBotIdSchema,
    name: z.string(),
    team_id: DefsTeamSchema,
    updated: z.int(),
  })
  .openapi({
    required: ['id', 'deleted', 'name', 'updated', 'app_id', 'icons', 'team_id'],
    title: 'Bot Profile Object',
  })
  .openapi('ObjsBotProfile')

const ObjsReactionSchema = z
  .looseObject({ count: z.int(), name: z.string(), users: z.array(DefsUserIdSchema) })
  .openapi({ required: ['name', 'users', 'count'], title: 'Reaction object' })
  .openapi('ObjsReaction')

const ObjsCommentSchema = z
  .strictObject({
    comment: z.string(),
    created: z.int(),
    id: DefsCommentIdSchema,
    is_intro: z.boolean(),
    is_starred: z.boolean().exactOptional(),
    num_stars: z.int().exactOptional(),
    pinned_info: DefsPinnedInfoSchema.exactOptional(),
    pinned_to: z.array(DefsChannelSchema).exactOptional(),
    reactions: z.array(ObjsReactionSchema).exactOptional(),
    timestamp: z.int(),
    user: DefsUserIdSchema,
  })
  .openapi({
    required: ['id', 'created', 'timestamp', 'user', 'is_intro', 'comment'],
    title: 'File Comment Object',
  })
  .openapi('ObjsComment')

const ObjsFileSchema = z
  .strictObject({
    channels: z
      .array(DefsChannelIdSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    comments_count: z.int().exactOptional(),
    created: z.int().exactOptional(),
    date_delete: z.int().exactOptional(),
    display_as_bot: z.boolean().exactOptional(),
    editable: z.boolean().exactOptional(),
    editor: DefsUserIdSchema.exactOptional(),
    external_id: z.string().exactOptional(),
    external_type: z.string().exactOptional(),
    external_url: z.url().exactOptional(),
    filetype: z.string().exactOptional(),
    groups: z
      .array(DefsGroupIdSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    has_rich_preview: z.boolean().exactOptional(),
    id: DefsFileIdSchema.exactOptional(),
    image_exif_rotation: z.int().exactOptional(),
    ims: z
      .array(DefsDmIdSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    is_external: z.boolean().exactOptional(),
    is_public: z.boolean().exactOptional(),
    is_starred: z.boolean().exactOptional(),
    is_tombstoned: z.boolean().exactOptional(),
    last_editor: DefsUserIdSchema.exactOptional(),
    mimetype: z.string().exactOptional(),
    mode: z.string().exactOptional(),
    name: z.string().exactOptional(),
    non_owner_editable: z.boolean().exactOptional(),
    num_stars: z.int().exactOptional(),
    original_h: z.int().exactOptional(),
    original_w: z.int().exactOptional(),
    permalink: z.url().exactOptional(),
    permalink_public: z.url().exactOptional(),
    pinned_info: DefsPinnedInfoSchema.exactOptional(),
    pinned_to: z.array(DefsChannelSchema).exactOptional(),
    pretty_type: z.string().exactOptional(),
    preview: z.string().exactOptional(),
    public_url_shared: z.boolean().exactOptional(),
    reactions: z.array(ObjsReactionSchema).exactOptional(),
    shares: z
      .strictObject({
        private: z.strictObject({}).exactOptional(),
        public: z.strictObject({}).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    size: z.int().exactOptional(),
    source_team: DefsTeamSchema.exactOptional(),
    state: z.string().exactOptional(),
    thumb_1024: z.url().exactOptional(),
    thumb_1024_h: z.int().exactOptional(),
    thumb_1024_w: z.int().exactOptional(),
    thumb_160: z.url().exactOptional(),
    thumb_360: z.url().exactOptional(),
    thumb_360_h: z.int().exactOptional(),
    thumb_360_w: z.int().exactOptional(),
    thumb_480: z.url().exactOptional(),
    thumb_480_h: z.int().exactOptional(),
    thumb_480_w: z.int().exactOptional(),
    thumb_64: z.url().exactOptional(),
    thumb_720: z.url().exactOptional(),
    thumb_720_h: z.int().exactOptional(),
    thumb_720_w: z.int().exactOptional(),
    thumb_80: z.url().exactOptional(),
    thumb_800: z.url().exactOptional(),
    thumb_800_h: z.int().exactOptional(),
    thumb_800_w: z.int().exactOptional(),
    thumb_960: z.url().exactOptional(),
    thumb_960_h: z.int().exactOptional(),
    thumb_960_w: z.int().exactOptional(),
    thumb_tiny: z.string().exactOptional(),
    timestamp: z.int().exactOptional(),
    title: z.string().exactOptional(),
    updated: z.int().exactOptional(),
    url_private: z.url().exactOptional(),
    url_private_download: z.url().exactOptional(),
    user: z.string().exactOptional(),
    user_team: DefsTeamSchema.exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ title: 'file object', required: [] })
  .openapi('ObjsFile')

const ObjsUserProfileShortSchema = z
  .strictObject({
    avatar_hash: z.string(),
    display_name: z.string(),
    display_name_normalized: z.string().exactOptional(),
    first_name: z.string().nullable(),
    image_72: z.url(),
    is_restricted: z.boolean(),
    is_ultra_restricted: z.boolean(),
    name: z.string(),
    real_name: z.string(),
    real_name_normalized: z.string().exactOptional(),
    team: DefsWorkspaceIdSchema,
  })
  .openapi({
    required: [
      'avatar_hash',
      'image_72',
      'first_name',
      'real_name',
      'display_name',
      'team',
      'name',
      'is_restricted',
      'is_ultra_restricted',
    ],
  })
  .openapi('ObjsUserProfileShort')

const ObjsMessageSchema = z
  .strictObject({
    attachments: z
      .array(
        z
          .strictObject({
            fallback: z.string().exactOptional(),
            id: z.int(),
            image_bytes: z.int().exactOptional(),
            image_height: z.int().exactOptional(),
            image_url: z.string().exactOptional(),
            image_width: z.int().exactOptional(),
          })
          .openapi({ required: ['id'] }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    blocks: BlocksSchema.exactOptional(),
    bot_id: z
      .unknown()
      .superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([
              DefsBotIdSchema,
              z.any().nullable().openapi({ title: 'Nil bot_id set when display_as_bot is false' }),
            ])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      })
      .exactOptional(),
    bot_profile: ObjsBotProfileSchema.exactOptional(),
    client_msg_id: z.string().exactOptional(),
    comment: ObjsCommentSchema.exactOptional(),
    display_as_bot: z.boolean().exactOptional(),
    file: ObjsFileSchema.exactOptional(),
    files: z
      .array(ObjsFileSchema)
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    icons: z
      .strictObject({ emoji: z.string().exactOptional(), image_64: z.url().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    inviter: DefsUserIdSchema.exactOptional(),
    is_delayed_message: z.boolean().exactOptional(),
    is_intro: z.boolean().exactOptional(),
    is_starred: z.boolean().exactOptional(),
    last_read: DefsTsSchema.exactOptional(),
    latest_reply: DefsTsSchema.exactOptional(),
    name: z.string().exactOptional(),
    old_name: z.string().exactOptional(),
    parent_user_id: DefsUserIdSchema.exactOptional(),
    permalink: z.url().exactOptional(),
    pinned_to: z.array(DefsChannelSchema).exactOptional(),
    purpose: z.string().exactOptional(),
    reactions: z.array(ObjsReactionSchema).exactOptional(),
    reply_count: z.int().exactOptional(),
    reply_users: z
      .array(DefsUserIdSchema)
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    reply_users_count: z.int().exactOptional(),
    source_team: DefsWorkspaceIdSchema.exactOptional(),
    subscribed: z.boolean().exactOptional(),
    subtype: z.string().exactOptional(),
    team: DefsWorkspaceIdSchema.exactOptional(),
    text: z.string(),
    thread_ts: DefsTsSchema.exactOptional(),
    topic: z.string().exactOptional(),
    ts: DefsTsSchema,
    type: z.string(),
    unread_count: z.int().exactOptional(),
    upload: z.boolean().exactOptional(),
    user: DefsUserIdSchema.exactOptional(),
    user_profile: ObjsUserProfileShortSchema.exactOptional(),
    user_team: DefsWorkspaceIdSchema.exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: ['text', 'type', 'ts'], title: 'Message object' })
  .openapi('ObjsMessage')

const ObjsChannelSchema = z
  .strictObject({
    accepted_user: DefsUserIdSchema.exactOptional(),
    created: z.int(),
    creator: DefsUserIdSchema,
    id: DefsChannelIdSchema,
    is_archived: z.boolean().exactOptional(),
    is_channel: z.boolean(),
    is_frozen: z.boolean().exactOptional(),
    is_general: z.boolean().exactOptional(),
    is_member: z.boolean().exactOptional(),
    is_moved: z.int().exactOptional(),
    is_mpim: z.boolean(),
    is_non_threadable: z.boolean().exactOptional(),
    is_org_shared: z.boolean(),
    is_pending_ext_shared: z.boolean().exactOptional(),
    is_private: z.boolean(),
    is_read_only: z.boolean().exactOptional(),
    is_shared: z.boolean(),
    is_thread_only: z.boolean().exactOptional(),
    last_read: DefsTsSchema.exactOptional(),
    latest: z
      .unknown()
      .superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([ObjsMessageSchema, z.any().nullable()])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      })
      .exactOptional(),
    members: z
      .array(DefsUserIdSchema)
      .min(0)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
    name: z.string(),
    name_normalized: z.string(),
    num_members: z.int().exactOptional(),
    pending_shared: z
      .array(DefsTeamSchema)
      .min(0)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    previous_names: z
      .array(DefsChannelNameSchema)
      .min(0)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    priority: z.number().exactOptional(),
    purpose: z
      .strictObject({
        creator: DefsTopicPurposeCreatorSchema,
        last_set: z.int(),
        value: z.string(),
      })
      .openapi({ required: ['value', 'creator', 'last_set'] }),
    topic: z
      .strictObject({
        creator: DefsTopicPurposeCreatorSchema,
        last_set: z.int(),
        value: z.string(),
      })
      .openapi({ required: ['value', 'creator', 'last_set'] }),
    unlinked: z
      .int()
      .exactOptional()
      .openapi({
        title: 'Field to determine whether a channel has ever been shared/disconnected in the past',
      }),
    unread_count: z.int().exactOptional(),
    unread_count_display: z.int().exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'name',
      'created',
      'creator',
      'is_channel',
      'is_org_shared',
      'is_private',
      'is_mpim',
      'is_shared',
      'name_normalized',
      'members',
      'topic',
      'purpose',
    ],
    title: 'Channel Object',
  })
  .openapi('ObjsChannel')

const ObjsCommentsSchema = z
  .array(z.any())
  .openapi({ title: 'file comments object' })
  .openapi('ObjsComments')

const ObjsExternalOrgMigrationsSchema = z
  .object({
    current: z.array(
      z
        .object({ date_started: z.int(), team_id: z.string() })
        .openapi({ required: ['team_id', 'date_started'] }),
    ),
    date_updated: z.int(),
  })
  .openapi({ required: ['date_updated', 'current'], title: 'External Org Migrations' })
  .openapi('ObjsExternalOrgMigrations')

const ObjsIconSchema = z
  .object({
    image_102: z.string().exactOptional(),
    image_132: z.string().exactOptional(),
    image_230: z.string().exactOptional(),
    image_34: z.string().exactOptional(),
    image_44: z.string().exactOptional(),
    image_68: z.string().exactOptional(),
    image_88: z.string().exactOptional(),
    image_default: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObjsIcon')

const ObjsPrimaryOwnerSchema = z
  .object({ email: z.string(), id: z.string() })
  .openapi({ required: ['id', 'email'] })
  .openapi('ObjsPrimaryOwner')

const ObjsTeamSchema = z
  .strictObject({
    archived: z.boolean().exactOptional(),
    avatar_base_url: z.url().exactOptional(),
    created: z.int().exactOptional(),
    date_create: z.int().exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    discoverable: z
      .unknown()
      .superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([z.any().nullable(), z.string()])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      })
      .exactOptional(),
    domain: z.string(),
    email_domain: z.string(),
    enterprise_id: DefsEnterpriseIdSchema.exactOptional(),
    enterprise_name: DefsEnterpriseNameSchema.exactOptional(),
    external_org_migrations: ObjsExternalOrgMigrationsSchema.exactOptional(),
    has_compliance_export: z.boolean().exactOptional(),
    icon: ObjsIconSchema,
    id: DefsWorkspaceIdSchema,
    is_assigned: z.boolean().exactOptional(),
    is_enterprise: z.int().exactOptional(),
    is_over_storage_limit: z.boolean().exactOptional(),
    limit_ts: z.int().exactOptional(),
    locale: z.string().exactOptional(),
    messages_count: z.int().exactOptional(),
    msg_edit_window_mins: z.int().exactOptional(),
    name: z.string(),
    over_integrations_limit: z.boolean().exactOptional(),
    over_storage_limit: z.boolean().exactOptional(),
    pay_prod_cur: z.string().exactOptional(),
    plan: z.enum(['', 'std', 'plus', 'compliance', 'enterprise']).exactOptional(),
    primary_owner: ObjsPrimaryOwnerSchema.exactOptional(),
    sso_provider: z
      .object({
        label: z.string().exactOptional(),
        name: z.string().exactOptional(),
        type: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'name', 'domain', 'email_domain', 'icon'], title: 'Team Object' })
  .openapi('ObjsTeam')

const ObjsConversationSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (Array.isArray(val)) {
      {
        const Schema = z.union([
          z
            .strictObject({
              accepted_user: DefsUserIdSchema.exactOptional(),
              connected_team_ids: z
                .array(DefsWorkspaceIdSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              conversation_host_id: DefsWorkspaceIdSchema.exactOptional(),
              created: z.int(),
              creator: DefsUserIdSchema,
              display_counts: z
                .strictObject({ display_counts: z.int(), guest_counts: z.int() })
                .exactOptional()
                .openapi({ required: ['display_counts', 'guest_counts'] }),
              enterprise_id: DefsEnterpriseIdSchema.exactOptional(),
              has_pins: z.boolean().exactOptional(),
              id: DefsChannelSchema,
              internal_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              is_archived: z.boolean(),
              is_channel: z.boolean(),
              is_ext_shared: z.boolean().exactOptional(),
              is_frozen: z.boolean().exactOptional(),
              is_general: z.boolean(),
              is_global_shared: z.boolean().exactOptional(),
              is_group: z.boolean(),
              is_im: z.boolean(),
              is_member: z.boolean().exactOptional(),
              is_moved: z.int().exactOptional(),
              is_mpim: z.literal(false),
              is_non_threadable: z.boolean().exactOptional(),
              is_open: z.boolean().exactOptional(),
              is_org_default: z.boolean().exactOptional(),
              is_org_mandatory: z.boolean().exactOptional(),
              is_org_shared: z.boolean(),
              is_pending_ext_shared: z.boolean().exactOptional(),
              is_private: z.boolean(),
              is_read_only: z.boolean().exactOptional(),
              is_shared: z.boolean(),
              is_starred: z.boolean().exactOptional(),
              is_thread_only: z.boolean().exactOptional(),
              last_read: DefsTsSchema.exactOptional(),
              latest: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([ObjsMessageSchema, z.any().nullable()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              members: z
                .array(DefsUserIdSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              name: z.string(),
              name_normalized: z.string(),
              num_members: z.int().exactOptional(),
              parent_conversation: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([DefsChannelSchema, z.any().nullable()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              pending_connected_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              pending_shared: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              pin_count: z.int().exactOptional(),
              previous_names: z
                .array(DefsChannelNameSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              priority: z.number().exactOptional(),
              purpose: z
                .strictObject({
                  creator: DefsTopicPurposeCreatorSchema,
                  last_set: z.int(),
                  value: z.string(),
                })
                .openapi({ required: ['value', 'creator', 'last_set'] }),
              shared_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              shares: z
                .array(
                  z
                    .strictObject({
                      accepted_user: DefsUserIdSchema.exactOptional(),
                      is_active: z.boolean(),
                      team: ObjsTeamSchema,
                      user: DefsUserIdSchema,
                    })
                    .openapi({ required: ['team', 'user', 'is_active'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              timezone_count: z.int().exactOptional(),
              topic: z
                .strictObject({
                  creator: DefsTopicPurposeCreatorSchema,
                  last_set: z.int(),
                  value: z.string(),
                })
                .openapi({ required: ['value', 'creator', 'last_set'] }),
              unlinked: z
                .int()
                .exactOptional()
                .openapi({
                  title:
                    'Field to determine whether a channel has ever been shared/disconnected in the past',
                }),
              unread_count: z.int().exactOptional(),
              unread_count_display: z.int().exactOptional(),
              use_case: z.string().exactOptional(),
              user: DefsUserIdSchema.exactOptional(),
              version: z.int().exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'name',
                'created',
                'creator',
                'is_archived',
                'is_channel',
                'is_general',
                'is_mpim',
                'is_group',
                'is_org_shared',
                'is_im',
                'is_shared',
                'is_private',
                'name_normalized',
                'topic',
                'purpose',
              ],
              title: 'Conversation object',
            }),
          z
            .strictObject({
              accepted_user: DefsUserIdSchema.exactOptional(),
              connected_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              conversation_host_id: DefsWorkspaceIdSchema.exactOptional(),
              created: z.int(),
              creator: DefsUserIdSchema,
              display_counts: z
                .strictObject({ display_counts: z.int(), guest_counts: z.int() })
                .exactOptional()
                .openapi({ required: ['display_counts', 'guest_counts'] }),
              id: DefsChannelSchema,
              internal_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              is_archived: z.boolean(),
              is_channel: z.boolean(),
              is_ext_shared: z.boolean().exactOptional(),
              is_frozen: z.boolean().exactOptional(),
              is_general: z.boolean(),
              is_group: z.boolean(),
              is_im: z.boolean(),
              is_member: z.boolean().exactOptional(),
              is_moved: z.int().exactOptional(),
              is_mpim: z.literal(true),
              is_non_threadable: z.boolean().exactOptional(),
              is_open: z.boolean().exactOptional(),
              is_org_shared: z.boolean(),
              is_pending_ext_shared: z.boolean().exactOptional(),
              is_private: z.boolean(),
              is_read_only: z.boolean().exactOptional(),
              is_shared: z.boolean(),
              is_starred: z.boolean().exactOptional(),
              is_thread_only: z.boolean().exactOptional(),
              last_read: DefsTsSchema.exactOptional(),
              latest: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([ObjsMessageSchema, z.any().nullable()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              members: z
                .array(DefsUserIdSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              name: z.string(),
              name_normalized: z.string(),
              num_members: z.int().exactOptional(),
              parent_conversation: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([DefsChannelSchema, z.any().nullable()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              pending_connected_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              pending_shared: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              pin_count: z.int().exactOptional(),
              previous_names: z
                .array(DefsChannelNameSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              priority: z.number().exactOptional(),
              purpose: z
                .strictObject({
                  creator: DefsTopicPurposeCreatorSchema,
                  last_set: z.int(),
                  value: z.string(),
                })
                .openapi({ required: ['value', 'creator', 'last_set'] }),
              shared_team_ids: z
                .array(DefsTeamSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              shares: z
                .array(
                  z
                    .strictObject({
                      accepted_user: DefsUserIdSchema.exactOptional(),
                      is_active: z.boolean(),
                      team: ObjsTeamSchema,
                      user: DefsUserIdSchema,
                    })
                    .openapi({ required: ['team', 'user', 'is_active'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              timezone_count: z.int().exactOptional(),
              topic: z
                .strictObject({
                  creator: DefsTopicPurposeCreatorSchema,
                  last_set: z.int(),
                  value: z.string(),
                })
                .openapi({ required: ['value', 'creator', 'last_set'] }),
              unlinked: z
                .int()
                .exactOptional()
                .openapi({
                  title:
                    'Field to determine whether a channel has ever been shared/disconnected in the past',
                }),
              unread_count: z.int().exactOptional(),
              unread_count_display: z.int().exactOptional(),
              user: DefsUserIdSchema.exactOptional(),
              version: z.int().exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'name',
                'created',
                'creator',
                'is_archived',
                'is_channel',
                'is_general',
                'is_mpim',
                'is_group',
                'is_org_shared',
                'is_im',
                'is_shared',
                'is_private',
                'name_normalized',
                'topic',
                'purpose',
              ],
              title: 'Conversation MPIM Object',
            }),
          z
            .strictObject({
              created: z.int(),
              has_pins: z.boolean().exactOptional(),
              id: DefsDmIdSchema,
              is_archived: z.boolean().exactOptional(),
              is_ext_shared: z.boolean().exactOptional(),
              is_frozen: z.boolean().exactOptional(),
              is_im: z.boolean(),
              is_open: z.boolean().exactOptional(),
              is_org_shared: z.boolean(),
              is_shared: z.boolean().exactOptional(),
              is_starred: z.boolean().exactOptional(),
              is_user_deleted: z.boolean().exactOptional(),
              last_read: DefsTsSchema.exactOptional(),
              latest: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([ObjsMessageSchema, z.any().nullable()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              parent_conversation: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([DefsChannelSchema, z.any().nullable()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              pin_count: z.int().exactOptional(),
              priority: z.number(),
              shares: z
                .array(
                  z
                    .strictObject({
                      date_create: z.int(),
                      id: DefsTeamSchema,
                      is_active: z.boolean(),
                      name: z.string(),
                      team: ObjsTeamSchema,
                    })
                    .openapi({ required: ['id', 'name', 'team', 'date_create', 'is_active'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              unread_count: z.int().exactOptional(),
              unread_count_display: z.int().exactOptional(),
              user: DefsUserIdSchema,
              version: z.int().exactOptional(),
            })
            .openapi({
              required: ['id', 'created', 'is_im', 'is_org_shared', 'user', 'priority'],
              title: 'Conversation IM Channel Object from conversations.* methods',
            }),
        ])
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .openapi('ObjsConversation')

const ObjsEnterpriseUserSchema = z
  .strictObject({
    enterprise_id: DefsEnterpriseIdSchema,
    enterprise_name: DefsEnterpriseNameSchema,
    id: DefsEnterpriseUserIdSchema,
    is_admin: z.boolean(),
    is_owner: z.boolean(),
    teams: z.array(DefsTeamSchema).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  })
  .openapi({
    required: ['id', 'enterprise_id', 'enterprise_name', 'is_admin', 'is_owner', 'teams'],
  })
  .openapi('ObjsEnterpriseUser')

const ObjsPagingSchema = z
  .strictObject({
    count: z.int().exactOptional(),
    page: z.int(),
    pages: z.int().exactOptional(),
    per_page: z.int().exactOptional(),
    spill: z.int().exactOptional(),
    total: z.int(),
  })
  .openapi({ required: ['page', 'total'], title: 'paging object' })
  .openapi('ObjsPaging')

const ObjsReminderSchema = z
  .strictObject({
    complete_ts: z.int().exactOptional(),
    creator: DefsUserIdSchema,
    id: DefsReminderIdSchema,
    recurring: z.boolean(),
    text: z.string(),
    time: z.int().exactOptional(),
    user: DefsUserIdSchema,
  })
  .openapi({ required: ['id', 'creator', 'user', 'text', 'recurring'] })
  .openapi('ObjsReminder')

const ObjsResourcesSchema = z
  .strictObject({
    excluded_ids: z
      .array(
        z.unknown().superRefine((val, ctx) => {
          if (Array.isArray(val)) {
            {
              const Schema = z.union([DefsChannelSchema, DefsTeamSchema])
              for (let i = 0; i < val.length; i++) {
                if (!Schema.safeParse(val[i]).success) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            }
          }
        }),
      )
      .exactOptional(),
    ids: z.array(
      z.unknown().superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([DefsChannelSchema, DefsTeamSchema])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      }),
    ),
    wildcard: z.boolean().exactOptional(),
  })
  .openapi({ required: ['ids'], title: 'resources in info from apps.permissions.info' })
  .openapi('ObjsResources')

const ObjsResponseMetadataSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (Array.isArray(val)) {
      {
        const Schema = z.union([
          z
            .strictObject({ next_cursor: z.string() })
            .openapi({ required: ['next_cursor'], title: 'new paging style' }),
          z
            .strictObject({
              messages: z.array(z.string()),
              warnings: z.array(z.literal('method_deprecated')),
            })
            .openapi({ required: ['messages', 'warnings'], title: 'deprecation_warning' }),
          z
            .strictObject({
              messages: z.array(z.string()),
              next_cursor: z.string(),
              warnings: z.array(z.literal('method_deprecated')),
            })
            .openapi({
              required: ['messages', 'warnings', 'next_cursor'],
              title: 'deprecation_warning and paging style together',
            }),
        ])
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .openapi('ObjsResponseMetadata')

const ObjsScopesSchema = z
  .array(
    z
      .string()
      .openapi({
        title: 'Named OAuth scopes',
        'x-examples': ['chat:write', 'im:history', 'im:read'],
      }),
  )
  .openapi('ObjsScopes')

const ObjsSubteamSchema = z
  .strictObject({
    auto_provision: z.boolean(),
    auto_type: z.unknown().superRefine((val, ctx) => {
      if (Array.isArray(val)) {
        {
          const Schema = z.union([z.any().nullable(), z.enum(['owner', 'admin'])])
          for (let i = 0; i < val.length; i++) {
            if (!Schema.safeParse(val[i]).success) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        }
      }
    }),
    channel_count: z.int().exactOptional(),
    created_by: DefsUserIdSchema,
    date_create: z.int(),
    date_delete: z.int(),
    date_update: z.int(),
    deleted_by: z.unknown().superRefine((val, ctx) => {
      if (Array.isArray(val)) {
        {
          const Schema = z.union([z.any().nullable(), DefsUserIdSchema])
          for (let i = 0; i < val.length; i++) {
            if (!Schema.safeParse(val[i]).success) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        }
      }
    }),
    description: z.string(),
    enterprise_subteam_id: z.string(),
    handle: z.string(),
    id: DefsSubteamIdSchema,
    is_external: z.boolean(),
    is_subteam: z.boolean(),
    is_usergroup: z.boolean(),
    name: z.string(),
    prefs: z
      .strictObject({ channels: z.array(DefsChannelIdSchema), groups: z.array(DefsGroupIdSchema) })
      .openapi({ required: ['channels', 'groups'] }),
    team_id: DefsTeamSchema,
    updated_by: DefsUserIdSchema,
    user_count: z.int().exactOptional(),
    users: z.array(DefsUserIdSchema).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'team_id',
      'is_usergroup',
      'is_subteam',
      'name',
      'description',
      'handle',
      'is_external',
      'date_create',
      'date_update',
      'date_delete',
      'auto_type',
      'auto_provision',
      'enterprise_subteam_id',
      'created_by',
      'updated_by',
      'deleted_by',
      'prefs',
    ],
    title: 'Subteam/Usergroup Object',
  })
  .openapi('ObjsSubteam')

const ObjsTeamProfileFieldOptionSchema = z
  .strictObject({
    is_custom: z.boolean().nullable().exactOptional(),
    is_multiple_entry: z.boolean().nullable().exactOptional(),
    is_protected: z.boolean().nullable().exactOptional(),
    is_scim: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObjsTeamProfileFieldOption')

const ObjsTeamProfileFieldSchema = z
  .strictObject({
    field_name: z.string().nullable().exactOptional(),
    hint: z.string(),
    id: z.string().regex(/^X[a-zA-Z0-9]{9,}$/),
    is_hidden: z.boolean().exactOptional(),
    label: z.string(),
    options: z
      .unknown()
      .superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([z.any().nullable(), ObjsTeamProfileFieldOptionSchema])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      })
      .exactOptional(),
    ordering: z.number(),
    possible_values: z.array(z.string()).nullable().exactOptional(),
    type: z.enum(['text', 'date', 'link', 'mailto', 'options_list', 'user']),
  })
  .openapi({ required: ['id', 'ordering', 'label', 'hint', 'type'] })
  .openapi('ObjsTeamProfileField')

const ObjsUserProfileSchema = z
  .strictObject({
    always_active: z.boolean().exactOptional(),
    api_app_id: DefsOptionalAppIdSchema.exactOptional(),
    avatar_hash: z.string(),
    bot_id: DefsBotIdSchema.exactOptional(),
    display_name: z.string(),
    display_name_normalized: z.string(),
    email: z.email().nullable().exactOptional(),
    fields: z.xor([z.object({}), z.array(z.any())]).nullable(),
    first_name: z.string().nullable().exactOptional(),
    guest_expiration_ts: z.int().nullable().exactOptional(),
    guest_invited_by: z.string().nullable().exactOptional(),
    image_1024: z.url().nullable().exactOptional(),
    image_192: z.url().nullable().exactOptional(),
    image_24: z.url().nullable().exactOptional(),
    image_32: z.url().nullable().exactOptional(),
    image_48: z.url().nullable().exactOptional(),
    image_512: z.url().nullable().exactOptional(),
    image_72: z.url().nullable().exactOptional(),
    image_original: z.url().nullable().exactOptional(),
    is_app_user: z.boolean().exactOptional(),
    is_custom_image: z.boolean().exactOptional(),
    is_restricted: z.boolean().nullable().exactOptional(),
    is_ultra_restricted: z.boolean().nullable().exactOptional(),
    last_avatar_image_hash: z.string().exactOptional(),
    last_name: z.string().nullable().exactOptional(),
    memberships_count: z.int().exactOptional(),
    name: z.string().nullable().exactOptional(),
    phone: z.string(),
    pronouns: z.string().exactOptional(),
    real_name: z.string(),
    real_name_normalized: z.string(),
    skype: z.string(),
    status_default_emoji: z.string().exactOptional(),
    status_default_text: z.string().exactOptional(),
    status_default_text_canonical: z.string().nullable().exactOptional(),
    status_emoji: z.string(),
    status_expiration: z.int().exactOptional(),
    status_text: z.string(),
    status_text_canonical: z.string().nullable().exactOptional(),
    team: DefsWorkspaceIdSchema.exactOptional(),
    title: z.string(),
    updated: z.int().exactOptional(),
    user_id: z.string().exactOptional(),
    username: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: [
      'real_name',
      'display_name',
      'avatar_hash',
      'real_name_normalized',
      'display_name_normalized',
      'title',
      'phone',
      'skype',
      'status_text',
      'status_emoji',
      'fields',
    ],
    title: 'User profile object',
  })
  .openapi('ObjsUserProfile')

const ObjsUserSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (Array.isArray(val)) {
      {
        const Schema = z.union([
          z
            .strictObject({
              color: z
                .string()
                .regex(/^[a-fA-F0-9]{6}$/)
                .exactOptional(),
              deleted: z.boolean().exactOptional(),
              enterprise_user: ObjsEnterpriseUserSchema.exactOptional(),
              has_2fa: z.boolean().exactOptional(),
              id: DefsUserIdSchema,
              is_admin: z.boolean().exactOptional(),
              is_app_user: z.boolean(),
              is_bot: z.boolean(),
              is_external: z.boolean().exactOptional(),
              is_forgotten: z.boolean().exactOptional(),
              is_invited_user: z.boolean().exactOptional(),
              is_owner: z.boolean().exactOptional(),
              is_primary_owner: z.boolean().exactOptional(),
              is_restricted: z.boolean().exactOptional(),
              is_stranger: z.boolean().exactOptional(),
              is_ultra_restricted: z.boolean().exactOptional(),
              locale: z.string().exactOptional(),
              name: z.string(),
              presence: z.string().exactOptional(),
              profile: ObjsUserProfileSchema,
              real_name: z.string().exactOptional(),
              team: DefsWorkspaceIdSchema.exactOptional(),
              team_id: DefsWorkspaceIdSchema.exactOptional(),
              team_profile: z
                .strictObject({
                  fields: z
                    .array(ObjsTeamProfileFieldSchema)
                    .min(1)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .exactOptional()
                .openapi({ required: ['fields'] }),
              two_factor_type: z.string().exactOptional(),
              tz: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([z.any().nullable(), z.string()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              tz_label: z.string().exactOptional(),
              tz_offset: z.number().exactOptional(),
              updated: z.number(),
            })
            .openapi({
              description: 'user object for non enterprise type',
              required: ['id', 'name', 'profile', 'is_bot', 'updated', 'is_app_user'],
            }),
          z
            .strictObject({
              color: z
                .string()
                .regex(/^([a-fA-F0-9]{6})?$/)
                .exactOptional()
                .openapi({
                  description: 'refercing to bug: https://jira.tinyspeck.com/browse/EVALUE-1559',
                }),
              deleted: z.boolean().exactOptional(),
              enterprise_user: ObjsEnterpriseUserSchema.exactOptional(),
              has_2fa: z.boolean().exactOptional(),
              id: DefsUserIdSchema,
              is_admin: z.boolean().exactOptional(),
              is_app_user: z.boolean(),
              is_bot: z.boolean(),
              is_external: z.boolean().exactOptional(),
              is_forgotten: z.boolean().exactOptional(),
              is_owner: z.boolean().exactOptional(),
              is_primary_owner: z.boolean().exactOptional(),
              is_restricted: z.boolean().exactOptional(),
              is_stranger: z.boolean().exactOptional(),
              is_ultra_restricted: z.boolean().exactOptional(),
              locale: z.string().exactOptional(),
              name: z.string(),
              presence: z.string().exactOptional(),
              profile: ObjsUserProfileSchema,
              real_name: z.string().exactOptional(),
              team_id: DefsWorkspaceIdSchema.exactOptional(),
              team_profile: z
                .strictObject({
                  fields: z
                    .array(ObjsTeamProfileFieldSchema)
                    .min(1)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .exactOptional()
                .openapi({ required: ['fields'] }),
              teams: z
                .array(DefsWorkspaceIdSchema)
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              two_factor_type: z.string().exactOptional(),
              tz: z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([z.any().nullable(), z.string()])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional(),
              tz_label: z.string().exactOptional(),
              tz_offset: z.number().exactOptional(),
              updated: z.number(),
            })
            .openapi({
              description: 'enterprise user',
              required: ['id', 'name', 'profile', 'is_bot', 'updated', 'is_app_user'],
            }),
        ])
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .openapi('ObjsUser')

const AdminInviteRequestsApproveRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          invite_request_id: z.string().openapi({ description: 'ID of the request to invite.' }),
          team_id: z
            .string()
            .exactOptional()
            .openapi({ description: 'ID for the workspace where the invite request was made.' }),
        })
        .openapi({ required: ['invite_request_id'] }),
    },
  },
}

const SlackAuthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://slack.com/oauth/authorize',
      scopes: {
        admin: 'admin',
        'admin.apps:read': 'admin.apps:read',
        'admin.apps:write': 'admin.apps:write',
        'admin.conversations:read': 'admin.conversations:read',
        'admin.conversations:write': 'admin.conversations:write',
        'admin.invites:read': 'admin.invites:read',
        'admin.invites:write': 'admin.invites:write',
        'admin.teams:read': 'admin.teams:read',
        'admin.teams:write': 'admin.teams:write',
        'admin.usergroups:read': 'admin.usergroups:read',
        'admin.usergroups:write': 'admin.usergroups:write',
        'admin.users:read': 'admin.users:read',
        'admin.users:write': 'admin.users:write',
        'authorizations:read': 'authorizations:read',
        bot: 'Bot user scope',
        'calls:read': 'calls:read',
        'calls:write': 'calls:write',
        'channels:history': 'channels:history',
        'channels:manage': 'channels:manage',
        'channels:read': 'channels:read',
        'channels:write': 'channels:write',
        'chat:write': 'chat:write',
        'chat:write:bot': 'Author messages as a bot',
        'chat:write:user': 'Author messages as a user',
        'conversations:history': 'conversations:history',
        'conversations:read': 'conversations:read',
        'conversations:write': 'conversations:write',
        'dnd:read': 'dnd:read',
        'dnd:write': 'dnd:write',
        'emoji:read': 'emoji:read',
        'files:read': 'files:read',
        'files:write:user': 'files:write:user',
        'groups:history': 'groups:history',
        'groups:read': 'groups:read',
        'groups:write': 'groups:write',
        'identity.basic': 'identity.basic',
        'im:history': 'im:history',
        'im:read': 'im:read',
        'im:write': 'im:write',
        'links:write': 'links:write',
        'mpim:history': 'mpim:history',
        'mpim:read': 'mpim:read',
        'mpim:write': 'mpim:write',
        none: 'No scope required',
        'pins:read': 'pins:read',
        'pins:write': 'pins:write',
        'reactions:read': 'reactions:read',
        'reactions:write': 'reactions:write',
        'reminders:read': 'reminders:read',
        'reminders:write': 'reminders:write',
        'remote_files:read': 'remote_files:read',
        'remote_files:share': 'remote_files:share',
        'remote_files:write': 'remote_files:write',
        'rtm:stream': 'rtm:stream',
        'search:read': 'search:read',
        'stars:read': 'stars:read',
        'stars:write': 'stars:write',
        'team:read': 'team:read',
        'tokens.basic': 'tokens.basic',
        'usergroups:read': 'usergroups:read',
        'usergroups:write': 'usergroups:write',
        'users.profile:read': 'users.profile:read',
        'users.profile:write': 'users.profile:write',
        'users:read': 'users:read',
        'users:read.email': 'users:read.email',
        'users:write': 'users:write',
        'workflow.steps:execute': 'workflow.steps:execute',
      },
      tokenUrl: 'https://slack.com/api/oauth.access',
    },
  },
  type: 'oauth2',
}

export const postAdminAppsApproveRoute = createRoute({
  method: 'post',
  path: '/admin.apps.approve',
  tags: ['admin.apps', 'admin'],
  description: 'Approve an app for installation on a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.apps.approve',
  },
  operationId: 'admin_apps_approve',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.apps:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              app_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the app to approve.' }),
              request_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the request to approve.' }),
              team_id: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.apps:write'] }],
})

export const getAdminAppsApprovedListRoute = createRoute({
  method: 'get',
  path: '/admin.apps.approved.list',
  tags: ['admin.apps.approved', 'admin'],
  description: 'List approved apps for an org or workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.apps.approved.list',
  },
  operationId: 'admin_apps_approved_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.apps:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'team_id', schema: { type: 'string' }, required: false },
        }),
      enterprise_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enterprise_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                approved_apps: [
                  {
                    app: {
                      additional_info: '',
                      app_directory_url:
                        'https://myteam.enterprise.slack.com/apps/A0W7UKG8E-my-test-app',
                      app_homepage_url: 'https://www.slack.com',
                      description: 'test app',
                      help_url: 'https://www.slack.com',
                      icons: {
                        image_1024: 'https://3026743124446w96_2bd4ea1ad1f89a23c242_1024.png',
                        image_128: 'https://30267341249446w6_2bd4ea1ad1f89a23c242_128.png',
                        image_192: 'https://30267431249446w6_2bd4ea1ad1f89a23c242_192.png',
                        image_32: 'https://302674312496446w_2bd4ea1ad1f89a23c242_32.png',
                        image_36: 'https://302674312496446w_2bd4ea1ad1f89a23c242_36.png',
                        image_48: 'https://302674312496446w_2bd4ea1ad1f89a23c242_48.png',
                        image_512: 'https://30267431249446w6_2bd4ea1ad1f89a23c242_512.png',
                        image_64: 'https://302674312496446w_2bd4ea1ad1f89a23c242_64.png',
                        image_72: 'https://302674312496446w_2bd4ea1ad1f89a23c242_72.png',
                        image_96: 'https://302674312496446w_2bd4ea1ad1f89a23c242_96.png',
                        image_original: 'https://302674446w12496_2bd4ea1ad1f89a23c242_original.png',
                      },
                      id: 'A0W7UKG8E',
                      is_app_directory_approved: false,
                      is_internal: false,
                      name: 'My Test App',
                      privacy_policy_url: 'https://www.slack.com',
                    },
                    date_updated: 1574296707,
                    last_resolved_by: { actor_id: 'W0G82F4FD', actor_type: 'user' },
                    scopes: [
                      {
                        description:
                          'Add the ability for people to direct message or mention @my_test_app',
                        is_sensitive: true,
                        name: 'bot',
                        token_type: 'bot',
                      },
                    ],
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: '' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.apps:read'] }],
})

export const getAdminAppsRequestsListRoute = createRoute({
  method: 'get',
  path: '/admin.apps.requests.list',
  tags: ['admin.apps.requests', 'admin'],
  description: 'List app requests for a team/workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.apps.requests.list',
  },
  operationId: 'admin_apps_requests_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.apps:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'team_id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                app_requests: [
                  {
                    app: {
                      additional_info: '',
                      app_directory_url: 'https://acmecorp.slack.com/apps/A061BL8RQ0-test-app',
                      app_homepage_url: '',
                      description: '',
                      help_url: '',
                      icons: {
                        image_1024: '/cdn/15258203/img/testapp/service_1024.png',
                        image_128: '/cdn/157258203/img/testapp/service_128.png',
                        image_192: '/cdn/157258203/img/testapp/service_192.png',
                        image_32: '/cdn/157658203/img/testapp/service_32.png',
                        image_36: '/cdn/157658203/img/testapp/service_36.png',
                        image_48: '/cdn/157658203/img/testapp/service_48.png',
                        image_512: '/cdn/15758203/img/testapp/service_512.png',
                        image_64: '/cdn/157658203/img/testapp/service_64.png',
                        image_72: '/cdn/157658203/img/testapp/service_72.png',
                        image_96: '/cdn/157658203/img/testapp/service_96.png',
                      },
                      id: 'A061BL8RQ0',
                      is_app_directory_approved: true,
                      is_internal: false,
                      name: 'Test App',
                      privacy_policy_url: 'https://testapp.com/privacy',
                    },
                    date_created: 1578956327,
                    id: 'Ar0XJGFLMLS',
                    message: 'test test again',
                    previous_resolution: null,
                    scopes: [
                      {
                        description: 'Post messages to specific channels in Slack',
                        is_sensitive: false,
                        name: 'incoming-webhook',
                        token_type: 'user',
                      },
                    ],
                    team: { domain: 'acmecorp', id: 'T0M94LNUCR', name: 'Acme Corp' },
                    user: { email: 'janedoe@example.com', id: 'W08RA9G5HR', name: 'Jane Doe' },
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: '' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: {
            response: {
              value: {
                error: 'missing_scope',
                needed: 'admin.apps:read',
                ok: false,
                provided: 'read,client,admin,identify,post,apps',
              },
            },
          },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.apps:read'] }],
})

export const postAdminAppsRestrictRoute = createRoute({
  method: 'post',
  path: '/admin.apps.restrict',
  tags: ['admin.apps', 'admin'],
  description: 'Restrict an app for installation on a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.apps.restrict',
  },
  operationId: 'admin_apps_restrict',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.apps:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              app_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the app to restrict.' }),
              request_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the request to restrict.' }),
              team_id: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.apps:write'] }],
})

export const getAdminAppsRestrictedListRoute = createRoute({
  method: 'get',
  path: '/admin.apps.restricted.list',
  tags: ['admin.apps.restricted', 'admin'],
  description: 'List restricted apps for an org or workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.apps.restricted.list',
  },
  operationId: 'admin_apps_restricted_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.apps:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'team_id', schema: { type: 'string' }, required: false },
        }),
      enterprise_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enterprise_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                response_metadata: { next_cursor: '' },
                restricted_apps: [
                  {
                    app: {
                      additional_info: '',
                      app_directory_url:
                        'https://myteam.enterprise.slack.com/apps/A0FDLP8M2L-my-test-app',
                      app_homepage_url: 'https://example.com',
                      description: 'A fun test app for Slack',
                      help_url: 'https://example.com',
                      icons: {
                        image_1024: 'https://1433265338rl878408_eb57dbc818daa4ba15d6_1024.png',
                        image_128: 'https://4332653438rl87808_eb57dbc818daa4ba15d6_128.png',
                        image_192: 'https://4332653438rl87808_eb57dbc818daa4ba15d6_192.png',
                        image_32: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_32.png',
                        image_36: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_36.png',
                        image_48: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_48.png',
                        image_512: 'https://4332653438rl87808_eb57dbc818daa4ba15d6_512.png',
                        image_64: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_64.png',
                        image_72: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_72.png',
                        image_96: 'https://143326534038rl8788_eb57dbc818daa4ba15d6_96.png',
                        image_original:
                          'https://143338rl8782653408_eb57dbc818daa4ba15d6_original.png',
                      },
                      id: 'A0FDLP8M2L',
                      is_app_directory_approved: true,
                      is_internal: false,
                      name: 'My Test App',
                      privacy_policy_url: 'https://example.com',
                    },
                    date_updated: 1574296721,
                    last_resolved_by: { actor_id: 'W0G82LMFD', actor_type: 'user' },
                    scopes: [
                      {
                        description: 'Upload, edit, and delete files on the user‟s behalf',
                        is_sensitive: true,
                        name: 'files:write:user',
                        token_type: 'user',
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.apps:read'] }],
})

export const postAdminConversationsArchiveRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.archive',
  tags: ['admin.conversations', 'admin'],
  description: 'Archive a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.archive',
  },
  operationId: 'admin_conversations_archive',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ channel_id: z.string().openapi({ description: 'The channel to archive.' }) })
            .openapi({ required: ['channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.archive',
              required: ['ok'],
              title: 'admin.conversations.archive schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'channel_not_found',
                'channel_type_not_supported',
                'default_org_wide_channel',
                'already_archived',
                'cant_archive_general',
                'restricted_action',
                'could_not_archive_channel',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.archive',
              required: ['ok', 'error'],
              title: 'admin.conversations.archive error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsConvertToPrivateRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.convertToPrivate',
  tags: ['admin.conversations', 'admin'],
  description: 'Convert a public channel to a private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.convertToPrivate',
  },
  operationId: 'admin_conversations_convertToPrivate',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z.string().openapi({ description: 'The channel to convert to private.' }),
            })
            .openapi({ required: ['channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.convertToPrivate',
              required: ['ok'],
              title: 'admin.conversations.convertToPrivate schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'restricted_action',
                'name_taken',
                'channel_not_found',
                'channel_type_not_supported',
                'default_org_wide_channel',
                'method_not_supported_for_channel_type',
                'could_not_convert_channel',
                'external_channel_migrating',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.convertToPrivate',
              required: ['ok', 'error'],
              title: 'admin.conversations.convertToPrivate error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsCreateRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.create',
  tags: ['admin.conversations', 'admin'],
  description: 'Create a public or private channel-based conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.create',
  },
  operationId: 'admin_conversations_create',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Description of the public or private channel to create.',
                }),
              is_private: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description: 'When `true`, creates a private channel instead of a public channel',
                }),
              name: z
                .string()
                .openapi({ description: 'Name of the public or private channel to create.' }),
              org_wide: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel',
                }),
              team_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`.',
                }),
            })
            .openapi({ required: ['name', 'is_private'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel_id: DefsChannelIdSchema.exactOptional(), ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.create',
              required: ['ok'],
              title: 'admin.conversations.create schema',
            }),
          examples: { response: { value: { channel_id: 'C12345', ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'name_taken',
                'restricted_action',
                'team_not_found',
                'invalid_team',
                'invalid_name',
                'could_not_create_channel',
                'team_id_or_org_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.create',
              required: ['ok', 'error'],
              title: 'admin.conversations.create error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsDeleteRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.delete',
  tags: ['admin.conversations', 'admin'],
  description: 'Delete a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.delete',
  },
  operationId: 'admin_conversations_delete',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ channel_id: z.string().openapi({ description: 'The channel to delete.' }) })
            .openapi({ required: ['channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.delete',
              required: ['ok'],
              title: 'admin.conversations.delete schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'not_an_admin',
                'channel_not_found',
                'channel_type_not_supported',
                'default_org_wide_channel',
                'restricted_action',
                'could_not_delete_channel',
                'missing_scope',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.delete',
              required: ['ok', 'error'],
              title: 'admin.conversations.delete error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsDisconnectSharedRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.disconnectShared',
  tags: ['admin.conversations', 'admin'],
  description: 'Disconnect a connected channel from one or more workspaces.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.disconnectShared',
  },
  operationId: 'admin_conversations_disconnectShared',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z
                .string()
                .openapi({ description: 'The channel to be disconnected from some workspaces.' }),
              leaving_team_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The team to be removed from the channel. Currently only a single team id can be specified.',
                }),
            })
            .openapi({ required: ['channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.disconnectShared',
              required: ['ok'],
              title: 'admin.conversations.rename schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'not_an_admin',
                'not_an_enterprise',
                'channel_not_found',
                'not_supported',
                'team_not_found',
                'restricted_action',
                'missing_scope',
                'leaving_team_not_in_channel',
                'no_teams_to_disconnect',
                'leaving_team_required',
                'cannot_kick_team',
                'cannot_kick_home_team',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.disconnectShared',
              required: ['ok', 'error'],
              title: 'admin.conversations.disconnectShared error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const getAdminConversationsEkmListOriginalConnectedChannelInfoRoute = createRoute({
  method: 'get',
  path: '/admin.conversations.ekm.listOriginalConnectedChannelInfo',
  tags: ['admin.conversations.ekm', 'admin'],
  description:
    'List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo',
  },
  operationId: 'admin_conversations_ekm_listOriginalConnectedChannelInfo',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channel_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of channels to filter to.',
            in: 'query',
            name: 'channel_ids',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of the workspaces to which the channels you would like returned belong.',
            in: 'query',
            name: 'team_ids',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                channels: [
                  {
                    id: 'string',
                    internal_team_ids: 'array',
                    original_connected_channel_id: 'string',
                    original_connected_host_id: 'string',
                  },
                ],
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:read'] }],
})

export const getAdminConversationsGetConversationPrefsRoute = createRoute({
  method: 'get',
  path: '/admin.conversations.getConversationPrefs',
  tags: ['admin.conversations', 'admin'],
  description: 'Get conversation preferences for a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.getConversationPrefs',
  },
  operationId: 'admin_conversations_getConversationPrefs',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description: 'The channel to get preferences for.',
            in: 'query',
            name: 'channel_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              prefs: z
                .object({
                  can_thread: z
                    .object({
                      type: z.array(z.string()).exactOptional(),
                      user: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  who_can_post: z
                    .object({
                      type: z.array(z.string()).exactOptional(),
                      user: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              description:
                'Schema for successful response of admin.conversations.getConversationPrefs',
              required: ['ok'],
              title: 'admin.conversations.getConversationPrefs schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'not_an_admin',
                'not_an_enterprise',
                'restricted_action',
                'missing_scope',
                'channel_not_found',
                'channel_type_not_supported',
                'could_not_get_conversation_prefs',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description:
                'Schema for error response from admin.conversations.getConversationPrefs',
              required: ['ok', 'error'],
              title: 'admin.conversations.unarchive error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:read'] }],
})

export const getAdminConversationsGetTeamsRoute = createRoute({
  method: 'get',
  path: '/admin.conversations.getTeams',
  tags: ['admin.conversations', 'admin'],
  description:
    'Get all the workspaces a given public or private channel is connected to within this Enterprise org.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.getTeams',
  },
  operationId: 'admin_conversations_getTeams',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            description:
              'The channel to determine connected workspaces within the organization for.',
            in: 'query',
            name: 'channel_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              response_metadata: z
                .strictObject({ next_cursor: z.string() })
                .exactOptional()
                .openapi({ required: ['next_cursor'] }),
              team_ids: z.array(DefsTeamSchema),
            })
            .openapi({
              description: 'Schema for successful response of admin.conversations.getTeams',
              required: ['ok', 'team_ids'],
              title: 'admin.conversations.getTeams schema',
            }),
          examples: { response: { value: { ok: true, teams: ['T1234', 'T5678'] } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'channel_not_found',
                'channel_type_not_supported',
                'unsupported_team_type',
                'restricted_action',
                'could_not_get_teams',
                'invalid_cursor',
                'invalid_limit',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.getTeams',
              required: ['ok', 'error'],
              title: 'admin.conversations.getTeams error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:read'] }],
})

export const postAdminConversationsInviteRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.invite',
  tags: ['admin.conversations', 'admin'],
  description: 'Invite a user to a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.invite',
  },
  operationId: 'admin_conversations_invite',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z
                .string()
                .openapi({ description: 'The channel that the users will be invited to.' }),
              user_ids: z.string().openapi({ description: 'The users to invite.' }),
            })
            .openapi({ required: ['user_ids', 'channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.invite',
              required: ['ok'],
              title: 'admin.conversations.invite schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              error: z.enum([
                'feature_not_enabled',
                'channel_not_found',
                'channel_type_not_supported',
                'default_org_wide_channel',
                'restricted_action',
                'user_must_be_admin',
                'failed_for_some_users',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.invite',
              required: ['ok', 'error'],
              title: 'admin.conversations.invite error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsRenameRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.rename',
  tags: ['admin.conversations', 'admin'],
  description: 'Rename a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.rename',
  },
  operationId: 'admin_conversations_rename',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z.string().openapi({ description: 'The channel to rename.' }),
              name: z.string(),
            })
            .openapi({ required: ['channel_id', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.rename',
              required: ['ok'],
              title: 'admin.conversations.rename schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'channel_not_found',
                'channel_type_not_supported',
                'restricted_action',
                'could_not_rename_channel',
                'default_org_wide_channel',
                'name_taken',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.rename',
              required: ['ok', 'error'],
              title: 'admin.conversations.unarchive error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsRestrictAccessAddGroupRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.restrictAccess.addGroup',
  tags: ['admin.conversations.restrictAccess', 'admin'],
  description: 'Add an allowlist of IDP groups for accessing a channel',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup',
  },
  operationId: 'admin_conversations_restrictAccess_addGroup',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z.string().openapi({ description: 'The channel to link this group to.' }),
              group_id: z
                .string()
                .openapi({
                  description:
                    'The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel.',
                }),
              team_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.',
                }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.conversations:write`',
                }),
            })
            .openapi({ required: ['token', 'group_id', 'channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const getAdminConversationsRestrictAccessListGroupsRoute = createRoute({
  method: 'get',
  path: '/admin.conversations.restrictAccess.listGroups',
  tags: ['admin.conversations.restrictAccess', 'admin'],
  description: 'List all IDP Groups linked to a channel',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups',
  },
  operationId: 'admin_conversations_restrictAccess_listGroups',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channel_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'channel_id', required: true, schema: { type: 'string' } },
        }),
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.',
            in: 'query',
            name: 'team_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { group_ids: ['YOUR_GROUP_ID'], ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:read'] }],
})

export const postAdminConversationsRestrictAccessRemoveGroupRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.restrictAccess.removeGroup',
  tags: ['admin.conversations.restrictAccess', 'admin'],
  description: 'Remove a linked IDP group linked from a private channel',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup',
  },
  operationId: 'admin_conversations_restrictAccess_removeGroup',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z
                .string()
                .openapi({ description: 'The channel to remove the linked group from.' }),
              group_id: z
                .string()
                .openapi({
                  description:
                    'The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.',
                }),
              team_id: z
                .string()
                .openapi({
                  description:
                    'The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.',
                }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.conversations:write`',
                }),
            })
            .openapi({ required: ['token', 'team_id', 'group_id', 'channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const getAdminConversationsSearchRoute = createRoute({
  method: 'get',
  path: '/admin.conversations.search',
  tags: ['admin.conversations', 'admin'],
  description: 'Search for public or private channels in an Enterprise organization.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.search',
  },
  operationId: 'admin_conversations_search',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      team_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated string of team IDs, signifying the workspaces to search through.',
            in: 'query',
            name: 'team_ids',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the the channel to query by.',
            in: 'query',
            name: 'query',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search_channel_types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types).',
            in: 'query',
            name: 'search_channel_types',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted ',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort_dir: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a)',
            in: 'query',
            name: 'sort_dir',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channels: z.array(ObjsChannelSchema), next_cursor: z.string() })
            .openapi({
              description: 'Schema for successful response of admin.conversations.search',
              required: ['channels', 'next_cursor'],
              title: 'admin.conversations.search schema',
            }),
          examples: {
            response: {
              value: {
                channels: [
                  {
                    created: 1449252889,
                    creator: 'U012A3CDE',
                    id: 'C012AB3CD',
                    is_archived: false,
                    is_channel: true,
                    is_ext_shared: false,
                    is_general: true,
                    is_group: false,
                    is_im: false,
                    is_member: true,
                    is_mpim: false,
                    is_org_shared: false,
                    is_pending_ext_shared: false,
                    is_private: false,
                    is_shared: false,
                    name: 'general',
                    name_normalized: 'general',
                    num_members: 4,
                    pending_shared: [],
                    previous_names: [],
                    purpose: {
                      creator: '',
                      last_set: 0,
                      value:
                        'This channel is for team-wide communication and announcements. All team members are in this channel.',
                    },
                    topic: {
                      creator: '',
                      last_set: 0,
                      value: 'Company-wide announcements and work-based matters',
                    },
                    unlinked: 0,
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: 'dGVhbTpDMDYxRkE1UEI=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'not_an_admin',
                'not_an_enterprise',
                'team_not_found',
                'not_allowed',
                'invalid_auth',
                'invalid_cursor',
                'invalid_search_channel_type',
                'invalid_sort',
                'invalid_sort_dir',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.search',
              required: ['ok', 'error'],
              title: 'admin.conversations.search error schema',
            }),
          examples: { response: { value: { error: 'not_an_enterprise', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:read'] }],
})

export const postAdminConversationsSetConversationPrefsRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.setConversationPrefs',
  tags: ['admin.conversations', 'admin'],
  description: 'Set the posting permissions for a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.setConversationPrefs',
  },
  operationId: 'admin_conversations_setConversationPrefs',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z.string().openapi({ description: 'The channel to set the prefs for' }),
              prefs: z
                .string()
                .openapi({
                  description: 'The prefs for this channel in a stringified JSON format.',
                }),
            })
            .openapi({ required: ['channel_id', 'prefs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'Schema for successful response of admin.conversations.setConversationPrefs',
              required: ['ok'],
              title: 'admin.conversations.setConversationPrefs schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'not_an_admin',
                'channel_not_found',
                'channel_type_not_supported',
                'restricted_action',
                'missing_scope',
                'could_not_set_channel_pref',
                'default_org_wide_channel',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description:
                'Schema for error response from admin.conversations.setConversationPrefs',
              required: ['ok', 'error'],
              title: 'admin.conversations.setConversationPrefs error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsSetTeamsRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.setTeams',
  tags: ['admin.conversations', 'admin'],
  description:
    'Set the workspaces in an Enterprise grid org that connect to a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.setTeams',
  },
  operationId: 'admin_conversations_setTeams',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z
                .string()
                .openapi({
                  description: 'The encoded `channel_id` to add or remove to workspaces.',
                }),
              org_channel: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'True if channel has to be converted to an org channel' }),
              target_team_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide.',
                }),
              team_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.',
                }),
            })
            .openapi({ required: ['channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminConversationsUnarchiveRoute = createRoute({
  method: 'post',
  path: '/admin.conversations.unarchive',
  tags: ['admin.conversations', 'admin'],
  description: 'Unarchive a public or private channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.conversations.unarchive',
  },
  operationId: 'admin_conversations_unarchive',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.conversations:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_id: z.string().openapi({ description: 'The channel to unarchive.' }),
            })
            .openapi({ required: ['channel_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response of admin.conversations.unarchive',
              required: ['ok'],
              title: 'admin.conversations.unarchive schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              error: z.enum([
                'feature_not_enabled',
                'channel_not_found',
                'channel_not_archived',
                'channel_type_not_supported',
                'restricted_action',
                'could_not_unarchive_channel',
                'default_org_wide_channel',
                'missing_scope',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from admin.conversations.unarchive',
              required: ['ok', 'error'],
              title: 'admin.conversations.unarchive error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.conversations:write'] }],
})

export const postAdminEmojiAddRoute = createRoute({
  method: 'post',
  path: '/admin.emoji.add',
  tags: ['admin.emoji', 'admin'],
  description: 'Add an emoji.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.emoji.add',
  },
  operationId: 'admin_emoji_add',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.',
                }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.teams:write`',
                }),
              url: z
                .string()
                .openapi({
                  description:
                    'The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.',
                }),
            })
            .openapi({ required: ['token', 'name', 'url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminEmojiAddAliasRoute = createRoute({
  method: 'post',
  path: '/admin.emoji.addAlias',
  tags: ['admin.emoji', 'admin'],
  description: 'Add an emoji alias.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.emoji.addAlias',
  },
  operationId: 'admin_emoji_addAlias',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              alias_for: z.string().openapi({ description: 'The alias of the emoji.' }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.',
                }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.teams:write`',
                }),
            })
            .openapi({ required: ['token', 'name', 'alias_for'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const getAdminEmojiListRoute = createRoute({
  method: 'get',
  path: '/admin.emoji.list',
  tags: ['admin.emoji', 'admin'],
  description: 'List emoji for an Enterprise Grid organization.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.emoji.list',
  },
  operationId: 'admin_emoji_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                cache_ts: '1575283387.000000',
                categories: [
                  {
                    emoji_names: ['grinning', 'grin', 'joy', 'etc etc ...'],
                    name: 'Smileys & People',
                  },
                ],
                categories_version: '5',
                emoji: {
                  black_square: 'alias:black_large_square',
                  bowtie: 'https://emoji.slack-edge.com/T9TK3CUKW/bowtie/f3ec6f2bb0.png',
                  cubimal_chick:
                    'https://emoji.slack-edge.com/T9TK3CUKW/cubimal_chick/85961c43d7.png',
                  dusty_stick: 'https://emoji.slack-edge.com/T9TK3CUKW/dusty_stick/6177a62312.png',
                  glitch_crab: 'https://emoji.slack-edge.com/T9TK3CUKW/glitch_crab/db049f1f9c.png',
                  piggy: 'https://emoji.slack-edge.com/T9TK3CUKW/piggy/b7762ee8cd.png',
                  pride: 'https://emoji.slack-edge.com/T9TK3CUKW/pride/56b1bd3388.png',
                  shipit: 'alias:squirrel',
                  simple_smile: {
                    apple:
                      'https://a.slack-edge.com/80588/img/emoji_2017_12_06/apple/simple_smile.png',
                    google:
                      'https://a.slack-edge.com/80588/img/emoji_2017_12_06/google/simple_smile.png',
                  },
                  slack: 'https://emoji.slack-edge.com/T9TK3CUKW/slack/7d462d2443.png',
                  slack_call: 'https://emoji.slack-edge.com/T9TK3CUKW/slack_call/b81fffd6dd.png',
                  squirrel: 'https://emoji.slack-edge.com/T9TK3CUKW/squirrel/465f40c0e0.png',
                  thumbsup_all:
                    'https://emoji.slack-edge.com/T9TK3CUKW/thumbsup_all/50096a1020.gif',
                  white_square: 'alias:white_large_square',
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:read'] }],
})

export const postAdminEmojiRemoveRoute = createRoute({
  method: 'post',
  path: '/admin.emoji.remove',
  tags: ['admin.emoji', 'admin'],
  description: 'Remove an emoji across an Enterprise Grid organization',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.emoji.remove',
  },
  operationId: 'admin_emoji_remove',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.',
                }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.teams:write`',
                }),
            })
            .openapi({ required: ['token', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminEmojiRenameRoute = createRoute({
  method: 'post',
  path: '/admin.emoji.rename',
  tags: ['admin.emoji', 'admin'],
  description: 'Rename an emoji.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.emoji.rename',
  },
  operationId: 'admin_emoji_rename',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.',
                }),
              new_name: z.string().openapi({ description: 'The new name of the emoji.' }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.teams:write`',
                }),
            })
            .openapi({ required: ['token', 'name', 'new_name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminInviteRequestsApproveRoute = createRoute({
  method: 'post',
  path: '/admin.inviteRequests.approve',
  tags: ['admin.inviteRequests', 'admin'],
  description: 'Approve a workspace invite request.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.inviteRequests.approve',
  },
  operationId: 'admin_inviteRequests_approve',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.invites:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AdminInviteRequestsApproveRequestBody,
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.invites:write'] }],
})

export const getAdminInviteRequestsApprovedListRoute = createRoute({
  method: 'get',
  path: '/admin.inviteRequests.approved.list',
  tags: ['admin.inviteRequests.approved', 'admin'],
  description: 'List all approved workspace invite requests.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.inviteRequests.approved.list',
  },
  operationId: 'admin_inviteRequests_approved_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.invites:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID for the workspace where the invite requests were made.',
            in: 'query',
            name: 'team_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value of the `next_cursor` field sent as part of the previous API response',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.invites:read'] }],
})

export const getAdminInviteRequestsDeniedListRoute = createRoute({
  method: 'get',
  path: '/admin.inviteRequests.denied.list',
  tags: ['admin.inviteRequests.denied', 'admin'],
  description: 'List all denied workspace invite requests.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.inviteRequests.denied.list',
  },
  operationId: 'admin_inviteRequests_denied_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.invites:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID for the workspace where the invite requests were made.',
            in: 'query',
            name: 'team_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value of the `next_cursor` field sent as part of the previous api response',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.invites:read'] }],
})

export const postAdminInviteRequestsDenyRoute = createRoute({
  method: 'post',
  path: '/admin.inviteRequests.deny',
  tags: ['admin.inviteRequests', 'admin'],
  description: 'Deny a workspace invite request.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.inviteRequests.deny',
  },
  operationId: 'admin_inviteRequests_deny',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.invites:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AdminInviteRequestsApproveRequestBody,
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.invites:write'] }],
})

export const getAdminInviteRequestsListRoute = createRoute({
  method: 'get',
  path: '/admin.inviteRequests.list',
  tags: ['admin.inviteRequests', 'admin'],
  description: 'List all pending workspace invite requests.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.inviteRequests.list',
  },
  operationId: 'admin_inviteRequests_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.invites:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID for the workspace where the invite requests were made.',
            in: 'query',
            name: 'team_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value of the `next_cursor` field sent as part of the previous API response',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.invites:read'] }],
})

export const getAdminTeamsAdminsListRoute = createRoute({
  method: 'get',
  path: '/admin.teams.admins.list',
  tags: ['admin.teams.admins', 'admin'],
  description: 'List all of the admins on a given workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.admins.list',
  },
  operationId: 'admin_teams_admins_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      team_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { admin_ids: ['U1234'], ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:read'] }],
})

export const postAdminTeamsCreateRoute = createRoute({
  method: 'post',
  path: '/admin.teams.create',
  tags: ['admin.teams', 'admin'],
  description: 'Create an Enterprise team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.create',
  },
  operationId: 'admin_teams_create',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              team_description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Description for the team.' }),
              team_discoverability: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`.",
                }),
              team_domain: z
                .string()
                .openapi({ description: 'Team domain (for example, slacksoftballteam).' }),
              team_name: z
                .string()
                .openapi({ description: 'Team name (for example, Slack Softball Team).' }),
            })
            .openapi({ required: ['team_domain', 'team_name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true, team: 'T12345' } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const getAdminTeamsListRoute = createRoute({
  method: 'get',
  path: '/admin.teams.list',
  tags: ['admin.teams', 'admin'],
  description: 'List all teams on an Enterprise organization',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.list',
  },
  operationId: 'admin_teams_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description:
              'The maximum number of items to return. Must be between 1 - 100 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                teams: [
                  {
                    discoverability: 'hidden',
                    id: 'T1234',
                    name: 'My Team',
                    primary_owner: { email: 'bront@slack.com', user_id: 'W1234' },
                    team_url: 'https://subarachnoid.slack.com/',
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:read'] }],
})

export const getAdminTeamsOwnersListRoute = createRoute({
  method: 'get',
  path: '/admin.teams.owners.list',
  tags: ['admin.teams.owners', 'admin'],
  description: 'List all of the owners on a given workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.owners.list',
  },
  operationId: 'admin_teams_owners_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
      limit: z
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
            description:
              'The maximum number of items to return. Must be between 1 - 1000 both inclusive.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true, owner_ids: ['U1234'] } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:read'] }],
})

export const getAdminTeamsSettingsInfoRoute = createRoute({
  method: 'get',
  path: '/admin.teams.settings.info',
  tags: ['admin.teams.settings', 'admin'],
  description: 'Fetch information about settings in a workspace',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.settings.info',
  },
  operationId: 'admin_teams_settings_info',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                team: {
                  default_channels: 'array',
                  domain: 'string',
                  email_domain: 'string',
                  enterprise_id: 'string',
                  enterprise_name: 'string',
                  icon: 'array',
                  id: 'string',
                  name: 'string',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:read'] }],
})

export const postAdminTeamsSettingsSetDefaultChannelsRoute = createRoute({
  method: 'post',
  path: '/admin.teams.settings.setDefaultChannels',
  tags: ['admin.teams.settings', 'admin'],
  description: 'Set the default channels of a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.settings.setDefaultChannels',
  },
  operationId: 'admin_teams_settings_setDefaultChannels',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_ids: z.string().openapi({ description: 'An array of channel IDs.' }),
              team_id: z
                .string()
                .openapi({ description: 'ID for the workspace to set the default channel for.' }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.teams:write`',
                }),
            })
            .openapi({ required: ['token', 'team_id', 'channel_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminTeamsSettingsSetDescriptionRoute = createRoute({
  method: 'post',
  path: '/admin.teams.settings.setDescription',
  tags: ['admin.teams.settings', 'admin'],
  description: 'Set the description of a given workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.settings.setDescription',
  },
  operationId: 'admin_teams_settings_setDescription',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: z
                .string()
                .openapi({ description: 'The new description for the workspace.' }),
              team_id: z
                .string()
                .openapi({ description: 'ID for the workspace to set the description for.' }),
            })
            .openapi({ required: ['team_id', 'description'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminTeamsSettingsSetDiscoverabilityRoute = createRoute({
  method: 'post',
  path: '/admin.teams.settings.setDiscoverability',
  tags: ['admin.teams.settings', 'admin'],
  description: 'An API method that allows admins to set the discoverability of a given workspace',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.settings.setDiscoverability',
  },
  operationId: 'admin_teams_settings_setDiscoverability',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              discoverability: z
                .string()
                .openapi({
                  description:
                    "This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.",
                }),
              team_id: z
                .string()
                .openapi({ description: 'The ID of the workspace to set discoverability on.' }),
            })
            .openapi({ required: ['team_id', 'discoverability'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminTeamsSettingsSetIconRoute = createRoute({
  method: 'post',
  path: '/admin.teams.settings.setIcon',
  tags: ['admin.teams.settings', 'admin'],
  description: 'Sets the icon of a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.settings.setIcon',
  },
  operationId: 'admin_teams_settings_setIcon',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              image_url: z.string().openapi({ description: 'Image URL for the icon' }),
              team_id: z
                .string()
                .openapi({ description: 'ID for the workspace to set the icon for.' }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `admin.teams:write`',
                }),
            })
            .openapi({ required: ['token', 'image_url', 'team_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminTeamsSettingsSetNameRoute = createRoute({
  method: 'post',
  path: '/admin.teams.settings.setName',
  tags: ['admin.teams.settings', 'admin'],
  description: 'Set the name of a given workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.teams.settings.setName',
  },
  operationId: 'admin_teams_settings_setName',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The new name of the workspace.' }),
              team_id: z
                .string()
                .openapi({ description: 'ID for the workspace to set the name for.' }),
            })
            .openapi({ required: ['team_id', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const postAdminUsergroupsAddChannelsRoute = createRoute({
  method: 'post',
  path: '/admin.usergroups.addChannels',
  tags: ['admin.usergroups', 'admin'],
  description: 'Add one or more default channels to an IDP group.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.usergroups.addChannels',
  },
  operationId: 'admin_usergroups_addChannels',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_ids: z
                .string()
                .openapi({ description: 'Comma separated string of channel IDs.' }),
              team_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The workspace to add default channels in.' }),
              usergroup_id: z
                .string()
                .openapi({ description: 'ID of the IDP group to add default channels for.' }),
            })
            .openapi({ required: ['usergroup_id', 'channel_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description:
        'Typical error response if the token provided is not associated with an Org Admin or Owner',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'not_an_admin', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.usergroups:write'] }],
})

export const postAdminUsergroupsAddTeamsRoute = createRoute({
  method: 'post',
  path: '/admin.usergroups.addTeams',
  tags: ['admin.usergroups', 'admin'],
  description: 'Associate one or more default workspaces with an organization-wide IDP group.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.usergroups.addTeams',
  },
  operationId: 'admin_usergroups_addTeams',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.teams:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              auto_provision: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, this method automatically creates new workspace accounts for the IDP group members.',
                }),
              team_ids: z
                .string()
                .openapi({
                  description:
                    'A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token.',
                }),
              usergroup_id: z
                .string()
                .openapi({ description: 'An encoded usergroup (IDP Group) ID.' }),
            })
            .openapi({ required: ['usergroup_id', 'team_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.teams:write'] }],
})

export const getAdminUsergroupsListChannelsRoute = createRoute({
  method: 'get',
  path: '/admin.usergroups.listChannels',
  tags: ['admin.usergroups', 'admin'],
  description: 'List the channels linked to an org-level IDP group (user group).',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.usergroups.listChannels',
  },
  operationId: 'admin_usergroups_listChannels',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.usergroups:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      usergroup_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the IDP group to list default channels for.',
            in: 'query',
            name: 'usergroup_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the the workspace.',
            in: 'query',
            name: 'team_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_num_members: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag to include or exclude the count of members per channel.',
            in: 'query',
            name: 'include_num_members',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                channels: [
                  { id: 'C024BE91L', name: 'fun', num_members: 34, team_id: 'T024BE911' },
                  { id: 'C024BE91K', name: 'more fun', team_id: 'T024BE912' },
                  {
                    id: 'C024BE91M',
                    is_redacted: true,
                    name: 'public-channel',
                    num_members: 34,
                    team_id: 'T024BE911',
                  },
                  { id: 'C024BE91N', name: 'some more fun', team_id: 'T024BE921' },
                ],
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description:
        'Typical error response if the token provided is not associated with an Org Admin or Owner',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'not_an_admin', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.usergroups:read'] }],
})

export const postAdminUsergroupsRemoveChannelsRoute = createRoute({
  method: 'post',
  path: '/admin.usergroups.removeChannels',
  tags: ['admin.usergroups', 'admin'],
  description: 'Remove one or more default channels from an org-level IDP group (user group).',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.usergroups.removeChannels',
  },
  operationId: 'admin_usergroups_removeChannels',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_ids: z
                .string()
                .openapi({ description: 'Comma-separated string of channel IDs' }),
              usergroup_id: z.string().openapi({ description: 'ID of the IDP Group' }),
            })
            .openapi({ required: ['usergroup_id', 'channel_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description:
        'Typical error response if the token provided is not associated with an Org Admin or Owner',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'not_an_admin', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.usergroups:write'] }],
})

export const postAdminUsersAssignRoute = createRoute({
  method: 'post',
  path: '/admin.users.assign',
  tags: ['admin.users', 'admin'],
  description: 'Add an Enterprise user to a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.assign',
  },
  operationId: 'admin_users_assign',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated values of channel IDs to add user in the new workspace.',
                }),
              is_restricted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'True if user should be added to the workspace as a guest.',
                }),
              is_ultra_restricted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'True if user should be added to the workspace as a single-channel guest.',
                }),
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
              user_id: z
                .string()
                .openapi({ description: 'The ID of the user to add to the workspace.' }),
            })
            .openapi({ required: ['team_id', 'user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersInviteRoute = createRoute({
  method: 'post',
  path: '/admin.users.invite',
  tags: ['admin.users', 'admin'],
  description: 'Invite a user to a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.invite',
  },
  operationId: 'admin_users_invite',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel_ids: z
                .string()
                .openapi({
                  description:
                    'A comma-separated list of `channel_id`s for this user to join. At least one channel is required.',
                }),
              custom_message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An optional message to send to the user in the invite email.',
                }),
              email: z
                .string()
                .openapi({ description: 'The email address of the person to invite.' }),
              guest_expiration_ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date.',
                }),
              is_restricted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Is this user a multi-channel guest user? (default: false)',
                }),
              is_ultra_restricted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Is this user a single channel guest user? (default: false)',
                }),
              real_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Full name of the user.' }),
              resend: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Allow this invite to be resent in the future if a user has not signed up yet. (default: false)',
                }),
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
            })
            .openapi({ required: ['team_id', 'email', 'channel_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const getAdminUsersListRoute = createRoute({
  method: 'get',
  path: '/admin.users.list',
  tags: ['admin.users', 'admin'],
  description: 'List users on a workspace',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.list',
  },
  operationId: 'admin_users_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      team_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID (`T1234`) of the workspace.',
            in: 'query',
            name: 'team_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit for how many users to be retrieved per page',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                users: [
                  {
                    email: 'bront@slack.com',
                    id: 'T1234',
                    is_admin: false,
                    is_bot: false,
                    is_owner: false,
                    is_primary_owner: false,
                    is_restricted: false,
                    is_ultra_restricted: false,
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:read'] }],
})

export const postAdminUsersRemoveRoute = createRoute({
  method: 'post',
  path: '/admin.users.remove',
  tags: ['admin.users', 'admin'],
  description: 'Remove a user from a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.remove',
  },
  operationId: 'admin_users_remove',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
              user_id: z.string().openapi({ description: 'The ID of the user to remove.' }),
            })
            .openapi({ required: ['team_id', 'user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersSessionInvalidateRoute = createRoute({
  method: 'post',
  path: '/admin.users.session.invalidate',
  tags: ['admin.users.session', 'admin'],
  description: 'Invalidate a single session for a user by session_id',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.session.invalidate',
  },
  operationId: 'admin_users_session_invalidate',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              session_id: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int(),
              ),
              team_id: z
                .string()
                .openapi({ description: 'ID of the team that the session belongs to' }),
            })
            .openapi({ required: ['team_id', 'session_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersSessionResetRoute = createRoute({
  method: 'post',
  path: '/admin.users.session.reset',
  tags: ['admin.users.session', 'admin'],
  description: 'Wipes all valid sessions on all devices for a given user',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.session.reset',
  },
  operationId: 'admin_users_session_reset',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              mobile_only: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Only expire mobile sessions (default: false)' }),
              user_id: z
                .string()
                .openapi({ description: 'The ID of the user to wipe sessions for' }),
              web_only: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Only expire web sessions (default: false)' }),
            })
            .openapi({ required: ['user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersSetAdminRoute = createRoute({
  method: 'post',
  path: '/admin.users.setAdmin',
  tags: ['admin.users', 'admin'],
  description: 'Set an existing guest, regular user, or owner to be an admin user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.setAdmin',
  },
  operationId: 'admin_users_setAdmin',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
              user_id: z
                .string()
                .openapi({ description: 'The ID of the user to designate as an admin.' }),
            })
            .openapi({ required: ['team_id', 'user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersSetExpirationRoute = createRoute({
  method: 'post',
  path: '/admin.users.setExpiration',
  tags: ['admin.users', 'admin'],
  description: 'Set an expiration for a guest user',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.setExpiration',
  },
  operationId: 'admin_users_setExpiration',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              expiration_ts: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Timestamp when guest account should be disabled.' }),
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
              user_id: z
                .string()
                .openapi({ description: 'The ID of the user to set an expiration for.' }),
            })
            .openapi({ required: ['team_id', 'user_id', 'expiration_ts'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersSetOwnerRoute = createRoute({
  method: 'post',
  path: '/admin.users.setOwner',
  tags: ['admin.users', 'admin'],
  description: 'Set an existing guest, regular user, or admin user to be a workspace owner.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.setOwner',
  },
  operationId: 'admin_users_setOwner',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
              user_id: z.string().openapi({ description: 'Id of the user to promote to owner.' }),
            })
            .openapi({ required: ['team_id', 'user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const postAdminUsersSetRegularRoute = createRoute({
  method: 'post',
  path: '/admin.users.setRegular',
  tags: ['admin.users', 'admin'],
  description: 'Set an existing guest user, admin user, or owner to be a regular user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/admin.users.setRegular',
  },
  operationId: 'admin_users_setRegular',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin.users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              team_id: z.string().openapi({ description: 'The ID (`T1234`) of the workspace.' }),
              user_id: z
                .string()
                .openapi({ description: 'The ID of the user to designate as a regular user.' }),
            })
            .openapi({ required: ['team_id', 'user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin.users:write'] }],
})

export const getApiTestRoute = createRoute({
  method: 'get',
  path: '/api.test',
  tags: ['api'],
  description: 'Checks API calling code.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/api.test',
  },
  operationId: 'api_test',
  request: {
    query: z.object({
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Error response to return',
            in: 'query',
            name: 'error',
            schema: { type: 'string' },
            required: false,
          },
        }),
      foo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'example property to return',
            in: 'query',
            name: 'foo',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response',
      content: {
        'application/json': {
          schema: z
            .object({ ok: DefsOkTrueSchema })
            .catchall(z.object({}))
            .openapi({
              description: 'Schema for successful response api.test method',
              required: ['ok'],
              title: 'api.test success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Artificial error response',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string(), ok: DefsOkFalseSchema })
            .catchall(z.object({}))
            .openapi({
              description: 'Schema for error response api.test method',
              required: ['ok', 'error'],
              title: 'api.test error schema',
            }),
          examples: {
            response: { value: { args: { error: 'my_error' }, error: 'my_error', ok: false } },
          },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsEventAuthorizationsListRoute = createRoute({
  method: 'get',
  path: '/apps.event.authorizations.list',
  tags: ['apps.event.authorizations', 'apps'],
  description:
    'Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.event.authorizations.list',
  },
  operationId: 'apps_event_authorizations_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `authorizations:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      event_context: z
        .string()
        .openapi({
          param: { in: 'query', name: 'event_context', required: true, schema: { type: 'string' } },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'cursor', schema: { type: 'string' }, required: false },
        }),
      limit: z
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
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                authorizations: {
                  enterprise_id: 'string',
                  is_bot: 'string',
                  team_id: 'string',
                  user_id: 'string',
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['authorizations:read'] }],
})

export const getAppsPermissionsInfoRoute = createRoute({
  method: 'get',
  path: '/apps.permissions.info',
  tags: ['apps.permissions', 'apps'],
  description: 'Returns list of permissions this app has on a team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.permissions.info',
  },
  operationId: 'apps_permissions_info',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response when used with a user token',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              info: z
                .object({
                  app_home: z
                    .object({
                      resources: ObjsResourcesSchema.exactOptional(),
                      scopes: ObjsScopesSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                  channel: z
                    .object({
                      resources: ObjsResourcesSchema.exactOptional(),
                      scopes: ObjsScopesSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                  group: z
                    .object({
                      resources: ObjsResourcesSchema.exactOptional(),
                      scopes: ObjsScopesSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                  im: z
                    .object({
                      resources: ObjsResourcesSchema.exactOptional(),
                      scopes: ObjsScopesSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                  mpim: z
                    .object({
                      resources: ObjsResourcesSchema.exactOptional(),
                      scopes: ObjsScopesSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                  team: z
                    .object({ resources: ObjsResourcesSchema, scopes: ObjsScopesSchema })
                    .openapi({ required: ['scopes', 'resources'] }),
                })
                .openapi({ required: ['team', 'channel', 'group', 'mpim', 'im', 'app_home'] }),
              ok: DefsOkTrueSchema,
            })
            .openapi({
              description: 'Schema for successful response from apps.permissions.info method',
              required: ['ok', 'info'],
              title: 'apps.permissions.info schema',
            }),
          examples: {
            response: {
              value: {
                info: {
                  app_home: {
                    resources: { ids: ['D0C0NU1Q8', 'D0BH95DLH'] },
                    scopes: ['chat:write', 'im:history', 'im:read'],
                  },
                  channel: {
                    resources: { excluded_ids: [], ids: ['C061FA5PB'], wildcard: false },
                    scopes: ['channels:read'],
                  },
                  group: { resources: { ids: [] }, scopes: [] },
                  im: { resources: { ids: [] }, scopes: [] },
                  mpim: { resources: { ids: [] }, scopes: [] },
                  team: { resources: { ids: [] }, scopes: [] },
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Standard failure response when used with an invalid token',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from apps.permissions.info method',
              required: ['ok', 'error'],
              title: 'apps.permissions.info error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsPermissionsRequestRoute = createRoute({
  method: 'get',
  path: '/apps.permissions.request',
  tags: ['apps.permissions', 'apps'],
  description: 'Allows an app to request additional scopes',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.permissions.request',
  },
  operationId: 'apps_permissions_request',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scopes: z
        .string()
        .openapi({
          param: {
            description: 'A comma separated list of scopes to request for',
            in: 'query',
            name: 'scopes',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trigger_id: z
        .string()
        .openapi({
          param: {
            description: 'Token used to trigger the permissions API',
            in: 'query',
            name: 'trigger_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response when used with a user token',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from apps.permissions.request method',
              required: ['ok'],
              title: 'apps.permissions.request schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Standard failure response when trigger_id is invalid',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_trigger',
                'trigger_exchanged',
                'invalid_scope',
                'invalid_user',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from apps.permissions.request method',
              required: ['ok', 'error'],
              title: 'apps.permissions.request error schema',
            }),
          examples: { response: { value: { error: 'invalid_trigger_id', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsPermissionsResourcesListRoute = createRoute({
  method: 'get',
  path: '/apps.permissions.resources.list',
  tags: ['apps.permissions.resources', 'apps'],
  description: 'Returns list of resource grants this app has on a team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.permissions.resources.list',
  },
  operationId: 'apps_permissions_resources_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical successful paginated response',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              ok: DefsOkTrueSchema,
              resources: z.array(
                z
                  .object({
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        title: 'An ID for a resource',
                        'x-examples': ['T0DES3UAN', 'C0ABC1ABC'],
                      }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({
                        title: 'The type of resource the `id` corresponds to',
                        'x-examples': ['team', 'channel', 'mpim'],
                      }),
                  })
                  .openapi({ required: [] }),
              ),
              response_metadata: z
                .strictObject({
                  next_cursor: z.string().openapi({ 'x-examples': ['dGVhbTpDMUg5UkVTR0w='] }),
                })
                .exactOptional()
                .openapi({ required: ['next_cursor'] }),
            })
            .openapi({
              description: 'Schema for successful response apps.permissions.resources.list method',
              required: ['ok', 'resources'],
              title: 'apps.permissions.resources.list success schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                resources: [
                  { id: 'T0DES3UAN', type: 'team' },
                  { id: 'D024BFF1M', type: 'app_home' },
                  { id: 'C024BE91L', type: 'channel' },
                ],
                response_metadata: { next_cursor: 'dGVhbTpDMUg5UkVTR0w=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_cursor',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from apps.permissions.resources.list method',
              required: ['ok', 'error'],
              title: 'apps.permissions.resources.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_cursor', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsPermissionsScopesListRoute = createRoute({
  method: 'get',
  path: '/apps.permissions.scopes.list',
  tags: ['apps.permissions.scopes', 'apps'],
  description: 'Returns list of scopes this app has on a team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.permissions.scopes.list',
  },
  operationId: 'apps_permissions_scopes_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical successful paginated response',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              ok: DefsOkTrueSchema,
              scopes: z
                .looseObject({
                  app_home: ObjsScopesSchema.exactOptional(),
                  channel: ObjsScopesSchema.exactOptional(),
                  group: ObjsScopesSchema.exactOptional(),
                  im: ObjsScopesSchema.exactOptional(),
                  mpim: ObjsScopesSchema.exactOptional(),
                  team: ObjsScopesSchema.exactOptional(),
                  user: ObjsScopesSchema.exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({
              description: 'Schema for successful response api.permissions.scopes.list method',
              required: ['ok', 'scopes'],
              title: 'api.permissions.scopes.list success schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                scopes: {
                  app_home: ['chat:write', 'im:history', 'im:read'],
                  channel: ['channels:history', 'chat:write'],
                  group: ['chat:write'],
                  im: ['chat:write'],
                  mpim: ['chat:write'],
                  team: ['users:read'],
                  user: [],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from apps.permissions.scopes.list method',
              required: ['ok', 'error'],
              title: 'apps.permissions.scopes.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsPermissionsUsersListRoute = createRoute({
  method: 'get',
  path: '/apps.permissions.users.list',
  tags: ['apps.permissions.users', 'apps'],
  description: 'Returns list of user grants and corresponding scopes this app has on a team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.permissions.users.list',
  },
  operationId: 'apps_permissions_users_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical successful paginated response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                resources: [
                  { id: 'U0DES3UAN', scopes: ['dnd:write:user', 'reminders:write:user'] },
                  { id: 'U024BFF1M', scopes: ['reminders:write:user'] },
                ],
                response_metadata: { next_cursor: 'dGVhbTdPMUg5UkFTT0w=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_cursor', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsPermissionsUsersRequestRoute = createRoute({
  method: 'get',
  path: '/apps.permissions.users.request',
  tags: ['apps.permissions.users', 'apps'],
  description:
    'Enables an app to trigger a permissions modal to grant an app access to a user access scope.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.permissions.users.request',
  },
  operationId: 'apps_permissions_users_request',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scopes: z
        .string()
        .openapi({
          param: {
            description: 'A comma separated list of user scopes to request for',
            in: 'query',
            name: 'scopes',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trigger_id: z
        .string()
        .openapi({
          param: {
            description: 'Token used to trigger the request',
            in: 'query',
            name: 'trigger_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .openapi({
          param: {
            description: 'The user this scope is being requested for',
            in: 'query',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response when used with a user token',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Standard failure response when trigger_id is invalid',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_trigger_id', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAppsUninstallRoute = createRoute({
  method: 'get',
  path: '/apps.uninstall',
  tags: ['apps'],
  description: 'Uninstalls your app from a workspace.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/apps.uninstall',
  },
  operationId: 'apps_uninstall',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_secret',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from apps.uninstall method',
              required: ['ok'],
              title: 'apps.uninstall schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_client_id',
                'bad_client_secret',
                'client_id_token_mismatch',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from apps.uninstall method',
              required: ['ok', 'error'],
              title: 'apps.uninstall error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAuthRevokeRoute = createRoute({
  method: 'get',
  path: '/auth.revoke',
  tags: ['auth'],
  description: 'Revokes a token.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/auth.revoke',
  },
  operationId: 'auth_revoke',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      test: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.',
            in: 'query',
            name: 'test',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, revoked: z.boolean() })
            .openapi({
              description: 'Schema for successful response from auth.revoke method',
              required: ['ok', 'revoked'],
              title: 'auth.revoke schema',
            }),
          examples: { response: { value: { ok: true, revoked: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from auth.revoke method',
              required: ['ok', 'error'],
              title: 'auth.revoke error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getAuthTestRoute = createRoute({
  method: 'get',
  path: '/auth.test',
  tags: ['auth'],
  description: 'Checks authentication & identity.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/auth.test',
  },
  operationId: 'auth_test',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response when used with a user token',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              bot_id: DefsBotIdSchema.exactOptional(),
              is_enterprise_install: z.boolean().exactOptional(),
              ok: DefsOkTrueSchema,
              team: z.string(),
              team_id: DefsTeamSchema,
              url: z.string(),
              user: z.string(),
              user_id: DefsUserIdSchema,
            })
            .openapi({
              description: 'Schema for successful response auth.test method',
              required: ['ok', 'url', 'team', 'user', 'team_id', 'user_id'],
              title: 'auth.test success schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                team: 'Subarachnoid Workspace',
                team_id: 'T12345678',
                url: 'https://subarachnoid.slack.com/',
                user: 'grace',
                user_id: 'W12345678',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Standard failure response when used with an invalid token',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'token_revoked',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response auth.test method',
              required: ['ok', 'error'],
              title: 'auth.test error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getBotsInfoRoute = createRoute({
  method: 'get',
  path: '/bots.info',
  tags: ['bots'],
  description: 'Gets information about a bot user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/bots.info',
  },
  operationId: 'bots_info',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bot: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bot user to get info on',
            in: 'query',
            name: 'bot',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When successful, returns bot info by bot ID.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              bot: z
                .strictObject({
                  app_id: DefsAppIdSchema,
                  deleted: z.boolean(),
                  icons: z
                    .strictObject({ image_36: z.url(), image_48: z.url(), image_72: z.url() })
                    .openapi({ required: ['image_36', 'image_48', 'image_72'] }),
                  id: DefsBotIdSchema,
                  name: z.string(),
                  updated: z.int(),
                  user_id: DefsUserIdSchema.exactOptional(),
                })
                .openapi({ required: ['id', 'deleted', 'name', 'updated', 'app_id', 'icons'] }),
              ok: DefsOkTrueSchema,
            })
            .openapi({
              description: 'Schema for successful response from bots.info method',
              required: ['ok', 'bot'],
              title: 'bots.info schema',
            }),
          examples: {
            response: {
              value: {
                bot: {
                  app_id: 'A161CLERW',
                  deleted: false,
                  icons: {
                    image_36: 'https://...',
                    image_48: 'https://...',
                    image_72: 'https://...',
                  },
                  id: 'B061F7JD2',
                  name: 'beforebot',
                  updated: 1449272004,
                  user_id: 'U012ABCDEF',
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'When no bot can be found, it returns an error.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bot_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from bots.info method',
              required: ['ok', 'error'],
              title: 'bots.info error schema',
            }),
          examples: { response: { value: { error: 'bot_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:read'] }],
})

export const postCallsAddRoute = createRoute({
  method: 'post',
  path: '/calls.add',
  tags: ['calls'],
  description: 'Registers a new Call.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/calls.add',
  },
  operationId: 'calls_add',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `calls:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              created_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required.',
                }),
              date_start: z
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
                .openapi({ description: 'Call start time in UTC UNIX timestamp format' }),
              desktop_app_join_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.',
                }),
              external_display_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object.',
                }),
              external_unique_id: z
                .string()
                .openapi({
                  description:
                    'An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service.',
                }),
              join_url: z
                .string()
                .openapi({ description: 'The URL required for a client to join the Call.' }),
              title: z.string().exactOptional().openapi({ description: 'The name of the Call.' }),
              users: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users).',
                }),
            })
            .openapi({ required: ['external_unique_id', 'join_url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['calls:write'] }],
})

export const postCallsEndRoute = createRoute({
  method: 'post',
  path: '/calls.end',
  tags: ['calls'],
  description: 'Ends a Call.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/calls.end',
  },
  operationId: 'calls_end',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `calls:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              duration: z
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
                .openapi({ description: 'Call duration in seconds' }),
              id: z
                .string()
                .openapi({
                  description:
                    '`id` returned when registering the call using the [`calls.add`](/methods/calls.add) method.',
                }),
            })
            .openapi({ required: ['id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['calls:write'] }],
})

export const getCallsInfoRoute = createRoute({
  method: 'get',
  path: '/calls.info',
  tags: ['calls'],
  description: 'Returns information about a Call.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/calls.info',
  },
  operationId: 'calls_info',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `calls:read`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              '`id` of the Call returned by the [`calls.add`](/methods/calls.add) method.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['calls:read'] }],
})

export const postCallsParticipantsAddRoute = createRoute({
  method: 'post',
  path: '/calls.participants.add',
  tags: ['calls.participants', 'calls'],
  description: 'Registers new participants added to a Call.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/calls.participants.add',
  },
  operationId: 'calls_participants_add',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `calls:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: '`id` returned by the [`calls.add`](/methods/calls.add) method.',
                }),
              users: z
                .string()
                .openapi({
                  description:
                    'The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users).',
                }),
            })
            .openapi({ required: ['id', 'users'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['calls:write'] }],
})

export const postCallsParticipantsRemoveRoute = createRoute({
  method: 'post',
  path: '/calls.participants.remove',
  tags: ['calls.participants', 'calls'],
  description: 'Registers participants removed from a Call.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/calls.participants.remove',
  },
  operationId: 'calls_participants_remove',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `calls:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: '`id` returned by the [`calls.add`](/methods/calls.add) method.',
                }),
              users: z
                .string()
                .openapi({
                  description:
                    'The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users).',
                }),
            })
            .openapi({ required: ['id', 'users'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['calls:write'] }],
})

export const postCallsUpdateRoute = createRoute({
  method: 'post',
  path: '/calls.update',
  tags: ['calls'],
  description: 'Updates information about a Call.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/calls.update',
  },
  operationId: 'calls_update',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `calls:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              desktop_app_join_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.',
                }),
              id: z
                .string()
                .openapi({
                  description: '`id` returned by the [`calls.add`](/methods/calls.add) method.',
                }),
              join_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'The URL required for a client to join the Call.' }),
              title: z.string().exactOptional().openapi({ description: 'The name of the Call.' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['calls:write'] }],
})

export const postChatDeleteRoute = createRoute({
  method: 'post',
  path: '/chat.delete',
  tags: ['chat'],
  description: 'Deletes a message.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.delete',
  },
  operationId: 'chat_delete',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              as_user: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.',
                }),
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Channel containing the message to be deleted.' }),
              ts: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .exactOptional()
                .openapi({ description: 'Timestamp of the message to be deleted.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: DefsChannelSchema, ok: DefsOkTrueSchema, ts: DefsTsSchema })
            .openapi({
              description: 'Schema for successful response of chat.delete method',
              required: ['ok', 'channel', 'ts'],
              title: 'chat.delete success schema',
            }),
          examples: {
            response: { value: { channel: 'C024BE91L', ok: true, ts: '1401383885.000061' } },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'message_not_found',
                'channel_not_found',
                'cant_delete_message',
                'compliance_exports_prevent_deletion',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.delete method',
              required: ['ok', 'error'],
              title: 'chat.delete error schema',
            }),
          examples: { response: { value: { error: 'message_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const postChatDeleteScheduledMessageRoute = createRoute({
  method: 'post',
  path: '/chat.deleteScheduledMessage',
  tags: ['chat'],
  description: 'Deletes a pending scheduled message from the queue.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.deleteScheduledMessage',
  },
  operationId: 'chat_deleteScheduledMessage',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              as_user: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.',
                }),
              channel: z
                .string()
                .openapi({ description: 'The channel the scheduled_message is posting to' }),
              scheduled_message_id: z
                .string()
                .openapi({
                  description: '`scheduled_message_id` returned from call to chat.scheduleMessage',
                }),
            })
            .openapi({ required: ['channel', 'scheduled_message_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from chat.deleteScheduledMessage method',
              required: ['ok'],
              title: 'chat.deleteScheduledMessage schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response if no message is found',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_scheduled_message_id',
                'channel_not_found',
                'bad_token',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'ekm_access_denied',
                'missing_scope',
                'invalid_arguments',
                'invalid_arg_name',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.deleteScheduledMessage method',
              required: ['ok', 'error'],
              title: 'chat.deleteScheduledMessage error schema',
            }),
          examples: { response: { value: { error: 'invalid_scheduled_message_id', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const getChatGetPermalinkRoute = createRoute({
  method: 'get',
  path: '/chat.getPermalink',
  tags: ['chat'],
  description: 'Retrieve a permalink URL for a specific extant message',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.getPermalink',
  },
  operationId: 'chat_getPermalink',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channel: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation or channel containing the message',
            in: 'query',
            name: 'channel',
            required: true,
            schema: { type: 'string' },
          },
        }),
      message_ts: z
        .string()
        .openapi({
          param: {
            description: "A message's `ts` value, uniquely identifying it within a channel",
            in: 'query',
            name: 'message_ts',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: DefsChannelSchema, ok: DefsOkTrueSchema, permalink: z.url() })
            .openapi({
              description: 'Schema for successful response chat.getPermalink',
              required: ['ok', 'channel', 'permalink'],
              title: 'chat.getPermalink success schema',
            }),
          examples: {
            response: {
              value: {
                channel: 'C1H9RESGA',
                ok: true,
                permalink: 'https://ghostbusters.slack.com/archives/C1H9RESGA/p135854651500008',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error response when channel cannot be found',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'channel_not_found',
                'message_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.getPermalink method',
              required: ['ok', 'error'],
              title: 'chat.getPermalink error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const postChatMeMessageRoute = createRoute({
  method: 'post',
  path: '/chat.meMessage',
  tags: ['chat'],
  description: 'Share a me message into a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.meMessage',
  },
  operationId: 'chat_meMessage',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({ description: 'Text of the message to send.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channel: DefsChannelSchema.exactOptional(),
              ok: DefsOkTrueSchema,
              ts: DefsTsSchema.exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from chat.meMessage method',
              required: ['ok'],
              title: 'chat.meMessage schema',
            }),
          examples: {
            response: { value: { channel: 'C024BE7LR', ok: true, ts: '1417671948.000006' } },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'channel_not_found',
                'not_in_channel',
                'is_archived',
                'msg_too_long',
                'no_text',
                'rate_limited',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.meMessage method',
              required: ['ok', 'error'],
              title: 'chat.meMessage error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const postChatPostEphemeralRoute = createRoute({
  method: 'post',
  path: '/chat.postEphemeral',
  tags: ['chat'],
  description: 'Sends an ephemeral message to a user in a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.postEphemeral',
  },
  operationId: 'chat_postEphemeral',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              as_user: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false.',
                }),
              attachments: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-based array of structured attachments, presented as a URL-encoded string.',
                }),
              blocks: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-based array of structured blocks, presented as a URL-encoded string.',
                }),
              channel: z
                .string()
                .openapi({
                  description:
                    'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.',
                }),
              icon_emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.',
                }),
              icon_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.',
                }),
              link_names: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Find and link channel names and usernames.' }),
              parse: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Change how messages are treated. Defaults to `none`. See [below](#formatting).',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.',
                }),
              thread_ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread.",
                }),
              user: z
                .string()
                .openapi({
                  description:
                    '`id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.',
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.",
                }),
            })
            .openapi({ required: ['channel', 'user'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ message_ts: DefsTsSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from chat.postEphemeral method',
              required: ['ok', 'message_ts'],
              title: 'chat.postEphemeral success schema',
            }),
          examples: { response: { value: { message_ts: '1502210682.580145', ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'channel_not_found',
                'is_archived',
                'msg_too_long',
                'no_text',
                'restricted_action',
                'too_many_attachments',
                'user_not_in_channel',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.postEphemeral method',
              required: ['ok', 'error'],
              title: 'chat.postEphemeral error schema',
            }),
          examples: { response: { value: { error: 'user_not_in_channel', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const postChatPostMessageRoute = createRoute({
  method: 'post',
  path: '/chat.postMessage',
  tags: ['chat'],
  description: 'Sends a message to a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.postMessage',
  },
  operationId: 'chat_postMessage',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              as_user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below.',
                }),
              attachments: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-based array of structured attachments, presented as a URL-encoded string.',
                }),
              blocks: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-based array of structured blocks, presented as a URL-encoded string.',
                }),
              channel: z
                .string()
                .openapi({
                  description:
                    'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.',
                }),
              icon_emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.',
                }),
              icon_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.',
                }),
              link_names: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Find and link channel names and usernames.' }),
              mrkdwn: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Disable Slack markup parsing by setting to `false`. Enabled by default.',
                }),
              parse: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Change how messages are treated. Defaults to `none`. See [below](#formatting).',
                }),
              reply_broadcast: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.',
                }),
              thread_ts: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.",
                }),
              unfurl_links: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Pass true to enable unfurling of primarily text-based content.',
                }),
              unfurl_media: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Pass false to disable unfurling of media content.' }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.",
                }),
            })
            .openapi({ required: ['channel'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channel: DefsChannelSchema,
              message: ObjsMessageSchema,
              ok: DefsOkTrueSchema,
              ts: DefsTsSchema,
            })
            .openapi({
              description: 'Schema for successful response of chat.postMessage method',
              required: ['ok', 'channel', 'ts', 'message'],
              title: 'chat.postMessage success schema',
            }),
          examples: {
            response: {
              value: {
                channel: 'C1H9RESGL',
                message: {
                  attachments: [
                    {
                      fallback: "This is an attachment's fallback",
                      id: 1,
                      text: 'This is an attachment',
                    },
                  ],
                  bot_id: 'B19LU7CSY',
                  subtype: 'bot_message',
                  text: "Here's a message for you",
                  ts: '1503435956.000247',
                  type: 'message',
                  username: 'ecto1',
                },
                ok: true,
                ts: '1503435956.000247',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response if too many attachments are included',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'channel_not_found',
                'not_in_channel',
                'is_archived',
                'msg_too_long',
                'no_text',
                'too_many_attachments',
                'rate_limited',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response chat.postMessage method',
              required: ['ok', 'error'],
              title: 'chat.postMessage error schema',
            }),
          examples: { response: { value: { error: 'too_many_attachments', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const postChatScheduleMessageRoute = createRoute({
  method: 'post',
  path: '/chat.scheduleMessage',
  tags: ['chat'],
  description: 'Schedules a message to be sent to a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.scheduleMessage',
  },
  operationId: 'chat_scheduleMessage',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              as_user: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship).',
                }),
              attachments: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-based array of structured attachments, presented as a URL-encoded string.',
                }),
              blocks: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON-based array of structured blocks, presented as a URL-encoded string.',
                }),
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.',
                }),
              link_names: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Find and link channel names and usernames.' }),
              parse: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting).',
                }),
              post_at: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Unix EPOCH timestamp of time in future to send the message.',
                }),
              reply_broadcast: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.',
                }),
              thread_ts: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.",
                }),
              unfurl_links: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Pass true to enable unfurling of primarily text-based content.',
                }),
              unfurl_media: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Pass false to disable unfurling of media content.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channel: DefsChannelSchema,
              message: z
                .strictObject({
                  bot_id: DefsBotIdSchema,
                  bot_profile: ObjsBotProfileSchema.exactOptional(),
                  team: DefsTeamSchema,
                  text: z.string(),
                  type: z.string(),
                  user: DefsUserIdSchema,
                  username: z.string().exactOptional(),
                })
                .openapi({ required: ['type', 'text', 'bot_id', 'user', 'team'] }),
              ok: DefsOkTrueSchema,
              post_at: z.int(),
              scheduled_message_id: z
                .string()
                .regex(/^[Q][A-Z0-9]{8,}$/)
                .openapi({ title: 'Scheduled Message ID' }),
            })
            .openapi({
              description: 'Schema for successful response of chat.scheduleMessage method',
              required: ['ok', 'channel', 'post_at', 'scheduled_message_id', 'message'],
              title: 'chat.scheduleMessage success schema',
            }),
          examples: {
            response: {
              value: {
                channel: 'C1H9RESGL',
                message: {
                  attachments: [
                    {
                      fallback: "This is an attachment's fallback",
                      id: 1,
                      text: 'This is an attachment',
                    },
                  ],
                  bot_id: 'B19LU7CSY',
                  subtype: 'bot_message',
                  text: "Here's a message for you in the future",
                  type: 'delayed_message',
                  username: 'ecto1',
                },
                ok: true,
                post_at: '1562180400',
                scheduled_message_id: 'Q1298393284',
              },
            },
          },
        },
      },
    },
    default: {
      description:
        'Typical error response if the `post_at` is invalid (ex. in the past or too far into the future)',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_time',
                'time_in_past',
                'time_too_far',
                'channel_not_found',
                'not_in_channel',
                'is_archived',
                'msg_too_long',
                'no_text',
                'restricted_action',
                'restricted_action_read_only_channel',
                'restricted_action_thread_only_channel',
                'restricted_action_non_threadable_channel',
                'too_many_attachments',
                'rate_limited',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'ekm_access_denied',
                'missing_scope',
                'invalid_arguments',
                'invalid_arg_name',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response chat.scheduleMessage method',
              required: ['ok', 'error'],
              title: 'chat.scheduleMessage error schema',
            }),
          examples: { response: { value: { error: 'time_in_past', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const getChatScheduledMessagesListRoute = createRoute({
  method: 'get',
  path: '/chat.scheduledMessages.list',
  tags: ['chat.scheduledMessages', 'chat'],
  description: 'Returns a list of scheduled messages.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.scheduledMessages.list',
  },
  operationId: 'chat_scheduledMessages_list',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The channel of the scheduled messages',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      latest: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A UNIX timestamp of the latest value in the time range',
            in: 'query',
            name: 'latest',
            schema: { type: 'number' },
            required: false,
          },
        }),
      oldest: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A UNIX timestamp of the oldest value in the time range',
            in: 'query',
            name: 'oldest',
            schema: { type: 'number' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of original entries to return.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              response_metadata: z
                .strictObject({ next_cursor: z.string() })
                .openapi({ required: ['next_cursor'] }),
              scheduled_messages: z.array(
                z
                  .strictObject({
                    channel_id: DefsChannelIdSchema,
                    date_created: z.int(),
                    id: z.string().regex(/^[Q][A-Z0-9]{8,}$/),
                    post_at: z.int(),
                    text: z.string().exactOptional(),
                  })
                  .openapi({ required: ['id', 'channel_id', 'post_at', 'date_created'] }),
              ),
            })
            .openapi({
              description: 'Schema for successful response from chat.scheduledMessages.list method',
              required: ['ok', 'scheduled_messages', 'response_metadata'],
              title: 'chat.scheduledMessages.list schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                response_metadata: { next_cursor: '' },
                scheduled_messages: [
                  {
                    channel_id: 'C1H9RESGL',
                    date_created: 1551891734,
                    id: 1298393284,
                    post_at: 1551991428,
                    text: "Here's a message for you in the future",
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response if the channel passed is invalid',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_channel',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'ekm_access_denied',
                'missing_scope',
                'invalid_arguments',
                'invalid_arg_name',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.scheduledMessages.list method',
              required: ['ok', 'error'],
              title: 'chat.scheduledMessages.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_channel', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const postChatUnfurlRoute = createRoute({
  method: 'post',
  path: '/chat.unfurl',
  tags: ['chat'],
  description: 'Provide custom unfurl behavior for user-posted URLs',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.unfurl',
  },
  operationId: 'chat_unfurl',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `links:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z.string().openapi({ description: 'Channel ID of the message' }),
              ts: z
                .string()
                .openapi({ description: 'Timestamp of the message to add unfurl behavior to.' }),
              unfurls: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments.',
                }),
              user_auth_message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior',
                }),
              user_auth_required: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain',
                }),
              user_auth_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded.',
                }),
            })
            .openapi({ required: ['channel', 'ts'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical, minimal success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from chat.unfurl method',
              required: ['ok'],
              title: 'chat.unfurl success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'cannot_unfurl_url',
                'cannot_find_service',
                'missing_unfurls',
                'cannot_prompt',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from chat.unfurl method',
              required: ['ok', 'error'],
              title: 'chat.unfurl error schema',
            }),
          examples: { response: { value: { error: 'cannot_unfurl_url', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['links:write'] }],
})

export const postChatUpdateRoute = createRoute({
  method: 'post',
  path: '/chat.update',
  tags: ['chat'],
  description: 'Updates a message.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/chat.update',
  },
  operationId: 'chat_update',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `chat:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              as_user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users.',
                }),
              attachments: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field.",
                }),
              blocks: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field.",
                }),
              channel: z
                .string()
                .openapi({ description: 'Channel containing the message to be updated.' }),
              link_names: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`.',
                }),
              parse: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`.',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`.",
                }),
              ts: z.string().openapi({ description: 'Timestamp of the message to be updated.' }),
            })
            .openapi({ required: ['channel', 'ts'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channel: z.string(),
              message: z
                .object({
                  attachments: z.array(z.object({})).exactOptional(),
                  blocks: z.object({}).exactOptional(),
                  text: z.string(),
                })
                .openapi({ required: ['text'], title: 'Message object' }),
              ok: DefsOkTrueSchema,
              text: z.string(),
              ts: z.string(),
            })
            .openapi({
              description: 'Schema for successful response of chat.update method',
              required: ['ok', 'channel', 'ts', 'text', 'message'],
              title: 'chat.update success schema',
            }),
          examples: {
            response: {
              value: {
                channel: 'C024BE91L',
                message: { text: 'Updated text you carefully authored', user: 'U34567890' },
                ok: true,
                text: 'Updated text you carefully authored',
                ts: '1401383885.000061',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'message_not_found',
                'cant_update_message',
                'channel_not_found',
                'edit_window_closed',
                'msg_too_long',
                'too_many_attachments',
                'rate_limited',
                'no_text',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'request_timeout',
                'invalid_json',
                'json_not_object',
                'upgrade_required',
                'fatal_error',
                'is_inactive',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response chat.update method',
              required: ['ok', 'error'],
              title: 'chat.update error schema',
            }),
          examples: { response: { value: { error: 'cant_update_message', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['chat:write:user', 'chat:write:bot'] }],
})

export const postConversationsArchiveRoute = createRoute({
  method: 'post',
  path: '/conversations.archive',
  tags: ['conversations'],
  description: 'Archives a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.archive',
  },
  operationId: 'conversations_archive',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of conversation to archive' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response conversations.archive method',
              required: ['ok'],
              title: 'conversations.archive success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'not_supported',
                'channel_not_found',
                'already_archived',
                'cant_archive_general',
                'restricted_action',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'user_is_bot',
                'user_is_restricted',
                'user_is_ultra_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'team_added_to_org',
                'missing_charset',
                'superfluous_charset',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.archive method',
              required: ['ok', 'error'],
              title: 'conversations.archive error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsCloseRoute = createRoute({
  method: 'post',
  path: '/conversations.close',
  tags: ['conversations'],
  description: 'Closes a direct message or multi-person direct message.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.close',
  },
  operationId: 'conversations_close',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Conversation to close.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              already_closed: z.boolean().exactOptional(),
              no_op: z.boolean().exactOptional(),
              ok: DefsOkTrueSchema,
            })
            .openapi({
              description: 'Schema for successful response conversations.close method',
              required: ['ok'],
              title: 'conversations.close success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'channel_not_found',
                'user_does_not_own_channel',
                'missing_scope',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.close method',
              required: ['ok', 'error'],
              title: 'conversations.close error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsCreateRoute = createRoute({
  method: 'post',
  path: '/conversations.create',
  tags: ['conversations'],
  description: 'Initiates a public or private channel-based conversation',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.create',
  },
  operationId: 'conversations_create',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              is_private: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Create a private channel instead of a public one' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the public or private channel to create' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'If successful, the command returns a rather stark [conversation object](/types/conversation)',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: ObjsConversationSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response conversations.create method',
              required: ['ok', 'channel'],
              title: 'conversations.create success schema',
            }),
          examples: {
            response: {
              value: {
                channel: {
                  created: 1504554479,
                  creator: 'U0123456',
                  id: 'C0EAQDV4Z',
                  is_archived: false,
                  is_channel: true,
                  is_ext_shared: false,
                  is_general: false,
                  is_group: false,
                  is_im: false,
                  is_member: true,
                  is_mpim: false,
                  is_org_shared: false,
                  is_pending_ext_shared: false,
                  is_private: false,
                  is_shared: false,
                  last_read: '0000000000.000000',
                  latest: null,
                  name: 'endeavor',
                  name_normalized: 'endeavor',
                  pending_shared: [],
                  previous_names: [],
                  priority: 0,
                  purpose: { creator: '', last_set: 0, value: '' },
                  topic: { creator: '', last_set: 0, value: '' },
                  unlinked: 0,
                  unread_count: 0,
                  unread_count_display: 0,
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response when name already in use',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              detail: z.string().exactOptional(),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'name_taken',
                'restricted_action',
                'no_channel',
                'invalid_name_required',
                'invalid_name_punctuation',
                'invalid_name_maxlength',
                'invalid_name_specials',
                'invalid_name',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.create method',
              required: ['ok', 'error'],
              title: 'conversations.create error schema',
            }),
          examples: { response: { value: { error: 'name_taken', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const getConversationsHistoryRoute = createRoute({
  method: 'get',
  path: '/conversations.history',
  tags: ['conversations'],
  description: "Fetches a conversation's history of messages and events.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.history',
  },
  operationId: 'conversations_history',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:history`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conversation ID to fetch history for.',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      latest: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'End of time range of messages to include in results.',
            in: 'query',
            name: 'latest',
            schema: { type: 'number' },
            required: false,
          },
        }),
      oldest: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start of time range of messages to include in results.',
            in: 'query',
            name: 'oldest',
            schema: { type: 'number' },
            required: false,
          },
        }),
      inclusive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include messages with latest or oldest timestamp in results only when either timestamp is specified.',
            in: 'query',
            name: 'inclusive',
            schema: { type: 'boolean' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Typical success response containing a channel's messages",
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channel_actions_count: z.int(),
              channel_actions_ts: z.unknown().superRefine((val, ctx) => {
                if (Array.isArray(val)) {
                  {
                    const Schema = z.union([z.int(), z.any().nullable()])
                    for (let i = 0; i < val.length; i++) {
                      if (!Schema.safeParse(val[i]).success) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  }
                }
              }),
              has_more: z.boolean(),
              messages: z
                .array(ObjsMessageSchema)
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ok: DefsOkTrueSchema,
              pin_count: z.int(),
            })
            .openapi({
              description: 'Schema for successful response from conversations.history method',
              required: [
                'ok',
                'messages',
                'has_more',
                'pin_count',
                'channel_actions_ts',
                'channel_actions_count',
              ],
              title: 'conversations.history success schema',
            }),
          examples: {
            response: {
              value: {
                has_more: true,
                messages: [
                  {
                    text: 'I find you punny and would like to smell your nose letter',
                    ts: '1512085950.000216',
                    type: 'message',
                    user: 'U012AB3CDE',
                  },
                  {
                    text: 'What, you want to smell my shoes better?',
                    ts: '1512104434.000490',
                    type: 'message',
                    user: 'U061F7AUR',
                  },
                ],
                ok: true,
                pin_count: 0,
                response_metadata: { next_cursor: 'bmV4dF90czoxNTEyMDg1ODYxMDAwNTQz' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'missing_scope',
                'channel_not_found',
                'invalid_ts_latest',
                'invalid_ts_oldest',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.history method',
              required: ['ok', 'error'],
              title: 'conversations.history error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:history', 'groups:history', 'im:history', 'mpim:history'] }],
})

export const getConversationsInfoRoute = createRoute({
  method: 'get',
  path: '/conversations.info',
  tags: ['conversations'],
  description: 'Retrieve information about a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.info',
  },
  operationId: 'conversations_info',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conversation ID to learn more about',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_locale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this to `true` to receive the locale for this conversation. Defaults to `false`',
            in: 'query',
            name: 'include_locale',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_num_members: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to `true` to include the member count for the specified conversation. Defaults to `false`',
            in: 'query',
            name: 'include_num_members',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Typical success response for a public channel. (Also, a response from a private channel and a multi-party IM is very similar to this example.)',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: ObjsConversationSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response conversations.info',
              required: ['ok', 'channel'],
              title: 'conversations.info success schema',
            }),
          examples: {
            response: {
              value: {
                channel: {
                  created: 1449252889,
                  creator: 'W012A3BCD',
                  id: 'C012AB3CD',
                  is_archived: false,
                  is_channel: true,
                  is_ext_shared: false,
                  is_general: true,
                  is_group: false,
                  is_im: false,
                  is_member: true,
                  is_mpim: false,
                  is_org_shared: false,
                  is_pending_ext_shared: false,
                  is_private: false,
                  is_read_only: false,
                  is_shared: false,
                  last_read: '1502126650.228446',
                  locale: 'en-US',
                  name: 'general',
                  name_normalized: 'general',
                  parent_conversation: null,
                  pending_shared: [],
                  previous_names: ['specifics', 'abstractions', 'etc'],
                  purpose: {
                    creator: 'W012A3BCD',
                    last_set: 1449709364,
                    value: 'This part of the workspace is for fun. Make fun here.',
                  },
                  topic: {
                    creator: 'W012A3BCD',
                    last_set: 1449709364,
                    value: 'For public discussion of generalities',
                  },
                  unlinked: 0,
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response when a channel cannot be found',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'missing_scope',
                'channel_not_found',
                'team_added_to_org',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.info method',
              required: ['ok', 'error'],
              title: 'conversations.info error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] }],
})

export const postConversationsInviteRoute = createRoute({
  method: 'post',
  path: '/conversations.invite',
  tags: ['conversations'],
  description: 'Invites users to a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.invite',
  },
  operationId: 'conversations_invite',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the public or private channel to invite user(s) to.',
                }),
              users: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of user IDs. Up to 1000 users may be listed.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response when an invitation is extended',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: ObjsConversationSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from conversations.invite method',
              required: ['ok', 'channel'],
              title: 'conversations.invite error schema',
            }),
          examples: {
            response: {
              value: {
                channel: {
                  created: 1449252889,
                  creator: 'W012A3BCD',
                  id: 'C012AB3CD',
                  is_archived: false,
                  is_channel: true,
                  is_ext_shared: false,
                  is_general: true,
                  is_group: false,
                  is_im: false,
                  is_member: true,
                  is_mpim: false,
                  is_org_shared: false,
                  is_pending_ext_shared: false,
                  is_private: false,
                  is_read_only: false,
                  is_shared: false,
                  last_read: '1502126650.228446',
                  locale: 'en-US',
                  name: 'general',
                  name_normalized: 'general',
                  num_members: 23,
                  pending_shared: [],
                  previous_names: ['specifics', 'abstractions', 'etc'],
                  purpose: {
                    creator: 'W012A3BCD',
                    last_set: 1449709364,
                    value: 'This part of the workspace is for fun. Make fun here.',
                  },
                  topic: {
                    creator: 'W012A3BCD',
                    last_set: 1449709364,
                    value: 'For public discussion of generalities',
                  },
                  unlinked: 0,
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description:
        'Typical error response when an invite is attempted on a conversation type that does not support it',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z
                .enum([
                  'method_not_supported_for_channel_type',
                  'missing_scope',
                  'channel_not_found',
                  'user_not_found',
                  'no_user',
                  'cant_invite_self',
                  'not_in_channel',
                  'already_in_channel',
                  'is_archived',
                  'cant_invite',
                  'too_many_users',
                  'ura_max_channels',
                  'not_authed',
                  'invalid_auth',
                  'account_inactive',
                  'user_is_bot',
                  'user_is_restricted',
                  'user_is_ultra_restricted',
                  'invalid_arg_name',
                  'invalid_array_arg',
                  'invalid_charset',
                  'invalid_form_data',
                  'invalid_post_type',
                  'missing_post_type',
                  'invalid_json',
                  'json_not_object',
                  'request_timeout',
                  'upgrade_required',
                  'team_added_to_org',
                  'missing_charset',
                  'superfluous_charset',
                ])
                .exactOptional(),
              errors: z
                .array(
                  z
                    .strictObject({
                      error: z.enum([
                        'method_not_supported_for_channel_type',
                        'missing_scope',
                        'channel_not_found',
                        'user_not_found',
                        'no_user',
                        'cant_invite_self',
                        'not_in_channel',
                        'already_in_channel',
                        'is_archived',
                        'cant_invite',
                        'too_many_users',
                        'ura_max_channels',
                        'not_authed',
                        'invalid_auth',
                        'account_inactive',
                        'user_is_bot',
                        'user_is_restricted',
                        'user_is_ultra_restricted',
                        'invalid_arg_name',
                        'invalid_array_arg',
                        'invalid_charset',
                        'invalid_form_data',
                        'invalid_post_type',
                        'missing_post_type',
                        'invalid_json',
                        'json_not_object',
                        'request_timeout',
                        'upgrade_required',
                        'team_added_to_org',
                        'missing_charset',
                        'superfluous_charset',
                      ]),
                      ok: DefsOkFalseSchema,
                      user: DefsUserIdSchema.exactOptional(),
                    })
                    .openapi({ required: ['ok', 'error'] }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional()
                .openapi({ title: 'errors is returned when an error associates an user' }),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.invite method',
              required: ['ok'],
              title: 'conversations.invite error schema',
            }),
          examples: {
            response: { value: { error: 'method_not_supported_for_channel_type', ok: false } },
          },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsJoinRoute = createRoute({
  method: 'post',
  path: '/conversations.join',
  tags: ['conversations'],
  description: 'Joins an existing conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.join',
  },
  operationId: 'conversations_join',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `channels:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of conversation to join' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channel: ObjsConversationSchema,
              ok: DefsOkTrueSchema,
              response_metadata: z
                .object({
                  warnings: z
                    .array(z.string())
                    .min(1)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    })
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ title: 'Response metadata', required: [] }),
              warning: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from conversations.join method',
              required: ['ok', 'channel'],
              title: 'conversations.join success schema',
            }),
          examples: {
            response: {
              value: {
                channel: {
                  created: 1449252889,
                  creator: 'U061F7AUR',
                  id: 'C061EG9SL',
                  is_archived: false,
                  is_channel: true,
                  is_ext_shared: false,
                  is_general: true,
                  is_group: false,
                  is_im: false,
                  is_member: true,
                  is_mpim: false,
                  is_org_shared: false,
                  is_pending_ext_shared: false,
                  is_private: false,
                  is_shared: false,
                  name: 'general',
                  name_normalized: 'general',
                  pending_shared: [],
                  previous_names: [],
                  purpose: { creator: '', last_set: 0, value: 'For widget discussion' },
                  topic: { creator: '', last_set: 0, value: 'Which widget do you worry about?' },
                  unlinked: 0,
                },
                ok: true,
                response_metadata: { warnings: ['already_in_channel'] },
                warning: 'already_in_channel',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response if the conversation is archived and cannot be joined',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'is_archived',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'user_is_bot',
                'user_is_restricted',
                'user_is_ultra_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'team_added_to_org',
                'missing_charset',
                'superfluous_charset',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.join method',
              required: ['ok', 'error'],
              title: 'conversations.join error schema',
            }),
          examples: { response: { value: { error: 'is_archived', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write'] }],
})

export const postConversationsKickRoute = createRoute({
  method: 'post',
  path: '/conversations.kick',
  tags: ['conversations'],
  description: 'Removes a user from a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.kick',
  },
  operationId: 'conversations_kick',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of conversation to remove user from.' }),
              user: z.string().exactOptional().openapi({ description: 'User ID to be removed.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response conversations.kick method',
              required: ['ok'],
              title: 'conversations.kick success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response when you attempt to kick yourself from a channel',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'user_not_found',
                'cant_kick_self',
                'not_in_channel',
                'cant_kick_from_general',
                'restricted_action',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response conversations.kick method',
              required: ['ok', 'error'],
              title: 'conversations.kick error schema',
            }),
          examples: { response: { value: { error: 'cant_kick_self', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsLeaveRoute = createRoute({
  method: 'post',
  path: '/conversations.leave',
  tags: ['conversations'],
  description: 'Leaves a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.leave',
  },
  operationId: 'conversations_leave',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z.string().exactOptional().openapi({ description: 'Conversation to leave' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ not_in_channel: z.literal(true).exactOptional(), ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from conversations.leave method',
              required: ['ok'],
              title: 'conversations.leave success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description:
        'Typical error response when attempting to leave a workspace\'s "general" channel',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'last_member',
                'missing_scope',
                'channel_not_found',
                'is_archived',
                'cant_leave_general',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'user_is_bot',
                'user_is_restricted',
                'user_is_ultra_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'team_added_to_org',
                'missing_charset',
                'superfluous_charset',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.leave method',
              required: ['ok', 'error'],
              title: 'conversations.leave error schema',
            }),
          examples: { response: { value: { error: 'cant_leave_general', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const getConversationsListRoute = createRoute({
  method: 'get',
  path: '/conversations.list',
  tags: ['conversations'],
  description: 'Lists all channels in a Slack team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.list',
  },
  operationId: 'conversations_list',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exclude_archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to `true` to exclude archived channels from the list',
            in: 'query',
            name: 'exclude_archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`',
            in: 'query',
            name: 'types',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response with only public channels',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              channels: z.array(ObjsConversationSchema).superRefine((items, ctx) => {
                const seen = new Map()
                for (const [i, val] of items.entries()) {
                  const key = JSON.stringify(val)
                  if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                  else seen.set(key, i)
                }
              }),
              ok: DefsOkTrueSchema,
              response_metadata: z
                .strictObject({ next_cursor: z.string() })
                .exactOptional()
                .openapi({ required: ['next_cursor'] }),
            })
            .openapi({
              description: 'Schema for successful response from conversations.list method',
              required: ['ok', 'channels'],
              title: 'conversations.list success schema',
            }),
          examples: {
            response: {
              value: {
                channels: [
                  {
                    created: 1449252889,
                    creator: 'U012A3CDE',
                    id: 'C012AB3CD',
                    is_archived: false,
                    is_channel: true,
                    is_ext_shared: false,
                    is_general: true,
                    is_group: false,
                    is_im: false,
                    is_member: true,
                    is_mpim: false,
                    is_org_shared: false,
                    is_pending_ext_shared: false,
                    is_private: false,
                    is_shared: false,
                    name: 'general',
                    name_normalized: 'general',
                    num_members: 4,
                    pending_shared: [],
                    previous_names: [],
                    purpose: {
                      creator: '',
                      last_set: 0,
                      value:
                        'This channel is for team-wide communication and announcements. All team members are in this channel.',
                    },
                    topic: {
                      creator: '',
                      last_set: 0,
                      value: 'Company-wide announcements and work-based matters',
                    },
                    unlinked: 0,
                  },
                  {
                    created: 1449252889,
                    creator: 'U061F7AUR',
                    id: 'C061EG9T2',
                    is_archived: false,
                    is_channel: true,
                    is_ext_shared: false,
                    is_general: false,
                    is_group: false,
                    is_im: false,
                    is_member: true,
                    is_mpim: false,
                    is_org_shared: false,
                    is_pending_ext_shared: false,
                    is_private: false,
                    is_shared: false,
                    name: 'random',
                    name_normalized: 'random',
                    num_members: 4,
                    pending_shared: [],
                    previous_names: [],
                    purpose: {
                      creator: '',
                      last_set: 0,
                      value:
                        "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
                    },
                    topic: {
                      creator: '',
                      last_set: 0,
                      value: 'Non-work banter and water cooler conversation',
                    },
                    unlinked: 0,
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: 'dGVhbTpDMDYxRkE1UEI=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'missing_scope',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.list method',
              required: ['ok', 'error'],
              title: 'conversations.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] }],
})

export const postConversationsMarkRoute = createRoute({
  method: 'post',
  path: '/conversations.mark',
  tags: ['conversations'],
  description: 'Sets the read cursor in a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.mark',
  },
  operationId: 'conversations_mark',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Channel or conversation to set the read cursor for.' }),
              ts: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier of message you want marked as most recently seen in this conversation.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response conversations.mark method',
              required: ['ok'],
              title: 'conversations.mark success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'invalid_timestamp',
                'not_in_channel',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'not_allowed_token_type',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.mark method',
              required: ['ok', 'error'],
              title: 'conversations.mark error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const getConversationsMembersRoute = createRoute({
  method: 'get',
  path: '/conversations.members',
  tags: ['conversations'],
  description: 'Retrieve members of a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.members',
  },
  operationId: 'conversations_members',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the conversation to retrieve members for',
            in: 'query',
            name: 'channel',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical paginated success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              members: z
                .array(DefsUserIdSchema)
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ok: DefsOkTrueSchema,
              response_metadata: z
                .strictObject({ next_cursor: z.string() })
                .openapi({ required: ['next_cursor'] }),
            })
            .openapi({
              description: 'Schema for successful response conversations.members method',
              required: ['ok', 'members', 'response_metadata'],
              title: 'conversations.members success schema',
            }),
          examples: {
            response: {
              value: {
                members: ['U023BECGF', 'U061F7AUR', 'W012A3CDE'],
                ok: true,
                response_metadata: { next_cursor: 'e3VzZXJfaWQ6IFcxMjM0NTY3fQ==' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response when an invalid cursor is provided',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'channel_not_found',
                'invalid_limit',
                'invalid_cursor',
                'fetch_members_failed',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response conversations.members method',
              required: ['ok', 'error'],
              title: 'conversations.members error schema',
            }),
          examples: { response: { value: { error: 'invalid_cursor', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] }],
})

export const postConversationsOpenRoute = createRoute({
  method: 'post',
  path: '/conversations.open',
  tags: ['conversations'],
  description: 'Opens or resumes a direct message or multi-person direct message.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.open',
  },
  operationId: 'conversations_open',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead.",
                }),
              return_im: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Boolean, indicates you want the full IM channel definition in the response.',
                }),
              users: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              already_open: z.boolean().exactOptional(),
              channel: z.unknown().superRefine((val, ctx) => {
                if (Array.isArray(val)) {
                  {
                    const Schema = z.union([
                      ObjsConversationSchema,
                      z
                        .strictObject({
                          created: z.string().exactOptional(),
                          id: DefsDmIdSchema,
                          is_im: z.boolean().exactOptional(),
                          is_open: z.boolean().exactOptional(),
                          last_read: DefsTsSchema.exactOptional(),
                          latest: ObjsMessageSchema.exactOptional(),
                          unread_count: z.number().exactOptional(),
                          unread_count_display: z.number().exactOptional(),
                          user: DefsUserIdSchema.exactOptional(),
                        })
                        .openapi({ required: ['id'] }),
                    ])
                    for (let i = 0; i < val.length; i++) {
                      if (!Schema.safeParse(val[i]).success) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  }
                }
              }),
              no_op: z.boolean().exactOptional(),
              ok: DefsOkTrueSchema,
            })
            .openapi({
              description:
                'Schema for successful response from conversations.open method when opening channels, ims, mpims',
              required: ['ok', 'channel'],
              title: 'conversations.open success schema',
            }),
          examples: { response: { value: { channel: { id: 'D069C7QFK' }, ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'user_not_found',
                'user_not_visible',
                'user_disabled',
                'users_list_not_supplied',
                'not_enough_users',
                'too_many_users',
                'invalid_user_combination',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'channel_not_found',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from conversations.open method',
              required: ['ok', 'error'],
              title: 'conversations.open error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsRenameRoute = createRoute({
  method: 'post',
  path: '/conversations.rename',
  tags: ['conversations'],
  description: 'Renames a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.rename',
  },
  operationId: 'conversations_rename',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of conversation to rename' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'New name for conversation.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: ObjsConversationSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from conversations.rename method',
              required: ['ok', 'channel'],
              title: 'conversations.rename success schema',
            }),
          examples: {
            response: {
              value: {
                channel: {
                  created: 1449252889,
                  creator: 'W012A3BCD',
                  id: 'C012AB3CD',
                  is_archived: false,
                  is_channel: true,
                  is_ext_shared: false,
                  is_general: true,
                  is_group: false,
                  is_im: false,
                  is_member: true,
                  is_mpim: false,
                  is_org_shared: false,
                  is_pending_ext_shared: false,
                  is_private: false,
                  is_read_only: false,
                  is_shared: false,
                  last_read: '1502126650.228446',
                  locale: 'en-US',
                  name: 'general',
                  name_normalized: 'general',
                  num_members: 23,
                  pending_shared: [],
                  previous_names: ['specifics', 'abstractions', 'etc'],
                  purpose: {
                    creator: 'W012A3BCD',
                    last_set: 1449709364,
                    value: 'This part of the workspace is for fun. Make fun here.',
                  },
                  topic: {
                    creator: 'W012A3BCD',
                    last_set: 1449709364,
                    value: 'For public discussion of generalities',
                  },
                  unlinked: 0,
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description:
        'Typical error response when the calling user is not a member of the conversation',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'user_is_restricted',
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'not_in_channel',
                'not_authorized',
                'invalid_name',
                'name_taken',
                'invalid_name_required',
                'invalid_name_punctuation',
                'invalid_name_maxlength',
                'invalid_name_specials',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.rename method',
              required: ['ok', 'error'],
              title: 'conversations.rename error schema',
            }),
          examples: { response: { value: { error: 'not_in_channel', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const getConversationsRepliesRoute = createRoute({
  method: 'get',
  path: '/conversations.replies',
  tags: ['conversations'],
  description: 'Retrieve a thread of messages posted to a conversation',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.replies',
  },
  operationId: 'conversations_replies',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:history`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conversation ID to fetch thread from.',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message.",
            in: 'query',
            name: 'ts',
            schema: { type: 'number' },
            required: false,
          },
        }),
      latest: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'End of time range of messages to include in results.',
            in: 'query',
            name: 'latest',
            schema: { type: 'number' },
            required: false,
          },
        }),
      oldest: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start of time range of messages to include in results.',
            in: 'query',
            name: 'oldest',
            schema: { type: 'number' },
            required: false,
          },
        }),
      inclusive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include messages with latest or oldest timestamp in results only when either timestamp is specified.',
            in: 'query',
            name: 'inclusive',
            schema: { type: 'boolean' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              has_more: z.boolean().exactOptional(),
              messages: z.array(
                z.unknown().superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([
                        z
                          .strictObject({
                            last_read: DefsTsSchema.exactOptional(),
                            latest_reply: DefsTsSchema.exactOptional(),
                            reply_count: z.int(),
                            reply_users: z
                              .array(DefsUserIdSchema)
                              .superRefine((items, ctx) => {
                                const seen = new Map()
                                for (const [i, val] of items.entries()) {
                                  const key = JSON.stringify(val)
                                  if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                  else seen.set(key, i)
                                }
                              })
                              .exactOptional(),
                            reply_users_count: z.int().exactOptional(),
                            source_team: DefsTeamSchema.exactOptional(),
                            subscribed: z.boolean(),
                            team: DefsTeamSchema.exactOptional(),
                            text: z.string(),
                            thread_ts: DefsTsSchema,
                            ts: DefsTsSchema,
                            type: z.string(),
                            unread_count: z.int().exactOptional(),
                            user: DefsUserIdSchema,
                            user_profile: ObjsUserProfileShortSchema.exactOptional(),
                            user_team: DefsTeamSchema.exactOptional(),
                          })
                          .openapi({
                            required: [
                              'type',
                              'user',
                              'text',
                              'thread_ts',
                              'reply_count',
                              'subscribed',
                              'ts',
                            ],
                          }),
                        z
                          .strictObject({
                            is_starred: z.boolean().exactOptional(),
                            parent_user_id: DefsUserIdSchema,
                            source_team: DefsTeamSchema.exactOptional(),
                            team: DefsTeamSchema.exactOptional(),
                            text: z.string(),
                            thread_ts: DefsTsSchema,
                            ts: DefsTsSchema,
                            type: z.string(),
                            user: DefsUserIdSchema,
                            user_profile: ObjsUserProfileShortSchema.exactOptional(),
                            user_team: DefsTeamSchema.exactOptional(),
                          })
                          .openapi({
                            required: ['type', 'user', 'text', 'thread_ts', 'parent_user_id', 'ts'],
                          }),
                      ])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                }),
              ),
              ok: DefsOkTrueSchema,
            })
            .openapi({
              description: 'Schema for successful response from conversations.replies method',
              required: ['ok', 'messages'],
              title: 'conversations.replies success schema',
            }),
          examples: {
            response: {
              value: {
                has_more: true,
                messages: [
                  {
                    last_read: '1484678597.521003',
                    reply_count: 3,
                    subscribed: true,
                    text: 'island',
                    thread_ts: '1482960137.003543',
                    ts: '1482960137.003543',
                    type: 'message',
                    unread_count: 0,
                    user: 'U061F7AUR',
                  },
                  {
                    parent_user_id: 'U061F7AUR',
                    text: 'one island',
                    thread_ts: '1482960137.003543',
                    ts: '1483037603.017503',
                    type: 'message',
                    user: 'U061F7AUR',
                  },
                  {
                    parent_user_id: 'U061F7AUR',
                    text: 'two island',
                    thread_ts: '1482960137.003543',
                    ts: '1483051909.018632',
                    type: 'message',
                    user: 'U061F7AUR',
                  },
                  {
                    parent_user_id: 'U061F7AUR',
                    text: 'three for the land',
                    thread_ts: '1482960137.003543',
                    ts: '1483125339.020269',
                    type: 'message',
                    user: 'U061F7AUR',
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: 'bmV4dF90czoxNDg0Njc4MjkwNTE3MDkx' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'missing_scope',
                'channel_not_found',
                'thread_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.replies method',
              required: ['ok', 'error'],
              title: 'conversations.replies error schema',
            }),
          examples: { response: { value: { error: 'thread_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:history', 'groups:history', 'im:history', 'mpim:history'] }],
})

export const postConversationsSetPurposeRoute = createRoute({
  method: 'post',
  path: '/conversations.setPurpose',
  tags: ['conversations'],
  description: 'Sets the purpose for a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.setPurpose',
  },
  operationId: 'conversations_setPurpose',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Conversation to set the purpose of' }),
              purpose: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new, specialer purpose' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: ObjsConversationSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from conversations.setPurpose method',
              required: ['ok', 'channel'],
              title: 'conversations.setPurpose success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'not_in_channel',
                'is_archived',
                'too_long',
                'user_is_restricted',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.setPurpose method',
              required: ['ok', 'error'],
              title: 'conversations.setPurpose error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsSetTopicRoute = createRoute({
  method: 'post',
  path: '/conversations.setTopic',
  tags: ['conversations'],
  description: 'Sets the topic for a conversation.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.setTopic',
  },
  operationId: 'conversations_setTopic',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Conversation to set the topic of' }),
              topic: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new topic string. Does not support formatting or linkification.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ channel: ObjsConversationSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from conversations.setTopic method',
              required: ['ok', 'channel'],
              title: 'conversations.setTopic success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'not_in_channel',
                'is_archived',
                'too_long',
                'user_is_restricted',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.setTopic method',
              required: ['ok', 'error'],
              title: 'conversations.setTopic error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const postConversationsUnarchiveRoute = createRoute({
  method: 'post',
  path: '/conversations.unarchive',
  tags: ['conversations'],
  description: 'Reverses conversation archival.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/conversations.unarchive',
  },
  operationId: 'conversations_unarchive',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of conversation to unarchive' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from conversations.unarchive method',
              required: ['ok'],
              title: 'conversations.unarchive success schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'channel_not_found',
                'not_archived',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'user_is_bot',
                'user_is_restricted',
                'user_is_ultra_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'team_added_to_org',
                'missing_charset',
                'superfluous_charset',
              ]),
              needed: z.string().exactOptional(),
              ok: DefsOkFalseSchema,
              provided: z.string().exactOptional(),
            })
            .openapi({
              description: 'Schema for error response from conversations.unarchive method',
              required: ['ok', 'error'],
              title: 'conversations.unarchive error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] }],
})

export const getDialogOpenRoute = createRoute({
  method: 'get',
  path: '/dialog.open',
  tags: ['dialog'],
  description: 'Open a dialog with a user',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/dialog.open',
  },
  operationId: 'dialog_open',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      dialog: z
        .string()
        .openapi({
          param: {
            description: 'The dialog definition. This must be a JSON-encoded string.',
            in: 'query',
            name: 'dialog',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trigger_id: z
        .string()
        .openapi({
          param: {
            description: 'Exchange a trigger to post to the user.',
            in: 'query',
            name: 'trigger_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response is quite minimal.',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from dialog.open method',
              required: ['ok'],
              title: 'dialog.open schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response, before getting to any possible validation errors.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'validation_errors',
                'missing_trigger',
                'missing_dialog',
                'trigger_exchanged',
                'trigger_expired',
                'invalid_trigger',
                'app_missing_action_url',
                'cannot_create_dialog',
                'failed_sending_dialog',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from dialog.open method',
              required: ['ok', 'error'],
              title: 'dialog.open error schema',
            }),
          examples: { response: { value: { error: 'missing_trigger', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const postDndEndDndRoute = createRoute({
  method: 'post',
  path: '/dnd.endDnd',
  tags: ['dnd'],
  description: "Ends the current user's Do Not Disturb session immediately.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/dnd.endDnd',
  },
  operationId: 'dnd_endDnd',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `dnd:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from dnd.endDnd method',
              required: ['ok'],
              title: 'dnd.endDnd schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'unknown_error',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from dnd.endDnd method',
              required: ['ok', 'error'],
              title: 'dnd.endDnd error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['dnd:write'] }],
})

export const postDndEndSnoozeRoute = createRoute({
  method: 'post',
  path: '/dnd.endSnooze',
  tags: ['dnd'],
  description: "Ends the current user's snooze mode immediately.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/dnd.endSnooze',
  },
  operationId: 'dnd_endSnooze',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `dnd:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              dnd_enabled: z.boolean(),
              next_dnd_end_ts: z.int(),
              next_dnd_start_ts: z.int(),
              ok: DefsOkTrueSchema,
              snooze_enabled: z.boolean(),
            })
            .openapi({
              description: 'Schema for successful response from dnd.endSnooze method',
              required: [
                'ok',
                'dnd_enabled',
                'next_dnd_start_ts',
                'next_dnd_end_ts',
                'snooze_enabled',
              ],
              title: 'dnd.endSnooze schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'snooze_not_active',
                'snooze_end_failed',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from dnd.endSnooze method',
              required: ['ok', 'error'],
              title: 'dnd.endSnooze error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['dnd:write'] }],
})

export const getDndInfoRoute = createRoute({
  method: 'get',
  path: '/dnd.info',
  tags: ['dnd'],
  description: "Retrieves a user's current Do Not Disturb status.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/dnd.info',
  },
  operationId: 'dnd_info',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `dnd:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User to fetch status for (defaults to current user)',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              dnd_enabled: z.boolean(),
              next_dnd_end_ts: z.int(),
              next_dnd_start_ts: z.int(),
              ok: DefsOkTrueSchema,
              snooze_enabled: z.boolean().exactOptional(),
              snooze_endtime: z.int().exactOptional(),
              snooze_remaining: z.int().exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from dnd.info method',
              required: ['ok', 'dnd_enabled', 'next_dnd_start_ts', 'next_dnd_end_ts'],
              title: 'dnd.info schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'user_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from dnd.info method',
              required: ['ok', 'error'],
              title: 'dnd.info error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['dnd:read'] }],
})

export const postDndSetSnoozeRoute = createRoute({
  method: 'post',
  path: '/dnd.setSnooze',
  tags: ['dnd'],
  description: 'Turns on Do Not Disturb mode for the current user, or changes its duration.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/dnd.setSnooze',
  },
  operationId: 'dnd_setSnooze',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              num_minutes: z
                .string()
                .openapi({ description: 'Number of minutes, from now, to snooze until.' }),
              token: z
                .string()
                .openapi({ description: 'Authentication token. Requires scope: `dnd:write`' }),
            })
            .openapi({ required: ['token', 'num_minutes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              snooze_enabled: z.boolean(),
              snooze_endtime: z.int(),
              snooze_remaining: z.int(),
            })
            .openapi({
              description: 'Schema for successful response from dnd.setSnooze method',
              required: ['ok', 'snooze_enabled', 'snooze_endtime', 'snooze_remaining'],
              title: 'dnd.setSnooze schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'missing_duration',
                'snooze_failed',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'too_long',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from dnd.setSnooze method',
              required: ['ok', 'error'],
              title: 'dnd.setSnooze error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['dnd:write'] }],
})

export const getDndTeamInfoRoute = createRoute({
  method: 'get',
  path: '/dnd.teamInfo',
  tags: ['dnd'],
  description: 'Retrieves the Do Not Disturb status for up to 50 users on a team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/dnd.teamInfo',
  },
  operationId: 'dnd_teamInfo',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `dnd:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      users: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of users to fetch Do Not Disturb status for',
            in: 'query',
            name: 'users',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                users: {
                  U023BECGF: {
                    dnd_enabled: true,
                    next_dnd_end_ts: 1450423800,
                    next_dnd_start_ts: 1450387800,
                  },
                  W058CJVAA: { dnd_enabled: false, next_dnd_end_ts: 1, next_dnd_start_ts: 1 },
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['dnd:read'] }],
})

export const getEmojiListRoute = createRoute({
  method: 'get',
  path: '/emoji.list',
  tags: ['emoji'],
  description: 'Lists custom emoji for a team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/emoji.list',
  },
  operationId: 'emoji_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `emoji:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['emoji:read'] }],
})

export const postFilesCommentsDeleteRoute = createRoute({
  method: 'post',
  path: '/files.comments.delete',
  tags: ['files.comments', 'files'],
  description: 'Deletes an existing comment on a file.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.comments.delete',
  },
  operationId: 'files_comments_delete',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `files:write:user`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              file: z
                .string()
                .exactOptional()
                .openapi({ description: 'File to delete a comment from.' }),
              id: z.string().exactOptional().openapi({ description: 'The comment to delete.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Standard success response is very simple',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response files.comments.delete method',
              required: ['ok'],
              title: 'files.comments.delete schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Standard failure response when used with an invalid token',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'cant_delete',
                'comment_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response files.comments.delete method',
              required: ['ok', 'error'],
              title: 'files.comments.delete error schema',
            }),
          examples: { response: { value: { error: 'file_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:write:user'] }],
})

export const postFilesDeleteRoute = createRoute({
  method: 'post',
  path: '/files.delete',
  tags: ['files'],
  description: 'Deletes a file.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.delete',
  },
  operationId: 'files_delete',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `files:write:user`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              file: z.string().exactOptional().openapi({ description: 'ID of file to delete.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response files.delete method',
              required: ['ok'],
              title: 'files.delete schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'file_not_found',
                'file_deleted',
                'cant_delete_file',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response files.delete method',
              required: ['ok', 'error'],
              title: 'files.delete error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:write:user'] }],
})

export const getFilesInfoRoute = createRoute({
  method: 'get',
  path: '/files.info',
  tags: ['files'],
  description: 'Gets information about a file.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.info',
  },
  operationId: 'files_info',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `files:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify a file by providing its ID.',
            in: 'query',
            name: 'file',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'count', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      limit: z
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
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. See [pagination](/docs/pagination) for more details.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              comments: ObjsCommentsSchema,
              content_html: z.any().nullable().exactOptional(),
              editor: DefsUserIdSchema.exactOptional(),
              file: ObjsFileSchema,
              ok: DefsOkTrueSchema,
              paging: ObjsPagingSchema.exactOptional(),
              response_metadata: ObjsResponseMetadataSchema.exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from files.info method',
              required: ['ok', 'file', 'comments'],
              title: 'files.info schema',
            }),
          examples: {
            response: {
              value: {
                comments: [],
                file: {
                  channels: ['C0T8SE4AU'],
                  comments_count: 0,
                  created: 1531763342,
                  deanimate_gif: 'https://.../tedair_deanimate_gif.png',
                  display_as_bot: false,
                  editable: false,
                  external_type: '',
                  filetype: 'gif',
                  groups: [],
                  has_rich_preview: false,
                  id: 'F0S43PZDF',
                  image_exif_rotation: 1,
                  ims: [],
                  is_external: false,
                  is_public: true,
                  is_starred: false,
                  mimetype: 'image/gif',
                  mode: 'hosted',
                  name: 'tedair.gif',
                  original_h: 226,
                  original_w: 176,
                  permalink: 'https://.../tedair.gif',
                  permalink_public: 'https://.../...',
                  pjpeg: 'https://.../tedair_pjpeg.jpg',
                  pretty_type: 'GIF',
                  public_url_shared: false,
                  shares: {
                    public: {
                      C0T8SE4AU: [
                        {
                          channel_name: 'file-under',
                          latest_reply: '1531763348.000001',
                          reply_count: 1,
                          reply_users: ['U061F7AUR'],
                          reply_users_count: 1,
                          team_id: 'T061EG9R6',
                          thread_ts: '1531763273.000015',
                          ts: '1531763348.000001',
                        },
                      ],
                    },
                  },
                  size: 137531,
                  thumb_160: 'https://.../tedair_=_160.png',
                  thumb_360: 'https://.../tedair_360.png',
                  thumb_360_gif: 'https://.../tedair_360.gif',
                  thumb_360_h: 226,
                  thumb_360_w: 176,
                  thumb_64: 'https://.../tedair_64.png',
                  thumb_80: 'https://.../tedair_80.png',
                  timestamp: 1531763342,
                  title: 'tedair.gif',
                  url_private: 'https://.../tedair.gif',
                  url_private_download: 'https://.../tedair.gif',
                  user: 'U061F7AUR',
                  username: '',
                },
                ok: true,
                response_metadata: { next_cursor: 'dGVhbTpDMUg5UkVTR0w=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'file_not_found',
                'file_deleted',
                'timezone_count_failed',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from files.info method',
              required: ['ok', 'error'],
              title: 'files.info error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:read'] }],
})

export const getFilesListRoute = createRoute({
  method: 'get',
  path: '/files.list',
  tags: ['files'],
  description: 'List for a team, in a channel, or from a user with applied filters.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.list',
  },
  operationId: 'files_list',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `files:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files created by a single user.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files appearing in a specific channel, indicated by its ID.',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files created after this timestamp (inclusive).',
            in: 'query',
            name: 'ts_from',
            schema: { type: 'number' },
            required: false,
          },
        }),
      ts_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files created before this timestamp (inclusive).',
            in: 'query',
            name: 'ts_to',
            schema: { type: 'number' },
            required: false,
          },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list.',
            in: 'query',
            name: 'types',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'count', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      show_files_hidden_by_limit: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit.',
            in: 'query',
            name: 'show_files_hidden_by_limit',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              files: z
                .array(ObjsFileSchema)
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ok: DefsOkTrueSchema,
              paging: ObjsPagingSchema,
            })
            .openapi({
              description: 'Schema for successful response from files.list method',
              required: ['ok', 'files', 'paging'],
              title: 'files.list schema',
            }),
          examples: {
            response: {
              value: {
                files: [
                  {
                    channels: ['C0T8SE4AU'],
                    comments_count: 0,
                    created: 1531763254,
                    deanimate_gif: 'https://.../billair_deanimate_gif.png',
                    display_as_bot: false,
                    editable: false,
                    external_type: '',
                    filetype: 'gif',
                    groups: [],
                    id: 'F0S43P1CZ',
                    image_exif_rotation: 1,
                    ims: [],
                    is_external: false,
                    is_public: true,
                    mimetype: 'image/gif',
                    mode: 'hosted',
                    name: 'billair.gif',
                    original_h: 226,
                    original_w: 176,
                    permalink: 'https://.../billair.gif',
                    permalink_public: 'https://.../...',
                    pjpeg: 'https://.../billair_pjpeg.jpg',
                    pretty_type: 'GIF',
                    public_url_shared: false,
                    size: 144538,
                    thumb_160: 'https://.../billair_=_160.png',
                    thumb_360: 'https://.../billair_360.png',
                    thumb_360_gif: 'https://.../billair_360.gif',
                    thumb_360_h: 226,
                    thumb_360_w: 176,
                    thumb_64: 'https://.../billair_64.png',
                    thumb_80: 'https://.../billair_80.png',
                    timestamp: 1531763254,
                    title: 'billair.gif',
                    url_private: 'https://.../billair.gif',
                    url_private_download: 'https://.../billair.gif',
                    user: 'U061F7AUR',
                    username: '',
                  },
                  {
                    channels: ['C0T8SE4AU'],
                    comments_count: 0,
                    created: 1531763342,
                    deanimate_gif: 'https://.../tedair_deanimate_gif.png',
                    display_as_bot: false,
                    editable: false,
                    external_type: '',
                    filetype: 'gif',
                    groups: [],
                    id: 'F0S43PZDF',
                    image_exif_rotation: 1,
                    ims: [],
                    is_external: false,
                    is_public: true,
                    mimetype: 'image/gif',
                    mode: 'hosted',
                    name: 'tedair.gif',
                    original_h: 226,
                    original_w: 176,
                    permalink: 'https://.../tedair.gif',
                    permalink_public: 'https://.../...',
                    pjpeg: 'https://.../tedair_pjpeg.jpg',
                    pretty_type: 'GIF',
                    public_url_shared: false,
                    size: 137531,
                    thumb_160: 'https://.../tedair_=_160.png',
                    thumb_360: 'https://.../tedair_360.png',
                    thumb_360_gif: 'https://.../tedair_360.gif',
                    thumb_360_h: 226,
                    thumb_360_w: 176,
                    thumb_64: 'https://.../tedair_64.png',
                    thumb_80: 'https://.../tedair_80.png',
                    timestamp: 1531763342,
                    title: 'tedair.gif',
                    url_private: 'https://.../tedair.gif',
                    url_private_download: 'https://.../tedair.gif',
                    user: 'U061F7AUR',
                    username: '',
                  },
                ],
                ok: true,
                paging: { count: 100, page: 1, pages: 1, total: 2 },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'user_not_found',
                'unknown_type',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from files.list method',
              required: ['ok', 'error'],
              title: 'files.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:read'] }],
})

export const postFilesRemoteAddRoute = createRoute({
  method: 'post',
  path: '/files.remote.add',
  tags: ['files.remote', 'files'],
  description: 'Adds a file from a remote service',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.remote.add',
  },
  operationId: 'files_remote_add',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              external_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Creator defined GUID for the file.' }),
              external_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL of the remote file.' }),
              filetype: z.string().exactOptional().openapi({ description: 'type of file' }),
              indexable_file_contents: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file.',
                }),
              preview_image: z
                .string()
                .exactOptional()
                .openapi({ description: 'Preview of the document via `multipart/form-data`.' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Title of the file being shared.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Authentication token. Requires scope: `remote_files:write`',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['remote_files:write'] }],
})

export const getFilesRemoteInfoRoute = createRoute({
  method: 'get',
  path: '/files.remote.info',
  tags: ['files.remote', 'files'],
  description: 'Retrieve information about a remote file added to Slack',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.remote.info',
  },
  operationId: 'files_remote_info',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `remote_files:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify a file by providing its ID.',
            in: 'query',
            name: 'file',
            schema: { type: 'string' },
            required: false,
          },
        }),
      external_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Creator defined GUID for the file.',
            in: 'query',
            name: 'external_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['remote_files:read'] }],
})

export const getFilesRemoteListRoute = createRoute({
  method: 'get',
  path: '/files.remote.list',
  tags: ['files.remote', 'files'],
  description: 'Retrieve information about a remote file added to Slack',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.remote.list',
  },
  operationId: 'files_remote_list',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `remote_files:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files appearing in a specific channel, indicated by its ID.',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files created after this timestamp (inclusive).',
            in: 'query',
            name: 'ts_from',
            schema: { type: 'number' },
            required: false,
          },
        }),
      ts_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter files created before this timestamp (inclusive).',
            in: 'query',
            name: 'ts_to',
            schema: { type: 'number' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['remote_files:read'] }],
})

export const postFilesRemoteRemoveRoute = createRoute({
  method: 'post',
  path: '/files.remote.remove',
  tags: ['files.remote', 'files'],
  description: 'Remove a remote file.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.remote.remove',
  },
  operationId: 'files_remote_remove',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              external_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Creator defined GUID for the file.' }),
              file: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specify a file by providing its ID.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Authentication token. Requires scope: `remote_files:write`',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['remote_files:write'] }],
})

export const getFilesRemoteShareRoute = createRoute({
  method: 'get',
  path: '/files.remote.share',
  tags: ['files.remote', 'files'],
  description: 'Share a remote file into a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.remote.share',
  },
  operationId: 'files_remote_share',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `remote_files:share`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required.',
            in: 'query',
            name: 'file',
            schema: { type: 'string' },
            required: false,
          },
        }),
      external_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required.',
            in: 'query',
            name: 'external_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of channel IDs where the file will be shared.',
            in: 'query',
            name: 'channels',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['remote_files:share'] }],
})

export const postFilesRemoteUpdateRoute = createRoute({
  method: 'post',
  path: '/files.remote.update',
  tags: ['files.remote', 'files'],
  description: 'Updates an existing remote file.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.remote.update',
  },
  operationId: 'files_remote_update',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              external_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Creator defined GUID for the file.' }),
              external_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL of the remote file.' }),
              file: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specify a file by providing its ID.' }),
              filetype: z.string().exactOptional().openapi({ description: 'type of file' }),
              indexable_file_contents: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'File containing contents that can be used to improve searchability for the remote file.',
                }),
              preview_image: z
                .string()
                .exactOptional()
                .openapi({ description: 'Preview of the document via `multipart/form-data`.' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Title of the file being shared.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Authentication token. Requires scope: `remote_files:write`',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['remote_files:write'] }],
})

export const postFilesRevokePublicURLRoute = createRoute({
  method: 'post',
  path: '/files.revokePublicURL',
  tags: ['files'],
  description: 'Revokes public/external sharing access for a file',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.revokePublicURL',
  },
  operationId: 'files_revokePublicURL',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `files:write:user`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ file: z.string().exactOptional().openapi({ description: 'File to revoke' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ file: ObjsFileSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from files.revokePublicURL method',
              required: ['ok', 'file'],
              title: 'files.revokePublicURL schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'file_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from files.revokePublicURL method',
              required: ['ok', 'error'],
              title: 'files.revokePublicURL error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:write:user'] }],
})

export const postFilesSharedPublicURLRoute = createRoute({
  method: 'post',
  path: '/files.sharedPublicURL',
  tags: ['files'],
  description: 'Enables a file for public/external sharing.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.sharedPublicURL',
  },
  operationId: 'files_sharedPublicURL',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `files:write:user`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ file: z.string().exactOptional().openapi({ description: 'File to share' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ file: ObjsFileSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from files.sharedPublicURL method',
              required: ['ok', 'file'],
              title: 'files.sharedPublicURL schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'file_not_found',
                'not_allowed',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from files.sharedPublicURL method',
              required: ['ok', 'error'],
              title: 'files.sharedPublicURL error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:write:user'] }],
})

export const postFilesUploadRoute = createRoute({
  method: 'post',
  path: '/files.upload',
  tags: ['files'],
  description: 'Uploads or creates a file.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/files.upload',
  },
  operationId: 'files_upload',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channels: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma-separated list of channel names or IDs where the file will be shared.',
                }),
              content: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'File contents via a POST variable. If omitting this parameter, you must provide a `file`.',
                }),
              file: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`.',
                }),
              filename: z.string().exactOptional().openapi({ description: 'Filename of file.' }),
              filetype: z
                .string()
                .exactOptional()
                .openapi({ description: 'A [file type](/types/file#file_types) identifier.' }),
              initial_comment: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The message text introducing the file in specified `channels`.',
                }),
              thread_ts: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead.",
                }),
              title: z.string().exactOptional().openapi({ description: 'Title of file.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Authentication token. Requires scope: `files:write:user`',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success response after uploading a file to a channel with an initial message',
      content: {
        'application/json': {
          schema: z
            .strictObject({ file: ObjsFileSchema, ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response files.upload method',
              required: ['ok', 'file'],
              title: 'files.upload schema',
            }),
          examples: {
            response: {
              value: {
                file: {
                  channels: [],
                  comments_count: 0,
                  created: 1532293501,
                  display_as_bot: false,
                  editable: false,
                  external_type: '',
                  filetype: 'gif',
                  groups: [],
                  has_rich_preview: false,
                  id: 'F0TD00400',
                  image_exif_rotation: 1,
                  ims: ['D0L4B9P0Q'],
                  is_external: false,
                  is_public: false,
                  is_starred: false,
                  mimetype: 'image/jpeg',
                  mode: 'hosted',
                  name: 'dramacat.gif',
                  original_h: 366,
                  original_w: 526,
                  permalink: 'https://.../dramacat.gif',
                  permalink_public: 'https://.../More-Path-Components',
                  pretty_type: 'JPEG',
                  public_url_shared: false,
                  shares: {
                    private: {
                      D0L4B9P0Q: [
                        {
                          reply_count: 0,
                          reply_users: [],
                          reply_users_count: 0,
                          ts: '1532293503.000001',
                        },
                      ],
                    },
                  },
                  size: 43518,
                  thumb_160: 'https://.../dramacat_160.gif',
                  thumb_360: 'https://.../dramacat_360.gif',
                  thumb_360_h: 250,
                  thumb_360_w: 360,
                  thumb_480: 'https://.../dramacat_480.gif',
                  thumb_480_h: 334,
                  thumb_480_w: 480,
                  thumb_64: 'https://.../dramacat_64.gif',
                  thumb_80: 'https://.../dramacat_80.gif',
                  timestamp: 1532293501,
                  title: 'dramacat',
                  url_private: 'https://.../dramacat.gif',
                  url_private_download: 'https://.../dramacat.gif',
                  user: 'U0L4B9NSU',
                  username: '',
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'posting_to_general_channel_denied',
                'invalid_channel',
                'file_uploads_disabled',
                'file_uploads_except_images_disabled',
                'storage_limit_reached',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response files.upload method',
              required: ['ok', 'error'],
              title: 'files.upload error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['files:write:user'] }],
})

export const getMigrationExchangeRoute = createRoute({
  method: 'get',
  path: '/migration.exchange',
  tags: ['migration'],
  description: 'For Enterprise Grid workspaces, map local user IDs to global user IDs',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/migration.exchange',
  },
  operationId: 'migration_exchange',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `tokens.basic`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      users: z
        .string()
        .openapi({
          param: {
            description: 'A comma-separated list of user ids, up to 400 per request',
            in: 'query',
            name: 'users',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify team_id starts with `T` in case of Org Token',
            in: 'query',
            name: 'team_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to_old: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.',
            in: 'query',
            name: 'to_old',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response when mappings exist for the specified user IDs',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              enterprise_id: z
                .string()
                .openapi({
                  title: 'The enterprise grid organization ID containing the workspace/team.',
                }),
              invalid_user_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ title: 'A list of User IDs that cannot be mapped or found' }),
              ok: DefsOkTrueSchema,
              team_id: DefsTeamSchema,
              user_id_map: z
                .looseObject({})
                .exactOptional()
                .openapi({ title: 'A mapping of provided user IDs with mapped user IDs' }),
            })
            .openapi({
              description: 'Schema for successful response from migration.exchange method',
              required: ['ok', 'team_id', 'enterprise_id'],
              title: 'migration.exchange success schema',
            }),
          examples: {
            response: {
              value: {
                enterprise_id: 'E1KQTNXE1',
                invalid_user_ids: ['U21ABZZXX'],
                ok: true,
                team_id: 'T1KR7PE1W',
                user_id_map: {
                  U06UBSUN5: 'W06M56XJM',
                  U06UBSVB3: 'W06PUUDLY',
                  U06UBSVDX: 'W06PUUDMW',
                  U06UEB62U: 'W06PTT6GH',
                  W06UAZ65Q: 'W06UAZ65Q',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response when there are no mappings to provide',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_enterprise_team',
                'too_many_users',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from migration.exchange method',
              required: ['ok', 'error'],
              title: 'migration.exchange error schema',
            }),
          examples: { response: { value: { error: 'not_enterprise_team', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['tokens.basic'] }],
})

export const getOauthAccessRoute = createRoute({
  method: 'get',
  path: '/oauth.access',
  tags: ['oauth'],
  description: 'Exchanges a temporary OAuth verifier code for an access token.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/oauth.access',
  },
  operationId: 'oauth_access',
  request: {
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_secret',
            schema: { type: 'string' },
            required: false,
          },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The `code` param returned via the OAuth callback.',
            in: 'query',
            name: 'code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This must match the originally submitted URI (if one was sent).',
            in: 'query',
            name: 'redirect_uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
      single_channel: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).',
            in: 'query',
            name: 'single_channel',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful user token negotiation for a single scope',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                access_token: 'xoxp-XXXXXXXX-XXXXXXXX-XXXXX',
                enterprise_id: null,
                scope: 'groups:write',
                team_id: 'TXXXXXXXXX',
                team_name: 'Wyld Stallyns LLC',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_client_id', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getOauthTokenRoute = createRoute({
  method: 'get',
  path: '/oauth.token',
  tags: ['oauth'],
  description: 'Exchanges a temporary OAuth verifier code for a workspace token.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/oauth.token',
  },
  operationId: 'oauth_token',
  request: {
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_secret',
            schema: { type: 'string' },
            required: false,
          },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The `code` param returned via the OAuth callback.',
            in: 'query',
            name: 'code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This must match the originally submitted URI (if one was sent).',
            in: 'query',
            name: 'redirect_uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
      single_channel: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request the user to add your app only to a single channel.',
            in: 'query',
            name: 'single_channel',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success example using a workspace app produces a very different kind of response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                access_token: 'xoxa-access-token-string',
                app_id: 'A012345678',
                app_user_id: 'U0AB12ABC',
                authorizing_user_id: 'U0HTT3Q0G',
                installer_user_id: 'U061F7AUR',
                ok: true,
                permissions: [
                  {
                    resource_id: 0,
                    resource_type: 'channel',
                    scopes: ['channels:read', 'chat:write:user'],
                  },
                ],
                single_channel_id: 'C061EG9T2',
                team_id: 'T061EG9Z9',
                team_name: 'Subarachnoid Workspace',
                token_type: 'app',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_client_id', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getOauthV2AccessRoute = createRoute({
  method: 'get',
  path: '/oauth.v2.access',
  tags: ['oauth.v2', 'oauth'],
  description: 'Exchanges a temporary OAuth verifier code for an access token.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/oauth.v2.access',
  },
  operationId: 'oauth_v2_access',
  request: {
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Issued when you created your application.',
            in: 'query',
            name: 'client_secret',
            schema: { type: 'string' },
            required: false,
          },
        }),
      code: z
        .string()
        .openapi({
          param: {
            description: 'The `code` param returned via the OAuth callback.',
            in: 'query',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This must match the originally submitted URI (if one was sent).',
            in: 'query',
            name: 'redirect_uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful token request with scopes for both a bot user and a user token',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                access_token: 'xoxb-17653672481-19874698323-pdFZKVeTuE8sk7oOcBrzbqgy',
                app_id: 'A0KRD7HC3',
                authed_user: {
                  access_token: 'xoxp-1234',
                  id: 'U1234',
                  scope: 'chat:write',
                  token_type: 'user',
                },
                bot_user_id: 'U0KRQLJ9H',
                enterprise: { id: 'E12345678', name: 'slack-sports' },
                ok: true,
                scope: 'commands,incoming-webhook',
                team: { id: 'T9TK3CUKW', name: 'Slack Softball Team' },
                token_type: 'bot',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_client_id', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const postPinsAddRoute = createRoute({
  method: 'post',
  path: '/pins.add',
  tags: ['pins'],
  description: 'Pins an item to a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/pins.add',
  },
  operationId: 'pins_add',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `pins:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z.string().openapi({ description: 'Channel to pin the item in.' }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({ description: 'Timestamp of the message to pin.' }),
            })
            .openapi({ required: ['channel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from pins.add method',
              required: ['ok'],
              title: 'pins.add schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'message_not_found',
                'channel_not_found',
                'no_item_specified',
                'already_pinned',
                'permission_denied',
                'file_not_shared',
                'not_pinnable',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from pins.add method',
              required: ['ok', 'error'],
              title: 'pins.add error schema',
            }),
          examples: { response: { value: { error: 'channel_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['pins:write'] }],
})

export const getPinsListRoute = createRoute({
  method: 'get',
  path: '/pins.list',
  tags: ['pins'],
  description: 'Lists items pinned to a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/pins.list',
  },
  operationId: 'pins_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `pins:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channel: z
        .string()
        .openapi({
          param: {
            description: 'Channel to get pinned items for.',
            in: 'query',
            name: 'channel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .unknown()
            .superRefine((val, ctx) => {
              if (Array.isArray(val)) {
                {
                  const Schema = z.union([
                    z
                      .strictObject({
                        items: z
                          .array(
                            z.union([
                              z
                                .strictObject({
                                  created: z.int().exactOptional(),
                                  created_by: DefsUserIdSchema.exactOptional(),
                                  file: ObjsFileSchema.exactOptional(),
                                  type: z.literal('file').exactOptional(),
                                })
                                .openapi({ title: 'File Pin', required: [] }),
                              z
                                .strictObject({
                                  channel: DefsChannelSchema.exactOptional(),
                                  created: z.int().exactOptional(),
                                  created_by: DefsUserIdSchema.exactOptional(),
                                  message: ObjsMessageSchema.exactOptional(),
                                  type: z.literal('message').exactOptional(),
                                })
                                .openapi({ title: 'Message Pin', required: [] }),
                            ]),
                          )
                          .superRefine((items, ctx) => {
                            const seen = new Map()
                            for (const [i, val] of items.entries()) {
                              const key = JSON.stringify(val)
                              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                              else seen.set(key, i)
                            }
                          }),
                        ok: DefsOkTrueSchema,
                      })
                      .openapi({ required: ['ok', 'items'] }),
                    z
                      .strictObject({ count: z.int(), ok: DefsOkTrueSchema })
                      .openapi({ required: ['ok', 'count'] }),
                  ])
                  for (let i = 0; i < val.length; i++) {
                    if (!Schema.safeParse(val[i]).success) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                }
              }
            })
            .openapi({
              description: 'Schema for successful response from pins.list method',
              title: 'pins.list success schema',
            }),
          examples: {
            response: {
              value: {
                items: [
                  {
                    channel: 'C2U86NC6H',
                    created: 1508881078,
                    created_by: 'U2U85N1RZ',
                    message: {
                      permalink:
                        'https://hitchhikers.slack.com/archives/C2U86NC6H/p1508197641000151',
                      pinned_to: ['C2U86NC6H'],
                      text: 'What is the meaning of life?',
                      ts: '1508197641.000151',
                      type: 'message',
                      user: 'U2U85N1RZ',
                    },
                    type: 'message',
                  },
                  {
                    channel: 'C2U86NC6H',
                    created: 1508880991,
                    created_by: 'U2U85N1RZ',
                    message: {
                      permalink:
                        'https://hitchhikers.slack.com/archives/C2U86NC6H/p1508284197000015',
                      pinned_to: ['C2U86NC6H'],
                      text: 'The meaning of life, the universe, and everything is 42.',
                      ts: '1503289197.000015',
                      type: 'message',
                      user: 'U2U85N1RZ',
                    },
                    type: 'message',
                  },
                ],
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'channel_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from pins.list method',
              required: ['ok', 'error'],
              title: 'pins.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['pins:read'] }],
})

export const postPinsRemoveRoute = createRoute({
  method: 'post',
  path: '/pins.remove',
  tags: ['pins'],
  description: 'Un-pins an item from a channel.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/pins.remove',
  },
  operationId: 'pins_remove',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `pins:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z.string().openapi({ description: 'Channel where the item is pinned to.' }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({ description: 'Timestamp of the message to un-pin.' }),
            })
            .openapi({ required: ['channel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from pins.remove method',
              required: ['ok'],
              title: 'pins.remove schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'file_not_found',
                'file_comment_not_found',
                'message_not_found',
                'no_item_specified',
                'not_pinned',
                'permission_denied',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_typ',
                'missing_post_typ',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeou',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from pins.remove method',
              required: ['ok', 'error'],
              title: 'pins.remove error schema',
            }),
          examples: { response: { value: { error: 'no_pin', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['pins:write'] }],
})

export const postReactionsAddRoute = createRoute({
  method: 'post',
  path: '/reactions.add',
  tags: ['reactions'],
  description: 'Adds a reaction to an item.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reactions.add',
  },
  operationId: 'reactions_add',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reactions:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .openapi({
                  description: 'Channel where the message to add reaction to was posted.',
                }),
              name: z.string().openapi({ description: 'Reaction (emoji) name.' }),
              timestamp: z
                .string()
                .openapi({ description: 'Timestamp of the message to add reaction to.' }),
            })
            .openapi({ required: ['channel', 'name', 'timestamp'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from reactions.add method',
              required: ['ok'],
              title: 'reactions.add schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'message_not_found',
                'no_item_specified',
                'invalid_name',
                'already_reacted',
                'too_many_emoji',
                'too_many_reactions',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reactions.add method',
              required: ['ok', 'error'],
              title: 'reactions.add error schema',
            }),
          examples: { response: { value: { error: 'already_reacted', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reactions:write'] }],
})

export const getReactionsGetRoute = createRoute({
  method: 'get',
  path: '/reactions.get',
  tags: ['reactions'],
  description: 'Gets reactions for an item.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reactions.get',
  },
  operationId: 'reactions_get',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reactions:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Channel where the message to get reactions for was posted.',
            in: 'query',
            name: 'channel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'File to get reactions for.',
            in: 'query',
            name: 'file',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file_comment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'File comment to get reactions for.',
            in: 'query',
            name: 'file_comment',
            schema: { type: 'string' },
            required: false,
          },
        }),
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true always return the complete reaction list.',
            in: 'query',
            name: 'full',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp of the message to get reactions for.',
            in: 'query',
            name: 'timestamp',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              description: 'Schema for successful response from reactions.get method',
              title: 'reactions.get success schema',
            }),
          examples: {
            response: {
              value: {
                file: {
                  channels: ['C2U7V2YA2'],
                  comments_count: 1,
                  created: 1507850315,
                  groups: [],
                  id: 'F7H0D7ZA4',
                  ims: [],
                  name: 'computer.gif',
                  reactions: [
                    { count: 1, name: 'stuck_out_tongue_winking_eye', users: ['U2U85N1RV'] },
                  ],
                  timestamp: 1507850315,
                  title: 'computer.gif',
                  user: 'U2U85N1RV',
                },
                ok: true,
                type: 'file',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'file_not_found',
                'file_comment_not_found',
                'message_not_found',
                'no_item_specified',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reactions.get method',
              required: ['ok', 'error'],
              title: 'reactions.get error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reactions:read'] }],
})

export const getReactionsListRoute = createRoute({
  method: 'get',
  path: '/reactions.list',
  tags: ['reactions'],
  description: 'Lists reactions made by a user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reactions.list',
  },
  operationId: 'reactions_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reactions:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show reactions made by this user. Defaults to the authed user.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      full: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true always return the complete reaction list.',
            in: 'query',
            name: 'full',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      count: z
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
          param: { in: 'query', name: 'count', schema: { type: 'integer' }, required: false },
        }),
      page: z
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
          param: { in: 'query', name: 'page', schema: { type: 'integer' }, required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              items: z.array(
                z.unknown().superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([
                        z
                          .strictObject({
                            channel: DefsChannelSchema,
                            message: ObjsMessageSchema,
                            type: z.literal('message'),
                          })
                          .openapi({ required: ['type', 'channel', 'message'] }),
                        z
                          .strictObject({ file: ObjsFileSchema, type: z.literal('file') })
                          .openapi({ required: ['type', 'file'] }),
                        z
                          .strictObject({
                            comment: ObjsCommentSchema,
                            file: ObjsFileSchema,
                            type: z.literal('file_comment'),
                          })
                          .openapi({ required: ['type', 'file', 'comment'] }),
                      ])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                }),
              ),
              ok: DefsOkTrueSchema,
              paging: ObjsPagingSchema.exactOptional(),
              response_metadata: ObjsResponseMetadataSchema.exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from reactions.list method',
              required: ['ok', 'items'],
              title: 'reactions.list schema',
            }),
          examples: {
            response: {
              value: {
                items: [
                  {
                    channel: 'C3UKJTQAC',
                    message: {
                      bot_id: 'B4VLRLMKJ',
                      reactions: [{ count: 1, name: 'robot_face', users: ['U2U85N1RV'] }],
                      subtype: 'bot_message',
                      text: 'Hello from Python! :tada:',
                      ts: '1507849573.000090',
                      username: 'Shipit Notifications',
                    },
                    type: 'message',
                  },
                  {
                    comment: {
                      comment: 'This is a file comment',
                      created: 1508286096,
                      id: 'Fc7LP08P1U',
                      reactions: [{ count: 1, name: 'white_check_mark', users: ['U2U85N1RV'] }],
                      timestamp: 1508286096,
                      type: 'file_comment',
                      user: 'U2U85N1RV',
                    },
                    file: {
                      channels: ['C2U7V2YA2'],
                      comments_count: 1,
                      created: 1507850315,
                      reactions: [
                        { count: 1, name: 'stuck_out_tongue_winking_eye', users: ['U2U85N1RV'] },
                      ],
                      title: 'computer.gif',
                      user: 'U2U85N1RV',
                      username: '',
                    },
                  },
                  {
                    file: {
                      channels: ['C2U7V2YA2'],
                      comments_count: 1,
                      created: 1507850315,
                      id: 'F7H0D7ZA4',
                      name: 'computer.gif',
                      reactions: [
                        { count: 1, name: 'stuck_out_tongue_winking_eye', users: ['U2U85N1RV'] },
                      ],
                      size: 1639034,
                      title: 'computer.gif',
                      user: 'U2U85N1RV',
                      username: '',
                    },
                    type: 'file',
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: 'dGVhbTpDMUg5UkVTR0w=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'user_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactiv',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reactions.list method',
              required: ['ok', 'error'],
              title: 'reactions.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reactions:read'] }],
})

export const postReactionsRemoveRoute = createRoute({
  method: 'post',
  path: '/reactions.remove',
  tags: ['reactions'],
  description: 'Removes a reaction from an item.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reactions.remove',
  },
  operationId: 'reactions_remove',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reactions:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Channel where the message to remove reaction from was posted.',
                }),
              file: z
                .string()
                .exactOptional()
                .openapi({ description: 'File to remove reaction from.' }),
              file_comment: z
                .string()
                .exactOptional()
                .openapi({ description: 'File comment to remove reaction from.' }),
              name: z.string().openapi({ description: 'Reaction (emoji) name.' }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({ description: 'Timestamp of the message to remove reaction from.' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from reactions.remove method',
              required: ['ok'],
              title: 'reactions.remove schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'file_not_found',
                'file_comment_not_found',
                'message_not_found',
                'no_item_specified',
                'invalid_name',
                'no_reaction',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reactions.remove method',
              required: ['ok', 'error'],
              title: 'reactions.remove error schema',
            }),
          examples: { response: { value: { error: 'no_reaction', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reactions:write'] }],
})

export const postRemindersAddRoute = createRoute({
  method: 'post',
  path: '/reminders.add',
  tags: ['reminders'],
  description: 'Creates a reminder.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reminders.add',
  },
  operationId: 'reminders_add',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reminders:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              text: z.string().openapi({ description: 'The content of the reminder' }),
              time: z
                .string()
                .openapi({
                  description:
                    'When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")',
                }),
              user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.',
                }),
            })
            .openapi({ required: ['text', 'time'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, reminder: ObjsReminderSchema })
            .openapi({
              description: 'Schema for successful response from reminders.add method',
              required: ['ok', 'reminder'],
              title: 'reminders.add schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'cannot_parse',
                'user_not_found',
                'cannot_add_bot',
                'cannot_add_slackbot',
                'cannot_add_others',
                'cannot_add_others_recurring',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reminders.add method',
              required: ['ok', 'error'],
              title: 'reminders.add error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reminders:write'] }],
})

export const postRemindersCompleteRoute = createRoute({
  method: 'post',
  path: '/reminders.complete',
  tags: ['reminders'],
  description: 'Marks a reminder as complete.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reminders.complete',
  },
  operationId: 'reminders_complete',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reminders:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              reminder: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the reminder to be marked as complete' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from reminders.complete method',
              required: ['ok'],
              title: 'reminders.complete schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_found',
                'cannot_complete_recurring',
                'cannot_complete_others',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reminders.complete method',
              required: ['ok', 'error'],
              title: 'reminders.complete error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reminders:write'] }],
})

export const postRemindersDeleteRoute = createRoute({
  method: 'post',
  path: '/reminders.delete',
  tags: ['reminders'],
  description: 'Deletes a reminder.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reminders.delete',
  },
  operationId: 'reminders_delete',
  request: {
    headers: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reminders:write`',
            in: 'header',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              reminder: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the reminder' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from reminders.delete method',
              required: ['ok'],
              title: 'reminders.delete schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reminders.delete method',
              required: ['ok', 'error'],
              title: 'reminders.delete error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reminders:write'] }],
})

export const getRemindersInfoRoute = createRoute({
  method: 'get',
  path: '/reminders.info',
  tags: ['reminders'],
  description: 'Gets information about a reminder.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reminders.info',
  },
  operationId: 'reminders_info',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reminders:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      reminder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the reminder',
            in: 'query',
            name: 'reminder',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, reminder: ObjsReminderSchema })
            .openapi({
              description: 'Schema for successful response from reminders.info method',
              required: ['ok', 'reminder'],
              title: 'reminders.info schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reminders.info method',
              required: ['ok', 'error'],
              title: 'reminders.info error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reminders:read'] }],
})

export const getRemindersListRoute = createRoute({
  method: 'get',
  path: '/reminders.list',
  tags: ['reminders'],
  description: 'Lists all reminders created by or for a given user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/reminders.list',
  },
  operationId: 'reminders_list',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `reminders:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, reminders: z.array(ObjsReminderSchema) })
            .openapi({
              description: 'Schema for successful response from reminders.list method',
              required: ['ok', 'reminders'],
              title: 'reminders.list schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from reminders.list method',
              required: ['ok', 'error'],
              title: 'reminders.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['reminders:read'] }],
})

export const getRtmConnectRoute = createRoute({
  method: 'get',
  path: '/rtm.connect',
  tags: ['rtm'],
  description: 'Starts a Real Time Messaging session.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/rtm.connect',
  },
  operationId: 'rtm_connect',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `rtm:stream`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      batch_presence_aware: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching).',
            in: 'query',
            name: 'batch_presence_aware',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      presence_sub: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions).',
            in: 'query',
            name: 'presence_sub',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              self: z
                .strictObject({ id: DefsUserIdSchema, name: z.string() })
                .openapi({ required: ['id', 'name'] }),
              team: z
                .strictObject({ domain: z.string(), id: DefsTeamSchema, name: z.string() })
                .openapi({ required: ['id', 'name', 'domain'] }),
              url: z.url(),
            })
            .openapi({
              description: 'Schema for successful response from rtm.connect method',
              required: ['ok', 'url', 'team', 'self'],
              title: 'rtm.connect schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                self: { id: 'U4X318ZMZ', name: 'robotoverlord' },
                team: { domain: 'slackdemo', id: 'T2U81E2FP', name: 'SlackDemo' },
                url: 'wss://...',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from rtm.connect method',
              required: ['ok', 'error'],
              title: 'rtm.connect error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['rtm:stream'] }],
})

export const getSearchMessagesRoute = createRoute({
  method: 'get',
  path: '/search.messages',
  tags: ['search'],
  description: 'Searches for messages matching a query.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/search.messages',
  },
  operationId: 'search_messages',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `search:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      count: z
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
            description: 'Pass the number of results you want per "page". Maximum of `100`.',
            in: 'query',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      highlight: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Pass a value of `true` to enable query highlight markers (see below).',
            in: 'query',
            name: 'highlight',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page: z
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
          param: { in: 'query', name: 'page', schema: { type: 'integer' }, required: false },
        }),
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return matches sorted by either `score` or `timestamp`.',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort_dir: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Change sort direction to ascending (`asc`) or descending (`desc`).',
            in: 'query',
            name: 'sort_dir',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                messages: {
                  matches: [
                    {
                      channel: {
                        id: 'C12345678',
                        is_ext_shared: false,
                        is_mpim: false,
                        is_org_shared: false,
                        is_pending_ext_shared: false,
                        is_private: false,
                        is_shared: false,
                        name: 'general',
                        pending_shared: [],
                      },
                      iid: 'cb64bdaa-c1e8-4631-8a91-0f78080113e9',
                      permalink:
                        'https://hitchhikers.slack.com/archives/C12345678/p1508284197000015',
                      team: 'T12345678',
                      text: 'The meaning of life the universe and everything is 42.',
                      ts: '1508284197.000015',
                      type: 'message',
                      user: 'U2U85N1RV',
                      username: 'roach',
                    },
                    {
                      channel: {
                        id: 'C12345678',
                        is_ext_shared: false,
                        is_mpim: false,
                        is_org_shared: false,
                        is_pending_ext_shared: false,
                        is_private: false,
                        is_shared: false,
                        name: 'random',
                        pending_shared: [],
                      },
                      iid: '9a00d3c9-bd2d-45b0-988b-6cff99ae2a90',
                      permalink:
                        'https://hitchhikers.slack.com/archives/C12345678/p1508795665000236',
                      team: 'T12345678',
                      text: 'The meaning of life the universe and everything is 101010',
                      ts: '1508795665.000236',
                      type: 'message',
                      user: '',
                      username: 'robot overlord',
                    },
                  ],
                  pagination: {
                    first: 1,
                    last: 2,
                    page: 1,
                    page_count: 1,
                    per_page: 20,
                    total_count: 2,
                  },
                  paging: { count: 20, page: 1, pages: 1, total: 2 },
                  total: 2,
                },
                ok: true,
                query: 'The meaning of life the universe and everything',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'No query passed', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['search:read'] }],
})

export const postStarsAddRoute = createRoute({
  method: 'post',
  path: '/stars.add',
  tags: ['stars'],
  description: 'Adds a star to an item.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/stars.add',
  },
  operationId: 'stars_add',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `stars:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`).',
                }),
              file: z.string().exactOptional().openapi({ description: 'File to add star to.' }),
              file_comment: z
                .string()
                .exactOptional()
                .openapi({ description: 'File comment to add star to.' }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({ description: 'Timestamp of the message to add star to.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from stars.add method',
              required: ['ok'],
              title: 'stars.add schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'message_not_found',
                'file_not_found',
                'file_comment_not_found',
                'channel_not_found',
                'no_item_specified',
                'already_starred',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from stars.add method',
              required: ['ok', 'error'],
              title: 'stars.add error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['stars:write'] }],
})

export const getStarsListRoute = createRoute({
  method: 'get',
  path: '/stars.list',
  tags: ['stars'],
  description: 'Lists stars for a user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/stars.list',
  },
  operationId: 'stars_list',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `stars:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'count', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request\'s `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.',
            in: 'query',
            name: 'cursor',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              items: z.array(
                z.unknown().superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.union([
                        z
                          .strictObject({
                            channel: DefsChannelSchema,
                            date_create: z.int(),
                            message: ObjsMessageSchema,
                            type: z.literal('message'),
                          })
                          .openapi({ required: ['type', 'channel', 'message', 'date_create'] }),
                        z
                          .strictObject({
                            date_create: z.int(),
                            file: ObjsFileSchema,
                            type: z.literal('file'),
                          })
                          .openapi({ required: ['type', 'file', 'date_create'] }),
                        z
                          .strictObject({
                            comment: ObjsCommentSchema,
                            date_create: z.int(),
                            file: ObjsFileSchema,
                            type: z.literal('file_comment'),
                          })
                          .openapi({ required: ['type', 'file', 'comment', 'date_create'] }),
                        z
                          .strictObject({
                            channel: DefsChannelSchema,
                            date_create: z.int(),
                            type: z.literal('channel'),
                          })
                          .openapi({ required: ['type', 'channel', 'date_create'] }),
                        z
                          .strictObject({
                            channel: DefsDmIdSchema,
                            date_create: z.int(),
                            type: z.literal('im'),
                          })
                          .openapi({ required: ['type', 'channel', 'date_create'] }),
                        z
                          .strictObject({
                            channel: DefsGroupIdSchema,
                            date_create: z.int(),
                            type: z.literal('group'),
                          })
                          .openapi({ required: ['type', 'channel', 'date_create'] }),
                      ])
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                }),
              ),
              ok: DefsOkTrueSchema,
              paging: ObjsPagingSchema.exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from stars.list method',
              required: ['ok', 'items'],
              title: 'stars.list schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from stars.list method',
              required: ['ok', 'error'],
              title: 'stars.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['stars:read'] }],
})

export const postStarsRemoveRoute = createRoute({
  method: 'post',
  path: '/stars.remove',
  tags: ['stars'],
  description: 'Removes a star from an item.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/stars.remove',
  },
  operationId: 'stars_remove',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `stars:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`).',
                }),
              file: z
                .string()
                .exactOptional()
                .openapi({ description: 'File to remove star from.' }),
              file_comment: z
                .string()
                .exactOptional()
                .openapi({ description: 'File comment to remove star from.' }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({ description: 'Timestamp of the message to remove star from.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from stars.remove method',
              required: ['ok'],
              title: 'stars.remove schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'bad_timestamp',
                'message_not_found',
                'file_not_found',
                'file_comment_not_found',
                'channel_not_found',
                'no_item_specified',
                'not_starred',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from stars.remove method',
              required: ['ok', 'error'],
              title: 'stars.remove error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['stars:write'] }],
})

export const getTeamAccessLogsRoute = createRoute({
  method: 'get',
  path: '/team.accessLogs',
  tags: ['team'],
  description: 'Gets the access logs for the current team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/team.accessLogs',
  },
  operationId: 'team_accessLogs',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'End of time range of logs to include in results (inclusive).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'count', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'This response demonstrates pagination and two access log entries.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              logins: z
                .array(
                  z
                    .strictObject({
                      count: z.int(),
                      country: z.string().nullable(),
                      date_first: z.int(),
                      date_last: z.int(),
                      ip: z.string().nullable(),
                      isp: z.string().nullable(),
                      region: z.string().nullable(),
                      user_agent: z.string(),
                      user_id: DefsUserIdSchema,
                      username: z.string(),
                    })
                    .openapi({
                      required: [
                        'user_id',
                        'username',
                        'date_first',
                        'date_last',
                        'count',
                        'ip',
                        'user_agent',
                        'isp',
                        'country',
                        'region',
                      ],
                    }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ok: DefsOkTrueSchema,
              paging: ObjsPagingSchema,
            })
            .openapi({
              description: 'Schema for successful response from team.accessLogs method',
              required: ['ok', 'logins', 'paging'],
              title: 'team.accessLogs schema',
            }),
          examples: {
            response: {
              value: {
                logins: [
                  {
                    count: 1,
                    country: 'US',
                    date_first: 1422922864,
                    date_last: 1422922864,
                    ip: '127.0.0.1',
                    isp: 'BigCo ISP',
                    region: 'CA',
                    user_agent:
                      'SlackWeb Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.35 Safari/537.36',
                    user_id: 'U45678',
                    username: 'alice',
                  },
                  {
                    count: 1,
                    country: 'US',
                    date_first: 1422922493,
                    date_last: 1422922493,
                    ip: '127.0.0.1',
                    isp: 'BigCo ISP',
                    region: 'CA',
                    user_agent:
                      'SlackWeb Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4',
                    user_id: 'U12345',
                    username: 'white_rabbit',
                  },
                ],
                ok: true,
                paging: { count: 100, page: 1, pages: 1, total: 2 },
              },
            },
          },
        },
      },
    },
    default: {
      description:
        'A workspace must be on a paid plan to use this method, otherwise the `paid_only` error is thrown:',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'paid_only',
                'over_pagination_limit',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from team.accessLogs method',
              required: ['ok', 'error'],
              title: 'team.accessLogs error schema',
            }),
          examples: { response: { value: { error: 'paid_only', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin'] }],
})

export const getTeamBillableInfoRoute = createRoute({
  method: 'get',
  path: '/team.billableInfo',
  tags: ['team'],
  description: 'Gets billable users information for the current team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/team.billableInfo',
  },
  operationId: 'team_billableInfo',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A user to retrieve the billable information for. Defaults to all users.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                billable_info: {
                  U02UCPE1R: { billing_active: true },
                  U02UEBSD2: { billing_active: true },
                  U0632EWRW: { billing_active: false },
                },
                ok: true,
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin'] }],
})

export const getTeamInfoRoute = createRoute({
  method: 'get',
  path: '/team.info',
  tags: ['team'],
  description: 'Gets information about the current team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/team.info',
  },
  operationId: 'team_info',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `team:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels',
            in: 'query',
            name: 'team',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, team: ObjsTeamSchema })
            .openapi({
              description: 'Schema for successful response from team.info method',
              required: ['ok', 'team'],
              title: 'team.info schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                team: {
                  domain: 'example',
                  email_domain: 'example.com',
                  enterprise_id: 'E1234A12AB',
                  enterprise_name: 'Umbrella Corporation',
                  icon: {
                    image_102: 'https://...',
                    image_132: 'https://...',
                    image_34: 'https://...',
                    image_44: 'https://...',
                    image_68: 'https://...',
                    image_88: 'https://...',
                    image_default: true,
                  },
                  id: 'T12345',
                  name: 'My Team',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from team.info method',
              required: ['ok', 'error'],
              title: 'team.info error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['team:read'] }],
})

export const getTeamIntegrationLogsRoute = createRoute({
  method: 'get',
  path: '/team.integrationLogs',
  tags: ['team'],
  description: 'Gets the integration logs for the current team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/team.integrationLogs',
  },
  operationId: 'team_integrationLogs',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `admin`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      app_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter logs to this Slack app. Defaults to all logs.',
            in: 'query',
            name: 'app_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      change_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter logs with this change type. Defaults to all logs.',
            in: 'query',
            name: 'change_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'count', schema: { type: 'string' }, required: false },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'page', schema: { type: 'string' }, required: false },
        }),
      service_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter logs to this service. Defaults to all logs.',
            in: 'query',
            name: 'service_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter logs generated by this user’s actions. Defaults to all logs.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              logs: z
                .array(
                  z
                    .strictObject({
                      admin_app_id: DefsAppIdSchema.exactOptional(),
                      app_id: DefsAppIdSchema,
                      app_type: z.string(),
                      change_type: z.string(),
                      channel: DefsChannelSchema.exactOptional(),
                      date: z.string(),
                      scope: z.string(),
                      service_id: z.string().exactOptional(),
                      service_type: z.string().exactOptional(),
                      user_id: DefsUserIdSchema,
                      user_name: z.string(),
                    })
                    .openapi({
                      required: [
                        'user_id',
                        'user_name',
                        'date',
                        'change_type',
                        'app_type',
                        'app_id',
                        'scope',
                      ],
                    }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ok: DefsOkTrueSchema,
              paging: ObjsPagingSchema,
            })
            .openapi({
              description: 'Schema for successful response from team.integrationLogs method',
              required: ['ok', 'logs', 'paging'],
              title: 'team.integrationLogs schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from team.integrationLogs method',
              required: ['ok', 'error'],
              title: 'team.integrationLogs error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['admin'] }],
})

export const getTeamProfileGetRoute = createRoute({
  method: 'get',
  path: '/team.profile.get',
  tags: ['team.profile', 'team'],
  description: "Retrieve a team's profile.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/team.profile.get',
  },
  operationId: 'team_profile_get',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users.profile:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      visibility: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by visibility.',
            in: 'query',
            name: 'visibility',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              profile: z
                .strictObject({
                  fields: z.array(ObjsTeamProfileFieldSchema).superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  }),
                })
                .openapi({ required: ['fields'] }),
            })
            .openapi({
              description: 'Schema for successful response from team.profile.get method',
              required: ['ok', 'profile'],
              title: 'team.profile.get success schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                profile: {
                  fields: [
                    {
                      hint: 'Enter the extension to reach your desk',
                      id: 'Xf06054AAA',
                      is_hidden: 1,
                      label: 'Phone extension',
                      options: null,
                      ordering: 0,
                      possible_values: null,
                      type: 'text',
                    },
                    {
                      hint: 'When you were born',
                      id: 'Xf06054BBB',
                      label: 'Date of birth',
                      options: null,
                      ordering: 1,
                      possible_values: null,
                      type: 'date',
                    },
                    {
                      hint: 'Enter a link to your Facebook profile',
                      id: 'Xf06054CCC',
                      label: 'Facebook',
                      options: null,
                      ordering: 2,
                      possible_values: null,
                      type: 'link',
                    },
                    {
                      hint: 'Hogwarts, obviously',
                      id: 'Xf06054DDD',
                      label: 'House',
                      options: null,
                      ordering: 3,
                      possible_values: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
                      type: 'options_list',
                    },
                    {
                      hint: 'Office location (LDAP)',
                      id: 'Xf06054EEE',
                      label: 'Location',
                      options: { is_protected: 1 },
                      ordering: 4,
                      possible_values: null,
                      type: 'text',
                    },
                    {
                      hint: 'The boss',
                      id: 'Xf06054FFF',
                      label: 'Manager',
                      options: null,
                      ordering: 5,
                      possible_values: null,
                      type: 'user',
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_typ',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeou',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from team.profile.get method',
              required: ['ok', 'error'],
              title: 'team.profile.get error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users.profile:read'] }],
})

export const postUsergroupsCreateRoute = createRoute({
  method: 'post',
  path: '/usergroups.create',
  tags: ['usergroups'],
  description: 'Create a User Group',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.create',
  },
  operationId: 'usergroups_create',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channels: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated string of encoded channel IDs for which the User Group uses as a default.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A short description of the User Group.' }),
              handle: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A mention handle. Must be unique among channels, users and User Groups.',
                }),
              include_count: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Include the number of users in each User Group.' }),
              name: z
                .string()
                .openapi({
                  description: 'A name for the User Group. Must be unique among User Groups.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, usergroup: ObjsSubteamSchema })
            .openapi({
              description: 'Schema for successful response from usergroups.create method',
              required: ['ok', 'usergroup'],
              title: 'usergroups.create schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'permission_denied',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.create method',
              required: ['ok', 'error'],
              title: 'usergroups.create error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:write'] }],
})

export const postUsergroupsDisableRoute = createRoute({
  method: 'post',
  path: '/usergroups.disable',
  tags: ['usergroups'],
  description: 'Disable an existing User Group',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.disable',
  },
  operationId: 'usergroups_disable',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              include_count: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Include the number of users in the User Group.' }),
              usergroup: z
                .string()
                .openapi({ description: 'The encoded ID of the User Group to disable.' }),
            })
            .openapi({ required: ['usergroup'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, usergroup: ObjsSubteamSchema })
            .openapi({
              description: 'Schema for successful response from usergroups.disable method',
              required: ['ok', 'usergroup'],
              title: 'usergroups.disable schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'permission_denied',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.disable method',
              required: ['ok', 'error'],
              title: 'usergroups.disable error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:write'] }],
})

export const postUsergroupsEnableRoute = createRoute({
  method: 'post',
  path: '/usergroups.enable',
  tags: ['usergroups'],
  description: 'Enable a User Group',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.enable',
  },
  operationId: 'usergroups_enable',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              include_count: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Include the number of users in the User Group.' }),
              usergroup: z
                .string()
                .openapi({ description: 'The encoded ID of the User Group to enable.' }),
            })
            .openapi({ required: ['usergroup'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, usergroup: ObjsSubteamSchema })
            .openapi({
              description: 'Schema for successful response from usergroups.enable method',
              required: ['ok', 'usergroup'],
              title: 'usergroups.enable schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_require',
                'fatal_error',
                'missing_charset',
                'superfluous_charset',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.enable method',
              required: ['ok', 'error'],
              title: 'usergroups.enable error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:write'] }],
})

export const getUsergroupsListRoute = createRoute({
  method: 'get',
  path: '/usergroups.list',
  tags: ['usergroups'],
  description: 'List all User Groups for a team',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.list',
  },
  operationId: 'usergroups_list',
  request: {
    query: z.object({
      include_users: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the list of users for each User Group.',
            in: 'query',
            name: 'include_users',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include_count: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the number of users in each User Group.',
            in: 'query',
            name: 'include_count',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include disabled User Groups.',
            in: 'query',
            name: 'include_disabled',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, usergroups: z.array(ObjsSubteamSchema) })
            .openapi({
              description: 'Schema for successful response from usergroups.list method',
              required: ['ok', 'usergroups'],
              title: 'usergroups.list schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                usergroups: [
                  {
                    auto_type: 'admin',
                    created_by: 'USLACKBOT',
                    date_create: 1446598059,
                    date_delete: 0,
                    date_update: 1446670362,
                    deleted_by: null,
                    description: 'A group of all Administrators on your team.',
                    handle: 'admins',
                    id: 'S0614TZR7',
                    is_external: false,
                    is_usergroup: true,
                    name: 'Team Admins',
                    prefs: { channels: [], groups: [] },
                    team_id: 'T060RNRCH',
                    updated_by: 'U060RNRCZ',
                    user_count: '2',
                  },
                  {
                    auto_type: 'owner',
                    created_by: 'USLACKBOT',
                    date_create: 1446678371,
                    date_delete: 0,
                    date_update: 1446678371,
                    deleted_by: null,
                    description: 'A group of all Owners on your team.',
                    handle: 'owners',
                    id: 'S06158AV7',
                    is_external: false,
                    is_usergroup: true,
                    name: 'Team Owners',
                    prefs: { channels: [], groups: [] },
                    team_id: 'T060RNRCH',
                    updated_by: 'USLACKBOT',
                    user_count: '1',
                  },
                  {
                    auto_type: null,
                    created_by: 'U060RNRCZ',
                    date_create: 1446746793,
                    date_delete: 1446748865,
                    date_update: 1446747767,
                    deleted_by: null,
                    description: 'Marketing gurus, PR experts and product advocates.',
                    handle: 'marketing-team',
                    id: 'S0615G0KT',
                    is_external: false,
                    is_usergroup: true,
                    name: 'Marketing Team',
                    prefs: { channels: [], groups: [] },
                    team_id: 'T060RNRCH',
                    updated_by: 'U060RNRCZ',
                    user_count: '0',
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_require',
                'fatal_error',
                'missing_charset',
                'superfluous_charset',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.list method',
              required: ['ok', 'error'],
              title: 'usergroups.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:read'] }],
})

export const postUsergroupsUpdateRoute = createRoute({
  method: 'post',
  path: '/usergroups.update',
  tags: ['usergroups'],
  description: 'Update an existing User Group',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.update',
  },
  operationId: 'usergroups_update',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              channels: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated string of encoded channel IDs for which the User Group uses as a default.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A short description of the User Group.' }),
              handle: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A mention handle. Must be unique among channels, users and User Groups.',
                }),
              include_count: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Include the number of users in the User Group.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A name for the User Group. Must be unique among User Groups.',
                }),
              usergroup: z
                .string()
                .openapi({ description: 'The encoded ID of the User Group to update.' }),
            })
            .openapi({ required: ['usergroup'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, usergroup: ObjsSubteamSchema })
            .openapi({
              description: 'Schema for successful response from usergroups.update method',
              required: ['ok', 'usergroup'],
              title: 'usergroups.update schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                usergroup: {
                  auto_type: null,
                  created_by: 'U060R4BJ4',
                  date_create: 1447096577,
                  date_delete: 0,
                  date_update: 1447102109,
                  deleted_by: null,
                  description: 'Marketing gurus, PR experts and product advocates.',
                  handle: 'marketing-team',
                  id: 'S0616NG6M',
                  is_external: false,
                  is_usergroup: true,
                  name: 'Marketing Team',
                  prefs: { channels: [], groups: [] },
                  team_id: 'T060R4BHN',
                  updated_by: 'U060R4BJ4',
                  user_count: 1,
                  users: ['U060R4BJ4', 'U060RNRCZ'],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'permission_denied',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_require',
                'fatal_error',
                'missing_charset',
                'superfluous_charset',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.update method',
              required: ['ok', 'error'],
              title: 'usergroups.update error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:write'] }],
})

export const getUsergroupsUsersListRoute = createRoute({
  method: 'get',
  path: '/usergroups.users.list',
  tags: ['usergroups.users', 'usergroups'],
  description: 'List all users in a User Group',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.users.list',
  },
  operationId: 'usergroups_users_list',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include_disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Allow results that involve disabled User Groups.',
            in: 'query',
            name: 'include_disabled',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      usergroup: z
        .string()
        .openapi({
          param: {
            description: 'The encoded ID of the User Group to update.',
            in: 'query',
            name: 'usergroup',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standard success response when used with a user token',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, users: z.array(DefsUserIdSchema) })
            .openapi({
              description: 'Schema for successful response from usergroups.users.list method',
              required: ['ok', 'users'],
              title: 'usergroups.users.list schema',
            }),
          examples: { response: { value: { ok: true, users: ['U060R4BJ4', 'W123A4BC5'] } } },
        },
      },
    },
    default: {
      description: 'Standard failure response when used with an invalid token',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_require',
                'fatal_error',
                'missing_charset',
                'superfluous_charset',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.users.list method',
              required: ['ok', 'error'],
              title: 'usergroups.users.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:read'] }],
})

export const postUsergroupsUsersUpdateRoute = createRoute({
  method: 'post',
  path: '/usergroups.users.update',
  tags: ['usergroups.users', 'usergroups'],
  description: 'Update the list of users for a User Group',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/usergroups.users.update',
  },
  operationId: 'usergroups_users_update',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `usergroups:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              include_count: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Include the number of users in the User Group.' }),
              usergroup: z
                .string()
                .openapi({ description: 'The encoded ID of the User Group to update.' }),
              users: z
                .string()
                .openapi({
                  description:
                    'A comma separated string of encoded user IDs that represent the entire list of users for the User Group.',
                }),
            })
            .openapi({ required: ['usergroup', 'users'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, usergroup: ObjsSubteamSchema })
            .openapi({
              description: 'Schema for successful response from usergroups.users.update method',
              required: ['ok', 'usergroup'],
              title: 'usergroups.users.update schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                usergroup: {
                  auto_type: null,
                  created_by: 'U060R4BJ4',
                  date_create: 1447096577,
                  date_delete: 0,
                  date_update: 1447102109,
                  deleted_by: null,
                  description: 'Marketing gurus, PR experts and product advocates.',
                  handle: 'marketing-team',
                  id: 'S0616NG6M',
                  is_external: false,
                  is_usergroup: true,
                  name: 'Marketing Team',
                  prefs: { channels: [], groups: [] },
                  team_id: 'T060R4BHN',
                  updated_by: 'U060R4BJ4',
                  user_count: 1,
                  users: ['U060R4BJ4', 'U060RNRCZ'],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'permission_denied',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'user_is_restricted',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_require',
                'fatal_error',
                'missing_charset',
                'superfluous_charset',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from usergroups.users.update method',
              required: ['ok', 'error'],
              title: 'usergroups.users.update error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['usergroups:write'] }],
})

export const getUsersConversationsRoute = createRoute({
  method: 'get',
  path: '/users.conversations',
  tags: ['users'],
  description: 'List conversations the calling user may access.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.conversations',
  },
  operationId: 'users_conversations',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `conversations:read`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership.",
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`',
            in: 'query',
            name: 'types',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exclude_archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to `true` to exclude archived channels from the list',
            in: 'query',
            name: 'exclude_archived',
            schema: { type: 'boolean' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Typical success response with only public channels. Note how `num_members` and `is_member` are not returned like typical `conversations` objects.',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              channels: z.array(ObjsConversationSchema).superRefine((items, ctx) => {
                const seen = new Map()
                for (const [i, val] of items.entries()) {
                  const key = JSON.stringify(val)
                  if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                  else seen.set(key, i)
                }
              }),
              ok: DefsOkTrueSchema,
              response_metadata: z
                .strictObject({ next_cursor: z.string() })
                .exactOptional()
                .openapi({ required: ['next_cursor'] }),
            })
            .openapi({
              description:
                'Schema for successful response from users.conversations method. Returned conversation objects do not include `num_members` or `is_member`',
              required: ['ok', 'channels'],
              title: 'users.conversations success schema',
            }),
          examples: {
            response: {
              value: {
                channels: [
                  {
                    created: 1449252889,
                    creator: 'U012A3CDE',
                    id: 'C012AB3CD',
                    is_archived: false,
                    is_channel: true,
                    is_ext_shared: false,
                    is_general: true,
                    is_group: false,
                    is_im: false,
                    is_mpim: false,
                    is_org_shared: false,
                    is_pending_ext_shared: false,
                    is_private: false,
                    is_shared: false,
                    name: 'general',
                    name_normalized: 'general',
                    pending_shared: [],
                    previous_names: [],
                    purpose: {
                      creator: '',
                      last_set: 0,
                      value:
                        'This channel is for team-wide communication and announcements. All team members are in this channel.',
                    },
                    topic: {
                      creator: '',
                      last_set: 0,
                      value: 'Company-wide announcements and work-based matters',
                    },
                    unlinked: 0,
                  },
                  {
                    created: 1449252889,
                    creator: 'U061F7AUR',
                    id: 'C061EG9T2',
                    is_archived: false,
                    is_channel: true,
                    is_ext_shared: false,
                    is_general: false,
                    is_group: false,
                    is_im: false,
                    is_mpim: false,
                    is_org_shared: false,
                    is_pending_ext_shared: false,
                    is_private: false,
                    is_shared: false,
                    name: 'random',
                    name_normalized: 'random',
                    pending_shared: [],
                    previous_names: [],
                    purpose: {
                      creator: '',
                      last_set: 0,
                      value:
                        "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
                    },
                    topic: {
                      creator: '',
                      last_set: 0,
                      value: 'Non-work banter and water cooler conversation',
                    },
                    unlinked: 0,
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: 'dGVhbTpDMDYxRkE1UEI=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'method_not_supported_for_channel_type',
                'missing_scope',
                'invalid_types',
                'invalid_cursor',
                'invalid_limit',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.conversations method',
              required: ['ok', 'error'],
              title: 'users.conversations error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] }],
})

export const postUsersDeletePhotoRoute = createRoute({
  method: 'post',
  path: '/users.deletePhoto',
  tags: ['users'],
  description: 'Delete the user profile photo',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.deletePhoto',
  },
  operationId: 'users_deletePhoto',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `users.profile:write`',
                }),
            })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from users.deletePhoto method',
              required: ['ok'],
              title: 'users.deletePhoto schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.deletePhoto method',
              required: ['ok', 'error'],
              title: 'users.deletePhoto error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users.profile:write'] }],
})

export const getUsersGetPresenceRoute = createRoute({
  method: 'get',
  path: '/users.getPresence',
  tags: ['users'],
  description: 'Gets user presence information.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.getPresence',
  },
  operationId: 'users_getPresence',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User to get presence info on. Defaults to the authed user.',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'When requesting information for a different user, this method just returns the current presence (either `active` or `away`).',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              auto_away: z.boolean().exactOptional(),
              connection_count: z.int().exactOptional(),
              last_activity: z.int().exactOptional(),
              manual_away: z.boolean().exactOptional(),
              ok: DefsOkTrueSchema,
              online: z.boolean().exactOptional(),
              presence: z.string(),
            })
            .openapi({
              description:
                'Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65',
              required: ['ok', 'presence'],
              title: 'API method: users.getPresence',
            }),
          examples: { response: { value: { ok: true, presence: 'active' } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string(), ok: DefsOkFalseSchema })
            .catchall(z.object({}))
            .openapi({
              description: 'Schema for error response users.getPresence method',
              required: ['ok', 'error'],
              title: 'users.counts error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:read'] }],
})

export const getUsersIdentityRoute = createRoute({
  method: 'get',
  path: '/users.identity',
  tags: ['users'],
  description: "Get a user's identity.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.identity',
  },
  operationId: 'users_identity',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `identity.basic`',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'You will receive at a minimum the following information:',
      content: {
        'application/json': {
          schema: z
            .unknown()
            .superRefine((val, ctx) => {
              if (Array.isArray(val)) {
                {
                  const Schema = z.union([
                    z
                      .strictObject({
                        ok: DefsOkTrueSchema,
                        team: z.strictObject({ id: DefsTeamSchema }).openapi({ required: ['id'] }),
                        user: z
                          .strictObject({ id: DefsUserIdSchema, name: z.string() })
                          .openapi({ required: ['name', 'id'] }),
                      })
                      .openapi({
                        description: "Schema for 'identity.basic' scope",
                        required: ['ok', 'user', 'team'],
                      }),
                    z
                      .strictObject({
                        ok: DefsOkTrueSchema,
                        team: z.strictObject({ id: DefsTeamSchema }).openapi({ required: ['id'] }),
                        user: z
                          .strictObject({
                            email: z.email(),
                            id: DefsUserIdSchema,
                            name: z.string(),
                          })
                          .openapi({ required: ['name', 'id', 'email'] }),
                      })
                      .openapi({
                        description: "Schema for 'identity.basic,identity.email' scopes",
                        required: ['ok', 'user', 'team'],
                      }),
                    z
                      .strictObject({
                        ok: DefsOkTrueSchema,
                        team: z.strictObject({ id: DefsTeamSchema }).openapi({ required: ['id'] }),
                        user: z
                          .strictObject({
                            id: DefsUserIdSchema,
                            image_192: z.url(),
                            image_24: z.url(),
                            image_32: z.url(),
                            image_48: z.url(),
                            image_512: z.url(),
                            image_72: z.url(),
                            name: z.string(),
                          })
                          .openapi({
                            required: [
                              'name',
                              'id',
                              'image_24',
                              'image_32',
                              'image_48',
                              'image_72',
                              'image_192',
                              'image_512',
                            ],
                          }),
                      })
                      .openapi({
                        description: "Schema for 'identity.basic,identity.avatar' scopes",
                        required: ['ok', 'user', 'team'],
                      }),
                    z
                      .strictObject({
                        ok: DefsOkTrueSchema,
                        team: z
                          .strictObject({
                            domain: z.string(),
                            id: DefsTeamSchema,
                            image_102: z.url(),
                            image_132: z.url(),
                            image_230: z.url(),
                            image_34: z.url(),
                            image_44: z.url(),
                            image_68: z.url(),
                            image_88: z.url(),
                            image_default: z.boolean(),
                            name: z.string(),
                          })
                          .openapi({
                            required: [
                              'id',
                              'name',
                              'domain',
                              'image_34',
                              'image_44',
                              'image_68',
                              'image_88',
                              'image_102',
                              'image_132',
                              'image_230',
                              'image_default',
                            ],
                          }),
                        user: z
                          .strictObject({ id: DefsUserIdSchema, name: z.string() })
                          .openapi({ required: ['name', 'id'] }),
                      })
                      .openapi({
                        description: "Schema for 'identity.basic,identity.team' scopes",
                        required: ['ok', 'user', 'team'],
                      }),
                  ])
                  for (let i = 0; i < val.length; i++) {
                    if (!Schema.safeParse(val[i]).success) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                }
              }
            })
            .openapi({
              description: 'Schema for successful response from users.identity method',
              title: 'users.identity schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                team: { id: 'T0G9PQBBK' },
                user: { id: 'U0G9QF9C6', name: 'Sonny Whether' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.identity method',
              required: ['ok', 'error'],
              title: 'users.identity error schema',
            }),
          examples: { response: { value: { error: 'account_inactive', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['identity.basic'] }],
})

export const getUsersInfoRoute = createRoute({
  method: 'get',
  path: '/users.info',
  tags: ['users'],
  description: 'Gets information about a user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.info',
  },
  operationId: 'users_info',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include_locale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this to `true` to receive the locale for this user. Defaults to `false`',
            in: 'query',
            name: 'include_locale',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User to get info on',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema, user: ObjsUserSchema })
            .openapi({
              description: 'Schema for successful response from users.info method',
              required: ['ok', 'user'],
              title: 'users.info success schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                user: {
                  color: '9f69e7',
                  deleted: false,
                  has_2fa: false,
                  id: 'W012A3CDE',
                  is_admin: true,
                  is_app_user: false,
                  is_bot: false,
                  is_owner: false,
                  is_primary_owner: false,
                  is_restricted: false,
                  is_ultra_restricted: false,
                  name: 'spengler',
                  profile: {
                    avatar_hash: 'ge3b51ca72de',
                    display_name: 'spengler',
                    display_name_normalized: 'spengler',
                    email: 'spengler@ghostbusters.example.com',
                    image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_original: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    real_name: 'Egon Spengler',
                    real_name_normalized: 'Egon Spengler',
                    status_emoji: ':books:',
                    status_text: 'Print is dead',
                    team: 'T012AB3C4',
                  },
                  real_name: 'Egon Spengler',
                  team_id: 'T012AB3C4',
                  tz: 'America/Los_Angeles',
                  tz_label: 'Pacific Daylight Time',
                  tz_offset: -25200,
                  updated: 1502138686,
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z.string().exactOptional(),
              error: z.enum([
                'user_not_found',
                'user_not_visible',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.info method',
              required: ['ok', 'error'],
              title: 'users.info error schema',
            }),
          examples: { response: { value: { error: 'user_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:read'] }],
})

export const getUsersListRoute = createRoute({
  method: 'get',
  path: '/users.list',
  tags: ['users'],
  description: 'Lists all users in a Slack team.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.list',
  },
  operationId: 'users_list',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:read`',
            in: 'query',
            name: 'token',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors.",
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request\'s `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_locale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set this to `true` to receive the locale for users. Defaults to `false`',
            in: 'query',
            name: 'include_locale',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              cache_ts: z.int(),
              members: z
                .array(ObjsUserSchema)
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ok: DefsOkTrueSchema,
              response_metadata: ObjsResponseMetadataSchema.exactOptional(),
            })
            .openapi({
              description: 'Schema for successful response from users.list method',
              required: ['ok', 'members', 'cache_ts'],
              title: 'users.list schema',
            }),
          examples: {
            response: {
              value: {
                cache_ts: 1498777272,
                members: [
                  {
                    color: '9f69e7',
                    deleted: false,
                    has_2fa: false,
                    id: 'W012A3CDE',
                    is_admin: true,
                    is_app_user: false,
                    is_bot: false,
                    is_owner: false,
                    is_primary_owner: false,
                    is_restricted: false,
                    is_ultra_restricted: false,
                    name: 'spengler',
                    profile: {
                      avatar_hash: 'ge3b51ca72de',
                      display_name: 'spengler',
                      display_name_normalized: 'spengler',
                      email: 'spengler@ghostbusters.example.com',
                      image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                      image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                      image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                      image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                      image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                      image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                      real_name: 'Egon Spengler',
                      real_name_normalized: 'Egon Spengler',
                      status_emoji: ':books:',
                      status_text: 'Print is dead',
                      team: 'T012AB3C4',
                    },
                    real_name: 'spengler',
                    team_id: 'T012AB3C4',
                    tz: 'America/Los_Angeles',
                    tz_label: 'Pacific Daylight Time',
                    tz_offset: -25200,
                    updated: 1502138686,
                  },
                  {
                    color: '9f69e7',
                    deleted: false,
                    has_2fa: false,
                    id: 'W07QCRPA4',
                    is_admin: true,
                    is_bot: false,
                    is_owner: false,
                    is_primary_owner: false,
                    is_restricted: false,
                    is_ultra_restricted: false,
                    name: 'glinda',
                    profile: {
                      avatar_hash: '8fbdd10b41c6',
                      display_name: 'Glinda the Fairly Good',
                      display_name_normalized: 'Glinda the Fairly Good',
                      email: 'glenda@south.oz.coven',
                      first_name: 'Glinda',
                      image_1024: 'https://a.slack-edge.com...png',
                      image_192: 'https://a.slack-edge.com...png',
                      image_24: 'https://a.slack-edge.com...png',
                      image_32: 'https://a.slack-edge.com...png',
                      image_48: 'https://a.slack-edge.com...png',
                      image_512: 'https://a.slack-edge.com...png',
                      image_72: 'https://a.slack-edge.com...png',
                      image_original: 'https://a.slack-edge.com...png',
                      last_name: 'Southgood',
                      phone: '',
                      real_name: 'Glinda Southgood',
                      real_name_normalized: 'Glinda Southgood',
                      skype: '',
                      title: 'Glinda the Good',
                    },
                    real_name: 'Glinda Southgood',
                    team_id: 'T0G9PQBBK',
                    tz: 'America/Los_Angeles',
                    tz_label: 'Pacific Daylight Time',
                    tz_offset: -25200,
                    updated: 1480527098,
                  },
                ],
                ok: true,
                response_metadata: { next_cursor: 'dXNlcjpVMEc5V0ZYTlo=' },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'limit_required',
                'invalid_cursor',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.list method',
              required: ['ok', 'error'],
              title: 'users.list error schema',
            }),
          examples: { response: { value: { error: 'invalid_cursor', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:read'] }],
})

export const getUsersLookupByEmailRoute = createRoute({
  method: 'get',
  path: '/users.lookupByEmail',
  tags: ['users'],
  description: 'Find a user with an email address.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.lookupByEmail',
  },
  operationId: 'users_lookupByEmail',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:read.email`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            description: 'An email address belonging to a user in the workspace',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema, user: ObjsUserSchema })
            .openapi({
              description: 'Schema for successful response from users.lookupByEmail method',
              required: ['ok', 'user'],
              title: 'users.lookupByEmail success schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                user: {
                  color: '9f69e7',
                  deleted: false,
                  has_2fa: false,
                  id: 'W012A3CDE',
                  is_admin: true,
                  is_app_user: false,
                  is_bot: false,
                  is_owner: false,
                  is_primary_owner: false,
                  is_restricted: false,
                  is_ultra_restricted: false,
                  name: 'spengler',
                  profile: {
                    avatar_hash: 'ge3b51ca72de',
                    display_name: 'spengler',
                    display_name_normalized: 'spengler',
                    email: 'spengler@ghostbusters.example.com',
                    image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                    real_name: 'Egon Spengler',
                    real_name_normalized: 'Egon Spengler',
                    status_emoji: ':books:',
                    status_text: 'Print is dead',
                    team: 'T012AB3C4',
                  },
                  real_name: 'Egon Spengler',
                  team_id: 'T012AB3C4',
                  tz: 'America/Los_Angeles',
                  tz_label: 'Pacific Daylight Time',
                  tz_offset: -25200,
                  updated: 1502138686,
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'users_not_found',
                'enterprise_is_restricted',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'no_permission',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.lookupByEmail method',
              required: ['ok', 'error'],
              title: 'users.lookupByEmail error schema',
            }),
          examples: { response: { value: { error: 'users_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:read.email'] }],
})

export const getUsersProfileGetRoute = createRoute({
  method: 'get',
  path: '/users.profile.get',
  tags: ['users.profile', 'users'],
  description: "Retrieves a user's profile information.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.profile.get',
  },
  operationId: 'users_profile_get',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users.profile:read`',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include_labels: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include labels for each ID in custom profile fields',
            in: 'query',
            name: 'include_labels',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User to retrieve profile info for',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema, profile: ObjsUserProfileSchema })
            .openapi({
              description: 'Schema for successful response from users.profile.get method',
              required: ['ok', 'profile'],
              title: 'users.profile.get schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                profile: {
                  avatar_hash: 'ge3b51ca72de',
                  display_name: 'spengler',
                  display_name_normalized: 'spengler',
                  email: 'spengler@ghostbusters.example.com',
                  image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_original: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  real_name: 'Egon Spengler',
                  real_name_normalized: 'Egon Spengler',
                  status_emoji: ':books:',
                  status_expiration: 0,
                  status_text: 'Print is dead',
                  team: 'T012AB3C4',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'user_not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.profile.get method',
              required: ['ok', 'error'],
              title: 'users.profile.get error schema',
            }),
          examples: { response: { value: { error: 'user_not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users.profile:read'] }],
})

export const postUsersProfileSetRoute = createRoute({
  method: 'post',
  path: '/users.profile.set',
  tags: ['users.profile', 'users'],
  description: 'Set the profile information for a user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.profile.set',
  },
  operationId: 'users_profile_set',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users.profile:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of a single key to set. Usable only if `profile` is not passed.',
                }),
              profile: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.',
                }),
              user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID of user to change. This argument may only be specified by team admins on paid teams.',
                }),
              value: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Value to set a single key to. Usable only if `profile` is not passed.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              email_pending: z.email().exactOptional(),
              ok: DefsOkTrueSchema,
              profile: ObjsUserProfileSchema,
              username: z.string(),
            })
            .openapi({
              description: 'Schema for successful response from users.profile.set method',
              required: ['ok', 'username', 'profile'],
              title: 'users.profile.set schema',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                profile: {
                  avatar_hash: 'ge3b51ca72de',
                  display_name: 'spengler',
                  display_name_normalized: 'spengler',
                  email: 'spengler@ghostbusters.example.com',
                  image_192: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_24: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_32: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_48: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_512: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  image_72: 'https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg',
                  real_name: 'Egon Spengler',
                  real_name_normalized: 'Egon Spengler',
                  status_emoji: ':books:',
                  status_expiration: 0,
                  status_text: 'Print is dead',
                  team: 'T012AB3C4',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'reserved_name',
                'invalid_profile',
                'profile_set_failed',
                'not_admin',
                'not_app_admin',
                'cannot_update_admin_user',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.profile.set method',
              required: ['ok', 'error'],
              title: 'users.profile.set error schema',
            }),
          examples: { response: { value: { error: 'invalid_profile', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users.profile:write'] }],
})

export const postUsersSetActiveRoute = createRoute({
  method: 'post',
  path: '/users.setActive',
  tags: ['users'],
  description: 'Marked a user as active. Deprecated and non-functional.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.setActive',
  },
  operationId: 'users_setActive',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from users.setActive method',
              required: ['ok'],
              title: 'users.setActive schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'ekm_access_denied',
                'missing_scope',
                'invalid_arguments',
                'invalid_arg_name',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'request_timeout',
                'fatal_error',
                'internal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.setActive method',
              required: ['ok', 'error'],
              title: 'users.setActive error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:write'] }],
})

export const postUsersSetPhotoRoute = createRoute({
  method: 'post',
  path: '/users.setPhoto',
  tags: ['users'],
  description: 'Set the user profile photo',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.setPhoto',
  },
  operationId: 'users_setPhoto',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              crop_w: z
                .string()
                .exactOptional()
                .openapi({ description: 'Width/height of crop box (always square)' }),
              crop_x: z
                .string()
                .exactOptional()
                .openapi({ description: 'X coordinate of top-left corner of crop box' }),
              crop_y: z
                .string()
                .exactOptional()
                .openapi({ description: 'Y coordinate of top-left corner of crop box' }),
              image: z
                .string()
                .exactOptional()
                .openapi({ description: 'File contents via `multipart/form-data`.' }),
              token: z
                .string()
                .openapi({
                  description: 'Authentication token. Requires scope: `users.profile:write`',
                }),
            })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ok: DefsOkTrueSchema,
              profile: z
                .strictObject({
                  avatar_hash: z.string().regex(/^[0-9a-f]{12}$/),
                  image_1024: z.url(),
                  image_192: z.url(),
                  image_24: z.url(),
                  image_32: z.url(),
                  image_48: z.url(),
                  image_512: z.url(),
                  image_72: z.url(),
                  image_original: z.url(),
                })
                .openapi({
                  required: [
                    'image_24',
                    'image_32',
                    'image_48',
                    'image_72',
                    'image_192',
                    'image_512',
                    'image_1024',
                    'image_original',
                    'avatar_hash',
                  ],
                }),
            })
            .openapi({
              description: 'Schema for successful response from users.setPhoto method',
              required: ['ok', 'profile'],
              title: 'users.setPhoto schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              debug_step: z
                .string()
                .exactOptional()
                .openapi({ description: 'possibly DEV/QA only' }),
              dims: z.string().exactOptional().openapi({ description: 'possibly DEV/QA only' }),
              error: z.enum([
                'bad_image',
                'too_large',
                'too_many_frames',
                'not_found',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'user_is_bot',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
              time_ident: z.int().exactOptional().openapi({ description: 'possibly DEV/QA only' }),
            })
            .openapi({
              description: 'Schema for error response from users.setPhoto method',
              required: ['ok', 'error'],
              title: 'users.setPhoto error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users.profile:write'] }],
})

export const postUsersSetPresenceRoute = createRoute({
  method: 'post',
  path: '/users.setPresence',
  tags: ['users'],
  description: 'Manually sets user presence.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/users.setPresence',
  },
  operationId: 'users_setPresence',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `users:write`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ presence: z.string().openapi({ description: 'Either `auto` or `away`' }) })
            .openapi({ required: ['presence'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ ok: DefsOkTrueSchema })
            .openapi({
              description: 'Schema for successful response from users.setPresence method',
              required: ['ok'],
              title: 'users.setPresence schema',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callstack: z
                .string()
                .exactOptional()
                .openapi({ description: 'Note: PHP callstack is only visible in dev/qa' }),
              error: z.enum([
                'invalid_presence',
                'not_authed',
                'invalid_auth',
                'account_inactive',
                'token_revoked',
                'no_permission',
                'org_login_required',
                'invalid_arg_name',
                'invalid_array_arg',
                'invalid_charset',
                'invalid_form_data',
                'invalid_post_type',
                'missing_post_type',
                'team_added_to_org',
                'invalid_json',
                'json_not_object',
                'request_timeout',
                'upgrade_required',
                'fatal_error',
              ]),
              ok: DefsOkFalseSchema,
            })
            .openapi({
              description: 'Schema for error response from users.setPresence method',
              required: ['ok', 'error'],
              title: 'users.setPresence error schema',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['users:write'] }],
})

export const getViewsOpenRoute = createRoute({
  method: 'get',
  path: '/views.open',
  tags: ['views'],
  description: 'Open a view for a user.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/views.open',
  },
  operationId: 'views_open',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      trigger_id: z
        .string()
        .openapi({
          param: {
            description: 'Exchange a trigger to post to the user.',
            in: 'query',
            name: 'trigger_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      view: z
        .string()
        .openapi({
          param: {
            description:
              'A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.',
            in: 'query',
            name: 'view',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response includes the opened view payload.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                view: {
                  app_id: 'AA4928AQ',
                  blocks: [
                    {
                      block_id: 'a_block_id',
                      element: { action_id: 'an_action_id', type: 'plain_text_input' },
                      label: { emoji: true, text: 'A simple label', type: 'plain_text' },
                      optional: false,
                      type: 'input',
                    },
                  ],
                  bot_id: 'BA13894H',
                  callback_id: 'identify_your_modals',
                  clear_on_close: false,
                  external_id: '',
                  hash: '156772938.1827394',
                  id: 'VMHU10V25',
                  notify_on_close: false,
                  private_metadata: 'Shh it is a secret',
                  root_view_id: 'VMHU10V25',
                  state: { values: {} },
                  submit: { text: 'Create', type: 'plain_text' },
                  team_id: 'T8N4K1JN',
                  title: { text: 'Quite a plain modal', type: 'plain_text' },
                  type: 'modal',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response, before getting to any possible validation errors.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: {
            response: {
              value: {
                error: 'invalid_arguments',
                ok: false,
                response_metadata: { messages: ['invalid `trigger_id`'] },
              },
            },
          },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getViewsPublishRoute = createRoute({
  method: 'get',
  path: '/views.publish',
  tags: ['views'],
  description: 'Publish a static view for a User.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/views.publish',
  },
  operationId: 'views_publish',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: '`id` of the user you want publish a view to.',
            in: 'query',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      view: z
        .string()
        .openapi({
          param: {
            description:
              'A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.',
            in: 'query',
            name: 'view',
            required: true,
            schema: { type: 'string' },
          },
        }),
      hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string that represents view state to protect against possible race conditions.',
            in: 'query',
            name: 'hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response includes the published view payload.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                view: {
                  app_id: 'AA4928AQ',
                  blocks: [
                    {
                      block_id: '2WGp9',
                      text: {
                        text: 'A simple section with some sample sentence.',
                        type: 'mrkdwn',
                        verbatim: false,
                      },
                      type: 'section',
                    },
                  ],
                  bot_id: 'BA13894H',
                  callback_id: 'identify_your_home_tab',
                  clear_on_close: false,
                  close: null,
                  external_id: '',
                  hash: '156772938.1827394',
                  id: 'VMHU10V25',
                  notify_on_close: false,
                  previous_view_id: null,
                  private_metadata: 'Shh it is a secret',
                  root_view_id: 'VMHU10V25',
                  state: { values: {} },
                  submit: null,
                  team_id: 'T8N4K1JN',
                  type: 'home',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response, before getting to any possible validation errors.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: {
            response: {
              value: {
                error: 'invalid_arguments',
                ok: false,
                response_metadata: { messages: ['invalid `user_id`'] },
              },
            },
          },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getViewsPushRoute = createRoute({
  method: 'get',
  path: '/views.push',
  tags: ['views'],
  description: 'Push a view onto the stack of a root view.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/views.push',
  },
  operationId: 'views_push',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      trigger_id: z
        .string()
        .openapi({
          param: {
            description: 'Exchange a trigger to post to the user.',
            in: 'query',
            name: 'trigger_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      view: z
        .string()
        .openapi({
          param: {
            description:
              'A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.',
            in: 'query',
            name: 'view',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response includes the pushed view payload.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                view: {
                  app_id: 'AAD3351BQ',
                  blocks: [
                    {
                      block_id: 'edit_details',
                      element: { action_id: 'detail_input', type: 'plain_text_input' },
                      label: { text: 'Edit details', type: 'plain_text' },
                      type: 'input',
                    },
                  ],
                  bot_id: 'BADF7A34H',
                  callback_id: 'view_4',
                  clear_on_close: true,
                  close: { emoji: true, text: 'Back', type: 'plain_text' },
                  external_id: '',
                  hash: '1569362015.55b5e41b',
                  id: 'VNM522E2U',
                  notify_on_close: false,
                  previous_view_id: null,
                  private_metadata: '',
                  root_view_id: 'VNN729E3U',
                  state: { values: {} },
                  submit: { emoji: true, text: 'Save', type: 'plain_text' },
                  team_id: 'T9M4RL1JM',
                  title: { emoji: true, text: 'Pushed Modal', type: 'plain_text' },
                  type: 'modal',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: {
            response: {
              value: {
                error: 'invalid_arguments',
                ok: false,
                response_metadata: { messages: ['missing required field: title'] },
              },
            },
          },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getViewsUpdateRoute = createRoute({
  method: 'get',
  path: '/views.update',
  tags: ['views'],
  description: 'Update an existing view.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/views.update',
  },
  operationId: 'views_update',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `none`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      view_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.',
            in: 'query',
            name: 'view_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      external_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required.',
            in: 'query',
            name: 'external_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A [view object](/reference/surfaces/views). This must be a JSON-encoded string.',
            in: 'query',
            name: 'view',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string that represents view state to protect against possible race conditions.',
            in: 'query',
            name: 'hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response includes the updated view payload.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: {
            response: {
              value: {
                ok: true,
                view: {
                  app_id: 'AAD3351BQ',
                  blocks: [
                    {
                      accessory: {
                        action_id: 'button_4',
                        text: { text: 'Click me', type: 'plain_text' },
                        type: 'button',
                      },
                      block_id: 's_block',
                      text: { emoji: true, text: 'I am but an updated modal', type: 'plain_text' },
                      type: 'section',
                    },
                  ],
                  bot_id: 'BADF7A34H',
                  callback_id: 'view_2',
                  clear_on_close: true,
                  close: { emoji: true, text: 'Close', type: 'plain_text' },
                  external_id: '',
                  hash: '1569262015.55b5e41b',
                  id: 'VNM522E2U',
                  notify_on_close: false,
                  previous_view_id: null,
                  private_metadata: '',
                  root_view_id: 'VNN729E3U',
                  state: { values: {} },
                  submit: null,
                  team_id: 'T9M4RL1JM',
                  title: { emoji: true, text: 'Updated Modal', type: 'plain_text' },
                  type: 'modal',
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Typical error response.',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'not_found', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['none'] }],
})

export const getWorkflowsStepCompletedRoute = createRoute({
  method: 'get',
  path: '/workflows.stepCompleted',
  tags: ['workflows'],
  description: "Indicate that an app's step in a workflow completed execution.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/workflows.stepCompleted',
  },
  operationId: 'workflows_stepCompleted',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `workflow.steps:execute`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      workflow_step_execute_id: z
        .string()
        .openapi({
          param: {
            description: 'Context identifier that maps to the correct workflow step execution.',
            in: 'query',
            name: 'workflow_step_execute_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object.',
            in: 'query',
            name: 'outputs',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['workflow.steps:execute'] }],
})

export const getWorkflowsStepFailedRoute = createRoute({
  method: 'get',
  path: '/workflows.stepFailed',
  tags: ['workflows'],
  description: "Indicate that an app's step in a workflow failed to execute.",
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/workflows.stepFailed',
  },
  operationId: 'workflows_stepFailed',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `workflow.steps:execute`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      workflow_step_execute_id: z
        .string()
        .openapi({
          param: {
            description: 'Context identifier that maps to the correct workflow step execution.',
            in: 'query',
            name: 'workflow_step_execute_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      error: z
        .string()
        .openapi({
          param: {
            description:
              'A JSON-based object with a `message` property that should contain a human readable error message.',
            in: 'query',
            name: 'error',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['workflow.steps:execute'] }],
})

export const getWorkflowsUpdateStepRoute = createRoute({
  method: 'get',
  path: '/workflows.updateStep',
  tags: ['workflows'],
  description: 'Update the configuration for a workflow extension step.',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://api.slack.com/methods/workflows.updateStep',
  },
  operationId: 'workflows_updateStep',
  request: {
    headers: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'Authentication token. Requires scope: `workflow.steps:execute`',
            in: 'header',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      workflow_step_edit_id: z
        .string()
        .openapi({
          param: {
            description:
              'A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`.',
            in: 'query',
            name: 'workflow_step_edit_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      inputs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables).',
            in: 'query',
            name: 'inputs',
            schema: { type: 'string' },
            required: false,
          },
        }),
      outputs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed.',
            in: 'query',
            name: 'outputs',
            schema: { type: 'string' },
            required: false,
          },
        }),
      step_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional field that can be used to override the step name that is shown in the Workflow Builder.',
            in: 'query',
            name: 'step_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      step_image_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional field that can be used to override app image that is shown in the Workflow Builder.',
            in: 'query',
            name: 'step_image_url',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Typical success response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkTrueSchema })
            .openapi({
              description:
                'This method either only returns a brief _OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default success template',
            }),
          examples: { response: { value: { ok: true } } },
        },
      },
    },
    default: {
      description: 'Typical error response',
      content: {
        'application/json': {
          schema: z
            .looseObject({ ok: DefsOkFalseSchema })
            .openapi({
              description:
                'This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.',
              required: ['ok'],
              title: 'Default error template',
            }),
          examples: { response: { value: { error: 'invalid_auth', ok: false } } },
        },
      },
    },
  },
  security: [{ slackAuth: ['workflow.steps:execute'] }],
})
