import { createRoute, z } from '@hono/zod-openapi'

const IMAddressResponseSchema = z
  .object({
    tcp_addr: z.string().exactOptional().openapi({ example: '127.0.0.1:5100' }),
    ws_addr: z.string().exactOptional().openapi({ example: 'ws://127.0.0.1:5200' }),
    wss_addr: z.string().exactOptional().openapi({ example: 'wss://127.0.0.1:5300' }),
  })
  .openapi({ required: [] })
  .openapi('IMAddressResponse')

const BatchIMAddressResponseSchema = z
  .object({
    uids: z.array(z.string()).exactOptional(),
    tcp_addr: z.string().exactOptional().openapi({ example: '127.0.0.1:5100' }),
    ws_addr: z.string().exactOptional().openapi({ example: 'ws://127.0.0.1:5200' }),
    wss_addr: z.string().exactOptional().openapi({ example: 'wss://127.0.0.1:5300' }),
  })
  .openapi({ required: [] })
  .openapi('BatchIMAddressResponse')

const UpdateTokenRequestSchema = z
  .object({
    uid: z.string().openapi({ example: 'user123' }),
    token: z.string().openapi({ example: 'new_auth_token_here' }),
    device_flag: z.int().exactOptional().openapi({ example: 1 }),
    device_level: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: ['uid', 'token'] })
  .openapi('UpdateTokenRequest')

const DeviceQuitRequestSchema = z
  .object({
    uid: z.string().openapi({ example: 'user123' }),
    device_flag: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: ['uid'] })
  .openapi('DeviceQuitRequest')

const OnlineStatusResponseSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ example: 'user123' }),
    online: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ example: 1 }),
    device_flag: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('OnlineStatusResponse')

const SystemUidsRequestSchema = z
  .object({ uids: z.array(z.string()).openapi({ example: ['system', 'admin', 'bot'] }) })
  .openapi({ required: ['uids'] })
  .openapi('SystemUidsRequest')

const SuccessResponseSchema = z
  .object({ status: z.string().exactOptional().openapi({ example: 'ok' }) })
  .openapi({ required: [] })
  .openapi('SuccessResponse')

const ConnectionRequestSchema = z
  .object({
    uid: z.string().openapi({ example: 'user123' }),
    conn_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 12345 }),
    node_id: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    op_node_id: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
  })
  .openapi({ required: ['uid', 'conn_id'] })
  .openapi('ConnectionRequest')

const ChannelCreateRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Channel ID. Cannot be empty or contain special characters.',
        example: 'group123',
      }),
    channel_type: z
      .int()
      .min(1)
      .max(255)
      .openapi({ description: 'Channel type. Cannot be 0. (1=person, 2=group, etc.)', example: 2 }),
    large: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          "Whether it's a large group (0=no, 1=yes). Large groups have different performance characteristics.",
      }),
    ban: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether the channel is banned (0=no, 1=yes). Banned channels prevent all users from sending/receiving messages except system accounts.',
      }),
    disband: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether the channel is disbanded (0=no, 1=yes). Disbanded channels are marked as deleted.',
      }),
    send_ban: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether sending messages is banned (0=no, 1=yes). When enabled, all members cannot send messages but can receive them. For person channels, the user can receive but not send messages.',
      }),
    allow_stranger: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether to allow strangers to send messages (0=no, 1=yes). Currently only supported for person channels. When enabled, strangers can send messages to the user.',
      }),
    reset: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether to reset subscribers (0=no, 1=yes). When enabled, all existing subscribers will be removed before adding new ones.',
      }),
    subscribers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of initial subscriber user IDs. Not supported for person channels (channel_type=1).',
        example: ['user1', 'user2', 'user3'],
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type'],
    description:
      'Request to create or update a channel with its basic information and initial subscribers.',
    examples: [
      {
        channel_id: 'group123',
        channel_type: 2,
        large: 0,
        ban: 0,
        send_ban: 0,
        subscribers: ['user1', 'user2', 'user3'],
      },
      { channel_id: 'user123', channel_type: 1, allow_stranger: 1, send_ban: 0 },
      {
        channel_id: 'group123',
        channel_type: 2,
        reset: 1,
        subscribers: ['new_user1', 'new_user2'],
      },
    ],
  })
  .openapi('ChannelCreateRequest')

const ChannelInfoRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({ description: 'Channel ID. Cannot be empty.', example: 'group123' }),
    channel_type: z
      .int()
      .min(1)
      .max(255)
      .openapi({ description: 'Channel type. Cannot be 0. (1=person, 2=group, etc.)', example: 2 }),
    large: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ example: 0, description: "Whether it's a large group (0=no, 1=yes)" }),
    ban: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ example: 0, description: 'Whether the channel is banned (0=no, 1=yes)' }),
    disband: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ example: 0, description: 'Whether the channel is disbanded (0=no, 1=yes)' }),
    send_ban: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ example: 0, description: 'Whether sending messages is banned (0=no, 1=yes)' }),
    allow_stranger: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether to allow strangers to send messages (0=no, 1=yes). Only supported for person channels.',
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type'],
    description:
      'Request to update or add channel basic information without affecting subscribers.',
    examples: [
      { channel_id: 'group123', channel_type: 2, large: 1, ban: 0, send_ban: 0 },
      { channel_id: 'user123', channel_type: 1, allow_stranger: 1, send_ban: 0 },
    ],
  })
  .openapi('ChannelInfoRequest')

const ChannelRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({ description: 'Channel ID. Cannot be empty.', example: 'group123' }),
    channel_type: z
      .int()
      .min(1)
      .max(255)
      .openapi({ description: 'Channel type (1=person, 2=group, etc.)', example: 2 }),
  })
  .openapi({
    required: ['channel_id', 'channel_type'],
    description: 'Generic channel request containing only channel_id and channel_type.',
  })
  .openapi('ChannelRequest')

const ChannelDeleteRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({ description: 'Channel ID to delete. Cannot be empty.', example: 'group123' }),
    channel_type: z
      .int()
      .min(2)
      .max(255)
      .openapi({
        description: 'Channel type. Cannot be 1 (person channel). (2=group, etc.)',
        example: 2,
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type'],
    description:
      'Request to delete a channel. This will disband the channel and clear all messages. Not supported for person channels.',
  })
  .openapi('ChannelDeleteRequest')

const SubscriberAddRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Channel ID. Cannot be empty or contain special characters.',
        example: 'group123',
      }),
    channel_type: z
      .int()
      .min(0)
      .max(255)
      .openapi({
        description: 'Channel type. Defaults to 2 (group) if 0. Cannot be 1 (person channel).',
        example: 2,
      }),
    reset: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether to reset existing subscribers (0=no, 1=yes). When enabled, all existing subscribers will be removed before adding new ones.',
      }),
    temp_subscriber: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether these are temporary subscribers (0=no, 1=yes). Temporary subscribers are no longer supported in new versions.',
      }),
    subscribers: z
      .array(z.string())
      .min(1)
      .openapi({
        description: 'List of user IDs to add as subscribers. Cannot be empty.',
        example: ['user1', 'user2', 'user3'],
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type', 'subscribers'],
    description:
      "Request to add subscribers to a channel. Not supported for person channels. Will create the channel if it doesn't exist.",
    examples: [
      { channel_id: 'group123', channel_type: 2, reset: 0, subscribers: ['user4', 'user5'] },
      {
        channel_id: 'group123',
        channel_type: 2,
        reset: 1,
        subscribers: ['user1', 'user2', 'user3'],
      },
    ],
  })
  .openapi('SubscriberAddRequest')

const SubscriberRemoveRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Channel ID. Cannot be empty or contain special characters.',
        example: 'group123',
      }),
    channel_type: z
      .int()
      .min(2)
      .max(255)
      .openapi({
        description: 'Channel type. Cannot be 1 (person channel). (2=group, etc.)',
        example: 2,
      }),
    temp_subscriber: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Whether these are temporary subscribers (0=no, 1=yes). Temporary subscribers are no longer supported in new versions.',
      }),
    subscribers: z
      .array(z.string())
      .min(1)
      .openapi({
        description: 'List of user IDs to remove from subscribers. Cannot be empty.',
        example: ['user1', 'user2', 'user3'],
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type', 'subscribers'],
    description:
      'Request to remove subscribers from a channel. Not supported for person channels. Will also delete their conversations.',
  })
  .openapi('SubscriberRemoveRequest')

const MessageHeaderSchema = z
  .object({
    no_persist: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description: 'Whether message should not be persisted (0=persist, 1=no persist)',
      }),
    red_dot: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ example: 1, description: 'Whether to show red dot notification (0=no, 1=yes)' }),
    sync_once: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        example: 0,
        description: 'Whether message should be synced only once (0=no, 1=yes)',
      }),
  })
  .openapi({ required: [] })
  .openapi('MessageHeader')

