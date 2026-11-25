type CaptchaFeature = { enabled: boolean; key: string }
type Feature = { enabled: boolean; url: string }
type VoiceNode = { name: string; lat: number; lon: number; public_url: string }
type VoiceFeature = { enabled: boolean; nodes: VoiceNode[] }
type GlobalLimits = {
  group_size: bigint
  message_embeds: bigint
  message_replies: bigint
  message_reactions: bigint
  server_emoji: bigint
  server_roles: bigint
  server_channels: bigint
  body_limit_size: bigint
  restrict_server_creation: string[]
  new_user_hours: bigint
  max_invite_duration_days: bigint
}
type UserLimits = {
  outgoing_friend_requests: bigint
  bots: bigint
  message_length: bigint
  message_attachments: bigint
  servers: bigint
  voice_quality: bigint
  video: boolean
  video_resolution: bigint[]
  video_aspect_ratio: number[]
  file_upload_size_limits: { [key: string]: number }
}
type LimitsConfig = { global: GlobalLimits; new_user: UserLimits; default: UserLimits }
type LegalLinks = { terms_of_service: string; privacy_policy: string; guidelines: string }
type RevoltFeatures = {
  captcha: CaptchaFeature
  email: boolean
  invite_only: boolean
  autumn: Feature
  january: Feature
  livekit: VoiceFeature
  limits: LimitsConfig
  legal_links: LegalLinks
  assets: string
}
type RevoltConfig = {
  stoat: string
  revolt: string
  features: RevoltFeatures
  ws: string
  app: string
  vapid: string
}
type Error =
  | { type: 'LabelMe' }
  | { type: 'ContactSupport'; locale: string; msg: string }
  | { type: 'AlreadyOnboarded' }
  | { type: 'UsernameTaken' }
  | { type: 'InvalidUsername' }
  | { type: 'DiscriminatorChangeRatelimited' }
  | { type: 'UnknownUser' }
  | { type: 'AlreadyFriends' }
  | { type: 'AlreadySentRequest' }
  | { type: 'Blocked' }
  | { type: 'BlockedByOther' }
  | { type: 'NotFriends' }
  | { type: 'TooManyPendingFriendRequests'; max: number }
  | { type: 'UnknownChannel' }
  | { type: 'UnknownAttachment' }
  | { type: 'UnknownMessage' }
  | { type: 'CannotDeleteMessage' }
  | { type: 'CannotEditMessage' }
  | { type: 'CannotJoinCall' }
  | { type: 'TooManyAttachments'; max: number }
  | { type: 'TooManyEmbeds'; max: number }
  | { type: 'TooManyReplies'; max: number }
  | { type: 'TooManyChannels'; max: number }
  | { type: 'EmptyMessage' }
  | { type: 'PayloadTooLarge' }
  | { type: 'CannotRemoveYourself' }
  | { type: 'GroupTooLarge'; max: number }
  | { type: 'AlreadyInGroup' }
  | { type: 'NotInGroup' }
  | { type: 'AlreadyPinned' }
  | { type: 'NotPinned' }
  | { type: 'InSlowmode'; retry_after: bigint }
  | { type: 'CantCreateServers' }
  | { type: 'UnknownServer' }
  | { type: 'InvalidRole' }
  | { type: 'Banned' }
  | { type: 'TooManyServers'; max: number }
  | { type: 'TooManyEmoji'; max: number }
  | { type: 'TooManyRoles'; max: number }
  | { type: 'AlreadyInServer' }
  | { type: 'CannotTimeoutYourself' }
  | { type: 'ReachedMaximumBots' }
  | { type: 'IsBot' }
  | { type: 'IsNotBot' }
  | { type: 'BotIsPrivate' }
  | { type: 'CannotReportYourself' }
  | { type: 'MissingPermission'; permission: string }
  | { type: 'MissingUserPermission'; permission: string }
  | { type: 'NotElevated' }
  | { type: 'NotPrivileged' }
  | { type: 'CannotGiveMissingPermissions' }
  | { type: 'NotOwner' }
  | { type: 'IsElevated' }
  | { type: 'CannotRemoveOwnChannelView' }
  | { type: 'DatabaseError'; operation: string; collection: string }
  | { type: 'InternalError' }
  | { type: 'InvalidOperation' }
  | { type: 'InvalidCredentials' }
  | { type: 'InvalidProperty' }
  | { type: 'InvalidSession' }
  | { type: 'InvalidFlagValue' }
  | { type: 'NotAuthenticated' }
  | { type: 'DuplicateNonce' }
  | { type: 'NotFound' }
  | { type: 'NoEffect' }
  | { type: 'FailedValidation'; error: string }
  | { type: 'HeaderTooLarge' }
  | { type: 'OperationFailed' }
  | { type: 'IncorrectData'; with: string }
  | { type: 'LiveKitUnavailable' }
  | { type: 'NotAVoiceChannel' }
  | { type: 'AlreadyConnected' }
  | { type: 'NotConnected' }
  | { type: 'UnknownNode' }
  | { type: 'ProxyError' }
  | { type: 'FileTooSmall' }
  | { type: 'FileTooLarge'; max: number }
  | { type: 'FileTypeNotAllowed' }
  | { type: 'ImageProcessingFailed' }
  | { type: 'ImageResolutionNotAllowed' }
  | { type: 'NoEmbedData' }
  | { type: 'VosoUnavailable' }
  | { type: 'FeatureDisabled'; feature: string }
  | { type: 'RenderFail' }
  | { type: 'MissingHeaders' }
  | { type: 'CaptchaFailed' }
  | { type: 'BlockedByShield' }
  | { type: 'UnverifiedAccount' }
  | { type: 'EmailFailed' }
  | { type: 'InvalidToken' }
  | { type: 'MissingInvite' }
  | { type: 'InvalidInvite' }
  | { type: 'CompromisedPassword' }
  | { type: 'ShortPassword' }
  | { type: 'Blacklisted' }
  | { type: 'LockedOut' }
  | { type: 'TotpAlreadyEnabled' }
  | { type: 'DisallowedMFAMethod' }
