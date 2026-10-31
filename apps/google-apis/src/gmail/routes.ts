import { createRoute, z } from '@hono/zod-openapi'

const MessagePartBodySchema = z
  .object({
    attachmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request. When not present, the entire content of the message part body is contained in the data field.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of bytes for the message part data (encoding notwithstanding).',
      }),
  })
  .openapi({ description: 'The body of a single MIME message part.', required: [] })
  .openapi('MessagePartBody')

const MessagePartHeaderSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the header before the `:` separator. For example, `To`.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the header after the `:` separator. For example, `someuser@example.com`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MessagePartHeader')

type MessagePartType = {
  body?: z.infer<typeof MessagePartBodySchema>
  filename?: string
  headers?: z.infer<typeof MessagePartHeaderSchema>[]
  mimeType?: string
  partId?: string
  parts?: MessagePartType[]
}

const AutoForwardingSchema = z
  .object({
    disposition: z
      .enum(['dispositionUnspecified', 'leaveInInbox', 'archive', 'trash', 'markRead'])
      .exactOptional()
      .openapi({
        description: 'The state that a message should be left in after it has been forwarded.',
      }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether all incoming mail is automatically forwarded to another address.',
      }),
  })
  .openapi({ description: 'Auto-forwarding settings for an account.', required: [] })
  .openapi('AutoForwarding')

const BatchDeleteMessagesRequestSchema = z
  .object({
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of the messages to delete.' }),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteMessagesRequest')

const BatchModifyMessagesRequestSchema = z
  .object({
    addLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of label IDs to add to messages.' }),
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The IDs of the messages to modify. There is a limit of 1000 ids per request.',
      }),
    removeLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of label IDs to remove from messages.' }),
  })
  .openapi({ required: [] })
  .openapi('BatchModifyMessagesRequest')

const CseIdentitySchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address for the sending identity. The email address must be the primary email address of the authenticated user.',
      }),
    primaryKeyPairId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If a key pair is associated, the identifier of the key pair, CseKeyPair.',
      }),
  })
  .openapi({
    description:
      'The client-side encryption (CSE) configuration for the email address of an authenticated user. Gmail uses CSE configurations to save drafts of client-side encrypted email messages, and to sign and send encrypted email messages.',
    required: [],
  })
  .openapi('CseIdentity')

const KaclsKeyMetadataSchema = z
  .object({
    kaclsData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque data generated and used by the key access control list service. Maximum size: 8 KiB.',
      }),
    kaclsUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI of the key access control list service that manages the private key.',
      }),
  })
  .openapi({
    description:
      'Metadata for private keys managed by an external key access control list service. For details about managing key access, see [Google Workspace CSE API Reference](https://developers.google.com/workspace/cse/reference).',
    required: [],
  })
  .openapi('KaclsKeyMetadata')

const CsePrivateKeyMetadataSchema = z
  .object({
    kaclsKeyMetadata: KaclsKeyMetadataSchema.exactOptional().openapi({
      description:
        'Metadata for a private key instance managed by an external key access control list service.',
    }),
    privateKeyMetadataId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The immutable ID for the private key metadata instance.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata for a private key instance.', required: [] })
  .openapi('CsePrivateKeyMetadata')

const CseKeyPairSchema = z
  .object({
    disableTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. If a key pair is set to `DISABLED`, the time that the key pair's state changed from `ENABLED` to `DISABLED`. This field is present only when the key pair is in state `DISABLED`.",
        readOnly: true,
      }),
    enablementState: z
      .enum(['stateUnspecified', 'enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the key pair.', readOnly: true }),
    keyPairId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The immutable ID for the client-side encryption S/MIME key pair.',
        readOnly: true,
      }),
    pem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The public key and its certificate chain, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format.',
        readOnly: true,
      }),
    pkcs7: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor.',
      }),
    privateKeyMetadata: z
      .array(CsePrivateKeyMetadataSchema)
      .exactOptional()
      .openapi({ description: "Metadata for instances of this key pair's private key." }),
    subjectEmailAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The email address identities that are specified on the leaf certificate.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A client-side encryption S/MIME key pair, which is comprised of a public key, its certificate chain, and metadata for its paired private key. Gmail uses the key pair to complete the following tasks: - Sign outgoing client-side encrypted messages. - Save and reopen drafts of client-side encrypted messages. - Save and reopen sent messages. - Decrypt incoming or archived S/MIME messages.',
    required: [],
  })
  .openapi('CseKeyPair')

const DelegateSchema = z
  .object({
    delegateEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the delegate.' }),
    verificationStatus: z
      .enum(['verificationStatusUnspecified', 'accepted', 'pending', 'rejected', 'expired'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this address has been verified and can act as a delegate for the account. Read-only.',
      }),
  })
  .openapi({
    description:
      'Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator\'s account. See "Set up mail delegation" for more information about delegates.',
    required: [],
  })
  .openapi('Delegate')

const DisableCseKeyPairRequestSchema = z
  .object({})
  .openapi({ description: 'Requests to turn off a client-side encryption key pair.' })
  .openapi('DisableCseKeyPairRequest')

const MessagePartSchema: z.ZodType<MessagePartType> = z
  .lazy(() =>
    z
      .object({
        body: MessagePartBodySchema.exactOptional().openapi({
          description:
            'The message part body for this part, which may be empty for container MIME message parts.',
        }),
        filename: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The filename of the attachment. Only present if this message part represents an attachment.',
          }),
        headers: z
          .array(MessagePartHeaderSchema)
          .exactOptional()
          .openapi({
            description:
              'List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as `To`, `From`, and `Subject`.',
          }),
        mimeType: z
          .string()
          .exactOptional()
          .openapi({ description: 'The MIME type of the message part.' }),
        partId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The immutable ID of the message part.' }),
        parts: z
          .array(MessagePartSchema)
          .exactOptional()
          .openapi({
            description:
              'The child MIME message parts of this part. This only applies to container MIME message parts, for example `multipart/*`. For non- container MIME message part types, such as `text/plain`, this field is empty. For more information, see RFC 1521.',
          }),
      })
      .openapi({ description: 'A single MIME message part.', required: [] }),
  )
  .openapi('MessagePart')

const MessageSchema = z
  .object({
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the last history record that modified this message.' }),
    id: z.string().exactOptional().openapi({ description: 'The immutable ID of the message.' }),
    internalDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.',
      }),
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of IDs of labels applied to this message.' }),
    payload: MessagePartSchema.exactOptional().openapi({
      description: 'The parsed email structure in the message parts.',
    }),
    raw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.',
      }),
    sizeEstimate: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Estimated size in bytes of the message.' }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short part of the message text.' }),
    threadId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match. ',
      }),
  })
  .openapi({ description: 'An email message.', required: [] })
  .openapi('Message')

const DraftSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The immutable ID of the draft.' }),
    message: MessageSchema.exactOptional().openapi({
      description: 'The message content of the draft.',
    }),
  })
  .openapi({ description: "A draft email in the user's mailbox.", required: [] })
  .openapi('Draft')

const EnableCseKeyPairRequestSchema = z
  .object({})
  .openapi({ description: 'Requests to turn on a client-side encryption key pair.' })
  .openapi('EnableCseKeyPairRequest')

const FilterActionSchema = z
  .object({
    addLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of labels to add to the message.' }),
    forward: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address that the message should be forwarded to.' }),
    removeLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of labels to remove from the message.' }),
  })
  .openapi({ description: 'A set of actions to perform on a message.', required: [] })
  .openapi('FilterAction')

const FilterCriteriaSchema = z
  .object({
    excludeChats: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the response should exclude chats.' }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: "The sender's display name or email address." }),
    hasAttachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the message has any attachment.' }),
    negatedQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The size of the entire RFC822 message in bytes, including all headers and attachments.',
      }),
    sizeComparison: z
      .enum(['unspecified', 'smaller', 'larger'])
      .exactOptional()
      .openapi({
        description: 'How the message size in bytes should be in relation to the size field.',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.",
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The recipient\'s display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.',
      }),
  })
  .openapi({ description: 'Message matching criteria.', required: [] })
  .openapi('FilterCriteria')

const FilterSchema = z
  .object({
    action: FilterActionSchema.exactOptional().openapi({
      description: 'Action that the filter performs.',
    }),
    criteria: FilterCriteriaSchema.exactOptional().openapi({
      description: 'Matching criteria for the filter.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server assigned ID of the filter.' }),
  })
  .openapi({
    description:
      'Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.',
    required: [],
  })
  .openapi('Filter')

const ForwardingAddressSchema = z
  .object({
    forwardingEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address to which messages can be forwarded.' }),
    verificationStatus: z
      .enum(['verificationStatusUnspecified', 'accepted', 'pending'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this address has been verified and is usable for forwarding. Read-only.',
      }),
  })
  .openapi({ description: 'Settings for a forwarding address.', required: [] })
  .openapi('ForwardingAddress')

const HistoryLabelAddedSchema = z
  .object({
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Label IDs added to the message.' }),
    message: MessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryLabelAdded')

const HistoryLabelRemovedSchema = z
  .object({
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Label IDs removed from the message.' }),
    message: MessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryLabelRemoved')

const HistoryMessageAddedSchema = z
  .object({ message: MessageSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('HistoryMessageAdded')

const HistoryMessageDeletedSchema = z
  .object({ message: MessageSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('HistoryMessageDeleted')

const HistorySchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The mailbox sequence ID.' }),
    labelsAdded: z
      .array(HistoryLabelAddedSchema)
      .exactOptional()
      .openapi({ description: 'Labels added to messages in this history record.' }),
    labelsRemoved: z
      .array(HistoryLabelRemovedSchema)
      .exactOptional()
      .openapi({ description: 'Labels removed from messages in this history record.' }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'List of messages changed in this history record. The fields for specific change types, such as `messagesAdded` may duplicate messages in this field. We recommend using the specific change-type fields instead of this.',
      }),
    messagesAdded: z
      .array(HistoryMessageAddedSchema)
      .exactOptional()
      .openapi({ description: 'Messages added to the mailbox in this history record.' }),
    messagesDeleted: z
      .array(HistoryMessageDeletedSchema)
      .exactOptional()
      .openapi({
        description: 'Messages deleted (not Trashed) from the mailbox in this history record.',
      }),
  })
  .openapi({
    description:
      "A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.",
    required: [],
  })
  .openapi('History')

const ImapSettingsSchema = z
  .object({
    autoExpunge: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether IMAP is enabled for the account.' }),
    expungeBehavior: z
      .enum(['expungeBehaviorUnspecified', 'archive', 'trash', 'deleteForever'])
      .exactOptional()
      .openapi({
        description:
          'The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.',
      }),
    maxFolderSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.',
      }),
  })
  .openapi({ description: 'IMAP settings for an account.', required: [] })
  .openapi('ImapSettings')

const LabelColorSchema = z
  .object({
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \\#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \\#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \\#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \\#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \\#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \\#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \\#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \\#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \\#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \\#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \\#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \\#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \\#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765',
      }),
    textColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \\#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \\#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \\#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \\#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \\#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \\#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \\#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \\#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \\#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \\#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \\#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \\#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \\#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765',
      }),
  })
  .openapi({ required: [] })
  .openapi('LabelColor')

const LabelSchema = z
  .object({
    color: LabelColorSchema.exactOptional().openapi({
      description:
        'The color to assign to the label. Color is only available for labels that have their `type` set to `user`.',
    }),
    id: z.string().exactOptional().openapi({ description: 'The immutable ID of the label.' }),
    labelListVisibility: z
      .enum(['labelShow', 'labelShowIfUnread', 'labelHide'])
      .exactOptional()
      .openapi({
        description: 'The visibility of the label in the label list in the Gmail web interface.',
      }),
    messageListVisibility: z
      .enum(['show', 'hide'])
      .exactOptional()
      .openapi({
        description:
          'The visibility of messages with this label in the message list in the Gmail web interface.',
      }),
    messagesTotal: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of messages with the label.' }),
    messagesUnread: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of unread messages with the label.' }),
    name: z.string().exactOptional().openapi({ description: 'The display name of the label.' }),
    threadsTotal: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of threads with the label.' }),
    threadsUnread: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of unread threads with the label.' }),
    type: z
      .enum(['system', 'user'])
      .exactOptional()
      .openapi({
        description:
          'The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.',
      }),
  })
  .openapi({
    description:
      "Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.",
    required: [],
  })
  .openapi('Label')

const LanguageSettingsSchema = z
  .object({
    displayLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user\'s display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).',
      }),
  })
  .openapi({
    description:
      'Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.',
    required: [],
  })
  .openapi('LanguageSettings')

