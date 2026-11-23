type ErrorResponse = { error?: string | undefined; message?: string | undefined }
type IMAddressResponse = {
  tcp_addr?: string | undefined
  ws_addr?: string | undefined
  wss_addr?: string | undefined
}
type BatchIMAddressResponse = {
  uids?: string[] | undefined
  tcp_addr?: string | undefined
  ws_addr?: string | undefined
  wss_addr?: string | undefined
}
type UpdateTokenRequest = {
  uid: string
  token: string
  device_flag?: number | undefined
  device_level?: number | undefined
}
type SuccessResponse = { status?: string | undefined }
type DeviceQuitRequest = { uid: string; device_flag?: number | undefined }
type OnlineStatusResponse = {
  uid?: string | undefined
  online?: 0 | 1 | undefined
  device_flag?: number | undefined
}
type SystemUidsRequest = { uids: string[] }
type UpdatePluginNoRequest = { uid: string; plugin_no: string }
type ConnectionRequest = {
  uid: string
  conn_id: bigint
  node_id?: bigint | undefined
  op_node_id?: bigint | undefined
}
type ChannelCreateRequest = {
  channel_id: string
  channel_type: number
  large?: 0 | 1 | undefined
  ban?: 0 | 1 | undefined
  disband?: 0 | 1 | undefined
  send_ban?: 0 | 1 | undefined
  allow_stranger?: 0 | 1 | undefined
  reset?: 0 | 1 | undefined
  subscribers?: string[] | undefined
}
type ChannelInfoRequest = {
  channel_id: string
  channel_type: number
  large?: 0 | 1 | undefined
  ban?: 0 | 1 | undefined
  disband?: 0 | 1 | undefined
  send_ban?: 0 | 1 | undefined
  allow_stranger?: 0 | 1 | undefined
}
type ChannelDeleteRequest = { channel_id: string; channel_type: number }
type SubscriberAddRequest = {
  channel_id: string
  channel_type: number
  reset?: 0 | 1 | undefined
  temp_subscriber?: 0 | 1 | undefined
  subscribers: string[]
}
type SubscriberRemoveRequest = {
  channel_id: string
  channel_type: number
  temp_subscriber?: 0 | 1 | undefined
  subscribers: string[]
}
type ChannelRequest = { channel_id: string; channel_type: number }
type TmpChannelSubscriberSetRequest = { channel_id: string; uids: string[] }
type MessageHeader = {
  no_persist?: 0 | 1 | undefined
  red_dot?: 0 | 1 | undefined
  sync_once?: 0 | 1 | undefined
}
type MessageSendRequest = {
  header?: MessageHeader | undefined
  client_msg_no?: string | undefined
  stream_no?: string | undefined
  from_uid?: string | undefined
  channel_id?: string | undefined
  channel_type?: number | undefined
  expire?: number | undefined
  subscribers?: string[] | undefined
  payload: string
  tag_key?: string | undefined
}
type MessageSendResponse = {
  message_id?: bigint | undefined
  message_seq?: bigint | undefined
  client_msg_no?: string | undefined
}
type MessageSyncRequest = {
  uid: string
  message_seq?: bigint | undefined
  limit?: number | undefined
}
type MessageEventKeyMeta = {
  event_key?: string | undefined
  status?: 'open' | 'closed' | 'error' | 'cancelled' | undefined
  last_msg_event_seq?: bigint | undefined
  snapshot?: ({ [x: string]: unknown } | null) | undefined
  end_reason?: number | undefined
  error?: string | undefined
}
type MessageEventMeta = {
  has_events?: boolean | undefined
  event_version?: bigint | undefined
  last_msg_event_seq?: bigint | undefined
  event_key_count?: number | undefined
  open_event_key_count?: number | undefined
  event_keys?: MessageEventKeyMeta[] | undefined
}
type MessageEventSyncHint = {
  client_msg_no?: string | undefined
  from_msg_event_seq?: bigint | undefined
}
type MessageResponse = {
  header?: MessageHeader | undefined
  setting?: number | undefined
  message_id?: bigint | undefined
  message_idstr?: string | undefined
  message_seq?: bigint | undefined
  client_msg_no?: string | undefined
  end?: number | undefined
  end_reason?: number | undefined
  error?: string | undefined
  stream_data?: string | undefined
  event_meta?: MessageEventMeta | undefined
  event_sync_hint?: MessageEventSyncHint | undefined
  from_uid?: string | undefined
  channel_id?: string | undefined
  channel_type?: number | undefined
  topic?: string | undefined
  expire?: number | undefined
  timestamp?: number | undefined
  payload?: string | undefined
}
type MessageSyncAckRequest = { uid: string; last_message_seq: number }
type MessagesSearchRequest = { message_ids: bigint[] }
type MessageSearchRequest = { message_id: bigint }
type EventAppendRequest = {
  channel_id: string
  channel_type: number
  from_uid?: string | undefined
  message_id?: bigint | undefined
  client_msg_no: string
  event_id: string
  event_type: string
  event_key?: string | undefined
  visibility?: 'public' | 'private' | 'restricted' | undefined
  occurred_at?: bigint | undefined
  payload?: { [x: string]: unknown } | undefined
  headers?: { [x: string]: string } | undefined
}
type EventAppendResponse = {
  client_msg_no?: string | undefined
  event_key?: string | undefined
  event_id?: string | undefined
  msg_event_seq?: bigint | undefined
  stream_status?: 'open' | 'closed' | 'error' | 'cancelled' | undefined
  channel_id?: string | undefined
  channel_type?: number | undefined
  from_uid?: string | undefined
}
type EventSyncRequest = {
  channel_id: string
  channel_type: number
  from_uid?: string | undefined
  client_msg_no: string
  event_key?: string | undefined
  from_msg_event_seq?: bigint | undefined
  limit?: number | undefined
  include_private?: number | undefined
}
type EventSyncItem = {
  msg_event_seq?: bigint | undefined
  event_id?: string | undefined
  event_key?: string | undefined
  event_type?: string | undefined
  visibility?: string | undefined
  occurred_at?: bigint | undefined
  payload?: { [x: string]: unknown } | undefined
}
type EventSyncResponse = {
  client_msg_no?: string | undefined
  from_msg_event_seq?: bigint | undefined
  next_msg_event_seq?: bigint | undefined
  more?: number | undefined
  filtered_by_event_key?: string | undefined
  events?: EventSyncItem[] | undefined
}
type ChannelMessageSyncRequest = {
  login_uid: string
  channel_id: string
  channel_type: 1 | 2
  start_message_seq?: number | undefined
  end_message_seq?: number | undefined
  limit?: number | undefined
  pull_mode?: 0 | 1 | undefined
  event_summary_mode?: 'basic' | 'full' | undefined
}
type ChannelMessageSyncResponse = {
  start_message_seq?: number | undefined
  end_message_seq?: number | undefined
  more?: 0 | 1 | undefined
  messages?: MessageResponse[] | undefined
}
type ClearUnreadRequest = { uid: string; channel_id: string; channel_type: number }
type SetUnreadRequest = { uid: string; channel_id: string; channel_type: 1 | 2; unread: number }
type DeleteConversationRequest = { uid: string; channel_id: string; channel_type: 1 | 2 }
type ConversationListRequest = {
  uid: string
  cursor?: string | undefined
  limit?: number | undefined
  completed_coverage?: bigint | undefined
}
type ConversationListItem = {
  channel_id: string
  channel_type: number
  active_at?: bigint | undefined
  read_seq?: bigint | undefined
  deleted_to_seq?: bigint | undefined
  unread?: bigint | undefined
  last_message?:
    | {
        message_id?: bigint | undefined
        message_idstr?: string | undefined
        message_seq?: bigint | undefined
        from_uid?: string | undefined
        client_msg_no?: string | undefined
        server_timestamp_ms?: bigint | undefined
        payload?: string | undefined
      }
    | undefined
}
type ConversationListKey = { channel_id: string; channel_type: number }
type ConversationListResponse = {
  conversations: ConversationListItem[]
  deletes: ConversationListKey[]
  next_cursor?: string | undefined
  done: boolean
  coverage: bigint
  tombstones_retained_since: bigint
  reset_required: boolean
}
type LegacyConversationSyncRequest = {
  uid: string
  version?: bigint | undefined
  last_msg_seqs?: string | undefined
  msg_count?: number | undefined
  only_unread?: 0 | 1 | undefined
  exclude_channel_types?: number[] | undefined
  page?: number | undefined
  page_size?: number | undefined
}
type LegacyConversationSyncItem = {
  channel_id: string
  channel_type: number
  unread: bigint
  timestamp: bigint
  last_msg_seq: bigint
  last_client_msg_no: string
  offset_msg_seq: bigint
  readed_to_msg_seq: bigint
  version: bigint
  recents: MessageResponse[]
}
type ConnectionInfo = {
  cid?: bigint | undefined
  uid?: string | undefined
  device_id?: string | undefined
  device_flag?: number | undefined
  uptime?: string | undefined
  idle?: string | undefined
  in_msgs?: bigint | undefined
  out_msgs?: bigint | undefined
  in_bytes?: bigint | undefined
  out_bytes?: bigint | undefined
}
type ConnzResponse = {
  now?: string | undefined
  num_connections?: number | undefined
  total?: number | undefined
  offset?: number | undefined
  limit?: number | undefined
  connections?: ConnectionInfo[] | undefined
}
type VarzResponse = {
  server_id?: string | undefined
  server_name?: string | undefined
  version?: string | undefined
  connections?: number | undefined
  uptime?: string | undefined
  cpu?: number | undefined
  mem?: bigint | undefined
  in_msgs?: bigint | undefined
  out_msgs?: bigint | undefined
  in_bytes?: bigint | undefined
  out_bytes?: bigint | undefined
}
type BlacklistRequest = { channel_id: string; channel_type: number; uids?: string[] | undefined }
type WhitelistRequest = { channel_id: string; channel_type: number; uids?: string[] | undefined }
type TagResponse = { tag?: string | undefined; count?: number | undefined }
type TagRemoveRequest = { tag: string }
type ManagerLoginRequest = { username: string; password: string }
type ManagerLoginResponse = { token?: string | undefined; expires_in?: number | undefined }
type SystemSettingsResponse = {
  logger?: { trace_on?: 0 | 1 | undefined; loki_on?: 0 | 1 | undefined } | undefined
  prometheus_on?: 0 | 1 | undefined
  stress_on?: 0 | 1 | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/health': {
      $get:
        | { input: {}; output: { status?: string | undefined }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { status?: string | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/migrate/result': {
      $get: {
        input: {}
        output: { status?: string | undefined; message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/docs': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/docs/openapi.json': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/docs/health': {
      $get: {
        input: {}
        output: {
          status?: string | undefined
          service?: string | undefined
          description?: string | undefined
          endpoints?:
            | {
                swagger_ui?: string | undefined
                openapi_spec?: string | undefined
                health_check?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/route': {
      $get: {
        input: { query: { intranet?: 0 | 1 | undefined } }
        output: IMAddressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/route/batch': {
      $post: {
        input: { query: { intranet?: 0 | 1 | undefined } } & { json: string[] }
        output: BatchIMAddressResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/token': {
      $post: {
        input: { json: UpdateTokenRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/device_quit': {
      $post: {
        input: { json: DeviceQuitRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/onlinestatus': {
      $post: {
        input: { json: string[] }
        output: OnlineStatusResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/systemuids': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/user/systemuids_add': {
      $post: {
        input: { json: SystemUidsRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/systemuids_remove': {
      $post: {
        input: { json: SystemUidsRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/systemuids_add_to_cache': {
      $post: {
        input: { json: SystemUidsRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/systemuids_remove_from_cache': {
      $post: {
        input: { json: SystemUidsRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/update_plugin_no': {
      $post: {
        input: { json: UpdatePluginNoRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conn/remove': {
      $post: {
        input: { json: ConnectionRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conn/kick': {
      $post: {
        input: { json: ConnectionRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel': {
      $post:
        | {
            input: { json: ChannelCreateRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChannelCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/info': {
      $post:
        | {
            input: { json: ChannelInfoRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelInfoRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChannelInfoRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/delete': {
      $post:
        | {
            input: { json: ChannelDeleteRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelDeleteRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChannelDeleteRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/subscriber_add': {
      $post:
        | {
            input: { json: SubscriberAddRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubscriberAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubscriberAddRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/subscriber_remove': {
      $post:
        | {
            input: { json: SubscriberRemoveRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubscriberRemoveRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubscriberRemoveRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/subscriber_remove_all': {
      $post:
        | {
            input: { json: ChannelRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tmpchannel/subscriber_set': {
      $post:
        | {
            input: { json: TmpChannelSubscriberSetRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TmpChannelSubscriberSetRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TmpChannelSubscriberSetRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/message/send': {
      $post: {
        input: { json: MessageSendRequest }
        output: MessageSendResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/message/sendbatch': {
      $post: {
        input: { json: MessageSendRequest[] }
        output: MessageSendResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/message/sync': {
      $post: {
        input: { json: MessageSyncRequest }
        output: MessageResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/message/syncack': {
      $post: {
        input: { json: MessageSyncAckRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages': {
      $post: {
        input: { json: MessagesSearchRequest }
        output: MessageResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/message': {
      $post: {
        input: { json: MessageSearchRequest }
        output: MessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/message/event': {
      $post:
        | {
            input: { json: EventAppendRequest }
            output: { status?: number | undefined; data?: EventAppendResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventAppendRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/message/eventsync': {
      $post:
        | {
            input: { json: EventSyncRequest }
            output: { status?: number | undefined; data?: EventSyncResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventSyncRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channel/messagesync': {
      $post: {
        input: { json: ChannelMessageSyncRequest }
        output: ChannelMessageSyncResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/max_message_seq': {
      $get: {
        input: { query: { channel_id: string; channel_type: 1 | 2 } }
        output: { message_seq?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/last_message': {
      $get:
        | {
            input: {
              query: { channel_id: string; channel_type: 1 | 2; login_uid?: string | undefined }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { channel_id: string; channel_type: 1 | 2; login_uid?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/clearUnread': {
      $post: {
        input: { json: ClearUnreadRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/setUnread': {
      $post: {
        input: { json: SetUnreadRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/delete': {
      $post: {
        input: { json: DeleteConversationRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversation/list': {
      $post:
        | {
            input: { json: ConversationListRequest }
            output: ConversationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConversationListRequest }
            output: { msg?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ConversationListRequest }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversation/sync': {
      $post: {
        input: { json: LegacyConversationSyncRequest }
        output: LegacyConversationSyncItem[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conversations/activate': {
      $post: {
        input: { json: DeleteConversationRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connz': {
      $get: {
        input: {
          query: {
            sort?: 'in_msgs' | 'out_msgs' | 'in_bytes' | 'out_bytes' | undefined
            offset?: number | undefined
            limit?: number | undefined
            uid?: string | undefined
            node_id?: bigint | undefined
          }
        }
        output: ConnzResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/varz': {
      $get: {
        input: {
          query: {
            show?: 'conn' | undefined
            conn_limit?: number | undefined
            node_id?: bigint | undefined
          }
        }
        output: VarzResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/blacklist_add': {
      $post:
        | {
            input: { json: BlacklistRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BlacklistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BlacklistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/blacklist_set': {
      $post:
        | {
            input: { json: BlacklistRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BlacklistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BlacklistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/blacklist_remove': {
      $post:
        | {
            input: { json: BlacklistRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BlacklistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BlacklistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/blacklist_remove_all': {
      $post:
        | {
            input: { json: ChannelRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/whitelist_add': {
      $post:
        | {
            input: { json: WhitelistRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WhitelistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WhitelistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/whitelist_set': {
      $post:
        | {
            input: { json: WhitelistRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WhitelistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WhitelistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/whitelist_remove': {
      $post:
        | {
            input: { json: WhitelistRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WhitelistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WhitelistRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/whitelist_remove_all': {
      $post:
        | {
            input: { json: ChannelRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/channel/whitelist': {
      $get: {
        input: { query: { channel_id: string; channel_type: number } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tag': {
      $get: {
        input: { query: { tag: string } }
        output: TagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tag/remove': {
      $post: {
        input: { json: TagRemoveRequest }
        output: SuccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags': { $get: { input: {}; output: TagResponse[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/manager/login': {
      $post: {
        input: { json: ManagerLoginRequest }
        output: ManagerLoginResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/varz/setting': {
      $get: { input: {}; output: SystemSettingsResponse; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