type Metadata =
  | { type: 'File' }
  | { type: 'Text' }
  | {
      type: 'Image'
      width: number
      height: number
      thumbhash?: (number[] | null) | undefined
      animated?: (boolean | null) | undefined
    }
  | { type: 'Video'; width: number; height: number }
  | { type: 'Audio' }
type File2 = {
  _id: string
  tag: string
  filename: string
  metadata: Metadata
  content_type: string
  size: number
  deleted?: (boolean | null) | undefined
  reported?: (boolean | null) | undefined
  message_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  server_id?: (string | null) | undefined
  object_id?: (string | null) | undefined
}
type RelationshipStatus =
  | 'None'
  | 'User'
  | 'Friend'
  | 'Outgoing'
  | 'Incoming'
  | 'Blocked'
  | 'BlockedOther'
type Relationship = { _id: string; status: RelationshipStatus }
type Presence = 'Online' | 'Idle' | 'Focus' | 'Busy' | 'Invisible'
type UserStatus = { text?: (string | null) | undefined; presence?: (Presence | null) | undefined }
type BotInformation = { owner: string }
type User = {
  _id: string
  username: string
  discriminator: string
  display_name?: (string | null) | undefined
  pronouns?: (string | null) | undefined
  avatar?: (File2 | null) | undefined
  relations?: Relationship[] | undefined
  badges?: number | undefined
  status?: (UserStatus | null) | undefined
  flags?: number | undefined
  privileged?: boolean | undefined
  bot?: (BotInformation | null) | undefined
  relationship: RelationshipStatus
  online: boolean
}
type IdInput = string
type PresenceInput = 'Online' | 'Idle' | 'Focus' | 'Busy' | 'Invisible'
type UserStatusInput = { text?: string | null; presence?: PresenceInput | null }
type DataUserProfileInput = { content?: string | null; background?: string | null }
type FieldsUserInput =
  | 'Avatar'
  | 'StatusText'
  | 'StatusPresence'
  | 'ProfileContent'
  | 'ProfileBackground'
  | 'DisplayName'
  | 'Pronouns'
  | 'Internal'
type DataEditUserInput = {
  display_name?: string | null
  pronouns?: string | null
  avatar?: string | null
  status?: UserStatusInput | null
  profile?: DataUserProfileInput | null
  badges?: number | null
  flags?: number | null
  remove?: FieldsUserInput[]
}
type FlagResponse = { flags: number }
type DataChangeUsernameInput = { username: string; password: string }
type UserProfile = {
  content?: (string | null) | undefined
  background?: (File2 | null) | undefined
}
type OverrideField = { a: bigint; d: bigint }
type VoiceInformation = { max_users?: (number | null) | undefined }
type Channel =
  | { channel_type: 'SavedMessages'; _id: string; user: string }
  | {
      channel_type: 'DirectMessage'
      _id: string
      active: boolean
      recipients: string[]
      last_message_id?: (string | null) | undefined
    }
  | {
      channel_type: 'Group'
      _id: string
      name: string
      owner: string
      description?: (string | null) | undefined
      recipients: string[]
      icon?: (File2 | null) | undefined
      last_message_id?: (string | null) | undefined
      permissions?: (bigint | null) | undefined
      nsfw?: boolean | undefined
    }
  | {
      channel_type: 'TextChannel'
      _id: string
      server: string
      name: string
      description?: (string | null) | undefined
      icon?: (File2 | null) | undefined
      last_message_id?: (string | null) | undefined
      default_permissions?: (OverrideField | null) | undefined
      role_permissions?: { [key: string]: OverrideField } | undefined
      nsfw?: boolean | undefined
      voice?: (VoiceInformation | null) | undefined
      slowmode?: (bigint | null) | undefined
    }
type MutualResponse = { users: string[]; servers: string[]; channels: string[] }
type DataSendFriendRequestInput = { username: string }
type DataCreateBotInput = { name: string }
type BotWithUserResponse = {
  user: User
  _id: string
  owner: string
  token: string
  public: boolean
  default_permissions?: (bigint | null) | undefined
  analytics?: boolean | undefined
  discoverable?: boolean | undefined
  interactions_url?: string | undefined
  terms_of_service_url?: string | undefined
  privacy_policy_url?: string | undefined
  flags?: number | undefined
}
type PublicBot = {
  _id: string
  username: string
  avatar?: string | undefined
  description?: string | undefined
  privacy_policy_url?: string | undefined
  terms_of_service_url?: string | undefined
  default_permissions?: (bigint | null) | undefined
}
type InviteBotDestinationInput = { server: string } | { group: string }
type Bot = {
  _id: string
  owner: string
  token: string
  public: boolean
  default_permissions?: (bigint | null) | undefined
  analytics?: boolean | undefined
  discoverable?: boolean | undefined
  interactions_url?: string | undefined
  terms_of_service_url?: string | undefined
  privacy_policy_url?: string | undefined
  flags?: number | undefined
}
type FetchBotResponse = { bot: Bot; user: User }
type FieldsBotInput = 'Token' | 'InteractionsURL'
type DataEditBotInput = {
  name?: string | null
  public?: boolean | null
  default_permissions?: bigint | null
  analytics?: boolean | null
  interactions_url?: string | null
  remove?: FieldsBotInput[]
}
type OwnedBotsResponse = { bots: Bot[]; users: User[] }
type DiscoverRequestType = 'Bot' | 'Server'
type DiscoverRequestStatus =
  | 'Pending'
  | 'UnderReview'
  | { Removed: string | null }
  | { Denied: string | null }
  | { Approved: string | null }