const ListCseIdentitiesResponseSchema = z
  .object({
    cseIdentities: z
      .array(CseIdentitySchema)
      .exactOptional()
      .openapi({ description: 'One page of the list of CSE identities configured for the user.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pagination token to be passed to a subsequent ListCseIdentities call in order to retrieve the next page of identities. If this value is not returned or is the empty string, then no further pages remain.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCseIdentitiesResponse')

const ListCseKeyPairsResponseSchema = z
  .object({
    cseKeyPairs: z
      .array(CseKeyPairSchema)
      .exactOptional()
      .openapi({ description: 'One page of the list of CSE key pairs installed for the user.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pagination token to be passed to a subsequent ListCseKeyPairs call in order to retrieve the next page of key pairs. If this value is not returned, then no further pages remain.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCseKeyPairsResponse')

const ListDelegatesResponseSchema = z
  .object({
    delegates: z
      .array(DelegateSchema)
      .exactOptional()
      .openapi({
        description:
          "List of the user's delegates (with any verification status). If an account doesn't have delegates, this field doesn't appear.",
      }),
  })
  .openapi({ description: 'Response for the ListDelegates method.', required: [] })
  .openapi('ListDelegatesResponse')

const ListDraftsResponseSchema = z
  .object({
    drafts: z
      .array(DraftSchema)
      .exactOptional()
      .openapi({
        description:
          'List of drafts. Note that the `Message` property in each `Draft` resource only contains an `id` and a `threadId`. The messages.get method can fetch additional message details.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to retrieve the next page of results in the list.' }),
    resultSizeEstimate: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Estimated total number of results.' }),
  })
  .openapi({ required: [] })
  .openapi('ListDraftsResponse')

const ListFiltersResponseSchema = z
  .object({
    filter: z
      .array(FilterSchema)
      .exactOptional()
      .openapi({ description: "List of a user's filters." }),
  })
  .openapi({ description: 'Response for the ListFilters method.', required: [] })
  .openapi('ListFiltersResponse')

const ListForwardingAddressesResponseSchema = z
  .object({
    forwardingAddresses: z
      .array(ForwardingAddressSchema)
      .exactOptional()
      .openapi({ description: 'List of addresses that may be used for forwarding.' }),
  })
  .openapi({ description: 'Response for the ListForwardingAddresses method.', required: [] })
  .openapi('ListForwardingAddressesResponse')

const ListHistoryResponseSchema = z
  .object({
    history: z
      .array(HistorySchema)
      .exactOptional()
      .openapi({
        description:
          'List of history records. Any `messages` contained in the response will typically only have `id` and `threadId` fields populated.',
      }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: "The ID of the mailbox's current history record." }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to retrieve the next page of results in the list.' }),
  })
  .openapi({ required: [] })
  .openapi('ListHistoryResponse')

const ListLabelsResponseSchema = z
  .object({
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({
        description:
          'List of labels. Note that each label resource only contains an `id`, `name`, `messageListVisibility`, `labelListVisibility`, and `type`. The labels.get method can fetch additional label details.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListLabelsResponse')

const ListMessagesResponseSchema = z
  .object({
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'List of messages. Note that each message resource contains only an `id` and a `threadId`. Additional message details can be fetched using the messages.get method.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to retrieve the next page of results in the list.' }),
    resultSizeEstimate: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Estimated total number of results.' }),
  })
  .openapi({ required: [] })
  .openapi('ListMessagesResponse')

const SmtpMsaSchema = z
  .object({
    host: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname of the SMTP service. Required.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The port of the SMTP service. Required.' }),
    securityMode: z
      .enum(['securityModeUnspecified', 'none', 'ssl', 'starttls'])
      .exactOptional()
      .openapi({
        description:
          'The protocol that will be used to secure communication with the SMTP service. Required.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.',
      }),
  })
  .openapi({ description: 'Configuration for communication with an SMTP service.', required: [] })
  .openapi('SmtpMsa')

const SendAsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.',
      }),
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.',
      }),
    isPrimary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.',
      }),
    replyToAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.',
      }),
    sendAsEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.',
      }),
    smtpMsa: SmtpMsaSchema.exactOptional().openapi({
      description:
        'An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail\'s servers to the destination SMTP service. This setting only applies to custom "from" aliases.',
    }),
    treatAsAlias: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Gmail should treat this address as an alias for the user\'s primary email address. This setting only applies to custom "from" aliases.',
      }),
    verificationStatus: z
      .enum(['verificationStatusUnspecified', 'accepted', 'pending'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.',
      }),
  })
  .openapi({
    description:
      'Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.',
    required: [],
  })
  .openapi('SendAs')

const ListSendAsResponseSchema = z
  .object({
    sendAs: z
      .array(SendAsSchema)
      .exactOptional()
      .openapi({ description: 'List of send-as aliases.' }),
  })
  .openapi({ description: 'Response for the ListSendAs method.', required: [] })
  .openapi('ListSendAsResponse')

const SmimeInfoSchema = z
  .object({
    encryptedKeyPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'Encrypted key password, when key is encrypted.' }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the certificate expires (in milliseconds since epoch).' }),
    id: z.string().exactOptional().openapi({ description: 'The immutable ID for the SmimeInfo.' }),
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether this SmimeInfo is the default one for this user's send-as address.",
      }),
    issuerCn: z
      .string()
      .exactOptional()
      .openapi({ description: "The S/MIME certificate issuer's common name." }),
    pem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).',
      }),
    pkcs12: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.',
      }),
  })
  .openapi({ description: 'An S/MIME email config.', required: [] })
  .openapi('SmimeInfo')

const ListSmimeInfoResponseSchema = z
  .object({
    smimeInfo: z
      .array(SmimeInfoSchema)
      .exactOptional()
      .openapi({ description: 'List of SmimeInfo.' }),
  })
  .openapi({ required: [] })
  .openapi('ListSmimeInfoResponse')

const ThreadSchema = z
  .object({
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the last history record that modified this thread.' }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of the thread.' }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({ description: 'The list of messages in the thread.' }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short part of the message text.' }),
  })
  .openapi({ description: 'A collection of messages representing a conversation.', required: [] })
  .openapi('Thread')

const ListThreadsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to retrieve the next page of results in the list.' }),
    resultSizeEstimate: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Estimated total number of results.' }),
    threads: z
      .array(ThreadSchema)
      .exactOptional()
      .openapi({
        description:
          'List of threads. Note that each thread resource does not contain a list of `messages`. The list of `messages` for a given thread can be fetched using the threads.get method.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListThreadsResponse')

const ModifyMessageRequestSchema = z
  .object({
    addLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of IDs of labels to add to this message. You can add up to 100 labels with each update.',
      }),
    removeLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ModifyMessageRequest')

const ModifyThreadRequestSchema = z
  .object({
    addLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of IDs of labels to add to this thread. You can add up to 100 labels with each update.',
      }),
    removeLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ModifyThreadRequest')

const ObliterateCseKeyPairRequestSchema = z
  .object({})
  .openapi({ description: 'Request to obliterate a CSE key pair.' })
  .openapi('ObliterateCseKeyPairRequest')

const PopSettingsSchema = z
  .object({
    accessWindow: z
      .enum(['accessWindowUnspecified', 'disabled', 'fromNowOn', 'allMail'])
      .exactOptional()
      .openapi({ description: 'The range of messages which are accessible via POP.' }),
    disposition: z
      .enum(['dispositionUnspecified', 'leaveInInbox', 'archive', 'trash', 'markRead'])
      .exactOptional()
      .openapi({
        description:
          'The action that will be executed on a message after it has been fetched via POP.',
      }),
  })
  .openapi({ description: 'POP settings for an account.', required: [] })
  .openapi('PopSettings')

const ProfileSchema = z
  .object({
    emailAddress: z.string().exactOptional().openapi({ description: "The user's email address." }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: "The ID of the mailbox's current history record." }),
    messagesTotal: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of messages in the mailbox.' }),
    threadsTotal: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of threads in the mailbox.' }),
  })
  .openapi({ description: 'Profile for a Gmail user.', required: [] })
  .openapi('Profile')

