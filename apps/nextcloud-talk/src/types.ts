type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type RichObjectParameter = {
  type: string
  id: string
  name: string
  server?: string | undefined
  link?: string | undefined
  'call-type'?: 'one2one' | 'group' | 'public' | undefined
  'icon-url'?: string | undefined
  'message-id'?: string | undefined
  boardname?: string | undefined
  stackname?: string | undefined
  size?: string | undefined
  path?: string | undefined
  mimetype?: string | undefined
  'preview-available'?: 'yes' | 'no' | undefined
  'hide-download'?: 'yes' | 'no' | undefined
  mtime?: string | undefined
  latitude?: string | undefined
  longitude?: string | undefined
  description?: string | undefined
  thumb?: string | undefined
  website?: string | undefined
  visibility?: '0' | '1' | undefined
  assignable?: '0' | '1' | undefined
  conversation?: string | undefined
  etag?: string | undefined
  permissions?: string | undefined
  width?: string | undefined
  height?: string | undefined
  blurhash?: string | undefined
}
type ChatMessageMetaData = {
  pinnedActorType?: string | undefined
  pinnedActorId?: string | undefined
  pinnedActorDisplayName?: string | undefined
  pinnedAt?: bigint | undefined
  pinnedUntil?: bigint | undefined
  threadId?: bigint | undefined
  threadTitle?: string | undefined
  actorRole?: 'owner' | 'moderator' | undefined
  replyToMessageId?: bigint | undefined
  replyToConversationToken?: string | undefined
  replyToConversationName?: string | undefined
  replyToActorDisplayName?: string | undefined
}
type ChatMessage = {
  actorDisplayName: string
  actorId: string
  actorType: string
  expirationTimestamp: bigint
  message: string
  messageParameters: { [x: string]: RichObjectParameter }
  messageType: string
  systemMessage: string
  deleted?: true | undefined
  id: bigint
  isReplyable: boolean
  markdown: boolean
  reactions: { [x: string]: bigint }
  reactionsSelf?: string[] | undefined
  referenceId: string
  timestamp: bigint
  token: string
  lastEditActorDisplayName?: string | undefined
  lastEditActorId?: string | undefined
  lastEditActorType?: string | undefined
  lastEditTimestamp?: bigint | undefined
  silent?: boolean | undefined
  threadId?: bigint | undefined
  isThread?: boolean | undefined
  threadTitle?: string | undefined
  threadReplies?: bigint | undefined
  metaData?: ChatMessageMetaData | undefined
}
type BaseMessage = {
  actorDisplayName: string
  actorId: string
  actorType: string
  expirationTimestamp: bigint
  message: string
  messageParameters: { [x: string]: RichObjectParameter }
  messageType: string
  systemMessage: string
}
type RoomLastMessage = ChatMessage | BaseMessage
type Room = {
  actorId: string
  invitedActorId?: string | undefined
  actorType: string
  attendeeId: bigint
  attendeePermissions: bigint
  attendeePin: string | null
  avatarVersion: string
  breakoutRoomMode: bigint
  breakoutRoomStatus: bigint
  callFlag: bigint
  callPermissions: bigint
  callRecording: 0n | 1n | 2n | 3n | 4n | 5n
  callStartTime: bigint
  canDeleteConversation: boolean
  canEnableSIP: boolean
  canLeaveConversation: boolean
  canStartCall: boolean
  defaultPermissions: bigint
  description: string
  displayName: string
  hasCall: boolean
  hasPassword: boolean
  id: bigint
  isCustomAvatar: boolean
  isFavorite: boolean
  lastActivity: bigint
  lastCommonReadMessage: bigint
  lastMessage?: RoomLastMessage | undefined
  lastPing: bigint
  lastReadMessage: bigint
  listable: bigint
  liveTranscriptionLanguageId: string
  lobbyState: bigint
  lobbyTimer: bigint
  mentionPermissions: 0n | 1n
  messageExpiration: bigint
  name: string
  notificationCalls: bigint
  notificationLevel: bigint
  objectId: string
  objectType: string
  participantFlags: bigint
  participantType: bigint
  permissions: bigint
  readOnly: bigint
  recordingConsent: bigint
  remoteServer?: string | undefined
  remoteToken?: string | undefined
  sessionId: string
  sipEnabled: bigint
  status?: string | undefined
  statusClearAt?: (bigint | null) | undefined
  statusIcon?: (string | null) | undefined
  statusMessage?: (string | null) | undefined
  token: string
  type: bigint
  unreadMention: boolean
  unreadMentionDirect: boolean
  unreadMessages: bigint
  isArchived: boolean
  isImportant: boolean
  isSensitive: boolean
  tagIds: string[]
  lastPinnedId: bigint
  hiddenPinnedId: bigint
  hasScheduledMessages: bigint
  attributes: bigint
  muteUntil: bigint
}
type Ban = {
  id: bigint
  moderatorActorType: string
  moderatorActorId: string
  moderatorDisplayName: string
  bannedActorType: string
  bannedActorId: string
  bannedDisplayName: string
  bannedTime: bigint
  internalNote: string
}
type Bot = { description: string | null; id: bigint; name: string; state: bigint }
type DashboardEventCalendar = {
  principalUri: string
  calendarName: string
  calendarColor: string | null
}
type DashboardEventAttachment = {
  calendars: string[]
  fmttype: string
  filename: string
  fileid: bigint
  preview: boolean
  previewLink: string | null
}
type DashboardEvent = {
  calendars: DashboardEventCalendar[]
  eventName: string
  eventDescription: string | null
  eventAttachments: { [x: string]: DashboardEventAttachment }
  eventLink: string
  start: bigint
  end: bigint
  roomToken: string
  roomAvatarVersion: string
  roomName: string
  roomDisplayName: string
  roomType: bigint
  roomActiveSince: bigint | null
  invited: bigint | null
  accepted: bigint | null
  tentative: bigint | null
  declined: bigint | null
}
type CallPeer = {
  actorId: string
  actorType: string
  displayName: string
  lastPing: bigint
  sessionId: string
  token: string
}
type DeletedChatMessage = { id: bigint; deleted: true }
type ChatMessageWithParent = {
  actorDisplayName: string
  actorId: string
  actorType: string
  expirationTimestamp: bigint
  message: string
  messageParameters: { [x: string]: RichObjectParameter }
  messageType: string
  systemMessage: string
  deleted?: true | undefined
  id: bigint
  isReplyable: boolean
  markdown: boolean
  reactions: { [x: string]: bigint }
  reactionsSelf?: string[] | undefined
  referenceId: string
  timestamp: bigint
  token: string
  lastEditActorDisplayName?: string | undefined
  lastEditActorId?: string | undefined
  lastEditActorType?: string | undefined
  lastEditTimestamp?: bigint | undefined
  silent?: boolean | undefined
  threadId?: bigint | undefined
  isThread?: boolean | undefined
  threadTitle?: string | undefined
  threadReplies?: bigint | undefined
  metaData?: ChatMessageMetaData | undefined
  parent?: ChatMessage | DeletedChatMessage | undefined
}
type ScheduledMessage = {
  id: string
  actorId: string
  actorType: string
  threadId: bigint
  threadTitle?: string | undefined
  parent?: ChatMessage | undefined
  message: string
  messageType: string
  createdAt: bigint
  sendAt: bigint
  silent: boolean
  originalSendAt?: bigint | undefined
}
type ChatReminder = { messageId: bigint; timestamp: bigint; token: string; userId: string }
type ChatReminderUpcoming = {
  actorDisplayName: string
  actorId: string
  actorType: string
  message: string
  messageId: bigint
  messageParameters: { [x: string]: RichObjectParameter }
  reminderTimestamp: bigint
  roomToken: string
}
type ChatMentionSuggestion = {
  id: string
  label: string
  source: string
  mentionId: string
  details?: string | undefined
  status?: string | undefined
  statusClearAt?: (bigint | null) | undefined
  statusIcon?: (string | null) | undefined
  statusMessage?: (string | null) | undefined
}
type ConversationTag = {
  id: string
  name: string
  sortOrder: bigint
  collapsed: boolean
  type: 'custom' | 'favorites' | 'other'
}
type LiveTranscriptionLanguage = { name: string; metadata: { separator: string; rtl: boolean } }
type MatrixHomeserver = {
  id: string
  name: string
  serverName: string
  baseUrl: string
  enabled: boolean
  specVersions: string[]
}
type MatrixAccount = {
  id: string
  homeserverId: string
  mxid: string
  deviceId: string
  status: 0n | 1n
  lastError: string | null
  lastSync: bigint
  verified: boolean | null
}
type MatrixVerification = {
  state: string
  emoji: { emoji: string; name: string }[]
  reason: string | null
}
type MatterbridgeConfigFields = { [x: string]: { [x: string]: unknown } }[]
type MatterbridgeWithProcessState = {
  enabled: boolean
  parts: MatterbridgeConfigFields
  pid: bigint
  log: string
  running: boolean
}
type MatterbridgeProcessState = { log: string; running: boolean }
type ActorTypes =
  | 'users'
  | 'groups'
  | 'guests'
  | 'emails'
  | 'circles'
  | 'bridged'
  | 'bots'
  | 'federated_users'
  | 'phones'