type DiscoverRequest = { type: DiscoverRequestType; id: string; status: DiscoverRequestStatus }
type VoiceInformationInput = { max_users?: number | null }
type FieldsChannelInput = 'Description' | 'Icon' | 'DefaultPermissions' | 'Voice' | 'Slowmode'
type DataEditChannelInput = {
  name?: string | null
  description?: string | null
  owner?: string | null
  icon?: string | null
  nsfw?: boolean | null
  archived?: boolean | null
  voice?: VoiceInformationInput | null
  slowmode?: bigint | null
  remove?: FieldsChannelInput[]
}
type ISO8601TimestampInput = string
type DataCreateInviteInput = { max_uses?: bigint | null; expires?: ISO8601TimestampInput | null }
type ISO8601Timestamp = string
type Invite =
  | {
      type: 'Server'
      _id: string
      server: string
      creator: string
      channel: string
      max_uses?: (bigint | null) | undefined
      uses: bigint
      expires?: (ISO8601Timestamp | null) | undefined
    }
  | {
      type: 'Group'
      _id: string
      creator: string
      channel: string
      max_uses?: (bigint | null) | undefined
      uses: bigint
      expires?: (ISO8601Timestamp | null) | undefined
    }
type MemberCompositeKey = { server: string; user: string }
type Member = {
  _id: MemberCompositeKey
  joined_at: ISO8601Timestamp
  nickname?: (string | null) | undefined
  pronouns?: (string | null) | undefined
  avatar?: (File2 | null) | undefined
  roles?: string[] | undefined
  timeout?: (ISO8601Timestamp | null) | undefined
  can_publish?: boolean | undefined
  can_receive?: boolean | undefined
}
type MessageWebhook = { name: string; avatar?: (string | null) | undefined }
type SystemMessage =
  | { type: 'text'; content: string }
  | { type: 'user_added'; id: string; by: string }
  | { type: 'user_remove'; id: string; by: string }
  | { type: 'user_joined'; id: string }
  | { type: 'user_left'; id: string }
  | { type: 'user_kicked'; id: string }
  | { type: 'user_banned'; id: string }
  | { type: 'channel_renamed'; name: string; by: string }
  | { type: 'channel_description_changed'; by: string }
  | { type: 'channel_icon_changed'; by: string }
  | { type: 'channel_ownership_changed'; from: string; to: string }
  | { type: 'message_pinned'; id: string; by: string }
  | { type: 'message_unpinned'; id: string; by: string }
  | { type: 'call_started'; by: string; finished_at?: (ISO8601Timestamp | null) | undefined }
type LightspeedType = 'Channel'
type TwitchType = 'Channel' | 'Video' | 'Clip'
type BandcampType = 'Album' | 'Track'
type Special =
  | { type: 'None' }
  | { type: 'GIF' }
  | {
      type: 'YouTube'
      id: string
      creator_name?: (string | null) | undefined
      creator_url?: (string | null) | undefined
      timestamp?: (string | null) | undefined
    }
  | { type: 'Lightspeed'; content_type: LightspeedType; id: string }
  | { type: 'Twitch'; content_type: TwitchType; id: string }
  | {
      type: 'XApp'
      id: string
      text: string
      author_name: string
      author_handle: string
      author_url: string
      author_avatar_url?: (string | null) | undefined
      created_timestamp: number
      quote_id?: (string | null) | undefined
      quote_text?: (string | null) | undefined
      quote_author_handle?: (string | null) | undefined
      quote_author_name?: (string | null) | undefined
      quote_author_url?: (string | null) | undefined
      replies: number
      reposts: number
      likes: number
      views: number
    }
  | { type: 'Spotify'; content_type: string; id: string }
  | { type: 'Soundcloud' }
  | { type: 'Bandcamp'; content_type: BandcampType; id: string }
  | { type: 'AppleMusic'; album_id: string; track_id?: (string | null) | undefined }
  | { type: 'Streamable'; id: string }
  | { type: 'Gifbox'; poster_url?: (string | null) | undefined }
type ImageSize = 'Large' | 'Preview'
type Image = { url: string; width: number; height: number; size: ImageSize }
type Video = { url: string; width: number; height: number }
type Embed =
  | {
      type: 'Website'
      url?: (string | null) | undefined
      original_url?: (string | null) | undefined
      special?: (Special | null) | undefined
      title?: (string | null) | undefined
      description?: (string | null) | undefined
      image?: (Image | null) | undefined
      video?: (Video | null) | undefined
      site_name?: (string | null) | undefined
      icon_url?: (string | null) | undefined
      colour?: (string | null) | undefined
    }
  | { type: 'Image'; url: string; width: number; height: number; size: ImageSize }
  | { type: 'Video'; url: string; width: number; height: number }
  | {
      type: 'Text'
      icon_url?: (string | null) | undefined
      url?: (string | null) | undefined
      title?: (string | null) | undefined
      description?: (string | null) | undefined
      media?: (File2 | null) | undefined
      colour?: (string | null) | undefined
    }
  | { type: 'None' }
type Interactions = {
  reactions?: (string[] | null) | undefined
  restrict_reactions?: boolean | undefined
}
type Masquerade = {
  name?: (string | null) | undefined
  avatar?: (string | null) | undefined
  colour?: (string | null) | undefined
}
type Message = {
  _id: string
  nonce?: (string | null) | undefined
  channel: string
  author: string
  user?: (User | null) | undefined
  member?: (Member | null) | undefined
  webhook?: (MessageWebhook | null) | undefined
  content?: (string | null) | undefined
  system?: (SystemMessage | null) | undefined
  attachments?: (File2[] | null) | undefined
  edited?: (ISO8601Timestamp | null) | undefined
  embeds?: (Embed[] | null) | undefined
  mentions?: (string[] | null) | undefined
  role_mentions?: (string[] | null) | undefined
  replies?: (string[] | null) | undefined
  reactions?: { [key: string]: string[] } | undefined
  interactions?: Interactions | undefined
  masquerade?: (Masquerade | null) | undefined
  pinned?: (boolean | null) | undefined
  flags?: number | undefined
}
type BulkMessageResponse =
  | Message[]
  | { messages: Message[]; users: User[]; members?: (Member[] | null) | undefined }