const VacationSettingsSchema = z
  .object({
    enableAutoReply: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that controls whether Gmail automatically replies to messages.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.',
      }),
    responseBodyHtml: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.',
      }),
    responseBodyPlainText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.',
      }),
    responseSubject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.',
      }),
    restrictToContacts: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.",
      }),
    restrictToDomain: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.",
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.',
      }),
  })
  .openapi({
    description:
      'Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.',
    required: [],
  })
  .openapi('VacationSettings')

const WatchRequestSchema = z
  .object({
    labelFilterAction: z
      .enum(['include', 'exclude'])
      .exactOptional()
      .openapi({ description: 'Filtering behavior of labelIds list specified.' }),
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.',
      }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).',
      }),
  })
  .openapi({
    description: "Set up or update a new push notification watch on this user's mailbox.",
    required: [],
  })
  .openapi('WatchRequest')

const WatchResponseSchema = z
  .object({
    expiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When Gmail will stop sending notifications for mailbox updates (epoch millis). Call `watch` again before this time to renew the watch.',
      }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: "The ID of the mailbox's current history record." }),
  })
  .openapi({ description: 'Push notification watch response.', required: [] })
  .openapi('WatchResponse')

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
        'https://mail.google.com/':
          'Read, compose, send, and permanently delete all your email from Gmail',
        'https://www.googleapis.com/auth/gmail.addons.current.action.compose':
          'Manage drafts and send emails when you interact with the add-on',
        'https://www.googleapis.com/auth/gmail.addons.current.message.action':
          'View your email messages when you interact with the add-on',
        'https://www.googleapis.com/auth/gmail.addons.current.message.metadata':
          'View your email message metadata when the add-on is running',
        'https://www.googleapis.com/auth/gmail.addons.current.message.readonly':
          'View your email messages when the add-on is running',
        'https://www.googleapis.com/auth/gmail.compose': 'Manage drafts and send emails',
        'https://www.googleapis.com/auth/gmail.insert': 'Add emails into your Gmail mailbox',
        'https://www.googleapis.com/auth/gmail.labels': 'See and edit your email labels',
        'https://www.googleapis.com/auth/gmail.metadata':
          'View your email message metadata such as labels and headers, but not the email body',
        'https://www.googleapis.com/auth/gmail.modify':
          'Read, compose, and send emails from your Gmail account',
        'https://www.googleapis.com/auth/gmail.readonly': 'View your email messages and settings',
        'https://www.googleapis.com/auth/gmail.send': 'Send email on your behalf',
        'https://www.googleapis.com/auth/gmail.settings.basic':
          'See, edit, create, or change your email settings and filters in Gmail',
        'https://www.googleapis.com/auth/gmail.settings.sharing':
          'Manage your sensitive mail settings, including who can manage your mail',
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
        'https://mail.google.com/':
          'Read, compose, send, and permanently delete all your email from Gmail',
        'https://www.googleapis.com/auth/gmail.addons.current.action.compose':
          'Manage drafts and send emails when you interact with the add-on',
        'https://www.googleapis.com/auth/gmail.addons.current.message.action':
          'View your email messages when you interact with the add-on',
        'https://www.googleapis.com/auth/gmail.addons.current.message.metadata':
          'View your email message metadata when the add-on is running',
        'https://www.googleapis.com/auth/gmail.addons.current.message.readonly':
          'View your email messages when the add-on is running',
        'https://www.googleapis.com/auth/gmail.compose': 'Manage drafts and send emails',
        'https://www.googleapis.com/auth/gmail.insert': 'Add emails into your Gmail mailbox',
        'https://www.googleapis.com/auth/gmail.labels': 'See and edit your email labels',
        'https://www.googleapis.com/auth/gmail.metadata':
          'View your email message metadata such as labels and headers, but not the email body',
        'https://www.googleapis.com/auth/gmail.modify':
          'Read, compose, and send emails from your Gmail account',
        'https://www.googleapis.com/auth/gmail.readonly': 'View your email messages and settings',
        'https://www.googleapis.com/auth/gmail.send': 'Send email on your behalf',
        'https://www.googleapis.com/auth/gmail.settings.basic':
          'See, edit, create, or change your email settings and filters in Gmail',
        'https://www.googleapis.com/auth/gmail.settings.sharing':
          'Manage your sensitive mail settings, including who can manage your mail',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getGmailV1UsersUserIdDraftsRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/drafts',
  tags: ['users'],
  description: "Lists the drafts in the user's mailbox.",
  operationId: 'gmail.users.drafts.list',
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
      includeSpamTrash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include drafts from `SPAM` and `TRASH` in the results.',
            in: 'query',
            name: 'includeSpamTrash',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
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
              'Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token to retrieve a specific page of results in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDraftsResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const postGmailV1UsersUserIdDraftsRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/drafts',
  tags: ['users'],
  description: 'Creates a new draft with the `DRAFT` label.',
  operationId: 'gmail.users.drafts.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'message/cpim': { schema: DraftSchema },
        'message/delivery-status': { schema: DraftSchema },
        'message/disposition-notification': { schema: DraftSchema },
        'message/external-body': { schema: DraftSchema },
        'message/feedback-report': { schema: DraftSchema },
        'message/global': { schema: DraftSchema },
        'message/global-delivery-status': { schema: DraftSchema },
        'message/global-disposition-notification': { schema: DraftSchema },
        'message/global-headers': { schema: DraftSchema },
        'message/http': { schema: DraftSchema },
        'message/imdn+xml': { schema: DraftSchema },
        'message/news': { schema: DraftSchema },
        'message/partial': { schema: DraftSchema },
        'message/rfc822': { schema: DraftSchema },
        'message/s-http': { schema: DraftSchema },
        'message/sip': { schema: DraftSchema },
        'message/sipfrag': { schema: DraftSchema },
        'message/tracking-status': { schema: DraftSchema },
        'message/vnd.si.simp': { schema: DraftSchema },
        'message/vnd.wfa.wsc': { schema: DraftSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DraftSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdDraftsSendRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/drafts/send',
  tags: ['users'],
  description:
    'Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.',
  operationId: 'gmail.users.drafts.send',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'message/cpim': { schema: DraftSchema },
        'message/delivery-status': { schema: DraftSchema },
        'message/disposition-notification': { schema: DraftSchema },
        'message/external-body': { schema: DraftSchema },
        'message/feedback-report': { schema: DraftSchema },
        'message/global': { schema: DraftSchema },
        'message/global-delivery-status': { schema: DraftSchema },
        'message/global-disposition-notification': { schema: DraftSchema },
        'message/global-headers': { schema: DraftSchema },
        'message/http': { schema: DraftSchema },
        'message/imdn+xml': { schema: DraftSchema },
        'message/news': { schema: DraftSchema },
        'message/partial': { schema: DraftSchema },
        'message/rfc822': { schema: DraftSchema },
        'message/s-http': { schema: DraftSchema },
        'message/sip': { schema: DraftSchema },
        'message/sipfrag': { schema: DraftSchema },
        'message/tracking-status': { schema: DraftSchema },
        'message/vnd.si.simp': { schema: DraftSchema },
        'message/vnd.wfa.wsc': { schema: DraftSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const getGmailV1UsersUserIdDraftsIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/drafts/{id}',
  tags: ['users'],
  description: 'Gets the specified draft.',
  operationId: 'gmail.users.drafts.get',
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
      format: z
        .enum(['minimal', 'full', 'raw', 'metadata'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The format to return the draft in.',
            in: 'query',
            name: 'format',
            schema: { enum: ['minimal', 'full', 'raw', 'metadata'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the draft to retrieve.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DraftSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const putGmailV1UsersUserIdDraftsIdRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/drafts/{id}',
  tags: ['users'],
  description: "Replaces a draft's content.",
  operationId: 'gmail.users.drafts.update',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the draft to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'message/cpim': { schema: DraftSchema },
        'message/delivery-status': { schema: DraftSchema },
        'message/disposition-notification': { schema: DraftSchema },
        'message/external-body': { schema: DraftSchema },
        'message/feedback-report': { schema: DraftSchema },
        'message/global': { schema: DraftSchema },
        'message/global-delivery-status': { schema: DraftSchema },
        'message/global-disposition-notification': { schema: DraftSchema },
        'message/global-headers': { schema: DraftSchema },
        'message/http': { schema: DraftSchema },
        'message/imdn+xml': { schema: DraftSchema },
        'message/news': { schema: DraftSchema },
        'message/partial': { schema: DraftSchema },
        'message/rfc822': { schema: DraftSchema },
        'message/s-http': { schema: DraftSchema },
        'message/sip': { schema: DraftSchema },
        'message/sipfrag': { schema: DraftSchema },
        'message/tracking-status': { schema: DraftSchema },
        'message/vnd.si.simp': { schema: DraftSchema },
        'message/vnd.wfa.wsc': { schema: DraftSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DraftSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const deleteGmailV1UsersUserIdDraftsIdRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/drafts/{id}',
  tags: ['users'],
  description: 'Immediately and permanently deletes the specified draft. Does not simply trash it.',
  operationId: 'gmail.users.drafts.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the draft to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const getGmailV1UsersUserIdHistoryRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/history',
  tags: ['users'],
  description:
    'Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).',
  operationId: 'gmail.users.history.list',
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
      historyTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['messageAdded', 'messageDeleted', 'labelAdded', 'labelRemoved'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'History types to be returned by the function',
            explode: true,
            in: 'query',
            name: 'historyTypes',
            schema: {
              items: {
                enum: ['messageAdded', 'messageDeleted', 'labelAdded', 'labelRemoved'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      labelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return messages with a label matching the ID.',
            in: 'query',
            name: 'labelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
              'Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token to retrieve a specific page of results in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startHistoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.',
            in: 'query',
            name: 'startHistoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListHistoryResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const getGmailV1UsersUserIdLabelsRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/labels',
  tags: ['users'],
  description: "Lists all labels in the user's mailbox.",
  operationId: 'gmail.users.labels.list',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLabelsResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.labels'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.labels'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const postGmailV1UsersUserIdLabelsRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/labels',
  tags: ['users'],
  description: 'Creates a new label.',
  operationId: 'gmail.users.labels.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LabelSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.labels'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.labels'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const getGmailV1UsersUserIdLabelsIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/labels/{id}',
  tags: ['users'],
  description: 'Gets the specified label.',
  operationId: 'gmail.users.labels.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to retrieve.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LabelSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.labels'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.labels'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const putGmailV1UsersUserIdLabelsIdRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/labels/{id}',
  tags: ['users'],
  description: 'Updates the specified label.',
  operationId: 'gmail.users.labels.update',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LabelSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.labels'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.labels'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const deleteGmailV1UsersUserIdLabelsIdRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/labels/{id}',
  tags: ['users'],
  description:
    'Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.',
  operationId: 'gmail.users.labels.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.labels'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.labels'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const patchGmailV1UsersUserIdLabelsIdRoute = createRoute({
  method: 'patch',
  path: '/gmail/v1/users/{userId}/labels/{id}',
  tags: ['users'],
  description: 'Patch the specified label.',
  operationId: 'gmail.users.labels.patch',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the label to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LabelSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.labels'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.labels'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const getGmailV1UsersUserIdMessagesRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/messages',
  tags: ['users'],
  description: "Lists the messages in the user's mailbox.",
  operationId: 'gmail.users.messages.list',
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
      includeSpamTrash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include messages from `SPAM` and `TRASH` in the results.',
            in: 'query',
            name: 'includeSpamTrash',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      labelIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/gmail/api/guides/labels#manage_labels_on_messages_threads).",
            explode: true,
            in: 'query',
            name: 'labelIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
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
              'Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token to retrieve a specific page of results in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMessagesResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const postGmailV1UsersUserIdMessagesRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages',
  tags: ['users'],
  description:
    "Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.",
  operationId: 'gmail.users.messages.insert',
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
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      internalDateSource: z
        .enum(['receivedTime', 'dateHeader'])
        .exactOptional()
        .openapi({
          param: {
            description: "Source for Gmail's internal date of the message.",
            in: 'query',
            name: 'internalDateSource',
            schema: { enum: ['receivedTime', 'dateHeader'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'message/cpim': { schema: MessageSchema },
        'message/delivery-status': { schema: MessageSchema },
        'message/disposition-notification': { schema: MessageSchema },
        'message/external-body': { schema: MessageSchema },
        'message/feedback-report': { schema: MessageSchema },
        'message/global': { schema: MessageSchema },
        'message/global-delivery-status': { schema: MessageSchema },
        'message/global-disposition-notification': { schema: MessageSchema },
        'message/global-headers': { schema: MessageSchema },
        'message/http': { schema: MessageSchema },
        'message/imdn+xml': { schema: MessageSchema },
        'message/news': { schema: MessageSchema },
        'message/partial': { schema: MessageSchema },
        'message/rfc822': { schema: MessageSchema },
        'message/s-http': { schema: MessageSchema },
        'message/sip': { schema: MessageSchema },
        'message/sipfrag': { schema: MessageSchema },
        'message/tracking-status': { schema: MessageSchema },
        'message/vnd.si.simp': { schema: MessageSchema },
        'message/vnd.wfa.wsc': { schema: MessageSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.insert'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.insert'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdMessagesBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/batchDelete',
  tags: ['users'],
  description:
    'Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.',
  operationId: 'gmail.users.messages.batchDelete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchDeleteMessagesRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [{ Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] }],
})

export const postGmailV1UsersUserIdMessagesBatchModifyRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/batchModify',
  tags: ['users'],
  description: 'Modifies the labels on the specified messages.',
  operationId: 'gmail.users.messages.batchModify',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchModifyMessagesRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdMessagesImportRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/import',
  tags: ['users'],
  description:
    "Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.",
  operationId: 'gmail.users.messages.import',
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
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      internalDateSource: z
        .enum(['receivedTime', 'dateHeader'])
        .exactOptional()
        .openapi({
          param: {
            description: "Source for Gmail's internal date of the message.",
            in: 'query',
            name: 'internalDateSource',
            schema: { enum: ['receivedTime', 'dateHeader'], type: 'string' },
            required: false,
          },
        }),
      neverMarkSpam: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.',
            in: 'query',
            name: 'neverMarkSpam',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      processForCalendar: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.',
            in: 'query',
            name: 'processForCalendar',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'message/cpim': { schema: MessageSchema },
        'message/delivery-status': { schema: MessageSchema },
        'message/disposition-notification': { schema: MessageSchema },
        'message/external-body': { schema: MessageSchema },
        'message/feedback-report': { schema: MessageSchema },
        'message/global': { schema: MessageSchema },
        'message/global-delivery-status': { schema: MessageSchema },
        'message/global-disposition-notification': { schema: MessageSchema },
        'message/global-headers': { schema: MessageSchema },
        'message/http': { schema: MessageSchema },
        'message/imdn+xml': { schema: MessageSchema },
        'message/news': { schema: MessageSchema },
        'message/partial': { schema: MessageSchema },
        'message/rfc822': { schema: MessageSchema },
        'message/s-http': { schema: MessageSchema },
        'message/sip': { schema: MessageSchema },
        'message/sipfrag': { schema: MessageSchema },
        'message/tracking-status': { schema: MessageSchema },
        'message/vnd.si.simp': { schema: MessageSchema },
        'message/vnd.wfa.wsc': { schema: MessageSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.insert'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.insert'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdMessagesSendRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/send',
  tags: ['users'],
  description:
    'Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/gmail/api/guides/sending).',
  operationId: 'gmail.users.messages.send',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'message/cpim': { schema: MessageSchema },
        'message/delivery-status': { schema: MessageSchema },
        'message/disposition-notification': { schema: MessageSchema },
        'message/external-body': { schema: MessageSchema },
        'message/feedback-report': { schema: MessageSchema },
        'message/global': { schema: MessageSchema },
        'message/global-delivery-status': { schema: MessageSchema },
        'message/global-disposition-notification': { schema: MessageSchema },
        'message/global-headers': { schema: MessageSchema },
        'message/http': { schema: MessageSchema },
        'message/imdn+xml': { schema: MessageSchema },
        'message/news': { schema: MessageSchema },
        'message/partial': { schema: MessageSchema },
        'message/rfc822': { schema: MessageSchema },
        'message/s-http': { schema: MessageSchema },
        'message/sip': { schema: MessageSchema },
        'message/sipfrag': { schema: MessageSchema },
        'message/tracking-status': { schema: MessageSchema },
        'message/vnd.si.simp': { schema: MessageSchema },
        'message/vnd.wfa.wsc': { schema: MessageSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.action.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.send'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.send'],
    },
  ],
})

export const getGmailV1UsersUserIdMessagesIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/messages/{id}',
  tags: ['users'],
  description: 'Gets the specified message.',
  operationId: 'gmail.users.messages.get',
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
      format: z
        .enum(['minimal', 'full', 'raw', 'metadata'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The format to return the message in.',
            in: 'query',
            name: 'format',
            schema: { enum: ['minimal', 'full', 'raw', 'metadata'], type: 'string' },
            required: false,
          },
        }),
      metadataHeaders: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'When given and format is `METADATA`, only include headers specified.',
            explode: true,
            in: 'query',
            name: 'metadataHeaders',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`).',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.action'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.action'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const deleteGmailV1UsersUserIdMessagesIdRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/messages/{id}',
  tags: ['users'],
  description:
    'Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.',
  operationId: 'gmail.users.messages.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [{ Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] }],
})

export const postGmailV1UsersUserIdMessagesIdModifyRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/{id}/modify',
  tags: ['users'],
  description: 'Modifies the labels on the specified message.',
  operationId: 'gmail.users.messages.modify',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to modify.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdMessagesIdTrashRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/{id}/trash',
  tags: ['users'],
  description: 'Moves the specified message to the trash.',
  operationId: 'gmail.users.messages.trash',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to Trash.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdMessagesIdUntrashRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/messages/{id}/untrash',
  tags: ['users'],
  description: 'Removes the specified message from the trash.',
  operationId: 'gmail.users.messages.untrash',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message to remove from Trash.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}',
  tags: ['users'],
  description: 'Gets the specified message attachment.',
  operationId: 'gmail.users.messages.attachments.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the message containing the attachment.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the attachment.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessagePartBodySchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.action'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.action'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const getGmailV1UsersUserIdProfileRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/profile',
  tags: ['users'],
  description: "Gets the current user's Gmail profile.",
  operationId: 'gmail.users.getProfile',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProfileSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.compose'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.compose'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsAutoForwardingRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/autoForwarding',
  tags: ['users'],
  description: 'Gets the auto-forwarding setting for the specified account.',
  operationId: 'gmail.users.settings.getAutoForwarding',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AutoForwardingSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const putGmailV1UsersUserIdSettingsAutoForwardingRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/settings/autoForwarding',
  tags: ['users'],
  description:
    'Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.updateAutoForwarding',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AutoForwardingSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AutoForwardingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsCseIdentitiesRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/cse/identities',
  tags: ['users'],
  description: 'Lists the client-side encrypted identities for an authenticated user.',
  operationId: 'gmail.users.settings.cse.identities.list',
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
            description:
              'The number of identities to return. If not provided, the page size will default to 20 entries.',
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
            description:
              'Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCseIdentitiesResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsCseIdentitiesRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/cse/identities',
  tags: ['users'],
  description:
    "Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity.",
  operationId: 'gmail.users.settings.cse.identities.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CseIdentitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseIdentitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}',
  tags: ['users'],
  description: 'Retrieves a client-side encryption identity configuration.',
  operationId: 'gmail.users.settings.cse.identities.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cseEmailAddress: z
        .string()
        .openapi({
          param: {
            description:
              "The primary email address associated with the client-side encryption identity configuration that's retrieved.",
            in: 'path',
            name: 'cseEmailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseIdentitySchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const deleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}',
  tags: ['users'],
  description:
    'Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration.',
  operationId: 'gmail.users.settings.cse.identities.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cseEmailAddress: z
        .string()
        .openapi({
          param: {
            description:
              "The primary email address associated with the client-side encryption identity configuration that's removed.",
            in: 'path',
            name: 'cseEmailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const patchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressRoute = createRoute({
  method: 'patch',
  path: '/gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}',
  tags: ['users'],
  description:
    "Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887).",
  operationId: 'gmail.users.settings.cse.identities.patch',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'The email address of the client-side encryption identity to update.',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CseIdentitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseIdentitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsCseKeypairsRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/cse/keypairs',
  tags: ['users'],
  description: 'Lists client-side encryption key pairs for an authenticated user.',
  operationId: 'gmail.users.settings.cse.keypairs.list',
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
            description:
              'The number of key pairs to return. If not provided, the page size will default to 20 entries.',
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
            description:
              'Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCseKeyPairsResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsCseKeypairsRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/cse/keypairs',
  tags: ['users'],
  description:
    'Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user.',
  operationId: 'gmail.users.settings.cse.keypairs.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CseKeyPairSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseKeyPairSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}',
  tags: ['users'],
  description: 'Retrieves an existing client-side encryption key pair.',
  operationId: 'gmail.users.settings.cse.keypairs.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyPairId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the key pair to retrieve.',
            in: 'path',
            name: 'keyPairId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseKeyPairSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable',
  tags: ['users'],
  description:
    'Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method.',
  operationId: 'gmail.users.settings.cse.keypairs.disable',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyPairId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the key pair to turn off.',
            in: 'path',
            name: 'keyPairId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DisableCseKeyPairRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseKeyPairSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable',
  tags: ['users'],
  description:
    'Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities.',
  operationId: 'gmail.users.settings.cse.keypairs.enable',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyPairId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the key pair to turn on.',
            in: 'path',
            name: 'keyPairId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableCseKeyPairRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CseKeyPairSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate',
  tags: ['users'],
  description:
    "Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages.",
  operationId: 'gmail.users.settings.cse.keypairs.obliterate',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyPairId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the key pair to obliterate.',
            in: 'path',
            name: 'keyPairId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ObliterateCseKeyPairRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsDelegatesRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/delegates',
  tags: ['users'],
  description:
    'Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.delegates.list',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDelegatesResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsDelegatesRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/delegates',
  tags: ['users'],
  description:
    'Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.delegates.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DelegateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DelegateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsDelegatesDelegateEmailRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}',
  tags: ['users'],
  description:
    'Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.delegates.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      delegateEmail: z
        .string()
        .openapi({
          param: {
            description:
              'The email address of the user whose delegate relationship is to be retrieved.',
            in: 'path',
            name: 'delegateEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DelegateSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const deleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}',
  tags: ['users'],
  description:
    'Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.delegates.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      delegateEmail: z
        .string()
        .openapi({
          param: {
            description: 'The email address of the user to be removed as a delegate.',
            in: 'path',
            name: 'delegateEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsFiltersRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/filters',
  tags: ['users'],
  description: 'Lists the message filters of a Gmail user.',
  operationId: 'gmail.users.settings.filters.list',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFiltersResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsFiltersRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/filters',
  tags: ['users'],
  description: 'Creates a filter. Note: you can only create a maximum of 1,000 filters.',
  operationId: 'gmail.users.settings.filters.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FilterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsFiltersIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/filters/{id}',
  tags: ['users'],
  description: 'Gets a filter.',
  operationId: 'gmail.users.settings.filters.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the filter to be fetched.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const deleteGmailV1UsersUserIdSettingsFiltersIdRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/settings/filters/{id}',
  tags: ['users'],
  description: 'Immediately and permanently deletes the specified filter.',
  operationId: 'gmail.users.settings.filters.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the filter to be deleted.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsForwardingAddressesRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/forwardingAddresses',
  tags: ['users'],
  description: 'Lists the forwarding addresses for the specified account.',
  operationId: 'gmail.users.settings.forwardingAddresses.list',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListForwardingAddressesResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsForwardingAddressesRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/forwardingAddresses',
  tags: ['users'],
  description:
    "Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.",
  operationId: 'gmail.users.settings.forwardingAddresses.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ForwardingAddressSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ForwardingAddressSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}',
  tags: ['users'],
  description: 'Gets the specified forwarding address.',
  operationId: 'gmail.users.settings.forwardingAddresses.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      forwardingEmail: z
        .string()
        .openapi({
          param: {
            description: 'The forwarding address to be retrieved.',
            in: 'path',
            name: 'forwardingEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ForwardingAddressSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const deleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}',
  tags: ['users'],
  description:
    'Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.forwardingAddresses.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      forwardingEmail: z
        .string()
        .openapi({
          param: {
            description: 'The forwarding address to be deleted.',
            in: 'path',
            name: 'forwardingEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsImapRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/imap',
  tags: ['users'],
  description: 'Gets IMAP settings.',
  operationId: 'gmail.users.settings.getImap',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ImapSettingsSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const putGmailV1UsersUserIdSettingsImapRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/settings/imap',
  tags: ['users'],
  description: 'Updates IMAP settings.',
  operationId: 'gmail.users.settings.updateImap',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImapSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ImapSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsLanguageRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/language',
  tags: ['users'],
  description: 'Gets language settings.',
  operationId: 'gmail.users.settings.getLanguage',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LanguageSettingsSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const putGmailV1UsersUserIdSettingsLanguageRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/settings/language',
  tags: ['users'],
  description:
    'Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.',
  operationId: 'gmail.users.settings.updateLanguage',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LanguageSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LanguageSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsPopRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/pop',
  tags: ['users'],
  description: 'Gets POP settings.',
  operationId: 'gmail.users.settings.getPop',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PopSettingsSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const putGmailV1UsersUserIdSettingsPopRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/settings/pop',
  tags: ['users'],
  description: 'Updates POP settings.',
  operationId: 'gmail.users.settings.updatePop',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PopSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PopSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsSendAsRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/sendAs',
  tags: ['users'],
  description:
    'Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.',
  operationId: 'gmail.users.settings.sendAs.list',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSendAsResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsSendAsRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/sendAs',
  tags: ['users'],
  description:
    'Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource\'s verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.sendAs.create',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendAsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendAsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}',
  tags: ['users'],
  description:
    'Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.',
  operationId: 'gmail.users.settings.sendAs.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description: 'The send-as alias to be retrieved.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendAsSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const putGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}',
  tags: ['users'],
  description:
    'Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.sendAs.update',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description: 'The send-as alias to be updated.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendAsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendAsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}',
  tags: ['users'],
  description:
    'Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.sendAs.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description: 'The send-as alias to be deleted.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const patchGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute = createRoute({
  method: 'patch',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}',
  tags: ['users'],
  description: 'Patch the specified send-as alias.',
  operationId: 'gmail.users.settings.sendAs.patch',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description: 'The send-as alias to be updated.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendAsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendAsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo',
  tags: ['users'],
  description: 'Lists S/MIME configs for the specified send-as alias.',
  operationId: 'gmail.users.settings.sendAs.smimeInfo.list',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description:
              'The email address that appears in the "From:" header for mail sent using this alias.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSmimeInfoResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo',
  tags: ['users'],
  description:
    'Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.',
  operationId: 'gmail.users.settings.sendAs.smimeInfo.insert',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description:
              'The email address that appears in the "From:" header for mail sent using this alias.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SmimeInfoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SmimeInfoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}',
  tags: ['users'],
  description: 'Gets the specified S/MIME config for the specified send-as alias.',
  operationId: 'gmail.users.settings.sendAs.smimeInfo.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description:
              'The email address that appears in the "From:" header for mail sent using this alias.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The immutable ID for the SmimeInfo.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SmimeInfoSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}',
  tags: ['users'],
  description: 'Deletes the specified S/MIME config for the specified send-as alias.',
  operationId: 'gmail.users.settings.sendAs.smimeInfo.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description:
              'The email address that appears in the "From:" header for mail sent using this alias.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The immutable ID for the SmimeInfo.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultRoute =
  createRoute({
    method: 'post',
    path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault',
    tags: ['users'],
    description: 'Sets the default S/MIME config for the specified send-as alias.',
    operationId: 'gmail.users.settings.sendAs.smimeInfo.setDefault',
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
        userId: z
          .string()
          .openapi({
            param: {
              description:
                "The user's email address. The special value `me` can be used to indicate the authenticated user.",
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sendAsEmail: z
          .string()
          .openapi({
            param: {
              description:
                'The email address that appears in the "From:" header for mail sent using this alias.',
              in: 'path',
              name: 'sendAsEmail',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'The immutable ID for the SmimeInfo.',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
        Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
        Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      },
    ],
  })

export const postGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify',
  tags: ['users'],
  description:
    'Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.',
  operationId: 'gmail.users.settings.sendAs.verify',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sendAsEmail: z
        .string()
        .openapi({
          param: {
            description: 'The send-as alias to be verified.',
            in: 'path',
            name: 'sendAsEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
    },
  ],
})

export const getGmailV1UsersUserIdSettingsVacationRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/settings/vacation',
  tags: ['users'],
  description: 'Gets vacation responder settings.',
  operationId: 'gmail.users.settings.getVacation',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VacationSettingsSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const putGmailV1UsersUserIdSettingsVacationRoute = createRoute({
  method: 'put',
  path: '/gmail/v1/users/{userId}/settings/vacation',
  tags: ['users'],
  description: 'Updates vacation responder settings.',
  operationId: 'gmail.users.settings.updateVacation',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'User\'s email address. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VacationSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VacationSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.settings.basic'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.settings.basic'],
    },
  ],
})

export const postGmailV1UsersUserIdStopRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/stop',
  tags: ['users'],
  description: 'Stop receiving push notifications for the given user mailbox.',
  operationId: 'gmail.users.stop',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const getGmailV1UsersUserIdThreadsRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/threads',
  tags: ['users'],
  description: "Lists the threads in the user's mailbox.",
  operationId: 'gmail.users.threads.list',
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
      includeSpamTrash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include threads from `SPAM` and `TRASH` in the results.',
            in: 'query',
            name: 'includeSpamTrash',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      labelIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return threads with labels that match all of the specified label IDs.',
            explode: true,
            in: 'query',
            name: 'labelIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
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
              'Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token to retrieve a specific page of results in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListThreadsResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const getGmailV1UsersUserIdThreadsIdRoute = createRoute({
  method: 'get',
  path: '/gmail/v1/users/{userId}/threads/{id}',
  tags: ['users'],
  description: 'Gets the specified thread.',
  operationId: 'gmail.users.threads.get',
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
      format: z
        .enum(['full', 'metadata', 'minimal'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The format to return the messages in.',
            in: 'query',
            name: 'format',
            schema: { enum: ['full', 'metadata', 'minimal'], type: 'string' },
            required: false,
          },
        }),
      metadataHeaders: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'When given and format is METADATA, only include headers specified.',
            explode: true,
            in: 'query',
            name: 'metadataHeaders',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the thread to retrieve.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThreadSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.action'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.action'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.addons.current.message.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.addons.current.message.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})

export const deleteGmailV1UsersUserIdThreadsIdRoute = createRoute({
  method: 'delete',
  path: '/gmail/v1/users/{userId}/threads/{id}',
  tags: ['users'],
  description:
    'Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.',
  operationId: 'gmail.users.threads.delete',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Thread to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [{ Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] }],
})

export const postGmailV1UsersUserIdThreadsIdModifyRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/threads/{id}/modify',
  tags: ['users'],
  description:
    'Modifies the labels applied to the thread. This applies to all messages in the thread.',
  operationId: 'gmail.users.threads.modify',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the thread to modify.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyThreadRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThreadSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdThreadsIdTrashRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/threads/{id}/trash',
  tags: ['users'],
  description:
    'Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.',
  operationId: 'gmail.users.threads.trash',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the thread to Trash.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThreadSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdThreadsIdUntrashRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/threads/{id}/untrash',
  tags: ['users'],
  description:
    'Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.',
  operationId: 'gmail.users.threads.untrash',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the thread to remove from Trash.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThreadSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
  ],
})

export const postGmailV1UsersUserIdWatchRoute = createRoute({
  method: 'post',
  path: '/gmail/v1/users/{userId}/watch',
  tags: ['users'],
  description: 'Set up or update a push notification watch on the given user mailbox.',
  operationId: 'gmail.users.watch',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's email address. The special value `me` can be used to indicate the authenticated user.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchResponseSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.modify'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.modify'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/gmail.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  ],
})