type PollDraft = {
  actorDisplayName: string
  actorId: string
  actorType: ActorTypes
  id: bigint
  maxVotes: bigint
  options: string[]
  question: string
  resultMode: 0n | 1n
  status: 0n | 1n | 2n
}
type PollVote = { actorDisplayName: string; actorId: string; actorType: string; optionId: bigint }
type Poll = {
  actorDisplayName: string
  actorId: string
  actorType: ActorTypes
  id: bigint
  maxVotes: bigint
  options: string[]
  question: string
  resultMode: 0n | 1n
  status: 0n | 1n | 2n
  details?: PollVote[] | undefined
  numVoters?: bigint | undefined
  votedSelf?: bigint[] | undefined
  votes?: { [x: string]: bigint } | undefined
}
type ConversationPreset = {
  identifier: string
  name: string
  description: string
  parameters: { [x: string]: bigint }
}
type Reaction = { actorDisplayName: string; actorId: string; actorType: string; timestamp: bigint }
type InvitationList = {
  users?: string[] | undefined
  federated_users?: string[] | undefined
  groups?: string[] | undefined
  emails?: string[] | undefined
  phones?: string[] | undefined
  teams?: string[] | undefined
}
type RoomWithInvalidInvitations = {
  actorId: string
  invitedActorId?: string | undefined
  actorType: string
  attendeeId: bigint
  attendeePermissions: bigint
  attendeePin: string | null
  avatarVersion: string
  breakoutRoomMode: bigint
  breakoutRoomStatus: bigint
  callFlag: bigint
  callPermissions: bigint
  callRecording: 0n | 1n | 2n | 3n | 4n | 5n
  callStartTime: bigint
  canDeleteConversation: boolean
  canEnableSIP: boolean
  canLeaveConversation: boolean
  canStartCall: boolean
  defaultPermissions: bigint
  description: string
  displayName: string
  hasCall: boolean
  hasPassword: boolean
  id: bigint
  isCustomAvatar: boolean
  isFavorite: boolean
  lastActivity: bigint
  lastCommonReadMessage: bigint
  lastMessage?: RoomLastMessage | undefined
  lastPing: bigint
  lastReadMessage: bigint
  listable: bigint
  liveTranscriptionLanguageId: string
  lobbyState: bigint
  lobbyTimer: bigint
  mentionPermissions: 0n | 1n
  messageExpiration: bigint
  name: string
  notificationCalls: bigint
  notificationLevel: bigint
  objectId: string
  objectType: string
  participantFlags: bigint
  participantType: bigint
  permissions: bigint
  readOnly: bigint
  recordingConsent: bigint
  remoteServer?: string | undefined
  remoteToken?: string | undefined
  sessionId: string
  sipEnabled: bigint
  status?: string | undefined
  statusClearAt?: (bigint | null) | undefined
  statusIcon?: (string | null) | undefined
  statusMessage?: (string | null) | undefined
  token: string
  type: bigint
  unreadMention: boolean
  unreadMentionDirect: boolean
  unreadMessages: bigint
  isArchived: boolean
  isImportant: boolean
  isSensitive: boolean
  tagIds: string[]
  lastPinnedId: bigint
  hiddenPinnedId: bigint
  hasScheduledMessages: bigint
  attributes: bigint
  muteUntil: bigint
  invalidParticipants: InvitationList
}
type Participant = {
  actorId: string
  invitedActorId?: string | undefined
  actorType: string
  attendeeId: bigint
  attendeePermissions: bigint
  attendeePin: string
  displayName: string
  inCall: bigint
  lastPing: bigint
  participantType: bigint
  permissions: bigint
  roomToken: string
  sessionIds: string[]
  actorAvatarVersion?: string | undefined
  status?: string | undefined
  statusClearAt?: (bigint | null) | undefined
  statusIcon?: (string | null) | undefined
  statusMessage?: (string | null) | undefined
  phoneNumber?: (string | null) | undefined
  callId?: (string | null) | undefined
}
type Capabilities = {
  features: string[]
  'features-local': string[]
  config: {
    attachments: {
      allowed: boolean
      folder?: string | undefined
      'conversation-subfolders': boolean
      'default-allow-edit': boolean
      'default-original-quality': boolean
    }
    call: {
      enabled: boolean
      'breakout-rooms': boolean
      recording: boolean
      'recording-consent': bigint
      'supported-reactions': string[]
      'predefined-backgrounds': string[]
      'predefined-backgrounds-v2': string[]
      'can-upload-background': boolean
      'sip-enabled': boolean
      'sip-dialout-enabled': boolean
      'default-phone-region': string
      'can-enable-sip': boolean
      'start-without-media': boolean
      'max-duration': bigint
      'blur-virtual-background': boolean
      'end-to-end-encryption': boolean
      'live-transcription': boolean
      'live-translation': boolean
      'live-transcription-target-language-id': string
      'play-sounds': boolean
      'grid-limit': bigint
      'grid-limit-enforced': boolean
      'external-call-service'?: string | undefined
    }
    chat: {
      'max-length': bigint
      'read-privacy': bigint
      'has-translation-providers': boolean
      'has-translation-task-providers': boolean
      'typing-privacy': bigint
      'summary-threshold': bigint
      style: 'split' | 'unified'
      'matterbridge-enabled': boolean
      'mobile-preload-chat': boolean
    }
    conversations: {
      'can-create': boolean
      'force-passwords': boolean
      'list-style': 'two-lines' | 'compact'
      'description-length': bigint
      'retention-event': bigint
      'retention-phone': bigint
      'retention-instant-meetings': bigint
      'retention-classified': bigint
      'sort-order': 'activity' | 'alphabetical'
      'group-mode': 'none' | 'group-first' | 'private-first'
      unarchive: 'never' | 'mention' | 'always'
      'tags-show-unread': 'never' | 'mention' | 'always'
    }
    federation: {
      enabled: boolean
      'incoming-enabled': boolean
      'outgoing-enabled': boolean
      'only-trusted-servers': boolean
    }
    matrix: { enabled: boolean }
    previews: { 'max-gif-size': bigint }
    signaling: {
      'session-ping-limit': bigint
      mode: 'internal' | 'external'
      'hello-v2-token-key'?: string | undefined
    }
    experiments: { enabled: bigint }
    'feature-hints': { current: bigint; hidden: bigint }
    permissions: { 'max-default': bigint; 'max-custom': bigint; default: bigint }
  }
  'config-local': { [x: string]: string[] }
  version: string
}
type SignalingSettings = {
  federation: {
    server: string
    nextcloudServer: string
    joinAuthParams?: { token: string } | undefined
    helloAuthParams: { token: string }
    roomId: string
  }
  helloAuthParams?:
    | { '1.0': { userid: string | null; ticket: string }; '2.0': { token: string } }
    | undefined
  hideWarning: boolean
  server: string
  signalingMode: string
  sipDialinInfo: string
  stunservers: { urls: string[] }[]
  ticket?: string | undefined
  turnservers: { urls: string[]; username: string; credential: string }[]
  userId: string | null
}
type SignalingSession = {
  actorId: string
  actorType: string
  inCall: bigint
  lastPing: bigint
  participantPermissions: bigint
  roomId: bigint
  sessionId: string
  userId: string
}
type Thread = {
  id: bigint
  roomToken: string
  title: string
  lastMessageId: bigint
  lastActivity: bigint
  numReplies: bigint
}
type ThreadAttendee = { notificationLevel: 0n | 1n | 2n | 3n }
type ThreadInfo = {
  thread: Thread
  attendee: ThreadAttendee
  first: {
    actorDisplayName: string
    actorId: string
    actorType: string
    expirationTimestamp: bigint
    message: string
    messageParameters: { [x: string]: RichObjectParameter }
    messageType: string
    systemMessage: string
    deleted?: true | undefined
    id: bigint
    isReplyable: boolean
    markdown: boolean
    reactions: { [x: string]: bigint }
    reactionsSelf?: string[] | undefined
    referenceId: string
    timestamp: bigint
    token: string
    lastEditActorDisplayName?: string | undefined
    lastEditActorId?: string | undefined
    lastEditActorType?: string | undefined
    lastEditTimestamp?: bigint | undefined
    silent?: boolean | undefined
    threadId?: bigint | undefined
    isThread?: boolean | undefined
    threadTitle?: string | undefined
    threadReplies?: bigint | undefined
    metaData?: ChatMessageMetaData | undefined
  }
  last: {
    actorDisplayName: string
    actorId: string
    actorType: string
    expirationTimestamp: bigint
    message: string
    messageParameters: { [x: string]: RichObjectParameter }
    messageType: string
    systemMessage: string
    deleted?: true | undefined
    id: bigint
    isReplyable: boolean
    markdown: boolean
    reactions: { [x: string]: bigint }
    reactionsSelf?: string[] | undefined
    referenceId: string
    timestamp: bigint
    token: string
    lastEditActorDisplayName?: string | undefined
    lastEditActorId?: string | undefined
    lastEditActorType?: string | undefined
    lastEditTimestamp?: bigint | undefined
    silent?: boolean | undefined
    threadId?: bigint | undefined
    isThread?: boolean | undefined
    threadTitle?: string | undefined
    threadReplies?: bigint | undefined
    metaData?: ChatMessageMetaData | undefined
  }
}
type FederationInvite = {
  id: bigint
  state: bigint
  localCloudId: string
  localToken: string
  remoteAttendeeId: bigint
  remoteServerUrl: string
  remoteToken: string
  roomName: string
  userId: string
  inviterCloudId: string
  inviterDisplayName: string
}
type BotFeatures = { features: bigint }
type BotWithDetails = {
  description: string | null
  id: bigint
  name: string
  state: bigint
  error_count: bigint
  features: bigint
  last_error_date: bigint
  last_error_message: string
  url: string
  url_hash: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          query: { darkTheme?: boolean | undefined }
        } & { header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          header: { 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: Room } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar/emoji': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { emoji: string; color?: (string | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { emoji: string; color?: (string | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar/dark': {
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/matrix-avatar/:size': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string; size: 64n | 512n } } & {
              query: { mxid: string; darkTheme?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; size: 64n | 512n } } & {
              query: { mxid: string; darkTheme?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                actorType: 'users' | 'guests' | 'emails' | 'ip'
                actorId: string
                internalNote?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Ban } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                actorType: 'users' | 'guests' | 'emails' | 'ip'
                actorId: string
                internalNote?: string | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'bannedActor' | 'internalNote' | 'moderator' | 'self' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          header: { 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: Ban[] } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token/:banId': {
      $delete: {
        input: { param: { apiVersion: 'v1'; token: string; banId: bigint } } & {
          header: { 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Bot[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/:botId': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { description: string | null; id: bigint; name: string; state: bigint }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { description: string | null; id: bigint; name: string; state: bigint }
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { description: string | null; id: bigint; name: string; state: bigint }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; botId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { mode: 0n | 1n | 2n | 3n; amount: bigint; attendeeMap?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { mode: 0n | 1n | 2n | 3n; amount: bigint; attendeeMap?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { mode: 0n | 1n | 2n | 3n; amount: bigint; attendeeMap?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/broadcast': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/attendees': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeMap: string } }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeMap: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeMap: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/request-assistance': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/rooms': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/switch': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { target: string } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { target: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { target: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/dashboard/events': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: DashboardEvent[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mutual-events': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: DashboardEvent[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token': {
      $get: {
        input: { param: { apiVersion: 'v4'; token: string } } & {
          header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: CallPeer[] } }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
                silentFor?: string[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
                silentFor?: string[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
                silentFor?: string[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
                silentFor?: string[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { flags: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { flags: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { flags: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { all?: boolean | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { all?: boolean | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/download': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { format?: 'csv' | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { format?: 'csv' | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { format?: 'csv' | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                sessionId: string
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                sessionId: string
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                sessionId: string
                flags?: (bigint | null) | undefined
                silent?: boolean | undefined
                recordingConsent?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { sessionId: string; flags: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { sessionId: string; flags: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { sessionId: string; flags: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { sessionId: string }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { sessionId: string }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/ring/:attendeeId': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/dialout/:attendeeId': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; attendeeId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: string; message?: string | undefined } }
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/notification-state': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  actorDisplayName: string
                  actorId: string
                  actorType: string
                  expirationTimestamp: bigint
                  message: string
                  messageParameters: { [x: string]: RichObjectParameter }
                  messageType: string
                  systemMessage: string
                  deleted?: true | undefined
                  id: bigint
                  isReplyable: boolean
                  markdown: boolean
                  reactions: { [x: string]: bigint }
                  reactionsSelf?: string[] | undefined
                  referenceId: string
                  timestamp: bigint
                  token: string
                  lastEditActorDisplayName?: string | undefined
                  lastEditActorId?: string | undefined
                  lastEditActorType?: string | undefined
                  lastEditTimestamp?: bigint | undefined
                  silent?: boolean | undefined
                  threadId?: bigint | undefined
                  isThread?: boolean | undefined
                  threadTitle?: string | undefined
                  threadReplies?: bigint | undefined
                  metaData?: ChatMessageMetaData | undefined
                  parent?: ChatMessage | DeletedChatMessage | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                replyToToken?: string | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              query: {
                lookIntoFuture: 0n | 1n
                limit?: bigint | undefined
                lastKnownMessageId?: bigint | undefined
                lastCommonReadId?: bigint | undefined
                timeout?: bigint | undefined
                setReadMarker?: 0n | 1n | undefined
                includeLastKnown?: 0n | 1n | undefined
                noStatusUpdate?: 0n | 1n | undefined
                markNotificationsAsRead?: 0n | 1n | undefined
                threadId?: bigint | undefined
              }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatMessageWithParent[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              query: {
                lookIntoFuture: 0n | 1n
                limit?: bigint | undefined
                lastKnownMessageId?: bigint | undefined
                lastCommonReadId?: bigint | undefined
                timeout?: bigint | undefined
                setReadMarker?: 0n | 1n | undefined
                includeLastKnown?: 0n | 1n | undefined
                noStatusUpdate?: 0n | 1n | undefined
                markNotificationsAsRead?: 0n | 1n | undefined
                threadId?: bigint | undefined
              }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              query: {
                lookIntoFuture: 0n | 1n
                limit?: bigint | undefined
                lastKnownMessageId?: bigint | undefined
                lastCommonReadId?: bigint | undefined
                timeout?: bigint | undefined
                setReadMarker?: 0n | 1n | undefined
                includeLastKnown?: 0n | 1n | undefined
                noStatusUpdate?: 0n | 1n | undefined
                markNotificationsAsRead?: 0n | 1n | undefined
                threadId?: bigint | undefined
              }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'thread' } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatMessage } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatMessage } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ScheduledMessage[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'actor' } } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: ScheduledMessage } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'message' | 'reply-to' | 'send-at' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'reply-to' } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'actor' } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'message' } } }
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule/:messageId': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                silent?: boolean | undefined
                threadTitle?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: ScheduledMessage } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                silent?: boolean | undefined
                threadTitle?: string | undefined
              }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'message' | 'send-at' | 'thread-title' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                silent?: boolean | undefined
                threadTitle?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                silent?: boolean | undefined
                threadTitle?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'actor' | 'message' } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                message: string
                sendAt: bigint
                silent?: boolean | undefined
                threadTitle?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'message' } } }
            outputFormat: 'json'
            status: 413
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'actor' | 'message' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                objectType: string
                objectId: string
                metaData?: string | undefined
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  actorDisplayName: string
                  actorId: string
                  actorType: string
                  expirationTimestamp: bigint
                  message: string
                  messageParameters: { [x: string]: RichObjectParameter }
                  messageType: string
                  systemMessage: string
                  deleted?: true | undefined
                  id: bigint
                  isReplyable: boolean
                  markdown: boolean
                  reactions: { [x: string]: bigint }
                  reactionsSelf?: string[] | undefined
                  referenceId: string
                  timestamp: bigint
                  token: string
                  lastEditActorDisplayName?: string | undefined
                  lastEditActorId?: string | undefined
                  lastEditActorType?: string | undefined
                  lastEditTimestamp?: bigint | undefined
                  silent?: boolean | undefined
                  threadId?: bigint | undefined
                  isThread?: boolean | undefined
                  threadTitle?: string | undefined
                  threadReplies?: bigint | undefined
                  metaData?: ChatMessageMetaData | undefined
                  parent?: ChatMessage | DeletedChatMessage | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                objectType: string
                objectId: string
                metaData?: string | undefined
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                objectType: string
                objectId: string
                metaData?: string | undefined
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                objectType: string
                objectId: string
                metaData?: string | undefined
                actorDisplayName?: string | undefined
                referenceId?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 413
          }
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          query: {
            objectType: string
            lastKnownMessageId?: bigint | undefined
            limit?: bigint | undefined
          }
        } & { header: { 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: ChatMessage } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/summarize': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fromMessageId: bigint } }
            output: {
              ocs: { meta: OCSMeta; data: { taskId: bigint; nextOffset?: bigint | undefined } }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fromMessageId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fromMessageId: bigint } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'ai-no-provider' | 'ai-error' | 'classified' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fromMessageId: bigint } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/context': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { limit?: bigint | undefined; threadId?: bigint | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatMessageWithParent[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { limit?: bigint | undefined; threadId?: bigint | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { limit?: bigint | undefined; threadId?: bigint | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'thread' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId': {
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatMessageWithParent } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatMessageWithParent } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
      $put:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: ChatMessageWithParent } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: ChatMessageWithParent } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { message: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/reminder': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: ChatReminder } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ChatReminder } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/upcoming-reminders': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ChatReminderUpcoming[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/read': {
      $post: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
        } & { json: { lastReadMessage?: (bigint | null) | undefined } }
        output: { ocs: { meta: OCSMeta; data: Room } }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: Room } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share/overview': {
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          query: { limit?: bigint | undefined }
        } & { header: { 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: ChatMessage[] } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { pinUntil?: bigint | undefined } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  actorDisplayName: string
                  actorId: string
                  actorType: string
                  expirationTimestamp: bigint
                  message: string
                  messageParameters: { [x: string]: RichObjectParameter }
                  messageType: string
                  systemMessage: string
                  deleted?: true | undefined
                  id: bigint
                  isReplyable: boolean
                  markdown: boolean
                  reactions: { [x: string]: bigint }
                  reactionsSelf?: string[] | undefined
                  referenceId: string
                  timestamp: bigint
                  token: string
                  lastEditActorDisplayName?: string | undefined
                  lastEditActorId?: string | undefined
                  lastEditActorType?: string | undefined
                  lastEditTimestamp?: bigint | undefined
                  silent?: boolean | undefined
                  threadId?: bigint | undefined
                  isThread?: boolean | undefined
                  threadTitle?: string | undefined
                  threadReplies?: bigint | undefined
                  metaData?: ChatMessageMetaData | undefined
                  parent?: ChatMessage | DeletedChatMessage | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { pinUntil?: bigint | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'message' | 'until' | 'status' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { pinUntil?: bigint | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'message' | 'until' | 'status' } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  actorDisplayName: string
                  actorId: string
                  actorType: string
                  expirationTimestamp: bigint
                  message: string
                  messageParameters: { [x: string]: RichObjectParameter }
                  messageType: string
                  systemMessage: string
                  deleted?: true | undefined
                  id: bigint
                  isReplyable: boolean
                  markdown: boolean
                  reactions: { [x: string]: bigint }
                  reactionsSelf?: string[] | undefined
                  referenceId: string
                  timestamp: bigint
                  token: string
                  lastEditActorDisplayName?: string | undefined
                  lastEditActorId?: string | undefined
                  lastEditActorType?: string | undefined
                  lastEditTimestamp?: bigint | undefined
                  silent?: boolean | undefined
                  threadId?: bigint | undefined
                  isThread?: boolean | undefined
                  threadTitle?: string | undefined
                  threadReplies?: bigint | undefined
                  metaData?: ChatMessageMetaData | undefined
                  parent?: ChatMessage | DeletedChatMessage | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'status' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'message' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin/self': {
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/mentions': {
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          query: { search: string; limit?: bigint | undefined; includeStatus?: boolean | undefined }
        } & { header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: ChatMentionSuggestion[] } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/attachment/folder': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileNames?: string[] | undefined; allowUpdate?: boolean | undefined } }
            output: {
              ocs: { meta: OCSMeta; data: { folder: string; renames: { [x: string]: string }[] } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileNames?: string[] | undefined; allowUpdate?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileNames?: string[] | undefined; allowUpdate?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileNames?: string[] | undefined; allowUpdate?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileNames?: string[] | undefined; allowUpdate?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/attachment': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { renames: { [x: string]: string }[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                filePath: string
                referenceId: string
                talkMetaData?: string | undefined
                fileName?: string | undefined
                allowUpdate?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/tags': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ConversationTag[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { name: string }
            }
            output: { ocs: { meta: OCSMeta; data: ConversationTag } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { name: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'name' | 'limit' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { name: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: ConversationTag } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { error: 'name' | 'type' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'type' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/reorder': {
      $put:
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { orderedIds: string[] }
            }
            output: { ocs: { meta: OCSMeta; data: ConversationTag[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { orderedIds: string[] }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId/collapsed': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collapsed: boolean } }
            output: { ocs: { meta: OCSMeta; data: ConversationTag } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collapsed: boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; tagId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collapsed: boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/file/:fileId': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; fileId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { token: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; fileId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; fileId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; fileId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/publicshare/:shareToken': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; shareToken: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { token: string; userId: string; userDisplayName: string }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; shareToken: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; shareToken: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/guest/:token/name': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { displayName: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { displayName: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { displayName: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'app' | 'classified' | 'in-call' } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'app' | 'in-call' } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/languages': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: LiveTranscriptionLanguage } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'app' } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/translation-languages': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  originLanguages: { [x: string]: LiveTranscriptionLanguage }
                  targetLanguages: { [x: string]: LiveTranscriptionLanguage }
                  defaultTargetLanguageId: string
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'app' | 'translations' } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token/language': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { languageId: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { languageId: string } }
            output: { ocs: { meta: OCSMeta; data: { error: 'app' | 'classified' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { languageId: string } }
            output: { ocs: { meta: OCSMeta; data: { error: 'app' } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token/target-language': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { targetLanguageId: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { targetLanguageId: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'app' | 'classified' | 'translations' | 'in-call' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  canLink: boolean
                  account: {
                    id: string
                    homeserverId: string
                    mxid: string
                    deviceId: string
                    status: 0n | 1n
                    lastError: string | null
                    lastSync: bigint
                    verified: boolean | null
                  }
                  connected: boolean
                  homeservers: MatrixHomeserver[]
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { homeserverId: string; user: string; password: string }
            }
            output: { ocs: { meta: OCSMeta; data: MatrixAccount } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { homeserverId: string; user: string; password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { homeserverId: string; user: string; password: string }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { error: string } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { homeserverId: string; user: string; password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { homeserverId: string; user: string; password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
      $put:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password: string }
            }
            output: { ocs: { meta: OCSMeta; data: MatrixAccount } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password: string }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { error: string } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password: string }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/check': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { account: MatrixAccount; connected: boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: MatrixVerification } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'keys' | 'matrix' | 'unavailable' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'keys' | 'matrix' | 'unavailable' } }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'keys' | 'matrix' | 'unavailable' } }
            }
            outputFormat: 'json'
            status: 502
          }
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: MatrixVerification } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'verification' } } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: MatrixVerification } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'state' | 'matrix' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'state' | 'matrix' } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'state' | 'matrix' } } }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'matrix' } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'matrix' } } }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/backup': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { recoveryKey: string }
            }
            output: { ocs: { meta: OCSMeta; data: { restored: bigint } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { recoveryKey: string }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'backup' | 'matrix' | 'recovery-key' | 'unavailable' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { recoveryKey: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { recoveryKey: string }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'backup' | 'matrix' | 'recovery-key' | 'unavailable' }
              }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { recoveryKey: string }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'backup' | 'matrix' | 'recovery-key' | 'unavailable' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/invite/:id': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { token: string | null } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'invitation' | 'matrix' } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'invitation' | 'matrix' } } }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'invitation' | 'matrix' } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'account' | 'invitation' | 'matrix' } } }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/room': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name?: string | undefined
                topic?: string | undefined
                invites?: string[] | undefined
                direct?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { token: string | null } } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name?: string | undefined
                topic?: string | undefined
                invites?: string[] | undefined
                direct?: boolean | undefined
              }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'invite' | 'matrix' | 'name' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name?: string | undefined
                topic?: string | undefined
                invites?: string[] | undefined
                direct?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name?: string | undefined
                topic?: string | undefined
                invites?: string[] | undefined
                direct?: boolean | undefined
              }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'invite' | 'matrix' | 'name' } }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name?: string | undefined
                topic?: string | undefined
                invites?: string[] | undefined
                direct?: boolean | undefined
              }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'invite' | 'matrix' | 'name' } }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/room/join': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { reference: string }
            }
            output: { ocs: { meta: OCSMeta; data: { token: string | null } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { reference: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'matrix' | 'reference' | 'room' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { reference: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { reference: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'matrix' | 'reference' | 'room' } }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { reference: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'account' | 'matrix' | 'reference' | 'room' } }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: MatterbridgeWithProcessState } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { enabled: boolean; parts?: MatterbridgeConfigFields | undefined } }
            output: { ocs: { meta: OCSMeta; data: MatterbridgeProcessState } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { enabled: boolean; parts?: MatterbridgeConfigFields | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { enabled: boolean; parts?: MatterbridgeConfigFields | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 406
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: boolean } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token/process': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: MatterbridgeProcessState } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                question: string
                options: string[]
                resultMode: 0n | 1n
                maxVotes: bigint
                draft?: boolean | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: PollDraft } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                question: string
                options: string[]
                resultMode: 0n | 1n
                maxVotes: bigint
                draft?: boolean | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Poll } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                question: string
                options: string[]
                resultMode: 0n | 1n
                maxVotes: bigint
                draft?: boolean | undefined
                threadId?: bigint | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/draft/:pollId': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: { question: string; options: string[]; resultMode: 0n | 1n; maxVotes: bigint }
            }
            output: { ocs: { meta: OCSMeta; data: PollDraft } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: { question: string; options: string[]; resultMode: 0n | 1n; maxVotes: bigint }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: { question: string; options: string[]; resultMode: 0n | 1n; maxVotes: bigint }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: { question: string; options: string[]; resultMode: 0n | 1n; maxVotes: bigint }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/drafts': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: PollDraft[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Poll } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { optionIds?: bigint[] | undefined } }
            output: { ocs: { meta: OCSMeta; data: Poll } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { optionIds?: bigint[] | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { optionIds?: bigint[] | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Poll } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; pollId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'draft' | 'options' | 'poll' | 'question' | 'room' }
              }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId/export/:format': {
      $get:
        | {
            input: {
              param: { apiVersion: 'v1'; token: string; pollId: bigint; format: 'ods' | 'csv' }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v1'; token: string; pollId: bigint; format: 'ods' | 'csv' }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v1'; token: string; pollId: bigint; format: 'ods' | 'csv' }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { apiVersion: 'v1'; token: string; pollId: bigint; format: 'ods' | 'csv' }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/presets/room': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ConversationPreset[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/publicshareauth': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { shareToken: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { token: string; name: string; displayName: string } }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { shareToken: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/reaction/:token/:messageId': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Reaction[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Reaction[] } } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Reaction[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 502
          }
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction?: (string | null) | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Reaction[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction?: (string | null) | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { status: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { status: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { status: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/notification': {
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              query: { timestamp: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              query: { timestamp: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              query: { timestamp: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/retry': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { taskId: bigint; timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { taskId: bigint; timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { taskId: bigint; timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/share-chat': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileId: bigint; timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileId: bigint; timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { fileId: bigint; timestamp: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' } } & {
              query: {
                noStatusUpdate?: 0n | 1n | undefined
                includeStatus?: boolean | undefined
                modifiedSince?: bigint | undefined
                includeLastMessage?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              query: {
                noStatusUpdate?: 0n | 1n | undefined
                includeStatus?: boolean | undefined
                modifiedSince?: bigint | undefined
                includeLastMessage?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: RoomWithInvalidInvitations } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  error:
                    | 'avatar'
                    | 'classified'
                    | 'description'
                    | 'invite'
                    | 'listable'
                    | 'lobby'
                    | 'lobby-timer'
                    | 'mention-permissions'
                    | 'message-expiration'
                    | 'name'
                    | 'object'
                    | 'object-id'
                    | 'object-type'
                    | 'owner'
                    | 'password'
                    | 'permissions'
                    | 'preset'
                    | 'read-only'
                    | 'recording-consent'
                    | 'sip-enabled'
                    | 'type'
                  message?: string | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'auth' } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  error:
                    | 'avatar'
                    | 'classified'
                    | 'description'
                    | 'invite'
                    | 'listable'
                    | 'lobby'
                    | 'lobby-timer'
                    | 'mention-permissions'
                    | 'message-expiration'
                    | 'name'
                    | 'object'
                    | 'object-id'
                    | 'object-type'
                    | 'owner'
                    | 'password'
                    | 'permissions'
                    | 'preset'
                    | 'read-only'
                    | 'recording-consent'
                    | 'sip-enabled'
                    | 'type'
                  message?: string | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                roomType?: bigint | undefined
                invite?: string | undefined
                roomName?: string | undefined
                source?: string | undefined
                objectType?: string | undefined
                objectId?: string | undefined
                password?: string | undefined
                readOnly?: 0n | 1n | undefined
                listable?: 0n | 1n | 2n | undefined
                messageExpiration?: bigint | undefined
                lobbyState?: 0n | 1n | undefined
                lobbyTimer?: (bigint | null) | undefined
                sipEnabled?: 0n | 1n | 2n | undefined
                permissions?: bigint | undefined
                recordingConsent?: 0n | 1n | undefined
                mentionPermissions?: 0n | 1n | undefined
                description?: string | undefined
                emoji?: (string | null) | undefined
                avatarColor?: (string | null) | undefined
                participants?: InvitationList | undefined
                owner?: string | undefined
                preset?: (string | null) | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  error:
                    | 'avatar'
                    | 'classified'
                    | 'description'
                    | 'invite'
                    | 'listable'
                    | 'lobby'
                    | 'lobby-timer'
                    | 'mention-permissions'
                    | 'message-expiration'
                    | 'name'
                    | 'object'
                    | 'object-id'
                    | 'object-type'
                    | 'owner'
                    | 'password'
                    | 'permissions'
                    | 'preset'
                    | 'read-only'
                    | 'recording-consent'
                    | 'sip-enabled'
                    | 'type'
                  message?: string | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/listed-room': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' } } & {
              query: { searchTerm?: string | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              query: { searchTerm?: string | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/breakout-rooms': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-federation'?: string | undefined
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-federation'?: string | undefined
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-federation'?: string | undefined
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { roomName: string } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { roomName: string } }
            output:
              | { ocs: { meta: OCSMeta; data: { error: 'event' | 'type' | 'value' } } }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { roomName: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { roomName: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { roomName: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'preserved' } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/note-to-self': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/favorite': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/notify': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: 'level' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/notify-calls': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: 'level' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/description': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { description: string } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { description: string } }
            output:
              | { ocs: { meta: OCSMeta; data: { error: 'event' | 'type' | 'value' } } }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { description: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { description: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { description: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/object': {
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'object-type' } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { includeStatus?: boolean | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Participant[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { includeStatus?: boolean | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { type?: bigint | undefined } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'ban'
                        | 'classified'
                        | 'cloud-id'
                        | 'federation'
                        | 'moderator'
                        | 'new-participant'
                        | 'outgoing'
                        | 'reach-remote'
                        | 'room-type'
                        | 'sip'
                        | 'source'
                        | 'trusted-servers'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'ban'
                        | 'classified'
                        | 'cloud-id'
                        | 'federation'
                        | 'moderator'
                        | 'new-participant'
                        | 'outgoing'
                        | 'reach-remote'
                        | 'room-type'
                        | 'sip'
                        | 'source'
                        | 'trusted-servers'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  error:
                    | 'ban'
                    | 'classified'
                    | 'cloud-id'
                    | 'federation'
                    | 'moderator'
                    | 'new-participant'
                    | 'outgoing'
                    | 'reach-remote'
                    | 'room-type'
                    | 'sip'
                    | 'source'
                    | 'trusted-servers'
                }
              }
            }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                newParticipant: string
                source?:
                  | 'users'
                  | 'groups'
                  | 'circles'
                  | 'emails'
                  | 'federated_users'
                  | 'phones'
                  | 'teams'
                  | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { participants?: InvitationList | undefined; owner?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { participants?: InvitationList | undefined; owner?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: RoomWithInvalidInvitations } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { participants?: InvitationList | undefined; owner?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'owner' | 'room' | 'room-type' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { participants?: InvitationList | undefined; owner?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'auth' } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { participants?: InvitationList | undefined; owner?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'owner' | 'room' | 'room-type' } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'x-nextcloud-talk-external-service-random'?: string | undefined
                'x-nextcloud-talk-external-service-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { participants?: InvitationList | undefined; owner?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'owner' | 'room' | 'room-type' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/breakout-rooms/participants': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { includeStatus?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Participant[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { includeStatus?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { includeStatus?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/self': {
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'announcement' | 'last-moderator' | 'participant' }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'announcement' | 'last-moderator' | 'participant' }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees': {
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'announcement'
                        | 'last-moderator'
                        | 'owner'
                        | 'participant'
                        | 'room-type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'announcement'
                        | 'last-moderator'
                        | 'owner'
                        | 'participant'
                        | 'room-type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'announcement'
                        | 'last-moderator'
                        | 'owner'
                        | 'participant'
                        | 'room-type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/public': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  error: 'breakout-room' | 'classified' | 'type' | 'value' | 'password'
                  message?: string | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'preserved' } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'breakout-room' | 'classified' | 'type' | 'value' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'preserved' } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/read-only': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: { error: 'type' | 'value' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/listable': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { scope: 0n | 1n | 2n } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { scope: 0n | 1n | 2n } }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | { error: 'breakout-room' | 'classified' | 'type' | 'value' }
                  | { error: 'forced'; forced?: 0n | 1n | 2n | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { scope: 0n | 1n | 2n } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { scope: 0n | 1n | 2n } }
            output: { ocs: { meta: OCSMeta; data: { error: 'preserved' } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mention-permissions': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { mentionPermissions: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { mentionPermissions: 0n | 1n } }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | { error: 'breakout-room' | 'type' | 'value' }
                  | { error: 'forced'; forced?: 0n | 1n | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { mentionPermissions: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/password': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password: string } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'breakout-room' | 'type' | 'value'; message?: string | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/archive': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/preserve': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'permissions' } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'permissions' } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/tags': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { tagIds?: string[] | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { tagIds?: string[] | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/important': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/sensitive': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'classified' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/active': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined; force?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined; force?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'field' | 'response' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined; force?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { error: 'ban' | 'password' } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined; force?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { password?: string | undefined; force?: boolean | undefined } }
            output: {
              ocs: { meta: OCSMeta; data: { sessionId: string; inCall: bigint; lastPing: bigint } }
            }
            outputFormat: 'json'
            status: 409
          }
      $delete: {
        input: { param: { apiVersion: 'v4'; token: string } } & {
          header: { 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/state': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/moderators': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId: bigint; participantType?: bigint | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId: bigint; participantType?: bigint | undefined } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'actor-type'
                        | 'last-moderator'
                        | 'moderator'
                        | 'participant'
                        | 'participant-type'
                        | 'room-type'
                        | 'self'
                        | 'type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId: bigint; participantType?: bigint | undefined } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'actor-type'
                        | 'last-moderator'
                        | 'moderator'
                        | 'participant'
                        | 'participant-type'
                        | 'room-type'
                        | 'self'
                        | 'type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId: bigint; participantType?: bigint | undefined } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'actor-type'
                        | 'last-moderator'
                        | 'moderator'
                        | 'participant'
                        | 'participant-type'
                        | 'room-type'
                        | 'self'
                        | 'type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId: bigint; participantType?: bigint | undefined } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint; participantType?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint; participantType?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'actor-type'
                        | 'last-moderator'
                        | 'moderator'
                        | 'participant'
                        | 'participant-type'
                        | 'room-type'
                        | 'self'
                        | 'type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint; participantType?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'actor-type'
                        | 'last-moderator'
                        | 'moderator'
                        | 'participant'
                        | 'participant-type'
                        | 'room-type'
                        | 'self'
                        | 'type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint; participantType?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | {
                  ocs: {
                    meta: OCSMeta
                    data: {
                      error:
                        | 'actor-type'
                        | 'last-moderator'
                        | 'moderator'
                        | 'participant'
                        | 'participant-type'
                        | 'room-type'
                        | 'self'
                        | 'type'
                    }
                  }
                }
              | {
                  ocs: {
                    meta: OCSMeta
                    data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
                  }
                }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { attendeeId: bigint; participantType?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'account' | 'encrypted' | 'matrix' | 'message' | 'permission' }
              }
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/permissions/:mode': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string; mode: 'call' | 'default' } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { permissions: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; mode: 'call' | 'default' } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { permissions: bigint } }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | { error: 'breakout-room' | 'mode' | 'type' | 'value' }
                  | { error: 'forced'; forced?: bigint | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees/permissions': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { attendeeId: bigint; method: 'set' | 'remove' | 'add'; permissions: bigint }
            }
            output: { ocs: { meta: OCSMeta; data: Participant[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { attendeeId: bigint; method: 'set' | 'remove' | 'add'; permissions: bigint }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | {
                      error: 'participant' | 'method' | 'moderator' | 'room-type' | 'type' | 'value'
                    }
                  | { error: 'forced'; forced?: bigint | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { attendeeId: bigint; method: 'set' | 'remove' | 'add'; permissions: bigint }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | {
                      error: 'participant' | 'method' | 'moderator' | 'room-type' | 'type' | 'value'
                    }
                  | { error: 'forced'; forced?: bigint | undefined }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: { attendeeId: bigint; method: 'set' | 'remove' | 'add'; permissions: bigint }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | {
                      error: 'participant' | 'method' | 'moderator' | 'room-type' | 'type' | 'value'
                    }
                  | { error: 'forced'; forced?: bigint | undefined }
              }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees/permissions/all': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { method: 'set' | 'remove' | 'add'; permissions: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { method: 'set' | 'remove' | 'add'; permissions: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/webinar/lobby': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n; timer?: (bigint | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n; timer?: (bigint | null) | undefined } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'breakout-room' | 'object' | 'type' | 'value' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n; timer?: (bigint | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/webinar/sip': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n | 2n } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n | 2n } }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | { error: 'breakout-room' | 'classified' | 'token' | 'type' | 'value' }
                  | { error: 'forced'; forced?: 0n | 1n | 2n | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n | 2n } }
            output:
              | { ocs: { meta: OCSMeta; data: { error: 'config' } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n | 2n } }
            output: { ocs: { meta: OCSMeta; data: { error: 'config' } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { state: 0n | 1n | 2n } }
            output: { ocs: { meta: OCSMeta; data: { error: 'config' } } }
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/recording-consent': {
      $put:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { recordingConsent: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { recordingConsent: bigint } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'breakout-room' | 'call' | 'classified' | 'value' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { recordingConsent: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { recordingConsent: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: 'config' } } }
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/resend-invitations': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId?: (bigint | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId?: (bigint | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { attendeeId?: (bigint | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/message-expiration': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { seconds: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { seconds: bigint } }
            output: {
              ocs: {
                meta: OCSMeta
                data:
                  | { error: 'breakout-room' | 'type' | 'value'; forced?: bigint | undefined }
                  | { error: 'forced'; forced?: bigint | undefined }
              }
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/import-emails': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { testRun?: boolean | undefined } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  invites: bigint
                  duplicates: bigint
                  invalid?: bigint | undefined
                  invalidLines?: bigint[] | undefined
                  type?: bigint | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { testRun?: boolean | undefined } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  error: 'classified' | 'room' | 'file' | 'header-email' | 'header-name' | 'rows'
                  message?: string | undefined
                  invites?: bigint | undefined
                  duplicates?: bigint | undefined
                  invalid?: bigint | undefined
                  invalidLines?: bigint[] | undefined
                  type?: bigint | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { testRun?: boolean | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/capabilities': {
      $get: {
        input: { param: { apiVersion: 'v4'; token: string } } & {
          header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
        }
        output: { ocs: { meta: OCSMeta; data: Capabilities | { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/meeting': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                calendarUri: string
                start: bigint
                attendeeIds?: (bigint[] | null) | undefined
                end?: (bigint | null) | undefined
                title?: (string | null) | undefined
                description?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                calendarUri: string
                start: bigint
                attendeeIds?: (bigint[] | null) | undefined
                end?: (bigint | null) | undefined
                title?: (string | null) | undefined
                description?: (string | null) | undefined
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { error: 'calendar' | 'conversation' | 'email' | 'end' | 'start' }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                calendarUri: string
                start: bigint
                attendeeIds?: (bigint[] | null) | undefined
                end?: (bigint | null) | undefined
                title?: (string | null) | undefined
                description?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mute': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { muteUntil: bigint } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { muteUntil: bigint } }
            output: { ocs: { meta: OCSMeta; data: { error: 'mute-until' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { muteUntil: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/settings/user': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                key: 'attachment_folder' | 'read_status_privacy' | 'typing_privacy' | 'play_sounds'
                value?: string | bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                key: 'attachment_folder' | 'read_status_privacy' | 'typing_privacy' | 'play_sounds'
                value?: string | bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                key: 'attachment_folder' | 'read_status_privacy' | 'typing_privacy' | 'play_sounds'
                value?: string | bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/settings': {
      $get:
        | {
            input: { param: { apiVersion: 'v3' } } & { query: { token?: string | undefined } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: SignalingSettings } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v3' } } & { query: { token?: string | undefined } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v3' } } & { query: { token?: string | undefined } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/:token': {
      $post:
        | {
            input: { param: { apiVersion: 'v3'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { messages: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v3'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { messages: string } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { apiVersion: 'v3'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { type: string; data: SignalingSession[] | string }[] }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v3'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v3'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { type: string; data: SignalingSession[] | string }[] }
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v3'; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { type: string; data: SignalingSession[] | string }[] }
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/temp-user-avatar': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: 'avatar' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/recent': {
      $get: {
        input: { param: { apiVersion: 'v1'; token: string } } & {
          query: { limit?: bigint | undefined }
        } & { header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: ThreadInfo[] } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/subscribed-threads': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ThreadInfo[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:threadId': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; token: string; threadId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ThreadInfo } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; threadId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'thread' | 'status' } } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiVersion: 'v1'; token: string; threadId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { threadTitle: string } }
            output: { ocs: { meta: OCSMeta; data: ThreadInfo } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; threadId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { threadTitle: string } }
            output: { ocs: { meta: OCSMeta; data: { error: 'title' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; threadId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { threadTitle: string } }
            output: { ocs: { meta: OCSMeta; data: { error: 'permission' } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; threadId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { threadTitle: string } }
            output: { ocs: { meta: OCSMeta; data: { error: 'thread' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:messageId/notify': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: { ocs: { meta: OCSMeta; data: ThreadInfo } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'level' | 'message' | 'status' | 'top-most' } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { level: bigint } }
            output: {
              ocs: { meta: OCSMeta; data: { error: 'level' | 'message' | 'status' | 'top-most' } }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/new/user-avatar/:size': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; size: 64n | 512n } } & {
              query: { cloudId: string; darkTheme?: boolean | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; size: 64n | 512n } } & {
              query: { cloudId: string; darkTheme?: boolean | undefined }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/new/user-avatar/:size/dark': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; size: 64n | 512n } } & {
              query: { cloudId: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; size: 64n | 512n } } & {
              query: { cloudId: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/:token/user-avatar/:size': {
      $get: {
        input: { param: { apiVersion: 'v1'; token: string; size: 64n | 512n } } & {
          query: { cloudId: string; darkTheme?: boolean | undefined }
        } & { header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/:token/user-avatar/:size/dark': {
      $get: {
        input: { param: { apiVersion: 'v1'; token: string; size: 64n | 512n } } & {
          query: { cloudId: string }
        } & { header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation/:id': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 410
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: FederationInvite[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/federation/active': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { sessionId?: (string | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            } & { json: { sessionId?: (string | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { sessionId: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { sessionId: string }
            } & {
              header: { 'x-nextcloud-federation'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/message': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                message: string
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                message: string
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                message: string
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                message: string
                referenceId?: string | undefined
                replyTo?: bigint | undefined
                silent?: boolean | undefined
                threadTitle?: string | undefined
                threadId?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/reaction/:messageId': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { reaction: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string; messageId: bigint } } & {
              query: { reaction: string }
            } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/ask-features': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { token: string } }
            output: { ocs: { meta: OCSMeta; data: BotFeatures } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { token: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'x-nextcloud-talk-bot-random'?: string | undefined
                'x-nextcloud-talk-bot-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { token: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/admin': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: BotWithDetails[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/certificate/expiration': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { query: { host: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { expiration_in_days: bigint | null } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { query: { host: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { query: { host: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { query: { host: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/hostedsignalingserver/requesttrial': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; name: string; email: string; language: string; country: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: { [x: string]: unknown } } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; name: string; email: string; language: string; country: string }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; name: string; email: string; language: string; country: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; name: string; email: string; language: string; country: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; name: string; email: string; language: string; country: string }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/hostedsignalingserver/delete': {
      $delete:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: MatrixHomeserver[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { serverName: string; name?: string | undefined; baseUrl?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: MatrixHomeserver } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { serverName: string; name?: string | undefined; baseUrl?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { serverName: string; name?: string | undefined; baseUrl?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { serverName: string; name?: string | undefined; baseUrl?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { serverName: string; name?: string | undefined; baseUrl?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id': {
      $put:
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                name?: (string | null) | undefined
                enabled?: (boolean | null) | undefined
                baseUrl?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: MatrixHomeserver } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                name?: (string | null) | undefined
                enabled?: (boolean | null) | undefined
                baseUrl?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                name?: (string | null) | undefined
                enabled?: (boolean | null) | undefined
                baseUrl?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                name?: (string | null) | undefined
                enabled?: (boolean | null) | undefined
                baseUrl?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & {
              json: {
                name?: (string | null) | undefined
                enabled?: (boolean | null) | undefined
                baseUrl?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'accounts' | 'homeserver' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'accounts' | 'homeserver' } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id/test': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: MatrixHomeserver } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; id: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/version': {
      $get:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { version: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge': {
      $delete:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: boolean } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/welcome/:serverId': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { version: number } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v1'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/settings/sip': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                sipGroups?: string[] | undefined
                dialInInfo?: string | undefined
                sharedSecret?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                sipGroups?: string[] | undefined
                dialInInfo?: string | undefined
                sharedSecret?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1' } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                sipGroups?: string[] | undefined
                dialInInfo?: string | undefined
                sharedSecret?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/welcome/:serverId': {
      $get:
        | {
            input: { param: { apiVersion: 'v3'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  version: string
                  warning?: string | undefined
                  features?: string[] | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v3'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v3'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v3'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v3'; serverId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { error: string; version?: string | undefined } }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/backend': {
      $post:
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { type: string; error: { code: string; message: string } }
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { type: string; error: { code: string; message: string } }
              }
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1' } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { type: string; error: { code: string; message: string } }
              }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/request-upload': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { owner: string; fileName: string } }
            output: {
              ocs: { meta: OCSMeta; data: { token: string; password: string; fileName: string } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { owner: string; fileName: string } }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { owner: string; fileName: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { type: string; error: { code: string; message: string } }
              }
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/store': {
      $post:
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: { owner?: (string | null) | undefined; fileName?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: { owner?: (string | null) | undefined; fileName?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { error: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; token: string } } & {
              header: {
                'talk-recording-random'?: string | undefined
                'talk-recording-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: { owner?: (string | null) | undefined; fileName?: (string | null) | undefined }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { type: string; error: { code: string; message: string } }
              }
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/pin/:pin': {
      $get:
        | {
            input: { param: { apiVersion: 'v4'; token: string; pin: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; pin: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; pin: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string; pin: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/verify-dialin': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { pin: string } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { pin: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { pin: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { pin: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/direct-dial-in': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { phoneNumber: string; caller: string } }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { phoneNumber: string; caller: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { phoneNumber: string; caller: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { phoneNumber: string; caller: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { apiVersion: 'v4' } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { phoneNumber: string; caller: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/verify-dialout': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                number: string
                options?:
                  | {
                      actorId?: string | undefined
                      actorType?: string | undefined
                      attendeeId?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                number: string
                options?:
                  | {
                      actorId?: string | undefined
                      actorType?: string | undefined
                      attendeeId?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                number: string
                options?:
                  | {
                      actorId?: string | undefined
                      actorType?: string | undefined
                      attendeeId?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                number: string
                options?:
                  | {
                      actorId?: string | undefined
                      actorType?: string | undefined
                      attendeeId?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & {
              json: {
                number: string
                options?:
                  | {
                      actorId?: string | undefined
                      actorType?: string | undefined
                      attendeeId?: bigint | undefined
                    }
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/open-dial-in': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: Room } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/rejected-dialout': {
      $delete:
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { callId: string; options?: string | undefined }
            } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { callId: string; options?: string | undefined }
            } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { callId: string; options?: string | undefined }
            } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { callId: string; options?: string | undefined }
            } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4'; token: string } } & {
              query: { callId: string; options?: string | undefined }
            } & {
              header: {
                'talk-sipbridge-random'?: string | undefined
                'talk-sipbridge-checksum'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/backend': {
      $post: {
        input: { param: { apiVersion: 'v3' } } & {
          header: {
            'spreed-signaling-random'?: string | undefined
            'spreed-signaling-checksum'?: string | undefined
            'OCS-APIRequest': boolean
          }
        }
        output: {
          ocs: {
            meta: OCSMeta
            data: {
              type: string
              error?: { code: string; message: string } | undefined
              auth?:
                | {
                    version: string
                    userid?: string | undefined
                    user?: { [x: string]: { [x: string]: unknown } } | undefined
                  }
                | undefined
              room?:
                | {
                    version: string
                    roomid?: string | undefined
                    properties?: { [x: string]: { [x: string]: unknown } } | undefined
                    permissions?: string[] | undefined
                    session?: { [x: string]: { [x: string]: unknown } } | undefined
                  }
                | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