type ReplyIntentInput = { id: string; mention: boolean; fail_if_not_exists?: boolean | null }
type SendableEmbedInput = {
  icon_url?: string | null
  url?: string | null
  title?: string | null
  description?: string | null
  media?: string | null
  colour?: string | null
}
type MasqueradeInput = { name?: string | null; avatar?: string | null; colour?: string | null }
type InteractionsInput = { reactions?: string[] | null; restrict_reactions?: boolean }
type DataMessageSendInput = {
  nonce?: string | null
  content?: string | null
  attachments?: string[] | null
  replies?: ReplyIntentInput[] | null
  embeds?: SendableEmbedInput[] | null
  masquerade?: MasqueradeInput | null
  interactions?: InteractionsInput | null
  flags?: number | null
}
type MessageSortInput = 'Relevance' | 'Latest' | 'Oldest'
type DataMessageSearchInput = {
  query?: string | null
  pinned?: boolean | null
  limit?: bigint | null
  before?: string | null
  after?: string | null
  sort?: MessageSortInput
  include_users?: boolean | null
}
type DataEditMessageInput = { content?: string | null; embeds?: SendableEmbedInput[] | null }
type OptionsBulkDeleteInput = { ids: string[] }
type DataCreateGroupInput = {
  name: string
  description?: string | null
  icon?: string | null
  users?: string[]
  nsfw?: boolean | null
}
type DataJoinCallInput = {
  node?: string | null
  force_disconnect?: boolean | null
  recipients?: string[] | null
}
type CreateVoiceUserResponse = { token: string; url: string }
type OverrideInput = { allow: bigint; deny: bigint }
type DataSetRolePermissionsInput = { permissions: OverrideInput }
type DataDefaultChannelPermissionsInput = { permissions: bigint } | { permissions: OverrideInput }
type Webhook = {
  id: string
  name: string
  avatar?: (File2 | null) | undefined
  creator_id: string
  channel_id: string
  permissions: bigint
  token?: (string | null) | undefined
}
type CreateWebhookBodyInput = { name: string; avatar?: string | null }
type DataCreateServerInput = { name: string; description?: string | null; nsfw?: boolean | null }
type Category = { id: string; title: string; channels: string[] }
type SystemMessageChannels = {
  user_joined?: (string | null) | undefined
  user_left?: (string | null) | undefined
  user_kicked?: (string | null) | undefined
  user_banned?: (string | null) | undefined
}
type Role = {
  _id: string
  name: string
  permissions: OverrideField
  colour?: (string | null) | undefined
  hoist?: boolean | undefined
  rank?: bigint | undefined
  icon?: (File2 | null) | undefined
  owner?: (string | null) | undefined
}
type Server = {
  _id: string
  owner: string
  name: string
  description?: (string | null) | undefined
  channels: string[]
  categories?: (Category[] | null) | undefined
  system_messages?: (SystemMessageChannels | null) | undefined
  roles?: { [key: string]: Role } | undefined
  default_permissions: bigint
  icon?: (File2 | null) | undefined
  banner?: (File2 | null) | undefined
  flags?: number | undefined
  nsfw?: boolean | undefined
  analytics?: boolean | undefined
  discoverable?: boolean | undefined
  approximate_member_count: number
}
type CreateServerLegacyResponse = { server: Server; channels: Channel[] }
type FetchServerResponse =
  | Server
  | {
      channels: string[]
      _id: string
      owner: string
      name: string
      description?: (string | null) | undefined
      categories?: (Category[] | null) | undefined
      system_messages?: (SystemMessageChannels | null) | undefined
      roles?: { [key: string]: Role } | undefined
      default_permissions: bigint
      icon?: (File2 | null) | undefined
      banner?: (File2 | null) | undefined
      flags?: number | undefined
      nsfw?: boolean | undefined
      analytics?: boolean | undefined
      discoverable?: boolean | undefined
      approximate_member_count: number
    }
type CategoryInput = { id: string; title: string; channels: string[] }
type SystemMessageChannelsInput = {
  user_joined?: string | null
  user_left?: string | null
  user_kicked?: string | null
  user_banned?: string | null
}
type FieldsServerInput = 'Description' | 'Categories' | 'SystemMessages' | 'Icon' | 'Banner'
type DataEditServerInput = {
  name?: string | null
  description?: string | null
  icon?: string | null
  banner?: string | null
  categories?: CategoryInput[] | null
  system_messages?: SystemMessageChannelsInput | null
  flags?: number | null
  discoverable?: boolean | null
  analytics?: boolean | null
  owner?: string | null
  remove?: FieldsServerInput[]
}
type LegacyServerChannelTypeInput = 'Text' | 'Voice'
type DataCreateServerChannelInput = {
  type?: LegacyServerChannelTypeInput
  name: string
  description?: string | null
  nsfw?: boolean | null
  voice?: VoiceInformationInput | null
}
type AllMemberResponse = { members: Member[]; users: User[] }
type MemberResponse = Member | { member: Member; roles: { [key: string]: Role } }
type FieldsMemberInput =
  | 'Nickname'
  | 'Pronouns'
  | 'Avatar'
  | 'Roles'
  | 'Timeout'
  | 'CanReceive'
  | 'CanPublish'
  | 'JoinedAt'
  | 'VoiceChannel'