const MessageSendRequestSchema = z
  .object({
    header: MessageHeaderSchema.exactOptional(),
    client_msg_no: z.string().exactOptional().openapi({ example: 'client_msg_123' }),
    stream_no: z.string().exactOptional().openapi({ example: 'stream_456' }),
    from_uid: z.string().exactOptional().openapi({ example: 'user123' }),
    channel_id: z.string().exactOptional().openapi({ example: 'group123' }),
    channel_type: z.int().exactOptional().openapi({ example: 2 }),
    expire: z
      .int32()
      .exactOptional()
      .openapi({ example: 0, description: 'Message expiration time in seconds' }),
    subscribers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Specific subscribers to send message to' }),
    payload: z
      .string()
      .openapi({ example: 'SGVsbG8gV29ybGQ=', description: 'Base64 encoded message content' }),
    tag_key: z.string().exactOptional().openapi({ example: 'important' }),
  })
  .openapi({ required: ['payload'] })
  .openapi('MessageSendRequest')

const MessageSendResponseSchema = z
  .object({
    message_id: z
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
      .openapi({ type: 'integer', format: 'int64', example: 123456789 }),
    message_seq: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1001 }),
    client_msg_no: z.string().exactOptional().openapi({ example: 'client_msg_123' }),
  })
  .openapi({ required: [] })
  .openapi('MessageSendResponse')

const MessageEventKeyMetaSchema = z
  .object({
    event_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Event key identifier inside the message.', example: 'main' }),
    status: z
      .enum(['open', 'closed', 'error', 'cancelled'])
      .exactOptional()
      .openapi({ description: 'Current status of this event key projection.', example: 'open' }),
    last_msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Last msg_event_seq applied to this event key.',
        example: 12,
      }),
    snapshot: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional merged snapshot payload (present in full summary mode).' }),
    end_reason: z
      .int()
      .exactOptional()
      .openapi({ description: 'Terminal reason code for stream-like event types.', example: 0 }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Terminal error text for stream.error.', example: '' }),
  })
  .openapi({ required: [] })
  .openapi('MessageEventKeyMeta')

const MessageEventMetaSchema = z
  .object({
    has_events: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this message has associated event states.', example: true }),
    event_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Version of event projection (currently equals last_msg_event_seq).',
        example: 12,
      }),
    last_msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Largest msg_event_seq among all event keys.',
        example: 12,
      }),
    event_key_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Count of event keys associated with this message.', example: 2 }),
    open_event_key_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Count of event keys still in open state.', example: 1 }),
    event_keys: z.array(MessageEventKeyMetaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MessageEventMeta')

const MessageEventSyncHintSchema = z
  .object({
    client_msg_no: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Anchor message client message number.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    from_msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Suggested cursor for `/message/eventsync`.',
        example: 0,
      }),
  })
  .openapi({ required: [] })
  .openapi('MessageEventSyncHint')

const MessageResponseSchema = z
  .object({
    header: MessageHeaderSchema.exactOptional(),
    setting: z.int().exactOptional().openapi({ description: 'Message setting flags.', example: 0 }),
    message_id: z
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
      .openapi({ type: 'integer', format: 'int64', example: 123456789 }),
    message_idstr: z
      .string()
      .exactOptional()
      .openapi({ description: 'String representation of message_id.', example: '123456789' }),
    message_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', example: 1001 }),
    client_msg_no: z.string().exactOptional().openapi({ example: 'client_msg_123' }),
    end: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Legacy stream end flag (1 means stream reached terminal state).',
        example: 0,
      }),
    end_reason: z
      .int()
      .exactOptional()
      .openapi({ description: 'Legacy stream end reason code.', example: 0 }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Legacy stream error message.', example: '' }),
    stream_data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Legacy merged stream data from main event_key snapshot.' }),
    event_meta: MessageEventMetaSchema.exactOptional(),
    event_sync_hint: MessageEventSyncHintSchema.exactOptional(),
    from_uid: z.string().exactOptional().openapi({ example: 'user123' }),
    channel_id: z.string().exactOptional().openapi({ example: 'group123' }),
    channel_type: z.int().exactOptional().openapi({ example: 2 }),
    topic: z.string().exactOptional().openapi({ example: 'topic_1' }),
    expire: z.uint32().exactOptional().openapi({ example: 0 }),
    timestamp: z.int32().exactOptional().openapi({ example: 1640995200 }),
    payload: z.string().exactOptional().openapi({ example: 'SGVsbG8gV29ybGQ=' }),
  })
  .openapi({ required: [] })
  .openapi('MessageResponse')

const MessagesSearchRequestSchema = z
  .object({
    message_ids: z
      .array(
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
      )
      .openapi({ example: [123456789, 123456790, 123456791] }),
  })
  .openapi({ required: ['message_ids'] })
  .openapi('MessagesSearchRequest')

const MessageSearchRequestSchema = z
  .object({
    message_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 123456789 }),
  })
  .openapi({ required: ['message_id'] })
  .openapi('MessageSearchRequest')

const ClearUnreadRequestSchema = z
  .object({
    uid: z.string().openapi({ example: 'user123' }),
    channel_id: z.string().openapi({ example: 'group123' }),
    channel_type: z.int().openapi({ example: 2 }),
  })
  .openapi({ required: ['uid', 'channel_id', 'channel_type'] })
  .openapi('ClearUnreadRequest')

const ConversationListRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    cursor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque membership directory cursor' }),
    limit: z
      .int()
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'Maximum membership candidates scanned' }),
    completed_coverage: z
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
        description: "Coverage timestamp from the client's last completed directory pass",
      }),
  })
  .openapi({ required: ['uid'] })
  .openapi('ConversationListRequest')

const LegacyConversationSyncRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    version: z
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
          'Legacy sync version. A positive value resumes from the effective read position when no channel cursor is supplied.',
      }),
    last_msg_seqs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Legacy per-channel cursors encoded as channel_id:channel_type:last_message_seq entries separated by |.',
        example: 'group123:2:100|user456:1:20',
      }),
    msg_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum recent messages returned per conversation.', example: 20 }),
    only_unread: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'Return unread conversations and channels explicitly present in last_msg_seqs.',
      }),
    exclude_channel_types: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description: 'Legacy channel types to exclude unless explicitly present in last_msg_seqs.',
      }),
    page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Legacy one-based page number. Zero disables pagination.' }),
    page_size: z
      .int()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Legacy page size. Values at or below zero default to 100 when page is positive.',
      }),
  })
  .openapi({ required: ['uid'] })
  .openapi('LegacyConversationSyncRequest')

const ConversationListKeySchema = z
  .object({
    channel_id: z.string().openapi({ example: 'group123' }),
    channel_type: z.int().openapi({ example: 2 }),
  })
  .openapi({ required: ['channel_id', 'channel_type'] })
  .openapi('ConversationListKey')

const ConversationLastMessageSchema = z
  .object({
    message_id: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1001 }),
    message_idstr: z.string().exactOptional().openapi({ example: '1001' }),
    message_seq: z
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
    from_uid: z.string().exactOptional().openapi({ example: 'user123' }),
    client_msg_no: z.string().exactOptional(),
    server_timestamp_ms: z
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
    payload: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConversationLastMessage')

const ConversationListItemSchema = ConversationListKeySchema.and(
  z
    .object({
      active_at: z
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
      read_seq: z
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
      deleted_to_seq: z
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
      unread: z
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
      last_message: ConversationLastMessageSchema.nullable().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ConversationListItem')

const ConversationListResponseSchema = z
  .object({
    conversations: z.array(ConversationListItemSchema),
    deletes: z.array(ConversationListKeySchema),
    next_cursor: z.string().exactOptional(),
    done: z.boolean(),
    coverage: z
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
    tombstones_retained_since: z
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
    reset_required: z.boolean(),
  })
  .openapi({
    required: [
      'conversations',
      'deletes',
      'done',
      'coverage',
      'tombstones_retained_since',
      'reset_required',
    ],
  })
  .openapi('ConversationListResponse')

const LegacyConversationSyncItemSchema = z
  .object({
    channel_id: z.string(),
    channel_type: z.int(),
    unread: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64' }),
    timestamp: z
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
        description: 'Last returned message timestamp in Unix seconds.',
      }),
    last_msg_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64' }),
    last_client_msg_no: z.string(),
    offset_msg_seq: z
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
    readed_to_msg_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64' }),
    version: z
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
        description: 'Last returned message timestamp expressed as Unix nanoseconds.',
      }),
    recents: z.array(MessageResponseSchema),
  })
  .openapi({
    required: [
      'channel_id',
      'channel_type',
      'unread',
      'timestamp',
      'last_msg_seq',
      'last_client_msg_no',
      'offset_msg_seq',
      'readed_to_msg_seq',
      'version',
      'recents',
    ],
  })
  .openapi('LegacyConversationSyncItem')

