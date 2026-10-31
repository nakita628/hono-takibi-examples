import { createRoute, z } from '@hono/zod-openapi'

const ThumbnailSchema = z
  .object({
    width: z
      .int32()
      .openapi({ description: 'The width of the thumbnail image in pixels.', example: 595 }),
    height: z
      .int32()
      .openapi({ description: 'The height of the thumbnail image in pixels.', example: 335 }),
    url: z
      .string()
      .openapi({
        description:
          "A URL for retrieving the thumbnail image.\nThis URL expires after 15 minutes. This URL includes a query string\nthat's required for retrieving the thumbnail.",
        example:
          'https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>',
      }),
  })
  .openapi({
    description: 'A thumbnail image representing the object.',
    required: ['height', 'url', 'width'],
  })
  .openapi('Thumbnail')

const DesignLinksSchema = z
  .object({
    edit_url: z
      .string()
      .openapi({
        description:
          'A temporary editing URL for the design. This URL is only accessible to the user that made the API request, and is designed to support [return navigation](https://www.canva.dev/docs/apps/rest-apis/return-navigation-guide/) workflows.\n\nNOTE: This is not a permanent URL, it is only valid for 30 days.',
        example:
          'https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit',
      }),
    view_url: z
      .string()
      .openapi({
        description:
          'A temporary viewing URL for the design. This URL is only accessible to the user that made the API request, and is designed to support [return navigation](https://www.canva.dev/docs/apps/rest-apis/return-navigation-guide/) workflows.\n\nNOTE: This is not a permanent URL, it is only valid for 30 days.\n',
        example:
          'https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view',
      }),
  })
  .openapi({
    description: 'A temporary set of URLs for viewing or editing the design.',
    required: ['edit_url', 'view_url'],
  })
  .openapi('DesignLinks')

const DesignSummarySchema = z
  .object({
    id: z.string().openapi({ description: 'The design ID.', example: 'DAFVztcvd9z' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design title.', example: 'My summer holiday' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of the design.',
        example: 'https://www.canva.com/design/DAFVztcvd9z/edit',
      }),
    thumbnail: ThumbnailSchema.exactOptional(),
    urls: DesignLinksSchema,
    created_at: z
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
        description:
          'When the design was created in Canva, as a Unix timestamp (in seconds since the Unix\nEpoch).',
        example: 1377396000,
      }),
    updated_at: z
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
        description:
          'When the design was last updated in Canva, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1692928800,
      }),
    page_count: z
      .int32()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          "The total number of pages in the design. Some design types don't have pages (for example, Canva docs).",
        example: 3,
      }),
  })
  .openapi({
    description: "Basic details about the design, such as the design's ID, title, and URL.",
    required: ['created_at', 'id', 'updated_at', 'urls'],
  })
  .openapi('DesignSummary')

const AutofillTrialInformationSchema = z
  .object({
    uses_remaining: z
      .int32()
      .min(0)
      .openapi({ description: 'The number of uses remaining in the free trial.', example: 0 }),
    upgrade_url: z
      .string()
      .openapi({
        description:
          'The URL for a user to upgrade their Canva account to a plan with autofill access.',
        example: 'https://www.canva.com/pro/',
      }),
  })
  .openapi({
    description:
      "WARNING: Trials and trial information are a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis).\nThere might be unannounced breaking changes to this feature which won't produce a new API version.\n\nTrial information for users on a Canva plan that doesn't include autofill access. These\nusers have a limited number of autofill uses. Once the trial is exhausted, users must\nupgrade their Canva plan (such as to Canva Pro, Canva Teams, or Canva Enterprise) to\ncontinue using the Autofill API.",
    required: ['upgrade_url', 'uses_remaining'],
  })
  .openapi('AutofillTrialInformation')

const CreateDesignAutofillJobResultSchema = z
  .object({
    type: z.literal('create_design'),
    design: DesignSummarySchema,
    trial_information: AutofillTrialInformationSchema.exactOptional(),
  })
  .openapi({
    description: "A new autofilled design has been created and saved to the user's root folder.",
    required: ['design', 'type'],
  })
  .openapi('CreateDesignAutofillJobResult')

const UpdateDesignAutofillJobResultSchema = z
  .object({ type: z.literal('update_design'), design: DesignSummarySchema })
  .openapi({
    description: 'The existing design has been autofilled in place.',
    required: ['design', 'type'],
  })
  .openapi('UpdateDesignAutofillJobResult')

type DesignAutofillJobResultType =
  | z.infer<typeof CreateDesignAutofillJobResultSchema>
  | z.infer<typeof UpdateDesignAutofillJobResultSchema>

const CommentObjectSchema: z.ZodType<CommentObjectType> = z
  .lazy(() =>
    z
      .xor([DesignCommentObjectSchema])
      .openapi({
        deprecated: true,
        description:
          'Identifying information about the object (such as a design) that the comment is attached to.',
        discriminator: {
          mapping: { design: '#/components/schemas/DesignCommentObject' },
          propertyName: 'type',
        },
        example: { design_id: 'DAFVztcvd9z', type: 'design' },
      }),
  )
  .openapi('CommentObject')

const UserSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The ID of the user.', example: 'uKakKUfI03Fg8k2gZ6OkT' }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the user as shown in the Canva UI.',
        example: 'John Doe',
      }),
  })
  .openapi({
    description: 'Metadata for the user, consisting of the User ID and display name.',
    required: ['id'],
  })
  .openapi('User')

const TeamUserSchema = z
  .object({
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user.', example: 'auDAbliZ2rQNNOsUl5OLu' }),
    team_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The ID of the user's Canva Team.",
        example: 'Oi2RJILTrKk0KRhRUZozX',
      }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the user as shown in the Canva UI.',
        example: 'Jane Doe',
      }),
  })
  .openapi({
    description: 'Metadata for the user, consisting of the User ID, Team ID, and display name.',
    required: [],
  })
  .openapi('TeamUser')

const ParentCommentSchema = z
  .object({
    type: z.literal('parent'),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the comment.\n\nYou can use this ID to create replies to the comment using the [Create reply API](https://www.canva.dev/docs/apps/rest-apis/reference/comments/create-reply/).',
        example: 'KeAbiEAjZEj',
      }),
    attached_to: CommentObjectSchema.exactOptional(),
    message: z
      .string()
      .openapi({
        description:
          'The comment message. This is the comment body shown in the Canva UI.\nUser mentions are shown here in the format `[user_id:team_id]`.',
        example: 'Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!',
      }),
    author: UserSchema,
    created_at: z
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
          'When the comment or reply was created, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692928800,
      }),
    updated_at: z
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
          'When the comment or reply was last updated, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692928900,
      }),
    mentions: z
      .record(z.string(), TeamUserSchema)
      .openapi({
        deprecated: true,
        description: 'The Canva users mentioned in the comment.',
        example: {
          'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP': {
            user_id: 'oUnPjZ2k2yuhftbWF7873o',
            team_id: 'oBpVhLW22VrqtwKgaayRbP',
            display_name: 'John Doe',
          },
        },
      }),
    assignee: UserSchema.exactOptional(),
    resolver: UserSchema.exactOptional(),
  })
  .openapi({
    deprecated: true,
    description:
      'Data about the comment, including the message, author, and\nthe object (such as a design) the comment is attached to.',
    required: ['author', 'id', 'mentions', 'message', 'type'],
  })
  .openapi('ParentComment')

const ReplyCommentSchema = z
  .object({
    type: z.literal('reply'),
    id: z.string().openapi({ description: 'The ID of the comment.', example: 'KeAZEAjijEb' }),
    attached_to: CommentObjectSchema.exactOptional(),
    message: z
      .string()
      .openapi({
        description:
          'The comment message. This is the comment body shown in the Canva UI.\nUser mentions are shown here in the format `[user_id:team_id]`.',
        example: 'Thanks!',
      }),
    author: UserSchema,
    created_at: z
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
          'When the comment or reply was created, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692929800,
      }),
    updated_at: z
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
          'When the comment or reply was last updated, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692929900,
      }),
    mentions: z
      .record(z.string(), TeamUserSchema)
      .openapi({
        deprecated: true,
        description: 'The Canva users mentioned in the comment.',
        example: {
          'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP': {
            user_id: 'oUnPjZ2k2yuhftbWF7873o',
            team_id: 'oBpVhLW22VrqtwKgaayRbP',
            display_name: 'John Doe',
          },
        },
      }),
    thread_id: z
      .string()
      .openapi({
        description:
          'The ID of the comment thread this reply is in. This ID is the same as the `id` of the\nparent comment.',
        example: 'KeAbiEAjZEj',
      }),
  })
  .openapi({
    deprecated: true,
    description:
      'Data about the reply comment, including the message, author, and\nthe object (such as a design) the comment is attached to.',
    required: ['author', 'id', 'mentions', 'message', 'thread_id', 'type'],
  })
  .openapi('ReplyComment')

type CommentType = z.infer<typeof ParentCommentSchema> | z.infer<typeof ReplyCommentSchema>

const DesignCommentObjectSchema = z
  .object({
    type: z.literal('design'),
    design_id: z
      .string()
      .openapi({
        description: 'The ID of the design this comment is attached to.',
        example: 'DAFVztcvd9z',
      }),
  })
  .openapi({
    deprecated: true,
    description: 'If the comment is attached to a Canva Design.',
    required: ['design_id', 'type'],
  })
  .openapi('DesignCommentObject')

type CommentObjectType = z.infer<typeof DesignCommentObjectSchema>

const DesignCommentObjectInputSchema = z
  .object({
    type: z.literal('design'),
    design_id: z
      .string()
      .openapi({
        description: 'The ID of the design you want to attach this comment to.',
        example: 'DAFVztcvd9z',
      }),
  })
  .openapi({
    description: 'If the comment is attached to a Canva Design.',
    required: ['design_id', 'type'],
  })
  .openapi('DesignCommentObjectInput')

type CommentObjectInputType = z.infer<typeof DesignCommentObjectInputSchema>

const ThreadTypeSchema: z.ZodType<ThreadTypeType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [CommentThreadTypeSchema, SuggestionThreadTypeSchema])
      .openapi({
        description:
          'The type of the discussion thread, along with additional type-specific properties.',
        discriminator: {
          mapping: {
            comment: '#/components/schemas/CommentThreadType',
            suggestion: '#/components/schemas/SuggestionThreadType',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('ThreadType')

const ThreadSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The ID of the thread.\n\nYou can use this ID to create replies to the thread using the [Create reply API](https://www.canva.dev/docs/apps/rest-apis/reference/comments/create-reply/).',
        example: 'KeAbiEAjZEj',
      }),
    design_id: z
      .string()
      .openapi({
        description: 'The ID of the design that the discussion thread is on.',
        example: 'DAFVztcvd9z',
      }),
    thread_type: ThreadTypeSchema,
    author: UserSchema.exactOptional(),
    created_at: z
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
        description:
          'When the thread was created, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692928800,
      }),
    updated_at: z
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
        description:
          'When the thread was last updated, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692928900,
      }),
  })
  .openapi({
    description:
      'A discussion thread on a design.\n\nThe `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.\nThe `author` of the thread might be missing if that user account no longer exists.',
    required: ['created_at', 'design_id', 'id', 'thread_type', 'updated_at'],
  })
  .openapi('Thread')

const NewCommentEventSchema = z
  .object({
    type: z.literal('new'),
    comment_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the comment thread.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    comment: ThreadSchema,
  })
  .openapi({
    description: 'Event type for a new comment thread.',
    required: ['comment', 'comment_url', 'type'],
  })
  .openapi('NewCommentEvent')

const AssignedCommentEventSchema = z
  .object({
    type: z.literal('assigned'),
    comment_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the comment thread.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    comment: ThreadSchema,
  })
  .openapi({
    description: 'Event type for a comment thread that has been assigned.',
    required: ['comment', 'comment_url', 'type'],
  })
  .openapi('AssignedCommentEvent')

const ResolvedCommentEventSchema = z
  .object({
    type: z.literal('resolved'),
    comment_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the comment thread.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    comment: ThreadSchema,
  })
  .openapi({
    description: 'Event type for a comment thread that has been resolved.',
    required: ['comment', 'comment_url', 'type'],
  })
  .openapi('ResolvedCommentEvent')

const CommentContentSchema = z
  .object({
    plaintext: z
      .string()
      .openapi({
        description:
          'The content in plaintext.\nAny user mention tags are shown in the format `[user_id:team_id]`.',
        example: 'Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!',
      }),
    markdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content in markdown.\nAny user mention tags are shown in the format `[user_id:team_id]`',
        example: '*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!',
      }),
  })
  .openapi({ description: 'The content of a comment thread or reply.', required: ['plaintext'] })
  .openapi('CommentContent')

const UserMentionSchema = z
  .object({
    tag: z
      .string()
      .openapi({
        description:
          "The mention tag for the user mentioned in the comment thread or reply content. This has the format of the user's user ID and team ID separated by a colon (`user_id:team_id`).",
        example: 'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP',
      }),
    user: TeamUserSchema,
  })
  .openapi({
    description:
      "Information about the user mentioned in a comment thread or reply. Each user mention is keyed using the user's user ID and team ID separated by a colon (`user_id:team_id`).",
    required: ['tag', 'user'],
  })
  .openapi('UserMention')

const ReplySchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the reply.', example: 'KeAZEAjijEb' }),
    design_id: z
      .string()
      .openapi({
        description: 'The ID of the design that the thread for this reply is attached to.',
        example: 'DAFVztcvd9z',
      }),
    thread_id: z
      .string()
      .openapi({ description: 'The ID of the thread this reply is in.', example: 'KeAbiEAjZEj' }),
    author: UserSchema.exactOptional(),
    content: CommentContentSchema,
    mentions: z
      .record(z.string(), UserMentionSchema)
      .openapi({
        description: 'The Canva users mentioned in the comment thread or reply.',
        example: {
          'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP': {
            tag: 'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP',
            user: {
              user_id: 'oUnPjZ2k2yuhftbWF7873o',
              team_id: 'oBpVhLW22VrqtwKgaayRbP',
              display_name: 'John Doe',
            },
          },
        },
      }),
    created_at: z
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
        description:
          'When the reply was created, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692929800,
      }),
    updated_at: z
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
        description:
          'When the reply was last updated, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1692929900,
      }),
  })
  .openapi({
    description:
      'A reply to a thread.\n\nThe `author` of the reply might be missing if that user account no longer exists.',
    required: ['content', 'created_at', 'design_id', 'id', 'mentions', 'thread_id', 'updated_at'],
  })
  .openapi('Reply')

const ReplyCommentEventSchema = z
  .object({
    type: z.literal('reply'),
    reply_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the comment reply.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    reply: ReplySchema,
  })
  .openapi({
    description: 'Event type for a reply to a comment thread.',
    required: ['reply', 'reply_url', 'type'],
  })
  .openapi('ReplyCommentEvent')

const MentionEventContentSchema: z.ZodType<MentionEventContentType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [ThreadMentionEventContentSchema, ReplyMentionEventContentSchema])
      .openapi({
        description:
          'The type of mention event content, along with additional type-specific properties.',
        discriminator: {
          mapping: {
            thread: '#/components/schemas/ThreadMentionEventContent',
            reply: '#/components/schemas/ReplyMentionEventContent',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('MentionEventContent')

const MentionCommentEventSchema = z
  .object({ type: z.literal('mention'), content: MentionEventContentSchema })
  .openapi({
    description: 'Event type for a mention in a comment thread or reply.',
    required: ['content', 'type'],
  })
  .openapi('MentionCommentEvent')

type CommentEventType =
  | z.infer<typeof NewCommentEventSchema>
  | z.infer<typeof AssignedCommentEventSchema>
  | z.infer<typeof ResolvedCommentEventSchema>
  | z.infer<typeof ReplyCommentEventSchema>
  | z.infer<typeof MentionCommentEventSchema>

const ThreadMentionEventContentSchema = z
  .object({
    type: z.literal('thread'),
    comment_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the comment thread.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    comment: ThreadSchema,
  })
  .openapi({
    description: 'Content for a mention in a comment thread.',
    required: ['comment', 'comment_url', 'type'],
  })
  .openapi('ThreadMentionEventContent')

const ReplyMentionEventContentSchema = z
  .object({
    type: z.literal('reply'),
    reply_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the comment reply.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    reply: ReplySchema,
  })
  .openapi({
    description: 'Content for a mention in a comment reply.',
    required: ['reply', 'reply_url', 'type'],
  })
  .openapi('ReplyMentionEventContent')

type MentionEventContentType =
  | z.infer<typeof ThreadMentionEventContentSchema>
  | z.infer<typeof ReplyMentionEventContentSchema>

const CommentThreadTypeSchema = z
  .object({
    type: z.literal('comment'),
    content: CommentContentSchema,
    mentions: z
      .record(z.string(), UserMentionSchema)
      .openapi({
        description: 'The Canva users mentioned in the comment thread or reply.',
        example: {
          'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP': {
            tag: 'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP',
            user: {
              user_id: 'oUnPjZ2k2yuhftbWF7873o',
              team_id: 'oBpVhLW22VrqtwKgaayRbP',
              display_name: 'John Doe',
            },
          },
        },
      }),
    assignee: UserSchema.exactOptional(),
    resolver: UserSchema.exactOptional(),
  })
  .openapi({ description: 'A comment thread.', required: ['content', 'mentions', 'type'] })
  .openapi('CommentThreadType')

const SuggestedEditSchema: z.ZodType<SuggestedEditType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        AddSuggestedEditSchema,
        DeleteSuggestedEditSchema,
        FormatSuggestedEditSchema,
      ])
      .openapi({
        description:
          'The type of the suggested edit, along with additional type-specific properties.',
        discriminator: {
          mapping: {
            add: '#/components/schemas/AddSuggestedEdit',
            delete: '#/components/schemas/DeleteSuggestedEdit',
            format: '#/components/schemas/FormatSuggestedEdit',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('SuggestedEdit')

const SuggestionStatusSchema = z
  .enum(['open', 'accepted', 'rejected'])
  .openapi({
    description: 'The current status of the suggestion.',
    'x-enum-descriptions': [
      "A suggestion was made, but it hasn't been accepted or rejected yet.",
      'A suggestion was accepted and applied to the design.',
      'A suggestion was rejected and not applied to the design.',
    ],
  })
  .openapi('SuggestionStatus')

const SuggestionThreadTypeSchema = z
  .object({
    type: z.literal('suggestion'),
    suggested_edits: z.array(SuggestedEditSchema).min(1),
    status: SuggestionStatusSchema,
  })
  .openapi({ description: 'A suggestion thread.', required: ['status', 'suggested_edits', 'type'] })
  .openapi('SuggestionThreadType')

type ThreadTypeType =
  | z.infer<typeof CommentThreadTypeSchema>
  | z.infer<typeof SuggestionThreadTypeSchema>

const AddSuggestedEditSchema = z
  .object({ type: z.literal('add'), text: z.string().openapi({ example: 'fantastic' }) })
  .openapi({ description: 'A suggestion to add some text.', required: ['text', 'type'] })
  .openapi('AddSuggestedEdit')

const DeleteSuggestedEditSchema = z
  .object({ type: z.literal('delete'), text: z.string().openapi({ example: 'just' }) })
  .openapi({ description: 'A suggestion to delete some text.', required: ['text', 'type'] })
  .openapi('DeleteSuggestedEdit')

const SuggestionFormatSchema = z
  .enum([
    'font_family',
    'font_size',
    'font_weight',
    'font_style',
    'color',
    'background_color',
    'decoration',
    'strikethrough',
    'link',
    'letter_spacing',
    'line_height',
    'direction',
    'text_align',
    'list_marker',
    'list_level',
    'margin_inline_start',
    'text_indent',
    'font_size_modifier',
    'vertical_align',
  ])
  .openapi({ description: 'The suggested format change.', example: 'font_style' })
  .openapi('SuggestionFormat')

const FormatSuggestedEditSchema = z
  .object({ type: z.literal('format'), format: SuggestionFormatSchema })
  .openapi({ description: 'A suggestion to format some text.', required: ['format', 'type'] })
  .openapi('FormatSuggestedEdit')

type SuggestedEditType =
  | z.infer<typeof AddSuggestedEditSchema>
  | z.infer<typeof DeleteSuggestedEditSchema>
  | z.infer<typeof FormatSuggestedEditSchema>

const NewSuggestionEventTypeSchema = z
  .object({
    type: z.literal('new'),
    suggestion_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the suggestion.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    suggestion: ThreadSchema,
  })
  .openapi({
    description: 'Event type for a new suggestion.',
    required: ['suggestion', 'suggestion_url', 'type'],
  })
  .openapi('NewSuggestionEventType')

const AcceptedSuggestionEventTypeSchema = z
  .object({
    type: z.literal('accepted'),
    suggestion_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the suggestion.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    suggestion: ThreadSchema,
  })
  .openapi({
    description: 'Event type for a suggestion that has been accepted.',
    required: ['suggestion', 'suggestion_url', 'type'],
  })
  .openapi('AcceptedSuggestionEventType')

const RejectedSuggestionEventTypeSchema = z
  .object({
    type: z.literal('rejected'),
    suggestion_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the suggestion.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    suggestion: ThreadSchema,
  })
  .openapi({
    description: 'Event type for a suggestion that has been rejected.',
    required: ['suggestion', 'suggestion_url', 'type'],
  })
  .openapi('RejectedSuggestionEventType')

const ReplySuggestionEventTypeSchema = z
  .object({
    type: z.literal('reply'),
    reply_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the suggestion reply.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    reply: ReplySchema,
  })
  .openapi({
    description: 'Event type for a reply to a suggestion.',
    required: ['reply', 'reply_url', 'type'],
  })
  .openapi('ReplySuggestionEventType')

const MentionSuggestionEventTypeSchema = z
  .object({
    type: z.literal('mention'),
    reply_url: z
      .string()
      .openapi({
        description: 'A URL to the design, focused on the suggestion reply.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    reply: ReplySchema,
  })
  .openapi({
    description: 'Event type for a mention in a reply to a suggestion.',
    required: ['reply', 'reply_url', 'type'],
  })
  .openapi('MentionSuggestionEventType')

type SuggestionEventTypeType =
  | z.infer<typeof NewSuggestionEventTypeSchema>
  | z.infer<typeof AcceptedSuggestionEventTypeSchema>
  | z.infer<typeof RejectedSuggestionEventTypeSchema>
  | z.infer<typeof ReplySuggestionEventTypeSchema>
  | z.infer<typeof MentionSuggestionEventTypeSchema>

const StringDataTableCellSchema = z
  .object({ type: z.literal('string'), value: z.string().max(10000).exactOptional() })
  .openapi({ description: 'A string tabular data cell.', required: ['type'] })
  .openapi('StringDataTableCell')

const NumberCellMetadataSchema = z
  .object({
    formatting: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Formatting pattern using Office Open XML Format.\n\nThese patterns control how numbers are displayed to users, including currency symbols,\ndecimal places, and separators.',
      }),
  })
  .openapi({ description: 'Formatting metadata for number cells.', required: [] })
  .openapi('NumberCellMetadata')

const NumberDataTableCellSchema = z
  .object({
    type: z.literal('number'),
    value: z.float64().exactOptional(),
    metadata: NumberCellMetadataSchema.exactOptional(),
  })
  .openapi({ description: 'A number tabular data cell.', required: ['type'] })
  .openapi('NumberDataTableCell')

const BooleanDataTableCellSchema = z
  .object({ type: z.literal('boolean'), value: z.boolean().exactOptional() })
  .openapi({ description: 'A boolean tabular data cell.', required: ['type'] })
  .openapi('BooleanDataTableCell')

const DateDataTableCellSchema = z
  .object({
    type: z.literal('date'),
    value: z
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
  })
  .openapi({
    description:
      'A date tabular data cell.\n\nSpecified as a Unix timestamp (in seconds since the Unix Epoch).',
    required: ['type'],
  })
  .openapi('DateDataTableCell')

const DataTableImageMimeTypeSchema = z
  .enum(['image/jpeg', 'image/heic', 'image/png', 'image/svg+xml', 'image/webp', 'image/tiff'])
  .openapi({ description: "The MIME type of an image file that's supported by Canva's backend." })
  .openapi('DataTableImageMimeType')

const DataTableAiDisclosureSchema = z
  .enum(['app_generated', 'none'])
  .openapi({
    description: 'A disclosure identifying if the app generated this media asset using AI.',
    'x-enum-descriptions': [
      'App creates or significantly alters content using AI',
      'No AI involvement in creation or alteration',
    ],
  })
  .openapi('DataTableAiDisclosure')

const DataTableImageUploadSchema = z
  .object({
    type: z.literal('image_upload'),
    url: z
      .string()
      .openapi({
        description:
          'The URL of the image file to upload.\nThis can be an external URL or a data URL.',
      }),
    thumbnail_url: z
      .string()
      .openapi({
        description:
          'The URL of a thumbnail image to display while the image is queued for upload.\nThis can be an external URL or a data URL.',
      }),
    mime_type: DataTableImageMimeTypeSchema,
    width: z.int32().exactOptional().openapi({ description: 'The width of the image in pixels.' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the image in pixels.' }),
    ai_disclosure: DataTableAiDisclosureSchema,
  })
  .openapi({
    description: 'Options for uploading an image asset.',
    required: ['ai_disclosure', 'mime_type', 'thumbnail_url', 'type', 'url'],
  })
  .openapi('DataTableImageUpload')

const DataTableVideoMimeTypeSchema = z
  .enum([
    'video/avi',
    'video/x-msvideo',
    'image/gif',
    'video/x-m4v',
    'video/x-matroska',
    'video/quicktime',
    'video/mp4',
    'video/mpeg',
    'video/webm',
    'application/json',
  ])
  .openapi({
    description: "The MIME type of a video file that's supported by Canva's backend.",
    'x-enum-descriptions': [
      '',
      '',
      'GIFs are treated as videos, not images.',
      '',
      '',
      '',
      '',
      '',
      '',
      'Used for Lottie files.',
    ],
  })
  .openapi('DataTableVideoMimeType')

const DataTableVideoUploadSchema = z
  .object({
    type: z.literal('video_upload'),
    url: z.string().openapi({ description: 'The URL of the video file to upload.' }),
    thumbnail_image_url: z
      .string()
      .openapi({
        description:
          "The URL of a thumbnail image to use as a fallback if thumbnailVideoUrl isn't provided.\nThis can be an external URL or a data URL.",
      }),
    thumbnail_video_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of a thumbnail video to display while the video is queued for upload.',
      }),
    mime_type: DataTableVideoMimeTypeSchema,
    width: z.int32().exactOptional().openapi({ description: 'The width of the video in pixels.' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the video in pixels.' }),
    ai_disclosure: DataTableAiDisclosureSchema,
  })
  .openapi({
    description: 'Options for uploading a video asset.',
    required: ['ai_disclosure', 'mime_type', 'thumbnail_image_url', 'type', 'url'],
  })
  .openapi('DataTableVideoUpload')

const DataTableMediaSchema = z
  .discriminatedUnion('type', [DataTableImageUploadSchema, DataTableVideoUploadSchema])
  .openapi({
    discriminator: {
      mapping: {
        image_upload: '#/components/schemas/DataTableImageUpload',
        video_upload: '#/components/schemas/DataTableVideoUpload',
      },
      propertyName: 'type',
    },
  })
  .openapi('DataTableMedia')

const MediaCollectionDataTableCellSchema = z
  .object({
    type: z.literal('media'),
    value: z
      .array(DataTableMediaSchema)
      .max(20)
      .openapi({
        description: 'Media collection values.\n\nProvide an empty array for an empty cell.',
      }),
  })
  .openapi({ description: 'Cell containing a media collection.', required: ['type', 'value'] })
  .openapi('MediaCollectionDataTableCell')

type DataTableCellType =
  | z.infer<typeof StringDataTableCellSchema>
  | z.infer<typeof NumberDataTableCellSchema>
  | z.infer<typeof BooleanDataTableCellSchema>
  | z.infer<typeof DateDataTableCellSchema>
  | z.infer<typeof MediaCollectionDataTableCellSchema>

const DesignTypeInputSchema: z.ZodType<DesignTypeInputType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [PresetDesignTypeInputSchema, CustomDesignTypeInputSchema])
      .openapi({
        description: 'The desired design type.',
        discriminator: {
          mapping: {
            preset: '#/components/schemas/PresetDesignTypeInput',
            custom: '#/components/schemas/CustomDesignTypeInput',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('DesignTypeInput')

const DesignTypeCreateDesignRequestSchema = z
  .object({
    type: z
      .literal('type_and_asset')
      .openapi({
        description:
          "For backward compatibility, if `type` isn't specified in the request, the request type will be assumed to be `type_and_asset`.",
      }),
    design_type: DesignTypeInputSchema.exactOptional(),
    asset_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of an asset to insert into the created design. Currently, this only supports image assets.',
        example: 'Msd59349ff',
      }),
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The name of the design.', example: 'My Holiday Presentation' }),
  })
  .openapi({
    description:
      'Create a design by specifying the design type and/or an asset.\nAt least one of `design_type` or `asset_id` must be defined.',
    required: ['type'],
  })
  .openapi('DesignTypeCreateDesignRequest')

const DesignCreateDesignRequestSchema = z
  .object({
    type: z.literal('design'),
    design_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The ID of the design to copy.', example: 'DAFVztcvetc' }),
    page_numbers: z
      .array(z.int32().min(1))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The pages to copy from the source design. If not specified, all pages are copied.\nPages are indexed using one-based numbering.',
      }),
  })
  .openapi({
    description:
      "<Warning>\n\nCreating a copy of an existing design is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nBody parameters for creating a copy of an existing design.",
    required: ['design_id', 'type'],
  })
  .openapi('DesignCreateDesignRequest')

const BrandTemplateCreateDesignRequestSchema = z
  .object({
    type: z.literal('brand_template'),
    brand_template_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description: 'The ID of the brand template used to create a design copy.',
        example: 'EDMzWSwy3BI',
      }),
    page_numbers: z
      .array(z.int32().min(1))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The pages to copy from the brand template. If not specified, all pages are copied.\nPages are indexed using one-based numbering.',
      }),
  })
  .openapi({
    description:
      "<Warning>\n\nCreating a copy from a brand template is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nBody parameters for creating a copy from a brand template.",
    required: ['brand_template_id', 'type'],
  })
  .openapi('BrandTemplateCreateDesignRequest')

type CreateDesignRequestType =
  | z.infer<typeof DesignTypeCreateDesignRequestSchema>
  | z.infer<typeof DesignCreateDesignRequestSchema>
  | z.infer<typeof BrandTemplateCreateDesignRequestSchema>

const ImageDataFieldSchema = z
  .object({ type: z.literal('image') })
  .openapi({
    description:
      'An image data field. You can autofill it with an image by providing its `asset_id`.\n\nYou can also autofill it with a video asset.',
    required: ['type'],
  })
  .openapi('ImageDataField')

const TextDataFieldSchema = z
  .object({ type: z.literal('text') })
  .openapi({
    description: 'A text data field. You can autofill it with a text value.',
    required: ['type'],
  })
  .openapi('TextDataField')

const ChartDataFieldSchema = z
  .object({ type: z.literal('chart') })
  .openapi({
    description: 'A chart data field. You can autofill it with tabular data.',
    required: ['type'],
  })
  .openapi('ChartDataField')

const SheetDataFieldSchema = z
  .object({ type: z.literal('sheet') })
  .openapi({
    description: 'A sheet data field. You can autofill it with tabular sheet data.',
    required: ['type'],
  })
  .openapi('SheetDataField')

type DataFieldType =
  | z.infer<typeof ImageDataFieldSchema>
  | z.infer<typeof TextDataFieldSchema>
  | z.infer<typeof ChartDataFieldSchema>
  | z.infer<typeof SheetDataFieldSchema>

const PresetDesignTypeNameSchema = z
  .enum(['doc', 'email', 'presentation', 'whiteboard'])
  .openapi({
    description: 'The name of the design type.',
    'x-enum-descriptions': [
      "A [Canva doc](https://www.canva.com/docs/); a document for Canva's online text editor.",
      'An [email](https://www.canva.com/emails/); for creating email campaign designs.',
      'A [presentation](https://www.canva.com/presentations/); lets you create and collaborate for presenting to an audience.',
      'A [whiteboard](https://www.canva.com/online-whiteboard/); a design which gives you infinite space to collaborate.',
    ],
  })
  .openapi('PresetDesignTypeName')

const PresetDesignTypeInputSchema = z
  .object({ type: z.literal('preset'), name: PresetDesignTypeNameSchema })
  .openapi({ description: 'Provide the common design type.', required: ['name', 'type'] })
  .openapi('PresetDesignTypeInput')

const CustomDesignTypeInputSchema = z
  .object({
    type: z.literal('custom'),
    width: z
      .int32()
      .min(40)
      .max(8000)
      .openapi({ description: 'The width of the design, in pixels.', example: 320 }),
    height: z
      .int32()
      .min(40)
      .max(8000)
      .openapi({ description: 'The height of the design, in pixels.', example: 200 }),
  })
  .openapi({
    description:
      'Provide the width and height to define a custom design type.\n\nEach dimension must be between 40 and 8000 pixels, and the\ntotal area (width × height) must not exceed 25,000,000 pixels\nsquared. For example, a design with a width of 8000 pixels can\nhave a maximum height of 3125 pixels.',
    required: ['height', 'type', 'width'],
  })
  .openapi('CustomDesignTypeInput')

type DesignTypeInputType =
  | z.infer<typeof PresetDesignTypeInputSchema>
  | z.infer<typeof CustomDesignTypeInputSchema>

const ExportQualitySchema = z
  .enum(['regular', 'pro'])
  .default('regular')
  .openapi({
    description: 'Specifies the export quality of the design.',
    'x-enum-descriptions': [
      'Regular quality export.',
      "Premium quality export.\n\nNOTE: A `pro` export might fail if the design contains [premium elements](https://www.canva.com/help/premium-elements/) and the calling user either hasn't purchased the elements or isn't on a Canva plan (such as Canva Pro) that has premium features.",
    ],
  })
  .openapi('ExportQuality')

const ExportPageSizeSchema = z
  .enum(['a4', 'a3', 'letter', 'legal'])
  .default('a4')
  .openapi({
    description:
      'The paper size of the export PDF file. The `size` attribute is only supported for Documents (Canva Docs).',
    example: 'a4',
  })
  .openapi('ExportPageSize')

const PdfExportFormatSchema = z
  .object({
    type: z.literal('pdf'),
    export_quality: ExportQualitySchema.exactOptional(),
    size: ExportPageSizeSchema.exactOptional(),
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description: 'Export the design as a PDF. Providing a paper size is optional.',
    required: ['type'],
  })
  .openapi('PdfExportFormat')

const JpgExportFormatSchema = z
  .object({
    type: z.literal('jpg'),
    export_quality: ExportQualitySchema.exactOptional(),
    quality: z
      .int32()
      .min(1)
      .max(100)
      .openapi({
        description:
          'For the `jpg` type, the `quality` of the exported JPEG determines how compressed the exported file should be. A _low_ `quality` value will create a file with a smaller file size, but the resulting file will have pixelated artifacts when compared to a file created with a _high_ `quality` value.',
        example: 80,
      }),
    height: z
      .int32()
      .min(40)
      .max(25000)
      .exactOptional()
      .openapi({
        description:
          "Specify the height in pixels of the exported image. Note the following behavior:\n\n- If no height or width is specified, the image is exported using the dimensions of the design.\n- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
        example: 400,
      }),
    width: z
      .int32()
      .min(40)
      .max(25000)
      .exactOptional()
      .openapi({
        description:
          "Specify the width in pixels of the exported image. Note the following behavior:\n\n- If no width or height is specified, the image is exported using the dimensions of the design.\n- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
        example: 400,
      }),
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description:
      "Export the design as a JPEG. Compression quality must be provided. Height or width (or both)\nmay be specified, otherwise the file will be exported at it's default size.\n\nIf the user is on the Canva Free plan, the export height and width for a fixed-dimension design can't be upscaled by more than a factor of `1.125`.",
    required: ['quality', 'type'],
  })
  .openapi('JpgExportFormat')

const PngExportFormatSchema = z
  .object({
    type: z.literal('png'),
    export_quality: ExportQualitySchema.exactOptional(),
    height: z
      .int32()
      .min(40)
      .max(25000)
      .exactOptional()
      .openapi({
        description:
          "Specify the height in pixels of the exported image. Note the following behavior:\n\n- If no height or width is specified, the image is exported using the dimensions of the design.\n- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
        example: 400,
      }),
    width: z
      .int32()
      .min(40)
      .max(25000)
      .exactOptional()
      .openapi({
        description:
          "Specify the width in pixels of the exported image. Note the following behavior:\n\n- If no width or height is specified, the image is exported using the dimensions of the design.\n- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
        example: 400,
      }),
    lossless: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If set to `true` (default), the PNG is exported without compression.\n\nIf set to `false`, the PNG is compressed using a lossy compression algorithm.\n\nAVAILABILITY: Lossy PNG compression is only available to users on a Canva plan that has premium features, such as Canva Pro. If the user is on the Canva Free plan and this parameter is set to `false`, the export operation will fail.',
      }),
    transparent_background: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If set to `true`, the PNG is exported with a transparent background.\n\nAVAILABILITY: This option is only available to users on a Canva plan that has premium features, such as Canva Pro. If the user is on the Canva Free plan and this parameter is set to `true`, the export operation will fail.',
      }),
    as_single_image: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When `true`, multi-page designs are merged into a single image.\nWhen `false` (default), each page is exported as a separate image.',
      }),
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description:
      "Export the design as a PNG. Height or width (or both) may be specified, otherwise\nthe file will be exported at it's default size. You may also specify whether to export the\nfile losslessly, and whether to export a multi-page design as a single image.\n\nIf the user is on the Canva Free plan, the export height and width for a fixed-dimension design can't be upscaled by more than a factor of `1.125`.",
    required: ['type'],
  })
  .openapi('PngExportFormat')

const PptxExportFormatSchema = z
  .object({
    type: z.literal('pptx'),
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({ description: 'Export the design as a PPTX.', required: ['type'] })
  .openapi('PptxExportFormat')

const GifExportFormatSchema = z
  .object({
    type: z.literal('gif'),
    export_quality: ExportQualitySchema.exactOptional(),
    height: z
      .int32()
      .min(40)
      .max(25000)
      .exactOptional()
      .openapi({
        description:
          "Specify the height in pixels of the exported image. Note the following behavior:\n\n- If no height or width is specified, the image is exported using the dimensions of the design.\n- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
        example: 400,
      }),
    width: z
      .int32()
      .min(40)
      .max(25000)
      .exactOptional()
      .openapi({
        description:
          "Specify the width in pixels of the exported image. Note the following behavior:\n\n- If no width or height is specified, the image is exported using the dimensions of the design.\n- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
        example: 400,
      }),
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description:
      "Export the design as a GIF. Height or width (or both) may be specified, otherwise the file\nwill be exported at it's default size. Large designs will be scaled down, and aspect ratio\nwill always be maintained.",
    required: ['type'],
  })
  .openapi('GifExportFormat')

const Mp4ExportQualitySchema = z
  .enum([
    'horizontal_480p',
    'horizontal_720p',
    'horizontal_1080p',
    'horizontal_4k',
    'vertical_480p',
    'vertical_720p',
    'vertical_1080p',
    'vertical_4k',
  ])
  .openapi({
    description:
      "The resolution of the exported video, as a target number of pixels. The resolution is one of\n`480p`, `720p`, `1080p` or `4k`.\n\nThe exported video always has the same aspect ratio as the design, which matches creating a\ndownload from the Canva editor. The resolution sets how many pixels to target, and the\ndesign's aspect ratio decides how they're split between width and height, so the\n`horizontal` and `vertical` values of a given resolution produce the same output:\n\n- A 2160x3840 portrait design exported as `horizontal_4k` is 2160x3840, not 3840x2160. The\n  orientation in the value's name doesn't rotate or crop the design.\n- A 1000x2000 design exported as `horizontal_720p` is 678x1357, the 1:2 size closest to the\n  921,600 pixels of 1280x720. Aspect ratios that don't match a standard video size aren't\n  rounded to one.\n- A square design exported as `horizontal_4k` or `vertical_4k` is 2880x2880, the square with\n  the same number of pixels as 3840x2160.",
  })
  .openapi('Mp4ExportQuality')

const Mp4ExportFormatSchema = z
  .object({
    type: z.literal('mp4'),
    export_quality: ExportQualitySchema.exactOptional(),
    quality: Mp4ExportQualitySchema,
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description: 'Export the design as an MP4. You must specify the quality of the exported video.',
    required: ['quality', 'type'],
  })
  .openapi('Mp4ExportFormat')

const HtmlBundleExportFormatSchema = z
  .object({
    type: z.literal('html_bundle'),
    pages: z
      .array(z.int32().min(1))
      .length(1)
      .exactOptional()
      .openapi({
        description:
          'The pages of the design to export. Currently only a single page can be exported. If not provided,\nthe first page of the design is used.',
        example: [1],
      }),
  })
  .openapi({
    description:
      'Export the email design as an HTML bundle. An HTML bundle is a zip file that contains an HTML file and the associated assets.',
    required: ['type'],
  })
  .openapi('HtmlBundleExportFormat')

const HtmlStandaloneExportFormatSchema = z
  .object({
    type: z.literal('html_standalone'),
    pages: z
      .array(z.int32().min(1))
      .length(1)
      .exactOptional()
      .openapi({
        description:
          'The pages of the design to export. Currently only a single page can be exported. If not provided,\nthe first page of the design is used.',
        example: [1],
      }),
  })
  .openapi({
    description: 'Export the email design as a standalone HTML file with hosted assets.',
    required: ['type'],
  })
  .openapi('HtmlStandaloneExportFormat')

const CsvExportFormatSchema = z
  .object({
    type: z.literal('csv'),
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page numbers as\nan array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description:
      'Export the design as a CSV file. CSV export is only available for designs that contain\ntabular data, such as Canva Sheets.',
    required: ['type'],
  })
  .openapi('CsvExportFormat')

type ExportFormatType =
  | z.infer<typeof PdfExportFormatSchema>
  | z.infer<typeof JpgExportFormatSchema>
  | z.infer<typeof PngExportFormatSchema>
  | z.infer<typeof PptxExportFormatSchema>
  | z.infer<typeof GifExportFormatSchema>
  | z.infer<typeof Mp4ExportFormatSchema>
  | z.infer<typeof HtmlBundleExportFormatSchema>
  | z.infer<typeof HtmlStandaloneExportFormatSchema>
  | z.infer<typeof CsvExportFormatSchema>

const NoneImageGenerationAssetUploadSchema = z
  .object({ type: z.literal('none') })
  .openapi({
    description: "Don't save the generated image. The result contains only its download URL.",
    required: ['type'],
  })
  .openapi('NoneImageGenerationAssetUpload')

const UploadImageGenerationAssetUploadSchema = z
  .object({
    type: z.literal('upload'),
    asset_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "A name for the image asset. Canva doesn't localize this value, so provide a name in\nthe user's language. If omitted, Canva generates a name for the asset.",
        example: 'Red apple on a wooden table',
      }),
  })
  .openapi({
    description:
      "Save the generated image as an image asset in the user's Canva account. The asset appears\nin the user's Uploads, and the generated image in the result includes the `asset`\nalongside its download `url`.",
    required: ['type'],
  })
  .openapi('UploadImageGenerationAssetUpload')

type ImageGenerationAssetUploadType =
  | z.infer<typeof NoneImageGenerationAssetUploadSchema>
  | z.infer<typeof UploadImageGenerationAssetUploadSchema>

const DesignMergeOperationSchema: z.ZodType<DesignMergeOperationType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        InsertPagesDesignMergeOperationSchema,
        MovePagesDesignMergeOperationSchema,
        DeletePagesDesignMergeOperationSchema,
      ])
      .openapi({
        discriminator: {
          mapping: {
            insert_pages: '#/components/schemas/InsertPagesDesignMergeOperation',
            move_pages: '#/components/schemas/MovePagesDesignMergeOperation',
            delete_pages: '#/components/schemas/DeletePagesDesignMergeOperation',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('DesignMergeOperation')

const NewDesignCreateDesignMergeJobRequestSchema = z
  .object({
    type: z
      .literal('create_new_design')
      .openapi({ description: 'The type of merge job to create.', example: 'create_new_design' }),
    operations: z
      .array(DesignMergeOperationSchema)
      .min(1)
      .max(500)
      .openapi({ description: 'For this job type, only insert operations are supported.' }),
    title: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'Title for the new design.', example: 'My merged design' }),
  })
  .openapi({
    description: 'Creates a new design by inserting pages from other designs.',
    required: ['operations', 'title', 'type'],
  })
  .openapi('NewDesignCreateDesignMergeJobRequest')

const ModifyDesignCreateDesignMergeJobRequestSchema = z
  .object({
    type: z
      .literal('modify_existing_design')
      .openapi({
        description: 'The type of merge job to create.',
        example: 'modify_existing_design',
      }),
    design_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The ID of the design to modify.', example: 'DAFVztcvd9z' }),
    operations: z
      .array(DesignMergeOperationSchema)
      .min(1)
      .max(500)
      .openapi({ description: 'Supports insert, move, and delete operations.' }),
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Optional new title for the design.', example: 'My updated design' }),
  })
  .openapi({
    description: 'Modifies an existing design by inserting, moving, or deleting pages.',
    required: ['design_id', 'operations', 'type'],
  })
  .openapi('ModifyDesignCreateDesignMergeJobRequest')

type CreateDesignMergeJobRequestType =
  | z.infer<typeof NewDesignCreateDesignMergeJobRequestSchema>
  | z.infer<typeof ModifyDesignCreateDesignMergeJobRequestSchema>

const MergeSourceForInsertPagesOperationSchema: z.ZodType<MergeSourceForInsertPagesOperationType> =
  z
    .lazy(() =>
      z
        .xor([DesignMergeSourceForInsertPagesOperationSchema])
        .openapi({
          discriminator: {
            mapping: { design: '#/components/schemas/DesignMergeSourceForInsertPagesOperation' },
            propertyName: 'type',
          },
        }),
    )
    .openapi('MergeSourceForInsertPagesOperation')

const InsertPagesDesignMergeOperationSchema = z
  .object({
    type: z
      .literal('insert_pages')
      .openapi({ description: 'The type of merge operation.', example: 'insert_pages' }),
    source: MergeSourceForInsertPagesOperationSchema,
    after_page_number: z
      .int32()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Insert after this one-based page number in the evolving target layout. Use 0 to insert at the beginning, and the default is inserting at the end (append).\n',
        example: 2,
      }),
  })
  .openapi({
    description: 'Inserts pages from a source design into the target design.',
    required: ['source', 'type'],
  })
  .openapi('InsertPagesDesignMergeOperation')

const MovePagesDesignMergeOperationSchema = z
  .object({
    type: z
      .literal('move_pages')
      .openapi({ description: 'The type of merge operation.', example: 'move_pages' }),
    from_page_numbers: z
      .array(z.int32().min(1))
      .min(1)
      .openapi({
        description:
          'One-based number of the pages to move (evaluated at the time this operation runs). Pages are moved in order.',
        example: [1, 3],
      }),
    to_after_page_number: z
      .int32()
      .min(0)
      .openapi({
        description:
          'Destination position: insert the moved pages after this one-based page number. Use 0 to move to the beginning.\n',
        example: 2,
      }),
  })
  .openapi({
    description: 'Moves pages within the target design to a new position.',
    required: ['from_page_numbers', 'to_after_page_number', 'type'],
  })
  .openapi('MovePagesDesignMergeOperation')

const DeletePagesDesignMergeOperationSchema = z
  .object({
    type: z
      .literal('delete_pages')
      .openapi({ description: 'The type of merge operation.', example: 'delete_pages' }),
    page_numbers: z
      .array(z.int32().min(1))
      .min(1)
      .openapi({
        description:
          'One-based numbers of the pages to delete (evaluated at the time this operation runs). Pages are deleted in reverse order to maintain page numbers.',
        example: [2, 4],
      }),
  })
  .openapi({
    description: 'Deletes pages from the target design.',
    required: ['page_numbers', 'type'],
  })
  .openapi('DeletePagesDesignMergeOperation')

type DesignMergeOperationType =
  | z.infer<typeof InsertPagesDesignMergeOperationSchema>
  | z.infer<typeof MovePagesDesignMergeOperationSchema>
  | z.infer<typeof DeletePagesDesignMergeOperationSchema>

const DesignMergeSourceForInsertPagesOperationSchema = z
  .object({
    type: z
      .literal('design')
      .openapi({ description: 'The type of source to insert pages from.', example: 'design' }),
    design_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The ID of the source design.', example: 'DAFVztcvd9z' }),
    page_numbers: z
      .array(z.int32().min(1))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'One-based page numbers to insert from the source design. If omitted, all pages from the design are inserted.',
        example: [1, 2],
      }),
  })
  .openapi({
    description: 'A design source from which pages are inserted.',
    required: ['design_id', 'type'],
  })
  .openapi('DesignMergeSourceForInsertPagesOperation')

type MergeSourceForInsertPagesOperationType = z.infer<
  typeof DesignMergeSourceForInsertPagesOperationSchema
>

const ShareActionSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description:
          'The optional message users can include when sharing something with another\nuser using the Canva UI.',
        example: 'Check this out!',
      }),
  })
  .openapi({ description: 'Metadata about the share event.', required: ['message'] })
  .openapi('ShareAction')

const ShareDesignNotificationContentSchema = z
  .object({
    type: z.literal('share_design').openapi({ example: 'share_design' }),
    triggering_user: UserSchema,
    receiving_team_user: TeamUserSchema,
    design: DesignSummarySchema,
    share_url: z
      .string()
      .openapi({
        description:
          'A URL that the user who receives the notification can use to access the shared design.',
        example:
          'https://www.canva.com/api/action?token=zWiz3GqRaWVkolwSgfBa9sKbsKgfHAoxv_mjs-mlX2M',
      }),
    share: ShareActionSchema.exactOptional(),
  })
  .openapi({
    description: 'The notification content for when someone shares a design.',
    required: ['design', 'receiving_team_user', 'share_url', 'triggering_user', 'type'],
  })
  .openapi('ShareDesignNotificationContent')

const FolderSummarySchema = z
  .object({
    id: z.string().openapi({ description: 'The folder ID.', example: 'FAF2lZtloor' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The folder name, as shown in the Canva UI. This property is deprecated, so you should\nuse the `name` property instead.',
        example: 'My awesome holiday',
      }),
    name: z
      .string()
      .openapi({
        description: 'The folder name, as shown in the Canva UI.',
        example: 'My awesome holiday',
      }),
    created_at: z
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
        description:
          'When the folder was created, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1377396000,
      }),
    updated_at: z
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
        description:
          'When the folder was last updated, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1692928800,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The folder URL.',
        example: 'https://www.canva.com/folder/FAF2lZtloor',
      }),
  })
  .openapi({
    description:
      'This object contains some folder metadata. You can retrieve additional metadata\nusing the folder ID and the `/v1/folders/{folderId}` endpoint.',
    required: ['created_at', 'id', 'name', 'updated_at'],
  })
  .openapi('FolderSummary')

const ShareFolderNotificationContentSchema = z
  .object({
    type: z.literal('share_folder').openapi({ example: 'share_folder' }),
    triggering_user: UserSchema,
    receiving_team_user: TeamUserSchema,
    folder: FolderSummarySchema,
    share: ShareActionSchema.exactOptional(),
  })
  .openapi({
    description: 'The notification content for when someone shares a folder.',
    required: ['folder', 'receiving_team_user', 'triggering_user', 'type'],
  })
  .openapi('ShareFolderNotificationContent')

const CommentEventTypeEnumSchema = z
  .enum(['comment', 'reply', 'mention', 'assign', 'resolve'])
  .openapi({ deprecated: true, description: 'The type of comment event.' })
  .openapi('CommentEventTypeEnum')

const CommentSchema: z.ZodType<CommentType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [ParentCommentSchema, ReplyCommentSchema])
      .openapi({
        deprecated: true,
        description:
          'The comment object, which contains metadata about the comment.\nDeprecated in favor of the new `thread` object.',
        discriminator: {
          mapping: {
            parent: '#/components/schemas/ParentComment',
            reply: '#/components/schemas/ReplyComment',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('Comment')

const CommentEventDeprecatedSchema = z
  .object({ type: CommentEventTypeEnumSchema, data: CommentSchema })
  .openapi({
    deprecated: true,
    description:
      'Basic details about the comment.\n\nThe `comment` property is deprecated.\nFor details of the comment event, use the `comment_event` property instead.',
    required: ['data', 'type'],
  })
  .openapi('CommentEventDeprecated')

const CommentEventSchema: z.ZodType<CommentEventType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        NewCommentEventSchema,
        AssignedCommentEventSchema,
        ResolvedCommentEventSchema,
        ReplyCommentEventSchema,
        MentionCommentEventSchema,
      ])
      .openapi({
        description: 'The type of comment event, including additional type-specific properties.',
        discriminator: {
          mapping: {
            new: '#/components/schemas/NewCommentEvent',
            assigned: '#/components/schemas/AssignedCommentEvent',
            resolved: '#/components/schemas/ResolvedCommentEvent',
            reply: '#/components/schemas/ReplyCommentEvent',
            mention: '#/components/schemas/MentionCommentEvent',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('CommentEvent')

const CommentNotificationContentSchema = z
  .object({
    type: z.literal('comment').openapi({ example: 'comment' }),
    triggering_user: UserSchema,
    receiving_team_user: TeamUserSchema,
    design: DesignSummarySchema,
    comment_url: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'A URL to the design, focused on the new comment.\n\nThe `comment_url` property is deprecated.\nFor details of the comment event, use the `comment_event` property instead.',
        example:
          'https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA',
      }),
    comment: CommentEventDeprecatedSchema.exactOptional(),
    comment_event: CommentEventSchema.exactOptional(),
  })
  .openapi({
    description: 'The notification content for when someone comments on a design.',
    required: ['design', 'receiving_team_user', 'triggering_user', 'type'],
  })
  .openapi('CommentNotificationContent')

const DesignAccessRequestedNotificationContentSchema = z
  .object({
    type: z.literal('design_access_requested').openapi({ example: 'design_access_requested' }),
    triggering_user: TeamUserSchema,
    receiving_team_user: TeamUserSchema,
    design: DesignSummarySchema,
    grant_access_url: z
      .string()
      .openapi({
        description:
          'A URL, which is scoped only to the user that can grant the requested access to the\ndesign, that approves the requested access.',
        example:
          'https://www.canva.com/api/action?token=OosRN8M_eO2-QbLpUmP5JCwTMSXWfadtQYWuj9WKzoE',
      }),
  })
  .openapi({
    description: 'The notification content for when someone requests access to a design.',
    required: ['design', 'grant_access_url', 'receiving_team_user', 'triggering_user', 'type'],
  })
  .openapi('DesignAccessRequestedNotificationContent')

const GroupSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The ID of the group with permissions to access the design.',
        example: 'dl9n9SoWoExMsw6Ri1iTg',
      }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the group.', example: 'Sales team' }),
    external: z
      .boolean()
      .openapi({
        description:
          "Is the user making the API call (the authenticated user) and the Canva Group\nfrom different Canva Teams?\n\n- When `true`, the user and the group aren't in the same Canva Team.\n- When `false`, the user and the group are in the same Canva Team.",
      }),
  })
  .openapi({
    description:
      "Metadata for the Canva Group, consisting of the Group ID,\ndisplay name, and whether it's an external Canva Group.",
    required: ['external', 'id'],
  })
  .openapi('Group')

const ApprovalRequestActionSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The message included by the user when requesting a design approval.',
        example: 'LGTM!',
      }),
  })
  .openapi({ description: 'Metadata about the design approval request.', required: [] })
  .openapi('ApprovalRequestAction')

const DesignApprovalRequestedNotificationContentSchema = z
  .object({
    type: z.literal('design_approval_requested').openapi({ example: 'design_approval_requested' }),
    triggering_user: UserSchema,
    initial_requesting_user: TeamUserSchema,
    receiving_team_user: TeamUserSchema,
    requested_groups: z.array(GroupSchema),
    design: DesignSummarySchema,
    approve_url: z
      .string()
      .openapi({
        description:
          'A URL, which is scoped only to the user requested to review the design, that links to\nthe design with the approval UI opened.',
        example: 'https://canva.com/api/action?token=HZb0lLHaEhNkT1qQrAwoe0-8SqyXUgJ4vnHGvN2rLZ0',
      }),
    approval_request: ApprovalRequestActionSchema,
  })
  .openapi({
    description:
      'The notification content for when someone requests a user to\n[approve a design](https://www.canva.com/help/get-approval/).',
    required: [
      'approval_request',
      'approve_url',
      'design',
      'initial_requesting_user',
      'receiving_team_user',
      'requested_groups',
      'triggering_user',
      'type',
    ],
  })
  .openapi('DesignApprovalRequestedNotificationContent')

const ApprovalResponseActionSchema = z
  .object({
    approved: z
      .boolean()
      .openapi({
        description:
          'Whether the design was approved. When `true`, the reviewer has approved\nthe design.',
      }),
    ready_to_publish: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the design is ready to publish. When `true`, the design has been approved\nby all reviewers and can be published.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The message included by a user responding to a design approval request.',
      }),
  })
  .openapi({ description: 'Metadata about the design approval response.', required: ['approved'] })
  .openapi('ApprovalResponseAction')

const DesignApprovalResponseNotificationContentSchema = z
  .object({
    type: z.literal('design_approval_response').openapi({ example: 'design_approval_response' }),
    triggering_user: UserSchema,
    receiving_team_user: TeamUserSchema,
    initial_requesting_user: TeamUserSchema,
    responding_groups: z.array(GroupSchema),
    design: DesignSummarySchema,
    approval_response: ApprovalResponseActionSchema,
  })
  .openapi({
    description: 'The notification content for when someone approves a design or gives feedback.',
    required: [
      'approval_response',
      'design',
      'initial_requesting_user',
      'receiving_team_user',
      'responding_groups',
      'triggering_user',
      'type',
    ],
  })
  .openapi('DesignApprovalResponseNotificationContent')

const TeamUserSummarySchema = z
  .object({
    user_id: z
      .string()
      .openapi({ description: 'The ID of the user.', example: 'auDAbliZ2rQNNOsUl5OLu' }),
    team_id: z
      .string()
      .openapi({
        description: "The ID of the user's Canva Team.",
        example: 'Oi2RJILTrKk0KRhRUZozX',
      }),
  })
  .openapi({
    description: 'Metadata for the user, consisting of the User ID and Team ID.',
    required: ['team_id', 'user_id'],
  })
  .openapi('TeamUserSummary')

const DesignApprovalReviewerInvalidatedNotificationContentSchema = z
  .object({
    type: z
      .literal('design_approval_reviewer_invalidated')
      .openapi({ example: 'design_approval_reviewer_invalidated' }),
    receiving_team_user: TeamUserSummarySchema,
    design: DesignSummarySchema,
  })
  .openapi({
    description: 'The notification content for when a reviewer in a design is invalidated.',
    required: ['design', 'receiving_team_user', 'type'],
  })
  .openapi('DesignApprovalReviewerInvalidatedNotificationContent')

const DesignMentionNotificationContentSchema = z
  .object({
    type: z.literal('design_mention').openapi({ example: 'design_mention' }),
    triggering_user: UserSchema,
    receiving_team_user: TeamUserSchema,
    design: DesignSummarySchema,
  })
  .openapi({
    description:
      'The notification content for when someone mentions a user in a design.\n\nThe link to the design in this notification is valid for 30 days, and can only be opened by\nthe recipient of the notification.',
    required: ['design', 'receiving_team_user', 'triggering_user', 'type'],
  })
  .openapi('DesignMentionNotificationContent')

const TeamSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The ID of the Canva Team.', example: 'Oi2RJILTrKk0KRhRUZozX' }),
    display_name: z
      .string()
      .openapi({
        description: 'The name of the Canva Team as shown in the Canva UI.',
        example: 'Acme Corporation',
      }),
    external: z
      .boolean()
      .openapi({
        description:
          "Is the user making the API call (the authenticated user) from the Canva Team shown?\n\n- When `true`, the user isn't in the Canva Team shown.\n- When `false`, the user is in the Canva Team shown.",
      }),
  })
  .openapi({
    description:
      "Metadata for the Canva Team, consisting of the Team ID,\ndisplay name, and whether it's an external Canva Team.",
    required: ['display_name', 'external', 'id'],
  })
  .openapi('Team')

const TeamInviteNotificationContentSchema = z
  .object({
    type: z.literal('team_invite').openapi({ example: 'team_invite' }),
    triggering_user: UserSchema,
    receiving_user: UserSchema,
    inviting_team: TeamSchema,
  })
  .openapi({
    description:
      'The notification content for when someone is invited to a\n[Canva team](https://www.canva.com/help/about-canva-for-teams/).',
    required: ['inviting_team', 'receiving_user', 'triggering_user', 'type'],
  })
  .openapi('TeamInviteNotificationContent')

const FolderAccessRequestedNotificationContentSchema = z
  .object({
    type: z.literal('folder_access_requested').openapi({ example: 'folder_access_requested' }),
    triggering_user: TeamUserSchema,
    receiving_team_user: TeamUserSchema,
    folder: FolderSummarySchema,
  })
  .openapi({
    description: 'The notification content for when someone requests access to a folder.',
    required: ['folder', 'receiving_team_user', 'triggering_user', 'type'],
  })
  .openapi('FolderAccessRequestedNotificationContent')

const SuggestionEventTypeSchema: z.ZodType<SuggestionEventTypeType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        NewSuggestionEventTypeSchema,
        AcceptedSuggestionEventTypeSchema,
        RejectedSuggestionEventTypeSchema,
        ReplySuggestionEventTypeSchema,
        MentionSuggestionEventTypeSchema,
      ])
      .openapi({
        description:
          'The type of suggestion event, along with additional type-specific properties.',
        discriminator: {
          mapping: {
            new: '#/components/schemas/NewSuggestionEventType',
            accepted: '#/components/schemas/AcceptedSuggestionEventType',
            rejected: '#/components/schemas/RejectedSuggestionEventType',
            reply: '#/components/schemas/ReplySuggestionEventType',
            mention: '#/components/schemas/MentionSuggestionEventType',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('SuggestionEventType')

const SuggestionNotificationContentSchema = z
  .object({
    type: z.literal('suggestion'),
    triggering_user: UserSchema,
    receiving_team_user: TeamUserSchema,
    design: DesignSummarySchema,
    suggestion_event_type: SuggestionEventTypeSchema,
  })
  .openapi({
    description:
      'The notification content when someone does one of the following actions:\n\n - Suggests edits to a design.\n - Applies or rejects a suggestion.\n - Replies to a suggestion.\n - Mentions a user in a reply to a suggestion.',
    required: ['design', 'receiving_team_user', 'suggestion_event_type', 'triggering_user', 'type'],
  })
  .openapi('SuggestionNotificationContent')

type NotificationContentType =
  | z.infer<typeof ShareDesignNotificationContentSchema>
  | z.infer<typeof ShareFolderNotificationContentSchema>
  | z.infer<typeof CommentNotificationContentSchema>
  | z.infer<typeof DesignAccessRequestedNotificationContentSchema>
  | z.infer<typeof DesignApprovalRequestedNotificationContentSchema>
  | z.infer<typeof DesignApprovalResponseNotificationContentSchema>
  | z.infer<typeof DesignApprovalReviewerInvalidatedNotificationContentSchema>
  | z.infer<typeof DesignMentionNotificationContentSchema>
  | z.infer<typeof TeamInviteNotificationContentSchema>
  | z.infer<typeof FolderAccessRequestedNotificationContentSchema>
  | z.infer<typeof SuggestionNotificationContentSchema>

const CreditQuotaUsageSummarySchema = z
  .object({
    used_percentage: z
      .int32()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          "The percentage of the caller's credit quota that has been consumed in the current\nbilling interval, from 0 to 100.",
      }),
    resets_at: z
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
          'Unix timestamp (seconds from the Unix epoch) of when the credit quota resets for\nthe caller.',
      }),
    using_bonus_credits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the caller is currently consuming bonus credits (credits beyond their base\nplan allocation).',
      }),
  })
  .openapi({
    description: "A summary of the caller's credit quota usage at the time of the request.",
    required: [],
  })
  .openapi('CreditQuotaUsageSummary')

const CreditQuotaSuccessInfoSchema = CreditQuotaUsageSummarySchema.and(
  z
    .object({
      usage_review_link: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A URL to the Canva credit usage dashboard where the caller can review their\ncurrent credit consumption. Not present if unavailable.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'Credit quota usage information returned on a successful generation request.',
  })
  .openapi('CreditQuotaSuccessInfo')

const CreditQuotaErrorInfoSchema = CreditQuotaUsageSummarySchema.and(
  z
    .object({
      upgrade_url: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "URL built from the user's current plan and eligibility for an AI pass. Not present\nif no upgrade path is available (e.g. already on highest plan or ineligible for AI pass).",
        }),
      cooldown_ends_at: z
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
            'Unix timestamp (seconds from the Unix epoch) of when the cooldown period ends. Only\nset when `code` is `credit_quota_cooldown`. Not present for `credit_quota_exceeded`\nerrors.',
        }),
      is_admin: z
        .boolean()
        .openapi({
          description:
            'Whether the caller is a team admin. Allows clients to tailor error messaging\n(e.g. "contact your admin" vs "upgrade your plan").',
        }),
      generation_pending: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'True if another generation is currently in flight and consuming quota. Only\nmeaningful for paid users with cooldown enabled. Not present for free users where this\ncannot be determined.',
        }),
    })
    .openapi({ required: ['is_admin'] }),
)
  .openapi({
    description:
      'Credit quota information returned when a request is rejected due to quota exhaustion\nor a cooldown period.',
  })
  .openapi('CreditQuotaErrorInfo')

const ErrorCodeSchema = z
  .enum([
    'internal_error',
    'invalid_field',
    'invalid_header_value',
    'permission_denied',
    'too_many_requests',
    'not_found',
    'bad_request_body',
    'bad_http_method',
    'bad_request_params',
    'bad_query_params',
    'user_role_required',
    'endpoint_not_found',
    'endpoint_gone',
    'unsupported_version',
    'invalid_access_token',
    'revoked_access_token',
    'missing_field',
    'missing_scope',
    'invalid_grant',
    'invalid_request',
    'invalid_client',
    'unauthorized_client',
    'unsupported_grant_type',
    'invalid_scope',
    'invalid_basic_header',
    'invalid_file_format',
    'quota_exceeded',
    'credit_quota_exceeded',
    'credit_quota_cooldown',
    'unsupported_content_type',
    'request_too_large',
    'folder_not_found',
    'item_in_multiple_folders',
    'asset_not_found',
    'unsupported_asset',
    'asset_not_ready',
    'max_limit_reached',
    'permission_not_found',
    'permission_exists',
    'unauthorized_user',
    'user_not_found',
    'user_not_eligible',
    'group_not_found',
    'app_not_found',
    'app_has_non_draft_versions',
    'invalid_status_transition',
    'translation_validation_failed',
    'content_not_found',
    'doctype_not_found',
    'design_not_found',
    'offset_too_large',
    'page_not_found',
    'design_or_comment_not_found',
    'design_or_thread_not_found',
    'review_dismissed',
    'design_type_not_found',
    'team_not_found',
    'team_is_default',
    'comment_not_found',
    'too_many_comments',
    'too_many_replies',
    'message_too_long',
    'thread_not_found',
    'reply_not_found',
    'design_not_fillable',
    'autofill_data_invalid',
    'feature_not_available',
    'unsupported_design_type',
    'design_generation_not_enabled',
    'design_generation_rejected',
    'license_required',
    'input_unsafe',
    'display_name_unavailable',
    'user_not_managed',
    'saml_team_id_conflict',
    'saml_name_id_not_available',
    'user_linked_to_another_idp',
    'user_email_unverified',
    'user_not_active',
    'user_pending_consent',
    'account_exists',
    'domain_restricted',
    'user_already_member',
  ])
  .openapi({
    description:
      'A short string indicating what failed. This field can be used to handle errors programmatically.\n',
  })
  .openapi('ErrorCode')

const ErrorSchema = z
  .object({
    code: ErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const CreditQuotaErrorSchema = ErrorSchema.and(
  z
    .object({
      quota_usage: CreditQuotaErrorInfoSchema.exactOptional().openapi({
        description:
          'Credit quota usage at the time of the error. Not present if quota data is unavailable.',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'Returned when a request is rejected because the caller has exceeded their credit quota\nor is in a cooldown period after heavy usage.',
  })
  .openapi('CreditQuotaError')

const GetDesignAnalyticsResponseSchema = z
  .object({
    average_view_duration_seconds: z
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
        description: 'The average view duration in seconds.',
        example: 42,
      }),
    total_view_duration_seconds: z
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
        description: 'The total view duration in seconds.',
        example: 5040,
      }),
    unique_view_count: z
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
        description: 'The number of unique viewers.',
        example: 87,
      }),
    total_view_count: z
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
        description: 'The total number of views.',
        example: 120,
      }),
  })
  .openapi({
    description: 'Aggregated analytics metrics for a design.',
    required: ['total_view_count', 'unique_view_count'],
  })
  .openapi('GetDesignAnalyticsResponse')

const DesignAnalyticsViewerTypeSchema = z
  .enum(['editor', 'commenter', 'viewer'])
  .openapi({
    description: 'How the viewer accessed the design.',
    'x-enum-descriptions': [
      'The viewer accessed the design with edit access.',
      'The viewer accessed the design with comment access.',
      'The viewer accessed the design with view-only access.',
    ],
  })
  .openapi('DesignAnalyticsViewerType')

const DesignAnalyticsViewerVisibilitySchema = z
  .enum(['shown', 'anonymous', 'opt_out', 'another_team', 'deleted'])
  .openapi({
    description: 'How this viewer should be presented to the caller.',
    'x-enum-descriptions': [
      "The viewer's identity is visible, and their user details are included.",
      'The viewer is anonymous, so their identity is not available.',
      'The viewer has opted out of design analytics, but some data was already collected for this viewer previosly.',
      'The viewer belongs to a different team, so their identity is not shared.',
      "The viewer's account has been deleted.",
    ],
  })
  .openapi('DesignAnalyticsViewerVisibility')

const DesignAnalyticsViewerFormFactorSchema = z
  .enum(['small', 'large'])
  .openapi({
    description: 'The device form factor used to view the design.',
    'x-enum-descriptions': [
      'A small device, such as a phone.',
      'A large device, such as a laptop, desktop, or large tablet.',
    ],
  })
  .openapi('DesignAnalyticsViewerFormFactor')

const ViewerSchema = z
  .object({
    viewer_id: z
      .string()
      .openapi({
        description:
          'An opaque identifier for the viewer. Use this value when filtering page view results by viewer.',
        example: 'b2d44753-f996-46ff-8f01-d4143911550f',
      }),
    user: TeamUserSchema.exactOptional().openapi({
      description:
        'The user details of the viewer. This is omitted for viewers whose identity is not visible.',
    }),
    last_viewed_at: z
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
        description:
          'When the viewer most recently opened the design, as a Unix timestamp (in seconds since the Unix Epoch).',
        example: 1748044800,
      }),
    viewer_type: DesignAnalyticsViewerTypeSchema,
    visibility: DesignAnalyticsViewerVisibilitySchema,
    total_view_duration_seconds: z
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
        description: 'The total time this viewer has spent viewing the design, in seconds.',
        example: 312,
      }),
    first_viewed_at: z
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
          'When the viewer first viewed the design, as a Unix timestamp (in seconds since the Unix Epoch).',
        example: 1745452800,
      }),
    pages_viewed: z
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
        description: 'The number of pages this viewer viewed for more than one second.',
        example: 8,
      }),
    form_factor: DesignAnalyticsViewerFormFactorSchema.exactOptional(),
    device_operating_system: z
      .string()
      .exactOptional()
      .openapi({
        description: "The simplified operating system name for the viewer's device.",
        example: 'macOS',
      }),
    city_country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The viewer location as city and country. This is only returned for anonymous viewers.',
        example: 'Sydney, Australia',
      }),
    total_view_count: z
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
        description: 'The number of times this viewer opened the design.',
        example: 14,
      }),
  })
  .openapi({
    description: 'A viewer and their engagement metrics for the design.',
    required: ['last_viewed_at', 'viewer_id', 'viewer_type', 'visibility'],
  })
  .openapi('Viewer')

const GetDesignAnalyticsViewersResponseSchema = z
  .object({
    items: z.array(ViewerSchema).openapi({ description: 'The list of viewers.' }),
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, there are more viewers you can list. You can use this token as a query parameter and retrieve more viewers from the list, for example `/v1/designs/{designId}/analytics/viewers?continuation={continuation}`.\n\nTo retrieve all viewers, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
  })
  .openapi({
    description: 'Successful response from a `getDesignAnalyticsViewers` request.',
    required: ['items'],
  })
  .openapi('GetDesignAnalyticsViewersResponse')

const ViewsAtTimeSchema = z
  .object({
    count: z
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
        description: 'The number of views in this bucket.',
        example: 15,
      }),
    bucket_start_at: z
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
        description:
          'When this time bucket starts, as a Unix timestamp (in seconds since the Unix Epoch).',
        example: 1745452800,
      }),
  })
  .openapi({
    description: 'A single time bucket of view counts.',
    required: ['bucket_start_at', 'count'],
  })
  .openapi('ViewsAtTime')

const GetDesignAnalyticsViewsOverTimeResponseSchema = z
  .object({
    items: z.array(ViewsAtTimeSchema).openapi({ description: 'The list of time buckets.' }),
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, there are more time buckets you can list. You can use this token as a query parameter and retrieve more time buckets from the list, for example `/v1/designs/{designId}/analytics/views-over-time?continuation={continuation}`.\n\nTo retrieve all time buckets, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
  })
  .openapi({
    description: 'Successful response from a `getDesignAnalyticsViewsOverTime` request.',
    required: ['items'],
  })
  .openapi('GetDesignAnalyticsViewsOverTimeResponse')

const PageViewFilterByViewerSchema = z
  .object({
    type: z.literal('by_viewer').openapi({ example: 'by_viewer' }),
    link_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filters to viewer traffic from a specific trackable link. Omit this field to target viewer traffic that did not come from a trackable link.',
        example: 'hddb98a3716',
      }),
    viewer_id: z
      .string()
      .openapi({
        description: 'The viewer ID to filter by.',
        example: 'b2d44753-f996-46ff-8f01-d4143911550f',
      }),
  })
  .openapi({ required: ['type', 'viewer_id'] })
  .openapi('PageViewFilterByViewer')

const PageViewFilterForEditorSchema = z
  .object({ type: z.literal('for_editor').openapi({ example: 'for_editor' }) })
  .openapi({ required: ['type'] })
  .openapi('PageViewFilterForEditor')

const PageViewFilterByLinkSchema = z
  .object({
    type: z.literal('by_link').openapi({ example: 'by_link' }),
    link_id: z
      .string()
      .openapi({ description: 'The trackable link ID to filter by.', example: 'hddb98a3716' }),
  })
  .openapi({ required: ['link_id', 'type'] })
  .openapi('PageViewFilterByLink')

const PageViewFilterSchema = z
  .discriminatedUnion('type', [
    PageViewFilterByViewerSchema,
    PageViewFilterForEditorSchema,
    PageViewFilterByLinkSchema,
  ])
  .openapi({
    description: 'A filter for page view data.',
    discriminator: {
      mapping: {
        by_viewer: '#/components/schemas/PageViewFilterByViewer',
        for_editor: '#/components/schemas/PageViewFilterForEditor',
        by_link: '#/components/schemas/PageViewFilterByLink',
      },
      propertyName: 'type',
    },
  })
  .openapi('PageViewFilter')

const GetDesignAnalyticsPageViewsRequestSchema = z
  .object({
    page_ids: z
      .array(z.string().openapi({ example: 'PBBKfZml7MRHRQVw' }))
      .min(1)
      .max(100)
      .openapi({
        description: 'The design page IDs to retrieve view duration data for.',
        example: ['PBBKfZml7MRHRQVw', 'PBBKfZml7Mghjsdg'],
      }),
    limit: z
      .int32()
      .min(1)
      .max(100)
      .default(50)
      .exactOptional()
      .openapi({
        description: 'The maximum number of page results to return per page.',
        example: 50,
      }),
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, there are more page results you can list. You can use this token in the request body and retrieve more page results from the list.\n\nTo retrieve all page results, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
    filter: PageViewFilterSchema.exactOptional(),
  })
  .openapi({
    description: 'Filters and pagination controls for page-level analytics.',
    required: ['page_ids'],
  })
  .openapi('GetDesignAnalyticsPageViewsRequest')

const PageViewDurationSchema = z
  .object({
    page_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The page ID. This is omitted for design types that do not support page IDs.',
        example: 'PBBKfZml7MRHRQVw',
      }),
    total_view_duration_seconds: z
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
        description: 'The total time spent viewing this page, in seconds.',
        example: 1860,
      }),
    average_duration_seconds: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The average time spent viewing this page, in seconds. This is omitted for `by_viewer` filters.',
        example: 21.5,
      }),
    unique_view_count: z
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
          'The number of unique viewers for this page. This is omitted for `by_viewer` filters.',
        example: 87,
      }),
  })
  .openapi({
    description: 'View duration metrics for a single page.',
    required: ['total_view_duration_seconds'],
  })
  .openapi('PageViewDuration')

const GetDesignAnalyticsPageViewsResponseSchema = z
  .object({
    items: z
      .array(PageViewDurationSchema)
      .openapi({ description: 'The list of page view durations.' }),
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, there are more page results you can list. You can use this token in the request body and retrieve more page results from the list.\n\nTo retrieve all page results, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
  })
  .openapi({
    description: 'Successful response from a `getDesignAnalyticsPageViews` request.',
    required: ['items'],
  })
  .openapi('GetDesignAnalyticsPageViewsResponse')

const TrackableLinkSchema = z
  .object({
    link_id: z
      .string()
      .openapi({ description: 'The ID of the trackable link.', example: 'hddb98a3716' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user-visible name of the trackable link.',
        example: 'Newsletter link',
      }),
    total_view_count: z
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
        description: 'The total number of views for this link.',
        example: 64,
      }),
    unique_view_count: z
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
        description: 'The number of unique viewers for this link.',
        example: 41,
      }),
    total_view_duration_seconds: z
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
        description: 'The total time this link has been viewed, in seconds.',
        example: 2580,
      }),
    average_view_duration_seconds: z
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
        description: 'The average time this link has been viewed, in seconds.',
        example: 40,
      }),
    last_viewed_at: z
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
          'When this link was most recently viewed, as a Unix timestamp (in seconds since the Unix Epoch).',
        example: 1748044800,
      }),
  })
  .openapi({ description: 'Metrics for a trackable link.', required: ['link_id'] })
  .openapi('TrackableLink')

const GetDesignAnalyticsLinksResponseSchema = z
  .object({
    items: z.array(TrackableLinkSchema).openapi({ description: 'The list of trackable links.' }),
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, there are more links you can list. You can use this token as a query parameter and retrieve more links from the list, for example `/v1/designs/{designId}/analytics/links?continuation={continuation}`.\n\nTo retrieve all links, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
  })
  .openapi({
    description: 'Successful response from a `getDesignAnalyticsLinks` request.',
    required: ['items'],
  })
  .openapi('GetDesignAnalyticsLinksResponse')

const JsonWebKeySchema = z
  .object({
    alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The "alg" (algorithm) parameter identifies the algorithm intended for\nuse with the key.\nSee https://www.rfc-editor.org/rfc/rfc7517#section-4',
      }),
    kid: z
      .string()
      .openapi({
        description:
          'The "kid" (key ID) parameter is used to match a specific key.  This\nis used, for instance, to choose among a set of keys within a JWK Set\nduring key rollover. When "kid" values are used within a JWK Set,\ndifferent keys within the JWK Set SHOULD use distinct "kid" values.\nThe "kid" value is a case-sensitive string.\nSee https://www.rfc-editor.org/rfc/rfc7517#section-4',
      }),
    kty: z
      .string()
      .openapi({
        description:
          'The "kty" (key type) parameter identifies the cryptographic algorithm\nfamily used with the key, such as "RSA" or "EC". The "kty" value is a\ncase-sensitive string. At the moment, only "RSA" is supported.\nSee https://www.rfc-editor.org/rfc/rfc7517#section-4',
      }),
    n: z
      .string()
      .openapi({
        description:
          'The "n" (modulus) parameter contains the modulus value for the RSA\n   public key.  It is represented as a Base64urlUInt-encoded value.\nSee https://www.rfc-editor.org/rfc/rfc7518.html#section-6.3',
      }),
    e: z
      .string()
      .openapi({
        description:
          'The "e" (exponent) parameter contains the exponent value for the RSA\n   public key.  It is represented as a Base64urlUInt-encoded value.\nSee https://www.rfc-editor.org/rfc/rfc7518.html#section-6.3',
      }),
    use: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The "use" (public key use) parameter identifies the intended use of\nthe public key. The "use" parameter is employed to indicate whether\na public key is used for encrypting data or verifying the signature\non data. Values are commonly "sig" (signature) or "enc" (encryption).\nSee https://www.rfc-editor.org/rfc/rfc7517#section-4',
      }),
  })
  .openapi({
    description:
      'Standard Json Web Key specification following https://www.rfc-editor.org/rfc/rfc7517 and\nhttps://www.rfc-editor.org/rfc/rfc7518.html.',
    required: ['e', 'kid', 'kty', 'n'],
  })
  .openapi('JsonWebKey')

const GetAppJwksResponseSchema = z
  .object({
    keys: z
      .array(JsonWebKeySchema)
      .openapi({
        description:
          'The value of the "keys" parameter is an array of JWK values. The order of keys has no\nmeaning.',
      }),
  })
  .openapi({ required: ['keys'] })
  .openapi('GetAppJwksResponse')

const CreateUrlAssetUploadJobRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'A name for the asset.', example: 'My Awesome Asset' }),
    url: z
      .string()
      .min(8)
      .max(2048)
      .openapi({
        description:
          'The URL of the file to import. This URL must be accessible from the internet and be publicly available.',
        example: 'https://example.com/my_asset_to_upload.jpg',
      }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('CreateUrlAssetUploadJobRequest')

const AssetUploadStatusSchema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({ description: 'Status of the asset upload job.', example: 'success' })
  .openapi('AssetUploadStatus')

const AssetUploadErrorCodeSchema = z
  .enum(['file_too_big', 'import_failed', 'fetch_failed'])
  .openapi({
    description:
      'A short string indicating why the upload failed. This field can be used to handle errors\nprogrammatically.',
    example: 'file_too_big',
  })
  .openapi('AssetUploadErrorCode')

const AssetUploadErrorSchema = z
  .object({
    code: AssetUploadErrorCodeSchema,
    message: z
      .string()
      .openapi({
        description: 'A human-readable description of what went wrong.',
        example: 'Failed to import because the file is too big.',
      }),
  })
  .openapi({
    description: 'If the upload fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('AssetUploadError')

const AssetTypeSchema = z
  .enum(['image', 'video'])
  .openapi({ description: 'Type of an asset.', example: 'image' })
  .openapi('AssetType')

const ImportStatusStateSchema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({
    deprecated: true,
    description: 'State of the import job for an uploaded asset.',
    example: 'success',
  })
  .openapi('ImportStatusState')

const ImportErrorCodeSchema = z
  .enum(['file_too_big', 'import_failed'])
  .openapi({
    deprecated: true,
    description:
      'A short string indicating why the upload failed. This field can be used to handle errors programmatically.\n',
  })
  .openapi('ImportErrorCode')

const ImportErrorSchema = z
  .object({
    code: ImportErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    deprecated: true,
    description: 'If the import fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('ImportError')

const ImportStatusSchema = z
  .object({ state: ImportStatusStateSchema, error: ImportErrorSchema.exactOptional() })
  .openapi({
    deprecated: true,
    description: 'The import status of the asset.',
    required: ['state'],
  })
  .openapi('ImportStatus')

const ImageMetadataSchema = z
  .object({
    type: z.literal('image'),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The width of the image in pixels.', example: 1920 }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the image in pixels.', example: 1080 }),
    smart_tags: z
      .array(z.string().max(50))
      .exactOptional()
      .openapi({
        description: 'AI-generated tags for the image.',
        example: ['landscape', 'sunset', 'mountains', 'nature'],
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('ImageMetadata')

const VideoMetadataSchema = z
  .object({
    type: z.literal('video'),
    width: z.int32().openapi({ description: 'The width of the video in pixels.', example: 1920 }),
    height: z.int32().openapi({ description: 'The height of the video in pixels.', example: 1080 }),
    duration: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The duration of the video in seconds.', example: 60 }),
  })
  .openapi({ required: ['height', 'type', 'width'] })
  .openapi('VideoMetadata')

const AssetMetadataSchema = z
  .discriminatedUnion('type', [ImageMetadataSchema, VideoMetadataSchema])
  .openapi({
    description: 'Type-specific metadata for the asset.',
    discriminator: {
      mapping: {
        image: '#/components/schemas/ImageMetadata',
        video: '#/components/schemas/VideoMetadata',
      },
      propertyName: 'type',
    },
  })
  .openapi('AssetMetadata')

const AssetSchema = z
  .object({
    type: AssetTypeSchema,
    id: z.string().openapi({ description: 'The ID of the asset.', example: 'Msd59349ff' }),
    name: z
      .string()
      .openapi({ description: 'The name of the asset.', example: 'My Awesome Upload' }),
    tags: z
      .array(z.string())
      .openapi({
        description:
          'The user-facing tags attached to the asset.\nUsers can add these tags to their uploaded assets, and they can search their uploaded\nassets in the Canva UI by searching for these tags. For information on how users use\ntags, see the\n[Canva Help Center page on asset tags](https://www.canva.com/help/add-edit-tags/).',
        example: ['image', 'holiday', 'best day ever'],
      }),
    import_status: ImportStatusSchema.exactOptional(),
    created_at: z
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
        description:
          'When the asset was added to Canva, as a Unix timestamp (in seconds since the Unix\nEpoch).',
        example: 1377396000,
      }),
    updated_at: z
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
        description:
          'When the asset was last updated in Canva, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1692928800,
      }),
    owner: TeamUserSummarySchema,
    thumbnail: ThumbnailSchema.exactOptional(),
    metadata: AssetMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'The asset object, which contains metadata about the asset.',
    required: ['created_at', 'id', 'name', 'owner', 'tags', 'type', 'updated_at'],
  })
  .openapi('Asset')

const AssetUploadJobSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The ID of the asset upload job.',
        example: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      }),
    status: AssetUploadStatusSchema,
    error: AssetUploadErrorSchema.exactOptional(),
    asset: AssetSchema.exactOptional(),
  })
  .openapi({
    description: 'The status of the asset upload job.',
    example: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'success',
      asset: {
        id: 'Msd59349ff',
        type: 'image',
        name: 'My Awesome Upload',
        tags: ['image', 'holiday', 'best day ever'],
        owner: { user_id: 'oU123456AbCdE', team_id: 'oB123456AbCdE' },
        created_at: 1377396000,
        updated_at: 1692928800,
        thumbnail: {
          width: 595,
          height: 335,
          url: 'https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>',
        },
      },
    },
    required: ['id', 'status'],
  })
  .openapi('AssetUploadJob')

const CreateUrlAssetUploadJobResponseSchema = z
  .object({ job: AssetUploadJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateUrlAssetUploadJobResponse')

const GetUrlAssetUploadJobResponseSchema = z
  .object({ job: AssetUploadJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetUrlAssetUploadJobResponse')

const GetAssetResponseSchema = z
  .object({ asset: AssetSchema })
  .openapi({ required: ['asset'] })
  .openapi('GetAssetResponse')

const UpdateAssetRequestSchema = z
  .object({
    name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The name of the asset. This is shown in the Canva UI.\nWhen this field is undefined or empty, nothing is updated.',
        example: 'My Awesome Upload',
      }),
    tags: z
      .array(z.string().max(50))
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The replacement tags for the asset.\nWhen this field is undefined, nothing is updated.',
        example: ['image', 'holiday', 'best day ever'],
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssetRequest')

const UpdateAssetResponseSchema = z
  .object({ asset: AssetSchema })
  .openapi({ required: ['asset'] })
  .openapi('UpdateAssetResponse')

const AssetSummarySchema = z
  .object({
    type: AssetTypeSchema,
    id: z.string().openapi({ description: 'The ID of the asset.', example: 'Msd59349ff' }),
    name: z
      .string()
      .openapi({ description: 'The name of the asset.', example: 'My Awesome Upload' }),
    tags: z
      .array(z.string())
      .openapi({
        description:
          'The user-facing tags attached to the asset.\nUsers can add these tags to their uploaded assets, and they can search their uploaded\nassets in the Canva UI by searching for these tags. For information on how users use\ntags, see the\n[Canva Help Center page on asset tags](https://www.canva.com/help/add-edit-tags/).',
        example: ['image', 'holiday', 'best day ever'],
      }),
    created_at: z
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
        description:
          'When the asset was added to Canva, as a Unix timestamp (in seconds since the Unix\nEpoch).',
        example: 1377396000,
      }),
    updated_at: z
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
        description:
          'When the asset was last updated in Canva, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1692928800,
      }),
    thumbnail: ThumbnailSchema.exactOptional(),
  })
  .openapi({
    description: 'An object representing an asset with associated metadata.',
    required: ['created_at', 'id', 'name', 'tags', 'type', 'updated_at'],
  })
  .openapi('AssetSummary')

const CreateAssetUploadJobResponseSchema = z
  .object({ job: AssetUploadJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateAssetUploadJobResponse')

const GetAssetUploadJobResponseSchema = z
  .object({ job: AssetUploadJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetAssetUploadJobResponse')

const AssetUploadMetadataSchema = z
  .object({
    name_base64: z
      .string()
      .min(1)
      .openapi({
        description:
          'The asset\'s name, encoded in Base64.\n\nThe maximum length of an asset name in Canva (unencoded) is 50 characters.\n\nBase64 encoding allows names containing emojis and other special\ncharacters to be sent using HTTP headers.\nFor example, "My Awesome Upload 🚀" Base64 encoded\nis `TXkgQXdlc29tZSBVcGxvYWQg8J+agA==`.',
        example: 'TXkgQXdlc29tZSBVcGxvYWQg8J+agA==',
      }),
  })
  .openapi({ description: 'Metadata for the asset being uploaded.', required: ['name_base64'] })
  .openapi('AssetUploadMetadata')

const DatasetImageValueSchema = z
  .object({
    type: z.literal('image'),
    asset_id: z
      .string()
      .openapi({
        description: '`asset_id` of the image to insert into the template element.',
        example: 'Msd59349ff',
      }),
  })
  .openapi({ description: 'If the data field is an image field.', required: ['asset_id', 'type'] })
  .openapi('DatasetImageValue')

const DatasetVideoValueSchema = z
  .object({
    type: z.literal('video'),
    asset_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description: '`asset_id` of the video to insert into the template element.',
        example: 'VAHCkrNUANI',
      }),
  })
  .openapi({
    description: 'If autofilling a video into an image data field.',
    required: ['asset_id', 'type'],
  })
  .openapi('DatasetVideoValue')

const DatasetTextValueSchema = z
  .object({
    type: z.literal('text'),
    text: z
      .string()
      .openapi({
        description: 'Text to insert into the template element.',
        example: 'It was like this when I got here!',
      }),
  })
  .openapi({ description: 'If the data field is a text field.', required: ['text', 'type'] })
  .openapi('DatasetTextValue')

const ColumnDataTypeSchema = z
  .enum(['string', 'number', 'date', 'boolean', 'media', 'variant'])
  .openapi({
    description: 'Expected data type for cells in this column.',
    'x-enum-descriptions': [
      'String data',
      'Numeric data',
      'Date data',
      'Boolean data',
      'Media data (such as images, videos, or combinations of both)',
      'Mixed data types (use where the column contains cells of a combination of data types)',
    ],
  })
  .openapi('ColumnDataType')

const ColumnConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name for the column, displayed as header text.' }),
    type: ColumnDataTypeSchema,
  })
  .openapi({ description: 'Configuration for a data table column.', required: ['type'] })
  .openapi('ColumnConfig')

const DataTableCellSchema: z.ZodType<DataTableCellType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        StringDataTableCellSchema,
        NumberDataTableCellSchema,
        BooleanDataTableCellSchema,
        DateDataTableCellSchema,
        MediaCollectionDataTableCellSchema,
      ])
      .openapi({
        description: 'A single tabular data cell.',
        discriminator: {
          mapping: {
            string: '#/components/schemas/StringDataTableCell',
            number: '#/components/schemas/NumberDataTableCell',
            boolean: '#/components/schemas/BooleanDataTableCell',
            date: '#/components/schemas/DateDataTableCell',
            media: '#/components/schemas/MediaCollectionDataTableCell',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('DataTableCell')

const DataTableRowSchema = z
  .object({
    cells: z
      .array(DataTableCellSchema)
      .openapi({
        description: 'Cells of data in row.\n\nAll rows must have the same number of cells.',
      }),
  })
  .openapi({ description: 'A single row of tabular data.', required: ['cells'] })
  .openapi('DataTableRow')

const DataTableSchema = z
  .object({
    column_configs: z
      .array(ColumnConfigSchema)
      .exactOptional()
      .openapi({ description: 'Column definitions with names and data types.' }),
    rows: z.array(DataTableRowSchema).openapi({ description: 'Rows of data.' }),
  })
  .openapi({
    description:
      'Tabular data, structured in rows of cells.\n\n- Each cell must have a data type configured.\n- All rows must have the same number of cells.\n- The number of entries in `column_configs` must match the number of columns in the data.',
    example: {
      column_configs: [
        { name: 'Geographic Region', type: 'string' },
        { name: 'Sales (millions AUD)', type: 'number' },
        { name: 'Target (millions AUD)', type: 'number' },
        { name: 'Target met?', type: 'boolean' },
        { name: 'Date met', type: 'date' },
        { name: 'Logo', type: 'media' },
      ],
      rows: [
        {
          cells: [
            { type: 'string', value: 'Asia Pacific' },
            { type: 'number', value: 10.2, metadata: { formatting: '#,##0.0' } },
            { type: 'number', value: 10, metadata: { formatting: '#,##0.0' } },
            { type: 'boolean', value: true },
            { type: 'date', value: 1721944387 },
            {
              type: 'media',
              value: [
                {
                  type: 'image_upload',
                  url: 'https://example.com/apac-logo.png',
                  thumbnail_url: 'https://example.com/apac-logo-thumb.png',
                  mime_type: 'image/png',
                  ai_disclosure: 'none',
                },
                {
                  type: 'video_upload',
                  url: 'https://example.com/apac-logo.mp4',
                  thumbnail_image_url: 'https://example.com/apac-logo-thumb.png',
                  thumbnail_video_url: 'https://example.com/apac-logo-thumb.mp4',
                  mime_type: 'video/mp4',
                  ai_disclosure: 'none',
                },
              ],
            },
          ],
        },
        {
          cells: [
            { type: 'string', value: 'EMEA' },
            { type: 'number', value: 13.8, metadata: { formatting: '#,##0.0' } },
            { type: 'number', value: 14, metadata: { formatting: '#,##0.0' } },
            { type: 'boolean', value: false },
            { type: 'date' },
            { type: 'media', value: [] },
          ],
        },
      ],
    },
    required: ['rows'],
  })
  .openapi('DataTable')

const DatasetChartValueSchema = z
  .object({ type: z.literal('chart'), chart_data: DataTableSchema })
  .openapi({
    description:
      'If the data field is a chart.\n\nNote the following behavior:\n- If `column_configs` is not provided, the first row is assumed to contain column headers where applicable.\n- Chart autofill supports a maximum of 100 rows and 20 columns.\n- `number` cells with formatting metadata are not currently supported for autofill and will result in an error response.\n- `media` cells are not supported for chart autofill and will result in an error response.',
    required: ['chart_data', 'type'],
  })
  .openapi('DatasetChartValue')

const DatasetSheetValueSchema = z
  .object({ type: z.literal('sheet'), sheet_data: DataTableSchema })
  .openapi({
    description:
      'If the data field is a sheet element.\n\nNote the following behavior:\n- `number` cells with formatting metadata are not currently supported for autofill and will result in an error response.\n- `media` cells are not supported for sheet autofill and will result in an error response.',
    required: ['sheet_data', 'type'],
  })
  .openapi('DatasetSheetValue')

const DatasetValueSchema = z
  .discriminatedUnion('type', [
    DatasetImageValueSchema,
    DatasetVideoValueSchema,
    DatasetTextValueSchema,
    DatasetChartValueSchema,
    DatasetSheetValueSchema,
  ])
  .openapi({
    description: 'The data field to autofill.',
    discriminator: {
      mapping: {
        image: '#/components/schemas/DatasetImageValue',
        video: '#/components/schemas/DatasetVideoValue',
        text: '#/components/schemas/DatasetTextValue',
        chart: '#/components/schemas/DatasetChartValue',
        sheet: '#/components/schemas/DatasetSheetValue',
      },
      propertyName: 'type',
    },
  })
  .openapi('DatasetValue')

const CreateFromBrandTemplateAutofillJobRequestSchema = z
  .object({
    type: z
      .literal('create_from_brand_template')
      .openapi({
        description:
          "For backward compatibility, if `type` isn't specified in the request, the request type is assumed to be `create_from_brand_template`.",
      }),
    brand_template_id: z
      .string()
      .openapi({ description: 'ID of the input brand template.', example: 'DAFVztcvd9z' }),
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Title to use for the autofilled design.\n\nIf no design title is provided, the autofilled design will have the same title as the brand template.',
        example: 'My autofilled design',
      }),
    data: z.record(z.string(), DatasetValueSchema).openapi({
      description: 'Data object containing the data fields and values to autofill.',
      example: {
        cute_pet_image_of_the_day: { type: 'image', asset_id: 'Msd59349ff' },
        cute_pet_video_of_the_day: { type: 'video', asset_id: 'VAHCkrNUANI' },
        cute_pet_witty_pet_says: { type: 'text', text: 'It was like this when I got here!' },
        cute_pet_sales_chart: {
          type: 'chart',
          chart_data: {
            column_configs: [
              { name: 'Geographic Region', type: 'string' },
              { name: 'Sales (millions AUD)', type: 'number' },
              { name: 'Target (millions AUD)', type: 'number' },
              { name: 'Target met?', type: 'boolean' },
              { name: 'Date met', type: 'date' },
            ],
            rows: [
              {
                cells: [
                  { type: 'string', value: 'Asia Pacific' },
                  { type: 'number', value: 10.2 },
                  { type: 'number', value: 10 },
                  { type: 'boolean', value: true },
                  { type: 'date', value: 1721944387 },
                ],
              },
              {
                cells: [
                  { type: 'string', value: 'EMEA' },
                  { type: 'number', value: 13.8 },
                  { type: 'number', value: 14 },
                  { type: 'boolean', value: false },
                  { type: 'date' },
                ],
              },
            ],
          },
        },
        cute_pet_sales_sheet: {
          type: 'sheet',
          sheet_data: {
            column_configs: [
              { name: 'Geographic Region', type: 'string' },
              { name: 'Sales (millions AUD)', type: 'number' },
              { name: 'Target (millions AUD)', type: 'number' },
              { name: 'Target met?', type: 'boolean' },
              { name: 'Date met', type: 'date' },
            ],
            rows: [
              {
                cells: [
                  { type: 'string', value: 'Asia Pacific' },
                  { type: 'number', value: 10.2 },
                  { type: 'number', value: 10 },
                  { type: 'boolean', value: true },
                  { type: 'date', value: 1721944387 },
                ],
              },
              {
                cells: [
                  { type: 'string', value: 'EMEA' },
                  { type: 'number', value: 13.8 },
                  { type: 'number', value: 14 },
                  { type: 'boolean', value: false },
                  { type: 'date' },
                ],
              },
            ],
          },
        },
      },
    }),
  })
  .openapi({
    description: 'Create a new autofilled design from a brand template.',
    required: ['brand_template_id', 'data', 'type'],
  })
  .openapi('CreateFromBrandTemplateAutofillJobRequest')

const CreateFromDesignAutofillJobRequestSchema = z
  .object({
    type: z.literal('create_from_design'),
    design_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description: 'ID of the design to use as the autofill source.',
        example: 'DAFVztcvd9z',
      }),
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Title to use for the autofilled design.\n\nIf no design title is provided, the autofilled design will have the same title as the source design.',
        example: 'My autofilled design',
      }),
    data: z.record(z.string(), DatasetValueSchema).openapi({
      description: 'Data object containing the data fields and values to autofill.',
      example: {
        cute_pet_image_of_the_day: { type: 'image', asset_id: 'Msd59349ff' },
        cute_pet_video_of_the_day: { type: 'video', asset_id: 'VAHCkrNUANI' },
        cute_pet_witty_pet_says: { type: 'text', text: 'It was like this when I got here!' },
        cute_pet_sales_chart: {
          type: 'chart',
          chart_data: {
            column_configs: [
              { name: 'Geographic Region', type: 'string' },
              { name: 'Sales (millions AUD)', type: 'number' },
              { name: 'Target (millions AUD)', type: 'number' },
              { name: 'Target met?', type: 'boolean' },
              { name: 'Date met', type: 'date' },
            ],
            rows: [
              {
                cells: [
                  { type: 'string', value: 'Asia Pacific' },
                  { type: 'number', value: 10.2 },
                  { type: 'number', value: 10 },
                  { type: 'boolean', value: true },
                  { type: 'date', value: 1721944387 },
                ],
              },
              {
                cells: [
                  { type: 'string', value: 'EMEA' },
                  { type: 'number', value: 13.8 },
                  { type: 'number', value: 14 },
                  { type: 'boolean', value: false },
                  { type: 'date' },
                ],
              },
            ],
          },
        },
        cute_pet_sales_sheet: {
          type: 'sheet',
          sheet_data: {
            column_configs: [
              { name: 'Geographic Region', type: 'string' },
              { name: 'Sales (millions AUD)', type: 'number' },
              { name: 'Target (millions AUD)', type: 'number' },
              { name: 'Target met?', type: 'boolean' },
              { name: 'Date met', type: 'date' },
            ],
            rows: [
              {
                cells: [
                  { type: 'string', value: 'Asia Pacific' },
                  { type: 'number', value: 10.2 },
                  { type: 'number', value: 10 },
                  { type: 'boolean', value: true },
                  { type: 'date', value: 1721944387 },
                ],
              },
              {
                cells: [
                  { type: 'string', value: 'EMEA' },
                  { type: 'number', value: 13.8 },
                  { type: 'number', value: 14 },
                  { type: 'boolean', value: false },
                  { type: 'date' },
                ],
              },
            ],
          },
        },
      },
    }),
  })
  .openapi({
    description:
      'Create a new autofilled design from an existing design that contains autofill data fields.',
    required: ['data', 'design_id', 'type'],
  })
  .openapi('CreateFromDesignAutofillJobRequest')

const UpdateDesignAutofillJobRequestSchema = z
  .object({
    type: z.literal('update_design'),
    design_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'ID of the design to autofill in place.', example: 'DAFVztcvd9z' }),
    data: z.record(z.string(), DatasetValueSchema).openapi({
      description: 'Data object containing the data fields and values to autofill.',
      example: {
        cute_pet_image_of_the_day: { type: 'image', asset_id: 'Msd59349ff' },
        cute_pet_video_of_the_day: { type: 'video', asset_id: 'VAHCkrNUANI' },
        cute_pet_witty_pet_says: { type: 'text', text: 'It was like this when I got here!' },
        cute_pet_sales_chart: {
          type: 'chart',
          chart_data: {
            column_configs: [
              { name: 'Geographic Region', type: 'string' },
              { name: 'Sales (millions AUD)', type: 'number' },
              { name: 'Target (millions AUD)', type: 'number' },
              { name: 'Target met?', type: 'boolean' },
              { name: 'Date met', type: 'date' },
            ],
            rows: [
              {
                cells: [
                  { type: 'string', value: 'Asia Pacific' },
                  { type: 'number', value: 10.2 },
                  { type: 'number', value: 10 },
                  { type: 'boolean', value: true },
                  { type: 'date', value: 1721944387 },
                ],
              },
              {
                cells: [
                  { type: 'string', value: 'EMEA' },
                  { type: 'number', value: 13.8 },
                  { type: 'number', value: 14 },
                  { type: 'boolean', value: false },
                  { type: 'date' },
                ],
              },
            ],
          },
        },
        cute_pet_sales_sheet: {
          type: 'sheet',
          sheet_data: {
            column_configs: [
              { name: 'Geographic Region', type: 'string' },
              { name: 'Sales (millions AUD)', type: 'number' },
              { name: 'Target (millions AUD)', type: 'number' },
              { name: 'Target met?', type: 'boolean' },
              { name: 'Date met', type: 'date' },
            ],
            rows: [
              {
                cells: [
                  { type: 'string', value: 'Asia Pacific' },
                  { type: 'number', value: 10.2 },
                  { type: 'number', value: 10 },
                  { type: 'boolean', value: true },
                  { type: 'date', value: 1721944387 },
                ],
              },
              {
                cells: [
                  { type: 'string', value: 'EMEA' },
                  { type: 'number', value: 13.8 },
                  { type: 'number', value: 14 },
                  { type: 'boolean', value: false },
                  { type: 'date' },
                ],
              },
            ],
          },
        },
      },
    }),
  })
  .openapi({
    description: 'Autofill an existing design in place with the provided data.',
    required: ['data', 'design_id', 'type'],
  })
  .openapi('UpdateDesignAutofillJobRequest')

const CreateDesignAutofillJobRequestSchema = z
  .discriminatedUnion('type', [
    CreateFromBrandTemplateAutofillJobRequestSchema,
    CreateFromDesignAutofillJobRequestSchema,
    UpdateDesignAutofillJobRequestSchema,
  ])
  .openapi({
    description:
      "Body parameters for creating a new autofill job. Use the `type` discriminator to choose\nthe autofill mode:\n\n- Use `create_from_brand_template` to create a new design from a brand template.\n\nNOTE: For backward compatibility, if `type` isn't specified in the request,\nthe request type is assumed to be `create_from_brand_template`.",
    discriminator: {
      mapping: {
        create_from_brand_template:
          '#/components/schemas/CreateFromBrandTemplateAutofillJobRequest',
        create_from_design: '#/components/schemas/CreateFromDesignAutofillJobRequest',
        update_design: '#/components/schemas/UpdateDesignAutofillJobRequest',
      },
      propertyName: 'type',
    },
  })
  .openapi('CreateDesignAutofillJobRequest')

const DesignAutofillStatusSchema = z
  .enum(['in_progress', 'success', 'failed'])
  .openapi({ description: 'Status of the design autofill job.', example: 'success' })
  .openapi('DesignAutofillStatus')

const DesignAutofillJobResultSchema: z.ZodType<DesignAutofillJobResultType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        CreateDesignAutofillJobResultSchema,
        UpdateDesignAutofillJobResultSchema,
      ])
      .openapi({
        description: 'Result of the design autofill job. Only present if job status is `success`.',
        discriminator: {
          mapping: {
            create_design: '#/components/schemas/CreateDesignAutofillJobResult',
            update_design: '#/components/schemas/UpdateDesignAutofillJobResult',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('DesignAutofillJobResult')

const AutofillErrorCodeSchema = z
  .enum([
    'autofill_error',
    'thumbnail_generation_error',
    'create_design_error',
    'design_approval_error',
    'trial_quota_exceeded',
    'design_update_error',
  ])
  .openapi({
    'x-enum-descriptions': [
      'The service encountered an error when autofilling your brand template.',
      'The service encountered an error when generating a thumbnail for the autofilled design.',
      'The service encountered an error when saving the autofilled design.',
      'The service encountered an error when applying design approval settings to the autofilled design.',
      'The user has exceeded their autofill trial quota.',
      'The service encountered an error when saving the updated design.',
    ],
  })
  .openapi('AutofillErrorCode')

const AutofillErrorSchema = z
  .object({
    code: AutofillErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    description: 'If the autofill job fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('AutofillError')

const DesignAutofillJobSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'ID of the asynchronous job that is creating the design using the provided data.',
        example: '450a76e7-f96f-43ae-9c37-0e1ce492ac72',
      }),
    status: DesignAutofillStatusSchema,
    result: DesignAutofillJobResultSchema.exactOptional(),
    error: AutofillErrorSchema.exactOptional(),
  })
  .openapi({ description: 'Details about the autofill job.', required: ['id', 'status'] })
  .openapi('DesignAutofillJob')

const CreateDesignAutofillJobResponseSchema = z
  .object({ job: DesignAutofillJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateDesignAutofillJobResponse')

const DatasetSchema = z
  .record(z.string(), DatasetValueSchema)
  .openapi({
    description: 'Data object containing the data fields and values to autofill.',
    example: {
      cute_pet_image_of_the_day: { type: 'image', asset_id: 'Msd59349ff' },
      cute_pet_video_of_the_day: { type: 'video', asset_id: 'VAHCkrNUANI' },
      cute_pet_witty_pet_says: { type: 'text', text: 'It was like this when I got here!' },
      cute_pet_sales_chart: {
        type: 'chart',
        chart_data: {
          column_configs: [
            { name: 'Geographic Region', type: 'string' },
            { name: 'Sales (millions AUD)', type: 'number' },
            { name: 'Target (millions AUD)', type: 'number' },
            { name: 'Target met?', type: 'boolean' },
            { name: 'Date met', type: 'date' },
          ],
          rows: [
            {
              cells: [
                { type: 'string', value: 'Asia Pacific' },
                { type: 'number', value: 10.2 },
                { type: 'number', value: 10 },
                { type: 'boolean', value: true },
                { type: 'date', value: 1721944387 },
              ],
            },
            {
              cells: [
                { type: 'string', value: 'EMEA' },
                { type: 'number', value: 13.8 },
                { type: 'number', value: 14 },
                { type: 'boolean', value: false },
                { type: 'date' },
              ],
            },
          ],
        },
      },
      cute_pet_sales_sheet: {
        type: 'sheet',
        sheet_data: {
          column_configs: [
            { name: 'Geographic Region', type: 'string' },
            { name: 'Sales (millions AUD)', type: 'number' },
            { name: 'Target (millions AUD)', type: 'number' },
            { name: 'Target met?', type: 'boolean' },
            { name: 'Date met', type: 'date' },
          ],
          rows: [
            {
              cells: [
                { type: 'string', value: 'Asia Pacific' },
                { type: 'number', value: 10.2 },
                { type: 'number', value: 10 },
                { type: 'boolean', value: true },
                { type: 'date', value: 1721944387 },
              ],
            },
            {
              cells: [
                { type: 'string', value: 'EMEA' },
                { type: 'number', value: 13.8 },
                { type: 'number', value: 14 },
                { type: 'boolean', value: false },
                { type: 'date' },
              ],
            },
          ],
        },
      },
    },
  })
  .openapi('Dataset')

const GetDesignAutofillJobResponseSchema = z
  .object({ job: DesignAutofillJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetDesignAutofillJobResponse')

const DatasetFilterSchema = z
  .enum(['any', 'non_empty'])
  .default('any')
  .openapi({
    'x-enum-descriptions': [
      'Brand templates with and without dataset definitions.',
      'Brand templates with one or more data fields defined.',
    ],
  })
  .openapi('DatasetFilter')

const BrandTemplateSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The brand template ID.', example: 'DEMzWSwy3BI' }),
    title: z
      .string()
      .openapi({
        description: 'The brand template title, as shown in the Canva UI.',
        example: 'Advertisement Template',
      }),
    view_url: z
      .string()
      .openapi({
        description: 'A URL Canva users can visit to view the brand template.',
        example: 'https://www.canva.com/design/DAE35hE8FA4/view',
      }),
    create_url: z
      .string()
      .openapi({
        description: 'A URL Canva users can visit to create a new design from the template.',
        example: 'https://www.canva.com/design/DAE35hE8FA4/remix',
      }),
    thumbnail: ThumbnailSchema.exactOptional(),
    created_at: z
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
        description:
          'When the brand template was created, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1704110400,
      }),
    updated_at: z
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
        description:
          'When the brand template was last updated, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1719835200,
      }),
  })
  .openapi({
    description: 'An object representing a brand template with associated metadata.',
    required: ['create_url', 'created_at', 'id', 'title', 'updated_at', 'view_url'],
  })
  .openapi('BrandTemplate')

const ListBrandTemplatesResponseSchema = z
  .object({
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, the user has access to more\nbrand templates you can list. You can use this token as a query parameter and retrieve\nmore templates from the list, for example\n`/v1/brand-templates?continuation={continuation}`.\nTo retrieve all the brand templates available to the user, you might need to make\nmultiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
    items: z.array(BrandTemplateSchema).openapi({ description: 'The list of brand templates.' }),
  })
  .openapi({ required: ['items'] })
  .openapi('ListBrandTemplatesResponse')

const GetBrandTemplateResponseSchema = z
  .object({ brand_template: BrandTemplateSchema })
  .openapi({
    description: 'Successful response from a `getBrandTemplate` request.',
    required: ['brand_template'],
  })
  .openapi('GetBrandTemplateResponse')

const BrandTemplateSummarySchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The brand template ID.', example: 'DEMzWSwy3BI' }),
    title: z
      .string()
      .openapi({
        description: 'The brand template title, as shown in the Canva UI.',
        example: 'Advertisement Template',
      }),
    view_url: z
      .string()
      .openapi({
        description: 'A URL Canva users can visit to view the brand template.',
        example: 'https://www.canva.com/design/DAE35hE8FA4/view',
      }),
    create_url: z
      .string()
      .openapi({
        description: 'A URL Canva users can visit to create a new design from the template.',
        example: 'https://www.canva.com/design/DAE35hE8FA4/remix',
      }),
    thumbnail: ThumbnailSchema.exactOptional(),
    created_at: z
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
        description:
          'When the brand template was created, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1704110400,
      }),
    updated_at: z
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
        description:
          'When the brand template was last updated, as a Unix timestamp\n(in seconds since the Unix Epoch).',
        example: 1719835200,
      }),
  })
  .openapi({
    description: 'An object representing a brand template with associated metadata.',
    required: ['create_url', 'created_at', 'id', 'title', 'updated_at', 'view_url'],
  })
  .openapi('BrandTemplateSummary')

const DataFieldSchema: z.ZodType<DataFieldType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        ImageDataFieldSchema,
        TextDataFieldSchema,
        ChartDataFieldSchema,
        SheetDataFieldSchema,
      ])
      .openapi({
        description: 'A named data field that can be autofilled.',
        discriminator: {
          mapping: {
            image: '#/components/schemas/ImageDataField',
            text: '#/components/schemas/TextDataField',
            chart: '#/components/schemas/ChartDataField',
            sheet: '#/components/schemas/SheetDataField',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('DataField')

const GetBrandTemplateDatasetResponseSchema = z
  .object({
    dataset: z
      .record(z.string(), DataFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'The dataset definition. It contains the data inputs available for use with the\n[Create design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).',
        example: {
          cute_pet_image_of_the_day: { type: 'image' },
          cute_pet_witty_pet_says: { type: 'text' },
          cute_pet_sales_chart: { type: 'chart' },
        },
      }),
  })
  .openapi({
    description: 'Successful response from a `getBrandTemplateDataset` request.',
    required: [],
  })
  .openapi('GetBrandTemplateDatasetResponse')

const PublishBrandTemplateRequestSchema = z
  .object({
    design_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description:
          'The ID of the design to publish as a brand template. If this design is a draft of an existing brand template, that template will be updated. Otherwise, a new brand template is created.',
        example: 'DABCdesign123',
      }),
  })
  .openapi({
    description: 'Request body for publishing a design as a brand template',
    required: ['design_id'],
  })
  .openapi('PublishBrandTemplateRequest')

const PublishBrandTemplateResponseSchema = z
  .object({ brand_template: BrandTemplateSchema })
  .openapi({
    description:
      'Response from a successful publishBrandTemplate request. Contains the published brand template with all its metadata. Note that the `thumbnail` field might be `null` initially as thumbnails are generated asynchronously.',
    required: ['brand_template'],
  })
  .openapi('PublishBrandTemplateResponse')

const CapabilitySchema = z
  .enum([
    'analytics',
    'autofill',
    'background_removal',
    'brand_template',
    'design_generation',
    'export_png_transparency',
    'image_generation',
    'image_to_design_imports',
    'resize',
    'team_restricted_app',
  ])
  .openapi({
    description:
      'Some APIs are annotated with required capabilities. These endpoints require the user to\npossess the required capabilities in order to be called successfully.',
    'x-enum-descriptions': [
      'Capability required to call the Design analytics APIs. Users that are members of a [Canva Enterprise](https://www.canva.com/enterprise/) organization have this capability.',
      'Capability required to call autofill APIs. Users on a Canva plan with access to autofill (such as Canva Pro, Canva Teams, or Canva Enterprise) have this capability.',
      'Capability required to apply the `background_removal` transformation using the Image transformation APIs. Users on a Canva plan with premium features (such as Canva Pro) have this capability.',
      'Capability required to use brand template APIs. Users on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise) have this capability.',
      'Capability required to call the Design Generation APIs. Users whose feature eligibility and [team permission settings](https://www.canva.com/en_au/help/setting-up-team-permissions/) allow both "Canva AI" and "[Magic Design](https://www.canva.com/magic-design/)" have this capability.',
      'Capability required to export designs in PNG with a transparent background. Users on a paid Canva plan (such as Canva Pro) have this capability.',
      'Capability required to call the Image Generation APIs. Users whose feature eligibility and [team permission settings](https://www.canva.com/en_au/help/setting-up-team-permissions/) allow both "Canva AI" and "Magic Media" have this capability.',
      'Capability required to call the Image to Design Import APIs. Users whose [team permission settings](https://www.canva.com/en_au/help/setting-up-team-permissions/) allow both "Canva AI" and "[Magic Layers](https://www.canva.com/magic-layers/)" have this capability.',
      'Capability required to create design resize jobs. Users on a Canva plan with premium features (such as Canva Pro) have this capability.',
      'Capability required to create a team-restricted app. Users that are members of the [Canva Enterprise](https://www.canva.com/enterprise/) or the [Canva for Education](https://www.canva.com/education/) organization have this capability.',
    ],
  })
  .openapi('Capability')

const CommentObjectInputSchema: z.ZodType<CommentObjectInputType> = z
  .lazy(() =>
    z
      .xor([DesignCommentObjectInputSchema])
      .openapi({
        description:
          'An object containing identifying information for the design or other object you want to\nattach the comment to.',
        discriminator: {
          mapping: { design: '#/components/schemas/DesignCommentObjectInput' },
          propertyName: 'type',
        },
        example: { design_id: 'DAFVztcvd9z', type: 'design' },
      }),
  )
  .openapi('CommentObjectInput')

const CreateCommentRequestSchema = z
  .object({
    attached_to: CommentObjectInputSchema,
    message: z
      .string()
      .min(1)
      .max(2048)
      .openapi({
        description:
          'The comment message. This is the comment body shown in the Canva UI.\n\nYou can also mention users in your message by specifying their User ID and Team ID\nusing the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you\nmust mention the assignee in the message.',
        example: 'Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!',
      }),
    assignee_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Lets you assign the comment to a Canva user using their User ID. You _must_ mention the\nassigned user in the `message`.',
        example: 'oUnPjZ2k2yuhftbWF7873o',
      }),
  })
  .openapi({ required: ['attached_to', 'message'] })
  .openapi('CreateCommentRequest')

const CreateReplyV2RequestSchema = z
  .object({
    message_plaintext: z
      .string()
      .min(1)
      .max(2048)
      .openapi({
        description:
          'The comment message of the reply in plaintext. This is the reply comment shown in the Canva UI.\n\nYou can also mention users in your message by specifying their User ID and Team ID\nusing the format `[user_id:team_id]`.',
        example: 'Thanks!',
      }),
  })
  .openapi({ required: ['message_plaintext'] })
  .openapi('CreateReplyV2Request')

const CreateCommentResponseSchema = z
  .object({ comment: ParentCommentSchema })
  .openapi({ required: ['comment'] })
  .openapi('CreateCommentResponse')

const CreateThreadResponseSchema = z
  .object({ thread: ThreadSchema })
  .openapi({ required: ['thread'] })
  .openapi('CreateThreadResponse')

const CreateThreadRequestSchema = z
  .object({
    message_plaintext: z
      .string()
      .min(1)
      .max(2048)
      .openapi({
        description:
          'The comment message in plaintext. This is the comment body shown in the Canva UI.\n\nYou can also mention users in your message by specifying their User ID and Team ID\nusing the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you\nmust mention the assignee in the message.',
        example: 'Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!',
      }),
    assignee_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Lets you assign the comment to a Canva user using their User ID. You _must_ mention the\nassigned user in the `message`.',
        example: 'oUnPjZ2k2yuhftbWF7873o',
      }),
  })
  .openapi({ required: ['message_plaintext'] })
  .openapi('CreateThreadRequest')

const CreateReplyV2ResponseSchema = z
  .object({ reply: ReplySchema })
  .openapi({ required: ['reply'] })
  .openapi('CreateReplyV2Response')

const GetThreadResponseSchema = z
  .object({ comment: CommentSchema.exactOptional(), thread: ThreadSchema.exactOptional() })
  .openapi({
    description:
      'Successful response from a `getThread` request.\n\nThe `comment` property is deprecated.\nFor details of a comment thread, please use the `thread` property.',
    required: [],
  })
  .openapi('GetThreadResponse')

const GetReplyResponseSchema = z
  .object({ reply: ReplySchema })
  .openapi({ description: 'Successful response from a `getReply` request.', required: ['reply'] })
  .openapi('GetReplyResponse')

const MentionsSchema = z
  .record(z.string(), TeamUserSchema)
  .openapi({
    deprecated: true,
    description: 'The Canva users mentioned in the comment.',
    example: {
      'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP': {
        user_id: 'oUnPjZ2k2yuhftbWF7873o',
        team_id: 'oBpVhLW22VrqtwKgaayRbP',
        display_name: 'John Doe',
      },
    },
  })
  .openapi('Mentions')

const ListRepliesResponseSchema = z
  .object({
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, the list contains more items\nyou can list. You can use this token as a query parameter and retrieve more items\nfrom the list, for example `?continuation={continuation}`.\n\nTo retrieve all items, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
    items: z.array(ReplySchema),
  })
  .openapi({
    description: 'Successful response from a `listReplies` request.',
    required: ['items'],
  })
  .openapi('ListRepliesResponse')

const UserMentionsSchema = z
  .record(z.string(), UserMentionSchema)
  .openapi({
    description: 'The Canva users mentioned in the comment thread or reply.',
    example: {
      'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP': {
        tag: 'oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP',
        user: {
          user_id: 'oUnPjZ2k2yuhftbWF7873o',
          team_id: 'oBpVhLW22VrqtwKgaayRbP',
          display_name: 'John Doe',
        },
      },
    },
  })
  .openapi('UserMentions')

const EdDsaJwkSchema = z
  .object({
    kid: z
      .string()
      .openapi({
        description:
          'The `kid` (key ID) is a unique identifier for a public key. When the keys used\nto sign webhooks are rotated, you can use this ID to select the correct key\nwithin a JWK Set during the key rollover. The `kid` value is case-sensitive.',
      }),
    kty: z
      .string()
      .openapi({
        description:
          'The `kty` (key type) identifies the cryptographic algorithm family used with\nthe key, such as "RSA" or "EC". Only Octet Key Pairs\n(`OKPs`) are supported.\nThe `kty` value is case-sensitive. For more information on the `kty` property\nand OKPs, see [RFC-8037 — "kty" (Key Type)\nParameter](https://www.rfc-editor.org/rfc/rfc8037.html#section-2).',
      }),
    crv: z
      .string()
      .openapi({
        description:
          'The `crv` (curve) property identifies the curve used for elliptical curve\nencryptions. Only "Ed25519" is supported. For more information on the `crv`\nproperty, see [RFC-8037 — Key Type\n"OKP"](https://www.rfc-editor.org/rfc/rfc8037.html#section-2).',
      }),
    x: z
      .string()
      .openapi({
        description:
          'The `x` property is the public key of an elliptical curve encryption. The key\nis Base64urlUInt-encoded. For more information on the `x` property, see\n[RFC-8037 — "x" (X Coordinate)\nParameter](https://www.rfc-editor.org/rfc/rfc8037#section-2).',
      }),
  })
  .openapi({
    description:
      'A JSON Web Key Set (JWKS) using the Edwards-curve Digital Signature Algorithm (EdDSA), as\ndescribed in [RFC-8037](https://www.rfc-editor.org/rfc/rfc8037.html#appendix-A).',
    required: ['crv', 'kid', 'kty', 'x'],
  })
  .openapi('EdDsaJwk')

const GetSigningPublicKeysResponseSchema = z
  .object({
    keys: z.array(EdDsaJwkSchema).openapi({
      description:
        'A Json Web Key Set (JWKS) with public keys used for signing webhooks. You can use this JWKS\nto verify that a webhook was sent from Canva.',
      example: [
        {
          kid: 'a418dc7d-ecc5-5c4b-85ce-e1104a8addbe',
          kty: 'OKP',
          crv: 'Ed25519',
          x: 'aIQtqd0nDfB-ug0DrzZbwTum-1ITdXvKxGFak_1VB2j',
        },
        {
          kid: 'c8de5bec1-1b88-4ddaae04acc-ce415-5d7',
          kty: 'OKP',
          crv: 'Ed25519',
          x: 'm2d1FT-gfBXxIzKwdQVTra0D-aBq_ubZ1jI0GuvkDtn',
        },
      ],
    }),
  })
  .openapi({ required: ['keys'] })
  .openapi('GetSigningPublicKeysResponse')

const SortByTypeSchema = z
  .enum([
    'relevance',
    'modified_descending',
    'modified_ascending',
    'title_descending',
    'title_ascending',
  ])
  .default('relevance')
  .openapi({
    'x-enum-descriptions': [
      'Sort results using a relevance algorithm.',
      'Sort results by the date last modified in descending order.',
      'Sort results by the date last modified in ascending order.',
      'Sort results by title in descending order.',
      'Sort results by title in ascending order',
    ],
  })
  .openapi('SortByType')

const OwnershipTypeSchema = z
  .enum(['any', 'owned', 'shared'])
  .default('any')
  .openapi({
    'x-enum-descriptions': [
      'Owned by and shared with the user.',
      'Owned by the user.',
      'Shared with the user.',
    ],
  })
  .openapi('OwnershipType')

const DesignTypeOutputNameSchema = z
  .enum(['doc', 'email', 'presentation', 'sheet', 'whiteboard', 'custom', 'unknown'])
  .openapi({
    description:
      "The type of content a design or page contains. The list of design types may grow over time. The `unknown` value represents design types that haven't been added to the list.",
    example: 'presentation',
  })
  .openapi('DesignTypeOutputName')

const DesignSchema = z
  .object({
    id: z.string().openapi({ description: 'The design ID.', example: 'DAFVztcvd9z' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design title.', example: 'My summer holiday' }),
    owner: TeamUserSummarySchema,
    thumbnail: ThumbnailSchema.exactOptional(),
    urls: DesignLinksSchema,
    created_at: z
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
        description:
          'When the design was created in Canva, as a Unix timestamp (in seconds since the Unix\nEpoch).',
        example: 1377396000,
      }),
    updated_at: z
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
        description:
          'When the design was last updated in Canva, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1692928800,
      }),
    page_count: z
      .int32()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          "The total number of pages in the design. Some design types don't have pages (for example, Canva docs).",
        example: 5,
      }),
    design_types: z
      .array(DesignTypeOutputNameSchema)
      .openapi({
        description:
          "The type of content a design or page contains. The list of design types may grow over time. The `unknown` value represents design types that haven't been added to the list.",
        example: ['presentation'],
      }),
  })
  .openapi({
    description: 'The design object, which contains metadata about the design.',
    required: ['created_at', 'design_types', 'id', 'owner', 'updated_at', 'urls'],
  })
  .openapi('Design')

const GetListDesignResponseSchema = z
  .object({
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A continuation token.\nIf the success response contains a continuation token, the list contains more designs\nyou can list. You can use this token as a query parameter and retrieve more\ndesigns from the list, for example\n`/v1/designs?continuation={continuation}`.\n\nTo retrieve all of a user's designs, you might need to make multiple requests.",
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
    items: z.array(DesignSchema).openapi({ description: 'The list of designs.' }),
  })
  .openapi({ required: ['items'] })
  .openapi('GetListDesignResponse')

const CreateDesignRequestSchema: z.ZodType<CreateDesignRequestType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        DesignTypeCreateDesignRequestSchema,
        DesignCreateDesignRequestSchema,
        BrandTemplateCreateDesignRequestSchema,
      ])
      .openapi({
        description:
          "Body parameters for creating a new design. Use the `type` discriminator to choose the creation mode:\n\n- Use `type_and_asset` to create a design by specifying the design type and/or an asset.\n- Use `design` to create a copy of an existing design (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).\n- Use `brand_template` to create a design from a brand template (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).\n\nNOTE: For backward compatibility, if `type` isn't specified in the request,\nthe request type will be assumed to be `type_and_asset`.",
        discriminator: {
          mapping: {
            type_and_asset: '#/components/schemas/DesignTypeCreateDesignRequest',
            design: '#/components/schemas/DesignCreateDesignRequest',
            brand_template: '#/components/schemas/BrandTemplateCreateDesignRequest',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('CreateDesignRequest')

const CreateDesignResponseSchema = z
  .object({ design: DesignSchema })
  .openapi({ description: 'Details about the new design.', required: ['design'] })
  .openapi('CreateDesignResponse')

const PrintPartnerDesignDimensionsUnitsSchema = z
  .enum(['in', 'cm', 'mm'])
  .openapi({ description: 'The units of the dimensions.' })
  .openapi('PrintPartnerDesignDimensionsUnits')

const PrintPartnerDesignDimensionsSchema = z
  .object({
    width: z.float64().min(1).openapi({ description: 'The width of the design.', example: 595 }),
    height: z.float64().min(1).openapi({ description: 'The height of the design.', example: 1295 }),
    units: PrintPartnerDesignDimensionsUnitsSchema,
  })
  .openapi({
    description:
      'Dimensions of the design. Used to match a product type, or to create a custom-size design if\nno product matches.',
    required: ['height', 'units', 'width'],
  })
  .openapi('PrintPartnerDesignDimensions')

const PrintPartnerDimensionsDesignSourceSchema = z
  .object({
    type: z.literal('dimensions'),
    dimensions: PrintPartnerDesignDimensionsSchema,
    product_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The product type is used alongside your dimensions to find a matching product in Canva Print's product catalogue, and templates for that product are recommended. If no match is found, only dimensions are used, so templates may include unrelated product types.",
        example: 'tshirt',
      }),
  })
  .openapi({
    description:
      'Creates a design that matches your dimensions. Add a product type for more precise template matches.',
    required: ['dimensions', 'type'],
  })
  .openapi('PrintPartnerDimensionsDesignSource')

const PrintPartnerProductIdDesignSourceSchema = z
  .object({
    type: z.literal('partner_product_id'),
    partner_product_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The ID of the partner-defined product.', example: 'CVAFDC1091' }),
  })
  .openapi({
    description: 'Creates a design using an external partner product ID.',
    required: ['partner_product_id', 'type'],
  })
  .openapi('PrintPartnerProductIdDesignSource')

const PrintPartnerDesignSourceSchema = z
  .discriminatedUnion('type', [
    PrintPartnerDimensionsDesignSourceSchema,
    PrintPartnerProductIdDesignSourceSchema,
  ])
  .openapi({
    description: 'The desired source for the design creation.',
    discriminator: {
      mapping: {
        dimensions: '#/components/schemas/PrintPartnerDimensionsDesignSource',
        partner_product_id: '#/components/schemas/PrintPartnerProductIdDesignSource',
      },
      propertyName: 'type',
    },
  })
  .openapi('PrintPartnerDesignSource')

const CreatePrintPartnerDesignRequestSchema = z
  .object({
    design_source: PrintPartnerDesignSourceSchema,
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The name of the design.', example: 'My Holiday Presentation' }),
    bleed: z
      .int32()
      .min(0)
      .max(150000)
      .default(3000)
      .exactOptional()
      .openapi({
        description:
          'Bleed in microns to apply around the design in the editor. Bleed is the area\noutside the trim line used to avoid white edges after cutting. Use 0 for no bleed. If bleed is not\nspecified, a default of 3000 microns is used.',
      }),
    min_pages: z
      .int32()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Minimum number of pages the design must have in the editor. The user cannot\nreduce the page count below this value. If both min_pages and max_pages are\nprovided, min_pages must be less than or equal to max_pages.',
      }),
    max_pages: z
      .int32()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of pages the design can have in the editor. The user cannot\nadd pages beyond this value. If both min_pages and max_pages are provided,\nmin_pages must be less than or equal to max_pages.',
      }),
  })
  .openapi({
    description: 'Body parameters for creating a new design for a Print Partner.',
    required: ['design_source'],
  })
  .openapi('CreatePrintPartnerDesignRequest')

const CreatePrintPartnerDesignResponseSchema = z
  .object({ design: DesignSchema })
  .openapi({ description: 'Details about the new design.', required: ['design'] })
  .openapi('CreatePrintPartnerDesignResponse')

const GetDesignResponseSchema = z
  .object({ design: DesignSchema })
  .openapi({ description: 'Successful response from a `getDesign` request.', required: ['design'] })
  .openapi('GetDesignResponse')

const GetPrintPartnerDesignResponseSchema = z
  .object({ design: DesignSchema })
  .openapi({
    description: 'Successful response from a `getPrintPartnerDesign` request.',
    required: ['design'],
  })
  .openapi('GetPrintPartnerDesignResponse')

const PageDimensionsSchema = z
  .object({
    width: z
      .float64()
      .openapi({ description: 'The width of the design page in pixels.', example: 595 }),
    height: z
      .float64()
      .openapi({ description: 'The height of the design page in pixels.', example: 1295 }),
  })
  .openapi({
    description:
      'The dimensions of a design page, if it is bounded. Design pages for non-bounded designs like Whiteboards and Docs will not include this property.',
    required: ['height', 'width'],
  })
  .openapi('PageDimensions')

const DesignPageSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the page. This ID is unique within the design and can be used to\ncorrelate a page with per-page data from other APIs.\n\nSome designs might not have page IDs, in which case this property is omitted.',
        example: 'PB2NFQ9W78kLDFCK',
      }),
    index: z
      .int32()
      .min(1)
      .max(500)
      .openapi({
        deprecated: true,
        description:
          'WARNING: This property is deprecated. Use `page_number` instead, which returns an identical value.\n\nThe index of the page in the design. The first page in a design has the index value `1`.',
      }),
    page_number: z
      .int32()
      .min(1)
      .max(500)
      .openapi({
        description:
          'The 1-based page number within the design. The first page in a design has the value `1`.',
        example: 1,
      }),
    dimensions: PageDimensionsSchema.exactOptional(),
    thumbnail: ThumbnailSchema.exactOptional(),
    design_type: DesignTypeOutputNameSchema,
  })
  .openapi({
    description: 'Basic details about a page in a design, such as the page number and thumbnail.',
    required: ['design_type', 'index', 'page_number'],
  })
  .openapi('DesignPage')

const GetDesignPagesResponseSchema = z
  .object({ items: z.array(DesignPageSchema).openapi({ description: 'The list of pages.' }) })
  .openapi({
    description: 'Successful response from a `getDesignPages` request.',
    required: ['items'],
  })
  .openapi('GetDesignPagesResponse')

const PdfExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as a PDF.', required: [] })
  .openapi('PdfExportFormatOption')

const JpgExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as a JPEG.', required: [] })
  .openapi('JpgExportFormatOption')

const PngExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as a PNG.', required: [] })
  .openapi('PngExportFormatOption')

const SvgExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as an SVG.', required: [] })
  .openapi('SvgExportFormatOption')

const PptxExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as a PPTX.', required: [] })
  .openapi('PptxExportFormatOption')

const GifExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as a GIF.', required: [] })
  .openapi('GifExportFormatOption')

const Mp4ExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as an MP4.', required: [] })
  .openapi('Mp4ExportFormatOption')

const HtmlBundleExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as an HTML bundle.', required: [] })
  .openapi('HtmlBundleExportFormatOption')

const HtmlStandaloneExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({
    description: 'Whether the design can be exported as an standalone HTML file.',
    required: [],
  })
  .openapi('HtmlStandaloneExportFormatOption')

const CsvExportFormatOptionSchema = z
  .object({
    page_numbers: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          'The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.',
        example: [1, 2, 3],
      }),
  })
  .openapi({ description: 'Whether the design can be exported as a CSV file.', required: [] })
  .openapi('CsvExportFormatOption')

const ExportFormatOptionsSchema = z
  .object({
    pdf: PdfExportFormatOptionSchema.exactOptional(),
    jpg: JpgExportFormatOptionSchema.exactOptional(),
    png: PngExportFormatOptionSchema.exactOptional(),
    svg: SvgExportFormatOptionSchema.exactOptional(),
    pptx: PptxExportFormatOptionSchema.exactOptional(),
    gif: GifExportFormatOptionSchema.exactOptional(),
    mp4: Mp4ExportFormatOptionSchema.exactOptional(),
    html_bundle: HtmlBundleExportFormatOptionSchema.exactOptional(),
    html_standalone: HtmlStandaloneExportFormatOptionSchema.exactOptional(),
    csv: CsvExportFormatOptionSchema.exactOptional(),
  })
  .openapi({ description: 'The available file formats for exporting the design.', required: [] })
  .openapi('ExportFormatOptions')

const GetDesignExportFormatsResponseSchema = z
  .object({ formats: ExportFormatOptionsSchema })
  .openapi({
    description: 'Successful response from a `getDesignExportFormats` request.',
    required: ['formats'],
  })
  .openapi('GetDesignExportFormatsResponse')

const PageNumberSchema = z
  .int32()
  .min(1)
  .max(500)
  .openapi({
    description:
      'The 1-based page number within the design. The first page in a design has the value `1`.',
    example: 1,
  })
  .openapi('PageNumber')

const GetDesignDatasetResponseSchema = z
  .object({
    dataset: z
      .record(z.string(), DataFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'The dataset definition. It contains the data inputs available for use with the\n[Create design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).',
        example: {
          cute_pet_image_of_the_day: { type: 'image' },
          cute_pet_witty_pet_says: { type: 'text' },
          cute_pet_sales_chart: { type: 'chart' },
        },
      }),
  })
  .openapi({ description: 'Successful response from a `getDesignDataset` request.', required: [] })
  .openapi('GetDesignDatasetResponse')

const DatasetDefinitionSchema = z
  .record(z.string(), DataFieldSchema)
  .openapi({
    description:
      'The dataset definition. It contains the data inputs available for use with the\n[Create design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).',
    example: {
      cute_pet_image_of_the_day: { type: 'image' },
      cute_pet_witty_pet_says: { type: 'text' },
      cute_pet_sales_chart: { type: 'chart' },
    },
  })
  .openapi('DatasetDefinition')

const DesignGenerationDesignTypeV2Schema = z
  .literal('preset')
  .openapi({
    description: 'The kind of design type to generate.',
    'x-enum-descriptions': ['A preset Canva design type.'],
  })
  .openapi('DesignGenerationDesignTypeV2')

const DesignGenerationDesignTypeNameV2Schema = z
  .enum(['doc', 'presentation'])
  .openapi({
    description: 'The name of the design type to generate.',
    'x-enum-descriptions': [
      "A [Canva doc](https://www.canva.com/docs/); a document for Canva's online text editor.",
      'A [presentation](https://www.canva.com/presentations/); lets you create and collaborate for presenting to an audience.',
    ],
  })
  .openapi('DesignGenerationDesignTypeNameV2')

const DesignGenerationDesignTypeInputV2Schema = z
  .object({
    type: DesignGenerationDesignTypeV2Schema,
    name: DesignGenerationDesignTypeNameV2Schema,
  })
  .openapi({ description: 'The preset Canva design type to generate.', required: ['name', 'type'] })
  .openapi('DesignGenerationDesignTypeInputV2')

const DesignGenerationOutlineSectionV2Schema = z
  .object({
    title: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'The slide title.', example: 'The problem' }),
    description: z
      .string()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'A short description of what the slide should cover.',
        example: 'Rooftop solar installations still take more than six weeks to quote.',
      }),
    points: z
      .array(z.string().min(1).max(1000))
      .max(50)
      .exactOptional()
      .openapi({ description: 'Optional individual points the slide should make.' }),
  })
  .openapi({ description: 'One slide in a presentation outline.', required: ['title'] })
  .openapi('DesignGenerationOutlineSectionV2')

const DesignGenerationOutlineV2Schema = z
  .object({ sections: z.array(DesignGenerationOutlineSectionV2Schema).min(1).max(100) })
  .openapi({
    description: 'The ordered slide structure for a generated presentation.',
    required: ['sections'],
  })
  .openapi('DesignGenerationOutlineV2')

const CreateDesignGenerationJobRequestV2Schema = z
  .object({
    brief: z
      .string()
      .min(1)
      .max(5000)
      .openapi({
        description:
          'A description of the design to generate, including its subject, purpose,\nrequired wording, tone, and visual direction.',
        example:
          'A 3-slide pitch deck for a solar-panel startup with an energetic, modern, blue-and-white visual direction.',
      }),
    design_type: DesignGenerationDesignTypeInputV2Schema.openapi({
      description: 'The preset Canva design type to generate. Supports `doc` and `presentation`.',
    }),
    outline: DesignGenerationOutlineV2Schema.exactOptional().openapi({
      description:
        'The slide structure to follow. This property is supported only when\n`design_type.name` is `presentation`.',
    }),
  })
  .openapi({
    description: 'The brief, design type, and optional presentation outline for generation.',
    required: ['brief', 'design_type'],
  })
  .openapi('CreateDesignGenerationJobRequestV2')

const DesignGenerationJobStatusV2Schema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({
    description:
      'The public status of the job. `result` is present only for `success`, and\n`error` is present only for `failed`.',
    'x-enum-descriptions': [
      "The design couldn't be generated.",
      'The design is still being generated.',
      "The design was generated and saved to the user's Canva account.",
    ],
  })
  .openapi('DesignGenerationJobStatusV2')

const DesignGenerationJobResultV2Schema = z
  .object({ design: DesignSummarySchema })
  .openapi({ description: 'Present only when the job status is `success`.', required: ['design'] })
  .openapi('DesignGenerationJobResultV2')

const DesignGenerationJobErrorCodeV2Schema = z
  .enum(['content_not_allowed', 'generation_failed'])
  .openapi({
    description: 'The reason the design generation job failed.',
    'x-enum-descriptions': [
      "The brief or generated content didn't pass Canva's content-safety checks.",
      "Canva couldn't complete the design generation job.",
    ],
  })
  .openapi('DesignGenerationJobErrorCodeV2')

const DesignGenerationJobErrorV2Schema = z
  .object({
    code: DesignGenerationJobErrorCodeV2Schema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    description: 'Details about a failed design generation job.',
    required: ['code', 'message'],
  })
  .openapi('DesignGenerationJobErrorV2')

const DesignGenerationJobV2Schema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description: 'The public design generation job ID.',
        example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      }),
    status: DesignGenerationJobStatusV2Schema,
    result: DesignGenerationJobResultV2Schema.exactOptional(),
    error: DesignGenerationJobErrorV2Schema.exactOptional(),
  })
  .openapi({
    description: 'The status and result of a public design generation job.',
    required: ['id', 'status'],
  })
  .openapi('DesignGenerationJobV2')

const CreateDesignGenerationJobResponseV2Schema = z
  .object({
    job: DesignGenerationJobV2Schema,
    quota_usage: CreditQuotaSuccessInfoSchema.exactOptional().openapi({
      description:
        'Credit quota usage after reserving credits for this job. Omitted if unavailable.',
    }),
  })
  .openapi({ required: ['job'] })
  .openapi('CreateDesignGenerationJobResponseV2')

const GetDesignGenerationJobResponseV2Schema = z
  .object({
    job: DesignGenerationJobV2Schema,
    quota_usage: CreditQuotaSuccessInfoSchema.exactOptional().openapi({
      description:
        'Credit quota snapshot when available. Polling does not reserve or consume credits; omitted if unavailable.',
    }),
  })
  .openapi({ required: ['job'] })
  .openapi('GetDesignGenerationJobResponseV2')

const DesignImportMetadataSchema = z
  .object({
    title_base64: z
      .string()
      .min(1)
      .openapi({
        description:
          'The design\'s title, encoded in Base64.\n\nThe maximum length of a design title in Canva (unencoded) is 50 characters.\n\nBase64 encoding allows titles containing emojis and other special\ncharacters to be sent using HTTP headers.\nFor example, "My Awesome Design 😍" Base64 encoded\nis `TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ==`.',
        example: 'TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ==',
      }),
    mime_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MIME type of the file being imported. If not provided, Canva attempts to automatically detect the type of the file.',
        example: 'application/pdf',
      }),
  })
  .openapi({
    description:
      'Metadata about the design that you include as a header parameter when importing a design.',
    required: ['title_base64'],
  })
  .openapi('DesignImportMetadata')

const DesignImportStatusSchema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({ description: 'The status of the design import job.', example: 'success' })
  .openapi('DesignImportStatus')

const DesignImportJobResultSchema = z
  .object({
    designs: z
      .array(DesignSummarySchema)
      .openapi({
        description:
          'A list of designs imported from the external file. It usually contains one item.\nImports with a large number of pages or assets are split into multiple designs.',
      }),
  })
  .openapi({ required: ['designs'] })
  .openapi('DesignImportJobResult')

const DesignImportErrorCodeSchema = z
  .enum([
    'design_creation_throttled',
    'design_import_throttled',
    'duplicate_import',
    'internal_error',
    'invalid_file',
    'fetch_failed',
  ])
  .openapi({
    description:
      'A short string about why the import failed. This field can be used to handle errors\nprogrammatically.',
    example: 'design_creation_throttled',
  })
  .openapi('DesignImportErrorCode')

const DesignImportErrorSchema = z
  .object({
    code: DesignImportErrorCodeSchema,
    message: z
      .string()
      .openapi({
        description: 'A human-readable description of what went wrong.',
        example: "We're sorry, but the file upload quota has exceeded. Please try again later.",
      }),
  })
  .openapi({
    description: 'If the import job fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('DesignImportError')

const DesignImportJobSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description: 'The ID of the design import job.',
        example: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      }),
    status: DesignImportStatusSchema,
    result: DesignImportJobResultSchema.exactOptional(),
    error: DesignImportErrorSchema.exactOptional(),
  })
  .openapi({ description: 'The status of the design import job.', required: ['id', 'status'] })
  .openapi('DesignImportJob')

const CreateDesignImportJobResponseSchema = z
  .object({ job: DesignImportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateDesignImportJobResponse')

const GetDesignImportJobResponseSchema = z
  .object({ job: DesignImportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetDesignImportJobResponse')

const CreateUrlImportJobRequestSchema = z
  .object({
    title: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'A title for the design.', example: 'My Awesome Design' }),
    url: z
      .string()
      .min(1)
      .max(2048)
      .openapi({
        description:
          'The URL of the file to import. This URL must be accessible from the internet and be publicly available.',
      }),
    mime_type: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The MIME type of the file being imported. If not provided, Canva attempts to automatically detect the type of the file.',
        example: 'application/vnd.apple.keynote',
      }),
  })
  .openapi({ required: ['title', 'url'] })
  .openapi('CreateUrlImportJobRequest')

const CreateUrlImportJobResponseSchema = z
  .object({ job: DesignImportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateUrlImportJobResponse')

const GetUrlImportJobResponseSchema = z
  .object({ job: DesignImportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetUrlImportJobResponse')

const ImageSourceSchema = z
  .object({
    asset_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description:
          "The ID of an image asset in the user's Canva account.\n\nThe asset must be one of the following image types: `png`, `jpeg`, `gif`,\n`webp`, `heic`, `heif`, `avif`, `tiff`, `jp2`, `jpx`, `jpm`, or `jxr`. Video\nassets are not supported.",
        example: 'Msd59349ff',
      }),
  })
  .openapi({ description: 'The image to convert into a design.', required: ['asset_id'] })
  .openapi('ImageSource')

const CreateImageToDesignImportJobRequestSchema = z
  .object({
    image: ImageSourceSchema,
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'A title for the created design. If not provided, Canva generates a title.',
        example: 'My Image Design',
      }),
  })
  .openapi({ required: ['image'] })
  .openapi('CreateImageToDesignImportJobRequest')

const ImageToDesignImportJobResultSchema = z
  .object({ design: DesignSummarySchema })
  .openapi({ required: ['design'] })
  .openapi('ImageToDesignImportJobResult')

const ImageToDesignImportErrorCodeSchema = z
  .enum([
    'bad_input',
    'moderation_error',
    'quota_exceeded',
    'design_creation_throttled',
    'internal_error',
  ])
  .openapi({
    description:
      'A short string about why the import failed. This field can be used to handle errors\nprogrammatically.',
    example: 'bad_input',
  })
  .openapi('ImageToDesignImportErrorCode')

const ImageToDesignImportErrorSchema = z
  .object({
    code: ImageToDesignImportErrorCodeSchema,
    message: z
      .string()
      .openapi({
        description: 'A human-readable description of what went wrong.',
        example: 'The image could not be converted into a design.',
      }),
  })
  .openapi({
    description: 'If the import job fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('ImageToDesignImportError')

const ImageToDesignImportJobSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description: 'The ID of the image-to-design import job.',
        example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      }),
    status: DesignImportStatusSchema,
    result: ImageToDesignImportJobResultSchema.exactOptional(),
    error: ImageToDesignImportErrorSchema.exactOptional(),
  })
  .openapi({
    description: 'The status and result of an image-to-design import job.',
    required: ['id', 'status'],
  })
  .openapi('ImageToDesignImportJob')

const CreateImageToDesignImportJobResponseSchema = z
  .object({ job: ImageToDesignImportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateImageToDesignImportJobResponse')

const GetImageToDesignImportJobResponseSchema = z
  .object({ job: ImageToDesignImportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetImageToDesignImportJobResponse')

const FeatureQuotaExceededErrorSchema = ErrorSchema.and(
  z
    .object({
      upsell_url: z
        .string()
        .openapi({
          description:
            'URL to redirect users to upgrade their Canva account and reset their quota.',
        }),
    })
    .openapi({ required: ['upsell_url'] }),
)
  .openapi({ description: 'Feature quota exceeded' })
  .openapi('FeatureQuotaExceededError')

const OauthErrorSchema = z
  .object({
    error: ErrorCodeSchema,
    error_description: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({ required: ['error', 'error_description'] })
  .openapi('OauthError')

const ExportFormatSchema: z.ZodType<ExportFormatType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        PdfExportFormatSchema,
        JpgExportFormatSchema,
        PngExportFormatSchema,
        PptxExportFormatSchema,
        GifExportFormatSchema,
        Mp4ExportFormatSchema,
        HtmlBundleExportFormatSchema,
        HtmlStandaloneExportFormatSchema,
        CsvExportFormatSchema,
      ])
      .openapi({
        description: 'Details about the desired export format.',
        discriminator: {
          mapping: {
            pdf: '#/components/schemas/PdfExportFormat',
            jpg: '#/components/schemas/JpgExportFormat',
            png: '#/components/schemas/PngExportFormat',
            pptx: '#/components/schemas/PptxExportFormat',
            gif: '#/components/schemas/GifExportFormat',
            mp4: '#/components/schemas/Mp4ExportFormat',
            html_bundle: '#/components/schemas/HtmlBundleExportFormat',
            html_standalone: '#/components/schemas/HtmlStandaloneExportFormat',
            csv: '#/components/schemas/CsvExportFormat',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('ExportFormat')

const CreateDesignExportJobRequestSchema = z
  .object({
    design_id: z.string().openapi({ description: 'The design ID.' }),
    format: ExportFormatSchema,
  })
  .openapi({
    description:
      'Body parameters for starting an export job for a design.\nIt must include a design ID, and one of the supported export formats.',
    example: { design_id: 'DAVZr1z5464', format: { type: 'pdf', size: 'a4', pages: [2, 3, 4] } },
    required: ['design_id', 'format'],
  })
  .openapi('CreateDesignExportJobRequest')

const DesignExportStatusSchema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({
    description:
      'The export status of the job. A newly created job will be `in_progress` and will eventually\nbecome `success` or `failed`.',
  })
  .openapi('DesignExportStatus')

const ExportErrorCodeSchema = z
  .enum(['license_required', 'approval_required', 'internal_failure'])
  .openapi({
    description: 'If the export failed, this specifies the reason why it failed.',
    'x-enum-descriptions': [
      "The design contains [premium elements](https://www.canva.com/help/premium-elements/) that haven't been purchased. You can either buy the elements or upgrade to a Canva plan (such as Canva Pro) that has premium features, then try again. Alternatively, you can set `export_quality` to `regular` to export your document in regular quality.",
      'The design requires [reviewer approval](https://www.canva.com/en_au/help/design-approval/) before it can be exported.',
      'The service encountered an error when exporting your design.',
    ],
  })
  .openapi('ExportErrorCode')

const ExportErrorSchema = z
  .object({
    code: ExportErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    description: 'If the export fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('ExportError')

const ExportJobSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The export job ID.',
        example: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      }),
    status: DesignExportStatusSchema,
    urls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Download URL(s) for the completed export job. These URLs expire after 24 hours.\n\nDepending on the design type and export format, there is a download URL for each page in the design. The list is sorted by page order.',
        example: ['https://export-download.canva.com/...'],
      }),
    error: ExportErrorSchema.exactOptional(),
  })
  .openapi({ description: 'The status of the export job.', required: ['id', 'status'] })
  .openapi('ExportJob')

const CreateDesignExportJobResponseSchema = z
  .object({ job: ExportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateDesignExportJobResponse')

const PrintPartnerExportDimensionsUnitsSchema = z
  .enum(['px', 'in', 'cm', 'mm'])
  .default('px')
  .openapi({
    description: 'The units of the dimensions. If no units are specified, pixels are used.',
  })
  .openapi('PrintPartnerExportDimensionsUnits')

const PrintPartnerExportDimensionsSchema = z
  .object({
    width: z
      .float64()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The width of the exported image. Note the following behavior:\n\n- If no height or width is specified, the image is exported using the dimensions of the design.\n- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
      }),
    height: z
      .float64()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The height of the exported image.  Note the following behavior:\n\n- If no height or width is specified, the image is exported using the dimensions of the design.\n- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
      }),
    units: PrintPartnerExportDimensionsUnitsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Dimensions of the export in the specified units. The design dimensions must be\nwithin a scale factor of 0.3 and 3 of the requested export dimensions.',
    required: [],
  })
  .openapi('PrintPartnerExportDimensions')

const PrintPartnerPdfExportFormatSchema = z
  .object({
    type: z.literal('pdf'),
    bleed: z
      .int32()
      .min(0)
      .max(150000)
      .default(3000)
      .exactOptional()
      .openapi({
        description:
          'The size of the bleed that should be added to the design. The units of the bleed must be microns. This should match the bleed value used when creating the design with the [Create print partner design API](https://www.canva.dev/docs/apps/rest-apis/reference/print-partner/create-print-partner-design/). Use 0 for no bleed. If bleed is not specified, a default of 3000 microns is used.',
      }),
    crop_marks: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether crop marks should be added to the image.' }),
    cmyk: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the PDF color space should be converted to CMYK.' }),
    pdfx: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether the PDF standard should be updated to PDF/X, a printer friendly\nstandard.',
      }),
  })
  .openapi({ description: 'Export the design as a Print-quality PDF.', required: ['type'] })
  .openapi('PrintPartnerPdfExportFormat')

const PrintPartnerJpgExportFormatSchema = z
  .object({ type: z.literal('jpg') })
  .openapi({ description: 'Export the design as a print-quality JPEG.', required: ['type'] })
  .openapi('PrintPartnerJpgExportFormat')

const PrintPartnerPngExportFormatSchema = z
  .object({ type: z.literal('png') })
  .openapi({ description: 'Export the design as a print-quality PNG.', required: ['type'] })
  .openapi('PrintPartnerPngExportFormat')

const PrintPartnerExportFormatSchema = z
  .discriminatedUnion('type', [
    PrintPartnerPdfExportFormatSchema,
    PrintPartnerJpgExportFormatSchema,
    PrintPartnerPngExportFormatSchema,
  ])
  .openapi({
    description: 'Details about the desired export format.',
    discriminator: {
      mapping: {
        pdf: '#/components/schemas/PrintPartnerPdfExportFormat',
        jpg: '#/components/schemas/PrintPartnerJpgExportFormat',
        png: '#/components/schemas/PrintPartnerPngExportFormat',
      },
      propertyName: 'type',
    },
  })
  .openapi('PrintPartnerExportFormat')

const CreatePrintPartnerDesignExportJobRequestSchema = z
  .object({
    design_id: z.string().openapi({ description: 'The design ID.' }),
    dimensions: PrintPartnerExportDimensionsSchema.exactOptional(),
    format: PrintPartnerExportFormatSchema,
    pages: z
      .array(z.int32().min(1))
      .exactOptional()
      .openapi({
        description:
          "To specify which pages to export in a multi-page design, provide the page\nnumbers as an array. The first page in a design is page `1`.\nIf `pages` isn't specified, all the pages are exported.",
        example: [2, 3, 4],
      }),
  })
  .openapi({
    description:
      'Body parameters for starting a Print Partner export job for a design.\nIt must include a design ID. Canva Docs are not supported for export.',
    example: {
      design_id: 'DAVZr1z5464',
      format: { type: 'pdf' },
      pages: [2, 3, 4],
      dimensions: { width: 200, height: 300, units: 'px' },
    },
    required: ['design_id', 'format'],
  })
  .openapi('CreatePrintPartnerDesignExportJobRequest')

const CreatePrintPartnerDesignExportJobResponseSchema = z
  .object({ job: ExportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreatePrintPartnerDesignExportJobResponse')

const GetDesignExportJobResponseSchema = z
  .object({ job: ExportJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetDesignExportJobResponse')

const ExportHeightSchema = z
  .int32()
  .min(40)
  .max(25000)
  .openapi({
    description:
      "Specify the height in pixels of the exported image. Note the following behavior:\n\n- If no height or width is specified, the image is exported using the dimensions of the design.\n- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
    example: 400,
  })
  .openapi('ExportHeight')

const ExportWidthSchema = z
  .int32()
  .min(40)
  .max(25000)
  .openapi({
    description:
      "Specify the width in pixels of the exported image. Note the following behavior:\n\n- If no width or height is specified, the image is exported using the dimensions of the design.\n- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.\n- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.",
    example: 400,
  })
  .openapi('ExportWidth')

const FolderItemSortBySchema = z
  .enum([
    'created_ascending',
    'created_descending',
    'modified_ascending',
    'modified_descending',
    'title_ascending',
    'title_descending',
  ])
  .default('modified_descending')
  .openapi({
    'x-enum-descriptions': [
      'Sort results by creation date, in ascending order.',
      'Sort results by creation date, in descending order.',
      'Sort results by the last modified date, in ascending order.',
      'Sort results by the last modified date, in descending order.',
      'Sort results by title, in ascending order. The title is either the `name` field for a folder or asset, or the `title` field for a design or brand template.',
      'Sort results by title, in descending order. The title is either the `name` field for a folder or asset, or the `title` field for a design or brand template.',
    ],
  })
  .openapi('FolderItemSortBy')

const FolderItemTypeSchema = z
  .enum(['design', 'folder', 'image', 'brand_template'])
  .openapi('FolderItemType')

const FolderItemPinStatusSchema = z
  .enum(['any', 'pinned'])
  .default('any')
  .openapi({
    description: 'Filter folder items by their pinned status.',
    'x-enum-descriptions': [
      'Return all items regardless of pinned status (default).',
      'Return only pinned items.',
    ],
  })
  .openapi('FolderItemPinStatus')

const FolderSchema = z
  .object({
    id: z.string().openapi({ description: 'The folder ID.', example: 'FAF2lZtloor' }),
    name: z.string().openapi({ description: 'The folder name.', example: 'My awesome holiday' }),
    created_at: z
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
        description:
          'When the folder was created, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1377396000,
      }),
    updated_at: z
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
        description:
          'When the folder was last updated, as a Unix timestamp (in seconds since the\nUnix Epoch).',
        example: 1692928800,
      }),
    thumbnail: ThumbnailSchema.exactOptional(),
  })
  .openapi({
    description: 'The folder object, which contains metadata about the folder.',
    required: ['created_at', 'id', 'name', 'updated_at'],
  })
  .openapi('Folder')

const GetFolderResponseSchema = z
  .object({ folder: FolderSchema })
  .openapi({ description: 'The folder ID.', required: ['folder'] })
  .openapi('GetFolderResponse')

const CreateFolderRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'The name of the folder.', example: 'My awesome holiday' }),
    parent_folder_id: z
      .string()
      .min(1)
      .max(50)
      .openapi({
        description:
          "The folder ID of the parent folder. To create a new folder at the top level of a user's\n[projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.\nTo create it in their Uploads folder, use `uploads`.",
        example: 'FAF2lZtloor',
      }),
  })
  .openapi({
    description: 'Body parameters for creating a new folder.',
    required: ['name', 'parent_folder_id'],
  })
  .openapi('CreateFolderRequest')

const CreateFolderResponseSchema = z
  .object({ folder: FolderSchema.exactOptional() })
  .openapi({ description: 'Details about the new folder.', required: [] })
  .openapi('CreateFolderResponse')

const UpdateFolderRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({
        description: 'The folder name, as shown in the Canva UI.',
        example: 'My awesome holiday',
      }),
  })
  .openapi({
    description: "Body parameters for updating the folder's details.",
    required: ['name'],
  })
  .openapi('UpdateFolderRequest')

const UpdateFolderResponseSchema = z
  .object({ folder: FolderSchema.exactOptional() })
  .openapi({ description: 'Details about the updated folder.', required: [] })
  .openapi('UpdateFolderResponse')

const FolderItemSchema = z
  .object({ type: z.literal('folder'), folder: FolderSchema })
  .openapi({ description: 'Details about the folder.', required: ['folder', 'type'] })
  .openapi('FolderItem')

const DesignItemSchema = z
  .object({ type: z.literal('design'), design: DesignSummarySchema })
  .openapi({ description: 'Details about the design.', required: ['design', 'type'] })
  .openapi('DesignItem')

const ImageItemSchema = z
  .object({ type: z.literal('image'), image: AssetSummarySchema })
  .openapi({ description: 'Details about the image asset.', required: ['image', 'type'] })
  .openapi('ImageItem')

const BrandTemplateItemSchema = z
  .object({ type: z.literal('brand_template'), brand_template: BrandTemplateSummarySchema })
  .openapi({
    description: 'Details about the brand template.',
    required: ['brand_template', 'type'],
  })
  .openapi('BrandTemplateItem')

const FolderItemSummarySchema = z
  .discriminatedUnion('type', [
    FolderItemSchema,
    DesignItemSchema,
    ImageItemSchema,
    BrandTemplateItemSchema,
  ])
  .openapi({
    description: 'Details about the folder item.',
    discriminator: {
      mapping: {
        folder: '#/components/schemas/FolderItem',
        design: '#/components/schemas/DesignItem',
        image: '#/components/schemas/ImageItem',
        brand_template: '#/components/schemas/BrandTemplateItem',
      },
      propertyName: 'type',
    },
  })
  .openapi('FolderItemSummary')

const ListFolderItemsResponseSchema = z
  .object({
    items: z
      .array(FolderItemSummarySchema)
      .openapi({ description: 'An array of items in the folder.' }),
    continuation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the success response contains a continuation token, the folder contains more items\nyou can list. You can use this token as a query parameter and retrieve more\nitems from the list, for example\n`/v1/folders/{folderId}/items?continuation={continuation}`.\n\nTo retrieve all the items in a folder, you might need to make multiple requests.',
        example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
      }),
  })
  .openapi({
    description:
      'A list of the items in a folder.\nIf the success response contains a continuation token, the folder contains more items\nyou can list. You can use this token as a query parameter and retrieve more\nitems from the list, for example\n`/v1/folders/{folderId}/items?continuation={continuation}`.\n\nTo retrieve all the items in a folder, you might need to make multiple requests.',
    required: ['items'],
  })
  .openapi('ListFolderItemsResponse')

const MoveFolderItemRequestSchema = z
  .object({
    to_folder_id: z
      .string()
      .min(1)
      .max(50)
      .openapi({
        description:
          "The ID of the folder you want to move the item to (the destination folder).\nIf you want to move the item to the top level of a Canva user's\n[projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.",
        example: 'FAF2lZtloor',
      }),
    item_id: z
      .string()
      .min(1)
      .max(50)
      .openapi({
        description:
          'The ID of the item you want to move. Currently, video assets are not supported.',
        example: 'Msd59349ff',
      }),
  })
  .openapi({
    description: 'Body parameters for moving the folder.',
    required: ['item_id', 'to_folder_id'],
  })
  .openapi('MoveFolderItemRequest')

const ImageGenerationAspectRatioSchema = z
  .enum(['square', 'landscape', 'portrait', 'landscape_3_2', 'portrait_2_3', 'portrait_4_5'])
  .default('square')
  .openapi({
    description:
      'The aspect ratio of the generated image. Every aspect ratio is supported by every model\nyou can select with `model`, so the choice of model never limits the aspect ratios you\ncan use. The pixel dimensions of the output depend on the model. The job result reports\nthe actual `width` and `height`.',
    'x-enum-descriptions': [
      'A square (1:1) image.',
      'A wide (16:9) image, suitable for landscape-oriented content.',
      'A tall (9:16) image, suitable for portrait-oriented content.',
      'A wide (3:2) image, suitable for photos and print.',
      'A tall (2:3) image, suitable for posters and portrait photos.',
      'A tall (4:5) image, suitable for social media feed posts.',
    ],
  })
  .openapi('ImageGenerationAspectRatio')

const ImageGenerationModelSchema = z
  .enum(['craft_v1_2k', 'lucid_origin', 'z_image_turbo'])
  .openapi({
    description:
      "The model to use for image generation. We recommend omitting this parameter: Canva\nthen selects the best available model for the request and falls back to another\nmodel if one is temporarily unavailable. Set it only if you need a specific model's\noutput. If the requested model can't serve the request, the job fails. Canva never\nuses a different model to serve the request.\n\nThe model strengths below are based on Canva's evaluations. Results vary by\nprompt, so test with your own prompts before pinning a model.",
    'x-enum-descriptions': [
      "CRAFT-1 2K, Canva's first-party image generation model. Pick this model for the best\nimage quality for infographics, posters, slides, people and portraits, abstract art,\npatterns, landscapes, nature, products, and marketing materials.",
      'Lucid Origin. Pick this for architecture, logos, posters, or sci-fi and fantasy\nscenes.',
      'Z Image Turbo. Pick this if the image includes text, or for food, drink, and\ngeneral-purpose imagery.',
    ],
  })
  .openapi('ImageGenerationModel')

const ImageGenerationAssetUploadSchema: z.ZodType<ImageGenerationAssetUploadType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        NoneImageGenerationAssetUploadSchema,
        UploadImageGenerationAssetUploadSchema,
      ])
      .openapi({
        description:
          "Whether to save the generated image as an image asset in the user's Canva account.\nOmitting `asset_upload` (or using `type: none`) returns only a download URL.\n\nSaving the asset (`type: upload`) requires a user access token.",
        discriminator: {
          mapping: {
            none: '#/components/schemas/NoneImageGenerationAssetUpload',
            upload: '#/components/schemas/UploadImageGenerationAssetUpload',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('ImageGenerationAssetUpload')

const CreateImageGenerationJobRequestSchema = z
  .object({
    prompt: z
      .string()
      .min(1)
      .max(10000)
      .openapi({ description: 'A plain-text description of the image to generate.' }),
    aspect_ratio: ImageGenerationAspectRatioSchema.exactOptional(),
    model: ImageGenerationModelSchema.exactOptional(),
    idempotency_key: z
      .uuid()
      .openapi({
        description:
          'A key to make create requests idempotent. Retrying with the same key returns the\noriginal job without creating a duplicate, even if the other request parameters\ndiffer. Keys are held for 24 hours from job creation.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    asset_upload: ImageGenerationAssetUploadSchema.exactOptional(),
  })
  .openapi({ required: ['idempotency_key', 'prompt'] })
  .openapi('CreateImageGenerationJobRequest')

const ImageGenerationJobStatusSchema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({
    description:
      "The status of the image generation job. A newly created job will be `in_progress` and\nwill eventually become `success` or `failed`. If the status is `success`, the job's\n`result` is present.",
  })
  .openapi('ImageGenerationJobStatus')

const GeneratedImageSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description:
          'A download URL for the generated image. The download URL is only valid for 24\nhours.',
      }),
    asset: AssetSummarySchema.exactOptional().openapi({
      description:
        "The image asset the generated image was saved as. Only present if the job was created\nwith `asset_upload` set to `type: upload` and the asset still exists (for example, it's\nabsent if the user has since deleted the asset).",
    }),
    width: z
      .int32()
      .openapi({ description: 'The width of the generated image in pixels.', example: 1024 }),
    height: z
      .int32()
      .openapi({ description: 'The height of the generated image in pixels.', example: 1024 }),
  })
  .openapi({ description: 'A generated image.', required: ['height', 'url', 'width'] })
  .openapi('GeneratedImage')

const ImageGenerationJobResultSchema = z
  .object({ image: GeneratedImageSchema })
  .openapi({
    description: 'Result of the image generation job. Only present if job status is `success`.',
    required: ['image'],
  })
  .openapi('ImageGenerationJobResult')

const ImageGenerationErrorCodeSchema = z
  .enum(['unsafe_input', 'timeout', 'model_not_available', 'model_retired', 'internal_error'])
  .openapi({
    description: 'Error code indicating what went wrong with the image generation.',
    'x-enum-descriptions': [
      'Content safety checks rejected the prompt.',
      'The generation did not complete in time.',
      "The requested model can't currently serve this request, and Canva doesn't retry the job\nwith another model. This is usually temporary. Retry later, retry without the `model`\nparameter to use automatic model selection, or retry with a different model.",
      "The requested model has been permanently retired from this version of the API, and you\ncan't use it again in this version. Use a different model. The API documentation lists\nretired models, which keep their enum value for the lifetime of this API version.",
      'An unexpected error occurred during generation.',
    ],
  })
  .openapi('ImageGenerationErrorCode')

const ImageGenerationErrorSchema = z
  .object({
    code: ImageGenerationErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    description:
      'If the image generation job fails, this object provides details about the error. Only present if status is `failed`.',
    required: ['code', 'message'],
  })
  .openapi('ImageGenerationError')

const ImageGenerationJobSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({ description: 'The image generation job ID.' }),
    status: ImageGenerationJobStatusSchema,
    result: ImageGenerationJobResultSchema.exactOptional(),
    error: ImageGenerationErrorSchema.exactOptional(),
  })
  .openapi({
    description:
      "Details about the image generation job. If the job status is `success`, the job's\n`result` is present.",
    required: ['id', 'status'],
  })
  .openapi('ImageGenerationJob')

const CreateImageGenerationJobResponseSchema = z
  .object({
    job: ImageGenerationJobSchema,
    quota_usage: CreditQuotaSuccessInfoSchema.exactOptional().openapi({
      description:
        'Credit quota usage after reserving credits for this job. Not present if quota data is unavailable.',
    }),
  })
  .openapi({ required: ['job'] })
  .openapi('CreateImageGenerationJobResponse')

const GetImageGenerationJobResponseSchema = z
  .object({ job: ImageGenerationJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetImageGenerationJobResponse')

const BackgroundRemovalImageTransformationSchema = z
  .object({
    type: z
      .literal('background_removal')
      .openapi({
        description:
          'The type of transformation to apply. Currently, the only supported value is\n`background_removal`.',
        example: 'background_removal',
      }),
  })
  .openapi({
    description:
      'Removes the background from an image, keeping the foreground subject. The resulting\nimage has a transparent background. This transformation takes no parameters.\n\nThe output image is limited to a maximum of 10 megapixels. If the source image is\nlarger, the output image is scaled down to stay within this limit.\n\nRequires the user to have the `background_removal` capability. To check this before\ncreating a job, use the\n[Get user capabilities API](https://www.canva.dev/docs/apps/rest-apis/reference/users/get-user-capabilities/).',
    required: ['type'],
  })
  .openapi('BackgroundRemovalImageTransformation')

const ImageTransformationTypeSchema = z
  .xor([BackgroundRemovalImageTransformationSchema])
  .openapi({
    description:
      'A transformation to apply to the image asset. Each transformation type is identified\nby its `type` value and declares its own parameters; `background_removal` takes no\nparameters.',
    discriminator: {
      mapping: { background_removal: '#/components/schemas/BackgroundRemovalImageTransformation' },
      propertyName: 'type',
    },
  })
  .openapi('ImageTransformationType')

const CreateImageTransformationJobRequestSchema = z
  .object({
    asset_id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .openapi({
        description:
          "The ID of the source asset to transform. The asset must be an image asset;\nreferencing any other asset type (such as a video) fails with an\n`unsupported_content_type` error.\n\nThe asset must also have finished uploading. An asset that is still uploading has no\nimage to transform yet and fails with an `asset_not_ready` error. If you've just\ncreated the asset, poll its upload job — for example with the\n[Get asset upload job](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-asset-upload-job/)\nendpoint — until it returns a `success` status before starting a transformation.",
        example: 'Msd59349ff',
      }),
    name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "A name for the new image asset that the job produces. Canva doesn't localize this\nvalue, so provide a name in the user's language. When omitted, the new asset inherits\nthe name of the source asset.",
        example: 'My Awesome Upload with the background removed',
      }),
    transformations: z
      .array(ImageTransformationTypeSchema)
      .min(1)
      .max(20)
      .openapi({
        description:
          "The transformations to apply, in order. Must contain at least one transformation.\nEach transformation is stacked on the result of the previous one. The job's result\nis a single new image asset with all of the transformations applied; intermediate\nresults are not returned.",
      }),
  })
  .openapi({ required: ['asset_id', 'transformations'] })
  .openapi('CreateImageTransformationJobRequest')

const ImageTransformationJobStatusSchema = z
  .enum(['failed', 'in_progress', 'success'])
  .openapi({
    description:
      "The status of the image transformation job. A newly created job will be `in_progress`\nand will eventually become `success` or `failed`. A job may also complete\nimmediately, returning `success` or `failed` from job creation. If the status is\n`success`, the job's `result` is present.",
  })
  .openapi('ImageTransformationJobStatus')

const ImageTransformationJobResultSchema = z
  .object({
    asset: AssetSchema.openapi({
      description: 'The new image asset produced by applying all of the requested transformations.',
    }),
  })
  .openapi({
    description:
      'Result of the image transformation job. Only present if the job status is `success`.',
    required: ['asset'],
  })
  .openapi('ImageTransformationJobResult')

const ImageTransformationErrorCodeSchema = z
  .enum(['no_foreground_found', 'quota_exceeded', 'internal_error'])
  .openapi({
    description: 'Error code indicating what went wrong with the image transformation.',
    'x-enum-descriptions': [
      'No foreground subject was found in the image, so there is no background to remove.',
      "The user has run out of quota, such as their AI credit quota. The quota isn't necessarily specific to the requested transformations.",
      'An unexpected error occurred during the transformation.',
    ],
  })
  .openapi('ImageTransformationErrorCode')

const ImageTransformationErrorSchema = z
  .object({
    code: ImageTransformationErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    description:
      'If the image transformation job fails, this object provides details about the error.\nOnly present if the job status is `failed`.',
    required: ['code', 'message'],
  })
  .openapi('ImageTransformationError')

const ImageTransformationJobSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,50}$/)
      .exactOptional()
      .openapi({
        description:
          'The image transformation job ID. Only present if the job status is `in_progress`.\nA job that completes immediately returns its `result` or `error` directly and has\nno ID to poll.',
      }),
    status: ImageTransformationJobStatusSchema,
    result: ImageTransformationJobResultSchema.exactOptional(),
    error: ImageTransformationErrorSchema.exactOptional(),
  })
  .openapi({
    description:
      "Details about the image transformation job. If the job status is `success`, the job's\n`result` is present.",
    required: ['status'],
  })
  .openapi('ImageTransformationJob')

const CreateImageTransformationJobResponseSchema = z
  .object({ job: ImageTransformationJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateImageTransformationJobResponse')

const GetImageTransformationJobResponseSchema = z
  .object({ job: ImageTransformationJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetImageTransformationJobResponse')

const JsonWebKeySetSchema = z
  .object({
    keys: z
      .array(JsonWebKeySchema)
      .openapi({
        description: 'An array of JSON Web Key values. The order of keys has no meaning.',
      }),
  })
  .openapi({ required: ['keys'] })
  .openapi('JsonWebKeySet')

const CreateDesignMergeJobRequestSchema: z.ZodType<CreateDesignMergeJobRequestType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        NewDesignCreateDesignMergeJobRequestSchema,
        ModifyDesignCreateDesignMergeJobRequestSchema,
      ])
      .openapi({
        discriminator: {
          mapping: {
            create_new_design: '#/components/schemas/NewDesignCreateDesignMergeJobRequest',
            modify_existing_design: '#/components/schemas/ModifyDesignCreateDesignMergeJobRequest',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('CreateDesignMergeJobRequest')

const DesignMergeJobStatusSchema = z
  .enum(['in_progress', 'success', 'failed'])
  .openapi({
    'x-enum-descriptions': [
      'The merge job is still running.',
      'The merge job completed successfully.',
      'The merge job failed.',
    ],
  })
  .openapi('DesignMergeJobStatus')

const DesignMergeJobResultSchema = z
  .object({ design: DesignSummarySchema })
  .openapi({ required: ['design'] })
  .openapi('DesignMergeJobResult')

const DesignMergeErrorCodeSchema = z
  .enum(['thumbnail_generation_error', 'merge_error', 'create_design_error', 'modify_design_error'])
  .openapi('DesignMergeErrorCode')

const DesignMergeErrorSchema = z
  .object({
    code: DesignMergeErrorCodeSchema,
    message: z
      .string()
      .openapi({
        description: 'A human-readable description of what went wrong.',
        example: 'The merge job failed due to an internal error.',
      }),
  })
  .openapi({
    description: 'If the merge job fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('DesignMergeError')

const DesignMergeJobSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The ID of the design merge job.', example: 'a7by3wd-abc123' }),
    status: DesignMergeJobStatusSchema,
    result: DesignMergeJobResultSchema.exactOptional(),
    error: DesignMergeErrorSchema.exactOptional(),
  })
  .openapi({ description: 'The details of a design merge job.', required: ['id', 'status'] })
  .openapi('DesignMergeJob')

const CreateDesignMergeJobResponseSchema = z
  .object({ job: DesignMergeJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateDesignMergeJobResponse')

const GetDesignMergeJobResponseSchema = z
  .object({ job: DesignMergeJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetDesignMergeJobResponse')

const ExchangeAuthCodeRequestSchema = z
  .object({
    grant_type: z
      .literal('authorization_code')
      .openapi({
        description: 'For exchanging an authorization code for an access token.',
        example: 'authorization_code',
      }),
    code_verifier: z
      .string()
      .openapi({
        description:
          'The `code_verifier` value that you generated when creating the user authorization URL.',
        example: 'i541qdcfkb4htnork0w92lnu43en99ls5a48ittv6udqgiflqon8vusojojakbq4',
      }),
    code: z
      .string()
      .openapi({
        description: 'The authorization code you received after the user authorized the app.',
        example:
          'kp8nnroja7qnx00.opyc1p76rcbyflsxbycjqfp3ub8vzsvltpzwafy9q5l45dn5fxzhe7i7a6mg1i2t8jpsa6sebdeumkzzhicskabgevrxsssec4dvjwfvhq4gs3ugghguar0voiqpfb7axsapiojoter8v3w2s5s3st84jpv2l06h667iw241xngy9c8=vu1tnjp7sz',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's unique ID, for authenticating the request.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'OC-FAB12-AbCdEf',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's client secret, for authenticating the request. Begins with `cnvca`.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'cnvcaAbcdefg12345_hijklm6789',
      }),
    redirect_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only required if a redirect URL was supplied when you [created the user authorization URL](https://www.canva.dev/docs/apps/rest-apis/authentication/#create-the-authorization-url).\n\nMust be one of those already specified by the client. If not supplied, the first redirect_uri defined for the client will be used by default.\n',
        example: 'https://example.com/process-auth',
      }),
  })
  .openapi({ required: ['code', 'code_verifier', 'grant_type'] })
  .openapi('ExchangeAuthCodeRequest')

const ExchangeRefreshTokenRequestSchema = z
  .object({
    grant_type: z
      .literal('refresh_token')
      .openapi({
        description: 'For generating an access token using a refresh token.',
        example: 'refresh_token',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's unique ID, for authenticating the request.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'OC-FAB12-AbCdEf',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's client secret, for authenticating the request. Begins with `cnvca`.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'cnvcaAbcdefg12345_hijklm6789',
      }),
    refresh_token: z
      .string()
      .openapi({
        description:
          'The refresh token to be exchanged. You can copy this value from the successful response received when generating an access token.',
        example:
          'JABix5nolsk9k8n2r0f8nq1gw4zjo40ht6sb4i573wgdzmkwdmiy6muh897hp0bxyab276wtgqkvtob2mg9aidt5d6rcltcbcgs101',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional scope value when refreshing an access token. Separate multiple [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) with a single space between each scope.\n\nThe requested scope cannot include any permissions not already granted, so this parameter allows you to limit the scope when refreshing a token. If omitted, the scope for the token remains unchanged.\n',
        example: 'design:meta:read',
      }),
  })
  .openapi({ required: ['grant_type', 'refresh_token'] })
  .openapi('ExchangeRefreshTokenRequest')

const ExchangeAccessTokenRequestSchema = z
  .discriminatedUnion('grant_type', [
    ExchangeAuthCodeRequestSchema,
    ExchangeRefreshTokenRequestSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        authorization_code: '#/components/schemas/ExchangeAuthCodeRequest',
        refresh_token: '#/components/schemas/ExchangeRefreshTokenRequest',
      },
      propertyName: 'grant_type',
    },
  })
  .openapi('ExchangeAccessTokenRequest')

const ExchangeAccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description:
          'The bearer access token to use to authenticate to Canva REST API endpoints. If requested using a `authorization_code` or `refresh_token`, this allows you to act on behalf of a user.',
        example:
          'JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo',
      }),
    refresh_token: z
      .string()
      .openapi({
        description: 'The token that you can use to refresh the access token.',
        example:
          'JABix5nolsk9k8n2r0f8nq1gw4zjo40ht6sb4i573wgdzmkwdmiy6muh897hp0bxyab276wtgqkvtob2mg9aidt5d6rcltcbcgs101',
      }),
    token_type: z
      .string()
      .openapi({
        description: 'The token type returned. This is always `Bearer`.',
        example: 'Bearer',
      }),
    expires_in: z
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
        description: 'The expiry time (in seconds) for the access token.',
        example: 14400,
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) that the token has been granted.',
        example: 'asset:read design:meta:read design:permission:read folder:read',
      }),
  })
  .openapi({
    description: 'Exchange auth token to access token.',
    required: ['access_token', 'expires_in', 'refresh_token', 'token_type'],
  })
  .openapi('ExchangeAccessTokenResponse')

const IntrospectTokenRequestSchema = z
  .object({
    token: z
      .string()
      .openapi({
        description: 'The token to introspect.',
        example:
          'JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's unique ID, for authenticating the request.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'OC-FAB12-AbCdEf',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's client secret, for authenticating the request. Begins with `cnvca`.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'cnvcaAbcdefg12345_hijklm6789',
      }),
  })
  .openapi({ required: ['token'] })
  .openapi('IntrospectTokenRequest')

const IntrospectTokenResponseSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description:
          'Whether the access token is active.\n\nIf `true`, the access token is valid and active. If `false`, the access token is invalid.\n',
        example: true,
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) that the token has been granted.',
        example: 'asset:read design:meta:read design:permission:read folder:read',
      }),
    client: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the client that requested the token.',
        example: 'OC-FAB12-AbCdEf',
      }),
    exp: z
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
          'The expiration time of the token, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.',
        example: 1712216144,
      }),
    iat: z
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
          'When the token was issued, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.',
        example: 1712201744,
      }),
    nbf: z
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
          'The "not before" time of the token, which specifies the time before which the access token most not be accepted, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.',
        example: 1712201744,
      }),
    jti: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique ID for the access token.',
        example: 'AbC1d-efgHIJKLMN2oPqrS',
      }),
    sub: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The subject of the claim. This is the ID of the Canva user that the access token acts on behalf of.\n\nThis is an obfuscated value, so a single user has a unique ID for each app. If the same user authorizes another app, their ID in that other app is different.\n',
        example: 'oBCdEF1Gh2i3jkLmno-pq',
      }),
  })
  .openapi({
    description: 'Introspection result of access or refresh tokens',
    required: ['active'],
  })
  .openapi('IntrospectTokenResponse')

const RevokeTokensRequestSchema = z
  .object({
    token: z
      .string()
      .openapi({
        description: 'The token to revoke.',
        example:
          'agALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's unique ID, for authenticating the request.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'OC-FAB12-AbCdEf',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your app's client secret, for authenticating the request. Begins with `cnvca`.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
        example: 'cnvcaAbcdefg12345_hijklm6789',
      }),
  })
  .openapi({
    description: 'Supply an access token or refresh token to have its lineage revoked.',
    required: ['token'],
  })
  .openapi('RevokeTokensRequest')

const RevokeTokensResponseSchema = z
  .object({})
  .openapi({ description: 'The response on a successful token revocation.' })
  .openapi('RevokeTokensResponse')

const ScopeResponseSchema = z
  .string()
  .openapi({
    description:
      'The [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) that the token has been granted.',
    example: 'asset:read design:meta:read design:permission:read folder:read',
  })
  .openapi('ScopeResponse')

const ClientIdSchema = z
  .string()
  .openapi({
    description:
      "Your app's unique ID, for authenticating the request.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
    example: 'OC-FAB12-AbCdEf',
  })
  .openapi('ClientId')

const ClientSecretSchema = z
  .string()
  .openapi({
    description:
      "Your app's client secret, for authenticating the request. Begins with `cnvca`.\n\nNOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.\n",
    example: 'cnvcaAbcdefg12345_hijklm6789',
  })
  .openapi('ClientSecret')

const UserInfoResponseSchema = z
  .object({
    sub: z.string().openapi({ description: 'Identifier for the End-User at the Issuer.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's full name in displayable form including all name parts, possibly including\ntitles and suffixes, ordered according to the End-User's locale and preferences.",
      }),
    given_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Given name(s) or first name(s) of the End-User. Note that in some cultures, people can\nhave multiple given names; all can be present, with the names being separated by space\ncharacters.',
      }),
    family_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have\nmultiple family names or no family name; all can be present, with the names being\nseparated by space characters.',
      }),
    email: z
      .email()
      .exactOptional()
      .openapi({
        description:
          "End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322]\naddr-spec syntax. The RP MUST NOT rely upon this value being unique, as discussed in\nSection 5.7.",
      }),
    email_verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if the End-User's e-mail address has been verified; otherwise false. When this\nClaim Value is true, this means that the OP took affirmative steps to ensure that this\ne-mail address was controlled by the End-User at the time the verification was\nperformed. The means by which an e-mail address is verified is context specific,\nand dependent upon the trust framework or contractual agreements within which the\nparties are operating.",
      }),
  })
  .openapi({
    example: {
      sub: 'UAAAAAAAAA',
      name: 'Alice Person',
      given_name: 'Alice',
      family_name: 'Person',
      email: 'alice.person@example.com',
      email_verified: true,
    },
    required: ['sub'],
  })
  .openapi('UserInfoResponse')

const IntervalSchema = z
  .enum(['day', 'week', 'month', 'year', 'never'])
  .openapi({
    description:
      "The interval at which the usage resets. 'never' means lifetime quota that never resets.",
  })
  .openapi('Interval')

const FeatureIdSchema = z
  .string()
  .regex(/^[a-z0-9-]+\.[a-z0-9-]+$/)
  .openapi({
    description:
      'Unique identification string for the feature. Need to be in `{application-id}.{feature-name}` pattern',
    example: 'ingredient-generation.generate-image',
  })
  .openapi('FeatureId')

const FeatureQuotaLimitSchema = z
  .int32()
  .min(1)
  .openapi({
    description:
      'The quota limit set by the caller for this feature. This limit is used to determine if usage exceeds the customer-defined threshold.\nIf not provided, we assume the usage is unlimited.\n',
  })
  .openapi('FeatureQuotaLimit')

const CreateDesignResizeJobRequestSchema = z
  .object({
    design_id: z.string().openapi({ description: 'The design ID.' }),
    design_type: DesignTypeInputSchema,
  })
  .openapi({
    description:
      'Body parameters for starting a resize job for a design.\nIt must include a design ID, and one of the supported design type.',
    required: ['design_id', 'design_type'],
  })
  .openapi('CreateDesignResizeJobRequest')

const DesignResizeStatusSchema = z
  .enum(['in_progress', 'success', 'failed'])
  .openapi({ description: 'Status of the design resize job.', example: 'success' })
  .openapi('DesignResizeStatus')

const TrialInformationSchema = z
  .object({
    uses_remaining: z
      .int32()
      .min(0)
      .openapi({ description: 'The number of uses remaining in the free trial.', example: 0 }),
    upgrade_url: z
      .string()
      .openapi({
        description: 'The URL for a user to upgrade their Canva account.',
        example: 'https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W',
      }),
  })
  .openapi({
    description:
      "WARNING: Trials and trial information are a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis).\nThere might be unannounced breaking changes to this feature which won't produce a new API version.\n\nTrial information for non-qualifying users. Non-qualifying users have a limited number of\nresize uses. Once the trial is exhausted, users must upgrade to a Canva plan with premium\nfeatures (such as Canva Pro) to continue using the Resize API.",
    required: ['upgrade_url', 'uses_remaining'],
  })
  .openapi('TrialInformation')

const DesignResizeJobResultSchema = z
  .object({
    design: DesignSummarySchema,
    trial_information: TrialInformationSchema.exactOptional(),
  })
  .openapi({
    description:
      "Design has been created and saved to user's root\n([projects](https://www.canva.com/help/find-designs-and-folders/)) folder.",
    required: ['design'],
  })
  .openapi('DesignResizeJobResult')

const DesignResizeErrorCodeSchema = z
  .enum([
    'thumbnail_generation_error',
    'design_resize_error',
    'create_design_error',
    'trial_quota_exceeded',
  ])
  .openapi('DesignResizeErrorCode')

const DesignResizeErrorSchema = z
  .object({
    code: DesignResizeErrorCodeSchema,
    message: z
      .string()
      .openapi({ description: 'A human-readable description of what went wrong.' }),
  })
  .openapi({
    description: 'If the design resize job fails, this object provides details about the error.',
    required: ['code', 'message'],
  })
  .openapi('DesignResizeError')

const DesignResizeJobSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The design resize job ID.',
        example: 'bbd8dfcd-ead1-4871-81d5-962bfec82274',
      }),
    status: DesignResizeStatusSchema,
    result: DesignResizeJobResultSchema.exactOptional(),
    error: DesignResizeErrorSchema.exactOptional(),
  })
  .openapi({ description: 'Details about the design resize job.', required: ['id', 'status'] })
  .openapi('DesignResizeJob')

const CreateDesignResizeJobResponseSchema = z
  .object({ job: DesignResizeJobSchema })
  .openapi({ required: ['job'] })
  .openapi('CreateDesignResizeJobResponse')

const GetDesignResizeJobResponseSchema = z
  .object({ job: DesignResizeJobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetDesignResizeJobResponse')

const UserProfileSchema = z
  .object({
    display_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the user as shown in the Canva UI.',
        example: 'Jane Doe',
      }),
  })
  .openapi({
    description: 'Profile for the user, consisting of the display name and other attributes.',
    required: [],
  })
  .openapi('UserProfile')

const UsersMeResponseSchema = z
  .object({ team_user: TeamUserSummarySchema })
  .openapi({ required: ['team_user'] })
  .openapi('UsersMeResponse')

const UserProfileResponseSchema = z
  .object({ profile: UserProfileSchema })
  .openapi({ required: ['profile'] })
  .openapi('UserProfileResponse')

const GetUserCapabilitiesResponseSchema = z
  .object({ capabilities: z.array(CapabilitySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetUserCapabilitiesResponse')

const NotificationContentSchema: z.ZodType<NotificationContentType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [
        ShareDesignNotificationContentSchema,
        ShareFolderNotificationContentSchema,
        CommentNotificationContentSchema,
        DesignAccessRequestedNotificationContentSchema,
        DesignApprovalRequestedNotificationContentSchema,
        DesignApprovalResponseNotificationContentSchema,
        DesignApprovalReviewerInvalidatedNotificationContentSchema,
        DesignMentionNotificationContentSchema,
        TeamInviteNotificationContentSchema,
        FolderAccessRequestedNotificationContentSchema,
        SuggestionNotificationContentSchema,
      ])
      .openapi({
        description: 'The notification content object, which contains metadata about the event.',
        discriminator: {
          mapping: {
            share_design: '#/components/schemas/ShareDesignNotificationContent',
            share_folder: '#/components/schemas/ShareFolderNotificationContent',
            comment: '#/components/schemas/CommentNotificationContent',
            design_access_requested:
              '#/components/schemas/DesignAccessRequestedNotificationContent',
            design_approval_requested:
              '#/components/schemas/DesignApprovalRequestedNotificationContent',
            design_approval_response:
              '#/components/schemas/DesignApprovalResponseNotificationContent',
            design_approval_reviewer_invalidated:
              '#/components/schemas/DesignApprovalReviewerInvalidatedNotificationContent',
            design_mention: '#/components/schemas/DesignMentionNotificationContent',
            team_invite: '#/components/schemas/TeamInviteNotificationContent',
            folder_access_requested:
              '#/components/schemas/FolderAccessRequestedNotificationContent',
            suggestion: '#/components/schemas/SuggestionNotificationContent',
          },
          propertyName: 'type',
        },
      }),
  )
  .openapi('NotificationContent')

const NotificationSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the notification.', example: 'eb595730' }),
    created_at: z
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
        description:
          'When the notification was created, as a UNIX timestamp (in seconds\nsince the UNIX epoch).',
        example: 1377396000,
      }),
    content: NotificationContentSchema,
  })
  .openapi({ required: ['content', 'created_at', 'id'] })
  .openapi('Notification')

const CreditQuotaExceededErrorExample = {
  summary: 'User has reached their credit quota limit',
  value: {
    code: 'credit_quota_exceeded',
    message: 'User has exceeded their credit quota',
    quota_usage: {
      used_percentage: 100,
      resets_at: 1735689600,
      using_bonus_credits: false,
      upgrade_url: 'https://www.canva.com/upgrade',
      is_admin: false,
      generation_pending: false,
    },
  },
}

const CreditQuotaCooldownErrorExample = {
  summary: 'User is in a cooldown period after heavy credit usage',
  value: {
    code: 'credit_quota_cooldown',
    message: 'Credit quota cooldown is active',
    quota_usage: {
      used_percentage: 100,
      resets_at: 1735689600,
      using_bonus_credits: false,
      upgrade_url: 'https://www.canva.com/upgrade',
      cooldown_ends_at: 1767182400,
      is_admin: false,
      generation_pending: true,
    },
  },
}

const CommonCreditQuotaErrorResponse = {
  description: 'Credit Quota Exceeded',
  content: {
    'application/json': {
      schema: CreditQuotaErrorSchema,
      examples: {
        credit_quota_exceeded: CreditQuotaExceededErrorExample,
        credit_quota_cooldown: CreditQuotaCooldownErrorExample,
      },
    },
  },
}

const BadRequestFieldErrorExample = {
  summary: 'The request field does not match expected format',
  value: {
    code: 'invalid_request',
    message: '{fieldValue} does not match expected format for {fieldName}',
  },
}

const MissingRequiredHeaderErrorExample = {
  summary: 'A required header is missing',
  value: { code: 'invalid_request', message: 'missing required header {headerName}' },
}

const MissingAccessTokenErrorExample = {
  summary: 'Access token is missing from the request',
  value: { code: 'invalid_request', message: 'Access token is missing from the request.' },
}

const MissingClientCredentialsErrorExample = {
  summary: 'Client credentials are missing from the request',
  value: { code: 'invalid_request', message: 'Client credentials are missing from the request.' },
}

const ContentTypeHeaderValueMissingExample = {
  summary: 'Content-Type header is missing',
  value: { code: 'invalid_header_value', message: 'Content-Type header is missing for {path}' },
}

const ContentTypeHeaderValueInvalidExample = {
  summary: 'Content-Type header is invalid',
  value: {
    code: 'invalid_header_value',
    message: 'Content-Type {contentType} is invalid for {path}',
  },
}

const ValidatingClientFailedExample = {
  summary: 'Validating client failed',
  value: { code: 'unauthorized_client', message: 'Validating client failed for {clientAppId}' },
}

const ValidatingClientFailedWithCodeExample = {
  summary: 'Validating client failed with error code',
  value: {
    code: 'unauthorized_client',
    message: 'Validating client failed for {clientAppId}: {errorCode}',
  },
}

const ClientSecretInvalidErrorExample = {
  summary: 'Client secret is invalid',
  value: { code: 'invalid_client', message: 'Client secret is invalid for {clientAppId}' },
}

const InvalidClientCredentialsValueExample = {
  summary: 'Number of column-separated components in the base64 value is not 2',
  value: { code: 'invalid_request', message: 'Malformed encoded client ID and secret' },
}

const InvalidClientCredentialsBase64EncodingExample = {
  summary: 'Could not decode the base64 value for client credentials',
  value: { code: 'invalid_request', message: 'Credentials could not be decoded from base64' },
}

const FailedToReadRequestBodyExample = {
  summary: 'Failed to read request body',
  value: { code: 'bad_request_body', message: 'Failed to read request body' },
}

const ExpectedIntegerQueryParamExample = {
  summary: 'Expected integer for query parameter',
  value: {
    code: 'bad_query_params',
    message: 'Expected integer for query parameter `{key}` but found {value}',
  },
}

const ExpectedLongQueryParamExample = {
  summary: 'Expected long for query parameter',
  value: {
    code: 'bad_query_params',
    message: 'Expected long for query parameter `{key}` but found {value}',
  },
}

const ExpectedLongListQueryParamExample = {
  summary: 'Expected long list for query parameter',
  value: {
    code: 'bad_query_params',
    message: 'Expected long list for query parameter `{key}` but found {value}',
  },
}

const TooManyQueryParamValuesExample = {
  summary: 'Expected 1 query parameter but found multiple',
  value: {
    code: 'bad_query_params',
    message: 'Expected 1 query parameter {key} but found {count}',
  },
}

const MissingRequiredQueryParamExample = {
  summary: 'Missing required query parameter',
  value: { code: 'bad_query_params', message: 'Missing required query parameter: {key}' },
}

const ConfidentialClientCorsErrorExample = {
  summary: 'Confidential clients must not authenticate via CORS requests',
  value: {
    code: 'unauthorized_client',
    message: 'Confidential clients must not authenticate via CORS requests',
  },
}

const InvalidUriErrorExample = {
  summary: 'The request URI could not be parsed',
  value: { code: 'bad_request_params', message: 'Invalid URI: {uri}' },
}

const InvalidOriginErrorExample = {
  summary: 'The Origin header could not be parsed',
  value: { code: 'bad_request_params', message: 'Invalid Origin: {origin}' },
}

const InvalidIdsErrorExample = {
  summary: 'One or more IDs could not be deobfuscated',
  value: { code: 'invalid_field', message: 'Invalid Ids: {ids}' },
}

const CommonBadRequestResponse = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        BadRequestFieldError: BadRequestFieldErrorExample,
        MissingRequiredHeaderError: MissingRequiredHeaderErrorExample,
        MissingAccessTokenError: MissingAccessTokenErrorExample,
        MissingClientCredentialsError: MissingClientCredentialsErrorExample,
        ContentTypeHeaderValueMissing: ContentTypeHeaderValueMissingExample,
        ContentTypeHeaderValueInvalid: ContentTypeHeaderValueInvalidExample,
        ValidatingClientFailed: ValidatingClientFailedExample,
        ValidatingClientFailedWithCode: ValidatingClientFailedWithCodeExample,
        ClientSecretInvalidError: ClientSecretInvalidErrorExample,
        InvalidClientCredentialsValue: InvalidClientCredentialsValueExample,
        InvalidClientCredentialsBase64Encoding: InvalidClientCredentialsBase64EncodingExample,
        FailedToReadRequestBody: FailedToReadRequestBodyExample,
        ExpectedIntegerQueryParam: ExpectedIntegerQueryParamExample,
        ExpectedLongQueryParam: ExpectedLongQueryParamExample,
        ExpectedLongListQueryParam: ExpectedLongListQueryParamExample,
        TooManyQueryParamValues: TooManyQueryParamValuesExample,
        MissingRequiredQueryParam: MissingRequiredQueryParamExample,
        ConfidentialClientCorsError: ConfidentialClientCorsErrorExample,
        InvalidUriError: InvalidUriErrorExample,
        InvalidOriginError: InvalidOriginErrorExample,
        InvalidIdsError: InvalidIdsErrorExample,
      },
    },
  },
}

const InvalidClientErrorExample = {
  summary: 'The OAuth client credentials are invalid',
  value: { code: 'invalid_client', message: 'Client {clientId} not available' },
}

const InvalidAccessTokenExample = {
  summary: 'Access token could not be decoded or signature could not be verified.',
  value: { code: 'invalid_access_token', message: 'Access token is invalid' },
}

const MissingClientCredentialsOrBodyAuthErrorExample = {
  summary: 'Client credentials or body auth are missing from the request',
  value: {
    code: 'invalid_client',
    message: 'Client credentials or body auth are missing from the request.',
  },
}

const MalformedAuthorizationHeaderComponentsExample = {
  summary: 'Authorization header has wrong number of components',
  value: {
    code: 'invalid_access_token',
    message: 'Malformed Authorization header: wrong number of components',
  },
}

const MalformedAuthorizationHeaderModeExample = {
  summary: 'Authorization header has invalid mode',
  value: { code: 'invalid_access_token', message: 'Malformed Authorization header: invalid mode' },
}

const TokenIntrospectionFailedExample = {
  summary: "Token couldn't be introspected",
  value: { code: 'invalid_access_token', message: "Token couldn't be introspected" },
}

const RevokedAccessTokenExample = {
  summary: 'Access token is revoked',
  value: { code: 'revoked_access_token', message: 'Access token is revoked' },
}

const MissingAuthorizationHeaderExample = {
  summary: 'Missing Authorization header',
  value: { code: 'invalid_access_token', message: 'Missing Authorization header' },
}

const MalformedAuthorizationHeaderExample = {
  summary: 'Malformed Authorization header',
  value: { code: 'invalid_access_token', message: 'Malformed Authorization header' },
}

const CommonUnauthorizedResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        InvalidClientError: InvalidClientErrorExample,
        InvalidAccessToken: InvalidAccessTokenExample,
        MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
        MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
        MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
        TokenIntrospectionFailed: TokenIntrospectionFailedExample,
        RevokedAccessToken: RevokedAccessTokenExample,
        MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
        MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
      },
    },
  },
}

const MissingScopeErrorExample = {
  summary: 'The required OAuth scope is missing',
  value: { code: 'missing_scope', message: 'Missing scopes: {scopes}' },
}

const UserRoleRequiredErrorExample = {
  summary: 'Request must be made on behalf of a user',
  value: { code: 'user_role_required', message: 'This request must be made on behalf of a user.' },
}

const IntegrationAccessDeniedErrorExample = {
  summary: 'Not allowed to access the integration',
  value: {
    code: 'permission_denied',
    message: 'Not allowed to access integration with client id {clientId}',
  },
}

const CommonForbiddenResponse = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        MissingScopeError: MissingScopeErrorExample,
        UserRoleRequiredError: UserRoleRequiredErrorExample,
        IntegrationAccessDeniedError: IntegrationAccessDeniedErrorExample,
      },
    },
  },
}

const EndpointNotFoundErrorExample = {
  summary: 'The requested endpoint was not found',
  value: { code: 'endpoint_not_found', message: 'Unknown endpoint {method} {path}' },
}

const CommonNotFoundResponse = {
  description: 'Not Found',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: { EndpointNotFoundError: EndpointNotFoundErrorExample },
    },
  },
}

const EndpointNoLongerAvailableErrorExample = {
  summary: 'This endpoint is no longer available',
  value: { code: 'endpoint_gone', message: 'This endpoint is no longer available' },
}

const CommonGoneResponse = {
  description: 'Gone',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: { EndpointNoLongerAvailableError: EndpointNoLongerAvailableErrorExample },
    },
  },
}

const TooManyRequestsErrorExample = {
  summary: 'Rate limit exceeded',
  value: { code: 'too_many_requests', message: 'Too many requests to {operation}' },
}

const ThrottledTooManyRequestsExample = {
  summary: 'Throttled because too many requests',
  value: { code: 'too_many_requests', message: 'Throttled because too many requests' },
}

const CommonTooManyRequestsResponse = {
  description: 'Too Many Requests',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        TooManyRequestsError: TooManyRequestsErrorExample,
        ThrottledTooManyRequests: ThrottledTooManyRequestsExample,
      },
    },
  },
}

const AppIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The app ID.',
      explode: false,
      in: 'path',
      name: 'appId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const BrandTemplateIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The brand template ID.',
      explode: false,
      in: 'path',
      name: 'brandTemplateId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const ThreadIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The ID of the thread.',
      example: 'KeAbiEAjZEj',
      explode: false,
      in: 'path',
      name: 'threadId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const ReplyIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The ID of the reply.',
      example: 'KeAZEAjijEb',
      explode: false,
      in: 'path',
      name: 'replyId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const DesignIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The design ID.',
      explode: false,
      in: 'path',
      name: 'designId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const TransactionIdParameterParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The editing transaction ID.',
      example: 'EDT123456',
      explode: false,
      in: 'path',
      name: 'transactionId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const PageIndicesParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        ),
      )
      .max(4),
  )
  .openapi({
    param: {
      description:
        'The request with all the page indices\nPages are indexed using one-based numbering, so the first page in a design has the index value `1`.',
      explode: false,
      in: 'query',
      name: 'page_indices',
      required: true,
      schema: {
        example: [2, 3, 4],
        items: { format: 'int32', maximum: 500, minimum: 1, type: 'integer' },
        maxItems: 4,
        type: 'array',
      },
      style: 'form',
    },
    example: [2, 3, 4],
  })

const ExportIdParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The export job ID.',
      explode: false,
      in: 'path',
      name: 'exportId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const FileIdParameterParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The file ID.',
      explode: false,
      in: 'path',
      name: 'fileId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const FolderIdParameterParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]{1,50}$/)
  .openapi({
    param: {
      description: 'The folder ID.',
      example: 'FAF2lZtloor',
      explode: false,
      in: 'path',
      name: 'folderId',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
      style: 'simple',
    },
  })

const FeatureIdParamsSchema = FeatureIdSchema.openapi({
  param: {
    explode: false,
    in: 'path',
    name: 'featureId',
    required: true,
    schema: { $ref: '#/components/schemas/FeatureId' },
    style: 'simple',
  },
})

const FeatureQuotaLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    FeatureQuotaLimitSchema.openapi({
      param: {
        explode: true,
        in: 'query',
        name: 'feature_quota_limit',
        required: false,
        schema: { $ref: '#/components/schemas/FeatureQuotaLimit' },
        style: 'form',
      },
    }),
  )
  .exactOptional()

const IntervalParamsSchema = IntervalSchema.openapi({
  param: {
    description:
      "The interval at which the usage resets. 'never' means lifetime quota that never resets.",
    explode: true,
    in: 'query',
    name: 'interval',
    required: false,
    schema: { $ref: '#/components/schemas/Interval' },
    style: 'form',
  },
}).exactOptional()

const AnalyticsInvalidDesignIdErrorExample = {
  summary: 'The design ID does not match the expected format.',
  value: { code: 'invalid_field', message: 'designId does not match expected format' },
}

const AnalyticsPermissionDeniedErrorExample = {
  summary: 'The caller is not allowed to access design analytics.',
  value: { code: 'permission_denied', message: 'Not allowed to access analytics for this design' },
}

const AnalyticsDesignNotFoundErrorExample = {
  summary: 'The design was not found, or analytics are unavailable.',
  value: {
    code: 'design_not_found',
    message: 'Design not found or analytics are not available for this design',
  },
}

const AnalyticsInvalidContinuationErrorExample = {
  summary: 'The continuation token is invalid or expired.',
  value: { code: 'invalid_field', message: 'Invalid continuation token' },
}

const AnalyticsInvalidTimeRangeErrorExample = {
  summary: 'The requested time range is invalid.',
  value: { code: 'invalid_field', message: 'start_time must be before end_time' },
}

const AnalyticsInvalidTimezoneErrorExample = {
  summary: 'The timezone value is invalid.',
  value: { code: 'invalid_field', message: 'timezone is not a valid UTC offset' },
}

const AnalyticsInvalidPageViewsFilterErrorExample = {
  summary: 'The page views filter is invalid.',
  value: {
    code: 'bad_request_body',
    message: 'filter must include a valid type discriminator and required fields',
  },
}

const AuthKeysNotFoundErrorExample = {
  summary: 'No auth keys exist for the specified app.',
  value: { code: 'app_not_found', message: 'Auth keys not found for app {appId}' },
}

const InProgressAssetUploadJobExampleExample = {
  summary: 'In progress job',
  value: { job: { id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8', status: 'in_progress' } },
}

const SuccessAssetUploadJobExampleExample = {
  summary: 'Successfully completed job',
  value: {
    job: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'success',
      asset: {
        id: 'Msd59349ff',
        type: 'image',
        name: 'My Awesome Upload',
        tags: ['image', 'holiday', 'best day ever'],
        owner: { user_id: 'oU123456AbCdE', team_id: 'oB123456AbCdE' },
        created_at: 1377396000,
        updated_at: 1692928800,
        thumbnail: {
          width: 595,
          height: 335,
          url: 'https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>',
        },
      },
    },
  },
}

const FailedAssetUploadJobExampleExample = {
  summary: 'Failed job',
  value: {
    job: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'failed',
      error: { code: 'file_too_big', message: 'Failed to import because the file is too big' },
    },
  },
}

const AssetNotFoundErrorExample = {
  summary: 'The asset was not found',
  value: { code: 'asset_not_found', message: 'Asset not found' },
}

const AssetAccessNotAllowedErrorExample = {
  summary: 'Not allowed to access the asset',
  value: { code: 'permission_denied', message: 'Not allowed to access this asset' },
}

const AssetUpdateNotAllowedErrorExample = {
  summary: 'Not allowed to update the asset',
  value: { code: 'permission_denied', message: 'Not allowed to update this asset' },
}

const AssetDeleteNotAllowedErrorExample = {
  summary: 'Not allowed to delete the asset',
  value: { code: 'permission_denied', message: 'Not allowed to delete this asset' },
}

const AssetUploadJobNotFoundErrorExample = {
  summary: 'Asset upload job not found',
  value: { code: 'not_found', message: 'Asset upload job with ID {jobId} not found' },
}

const AssetUploadJobNotCreatorErrorExample = {
  summary: 'Calling user was not the creator of the asset upload job',
  value: {
    code: 'permission_denied',
    message: 'Calling user was not the creator of the asset upload job',
  },
}

const AssetJobIdNotFoundErrorExample = {
  summary: 'Job ID not found',
  value: { code: 'not_found', message: 'Job ID {jobId} not found' },
}

const AssetJobNotFoundErrorExample = {
  summary: 'Job not found',
  value: { code: 'not_found', message: 'Job {jobId} not found' },
}

const AssetJobWithIdNotFoundErrorExample = {
  summary: 'Job with ID not found',
  value: { code: 'not_found', message: 'Job with Id {jobId} not found' },
}

const AssetUrlInvalidErrorExample = {
  summary: 'The provided URL is invalid',
  value: { code: 'invalid_field', message: "'url' provided is invalid." },
}

const AssetUploadAlreadyExistsErrorExample = {
  summary: 'An asset upload for the URL already exists',
  value: { code: 'invalid_request', message: 'Asset Upload for url {url} already exists' },
}

const GetThisJobStatusNotAllowedErrorExample = {
  summary: 'Not allowed to get this job status',
  value: { code: 'permission_denied', message: 'Not allowed to get this job status' },
}

const InProgressAutofillJobExampleExample = {
  summary: 'In progress job',
  value: { job: { id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72', status: 'in_progress' } },
}

const SuccessAutofillJobExampleExample = {
  summary: 'Successfully completed job',
  value: {
    job: {
      id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72',
      status: 'success',
      result: {
        type: 'create_design',
        design: {
          id: 'DAFVztcvd9z',
          title: 'My summer holiday',
          url: 'https://www.canva.com/design/DAFVztcvd9z/edit',
          urls: {
            edit_url: 'https://www.canva.com/api/ekimus8HTvsdf&/edit',
            view_url: 'https://www.canva.com/api/eylPinTv358hYb8n1U4/view',
          },
          thumbnail: {
            width: 595,
            height: 335,
            url: 'https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>',
          },
          created_at: 1586734043,
          updated_at: 1586734043,
        },
        trial_information: { uses_remaining: 2, upgrade_url: 'https://www.canva.com/pro/' },
      },
    },
  },
}

const FailedAutofillJobExampleExample = {
  summary: 'Failed job',
  value: {
    job: {
      id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72',
      status: 'failed',
      error: { code: 'autofill_error', message: 'Error autofilling design from brand template' },
    },
  },
}

const BrandTemplateNotFoundErrorExample = {
  summary: 'A brand template with the ID specified in the request could not be found.',
  value: { code: 'not_found', message: "Brand template with id '{brandTemplateId}' not found" },
}

const BrandTemplateForbiddenErrorExample = {
  summary:
    'The user does not have permission to access the brand template with the ID\nspecified in the request.',
  value: {
    code: 'permission_denied',
    message: "Not allowed to access brand template with id '{brandTemplateId}'",
  },
}

const AutofillDesignNotFoundErrorExample = {
  summary: 'A design with the ID specified in the request could not be found.',
  value: { code: 'not_found', message: "Design with id '{designId}' not found" },
}

const AutofillDesignForbiddenErrorExample = {
  summary:
    'The user does not have permission to access the design with the ID\nspecified in the request.',
  value: {
    code: 'permission_denied',
    message: "Not allowed to access design with id '{designId}'",
  },
}

const AutofillFeatureForbiddenErrorExample = {
  summary: "The user's plan does not include access to the autofill feature.",
  value: {
    code: 'permission_denied',
    message:
      'Access the autofill feature and other powerful design tools by upgrading your Canva plan here: {upgradeUrl}',
  },
}

const DesignTitleInvalidErrorExample = {
  summary: 'The design title specified in the request is not valid.',
  value: { code: 'bad_request_params', message: 'Design title invalid' },
}

const DesignAutofillJobNotFoundErrorExample = {
  summary: 'A design autofill job with the ID specified in the request could not be found.',
  value: { code: 'not_found', message: 'Job {jobId} not found' },
}

const DesignAutofillJobForbiddenErrorExample = {
  summary:
    'The user does not have permission to access the design autofill job with the ID\nspecified in the request.',
  value: {
    code: 'permission_denied',
    message: 'Calling user was not the creator of the autofill job',
  },
}

const ChartDataProcessingUnsupportedErrorExample = {
  summary: 'The chart_data_processing field value is not yet supported.',
  value: {
    code: 'bad_request_params',
    message: 'The chart_data_processing field is not yet supported',
  },
}

const InvalidBrandTemplateIdErrorExample = {
  summary: 'The brand template ID specified in the request is not a valid ID format.',
  value: { code: 'bad_request_params', message: 'Invalid brand template ID {brandTemplateId}' },
}

const DesignNotFillableErrorExample = {
  summary: 'The specified brand template does not contain any autofill capable elements.',
  value: {
    code: 'design_not_fillable',
    message: 'Design does not have any autofill capable elements',
  },
}

const AutofillDataInvalidErrorExample = {
  summary: 'The provided autofill data is not valid for the specified brand template.',
  value: { code: 'autofill_data_invalid', message: '{message}' },
}

const AutofillFeatureQuotaExceededErrorExample = {
  summary: 'Feature quota exceeded',
  value: {
    code: 'quota_exceeded',
    message:
      'Free autofill quota has been exceeded. Present the `upsell_url` to the user and prompt them to upgrade their Canva account to continue using the autofill feature.',
    upsell_url: '{upsellUrl}',
  },
}

const PublishBrandTemplateSuccessExampleExample = {
  description:
    'Response from successfully publishing a brand template. Note that the thumbnail might be null initially and will be available after async processing completes.',
  summary: 'Successful brand template publishing',
  value: {
    brand_template: {
      id: 'EABCtemplate789',
      title: 'My Brand Template',
      view_url: 'https://www.canva.com/design/EABCtemplate789/view',
      create_url: 'https://www.canva.com/design/EABCtemplate789/remix',
      created_at: 1704110400,
      updated_at: 1704110400,
    },
  },
}

const ResourceLimitExceededErrorExample = {
  summary: 'Validation error - resource limit exceeded',
  value: {
    code: 'bad_request_params',
    message:
      'Design contains {count} {resource_name}, but brand templates can only contain up to {max}. Reduce the number and try again.',
  },
}

const InvalidDesignIdErrorExample = {
  summary: 'The design ID format is invalid',
  value: { code: 'bad_request_params', message: "Design ID '{designId}' is not valid" },
}

const PublishBrandTemplateDesignNotFoundErrorExample = {
  summary: 'The design was not found',
  value: { code: 'not_found', message: 'Design with id {designId} not found' },
}

const PublishPermissionDeniedErrorExample = {
  summary: 'User does not have permission to publish the design as a brand template',
  value: {
    code: 'permission_denied',
    message: 'User does not have permission to publish design {designId} as a brand template',
  },
}

const FindBrandTemplatesForbiddenErrorExample = {
  summary: 'Not allowed to find metadata for brand templates',
  value: { code: 'permission_denied', message: 'Not allowed to find metadata for brand templates' },
}

const GetBrandTemplateNotFoundErrorExample = {
  summary: 'Brand template not found',
  value: { code: 'not_found', message: "Brand template with id '{brandTemplateId}' not found" },
}

const GetBrandTemplatePermissionDeniedErrorExample = {
  summary: 'Not allowed to access the brand template',
  value: {
    code: 'permission_denied',
    message: "Not allowed to access brand template with id '{brandTemplateId}'",
  },
}

const GetBrandTemplateDatasetNotFoundErrorExample = {
  summary: 'Brand template not found',
  value: { code: 'not_found', message: "Brand template with id '{brandTemplateId}' not found" },
}

const GetBrandTemplateDatasetPermissionDeniedErrorExample = {
  summary: 'Not allowed to access the brand template',
  value: {
    code: 'permission_denied',
    message: "User does not have permission to access brand template with id '{brandTemplateId}'",
  },
}

const InvalidMentionIdsErrorExample = {
  summary: 'Mentions with non-obfuscated IDs are not allowed for this client',
  value: { code: 'invalid_field', message: 'Invalid IDs' },
}

const MentionedUserNotFoundErrorExample = {
  summary: 'A mentioned user could not be found',
  value: { code: 'user_not_found', message: 'Invalid user ID' },
}

const MentionedTeamNotFoundErrorExample = {
  summary: "A mentioned user's team could not be found",
  value: { code: 'team_not_found', message: 'Invalid brand ID' },
}

const AssigneeNotMentionedErrorExample = {
  summary: 'Assignee must be mentioned in comment content',
  value: { code: 'bad_request_body', message: 'Assignee must be mentioned in comment content' },
}

const MessageTooLongErrorExample = {
  summary: 'Message is too long',
  value: { code: 'message_too_long', message: 'Message is too long' },
}

const TooManyCommentsErrorExample = {
  summary: 'Design already has the maximum number of allowed comments',
  value: {
    code: 'too_many_comments',
    message: 'Design already has the maximum number of allowed comments',
  },
}

const NotAllowedToCommentErrorExample = {
  summary: 'Not allowed to comment on this design',
  value: { code: 'permission_denied', message: 'Not allowed to comment on this design' },
}

const DesignNotFoundErrorExample = {
  summary: 'Design not found',
  value: { code: 'design_not_found', message: 'Design not found' },
}

const TooManyRepliesErrorExample = {
  summary: 'This comment thread already has the maximum number of allowed replies',
  value: {
    code: 'too_many_replies',
    message: 'This comment thread already has the maximum number of allowed replies',
  },
}

const NotAllowedToReplyErrorExample = {
  summary: 'Not allowed to reply on this design',
  value: { code: 'permission_denied', message: 'Not allowed to reply on this design' },
}

const DesignOrCommentNotFoundForReplyErrorExample = {
  summary: 'Design or comment not found',
  value: { code: 'design_not_found', message: 'Design or comment not found' },
}

const NotAllowedToFetchRepliesErrorExample = {
  summary: 'Not allowed to fetch replies',
  value: { code: 'permission_denied', message: 'Not allowed to fetch replies' },
}

const DesignOrThreadNotFoundErrorExample = {
  summary: 'Design or comment not found',
  value: { code: 'design_or_thread_not_found', message: 'Design or comment not found' },
}

const NotAllowedToFetchCommentErrorExample = {
  summary: 'Not allowed to fetch this comment',
  value: { code: 'permission_denied', message: 'Not allowed to fetch this comment' },
}

const NotAllowedToFetchSuggestionErrorExample = {
  summary: 'Not allowed to fetch this suggestion',
  value: { code: 'permission_denied', message: 'Not allowed to fetch this suggestion' },
}

const ThreadNotFoundErrorExample = {
  summary: 'No thread with ID found',
  value: { code: 'thread_not_found', message: 'No thread with ID {threadId} found' },
}

const ThreadNotAttachedToDesignErrorExample = {
  summary: 'Thread not attached to design',
  value: {
    code: 'thread_not_found',
    message: 'Thread with ID {threadId} is not attached to design {designId}, or design not found',
  },
}

const SuggestionNotFoundErrorExample = {
  summary: 'No suggestion thread with ID found',
  value: { code: 'thread_not_found', message: 'Suggestion with ID {threadId} not found' },
}

const NotAllowedToFetchReplyErrorExample = {
  summary: 'Not allowed to fetch this reply',
  value: { code: 'permission_denied', message: 'Not allowed to fetch this reply' },
}

const ReplyNotFoundErrorExample = {
  summary: 'Reply not found',
  value: { code: 'reply_not_found', message: 'Reply with ID {replyId} not found' },
}

const SuggestionReplyNotFoundErrorExample = {
  summary: 'Suggestion reply not found',
  value: { code: 'reply_not_found', message: 'Suggestion reply with ID {replyId} not found' },
}

const ProductSizeNotFoundErrorExample = {
  summary: 'Product size not found',
  value: { code: 'not_found', message: 'Product size not found for product {productId}' },
}

const CreatePrintPartnerDesignForbiddenErrorExample = {
  summary: 'Client does not have permission to create a Print Partner design',
  value: {
    code: 'permission_denied',
    message: 'Client does not have permission to create a Print Partner design',
  },
}

const GetPrintPartnerDesignForbiddenErrorExample = {
  summary: 'Client does not have permission to get a Print Partner design',
  value: {
    code: 'permission_denied',
    message: 'Client does not have permission to get a Print Partner design',
  },
}

const CreateDesignNotFoundErrorExample = {
  summary: 'A design with the ID specified in the request could not be found.',
  value: { code: 'not_found', message: "Design with id '{designId}' not found" },
}

const CreateBrandTemplateNotFoundErrorExample = {
  summary: 'A brand template with the ID specified in the request could not be found.',
  value: { code: 'not_found', message: "Brand template with id '{brandTemplateId}' not found" },
}

const GetDesignDatasetDesignNotFoundErrorExample = {
  summary: 'Design not found',
  value: { code: 'not_found', message: "Design with id '{designId}' not found" },
}

const GetDesignDatasetPermissionDeniedErrorExample = {
  summary: 'Not allowed to access the design',
  value: {
    code: 'permission_denied',
    message: "Not allowed to access design with id '{designId}'",
  },
}

const DesignIdNotFoundErrorExample = {
  summary: 'The design was not found',
  value: { code: 'design_not_found', message: "Design with id '{designId}' not found" },
}

const DesignAccessDeniedErrorExample = {
  summary: 'Not allowed to access the design',
  value: { code: 'permission_denied', message: 'Not allowed to access design with id {designId}' },
}

const MissingDesignTypeOrAssetIdErrorExample = {
  summary: 'Neither design_type nor asset_id was provided',
  value: { code: 'invalid_field', message: "One of 'design_type' or 'asset_id' must be defined." },
}

const BlankDesignIdErrorExample = {
  summary: 'The design_id must not be blank',
  value: { code: 'bad_request_body', message: 'design_id must not be blank' },
}

const BlankBrandTemplateIdErrorExample = {
  summary: 'The brand_template_id must not be blank',
  value: { code: 'bad_request_body', message: 'brand_template_id must not be blank' },
}

const CreateDesignBrandTemplateAccessDeniedErrorExample = {
  summary: 'Not allowed to access the brand template',
  value: {
    code: 'permission_denied',
    message: "Not allowed to access brand template with id '{brandTemplateId}'",
  },
}

const AssetIdNotImageErrorExample = {
  summary: 'The asset_id does not belong to an image asset',
  value: { code: 'bad_request_params', message: '`asset_id` must belong to an image asset' },
}

const InvalidDesignDimensionsErrorExample = {
  summary: 'The specified dimensions for the design are invalid',
  value: { code: 'invalid_field', message: 'The specified dimensions for the design are invalid.' },
}

const RefDesignTypeNotFoundErrorExample = {
  summary: 'The design type was not found',
  value: { code: 'design_type_not_found', message: "Design type '{refDesignTypeId}' not found." },
}

const CreateDesignThrottledErrorExample = {
  summary: 'Design creation throttling threshold reached',
  value: {
    code: 'too_many_requests',
    message: 'You have reached the design creation throttling threshold.',
  },
}

const DesignHasNoPagesErrorExample = {
  summary: "Canva docs don't have pages",
  value: {
    code: 'page_not_found',
    message: "Design {designId} has no pages because it's a Canva doc.",
  },
}

const DesignPagesOffsetTooLargeErrorExample = {
  summary: 'The offset is outside the range of pages in the design',
  value: {
    code: 'offset_too_large',
    message: 'Offset {offset} is outside range of [1, {pageCount}]',
  },
}

const InvalidOwnershipErrorExample = {
  summary: 'The ownership value is invalid',
  value: { code: 'invalid_field', message: 'Invalid ownership' },
}

const InvalidSortByErrorExample = {
  summary: 'The sort_by value is invalid',
  value: { code: 'invalid_field', message: 'Invalid sort by value: {sortBy}' },
}

const InvalidContinuationErrorExample = {
  summary: 'The continuation token is invalid',
  value: { code: 'bad_query_params', message: 'Invalid continuation: {continuation}' },
}

const DesignTypeNotAvailableErrorExample = {
  summary: 'The design_types filter contains an unavailable design type',
  value: {
    code: 'invalid_field',
    message: "'design_types' contains a design type that isn't available: {designType}.",
  },
}

const ListDesignsForbiddenErrorExample = {
  summary: 'Not allowed to access the design list',
  value: { code: 'permission_denied', message: 'Not allowed to access design list' },
}

const UnableToFetchDesignsErrorExample = {
  summary: 'Unable to fetch designs',
  value: { code: 'bad_query_params', message: 'Unable to fetch designs' },
}

const FindDocumentsForbiddenErrorExample = {
  summary: 'Not allowed to find documents',
  value: { code: 'permission_denied', message: 'Not allowed to find documents' },
}

const DesignAccessForbiddenErrorExample = {
  summary: 'Not allowed to access the design',
  value: { code: 'permission_denied', message: 'Not allowed to access design' },
}

const InProgressDesignGenerationJobExampleV2Example = {
  summary: 'In-progress design generation job',
  value: { job: { id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17', status: 'in_progress' } },
}

const SuccessDesignGenerationJobExampleV2Example = {
  summary: 'Successfully completed design generation job',
  value: {
    job: {
      id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      status: 'success',
      result: {
        design: {
          id: 'DAFVztcvd9z',
          title: 'SolarNow Seed Pitch',
          urls: {
            edit_url: 'https://www.canva.com/api/design/example/edit',
            view_url: 'https://www.canva.com/api/design/example/view',
          },
          thumbnail: {
            width: 800,
            height: 450,
            url: 'https://document-export.canva.com/example/thumbnail/0001.png?signature=example',
          },
          created_at: 1788768000,
          updated_at: 1788768000,
          page_count: 3,
        },
      },
    },
    quota_usage: { used_percentage: 25, resets_at: 1789257600, using_bonus_credits: false },
  },
}

const ContentNotAllowedDesignGenerationJobExampleV2Example = {
  summary: 'Design generation rejected by content-safety checks',
  value: {
    job: {
      id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      status: 'failed',
      error: {
        code: 'content_not_allowed',
        message:
          "The design couldn't be generated because the request didn't meet Canva's content guidelines.",
      },
    },
  },
}

const FailedDesignGenerationJobExampleV2Example = {
  summary: 'Design generation failed',
  value: {
    job: {
      id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      status: 'failed',
      error: {
        code: 'generation_failed',
        message: "The design couldn't be generated. Please try again.",
      },
    },
  },
}

const InvalidDesignGenerationRequestErrorV2Example = {
  summary: 'The request contains an invalid field',
  value: {
    code: 'invalid_field',
    message: 'The presentation outline can only be used with the presentation design type.',
  },
}

const InvalidDesignGenerationInputErrorV2Example = {
  summary: 'An attachment is invalid or unsupported',
  value: {
    code: 'invalid_field',
    message: 'The specified attachment must identify a supported image or brand template.',
  },
}

const TooManyDesignGenerationInputsErrorV2Example = {
  summary: 'Too many generation inputs',
  value: {
    code: 'invalid_field',
    message: 'At most 20 inputs are allowed across images and brand_templates combined.',
  },
}

const UnsupportedDesignGenerationTypeErrorV2Example = {
  summary: "The design type isn't supported for generation",
  value: {
    code: 'invalid_field',
    message: 'Design generation supports doc, presentation, and whiteboard presets.',
  },
}

const DesignGenerationNotAvailableErrorV2Example = {
  summary: "Design generation isn't available to the user",
  value: { code: 'permission_denied', message: "Design generation isn't available for this user." },
}

const DesignGenerationInputForbiddenErrorV2Example = {
  summary: "The user can't access an attachment",
  value: {
    code: 'permission_denied',
    message: "The user doesn't have access to the specified attachment.",
  },
}

const DesignGenerationInputNotFoundErrorV2Example = {
  summary: "An attachment wasn't found",
  value: { code: 'not_found', message: "The specified attachment wasn't found." },
}

const InvalidDesignGenerationJobIdErrorV2Example = {
  summary: 'The job ID is invalid',
  value: { code: 'invalid_field', message: 'The design generation job ID is invalid.' },
}

const DesignGenerationJobForbiddenErrorV2Example = {
  summary: "The caller didn't create this job",
  value: {
    code: 'permission_denied',
    message: "The user doesn't have access to this design generation job.",
  },
}

const DesignGenerationJobNotFoundErrorV2Example = {
  summary: "The job wasn't found",
  value: { code: 'not_found', message: "The design generation job wasn't found." },
}

const AcceptedDesignGenerationJobExampleV2Example = {
  summary: 'Accepted job with available credit quota information',
  value: {
    job: { id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17', status: 'in_progress' },
    quota_usage: { used_percentage: 25, resets_at: 1789257600, using_bonus_credits: false },
  },
}

const JobIdInvalidErrorExample = {
  summary: 'The job ID is invalid',
  value: { code: 'bad_request_params', message: 'The jobId is invalid.' },
}

const JobNotCreatedViaConnectApiErrorExample = {
  summary: 'The job is not created via Connect API',
  value: { code: 'invalid_request', message: 'The job is not created via Connect API.' },
}

const DesignImportJobNotCreatorErrorExample = {
  summary: 'Calling user was not the creator of the design import job',
  value: {
    code: 'permission_denied',
    message: 'Calling user was not the creator of the design import job',
  },
}

const GetJobStatusNotAllowedErrorExample = {
  summary: 'Not allowed to get the job status',
  value: { code: 'permission_denied', message: 'Not allowed to get the job status.' },
}

const JobIdNotFoundErrorExample = {
  summary: 'Job ID not found',
  value: { code: 'not_found', message: 'Job ID {jobId} not found' },
}

const JobNotFoundErrorExample = {
  summary: 'Job not found',
  value: { code: 'not_found', message: 'Job {jobId} not found' },
}

const JobWithIdNotFoundErrorExample = {
  summary: 'Job with ID not found',
  value: { code: 'not_found', message: 'Job with Id {jobId} not found' },
}

const DesignImportAlreadyInProgressErrorExample = {
  summary: 'A design import for the URL is already in progress',
  value: { code: 'invalid_request', message: 'Design import for url {url} already in progress' },
}

const JobNotCreatorErrorExample = {
  summary: 'Calling user was not the creator of the job',
  value: { code: 'permission_denied', message: 'Calling user was not the creator of the job' },
}

const DesignCreationThrottledErrorExample = {
  summary: 'Design creation throttling threshold reached',
  value: {
    code: 'too_many_requests',
    message: 'You have reached the design creation throttling threshold.',
  },
}

const ImageToDesignCreditQuotaExceededErrorExample = {
  summary: 'User has reached their credit quota limit',
  value: { code: 'credit_quota_exceeded', message: 'User has exceeded their credit quota' },
}

const InProgressDesignImportJobExampleExample = {
  summary: 'In progress job',
  value: { job: { id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8', status: 'in_progress' } },
}

const SuccessDesignImportJobExampleExample = {
  summary: 'Successfully completed job',
  value: {
    job: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'success',
      result: {
        designs: [
          {
            id: 'DAGQm2AkzOk',
            title: 'My Awesome Design',
            thumbnail: { width: 376, height: 531, url: 'https://document-export.canva.com/...' },
            urls: {
              edit_url: 'https://www.canva.com/api/design/...',
              view_url: 'https://www.canva.com/api/design/...',
            },
            created_at: 1726198998,
            updated_at: 1726199000,
          },
        ],
      },
    },
  },
}

const FailedDesignImportJobExampleExample = {
  summary: 'Failed job',
  value: {
    job: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'failed',
      error: {
        code: 'invalid_file',
        message: 'Document could not be imported because the file is corrupt.',
      },
    },
  },
}

const InProgressImageToDesignImportJobExampleExample = {
  summary: 'In progress image-to-design import job',
  value: { job: { id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17', status: 'in_progress' } },
}

const SuccessImageToDesignImportJobExampleExample = {
  summary: 'Successfully completed image-to-design import job',
  value: {
    job: {
      id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      status: 'success',
      result: {
        design: {
          id: 'DAFVztcvd9z',
          title: 'My Image Design',
          thumbnail: { width: 800, height: 600, url: 'https://document-export.canva.com/...' },
          urls: {
            edit_url: 'https://www.canva.com/design/DAFVztcvd9z/edit',
            view_url: 'https://www.canva.com/design/DAFVztcvd9z/view',
          },
          created_at: 1726198998,
          updated_at: 1726199000,
        },
      },
    },
  },
}

const FailedImageToDesignImportJobExampleExample = {
  summary: 'Failed image-to-design import job',
  value: {
    job: {
      id: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
      status: 'failed',
      error: {
        code: 'internal_error',
        message: 'An unexpected error occurred while converting the image. Please try again.',
      },
    },
  },
}

const UnsupportedAssetErrorExample = {
  summary: 'The provided asset is not a supported image type',
  value: {
    code: 'unsupported_asset',
    message:
      "'asset_id' must refer to an asset of one of the following types: png, jpeg, gif, webp, heic, heif, avif, tiff, jp2, jpx, jpm, jxr.",
  },
}

const InvalidDesignTypeErrorExample = {
  summary: 'The requested preset design type is not available.',
  value: { code: 'bad_request_body', message: "Design type '{name}' is invalid." },
}

const InProgressExportJobExampleExample = {
  summary: 'In progress job',
  value: { job: { id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8', status: 'in_progress' } },
}

const SuccessExportJobExampleExample = {
  summary: 'Successfully completed job',
  value: {
    job: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'success',
      urls: ['https://export-download.canva.com/...'],
    },
  },
}

const FailedExportJobExampleExample = {
  summary: 'Failed job',
  value: {
    job: {
      id: 'e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8',
      status: 'failed',
      error: {
        code: 'license_required',
        message: "User doesn't have the required license to export in PRO quality.",
      },
    },
  },
}

const ExportInvalidDesignIdErrorExample = {
  summary: 'Request design ID does not match expected format.',
  value: {
    code: 'invalid_request',
    message: '{designId} does not match expected format for designId',
  },
}

const UnsupportedDesignTypeExample = {
  summary: 'Export not supported for this design type.',
  value: {
    code: 'bad_request_body',
    message: '{formatType} export not supported for this design type',
  },
}

const SvgExportUnavailableErrorExample = {
  summary: 'SVG export is currently unavailable.',
  value: { code: 'feature_not_available', message: 'SVG Export is currently unavailable' },
}

const ClientThrottleErrorExample = {
  summary: 'Too many requests for client.',
  value: { code: 'too_many_requests', message: 'Too many export requests for client' },
}

const ClientDailyThrottleErrorExample = {
  summary: 'Too many daily requests for client.',
  value: { code: 'too_many_requests', message: 'Too many daily export requests for client' },
}

const UserThrottleErrorExample = {
  summary: 'Too many requests for user.',
  value: { code: 'too_many_requests', message: 'Too many export requests for user' },
}

const UserDailyThrottleErrorExample = {
  summary: 'Too many daily requests for user.',
  value: { code: 'too_many_requests', message: 'Too many daily export requests for user' },
}

const DesignThrottleErrorExample = {
  summary: 'Too many requests for design.',
  value: { code: 'too_many_requests', message: 'Too many export requests for design' },
}

const ExportJobPermissionDeniedErrorExample = {
  summary: 'Not allowed to access export job.',
  value: { code: 'permission_denied', message: 'Not allowed to access export job' },
}

const ExportJobExpiredErrorExample = {
  summary: 'Export job result has expired.',
  value: { code: 'not_found', message: 'export job result has expired' },
}

const ExportJobResultPermissionDeniedErrorExample = {
  summary: 'Not allowed to access export job result.',
  value: { code: 'permission_denied', message: 'Not allowed to access export job result' },
}

const UnsupportedFormatErrorExample = {
  summary: 'Export format not supported for requested page(s).',
  value: {
    code: 'bad_request_body',
    message: '{formatType} export not supported for requested page(s) [{pageNumbers}]',
  },
}

const InvalidPageRangeErrorExample = {
  summary: 'Requested invalid page range for design.',
  value: {
    code: 'bad_request_body',
    message: 'Requested page(s) [{badPageNumbers}] of a design with {maxPageNumber} page(s)',
  },
}

const TransparentBackgroundNotAllowedErrorExample = {
  summary: "User's plan does not allow exporting PNGs with transparent background.",
  value: {
    code: 'bad_request_params',
    message: 'Users on the Canva Free plan can not export PNGs with transparent background.',
  },
}

const LicenseRequiredErrorExample = {
  summary: "User doesn't have the required license to export in PRO quality.",
  value: {
    code: 'license_required',
    message: "User doesn't have the required license to export in PRO quality",
  },
}

const ExportDesignNotFoundErrorExample = {
  summary: 'Design not found.',
  value: { code: 'design_not_found', message: "Design with id '{designId}' not found" },
}

const DesignPermissionDeniedErrorExample = {
  summary: 'Not allowed to access design.',
  value: { code: 'permission_denied', message: 'Not allowed to access design with id {designId}' },
}

const PrintPartnerUnsupportedDesignTypeErrorExample = {
  summary: 'Print partner export not supported for this design type.',
  value: {
    code: 'bad_request_body',
    message: 'Print partner export not supported for this design type',
  },
}

const PrintPartnerUnsupportedDesignErrorExample = {
  summary: 'Print partner export not supported for this design.',
  value: {
    code: 'bad_request_body',
    message: 'Print partner export not supported for this design',
  },
}

const PrintPartnerExportForbiddenExample = {
  summary: 'Client does not have permission to create a Print Partner export.',
  value: {
    code: 'permission_denied',
    message: 'Client does not have permission to create a Print Partner export',
  },
}

const ExportScaleFactorOutsideRangeErrorExample = {
  summary: 'Requested dimensions exceed expected bounds.',
  value: { code: 'bad_request_body', message: 'Requested dimensions exceed expected bounds' },
}

const ResourceUnavailableErrorExample = {
  summary: 'One or more of the resources in the design did not upload properly.',
  value: {
    code: 'permission_denied',
    message: 'One or more of the resources in the design did not upload properly',
  },
}

const EmbeddedMediaErrorExample = {
  summary: 'The design contains embedded media that no longer work.',
  value: {
    code: 'permission_denied',
    message: 'The design contains embedded media that no longer work',
  },
}

const InvalidItemIdErrorExample = {
  summary: 'The item ID does not match any known ID format.',
  value: { code: 'invalid_field', message: 'The item id `{value}` is invalid' },
}

const InvalidFolderIdErrorExample = {
  summary: 'The provided ID is not a valid folder ID.',
  value: { code: 'invalid_field', message: 'The folder id `{value}` is invalid' },
}

const FolderNotFoundErrorExample = {
  summary: 'The folder was not found',
  value: { code: 'folder_not_found', message: 'Folder not found' },
}

const ParentFolderNotFoundErrorExample = {
  summary: 'The parent folder was not found',
  value: { code: 'folder_not_found', message: 'Parent folder not found' },
}

const FolderAccessNotAllowedErrorExample = {
  summary: 'Not allowed to access the folder',
  value: { code: 'permission_denied', message: '{message}' },
}

const TargetFolderSizeLimitReachedErrorExample = {
  summary: 'The target folder has reached its size limit',
  value: { code: 'quota_exceeded', message: 'Target folder has reached size limit' },
}

const ListItemsInvalidContinuationErrorExample = {
  summary: 'The provided continuation token is invalid',
  value: { code: 'bad_query_params', message: '{message}' },
}

const FolderInvalidRequestParametersErrorExample = {
  summary: 'The request parameters are invalid',
  value: { code: 'bad_request_body', message: 'Invalid request parameters' },
}

const RootFolderNotSupportedErrorExample = {
  summary: 'The root ID is an alias, not a folder',
  value: {
    code: 'bad_request_params',
    message: "The 'root' ID is an alias to list items without a folder. It's not a folder.",
  },
}

const UploadsFolderNotAllowedErrorExample = {
  summary: 'The operation is not allowed on the uploads folder',
  value: { code: 'permission_denied', message: "{method} is not allowed on the 'uploads' folder." },
}

const ToFolderSameAsItemErrorExample = {
  summary: "The destination folder can't be the same as the item being moved",
  value: {
    code: 'bad_request_params',
    message: "'to_folder_id' and 'item_id' cannot be the same.",
  },
}

const MoveUploadsFolderNotAllowedErrorExample = {
  summary: 'Not allowed to move the Uploads folder',
  value: { code: 'permission_denied', message: 'Not allowed to move the Uploads folder.' },
}

const ToFolderNotFoundErrorExample = {
  summary: 'The destination folder was not found',
  value: { code: 'folder_not_found', message: 'To folder {folderId} not found' },
}

const ItemInMultipleFoldersErrorExample = {
  summary: 'The item exists in multiple folders',
  value: {
    code: 'item_in_multiple_folders',
    message:
      'The item lives in multiple folders. Please move it to the new folder via Canva Desktop App or Canva in a browser.',
  },
}

const SharedDesignNotAllowedInRootErrorExample = {
  summary: 'Shared designs are not allowed in the root folder',
  value: {
    code: 'permission_denied',
    message: 'Shared designs are not allowed in the root folder',
  },
}

const FolderItemNotFoundErrorExample = {
  summary: 'The folder item was not found',
  value: { code: 'not_found', message: "Folder item '{itemId}' not found" },
}

const FolderItemAccessNotAllowedErrorExample = {
  summary: 'Not allowed to access the folder item',
  value: { code: 'permission_denied', message: "Not allowed to access folder item '{itemId}'" },
}

const ImageGenerationNotEnabledErrorExample = {
  summary: 'Image generation is not enabled for this client',
  value: { code: 'permission_denied', message: 'Image generation is not enabled' },
}

const ImageGenerationJobNotFoundErrorExample = {
  summary: 'The image generation job was not found',
  value: { code: 'not_found', message: 'Image generation job not found: {jobId}' },
}

const InProgressImageTransformationJobExampleExample = {
  summary: 'In progress job',
  value: { job: { id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72', status: 'in_progress' } },
}

const SuccessImageTransformationJobExampleExample = {
  summary: 'Successfully completed job',
  value: {
    job: {
      status: 'success',
      result: {
        asset: {
          id: 'Msd59349ff',
          type: 'image',
          name: 'My Awesome Upload with the background removed',
          tags: ['image', 'holiday', 'best day ever'],
          owner: { user_id: 'oU123456AbCdE', team_id: 'oB123456AbCdE' },
          created_at: 1377396000,
          updated_at: 1692928800,
          thumbnail: {
            width: 595,
            height: 335,
            url: 'https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>',
          },
        },
      },
    },
  },
}

const FailedImageTransformationJobExampleExample = {
  summary: 'Failed job',
  value: {
    job: {
      status: 'failed',
      error: {
        code: 'no_foreground_found',
        message:
          'No foreground subject was found in the image, so there is no background to remove.',
      },
    },
  },
}

const UnsupportedAssetTypeErrorExample = {
  summary: 'The asset is not an image asset',
  value: { code: 'unsupported_content_type', message: 'Asset is not an image asset: {assetId}' },
}

const AssetNotReadyErrorExample = {
  summary: "The asset is still being uploaded, so it can't be transformed yet",
  value: {
    code: 'asset_not_ready',
    message: 'Asset is still being uploaded and has no image to transform yet: {assetId}',
  },
}

const ImageTransformationNotEnabledErrorExample = {
  summary: 'Image transformation is not enabled for this client',
  value: { code: 'permission_denied', message: 'Image transformation is not enabled' },
}

const ImageTransformationJobNotFoundErrorExample = {
  summary: 'The image transformation job was not found',
  value: { code: 'not_found', message: 'Image transformation job not found: {jobId}' },
}

const InvalidMergeJobTypeErrorExample = {
  summary: 'Invalid merge job type',
  value: { code: 'invalid_request', message: 'Invalid merge job type: {jobType}' },
}

const MergeJobNotFoundErrorExample = {
  summary: 'Merge job not found',
  value: { code: 'not_found', message: "Merge job '{jobId}' not found" },
}

const MergeJobForbiddenErrorExample = {
  summary: 'Not allowed to access this merge job',
  value: { code: 'permission_denied', message: 'Not allowed to access this merge job' },
}

const MergeDesignNotFoundErrorExample = {
  summary: 'Design not found for merge operation',
  value: { code: 'not_found', message: "Design '{designId}' not found" },
}

const DesignForbiddenErrorExample = {
  summary: 'Not allowed to access design',
  value: { code: 'permission_denied', message: "Not allowed to access design '{designId}'" },
}

const InvalidPageNumberErrorExample = {
  summary: 'Invalid page number',
  value: {
    code: 'bad_request_params',
    message: 'Page number {pageNumber} is out of range (design has {totalPages} pages)',
  },
}

const OperationNotSupportedErrorExample = {
  summary: 'Operation not supported',
  value: { code: 'bad_request_params', message: '{message}' },
}

const UnsupportedPageTypeErrorExample = {
  summary: 'Unsupported page type',
  value: {
    code: 'bad_request_params',
    message:
      "Source design '{designId}' has unsupported page type: {pageType}. Only fixed pages are supported.",
  },
}

const UnsupportedDocumentTypeErrorExample = {
  summary: 'Unsupported document type',
  value: {
    code: 'bad_request_params',
    message: "Design '{designId}' has unsupported document type: {documentType}.",
  },
}

const InvalidOperationErrorExample = {
  summary: 'Invalid operation',
  value: { code: 'bad_request_params', message: 'Invalid operation: {message}' },
}

const RequestTooLargeErrorExample = {
  summary: 'Request too large',
  value: {
    code: 'bad_request_params',
    message:
      'The request size exceeds the maximum allowed limit. Try reducing the number of pages per request, using simpler page content, or splitting into multiple smaller operations.',
  },
}

const UnauthorizedPrivateResourceErrorExample = {
  summary: 'Unauthorized access to private resource',
  value: {
    code: 'permission_denied',
    message: "Source design contains private resources that you don't have access to.",
  },
}

const InvalidTokenErrorExample = {
  summary: 'The token supplied is neither an access token nor a refresh token.',
  value: { code: 'bad_request_params', message: 'Token is neither an access or refresh token' },
}

const InvalidRequestErrorExample = {
  summary: 'The request is invalid.',
  value: { code: 'invalid_request', message: 'Invalid request' },
}

const UnauthorizedClientErrorExample = {
  summary: 'The client must be authenticated using basic auth or body parameters.',
  value: {
    code: 'unauthorized_client',
    message: 'The client must either be authenticated using basic auth or body parameters.',
  },
}

const InvalidRefreshTokenExample = {
  summary: 'The refresh token is invalid.',
  value: { code: 'invalid_grant', message: 'Invalid refresh token' },
}

const ClientIdBodyParamMultipleValuesExample = {
  summary: 'client_id body parameter has multiple values',
  value: { code: 'invalid_field', message: 'client_id body param must have a single value' },
}

const ClientIdBodyParamBlankExample = {
  summary: 'client_id body parameter is blank or empty',
  value: { code: 'invalid_field', message: 'client_id body param must not be blank or empty' },
}

const ClientSecretBodyParamMultipleValuesExample = {
  summary: 'client_secret body parameter has multiple values',
  value: { code: 'invalid_field', message: 'client_secret body param must have a single value' },
}

const ClientIdBasicAuthParamBlankExample = {
  summary: 'client_id basic auth parameter is blank or empty',
  value: {
    code: 'invalid_field',
    message: 'client_id basic auth parameter must not be blank or empty',
  },
}

const SecretBasicAuthParamBlankExample = {
  summary: 'secret basic auth parameter is blank or empty',
  value: {
    code: 'invalid_field',
    message: 'secret basic auth parameter must not be blank or empty',
  },
}

const BadRequestBodyTooLargeExample = {
  summary: 'Request body too large',
  value: { code: 'bad_request_body', message: 'Request body too large' },
}

const ClientSecretInvalidExample = {
  summary: 'Client secret is invalid (Unauthorized)',
  value: { code: 'invalid_access_token', message: 'Client secret is invalid for {clientAppId}' },
}

const AccessTokenMissingExample = {
  summary: 'Access token is missing',
  value: { code: 'invalid_access_token', message: 'Access token is missing' },
}

const TokenExchangeInvalidRequestExample = {
  summary: 'The token exchange request is invalid.',
  value: { code: 'invalid_request', message: '{description}' },
}

const TokenExchangeInvalidClientExample = {
  summary: 'The client credentials are invalid.',
  value: { code: 'invalid_client', message: '{description}' },
}

const TokenExchangeInvalidGrantExample = {
  summary: 'The provided authorization grant is invalid, expired, or revoked.',
  value: { code: 'invalid_grant', message: '{description}' },
}

const TokenExchangeUnauthorizedClientExample = {
  summary: 'The client is not authorized to use this grant type.',
  value: { code: 'unauthorized_client', message: '{description}' },
}

const TokenExchangeUnauthorizedUserExample = {
  summary: 'The user is not authorized.',
  value: { code: 'unauthorized_user', message: '{description}' },
}

const TokenExchangeUnsupportedGrantTypeExample = {
  summary: 'The grant type is not supported.',
  value: { code: 'unsupported_grant_type', message: '{description}' },
}

const TokenExchangeInvalidScopeExample = {
  summary: 'The requested scope is invalid, unknown, or malformed.',
  value: { code: 'invalid_scope', message: '{description}' },
}

const TooManyTokenExchangeRequestsExample = {
  summary: 'Too many token exchange requests.',
  value: { code: 'too_many_requests', message: 'Too many {grantType} requests' },
}

const InProgressResizeJobExampleExample = {
  summary: 'In progress job',
  value: { job: { id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72', status: 'in_progress' } },
}

const SuccessResizeJobExampleExample = {
  summary: 'Successfully completed job',
  value: {
    job: {
      id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72',
      status: 'success',
      result: {
        design: {
          id: 'DAGirp_1ZUA',
          title: 'My summer holiday',
          thumbnail: {
            width: 595,
            height: 335,
            url: 'https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>',
          },
          urls: {
            edit_url: 'https://www.canva.com/design/DAGhRehVa2c/0L_1s4UXSpZhls8EtPaRKw/edit',
            view_url: 'https://www.canva.com/design/DAGhRehVa2c/0L_1s4UXSpZhls8EtPaRKw/view',
          },
          created_at: 1742856750,
          updated_at: 1742856752,
          page_count: 5,
        },
        trial_information: {
          uses_remaining: 0,
          upgrade_url: 'https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W',
        },
      },
    },
  },
}

const FailedResizeJobExampleExample = {
  summary: 'Failed job',
  value: {
    job: {
      id: '450a76e7-f96f-43ae-9c37-0e1ce492ac72',
      status: 'failed',
      error: { code: 'design_resize_error', message: 'Failed to resize the design' },
    },
  },
}

const UnsupportedDesignTypeErrorExample = {
  summary: 'Unsupported design type',
  value: {
    code: 'bad_request_params',
    message: "Canva designs can't be resized to the selected design type: `{designTypeName}`",
  },
}

const MissingResizeCapabilityErrorExample = {
  summary: "The user's plan does not include the resize feature",
  value: {
    code: 'permission_denied',
    message: 'Not allowed to access createDesignResizeJob, requires one of capabilities [resize].',
  },
}

const InvalidDesignTypeInputErrorExample = {
  summary: 'The design type must be custom or preset',
  value: {
    code: 'bad_request_params',
    message:
      'Invalid design type provided. Design type must be one of custom or preset, but was {designType}',
  },
}

const DimensionsBelowMinimumErrorExample = {
  summary: 'The requested dimensions are below the minimum size',
  value: {
    code: 'invalid_request',
    message: 'width or height cannot be less than {minDimension}px',
  },
}

const DimensionsAboveMaximumErrorExample = {
  summary: 'The requested dimensions are above the maximum size',
  value: {
    code: 'invalid_request',
    message: 'width or height cannot be more than {maxDimension}px',
  },
}

const AreaAboveMaximumErrorExample = {
  summary: 'The requested dimensions exceed the maximum design area',
  value: {
    code: 'invalid_request',
    message: 'width and height is above the maximum allowed area for a design',
  },
}

const DesignNotResizableErrorExample = {
  summary: "The design can't be resized to the desired type",
  value: {
    code: 'bad_request_params',
    message: "The Canva design provided can't be resized to the desired type",
  },
}

const PageIndexOutOfBoundsErrorExample = {
  summary: 'The page number is out of bounds',
  value: { code: 'bad_request_params', message: 'The page number provided is out of bounds.' },
}

const ResponsivePagesNotSupportedErrorExample = {
  summary: "Responsive pages can't be resized",
  value: {
    code: 'bad_request_params',
    message: 'Responsive type pages are not supported to Magic Resize',
  },
}

const ControlledPagesNotSupportedErrorExample = {
  summary: "Controlled pages can't be resized",
  value: {
    code: 'bad_request_params',
    message: 'Controlled type pages are not supported to Magic Resize',
  },
}

const ResizeDesignNotFoundErrorExample = {
  summary: 'The design to resize was not found',
  value: { code: 'design_not_found', message: "Design with id '{designId}' not found" },
}

const DesignResizeNotAllowedErrorExample = {
  summary: 'Not allowed to resize the design',
  value: {
    code: 'permission_denied',
    message: 'Not allowed to resize document with ID {designId}',
  },
}

const ResizeJobNotFoundErrorExample = {
  summary: 'The design resize job was not found',
  value: { code: 'not_found', message: 'Job {jobId} not found' },
}

const FeatureQuotaExceededErrorExample = {
  summary: 'Feature quota exceeded',
  value: {
    code: 'quota_exceeded',
    message:
      'Free resize quota has been exceeded. Present the `upsell_url` to the user and prompt them to upgrade their Canva account to continue using the resize feature.',
    upsell_url: '{upsellUrl}',
  },
}

const UserNotFoundErrorExample = {
  summary: 'The user was not found.',
  value: { code: 'user_not_found', message: 'User not found' },
}

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const OauthAuthCodeSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://www.canva.com/api/oauth/authorize',
      scopes: {
        'design:content:read': "View the contents of the user's designs.",
        'design:meta:read': "View the metadata of the user's designs.",
        'design:content:write': "Create designs on the user's behalf.",
        'folder:read':
          "View the metadata and contents of the user's folders, including their **Projects**\nfolder.",
        'folder:write':
          "Add, move, or remove the user's folders. It also lets you edit folder metadata,\nsuch as the folder's name.",
        'folder:permission:write':
          "Set, update, or remove permissions assigned to the user's folders.",
        'asset:read': "View the metadata for the user's assets, such as uploaded images.",
        'asset:write': "Upload, update, or delete assets on the user's behalf.",
        'comment:read': "View the comments on the user's designs, and the associated metadata.",
        'comment:write': "Create comments and replies on the user's designs.",
        'collaboration:event': 'Receive webhook notifications about events relevant to the user.',
        'brandtemplate:meta:read':
          "View the metadata of the brand templates associated with the user's brand.",
        'brandtemplate:content:read':
          "Read the content of the brand templates associated with the user's brand.",
        'brandtemplate:content:write': "Publish brand templates associated with the user's brand.",
        'profile:read': "Read a user's profile and account information.",
        openid: 'Read user information through Open ID Connect (OIDC).',
        profile: 'Read user profile information through OIDC.',
        email: 'Read user email address through OIDC.',
      },
      tokenUrl: 'https://api.canva.com/rest/v1/oauth/token',
    },
  },
  type: 'oauth2',
}

export const getV1DesignsDesignIdAnalyticsRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/analytics',
  tags: ['analytics'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\n<Availability>\nTo use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.\n</Availability>\n\nGets the aggregated analytics for a design.\n\nThe response includes total views, unique viewers, and view duration metrics.",
  operationId: 'getDesignAnalytics',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignAnalyticsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_invalid_design_id: AnalyticsInvalidDesignIdErrorExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_access_token: InvalidAccessTokenExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_permission_denied: AnalyticsPermissionDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_design_not_found: AnalyticsDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { too_many_requests: TooManyRequestsErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1DesignsDesignIdAnalyticsViewersRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/analytics/viewers',
  tags: ['analytics'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\n<Availability>\nTo use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.\n</Availability>\n\nLists viewers for a design, ordered by most recent view first.",
  operationId: 'getDesignAnalyticsViewers',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      link_id: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters viewers by a specific trackable link. If omitted, only viewers who visited the design without using a trackable link are returned.',
            explode: true,
            in: 'query',
            name: 'link_id',
            required: false,
            schema: { example: 'hddb98a3716', pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'form',
          },
          example: 'hddb98a3716',
        }),
      first_viewed_after: z
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
            description:
              'Only returns viewers whose first view happened after this time, as a Unix timestamp (in seconds since the Unix Epoch).',
            explode: true,
            in: 'query',
            name: 'first_viewed_after',
            required: false,
            schema: { example: 1745452800, format: 'int64', type: 'integer' },
            style: 'form',
          },
          example: 1745452800,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of viewers to return per page.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 50,
              example: 50,
              format: 'int32',
              maximum: 100,
              minimum: 1,
              type: 'integer',
            },
            style: 'form',
          },
          example: 50,
        }),
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the success response contains a continuation token, there are more viewers you can list. You can use this token as a query parameter and retrieve more viewers from the list, for example `/v1/designs/{designId}/analytics/viewers?continuation={continuation}`.\n\nTo retrieve all viewers, you might need to make multiple requests.',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: {
              example:
                'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
              type: 'string',
            },
            style: 'form',
          },
          example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignAnalyticsViewersResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            analytics_invalid_query_parameter: ExpectedLongQueryParamExample,
            analytics_invalid_continuation_token: AnalyticsInvalidContinuationErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_access_token: InvalidAccessTokenExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_permission_denied: AnalyticsPermissionDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_design_not_found: AnalyticsDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { too_many_requests: TooManyRequestsErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1DesignsDesignIdAnalyticsViewsOverTimeRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/analytics/views-over-time',
  tags: ['analytics'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\n<Availability>\nTo use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.\n</Availability>\n\nLists the view counts over time for a design.\n\nEach response item represents one time bucket.",
  operationId: 'getDesignAnalyticsViewsOverTime',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      start_time: z
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
            description:
              'The inclusive start of the requested time range, as a Unix timestamp (in seconds since the Unix Epoch).',
            explode: true,
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { example: 1745452800, format: 'int64', type: 'integer' },
            style: 'form',
          },
          example: 1745452800,
        }),
      end_time: z
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
            description:
              'The inclusive end of the requested time range, as a Unix timestamp (in seconds since the Unix Epoch).',
            explode: true,
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { example: 1748044800, format: 'int64', type: 'integer' },
            style: 'form',
          },
          example: 1748044800,
        }),
      timezone: z
        .string()
        .default('+00:00')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timezone to use for bucketing, as a UTC offset in the form `+HH:MM` (for example, `+10:00`).',
            explode: true,
            in: 'query',
            name: 'timezone',
            required: false,
            schema: { default: '+00:00', example: '600', type: 'string' },
            style: 'form',
          },
          example: '600',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of time buckets to return per page.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 50,
              example: 50,
              format: 'int32',
              maximum: 100,
              minimum: 1,
              type: 'integer',
            },
            style: 'form',
          },
          example: 50,
        }),
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the success response contains a continuation token, there are more time buckets you can list. You can use this token as a query parameter and retrieve more time buckets from the list, for example `/v1/designs/{designId}/analytics/views-over-time?continuation={continuation}`.\n\nTo retrieve all time buckets, you might need to make multiple requests.',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: {
              example:
                'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
              type: 'string',
            },
            style: 'form',
          },
          example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignAnalyticsViewsOverTimeResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            analytics_invalid_query_parameter: ExpectedLongQueryParamExample,
            analytics_invalid_time_range: AnalyticsInvalidTimeRangeErrorExample,
            analytics_invalid_timezone: AnalyticsInvalidTimezoneErrorExample,
            analytics_invalid_continuation_token: AnalyticsInvalidContinuationErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_access_token: InvalidAccessTokenExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_permission_denied: AnalyticsPermissionDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_design_not_found: AnalyticsDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { too_many_requests: TooManyRequestsErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const postV1DesignsDesignIdAnalyticsPageViewsRoute = createRoute({
  method: 'post',
  path: '/v1/designs/{designId}/analytics/page-views',
  tags: ['analytics'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\n<Availability>\nTo use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.\n</Availability>\n\nLists the page-level view duration data for a design.\n\nThe request body can include page filters and pagination controls.",
  operationId: 'getDesignAnalyticsPageViews',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDesignAnalyticsPageViewsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignAnalyticsPageViewsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            analytics_invalid_request_body: FailedToReadRequestBodyExample,
            analytics_invalid_page_views_filter: AnalyticsInvalidPageViewsFilterErrorExample,
            analytics_invalid_continuation_token: AnalyticsInvalidContinuationErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_access_token: InvalidAccessTokenExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_permission_denied: AnalyticsPermissionDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_design_not_found: AnalyticsDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { too_many_requests: TooManyRequestsErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1DesignsDesignIdAnalyticsLinksRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/analytics/links',
  tags: ['analytics'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\n<Availability>\nTo use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.\n</Availability>\n\nLists trackable links and their metrics for a design.",
  operationId: 'getDesignAnalyticsLinks',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
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
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of links to return per page.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 50,
              example: 50,
              format: 'int32',
              maximum: 100,
              minimum: 1,
              type: 'integer',
            },
            style: 'form',
          },
          example: 50,
        }),
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the success response contains a continuation token, there are more links you can list. You can use this token as a query parameter and retrieve more links from the list, for example `/v1/designs/{designId}/analytics/links?continuation={continuation}`.\n\nTo retrieve all links, you might need to make multiple requests.',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: {
              example:
                'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
              type: 'string',
            },
            style: 'form',
          },
          example: 'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignAnalyticsLinksResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            analytics_invalid_query_parameter: ExpectedLongQueryParamExample,
            analytics_invalid_continuation_token: AnalyticsInvalidContinuationErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_access_token: InvalidAccessTokenExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_permission_denied: AnalyticsPermissionDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { analytics_design_not_found: AnalyticsDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { too_many_requests: TooManyRequestsErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1AppsAppIdJwksRoute = createRoute({
  method: 'get',
  path: '/v1/apps/{appId}/jwks',
  tags: ['app'],
  description:
    'Returns the Json Web Key Set (public keys) of an app. These keys are used to\nverify JWTs sent to app backends.',
  operationId: 'getAppJwks',
  request: {
    params: z.object({
      appId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The app ID.',
            explode: false,
            in: 'path',
            name: 'appId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetAppJwksResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { auth_keys_not_found: AuthKeysNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1AssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/v1/assets/{assetId}',
  tags: ['asset'],
  description: 'You can retrieve the metadata of an asset by specifying its `assetId`.',
  operationId: 'getAsset',
  request: {
    params: z.object({
      assetId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the asset.',
            explode: false,
            in: 'path',
            name: 'assetId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GetAssetResponseSchema } } },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_access_not_allowed: AssetAccessNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_not_found: AssetNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:read'] }],
})

export const deleteV1AssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/v1/assets/{assetId}',
  tags: ['asset'],
  description:
    "You can delete an asset by specifying its `assetId`. This operation mirrors the behavior\nin the Canva UI. Deleting an item moves it to the trash.\nDeleting an asset doesn't remove it from designs that already use it.",
  operationId: 'deleteAsset',
  request: {
    params: z.object({
      assetId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the asset.',
            explode: false,
            in: 'path',
            name: 'assetId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_delete_not_allowed: AssetDeleteNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_not_found: AssetNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:write'] }],
})

export const patchV1AssetsAssetIdRoute = createRoute({
  method: 'patch',
  path: '/v1/assets/{assetId}',
  tags: ['asset'],
  description:
    'You can update the name and tags of an asset by specifying its `assetId`. Updating the tags\nreplaces all existing tags of the asset.',
  operationId: 'updateAsset',
  request: {
    params: z.object({
      assetId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the asset.',
            explode: false,
            in: 'path',
            name: 'assetId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAssetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateAssetResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_update_not_allowed: AssetUpdateNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_not_found: AssetNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:write'] }],
})

export const postV1AssetUploadsRoute = createRoute({
  method: 'post',
  path: '/v1/asset-uploads',
  tags: ['asset'],
  description:
    "Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to upload an asset to the user's content library. Supported file types for assets are listed in the [Assets API overview](https://www.canva.dev/docs/apps/rest-apis/reference/assets/).\n\nThe request format for this endpoint is an `application/octet-stream` body of bytes. Attach\ninformation about the upload using an `Asset-Upload-Metadata` header.\n\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of asset upload jobs created with this API using the [Get asset upload job API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-asset-upload-job/).\n\n</Note>",
  operationId: 'CreateAssetUploadJob',
  request: {
    headers: z.object({
      'Asset-Upload-Metadata': z.preprocess(
        (val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        },
        AssetUploadMetadataSchema.openapi({
          param: {
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/AssetUploadMetadata' } },
            },
            in: 'header',
            name: 'Asset-Upload-Metadata',
            required: true,
          },
        }),
      ),
    }),
    body: {
      description: 'Binary of the asset to upload.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateAssetUploadJobResponseSchema,
          examples: {
            in_progress: InProgressAssetUploadJobExampleExample,
            success: SuccessAssetUploadJobExampleExample,
            failed: FailedAssetUploadJobExampleExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:write'] }],
})

export const getV1AssetUploadsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/asset-uploads/{jobId}',
  tags: ['asset'],
  description:
    'Get the result of an asset upload job that was created using the [Create asset upload job API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/create-asset-upload-job/).\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).',
  operationId: 'GetAssetUploadJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The asset upload job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetAssetUploadJobResponseSchema,
          examples: {
            in_progress: InProgressAssetUploadJobExampleExample,
            success: SuccessAssetUploadJobExampleExample,
            failed: FailedAssetUploadJobExampleExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            asset_access_not_allowed: AssetAccessNotAllowedErrorExample,
            asset_upload_job_not_creator: AssetUploadJobNotCreatorErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            asset_not_found: AssetNotFoundErrorExample,
            asset_upload_job_not_found: AssetUploadJobNotFoundErrorExample,
            job_id_not_found: AssetJobIdNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:read'] }],
})

export const postV1UrlAssetUploadsRoute = createRoute({
  method: 'post',
  path: '/v1/url-asset-uploads',
  tags: ['asset'],
  description:
    "Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to upload an asset from a URL to the user's content library. Supported file types for assets are listed in the [Assets API overview](https://www.canva.dev/docs/apps/rest-apis/reference/assets/).\n\n<Note>\n Uploading a video asset from a URL is limited to a maximum 100MB file size. For importing larger video files, use the [Create asset upload job API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/create-asset-upload-job/).\n</Note>\n\n<Note>\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of asset upload jobs created with this API using the [Get asset upload job via URL API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-url-asset-upload-job/).\n</Note>",
  operationId: 'createUrlAssetUploadJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreateUrlAssetUploadJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateUrlAssetUploadJobResponseSchema,
          examples: {
            in_progress: InProgressAssetUploadJobExampleExample,
            success: SuccessAssetUploadJobExampleExample,
            failed: FailedAssetUploadJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            url_invalid: AssetUrlInvalidErrorExample,
            asset_upload_already_exists: AssetUploadAlreadyExistsErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_with_id_not_found: AssetJobWithIdNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:write'] }],
})

export const getV1UrlAssetUploadsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/url-asset-uploads/{jobId}',
  tags: ['asset'],
  description:
    'Get the result of an asset upload job that was created using the [Create asset upload job via URL API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/create-url-asset-upload-job/).\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).',
  operationId: 'getUrlAssetUploadJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The asset upload job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetUrlAssetUploadJobResponseSchema,
          examples: {
            in_progress: InProgressAssetUploadJobExampleExample,
            success: SuccessAssetUploadJobExampleExample,
            failed: FailedAssetUploadJobExampleExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { get_this_job_status_not_allowed: GetThisJobStatusNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_not_found: AssetJobNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:read'] }],
})

export const postV1AutofillsRoute = createRoute({
  method: 'post',
  path: '/v1/autofills',
  tags: ['autofill'],
  description:
    "<Availability>\nAutofill for designs and brand templates is available when your app acts on behalf of a user on Canva Pro (including Canva Education and Canva for Nonprofits), Canva Teams, or Canva Enterprise. Usage limits will be introduced in the future.\n</Availability>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to autofill a Canva design using input data. Use the `type` field to choose the source of the design:\n\n- `create_from_brand_template`: autofill a new design from a brand template. If `type` isn't specified in the request, the request type is assumed to be `create_from_brand_template`. To get a list of input data fields for a brand template, use the [Get brand template dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/get-brand-template-dataset/).\n- `create_from_design`: autofill a new design from an existing design that contains autofill data fields. To get the input data fields for an existing design, use the [Get design dataset\nAPI](https://www.canva.dev/docs/apps/rest-apis/reference/designs/get-design-dataset/).\n- `update_design`: autofill an existing design in place, rather than creating a new design. To get the input data fields for the design, use the [Get design dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/get-design-dataset/).\n\nData fields in brand templates or designs might change (for example, they might be renamed or removed). If you provide data for a field name that doesn't exist, it's silently skipped. Use the Get dataset APIs to confirm the current fields before creating an autofill job.\n\nAvailable data field types to autofill include:\n\n- Images (which you can autofill with an image or a video asset)\n- Text\n- Charts\n- Sheets\n\nNOTE: For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of autofill jobs created with this API using the [Get design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/get-design-autofill-job/).",
  operationId: 'createDesignAutofillJob',
  request: {
    body: { content: { 'application/json': { schema: CreateDesignAutofillJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateDesignAutofillJobResponseSchema,
          examples: {
            in_progress: InProgressAutofillJobExampleExample,
            success: SuccessAutofillJobExampleExample,
            failed: FailedAutofillJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_title_invalid: DesignTitleInvalidErrorExample,
            chart_data_processing_unsupported: ChartDataProcessingUnsupportedErrorExample,
            invalid_brand_template_id: InvalidBrandTemplateIdErrorExample,
            design_not_fillable: DesignNotFillableErrorExample,
            autofill_data_invalid: AutofillDataInvalidErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            brand_template_forbidden: BrandTemplateForbiddenErrorExample,
            autofill_design_forbidden: AutofillDesignForbiddenErrorExample,
            autofill_feature_forbidden: AutofillFeatureForbiddenErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            brand_template_not_found: BrandTemplateNotFoundErrorExample,
            autofill_design_not_found: AutofillDesignNotFoundErrorExample,
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: FeatureQuotaExceededErrorSchema,
          examples: { autofill_feature_quota_exceeded: AutofillFeatureQuotaExceededErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1AutofillsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/autofills/{jobId}',
  tags: ['autofill'],
  description:
    '<Availability>\nAutofill for designs and brand templates is available when your app acts on behalf of a user on Canva Pro (including Canva Education and Canva for Nonprofits), Canva Teams, or Canva Enterprise. Usage limits will be introduced in the future.\n</Availability>\n\nGet the result of a design autofill job that was created using the [Create design autofill job\nAPI](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).',
  operationId: 'getDesignAutofillJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design autofill job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetDesignAutofillJobResponseSchema,
          examples: {
            in_progress: InProgressAutofillJobExampleExample,
            success: SuccessAutofillJobExampleExample,
            failed: FailedAutofillJobExampleExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_autofill_job_forbidden: DesignAutofillJobForbiddenErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_autofill_job_not_found: DesignAutofillJobNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:meta:read'] }],
})

export const getV1BrandTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/brand-templates',
  tags: ['brand_template'],
  description:
    "AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise).\n\nGet a list of the [brand templates](https://www.canva.com/help/publish-team-template/) the user has access to.",
  operationId: 'listBrandTemplates',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Lets you search the brand templates available to the user using a search term or terms.',
            explode: true,
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the success response contains a continuation token, the user has access to more\nbrand templates you can list. You can use this token as a query parameter and retrieve\nmore templates from the list, for example\n`/v1/brand-templates?continuation={continuation}`.\nTo retrieve all the brand templates available to the user, you might need to make\nmultiple requests.',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
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
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of brand templates to return.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      ownership: OwnershipTypeSchema.openapi({
        param: {
          description:
            "Filter the list of brand templates based on the user's ownership of the brand templates.",
          explode: true,
          in: 'query',
          name: 'ownership',
          required: false,
          schema: { $ref: '#/components/schemas/OwnershipType' },
          style: 'form',
        },
      }).exactOptional(),
      sort_by: SortByTypeSchema.openapi({
        param: {
          description: 'Sort the list of brand templates.',
          explode: true,
          in: 'query',
          name: 'sort_by',
          required: false,
          schema: { $ref: '#/components/schemas/SortByType' },
          style: 'form',
        },
      }).exactOptional(),
      dataset: DatasetFilterSchema.openapi({
        param: {
          description:
            "Filter the list of brand templates based on the brand templates' dataset definitions.\nBrand templates with dataset definitions are mainly used with the [Autofill APIs](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/).",
          explode: true,
          in: 'query',
          name: 'dataset',
          required: false,
          schema: { $ref: '#/components/schemas/DatasetFilter' },
          style: 'form',
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListBrandTemplatesResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_continuation: InvalidContinuationErrorExample,
            design_type_not_available: DesignTypeNotAvailableErrorExample,
            unable_to_fetch_designs: UnableToFetchDesignsErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            find_brand_templates_forbidden: FindBrandTemplatesForbiddenErrorExample,
            not_allowed_to_access_design_list: ListDesignsForbiddenErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['brandtemplate:meta:read'] }],
})

export const postV1BrandTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1/brand-templates',
  tags: ['brand_template'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nAVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise). Additionally, the user must have one of the following [roles](https://www.canva.com/help/roles-and-permissions/): Team admin, Brand designer, Organization admin, or Organization designer.\n\nPublishes a design as a [brand template](https://www.canva.com/help/publish-team-template/). Brand templates are design templates that can be shared across a team for consistent content creation.\n\nThis API supports two workflows:\n\n- **Initial publish**: If the design is not linked to an existing brand template, a new brand template is created.\n- **Republish**: If the design is a draft of an existing brand template (created by editing an existing template), the existing template is updated with the changes.\n\nThe API returns the published brand template immediately.\n\n<Note>\nThe `thumbnail` field might be `null` immediately after publishing, as thumbnails are generated asynchronously. You can use the [Get brand template API](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/get-brand-template/) to retrieve the thumbnail once it's ready. The brand template's `view_url` and `create_url` are available immediately.\n</Note>",
  operationId: 'publishBrandTemplate',
  request: {
    body: {
      content: { 'application/json': { schema: PublishBrandTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PublishBrandTemplateResponseSchema,
          examples: { success: PublishBrandTemplateSuccessExampleExample },
        },
      },
    },
    400: {
      description: 'Bad Request - includes validation errors and other bad request errors',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_design_id: InvalidDesignIdErrorExample,
            resource_limit_exceeded: ResourceLimitExceededErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { publish_permission_denied: PublishPermissionDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            publish_brand_template_design_not_found: PublishBrandTemplateDesignNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['brandtemplate:content:write'] }],
})

export const getV1BrandTemplatesBrandTemplateIdRoute = createRoute({
  method: 'get',
  path: '/v1/brand-templates/{brandTemplateId}',
  tags: ['brand_template'],
  description:
    "AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise).\n\nRetrieves the metadata for a brand template.",
  operationId: 'getBrandTemplate',
  request: {
    params: z.object({
      brandTemplateId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The brand template ID.',
            explode: false,
            in: 'path',
            name: 'brandTemplateId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetBrandTemplateResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            get_brand_template_permission_denied: GetBrandTemplatePermissionDeniedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { get_brand_template_not_found: GetBrandTemplateNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['brandtemplate:meta:read'] }],
})

export const getV1BrandTemplatesBrandTemplateIdDatasetRoute = createRoute({
  method: 'get',
  path: '/v1/brand-templates/{brandTemplateId}/dataset',
  tags: ['brand_template'],
  description:
    "AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise).\n\nGets the dataset definition of a brand template. If the brand\ntemplate contains autofill data fields, this API returns an object with the data field\nnames and the type of data they accept.\n\n<Note>\n\nTo get the dataset definition of a design, use the\n[Get design dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/get-design-dataset/).\n\n</Note>\n\nAvailable data field types include:\n\n- Images (which you can autofill with an image or a video asset)\n- Text\n- Charts\n- Sheets\n\nYou can autofill a brand template using the [Create a design autofill job\nAPI](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).",
  operationId: 'getBrandTemplateDataset',
  request: {
    params: z.object({
      brandTemplateId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The brand template ID.',
            explode: false,
            in: 'path',
            name: 'brandTemplateId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetBrandTemplateDatasetResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            get_brand_template_dataset_permission_denied:
              GetBrandTemplateDatasetPermissionDeniedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            get_brand_template_dataset_not_found: GetBrandTemplateDatasetNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['brandtemplate:content:read'] }],
})

export const postV1CommentsRoute = createRoute({
  method: 'post',
  path: '/v1/comments',
  tags: ['comment'],
  description:
    "<Warning>\n\nThis preview API is deprecated. You should use the [Create thread](https://www.canva.dev/docs/apps/rest-apis/reference/comments/create-thread/) API instead.\n\n</Warning>\n\nCreate a new top-level comment on a design.\nFor information on comments and how they're used in the Canva UI, see the\n[Canva Help Center](https://www.canva.com/help/comments/). A design can have a maximum\nof 1000 comments.",
  operationId: 'createComment',
  request: {
    body: {
      content: { 'application/json': { schema: CreateCommentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateCommentResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            assignee_not_mentioned: AssigneeNotMentionedErrorExample,
            message_too_long: MessageTooLongErrorExample,
            invalid_mention_ids: InvalidMentionIdsErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            too_many_comments: TooManyCommentsErrorExample,
            not_allowed_to_comment: NotAllowedToCommentErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_not_found: DesignNotFoundErrorExample,
            mentioned_user_not_found: MentionedUserNotFoundErrorExample,
            mentioned_team_not_found: MentionedTeamNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ oauthAuthCode: ['comment:write'] }],
})

export const getV1DesignsDesignIdCommentsThreadIdRepliesRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/comments/{threadId}/replies',
  tags: ['comment'],
  description:
    "<Warning>\nThis API is currently provided as a preview. Be aware of the following:\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n</Warning>\n\nRetrieves a list of replies for a comment or suggestion thread on a design.\n\nFor information on comments and how they're used in the Canva UI, see the\n[Canva Help Center](https://www.canva.com/help/comments/).",
  operationId: 'listReplies',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
      threadId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the thread.',
            example: 'KeAbiEAjZEj',
            explode: false,
            in: 'path',
            name: 'threadId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
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
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 50,
              description: 'The number of replies to return.',
              format: 'int32',
              maximum: 100,
              minimum: 1,
              type: 'integer',
            },
            style: 'form',
          },
          description: 'The number of replies to return.',
        }),
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the success response contains a continuation token, the list contains more items you can list. You can use this token as a query parameter and retrieve more items from the list, for example `?continuation={continuation}`.\n\nTo retrieve all items, you might need to make multiple requests.',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListRepliesResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { not_allowed_to_fetch_replies: NotAllowedToFetchRepliesErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_or_thread_not_found: DesignOrThreadNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['comment:read'] }],
})

export const postV1DesignsDesignIdCommentsThreadIdRepliesRoute = createRoute({
  method: 'post',
  path: '/v1/designs/{designId}/comments/{threadId}/replies',
  tags: ['comment'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nCreates a reply to a comment or suggestion thread on a design.\nTo reply to an existing thread, you must provide the ID of the thread\nwhich is returned when a thread is created, or from the `thread_id` value\nof an existing reply in the thread. Each thread can\nhave a maximum of 100 replies created for it.\n\nFor information on comments and how they're used in the Canva UI, see the\n[Canva Help Center](https://www.canva.com/help/comments/).",
  operationId: 'createReply',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
      threadId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the thread.',
            example: 'KeAbiEAjZEj',
            explode: false,
            in: 'path',
            name: 'threadId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateReplyV2RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateReplyV2ResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            message_too_long: MessageTooLongErrorExample,
            invalid_mention_ids: InvalidMentionIdsErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            too_many_replies: TooManyRepliesErrorExample,
            not_allowed_to_reply: NotAllowedToReplyErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_or_comment_not_found: DesignOrCommentNotFoundForReplyErrorExample,
            mentioned_user_not_found: MentionedUserNotFoundErrorExample,
            mentioned_team_not_found: MentionedTeamNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['comment:write'] }],
})

export const getV1DesignsDesignIdCommentsThreadIdRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/comments/{threadId}',
  tags: ['comment'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets a comment or suggestion thread on a design.\nTo retrieve a reply to a comment thread, use the [Get reply](https://www.canva.dev/docs/apps/rest-apis/reference/comments/get-reply/) API.\nFor information on comments and how they're used in the Canva UI, see the\n[Canva Help Center](https://www.canva.com/help/comments/).",
  operationId: 'getThread',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
      threadId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the thread.',
            example: 'KeAbiEAjZEj',
            explode: false,
            in: 'path',
            name: 'threadId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetThreadResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            not_allowed_to_fetch_comment: NotAllowedToFetchCommentErrorExample,
            not_allowed_to_fetch_suggestion: NotAllowedToFetchSuggestionErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            thread_not_found: ThreadNotFoundErrorExample,
            thread_not_attached_to_design: ThreadNotAttachedToDesignErrorExample,
            suggestion_not_found: SuggestionNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['comment:read'] }],
})

export const getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/comments/{threadId}/replies/{replyId}',
  tags: ['comment'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets a reply to a comment or suggestion thread on a design.\nFor information on comments and how they're used in the Canva UI, see the\n[Canva Help Center](https://www.canva.com/help/comments/).",
  operationId: 'getReply',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
      threadId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the thread.',
            example: 'KeAbiEAjZEj',
            explode: false,
            in: 'path',
            name: 'threadId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
      replyId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the reply.',
            example: 'KeAZEAjijEb',
            explode: false,
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GetReplyResponseSchema } } },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { not_allowed_to_fetch_reply: NotAllowedToFetchReplyErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            reply_not_found: ReplyNotFoundErrorExample,
            suggestion_reply_not_found: SuggestionReplyNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['comment:read'] }],
})

export const postV1DesignsDesignIdCommentsRoute = createRoute({
  method: 'post',
  path: '/v1/designs/{designId}/comments',
  tags: ['comment'],
  description:
    "<Warning>\nThis API is currently provided as a preview. Be aware of the following:\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n</Warning>\n\nCreates a new comment thread on a design.\nFor information on comments and how they're used in the Canva UI, see the\n[Canva Help Center](https://www.canva.com/help/comments/).",
  operationId: 'createThread',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateThreadRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateThreadResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            assignee_not_mentioned: AssigneeNotMentionedErrorExample,
            message_too_long: MessageTooLongErrorExample,
            invalid_mention_ids: InvalidMentionIdsErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            too_many_comments: TooManyCommentsErrorExample,
            not_allowed_to_comment: NotAllowedToCommentErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_not_found: DesignNotFoundErrorExample,
            mentioned_user_not_found: MentionedUserNotFoundErrorExample,
            mentioned_team_not_found: MentionedTeamNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['comment:write'] }],
})

export const getV1ConnectKeysRoute = createRoute({
  method: 'get',
  path: '/v1/connect/keys',
  tags: ['connect'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nThe Keys API (`connect/keys`) is a security measure you can use to verify the authenticity\nof webhooks you receive from the Canva REST APIs. The Keys API returns a\n[JSON Web Key (JWK)](https://www.rfc-editor.org/rfc/rfc7517#section-2), which you can use to\ndecrypt the webhook signature and verify it came from Canva and not a potentially malicious\nactor. This helps to protect your systems from\n[Replay attacks](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/).\n\nThe keys returned by the Keys API can rotate. We recommend you cache the keys you receive\nfrom this API where possible, and only access this API when you receive a webhook signed\nwith an unrecognized key. This allows you to verify webhooks quicker than accessing this API\nevery time you receive a webhook.",
  operationId: 'getSigningPublicKeys',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetSigningPublicKeysResponseSchema } },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1DesignsRoute = createRoute({
  method: 'get',
  path: '/v1/designs',
  tags: ['design'],
  description:
    "Lists metadata for all the designs in a Canva user's\n[projects](https://www.canva.com/help/find-designs-and-folders/). You can also:\n\n- Use search terms to filter the listed designs.\n- Show designs either created by, or shared with the user.\n- Sort the results.",
  operationId: 'listDesigns',
  request: {
    query: z.object({
      query: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Lets you search the user's designs, and designs shared with the user, using a search term or terms.",
            example: 'party invites',
            explode: true,
            in: 'query',
            name: 'query',
            required: false,
            schema: { maxLength: 255, type: 'string' },
            style: 'form',
          },
        }),
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If the success response contains a continuation token, the list contains more designs\nyou can list. You can use this token as a query parameter and retrieve more\ndesigns from the list, for example\n`/v1/designs?continuation={continuation}`.\n\nTo retrieve all of a user's designs, you might need to make multiple requests.",
            example:
              'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      ownership: OwnershipTypeSchema.openapi({
        param: {
          description: "Filter the list of designs based on the user's ownership of the designs.",
          example: 'any',
          explode: true,
          in: 'query',
          name: 'ownership',
          required: false,
          schema: { $ref: '#/components/schemas/OwnershipType' },
          style: 'form',
        },
      }).exactOptional(),
      sort_by: SortByTypeSchema.openapi({
        param: {
          description: 'Sort the list of designs.',
          example: 'relevance',
          explode: true,
          in: 'query',
          name: 'sort_by',
          required: false,
          schema: { $ref: '#/components/schemas/SortByType' },
          style: 'form',
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
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of designs to return.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetListDesignResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_continuation: InvalidContinuationErrorExample,
            invalid_ownership: InvalidOwnershipErrorExample,
            invalid_sort_by: InvalidSortByErrorExample,
            design_type_not_available: DesignTypeNotAvailableErrorExample,
            unable_to_fetch_designs: UnableToFetchDesignsErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            not_allowed_to_access_design_list: ListDesignsForbiddenErrorExample,
            find_documents_forbidden: FindDocumentsForbiddenErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:meta:read'] }],
})

export const postV1DesignsRoute = createRoute({
  method: 'post',
  path: '/v1/designs',
  tags: ['design'],
  description:
    "Creates a new Canva design. To create a new design, you can:\n\n- Use a preset design type.\n- Set height and width dimensions for a custom design.\n\n  NOTE: Custom designs can have a maximum area of 25,000,000 pixels squared (for example, 5000 × 5000 pixels). Each dimension can be between 40 and 8000 pixels, but the total area must stay within this limit.\n- Create a copy of an existing design (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).\n- Create a new design from a brand template (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).\n\nFor preset and custom designs, you can also provide the `asset_id` of an asset in the user's [projects](https://www.canva.com/help/find-designs-and-folders/) to add to the new design. Currently, this only supports image assets. To list the assets in a folder in the user's projects, use the [List folder items API](https://www.canva.dev/docs/apps/rest-apis/reference/folders/list-folder-items/).\n\nAn asset provided this way is placed in the design as a single flat image, which the user can move, resize, or replace, but not edit as separate elements. If you want the elements of an image to become separate editable layers in the design, use the [Create image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-image-to-design-import-job/) instead.\n\nNOTE: Blank designs created with this API are automatically deleted if they're not edited within 7 days. These blank designs bypass the user's Canva trash and are permanently deleted.",
  operationId: 'createDesign',
  request: { body: { content: { 'application/json': { schema: CreateDesignRequestSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateDesignResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_design_type: InvalidDesignTypeErrorExample,
            missing_design_type_or_asset_id: MissingDesignTypeOrAssetIdErrorExample,
            blank_design_id: BlankDesignIdErrorExample,
            blank_brand_template_id: BlankBrandTemplateIdErrorExample,
            asset_id_not_image: AssetIdNotImageErrorExample,
            invalid_design_dimensions: InvalidDesignDimensionsErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            asset_access_not_allowed: AssetAccessNotAllowedErrorExample,
            get_design_dataset_permission_denied: GetDesignDatasetPermissionDeniedErrorExample,
            create_design_brand_template_access_denied:
              CreateDesignBrandTemplateAccessDeniedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            create_design_not_found: CreateDesignNotFoundErrorExample,
            create_brand_template_not_found: CreateBrandTemplateNotFoundErrorExample,
            asset_not_found: AssetNotFoundErrorExample,
            design_id_not_found: DesignIdNotFoundErrorExample,
            ref_design_type_not_found: RefDesignTypeNotFoundErrorExample,
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_creation_throttled: CreateDesignThrottledErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1DesignsDesignIdRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}',
  tags: ['design'],
  description:
    'Gets the metadata for a design. This includes owner information, URLs for editing and viewing, and thumbnail information.',
  operationId: 'getDesign',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_access_forbidden: DesignAccessForbiddenErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_id_not_found: DesignIdNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:meta:read'] }],
})

export const getV1DesignsDesignIdPagesRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/pages',
  tags: ['design'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nLists metadata for pages in a design, such as page-specific thumbnails.\n\nFor the specified design, you can provide `offset` and `limit` values to specify the range of pages to return.\n\nNOTE: Some design types don't have pages (for example, Canva docs).",
  operationId: 'getDesignPages',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page index to start the range of pages to return.\n\nPages are indexed using one-based numbering, so the first page in a design has the index value `1`.\n',
            explode: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 1, format: 'int32', maximum: 500, minimum: 1, type: 'integer' },
            style: 'form',
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
          z.int32().min(1).max(200),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of pages to return, starting at the page index specified using the `offset` parameter.',
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', maximum: 200, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignPagesResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_has_no_pages: DesignHasNoPagesErrorExample,
            offset_too_large: DesignPagesOffsetTooLargeErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_access_forbidden: DesignAccessForbiddenErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_id_not_found: DesignIdNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1DesignsDesignIdExportFormatsRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/export-formats',
  tags: ['design'],
  description:
    'Lists the available file formats for [exporting a design](https://www.canva.dev/docs/apps/rest-apis/reference/exports/create-design-export-job/).\n\n<Note>\nThe available export formats depend on the design type and the types of pages in the design.\nEach format includes the page numbers that support it. If a format is supported by every page in the design, its `page_numbers` are omitted.\n</Note>',
  operationId: 'getDesignExportFormats',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignExportFormatsResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_access_denied: DesignAccessDeniedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_id_not_found: DesignIdNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1DesignsDesignIdDatasetRoute = createRoute({
  method: 'get',
  path: '/v1/designs/{designId}/dataset',
  tags: ['design'],
  description:
    'Gets the dataset definition of a design. If the design contains autofill data fields, this API\nreturns an object with the data field names and the type of data they accept.\n\n<Note>\n\nTo get the dataset definition of a brand template, use the\n[Get brand template dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/get-brand-template-dataset/).\n\n</Note>\n\nAvailable data field types include:\n\n- Images (which you can autofill with an image or a video asset)\n- Text\n- Charts\n- Sheets\n\nUse the returned field names and types to build the `data` payload for the\n[Create a design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/)\nwith `type: create_from_design`.',
  operationId: 'getDesignDataset',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignDatasetResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            get_design_dataset_permission_denied: GetDesignDatasetPermissionDeniedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { get_design_dataset_not_found: GetDesignDatasetDesignNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const postV1PrintPartnerDesignsRoute = createRoute({
  method: 'post',
  path: '/v1/print-partner/designs',
  tags: ['design'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nAVAILABILITY: This API is only available to Print Partners.\n\nCreates a new Canva design using a Print Partner product ID.\n\nPrint partner proofing information (such as bleed and page constraints) can optionally be provided in the request. The design URLs that are returned include this information, which Canva applies in the editor when opening the design.\n\nNOTE: Blank designs created with this API are automatically deleted if they're not edited within 7 days. These blank designs bypass the user's Canva trash and are permanently deleted.",
  operationId: 'createPrintPartnerDesign',
  request: {
    body: { content: { 'application/json': { schema: CreatePrintPartnerDesignRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreatePrintPartnerDesignResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_design_dimensions: InvalidDesignDimensionsErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            create_print_partner_design_forbidden: CreatePrintPartnerDesignForbiddenErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { product_size_not_found: ProductSizeNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_creation_throttled: CreateDesignThrottledErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1PrintPartnerDesignsDesignIdRoute = createRoute({
  method: 'get',
  path: '/v1/print-partner/designs/{designId}',
  tags: ['design'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nAVAILABILITY: This API is only available to Print Partners.\n\nGets the metadata for a design. This includes owner information, URLs for editing and viewing, and thumbnail information.\n\nPrint partner proofing information (such as bleed and page constraints) isn't stored on Canva, so you can optionally provide it in the request. The design URLs that are returned include this information, which Canva applies in the editor when opening the design.",
  operationId: 'getPrintPartnerDesign',
  request: {
    params: z.object({
      designId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design ID.',
            explode: false,
            in: 'path',
            name: 'designId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      bleed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(150000),
        )
        .default(3000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Bleed in microns to apply around the design in the editor. Bleed is the area\noutside the trim line used to avoid white edges after cutting. Use 0 for no bleed. If bleed is not\nspecified, a default of 3000 microns is used.',
            explode: true,
            in: 'query',
            name: 'bleed',
            required: false,
            schema: {
              default: 3000,
              format: 'int32',
              maximum: 150000,
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
          },
        }),
      min_pages: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Minimum number of pages the design must have in the editor. The user cannot\nreduce the page count below this value. If both min_pages and max_pages are\nprovided, min_pages must be less than or equal to max_pages.',
            explode: true,
            in: 'query',
            name: 'min_pages',
            required: false,
            schema: { format: 'int32', maximum: 500, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      max_pages: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of pages the design can have in the editor. The user cannot\nadd pages beyond this value. If both min_pages and max_pages are provided,\nmin_pages must be less than or equal to max_pages.',
            explode: true,
            in: 'query',
            name: 'max_pages',
            required: false,
            schema: { format: 'int32', maximum: 500, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetPrintPartnerDesignResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            get_print_partner_design_forbidden: GetPrintPartnerDesignForbiddenErrorExample,
            design_access_forbidden: DesignAccessForbiddenErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_id_not_found: DesignIdNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:meta:read'] }],
})

export const postV1GenerationsRoute = createRoute({
  method: 'post',
  path: '/v1/generations',
  tags: ['design_generation'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to generate a Canva design from a text brief. A successful job includes metadata for the generated design, which is saved to the user's Canva account.\n\nYou can generate a document or presentation. For presentations, you can also provide an outline of the slides to generate.\n\nRequires the `design_generation` capability. You can check whether the user has this capability using the [Get user capabilities API](https://www.canva.dev/docs/apps/rest-apis/reference/users/get-user-capabilities/).\n\nStarting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code. Polling for the result of a job doesn't consume any of the allowance.\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of jobs created with this API using the [Get design generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/get-design-generation-job/).\n\n</Note>",
  operationId: 'createDesignGenerationJobV2',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDesignGenerationJobRequestV2Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateDesignGenerationJobResponseV2Schema,
          examples: { accepted: AcceptedDesignGenerationJobExampleV2Example },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_generation_invalid_request_v2: InvalidDesignGenerationRequestErrorV2Example,
            design_generation_invalid_attachment_v2: InvalidDesignGenerationInputErrorV2Example,
            design_generation_too_many_inputs_v2: TooManyDesignGenerationInputsErrorV2Example,
            design_generation_unsupported_type_v2: UnsupportedDesignGenerationTypeErrorV2Example,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidClientError: InvalidClientErrorExample,
            InvalidAccessToken: InvalidAccessTokenExample,
            MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
            MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
            MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
            TokenIntrospectionFailed: TokenIntrospectionFailedExample,
            RevokedAccessToken: RevokedAccessTokenExample,
            MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
            MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_generation_generation_not_available_v2:
              DesignGenerationNotAvailableErrorV2Example,
            design_generation_attachment_forbidden_v2: DesignGenerationInputForbiddenErrorV2Example,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_generation_attachment_not_found_v2: DesignGenerationInputNotFoundErrorV2Example,
          },
        },
      },
    },
    429: {
      description: 'Credit Quota Exceeded',
      content: {
        'application/json': {
          schema: CreditQuotaErrorSchema,
          examples: {
            credit_quota_exceeded: CreditQuotaExceededErrorExample,
            credit_quota_cooldown: CreditQuotaCooldownErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1GenerationsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/generations/{jobId}',
  tags: ['design_generation'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets the status and result of a design generation job created using the [Create design generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/create-design-generation-job/).\n\nYou might need to make multiple requests until the job has a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).\n\nOnly the user and integration that created the job can retrieve it, and the user must be in the same team. Jobs expire 24 hours after creation.\n\nPolling doesn't consume the user's [AI credit allowance](https://www.canva.com/help/ai-access/). Reaching the AI allowance limit after job creation doesn't prevent retrieving the result.\n\nRequires the `design_generation` capability.",
  operationId: 'getDesignGenerationJobV2',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The public design generation job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: {
              example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
              pattern: '^[a-zA-Z0-9_-]{1,50}$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetDesignGenerationJobResponseV2Schema,
          examples: {
            in_progress: InProgressDesignGenerationJobExampleV2Example,
            success: SuccessDesignGenerationJobExampleV2Example,
            content_not_allowed: ContentNotAllowedDesignGenerationJobExampleV2Example,
            failed: FailedDesignGenerationJobExampleV2Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_generation_invalid_job_id_v2: InvalidDesignGenerationJobIdErrorV2Example,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidClientError: InvalidClientErrorExample,
            InvalidAccessToken: InvalidAccessTokenExample,
            MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
            MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
            MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
            TokenIntrospectionFailed: TokenIntrospectionFailedExample,
            RevokedAccessToken: RevokedAccessTokenExample,
            MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
            MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_generation_generation_not_available_v2:
              DesignGenerationNotAvailableErrorV2Example,
            design_generation_job_forbidden_v2: DesignGenerationJobForbiddenErrorV2Example,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_generation_job_not_found_v2: DesignGenerationJobNotFoundErrorV2Example,
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            TooManyRequestsError: TooManyRequestsErrorExample,
            ThrottledTooManyRequests: ThrottledTooManyRequestsExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const postV1ImportsRoute = createRoute({
  method: 'post',
  path: '/v1/imports',
  tags: ['design_import'],
  description:
    'Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to import an external file as a new design in Canva.\n\nThe request format for this endpoint has an `application/octet-stream` body of bytes,\nand the information about the import is provided using an `Import-Metadata` header.\n\nSupported file types for imports are listed in [Design imports overview](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/#supported-file-types).\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of design import jobs created with this API using the [Get design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-design-import-job/).\n\n</Note>',
  operationId: 'createDesignImportJob',
  request: {
    headers: z.object({
      'Import-Metadata': z.preprocess(
        (val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        },
        DesignImportMetadataSchema.openapi({
          param: {
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/DesignImportMetadata' } },
            },
            in: 'header',
            name: 'Import-Metadata',
            required: true,
          },
        }),
      ),
    }),
    body: {
      description: 'Binary of the file to import.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateDesignImportJobResponseSchema,
          examples: {
            in_progress: InProgressDesignImportJobExampleExample,
            success: SuccessDesignImportJobExampleExample,
            failed: FailedDesignImportJobExampleExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1ImportsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/imports/{jobId}',
  tags: ['design_import'],
  description:
    'Gets the result of a design import job created using the [Create design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-design-import-job/).\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).',
  operationId: 'getDesignImportJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design import job ID.',
            example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetDesignImportJobResponseSchema,
          examples: {
            in_progress: InProgressDesignImportJobExampleExample,
            success: SuccessDesignImportJobExampleExample,
            failed: FailedDesignImportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            job_id_invalid: JobIdInvalidErrorExample,
            job_not_created_via_connect_api: JobNotCreatedViaConnectApiErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_import_job_not_creator: DesignImportJobNotCreatorErrorExample,
            get_job_status_not_allowed: GetJobStatusNotAllowedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            job_id_not_found: JobIdNotFoundErrorExample,
            job_not_found: JobNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const postV1UrlImportsRoute = createRoute({
  method: 'post',
  path: '/v1/url-imports',
  tags: ['design_import'],
  description:
    'Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to import an external file from a URL as a new design in Canva.\n\nSupported file types for imports are listed in [Design imports overview](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/#supported-file-types).\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of design import jobs created with this API using the [Get URL import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-url-import-job/).\n\n</Note>',
  operationId: 'createUrlImportJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreateUrlImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateUrlImportJobResponseSchema,
          examples: {
            in_progress: InProgressDesignImportJobExampleExample,
            success: SuccessDesignImportJobExampleExample,
            failed: FailedDesignImportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_import_already_in_progress: DesignImportAlreadyInProgressErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_with_id_not_found: JobWithIdNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1UrlImportsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/url-imports/{jobId}',
  tags: ['design_import'],
  description:
    'Gets the result of a URL import job created using the [Create URL import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-url-import-job/).\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).',
  operationId: 'getUrlImportJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the URL import job.',
            example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetUrlImportJobResponseSchema,
          examples: {
            in_progress: InProgressDesignImportJobExampleExample,
            success: SuccessDesignImportJobExampleExample,
            failed: FailedDesignImportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_not_created_via_connect_api: JobNotCreatedViaConnectApiErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { get_job_status_not_allowed: GetJobStatusNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_not_found: JobNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const postV1ImageToDesignImportsRoute = createRoute({
  method: 'post',
  path: '/v1/image-to-design-imports',
  tags: ['design_import'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to convert an image into an editable design in Canva, using [Magic Layers](https://www.canva.com/magic-layers/). Elements in the image become separate editable layers in the resulting design.\n\nProvide the image as an asset that is already in the user's Canva account.\n\nThe image must be a standard photo or graphic file, such as a PNG or JPEG. Vector-based formats such as SVG, EPS, or AI files, are not supported. Video assets are not supported.\n\nThis conversion is designed for flat, non-photographic images such as posters, flyers, banners, and social graphics.\n\nStarting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code. Polling for the result of a job using the [Get image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-image-to-design-import-job/) doesn't consume any of the allowance.\n\nUse this API when the user wants to edit the contents of the image, such as changing its text, colors, or individual elements. If you only need to place the image into a design as a single flat image, use the [Create design API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/create-design/) with an `asset_id` instead. The Create design API doesn't consume AI credits.\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of image-to-design import jobs created with this API using the [Get image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-image-to-design-import-job/).\n\n</Note>",
  operationId: 'createImageToDesignImportJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreateImageToDesignImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateImageToDesignImportJobResponseSchema,
          examples: {
            in_progress: InProgressImageToDesignImportJobExampleExample,
            success: SuccessImageToDesignImportJobExampleExample,
            failed: FailedImageToDesignImportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unsupported_asset: UnsupportedAssetErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_access_not_allowed: AssetAccessNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_not_found: AssetNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            image_to_design_credit_quota_exceeded: ImageToDesignCreditQuotaExceededErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const getV1ImageToDesignImportsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/image-to-design-imports/{jobId}',
  tags: ['design_import'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets the result of an image-to-design import job created using the [Create image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-image-to-design-import-job/).\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).",
  operationId: 'getImageToDesignImportJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The ID of the image-to-design import job.',
            example: 'f81b26fd-a33d-4c2d-9e8c-4a7aca798b17',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetImageToDesignImportJobResponseSchema,
          examples: {
            in_progress: InProgressImageToDesignImportJobExampleExample,
            success: SuccessImageToDesignImportJobExampleExample,
            failed: FailedImageToDesignImportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_id_format_invalid: BadRequestFieldErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_not_creator: JobNotCreatorErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { job_id_not_found: JobIdNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { design_creation_throttled: DesignCreationThrottledErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write'] }],
})

export const postV1ExportsRoute = createRoute({
  method: 'post',
  path: '/v1/exports',
  tags: ['export'],
  description:
    'Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to export a file from Canva. Once the exported file is generated, you can download\nit using the URL(s) provided. The download URLs are only valid for 24 hours.\n\nThe request requires the design ID and the exported file format type.\n\nSupported file formats (and export file type values): JPG (`jpg`), PNG (`png`), GIF (`gif`), Microsoft PowerPoint (`pptx`), MP4 (`mp4`), PDF (`pdf`), CSV (`csv`), HTML bundle (`html_bundle`), and standalone HTML (`html_standalone`).\n\n<Note>\n\nThis endpoint has the following additional rate limits:\n\n  - **App throttle:** Each app can export a maximum of 750 times per 5-minute window, and 5,000 times per 24-hour window.\n  - **Document throttle:** Each document can be exported a maximum of 75 times per 5-minute window.\n  - **User throttle:** Each user can export a maximum of 75 times per 5-minute window, and 500 times per 24-hour window.\n\n</Note>\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of export jobs created with this API using the [Get design export job API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/get-design-export-job/).\n\n</Note>',
  operationId: 'createDesignExportJob',
  request: {
    body: { content: { 'application/json': { schema: CreateDesignExportJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateDesignExportJobResponseSchema,
          examples: {
            in_progress: InProgressExportJobExampleExample,
            success: SuccessExportJobExampleExample,
            failed: FailedExportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            export_invalid_design_id: ExportInvalidDesignIdErrorExample,
            export_design_type_not_supported: UnsupportedDesignTypeExample,
            export_format_not_supported: UnsupportedFormatErrorExample,
            invalid_page_range: InvalidPageRangeErrorExample,
            transparent_background_not_allowed: TransparentBackgroundNotAllowedErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_permission_denied: DesignPermissionDeniedErrorExample,
            license_required: LicenseRequiredErrorExample,
            svg_export_unavailable: SvgExportUnavailableErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { export_design_not_found: ExportDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_throttle: ClientThrottleErrorExample,
            client_daily_throttle: ClientDailyThrottleErrorExample,
            user_throttle: UserThrottleErrorExample,
            user_daily_throttle: UserDailyThrottleErrorExample,
            design_throttle: DesignThrottleErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const postV1PrintPartnerExportsRoute = createRoute({
  method: 'post',
  path: '/v1/print-partner/exports',
  tags: ['export'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nAVAILABILITY: This API is only available to Print Partners.\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to export a Print Partner file from Canva. Once the exported file is generated, you can download\nit using the URL(s) provided. The download URLs are only valid for 24 hours.\nThe request requires the design ID and exports a file as a print-quality PDF.\n\n<Note>\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of export jobs created with this API using the [Get design export job API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/get-design-export-job/).\n</Note>",
  operationId: 'createPrintPartnerDesignExportJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreatePrintPartnerDesignExportJobRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreatePrintPartnerDesignExportJobResponseSchema,
          examples: {
            in_progress: InProgressExportJobExampleExample,
            success: SuccessExportJobExampleExample,
            failed: FailedExportJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            export_invalid_design_id: ExportInvalidDesignIdErrorExample,
            export_design_type_not_supported: UnsupportedDesignTypeExample,
            export_format_not_supported: UnsupportedFormatErrorExample,
            invalid_page_range: InvalidPageRangeErrorExample,
            print_partner_unsupported_design_type: PrintPartnerUnsupportedDesignTypeErrorExample,
            print_partner_unsupported_design: PrintPartnerUnsupportedDesignErrorExample,
            export_scale_factor_outside_range: ExportScaleFactorOutsideRangeErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            print_partner_export_forbidden: PrintPartnerExportForbiddenExample,
            design_permission_denied: DesignPermissionDeniedErrorExample,
            license_required: LicenseRequiredErrorExample,
            resource_unavailable: ResourceUnavailableErrorExample,
            embedded_media_error: EmbeddedMediaErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { export_design_not_found: ExportDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_throttle: ClientThrottleErrorExample,
            client_daily_throttle: ClientDailyThrottleErrorExample,
            user_throttle: UserThrottleErrorExample,
            user_daily_throttle: UserDailyThrottleErrorExample,
            design_throttle: DesignThrottleErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1ExportsExportIdRoute = createRoute({
  method: 'get',
  path: '/v1/exports/{exportId}',
  tags: ['export'],
  description:
    'Gets the result of a design export job that was created using the [Create design export job API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/create-design-export-job/).\n\nIf the job is successful, the response includes an array\nof download URLs. Depending on the design type and export format, there is a download URL for each page in the design. The download URLs are only valid for 24 hours.\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).',
  operationId: 'getDesignExportJob',
  request: {
    params: z.object({
      exportId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The export job ID.',
            explode: false,
            in: 'path',
            name: 'exportId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetDesignExportJobResponseSchema,
          examples: {
            in_progress: InProgressExportJobExampleExample,
            success: SuccessExportJobExampleExample,
            failed: FailedExportJobExampleExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            export_job_permission_denied: ExportJobPermissionDeniedErrorExample,
            export_job_result_permission_denied: ExportJobResultPermissionDeniedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { export_job_expired: ExportJobExpiredErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read'] }],
})

export const getV1FoldersFolderIdRoute = createRoute({
  method: 'get',
  path: '/v1/folders/{folderId}',
  tags: ['folder'],
  description: "Gets the name and other details of a folder using a folder's `folderID`.",
  operationId: 'getFolder',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The folder ID.',
            example: 'FAF2lZtloor',
            explode: false,
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetFolderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_folder_id: InvalidFolderIdErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_access_not_allowed: FolderAccessNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_not_found: FolderNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['folder:read'] }],
})

export const deleteV1FoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/v1/folders/{folderId}',
  tags: ['folder'],
  description:
    "Deletes a folder with the specified `folderID`.\nDeleting a folder moves the user's content in the folder to the\n[Trash](https://www.canva.com/help/deleted-designs/) and content owned by\nother users is moved to the top level of the owner's\n[projects](https://www.canva.com/help/find-designs-and-folders/).",
  operationId: 'deleteFolder',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The folder ID.',
            example: 'FAF2lZtloor',
            explode: false,
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_folder_id: InvalidFolderIdErrorExample,
            root_folder_not_supported: RootFolderNotSupportedErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            folder_access_not_allowed: FolderAccessNotAllowedErrorExample,
            uploads_folder_not_allowed: UploadsFolderNotAllowedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_not_found: FolderNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['folder:write'] }],
})

export const patchV1FoldersFolderIdRoute = createRoute({
  method: 'patch',
  path: '/v1/folders/{folderId}',
  tags: ['folder'],
  description:
    "Updates a folder's details using its `folderID`.\nCurrently, you can only update a folder's name.",
  operationId: 'updateFolder',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The folder ID.',
            example: 'FAF2lZtloor',
            explode: false,
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFolderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateFolderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_request_parameters: FolderInvalidRequestParametersErrorExample,
            root_folder_not_supported: RootFolderNotSupportedErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            folder_access_not_allowed: FolderAccessNotAllowedErrorExample,
            uploads_folder_not_allowed: UploadsFolderNotAllowedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_not_found: FolderNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['folder:write'] }],
})

export const getV1FoldersFolderIdItemsRoute = createRoute({
  method: 'get',
  path: '/v1/folders/{folderId}/items',
  tags: ['folder'],
  description:
    "Lists the items in a folder, including each item's `type`.\n\nFolders can contain:\n\n- Other folders.\n- Designs, such as Instagram posts, Presentations, and Documents ([Canva Docs](https://www.canva.com/create/documents/)).\n- Image assets.\n- Brand templates. To include `brand_template` items in the response, you must explicitly specify it in the `item_types` parameter.\n\n  AVAILABILITY: Brand template items are only returned for users on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise). For more information, see [Brand templates](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/).\n\nCurrently, video assets are not returned in the response.",
  operationId: 'listFolderItems',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The folder ID.',
            example: 'FAF2lZtloor',
            explode: false,
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      continuation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the success response contains a continuation token, the folder contains more items\nyou can list. You can use this token as a query parameter and retrieve more\nitems from the list, for example\n`/v1/folders/{folderId}/items?continuation={continuation}`.\n\nTo retrieve all the items in a folder, you might need to make multiple requests.',
            example:
              'RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN',
            explode: true,
            in: 'query',
            name: 'continuation',
            required: false,
            schema: { type: 'string' },
            style: 'form',
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
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 50,
              description: 'The number of folder items to return.',
              format: 'int32',
              maximum: 100,
              minimum: 1,
              type: 'integer',
            },
            style: 'form',
          },
          description: 'The number of folder items to return.',
        }),
      item_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(FolderItemTypeSchema),
        )
        .default(['design', 'folder', 'image'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter the folder items to only return specified types. The available types are:\n`design`, `folder`, `image`, and `brand_template`. To filter for more than one item type,\nprovide a comma-delimited list.\n\nIf not specified, defaults to returning `design`, `folder`, and `image` items.\nTo include `brand_template` items, you must explicitly specify it in this parameter.',
            explode: false,
            in: 'query',
            name: 'item_types',
            required: false,
            schema: {
              default: ['design', 'folder', 'image'],
              items: { $ref: '#/components/schemas/FolderItemType' },
              type: 'array',
            },
            style: 'form',
          },
        }),
      sort_by: FolderItemSortBySchema.openapi({
        param: {
          description: 'Sort the list of folder items.',
          example: 'title_ascending',
          explode: true,
          in: 'query',
          name: 'sort_by',
          required: false,
          schema: { $ref: '#/components/schemas/FolderItemSortBy' },
          style: 'form',
        },
      }).exactOptional(),
      pin_status: FolderItemPinStatusSchema.openapi({
        param: {
          description: 'Filter the folder items by their pinned status.',
          explode: true,
          in: 'query',
          name: 'pin_status',
          required: false,
          schema: { $ref: '#/components/schemas/FolderItemPinStatus' },
          style: 'form',
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListFolderItemsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { list_items_invalid_continuation: ListItemsInvalidContinuationErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_access_not_allowed: FolderAccessNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_not_found: FolderNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['folder:read'] }],
})

export const postV1FoldersMoveRoute = createRoute({
  method: 'post',
  path: '/v1/folders/move',
  tags: ['folder'],
  description:
    'Moves an item to another folder. You must specify the folder ID of the destination folder, as well as the ID of the item you want to move.\n\nNOTE: In some situations, a single item can exist in multiple folders. If you attempt to move an item that exists in multiple folders, the API returns an `item_in_multiple_folders` error. In this case, you must use the Canva UI to move the item to another folder.',
  operationId: 'moveFolderItem',
  request: { body: { content: { 'application/json': { schema: MoveFolderItemRequestSchema } } } },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_folder_id: InvalidFolderIdErrorExample,
            invalid_item_id: InvalidItemIdErrorExample,
            target_folder_size_limit_reached: TargetFolderSizeLimitReachedErrorExample,
            item_in_multiple_folders: ItemInMultipleFoldersErrorExample,
            to_folder_same_as_item: ToFolderSameAsItemErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            folder_access_not_allowed: FolderAccessNotAllowedErrorExample,
            move_uploads_folder_not_allowed: MoveUploadsFolderNotAllowedErrorExample,
            shared_design_not_allowed_in_root: SharedDesignNotAllowedInRootErrorExample,
            folder_item_access_not_allowed: FolderItemAccessNotAllowedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            folder_not_found: FolderNotFoundErrorExample,
            to_folder_not_found: ToFolderNotFoundErrorExample,
            folder_item_not_found: FolderItemNotFoundErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['folder:write'] }],
})

export const postV1FoldersRoute = createRoute({
  method: 'post',
  path: '/v1/folders',
  tags: ['folder'],
  description:
    "Creates a folder in one of the following locations:\n\n- The top level of a Canva user's [projects](https://www.canva.com/help/find-designs-and-folders/) (using the ID `root`),\n- The user's Uploads folder (using the ID `uploads`),\n- Another folder (using the parent folder's ID).\n\nWhen a folder is successfully created, the\nendpoint returns its folder ID, along with other information.",
  operationId: 'createFolder',
  request: {
    body: {
      content: { 'application/json': { schema: CreateFolderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateFolderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_request_parameters: FolderInvalidRequestParametersErrorExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { folder_access_not_allowed: FolderAccessNotAllowedErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { parent_folder_not_found: ParentFolderNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['folder:write'] }],
})

export const postV1ImageGenerationsRoute = createRoute({
  method: 'post',
  path: '/v1/image-generations',
  tags: ['image_generation'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to generate an image from a plain-text prompt. When the image is generated, you can download it using the URL provided. The download URL is only valid for 24 hours.\n\nThe request requires a prompt and an idempotency key. Call this API with a user access token that has the `asset:write` scope.\n\nTo also save the generated image to the user's Canva account as an image asset, set `asset_upload` to `type: upload`. The job then returns the asset alongside the download URL. Saving the asset requires a user access token.\n\nStarting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code.\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of image generation jobs created with this API using the [Get image generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/get-image-generation-job/).\n\n</Note>",
  operationId: 'createImageGenerationJob',
  request: {
    body: { content: { 'application/json': { schema: CreateImageGenerationJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateImageGenerationJobResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            BadRequestFieldError: BadRequestFieldErrorExample,
            MissingRequiredHeaderError: MissingRequiredHeaderErrorExample,
            MissingAccessTokenError: MissingAccessTokenErrorExample,
            MissingClientCredentialsError: MissingClientCredentialsErrorExample,
            ContentTypeHeaderValueMissing: ContentTypeHeaderValueMissingExample,
            ContentTypeHeaderValueInvalid: ContentTypeHeaderValueInvalidExample,
            ValidatingClientFailed: ValidatingClientFailedExample,
            ValidatingClientFailedWithCode: ValidatingClientFailedWithCodeExample,
            ClientSecretInvalidError: ClientSecretInvalidErrorExample,
            InvalidClientCredentialsValue: InvalidClientCredentialsValueExample,
            InvalidClientCredentialsBase64Encoding: InvalidClientCredentialsBase64EncodingExample,
            FailedToReadRequestBody: FailedToReadRequestBodyExample,
            ExpectedIntegerQueryParam: ExpectedIntegerQueryParamExample,
            ExpectedLongQueryParam: ExpectedLongQueryParamExample,
            ExpectedLongListQueryParam: ExpectedLongListQueryParamExample,
            TooManyQueryParamValues: TooManyQueryParamValuesExample,
            MissingRequiredQueryParam: MissingRequiredQueryParamExample,
            ConfidentialClientCorsError: ConfidentialClientCorsErrorExample,
            InvalidUriError: InvalidUriErrorExample,
            InvalidOriginError: InvalidOriginErrorExample,
            InvalidIdsError: InvalidIdsErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidClientError: InvalidClientErrorExample,
            InvalidAccessToken: InvalidAccessTokenExample,
            MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
            MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
            MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
            TokenIntrospectionFailed: TokenIntrospectionFailedExample,
            RevokedAccessToken: RevokedAccessTokenExample,
            MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
            MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            image_generation_not_enabled: ImageGenerationNotEnabledErrorExample,
            missing_scope: MissingScopeErrorExample,
            user_role_required: UserRoleRequiredErrorExample,
          },
        },
      },
    },
    429: {
      description: 'Credit Quota Exceeded',
      content: {
        'application/json': {
          schema: CreditQuotaErrorSchema,
          examples: {
            credit_quota_exceeded: CreditQuotaExceededErrorExample,
            credit_quota_cooldown: CreditQuotaCooldownErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:write'] }],
})

export const getV1ImageGenerationsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/image-generations/{jobId}',
  tags: ['image_generation'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets the result of an image generation job that was created using the [Create image generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/create-image-generation-job/). Only the app and user that created the job can get it.\n\nIf the job is successful, the job's `result` contains a download URL for the generated image. The download URL is only valid for 24 hours. If the job was created with `asset_upload` set to `type: upload`, the `result` also contains the image asset that the image was saved as. These jobs stay `in_progress` until the asset has finished importing, so the returned asset is ready to use.\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).",
  operationId: 'getImageGenerationJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The image generation job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetImageGenerationJobResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidClientError: InvalidClientErrorExample,
            InvalidAccessToken: InvalidAccessTokenExample,
            MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
            MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
            MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
            TokenIntrospectionFailed: TokenIntrospectionFailedExample,
            RevokedAccessToken: RevokedAccessTokenExample,
            MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
            MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            MissingScopeError: MissingScopeErrorExample,
            UserRoleRequiredError: UserRoleRequiredErrorExample,
            IntegrationAccessDeniedError: IntegrationAccessDeniedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { image_generation_job_not_found: ImageGenerationJobNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            TooManyRequestsError: TooManyRequestsErrorExample,
            ThrottledTooManyRequests: ThrottledTooManyRequestsExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:write'] }],
})

export const postV1ImageTransformationsRoute = createRoute({
  method: 'post',
  path: '/v1/image-transformations',
  tags: ['image_transformation'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to apply one or more transformations to an image asset. A successful job produces a single new image asset with all of the requested transformations applied. The source asset isn't modified, and intermediate results aren't returned.\n\nThe request requires the ID of the source asset and at least one transformation. The source asset must be an image asset, such as one created using the [Asset upload APIs](https://www.canva.dev/docs/apps/rest-apis/reference/assets/).\n\nTransformations are applied in the order provided, with each one stacked on the result of the previous one.\n\nStarting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code. Polling for the result of a job using the [Get image transformation job API](https://www.canva.dev/docs/apps/rest-apis/reference/image-transformations/get-image-transformation-job/) doesn't consume any of the allowance.\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of image transformation jobs created with this API using the [Get image transformation job API](https://www.canva.dev/docs/apps/rest-apis/reference/image-transformations/get-image-transformation-job/).\n\n</Note>",
  operationId: 'createImageTransformationJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreateImageTransformationJobRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateImageTransformationJobResponseSchema,
          examples: {
            in_progress: InProgressImageTransformationJobExampleExample,
            success: SuccessImageTransformationJobExampleExample,
            failed: FailedImageTransformationJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            bad_request_field: BadRequestFieldErrorExample,
            unsupported_content_type: UnsupportedAssetTypeErrorExample,
            asset_not_ready: AssetNotReadyErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidClientError: InvalidClientErrorExample,
            InvalidAccessToken: InvalidAccessTokenExample,
            MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
            MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
            MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
            TokenIntrospectionFailed: TokenIntrospectionFailedExample,
            RevokedAccessToken: RevokedAccessTokenExample,
            MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
            MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { image_transformation_not_enabled: ImageTransformationNotEnabledErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { asset_not_found: AssetNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Credit Quota Exceeded',
      content: {
        'application/json': {
          schema: CreditQuotaErrorSchema,
          examples: {
            credit_quota_exceeded: CreditQuotaExceededErrorExample,
            credit_quota_cooldown: CreditQuotaCooldownErrorExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:read', 'asset:write'] }],
})

export const getV1ImageTransformationsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/image-transformations/{jobId}',
  tags: ['image_transformation'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets the result of an image transformation job that was created using the [Create image transformation job API](https://www.canva.dev/docs/apps/rest-apis/reference/image-transformations/create-image-transformation-job/).\n\nIf the job is successful, the job's `result` contains the new image asset produced by the transformations.\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).",
  operationId: 'getImageTransformationJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The image transformation job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetImageTransformationJobResponseSchema,
          examples: {
            in_progress: InProgressImageTransformationJobExampleExample,
            success: SuccessImageTransformationJobExampleExample,
            failed: FailedImageTransformationJobExampleExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidClientError: InvalidClientErrorExample,
            InvalidAccessToken: InvalidAccessTokenExample,
            MissingClientCredentialsOrBodyAuthError: MissingClientCredentialsOrBodyAuthErrorExample,
            MalformedAuthorizationHeaderComponents: MalformedAuthorizationHeaderComponentsExample,
            MalformedAuthorizationHeaderMode: MalformedAuthorizationHeaderModeExample,
            TokenIntrospectionFailed: TokenIntrospectionFailedExample,
            RevokedAccessToken: RevokedAccessTokenExample,
            MissingAuthorizationHeader: MissingAuthorizationHeaderExample,
            MalformedAuthorizationHeader: MalformedAuthorizationHeaderExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            image_transformation_job_not_found: ImageTransformationJobNotFoundErrorExample,
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            TooManyRequestsError: TooManyRequestsErrorExample,
            ThrottledTooManyRequests: ThrottledTooManyRequestsExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['asset:read'] }],
})

export const postV1MergesRoute = createRoute({
  method: 'post',
  path: '/v1/merges',
  tags: ['merge'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to merge design pages by applying page operations (such as insert, move, or delete) to produce a new design or modify an existing one.\n\nWhen the job completes successfully, the job result includes metadata for the created or updated design.\n\n<Note>\n\nAt this stage, only a single operation per request is supported by default, and passing multiple operations will fail. Contact Canva to enable multi-operation mode for your app.\n\n</Note>\n\n<Note>\n\nFor more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of jobs created with this API using the [Get design merge job API](https://www.canva.dev/docs/apps/rest-apis/reference/merges/get-design-merge-job/).\n\n</Note>",
  operationId: 'createDesignMergeJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDesignMergeJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateDesignMergeJobResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_merge_job_type: InvalidMergeJobTypeErrorExample,
            invalid_operation: InvalidOperationErrorExample,
            invalid_page_number: InvalidPageNumberErrorExample,
            unsupported_page_type: UnsupportedPageTypeErrorExample,
            unsupported_document_type: UnsupportedDocumentTypeErrorExample,
            operation_not_supported: OperationNotSupportedErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            design_forbidden: DesignForbiddenErrorExample,
            unauthorized_private_resource: UnauthorizedPrivateResourceErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { merge_design_not_found: MergeDesignNotFoundErrorExample },
        },
      },
    },
    413: {
      description: 'Request Entity Too Large',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { request_too_large: RequestTooLargeErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:write', 'design:meta:read'] }],
})

export const getV1MergesJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/merges/{jobId}',
  tags: ['merge'],
  description:
    "<Warning>\n\nThis API is currently provided as a preview. Be aware of the following:\n\n- There might be unannounced breaking changes.\n- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).\n- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.\n\n</Warning>\n\nGets the result of a design merge job that was created using the [Create design merge job API](https://www.canva.dev/docs/apps/rest-apis/reference/merges/create-design-merge-job/).\n\nIf the job is successful, the response includes the job status and a `result` object with metadata for the created or updated design.\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).",
  operationId: 'getDesignMergeJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design merge job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { example: 'a7by3wd-abc123', pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
          example: 'a7by3wd-abc123',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDesignMergeJobResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { merge_job_forbidden: MergeJobForbiddenErrorExample },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { merge_job_not_found: MergeJobNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:meta:read'] }],
})

export const postV1OauthTokenRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/token',
  tags: ['oauth'],
  description:
    "This endpoint implements the OAuth 2.0 `token` endpoint, as part of the Authorization Code flow with Proof Key for Code Exchange (PKCE). For more information, see [Authentication](https://www.canva.dev/docs/apps/rest-apis/authentication/).\n\nTo generate an access token, you must provide one of the following:\n\n- An authorization code\n- A refresh token\n\nGenerating a token using either an authorization code or a refresh token allows your app to act on behalf of a user. You must first [obtain user authorization and get an authorization code](https://www.canva.dev/docs/apps/rest-apis/authentication/#obtain-user-authorization).\n\nAccess tokens may be up to 4 KB in size, and are only valid for a specified period of time. The expiry time (currently 4 hours) is shown in the endpoint response and is subject to change.\n\n**Endpoint authentication**\n\nRequests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:\n\n- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.\n- **Body parameters**: Provide your app's credentials using the `client_id` and `client_secret` body parameters.\n\nThis endpoint can't be called from a user's web-browser client because it uses client authentication with client secrets. Requests must come from your app's backend, otherwise they'll be blocked by Canva's [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.\n\n**Generate an access token using an authorization code**\n\nTo generate an access token with an authorization code, you must:\n\n- Set `grant_type` to `authorization_code`.\n- Provide the `code_verifier` value that you generated when creating the user authorization URL.\n- Provide the authorization code you received after the user authorized the app.\n\n**Generate an access token using a refresh token**\n\nUsing the `refresh_token` value from a previous user token request, you can get a new access token with the same or smaller scope as the previous one, but with a refreshed expiry time. You will also receive a new refresh token that you can use to refresh the access token again.\n\nTo refresh an existing access token, you must:\n\n- Set `grant_type` to `refresh_token`.\n- Provide the `refresh_token` from a previous token request.",
  operationId: 'exchangeAccessToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': { schema: ExchangeAccessTokenRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ExchangeAccessTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_id_body_param_multiple_values: ClientIdBodyParamMultipleValuesExample,
            client_id_body_param_blank: ClientIdBodyParamBlankExample,
            client_secret_body_param_multiple_values: ClientSecretBodyParamMultipleValuesExample,
            client_id_basic_auth_param_blank: ClientIdBasicAuthParamBlankExample,
            secret_basic_auth_param_blank: SecretBasicAuthParamBlankExample,
            bad_request_body_too_large: BadRequestBodyTooLargeExample,
            invalid_refresh_token: InvalidRefreshTokenExample,
            unauthorized_client: UnauthorizedClientErrorExample,
            token_exchange_invalid_request: TokenExchangeInvalidRequestExample,
            token_exchange_invalid_grant: TokenExchangeInvalidGrantExample,
            token_exchange_unauthorized_client: TokenExchangeUnauthorizedClientExample,
            token_exchange_unsupported_grant_type: TokenExchangeUnsupportedGrantTypeExample,
            token_exchange_invalid_scope: TokenExchangeInvalidScopeExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_secret_invalid: ClientSecretInvalidExample,
            access_token_missing: AccessTokenMissingExample,
            token_exchange_invalid_client: TokenExchangeInvalidClientExample,
            token_exchange_unauthorized_user: TokenExchangeUnauthorizedUserExample,
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { too_many_token_exchange_requests: TooManyTokenExchangeRequestsExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: OauthErrorSchema } },
    },
  },
  security: [{}, { basicAuth: [] }],
})

export const postV1OauthIntrospectRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/introspect',
  tags: ['oauth'],
  description:
    "Introspect an access token to see whether it is valid and active. You can also verify some token properties, such as its claims, scopes, and validity times.\n\nRequests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:\n\n- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.\n- **Body parameters**: Provide your app's credentials using the `client_id` and `client_secret` body parameters.\n\nThis endpoint can't be called from a user's web-browser client because it uses client authentication with client secrets. Requests must come from your app's backend, otherwise they'll be blocked by Canva's [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.",
  operationId: 'introspectToken',
  request: {
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: IntrospectTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IntrospectTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_id_body_param_multiple_values: ClientIdBodyParamMultipleValuesExample,
            client_id_body_param_blank: ClientIdBodyParamBlankExample,
            client_secret_body_param_multiple_values: ClientSecretBodyParamMultipleValuesExample,
            client_id_basic_auth_param_blank: ClientIdBasicAuthParamBlankExample,
            secret_basic_auth_param_blank: SecretBasicAuthParamBlankExample,
            bad_request_body_too_large: BadRequestBodyTooLargeExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_secret_invalid: ClientSecretInvalidExample,
            access_token_missing: AccessTokenMissingExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: OauthErrorSchema } },
    },
  },
  security: [{}, { basicAuth: [] }],
})

export const postV1OauthRevokeRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/revoke',
  tags: ['oauth'],
  description:
    "Revoke an access token or a refresh token.\n\nIf you revoke a _refresh token_, be aware that:\n\n- The refresh token's lineage is also revoked. This means that access tokens created from that refresh token are also revoked.\n- The user's consent for your app is also revoked. This means that the user must go through the OAuth process again to use your app.\n\nRequests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:\n\n- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.\n- **Body parameters**: Provide your app's credentials using the `client_id` and `client_secret` body parameters.\n\nThis endpoint can't be called from a user's web-browser client because it uses client authentication with client secrets. Requests must come from your app's backend, otherwise they'll be blocked by Canva's [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.",
  operationId: 'revokeTokens',
  request: {
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: RevokeTokensRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RevokeTokensResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_id_body_param_multiple_values: ClientIdBodyParamMultipleValuesExample,
            client_id_body_param_blank: ClientIdBodyParamBlankExample,
            client_secret_body_param_multiple_values: ClientSecretBodyParamMultipleValuesExample,
            client_id_basic_auth_param_blank: ClientIdBasicAuthParamBlankExample,
            secret_basic_auth_param_blank: SecretBasicAuthParamBlankExample,
            bad_request_body_too_large: BadRequestBodyTooLargeExample,
            invalid_token: InvalidTokenErrorExample,
            invalid_request: InvalidRequestErrorExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            client_secret_invalid: ClientSecretInvalidExample,
            access_token_missing: AccessTokenMissingExample,
          },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: OauthErrorSchema } },
    },
  },
  security: [{}, { basicAuth: [] }],
})

export const getV1OidcJwksRoute = createRoute({
  method: 'get',
  path: '/v1/oidc/jwks',
  tags: ['oidc'],
  description:
    'Gets the JSON Web Key Set (public keys) for OIDC. These keys are used to verify JWTs in OpenID Connect flows.',
  operationId: 'getOidcJwks',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: JsonWebKeySetSchema } } },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [],
})

export const getV1OidcUserinfoRoute = createRoute({
  method: 'get',
  path: '/v1/oidc/userinfo',
  tags: ['oidc'],
  description:
    'Fetches the current UserInfo claims for the authorized user. This is the same fields\nreturned by a id_token returns during authorization.\n\nThe claims returned depend on the granted scopes: `profile` claims (`name`, `given_name`,\n`family_name`) are only returned when the `profile` scope is granted, and `email` claims\n(`email`, `email_verified`) are only returned when the `email` scope is granted. The\n`openid` scope is always required.',
  operationId: 'userInfo',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserInfoResponseSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [
    { oauthAuthCode: ['openid', 'profile', 'email'] },
    { oauthAuthCode: ['openid', 'profile'] },
    { oauthAuthCode: ['openid', 'email'] },
  ],
})

export const postV1ResizesRoute = createRoute({
  method: 'post',
  path: '/v1/resizes',
  tags: ['resize'],
  description:
    "<Availability>\n\nTo use this API, your app must act on behalf of a user that's on a Canva plan with premium features (such as Canva Pro).\n\nUsers on the Canva Free plan have access to a limited trial. For more information, see [Trial quotas](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#trial-quotas).\n\n</Availability>\n\nStarts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints)\nto create a resized copy of a design. The new resized design is\nadded to the top level of the user's\n[projects](https://www.canva.com/help/find-designs-and-folders/) (`root` folder).\n\nTo resize a design into a new design, you can either:\n\n  - Use a preset design type.\n  - Set height and width dimensions for a custom design.\n\nNote the following behaviors and restrictions when resizing designs:\n- Designs can be resized to a maximum area of 25,000,000 pixels squared.\n- Resizing designs using the Canva REST APIs always creates a new design. In-place resizing is currently not available in the Canva REST APIs, but can be done in the Canva UI.\n- Resizing a multi-page design results in all pages of the design being resized. Resizing a section of a design is only available in the Canva UI.\n- [Canva docs](https://www.canva.com/create/documents/) and [emails](https://www.canva.com/emails/) can't be resized, and other design types can't be resized to a Canva doc or email.\n- Canva Code designs can't be resized, and other design types can't be resized to a Canva Code design.\n\n<Note>\nFor more information on the workflow for using asynchronous jobs,\nsee [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).\nYou can check the status and get the results of resize jobs created with this API using the\n[Get design resize job API](https://www.canva.dev/docs/apps/rest-apis/reference/resizes/get-design-resize-job/).\n</Note>",
  operationId: 'createDesignResizeJob',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateDesignResizeJobRequestSchema,
          example: {
            design_id: 'DAGirp_1ZUA',
            design_type: { type: 'custom', width: 1000, height: 1500 },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateDesignResizeJobResponseSchema,
          examples: {
            in_progress: InProgressResizeJobExampleExample,
            success: SuccessResizeJobExampleExample,
            failed: FailedResizeJobExampleExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            unsupported_design_type: UnsupportedDesignTypeErrorExample,
            invalid_design_type: InvalidDesignTypeErrorExample,
            invalid_design_type_input: InvalidDesignTypeInputErrorExample,
            dimensions_below_minimum: DimensionsBelowMinimumErrorExample,
            dimensions_above_maximum: DimensionsAboveMaximumErrorExample,
            area_above_maximum: AreaAboveMaximumErrorExample,
            design_not_resizable: DesignNotResizableErrorExample,
            page_index_out_of_bounds: PageIndexOutOfBoundsErrorExample,
            responsive_pages_not_supported: ResponsivePagesNotSupportedErrorExample,
            controlled_pages_not_supported: ControlledPagesNotSupportedErrorExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            missing_resize_capability: MissingResizeCapabilityErrorExample,
            design_resize_not_allowed: DesignResizeNotAllowedErrorExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { resize_design_not_found: ResizeDesignNotFoundErrorExample },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: FeatureQuotaExceededErrorSchema,
          examples: { feature_quota_exceeded: FeatureQuotaExceededErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read', 'design:content:write'] }],
})

export const getV1ResizesJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/resizes/{jobId}',
  tags: ['resize'],
  description:
    "<Availability>\n\nTo use this API, your app must act on behalf of a user that's on a Canva plan with premium features (such as Canva Pro).\n\nUsers on the Canva Free plan have access to a limited trial. For more information, see [Trial quotas](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#trial-quotas).\n\n</Availability>\n\nGets the result of a design resize job that was created using the [Create design resize\njob API](https://www.canva.dev/docs/apps/rest-apis/reference/resizes/create-design-resize-job/).\n\nIf the job is successful, the response includes a summary of the new resized design, including its metadata.\n\nYou might need to make multiple requests to this endpoint until you get a `success` or `failed` status.\nFor more information on the workflow for using asynchronous jobs,\nsee [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).",
  operationId: 'getDesignResizeJob',
  request: {
    params: z.object({
      jobId: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,50}$/)
        .openapi({
          param: {
            description: 'The design resize job ID.',
            explode: false,
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9_-]{1,50}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetDesignResizeJobResponseSchema,
          examples: {
            in_progress: InProgressResizeJobExampleExample,
            success: SuccessResizeJobExampleExample,
            failed: FailedResizeJobExampleExample,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { resize_job_not_found: ResizeJobNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['design:content:read', 'design:content:write'] }],
})

export const getV1UsersMeRoute = createRoute({
  method: 'get',
  path: '/v1/users/me',
  tags: ['user'],
  description:
    'Returns the User ID and Team ID of the user\naccount associated with the provided access token.',
  operationId: 'usersMe',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UsersMeResponseSchema } } },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: [] }],
})

export const getV1UsersMeCapabilitiesRoute = createRoute({
  method: 'get',
  path: '/v1/users/me/capabilities',
  tags: ['user'],
  description:
    'Lists the API capabilities for the user account associated with the provided access token. For more information, see [Capabilities](https://www.canva.dev/docs/apps/rest-apis/capabilities/).',
  operationId: 'getUserCapabilities',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetUserCapabilitiesResponseSchema } },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['profile:read'] }],
})

export const getV1UsersMeProfileRoute = createRoute({
  method: 'get',
  path: '/v1/users/me/profile',
  tags: ['user'],
  description:
    'Currently, this returns the display name of the user account associated with the provided access token. More user information is expected to be included in the future.',
  operationId: 'getUserProfile',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserProfileResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { user_not_found: UserNotFoundErrorExample },
        },
      },
    },
    default: {
      description: 'Error Response',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ oauthAuthCode: ['profile:read'] }],
})