type DataMemberEditInput = {
  nickname?: string | null
  pronouns?: string | null
  avatar?: string | null
  roles?: string[] | null
  timeout?: ISO8601TimestampInput | null
  can_publish?: boolean | null
  can_receive?: boolean | null
  voice_channel?: string | null
  remove?: FieldsMemberInput[]
}
type MemberQueryResponse = { members: Member[]; users: User[] }
type DataBanCreateInput = { reason?: string | null; delete_message_seconds?: bigint | null }
type ServerBan = { _id: MemberCompositeKey; reason?: (string | null) | undefined }
type BannedUser = {
  _id: string
  username: string
  discriminator: string
  avatar?: (File2 | null) | undefined
}
type BanListResult = { users: BannedUser[]; bans: ServerBan[] }
type DataCreateRoleInput = { name: string; rank?: bigint | null }
type NewRoleResponse = { id: string; role: Role }
type FieldsRoleInput = 'Colour' | 'Icon'
type DataEditRoleInput = {
  name?: string | null
  colour?: string | null
  hoist?: boolean | null
  rank?: bigint | null
  icon?: string | null
  remove?: FieldsRoleInput[]
}
type DataSetServerRolePermissionInput = { permissions: OverrideInput }
type DataPermissionsValueInput = { permissions: bigint }
type EmojiParent = { type: 'Server'; id: string } | { type: 'Detached' }
type Emoji = {
  _id: string
  parent: EmojiParent
  creator_id: string
  name: string
  animated?: boolean | undefined
  nsfw?: boolean | undefined
}
type DataEditRoleRanksInput = { ranks: string[] }
type PartialChannel = {
  name?: (string | null) | undefined
  owner?: (string | null) | undefined
  description?: (string | null) | undefined
  icon?: (File2 | null) | undefined
  nsfw?: (boolean | null) | undefined
  active?: (boolean | null) | undefined
  permissions?: (bigint | null) | undefined
  role_permissions?: ({ [key: string]: OverrideField } | null) | undefined
  default_permissions?: (OverrideField | null) | undefined
  last_message_id?: (string | null) | undefined
  voice?: (VoiceInformation | null) | undefined
  slowmode?: (bigint | null) | undefined
}
type Override = { allow: bigint; deny: bigint }
type PartialMember = {
  id?: (MemberCompositeKey | null) | undefined
  joined_at?: (ISO8601Timestamp | null) | undefined
  nickname?: (string | null) | undefined
  pronouns?: (string | null) | undefined
  avatar?: (File2 | null) | undefined
  roles?: (string[] | null) | undefined
  timeout?: (ISO8601Timestamp | null) | undefined
  can_publish?: (boolean | null) | undefined
  can_receive?: (boolean | null) | undefined
}
type PartialServer = {
  id?: (string | null) | undefined
  owner?: (string | null) | undefined
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  channels?: (string[] | null) | undefined
  categories?: (Category[] | null) | undefined
  system_messages?: (SystemMessageChannels | null) | undefined
  roles?: ({ [key: string]: Role } | null) | undefined
  default_permissions?: (bigint | null) | undefined
  icon?: (File2 | null) | undefined
  banner?: (File2 | null) | undefined
  flags?: (number | null) | undefined
  nsfw?: (boolean | null) | undefined
  analytics?: (boolean | null) | undefined
  discoverable?: (boolean | null) | undefined
  approximate_member_count?: (number | null) | undefined
}
type PartialRole = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  permissions?: (OverrideField | null) | undefined
  colour?: (string | null) | undefined
  hoist?: (boolean | null) | undefined
  rank?: (bigint | null) | undefined
  icon?: (File2 | null) | undefined
  owner?: (string | null) | undefined
}
type PartialEmoji = { name?: (string | null) | undefined }
type AuditLogEntryAction =
  | { type: 'MessageDelete'; author: string; channel: string }
  | { type: 'MessageBulkDelete'; channel: string; count: number }
  | { type: 'MessagePin'; message: string; author: string; channel: string }
  | { type: 'MessageUnpin'; message: string; author: string; channel: string }
  | { type: 'BanCreate'; user: string }
  | { type: 'BanDelete'; user: string }
  | { type: 'ChannelCreate'; channel: string; name: string }
  | { type: 'ChannelEdit'; channel: string; before: PartialChannel; after: PartialChannel }
  | { type: 'ChannelRolePermissionsEdit'; channel: string; role: string; permissions: Override }
  | { type: 'ChannelDelete'; channel: string; name: string }
  | { type: 'MemberEdit'; user: string; before: PartialMember; after: PartialMember }
  | { type: 'MemberKick'; user: string }
  | { type: 'ServerEdit'; before: PartialServer; after: PartialServer }
  | { type: 'RoleEdit'; role: string; before: PartialRole; after: PartialRole }
  | { type: 'RoleCreate'; role: string; name: string }
  | { type: 'RoleDelete'; role: string; name: string }
  | { type: 'RolesReorder'; before: string[]; after: string[] }
  | { type: 'InviteCreate'; invite: string; channel: string }
  | { type: 'InviteDelete'; invite: string; channel: string }
  | { type: 'WebhookCreate'; webhook: string; name: string; channel: string }
  | { type: 'WebhookDelete'; webhook: string; name: string; channel: string }
  | { type: 'EmojiCreate'; emoji: string; name: string }
  | { type: 'EmojiUpdate'; emoji: string; before: PartialEmoji; after: PartialEmoji }
  | { type: 'EmojiDelete'; emoji: string; name: string }
type AuditLogEntry = {
  _id: string
  server: string
  reason?: (string | null) | undefined
  user: string
  target?: (string | null) | undefined
  action: AuditLogEntryAction
}
type AuditLogQueryResponse = { audit_logs: AuditLogEntry[]; users: User[]; members: Member[] }
type InviteResponse =
  | {
      type: 'Server'
      code: string
      server_id: string
      server_name: string
      server_icon?: (File2 | null) | undefined
      server_banner?: (File2 | null) | undefined
      server_flags?: (number | null) | undefined
      channel_id: string
      channel_name: string
      channel_description?: (string | null) | undefined
      user_name: string
      user_avatar?: (File2 | null) | undefined
      member_count: bigint
    }
  | {
      type: 'Group'
      code: string
      channel_id: string
      channel_name: string
      channel_description?: (string | null) | undefined
      user_name: string
      user_avatar?: (File2 | null) | undefined
    }