const ConnectionInfoSchema = z
  .object({
    cid: z
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
      .openapi({ type: 'integer', format: 'int64', example: 12345 }),
    uid: z.string().exactOptional().openapi({ example: 'user123' }),
    device_id: z.string().exactOptional().openapi({ example: 'device_456' }),
    device_flag: z.int().exactOptional().openapi({ example: 1 }),
    uptime: z.string().exactOptional().openapi({ example: '1h30m' }),
    idle: z.string().exactOptional().openapi({ example: '5m' }),
    in_msgs: z
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
      .openapi({ type: 'integer', format: 'int64', example: 100 }),
    out_msgs: z
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
      .openapi({ type: 'integer', format: 'int64', example: 95 }),
    in_bytes: z
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
      .openapi({ type: 'integer', format: 'int64', example: 10240 }),
    out_bytes: z
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
      .openapi({ type: 'integer', format: 'int64', example: 9728 }),
  })
  .openapi({ required: [] })
  .openapi('ConnectionInfo')

const ConnzResponseSchema = z
  .object({
    now: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2023-01-01T12:00:00Z' }),
    num_connections: z.int().exactOptional().openapi({ example: 1000 }),
    total: z.int().exactOptional().openapi({ example: 1000 }),
    offset: z.int().exactOptional().openapi({ example: 0 }),
    limit: z.int().exactOptional().openapi({ example: 20 }),
    connections: z.array(ConnectionInfoSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConnzResponse')

const VarzResponseSchema = z
  .object({
    server_id: z.string().exactOptional().openapi({ example: '1' }),
    server_name: z.string().exactOptional().openapi({ example: 'WuKongIM' }),
    version: z.string().exactOptional().openapi({ example: '2.0.0' }),
    connections: z.int().exactOptional().openapi({ example: 1000 }),
    uptime: z.string().exactOptional().openapi({ example: '24h30m' }),
    cpu: z.float32().exactOptional().openapi({ example: 15.5 }),
    mem: z
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
      .openapi({ type: 'integer', format: 'int64', example: 536870912 }),
    in_msgs: z
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
      .openapi({ type: 'integer', format: 'int64', example: 10000 }),
    out_msgs: z
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
      .openapi({ type: 'integer', format: 'int64', example: 9500 }),
    in_bytes: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1048576 }),
    out_bytes: z
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
      .openapi({ type: 'integer', format: 'int64', example: 972800 }),
  })
  .openapi({ required: [] })
  .openapi('VarzResponse')

const LoginRequestSchema = z
  .object({
    username: z.string().openapi({ example: 'admin' }),
    password: z.string().openapi({ example: 'password123' }),
  })
  .openapi({ required: ['username', 'password'] })
  .openapi('LoginRequest')

const LoginResponseSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }),
    expire: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1640995200 }),
  })
  .openapi({ required: [] })
  .openapi('LoginResponse')

const BlacklistRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Channel ID. Cannot be empty or contain special characters.',
        example: 'group123',
      }),
    channel_type: z
      .int()
      .min(1)
      .max(255)
      .openapi({ description: 'Channel type. Cannot be 0. (1=person, 2=group, etc.)', example: 2 }),
    uids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of user IDs to add/remove from blacklist. Required for add/remove operations, optional for set operation.',
        example: ['user1', 'user2', 'user3'],
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type'],
    description:
      'Request to manage channel blacklist. For blacklist_set operation, uids can be empty to clear the entire blacklist.',
    examples: [
      { channel_id: 'group123', channel_type: 2, uids: ['user1', 'user2'] },
      { channel_id: 'group123', channel_type: 2, uids: ['user1', 'user2', 'user3'] },
      { channel_id: 'group123', channel_type: 2, uids: [] },
    ],
  })
  .openapi('BlacklistRequest')

const WhitelistRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Channel ID. Cannot be empty or contain special characters.',
        example: 'group123',
      }),
    channel_type: z
      .int()
      .min(1)
      .max(255)
      .openapi({ description: 'Channel type. Cannot be 0. (1=person, 2=group, etc.)', example: 2 }),
    uids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of user IDs to add/remove from whitelist. Required for add/remove operations, optional for set operation.',
        example: ['user1', 'user2', 'user3'],
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type'],
    description:
      'Request to manage channel whitelist. For whitelist_set operation, uids can be empty to clear the entire whitelist.',
    examples: [
      { channel_id: 'group123', channel_type: 2, uids: ['user1', 'user2'] },
      { channel_id: 'group123', channel_type: 2, uids: ['user1', 'user2', 'user3'] },
      { channel_id: 'group123', channel_type: 2, uids: [] },
    ],
  })
  .openapi('WhitelistRequest')

const MigrateResultResponseSchema = z
  .object({
    status: z
      .enum(['running', 'completed', 'migrated'])
      .exactOptional()
      .openapi({ example: 'completed' }),
    step: z.string().exactOptional().openapi({ example: 'message' }),
    last_err: z.string().nullable().exactOptional().openapi({ example: null }),
    try_count: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('MigrateResultResponse')

const ChannelMessageSyncRequestSchema = z
  .object({
    login_uid: z.string().openapi({ description: 'Current logged in user ID', example: 'user123' }),
    channel_id: z.string().openapi({ description: 'Channel ID', example: 'channel456' }),
    channel_type: z
      .union([z.literal(1), z.literal(2)])
      .openapi({ description: 'Channel type (1=person, 2=group)' }),
    start_message_seq: z
      .int()
      .exactOptional()
      .openapi({ description: 'Start message sequence (inclusive)', example: 100 }),
    end_message_seq: z
      .int()
      .exactOptional()
      .openapi({ description: 'End message sequence (exclusive)', example: 200 }),
    limit: z
      .int()
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Maximum number of messages to return', example: 50 }),
    pull_mode: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Pull mode (0=down, 1=up)' }),
    event_summary_mode: z
      .enum(['basic', 'full'])
      .default('full')
      .exactOptional()
      .openapi({
        description:
          'Event summary mode for stream messages (`basic` or `full`). `full` includes snapshot payload.',
        example: 'full',
      }),
  })
  .openapi({ required: ['login_uid', 'channel_id', 'channel_type'] })
  .openapi('ChannelMessageSyncRequest')

const ChannelMessageSyncResponseSchema = z
  .object({
    start_message_seq: z
      .int()
      .exactOptional()
      .openapi({ description: 'Start message sequence', example: 100 }),
    end_message_seq: z
      .int()
      .exactOptional()
      .openapi({ description: 'End message sequence', example: 200 }),
    more: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Whether there are more messages (1=yes, 0=no)' }),
    messages: z.array(MessageResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelMessageSyncResponse')

const TagResponseSchema = z
  .object({
    tag: z.string().exactOptional().openapi({ description: 'Tag name', example: 'important' }),
    count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of items with this tag', example: 42 }),
  })
  .openapi({ required: [] })
  .openapi('TagResponse')

const TagRemoveRequestSchema = z
  .object({ tag: z.string().openapi({ description: 'Tag name to remove', example: 'obsolete' }) })
  .openapi({ required: ['tag'] })
  .openapi('TagRemoveRequest')

const ManagerLoginRequestSchema = z
  .object({
    username: z.string().openapi({ description: 'Manager username', example: 'admin' }),
    password: z.string().openapi({ description: 'Manager password', example: 'password123' }),
  })
  .openapi({ required: ['username', 'password'] })
  .openapi('ManagerLoginRequest')

const ManagerLoginResponseSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Authentication token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      }),
    expires_in: z
      .int()
      .exactOptional()
      .openapi({ description: 'Token expiration time in seconds', example: 3600 }),
  })
  .openapi({ required: [] })
  .openapi('ManagerLoginResponse')

const SystemSettingsResponseSchema = z
  .object({
    logger: z
      .object({
        trace_on: z
          .union([z.literal(0), z.literal(1)])
          .exactOptional()
          .openapi({ description: 'Whether tracing is enabled (1=yes, 0=no)' }),
        loki_on: z
          .union([z.literal(0), z.literal(1)])
          .exactOptional()
          .openapi({ description: 'Whether Loki logging is enabled (1=yes, 0=no)' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    prometheus_on: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Whether Prometheus metrics are enabled (1=yes, 0=no)' }),
    stress_on: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Whether stress testing is enabled (1=yes, 0=no)' }),
  })
  .openapi({ required: [] })
  .openapi('SystemSettingsResponse')

const MessageSyncRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    message_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: "Client's maximum message sequence number for incremental sync",
        example: 12345,
      }),
    limit: z
      .int()
      .default(200)
      .exactOptional()
      .openapi({ description: 'Maximum number of messages to sync', example: 200 }),
  })
  .openapi({ required: ['uid'] })
  .openapi('MessageSyncRequest')

const MessageSyncAckRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    last_message_seq: z
      .int()
      .openapi({ description: 'Last message sequence number acknowledged', example: 12345 }),
  })
  .openapi({ required: ['uid', 'last_message_seq'] })
  .openapi('MessageSyncAckRequest')

const SetUnreadRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    channel_id: z.string().openapi({ description: 'Channel ID', example: 'channel456' }),
    channel_type: z
      .union([z.literal(1), z.literal(2)])
      .openapi({ description: 'Channel type (1=person, 2=group)' }),
    unread: z
      .int()
      .openapi({
        description: 'Maximum unread count; the stored read_seq never moves backward',
        example: 5,
      }),
  })
  .openapi({ required: ['uid', 'channel_id', 'channel_type', 'unread'] })
  .openapi('SetUnreadRequest')

const DeleteConversationRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    channel_id: z.string().openapi({ description: 'Channel ID', example: 'channel456' }),
    channel_type: z
      .union([z.literal(1), z.literal(2)])
      .openapi({ description: 'Channel type (1=person, 2=group)' }),
  })
  .openapi({ required: ['uid', 'channel_id', 'channel_type'] })
  .openapi('DeleteConversationRequest')

const ChannelResponseSchema = z
  .object({
    channel_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel ID', example: 'channel456' }),
    channel_type: z.int().exactOptional().openapi({ description: 'Channel type', example: 2 }),
    large: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Whether channel is large (1=yes, 0=no)' }),
    ban: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Whether channel is banned (1=yes, 0=no)' }),
    disband: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'Whether channel is disbanded (1=yes, 0=no)' }),
  })
  .openapi({ required: [] })
  .openapi('ChannelResponse')

const TmpChannelSubscriberSetRequestSchema = z
  .object({
    channel_id: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Temporary channel ID. Cannot contain special characters.',
        example: 'tmp_channel_123',
      }),
    uids: z
      .array(z.string())
      .min(1)
      .openapi({
        description: 'List of user IDs to set as subscribers for the temporary channel',
        example: ['user1', 'user2', 'user3'],
      }),
  })
  .openapi({
    required: ['channel_id', 'uids'],
    description:
      'Request to set subscribers for a temporary channel. Used for internal cluster communication.',
  })
  .openapi('TmpChannelSubscriberSetRequest')

const UpdatePluginNoRequestSchema = z
  .object({
    uid: z.string().openapi({ description: 'User ID', example: 'user123' }),
    plugin_no: z.string().openapi({ description: 'Plugin number', example: 'plugin_001' }),
  })
  .openapi({ required: ['uid', 'plugin_no'] })
  .openapi('UpdatePluginNoRequest')

const EventAppendRequestSchema = z
  .object({
    channel_id: z
      .string()
      .openapi({
        description: "Channel ID. For person-to-person channels, this is the peer's UID.",
        example: 'user_002',
      }),
    channel_type: z
      .int()
      .openapi({ description: 'Channel type. 1 = person-to-person, 2 = group.', example: 1 }),
    from_uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sender UID. Auto-filled from cache if the anchor message was sent with `is_stream: 1` on the same node. Defaults to system UID if both cache miss and omitted.',
        example: 'user_001',
      }),
    message_id: z
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
          'Message ID of the anchor message, used for online push correlation. Auto-filled from cache if the anchor message was sent with `is_stream: 1` on the same node.',
        example: 123456789,
      }),
    client_msg_no: z
      .string()
      .openapi({
        description: 'Client message number of the anchor message. The message must already exist.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    event_id: z
      .string()
      .openapi({
        description:
          'Unique event identifier. Used for idempotency on persisted events (terminal events like stream.close / stream.error / stream.cancel).',
        example: 'evt_abc123',
      }),
    event_type: z
      .string()
      .openapi({
        description:
          'Event type. Case-insensitive. `stream.delta` uses in-memory fast path; other event types are persisted.',
        example: 'stream.delta',
      }),
    event_key: z
      .string()
      .default('main')
      .exactOptional()
      .openapi({
        description:
          'Event key for partitioning multiple event lanes within the same message. Defaults to `main`.',
        example: 'main',
      }),
    visibility: z
      .enum(['public', 'private', 'restricted'])
      .exactOptional()
      .openapi({ description: 'Event visibility.', example: 'public' }),
    occurred_at: z
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
          'Event timestamp in milliseconds since epoch. Auto-filled with current time if omitted.',
        example: 1709827200000,
      }),
    payload: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Event payload. Structure depends on event_type. For text deltas: `{"kind":"text","delta":"..."}`. For close: `{"end_reason":0}`. For error: `{"error":"..."}`. For non-text deltas: any JSON object.',
        example: { kind: 'text', delta: 'Hello' },
      }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional key-value headers attached to the event.' }),
  })
  .openapi({
    required: ['channel_id', 'channel_type', 'client_msg_no', 'event_id', 'event_type'],
    description: "Append an event to a message's event stream.",
  })
  .openapi('EventAppendRequest')

const EventAppendResponseSchema = z
  .object({
    client_msg_no: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Client message number.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    event_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Normalized event key (e.g. empty -> `main`).', example: 'main' }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Event ID echoed back.', example: 'evt_abc123' }),
    msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description:
          'Message-level event sequence number. For delta events (cache path), this is the last persisted seq. For persisted events, this is the newly allocated seq.',
        example: 5,
      }),
    stream_status: z
      .enum(['open', 'closed', 'error', 'cancelled'])
      .exactOptional()
      .openapi({
        description: 'Current event-key status after applying this event.',
        example: 'open',
      }),
    channel_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel ID (original, not fakeChannelID).', example: 'user_002' }),
    channel_type: z.int().exactOptional().openapi({ description: 'Channel type.', example: 1 }),
    from_uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sender UID.', example: 'user_001' }),
  })
  .openapi({ required: [] })
  .openapi('EventAppendResponse')

const EventSyncRequestSchema = z
  .object({
    channel_id: z.string().openapi({ description: 'Channel ID.', example: 'user_002' }),
    channel_type: z
      .int()
      .openapi({ description: 'Channel type. 1 = person, 2 = group.', example: 1 }),
    from_uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sender UID. Required for person-to-person channels to compute the internal channel ID.',
        example: 'user_001',
      }),
    client_msg_no: z
      .string()
      .openapi({
        description: 'Client message number to sync events for.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    event_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional event_key filter. If set, only projected state for this event key is returned.',
        example: 'main',
      }),
    from_msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        default: 0,
        description:
          'Cursor: only return events with `msg_event_seq > from_msg_event_seq`. Use 0 to fetch from the beginning.',
        example: 0,
      }),
    limit: z
      .int()
      .max(2000)
      .default(200)
      .exactOptional()
      .openapi({
        description: 'Maximum number of events to return. Default 200, max 2000.',
        example: 50,
      }),
    include_private: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Set to 1 to include events with `private` or `restricted` visibility. Default 0 (exclude).',
        example: 0,
      }),
  })
  .openapi({
    required: ['channel_id', 'channel_type', 'client_msg_no'],
    description: 'Sync events for a specific message.',
  })
  .openapi('EventSyncRequest')

const EventSyncItemSchema = z
  .object({
    msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Event sequence number.',
        example: 3,
      }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last event ID applied to this event key.', example: 'evt_close_1' }),
    event_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Event key identifier.', example: 'main' }),
    event_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last event type applied to this event key.',
        example: 'stream.close',
      }),
    visibility: z
      .string()
      .exactOptional()
      .openapi({ description: 'Visibility of the last event.', example: 'public' }),
    occurred_at: z
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
        description: 'Timestamp of the last event in milliseconds.',
        example: 1709827200000,
      }),
    payload: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Projected payload/snapshot. For text streams, typically `{"kind":"text","text":"..."}`.',
      }),
  })
  .openapi({
    description:
      'Projected event state built from stored message-event state, not the raw append log.',
    required: [],
  })
  .openapi('EventSyncItem')

