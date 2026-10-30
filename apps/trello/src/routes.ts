import { createRoute, z } from '@hono/zod-openapi'

const PosStringOrNumberSchema = z
  .xor([z.enum(['top', 'bottom']), z.float32().openapi({ example: 1293.5 })])
  .openapi('PosStringOrNumber')

const APIKeySchema = z
  .string()
  .regex(/^[0-9a-fA-F]{32}$/)
  .openapi({ example: '0471642aefef5fa1fa76530ce1ba4c85' })
  .openapi('APIKey')

const APITokenSchema = z
  .string()
  .openapi({ example: '9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548' })
  .openapi('APIToken')

const ActionFieldsSchema = z
  .enum(['id', 'idMemberCreator', 'data', 'type', 'date', 'limits', 'display', 'memberCreator'])
  .openapi('ActionFields')

const TrelloIDSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .openapi({ example: '5abbe4b7ddc1b351ef961414' })
  .openapi('TrelloID')

const ActionSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    idMemberCreator: TrelloIDSchema.exactOptional(),
    data: z
      .object({
        text: z.string().exactOptional().openapi({ example: 'Can never go wrong with bowie' }),
        card: z
          .object({
            id: TrelloIDSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ example: 'Bowie' }),
            idShort: z.int().exactOptional().openapi({ example: 7 }),
            shortLink: z.string().exactOptional().openapi({ example: '3CsPkqOF' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        board: z
          .object({
            id: TrelloIDSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ example: 'Mullets' }),
            shortLink: z.string().exactOptional().openapi({ example: '3CsPkqOF' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        list: z
          .object({
            id: TrelloIDSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ example: 'Amazing' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z.string().exactOptional().openapi({ example: 'commentCard' }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-03-09T19:41:51.396Z' }),
    limits: z
      .object({
        reactions: z
          .object({
            perAction: z
              .object({
                status: z.string().exactOptional().openapi({ example: 'ok' }),
                disableAt: z.number().exactOptional().openapi({ example: 1000 }),
                warnAt: z.number().exactOptional().openapi({ example: 900 }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            uniquePerAction: z
              .object({
                status: z.string().exactOptional().openapi({ example: 'ok' }),
                disableAt: z.number().exactOptional().openapi({ example: 1000 }),
                warnAt: z.number().exactOptional().openapi({ example: 900 }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    display: z
      .object({
        translationKey: z.string().exactOptional().openapi({ example: 'action_comment_on_card' }),
        entities: z
          .object({
            contextOn: z
              .object({
                type: z.string().exactOptional().openapi({ example: 'translatable' }),
                translationKey: z.string().exactOptional().openapi({ example: 'action_on' }),
                hideIfContext: z.boolean().exactOptional(),
                idContext: TrelloIDSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            card: z
              .object({
                type: z.string().exactOptional().openapi({ example: 'card' }),
                hideIfContext: z.boolean().exactOptional(),
                id: TrelloIDSchema.exactOptional(),
                shortLink: z.string().exactOptional().openapi({ example: '3CsPkqOF' }),
                text: z.string().exactOptional().openapi({ example: 'Bowie' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            comment: z
              .object({
                type: z.string().exactOptional().openapi({ example: 'comment' }),
                text: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'Can never go wrong with bowie' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            memberCreator: z
              .object({
                type: z.string().exactOptional().openapi({ example: 'member' }),
                id: TrelloIDSchema.exactOptional(),
                username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
                text: z.string().exactOptional().openapi({ example: 'Bob Loblaw (World)' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    memberCreator: z
      .object({
        id: TrelloIDSchema.exactOptional().openapi({ example: '5b02e7f4e1facdc393169f9d' }),
        activityBlocked: z.boolean().exactOptional().openapi({ example: false }),
        avatarHash: z
          .string()
          .exactOptional()
          .openapi({ example: 'db2adf80c2e6c26b76e1f10400eb4c45' }),
        avatarUrl: z
          .url()
          .exactOptional()
          .openapi({
            example:
              'https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45',
          }),
        fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw (Trello)' }),
        idMemberReferrer: TrelloIDSchema.nullable().exactOptional().openapi({ example: null }),
        initials: z.string().exactOptional().openapi({ example: 'BL' }),
        username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Action')

const AttachmentFieldsSchema = z
  .enum([
    'id',
    'bytes',
    'date',
    'edgeColor',
    'idMember',
    'isUpload',
    'mimeType',
    'name',
    'previews',
    'url',
    'pos',
  ])
  .openapi('AttachmentFields')

const ColorSchema = z
  .enum(['yellow', 'purple', 'blue', 'red', 'green', 'orange', 'black', 'sky', 'pink', 'lime'])
  .nullable()
  .openapi('Color')

const AttachmentSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5bc79d4206526d2279c1e6ea' }),
    bytes: z.string().nullable().exactOptional().openapi({ example: null }),
    date: z.iso.date().exactOptional().openapi({ example: '2018-10-17T19:10:14.808Z' }),
    edgeColor: ColorSchema.nullable().exactOptional().openapi({ example: null }),
    idMember: TrelloIDSchema.exactOptional().openapi({ example: '5bc79d4206526d2279c1e6eb' }),
    isUpload: z.boolean().exactOptional().openapi({ example: false }),
    mimeType: z.string().exactOptional().openapi({ example: '' }),
    name: z.string().exactOptional().openapi({ example: 'Deprecation Extension Notice' }),
    previews: z.array(z.string()).exactOptional().openapi({ example: [] }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://admin.typeform.com/form/RzExEM/share#/link' }),
    pos: z.float32().exactOptional().openapi({ example: 1638 }),
  })
  .openapi({ required: [] })
  .openapi('Attachment')

const BlockedKeySchema = z
  .enum([
    'notification_comment_card',
    'notification_added_a_due_date',
    'notification_changed_due_date',
    'notification_card_due_soon',
    'notification_removed_from_card',
    'notification_added_attachment_to_card',
    'notification_created_card',
    'notification_moved_card',
    'notification_archived_card',
    'notification_unarchived_card',
  ])
  .openapi({ example: 'notification_comment_card' })
  .openapi('BlockedKey')

const BoardFieldsSchema = z
  .enum([
    'id',
    'name',
    'desc',
    'descData',
    'closed',
    'idMemberCreator',
    'idOrganization',
    'pinned',
    'url',
    'shortUrl',
    'prefs',
    'labelNames',
    'starred',
    'limits',
    'memberships',
    'enterpriseOwned',
  ])
  .openapi('BoardFields')

const CardAgingSchema = z.enum(['pirate', 'regular']).openapi('CardAging')

const ImageDescriptorSchema = z
  .object({
    width: z
      .int()
      .exactOptional()
      .openapi({ description: 'The width of the image.', example: 100 }),
    height: z
      .int()
      .exactOptional()
      .openapi({ description: 'The height of the image.', example: 64 }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the image.',
        example:
          'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg',
      }),
  })
  .openapi({ required: [] })
  .openapi('ImageDescriptor')

const PrefsSchema = z
  .object({
    permissionLevel: z.enum(['org', 'board']).exactOptional(),
    hideVotes: z.boolean().exactOptional(),
    voting: z.enum(['disabled', 'enabled']).exactOptional(),
    comments: z.string().exactOptional(),
    invitations: z.enum(['admins', 'members']).exactOptional(),
    selfJoin: z.boolean().exactOptional(),
    cardCovers: z.boolean().exactOptional(),
    isTemplate: z.boolean().exactOptional(),
    cardAging: CardAgingSchema.exactOptional(),
    calendarFeedEnabled: z.boolean().exactOptional(),
    background: TrelloIDSchema.exactOptional(),
    backgroundImage: z.url().exactOptional(),
    backgroundImageScaled: z.array(ImageDescriptorSchema).exactOptional(),
    backgroundTile: z.boolean().exactOptional(),
    backgroundBrightness: z.string().exactOptional().openapi({ example: 'dark' }),
    backgroundBottomColor: z.string().exactOptional().openapi({ example: '#1e2e00' }),
    backgroundTopColor: z.string().exactOptional().openapi({ example: '#ffffff' }),
    canBePublic: z.boolean().exactOptional(),
    canBeEnterprise: z.boolean().exactOptional(),
    canBeOrg: z.boolean().exactOptional(),
    canBePrivate: z.boolean().exactOptional(),
    canInvite: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Prefs')

const LimitsObjectSchema = z
  .object({
    status: z.enum(['ok', 'warning']).exactOptional(),
    disableAt: z.number().exactOptional().openapi({ example: 36000 }),
    warnAt: z.number().exactOptional().openapi({ example: 32400 }),
  })
  .openapi({ required: [] })
  .openapi('LimitsObject')

const LimitsSchema = z
  .object({
    attachments: z
      .object({ perBoard: LimitsObjectSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Limits')

const BoardSchema = z
  .object({
    id: TrelloIDSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the board.', example: 'Trello Platform Changes' }),
    desc: z
      .string()
      .exactOptional()
      .openapi({ example: "Track changes to Trello's Platform on this board." }),
    descData: z.string().exactOptional(),
    closed: z.boolean().exactOptional().openapi({ example: false }),
    idMemberCreator: TrelloIDSchema.exactOptional(),
    idOrganization: TrelloIDSchema.exactOptional(),
    pinned: z.boolean().exactOptional().openapi({ example: false }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://trello.com/b/dQHqCohZ/trello-platform-changelog' }),
    shortUrl: z.url().exactOptional().openapi({ example: 'https://trello.com/b/dQHqCohZ' }),
    prefs: PrefsSchema.exactOptional(),
    labelNames: z
      .object({
        green: z.string().exactOptional().openapi({ example: 'Addition' }),
        yellow: z.string().exactOptional().openapi({ example: 'Update' }),
        orange: z.string().exactOptional().openapi({ example: 'Deprecation' }),
        red: z.string().exactOptional().openapi({ example: 'Deletion' }),
        purple: z.string().exactOptional().openapi({ example: 'Power-Ups' }),
        blue: z.string().exactOptional().openapi({ example: 'News' }),
        sky: z.string().exactOptional().openapi({ example: 'Announcement' }),
        lime: z.string().exactOptional().openapi({ example: 'Delight' }),
        pink: z.string().exactOptional().openapi({ example: 'REST API' }),
        black: z.string().exactOptional().openapi({ example: 'Capabilties' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    limits: LimitsSchema.exactOptional(),
    starred: z.boolean().exactOptional(),
    memberships: z.string().exactOptional(),
    shortLink: z.string().exactOptional(),
    subscribed: z.boolean().exactOptional(),
    powerUps: z.string().exactOptional(),
    dateLastActivity: z.iso.date().exactOptional(),
    dateLastView: z.iso.date().exactOptional(),
    idTags: z.string().exactOptional(),
    datePluginDisable: z.iso.date().nullable().exactOptional(),
    creationMethod: z.string().nullable().exactOptional(),
    ixUpdate: z.int().exactOptional(),
    templateGallery: z.string().nullable().exactOptional(),
    enterpriseOwned: z.boolean().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('Board')

const BoardBackgroundSchema = z
  .object({ id: TrelloIDSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('BoardBackground')

const BoardStarsSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '585063850027165010be15a8' }),
    idBoard: TrelloIDSchema.exactOptional().openapi({ example: '57f7df684f1ca8c2877162e0' }),
    pos: z.int().exactOptional().openapi({ example: 32768 }),
  })
  .openapi({ required: [] })
  .openapi('BoardStars')

const ChannelSchema = z.literal('email').openapi({ example: 'email' }).openapi('Channel')

const CheckItemSchema = z
  .object({
    idChecklist: TrelloIDSchema.exactOptional().openapi({ example: '5dc9b507756e182c76007621' }),
    state: z.enum(['complete', 'incomplete']).exactOptional().openapi({ example: 'incomplete' }),
    id: TrelloIDSchema.exactOptional().openapi({ example: '5dc9b509f02f4314edc4303a' }),
    name: z.string().exactOptional(),
    nameData: z.string().nullable().exactOptional().openapi({ example: null }),
    pos: z.string().exactOptional().openapi({ example: 1673 }),
  })
  .openapi({ required: [] })
  .openapi('CheckItem')

const ChecklistSchema = z
  .object({ id: TrelloIDSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Checklist')

const LabelSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ description: 'The ID of the label.' }),
    idBoard: TrelloIDSchema.exactOptional().openapi({
      description: 'The ID of the board the label is on.',
      example: '5abbe4b7ddc1b351ef961414',
    }),
    name: z
      .string()
      .min(0)
      .max(16384)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name displayed for the label.', example: 'Overdue' }),
    color: ColorSchema.exactOptional().openapi({
      description:
        'The color of the label. Null means no color and the label will not be shown on the front of Cards.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Label')

const CardSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    address: z.string().nullable().exactOptional(),
    badges: z
      .object({
        attachmentsByType: z
          .object({
            trello: z
              .object({ board: z.number().exactOptional(), card: z.number().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        location: z.boolean().exactOptional(),
        votes: z.int().exactOptional(),
        viewingMemberVoted: z.boolean().exactOptional().openapi({ example: false }),
        subscribed: z.boolean().exactOptional().openapi({ example: false }),
        fogbugz: z.string().exactOptional(),
        checkItems: z.int().exactOptional().openapi({ example: 0 }),
        checkItemsChecked: z.int().exactOptional().openapi({ example: 0 }),
        comments: z.int().exactOptional().openapi({ example: 0 }),
        attachments: z.int().exactOptional().openapi({ example: 0 }),
        description: z.boolean().exactOptional(),
        due: z.iso.date().nullable().exactOptional(),
        start: z.iso.date().nullable().exactOptional(),
        dueComplete: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    cardRole: z
      .enum(['separator', 'board', 'mirror', 'link'])
      .nullable()
      .exactOptional()
      .openapi({ example: 'mirror' }),
    checkItemStates: z.array(z.xor([z.string()])).exactOptional(),
    closed: z.boolean().exactOptional(),
    coordinates: z.string().nullable().exactOptional(),
    creationMethod: z.string().nullable().exactOptional(),
    dateLastActivity: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-09-16T16:19:17.156Z' }),
    desc: z
      .string()
      .exactOptional()
      .openapi({
        example:
          "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
      }),
    descData: z
      .object({ emoji: z.object({}).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    due: z.iso.date().nullable().exactOptional(),
    dueReminder: z.string().nullable().exactOptional(),
    idBoard: TrelloIDSchema.exactOptional().openapi({ example: '5abbe4b7ddc1b351ef961414' }),
    idChecklists: z.array(z.xor([ChecklistSchema, TrelloIDSchema])).exactOptional(),
    idLabels: z.array(z.xor([LabelSchema, TrelloIDSchema])).exactOptional(),
    idList: TrelloIDSchema.exactOptional().openapi({ example: '5abbe4b7ddc1b351ef961415' }),
    idMembers: z.array(z.xor([TrelloIDSchema])).exactOptional(),
    idMembersVoted: z.array(z.xor([TrelloIDSchema])).exactOptional(),
    idShort: z.int().exactOptional(),
    idAttachmentCover: TrelloIDSchema.nullable()
      .exactOptional()
      .openapi({ example: '5abbe4b7ddc1b351ef961415' }),
    labels: z.array(z.xor([TrelloIDSchema])).exactOptional(),
    limits: LimitsSchema.exactOptional(),
    locationName: z.string().nullable().exactOptional(),
    manualCoverAttachment: z.boolean().exactOptional().openapi({ example: false }),
    mirrorSourceId: TrelloIDSchema.nullable().exactOptional(),
    name: z.string().exactOptional().openapi({ example: '👋 What? Why? How?' }),
    pos: z.float32().exactOptional().openapi({ example: 65535 }),
    shortLink: z.string().exactOptional().openapi({ example: 'H0TZyzbK' }),
    shortUrl: z.url().exactOptional().openapi({ example: 'https://trello.com/c/H0TZyzbK' }),
    subscribed: z.boolean().exactOptional().openapi({ example: false }),
    url: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how' }),
    cover: z
      .object({
        idAttachment: TrelloIDSchema.nullable().exactOptional(),
        color: ColorSchema.nullable().exactOptional(),
        idUploadedBackground: z.boolean().nullable().exactOptional(),
        size: z.literal('normal').exactOptional(),
        brightness: z.enum(['light', 'dark']).exactOptional(),
        isTemplate: z.boolean().exactOptional().openapi({ example: false }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Card')

const CardFieldsSchema = z
  .enum([
    'id',
    'address',
    'badges',
    'checkItemStates',
    'closed',
    'coordinates',
    'creationMethod',
    'dueComplete',
    'dateLastActivity',
    'desc',
    'descData',
    'due',
    'dueReminder',
    'idBoard',
    'idChecklists',
    'idLabels',
    'idList',
    'idMembers',
    'idMembersVoted',
    'idShort',
    'idAttachmentCover',
    'labels',
    'limits',
    'locationName',
    'manualCoverAttachment',
    'name',
    'pos',
    'shortLink',
    'shortUrl',
    'subscribed',
    'url',
    'cover',
    'isTemplate',
  ])
  .openapi({ description: 'The fields on a Card.' })
  .openapi('CardFields')

const ClaimableOrganizationsSchema = z
  .object({
    organizations: z
      .array(
        z
          .object({
            name: z.string().exactOptional().openapi({ example: 'organization_name' }),
            displayName: z.string().exactOptional().openapi({ example: 'Organization Name' }),
            activeMembershipCount: z.number().exactOptional().openapi({ example: 5 }),
            idActiveAdmins: z.array(TrelloIDSchema).exactOptional(),
            products: z.array(z.number()).exactOptional(),
            id: TrelloIDSchema.exactOptional().openapi({ example: '617abd5995eae45169a11059' }),
            logoUrl: z.string().nullable().exactOptional().openapi({ example: null }),
            dateLastActive: z.iso
              .date()
              .nullable()
              .exactOptional()
              .openapi({
                example: '2019-08-22T18:15:53.546Z',
                description:
                  'The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    claimableCount: z.number().exactOptional().openapi({ example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('ClaimableOrganizations')

const CustomEmojiSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5900ac11ed55d6d2c355c5d6' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png',
      }),
    name: z.string().exactOptional().openapi({ example: 'chorizo' }),
  })
  .openapi({ required: [] })
  .openapi('CustomEmoji')

const CustomFieldSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5ab10be237846c43015f108e' }),
    idModel: z.string().exactOptional().openapi({ example: '586e8f681d4fe9b06a928307' }),
    modelType: z.enum(['card', 'board', 'member']).exactOptional().openapi({ example: 'board' }),
    fieldGroup: z
      .string()
      .exactOptional()
      .openapi({ example: 'f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955' }),
    display: z
      .object({
        cardFront: z.boolean().exactOptional().openapi({ example: true }),
        name: z.string().exactOptional().openapi({ example: 'Priority 🏔' }),
        pos: z.string().exactOptional().openapi({ example: '98304,' }),
        options: z
          .array(
            z
              .object({
                id: TrelloIDSchema.exactOptional().openapi({ example: '5ab10be237846c43015f1091' }),
                idCustomField: TrelloIDSchema.exactOptional().openapi({
                  example: '5ab10be237846c43015f108e',
                }),
                value: z
                  .object({ text: z.string().exactOptional().openapi({ example: 'High' }) })
                  .exactOptional()
                  .openapi({ required: [] }),
                color: z.string().exactOptional().openapi({ example: 'red' }),
                pos: z.number().exactOptional().openapi({ example: 16384 }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z.string().exactOptional().openapi({ example: 'list' }),
  })
  .openapi({ required: [] })
  .openapi('CustomField')

const CustomFieldItemsSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    value: z
      .object({ checked: z.string().exactOptional().openapi({ example: 'true' }) })
      .exactOptional()
      .openapi({ required: [] }),
    idCustomField: TrelloIDSchema.exactOptional().openapi({ example: '5b080fd8017bd1653b5480fa' }),
    idModel: TrelloIDSchema.exactOptional().openapi({ example: '5b080ff194611b41aaaa9570' }),
    modelType: z.enum(['card', 'board', 'member']).exactOptional().openapi({ example: 'card' }),
  })
  .openapi({ required: [] })
  .openapi('CustomFieldItems')

const CustomStickerSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    url: z.url().exactOptional(),
    scaled: z
      .array(z.object({ id: TrelloIDSchema.exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomSticker')

const EmojiSchema = z
  .object({
    trello: z
      .array(
        z
          .object({
            unified: z.string().exactOptional().openapi({ example: '1F600' }),
            name: z.string().exactOptional().openapi({ example: 'GRINNING FACE' }),
            native: z.string().exactOptional().openapi({ example: '😀' }),
            shortName: z.string().exactOptional().openapi({ example: 'grinning' }),
            shortNames: z.array(z.string().openapi({ example: 'grinning"' })).exactOptional(),
            text: z.string().exactOptional().openapi({ example: ':)' }),
            texts: z.string().nullable().exactOptional().openapi({ example: null }),
            category: z.string().exactOptional().openapi({ example: 'Smileys & People' }),
            sheetX: z.number().exactOptional().openapi({ example: 30 }),
            sheetY: z.number().exactOptional().openapi({ example: 24 }),
            tts: z.string().exactOptional().openapi({ example: 'grinning face' }),
            keywords: z.array(z.string().openapi({ example: 'face' })).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Emoji')

const OrganizationPrefsSchema = z
  .object({
    boardVisibilityRestrict: z.object({}).exactOptional(),
    boardDeleteRestrict: z.object({}).exactOptional(),
    attachmentRestrictions: z
      .array(z.enum(['computer', 'trello', 'google-drive', 'box', 'onedrive', 'link']))
      .exactOptional(),
    permissionLevel: z
      .enum(['org', 'private', 'public', 'enterprise', 'domain'])
      .exactOptional()
      .openapi({ example: 'private' }),
  })
  .openapi({ required: [] })
  .openapi('OrganizationPrefs')

const EnterpriseSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '59c15d19566e197b23665901' }),
    name: z.string().exactOptional().openapi({ example: 'bentley_test' }),
    displayName: z.string().exactOptional().openapi({ example: "Bentley's Test Enterprise!" }),
    logoHash: z.string().nullable().exactOptional().openapi({ example: null }),
    logoUrl: z.string().nullable().exactOptional().openapi({ example: null }),
    prefs: z
      .object({
        ssoOnly: z.boolean().exactOptional().openapi({ example: false }),
        signup: z
          .object({
            banner: z.string().exactOptional(),
            bannerHtml: z.string().exactOptional().openapi({ example: '<p>Hello</p>\n' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        mandatoryTransferDate: z.iso.date().nullable().exactOptional().openapi({ example: null }),
        brandingColor: z.string().exactOptional(),
        autoJoinOrganizations: z.boolean().exactOptional().openapi({ example: false }),
        notifications: z.object({}).exactOptional(),
        maxMembers: z.number().nullable().exactOptional().openapi({ example: null }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    organizationPrefs: OrganizationPrefsSchema.exactOptional(),
    ssoActivationFailed: z.boolean().exactOptional(),
    idAdmins: z.array(TrelloIDSchema).exactOptional(),
    enterpriseDomains: z.array(z.url()).exactOptional(),
    isRealEnterprise: z.boolean().exactOptional().openapi({ example: true }),
    pluginWhitelistingEnabled: z.array(TrelloIDSchema).exactOptional(),
    idOrganizations: z.array(TrelloIDSchema).exactOptional(),
    products: z.array(z.number()).exactOptional(),
    licenses: z
      .object({
        maxMembers: z.number().nullable().exactOptional().openapi({ example: null }),
        totalMembers: z.number().exactOptional().openapi({ example: 5 }),
        relatedEnterprises: z
          .array(
            z
              .object({
                name: z.string().exactOptional().openapi({ example: 'enterprise_name' }),
                displayName: z.string().exactOptional().openapi({ example: 'My Test Enterprise!' }),
                count: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    domains: z.array(z.url()).exactOptional(),
    dateOrganizationPrefsLastUpdated: z.iso
      .date()
      .exactOptional()
      .openapi({ example: '2019-08-22T18:15:53.546Z' }),
    idp: z
      .object({
        requestSigned: z.boolean().exactOptional().openapi({ example: false }),
        certificate: z.string().nullable().exactOptional().openapi({ example: null }),
        loginUrl: z.url().nullable().exactOptional().openapi({ example: null }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Enterprise')

const EnterpriseAdminSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5dced8665015383ed5ca248c' }),
    fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw' }),
    username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseAdmin')

const EnterpriseAuditLogSchema = z
  .object({
    idAction: TrelloIDSchema.exactOptional().openapi({ example: '5dced8665015383ed5ca248c' }),
    type: z.string().exactOptional().openapi({ example: 'addOrganizationToEnterprise' }),
    date: z.iso.date().exactOptional().openapi({ example: '2018-04-26T17:03:25.155Z' }),
    memberCreator: z
      .object({
        id: TrelloIDSchema.exactOptional().openapi({ example: '5bc79d4206526d2279c1e6ea' }),
        username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
        fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw (Trello)' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    organization: z
      .object({
        enterpriseJoinRequest: z
          .object({
            idEnterprise: TrelloIDSchema.exactOptional().openapi({
              example: '617ac9070293e6612650e0ca',
            }),
            idMember: TrelloIDSchema.exactOptional().openapi({
              example: '5bc79d4206526d2279c1e6ea',
            }),
            date: z.iso.date().exactOptional().openapi({ example: '2018-04-26T17:03:25.155Z' }),
          })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
        id: TrelloIDSchema.exactOptional().openapi({ example: '617ac9070293e6612650e0ca' }),
        name: z.string().exactOptional().openapi({ example: 'organization name' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    member: z
      .object({
        id: TrelloIDSchema.exactOptional().openapi({ example: '5bc79d4206526d2279c1e6ea' }),
        username: z.string().exactOptional().openapi({ example: 'bentleycook' }),
        fullName: z.string().exactOptional().openapi({ example: 'Bentley Cook' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseAuditLog')

const ExportSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5dced8665015383ed5ca248c' }),
    status: z
      .object({
        attempts: z.number().exactOptional().openapi({ example: 0 }),
        finished: z.boolean().exactOptional().openapi({ example: false }),
        stage: z.string().exactOptional().openapi({ example: 'Export_queued' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    startedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-11-15T16:55:02.000Z' }),
    size: z.string().nullable().exactOptional().openapi({ example: null }),
    exportUrl: z.string().nullable().exactOptional().openapi({ example: null }),
  })
  .openapi({ required: [] })
  .openapi('Export')

const ViewFilterSchema = z.enum(['all', 'closed', 'none', 'open']).openapi('ViewFilter')

const ListFieldsSchema = z.literal('id').openapi('ListFields')

const TrelloListSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the list', example: 'Things to buy today' }),
    closed: z.boolean().exactOptional(),
    pos: z.number().exactOptional(),
    softLimit: z.string().exactOptional(),
    idBoard: z.string().exactOptional(),
    subscribed: z.boolean().exactOptional(),
    limits: LimitsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrelloList')

const MemberFieldsSchema = z.literal('id').openapi('MemberFields')

const MembershipSchema = z
  .object({
    managed: z.boolean().exactOptional(),
    licensed: z.boolean().exactOptional(),
    admin: z.boolean().exactOptional(),
    deactivated: z.boolean().exactOptional(),
    collaborator: z.boolean().exactOptional(),
    member: z
      .object({
        id: z.string().exactOptional(),
        fullname: z.string().exactOptional(),
        username: z.string().exactOptional(),
        dateLastImpression: z.string().exactOptional(),
        email: z.string().exactOptional(),
        initials: z.string().exactOptional(),
        avatarURL: z.string().exactOptional(),
        memberType: z.string().exactOptional(),
        confirmed: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({
        example: {
          id: '646e92a0a016198d3cf81e8a',
          fullname: 'Lex Math',
          username: 'amath',
          dateLastImpression: '2023-05-24T22:41:36.406Z',
          email: 'amath@trello.com',
          initials: 'AM',
          avatarURL: 'trello.com/avatarURL',
          memberType: 'Admin',
          confirmed: true,
        },
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Membership')

const MemberPrefsSchema = z
  .object({
    timezoneInfo: z
      .object({
        offsetCurrent: z.int().exactOptional().openapi({ example: 360 }),
        timezoneCurrent: z.string().exactOptional().openapi({ example: 'CST' }),
        offsetNext: z.int().exactOptional().openapi({ example: 300 }),
        dateNext: z.iso.date().exactOptional().openapi({ example: '2020-03-08T08:00:00.000Z' }),
        timezoneNext: z.string().exactOptional().openapi({ example: 'CDT' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    privacy: z
      .object({
        fullName: z
          .enum(['public', 'private', 'collaborator'])
          .exactOptional()
          .openapi({ example: 'public' }),
        avatar: z
          .enum(['public', 'private', 'collaborator'])
          .exactOptional()
          .openapi({ example: 'public' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    sendSummaries: z.boolean().exactOptional().openapi({ example: true }),
    minutesBetweenSummaries: z.int().exactOptional().openapi({ example: 60 }),
    minutesBeforeDeadlineToNotify: z.int().exactOptional().openapi({ example: 1440 }),
    colorBlind: z.boolean().exactOptional().openapi({ example: true }),
    locale: z.string().exactOptional().openapi({ example: 'en-AU' }),
    timezone: z.string().exactOptional().openapi({ example: 'America/Chicago' }),
    twoFactor: z
      .object({
        enabled: z.boolean().exactOptional().openapi({ example: true }),
        needsNewBackups: z.boolean().exactOptional().openapi({ example: false }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('MemberPrefs')

const MemberSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    activityBlocked: z.boolean().exactOptional().openapi({ example: false }),
    avatarHash: z.string().exactOptional().openapi({ example: 'fc8faaaee46666a4eb8b626c08933e16' }),
    avatarUrl: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16',
      }),
    bio: z.string().exactOptional().openapi({ example: "👋 I'm a developer advocate at Trello!" }),
    bioData: z
      .object({ emoji: z.object({}).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    confirmed: z.boolean().exactOptional().openapi({ example: true }),
    fullName: z.string().exactOptional().openapi({ example: 'Bentley Cook' }),
    idEnterprise: TrelloIDSchema.exactOptional(),
    idEnterprisesDeactivated: z.array(z.string()).exactOptional(),
    idMemberReferrer: TrelloIDSchema.nullable().exactOptional().openapi({ example: null }),
    idPremOrgsAdmin: z.array(TrelloIDSchema).exactOptional(),
    initials: z.string().exactOptional().openapi({ example: 'BC' }),
    memberType: z.enum(['normal', 'ghost']).exactOptional().openapi({ example: 'normal' }),
    nonPublic: z
      .object({
        fullName: z.string().exactOptional().openapi({ example: 'Bentley Cook' }),
        initials: z.string().exactOptional().openapi({ example: 'BC' }),
        avatarUrl: z
          .url()
          .exactOptional()
          .openapi({
            example:
              'https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45',
            description: 'A URL that references the non-public avatar for the member',
          }),
        avatarHash: z
          .string()
          .exactOptional()
          .openapi({ example: 'db2adf80c2e6c26b76e1f10400eb4c45' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Profile data with restricted visibility. These fields are visible only to members of the\nsame organization. The values here (full name, for example) may differ from the values\nat the top level of the response.\n',
        required: [],
      }),
    nonPublicAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description: 'Whether the response contains non-public profile data for the member',
      }),
    products: z.array(z.int()).exactOptional(),
    url: z.url().exactOptional().openapi({ example: 'https://trello.com/bentleycook' }),
    username: z.string().exactOptional().openapi({ example: 'bentleycook' }),
    status: z.literal('disconnected').exactOptional().openapi({ example: 'disconnected' }),
    aaEmail: z.email().nullable().exactOptional().openapi({ example: null }),
    aaEnrolledDate: z.string().nullable().exactOptional().openapi({ example: null }),
    aaId: z.string().nullable().exactOptional().openapi({ example: null }),
    avatarSource: z.enum(['gravatar', 'upload']).exactOptional().openapi({ example: 'gravatar' }),
    email: z.string().exactOptional().openapi({ example: 'bcook@atlassian.com' }),
    gravatarHash: z
      .string()
      .exactOptional()
      .openapi({ example: '0a1e804f6e35a65ae5e1f7ef4c92471c' }),
    idBoards: z.array(TrelloIDSchema).exactOptional(),
    idOrganizations: z.array(TrelloIDSchema).exactOptional(),
    idEnterprisesAdmin: z.array(TrelloIDSchema).exactOptional(),
    limits: LimitsObjectSchema.exactOptional(),
    loginTypes: z
      .array(z.enum(['password', 'saml']).openapi({ example: 'password' }))
      .exactOptional(),
    marketingOptIn: z
      .object({
        optedIn: z.boolean().exactOptional().openapi({ example: false }),
        date: z.iso.date().exactOptional().openapi({ example: '2018-04-26T17:03:25.155Z' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    messagesDismissed: z
      .object({
        name: z.string().exactOptional().openapi({ example: 'ad-security-features' }),
        count: z.string().exactOptional().openapi({ example: 4 }),
        lastDismissed: z.iso
          .date()
          .exactOptional()
          .openapi({ example: '2019-03-11T20:19:46.809Z' }),
        _id: TrelloIDSchema.exactOptional().openapi({ example: '5995d44573d197eada632a32' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    oneTimeMessagesDismissed: z.array(z.string()).exactOptional(),
    prefs: MemberPrefsSchema.exactOptional(),
    trophies: z.array(z.string()).exactOptional(),
    uploadedAvatarHash: z
      .string()
      .exactOptional()
      .openapi({ example: 'dac3ad49ff117829dd63a79bb2ea3426' }),
    uploadedAvatarUrl: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426',
      }),
    premiumFeatures: z.array(z.string()).exactOptional(),
    isAaMastered: z.boolean().exactOptional().openapi({ example: false }),
    ixUpdate: z.number().exactOptional().openapi({ example: '48427' }),
    idBoardsPinned: z.array(TrelloIDSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Member')

const MembershipsSchema = z
  .object({ id: TrelloIDSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('Memberships')

const NotificationFieldsSchema = z
  .enum([
    'id',
    'unread',
    'type',
    'date',
    'dateRead',
    'data',
    'card',
    'board',
    'idMemberCreator',
    'idAction',
    'reactions',
  ])
  .openapi('NotificationFields')

const NotificationSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: '5dc591ac425f2a223aba0a8e' }),
    unread: z.boolean().exactOptional().openapi({ example: true }),
    type: z.literal('cardDueSoon').exactOptional().openapi({ example: 'cardDueSoon' }),
    date: z.string().exactOptional().openapi({ example: '2019-11-08T16:02:52.763Z' }),
    dateRead: z.string().exactOptional().openapi({ example: null }),
    data: z.string().exactOptional().openapi({ example: null }),
    card: CardSchema.exactOptional(),
    board: BoardSchema.exactOptional(),
    idMemberCreator: TrelloIDSchema.nullable().exactOptional().openapi({ example: null }),
    idAction: TrelloIDSchema.nullable().exactOptional().openapi({ example: null }),
    reactions: z.array(z.any()).exactOptional().openapi({ example: [] }),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const NotificationChannelSettingsSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: '5dc591ac425f2a223aba0a8e' }),
    idMember: TrelloIDSchema.exactOptional().openapi({ example: '5589c3ea49b40cedc28cf70e' }),
    blockedKeys: z.array(BlockedKeySchema).exactOptional(),
    channel: ChannelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationChannelSettings')

const OrganizationFieldsSchema = z.enum(['id', 'name']).openapi('OrganizationFields')

const OrganizationSchema = z
  .object({
    id: TrelloIDSchema.exactOptional(),
    name: z.string().exactOptional(),
    displayName: z.string().exactOptional().openapi({ example: 'Organization Name' }),
    dateLastActivity: z.iso.date().exactOptional().openapi({ example: '2018-10-17T19:10:14.808Z' }),
    prefs: OrganizationPrefsSchema.exactOptional(),
    idEnterprise: TrelloIDSchema.exactOptional(),
    offering: z.string().exactOptional().openapi({ example: 'trello.enterprise' }),
    url: z.url().exactOptional().openapi({ example: 'https://trello.com/w/<name>' }),
    idBoards: z.array(TrelloIDSchema).exactOptional(),
    memberships: z.array(TrelloIDSchema).exactOptional(),
    premiumFeatures: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Organization')

const PendingOrganizationsSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '617ac9070293e6612650e0ca' }),
    idMember: TrelloIDSchema.exactOptional().openapi({ example: '5589c3ea49b40cedc28cf70e' }),
    memberRequestor: z
      .object({
        id: TrelloIDSchema.exactOptional().openapi({ example: '59cd149051aa57a706962996' }),
        fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw (Trello)' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    date: z.iso.date().exactOptional().openapi({ example: '2018-10-17T19:10:14.808Z' }),
    displayName: z.string().exactOptional().openapi({ example: 'Organization Name' }),
    membershipCount: z.number().exactOptional().openapi({ example: 2 }),
    logoUrl: z.string().nullable().exactOptional().openapi({ example: null }),
    transferability: z
      .object({
        transferrable: z.boolean().exactOptional().openapi({ example: true }),
        newBillableMembers: z
          .array(
            z
              .object({
                id: TrelloIDSchema.exactOptional().openapi({ example: '5ab10be237846c43015f1091' }),
                fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw' }),
                username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
                initials: z.string().exactOptional().openapi({ example: 'BL' }),
                avatarHash: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fc8faaaee46666a4eb8b626c08933e16' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        restrictedMembers: z
          .array(
            z
              .object({
                id: TrelloIDSchema.exactOptional().openapi({ example: '5ab10be237846c43015f1091' }),
                fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw' }),
                username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
                initials: z.string().exactOptional().openapi({ example: 'BL' }),
                avatarHash: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fc8faaaee46666a4eb8b626c08933e16' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PendingOrganizations')

const PluginSchema = z
  .object({ id: TrelloIDSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Plugin')

const PluginDataSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5c487f39294cab6ac1d6b305' }),
    idPlugin: TrelloIDSchema.exactOptional().openapi({ example: '55a5d915446f517774210003' }),
    scope: z
      .enum(['member', 'board', 'organization', 'card'])
      .exactOptional()
      .openapi({ example: 'organization' }),
    idModel: TrelloIDSchema.exactOptional().openapi({ example: '586e8d7b1af892b26d5b76b1' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '{"token":"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5"}',
      }),
    access: z.enum(['private', 'shared']).exactOptional().openapi({ example: 'private' }),
  })
  .openapi({ required: [] })
  .openapi('PluginData')

const PluginListingSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5a7cd2f8f99c517f58da1579' }),
    name: z.string().exactOptional().openapi({ example: 'Attachment Section Example' }),
    locale: z.string().exactOptional().openapi({ example: 'en-US' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'The [Glitch](https://glitch.com) Power-Up allows you to...' }),
    overview: z.string().exactOptional().openapi({ example: '' }),
  })
  .openapi({ required: [] })
  .openapi('PluginListing')

const SavedSearchSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5589b47349b40cedc28ceae2' }),
    name: z.string().exactOptional().openapi({ example: 'My Cards' }),
    query: z.string().exactOptional().openapi({ example: '@me' }),
    pos: PosStringOrNumberSchema.exactOptional().openapi({ example: 1638 }),
  })
  .openapi({ required: [] })
  .openapi('SavedSearch')

const TagSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '58dd6dcaf8b86744d3cb4cde' }),
    name: z.string().exactOptional().openapi({ example: 'My Collection' }),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const TokenPermissionSchema = z
  .object({
    idModel: z.xor([TrelloIDSchema, z.literal('*')]).exactOptional(),
    modelType: z.enum(['board', 'member', 'organization', 'enterprise']).exactOptional(),
    read: z.boolean().exactOptional(),
    write: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TokenPermission')

const TokenFieldsSchema = z
  .enum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions'])
  .openapi('TokenFields')

const TokenSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '5da728c55235b443c5b97181' }),
    identifier: z.string().exactOptional().openapi({ example: 'App Name' }),
    idMember: TrelloIDSchema.exactOptional().openapi({ example: '5589c3ea49b40cedc28cf70e' }),
    dateCreated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-10-16T14:27:17.304Z' }),
    dateExpires: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: null }),
    permissions: z.array(TokenPermissionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Token')

const TransferrableOrganizationSchema = z
  .object({
    transferrable: z.boolean().exactOptional().openapi({ example: true }),
    newBillableMembers: z
      .array(
        z
          .object({
            id: TrelloIDSchema.exactOptional().openapi({ example: '5ab10be237846c43015f1091' }),
            fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw' }),
            username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
            initials: z.string().exactOptional().openapi({ example: 'BL' }),
            avatarHash: z
              .string()
              .exactOptional()
              .openapi({ example: 'fc8faaaee46666a4eb8b626c08933e16' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    restrictedMembers: z
      .array(
        z
          .object({
            id: TrelloIDSchema.exactOptional().openapi({ example: '5ab10be237846c43015f1091' }),
            fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw' }),
            username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
            initials: z.string().exactOptional().openapi({ example: 'BL' }),
            avatarHash: z
              .string()
              .exactOptional()
              .openapi({ example: 'fc8faaaee46666a4eb8b626c08933e16' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransferrableOrganization')

const WebhookSchema = z
  .object({
    id: TrelloIDSchema.exactOptional().openapi({ example: '58dd6dcaf8b86744d3cb4cde' }),
    description: z.string().exactOptional().openapi({ example: 'Board Webhook' }),
    idModel: TrelloIDSchema.exactOptional().openapi({ example: '59cd149051aa57a706962996' }),
    callbackURL: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://mywebhookurl.com/?type=board' }),
    active: z.boolean().exactOptional().openapi({ example: true }),
    consecutiveFailures: z.number().exactOptional().openapi({ example: 0 }),
    firstConsecutiveFailDate: z.iso.date().nullable().exactOptional().openapi({ example: null }),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const ErrorSchema = z
  .object({ code: z.string(), message: z.string() })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const CFValueSchema = z
  .object({ number: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CFValue')

const CustomFieldItemValueSchema = z
  .object({ value: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('CustomFieldItemValue')

const NotFoundResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: ErrorSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: ErrorSchema } },
}

const APIKeySecurityScheme = { type: 'apiKey', in: 'query', name: 'key' }

const APITokenSecurityScheme = { in: 'query', name: 'token', type: 'apiKey' }

const OAuth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.atlassian.com/authorize',
      tokenUrl: 'https://auth.atlassian.com/authorize/oauth/token',
      scopes: {
        'read:board:trello': 'Read cards, lists, and comments in boards.',
        'write:board:trello': 'Create and update cards, lists, and comments in boards.',
        'write:board:membership:trello': 'Add, remove, or modify memberships on boards.',
        'read:organization:trello': 'Read workspaces.',
        'write:organization:trello': 'Update workspaces.',
        'write:organization:membership:trello': 'Add, remove, or modify memberships on workspaces.',
        'read:member:trello':
          'Read email address, public name, public avatar, and memberships of boards, workspaces, and enterprises.',
        'write:member:trello': 'Upload custom emojis and stickers, star boards, and save searches.',
        'read:enterprise:trello': 'Read enterprises.',
        'write:enterprise:trello': 'Update and manage enterprises.',
      },
    },
  },
}

export const getActionsIdRoute = createRoute({
  method: 'get',
  path: '/actions/{id}',
  tags: [],
  summary: 'Get an Action',
  description:
    'Get an Action\n\n*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*\n',
  operationId: 'get-actions-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      display: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'display',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      entities: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'entities',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      member: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash,fullName,initials,username')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'avatarHash,fullName,initials,username' },
          },
        }),
      memberCreator: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'memberCreator',
            in: 'query',
            description: 'Whether to include the member object for the creator of the action',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash,fullName,initials,username')
        .exactOptional()
        .openapi({
          param: {
            name: 'memberCreator_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'avatarHash,fullName,initials,username' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'read:organization:trello'] }],
})

export const putActionsIdRoute = createRoute({
  method: 'put',
  path: '/actions/{id}',
  tags: [],
  summary: 'Update an Action',
  description:
    'Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.\n',
  operationId: 'put-actions-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'The new text for the comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteActionsIdRoute = createRoute({
  method: 'delete',
  path: '/actions/{id}',
  tags: [],
  summary: 'Delete an Action',
  description: 'Delete a specific action. Only comment actions can be deleted.\n',
  operationId: 'delete-actions-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const getActionsIdFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/{field}',
  tags: [],
  summary: 'Get a specific field on an Action',
  description:
    'Get a specific property of an action\n\n*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*\n',
  operationId: 'get-actions-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: ActionFieldsSchema.openapi({
        param: {
          name: 'field',
          in: 'path',
          description: 'An action field',
          required: true,
          schema: { $ref: '#/components/schemas/ActionFields' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ActionSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello', 'read:organization:trello'] }],
})

export const getActionsIdBoardRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/board',
  tags: [],
  summary: 'Get the Board for an Action',
  description: 'Get the Board for an Action',
  operationId: 'get-actions-id-board',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: BoardFieldsSchema.openapi({
        param: {
          name: 'fields',
          in: 'query',
          description: '`all` or a comma-separated list of board fields',
          required: false,
          schema: { $ref: '#/components/schemas/BoardFields' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BoardSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getActionsIdCardRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/card',
  tags: [],
  summary: 'Get the Card for an Action',
  description: 'Get the card for an action',
  operationId: 'get-actions-id-card',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum([
          'id',
          'address',
          'badges',
          'checkItemStates',
          'closed',
          'coordinates',
          'creationMethod',
          'dueComplete',
          'dateLastActivity',
          'desc',
          'descData',
          'due',
          'dueReminder',
          'idBoard',
          'idChecklists',
          'idLabels',
          'idList',
          'idMembers',
          'idMembersVoted',
          'idShort',
          'idAttachmentCover',
          'labels',
          'limits',
          'locationName',
          'manualCoverAttachment',
          'name',
          'pos',
          'shortLink',
          'shortUrl',
          'subscribed',
          'url',
          'cover',
          'isTemplate',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of card fields',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'address',
                'badges',
                'checkItemStates',
                'closed',
                'coordinates',
                'creationMethod',
                'dueComplete',
                'dateLastActivity',
                'desc',
                'descData',
                'due',
                'dueReminder',
                'idBoard',
                'idChecklists',
                'idLabels',
                'idList',
                'idMembers',
                'idMembersVoted',
                'idShort',
                'idAttachmentCover',
                'labels',
                'limits',
                'locationName',
                'manualCoverAttachment',
                'name',
                'pos',
                'shortLink',
                'shortUrl',
                'subscribed',
                'url',
                'cover',
                'isTemplate',
              ],
              description: 'The fields on a Card.',
              default: 'all',
            },
          },
          description: 'The fields on a Card.',
          default: 'all',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getActionsIdListRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/list',
  tags: [],
  summary: 'Get the List for an Action',
  description: 'Get the List for an Action',
  operationId: 'get-actions-id-list',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of list fields',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TrelloListSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getActionsIdMemberRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/member',
  tags: [],
  summary: 'Get the Member of an Action',
  description:
    'Gets the member of an action (not the creator)\n\n*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*\n',
  operationId: 'get-actions-id-member',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of member fields',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MemberSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello', 'read:organization:trello'] }],
})

export const getActionsIdMemberCreatorRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/memberCreator',
  tags: [],
  summary: 'Get the Member Creator of an Action',
  description:
    'Get the Member who created the Action\n\n*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*\n',
  operationId: 'get-actions-id-membercreator',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of member fields',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MemberSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello', 'read:organization:trello'] }],
})

export const getActionsIdOrganizationRoute = createRoute({
  method: 'get',
  path: '/actions/{id}/organization',
  tags: [],
  summary: 'Get the Organization of an Action',
  description: 'Get the Organization of an Action',
  operationId: 'get-actions-id-organization',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of organization fields',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const putActionsIdTextRoute = createRoute({
  method: 'put',
  path: '/actions/{id}/text',
  tags: [],
  summary: 'Update a Comment Action',
  description: 'Update a comment action\n',
  operationId: 'put-actions-id-text',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the action to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .string()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'The new text for the comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const getActionsIdActionReactionsRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/reactions',
  tags: [],
  summary: "Get Action's Reactions",
  description: 'List reactions for an action',
  operationId: 'get-actions-idaction-reactions',
  request: {
    params: z.object({
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      member: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description:
              'Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      emoji: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'emoji',
            in: 'query',
            description: 'Whether to load the emoji as a nested resource.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postActionsIdActionReactionsRoute = createRoute({
  method: 'post',
  path: '/actions/{idAction}/reactions',
  tags: [],
  summary: 'Create Reaction for Action',
  description: 'Adds a new reaction to an action\n',
  operationId: 'post-actions-idaction-reactions',
  request: {
    params: z.object({
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              shortName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The primary `shortName` of the emoji to add. See [/emoji](#emoji)',
                }),
              skinVariation: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The `skinVariation` of the emoji to add. See [/emoji](#emoji)',
                }),
              native: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The emoji to add as a native unicode emoji. See [/emoji](#emoji)',
                }),
              unified: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The `unified` value of the emoji to add. See [/emoji](#emoji)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const getActionsIdActionReactionsIdRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/reactions/{id}',
  tags: [],
  summary: "Get Action's Reaction",
  description: 'Get information for a reaction',
  operationId: 'get-actions-idaction-reactions-id',
  request: {
    params: z.object({
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the reaction',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      member: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description:
              'Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      emoji: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'emoji',
            in: 'query',
            description: 'Whether to load the emoji as a nested resource.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const deleteActionsIdActionReactionsIdRoute = createRoute({
  method: 'delete',
  path: '/actions/{idAction}/reactions/{id}',
  tags: [],
  summary: "Delete Action's Reaction",
  description: 'Deletes a reaction\n',
  operationId: 'delete-actions-idaction-reactions-id',
  request: {
    params: z.object({
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the Action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the reaction',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const getActionsIdActionReactionsSummaryRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/reactionsSummary',
  tags: [],
  summary: "List Action's summary of Reactions",
  description: 'List a summary of all reactions for an action',
  operationId: 'get-actions-idaction-reactionsummary',
  request: {
    params: z.object({
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the action',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getApplicationsKeyComplianceRoute = createRoute({
  method: 'get',
  path: '/applications/{key}/compliance',
  tags: [],
  summary: "Get Application's compliance data",
  operationId: 'applications-key-compliance',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { name: 'key', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBatchRoute = createRoute({
  method: 'get',
  path: '/batch',
  tags: [],
  summary: 'Batch Requests',
  description: 'Make up to 10 GET requests in a single, batched API call.',
  operationId: 'get-batch',
  request: {
    query: z.object({
      urls: z
        .string()
        .openapi({
          param: {
            name: 'urls',
            in: 'query',
            description:
              'A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const getBoardsIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/memberships',
  tags: [],
  summary: 'Get Memberships of a Board',
  description: 'Get information about the memberships users have to the board.',
  operationId: 'get-boards-id-memberships',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['admins', 'all', 'none', 'normal'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'One of `admins`, `all`, `none`, `normal`',
            required: false,
            schema: { type: 'string', default: 'all', enum: ['admins', 'all', 'none', 'normal'] },
          },
        }),
      activity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'activity',
            in: 'query',
            description: 'Works for premium organizations only.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      orgMemberType: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'orgMemberType',
            in: 'query',
            description:
              'Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      member: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description:
              'Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      member_fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description:
              'Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'string', enum: ['id'], default: 'fullname,username' },
          },
          default: 'fullname,username',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MembershipsSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdRoute = createRoute({
  method: 'get',
  path: '/boards/{id}',
  tags: [],
  summary: 'Get a Board',
  description: 'Request a single board.',
  operationId: 'get-boards-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: '',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      actions: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'actions',
            in: 'query',
            description:
              'This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      boardStars: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'boardStars',
            in: 'query',
            description: 'Valid values are one of: `mine` or `none`.',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'cards',
            in: 'query',
            description:
              'This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      card_pluginData: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'card_pluginData',
            in: 'query',
            description: 'Use with the `cards` param to include card pluginData with the response',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'checklists',
            in: 'query',
            description:
              'This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      customFields: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'customFields',
            in: 'query',
            description:
              'This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      fields: z
        .string()
        .default('name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url',
            required: false,
            schema: {
              type: 'string',
              default:
                'name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames',
            },
          },
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            description:
              'This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lists: z
        .string()
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            name: 'lists',
            in: 'query',
            description:
              'This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string', default: 'open' },
          },
        }),
      members: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'members',
            in: 'query',
            description:
              'This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'memberships',
            in: 'query',
            description:
              'This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      pluginData: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'pluginData',
            in: 'query',
            description:
              'Determines whether the pluginData for this board should be returned. Valid values: true or false.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      organization: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization',
            in: 'query',
            description:
              'This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      organization_pluginData: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_pluginData',
            in: 'query',
            description:
              'Use with the `organization` param to include organization pluginData with the response',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      myPrefs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'myPrefs',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      tags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            description:
              'Also known as collections, tags, refer to the collection(s) that a Board belongs to.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BoardSchema } } },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putBoardsIdRoute = createRoute({
  method: 'put',
  path: '/boards/{id}',
  tags: [],
  summary: 'Update a Board',
  description: 'Update an existing board by id',
  operationId: 'put-boards-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: '',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The new name for the board. 1 to 16384 characters long.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      desc: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'desc',
            in: 'query',
            description: 'A new description for the board, 0 to 16384 characters long',
            required: false,
            schema: { type: 'string' },
          },
        }),
      closed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'closed',
            in: 'query',
            description: 'Whether the board is closed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      subscribed: TrelloIDSchema.openapi({
        param: {
          name: 'subscribed',
          in: 'query',
          description: 'Whether the acting user is subscribed to the board',
          required: false,
          explode: false,
          style: 'form',
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      idOrganization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idOrganization',
            in: 'query',
            description: 'The id of the Workspace the board should be moved to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/permissionLevel': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/permissionLevel',
            in: 'query',
            description: 'One of: org, private, public',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/selfJoin': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/selfJoin',
            in: 'query',
            description: 'Whether Workspace members can join the board themselves',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'prefs/cardCovers': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/cardCovers',
            in: 'query',
            description: 'Whether card covers should be displayed on this board',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'prefs/hideVotes': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/hideVotes',
            in: 'query',
            description:
              'Determines whether the Voting Power-Up should hide who voted on cards or not.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'prefs/invitations': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/invitations',
            in: 'query',
            description: 'Who can invite people to this board. One of: admins, members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/voting': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/voting',
            in: 'query',
            description:
              'Who can vote on this board. One of disabled, members, observers, org, public',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/comments': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/comments',
            in: 'query',
            description:
              'Who can comment on cards on this board. One of: disabled, members, observers, org, public',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/background': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/background',
            in: 'query',
            description:
              'The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/cardAging': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/cardAging',
            in: 'query',
            description: 'One of: pirate, regular',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/calendarFeedEnabled': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/calendarFeedEnabled',
            in: 'query',
            description: 'Determines whether the calendar feed is enabled or not.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteBoardsIdRoute = createRoute({
  method: 'delete',
  path: '/boards/{id}',
  tags: [],
  summary: 'Delete a Board',
  description: 'Delete a board.',
  operationId: 'delete-boards-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the board to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:organization:trello', 'write:board:trello'] }],
})

export const getBoardsIdFieldRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/{field}',
  tags: [],
  summary: 'Get a field on a Board',
  description: 'Get a single, specific field on a board',
  operationId: 'get-boards-id-field',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the board.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description:
              "The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsBoardIdActionsRoute = createRoute({
  method: 'get',
  path: '/boards/{boardId}/actions',
  tags: [],
  summary: 'Get Actions of a Board',
  description:
    'Get all of the actions of a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.',
  operationId: 'get-boards-id-actions',
  request: {
    params: z.object({
      boardId: z
        .string()
        .openapi({
          param: {
            name: 'boardId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['id', ['fields']],
          ['idMemberCreator', ['fields']],
          ['data', ['fields']],
          ['type', ['fields']],
          ['date', ['fields']],
          ['limits', ['fields']],
          ['display', ['fields']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          fields: z
            .object({
              id: TrelloIDSchema.exactOptional(),
              idMemberCreator: TrelloIDSchema.exactOptional(),
              data: z
                .object({
                  text: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Can never go wrong with bowie' }),
                  card: z
                    .object({
                      id: TrelloIDSchema.exactOptional(),
                      name: z.string().exactOptional().openapi({ example: 'Bowie' }),
                      idShort: z
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
                        .openapi({ example: 7 }),
                      shortLink: z.string().exactOptional().openapi({ example: '3CsPkqOF' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  board: z
                    .object({
                      id: TrelloIDSchema.exactOptional(),
                      name: z.string().exactOptional().openapi({ example: 'Mullets' }),
                      shortLink: z.string().exactOptional().openapi({ example: '3CsPkqOF' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  list: z
                    .object({
                      id: TrelloIDSchema.exactOptional(),
                      name: z.string().exactOptional().openapi({ example: 'Amazing' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'commentCard' }),
              date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2020-03-09T19:41:51.396Z' }),
              limits: z
                .object({
                  reactions: z
                    .object({
                      perAction: z
                        .object({
                          status: z.string().exactOptional().openapi({ example: 'ok' }),
                          disableAt: z
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
                            .openapi({ example: 1000 }),
                          warnAt: z
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
                            .openapi({ example: 900 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      uniquePerAction: z
                        .object({
                          status: z.string().exactOptional().openapi({ example: 'ok' }),
                          disableAt: z
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
                            .openapi({ example: 1000 }),
                          warnAt: z
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
                            .openapi({ example: 900 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              display: z
                .object({
                  translationKey: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'action_comment_on_card' }),
                  entities: z
                    .object({
                      contextOn: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'translatable' }),
                          translationKey: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'action_on' }),
                          hideIfContext: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional(),
                          idContext: TrelloIDSchema.exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      card: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'card' }),
                          hideIfContext: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional(),
                          id: TrelloIDSchema.exactOptional(),
                          shortLink: z.string().exactOptional().openapi({ example: '3CsPkqOF' }),
                          text: z.string().exactOptional().openapi({ example: 'Bowie' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      comment: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'comment' }),
                          text: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Can never go wrong with bowie' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      memberCreator: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'member' }),
                          id: TrelloIDSchema.exactOptional(),
                          username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
                          text: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Bob Loblaw (World)' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              memberCreator: z
                .object({
                  id: TrelloIDSchema.exactOptional().openapi({
                    example: '5b02e7f4e1facdc393169f9d',
                  }),
                  activityBlocked: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ example: false }),
                  avatarHash: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'db2adf80c2e6c26b76e1f10400eb4c45' }),
                  avatarUrl: z
                    .url()
                    .exactOptional()
                    .openapi({
                      example:
                        'https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45',
                    }),
                  fullName: z.string().exactOptional().openapi({ example: 'Bob Loblaw (Trello)' }),
                  idMemberReferrer: ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(TrelloIDSchema.nullable())
                    .exactOptional()
                    .openapi({ example: null }),
                  initials: z.string().exactOptional().openapi({ example: 'BL' }),
                  username: z.string().exactOptional().openapi({ example: 'bobloblaw' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'fields',
                in: 'query',
                description:
                  'The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).',
                required: false,
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', $ref: '#/components/schemas/TrelloID' },
                    idMemberCreator: { type: 'string', $ref: '#/components/schemas/TrelloID' },
                    data: {
                      type: 'object',
                      properties: {
                        text: { type: 'string', example: 'Can never go wrong with bowie' },
                        card: {
                          type: 'object',
                          properties: {
                            id: { type: 'string', $ref: '#/components/schemas/TrelloID' },
                            name: { type: 'string', example: 'Bowie' },
                            idShort: { type: 'integer', example: 7 },
                            shortLink: { type: 'string', example: '3CsPkqOF' },
                          },
                        },
                        board: {
                          type: 'object',
                          properties: {
                            id: { type: 'string', $ref: '#/components/schemas/TrelloID' },
                            name: { type: 'string', example: 'Mullets' },
                            shortLink: { type: 'string', example: '3CsPkqOF' },
                          },
                        },
                        list: {
                          type: 'object',
                          properties: {
                            id: { type: 'string', $ref: '#/components/schemas/TrelloID' },
                            name: { type: 'string', example: 'Amazing' },
                          },
                        },
                      },
                    },
                    type: { type: 'string', example: 'commentCard' },
                    date: {
                      type: 'string',
                      format: 'date-time',
                      example: '2020-03-09T19:41:51.396Z',
                    },
                    limits: {
                      type: 'object',
                      properties: {
                        reactions: {
                          type: 'object',
                          properties: {
                            perAction: {
                              type: 'object',
                              properties: {
                                status: { type: 'string', example: 'ok' },
                                disableAt: { type: 'number', example: 1000 },
                                warnAt: { type: 'number', example: 900 },
                              },
                            },
                            uniquePerAction: {
                              type: 'object',
                              properties: {
                                status: { type: 'string', example: 'ok' },
                                disableAt: { type: 'number', example: 1000 },
                                warnAt: { type: 'number', example: 900 },
                              },
                            },
                          },
                        },
                      },
                    },
                    display: {
                      type: 'object',
                      properties: {
                        translationKey: { type: 'string', example: 'action_comment_on_card' },
                        entities: {
                          type: 'object',
                          properties: {
                            contextOn: {
                              type: 'object',
                              properties: {
                                type: { type: 'string', example: 'translatable' },
                                translationKey: { type: 'string', example: 'action_on' },
                                hideIfContext: { type: 'boolean' },
                                idContext: {
                                  type: 'string',
                                  $ref: '#/components/schemas/TrelloID',
                                },
                              },
                            },
                            card: {
                              type: 'object',
                              properties: {
                                type: { type: 'string', example: 'card' },
                                hideIfContext: { type: 'boolean' },
                                id: { type: 'string', $ref: '#/components/schemas/TrelloID' },
                                shortLink: { type: 'string', example: '3CsPkqOF' },
                                text: { type: 'string', example: 'Bowie' },
                              },
                            },
                            comment: {
                              type: 'object',
                              properties: {
                                type: { type: 'string', example: 'comment' },
                                text: { type: 'string', example: 'Can never go wrong with bowie' },
                              },
                            },
                            memberCreator: {
                              type: 'object',
                              properties: {
                                type: { type: 'string', example: 'member' },
                                id: { $ref: '#/components/schemas/TrelloID' },
                                username: { type: 'string', example: 'bobloblaw' },
                                text: { type: 'string', example: 'Bob Loblaw (World)' },
                              },
                            },
                          },
                        },
                      },
                    },
                    memberCreator: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          $ref: '#/components/schemas/TrelloID',
                          example: '5b02e7f4e1facdc393169f9d',
                        },
                        activityBlocked: { type: 'boolean', example: false },
                        avatarHash: { type: 'string', example: 'db2adf80c2e6c26b76e1f10400eb4c45' },
                        avatarUrl: {
                          type: 'string',
                          format: 'url',
                          example:
                            'https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45',
                        },
                        fullName: { type: 'string', example: 'Bob Loblaw (Trello)' },
                        idMemberReferrer: {
                          type: 'string',
                          $ref: '#/components/schemas/TrelloID',
                          nullable: true,
                          example: null,
                        },
                        initials: { type: 'string', example: 'BL' },
                        username: { type: 'string', example: 'bobloblaw' },
                      },
                    },
                  },
                },
              },
              required: [],
            }),
          filter: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'filter',
                in: 'query',
                description:
                  'A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).',
                required: false,
                schema: { type: 'string' },
              },
            }),
          format: z
            .string()
            .default('list')
            .exactOptional()
            .openapi({
              param: {
                name: 'format',
                in: 'query',
                description: 'The format of the returned Actions. Either list or count.',
                required: false,
                schema: { type: 'string', default: 'list' },
              },
            }),
          idModels: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'idModels',
                in: 'query',
                description:
                  'A comma-separated list of idModels. Only actions related to these models will be returned.',
                required: false,
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
              z.number(),
            )
            .default(50)
            .exactOptional()
            .openapi({
              param: {
                name: 'limit',
                in: 'query',
                description: 'The limit of the number of responses, between 0 and 1000.',
                required: false,
                schema: { type: 'number', default: 50 },
              },
            }),
          member: z
            .stringbool()
            .default(true)
            .exactOptional()
            .openapi({
              param: {
                name: 'member',
                in: 'query',
                description: 'Whether to return the member object for each action.',
                required: false,
                schema: { type: 'boolean', default: true },
              },
            }),
          member_fields: z
            .string()
            .default(
              'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'member_fields',
                in: 'query',
                description:
                  'The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.',
                required: false,
                schema: {
                  type: 'string',
                  default:
                    'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
                },
              },
            }),
          memberCreator: z
            .stringbool()
            .default(true)
            .exactOptional()
            .openapi({
              param: {
                name: 'memberCreator',
                in: 'query',
                description: 'Whether to return the memberCreator object for each action.',
                required: false,
                schema: { type: 'boolean', default: true },
              },
            }),
          memberCreator_fields: z
            .string()
            .default(
              'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'memberCreator_fields',
                in: 'query',
                description:
                  'The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return',
                required: false,
                schema: {
                  type: 'string',
                  default:
                    'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
                },
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
              z.number(),
            )
            .default(0)
            .exactOptional()
            .openapi({
              param: {
                name: 'page',
                in: 'query',
                description: 'The page of results for actions.',
                required: false,
                schema: { type: 'number', default: 0 },
              },
            }),
          reactions: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'reactions',
                in: 'query',
                description: 'Whether to show reactions on comments or not.',
                required: false,
                schema: { type: 'boolean' },
              },
            }),
          before: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'before',
                in: 'query',
                description:
                  'A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created before this date will be returned.',
                required: false,
                schema: { type: 'string' },
              },
            }),
          since: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'since',
                in: 'query',
                description:
                  'A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created since this date will be returned.',
                required: false,
                schema: { type: 'string' },
              },
            }),
        }),
      ),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsBoardIdBoardStarsRoute = createRoute({
  method: 'get',
  path: '/boards/{boardId}/boardStars',
  tags: [],
  summary: 'Get boardStars on a Board',
  operationId: 'get-boards-id-boardstars',
  request: {
    params: z.object({
      boardId: z
        .string()
        .openapi({
          param: {
            name: 'boardId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('mine')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Valid values: mine, none',
            required: false,
            schema: { type: 'string', default: 'mine' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([BoardStarsSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdChecklistsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/checklists',
  tags: [],
  summary: 'Get Checklists on a Board',
  description: 'Get all of the checklists on a Board.',
  operationId: 'boards-id-checklists',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the board',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdCardsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/cards',
  tags: [],
  summary: 'Get Cards on a Board',
  description:
    'Get all of the open Cards on a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.',
  operationId: 'get-boards-id-cards',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdCardsFilterRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/cards/{filter}',
  tags: [],
  summary: 'Get filtered Cards on a Board',
  description:
    'Get the Cards on a Board that match a given filter. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.',
  operationId: 'get-boards-id-cards-filter',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the Board',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .enum(['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible'])
        .openapi({
          param: {
            name: 'filter',
            in: 'path',
            description:
              'One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible`',
            required: true,
            schema: {
              type: 'string',
              enum: ['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible'],
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/customFields',
  tags: [],
  summary: 'Get Custom Fields for Board',
  description: 'Get the Custom Field Definitions that exist on a board.',
  operationId: 'get-boards-id-customfields',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CustomFieldSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdLabelsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/labels',
  tags: [],
  summary: 'Get Labels on a Board',
  description: 'Get all of the Labels on a Board.',
  operationId: 'get-boards-id-labels',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Board.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['id', ['fields']],
          ['idBoard', ['fields']],
          ['name', ['fields']],
          ['color', ['fields']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          fields: LabelSchema.openapi({
            param: {
              name: 'fields',
              in: 'query',
              description: 'The fields to be returned for the Labels.',
              required: false,
              schema: { $ref: '#/components/schemas/Label' },
            },
          }).exactOptional(),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0).max(1000),
            )
            .default(50)
            .exactOptional()
            .openapi({
              param: {
                name: 'limit',
                in: 'query',
                description: 'The number of Labels to be returned.',
                required: false,
                schema: {
                  type: 'integer',
                  format: 'int32',
                  default: 50,
                  minimum: 0,
                  maximum: 1000,
                },
              },
            }),
        }),
      ),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postBoardsIdLabelsRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/labels',
  tags: [],
  summary: 'Create a Label on a Board',
  description: 'Create a new Label on a Board.',
  operationId: 'post-boards-id-labels',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the board to update',
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
            description: 'The name of the label to be created. 1 to 16384 characters long.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      color: z
        .string()
        .openapi({
          param: {
            name: 'color',
            in: 'query',
            description:
              'Sets the color of the new label. Valid values are a label color or `null`.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getBoardsIdListsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/lists',
  tags: [],
  summary: 'Get Lists on a Board',
  description: 'Get the Lists on a Board',
  operationId: 'get-boards-id-lists',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      cards: ViewFilterSchema.openapi({
        param: {
          name: 'cards',
          in: 'query',
          description: 'Filter to apply to Cards.',
          required: false,
          schema: { $ref: '#/components/schemas/ViewFilter' },
        },
      }).exactOptional(),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'card_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      filter: ViewFilterSchema.openapi({
        param: {
          name: 'filter',
          in: 'query',
          description: 'Filter to apply to Lists',
          required: false,
          schema: { $ref: '#/components/schemas/ViewFilter' },
        },
      }).exactOptional(),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TrelloListSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postBoardsIdListsRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/lists',
  tags: [],
  summary: 'Create a List on a Board',
  description: 'Create a new List on a Board.',
  operationId: 'post-boards-id-lists',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
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
            description: 'The name of the list to be created. 1 to 16384 characters long.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pos: z
        .string()
        .default('top')
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.',
            required: false,
            schema: { type: 'string', default: 'top' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TrelloListSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getBoardsIdListsFilterRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/lists/{filter}',
  tags: [],
  summary: 'Get filtered Lists on a Board',
  operationId: 'get-boards-id-lists-filter',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      filter: ViewFilterSchema.openapi({
        param: {
          name: 'filter',
          in: 'path',
          description: 'One of `all`, `closed`, `none`, `open`',
          required: true,
          schema: { $ref: '#/components/schemas/ViewFilter' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdMembersRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/members',
  tags: [],
  summary: 'Get the Members of a Board',
  description: 'Get the Members for a board',
  operationId: 'get-boards-id-members',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putBoardsIdMembersRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/members',
  tags: [],
  summary: 'Invite Member to Board via email',
  description: 'Invite a Member to a Board via their email address.',
  operationId: 'put-boards-id-members',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      email: z
        .email()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'The email address of a user to add as a member of the board.',
            required: true,
            schema: { type: 'string', format: 'email' },
          },
        }),
      type: z
        .enum(['admin', 'normal', 'observer'])
        .default('normal')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.',
            required: false,
            schema: { type: 'string', default: 'normal', enum: ['admin', 'normal', 'observer'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fullName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:membership:trello'] }],
})

export const putBoardsIdMembersIdMemberRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/members/{idMember}',
  tags: [],
  summary: 'Add a Member to a Board',
  description: 'Add a member to the board.',
  operationId: 'put-boards-id-members-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The id of the member to add to the board.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      type: z
        .enum(['admin', 'normal', 'observer'])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'One of: admin, normal, observer. Determines the type of member this user will be on the board.',
            required: true,
            schema: { type: 'string', enum: ['admin', 'normal', 'observer'] },
          },
        }),
      allowBillableGuest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'allowBillableGuest',
            in: 'query',
            description:
              'Optional param that allows organization admins to add multi-board guests onto a board.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:membership:trello'] }],
})

export const deleteBoardsIdMembersIdMemberRoute = createRoute({
  method: 'delete',
  path: '/boards/{id}/members/{idMember}',
  tags: [],
  summary: 'Remove Member from Board',
  operationId: 'boardsidmembersidmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The id of the member to add to the board.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:membership:trello'] }],
})

export const putBoardsIdMembershipsIdMembershipRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/memberships/{idMembership}',
  tags: [],
  summary: 'Update Membership of Member on a Board',
  description: 'Update an existing board by id',
  operationId: 'put-boards-id-memberships-idmembership',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMembership: TrelloIDSchema.openapi({
        param: {
          name: 'idMembership',
          in: 'path',
          description: 'The id of a membership that should be added to this board.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      type: z
        .enum(['admin', 'normal', 'observer'])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'One of: admin, normal, observer. Determines the type of member that this membership will be to this board.',
            required: true,
            schema: { type: 'string', enum: ['admin', 'normal', 'observer'] },
          },
        }),
      member_fields: z
        .enum([
          'all',
          'avatarHash',
          'bio',
          'bioData',
          'confirmed',
          'fullName',
          'idPremOrgsAdmin',
          'initials',
          'memberType',
          'products',
          'status',
          'url',
          'username',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description:
              'Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username',
            required: false,
            explode: false,
            style: 'form',
            schema: {
              type: 'string',
              default: 'fullName, username',
              enum: [
                'all',
                'avatarHash',
                'bio',
                'bioData',
                'confirmed',
                'fullName',
                'idPremOrgsAdmin',
                'initials',
                'memberType',
                'products',
                'status',
                'url',
                'username',
              ],
            },
          },
          default: 'fullName, username',
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:membership:trello'] }],
})

export const putBoardsIdMyPrefsEmailPositionRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/myPrefs/emailPosition',
  tags: [],
  summary: 'Update emailPosition Pref on a Board',
  description: 'Update emailPosition Pref on a Board',
  operationId: 'put-boards-id-myprefs-emailposition',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .enum(['bottom', 'top'])
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Valid values: bottom, top. Determines the position of the email address.',
            required: true,
            schema: { type: 'string', enum: ['bottom', 'top'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putBoardsIdMyPrefsIdEmailListRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/myPrefs/idEmailList',
  tags: [],
  summary: 'Update idEmailList Pref on a Board',
  description: 'Change the default list that email-to-board cards are created in.',
  operationId: 'put-boards-id-myprefs-idemaillist',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The id of an email list.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putBoardsIdMyPrefsShowSidebarRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/myPrefs/showSidebar',
  tags: [],
  summary: 'Update showSidebar Pref on a Board',
  operationId: 'put-boards-id-myPrefs-showsidebar',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Determines whether to show the side bar.',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putBoardsIdMyPrefsShowSidebarActivityRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/myPrefs/showSidebarActivity',
  tags: [],
  summary: 'Update showSidebarActivity Pref on a Board',
  operationId: 'put-boards-id-myPrefs-showsidebaractivity',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Determines whether to show sidebar activity.',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putBoardsIdMyPrefsShowSidebarBoardActionsRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/myPrefs/showSidebarBoardActions',
  tags: [],
  summary: 'Update showSidebarBoardActions Pref on a Board',
  operationId: 'put-boards-id-myPrefs-showsidebarboardactions',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Determines whether to show the sidebar board actions.',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putBoardsIdMyPrefsShowSidebarMembersRoute = createRoute({
  method: 'put',
  path: '/boards/{id}/myPrefs/showSidebarMembers',
  tags: [],
  summary: 'Update showSidebarMembers Pref on a Board',
  operationId: 'put-boards-id-myPrefs-showsidebarmembers',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Determines whether to show members of the board in the sidebar.',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postBoardsIndexRoute = createRoute({
  method: 'post',
  path: '/boards/',
  tags: [],
  summary: 'Create a Board',
  description: 'Create a new board.',
  operationId: 'post-boards',
  request: {
    query: z.object({
      name: z
        .string()
        .min(1)
        .max(16384)
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The new name for the board. 1 to 16384 characters long.',
            required: true,
            schema: { type: 'string', maxLength: 16384, minLength: 1 },
          },
        }),
      defaultLabels: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultLabels',
            in: 'query',
            description: 'Determines whether to use the default set of labels.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      defaultLists: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultLists',
            in: 'query',
            description:
              'Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      desc: z
        .string()
        .min(0)
        .max(16384)
        .exactOptional()
        .openapi({
          param: {
            name: 'desc',
            in: 'query',
            description: 'A new description for the board, 0 to 16384 characters long',
            required: false,
            schema: { type: 'string', minLength: 0, maxLength: 16384 },
          },
        }),
      idOrganization: TrelloIDSchema.openapi({
        param: {
          name: 'idOrganization',
          in: 'query',
          description: 'The id or name of the Workspace the board should belong to.',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      idBoardSource: TrelloIDSchema.openapi({
        param: {
          name: 'idBoardSource',
          in: 'query',
          description: 'The id of a board to copy into the new board.',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      keepFromSource: z
        .enum(['cards', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'keepFromSource',
            in: 'query',
            description: 'To keep cards from the original board pass in the value `cards`',
            required: false,
            schema: { type: 'string', default: 'none', enum: ['cards', 'none'] },
          },
        }),
      powerUps: z
        .enum(['all', 'calendar', 'cardAging', 'recap', 'voting'])
        .exactOptional()
        .openapi({
          param: {
            name: 'powerUps',
            in: 'query',
            description:
              'The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.',
            required: false,
            schema: { type: 'string', enum: ['all', 'calendar', 'cardAging', 'recap', 'voting'] },
          },
        }),
      prefs_permissionLevel: z
        .enum(['org', 'private', 'public'])
        .default('private')
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_permissionLevel',
            in: 'query',
            description: 'The permissions level of the board. One of: `org`, `private`, `public`.',
            required: false,
            schema: { type: 'string', default: 'private', enum: ['org', 'private', 'public'] },
          },
        }),
      prefs_voting: z
        .enum(['disabled', 'members', 'observers', 'org', 'public'])
        .default('disabled')
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_voting',
            in: 'query',
            description:
              'Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.',
            required: false,
            schema: {
              type: 'string',
              default: 'disabled',
              enum: ['disabled', 'members', 'observers', 'org', 'public'],
            },
          },
        }),
      prefs_comments: z
        .enum(['disabled', 'members', 'observers', 'org', 'public'])
        .default('members')
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_comments',
            in: 'query',
            description:
              'Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.',
            required: false,
            schema: {
              type: 'string',
              default: 'members',
              enum: ['disabled', 'members', 'observers', 'org', 'public'],
            },
          },
        }),
      prefs_invitations: z
        .enum(['members', 'admins'])
        .default('members')
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_invitations',
            in: 'query',
            description:
              'Determines what types of members can invite users to join. One of: `admins`, `members`.',
            required: false,
            schema: { type: 'string', default: 'members', enum: ['members', 'admins'] },
          },
        }),
      prefs_selfJoin: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_selfJoin',
            in: 'query',
            description:
              'Determines whether users can join the boards themselves or whether they have to be invited.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      prefs_cardCovers: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_cardCovers',
            in: 'query',
            description: 'Determines whether card covers are enabled.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      prefs_background: z
        .enum(['blue', 'orange', 'green', 'red', 'purple', 'pink', 'lime', 'sky', 'grey'])
        .default('blue')
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_background',
            in: 'query',
            description:
              'The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.',
            required: false,
            schema: {
              type: 'string',
              default: 'blue',
              enum: ['blue', 'orange', 'green', 'red', 'purple', 'pink', 'lime', 'sky', 'grey'],
            },
          },
        }),
      prefs_cardAging: z
        .enum(['pirate', 'regular'])
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs_cardAging',
            in: 'query',
            description:
              'Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.',
            required: false,
            schema: { type: 'string', default: 'regular', enum: ['pirate', 'regular'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postBoardsIdCalendarKeyGenerateRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/calendarKey/generate',
  tags: [],
  summary: 'Create a calendarKey for a Board',
  description: 'Create a new board.',
  operationId: 'post-boards-id-calendarkey-generate',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postBoardsIdEmailKeyGenerateRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/emailKey/generate',
  tags: [],
  summary: 'Create a emailKey for a Board',
  operationId: 'post-boards-id-emailkey-generate',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postBoardsIdIdTagsRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/idTags',
  tags: [],
  summary: 'Create a Tag for a Board',
  operationId: 'post-boards-id-idtags',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The id of a tag from the organization to which this board belongs.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postBoardsIdMarkAsViewedRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/markAsViewed',
  tags: [],
  summary: 'Mark Board as viewed',
  operationId: 'post-boards-id-markedasviewed',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The id of the board to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getBoardsIdBoardPluginsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/boardPlugins',
  tags: [],
  summary: 'Get Enabled Power-Ups on Board',
  description: 'Get the enabled Power-Ups on a board',
  operationId: 'get-boards-id-boardplugins',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(PluginSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postBoardsIdBoardPluginsRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/boardPlugins',
  tags: [],
  summary: 'Enable a Power-Up on a Board',
  description: 'Enable a Power-Up on a Board',
  operationId: 'post-boards-id-boardplugins',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      idPlugin: TrelloIDSchema.openapi({
        param: {
          name: 'idPlugin',
          in: 'query',
          description: 'The ID of the Power-Up to enable',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  deprecated: true,
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteBoardsIdBoardPluginsIdPluginRoute = createRoute({
  method: 'delete',
  path: '/boards/{id}/boardPlugins/{idPlugin}',
  tags: [],
  summary: 'Disable a Power-Up on a Board',
  description: 'Disable a Power-Up on a board',
  operationId: 'delete-boards-id-boardplugins',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idPlugin: TrelloIDSchema.openapi({
        param: {
          name: 'idPlugin',
          in: 'path',
          description: 'The ID of the Power-Up to disable',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  deprecated: true,
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getBoardsIdPluginsRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/plugins',
  tags: [],
  summary: 'Get Power-Ups on a Board',
  description: 'List the Power-Ups on a board',
  operationId: 'get-board-id-plugins',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['enabled', 'available'])
        .default('enabled')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'One of: `enabled` or `available`',
            required: false,
            schema: { type: 'string', default: 'enabled', enum: ['enabled', 'available'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: PluginSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postBoardsIdExportsRoute = createRoute({
  method: 'post',
  path: '/boards/{id}/exports',
  tags: [],
  summary: 'Create an Export for a Board',
  description:
    'Kick off an export of a board. Only one export may be in progress for a board at a time.',
  operationId: 'post-boards-id-exports',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      attachments: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'attachments',
            in: 'query',
            description: 'Whether the export should include attachments',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      attachment_age: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(3650),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'attachment_age',
            in: 'query',
            description:
              'Only include attachments created within this many days. `0` means no limit.',
            required: false,
            schema: { type: 'number', minimum: 0, maximum: 3650, default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getBoardsIdExportsIdExportRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/exports/{idExport}',
  tags: [],
  summary: 'Get an Export for a Board',
  description: 'Get the status of a board export',
  operationId: 'get-boards-id-exports-idexport',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idExport: TrelloIDSchema.openapi({
        param: {
          name: 'idExport',
          in: 'path',
          description: 'The ID of the export',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteBoardsIdExportsIdExportRoute = createRoute({
  method: 'delete',
  path: '/boards/{id}/exports/{idExport}',
  tags: [],
  summary: 'Delete an Export for a Board',
  description: 'Soft-delete a board export',
  operationId: 'delete-boards-id-exports-idexport',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idExport: TrelloIDSchema.openapi({
        param: {
          name: 'idExport',
          in: 'path',
          description: 'The ID of the export',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getBoardsIdExportsIdExportDownloadRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/exports/{idExport}/download',
  tags: [],
  summary: 'Download an Export for a Board',
  description:
    'Download the exported file. Redirects to the file location if the export is ready, or errors if it is not.',
  operationId: 'get-boards-id-exports-idexport-download',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idExport: TrelloIDSchema.openapi({
        param: {
          name: 'idExport',
          in: 'path',
          description: 'The ID of the export',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    302: { description: "Redirects to the export file's download location" },
    400: { description: 'Export is not ready for download' },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getBoardsIdExportsMostRecentRoute = createRoute({
  method: 'get',
  path: '/boards/{id}/exports/mostRecent',
  tags: [],
  summary: "Get a Board's Most Recent Export",
  description: 'Get the most recent successful export for a board',
  operationId: 'get-boards-id-exports-mostrecent',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the board',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
    404: { description: 'Board has no export, or is not in a Workspace' },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postCardsRoute = createRoute({
  method: 'post',
  path: '/cards',
  tags: [],
  summary: 'Create a new Card',
  description:
    'Create a new card. Query parameters may also be replaced with a JSON request body instead.',
  operationId: 'post-cards',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name for the card',
            required: false,
            schema: { type: 'string' },
          },
        }),
      desc: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'desc',
            in: 'query',
            description: 'The description for the card',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([z.enum(['top', 'bottom']), z.float32().min(0)]))
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description: 'The position of the new card. `top`, `bottom`, or a positive float',
            required: false,
            schema: {
              oneOf: [
                { type: 'string', enum: ['top', 'bottom'] },
                { type: 'number', format: 'float', minimum: 0 },
              ],
            },
          },
        }),
      due: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'due',
            in: 'query',
            description: 'A due date for the card',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      start: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.date().nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'The start date of a card, or `null`',
            required: false,
            schema: { nullable: true, type: 'string', format: 'date' },
          },
        }),
      dueComplete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dueComplete',
            in: 'query',
            description: 'Whether the status of the card is complete',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      idList: TrelloIDSchema.openapi({
        param: {
          name: 'idList',
          in: 'query',
          description: 'The ID of the list the card should be created in',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMembers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.xor([TrelloIDSchema])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'idMembers',
            in: 'query',
            description: 'Comma-separated list of member IDs to add to the card',
            required: false,
            schema: {
              type: 'array',
              items: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }] },
            },
          },
        }),
      idLabels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.xor([TrelloIDSchema])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'idLabels',
            in: 'query',
            description: 'Comma-separated list of label IDs to add to the card',
            required: false,
            schema: {
              type: 'array',
              items: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }] },
            },
          },
        }),
      urlSource: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'urlSource',
            in: 'query',
            description:
              'A URL starting with `http://` or `https://`. The URL will be attached to the card upon creation.',
            required: false,
            schema: { type: 'string', format: 'url' },
          },
        }),
      fileSource: z
        .file()
        .exactOptional()
        .openapi({
          param: {
            name: 'fileSource',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
      mimeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'mimeType',
            in: 'query',
            description: 'The mimeType of the attachment. Max length 256',
            required: false,
            schema: { type: 'string' },
          },
        }),
      idCardSource: TrelloIDSchema.openapi({
        param: {
          name: 'idCardSource',
          in: 'query',
          description: 'The ID of a card to copy into the new card',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      keepFromSource: z
        .enum([
          'all',
          'attachments',
          'checklists',
          'comments',
          'customFields',
          'due',
          'start',
          'labels',
          'members',
          'start',
          'stickers',
        ])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'keepFromSource',
            in: 'query',
            description:
              'If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              default: 'all',
              enum: [
                'all',
                'attachments',
                'checklists',
                'comments',
                'customFields',
                'due',
                'start',
                'labels',
                'members',
                'start',
                'stickers',
              ],
            },
          },
        }),
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'address',
            in: 'query',
            description: 'For use with/by the Map View',
            required: false,
            schema: { type: 'string' },
          },
        }),
      locationName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locationName',
            in: 'query',
            description: 'For use with/by the Map View',
            required: false,
            schema: { type: 'string' },
          },
        }),
      coordinates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'coordinates',
            in: 'query',
            description: 'For use with/by the Map View. Should take the form latitude,longitude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      cardRole: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['separator', 'board', 'mirror', 'link']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'cardRole',
            in: 'query',
            description:
              'For displaying cards in different ways based on the card name. Board cards must have a name that is a link to a Trello board. Mirror cards must have a name that is a link to a Trello card.',
            required: false,
            schema: {
              type: 'string',
              enum: ['separator', 'board', 'mirror', 'link'],
              nullable: true,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdRoute = createRoute({
  method: 'get',
  path: '/cards/{id}',
  tags: [],
  summary: 'Get a Card',
  description: 'Get a card by its ID',
  operationId: 'get-cards-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'actions',
            in: 'query',
            description:
              'See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: ((schema) =>
        z.union([
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            schema,
          ),
          schema,
        ]))(z.xor([z.literal('cover'), z.boolean()]))
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'attachments',
            in: 'query',
            description: '`true`, `false`, or `cover`',
            required: false,
            schema: {
              type: 'string',
              oneOf: [{ type: 'string', enum: ['cover'] }, { type: 'boolean' }],
              default: false,
            },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'attachment_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      members: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'members',
            in: 'query',
            description: 'Whether to return member objects for members on the card',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      member_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      membersVoted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'membersVoted',
            in: 'query',
            description: 'Whether to return member objects for members who voted on the card',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      memberVoted_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'memberVoted_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checkItemStates: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'checkItemStates',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'checklists',
            in: 'query',
            description: 'Whether to return the checklists on the card. `all` or `none`',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      checklist_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'checklist_fields',
            in: 'query',
            description: '`all` or a comma-separated list of `idBoard,idCard,name,pos`',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      board: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'board',
            in: 'query',
            description: 'Whether to return the board object the card is on',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      board_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'board_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      list: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'list',
            in: 'query',
            description:
              'See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      pluginData: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'pluginData',
            in: 'query',
            description: 'Whether to include pluginData on the card with the response',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      stickers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'stickers',
            in: 'query',
            description: 'Whether to include sticker models with the response',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      sticker_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'sticker_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      customFieldItems: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'customFieldItems',
            in: 'query',
            description: 'Whether to include the customFieldItems',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putCardsIdRoute = createRoute({
  method: 'put',
  path: '/cards/{id}',
  tags: [],
  summary: 'Update a Card',
  description:
    'Update a card. Query parameters may also be replaced with a JSON request body instead.',
  operationId: 'put-cards-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['value', ['cover']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          name: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'name',
                in: 'query',
                description: 'The new name for the card',
                required: false,
                schema: { type: 'string' },
              },
            }),
          desc: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'desc',
                in: 'query',
                description: 'The new description for the card',
                required: false,
                schema: { type: 'string' },
              },
            }),
          closed: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'closed',
                in: 'query',
                description: 'Whether the card should be archived (closed: true)',
                required: false,
                schema: { type: 'boolean' },
              },
            }),
          idMembers: TrelloIDSchema.openapi({
            param: {
              name: 'idMembers',
              in: 'query',
              description: 'Comma-separated list of member IDs',
              required: false,
              explode: false,
              style: 'form',
              schema: { $ref: '#/components/schemas/TrelloID' },
            },
          }).exactOptional(),
          idAttachmentCover: TrelloIDSchema.openapi({
            param: {
              name: 'idAttachmentCover',
              in: 'query',
              description:
                'The ID of the image attachment the card should use as its cover, or null for none',
              required: false,
              schema: { $ref: '#/components/schemas/TrelloID' },
            },
          }).exactOptional(),
          idList: TrelloIDSchema.openapi({
            param: {
              name: 'idList',
              in: 'query',
              description: 'The ID of the list the card should be in',
              required: false,
              schema: { $ref: '#/components/schemas/TrelloID' },
            },
          }).exactOptional(),
          idLabels: TrelloIDSchema.openapi({
            param: {
              name: 'idLabels',
              in: 'query',
              description: 'Comma-separated list of label IDs',
              required: false,
              explode: false,
              style: 'form',
              schema: { $ref: '#/components/schemas/TrelloID' },
            },
          }).exactOptional(),
          idBoard: TrelloIDSchema.openapi({
            param: {
              name: 'idBoard',
              in: 'query',
              description: 'The ID of the board the card should be on',
              required: false,
              schema: { $ref: '#/components/schemas/TrelloID' },
            },
          }).exactOptional(),
          pos: ((schema) =>
            z.union([
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                schema,
              ),
              schema,
            ]))(z.xor([z.enum(['top', 'bottom']), z.float32()]))
            .exactOptional()
            .openapi({
              param: {
                name: 'pos',
                in: 'query',
                description:
                  'The position of the card in its list. `top`, `bottom`, or a positive float',
                required: false,
                schema: {
                  oneOf: [
                    { type: 'string', enum: ['top', 'bottom'] },
                    { type: 'number', format: 'float' },
                  ],
                },
              },
            }),
          due: ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.date().nullable(),
          )
            .exactOptional()
            .openapi({
              param: {
                name: 'due',
                in: 'query',
                description: 'When the card is due, or `null`',
                required: false,
                schema: { nullable: true, type: 'string', format: 'date' },
              },
            }),
          start: ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.iso.date().nullable(),
          )
            .exactOptional()
            .openapi({
              param: {
                name: 'start',
                in: 'query',
                description: 'The start date of a card, or `null`',
                required: false,
                schema: { nullable: true, type: 'string', format: 'date' },
              },
            }),
          dueComplete: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'dueComplete',
                in: 'query',
                description: 'Whether the status of the card is complete',
                required: false,
                schema: { type: 'boolean' },
              },
            }),
          subscribed: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'subscribed',
                in: 'query',
                description: 'Whether the member is should be subscribed to the card',
                required: false,
                schema: { type: 'boolean' },
              },
            }),
          address: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'address',
                in: 'query',
                description: 'For use with/by the Map View',
                required: false,
                schema: { type: 'string' },
              },
            }),
          locationName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'locationName',
                in: 'query',
                description: 'For use with/by the Map View',
                required: false,
                schema: { type: 'string' },
              },
            }),
          coordinates: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'coordinates',
                in: 'query',
                description: 'For use with/by the Map View. Should be latitude,longitude',
                required: false,
                schema: { type: 'string' },
              },
            }),
          cover: z
            .object({
              value: z
                .object({
                  color: z
                    .enum([
                      'pink',
                      'yellow',
                      'lime',
                      'blue',
                      'black',
                      'orange',
                      'red',
                      'purple',
                      'sky',
                      'green',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green`',
                      example: 'pink',
                    }),
                  brightness: z
                    .enum(['dark', 'light'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light',
                    }),
                  url: z
                    .url()
                    .exactOptional()
                    .openapi({
                      description:
                        'Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "An object containing information regarding the card's cover \n `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an `idAttachment` at the same time.",
                  required: [],
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'cover',
                in: 'query',
                description:
                  "Updates the card's cover\n | Option | Values | About |\n |--------|--------|-------|\n | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |\n | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.\n | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.\n | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |\n | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |\n \n `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time. \n \n On the brightness options, setting it to light will make the text on the card cover dark:\n ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)\n \n And vice versa, setting it to dark will make the text on the card cover light: \n ![](/cloud/trello/images/rest/cards/cover-brightness-light.png) ",
                required: false,
                schema: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'object',
                      description:
                        "An object containing information regarding the card's cover \n `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an `idAttachment` at the same time.",
                      properties: {
                        color: {
                          type: 'string',
                          enum: [
                            'pink',
                            'yellow',
                            'lime',
                            'blue',
                            'black',
                            'orange',
                            'red',
                            'purple',
                            'sky',
                            'green',
                          ],
                          description:
                            'One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green`',
                          example: 'pink',
                        },
                        brightness: {
                          type: 'string',
                          enum: ['dark', 'light'],
                          description:
                            'Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light',
                        },
                        url: {
                          type: 'string',
                          format: 'url',
                          description:
                            'Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work.',
                        },
                      },
                    },
                  },
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteCardsIdRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}',
  tags: [],
  summary: 'Delete a Card',
  description: 'Delete a Card',
  operationId: 'delete-cards-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdFieldRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/{field}',
  tags: [],
  summary: 'Get a field on a Card',
  description: 'Get a specific property of a card',
  operationId: 'get-cards-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: CardFieldsSchema.openapi({
        param: {
          name: 'field',
          in: 'path',
          description: 'The desired field.',
          required: true,
          schema: { $ref: '#/components/schemas/CardFields' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdActionsRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/actions',
  tags: [],
  summary: 'Get Actions on a Card',
  description:
    'List the Actions on a Card. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.',
  operationId: 'get-cards-id-actions',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('commentCard, updateCard:idList')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
            required: false,
            schema: { type: 'string', default: 'commentCard, updateCard:idList' },
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
          z.number().max(19),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'The page of results for actions. Each page of results has 50 actions.',
            required: false,
            schema: { type: 'number', maximum: 19, default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ActionSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/attachments',
  tags: [],
  summary: 'Get Attachments on a Card',
  description: 'List the attachments on a card',
  operationId: 'get-cards-id-attachments',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      filter: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Use `cover` to restrict to just the cover attachment',
            required: false,
            schema: { type: 'string', default: 'false' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([AttachmentSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postCardsIdAttachmentsRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/attachments',
  tags: [],
  summary: 'Create Attachment On Card',
  description:
    'Create an Attachment to a Card. See https://glitch.com/~trello-attachments-api for code examples. You may need to remix the project in order to view it.',
  operationId: 'post-cards-id-attachments',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name of the attachment. Max length 256.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      file: z
        .file()
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: 'The file to attach, as multipart/form-data',
            required: false,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
      mimeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'mimeType',
            in: 'query',
            description: 'The mimeType of the attachment. Max length 256',
            required: false,
            schema: { type: 'string' },
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'A URL to attach. Must start with `http://` or `https://`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      setCover: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'setCover',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'Determines whether to use the new attachment as a cover for the Card.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([AttachmentSchema])) } },
    },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdAttachmentsIdAttachmentRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/attachments/{idAttachment}',
  tags: [],
  summary: 'Get an Attachment on a Card',
  description: 'Get a specific Attachment on a Card.',
  operationId: 'get-cards-id-attachments-idattachment',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idAttachment: TrelloIDSchema.openapi({
        param: {
          name: 'idAttachment',
          in: 'path',
          description: 'The ID of the Attachment',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.union([AttachmentFieldsSchema])),
        )
        .default(['all'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: 'The Attachment fields to be included in the response.',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: { anyOf: [{ $ref: '#/components/schemas/AttachmentFields' }] },
              default: ['all'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([AttachmentSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const deleteCardsIdAttachmentsIdAttachmentRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/attachments/{idAttachment}',
  tags: [],
  summary: 'Delete an Attachment on a Card',
  description: 'Delete an Attachment',
  operationId: 'deleted-cards-id-attachments-idattachment',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idAttachment: TrelloIDSchema.openapi({
        param: {
          name: 'idAttachment',
          in: 'path',
          description: 'The ID of the attachment to delete',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdBoardRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/board',
  tags: [],
  summary: 'Get the Board the Card is on',
  description: 'Get the board a card is on',
  operationId: 'get-cards-id-board',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdCheckItemStatesRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/checkItemStates',
  tags: [],
  summary: 'Get checkItems on a Card',
  description: 'Get the completed checklist items on a card',
  operationId: 'get-cards-id-checkitemstates',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of: `idCheckItem`, `state`',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdChecklistsRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/checklists',
  tags: [],
  summary: 'Get Checklists on a Card',
  description: 'Get the checklists on a card',
  operationId: 'get-cards-id-checklists',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      checkItems: z
        .enum(['all', 'none'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'checkItems',
            in: 'query',
            description: '`all` or `none`',
            required: false,
            schema: { type: 'string', enum: ['all', 'none'], default: 'all' },
          },
        }),
      checkItem_fields: z
        .enum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])
        .exactOptional()
        .openapi({
          param: {
            name: 'checkItem_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`',
            required: false,
            explode: false,
            style: 'form',
            schema: {
              type: 'string',
              default: 'name,nameData,pos,state,due,dueReminder,idMember',
              enum: ['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'],
            },
          },
          default: 'name,nameData,pos,state,due,dueReminder,idMember',
        }),
      filter: z
        .enum(['all', 'none'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: '`all` or `none`',
            required: false,
            schema: { type: 'string', default: 'all', enum: ['all', 'none'] },
          },
        }),
      fields: z
        .enum(['all', 'name', 'nameData', 'pos', 'state', 'type'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            explode: false,
            style: 'form',
            description: '`all` or a comma-separated list of: `idBoard,idCard,name,pos`',
            required: false,
            schema: {
              type: 'string',
              default: 'all',
              enum: ['all', 'name', 'nameData', 'pos', 'state', 'type'],
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postCardsIdChecklistsRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/checklists',
  tags: [],
  summary: 'Create Checklist on a Card',
  description: 'Create a new checklist on a card',
  operationId: 'post-cards-id-checklists',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name of the checklist',
            required: false,
            schema: { type: 'string' },
          },
        }),
      idChecklistSource: TrelloIDSchema.openapi({
        param: {
          name: 'idChecklistSource',
          in: 'query',
          description: 'The ID of a source checklist to copy into the new one',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      pos: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdCheckItemIdCheckItemRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/checkItem/{idCheckItem}',
  tags: [],
  summary: 'Get checkItem on a Card',
  description: 'Get a specific checkItem on a card',
  operationId: 'get-cards-id-checkitem-idcheckitem',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCheckItem: TrelloIDSchema.openapi({
        param: {
          name: 'idCheckItem',
          in: 'path',
          description: 'The ID of the checkitem',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('name,nameData,pos,state,due,dueReminder,idMember')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`',
            required: false,
            schema: { type: 'string', default: 'name,nameData,pos,state,due,dueReminder,idMember' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putCardsIdCheckItemIdCheckItemRoute = createRoute({
  method: 'put',
  path: '/cards/{id}/checkItem/{idCheckItem}',
  tags: [],
  summary: 'Update a checkItem on a Card',
  description: 'Update an item in a checklist on a card.',
  operationId: 'put-cards-id-checkitem-idcheckitem',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCheckItem: TrelloIDSchema.openapi({
        param: {
          name: 'idCheckItem',
          in: 'path',
          description: 'The ID of the checkitem',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The new name for the checklist item',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state: z
        .enum(['complete', 'incomplete'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description: 'One of: `complete`, `incomplete`',
            required: false,
            schema: { type: 'string', enum: ['complete', 'incomplete'] },
          },
        }),
      idChecklist: TrelloIDSchema.openapi({
        param: {
          name: 'idChecklist',
          in: 'query',
          description: 'The ID of the checklist this item is in',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description: '`top`, `bottom`, or a positive float',
            required: false,
            schema: { $ref: '#/components/schemas/posStringOrNumber' },
          },
        }),
      due: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'due',
            in: 'query',
            description: 'A due date for the checkitem',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      dueReminder: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dueReminder',
            in: 'query',
            description: 'A dueReminder for the due date on the checkitem',
            required: false,
            schema: { type: 'number', nullable: true },
          },
        }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'query',
          description: 'The ID of the member to remove from the card',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteCardsIdCheckItemIdCheckItemRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/checkItem/{idCheckItem}',
  tags: [],
  summary: 'Delete checkItem on a Card',
  description: 'Delete a checklist item',
  operationId: 'delete-cards-id-checkitem-idcheckitem',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCheckItem: TrelloIDSchema.openapi({
        param: {
          name: 'idCheckItem',
          in: 'path',
          description: 'The ID of the checkitem',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdListRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/list',
  tags: [],
  summary: 'Get the List of a Card',
  description: 'Get the list a card is in',
  operationId: 'get-cards-id-list',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdMembersRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/members',
  tags: [],
  summary: 'Get the Members of a Card',
  description: 'Get the members on a card',
  operationId: 'get-cards-id-members',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('avatarHash,fullName,initials,username')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'avatarHash,fullName,initials,username' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdMembersVotedRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/membersVoted',
  tags: [],
  summary: 'Get Members who have voted on a Card',
  description: 'Get the members who have voted on a card',
  operationId: 'get-cards-id-membersvoted',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('avatarHash,fullName,initials,username')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'avatarHash,fullName,initials,username' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postCardsIdMembersVotedRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/membersVoted',
  tags: [],
  summary: 'Add Member vote to Card',
  description: 'Vote on the card for a given member.',
  operationId: 'cardsidmembersvoted-1',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: "The ID of the member to vote 'yes' on the card",
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdPluginDataRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/pluginData',
  tags: [],
  summary: 'Get pluginData on a Card',
  description: 'Get any shared pluginData on a card.',
  operationId: 'get-cards-id-plugindata',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getCardsIdStickersRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/stickers',
  tags: [],
  summary: 'Get Stickers on a Card',
  description: 'Get the stickers on a card',
  operationId: 'get-cards-id-stickers',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postCardsIdStickersRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/stickers',
  tags: [],
  summary: 'Add a Sticker to a Card',
  description: 'Add a sticker to a card',
  operationId: 'post-cards-id-stickers',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      image: z
        .string()
        .openapi({
          param: {
            name: 'image',
            in: 'query',
            description:
              "For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)",
            required: true,
            schema: { type: 'string' },
          },
        }),
      top: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32().min(-60).max(100),
        )
        .openapi({
          param: {
            name: 'top',
            in: 'query',
            description: 'The top position of the sticker, from -60 to 100',
            required: true,
            schema: { type: 'number', format: 'float', minimum: -60, maximum: 100 },
          },
        }),
      left: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32().min(-60).max(100),
        )
        .openapi({
          param: {
            name: 'left',
            in: 'query',
            description: 'The left position of the sticker, from -60 to 100',
            required: true,
            schema: { type: 'number', format: 'float', minimum: -60, maximum: 100 },
          },
        }),
      zIndex: z
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
            name: 'zIndex',
            in: 'query',
            description: 'The z-index of the sticker',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      rotate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32().min(0).max(360),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'rotate',
            in: 'query',
            description: 'The rotation of the sticker',
            required: false,
            schema: { type: 'number', format: 'float', default: 0, minimum: 0, maximum: 360 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdStickersIdStickerRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/stickers/{idSticker}',
  tags: [],
  summary: 'Get a Sticker on a Card',
  description: 'Get a specific sticker on a card',
  operationId: 'get-cards-id-stickers-idsticker',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idSticker: TrelloIDSchema.openapi({
        param: {
          name: 'idSticker',
          in: 'path',
          description: 'The ID of the sticker',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putCardsIdStickersIdStickerRoute = createRoute({
  method: 'put',
  path: '/cards/{id}/stickers/{idSticker}',
  tags: [],
  summary: 'Update a Sticker on a Card',
  description: 'Update a sticker on a card',
  operationId: 'put-cards-id-stickers-idsticker',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idSticker: TrelloIDSchema.openapi({
        param: {
          name: 'idSticker',
          in: 'path',
          description: 'The ID of the sticker',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      top: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32().min(-60).max(100),
        )
        .openapi({
          param: {
            name: 'top',
            in: 'query',
            description: 'The top position of the sticker, from -60 to 100',
            required: true,
            schema: { type: 'number', format: 'float', minimum: -60, maximum: 100 },
          },
        }),
      left: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32().min(-60).max(100),
        )
        .openapi({
          param: {
            name: 'left',
            in: 'query',
            description: 'The left position of the sticker, from -60 to 100',
            required: true,
            schema: { type: 'number', format: 'float', minimum: -60, maximum: 100 },
          },
        }),
      zIndex: z
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
            name: 'zIndex',
            in: 'query',
            description: 'The z-index of the sticker',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      rotate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32().min(0).max(360),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'rotate',
            in: 'query',
            description: 'The rotation of the sticker',
            required: false,
            schema: { type: 'number', format: 'float', default: 0, minimum: 0, maximum: 360 },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteCardsIdStickersIdStickerRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/stickers/{idSticker}',
  tags: [],
  summary: 'Delete a Sticker on a Card',
  description: 'Remove a sticker from the card',
  operationId: 'delete-cards-id-stickers-idsticker',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idSticker: TrelloIDSchema.openapi({
        param: {
          name: 'idSticker',
          in: 'path',
          description: 'The ID of the sticker',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putCardsIdActionsIdActionCommentsRoute = createRoute({
  method: 'put',
  path: '/cards/{id}/actions/{idAction}/comments',
  tags: [],
  summary: 'Update Comment Action on a Card',
  description: 'Update an existing comment',
  operationId: 'put-cards-id-actions-idaction-comments',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the comment action to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'The new text for the comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteCardsIdActionsIdActionCommentsRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/actions/{idAction}/comments',
  tags: [],
  summary: 'Delete a comment on a Card',
  description: 'Delete a comment',
  operationId: 'delete-cards-id-actions-id-comments',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idAction: TrelloIDSchema.openapi({
        param: {
          name: 'idAction',
          in: 'path',
          description: 'The ID of the comment action to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putCardsIdCardCustomFieldIdCustomFieldItemRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/customField/{idCustomField}/item',
  tags: [],
  summary: 'Update Custom Field item on Card',
  description:
    'Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)',
  operationId: 'put-cards-idcard-customfield-idcustomfield-item',
  request: {
    params: z.object({
      idCard: TrelloIDSchema.openapi({
        param: {
          name: 'idCard',
          in: 'path',
          description: 'ID of the card that the Custom Field value should be set/updated for',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCustomField: TrelloIDSchema.openapi({
        param: {
          name: 'idCustomField',
          in: 'path',
          description: 'ID of the Custom Field on the card.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                value: z
                  .object({
                    text: z.string().exactOptional(),
                    checked: z.boolean().exactOptional(),
                    date: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ example: '2018-03-13T16:00:00.000Z' }),
                    number: z.string().exactOptional().openapi({ example: '2154' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined.",
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({
                idValue: TrelloIDSchema.exactOptional().openapi({
                  description: 'The ID of the option for the list type Custom Field',
                }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putCardsIdCardCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/customFields',
  tags: [],
  summary: 'Update Multiple Custom Field items on Card',
  description:
    'Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)',
  operationId: 'put-cards-idcard-customfields',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              customFieldItems: z
                .array(
                  z
                    .object({
                      idCustomField: z
                        .unknown()
                        .superRefine((val, ctx) => {
                          if (typeof val === 'string') {
                            if (!new RegExp('^[0-9a-fA-F]{32}$').test(val)) {
                              ctx.addIssue({ code: 'custom' })
                            }
                          }
                        })
                        .exactOptional()
                        .openapi({
                          example: '5abbe4b7ddc1b351ef961414',
                          description: 'The ID of the Custom Field',
                        }),
                      value: z
                        .object({
                          text: z.string().exactOptional(),
                          checked: z.boolean().exactOptional(),
                          date: z.iso
                            .datetime({ offset: true })
                            .exactOptional()
                            .openapi({ example: '2018-03-13T16:00:00.000Z' }),
                          number: z.string().exactOptional().openapi({ example: '2154' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            "An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined. This is optional if Custom Field is list type.",
                          required: [],
                        }),
                      idValue: z
                        .unknown()
                        .superRefine((val, ctx) => {
                          if (typeof val === 'string') {
                            if (!new RegExp('^[0-9a-fA-F]{32}$').test(val)) {
                              ctx.addIssue({ code: 'custom' })
                            }
                          }
                        })
                        .exactOptional()
                        .openapi({
                          example: '5abbe4b7ddc1b351ef961414',
                          description:
                            'The ID of the option for the list type Custom Field. This is optional if Custom Field is not list type.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects containing the custom field ID, key and value, and ID of list type option.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCardsIdCustomFieldItemsRoute = createRoute({
  method: 'get',
  path: '/cards/{id}/customFieldItems',
  tags: [],
  summary: 'Get Custom Field Items for a Card',
  description: 'Get the custom field items for a card.',
  operationId: 'get-cards-id-customfielditems',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CustomFieldItemsSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postCardsIdActionsCommentsRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/actions/comments',
  tags: [],
  summary: 'Add a new comment to a Card',
  description: 'Add a new comment to a card',
  operationId: 'post-cards-id-actions-comments',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'The comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ActionSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postCardsIdIdLabelsRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/idLabels',
  tags: [],
  summary: 'Add a Label to a Card',
  description: 'Add a label to a card',
  operationId: 'post-cards-id-idlabels',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The ID of the label to add',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postCardsIdIdMembersRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/idMembers',
  tags: [],
  summary: 'Add a Member to a Card',
  description: 'Add a member to a card',
  operationId: 'post-cards-id-idmembers',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The ID of the Member to add to the card',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postCardsIdLabelsRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/labels',
  tags: [],
  summary: 'Create a new Label on a Card',
  description: 'Create a new label for the board and add it to the given card.',
  operationId: 'post-cards-id-labels',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      color: z
        .string()
        .openapi({
          param: {
            name: 'color',
            in: 'query',
            description:
              'A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'A name for the label',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postCardsIdMarkAssociatedNotificationsReadRoute = createRoute({
  method: 'post',
  path: '/cards/{id}/markAssociatedNotificationsRead',
  tags: [],
  summary: "Mark a Card's Notifications as read",
  description: 'Mark notifications about this card as read',
  operationId: 'post-cards-id-markassociatednotificationsread',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteCardsIdIdLabelsIdLabelRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/idLabels/{idLabel}',
  tags: [],
  summary: 'Remove a Label from a Card',
  description: 'Remove a label from a card',
  operationId: 'delete-cards-id-idlabels-idlabel',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idLabel: TrelloIDSchema.openapi({
        param: {
          name: 'idLabel',
          in: 'path',
          description: 'The ID of the label to remove',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteCardsIdIdMembersIdMemberRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/idMembers/{idMember}',
  tags: [],
  summary: 'Remove a Member from a Card',
  description: 'Remove a member from a card',
  operationId: 'delete-id-idmembers-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The ID of the member to remove from the card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteCardsIdMembersVotedIdMemberRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/membersVoted/{idMember}',
  tags: [],
  summary: "Remove a Member's Vote on a Card",
  description: "Remove a member's vote from a card",
  operationId: 'delete-cards-id-membersvoted-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The ID of the member whose vote to remove',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}',
  tags: [],
  summary: 'Update Checkitem on Checklist on Card',
  description: 'Update an item in a checklist on a card.',
  operationId: 'put-cards-idcard-checklist-idchecklist-checkitem-idcheckitem',
  request: {
    params: z.object({
      idCard: TrelloIDSchema.openapi({
        param: {
          name: 'idCard',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCheckItem: TrelloIDSchema.openapi({
        param: {
          name: 'idCheckItem',
          in: 'path',
          description: 'The ID of the checklist item to update',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idChecklist: TrelloIDSchema.openapi({
        param: {
          name: 'idChecklist',
          in: 'path',
          description: 'The ID of the item to update.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description: '`top`, `bottom`, or a positive float',
            required: false,
            schema: { $ref: '#/components/schemas/posStringOrNumber' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CheckItemSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const deleteCardsIdChecklistsIdChecklistRoute = createRoute({
  method: 'delete',
  path: '/cards/{id}/checklists/{idChecklist}',
  tags: [],
  summary: 'Delete a Checklist on a Card',
  description: 'Delete a checklist from a card',
  operationId: 'delete-cards-id-checklists-idchecklist',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Card',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idChecklist: TrelloIDSchema.openapi({
        param: {
          name: 'idChecklist',
          in: 'path',
          description: 'The ID of the checklist to delete',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postChecklistsRoute = createRoute({
  method: 'post',
  path: '/checklists',
  tags: [],
  summary: 'Create a Checklist',
  operationId: 'post-checklists',
  request: {
    query: z.object({
      idCard: TrelloIDSchema.openapi({
        param: {
          name: 'idCard',
          in: 'query',
          description: 'The ID of the Card that the checklist should be added to.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      name: z
        .string()
        .min(1)
        .max(16384)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The name of the checklist. Should be a string of length 1 to 16384.',
            required: false,
            schema: { type: 'string', maxLength: 16384, minLength: 1 },
          },
        }),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.',
            required: false,
            schema: { $ref: '#/components/schemas/posStringOrNumber' },
          },
        }),
      idChecklistSource: TrelloIDSchema.openapi({
        param: {
          name: 'idChecklistSource',
          in: 'query',
          description: 'The ID of a checklist to copy into the new checklist.',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getChecklistsIdRoute = createRoute({
  method: 'get',
  path: '/checklists/{id}',
  tags: [],
  summary: 'Get a Checklist',
  operationId: 'get-checklists-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      cards: z
        .enum(['all', 'closed', 'none', 'open', 'visible'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'cards',
            in: 'query',
            description:
              'Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).',
            required: false,
            schema: {
              type: 'string',
              default: 'none',
              enum: ['all', 'closed', 'none', 'open', 'visible'],
            },
          },
        }),
      checkItems: z
        .enum(['all', 'none'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'checkItems',
            in: 'query',
            description: 'The check items on the list to return. One of: `all`, `none`.',
            required: false,
            schema: { type: 'string', enum: ['all', 'none'], default: 'all' },
          },
        }),
      checkItem_fields: z
        .enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])
        .exactOptional()
        .openapi({
          param: {
            name: 'checkItem_fields',
            in: 'query',
            description:
              'The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`',
            required: false,
            schema: {
              type: 'string',
              default: 'name, nameData, pos, state, due, dueReminder, idMember',
              enum: [
                'all',
                'name',
                'nameData',
                'pos',
                'state',
                'type',
                'due',
                'dueReminder',
                'idMember',
              ],
            },
          },
          default: 'name, nameData, pos, state, due, dueReminder, idMember',
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putChecklistsIdRoute = createRoute({
  method: 'put',
  path: '/checklists/{id}',
  tags: [],
  summary: 'Update a Checklist',
  description: 'Update an existing checklist.',
  operationId: 'put-checlists-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the new checklist being created. Should be length of 1 to 16384.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.',
            required: false,
            schema: { $ref: '#/components/schemas/posStringOrNumber' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteChecklistsIdRoute = createRoute({
  method: 'delete',
  path: '/checklists/{id}',
  tags: [],
  summary: 'Delete a Checklist',
  description: 'Delete a checklist',
  operationId: 'delete-checklists-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getChecklistsIdFieldRoute = createRoute({
  method: 'get',
  path: '/checklists/{id}/{field}',
  tags: [],
  summary: 'Get field on a Checklist',
  operationId: 'get-checklists-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: z
        .enum(['name', 'pos'])
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description: 'Field to update.',
            required: true,
            schema: { type: 'string', enum: ['name', 'pos'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putChecklistsIdFieldRoute = createRoute({
  method: 'put',
  path: '/checklists/{id}/{field}',
  tags: [],
  summary: 'Update field on a Checklist',
  operationId: 'put-checklists-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: z
        .enum(['name', 'pos'])
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description: 'Field to update.',
            required: true,
            schema: { type: 'string', enum: ['name', 'pos'] },
          },
        }),
    }),
    query: z.object({
      value: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([PosStringOrNumberSchema, TrelloIDSchema])).openapi({
        param: {
          name: 'value',
          in: 'query',
          description:
            'The value to change the checklist name to. Should be a string of length 1 to 16384.',
          required: true,
          schema: {
            oneOf: [
              { $ref: '#/components/schemas/posStringOrNumber' },
              { $ref: '#/components/schemas/TrelloID' },
            ],
          },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const getChecklistsIdBoardRoute = createRoute({
  method: 'get',
  path: '/checklists/{id}/board',
  tags: [],
  summary: 'Get the Board the Checklist is on',
  operationId: 'get-checklists-id-board',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['all', 'name'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['all', 'name'], default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getChecklistsIdCardsRoute = createRoute({
  method: 'get',
  path: '/checklists/{id}/cards',
  tags: [],
  summary: 'Get the Card a Checklist is on',
  operationId: 'get-checklists-id-cards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getChecklistsIdCheckItemsRoute = createRoute({
  method: 'get',
  path: '/checklists/{id}/checkItems',
  tags: [],
  summary: 'Get Checkitems on a Checklist',
  operationId: 'get-checklists-id-checkitems',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'none'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'One of: `all`, `none`.',
            required: false,
            schema: { type: 'string', default: 'all', enum: ['all', 'none'] },
          },
        }),
      fields: z
        .enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.',
            required: false,
            explode: false,
            style: 'form',
            schema: {
              type: 'string',
              default: 'name, nameData, pos, state, due, dueReminder, idMember',
              enum: [
                'all',
                'name',
                'nameData',
                'pos',
                'state',
                'type',
                'due',
                'dueReminder',
                'idMember',
              ],
            },
          },
          default: 'name, nameData, pos, state, due, dueReminder, idMember',
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postChecklistsIdCheckItemsRoute = createRoute({
  method: 'post',
  path: '/checklists/{id}/checkItems',
  tags: [],
  summary: 'Create Checkitem on Checklist',
  operationId: 'post-checklists-id-checkitems',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .min(1)
        .max(16384)
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'The name of the new check item on the checklist. Should be a string of length 1 to 16384.',
            required: true,
            schema: { type: 'string', maxLength: 16384, minLength: 1 },
          },
        }),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([z.enum(['top', 'bottom']), z.float32().openapi({ example: 1293.5 })]))
        .default('bottom')
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.',
            required: false,
            schema: {
              oneOf: [
                { type: 'string', enum: ['top', 'bottom'] },
                { type: 'number', format: 'float', example: 1293.5 },
              ],
              type: 'string',
              default: 'bottom',
            },
          },
        }),
      checked: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'checked',
            in: 'query',
            description: 'Determines whether the check item is already checked when created.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      due: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'due',
            in: 'query',
            description: 'A due date for the checkitem',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      dueReminder: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dueReminder',
            in: 'query',
            description: 'A dueReminder for the due date on the checkitem',
            required: false,
            schema: { type: 'number', nullable: true },
          },
        }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'query',
          description: 'An ID of a member resource.',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getChecklistsIdCheckItemsIdCheckItemRoute = createRoute({
  method: 'get',
  path: '/checklists/{id}/checkItems/{idCheckItem}',
  tags: [],
  summary: 'Get a Checkitem on a Checklist',
  operationId: 'get-checklists-id-checkitems-idcheckitem',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCheckItem: TrelloIDSchema.openapi({
        param: {
          name: 'idCheckItem',
          in: 'path',
          description: 'ID of the check item to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              default: 'name, nameData, pos, state, due, dueReminder, idMember',
              enum: [
                'all',
                'name',
                'nameData',
                'pos',
                'state',
                'type',
                'due',
                'dueReminder',
                'idMember',
              ],
            },
          },
          default: 'name, nameData, pos, state, due, dueReminder, idMember',
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const deleteChecklistsIdCheckItemsIdCheckItemRoute = createRoute({
  method: 'delete',
  path: '/checklists/{id}/checkItems/{idCheckItem}',
  tags: [],
  summary: 'Delete Checkitem from Checklist',
  description: 'Remove an item from a checklist',
  operationId: 'delete-checklists-id-checkitems-idcheckitem',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of a checklist.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCheckItem: TrelloIDSchema.openapi({
        param: {
          name: 'idCheckItem',
          in: 'path',
          description: 'ID of the check item to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postCustomFieldsRoute = createRoute({
  method: 'post',
  path: '/customFields',
  tags: [],
  summary: 'Create a new Custom Field on a Board',
  description: 'Create a new Custom Field on a board.',
  operationId: 'post-customfields',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              idModel: TrelloIDSchema.openapi({
                description:
                  'The ID of the model for which the Custom Field is being defined. This should always be the ID of a board.',
              }),
              modelType: z
                .literal('board')
                .openapi({
                  description:
                    'The type of model that the Custom Field is being defined on. This should always be `board`.',
                }),
              name: z.string().openapi({ description: 'The name of the Custom Field' }),
              type: z
                .enum(['checkbox', 'list', 'number', 'text', 'date'])
                .openapi({ description: 'The type of Custom Field to create.' }),
              options: z
                .string()
                .exactOptional()
                .openapi({ description: 'If the type is `checkbox` ' }),
              pos: PosStringOrNumberSchema.openapi({ description: '' }),
              display_cardFront: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: 'Whether this Custom Field should be shown on the front of Cards',
                }),
            })
            .openapi({ required: ['idModel', 'modelType', 'name', 'type', 'pos'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CustomFieldSchema } } },
  },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCustomFieldsIdRoute = createRoute({
  method: 'get',
  path: '/customFields/{id}',
  tags: [],
  summary: 'Get a Custom Field',
  operationId: 'get-customfields-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Custom Field.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CustomFieldSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putCustomFieldsIdRoute = createRoute({
  method: 'put',
  path: '/customFields/{id}',
  tags: [],
  summary: 'Update a Custom Field definition',
  description: 'Update a Custom Field definition.',
  operationId: 'put-customfields-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Custom Field.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the Custom Field' }),
              pos: PosStringOrNumberSchema.exactOptional(),
              'display/cardFront': z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether to display this custom field on the front of cards',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CustomFieldSchema } } },
  },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteCustomFieldsIdRoute = createRoute({
  method: 'delete',
  path: '/customFields/{id}',
  tags: [],
  summary: 'Delete a Custom Field definition',
  description: 'Delete a Custom Field from a board.',
  operationId: 'delete-customfields-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Custom Field.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCustomFieldsIdOptionsRoute = createRoute({
  method: 'get',
  path: '/customFields/{id}/options',
  tags: [],
  summary: 'Get Options of Custom Field drop down',
  description: 'Get the options of a drop down Custom Field',
  operationId: 'post-customfields-id-options',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the customfield.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const postCustomFieldsIdOptionsRoute = createRoute({
  method: 'post',
  path: '/customFields/{id}/options',
  tags: [],
  summary: 'Add Option to Custom Field dropdown',
  description: 'Add an option to a dropdown Custom Field',
  operationId: 'get-customfields-id-options',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the customfield.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getCustomFieldsIdOptionsIdCustomFieldOptionRoute = createRoute({
  method: 'get',
  path: '/customFields/{id}/options/{idCustomFieldOption}',
  tags: [],
  summary: 'Get Option of Custom Field dropdown',
  description: 'Retrieve a specific, existing Option on a given dropdown-type Custom Field',
  operationId: 'get-customfields-options-idcustomfieldoption',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the customfielditem.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCustomFieldOption: TrelloIDSchema.openapi({
        param: {
          name: 'idCustomFieldOption',
          in: 'path',
          description: 'ID of the customfieldoption to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const deleteCustomFieldsIdOptionsIdCustomFieldOptionRoute = createRoute({
  method: 'delete',
  path: '/customFields/{id}/options/{idCustomFieldOption}',
  tags: [],
  summary: 'Delete Option of Custom Field dropdown',
  description: 'Delete an option from a Custom Field dropdown.',
  operationId: 'delete-customfields-options-idcustomfieldoption',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the customfielditem.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idCustomFieldOption: TrelloIDSchema.openapi({
        param: {
          name: 'idCustomFieldOption',
          in: 'path',
          description: 'ID of the customfieldoption to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getEmojiRoute = createRoute({
  method: 'get',
  path: '/emoji',
  tags: [],
  summary: 'List available Emoji',
  description: 'List available Emoji',
  operationId: 'emoji',
  request: {
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description:
              "The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.",
            required: false,
            schema: { type: 'string' },
          },
        }),
      spritesheets: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'spritesheets',
            in: 'query',
            description: '`true` to return spritesheet URLs in the response',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: EmojiSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const getEnterprisesIdRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}',
  tags: [],
  summary: 'Get an Enterprise',
  description: 'Get an enterprise by its ID.',
  operationId: 'get-enterprises-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              "Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`",
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      members: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'members',
            in: 'query',
            description: 'One of: `none`, `normal`, `admins`, `owners`, `all`',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials, username')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description: 'One of: `avatarHash`, `fullName`, `initials`, `username`',
            required: false,
            schema: { type: 'string', default: 'avatarHash, fullName, initials, username' },
          },
        }),
      member_filter: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_filter',
            in: 'query',
            description:
              'Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      member_sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'member_sort',
            in: 'query',
            description:
              "This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.",
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_sortBy: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_sortBy',
            in: 'query',
            description:
              "Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.",
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      member_sortOrder: z
        .string()
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_sortOrder',
            in: 'query',
            description:
              'Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`',
            required: false,
            schema: { type: 'string', default: 'id' },
          },
        }),
      member_startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'member_startIndex',
            in: 'query',
            description: 'Any integer between 0 and 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: '1' },
          },
        }),
      member_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'member_count',
            in: 'query',
            description: '0 to 100',
            required: false,
            schema: { type: 'integer', format: 'int32', default: '10' },
          },
        }),
      organizations: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'organizations',
            in: 'query',
            description: 'One of: `none`, `members`, `public`, `all`',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      organization_fields: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description: 'Any valid value that the [nested organization field resource]() accepts.',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      organization_paid_accounts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_paid_accounts',
            in: 'query',
            description:
              'Whether or not to include paid account information in the returned workspace objects',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      organization_memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_memberships',
            in: 'query',
            description:
              'Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: EnterpriseSchema } } },
  },
  security: [{ OAuth2: ['read:enterprise:trello'] }],
})

export const getEnterprisesIdAuditlogRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/auditlog',
  tags: [],
  summary: 'Get auditlog data for an Enterprise',
  description:
    "Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. \n\n NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.",
  operationId: 'get-enterprises-id-auditlog',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(EnterpriseAuditLogSchema) } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const getEnterprisesIdAdminsRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/admins',
  tags: [],
  summary: 'Get Enterprise admin Members',
  description: "Get an enterprise's admin members.",
  operationId: 'get-enterprises-id-admins',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('fullName, userName')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: 'Any valid value that the [nested member field resource]() accepts.',
            required: false,
            schema: { type: 'string', default: 'fullName, userName' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnterpriseAdminSchema } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['read:enterprise:trello'] }],
})

export const getEnterprisesIdSignupUrlRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/signupUrl',
  tags: [],
  summary: 'Get signupUrl for Enterprise',
  description: 'Get the signup URL for an enterprise.',
  operationId: 'get-enterprises-id-signupurl',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      authenticate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'authenticate',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      confirmationAccepted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'confirmationAccepted',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      returnUrl: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.url().nullable(),
      )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'returnUrl',
            in: 'query',
            description: 'Any valid URL.',
            required: false,
            schema: { type: 'string', format: 'url', default: null, nullable: true },
          },
        }),
      tosAccepted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'tosAccepted',
            in: 'query',
            description:
              'Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.object({ signupUrl: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getEnterprisesIdMembersQueryRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/members/query',
  tags: [],
  summary: 'Get Users of an Enterprise',
  description:
    "Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc. The response is paginated and will return 100 users at a time.",
  operationId: 'get-users-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      licensed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'licensed',
            in: 'query',
            description:
              'When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      deactivated: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'deactivated',
            in: 'query',
            description:
              'When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      collaborator: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'collaborator',
            in: 'query',
            description:
              'When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      managed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'managed',
            in: 'query',
            description:
              'When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.',
            required: false,
            schema: { type: 'boolean', default: 'none' },
          },
          default: 'none',
        }),
      admin: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'admin',
            in: 'query',
            description:
              'When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      activeSince: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'activeSince',
            in: 'query',
            description: 'Returns only Trello users active since this date (inclusive).',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      inactiveSince: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'inactiveSince',
            in: 'query',
            description: 'Returns only Trello users active since this date (inclusive).',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      search: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              'Returns members with email address or full name that start with the search value.',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      cursor: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'Cursor to return next set of results, use cursor returned in the response to query the next batch.',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getEnterprisesIdMembersRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/members',
  tags: [],
  summary: 'Get Members of Enterprise',
  description: 'Get the members of an enterprise.',
  operationId: 'get-enterprises-id-members',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('avatarHash, fullName, initials, username')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).',
            schema: { type: 'string', default: 'avatarHash, fullName, initials, username' },
            required: false,
          },
        }),
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              "This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.",
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sortBy',
            in: 'query',
            description:
              "Deprecated: Please use `sort` instead. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.",
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortOrder: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .union([
            z.literal('ascending'),
            z.literal('descending'),
            z.literal('asc'),
            z.literal('desc'),
            z.literal(null),
          ])
          .nullable(),
      )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            description:
              'Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.',
            required: false,
            schema: {
              type: 'string',
              enum: ['ascending', 'descending', 'asc', 'desc', null],
              default: null,
              nullable: true,
            },
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(9999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startIndex',
            in: 'query',
            description: 'Any integer between 0 and 9999.',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 9999 },
          },
        }),
      count: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            description: 'SCIM-style filter.',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      organization_fields: z
        .string()
        .default('displayName')
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              'Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.',
            required: false,
            schema: { type: 'string', default: 'displayName' },
          },
        }),
      board_fields: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            name: 'board_fields',
            in: 'query',
            description:
              'Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.',
            required: false,
            schema: { type: 'string', default: 'name' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(MemberSchema) } },
    },
  },
  security: [{ OAuth2: ['read:enterprise:trello'] }],
})

export const getEnterprisesIdMembersIdMemberRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/members/{idMember}',
  tags: [],
  summary: 'Get a Member of Enterprise',
  description: 'Get a specific member of an enterprise by ID.',
  operationId: 'get-enterprises-id-members-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'An ID of a member resource.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('avatarHash, fullName, initials, username')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'A comma separated list of any valid values that the [nested member field resource]() accepts.',
            required: false,
            schema: { type: 'string', default: 'avatarHash, fullName, initials, username' },
          },
        }),
      organization_fields: z
        .string()
        .default('displayName')
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              'Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.',
            required: false,
            schema: { type: 'string', default: 'displayName' },
          },
        }),
      board_fields: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            name: 'board_fields',
            in: 'query',
            description:
              'Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.',
            required: false,
            schema: { type: 'string', default: 'name' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MemberSchema } } },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['read:enterprise:trello'] }],
})

export const getEnterprisesIdTransferrableOrganizationIdOrganizationRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/transferrable/organization/{idOrganization}',
  tags: [],
  summary: 'Get whether an organization can be transferred to an enterprise.',
  description: 'Get whether an organization can be transferred to an enterprise.',
  operationId: 'get-enterprises-id-transferrable-organization-idOrganization',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idOrganization: TrelloIDSchema.openapi({
        param: {
          name: 'idOrganization',
          in: 'path',
          description: 'An ID of an Organization resource.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransferrableOrganizationSchema } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const getEnterprisesIdTransferrableBulkIdOrganizationsRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/transferrable/bulk/{idOrganizations}',
  tags: [],
  summary: 'Get a bulk list of organizations that can be transferred to an enterprise.',
  description:
    'Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.',
  operationId: 'get-enterprises-id-transferrable-bulk-idOrganizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idOrganizations: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z.array(z.union([OrganizationSchema])),
        )
        .openapi({
          param: {
            name: 'idOrganizations',
            in: 'path',
            description: 'An array of IDs of an Organization resource.',
            required: true,
            schema: {
              type: 'array',
              items: { anyOf: [{ $ref: '#/components/schemas/Organization' }] },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.union([TransferrableOrganizationSchema])) },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const putEnterprisesIdEnterpriseJoinRequestBulkRoute = createRoute({
  method: 'put',
  path: '/enterprises/${id}/enterpriseJoinRequest/bulk',
  tags: [],
  summary: 'Decline enterpriseJoinRequests from one organization or a bulk list of organizations.',
  description:
    'Decline enterpriseJoinRequests from one organization or bulk amount of organizations',
  operationId: 'put-enterprises-id-enterpriseJoinRequest-bulk',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      idOrganizations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.union([OrganizationSchema])),
        )
        .openapi({
          param: {
            name: 'idOrganizations',
            in: 'query',
            description: 'An array of IDs of an Organization resource.',
            required: true,
            schema: {
              type: 'array',
              items: { anyOf: [{ $ref: '#/components/schemas/Organization' }] },
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const getEnterprisesIdClaimableOrganizationsRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/claimableOrganizations',
  tags: [],
  summary: 'Get ClaimableOrganizations of an Enterprise',
  description:
    'Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.',
  operationId: 'get-enterprises-id-claimableOrganizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
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
            name: 'limit',
            in: 'query',
            description: 'Limits the number of workspaces to be sorted',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Specifies the sort order to return matching documents',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the enterprise to retrieve workspaces for',
            required: false,
            schema: { type: 'string' },
          },
        }),
      activeSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'activeSince',
            in: 'query',
            description:
              'Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace',
            required: false,
            schema: { type: 'string' },
          },
        }),
      inactiveSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'inactiveSince',
            in: 'query',
            description:
              'Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClaimableOrganizationsSchema } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected erorr',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const getEnterprisesIdPendingOrganizationsRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/pendingOrganizations',
  tags: [],
  summary: 'Get PendingOrganizations of an Enterprise',
  description: 'Get the Workspaces that are pending for the enterprise by ID.',
  operationId: 'get-enterprises-id-pendingOrganizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      activeSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'activeSince',
            in: 'query',
            description:
              'Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace',
            required: false,
            schema: { type: 'string' },
          },
        }),
      inactiveSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'inactiveSince',
            in: 'query',
            description:
              'Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(PendingOrganizationsSchema) } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected erorr',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['read:enterprise:trello'] }],
})

export const postEnterprisesIdTokensRoute = createRoute({
  method: 'post',
  path: '/enterprises/{id}/tokens',
  tags: [],
  summary: 'Create an auth Token for an Enterprise.',
  description: 'Create an auth Token for an Enterprise.',
  operationId: 'post-enterprises-id-tokens',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the enterprise to retrieve.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expiration: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'expiration',
            in: 'query',
            description: 'One of: `1hour`, `1day`, `30days`, `never`',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getEnterprisesIdOrganizationsRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/organizations',
  tags: [],
  summary: 'Get Organizations of an Enterprise',
  description: 'Get the organizations of an enterprise.',
  operationId: 'get-enterprises-id-organizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(9999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startIndex',
            in: 'query',
            description: 'Any integer greater than and equal to 1.',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 9999 },
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
          z.int32().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            description: 'Any integer between 0 and 100.',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(OrganizationSchema) } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['read:enterprise:trello'] }],
})

export const putEnterprisesIdOrganizationsRoute = createRoute({
  method: 'put',
  path: '/enterprises/{id}/organizations',
  tags: [],
  summary: 'Transfer an Organization to an Enterprise.',
  description:
    'Transfer an organization to an enterprise.\n\n NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.',
  operationId: 'put-enterprises-id-organizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      idOrganization: z
        .string()
        .openapi({
          param: {
            name: 'idOrganization',
            in: 'query',
            description: 'ID of Organization to be transferred to Enterprise.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.union([OrganizationSchema])) } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const putEnterprisesIdMembersIdMemberLicensedRoute = createRoute({
  method: 'put',
  path: '/enterprises/{id}/members/{idMember}/licensed',
  summary: "Update a Member's licensed status",
  description:
    "This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise. \n\n NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.",
  operationId: 'put-enterprises-id-members-idmember-licensed',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The ID of the Member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description:
              'Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MemberSchema } } },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const putEnterprisesIdMembersIdMemberDeactivatedRoute = createRoute({
  method: 'put',
  path: '/enterprises/{id}/members/{idMember}/deactivated',
  tags: [],
  summary: 'Deactivate a Member of an Enterprise.',
  description:
    'Deactivate a Member of an Enterprise.\n\n NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.',
  operationId: 'enterprises-id-members-idMember-deactivated',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'ID of the Member to deactive.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Determines whether the user is deactivated or not.',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'A comma separated list of any valid values that the [nested member field resource]() accepts.',
            required: false,
            explode: false,
            style: 'form',
            schema: {
              type: 'string',
              enum: ['id'],
              default: 'avatarHash, fullName, initials, username',
            },
          },
          default: 'avatarHash, fullName, initials, username',
        }),
      organization_fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              'Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.',
            required: false,
            explode: false,
            style: 'form',
            schema: { type: 'string', enum: ['id', 'name'], default: 'displayName' },
          },
          default: 'displayName',
        }),
      board_fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            name: 'board_fields',
            in: 'query',
            description:
              'Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'name',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:enterprise:trello'] }],
})

export const putEnterprisesIdAdminsIdMemberRoute = createRoute({
  method: 'put',
  path: '/enterprises/{id}/admins/{idMember}',
  tags: [],
  summary: 'Update Member to be admin of Enterprise',
  description:
    'Make Member an admin of Enterprise.\n\n NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.',
  operationId: 'put-enterprises-id-admins-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'ID of member to be made an admin of enterprise.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteEnterprisesIdAdminsIdMemberRoute = createRoute({
  method: 'delete',
  path: '/enterprises/{id}/admins/{idMember}',
  tags: [],
  summary: 'Remove a Member as admin from Enterprise.',
  description:
    'Remove a member as admin from an enterprise.\n\n NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.',
  operationId: 'enterprises-id-organizations-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the Enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'ID of the member to be removed as an admin from enterprise.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteEnterprisesIdOrganizationsIdOrgRoute = createRoute({
  method: 'delete',
  path: '/enterprises/{id}/organizations/{idOrg}',
  tags: [],
  summary: 'Delete an Organization from an Enterprise.',
  description: 'Remove an organization from an enterprise.',
  operationId: 'delete-enterprises-id-organizations-idorg',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idOrg: TrelloIDSchema.openapi({
        param: {
          name: 'idOrg',
          in: 'path',
          description: 'ID of the organization to be removed from the enterprise.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getEnterprisesIdOrganizationsBulkIdOrganizationsRoute = createRoute({
  method: 'get',
  path: '/enterprises/{id}/organizations/bulk/{idOrganizations}',
  tags: [],
  summary: 'Bulk accept a set of organizations to an Enterprise.',
  description:
    'Accept an array of organizations to an enterprise.\n\n NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.',
  operationId: 'get-enterprises-id-organizations-bulk-idOrganizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the enterprise to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idOrganizations: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z.array(z.union([OrganizationSchema])),
        )
        .openapi({
          param: {
            name: 'idOrganizations',
            in: 'path',
            description: 'An array of IDs of the organizations to be removed from the enterprise.',
            required: true,
            schema: {
              type: 'array',
              items: { anyOf: [{ $ref: '#/components/schemas/Organization' }] },
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getLabelsIdRoute = createRoute({
  method: 'get',
  path: '/labels/{id}',
  tags: [],
  summary: 'Get a Label',
  description: 'Get information about a single Label.',
  operationId: 'get-labels-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Label',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putLabelsIdRoute = createRoute({
  method: 'put',
  path: '/labels/{id}',
  tags: [],
  summary: 'Update a Label',
  description: 'Update a label by ID.',
  operationId: 'put-labels-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Label',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The new name for the label',
            required: false,
            schema: { type: 'string' },
          },
        }),
      color: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ColorSchema.openapi({
          param: {
            name: 'color',
            in: 'query',
            description:
              'The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options',
            required: false,
            schema: { $ref: '#/components/schemas/Color' },
          },
        }),
      ).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const deleteLabelsIdRoute = createRoute({
  method: 'delete',
  path: '/labels/{id}',
  tags: [],
  summary: 'Delete a Label',
  description: 'Delete a label by ID.',
  operationId: 'delete-labels-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Label',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putLabelsIdFieldRoute = createRoute({
  method: 'put',
  path: '/labels/{id}/{field}',
  tags: [],
  summary: 'Update a field on a label',
  description: 'Update a field on a label.',
  operationId: 'put-labels-id-field',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the label',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .enum(['color', 'name'])
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description: 'The field on the Label to update.',
            required: true,
            schema: { type: 'string', enum: ['color', 'name'] },
          },
        }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The new value for the field.',
          schema: { $ref: '#/components/schemas/TrelloID' },
          required: true,
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const postLabelsRoute = createRoute({
  method: 'post',
  path: '/labels',
  tags: [],
  summary: 'Create a Label',
  description: 'Create a new Label on a Board.',
  operationId: 'post-labels',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name for the label',
            required: true,
            schema: { type: 'string' },
          },
        }),
      color: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ColorSchema.openapi({
          param: {
            name: 'color',
            in: 'query',
            description: 'The color for the label.',
            required: true,
            schema: { $ref: '#/components/schemas/Color' },
          },
        }),
      ),
      idBoard: z
        .string()
        .openapi({
          param: {
            name: 'idBoard',
            in: 'query',
            description: 'The ID of the Board to create the Label on.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const getListsIdRoute = createRoute({
  method: 'get',
  path: '/lists/{id}',
  tags: [],
  summary: 'Get a List',
  description: 'Get information about a List',
  operationId: 'get-lists-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('name,closed,idBoard,pos')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            style: 'form',
            explode: false,
            description: '`all` or a comma separated list of List field names.',
            required: false,
            schema: { type: 'string', default: 'name,closed,idBoard,pos' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const putListsIdRoute = createRoute({
  method: 'put',
  path: '/lists/{id}',
  tags: [],
  summary: 'Update a List',
  description: 'Update the properties of a List',
  operationId: 'put-lists-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'New name for the list',
            required: false,
            schema: { type: 'string' },
          },
        }),
      closed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'closed',
            in: 'query',
            description: 'Whether the list should be closed (archived)',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      idBoard: TrelloIDSchema.openapi({
        param: {
          name: 'idBoard',
          in: 'query',
          description: 'ID of a board the list should be moved to',
          required: false,
          explode: false,
          style: 'form',
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([z.float32(), z.enum(['top', 'bottom'])]))
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'New position for the list: `top`, `bottom`, or a positive floating point number',
            required: false,
            schema: {
              oneOf: [
                { type: 'number', format: 'float' },
                { type: 'string', enum: ['top', 'bottom'] },
              ],
            },
          },
        }),
      subscribed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'subscribed',
            in: 'query',
            description: 'Whether the active member is subscribed to this list',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const postListsRoute = createRoute({
  method: 'post',
  path: '/lists',
  tags: [],
  summary: 'Create a new List',
  description: 'Create a new List on a Board',
  operationId: 'post-lists',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name for the list',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoard: TrelloIDSchema.openapi({
        param: {
          name: 'idBoard',
          in: 'query',
          description: 'The long ID of the board the list should be created on',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idListSource: TrelloIDSchema.openapi({
        param: {
          name: 'idListSource',
          in: 'query',
          description: 'ID of the List to copy into the new List',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([z.float32(), z.enum(['top', 'bottom'])]))
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'Position of the list. `top`, `bottom`, or a positive floating point number',
            required: false,
            schema: {
              oneOf: [
                { type: 'number', format: 'float' },
                { type: 'string', enum: ['top', 'bottom'] },
              ],
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postListsIdArchiveAllCardsRoute = createRoute({
  method: 'post',
  path: '/lists/{id}/archiveAllCards',
  tags: [],
  summary: 'Archive all Cards in List',
  description: 'Archive all cards in a list',
  operationId: 'post-lists-id-archiveallcards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the list',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const postListsIdMoveAllCardsRoute = createRoute({
  method: 'post',
  path: '/lists/{id}/moveAllCards',
  tags: [],
  summary: 'Move all Cards in List',
  description: 'Move all Cards in a List',
  operationId: 'post-lists-id-moveallcards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the list',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      idBoard: TrelloIDSchema.openapi({
        param: {
          name: 'idBoard',
          in: 'query',
          description: 'The ID of the board the cards should be moved to',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idList: TrelloIDSchema.openapi({
        param: {
          name: 'idList',
          in: 'query',
          description: 'The ID of the list that the cards should be moved to',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putListsIdClosedRoute = createRoute({
  method: 'put',
  path: '/lists/{id}/closed',
  tags: [],
  summary: 'Archive or unarchive a list',
  description: 'Archive or unarchive a list',
  operationId: 'put-lists-id-closed',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the list',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'Set to true to close (archive) the list',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putListsIdIdBoardRoute = createRoute({
  method: 'put',
  path: '/lists/{id}/idBoard',
  tags: [],
  summary: 'Move List to Board',
  description: 'Move a List to a different Board',
  operationId: 'put-id-idboard',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the list',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The ID of the board to move the list to',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:board:trello'] }],
})

export const putListsIdFieldRoute = createRoute({
  method: 'put',
  path: '/lists/{id}/{field}',
  tags: [],
  summary: 'Update a field on a List',
  description: 'Rename a list',
  operationId: 'put-lists-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the list',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: z
        .enum(['name', 'pos', 'subscribed'])
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description: 'The field on the List to be updated',
            required: true,
            schema: { type: 'string', enum: ['name', 'pos', 'subscribed'] },
          },
        }),
    }),
    query: z.object({
      value: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.string().openapi({ description: 'The new name for the List' }),
          z.float32().openapi({ description: 'The new position for the List' }),
          z.enum(['top', 'bottom']).openapi({ description: 'The new position for the List' }),
          z.boolean(),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'The new value for the field',
            required: false,
            schema: {
              oneOf: [
                { type: 'string', description: 'The new name for the List' },
                { type: 'number', format: 'float', description: 'The new position for the List' },
                {
                  type: 'string',
                  enum: ['top', 'bottom'],
                  description: 'The new position for the List',
                },
                { type: 'boolean' },
              ],
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'write:board:trello'] }],
})

export const getListsIdActionsRoute = createRoute({
  method: 'get',
  path: '/lists/{id}/actions',
  tags: [],
  summary: 'Get Actions for a List',
  description: 'Get the Actions on a List',
  operationId: 'get-lists-id-actions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getListsIdBoardRoute = createRoute({
  method: 'get',
  path: '/lists/{id}/board',
  tags: [],
  summary: 'Get the Board a List is on',
  description: 'Get the board a list is on',
  operationId: 'get-lists-id-board',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getListsIdCardsRoute = createRoute({
  method: 'get',
  path: '/lists/{id}/cards',
  tags: [],
  summary: 'Get Cards in a List',
  description: 'List the cards in a list',
  operationId: 'get-lists-id-cards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the list',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CardSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getMembersIdRoute = createRoute({
  method: 'get',
  path: '/members/{id}',
  tags: [],
  summary: 'Get a Member',
  description: 'Get a member',
  operationId: 'get-members=id',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'actions',
            in: 'query',
            description:
              'See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      boards: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'boards',
            in: 'query',
            description:
              'See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      boardBackgrounds: z
        .enum(['all', 'custom', 'default', 'none', 'premium'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'boardBackgrounds',
            in: 'query',
            description: 'One of: `all`, `custom`, `default`, `none`, `premium`',
            required: false,
            schema: {
              type: 'string',
              enum: ['all', 'custom', 'default', 'none', 'premium'],
              default: 'none',
            },
          },
        }),
      boardsInvited: z
        .enum([
          'closed',
          'members',
          'open',
          'organization',
          'pinned',
          'public',
          'starred',
          'unpinned',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'boardsInvited',
            in: 'query',
            description:
              '`all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned',
            required: false,
            schema: {
              enum: [
                'closed',
                'members',
                'open',
                'organization',
                'pinned',
                'public',
                'starred',
                'unpinned',
              ],
              type: 'string',
            },
          },
        }),
      boardsInvited_fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'boardsInvited_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'name,closed,idOrganization,pinned',
            },
          },
          default: 'name,closed,idOrganization,pinned',
        }),
      boardStars: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'boardStars',
            in: 'query',
            description: 'Whether to return the boardStars or not',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'cards',
            in: 'query',
            description:
              'See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options',
            required: false,
            schema: { type: 'string', default: 'none' },
          },
        }),
      customBoardBackgrounds: z
        .enum(['all', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'customBoardBackgrounds',
            in: 'query',
            description: '`all` or `none`',
            required: false,
            schema: { type: 'string', enum: ['all', 'none'], default: 'none' },
          },
        }),
      customEmoji: z
        .enum(['all', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'customEmoji',
            in: 'query',
            description: '`all` or `none`',
            required: false,
            schema: { type: 'string', enum: ['all', 'none'], default: 'none' },
          },
        }),
      customStickers: z
        .enum(['all', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'customStickers',
            in: 'query',
            description: '`all` or `none`',
            required: false,
            schema: { type: 'string', enum: ['all', 'none'], default: 'none' },
          },
        }),
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
      notifications: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'notifications',
            in: 'query',
            description:
              'See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organizations: z
        .enum(['all', 'members', 'none', 'public'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'organizations',
            in: 'query',
            description: 'One of: `all`, `members`, `none`, `public`',
            required: false,
            schema: { type: 'string', enum: ['all', 'members', 'none', 'public'], default: 'none' },
          },
        }),
      organization_fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
      organization_paid_account: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_paid_account',
            in: 'query',
            description:
              'Whether or not to include paid account information in the returned workspace object',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      organizationsInvited: z
        .enum(['all', 'members', 'none', 'public'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationsInvited',
            in: 'query',
            description: 'One of: `all`, `members`, `none`, `public`',
            required: false,
            schema: { type: 'string', enum: ['all', 'members', 'none', 'public'], default: 'none' },
          },
        }),
      organizationsInvited_fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationsInvited_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
      paid_account: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'paid_account',
            in: 'query',
            description:
              'Whether or not to include paid account information in the returned member object',
            required: false,
            schema: { type: 'boolean', default: false },
            deprecated: true,
          },
        }),
      savedSearches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'savedSearches',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      tokens: z
        .enum(['all', 'none'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'tokens',
            in: 'query',
            description: '`all` or `none`',
            required: false,
            schema: { type: 'string', enum: ['all', 'none'], default: 'none' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MemberSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const putMembersIdRoute = createRoute({
  method: 'put',
  path: '/members/{id}',
  tags: [],
  summary: 'Update a Member',
  description: 'Update a Member',
  operationId: 'put-members-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fullName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fullName',
            in: 'query',
            description: 'New name for the member. Cannot begin or end with a space.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      initials: z
        .string()
        .min(1)
        .max(4)
        .exactOptional()
        .openapi({
          param: {
            name: 'initials',
            in: 'query',
            description: 'New initials for the member. 1-4 characters long.',
            required: false,
            schema: { type: 'string', maxLength: 4, minLength: 1 },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            description:
              'New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bio: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bio',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avatarSource: z
        .enum(['gravatar', 'none', 'upload'])
        .exactOptional()
        .openapi({
          param: {
            name: 'avatarSource',
            in: 'query',
            description: 'One of: `gravatar`, `none`, `upload`',
            required: false,
            schema: { type: 'string', enum: ['gravatar', 'none', 'upload'] },
          },
        }),
      'prefs/colorBlind': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/colorBlind',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'prefs/locale': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/locale',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/minutesBetweenSummaries': z
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
            name: 'prefs/minutesBetweenSummaries',
            in: 'query',
            description: '`-1` for disabled, `1`, or `60`',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MemberSchema]) } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdFieldRoute = createRoute({
  method: 'get',
  path: '/members/{id}/{field}',
  tags: [],
  summary: 'Get a field on a Member',
  description: 'Get a particular property of a member',
  operationId: 'get-members-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: MemberFieldsSchema.openapi({
        param: {
          name: 'field',
          in: 'path',
          description:
            'One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
          required: true,
          schema: { $ref: '#/components/schemas/MemberFields' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MemberSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getMembersIdActionsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/actions',
  tags: [],
  summary: "Get a Member's Actions",
  description: 'List the actions for a member',
  operationId: 'get-members-id-actions',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([MemberSchema])) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getMembersIdBoardBackgroundsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/boardBackgrounds',
  tags: [],
  summary: "Get Member's custom Board backgrounds",
  description: "Get a member's custom board backgrounds",
  operationId: 'get-members-id-boardbackgrounds',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'custom', 'default', 'none', 'premium'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'One of: `all`, `custom`, `default`, `none`, `premium`',
            required: false,
            schema: {
              enum: ['all', 'custom', 'default', 'none', 'premium'],
              type: 'string',
              default: 'all',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([BoardBackgroundSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const postMembersIdBoardBackgroundsRoute = createRoute({
  method: 'post',
  path: '/members/{id}/boardBackgrounds',
  tags: [],
  summary: 'Upload new boardBackground for Member',
  description: 'Upload a new boardBackground',
  operationId: 'post-members-id-boardbackgrounds-1',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      file: z
        .file()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([BoardBackgroundSchema])) } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdBoardBackgroundsIdBackgroundRoute = createRoute({
  method: 'get',
  path: '/members/{id}/boardBackgrounds/{idBackground}',
  tags: [],
  summary: 'Get a boardBackground of a Member',
  description: "Get a member's board background",
  operationId: 'get-members-id-boardbackgrounds-idbackground',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idBackground: TrelloIDSchema.openapi({
        param: {
          name: 'idBackground',
          in: 'path',
          description: 'The ID of the board background',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['all', 'brightness', 'fullSizeUrl', 'scaled', 'tile'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`',
            required: false,
            schema: {
              type: 'string',
              default: 'all',
              enum: ['all', 'brightness', 'fullSizeUrl', 'scaled', 'tile'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BoardBackgroundSchema } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const putMembersIdBoardBackgroundsIdBackgroundRoute = createRoute({
  method: 'put',
  path: '/members/{id}/boardBackgrounds/{idBackground}',
  tags: [],
  summary: "Update a Member's custom Board background",
  description: 'Update a board background',
  operationId: 'put-members-id-boardbackgrounds-idbackground',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idBackground: TrelloIDSchema.openapi({
        param: {
          name: 'idBackground',
          in: 'path',
          description: 'The ID of the board background',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      brightness: z
        .enum(['dark', 'light', 'unknown'])
        .exactOptional()
        .openapi({
          param: {
            name: 'brightness',
            in: 'query',
            description: 'One of: `dark`, `light`, `unknown`',
            required: false,
            schema: { enum: ['dark', 'light', 'unknown'], type: 'string' },
          },
        }),
      tile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'tile',
            in: 'query',
            description: 'Whether the background should be tiled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BoardBackgroundSchema } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const deleteMembersIdBoardBackgroundsIdBackgroundRoute = createRoute({
  method: 'delete',
  path: '/members/{id}/boardBackgrounds/{idBackground}',
  tags: [],
  summary: "Delete a Member's custom Board background",
  description: 'Delete a board background',
  operationId: 'delete-members-id-boardbackgrounds-idbackground',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idBackground: TrelloIDSchema.openapi({
        param: {
          name: 'idBackground',
          in: 'path',
          description: 'The ID of the board background',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdBoardStarsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/boardStars',
  tags: [],
  summary: "Get a Member's boardStars",
  description: "List a member's board stars",
  operationId: 'get-members-id-boardstars',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const postMembersIdBoardStarsRoute = createRoute({
  method: 'post',
  path: '/members/{id}/boardStars',
  tags: [],
  summary: 'Create Star for Board',
  description: 'Star a new board on behalf of a Member',
  operationId: 'post-members-id-boardstars',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
    }),
    query: z.object({
      idBoard: TrelloIDSchema.openapi({
        param: {
          name: 'idBoard',
          in: 'query',
          description: 'The ID of the board to star',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema).openapi({
        param: {
          name: 'pos',
          in: 'query',
          description:
            'The position of the newly starred board. `top`, `bottom`, or a positive float.',
          required: true,
          schema: { $ref: '#/components/schemas/posStringOrNumber' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BoardStarsSchema) } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdBoardStarsIdStarRoute = createRoute({
  method: 'get',
  path: '/members/{id}/boardStars/{idStar}',
  tags: [],
  summary: 'Get a boardStar of Member',
  description: 'Get a specific boardStar',
  operationId: 'get-members-id-boardstars-idstar',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idStar: TrelloIDSchema.openapi({
        param: {
          name: 'idStar',
          in: 'path',
          description: 'The ID of the board star',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BoardStarsSchema } } },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const putMembersIdBoardStarsIdStarRoute = createRoute({
  method: 'put',
  path: '/members/{id}/boardStars/{idStar}',
  tags: [],
  summary: 'Update the position of a boardStar of Member',
  description: 'Update the position of a starred board',
  operationId: 'put-members-id-boardstars-idstar',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idStar: TrelloIDSchema.openapi({
        param: {
          name: 'idStar',
          in: 'path',
          description: 'The ID of the board star',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description:
              'New position for the starred board. `top`, `bottom`, or a positive float.',
            required: false,
            schema: { $ref: '#/components/schemas/posStringOrNumber' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const deleteMembersIdBoardStarsIdStarRoute = createRoute({
  method: 'delete',
  path: '/members/{id}/boardStars/{idStar}',
  tags: [],
  summary: 'Delete Star for Board',
  description: 'Unstar a board',
  operationId: 'delete-members-id-boardstars-idstar',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idStar: TrelloIDSchema.openapi({
        param: {
          name: 'idStar',
          in: 'path',
          description: 'The ID of the board star',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdBoardsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/boards',
  tags: [],
  summary: 'Get Boards that Member belongs to',
  description: 'Lists the boards that the user is a member of.',
  operationId: 'get-members-id-boards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'closed', 'members', 'open', 'organization', 'public', 'starred'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              '`all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`',
            required: false,
            schema: {
              enum: ['all', 'closed', 'members', 'open', 'organization', 'public', 'starred'],
              type: 'string',
              default: 'all',
            },
          },
        }),
      fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'all',
            },
          },
          default: 'all',
        }),
      lists: z
        .enum(['all', 'closed', 'none', 'open'])
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            name: 'lists',
            in: 'query',
            description:
              'Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`',
            required: false,
            schema: { enum: ['all', 'closed', 'none', 'open'], type: 'string', default: 'none' },
          },
        }),
      organization: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization',
            in: 'query',
            description: 'Whether to include the Organization object with the Boards',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      organization_fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            explode: false,
            style: 'form',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'name,displayName' },
          },
          default: 'name,displayName',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BoardSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getMembersIdBoardsInvitedRoute = createRoute({
  method: 'get',
  path: '/members/{id}/boardsInvited',
  tags: [],
  summary: 'Get Boards the Member has been invited to',
  description: 'Get the boards the member has been invited to',
  operationId: 'get-members-id-boardsinvited',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'all',
            },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BoardSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getMembersIdCardsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/cards',
  tags: [],
  summary: 'Get Cards the Member is on',
  description: 'Gets the cards a member is on',
  operationId: 'get-members-id-cards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible'])
        .default('visible')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible`',
            required: false,
            schema: {
              enum: ['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible'],
              type: 'string',
              default: 'visible',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CardSchema) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getMembersIdCustomBoardBackgroundsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/customBoardBackgrounds',
  tags: [],
  summary: "Get a Member's custom Board Backgrounds",
  description: "Get a member's custom board backgrounds",
  operationId: 'get-members-id-customboardbackgrounds',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BoardBackgroundSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const postMembersIdCustomBoardBackgroundsRoute = createRoute({
  method: 'post',
  path: '/members/{id}/customBoardBackgrounds',
  tags: [],
  summary: 'Create a new custom Board Background',
  description: 'Upload a new custom board background',
  operationId: 'membersidcustomboardbackgrounds-1',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      file: z
        .file()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BoardBackgroundSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getMembersIdCustomBoardBackgroundsIdBackgroundRoute = createRoute({
  method: 'get',
  path: '/members/{id}/customBoardBackgrounds/{idBackground}',
  tags: [],
  summary: 'Get custom Board Background of Member',
  description: 'Get a specific custom board background',
  operationId: 'get-members-id-customboardbackgrounds-idbackground',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
      idBackground: TrelloIDSchema.openapi({
        param: {
          name: 'idBackground',
          in: 'path',
          description: 'The ID of the custom background',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BoardBackgroundSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const putMembersIdCustomBoardBackgroundsIdBackgroundRoute = createRoute({
  method: 'put',
  path: '/members/{id}/customBoardBackgrounds/{idBackground}',
  tags: [],
  summary: 'Update custom Board Background of Member',
  description: 'Update a specific custom board background',
  operationId: 'put-members-id-customboardbackgrounds-idbackground',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
      idBackground: TrelloIDSchema.openapi({
        param: {
          name: 'idBackground',
          in: 'path',
          description: 'The ID of the custom background',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      brightness: z
        .enum(['dark', 'light', 'unknown'])
        .exactOptional()
        .openapi({
          param: {
            name: 'brightness',
            in: 'query',
            description: 'One of: `dark`, `light`, `unknown`',
            required: false,
            schema: { enum: ['dark', 'light', 'unknown'], type: 'string' },
          },
        }),
      tile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'tile',
            in: 'query',
            description: 'Whether to tile the background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BoardBackgroundSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const deleteMembersIdCustomBoardBackgroundsIdBackgroundRoute = createRoute({
  method: 'delete',
  path: '/members/{id}/customBoardBackgrounds/{idBackground}',
  tags: [],
  summary: 'Delete custom Board Background of Member',
  description: 'Delete a specific custom board background',
  operationId: 'delete-members-id-customboardbackgrounds-idbackground',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
      idBackground: TrelloIDSchema.openapi({
        param: {
          name: 'idBackground',
          in: 'path',
          description: 'The ID of the custom background',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const getMembersIdCustomEmojiRoute = createRoute({
  method: 'get',
  path: '/members/{id}/customEmoji',
  tags: [],
  summary: "Get a Member's customEmojis",
  description: "Get a Member's uploaded custom Emojis",
  operationId: 'get-members-id-customemoji',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CustomEmojiSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const postMembersIdCustomEmojiRoute = createRoute({
  method: 'post',
  path: '/members/{id}/customEmoji',
  tags: [],
  summary: 'Create custom Emoji for Member',
  description: 'Create a new custom Emoji',
  operationId: 'post-members-id-customemoji',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      file: z
        .file()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
      name: z
        .string()
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name for the emoji. 2 - 64 characters',
            required: true,
            schema: { type: 'string', minLength: 2, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CustomEmojiSchema } } },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdCustomEmojiIdEmojiRoute = createRoute({
  method: 'get',
  path: '/members/{id}/customEmoji/{idEmoji}',
  tags: [],
  summary: "Get a Member's custom Emoji",
  description: "Get a Member's custom Emoji",
  operationId: 'membersidcustomemojiidemoji',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idEmoji: TrelloIDSchema.openapi({
        param: {
          name: 'idEmoji',
          in: 'path',
          description: 'The ID of the custom emoji',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['name', 'url', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of `name`, `url`',
            required: false,
            explode: false,
            style: 'form',
            schema: { type: 'string', enum: ['name', 'url', 'all'], default: 'all' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CustomEmojiSchema } } },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const getMembersIdCustomStickersRoute = createRoute({
  method: 'get',
  path: '/members/{id}/customStickers',
  tags: [],
  summary: "Get Member's custom Stickers",
  description: "Get a Member's uploaded stickers",
  operationId: 'get-members-id-customstickers',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CustomStickerSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const postMembersIdCustomStickersRoute = createRoute({
  method: 'post',
  path: '/members/{id}/customStickers',
  tags: [],
  summary: 'Create custom Sticker for Member',
  description: 'Upload a new custom sticker',
  operationId: 'post-members-id-customstickers',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      file: z
        .file()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomStickerSchema } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdCustomStickersIdStickerRoute = createRoute({
  method: 'get',
  path: '/members/{id}/customStickers/{idSticker}',
  tags: [],
  summary: "Get a Member's custom Sticker",
  description: "Get a Member's custom Sticker",
  operationId: 'get-members-id-customstickers-idsticker',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idSticker: TrelloIDSchema.openapi({
        param: {
          name: 'idSticker',
          in: 'path',
          description: 'The ID of the uploaded sticker',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['scaled', 'url', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description: '`all` or a comma-separated list of `scaled`, `url`',
            required: false,
            explode: false,
            style: 'form',
            schema: { enum: ['scaled', 'url', 'all'], type: 'string', default: 'all' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CustomStickerSchema } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const deleteMembersIdCustomStickersIdStickerRoute = createRoute({
  method: 'delete',
  path: '/members/{id}/customStickers/{idSticker}',
  tags: [],
  summary: "Delete a Member's custom Sticker",
  description: "Delete a Member's custom Sticker",
  operationId: 'delete-members-id-customstickers-idsticker',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idSticker: TrelloIDSchema.openapi({
        param: {
          name: 'idSticker',
          in: 'path',
          description: 'The ID of the uploaded sticker',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdNotificationsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/notifications',
  tags: [],
  summary: "Get Member's Notifications",
  description: "Get a member's notifications",
  operationId: 'get-members-id-notifications',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      entities: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'entities',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      display: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'display',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      read_filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'read_filter',
            in: 'query',
            description: 'One of: `all`, `read`, `unread`',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'all' },
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
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Max 1000',
            required: false,
            schema: { type: 'integer', format: 'int32', default: '50' },
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
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Max 100',
            required: false,
            schema: { type: 'integer', format: 'int32', default: '0' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'A notification ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'since',
            in: 'query',
            description: 'A notification ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'memberCreator',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash,fullName,initials,username')
        .exactOptional()
        .openapi({
          param: {
            name: 'memberCreator_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', default: 'avatarHash,fullName,initials,username' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const getMembersIdOrganizationsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/organizations',
  tags: [],
  summary: "Get Member's Organizations",
  description: "Get a member's Workspaces",
  operationId: 'get-members-id-organizations',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'members', 'none', 'public'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)',
            required: false,
            schema: { type: 'string', default: 'all', enum: ['all', 'members', 'none', 'public'] },
          },
        }),
      fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            explode: false,
            style: 'form',
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
      paid_account: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'paid_account',
            in: 'query',
            description:
              'Whether or not to include paid account information in the returned workspace object',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(OrganizationSchema) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getMembersIdOrganizationsInvitedRoute = createRoute({
  method: 'get',
  path: '/members/{id}/organizationsInvited',
  tags: [],
  summary: 'Get Organizations a Member has been invited to',
  description: "Get a member's Workspaces they have been invited to",
  operationId: 'get-members-id-organizationsinvited',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(OrganizationSchema) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getMembersIdSavedSearchesRoute = createRoute({
  method: 'get',
  path: '/members/{id}/savedSearches',
  tags: [],
  summary: "Get Member's saved searched",
  description: 'List the saved searches of a Member',
  operationId: 'get-members-id-savedsearches',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SavedSearchSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const postMembersIdSavedSearchesRoute = createRoute({
  method: 'post',
  path: '/members/{id}/savedSearches',
  tags: [],
  summary: 'Create saved Search for Member',
  description: 'Create a saved search',
  operationId: 'post-members-id-savedsearches',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
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
            description: 'The name for the saved search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The search query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pos: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(PosStringOrNumberSchema).openapi({
        param: {
          name: 'pos',
          in: 'query',
          description: 'The position of the saved search. `top`, `bottom`, or a positive float.',
          required: true,
          schema: { $ref: '#/components/schemas/posStringOrNumber' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SavedSearchSchema } } },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdSavedSearchesIdSearchRoute = createRoute({
  method: 'get',
  path: '/members/{id}/savedSearches/{idSearch}',
  tags: [],
  summary: 'Get a saved search',
  description: 'Get a saved search',
  operationId: 'get-members-id-savedsearches-idsearch',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSearch: z
        .string()
        .openapi({
          param: {
            name: 'idSearch',
            in: 'path',
            description: 'The ID of the saved search to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SavedSearchSchema } } },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const putMembersIdSavedSearchesIdSearchRoute = createRoute({
  method: 'put',
  path: '/members/{id}/savedSearches/{idSearch}',
  tags: [],
  summary: 'Update a saved search',
  description: 'Update a saved search',
  operationId: 'put-members-id-savedsearches-idsearch',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSearch: z
        .string()
        .openapi({
          param: {
            name: 'idSearch',
            in: 'path',
            description: 'The ID of the saved search to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'The new name for the saved search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The new search query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pos: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pos',
            in: 'query',
            description: 'New position for saves search. `top`, `bottom`, or a positive float.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SavedSearchSchema } } },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const deleteMembersIdSavedSearchesIdSearchRoute = createRoute({
  method: 'delete',
  path: '/members/{id}/savedSearches/{idSearch}',
  tags: [],
  summary: 'Delete a saved search',
  description: 'Delete a saved search',
  operationId: 'delete-members-id-savedsearches-idsearch',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSearch: z
        .string()
        .openapi({
          param: {
            name: 'idSearch',
            in: 'path',
            description: 'The ID of the saved search to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdTokensRoute = createRoute({
  method: 'get',
  path: '/members/{id}/tokens',
  tags: [],
  summary: "Get Member's Tokens",
  description: 'List a members app tokens',
  operationId: 'get-members-id-tokens',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      webhooks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'webhooks',
            in: 'query',
            description: 'Whether to include webhooks',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(TokenSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello', 'write:member:trello'] }],
})

export const postMembersIdAvatarRoute = createRoute({
  method: 'post',
  path: '/members/{id}/avatar',
  tags: [],
  summary: 'Create Avatar for Member',
  description: 'Create a new avatar for a member',
  operationId: 'membersidavatar',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      file: z
        .file()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const postMembersIdOneTimeMessagesDismissedRoute = createRoute({
  method: 'post',
  path: '/members/{id}/oneTimeMessagesDismissed',
  tags: [],
  summary: 'Dismiss a message for Member',
  description: 'Dismiss a message',
  operationId: 'post-members-id-onetimemessagesdismissed',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or username of the member',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: TrelloIDSchema.openapi({
        param: {
          name: 'value',
          in: 'query',
          description: 'The message to dismiss',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getMembersIdNotificationChannelSettingsRoute = createRoute({
  method: 'get',
  path: '/members/{id}/notificationChannelSettings',
  tags: [],
  summary: "Get a Member's notification channel settings",
  description: "Get a member's notification channel settings",
  operationId: 'get-members-id-notificationChannelSettings',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(NotificationChannelSettingsSchema) } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const putMembersIdNotificationChannelSettingsRoute = createRoute({
  method: 'put',
  path: '/members/{id}/notificationChannelSettings',
  tags: [],
  summary: 'Update blocked notification keys of Member on a channel',
  description: 'Update blocked notification keys of Member on a specific channel',
  operationId: 'put-members-id-notificationChannelSettings',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              channel: ChannelSchema,
              blockedKeys: z
                .xor([BlockedKeySchema, z.array(BlockedKeySchema)])
                .openapi({ description: 'Blocked key or array of blocked keys.' }),
            })
            .openapi({ required: ['channel', 'blockedKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotificationChannelSettingsSchema } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getMembersIdNotificationChannelSettingsChannelRoute = createRoute({
  method: 'get',
  path: '/members/{id}/notificationChannelSettings/{channel}',
  tags: [],
  summary: 'Get blocked notification keys of Member on this channel',
  description: 'Get blocked notification keys of Member on a specific channel',
  operationId: 'get-members-id-notificationChannelSettings-channel',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
      channel: ChannelSchema.openapi({
        param: {
          name: 'channel',
          in: 'path',
          description: 'Channel to block notifications on',
          required: true,
          schema: { $ref: '#/components/schemas/Channel' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotificationChannelSettingsSchema } },
    },
  },
  security: [{ OAuth2: ['read:member:trello'] }],
})

export const putMembersIdNotificationChannelSettingsChannelRoute = createRoute({
  method: 'put',
  path: '/members/{id}/notificationChannelSettings/{channel}',
  tags: [],
  summary: 'Update blocked notification keys of Member on a channel',
  description: 'Update blocked notification keys of Member on a specific channel',
  operationId: 'put-members-id-notificationChannelSettings-channel',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
      channel: ChannelSchema.openapi({
        param: {
          name: 'channel',
          in: 'path',
          description: 'Channel to block notifications on',
          required: true,
          schema: { $ref: '#/components/schemas/Channel' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              blockedKeys: z
                .xor([BlockedKeySchema, z.array(BlockedKeySchema)])
                .openapi({ description: 'Singular key or array of notification keys' }),
            })
            .openapi({ required: ['blockedKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotificationChannelSettingsSchema } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const putMembersIdNotificationChannelSettingsChannelBlockedKeysRoute = createRoute({
  method: 'put',
  path: '/members/{id}/notificationChannelSettings/{channel}/{blockedKeys}',
  tags: [],
  summary: 'Update blocked notification keys of Member on a channel',
  description: 'Update blocked notification keys of Member on a specific channel',
  operationId: 'put-members-id-notificationChannelSettings-channel-blockedKeys',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or username of the member',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
      channel: ChannelSchema.openapi({
        param: {
          name: 'channel',
          in: 'path',
          description: 'Channel to block notifications on',
          required: true,
          schema: { $ref: '#/components/schemas/Channel' },
        },
      }),
      blockedKeys: BlockedKeySchema.openapi({
        param: {
          name: 'blockedKeys',
          in: 'path',
          description: 'Singular key or comma-separated list of notification keys',
          required: true,
          schema: { $ref: '#/components/schemas/BlockedKey' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotificationChannelSettingsSchema } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getNotificationsIdRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}',
  tags: [],
  summary: 'Get a Notification',
  operationId: 'get-notifications-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      board: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'board',
            in: 'query',
            description: 'Whether to include the board object',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      board_fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            name: 'board_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'name',
            },
          },
        }),
      card: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'card',
            in: 'query',
            description: 'Whether to include the card object',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      card_fields: z
        .enum([
          'id',
          'address',
          'badges',
          'checkItemStates',
          'closed',
          'coordinates',
          'creationMethod',
          'dueComplete',
          'dateLastActivity',
          'desc',
          'descData',
          'due',
          'dueReminder',
          'idBoard',
          'idChecklists',
          'idLabels',
          'idList',
          'idMembers',
          'idMembersVoted',
          'idShort',
          'idAttachmentCover',
          'labels',
          'limits',
          'locationName',
          'manualCoverAttachment',
          'name',
          'pos',
          'shortLink',
          'shortUrl',
          'subscribed',
          'url',
          'cover',
          'isTemplate',
        ])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            name: 'card_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'address',
                'badges',
                'checkItemStates',
                'closed',
                'coordinates',
                'creationMethod',
                'dueComplete',
                'dateLastActivity',
                'desc',
                'descData',
                'due',
                'dueReminder',
                'idBoard',
                'idChecklists',
                'idLabels',
                'idList',
                'idMembers',
                'idMembersVoted',
                'idShort',
                'idAttachmentCover',
                'labels',
                'limits',
                'locationName',
                'manualCoverAttachment',
                'name',
                'pos',
                'shortLink',
                'shortUrl',
                'subscribed',
                'url',
                'cover',
                'isTemplate',
              ],
              description: 'The fields on a Card.',
              default: 'name',
            },
          },
          description: 'The fields on a Card.',
        }),
      display: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'display',
            in: 'query',
            description: 'Whether to include the display object with the results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      entities: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'entities',
            in: 'query',
            description: 'Whether to include the entities object with the results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      fields: z
        .enum([
          'id',
          'unread',
          'type',
          'date',
          'dateRead',
          'data',
          'card',
          'board',
          'idMemberCreator',
          'idAction',
          'reactions',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'unread',
                'type',
                'date',
                'dateRead',
                'data',
                'card',
                'board',
                'idMemberCreator',
                'idAction',
                'reactions',
              ],
              default: 'all',
            },
          },
          default: 'all',
        }),
      list: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'list',
            in: 'query',
            description: 'Whether to include the list object',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      member: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description: 'Whether to include the member object',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      member_fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              enum: ['id'],
              default: 'avatarHash,fullName,initials,username',
            },
          },
          default: 'avatarHash,fullName,initials,username',
        }),
      memberCreator: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'memberCreator',
            in: 'query',
            description: 'Whether to include the member object of the creator',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      memberCreator_fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'memberCreator_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: {
              type: 'string',
              enum: ['id'],
              default: 'avatarHash,fullName,initials,username',
            },
          },
          default: 'avatarHash,fullName,initials,username',
        }),
      organization: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization',
            in: 'query',
            description: 'Whether to include the organization object',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      organization_fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id', 'name'], default: 'displayName' },
          },
          default: 'displayName',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([NotificationSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const putNotificationsIdRoute = createRoute({
  method: 'put',
  path: '/notifications/{id}',
  tags: [],
  summary: "Update a Notification's read status",
  description: 'Update the read status of a notification',
  operationId: 'put-notifications-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      unread: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'unread',
            in: 'query',
            description: 'Whether the notification should be marked as read or not',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([NotificationSchema]) } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getNotificationsIdFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/{field}',
  tags: [],
  summary: 'Get a field of a Notification',
  description: 'Get a specific property of a notification',
  operationId: 'get-notifications-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: NotificationFieldsSchema.openapi({
        param: {
          name: 'field',
          in: 'path',
          description: 'A notification [field](/cloud/trello/guides/rest-api/object-definitions/)',
          required: true,
          schema: { $ref: '#/components/schemas/NotificationFields' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([NotificationSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postNotificationsAllReadRoute = createRoute({
  method: 'post',
  path: '/notifications/all/read',
  tags: [],
  summary: 'Mark all Notifications as read',
  description: 'Mark all notifications as read',
  operationId: 'post-notifications-all-read',
  request: {
    query: z.object({
      read: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'read',
            in: 'query',
            description:
              'Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(TrelloIDSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            explode: false,
            style: 'form',
            description:
              'A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TrelloID' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([NotificationSchema]) } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const putNotificationsIdUnreadRoute = createRoute({
  method: 'put',
  path: '/notifications/{id}/unread',
  tags: [],
  summary: "Update Notification's read status",
  description: "Update Notification's read status",
  operationId: 'put-notifications-id-unread',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      value: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([NotificationSchema]) } },
    },
  },
  security: [{ OAuth2: ['write:member:trello'] }],
})

export const getNotificationsIdBoardRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/board',
  tags: [],
  summary: 'Get the Board a Notification is on',
  description: 'Get the board a notification is associated with',
  operationId: 'get-notifications-id-board',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)',
            explode: false,
            style: 'form',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'all',
            },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([BoardSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getNotificationsIdCardRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/card',
  tags: [],
  summary: 'Get the Card a Notification is on',
  description: 'Get the card a notification is associated with',
  operationId: 'get-notifications-id-card',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum([
          'id',
          'address',
          'badges',
          'checkItemStates',
          'closed',
          'coordinates',
          'creationMethod',
          'dueComplete',
          'dateLastActivity',
          'desc',
          'descData',
          'due',
          'dueReminder',
          'idBoard',
          'idChecklists',
          'idLabels',
          'idList',
          'idMembers',
          'idMembersVoted',
          'idShort',
          'idAttachmentCover',
          'labels',
          'limits',
          'locationName',
          'manualCoverAttachment',
          'name',
          'pos',
          'shortLink',
          'shortUrl',
          'subscribed',
          'url',
          'cover',
          'isTemplate',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            explode: false,
            style: 'form',
            description:
              '`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'address',
                'badges',
                'checkItemStates',
                'closed',
                'coordinates',
                'creationMethod',
                'dueComplete',
                'dateLastActivity',
                'desc',
                'descData',
                'due',
                'dueReminder',
                'idBoard',
                'idChecklists',
                'idLabels',
                'idList',
                'idMembers',
                'idMembersVoted',
                'idShort',
                'idAttachmentCover',
                'labels',
                'limits',
                'locationName',
                'manualCoverAttachment',
                'name',
                'pos',
                'shortLink',
                'shortUrl',
                'subscribed',
                'url',
                'cover',
                'isTemplate',
              ],
              description: 'The fields on a Card.',
              default: 'all',
            },
          },
          description: 'The fields on a Card.',
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([CardSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getNotificationsIdListRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/list',
  tags: [],
  summary: 'Get the List a Notification is on',
  description: 'Get the list a notification is associated with',
  operationId: 'get-notifications-id-list',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([TrelloListSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getNotificationsIdMemberRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/member',
  tags: [],
  summary: 'Get the Member a Notification is about (not the creator)',
  description: 'Get the member (not the creator) a notification is about',
  operationId: 'notificationsidmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MemberSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getNotificationsIdMemberCreatorRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/memberCreator',
  tags: [],
  summary: 'Get the Member who created the Notification',
  description: 'Get the member who created the notification',
  operationId: 'get-notifications-id-membercreator',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            explode: false,
            style: 'form',
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MemberSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getNotificationsIdOrganizationRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}/organization',
  tags: [],
  summary: "Get a Notification's associated Organization",
  description: 'Get the organization a notification is associated with',
  operationId: 'get-notifications-id-organization',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      fields: z
        .enum(['id', 'name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            explode: false,
            style: 'form',
            schema: { type: 'string', enum: ['id', 'name'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([OrganizationSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postOrganizationsRoute = createRoute({
  method: 'post',
  path: '/organizations',
  tags: [],
  summary: 'Create a new Organization',
  description: 'Create a new Workspace',
  operationId: 'post-organizations',
  request: {
    query: z.object({
      displayName: z
        .string()
        .openapi({
          param: {
            name: 'displayName',
            in: 'query',
            description: 'The name to display for the Organization',
            required: true,
            schema: { type: 'string' },
          },
        }),
      desc: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'desc',
            in: 'query',
            description: 'The description for the organizations',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .min(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.',
            required: false,
            schema: { type: 'string', minLength: 3 },
          },
        }),
      website: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'website',
            in: 'query',
            description: 'A URL starting with `http://` or `https://`',
            required: false,
            schema: { type: 'string', format: 'url' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([OrganizationSchema]) } },
    },
  },
  security: [{ OAuth2: ['write:organization:trello'] }],
})

export const getOrganizationsIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}',
  tags: [],
  summary: 'Get an Organization',
  operationId: 'get-organizations-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const putOrganizationsIdRoute = createRoute({
  method: 'put',
  path: '/organizations/{id}',
  tags: [],
  summary: 'Update an Organization',
  description: 'Update an organization',
  operationId: 'put-organizations-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique',
            required: false,
            schema: { type: 'string' },
          },
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'displayName',
            in: 'query',
            description:
              'A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      desc: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'desc',
            in: 'query',
            description: 'A new description for the organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      website: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'website',
            in: 'query',
            description: 'A URL starting with `http://`, `https://`, or `null`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/associatedDomain': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/associatedDomain',
            in: 'query',
            description: 'The Google Apps domain to link this org to.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/externalMembersDisabled': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/externalMembersDisabled',
            in: 'query',
            description:
              'Whether non-workspace members can be added to boards inside the Workspace',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'prefs/googleAppsVersion': z
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
            name: 'prefs/googleAppsVersion',
            in: 'query',
            description: '`1` or `2`',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      'prefs/boardVisibilityRestrict/org': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/boardVisibilityRestrict/org',
            in: 'query',
            description:
              'Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/boardVisibilityRestrict/private': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/boardVisibilityRestrict/private',
            in: 'query',
            description: 'Who can make private boards. One of: `admin`, `none`, `org`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/boardVisibilityRestrict/public': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/boardVisibilityRestrict/public',
            in: 'query',
            description:
              'Who on the Workspace can make public boards. One of: `admin`, `none`, `org`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/orgInviteRestrict': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/orgInviteRestrict',
            in: 'query',
            description:
              'An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'prefs/permissionLevel': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prefs/permissionLevel',
            in: 'query',
            description:
              'Whether the Workspace page is publicly visible. One of: `private`, `public`',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const deleteOrganizationsIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}',
  tags: [],
  summary: 'Delete an Organization',
  description: 'Delete an Organization',
  operationId: 'delete-organizations-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const getOrganizationsIdFieldRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/{field}',
  tags: [],
  summary: 'Get field on Organization',
  operationId: 'get-organizations-id-field',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: OrganizationFieldsSchema.openapi({
        param: {
          name: 'field',
          in: 'path',
          description: 'An organization [field](/cloud/trello/guides/rest-api/object-definitions/)',
          required: true,
          schema: { $ref: '#/components/schemas/OrganizationFields' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getOrganizationsIdActionsRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/actions',
  tags: [],
  summary: 'Get Actions for Organization',
  description: 'List the actions on a Workspace',
  operationId: 'get-organizations-id-actions',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ActionSchema) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getOrganizationsIdBoardsRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/boards',
  tags: [],
  summary: 'Get Boards in an Organization',
  description: 'List the boards in a Workspace',
  operationId: 'get-organizations-id-boards',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'open', 'closed', 'members', 'organization', 'public'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              '`all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`',
            required: false,
            schema: {
              type: 'string',
              default: 'all',
              enum: ['all', 'open', 'closed', 'members', 'organization', 'public'],
            },
          },
        }),
      fields: z
        .enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'id',
                'name',
                'desc',
                'descData',
                'closed',
                'idMemberCreator',
                'idOrganization',
                'pinned',
                'url',
                'shortUrl',
                'prefs',
                'labelNames',
                'starred',
                'limits',
                'memberships',
                'enterpriseOwned',
              ],
              default: 'all',
            },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([BoardSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:board:trello'] }],
})

export const getOrganizationsIdExportsRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/exports',
  tags: [],
  summary: "Retrieve Organization's Exports",
  description: 'Retrieve the exports that exist for the given organization',
  operationId: 'get-organizations-id-exports',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Workspace',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ExportSchema) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const postOrganizationsIdExportsRoute = createRoute({
  method: 'post',
  path: '/organizations/{id}/exports',
  tags: [],
  summary: 'Create Export for Organizations',
  description: 'Kick off CSV export for an organization',
  operationId: 'post-organizations-id-exports',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Workspace',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      attachments: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'attachments',
            in: 'query',
            description: 'Whether the CSV should include attachments or not.',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
  },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const getOrganizationsIdMembersRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/members',
  tags: [],
  summary: 'Get the Members of an Organization',
  description: 'List the members in a Workspace',
  operationId: 'get-organizations-id-members',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([MemberSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const putOrganizationsIdMembersRoute = createRoute({
  method: 'put',
  path: '/organizations/{id}/members',
  tags: [],
  summary: "Update an Organization's Members",
  operationId: 'put-organizations-id-members',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      email: z
        .email()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'An email address',
            required: true,
            schema: { type: 'string', format: 'email' },
          },
        }),
      fullName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'fullName',
            in: 'query',
            description:
              'Name for the member, at least 1 character not beginning or ending with a space',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      type: z
        .enum(['admin', 'normal'])
        .default('normal')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'One of: `admin`, `normal`',
            required: false,
            schema: { type: 'string', default: 'normal', enum: ['admin', 'normal'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:organization:membership:trello'] }],
})

export const getOrganizationsIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/memberships',
  tags: [],
  summary: 'Get Memberships of an Organization',
  description: 'List the memberships of a Workspace',
  operationId: 'get-organizations-id-memberships',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'active', 'admin', 'deactivated', 'me', 'normal'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              '`all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'string',
              default: 'all',
              enum: ['all', 'active', 'admin', 'deactivated', 'me', 'normal'],
            },
          },
        }),
      member: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description: 'Whether to include the Member objects with the Memberships',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([MembershipsSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getOrganizationsIdMembershipsIdMembershipRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/memberships/{idMembership}',
  tags: [],
  summary: 'Get a Membership of an Organization',
  description: 'Get a single Membership for an Organization',
  operationId: 'get-organizations-id-memberships-idmembership',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMembership: TrelloIDSchema.openapi({
        param: {
          name: 'idMembership',
          in: 'path',
          description: 'The ID of the membership to load',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      member: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'member',
            in: 'query',
            description: 'Whether to include the Member object in the response',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MembershipsSchema]) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getOrganizationsIdPluginDataRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/pluginData',
  tags: [],
  summary: 'Get the pluginData Scoped to Organization',
  description: 'Get organization scoped pluginData on this Workspace',
  operationId: 'get-organizations-id-plugindata',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([PluginDataSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const getOrganizationsIdTagsRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/tags',
  tags: [],
  summary: 'Get Tags of an Organization',
  description: "List the organization's collections",
  operationId: 'get-organizations-id-tags',
  request: {
    params: z.object({
      id: z
        .xor([z.string(), TrelloIDSchema])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or name of the Organization',
            required: true,
            schema: { oneOf: [{ type: 'string' }, { $ref: '#/components/schemas/TrelloID' }] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(z.xor([TagSchema])) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const postOrganizationsIdTagsRoute = createRoute({
  method: 'post',
  path: '/organizations/{id}/tags',
  tags: [],
  summary: 'Create a Tag in Organization',
  description: 'Create a Tag in an Organization',
  operationId: 'post-organizations-id-tags',
  request: {
    params: z.object({
      id: z
        .xor([z.string(), TrelloIDSchema])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or name of the Organization',
            required: true,
            schema: { oneOf: [{ type: 'string' }, { $ref: '#/components/schemas/TrelloID' }] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([TagSchema]) } },
    },
  },
  security: [{ OAuth2: ['write:organization:trello'] }],
})

export const putOrganizationsIdMembersIdMemberRoute = createRoute({
  method: 'put',
  path: '/organizations/{id}/members/{idMember}',
  tags: [],
  summary: 'Update a Member of an Organization',
  description: 'Add a member to a Workspace or update their member type.',
  operationId: 'put-organizations-id-members-idmember',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: z
        .xor([z.string(), TrelloIDSchema])
        .openapi({
          param: {
            name: 'idMember',
            in: 'path',
            description: 'The ID or username of the member to update',
            required: true,
            schema: { oneOf: [{ type: 'string' }, { $ref: '#/components/schemas/TrelloID' }] },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['admin', 'normal'])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'One of: `admin`, `normal`',
            required: true,
            schema: { type: 'string', enum: ['admin', 'normal'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([MemberSchema]) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:membership:trello'] }],
})

export const deleteOrganizationsIdMembersIdMemberRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}/members/{idMember}',
  tags: [],
  summary: 'Remove a Member from an Organization',
  description: 'Remove a member from a Workspace',
  operationId: 'delete-organizations-id-members',
  request: {
    params: z.object({
      id: z
        .xor([TrelloIDSchema, z.string().openapi({ description: 'Name of the organization' })])
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or name of the organization',
            required: true,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/TrelloID' },
                { type: 'string', description: 'Name of the organization' },
              ],
            },
          },
        }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The ID of the Member to remove from the Workspace',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:organization:membership:trello'] }],
})

export const putOrganizationsIdMembersIdMemberDeactivatedRoute = createRoute({
  method: 'put',
  path: '/organizations/{id}/members/{idMember}/deactivated',
  tags: [],
  summary: 'Deactivate or reactivate a member of an Organization',
  description: 'Deactivate or reactivate a member of a Workspace',
  operationId: 'put-organizations-id-members-idmember-deactivated',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: z
        .xor([TrelloIDSchema, z.string()])
        .openapi({
          param: {
            name: 'idMember',
            in: 'path',
            description: 'The ID or username of the member to update',
            required: true,
            schema: { oneOf: [{ $ref: '#/components/schemas/TrelloID' }, { type: 'string' }] },
          },
        }),
    }),
    query: z.object({
      value: z
        .stringbool()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:membership:trello'] }],
})

export const postOrganizationsIdLogoRoute = createRoute({
  method: 'post',
  path: '/organizations/{id}/logo',
  tags: [],
  summary: 'Update logo for an Organization',
  description: 'Set the logo image for a Workspace',
  operationId: 'post-organizations-id-logo',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the Workspace',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      file: z
        .file()
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: 'Image file for the logo',
            required: false,
            schema: { type: 'string', format: 'binary' },
          },
          type: 'string',
          format: 'binary',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.xor([OrganizationSchema]) } },
    },
  },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const deleteOrganizationsIdLogoRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}/logo',
  tags: [],
  summary: 'Delete Logo for Organization',
  description: 'Delete a the logo from a Workspace',
  operationId: 'delete-organizations-id-logo',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const deleteOrganizationsIdMembersIdMemberAllRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}/members/{idMember}/all',
  tags: [],
  summary: 'Remove a Member from an Organization and all Organization Boards',
  description: 'Remove a member from a Workspace and from all Workspace boards',
  operationId: 'organizations-id-members-idmember-all',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idMember: TrelloIDSchema.openapi({
        param: {
          name: 'idMember',
          in: 'path',
          description: 'The ID of the member to remove from the Workspace',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:membership:trello'] }],
})

export const deleteOrganizationsIdPrefsAssociatedDomainRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}/prefs/associatedDomain',
  tags: [],
  summary: 'Remove the associated Google Apps domain from a Workspace',
  description: 'Remove the associated Google Apps domain from a Workspace',
  operationId: 'delete-organizations-id-prefs-associateddomain',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteOrganizationsIdPrefsOrgInviteRestrictRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}/prefs/orgInviteRestrict',
  tags: [],
  summary: 'Delete the email domain restriction on who can be invited to the Workspace',
  description: 'Remove the email domain restriction on who can be invited to the Workspace',
  operationId: 'delete-organizations-id-prefs-orginviterestrict',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const deleteOrganizationsIdTagsIdTagRoute = createRoute({
  method: 'delete',
  path: '/organizations/{id}/tags/{idTag}',
  tags: [],
  summary: "Delete an Organization's Tag",
  description: "Delete an organization's tag",
  operationId: 'delete-organizations-id-tags-idtag',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID or name of the organization',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idTag: z
        .string()
        .openapi({
          param: {
            name: 'idTag',
            in: 'path',
            description: 'The ID of the tag to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['write:organization:trello'] }],
})

export const getOrganizationsIdNewBillableGuestsIdBoardRoute = createRoute({
  method: 'get',
  path: '/organizations/{id}/newBillableGuests/{idBoard}',
  tags: [],
  summary: 'Get Organizations new billable guests',
  description: 'Used to check whether the given board has new billable guests on it.',
  operationId: 'get-organizations-id-newbillableguests-idboard',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idBoard: TrelloIDSchema.openapi({
        param: {
          name: 'idBoard',
          in: 'path',
          description: 'The ID of the board to check for new billable guests.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: ['read:board:trello', 'read:organization:trello'] }],
})

export const getPluginsIdIndexRoute = createRoute({
  method: 'get',
  path: '/plugins/{id}/',
  tags: [],
  summary: 'Get a Plugin',
  description: 'Get plugins',
  operationId: 'get-plugins-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: PluginSchema } } },
  },
  security: [{ OAuth2: ['read:organization:trello'] }],
})

export const putPluginsIdIndexRoute = createRoute({
  method: 'put',
  path: '/plugins/{id}/',
  tags: [],
  summary: 'Update a Plugin',
  description: 'Update a Plugin',
  operationId: 'put-plugins-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID or name of the organization',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: PluginSchema } } },
  },
  security: [{ OAuth2: ['read:organization:trello', 'write:organization:trello'] }],
})

export const postPluginsIdPluginListingsRoute = createRoute({
  method: 'post',
  path: '/plugins/{idPlugin}/listings',
  tags: [],
  summary: 'Create a Listing for Plugin',
  description: 'Create a new listing for a given locale for your Power-Up',
  operationId: 'post-plugins-idplugin-listing',
  request: {
    params: z.object({
      idPlugin: TrelloIDSchema.openapi({
        param: {
          name: 'idPlugin',
          in: 'path',
          description: 'The ID of the Power-Up for which you are creating a new listing.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description to show for the given locale' }),
              locale: z
                .string()
                .exactOptional()
                .openapi({ description: 'The locale that this listing should be displayed for.' }),
              overview: z
                .string()
                .exactOptional()
                .openapi({ description: 'The overview to show for the given locale.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name to use for the given locale.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PluginListingSchema } },
    },
  },
  security: [{ OAuth2: ['write:organization:trello'] }],
})

export const getPluginsIdComplianceMemberPrivacyRoute = createRoute({
  method: 'get',
  path: '/plugins/{id}/compliance/memberPrivacy',
  tags: [],
  summary: "Get Plugin's Member privacy compliance",
  operationId: 'get-plugins-id-compliance-memberprivacy',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the Power-Up',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const putPluginsIdPluginListingsIdListingRoute = createRoute({
  method: 'put',
  path: '/plugins/{idPlugin}/listings/{idListing}',
  tags: [],
  summary: "Updating Plugin's Listing",
  description: 'Update an existing listing for your Power-Up',
  operationId: 'put-plugins-idplugin-listings-idlisting',
  request: {
    params: z.object({
      idPlugin: TrelloIDSchema.openapi({
        param: {
          name: 'idPlugin',
          in: 'path',
          description: 'The ID of the Power-Up whose listing is being updated.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      idListing: TrelloIDSchema.openapi({
        param: {
          name: 'idListing',
          in: 'path',
          description: 'The ID of the existing listing for the Power-Up that is being updated.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description to show for the given locale' }),
              locale: z
                .string()
                .exactOptional()
                .openapi({ description: 'The locale that this listing should be displayed for.' }),
              overview: z
                .string()
                .exactOptional()
                .openapi({ description: 'The overview to show for the given locale.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name to use for the given locale.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PluginListingSchema } },
    },
  },
  security: [{ OAuth2: ['write:organization:trello'] }],
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: [],
  summary: 'Search Trello',
  description: "Find what you're looking for in Trello",
  operationId: 'get-search',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(16834)
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The search query with a length of 1 to 16384 characters',
            required: true,
            schema: { type: 'string', maxLength: 16834, minLength: 1 },
          },
        }),
      idBoards: z
        .xor([z.literal('mine'), TrelloIDSchema])
        .exactOptional()
        .openapi({
          param: {
            name: 'idBoards',
            in: 'query',
            description: '`mine` or a comma-separated list of Board IDs',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', enum: ['mine'] },
                { $ref: '#/components/schemas/TrelloID' },
              ],
            },
          },
        }),
      idOrganizations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idOrganizations',
            in: 'query',
            description: 'A comma-separated list of Organization IDs',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      idCards: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idCards',
            in: 'query',
            description: 'A comma-separated list of Card IDs',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      modelTypes: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'modelTypes',
            in: 'query',
            description:
              'What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`',
            required: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      board_fields: z
        .string()
        .default('name,idOrganization')
        .exactOptional()
        .openapi({
          param: {
            name: 'board_fields',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              'all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`',
            required: false,
            schema: { type: 'string', default: 'name,idOrganization' },
          },
        }),
      boards_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(1000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'boards_limit',
            in: 'query',
            description: 'The maximum number of boards returned. Maximum: 1000',
            required: false,
            schema: { type: 'integer', maximum: 1000, default: 10 },
          },
        }),
      board_organization: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'board_organization',
            in: 'query',
            description: 'Whether to include the parent organization with board results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'card_fields',
            in: 'query',
            description:
              'all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'string', default: 'all' },
          },
        }),
      cards_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(1000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'cards_limit',
            in: 'query',
            description: 'The maximum number of cards to return. Maximum: 1000',
            style: 'form',
            explode: false,
            required: false,
            schema: { type: 'integer', maximum: 1000, default: 10 },
          },
        }),
      cards_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().max(100),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'cards_page',
            in: 'query',
            description: 'The page of results for cards. Maximum: 100',
            required: false,
            schema: { type: 'number', maximum: 100, default: 0 },
          },
        }),
      card_board: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'card_board',
            in: 'query',
            description: 'Whether to include the parent board with card results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      card_list: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'card_list',
            in: 'query',
            description: 'Whether to include the parent list with card results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      card_members: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'card_members',
            in: 'query',
            description: 'Whether to include member objects with card results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      card_stickers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'card_stickers',
            in: 'query',
            description: 'Whether to include sticker objects with card results',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      card_attachments: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'card_attachments',
            in: 'query',
            description:
              'Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.',
            required: false,
            schema: { type: 'string', default: 'false' },
          },
        }),
      organization_fields: z
        .string()
        .default('name,displayName')
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_fields',
            in: 'query',
            description:
              'all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website',
            required: false,
            schema: { type: 'string', default: 'name,displayName' },
          },
        }),
      organizations_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'organizations_limit',
            in: 'query',
            description: 'The maximum number of Workspaces to return. Maximum 1000',
            required: false,
            schema: { type: 'integer', format: 'int32', default: '10' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash,fullName,initials,username,confirmed')
        .exactOptional()
        .openapi({
          param: {
            name: 'member_fields',
            in: 'query',
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username',
            required: false,
            schema: { type: 'string', default: 'avatarHash,fullName,initials,username,confirmed' },
          },
        }),
      members_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'members_limit',
            in: 'query',
            description: 'The maximum number of members to return. Maximum 1000',
            required: false,
            schema: { type: 'integer', format: 'int32', default: '10' },
          },
        }),
      partial: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'partial',
            in: 'query',
            description:
              'By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(z.xor([MemberSchema, CardSchema, BoardSchema, OrganizationSchema])),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getSearchMembersIndexRoute = createRoute({
  method: 'get',
  path: '/search/members/',
  tags: [],
  summary: 'Search for Members',
  description: 'Search for Trello members.',
  operationId: 'get-search-members',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(16394)
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'Search query 1 to 16384 characters long',
            required: true,
            schema: { type: 'string', maxLength: 16394, minLength: 1 },
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
          z.int32().max(20),
        )
        .default(8)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to return. Maximum of 20.',
            required: false,
            schema: { type: 'integer', format: 'int32', default: 8, maximum: 20 },
          },
        }),
      idBoard: TrelloIDSchema.openapi({
        param: {
          name: 'idBoard',
          in: 'query',
          description: '',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      idOrganization: TrelloIDSchema.openapi({
        param: {
          name: 'idOrganization',
          in: 'query',
          description: '',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      onlyOrgMembers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'onlyOrgMembers',
            in: 'query',
            description: '',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(MemberSchema) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getTokensTokenRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}',
  tags: [],
  summary: 'Get a Token',
  description: 'Retrieve information about a token.',
  operationId: 'get-tokens-token',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .enum(['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`',
            required: false,
            schema: {
              type: 'string',
              enum: ['identifier', 'idMember', 'dateCreated', 'dateExpires', 'permissions'],
              default: 'all',
            },
          },
          default: 'all',
        }),
      webhooks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'webhooks',
            in: 'query',
            description: 'Determines whether to include webhooks.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TokenSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const getTokensTokenMemberRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/member',
  tags: [],
  summary: "Get Token's Member",
  description: "Retrieve information about a token's owner by token.",
  operationId: 'get-tokens-token-member',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .literal('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              '`all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).',
            required: false,
            schema: { type: 'string', enum: ['id'], default: 'all' },
          },
          default: 'all',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MemberSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const getTokensTokenWebhooksRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/webhooks',
  tags: [],
  summary: 'Get Webhooks for Token',
  description: 'Retrieve all webhooks created with a Token.',
  operationId: 'get-tokens-token-webhooks',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(WebhookSchema) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postTokensTokenWebhooksRoute = createRoute({
  method: 'post',
  path: '/tokens/{token}/webhooks',
  tags: [],
  summary: 'Create Webhooks for Token',
  description: 'Create a new webhook for a Token.',
  operationId: 'post-tokens-token-webhooks',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            description:
              'A description to be displayed when retrieving information about the webhook.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      callbackURL: z
        .url()
        .openapi({
          param: {
            name: 'callbackURL',
            in: 'query',
            description: 'The URL that the webhook should POST information to.',
            required: true,
            schema: { type: 'string', format: 'url' },
          },
        }),
      idModel: TrelloIDSchema.openapi({
        param: {
          name: 'idModel',
          in: 'query',
          description: 'ID of the object to create a webhook on.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const getTokensTokenWebhooksIdWebhookRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/webhooks/{idWebhook}',
  tags: [],
  summary: 'Get a Webhook belonging to a Token',
  description: 'Retrieve a webhook created with a Token.',
  operationId: 'get-tokens-token-webhooks-idwebhook',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idWebhook: TrelloIDSchema.openapi({
        param: {
          name: 'idWebhook',
          in: 'path',
          description: 'ID of the [Webhooks](ref:webhooks) to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const putTokensTokenWebhooksIdWebhookRoute = createRoute({
  method: 'put',
  path: '/tokens/{token}/webhooks/{idWebhook}',
  tags: [],
  summary: 'Update a Webhook created by Token',
  description: 'Update a Webhook created by Token',
  operationId: 'tokenstokenwebhooks-1',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idWebhook: TrelloIDSchema.openapi({
        param: {
          name: 'idWebhook',
          in: 'path',
          description: 'ID of the [Webhooks](ref:webhooks) to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            description:
              'A description to be displayed when retrieving information about the webhook.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      callbackURL: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'callbackURL',
            in: 'query',
            description: 'The URL that the webhook should `POST` information to.',
            required: false,
            schema: { type: 'string', format: 'url' },
          },
        }),
      idModel: TrelloIDSchema.openapi({
        param: {
          name: 'idModel',
          in: 'query',
          description: 'ID of the object that the webhook is on.',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const deleteTokensTokenWebhooksIdWebhookRoute = createRoute({
  method: 'delete',
  path: '/tokens/{token}/webhooks/{idWebhook}',
  tags: [],
  summary: 'Delete a Webhook created by Token',
  description: 'Delete a webhook created with given token.',
  operationId: 'delete-tokens-token-webhooks-idwebhook',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idWebhook: TrelloIDSchema.openapi({
        param: {
          name: 'idWebhook',
          in: 'path',
          description: 'ID of the [Webhooks](ref:webhooks) to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const deleteTokensTokenIndexRoute = createRoute({
  method: 'delete',
  path: '/tokens/{token}/',
  tags: [],
  summary: 'Delete a Token',
  description: 'Delete a token.',
  operationId: 'delete-token',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const postWebhooksIndexRoute = createRoute({
  method: 'post',
  path: '/webhooks/',
  tags: [],
  summary: 'Create a Webhook',
  description: 'Create a new webhook.',
  operationId: 'post-webhooks',
  request: {
    query: z.object({
      description: z
        .string()
        .min(0)
        .max(16384)
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            description: 'A string with a length from `0` to `16384`.',
            required: false,
            schema: { type: 'string', maxLength: 16384, minLength: 0 },
          },
        }),
      callbackURL: z
        .url()
        .openapi({
          param: {
            name: 'callbackURL',
            in: 'query',
            description: 'A valid URL that is reachable with a `HEAD` and `POST` request.',
            required: true,
            schema: { type: 'string', format: 'url' },
          },
        }),
      idModel: TrelloIDSchema.openapi({
        param: {
          name: 'idModel',
          in: 'query',
          description: 'ID of the model to be monitored',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'active',
            in: 'query',
            description: 'Determines whether the webhook is active and sending `POST` requests.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const getWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id}',
  tags: [],
  summary: 'Get a Webhook',
  description:
    "Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.",
  operationId: 'get-webhooks-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the webhook to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const putWebhooksIdRoute = createRoute({
  method: 'put',
  path: '/webhooks/{id}',
  tags: [],
  summary: 'Update a Webhook',
  description: 'Update a webhook by ID.',
  operationId: 'put-webhooks-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the webhook to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
    query: z.object({
      description: z
        .string()
        .min(0)
        .max(16384)
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            description: 'A string with a length from `0` to `16384`.',
            required: false,
            schema: { type: 'string', maxLength: 16384, minLength: 0 },
          },
        }),
      callbackURL: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'callbackURL',
            in: 'query',
            description: 'A valid URL that is reachable with a `HEAD` and `POST` request.',
            required: false,
            schema: { type: 'string', format: 'url' },
          },
        }),
      idModel: TrelloIDSchema.openapi({
        param: {
          name: 'idModel',
          in: 'query',
          description: 'ID of the model to be monitored',
          required: false,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }).exactOptional(),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'active',
            in: 'query',
            description: 'Determines whether the webhook is active and sending `POST` requests.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
  },
  security: [{ OAuth2: [] }],
})

export const deleteWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id}',
  tags: [],
  summary: 'Delete a Webhook',
  description: 'Delete a webhook by ID.',
  operationId: 'delete-webhooks-id',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the webhook to retrieve.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})

export const getWebhooksIdFieldRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id}/{field}',
  tags: [],
  summary: 'Get a field on a Webhook',
  description: 'Get a field on a Webhook',
  operationId: 'webhooksidfield',
  request: {
    params: z.object({
      id: TrelloIDSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'ID of the webhook.',
          required: true,
          schema: { $ref: '#/components/schemas/TrelloID' },
        },
      }),
      field: z
        .enum([
          'active',
          'callbackURL',
          'description',
          'idModel',
          'consecutiveFailures',
          'firstConsecutiveFailDate',
        ])
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description:
              'Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`',
            required: true,
            schema: {
              enum: [
                'active',
                'callbackURL',
                'description',
                'idModel',
                'consecutiveFailures',
                'firstConsecutiveFailDate',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ OAuth2: [] }],
})