type InviteJoinResponse =
  | { type: 'Server'; channels: Channel[]; server: Server }
  | { type: 'Group'; channel: Channel; users: User[] }
type EmojiParentInput = { type: 'Server'; id: string } | { type: 'Detached' }
type DataCreateEmojiInput = { name: string; parent: EmojiParentInput; nsfw?: boolean }
type DataEditEmojiInput = { name?: string | null }
type ContentReportReasonInput =
  | 'NoneSpecified'
  | 'Illegal'
  | 'IllegalGoods'
  | 'IllegalExtortion'
  | 'IllegalPornography'
  | 'IllegalHacking'
  | 'ExtremeViolence'
  | 'PromotesHarm'
  | 'UnsolicitedSpam'
  | 'Raid'
  | 'SpamAbuse'
  | 'ScamsFraud'
  | 'Malware'
  | 'Harassment'
type UserReportReasonInput =
  | 'NoneSpecified'
  | 'UnsolicitedSpam'
  | 'SpamAbuse'
  | 'InappropriateProfile'
  | 'Impersonation'
  | 'BanEvasion'
  | 'Underage'
type ReportedContentInput =
  | { type: 'Message'; id: string; report_reason: ContentReportReasonInput }
  | { type: 'Server'; id: string; report_reason: ContentReportReasonInput }
  | { type: 'User'; id: string; report_reason: UserReportReasonInput; message_id?: string | null }
type DataReportContentInput = { content: ReportedContentInput; additional_context?: string }
type DataCreateAccountInput = {
  email: string
  password: string
  invite?: string | null
  captcha?: string | null
}
type DataResendVerificationInput = { email: string; captcha?: string | null }
type DataAccountDeletionInput = { token: string }
type AccountInfo = { _id: string; email: string }
type DataChangePasswordInput = { password: string; current_password: string }
type DataChangeEmailInput = { email: string; current_password: string }
type MFATicket = {
  _id: string
  account_id: string
  token: string
  validated: boolean
  authorised: boolean
  last_totp_code?: (string | null) | undefined
}
type ResponseVerify = null | { ticket: MFATicket }
type DataSendPasswordResetInput = { email: string; captcha?: string | null }
type DataPasswordResetInput = { token: string; password: string; remove_sessions?: boolean }
type MFAResponseInput = { password: string } | { recovery_code: string } | { totp_code: string }
type DataLoginInput =
  | { email: string; password: string; friendly_name?: string | null }
  | { mfa_ticket: string; mfa_response?: MFAResponseInput | null; friendly_name?: string | null }
type WebPushSubscription = { endpoint: string; p256dh: string; auth: string }
type MFAMethod = 'Password' | 'Recovery' | 'Totp'
type ResponseLogin =
  | {
      result: 'Success'
      _id: string
      user_id: string
      token: string
      name: string
      last_seen: ISO8601Timestamp
      origin?: (string | null) | undefined
      subscription?: (WebPushSubscription | null) | undefined
    }
  | { result: 'MFA'; ticket: string; allowed_methods: MFAMethod[] }
  | { result: 'Disabled'; user_id: string }