const EventSyncResponseSchema = z
  .object({
    client_msg_no: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Echoed client message number.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    from_msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'The cursor that was passed in the request.',
        example: 0,
      }),
    next_msg_event_seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description:
          'Cursor for the next page. Pass this as `from_msg_event_seq` in the next request.',
        example: 5,
      }),
    more: z
      .int()
      .exactOptional()
      .openapi({
        description: '1 if there are more events beyond this page, 0 otherwise.',
        example: 0,
      }),
    filtered_by_event_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The event_key filter applied, empty string if no filter.',
        example: '',
      }),
    events: z
      .array(EventSyncItemSchema)
      .exactOptional()
      .openapi({
        description: 'List of projected event states, ordered by msg_event_seq ascending.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EventSyncResponse')

const ErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message', example: 'Invalid request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Detailed error description',
        example: 'The provided parameters are invalid',
      }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['System'],
  summary: 'Health Check',
  description: 'Check the health status of the WuKongIM server and cluster',
  responses: {
    200: {
      description: 'Server is healthy',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ example: 'ok' }) })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server is unhealthy',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ example: 'error' }),
              message: z
                .string()
                .exactOptional()
                .openapi({ example: 'Cluster status check failed' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMigrateResultRoute = createRoute({
  method: 'get',
  path: '/migrate/result',
  tags: ['System'],
  summary: 'Get Migration Result',
  description: 'Get the result of database migration operations',
  responses: {
    200: {
      description: 'Migration result',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ description: 'Migration status' }),
              message: z.string().exactOptional().openapi({ description: 'Migration message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDocsRoute = createRoute({
  method: 'get',
  path: '/docs',
  tags: ['Documentation'],
  summary: 'API Documentation',
  description: 'Swagger UI interface for API documentation (available in development mode only)',
  responses: {
    200: { description: 'Swagger UI HTML page', content: { 'text/html': { schema: z.string() } } },
    403: {
      description: 'Documentation disabled in release mode',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDocsOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/docs/openapi.json',
  tags: ['Documentation'],
  summary: 'OpenAPI Specification',
  description: 'Get the OpenAPI 3.0 specification file',
  responses: {
    200: {
      description: 'OpenAPI specification',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    403: {
      description: 'Documentation disabled in release mode',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDocsHealthRoute = createRoute({
  method: 'get',
  path: '/docs/health',
  tags: ['Documentation'],
  summary: 'Documentation Service Health',
  description: 'Health check for the documentation service',
  responses: {
    200: {
      description: 'Documentation service status',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              service: z.string().exactOptional().openapi({ example: 'docs' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'WuKongIM API Documentation Service' }),
              endpoints: z
                .object({
                  swagger_ui: z.string().exactOptional().openapi({ example: '/docs' }),
                  openapi_spec: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '/docs/openapi.json' }),
                  health_check: z.string().exactOptional().openapi({ example: '/docs/health' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRouteRoute = createRoute({
  method: 'get',
  path: '/route',
  tags: ['Route'],
  summary: 'Get User IM Address',
  description: 'Get the IM connection address for users',
  request: {
    query: z.object({
      intranet: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'intranet',
            in: 'query',
            description: 'Whether to return intranet address (1 for true, 0 for false)',
            schema: { type: 'integer', enum: [0, 1], default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'IM connection addresses',
      content: { 'application/json': { schema: IMAddressResponseSchema } },
    },
  },
})

export const postRouteBatchRoute = createRoute({
  method: 'post',
  path: '/route/batch',
  tags: ['Route'],
  summary: 'Batch Get User IM Addresses',
  description: 'Get IM connection addresses for multiple users',
  request: {
    query: z.object({
      intranet: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'intranet',
            in: 'query',
            description: 'Whether to return intranet address (1 for true, 0 for false)',
            schema: { type: 'integer', enum: [0, 1], default: 0 },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ example: ['user1', 'user2', 'user3'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Batch IM connection addresses',
      content: { 'application/json': { schema: z.array(BatchIMAddressResponseSchema) } },
    },
  },
})

export const postUserTokenRoute = createRoute({
  method: 'post',
  path: '/user/token',
  tags: ['User'],
  summary: 'Update User Token',
  description: 'Update authentication token for a user',
  request: {
    body: { content: { 'application/json': { schema: UpdateTokenRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Token updated successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postUserDeviceQuitRoute = createRoute({
  method: 'post',
  path: '/user/device_quit',
  tags: ['User'],
  summary: 'Force Device Quit',
  description: 'Force a user device to quit/disconnect',
  request: {
    body: { content: { 'application/json': { schema: DeviceQuitRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Device quit successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postUserOnlinestatusRoute = createRoute({
  method: 'post',
  path: '/user/onlinestatus',
  tags: ['User'],
  summary: 'Get User Online Status',
  description: 'Get online status for multiple users',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ example: ['user1', 'user2', 'user3'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User online status',
      content: { 'application/json': { schema: z.array(OnlineStatusResponseSchema) } },
    },
  },
})

export const getUserSystemuidsRoute = createRoute({
  method: 'get',
  path: '/user/systemuids',
  tags: ['User'],
  summary: 'Get System UIDs',
  description: 'Get list of system user IDs',
  responses: {
    200: {
      description: 'List of system UIDs',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ example: ['system', 'admin', 'bot'] }),
        },
      },
    },
  },
})

export const postUserSystemuidsAddRoute = createRoute({
  method: 'post',
  path: '/user/systemuids_add',
  tags: ['User'],
  summary: 'Add System UIDs',
  description: 'Add users to system UID list',
  request: {
    body: { content: { 'application/json': { schema: SystemUidsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'System UIDs added successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postUserSystemuidsRemoveRoute = createRoute({
  method: 'post',
  path: '/user/systemuids_remove',
  tags: ['User'],
  summary: 'Remove System UIDs',
  description: 'Remove users from system UID list',
  request: {
    body: { content: { 'application/json': { schema: SystemUidsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'System UIDs removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postUserSystemuidsAddToCacheRoute = createRoute({
  method: 'post',
  path: '/user/systemuids_add_to_cache',
  tags: ['User'],
  summary: 'Add System UIDs to Cache',
  description: 'Add system UIDs to cache only (internal use)',
  request: {
    body: { content: { 'application/json': { schema: SystemUidsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'System UIDs added to cache successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postUserSystemuidsRemoveFromCacheRoute = createRoute({
  method: 'post',
  path: '/user/systemuids_remove_from_cache',
  tags: ['User'],
  summary: 'Remove System UIDs from Cache',
  description: 'Remove system UIDs from cache only (internal use)',
  request: {
    body: { content: { 'application/json': { schema: SystemUidsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'System UIDs removed from cache successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postUserUpdatePluginNoRoute = createRoute({
  method: 'post',
  path: '/user/update_plugin_no',
  tags: ['User'],
  summary: 'Update Plugin Number',
  description: 'Update plugin number for a user',
  request: {
    body: {
      content: { 'application/json': { schema: UpdatePluginNoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Plugin number updated successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postConnRemoveRoute = createRoute({
  method: 'post',
  path: '/conn/remove',
  tags: ['Connection'],
  summary: 'Remove Connection',
  description: 'Remove a specific user connection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Connection removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postConnKickRoute = createRoute({
  method: 'post',
  path: '/conn/kick',
  tags: ['Connection'],
  summary: 'Kick Connection',
  description: 'Kick/disconnect a specific user connection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Connection kicked successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postChannelRoute = createRoute({
  method: 'post',
  path: '/channel',
  tags: ['Channel'],
  summary: 'Create or Update Channel | 创建或更新频道',
  description:
    'Create a new channel or update an existing channel with basic information and initial subscribers. This is the primary endpoint for channel management.\n\n**功能说明：**\n- 创建新频道或更新现有频道\n- 设置频道基本信息（大群、禁言、解散等状态）\n- 添加初始订阅者（不支持个人频道）\n- 支持重置订阅者列表\n- 个人频道支持陌生人消息设置\n\n**Channel Types:**\n- 1: Person channel (个人频道) - Direct messaging\n- 2: Group channel (群组频道) - Group messaging\n- Other values: Custom channel types\n\n**Important Notes:**\n- Person channels (channel_type=1) do not support subscribers\n- Use reset=1 to replace all existing subscribers\n- Special characters in channel_id are not allowed\n- System will automatically route to appropriate cluster node',
  request: {
    body: {
      content: { 'application/json': { schema: ChannelCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Channel created/updated successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
            special_characters: {
              summary: 'Special characters in channel ID',
              value: { error: '频道ID不能包含特殊字符！' },
            },
            person_channel_subscribers: {
              summary: 'Person channel with subscribers',
              value: { error: '个人频道不支持订阅者！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            create_channel_error: {
              summary: 'Create channel error',
              value: { error: '创建频道失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelInfoRoute = createRoute({
  method: 'post',
  path: '/channel/info',
  tags: ['Channel'],
  summary: 'Update Channel Info | 更新频道信息',
  description:
    'Update or add channel basic information without affecting subscribers. This endpoint only modifies channel metadata and settings.\n\n**功能说明：**\n- 更新或添加频道基本信息\n- 不影响现有订阅者\n- 支持设置大群、禁言、解散等状态\n- 个人频道支持陌生人消息设置\n- 自动路由到相应集群节点\n\n**Use Cases:**\n- Change channel ban status\n- Enable/disable large group mode\n- Update send ban settings\n- Configure stranger message permissions for person channels',
  request: {
    body: { content: { 'application/json': { schema: ChannelInfoRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Channel info updated successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            update_info_error: {
              summary: 'Update info error',
              value: { error: '更新频道信息失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelDeleteRoute = createRoute({
  method: 'post',
  path: '/channel/delete',
  tags: ['Channel'],
  summary: 'Delete Channel | 删除频道',
  description:
    'Delete a channel permanently. This will disband the channel and clear all messages. Not supported for person channels.\n\n**功能说明：**\n- 永久删除频道\n- 解散频道并清除所有消息\n- 不支持个人频道（channel_type=1）\n- 会自动清理相关订阅者和会话\n- 操作不可逆，请谨慎使用\n\n**Warning:** This operation is irreversible. All channel data including messages, subscribers, and settings will be permanently lost.',
  request: {
    body: {
      content: { 'application/json': { schema: ChannelDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Channel deleted successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            person_channel_not_supported: {
              summary: 'Person channel not supported',
              value: { error: '不支持删除个人频道！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为1！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            delete_channel_error: {
              summary: 'Delete channel error',
              value: { error: '删除频道失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelSubscriberAddRoute = createRoute({
  method: 'post',
  path: '/channel/subscriber_add',
  tags: ['Channel'],
  summary: 'Add Channel Subscribers | 添加频道订阅者',
  description:
    "Add subscribers to a channel. Not supported for person channels. Will create the channel if it doesn't exist.\n\n**功能说明：**\n- 向频道添加订阅者\n- 不支持个人频道（channel_type=1）\n- 如果频道不存在会自动创建\n- 支持重置现有订阅者\n- 会自动创建相关会话\n\n**Use Cases:**\n- Add new members to a group\n- Bulk add subscribers\n- Reset entire subscriber list\n- Create channel with initial subscribers",
  request: {
    body: {
      content: { 'application/json': { schema: SubscriberAddRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Subscribers added successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            person_channel_not_supported: {
              summary: 'Person channel not supported',
              value: { error: '个人频道不支持订阅者！' },
            },
            empty_subscribers: {
              summary: 'Empty subscribers',
              value: { error: 'subscribers不能为空！' },
            },
            special_characters: {
              summary: 'Special characters in channel ID',
              value: { error: '频道ID不能包含特殊字符！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            add_subscribers_error: {
              summary: 'Add subscribers error',
              value: { error: '添加订阅者失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelSubscriberRemoveRoute = createRoute({
  method: 'post',
  path: '/channel/subscriber_remove',
  tags: ['Channel'],
  summary: 'Remove Channel Subscribers | 移除频道订阅者',
  description:
    'Remove subscribers from a channel. Not supported for person channels. Will also delete their conversations with the channel.\n\n**功能说明：**\n- 从频道移除订阅者\n- 不支持个人频道（channel_type=1）\n- 会自动删除被移除用户的相关会话\n- 被移除用户将无法接收频道消息\n\n**Use Cases:**\n- Remove members from a group\n- Bulk remove subscribers\n- Clean up inactive users\n- Manage group membership',
  request: {
    body: {
      content: { 'application/json': { schema: SubscriberRemoveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Subscribers removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            person_channel_not_supported: {
              summary: 'Person channel not supported',
              value: { error: '个人频道不支持订阅者操作！' },
            },
            empty_subscribers: {
              summary: 'Empty subscribers',
              value: { error: 'subscribers不能为空！' },
            },
            special_characters: {
              summary: 'Special characters in channel ID',
              value: { error: '频道ID不能包含特殊字符！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            remove_subscribers_error: {
              summary: 'Remove subscribers error',
              value: { error: '移除订阅者失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelSubscriberRemoveAllRoute = createRoute({
  method: 'post',
  path: '/channel/subscriber_remove_all',
  tags: ['Channel'],
  summary: 'Remove All Channel Subscribers | 移除频道所有订阅者',
  description:
    'Remove all subscribers from a channel. Not supported for person channels. Will also delete all related conversations and tags.\n\n**功能说明：**\n- 移除频道的所有订阅者\n- 不支持个人频道（channel_type=1）\n- 会自动删除所有相关会话\n- 会清除频道标签（tag）\n\n**Use Cases:**\n- Clear all members from a group\n- Reset channel membership\n- Prepare channel for deletion',
  request: {
    body: { content: { 'application/json': { schema: ChannelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'All subscribers removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
            person_channel_not_supported: {
              summary: 'Person channel not supported',
              value: { error: '个人频道不支持此操作！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            remove_all_subscribers_error: {
              summary: 'Remove all subscribers error',
              value: { error: '移除所有订阅者失败！' },
            },
          },
        },
      },
    },
  },
})

export const postTmpchannelSubscriberSetRoute = createRoute({
  method: 'post',
  path: '/tmpchannel/subscriber_set',
  tags: ['Channel'],
  summary: 'Set Temporary Channel Subscribers | 设置临时频道订阅者',
  description:
    'Set subscribers for a temporary channel. This is an internal API used for cluster node communication to manage temporary channel subscriptions.\n\n**功能说明：**\n- 设置临时频道的订阅者\n- 这是内部API，用于集群节点间通信\n- 临时频道用于特殊场景，如临时群组或会话\n- 会自动创建和管理频道标签（tag）\n\n**注意：** 此接口主要用于系统内部调用，不建议外部直接使用。',
  request: {
    body: {
      content: { 'application/json': { schema: TmpChannelSubscriberSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Temporary channel subscribers set successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            empty_uids: { summary: 'Empty UIDs', value: { error: 'uids不能为空！' } },
            special_characters: {
              summary: 'Special characters in channel ID',
              value: { error: '频道ID不能包含特殊字符！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            tag_creation_error: {
              summary: 'Tag creation error',
              value: { error: '创建标签失败！' },
            },
          },
        },
      },
    },
  },
})

export const postMessageSendRoute = createRoute({
  method: 'post',
  path: '/message/send',
  tags: ['Message'],
  summary: 'Send Message',
  description: 'Send a message to a channel',
  request: {
    body: { content: { 'application/json': { schema: MessageSendRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Message sent successfully',
      content: { 'application/json': { schema: MessageSendResponseSchema } },
    },
  },
})

export const postMessageSendbatchRoute = createRoute({
  method: 'post',
  path: '/message/sendbatch',
  tags: ['Message'],
  summary: 'Send Batch Messages',
  description: 'Send multiple messages in batch',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(MessageSendRequestSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Batch messages sent successfully',
      content: { 'application/json': { schema: z.array(MessageSendResponseSchema) } },
    },
  },
})

export const postMessageSyncRoute = createRoute({
  method: 'post',
  path: '/message/sync',
  tags: ['Message'],
  summary: 'Message Sync (Deprecated)',
  description: 'Message synchronization in write mode (will be deprecated)',
  request: {
    body: { content: { 'application/json': { schema: MessageSyncRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Messages synchronized successfully',
      content: { 'application/json': { schema: z.array(MessageResponseSchema) } },
    },
  },
  deprecated: true,
})

export const postMessageSyncackRoute = createRoute({
  method: 'post',
  path: '/message/syncack',
  tags: ['Message'],
  summary: 'Message Sync Acknowledgment (Deprecated)',
  description: 'Message synchronization acknowledgment in write mode (will be deprecated)',
  request: {
    body: {
      content: { 'application/json': { schema: MessageSyncAckRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Sync acknowledgment processed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
  deprecated: true,
})

export const postMessagesRoute = createRoute({
  method: 'post',
  path: '/messages',
  tags: ['Message'],
  summary: 'Search Messages',
  description: 'Search for multiple messages',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Messages found',
      content: { 'application/json': { schema: z.array(MessageResponseSchema) } },
    },
  },
})

export const postMessageRoute = createRoute({
  method: 'post',
  path: '/message',
  tags: ['Message'],
  summary: 'Search Single Message',
  description: 'Search for a single message',
  request: {
    body: {
      content: { 'application/json': { schema: MessageSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Message found',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
  },
})

export const postMessageEventRoute = createRoute({
  method: 'post',
  path: '/message/event',
  tags: ['Message Event'],
  summary: 'Append Message Event',
  description:
    'Append an event on a message identified by `client_msg_no`. Message is the anchor entity; events are projections on top of that message.\n\n`event_key` identifies an event lane within the same message (defaults to `main`).\n\n**Routing:**\n- `stream.delta` is handled in memory cache for low latency.\n- All other event types are persisted through Raft.\n- Requests are automatically forwarded to the slot leader node.',
  request: {
    body: { content: { 'application/json': { schema: EventAppendRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Event appended successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.int().exactOptional().openapi({ example: 200 }),
              data: EventAppendResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request. Possible causes: missing required fields, stream already closed.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postMessageEventsyncRoute = createRoute({
  method: 'post',
  path: '/message/eventsync',
  tags: ['Message Event'],
  summary: 'Sync Message Events',
  description:
    'Retrieve projected event states for a specific message by `client_msg_no`, ordered by `msg_event_seq`. Supports cursor-based pagination via `from_msg_event_seq` and optional `event_key` filtering.\n\nRequests are automatically forwarded to the slot leader node.',
  request: {
    body: { content: { 'application/json': { schema: EventSyncRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Events synced successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.int().exactOptional().openapi({ example: 200 }),
              data: EventSyncResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postChannelMessagesyncRoute = createRoute({
  method: 'post',
  path: '/channel/messagesync',
  tags: ['Message'],
  summary: 'Sync Channel Messages',
  description:
    'Synchronize messages from a channel with pagination support. For stream messages, response can include merged event state (`event_meta`) and sync hint (`event_sync_hint`).',
  request: {
    body: {
      content: { 'application/json': { schema: ChannelMessageSyncRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Channel messages synchronized successfully',
      content: { 'application/json': { schema: ChannelMessageSyncResponseSchema } },
    },
  },
})

export const getChannelMaxMessageSeqRoute = createRoute({
  method: 'get',
  path: '/channel/max_message_seq',
  tags: ['Message'],
  summary: 'Get Channel Max Message Sequence',
  description: 'Get the maximum message sequence number for a channel',
  request: {
    query: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            name: 'channel_id',
            in: 'query',
            required: true,
            description: 'Channel ID',
            schema: { type: 'string' },
          },
        }),
      channel_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2)]),
        )
        .openapi({
          param: {
            name: 'channel_type',
            in: 'query',
            required: true,
            description: 'Channel type (1=person, 2=group)',
            schema: { type: 'integer', enum: [1, 2] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Maximum message sequence',
      content: {
        'application/json': {
          schema: z
            .object({
              message_seq: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum message sequence number', example: 12345 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getChannelLastMessageRoute = createRoute({
  method: 'get',
  path: '/channel/last_message',
  tags: ['Message'],
  summary: 'Get Channel Last Message',
  description:
    'Get the last message of a channel. For personal channels, login_uid is required to construct the correct channel identifier.',
  request: {
    query: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            name: 'channel_id',
            in: 'query',
            required: true,
            description: 'Channel ID',
            schema: { type: 'string' },
          },
        }),
      channel_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2)]),
        )
        .openapi({
          param: {
            name: 'channel_type',
            in: 'query',
            required: true,
            description: 'Channel type (1=person, 2=group)',
            schema: { type: 'integer', enum: [1, 2] },
          },
        }),
      login_uid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'login_uid',
            in: 'query',
            required: false,
            description: 'Login user ID (required for personal channels, channel_type=1)',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Last message of the channel',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    404: { description: 'Channel not found or no messages in channel' },
  },
})

export const postConversationsClearUnreadRoute = createRoute({
  method: 'post',
  path: '/conversations/clearUnread',
  tags: ['Conversation'],
  summary: 'Clear Conversation Unread',
  description: 'Advance the membership badge baseline to the latest committed ordinary message',
  request: {
    body: { content: { 'application/json': { schema: ClearUnreadRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Unread count cleared successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postConversationsSetUnreadRoute = createRoute({
  method: 'post',
  path: '/conversations/setUnread',
  tags: ['Conversation'],
  summary: 'Set Conversation Unread',
  description:
    'Monotonically advance the membership badge baseline so unread is capped at the requested count',
  request: {
    body: { content: { 'application/json': { schema: SetUnreadRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Unread count set successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postConversationsDeleteRoute = createRoute({
  method: 'post',
  path: '/conversations/delete',
  tags: ['Conversation'],
  summary: 'Delete Conversation',
  description: 'Hide currently visible history while preserving channel membership',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteConversationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Conversation deleted successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const postConversationListRoute = createRoute({
  method: 'post',
  path: '/conversation/list',
  tags: ['Conversation'],
  summary: 'List Membership-Backed Conversations',
  description:
    'Reads Leader-persisted messages without runtime activation. Failed SENDs may appear. Any read error fails the page; retry the original cursor.',
  request: {
    body: {
      content: { 'application/json': { schema: ConversationListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Membership candidates scanned and conversations constructed',
      content: { 'application/json': { schema: ConversationListResponseSchema } },
    },
    500: {
      description: 'Channel or storage read failed; no partial page or cursor is returned.',
      content: {
        'application/json': {
          schema: z
            .object({ msg: z.string().exactOptional(), status: z.int().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    503: {
      description:
        'Maintenance, page admission exhaustion, or deadline exceeded; retry the original page.',
    },
  },
})

export const postConversationSyncRoute = createRoute({
  method: 'post',
  path: '/conversation/sync',
  tags: ['Conversation'],
  summary: 'Sync Conversations (Legacy)',
  description:
    'Legacy heads and recents read current-Leader persisted storage without runtime activation. Failed SENDs may appear. Any read failure aborts the request; retry the original request. Legacy fields, filters and cursor rules remain unchanged. List and sync share 16 active requests and a five-second deadline. Sync allows up to 1,000 candidates, 200 Channels per batch, 10,000 requested recent messages and 32 MiB of base/stream payloads; exhausted budgets fail without partial data.',
  request: {
    body: {
      content: { 'application/json': { schema: LegacyConversationSyncRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Legacy conversation synchronization result',
      content: { 'application/json': { schema: z.array(LegacyConversationSyncItemSchema) } },
    },
  },
})

export const postConversationsActivateRoute = createRoute({
  method: 'post',
  path: '/conversations/activate',
  tags: ['Conversation'],
  summary: 'Activate Conversation',
  description: 'Prioritize a valid membership in future directory pages',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteConversationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Conversation activated successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const getConnzRoute = createRoute({
  method: 'get',
  path: '/connz',
  tags: ['Monitoring'],
  summary: 'Get Connection Information',
  description: 'Get detailed information about connections',
  request: {
    query: z.object({
      sort: z
        .enum(['in_msgs', 'out_msgs', 'in_bytes', 'out_bytes'])
        .default('in_msgs')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sort order for connections',
            schema: {
              type: 'string',
              enum: ['in_msgs', 'out_msgs', 'in_bytes', 'out_bytes'],
              default: 'in_msgs',
            },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for pagination',
            schema: { type: 'integer', default: 0 },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit for pagination',
            schema: { type: 'integer', default: 20 },
            required: false,
          },
        }),
      uid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Filter by user ID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      node_id: z
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
            name: 'node_id',
            in: 'query',
            description: 'Filter by node ID',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Connection information',
      content: { 'application/json': { schema: ConnzResponseSchema } },
    },
  },
})

export const getVarzRoute = createRoute({
  method: 'get',
  path: '/varz',
  tags: ['Monitoring'],
  summary: 'Get System Variables',
  description: 'Get system variables and metrics',
  request: {
    query: z.object({
      show: z
        .literal('conn')
        .exactOptional()
        .openapi({
          param: {
            name: 'show',
            in: 'query',
            description: 'What information to show',
            schema: { type: 'string', enum: ['conn'], default: '' },
            required: false,
          },
          default: '',
        }),
      conn_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'conn_limit',
            in: 'query',
            description: 'Limit for connection information',
            schema: { type: 'integer', default: 20 },
            required: false,
          },
        }),
      node_id: z
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
            name: 'node_id',
            in: 'query',
            description: 'Node ID to query',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'System variables and metrics',
      content: { 'application/json': { schema: VarzResponseSchema } },
    },
  },
})

export const postChannelBlacklistAddRoute = createRoute({
  method: 'post',
  path: '/channel/blacklist_add',
  tags: ['Channel'],
  summary: 'Add Channel Blacklist | 添加频道黑名单',
  description:
    'Add users to channel blacklist. Blacklisted users cannot send or receive messages in the channel and their conversations will be deleted.\n\n**功能说明：**\n- 将用户添加到频道黑名单\n- 黑名单用户无法在频道中发送或接收消息\n- 会自动删除黑名单用户的相关会话\n- 不支持个人频道（channel_type=1）\n- 直播频道（live channel）不处理会话删除',
  request: {
    body: { content: { 'application/json': { schema: BlacklistRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Users added to blacklist successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
            empty_uids: { summary: 'Empty UIDs', value: { error: 'uids不能为空！' } },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            add_blacklist_error: {
              summary: 'Add blacklist error',
              value: { error: '添加黑名单失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelBlacklistSetRoute = createRoute({
  method: 'post',
  path: '/channel/blacklist_set',
  tags: ['Channel'],
  summary: 'Set Channel Blacklist | 设置频道黑名单',
  description:
    'Set (replace) the entire blacklist for a channel. This will remove all existing blacklist entries and replace them with the provided list.\n\n**功能说明：**\n- 设置（替换）频道的完整黑名单\n- 会先清除所有现有黑名单条目，然后添加新的条目\n- 如果UIDs为空，则清空整个黑名单\n- 会自动删除黑名单用户的相关会话\n- 直播频道（live channel）不处理会话删除',
  request: {
    body: { content: { 'application/json': { schema: BlacklistRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Blacklist set successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: '频道ID不能为空！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            remove_all_error: {
              summary: 'Remove all blacklist error',
              value: { error: '移除所有黑名单失败！' },
            },
            add_blacklist_error: {
              summary: 'Add blacklist error',
              value: { error: '添加黑名单失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelBlacklistRemoveRoute = createRoute({
  method: 'post',
  path: '/channel/blacklist_remove',
  tags: ['Channel'],
  summary: 'Remove Channel Blacklist | 移除频道黑名单',
  description:
    'Remove specific users from channel blacklist. Removed users will have their conversations restored if applicable.\n\n**功能说明：**\n- 从频道黑名单中移除指定用户\n- 会恢复被移除用户的会话（如果适用）\n- 直播频道（live channel）不处理会话恢复',
  request: {
    body: { content: { 'application/json': { schema: BlacklistRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Users removed from blacklist successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
            empty_uids: { summary: 'Empty UIDs', value: { error: 'uids不能为空！' } },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            remove_blacklist_error: {
              summary: 'Remove blacklist error',
              value: { error: '移除黑名单失败！' },
            },
            add_conversation_error: {
              summary: 'Add conversation error',
              value: { error: '添加会话失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelBlacklistRemoveAllRoute = createRoute({
  method: 'post',
  path: '/channel/blacklist_remove_all',
  tags: ['Channel'],
  summary: 'Remove All Channel Blacklist | 移除频道所有黑名单',
  description:
    'Remove all users from channel blacklist.\n\n**功能说明：**\n- 移除频道的所有黑名单用户\n- 清空后所有之前被拉黑的用户可以重新访问频道\n- 支持所有频道类型',
  request: {
    body: { content: { 'application/json': { schema: ChannelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'All blacklist entries removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            remove_all_blacklist_error: {
              summary: 'Remove all blacklist error',
              value: { error: '移除所有黑名单失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelWhitelistAddRoute = createRoute({
  method: 'post',
  path: '/channel/whitelist_add',
  tags: ['Channel'],
  summary: 'Add Channel Whitelist | 添加频道白名单',
  description:
    'Add users to channel whitelist. Only whitelisted users can send messages to the channel when whitelist mode is enabled.\n\n**功能说明：**\n- 将用户添加到频道白名单\n- 启用白名单模式时，只有白名单用户可以向频道发送消息\n- 对于个人频道，会自动创建相关会话\n- 支持所有频道类型',
  request: {
    body: { content: { 'application/json': { schema: WhitelistRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Users added to whitelist successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
            empty_uids: { summary: 'Empty UIDs', value: { error: 'uids不能为空！' } },
            special_characters: {
              summary: 'Special characters in channel ID',
              value: { error: '频道ID不能包含特殊字符！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            add_whitelist_error: {
              summary: 'Add whitelist error',
              value: { error: '添加白名单失败！' },
            },
            add_conversation_error: {
              summary: 'Add conversation error',
              value: { error: '添加会话失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelWhitelistSetRoute = createRoute({
  method: 'post',
  path: '/channel/whitelist_set',
  tags: ['Channel'],
  summary: 'Set Channel Whitelist | 设置频道白名单',
  description:
    'Set (replace) the entire whitelist for a channel. This will remove all existing whitelist entries and replace them with the provided list.\n\n**功能说明：**\n- 设置（替换）频道的完整白名单\n- 会先清除所有现有白名单条目，然后添加新的条目\n- 如果UIDs为空，则清空整个白名单\n- 支持所有频道类型',
  request: {
    body: { content: { 'application/json': { schema: WhitelistRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Whitelist set successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: '频道ID不能为空！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            remove_all_error: {
              summary: 'Remove all whitelist error',
              value: { error: '移除所有白明单失败！' },
            },
            add_whitelist_error: {
              summary: 'Add whitelist error',
              value: { error: '添加白名单失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelWhitelistRemoveRoute = createRoute({
  method: 'post',
  path: '/channel/whitelist_remove',
  tags: ['Channel'],
  summary: 'Remove Channel Whitelist | 移除频道白名单',
  description:
    'Remove specific users from channel whitelist.\n\n**功能说明：**\n- 从频道白名单中移除指定用户\n- 移除后用户将无法向频道发送消息（如果启用白名单模式）\n- 支持所有频道类型',
  request: {
    body: { content: { 'application/json': { schema: WhitelistRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Users removed from whitelist successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
            empty_uids: { summary: 'Empty UIDs', value: { error: 'uids不能为空！' } },
            special_characters: {
              summary: 'Special characters in channel ID',
              value: { error: '频道ID不能包含特殊字符！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            remove_whitelist_error: {
              summary: 'Remove whitelist error',
              value: { error: '移除白名单失败！' },
            },
          },
        },
      },
    },
  },
})

export const postChannelWhitelistRemoveAllRoute = createRoute({
  method: 'post',
  path: '/channel/whitelist_remove_all',
  tags: ['Channel'],
  summary: 'Remove All Channel Whitelist | 移除频道所有白名单',
  description:
    'Remove all users from channel whitelist.\n\n**功能说明：**\n- 移除频道的所有白名单用户\n- 清空后如果频道启用白名单模式，将没有用户可以发送消息\n- 支持所有频道类型',
  request: {
    body: { content: { 'application/json': { schema: ChannelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'All whitelist entries removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    400: {
      description: 'Bad request - invalid parameters',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            missing_channel_id: {
              summary: 'Missing channel ID',
              value: { error: 'channel_id不能为空！' },
            },
            invalid_channel_type: {
              summary: 'Invalid channel type',
              value: { error: '频道类型不能为0！' },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            cluster_error: {
              summary: 'Cluster node error',
              value: { error: '获取频道所在节点失败！' },
            },
            remove_all_whitelist_error: {
              summary: 'Remove all whitelist error',
              value: { error: '移除所有白名单失败！' },
            },
          },
        },
      },
    },
  },
})

export const getChannelWhitelistRoute = createRoute({
  method: 'get',
  path: '/channel/whitelist',
  tags: ['Channel'],
  summary: 'Get Channel Whitelist',
  description: 'Get channel whitelist users',
  request: {
    query: z.object({
      channel_id: z
        .string()
        .openapi({
          param: {
            name: 'channel_id',
            in: 'query',
            required: true,
            description: 'Channel ID',
            schema: { type: 'string' },
          },
        }),
      channel_type: z
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
            name: 'channel_type',
            in: 'query',
            required: true,
            description: 'Channel type',
            schema: { type: 'integer', format: 'int8' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Channel whitelist users',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getTagRoute = createRoute({
  method: 'get',
  path: '/tag',
  tags: ['Tag'],
  summary: 'Get Tag',
  description: 'Get tag information',
  request: {
    query: z.object({
      tag: z
        .string()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            required: true,
            description: 'Tag name',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tag information',
      content: { 'application/json': { schema: TagResponseSchema } },
    },
  },
})

export const postTagRemoveRoute = createRoute({
  method: 'post',
  path: '/tag/remove',
  tags: ['Tag'],
  summary: 'Remove Tag',
  description: 'Remove a tag',
  request: {
    body: { content: { 'application/json': { schema: TagRemoveRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Tag removed successfully',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tag'],
  summary: 'List Tags',
  description: 'Get list of all tags',
  responses: {
    200: {
      description: 'List of tags',
      content: { 'application/json': { schema: z.array(TagResponseSchema) } },
    },
  },
})

export const postManagerLoginRoute = createRoute({
  method: 'post',
  path: '/manager/login',
  tags: ['Manager'],
  summary: 'Manager Login',
  description: 'Login for manager access',
  request: {
    body: {
      content: { 'application/json': { schema: ManagerLoginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Login successful',
      content: { 'application/json': { schema: ManagerLoginResponseSchema } },
    },
  },
})

export const getVarzSettingRoute = createRoute({
  method: 'get',
  path: '/varz/setting',
  tags: ['Monitoring'],
  summary: 'Get System Settings',
  description: 'Get system configuration settings',
  responses: {
    200: {
      description: 'System settings',
      content: { 'application/json': { schema: SystemSettingsResponseSchema } },
    },
  },
})