type SessionInfo = { _id: string; name: string }
type DataEditSessionInput = { friendly_name: string }
type MultiFactorStatus = {
  email_otp?: boolean | undefined
  trusted_handover?: boolean | undefined
  email_mfa?: boolean | undefined
  totp_mfa?: boolean | undefined
  security_key_mfa?: boolean | undefined
  recovery_active?: boolean | undefined
}
type ResponseTotpSecret = { secret: string }
type DataHello = { onboarding: boolean }
type DataOnboardInput = { username: string }
type WebPushSubscriptionInput = { endpoint: string; p256dh: string; auth: string }
type OptionsFetchSettingsInput = { keys: string[] }
type ChannelCompositeKey = { channel: string; user: string }
type ChannelUnread = {
  _id: ChannelCompositeKey
  last_id?: (string | null) | undefined
  mentions?: string[] | undefined
}
type FieldsWebhookInput = 'Avatar'
type DataEditWebhookInput = {
  name?: string | null
  avatar?: string | null
  permissions?: bigint | null
  remove?: FieldsWebhookInput[]
}
type ResponseWebhook = {
  id: string
  name: string
  avatar?: (string | null) | undefined
  channel_id: string
  permissions: bigint
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | { input: {}; output: RevoltConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/@me': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/:target': {
      $get:
        | { input: { param: { target: IdInput } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { target: IdInput } } & { json: DataEditUserInput }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & { json: DataEditUserInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:target/flags': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: FlagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/@me/username': {
      $patch:
        | {
            input: { json: DataChangeUsernameInput }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataChangeUsernameInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:target/default_avatar': {
      $get: { input: { param: { target: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/users/:target/profile': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: UserProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/dms': {
      $get:
        | { input: {}; output: Channel[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/:target/dm': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:target/mutual': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: MutualResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:target/friend': {
      $put:
        | { input: { param: { target: IdInput } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { target: IdInput } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:target/block': {
      $put:
        | { input: { param: { target: IdInput } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { target: IdInput } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/friend': {
      $post:
        | {
            input: { json: DataSendFriendRequestInput }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataSendFriendRequestInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bots/create': {
      $post:
        | {
            input: { json: DataCreateBotInput }
            output: BotWithUserResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DataCreateBotInput }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/bots/:target/invite': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: PublicBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { target: IdInput } } & { query: { permissions?: unknown } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: InviteBotDestinationInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput } } & { query: { permissions?: unknown } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: InviteBotDestinationInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bots/:bot_id': {
      $get:
        | {
            input: { param: { bot_id: IdInput } }
            output: FetchBotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bot_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { bot_id: IdInput } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { bot_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { bot_id: IdInput } } & { json: DataEditBotInput }
            output: BotWithUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bot_id: IdInput } } & { json: DataEditBotInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bots/@me': {
      $get:
        | { input: {}; output: OwnedBotsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/bots/:bot_id/discover': {
      $get:
        | {
            input: { param: { bot_id: IdInput } }
            output: DiscoverRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bot_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: { param: { bot_id: IdInput } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { bot_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { bot_id: IdInput } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { bot_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/ack/:message': {
      $put:
        | {
            input: { param: { target: IdInput; message: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; message: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput } } & { query: { leave_silently?: unknown } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput } } & { query: { leave_silently?: unknown } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditChannelInput }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditChannelInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/members': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/invites': {
      $post:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateInviteInput }
            output: Invite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateInviteInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/messages': {
      $get:
        | {
            input: { param: { target: IdInput } } & {
              query: {
                limit?: unknown
                before?: unknown
                after?: unknown
                sort?: unknown
                nearby?: unknown
                include_users?: unknown
              }
            }
            output: BulkMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              query: {
                limit?: unknown
                before?: unknown
                after?: unknown
                sort?: unknown
                nearby?: unknown
                include_users?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { target: IdInput } } & { header: { 'Idempotency-Key'?: string } } & {
              json: DataMessageSendInput
            }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & { header: { 'Idempotency-Key'?: string } } & {
              json: DataMessageSendInput
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/search': {
      $post:
        | {
            input: { param: { target: IdInput } } & { json: DataMessageSearchInput }
            output: BulkMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & { json: DataMessageSearchInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/messages/:msg/pin': {
      $post:
        | {
            input: { param: { target: IdInput; msg: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; msg: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput; msg: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; msg: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/messages/:msg': {
      $get:
        | {
            input: { param: { target: IdInput; msg: IdInput } }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput; msg: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput; msg: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; msg: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { target: IdInput; msg: IdInput } } & { json: DataEditMessageInput }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput; msg: IdInput } } & { json: DataEditMessageInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/messages/bulk': {
      $delete:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: OptionsBulkDeleteInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: OptionsBulkDeleteInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/create': {
      $post:
        | {
            input: { json: DataCreateGroupInput }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataCreateGroupInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:group_id/recipients/:member_id': {
      $put:
        | {
            input: { param: { group_id: IdInput; member_id: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: IdInput; member_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { group_id: IdInput; member_id: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: IdInput; member_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/join_call': {
      $post:
        | {
            input: { param: { target: IdInput } } & { json: DataJoinCallInput }
            output: CreateVoiceUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & { json: DataJoinCallInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/end_ring/:target_user': {
      $put:
        | {
            input: { param: { target: IdInput; target_user: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; target_user: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/permissions/:role_id': {
      $put:
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataSetRolePermissionsInput }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataSetRolePermissionsInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/permissions/default': {
      $put:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataDefaultChannelPermissionsInput }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataDefaultChannelPermissionsInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/messages/:msg/reactions/:emoji': {
      $put:
        | {
            input: { param: { target: IdInput; msg: IdInput; emoji: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; msg: IdInput; emoji: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput; msg: IdInput; emoji: IdInput } } & {
              query: { user_id?: string | null; remove_all?: unknown }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; msg: IdInput; emoji: IdInput } } & {
              query: { user_id?: string | null; remove_all?: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:target/messages/:msg/reactions': {
      $delete:
        | {
            input: { param: { target: IdInput; msg: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; msg: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/channels/:channel_id/webhooks': {
      $get:
        | {
            input: { param: { channel_id: IdInput } }
            output: Webhook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { channel_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: CreateWebhookBodyInput }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: CreateWebhookBodyInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/create': {
      $post:
        | {
            input: { json: DataCreateServerInput }
            output: CreateServerLegacyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataCreateServerInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target': {
      $get:
        | {
            input: { param: { target: IdInput } } & { query: { include_channels?: unknown } }
            output: FetchServerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & { query: { include_channels?: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput } } & { query: { leave_silently?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput } } & { query: { leave_silently?: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditServerInput }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditServerInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/ack': {
      $put:
        | { input: { param: { target: IdInput } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:server/channels': {
      $post:
        | {
            input: { param: { server: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateServerChannelInput }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { server: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateServerChannelInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/members': {
      $get:
        | {
            input: { param: { target: IdInput } } & { query: { exclude_offline?: unknown } }
            output: AllMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & { query: { exclude_offline?: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:server_id/members/:member_id': {
      $get:
        | {
            input: { param: { server_id: IdInput; member_id: IdInput } } & {
              query: { roles?: unknown }
            }
            output: MemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { server_id: IdInput; member_id: IdInput } } & {
              query: { roles?: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { server_id: IdInput; member_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { server_id: IdInput; member_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { server_id: IdInput; member_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataMemberEditInput }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { server_id: IdInput; member_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataMemberEditInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/members_experimental_query': {
      $get:
        | {
            input: { param: { target: IdInput } } & {
              query: { query: string; experimental_api: string }
            }
            output: MemberQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              query: { query: string; experimental_api: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:server/bans/:target': {
      $put:
        | {
            input: { param: { server: IdInput; target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataBanCreateInput }
            output: ServerBan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { server: IdInput; target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataBanCreateInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { server: IdInput; target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { server: IdInput; target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/bans': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: BanListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/invites': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: Invite[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/roles': {
      $post:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateRoleInput }
            output: NewRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateRoleInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/roles/:role_id': {
      $get:
        | {
            input: { param: { target: IdInput; role_id: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput; role_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditRoleInput }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditRoleInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/permissions/:role_id': {
      $put:
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataSetServerRolePermissionInput }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput; role_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataSetServerRolePermissionInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/permissions/default': {
      $put:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataPermissionsValueInput }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataPermissionsValueInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/emojis': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: Emoji[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/roles/ranks': {
      $patch:
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditRoleRanksInput }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditRoleRanksInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:target/audit_logs': {
      $get:
        | {
            input: { param: { target: IdInput } } & {
              query: {
                user?: unknown
                target?: unknown
                type?: unknown
                before?: unknown
                after?: unknown
                limit?: unknown
              }
            }
            output: AuditLogQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } } & {
              query: {
                user?: unknown
                target?: unknown
                type?: unknown
                before?: unknown
                after?: unknown
                limit?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/:server/discover': {
      $get:
        | {
            input: { param: { server: IdInput } }
            output: DiscoverRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { server: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: { param: { server: IdInput } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { server: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { server: IdInput } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { server: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/invites/:target': {
      $get:
        | {
            input: { param: { target: IdInput } }
            output: InviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { target: IdInput } }
            output: InviteJoinResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { target: IdInput } } & { header: { 'X-Audit-Log-Reason'?: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target: IdInput } } & { header: { 'X-Audit-Log-Reason'?: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/custom/emoji/:emoji_id': {
      $get:
        | {
            input: { param: { emoji_id: IdInput } }
            output: Emoji
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emoji_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { emoji_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateEmojiInput }
            output: Emoji
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emoji_id: string } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataCreateEmojiInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { emoji_id: IdInput } } & { header: { 'X-Audit-Log-Reason'?: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { emoji_id: IdInput } } & { header: { 'X-Audit-Log-Reason'?: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { emoji_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditEmojiInput }
            output: Emoji
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emoji_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            } & { json: DataEditEmojiInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/safety/report': {
      $post:
        | { input: { json: DataReportContentInput }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: DataReportContentInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/account/create': {
      $post:
        | { input: { json: DataCreateAccountInput }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: DataCreateAccountInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/account/reverify': {
      $post:
        | {
            input: { json: DataResendVerificationInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DataResendVerificationInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/account/delete': {
      $put:
        | {
            input: { json: DataAccountDeletionInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DataAccountDeletionInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/account/': {
      $get:
        | { input: {}; output: AccountInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/account/disable': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/account/change/password': {
      $patch:
        | {
            input: { json: DataChangePasswordInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DataChangePasswordInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/account/change/email': {
      $patch:
        | { input: { json: DataChangeEmailInput }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: DataChangeEmailInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/account/verify/:code': {
      $post:
        | {
            input: { param: { code: string } }
            output: ResponseVerify
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { code: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/account/reset_password': {
      $post:
        | {
            input: { json: DataSendPasswordResetInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DataSendPasswordResetInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | { input: { json: DataPasswordResetInput }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: DataPasswordResetInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/session/login': {
      $post:
        | {
            input: { json: DataLoginInput }
            output: ResponseLogin
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DataLoginInput }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/session/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/session/all': {
      $get:
        | { input: {}; output: SessionInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | {
            input: { query: { revoke_self?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { revoke_self?: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/session/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: DataEditSessionInput }
            output: SessionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DataEditSessionInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/mfa/ticket': {
      $put:
        | {
            input: { json: MFAResponseInput }
            output: MFATicket
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MFAResponseInput }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/mfa/': {
      $get:
        | { input: {}; output: MultiFactorStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/mfa/recovery': {
      $post:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $patch:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/mfa/methods': {
      $get: { input: {}; output: MFAMethod[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/mfa/totp': {
      $put:
        | { input: { json: MFAResponseInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: MFAResponseInput }; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: {}; output: ResponseTotpSecret; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/onboard/hello': { $get: { input: {}; output: DataHello; outputFormat: 'json'; status: 200 } }
  } & {
    '/onboard/complete': {
      $post:
        | { input: { json: DataOnboardInput }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: DataOnboardInput }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/policy/acknowledge': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/push/subscribe': {
      $post:
        | {
            input: { json: WebPushSubscriptionInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: WebPushSubscriptionInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/push/unsubscribe': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sync/settings/fetch': {
      $post:
        | {
            input: { json: OptionsFetchSettingsInput }
            output: { [key: string]: [bigint, string] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OptionsFetchSettingsInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sync/settings/set': {
      $post:
        | {
            input: { query: { timestamp?: unknown } } & { json: { [key: string]: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { timestamp?: unknown } } & { json: { [key: string]: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sync/unreads': {
      $get:
        | { input: {}; output: ChannelUnread[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/webhooks/:webhook_id/:token/:message_id': {
      $delete:
        | {
            input: { param: { webhook_id: IdInput; token: string; message_id: IdInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: IdInput; token: string; message_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { webhook_id: IdInput; token: string; message_id: IdInput } } & {
              json: DataEditMessageInput
            }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput; token: string; message_id: IdInput } } & {
              json: DataEditMessageInput
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id/:token': {
      $get:
        | {
            input: { param: { webhook_id: IdInput; token: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput; token: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { webhook_id: IdInput; token: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: DataMessageSendInput }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput; token: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: DataMessageSendInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { webhook_id: IdInput; token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: IdInput; token: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { webhook_id: IdInput; token: string } } & {
              json: DataEditWebhookInput
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput; token: string } } & {
              json: DataEditWebhookInput
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: IdInput } }
            output: ResponseWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { webhook_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: IdInput } } & {
              header: { 'X-Audit-Log-Reason'?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { webhook_id: IdInput } } & { json: DataEditWebhookInput }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput } } & { json: DataEditWebhookInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id/:token/github': {
      $post:
        | {
            input: { param: { webhook_id: IdInput; token: string } } & {
              header: { 'X-Github-Event': any }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { webhook_id: IdInput; token: string } } & {
              header: { 'X-Github-Event': any }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
