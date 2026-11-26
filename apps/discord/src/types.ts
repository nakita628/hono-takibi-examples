type SnowflakeType = string
type ApplicationTypes = 4
type Int53Type = bigint
type UserAvatarDecorationResponse = { asset: string; sku_id: null | SnowflakeType }
type NameplatePalette =
  | 'crimson'
  | 'berry'
  | 'sky'
  | 'teal'
  | 'forest'
  | 'bubble_gum'
  | 'violet'
  | 'cobalt'
  | 'clover'
  | 'lemon'
  | 'white'
  | 'black'
type UserNameplateResponse = {
  sku_id: null | SnowflakeType
  asset: string
  label: string
  palette: NameplatePalette
}
type UserCollectiblesResponse = { nameplate: null | UserNameplateResponse }
type UserPrimaryGuildResponse = {
  identity_guild_id: null | SnowflakeType
  identity_enabled: boolean | null
  tag: string | null
  badge: string | null
}
type UserResponse = {
  id: SnowflakeType
  username: string
  avatar: string | null
  discriminator: string
  public_flags: number
  flags: Int53Type
  bot?: boolean | undefined
  system?: boolean | undefined
  banner?: (string | null) | undefined
  accent_color?: (number | null) | undefined
  global_name: string | null
  avatar_decoration_data?: (null | UserAvatarDecorationResponse) | undefined
  collectibles?: (null | UserCollectiblesResponse) | undefined
  primary_guild: null | UserPrimaryGuildResponse
}
type OAuth2Scopes =
  | 'identify'
  | 'email'
  | 'connections'
  | 'guilds'
  | 'guilds.join'
  | 'guilds.members.read'
  | 'gdm.join'
  | 'bot'
  | 'rpc'
  | 'rpc.notifications.read'
  | 'rpc.voice.read'
  | 'rpc.voice.write'
  | 'rpc.video.read'
  | 'rpc.video.write'
  | 'rpc.screenshare.read'
  | 'rpc.screenshare.write'
  | 'rpc.activities.write'
  | 'webhook.incoming'
  | 'messages.read'
  | 'applications.builds.upload'
  | 'applications.builds.read'
  | 'applications.commands'
  | 'applications.commands.permissions.update'
  | 'applications.commands.update'
  | 'applications.store.update'
  | 'applications.entitlements'
  | 'activities.read'
  | 'activities.write'
  | 'activities.invites.write'
  | 'relationships.read'
  | 'voice'
  | 'dm_channels.read'
  | 'role_connections.write'
  | 'openid'
type ApplicationOAuth2InstallParamsResponse = { scopes: OAuth2Scopes[]; permissions: string }
type ApplicationIntegrationTypeConfigurationResponse = {
  oauth2_install_params?: ApplicationOAuth2InstallParamsResponse | undefined
}
type ApplicationEventWebhooksStatus = 1 | 2 | 3
type ActionTypes =
  | 'TYPING_START'
  | 'INVITE_CREATE'
  | 'INVITE_DELETE'
  | 'WEBHOOKS_UPDATE'
  | 'CHANNEL_CREATE'
  | 'VOICE_CHANNEL_STATUS_UPDATE'
  | 'CHANNEL_UPDATE'
  | 'CHANNEL_DELETE'
  | 'CHANNEL_PINS_UPDATE'
  | 'THREAD_CREATE'
  | 'THREAD_UPDATE'
  | 'THREAD_DELETE'
  | 'THREAD_LIST_SYNC'
  | 'THREAD_MEMBER_UPDATE'
  | 'THREAD_MEMBERS_UPDATE'
  | 'GUILD_CREATE'
  | 'GUILD_UPDATE'
  | 'GUILD_DELETE'
  | 'GUILD_EMOJIS_UPDATE'
  | 'GUILD_STICKERS_UPDATE'
  | 'GUILD_INTEGRATIONS_UPDATE'
  | 'GUILD_MEMBER_ADD'
  | 'GUILD_MEMBER_UPDATE'
  | 'GUILD_MEMBER_REMOVE'
  | 'GUILD_BAN_ADD'
  | 'GUILD_BAN_REMOVE'
  | 'GUILD_ROLE_CREATE'
  | 'GUILD_ROLE_UPDATE'
  | 'GUILD_ROLE_DELETE'
  | 'GUILD_MEMBERS_CHUNK'
  | 'MESSAGE_CREATE'
  | 'MESSAGE_UPDATE'
  | 'MESSAGE_DELETE'
  | 'MESSAGE_DELETE_BULK'
  | 'MESSAGE_REACTION_ADD'
  | 'MESSAGE_REACTION_REMOVE'
  | 'MESSAGE_REACTION_REMOVE_ALL'
  | 'MESSAGE_REACTION_REMOVE_EMOJI'
  | 'USER_UPDATE'
  | 'ENTITLEMENT_CREATE'
  | 'ENTITLEMENT_UPDATE'
  | 'ENTITLEMENT_DELETE'
  | 'READY'
  | 'RESUMED'
  | 'PRESENCE_UPDATE'
  | 'VOICE_STATE_UPDATE'
  | 'VOICE_SERVER_UPDATE'
  | 'LOBBY_MESSAGE_CREATE'
  | 'LOBBY_MESSAGE_UPDATE'
  | 'LOBBY_MESSAGE_DELETE'
  | 'GAME_DIRECT_MESSAGE_CREATE'
  | 'GAME_DIRECT_MESSAGE_DELETE'
  | 'GAME_DIRECT_MESSAGE_UPDATE'
  | 'INTERACTION_CREATE'
  | 'INTEGRATION_CREATE'
  | 'INTEGRATION_UPDATE'
  | 'INTEGRATION_DELETE'
  | 'APPLICATION_COMMAND_PERMISSIONS_UPDATE'
  | 'APPLICATION_AUTHORIZED'
  | 'APPLICATION_DEAUTHORIZED'
  | 'STAGE_INSTANCE_CREATE'
  | 'STAGE_INSTANCE_UPDATE'
  | 'STAGE_INSTANCE_DELETE'
  | 'GUILD_AUDIT_LOG_ENTRY_CREATE'
  | 'GUILD_SCHEDULED_EVENT_CREATE'
  | 'GUILD_SCHEDULED_EVENT_UPDATE'
  | 'GUILD_SCHEDULED_EVENT_DELETE'
  | 'GUILD_SCHEDULED_EVENT_USER_ADD'
  | 'GUILD_SCHEDULED_EVENT_USER_REMOVE'
  | 'AUTO_MODERATION_RULE_CREATE'
  | 'AUTO_MODERATION_RULE_UPDATE'
  | 'AUTO_MODERATION_RULE_DELETE'
  | 'AUTO_MODERATION_ACTION_EXECUTION'
  | 'GUILD_SOUNDBOARD_SOUNDS_UPDATE'
  | 'GUILD_SOUNDBOARD_SOUND_CREATE'
  | 'GUILD_SOUNDBOARD_SOUND_UPDATE'
  | 'GUILD_SOUNDBOARD_SOUND_DELETE'
  | 'QUEST_USER_ENROLLMENT'
  | 'RATE_LIMITED'
type ApplicationExplicitContentFilterTypes = 0 | 1
type TeamMembershipStates = 1 | 2
type TeamMemberRoles = 'admin' | 'developer' | 'read_only'
type TeamMemberResponse = {
  user: UserResponse
  team_id: SnowflakeType
  membership_state: TeamMembershipStates
  role: TeamMemberRoles
  permissions: string[]
}
type TeamResponse = {
  id: SnowflakeType
  icon: string | null
  name: string
  owner_user_id: SnowflakeType
  members: TeamMemberResponse[]
}
type PrivateApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: null | ApplicationTypes
  cover_image?: string | undefined
  primary_sku_id?: SnowflakeType | undefined
  flags: number
  flags_new: string
  bot?: UserResponse | undefined
  slug?: string | undefined
  conjure_project_id?: SnowflakeType | undefined
  vibegrations_project_id?: SnowflakeType | undefined
  guild_id?: SnowflakeType | undefined
  rpc_origins?: string[] | undefined
  bot_public?: boolean | undefined
  bot_require_code_grant?: boolean | undefined
  terms_of_service_url?: string | undefined
  privacy_policy_url?: string | undefined
  custom_install_url?: string | undefined
  install_params?: ApplicationOAuth2InstallParamsResponse | undefined
  integration_types_config?:
    | { [key: string]: ApplicationIntegrationTypeConfigurationResponse }
    | undefined
  verify_key: string
  max_participants?: (number | null) | undefined
  tags?: string[] | undefined
  redirect_uris: string[]
  interactions_endpoint_url: string | null
  role_connections_verification_url: string | null
  owner: UserResponse
  approximate_guild_count: number
  approximate_user_install_count: number
  approximate_user_authorization_count: number
  event_webhooks_url?: (string | null) | undefined
  event_webhooks_status?: ApplicationEventWebhooksStatus | undefined
  event_webhooks_types?: ActionTypes[] | undefined
  explicit_content_filter: ApplicationExplicitContentFilterTypes
  team: null | TeamResponse
  eligible_oauth2_scopes: OAuth2Scopes[]
}
type Error = { code: number; message: string }
type RatelimitedResponse = Error & { retry_after: number; global: boolean }
type InnerErrors = { _errors: Error[] }
type ErrorDetails = { [key: string]: ErrorDetails } | InnerErrors
type ErrorResponse = Error & { errors?: ErrorDetails | undefined }
type SnowflakeTypeInput = string
type ApplicationExplicitContentFilterTypesInput = 0 | 1
type ApplicationTypesInput = 4
type OAuth2ScopesInput =
  | 'identify'
  | 'email'
  | 'connections'
  | 'guilds'
  | 'guilds.join'
  | 'guilds.members.read'
  | 'gdm.join'
  | 'bot'
  | 'rpc'
  | 'rpc.notifications.read'
  | 'rpc.voice.read'
  | 'rpc.voice.write'
  | 'rpc.video.read'
  | 'rpc.video.write'
  | 'rpc.screenshare.read'
  | 'rpc.screenshare.write'
  | 'rpc.activities.write'
  | 'webhook.incoming'
  | 'messages.read'
  | 'applications.builds.upload'
  | 'applications.builds.read'
  | 'applications.commands'
  | 'applications.commands.permissions.update'
  | 'applications.commands.update'
  | 'applications.store.update'
  | 'applications.entitlements'
  | 'activities.read'
  | 'activities.write'
  | 'activities.invites.write'
  | 'relationships.read'
  | 'voice'
  | 'dm_channels.read'
  | 'role_connections.write'
  | 'openid'
type ApplicationOAuth2InstallParamsInput = {
  scopes?: OAuth2ScopesInput[] | null
  permissions?: number | null
}
type ApplicationIntegrationTypeConfigurationInput = {
  oauth2_install_params?: null | ApplicationOAuth2InstallParamsInput
}
type ApplicationEventWebhooksStatusInput = 1 | 2 | 3
type ActionTypesInput =
  | 'TYPING_START'
  | 'INVITE_CREATE'
  | 'INVITE_DELETE'
  | 'WEBHOOKS_UPDATE'
  | 'CHANNEL_CREATE'
  | 'VOICE_CHANNEL_STATUS_UPDATE'
  | 'CHANNEL_UPDATE'
  | 'CHANNEL_DELETE'
  | 'CHANNEL_PINS_UPDATE'
  | 'THREAD_CREATE'
  | 'THREAD_UPDATE'
  | 'THREAD_DELETE'
  | 'THREAD_LIST_SYNC'
  | 'THREAD_MEMBER_UPDATE'
  | 'THREAD_MEMBERS_UPDATE'
  | 'GUILD_CREATE'
  | 'GUILD_UPDATE'
  | 'GUILD_DELETE'
  | 'GUILD_EMOJIS_UPDATE'
  | 'GUILD_STICKERS_UPDATE'
  | 'GUILD_INTEGRATIONS_UPDATE'
  | 'GUILD_MEMBER_ADD'
  | 'GUILD_MEMBER_UPDATE'
  | 'GUILD_MEMBER_REMOVE'
  | 'GUILD_BAN_ADD'
  | 'GUILD_BAN_REMOVE'
  | 'GUILD_ROLE_CREATE'
  | 'GUILD_ROLE_UPDATE'
  | 'GUILD_ROLE_DELETE'
  | 'GUILD_MEMBERS_CHUNK'
  | 'MESSAGE_CREATE'
  | 'MESSAGE_UPDATE'
  | 'MESSAGE_DELETE'
  | 'MESSAGE_DELETE_BULK'
  | 'MESSAGE_REACTION_ADD'
  | 'MESSAGE_REACTION_REMOVE'
  | 'MESSAGE_REACTION_REMOVE_ALL'
  | 'MESSAGE_REACTION_REMOVE_EMOJI'
  | 'USER_UPDATE'
  | 'ENTITLEMENT_CREATE'
  | 'ENTITLEMENT_UPDATE'
  | 'ENTITLEMENT_DELETE'
  | 'READY'
  | 'RESUMED'
  | 'PRESENCE_UPDATE'
  | 'VOICE_STATE_UPDATE'
  | 'VOICE_SERVER_UPDATE'
  | 'LOBBY_MESSAGE_CREATE'
  | 'LOBBY_MESSAGE_UPDATE'
  | 'LOBBY_MESSAGE_DELETE'
  | 'GAME_DIRECT_MESSAGE_CREATE'
  | 'GAME_DIRECT_MESSAGE_DELETE'
  | 'GAME_DIRECT_MESSAGE_UPDATE'
  | 'INTERACTION_CREATE'
  | 'INTEGRATION_CREATE'
  | 'INTEGRATION_UPDATE'
  | 'INTEGRATION_DELETE'
  | 'APPLICATION_COMMAND_PERMISSIONS_UPDATE'
  | 'APPLICATION_AUTHORIZED'
  | 'APPLICATION_DEAUTHORIZED'
  | 'STAGE_INSTANCE_CREATE'
  | 'STAGE_INSTANCE_UPDATE'
  | 'STAGE_INSTANCE_DELETE'
  | 'GUILD_AUDIT_LOG_ENTRY_CREATE'
  | 'GUILD_SCHEDULED_EVENT_CREATE'
  | 'GUILD_SCHEDULED_EVENT_UPDATE'
  | 'GUILD_SCHEDULED_EVENT_DELETE'
  | 'GUILD_SCHEDULED_EVENT_USER_ADD'
  | 'GUILD_SCHEDULED_EVENT_USER_REMOVE'
  | 'AUTO_MODERATION_RULE_CREATE'
  | 'AUTO_MODERATION_RULE_UPDATE'
  | 'AUTO_MODERATION_RULE_DELETE'
  | 'AUTO_MODERATION_ACTION_EXECUTION'
  | 'GUILD_SOUNDBOARD_SOUNDS_UPDATE'
  | 'GUILD_SOUNDBOARD_SOUND_CREATE'
  | 'GUILD_SOUNDBOARD_SOUND_UPDATE'
  | 'GUILD_SOUNDBOARD_SOUND_DELETE'
  | 'QUEST_USER_ENROLLMENT'
  | 'RATE_LIMITED'
type ApplicationUpdateFormPartialInput = {
  description?: { default: string; localizations?: { [key: string]: string } | null } | null
  icon?: string | null
  cover_image?: string | null
  team_id?: null | SnowflakeTypeInput
  flags?: number | null
  interactions_endpoint_url?: string | null
  explicit_content_filter?: null | ApplicationExplicitContentFilterTypesInput
  max_participants?: number | null
  type?: null | ApplicationTypesInput
  tags?: string[] | null
  custom_install_url?: string | null
  install_params?: null | ApplicationOAuth2InstallParamsInput
  role_connections_verification_url?: string | null
  integration_types_config?: {
    [key: string]: null | ApplicationIntegrationTypeConfigurationInput
  } | null
  event_webhooks_status?: null | ApplicationEventWebhooksStatusInput
  event_webhooks_url?: string | null
  event_webhooks_types?: ActionTypesInput[] | null
}
type EmbeddedActivityLocationKind = 'gc' | 'pc' | 'party'
type GuildChannelLocation = {
  id: string
  kind: EmbeddedActivityLocationKind
  channel_id: SnowflakeType
  guild_id: SnowflakeType
}
type PrivateChannelLocation = {
  id: string
  kind: EmbeddedActivityLocationKind
  channel_id: SnowflakeType
}
type EmbeddedActivityInstance = {
  application_id: SnowflakeType
  instance_id: string
  launch_id: string
  location: GuildChannelLocation | PrivateChannelLocation
  users: SnowflakeType[]
}
type ApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: null | ApplicationTypes
  cover_image?: string | undefined
  primary_sku_id?: SnowflakeType | undefined
  flags: number
  flags_new: string
  bot?: UserResponse | undefined
  slug?: string | undefined
  conjure_project_id?: SnowflakeType | undefined
  vibegrations_project_id?: SnowflakeType | undefined
  guild_id?: SnowflakeType | undefined
  rpc_origins?: string[] | undefined
  bot_public?: boolean | undefined
  bot_require_code_grant?: boolean | undefined
  terms_of_service_url?: string | undefined
  privacy_policy_url?: string | undefined
  custom_install_url?: string | undefined
  install_params?: ApplicationOAuth2InstallParamsResponse | undefined
  integration_types_config?:
    | { [key: string]: ApplicationIntegrationTypeConfigurationResponse }
    | undefined
  verify_key: string
  max_participants?: (number | null) | undefined
  tags?: string[] | undefined
}
type AttachmentResponse = {
  id: SnowflakeType
  filename: string
  size: number
  url: string
  proxy_url: string
  width?: number | undefined
  height?: number | undefined
  duration_secs?: number | undefined
  waveform?: string | undefined
  description?: string | undefined
  content_type?: string | undefined
  ephemeral?: boolean | undefined
  flags?: number | undefined
  placeholder?: string | undefined
  placeholder_version?: number | undefined
  title?: (string | null) | undefined
  application?: ApplicationResponse | undefined
  clip_created_at?: string | undefined
  clip_participants?: UserResponse[] | undefined
}
type ActivitiesAttachmentResponse = { attachment: AttachmentResponse }
type ApplicationCommandType = 1 | 2 | 3 | 4
type InteractionContextType = 0 | 1 | 2
type ApplicationIntegrationType = 0 | 1
type ApplicationCommandOptionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
type ApplicationCommandAttachmentOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  file_types?: string[] | undefined
}
type ApplicationCommandBooleanOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ChannelTypes = 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15
type ApplicationCommandChannelOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  channel_types?: ChannelTypes[] | undefined
}
type ApplicationCommandOptionIntegerChoiceResponse = {
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  value: Int53Type
}
type ApplicationCommandIntegerOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  autocomplete?: boolean | undefined
  choices?: ApplicationCommandOptionIntegerChoiceResponse[] | undefined
  min_value?: Int53Type | undefined
  max_value?: Int53Type | undefined
}
type ApplicationCommandMentionableOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ApplicationCommandOptionNumberChoiceResponse = {
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  value: number
}
type ApplicationCommandNumberOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  autocomplete?: boolean | undefined
  choices?: ApplicationCommandOptionNumberChoiceResponse[] | undefined
  min_value?: number | undefined
  max_value?: number | undefined
}
type ApplicationCommandRoleOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ApplicationCommandOptionStringChoiceResponse = {
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  value: string
}
type ApplicationCommandStringOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  autocomplete?: boolean | undefined
  choices?: ApplicationCommandOptionStringChoiceResponse[] | undefined
  min_length?: number | undefined
  max_length?: number | undefined
}
type ApplicationCommandUserOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ApplicationCommandSubcommandOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  options?:
    | (
        | ApplicationCommandAttachmentOptionResponse
        | ApplicationCommandBooleanOptionResponse
        | ApplicationCommandChannelOptionResponse
        | ApplicationCommandIntegerOptionResponse
        | ApplicationCommandMentionableOptionResponse
        | ApplicationCommandNumberOptionResponse
        | ApplicationCommandRoleOptionResponse
        | ApplicationCommandStringOptionResponse
        | ApplicationCommandUserOptionResponse
      )[]
    | undefined
}
type ApplicationCommandSubcommandGroupOptionResponse = {
  type: ApplicationCommandOptionType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  required?: boolean | undefined
  options?: ApplicationCommandSubcommandOptionResponse[] | undefined
}
type ApplicationCommandHandler = 1 | 2
type ApplicationCommandResponse = {
  id: SnowflakeType
  application_id: SnowflakeType
  version: SnowflakeType
  default_member_permissions: string | null
  type: ApplicationCommandType
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [key: string]: string } | null) | undefined
  guild_id?: SnowflakeType | undefined
  dm_permission?: boolean | undefined
  contexts?: (InteractionContextType[] | null) | undefined
  integration_types?: ApplicationIntegrationType[] | undefined
  options?:
    | (
        | ApplicationCommandAttachmentOptionResponse
        | ApplicationCommandBooleanOptionResponse
        | ApplicationCommandChannelOptionResponse
        | ApplicationCommandIntegerOptionResponse
        | ApplicationCommandMentionableOptionResponse
        | ApplicationCommandNumberOptionResponse
        | ApplicationCommandRoleOptionResponse
        | ApplicationCommandStringOptionResponse
        | ApplicationCommandSubcommandGroupOptionResponse
        | ApplicationCommandSubcommandOptionResponse
        | ApplicationCommandUserOptionResponse
      )[]
    | undefined
  nsfw?: boolean | undefined
  handler?: ApplicationCommandHandler | undefined
}
type ApplicationCommandOptionTypeInput = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
type ApplicationCommandAttachmentOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  file_types?: string[] | null
}
type ApplicationCommandBooleanOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
}
type ChannelTypesInput = 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15
type ApplicationCommandChannelOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  channel_types?: ChannelTypesInput[] | null
}
type Int53TypeInput = bigint
type ApplicationCommandOptionIntegerChoiceInput = {
  name: string
  name_localizations?: { [key: string]: string } | null
  value: Int53TypeInput
}
type ApplicationCommandIntegerOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  autocomplete?: boolean | null
  choices?: ApplicationCommandOptionIntegerChoiceInput[] | null
  min_value?: null | Int53TypeInput
  max_value?: null | Int53TypeInput
}
type ApplicationCommandMentionableOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
}
type ApplicationCommandOptionNumberChoiceInput = {
  name: string
  name_localizations?: { [key: string]: string } | null
  value: number
}
type ApplicationCommandNumberOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  autocomplete?: boolean | null
  choices?: ApplicationCommandOptionNumberChoiceInput[] | null
  min_value?: number | null
  max_value?: number | null
}
type ApplicationCommandRoleOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
}
type ApplicationCommandOptionStringChoiceInput = {
  name: string
  name_localizations?: { [key: string]: string } | null
  value: string
}
type ApplicationCommandStringOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  autocomplete?: boolean | null
  min_length?: number | null
  max_length?: number | null
  choices?: ApplicationCommandOptionStringChoiceInput[] | null
}
type ApplicationCommandUserOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
}
type ApplicationCommandSubcommandOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  options?:
    | (
        | ApplicationCommandAttachmentOptionInput
        | ApplicationCommandBooleanOptionInput
        | ApplicationCommandChannelOptionInput
        | ApplicationCommandIntegerOptionInput
        | ApplicationCommandMentionableOptionInput
        | ApplicationCommandNumberOptionInput
        | ApplicationCommandRoleOptionInput
        | ApplicationCommandStringOptionInput
        | ApplicationCommandUserOptionInput
      )[]
    | null
}
type ApplicationCommandSubcommandGroupOptionInput = {
  type: ApplicationCommandOptionTypeInput
  name: string
  name_localizations?: { [key: string]: string } | null
  description: string
  description_localizations?: { [key: string]: string } | null
  required?: boolean | null
  options?: ApplicationCommandSubcommandOptionInput[] | null
}
type InteractionContextTypeInput = 0 | 1 | 2
type ApplicationIntegrationTypeInput = 0 | 1
type ApplicationCommandHandlerInput = 1 | 2
type ApplicationCommandTypeInput = 1 | 2 | 3 | 4
type ApplicationCommandUpdateRequestInput = {
  name: string
  name_localizations?: { [key: string]: string } | null
  description?: string | null
  description_localizations?: { [key: string]: string } | null
  options?:
    | (
        | ApplicationCommandAttachmentOptionInput
        | ApplicationCommandBooleanOptionInput
        | ApplicationCommandChannelOptionInput
        | ApplicationCommandIntegerOptionInput
        | ApplicationCommandMentionableOptionInput
        | ApplicationCommandNumberOptionInput
        | ApplicationCommandRoleOptionInput
        | ApplicationCommandStringOptionInput
        | ApplicationCommandSubcommandGroupOptionInput
        | ApplicationCommandSubcommandOptionInput
        | ApplicationCommandUserOptionInput
      )[]
    | null
  default_member_permissions?: number | null
  dm_permission?: boolean | null
  contexts?: InteractionContextTypeInput[] | null
  integration_types?: ApplicationIntegrationTypeInput[] | null
  handler?: null | ApplicationCommandHandlerInput
  type?: null | ApplicationCommandTypeInput
  id?: null | SnowflakeTypeInput
}
type ApplicationCommandCreateRequestInput = {
  name: string
  name_localizations?: { [key: string]: string } | null
  description?: string | null
  description_localizations?: { [key: string]: string } | null
  options?:
    | (
        | ApplicationCommandAttachmentOptionInput
        | ApplicationCommandBooleanOptionInput
        | ApplicationCommandChannelOptionInput
        | ApplicationCommandIntegerOptionInput
        | ApplicationCommandMentionableOptionInput
        | ApplicationCommandNumberOptionInput
        | ApplicationCommandRoleOptionInput
        | ApplicationCommandStringOptionInput
        | ApplicationCommandSubcommandGroupOptionInput
        | ApplicationCommandSubcommandOptionInput
        | ApplicationCommandUserOptionInput
      )[]
    | null
  default_member_permissions?: number | null
  dm_permission?: boolean | null
  contexts?: InteractionContextTypeInput[] | null
  integration_types?: ApplicationIntegrationTypeInput[] | null
  handler?: null | ApplicationCommandHandlerInput
  type?: null | ApplicationCommandTypeInput
}
type ApplicationCommandPatchRequestPartialInput = {
  name?: string
  name_localizations?: { [key: string]: string } | null
  description?: string | null
  description_localizations?: { [key: string]: string } | null
  options?:
    | (
        | ApplicationCommandAttachmentOptionInput
        | ApplicationCommandBooleanOptionInput
        | ApplicationCommandChannelOptionInput
        | ApplicationCommandIntegerOptionInput
        | ApplicationCommandMentionableOptionInput
        | ApplicationCommandNumberOptionInput
        | ApplicationCommandRoleOptionInput
        | ApplicationCommandStringOptionInput
        | ApplicationCommandSubcommandGroupOptionInput
        | ApplicationCommandSubcommandOptionInput
        | ApplicationCommandUserOptionInput
      )[]
    | null
  default_member_permissions?: number | null
  dm_permission?: boolean | null
  contexts?: InteractionContextTypeInput[] | null
  integration_types?: ApplicationIntegrationTypeInput[] | null
  handler?: null | ApplicationCommandHandlerInput
}
type EmojiResponse = {
  id: SnowflakeType
  name: string
  user?: UserResponse | undefined
  roles: SnowflakeType[]
  require_colons: boolean
  managed: boolean
  animated: boolean
  available: boolean
}
type ListApplicationEmojisResponse = { items: EmojiResponse[] }
type EntitlementTypes = 8 | 10
type EntitlementTenantFulfillmentStatusResponse = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type EntitlementResponse = {
  id: SnowflakeType
  sku_id: SnowflakeType
  application_id: SnowflakeType
  user_id: SnowflakeType
  guild_id?: (null | SnowflakeType) | undefined
  deleted: boolean
  starts_at: string | null
  ends_at: string | null
  type: EntitlementTypes
  fulfilled_at?: (string | null) | undefined
  fulfillment_status?: (null | EntitlementTenantFulfillmentStatusResponse) | undefined
  consumed?: boolean | undefined
  gifter_user_id?: (null | SnowflakeType) | undefined
  parent_id?: (null | SnowflakeType) | undefined
}
type EntitlementOwnerTypesInput = 1 | 2
type CreateEntitlementRequestDataInput = {
  sku_id: SnowflakeTypeInput
  owner_id: SnowflakeTypeInput
  owner_type: EntitlementOwnerTypesInput
}
type ApplicationCommandPermissionType = 1 | 2 | 3
type CommandPermissionResponse = {
  id: SnowflakeType
  type: ApplicationCommandPermissionType
  permission: boolean
}
type CommandPermissionsResponse = {
  id: SnowflakeType
  application_id: SnowflakeType
  guild_id: SnowflakeType
  permissions: CommandPermissionResponse[]
}
type ApplicationCommandPermissionTypeInput = 1 | 2 | 3
type ApplicationCommandPermissionInput = {
  id: SnowflakeTypeInput
  type: ApplicationCommandPermissionTypeInput
  permission: boolean
}
type MetadataItemTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type ApplicationRoleConnectionsMetadataItemResponse = {
  type: MetadataItemTypes
  key: string
  name: string
  name_localizations?: ({ [key: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [key: string]: string } | null) | undefined
}
type MetadataItemTypesInput = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type ApplicationRoleConnectionsMetadataItemRequestInput = {
  type: MetadataItemTypesInput
  key: string
  name: string
  name_localizations?: { [key: string]: string | null } | null
  description: string
  description_localizations?: { [key: string]: string | null } | null
}
type VideoQualityModes = 1 | 2
type ThreadAutoArchiveDuration = 60 | 1440 | 4320 | 10080
type ChannelPermissionOverwrites = 0 | 1
type ChannelPermissionOverwriteResponse = {
  id: SnowflakeType
  type: ChannelPermissionOverwrites
  allow: string
  deny: string
}
type ForumTagResponse = {
  id: SnowflakeType
  name: string
  moderated: boolean
  emoji_id: null | SnowflakeType
  emoji_name: string | null
}
type DefaultReactionEmojiResponse = { emoji_id: null | SnowflakeType; emoji_name: string | null }
type ThreadSortOrder = 0 | 1
type ForumLayout = 0 | 1 | 2
type ThreadSearchTagSetting = 'match_all' | 'match_some'
type GuildChannelResponse = {
  id: SnowflakeType
  type: ChannelTypes
  last_message_id?: (null | SnowflakeType) | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  guild_id: SnowflakeType
  name: string
  parent_id?: (null | SnowflakeType) | undefined
  rate_limit_per_user?: number | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rtc_region?: (string | null) | undefined
  video_quality_mode?: VideoQualityModes | undefined
  permissions?: string | undefined
  topic?: (string | null) | undefined
  default_auto_archive_duration?: ThreadAutoArchiveDuration | undefined
  default_thread_rate_limit_per_user?: number | undefined
  position: number
  permission_overwrites?: ChannelPermissionOverwriteResponse[] | undefined
  nsfw?: boolean | undefined
  available_tags?: ForumTagResponse[] | undefined
  default_reaction_emoji?: (null | DefaultReactionEmojiResponse) | undefined
  default_sort_order?: (null | ThreadSortOrder) | undefined
  default_forum_layout?: ForumLayout | undefined
  default_tag_setting?: (null | ThreadSearchTagSetting) | undefined
}
type PrivateChannelResponse = {
  id: SnowflakeType
  type: ChannelTypes
  last_message_id?: (null | SnowflakeType) | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  recipients: UserResponse[]
}
type PrivateGroupChannelResponse = {
  id: SnowflakeType
  type: ChannelTypes
  last_message_id?: (null | SnowflakeType) | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  recipients: UserResponse[]
  name: string | null
  icon: string | null
  owner_id: SnowflakeType
  managed?: boolean | undefined
  application_id?: SnowflakeType | undefined
}
type ThreadMetadataResponse = {
  archived: boolean
  archive_timestamp: string | null
  auto_archive_duration: ThreadAutoArchiveDuration
  locked: boolean
  create_timestamp?: string | undefined
  invitable?: boolean | undefined
}
type GuildMemberResponse = {
  avatar: string | null
  avatar_decoration_data?: (null | UserAvatarDecorationResponse) | undefined
  banner: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: SnowflakeType[]
  collectibles?: (null | UserCollectiblesResponse) | undefined
  user: UserResponse
  mute: boolean
  deaf: boolean
}
type ThreadMemberResponse = {
  id: SnowflakeType
  user_id: SnowflakeType
  join_timestamp: string
  flags: number
  member?: GuildMemberResponse | undefined
}
type ThreadResponse = {
  id: SnowflakeType
  type: ChannelTypes
  last_message_id?: (null | SnowflakeType) | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  guild_id: SnowflakeType
  name: string
  parent_id?: (null | SnowflakeType) | undefined
  rate_limit_per_user?: number | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rtc_region?: (string | null) | undefined
  video_quality_mode?: VideoQualityModes | undefined
  permissions?: string | undefined
  owner_id: SnowflakeType
  thread_metadata: ThreadMetadataResponse
  message_count: number
  member_count: number
  total_message_sent: number
  applied_tags?: SnowflakeType[] | undefined
  member?: ThreadMemberResponse | undefined
}
type UpdateDMRequestPartialInput = { name?: string | null }
type UpdateGroupDMRequestPartialInput = { name?: string | null; icon?: string | null }
type ChannelPermissionOverwritesInput = 0 | 1
type ChannelPermissionOverwriteRequestInput = {
  id: SnowflakeTypeInput
  type?: null | ChannelPermissionOverwritesInput
  allow?: number | null
  deny?: number | null
}
type VideoQualityModesInput = 1 | 2
type ThreadAutoArchiveDurationInput = 60 | 1440 | 4320 | 10080
type UpdateDefaultReactionEmojiRequestInput = {
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
}
type ThreadSortOrderInput = 0 | 1
type ForumLayoutInput = 0 | 1 | 2
type ThreadSearchTagSettingInput = 'match_all' | 'match_some'
type UpdateThreadTagRequestInput = {
  name: string
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
  moderated?: boolean | null
  id?: null | SnowflakeTypeInput
}
type UpdateGuildChannelRequestPartialInput = {
  type?: null | ChannelTypesInput
  name?: string
  position?: number | null
  topic?: string | null
  bitrate?: number | null
  user_limit?: number | null
  nsfw?: boolean | null
  rate_limit_per_user?: number | null
  parent_id?: null | SnowflakeTypeInput
  permission_overwrites?: ChannelPermissionOverwriteRequestInput[] | null
  rtc_region?: string | null
  video_quality_mode?: null | VideoQualityModesInput
  default_auto_archive_duration?: null | ThreadAutoArchiveDurationInput
  default_reaction_emoji?: null | UpdateDefaultReactionEmojiRequestInput
  default_thread_rate_limit_per_user?: number | null
  default_sort_order?: null | ThreadSortOrderInput
  default_forum_layout?: null | ForumLayoutInput
  default_tag_setting?: null | ThreadSearchTagSettingInput
  flags?: number | null
  available_tags?: UpdateThreadTagRequestInput[] | null
}
type UpdateThreadRequestPartialInput = {
  name?: string | null
  archived?: boolean | null
  locked?: boolean | null
  invitable?: boolean | null
  auto_archive_duration?: null | ThreadAutoArchiveDurationInput
  rate_limit_per_user?: number | null
  flags?: number | null
  applied_tags?: SnowflakeTypeInput[] | null
  bitrate?: number | null
  user_limit?: number | null
  rtc_region?: string | null
  video_quality_mode?: null | VideoQualityModesInput
}
type ChannelFollowerResponse = { channel_id: SnowflakeType; webhook_id: SnowflakeType }
type InviteTypes = 0 | 1 | 2
type InviteChannelRecipientResponse = { id: SnowflakeType; username: string; avatar: string | null }
type InviteChannelResponse = {
  id: SnowflakeType
  type: ChannelTypes
  name: string | null
  icon?: string | undefined
  nsfw?: boolean | undefined
  recipients?: InviteChannelRecipientResponse[] | undefined
}
type FriendInviteResponse = {
  type: InviteTypes
  code: string
  inviter?: UserResponse | undefined
  max_age?: number | undefined
  created_at?: string | undefined
  expires_at: string | null
  friends_count?: number | undefined
  channel: null | InviteChannelResponse
  is_contact?: boolean | undefined
  uses?: number | undefined
  max_uses?: number | undefined
  flags?: number | undefined
}
type GroupDMInviteResponse = {
  type: InviteTypes
  code: string
  inviter?: UserResponse | undefined
  max_age?: number | undefined
  created_at?: string | undefined
  expires_at: string | null
  channel: InviteChannelResponse
  approximate_member_count?: (number | null) | undefined
}
type GuildFeatures =
  | 'ANIMATED_BANNER'
  | 'ANIMATED_ICON'
  | 'APPLICATION_COMMAND_PERMISSIONS_V2'
  | 'AUTO_MODERATION'
  | 'BANNER'
  | 'COMMUNITY'
  | 'CREATOR_MONETIZABLE_PROVISIONAL'
  | 'CREATOR_STORE_PAGE'
  | 'DEVELOPER_SUPPORT_SERVER'
  | 'DISCOVERABLE'
  | 'FEATURABLE'
  | 'INVITES_DISABLED'
  | 'INVITE_SPLASH'
  | 'MEMBER_VERIFICATION_GATE_ENABLED'
  | 'MORE_STICKERS'
  | 'NEWS'
  | 'PARTNERED'
  | 'PREVIEW_ENABLED'
  | 'RAID_ALERTS_DISABLED'
  | 'PRUNE_REQUIRES_ADMIN'
  | 'ROLE_ICONS'
  | 'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE'
  | 'ROLE_SUBSCRIPTIONS_ENABLED'
  | 'TICKETED_EVENTS_ENABLED'
  | 'VANITY_URL'
  | 'VERIFIED'
  | 'VIP_REGIONS'
  | 'WELCOME_SCREEN_ENABLED'
  | 'OFFICIAL_GAME_GUILD'
type VerificationLevels = 0 | 1 | 2 | 3 | 4
type GuildNSFWContentLevel = 0 | 1 | 2 | 3
type InviteGuildResponse = {
  id: SnowflakeType
  name: string
  splash: string | null
  banner: string | null
  description: string | null
  icon: string | null
  features: GuildFeatures[]
  verification_level: null | VerificationLevels
  vanity_url_code: string | null
  nsfw_level: null | GuildNSFWContentLevel
  nsfw: boolean | null
  premium_subscription_count: number
}
type InviteTargetTypes = 1 | 2 | 3
type InviteApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: null | ApplicationTypes
  cover_image?: string | undefined
  primary_sku_id?: SnowflakeType | undefined
  flags: number
  flags_new: string
  bot?: UserResponse | undefined
  slug?: string | undefined
  conjure_project_id?: SnowflakeType | undefined
  vibegrations_project_id?: SnowflakeType | undefined
  guild_id?: SnowflakeType | undefined
  rpc_origins?: string[] | undefined
  bot_public?: boolean | undefined
  bot_require_code_grant?: boolean | undefined
  terms_of_service_url?: string | undefined
  privacy_policy_url?: string | undefined
  custom_install_url?: string | undefined
  install_params?: ApplicationOAuth2InstallParamsResponse | undefined
  integration_types_config?:
    | { [key: string]: ApplicationIntegrationTypeConfigurationResponse }
    | undefined
  verify_key: string
  max_participants?: (number | null) | undefined
  tags?: string[] | undefined
}
type GuildScheduledEventStatuses = 1 | 2 | 3 | 4
type GuildScheduledEventEntityTypes = 0 | 1 | 2 | 3
type RecurrenceRuleFrequencies = 3 | 2 | 1 | 0
type RecurrenceRuleWeekdays = 0 | 1 | 2 | 3 | 4 | 5 | 6
type ByNWeekdayResponse = { n: number; day: RecurrenceRuleWeekdays }
type RecurrenceRuleMonths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type RecurrenceRuleResponse = {
  start: string
  end?: (string | null) | undefined
  frequency: RecurrenceRuleFrequencies
  interval: number
  by_weekday: RecurrenceRuleWeekdays[] | null
  by_n_weekday: ByNWeekdayResponse[] | null
  by_month: RecurrenceRuleMonths[] | null
  by_month_day: number[] | null
  by_year_day?: (number[] | null) | undefined
  count?: (number | null) | undefined
}
type GuildScheduledEventPrivacyLevels = 2
type GuildScheduledEventUserResponses = 0 | 1
type ScheduledEventUserResponse = {
  guild_scheduled_event_id: SnowflakeType
  guild_scheduled_event_exception_id?: (null | SnowflakeType) | undefined
  user_id: SnowflakeType
  user?: UserResponse | undefined
  member?: GuildMemberResponse | undefined
  response: GuildScheduledEventUserResponses
}
type GuildScheduledEventExceptionResponse = {
  event_id: SnowflakeType
  event_exception_id: SnowflakeType
  scheduled_start_time: string | null
  scheduled_end_time: string | null
  is_canceled: boolean
}
type ScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: null | SnowflakeType
  creator_id: null | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: GuildScheduledEventEntityTypes
  entity_id: null | SnowflakeType
  recurrence_rule: null | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: (null | ScheduledEventUserResponse) | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
}
type GuildRoleColorsResponse = {
  primary_color: number
  secondary_color: number | null
  tertiary_color: number | null
}
type InviteGuildRoleResponse = {
  id: SnowflakeType
  name: string
  position: number
  color: number
  colors: GuildRoleColorsResponse
  icon: string | null
  unicode_emoji: string | null
  permissions?: string | undefined
}
type GuildInviteResponse = {
  type: InviteTypes
  code: string
  inviter?: UserResponse | undefined
  max_age?: number | undefined
  created_at?: string | undefined
  expires_at: string | null
  is_contact?: boolean | undefined
  flags?: number | undefined
  guild: InviteGuildResponse
  guild_id: SnowflakeType
  channel: InviteChannelResponse
  target_type?: InviteTargetTypes | undefined
  target_user?: UserResponse | undefined
  target_application?: InviteApplicationResponse | undefined
  guild_scheduled_event?: ScheduledEventResponse | undefined
  target_channel_id?: SnowflakeType | undefined
  target_message_id?: SnowflakeType | undefined
  uses?: number | undefined
  max_uses?: number | undefined
  temporary?: boolean | undefined
  approximate_member_count?: (number | null) | undefined
  approximate_presence_count?: (number | null) | undefined
  is_nickname_changeable?: boolean | undefined
  roles?: (InviteGuildRoleResponse[] | null) | undefined
}
type CreateGroupDMInviteRequestInput = { max_age?: number | null }
type InviteTargetTypesInput = 1 | 2 | 3
type CreateGuildInviteRequestInput = {
  max_age?: number | null
  temporary?: boolean | null
  max_uses?: number | null
  unique?: boolean | null
  target_user_id?: null | SnowflakeTypeInput
  target_application_id?: null | SnowflakeTypeInput
  target_type?: null | InviteTargetTypesInput
  role_ids?: string | SnowflakeTypeInput[] | null
  target_user_ids?: string | SnowflakeTypeInput[] | null
}
type MessageType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 31
  | 32
  | 36
  | 37
  | 38
  | 39
  | 46
  | 55
type MessageAttachmentResponse = {
  id: SnowflakeType
  filename: string
  size: number
  url: string
  proxy_url: string
  width?: number | undefined
  height?: number | undefined
  duration_secs?: number | undefined
  waveform?: string | undefined
  description?: string | undefined
  content_type?: string | undefined
  ephemeral?: boolean | undefined
  flags?: number | undefined
  placeholder?: string | undefined
  placeholder_version?: number | undefined
  title?: (string | null) | undefined
  application?: ApplicationResponse | undefined
  clip_created_at?: string | undefined
  clip_participants?: UserResponse[] | undefined
}
type MessageEmbedFieldResponse = { name: string; value: string; inline: boolean }
type MessageEmbedAuthorResponse = {
  name: string
  url?: string | undefined
  icon_url?: string | undefined
  proxy_icon_url?: string | undefined
}
type MessageEmbedProviderResponse = { name: string; url?: string | undefined }
type UInt32Type = bigint
type MessageEmbedImageResponse = {
  url?: string | undefined
  proxy_url?: string | undefined
  width?: UInt32Type | undefined
  height?: UInt32Type | undefined
  content_type?: string | undefined
  placeholder?: string | undefined
  placeholder_version?: UInt32Type | undefined
  description?: string | undefined
  flags?: UInt32Type | undefined
}
type MessageEmbedVideoResponse = {
  url?: string | undefined
  proxy_url?: string | undefined
  width?: UInt32Type | undefined
  height?: UInt32Type | undefined
  content_type?: string | undefined
  placeholder?: string | undefined
  placeholder_version?: UInt32Type | undefined
  description?: string | undefined
  flags?: UInt32Type | undefined
}
type MessageEmbedAudioResponse = {
  url?: string | undefined
  proxy_url?: string | undefined
  content_type?: string | undefined
  description?: string | undefined
}
type MessageEmbedFooterResponse = {
  text: string
  icon_url?: string | undefined
  proxy_icon_url?: string | undefined
}
type MessageComponentTypes =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 17
  | 18
  | 19
  | 21
  | 22
  | 23
type ButtonStyleTypes = 1 | 2 | 3 | 4 | 5 | 6
type ComponentEmojiResponse = {
  id?: SnowflakeType | undefined
  name: string
  animated?: boolean | undefined
}
type ButtonComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id?: string | undefined
  style: ButtonStyleTypes
  label?: string | undefined
  disabled?: boolean | undefined
  emoji?: ComponentEmojiResponse | undefined
  url?: (string | null) | undefined
  sku_id?: SnowflakeType | undefined
}
type SnowflakeSelectDefaultValueTypes = 'user' | 'role' | 'channel'
type ChannelSelectDefaultValueResponse = {
  type: SnowflakeSelectDefaultValueTypes
  id: SnowflakeType
}
type ChannelSelectComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  channel_types?: ChannelTypes[] | undefined
  default_values?: ChannelSelectDefaultValueResponse[] | undefined
}
type RoleSelectDefaultValueResponse = { type: SnowflakeSelectDefaultValueTypes; id: SnowflakeType }
type UserSelectDefaultValueResponse = { type: SnowflakeSelectDefaultValueTypes; id: SnowflakeType }
type MentionableSelectComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  default_values?: (RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse)[] | undefined
}
type RoleSelectComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  default_values?: RoleSelectDefaultValueResponse[] | undefined
}
type StringSelectOptionResponse = {
  label: string
  value: string
  description?: string | undefined
  emoji?: ComponentEmojiResponse | undefined
  default?: boolean | undefined
}
type StringSelectComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  options: StringSelectOptionResponse[]
}
type TextInputStyleTypes = 1 | 2
type TextInputComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id: string
  style: TextInputStyleTypes
  label: string | null
  value?: string | undefined
  placeholder?: string | undefined
  required?: boolean | undefined
  min_length: number | null
  max_length: number | null
}
type UserSelectComponentResponse = {
  type: MessageComponentTypes
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  default_values?: UserSelectDefaultValueResponse[] | undefined
}
type ActionRowComponentResponse = {
  type: MessageComponentTypes
  id: number
  components: (
    | ButtonComponentResponse
    | ChannelSelectComponentResponse
    | MentionableSelectComponentResponse
    | RoleSelectComponentResponse
    | StringSelectComponentResponse
    | TextInputComponentResponse
    | UserSelectComponentResponse
  )[]
}
type ContentScanMetadataResponse = { flags: number }
type UnfurledMediaResponse = {
  id: SnowflakeType
  url: string
  proxy_url?: string | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
  placeholder?: (string | null) | undefined
  placeholder_version?: (number | null) | undefined
  content_scan_metadata?: ContentScanMetadataResponse | undefined
  content_type?: (string | null) | undefined
  flags?: number | undefined
  attachment_id?: SnowflakeType | undefined
}
type FileComponentResponse = {
  type: MessageComponentTypes
  id: number
  file: UnfurledMediaResponse
  name: string | null
  size: number | null
  spoiler: boolean
}
type MediaGalleryItemResponse = {
  media: UnfurledMediaResponse
  description: string | null
  spoiler: boolean
}
type MediaGalleryComponentResponse = {
  type: MessageComponentTypes
  id: number
  items: MediaGalleryItemResponse[]
}
type TextDisplayComponentResponse = { type: MessageComponentTypes; id: number; content: string }
type ThumbnailComponentResponse = {
  type: MessageComponentTypes
  id: number
  media: UnfurledMediaResponse
  description: string | null
  spoiler: boolean
}
type SectionComponentResponse = {
  type: MessageComponentTypes
  id: number
  components: TextDisplayComponentResponse[]
  accessory: ButtonComponentResponse | ThumbnailComponentResponse
}
type MessageComponentSeparatorSpacingSize = 1 | 2
type SeparatorComponentResponse = {
  type: MessageComponentTypes
  id: number
  spacing: MessageComponentSeparatorSpacingSize
  divider: boolean
}
type ContainerComponentResponse = {
  type: MessageComponentTypes
  id: number
  accent_color: number | null
  components: (
    | ActionRowComponentResponse
    | FileComponentResponse
    | MediaGalleryComponentResponse
    | SectionComponentResponse
    | SeparatorComponentResponse
    | TextDisplayComponentResponse
  )[]
  spoiler: boolean
}
type MessageEmbedResponse = {
  type: string
  url?: string | undefined
  title?: string | undefined
  description?: string | undefined
  color?: number | undefined
  timestamp?: string | undefined
  fields?: MessageEmbedFieldResponse[] | undefined
  author?: MessageEmbedAuthorResponse | undefined
  provider?: MessageEmbedProviderResponse | undefined
  image?: MessageEmbedImageResponse | undefined
  thumbnail?: MessageEmbedImageResponse | undefined
  video?: MessageEmbedVideoResponse | undefined
  audio?: MessageEmbedAudioResponse | undefined
  footer?: MessageEmbedFooterResponse | undefined
  flags?: (number | null) | undefined
  components?: ContainerComponentResponse[] | undefined
}
type StickerTypes = 1 | 2
type StickerFormatTypes = 1 | 2 | 3 | 4
type GuildStickerResponse = {
  id: SnowflakeType
  name: string
  tags: string
  type: StickerTypes
  format_type: null | StickerFormatTypes
  description: string | null
  available: boolean
  guild_id: SnowflakeType
  user?: UserResponse | undefined
}
type StandardStickerResponse = {
  id: SnowflakeType
  name: string
  tags: string
  type: StickerTypes
  format_type: null | StickerFormatTypes
  description: string | null
  pack_id: SnowflakeType
  sort_value: number
}
type MessageStickerItemResponse = {
  id: SnowflakeType
  name: string
  format_type: StickerFormatTypes
}
type MessageCallResponse = {
  ended_timestamp?: (string | null) | undefined
  participants: SnowflakeType[]
}
type ActivityActionTypes = 1 | 2 | 3 | 5 | 6
type MessageActivityResponse = { type: ActivityActionTypes; party_id?: string | undefined }
type BasicApplicationResponseWithBot = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: null | ApplicationTypes
  cover_image?: string | undefined
  primary_sku_id?: SnowflakeType | undefined
  flags: number
  flags_new: string
  bot?: UserResponse | undefined
}
type InteractionTypes = 1 | 2 | 3 | 4 | 5 | 6
type MessageInteractionResponse = {
  id: SnowflakeType
  type: InteractionTypes
  name: string
  user?: UserResponse | undefined
  name_localized?: string | undefined
}
type MessageReferenceType = 0
type MessageReferenceResponse = {
  type: MessageReferenceType
  channel_id: SnowflakeType
  message_id?: SnowflakeType | undefined
  guild_id?: SnowflakeType | undefined
}
type MessageMentionChannelResponse = {
  id: SnowflakeType
  name: string
  type: ChannelTypes
  guild_id: SnowflakeType
}
type MessageRoleSubscriptionDataResponse = {
  role_subscription_listing_id: SnowflakeType
  tier_name: string
  total_months_subscribed: number
  is_renewal: boolean
}
type PurchaseType = 0
type GuildProductPurchaseResponse = { listing_id: SnowflakeType; product_name: string }
type PurchaseNotificationResponse = {
  type: PurchaseType
  guild_product_purchase?: GuildProductPurchaseResponse | undefined
}
type BasicGuildMemberResponse = {
  avatar: string | null
  avatar_decoration_data?: (null | UserAvatarDecorationResponse) | undefined
  banner: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: SnowflakeType[]
  collectibles?: (null | UserCollectiblesResponse) | undefined
}
type GuildRoleTagsResponse = {
  premium_subscriber?: null | undefined
  bot_id?: SnowflakeType | undefined
  integration_id?: SnowflakeType | undefined
  subscription_listing_id?: SnowflakeType | undefined
  available_for_purchase?: null | undefined
  guild_connections?: null | undefined
}
type GuildRoleResponse = {
  id: SnowflakeType
  name: string
  permissions: string
  position: number
  color: number
  colors: GuildRoleColorsResponse
  hoist: boolean
  managed: boolean
  mentionable: boolean
  icon: string | null
  unicode_emoji: string | null
  tags?: GuildRoleTagsResponse | undefined
  flags: number
}
type ResolvedObjectsResponse = {
  users?: ({ [key: string]: UserResponse } | null) | undefined
  members?: ({ [key: string]: BasicGuildMemberResponse } | null) | undefined
  channels?:
    | ({
        [key: string]:
          | GuildChannelResponse
          | PrivateChannelResponse
          | PrivateGroupChannelResponse
          | ThreadResponse
      } | null)
    | undefined
  roles?: ({ [key: string]: GuildRoleResponse } | null) | undefined
}
type MessageReactionEmojiResponse = {
  id: null | SnowflakeType
  name: string | null
  animated?: boolean | undefined
}
type PollMediaResponse = {
  text?: string | undefined
  emoji?: MessageReactionEmojiResponse | undefined
}
type PollAnswerResponse = { answer_id: number; poll_media: PollMediaResponse }
type PollLayoutTypes = 1
type PollResultsEntryResponse = { id: number; count: number; me_voted: boolean }
type PollResultsResponse = { answer_counts: PollResultsEntryResponse[]; is_finalized: boolean }
type PollResponse = {
  question: PollMediaResponse
  answers: PollAnswerResponse[]
  expiry: string
  allow_multiselect: boolean
  layout_type: PollLayoutTypes
  results: PollResultsResponse
}
type MessageShareCustomUserThemeBaseTheme = 0 | 1 | 2 | 3 | 4
type CustomClientThemeResponse = {
  colors: string[]
  gradient_angle: number
  base_mix: number
  base_theme: MessageShareCustomUserThemeBaseTheme
}
type ApplicationCommandInteractionMetadataResponse = {
  id: SnowflakeType
  type: InteractionTypes
  user?: UserResponse | undefined
  authorizing_integration_owners: { [key: string]: SnowflakeType }
  original_response_message_id?: SnowflakeType | undefined
  target_user?: UserResponse | undefined
  target_message_id?: SnowflakeType | undefined
}
type MessageComponentInteractionMetadataResponse = {
  id: SnowflakeType
  type: InteractionTypes
  user?: UserResponse | undefined
  authorizing_integration_owners: { [key: string]: SnowflakeType }
  original_response_message_id?: SnowflakeType | undefined
  interacted_message_id: SnowflakeType
}
type ModalSubmitInteractionMetadataResponse = {
  id: SnowflakeType
  type: InteractionTypes
  user?: UserResponse | undefined
  authorizing_integration_owners: { [key: string]: SnowflakeType }
  original_response_message_id?: SnowflakeType | undefined
  triggering_interaction_metadata:
    | ApplicationCommandInteractionMetadataResponse
    | MessageComponentInteractionMetadataResponse
}
type MinimalContentMessageResponse = {
  type: MessageType
  content: string
  mentions: UserResponse[]
  mention_roles: SnowflakeType[]
  attachments: MessageAttachmentResponse[]
  embeds: MessageEmbedResponse[]
  timestamp: string
  edited_timestamp: string | null
  flags: number
  components: (
    | ActionRowComponentResponse
    | ContainerComponentResponse
    | FileComponentResponse
    | MediaGalleryComponentResponse
    | SectionComponentResponse
    | SeparatorComponentResponse
    | TextDisplayComponentResponse
  )[]
  stickers?: (GuildStickerResponse | StandardStickerResponse)[] | undefined
  sticker_items?: MessageStickerItemResponse[] | undefined
}
type MessageSnapshotResponse = { message: MinimalContentMessageResponse }
type MessageLobbyMemberResponse = { additional_name: string }
type MessageReactionCountDetailsResponse = { burst: number; normal: number }
type MessageReactionResponse = {
  emoji: MessageReactionEmojiResponse
  count: number
  count_details: MessageReactionCountDetailsResponse
  burst_colors: string[]
  me_burst: boolean
  me: boolean
}
type BasicMessageResponse = {
  type: MessageType
  content: string
  mentions: UserResponse[]
  mention_roles: SnowflakeType[]
  attachments: MessageAttachmentResponse[]
  embeds: MessageEmbedResponse[]
  timestamp: string
  edited_timestamp: string | null
  flags: number
  components: (
    | ActionRowComponentResponse
    | ContainerComponentResponse
    | FileComponentResponse
    | MediaGalleryComponentResponse
    | SectionComponentResponse
    | SeparatorComponentResponse
    | TextDisplayComponentResponse
  )[]
  stickers?: (GuildStickerResponse | StandardStickerResponse)[] | undefined
  sticker_items?: MessageStickerItemResponse[] | undefined
  id: SnowflakeType
  channel_id: SnowflakeType
  author: UserResponse
  pinned: boolean
  mention_everyone: boolean
  tts: boolean
  call?: MessageCallResponse | undefined
  activity?: MessageActivityResponse | undefined
  application?: BasicApplicationResponseWithBot | undefined
  application_id?: SnowflakeType | undefined
  interaction?: MessageInteractionResponse | undefined
  nonce?: (bigint | string) | undefined
  webhook_id?: SnowflakeType | undefined
  message_reference?: MessageReferenceResponse | undefined
  thread?: ThreadResponse | undefined
  mention_channels?: MessageMentionChannelResponse[] | undefined
  role_subscription_data?: MessageRoleSubscriptionDataResponse | undefined
  purchase_notification?: PurchaseNotificationResponse | undefined
  position?: number | undefined
  resolved?: ResolvedObjectsResponse | undefined
  poll?: PollResponse | undefined
  shared_client_theme?: CustomClientThemeResponse | undefined
  interaction_metadata?:
    | (
        | ApplicationCommandInteractionMetadataResponse
        | MessageComponentInteractionMetadataResponse
        | ModalSubmitInteractionMetadataResponse
      )
    | undefined
  message_snapshots?: MessageSnapshotResponse[] | undefined
  lobby_member?: MessageLobbyMemberResponse | undefined
  actor?: UserResponse | undefined
}
type MessageResponse = {
  type: MessageType
  content: string
  mentions: UserResponse[]
  mention_roles: SnowflakeType[]
  attachments: MessageAttachmentResponse[]
  embeds: MessageEmbedResponse[]
  timestamp: string
  edited_timestamp: string | null
  flags: number
  components: (
    | ActionRowComponentResponse
    | ContainerComponentResponse
    | FileComponentResponse
    | MediaGalleryComponentResponse
    | SectionComponentResponse
    | SeparatorComponentResponse
    | TextDisplayComponentResponse
  )[]
  stickers?: (GuildStickerResponse | StandardStickerResponse)[] | undefined
  sticker_items?: MessageStickerItemResponse[] | undefined
  id: SnowflakeType
  channel_id: SnowflakeType
  author: UserResponse
  pinned: boolean
  mention_everyone: boolean
  tts: boolean
  call?: MessageCallResponse | undefined
  activity?: MessageActivityResponse | undefined
  application?: BasicApplicationResponseWithBot | undefined
  application_id?: SnowflakeType | undefined
  interaction?: MessageInteractionResponse | undefined
  nonce?: (bigint | string) | undefined
  webhook_id?: SnowflakeType | undefined
  message_reference?: MessageReferenceResponse | undefined
  thread?: ThreadResponse | undefined
  mention_channels?: MessageMentionChannelResponse[] | undefined
  role_subscription_data?: MessageRoleSubscriptionDataResponse | undefined
  purchase_notification?: PurchaseNotificationResponse | undefined
  position?: number | undefined
  resolved?: ResolvedObjectsResponse | undefined
  poll?: PollResponse | undefined
  shared_client_theme?: CustomClientThemeResponse | undefined
  interaction_metadata?:
    | (
        | ApplicationCommandInteractionMetadataResponse
        | MessageComponentInteractionMetadataResponse
        | ModalSubmitInteractionMetadataResponse
      )
    | undefined
  message_snapshots?: MessageSnapshotResponse[] | undefined
  lobby_member?: MessageLobbyMemberResponse | undefined
  actor?: UserResponse | undefined
  reactions?: MessageReactionResponse[] | undefined
  referenced_message?: (null | BasicMessageResponse) | undefined
}
type RichEmbedAuthorInput = { name?: string | null; url?: string | null; icon_url?: string | null }
type RichEmbedImageInput = {
  url?: string | null
  width?: number | null
  height?: number | null
  placeholder?: string | null
  placeholder_version?: number | null
  is_animated?: boolean | null
  description?: string | null
}
type RichEmbedThumbnailInput = {
  url?: string | null
  width?: number | null
  height?: number | null
  placeholder?: string | null
  placeholder_version?: number | null
  is_animated?: boolean | null
  description?: string | null
}
type RichEmbedFooterInput = { text?: string | null; icon_url?: string | null }
type RichEmbedFieldInput = { name: string; value: string; inline?: boolean | null }
type RichEmbedProviderInput = { name?: string | null; url?: string | null }
type RichEmbedVideoInput = {
  url?: string | null
  width?: number | null
  height?: number | null
  placeholder?: string | null
  placeholder_version?: number | null
  is_animated?: boolean | null
  description?: string | null
}
type RichEmbedAudioInput = { url?: string | null; description?: string | null }
type RichEmbedInput = {
  type?: string | null
  url?: string | null
  title?: string | null
  color?: number | null
  timestamp?: string | null
  description?: string | null
  author?: null | RichEmbedAuthorInput
  image?: null | RichEmbedImageInput
  thumbnail?: null | RichEmbedThumbnailInput
  footer?: null | RichEmbedFooterInput
  fields?: RichEmbedFieldInput[] | null
  provider?: null | RichEmbedProviderInput
  video?: null | RichEmbedVideoInput
  audio?: null | RichEmbedAudioInput
}
type AllowedMentionTypesInput = 'users' | 'roles' | 'everyone'
type MessageAllowedMentionsRequestInput = {
  parse?: (null | AllowedMentionTypesInput)[] | null
  users?: (null | SnowflakeTypeInput)[] | null
  roles?: (null | SnowflakeTypeInput)[] | null
  replied_user?: boolean | null
}
type MessageComponentTypesInput =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 17
  | 18
  | 19
  | 21
  | 22
  | 23
type ButtonStyleTypesInput = 1 | 2 | 3 | 4 | 5 | 6
type ComponentEmojiForRequestInput = { id?: null | SnowflakeTypeInput; name: string }
type ButtonComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id?: string | null
  style: ButtonStyleTypesInput
  label?: string | null
  disabled?: boolean | null
  url?: string | null
  sku_id?: null | SnowflakeTypeInput
  emoji?: null | ComponentEmojiForRequestInput
}
type SnowflakeSelectDefaultValueTypesInput = 'user' | 'role' | 'channel'
type ChannelSelectDefaultValueInput = {
  type: SnowflakeSelectDefaultValueTypesInput
  id: SnowflakeTypeInput
}
type ChannelSelectComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: ChannelSelectDefaultValueInput[] | null
  channel_types?: ChannelTypesInput[] | null
}
type RoleSelectDefaultValueInput = {
  type: SnowflakeSelectDefaultValueTypesInput
  id: SnowflakeTypeInput
}
type UserSelectDefaultValueInput = {
  type: SnowflakeSelectDefaultValueTypesInput
  id: SnowflakeTypeInput
}
type MentionableSelectComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: (RoleSelectDefaultValueInput | UserSelectDefaultValueInput)[] | null
}
type RoleSelectComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: RoleSelectDefaultValueInput[] | null
}
type StringSelectOptionForRequestInput = {
  label: string
  value: string
  description?: string | null
  default?: boolean | null
  emoji?: null | ComponentEmojiForRequestInput
}
type StringSelectComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  options: StringSelectOptionForRequestInput[]
}
type UserSelectComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: UserSelectDefaultValueInput[] | null
}
type ActionRowComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  components: (
    | ButtonComponentForMessageRequestInput
    | ChannelSelectComponentForMessageRequestInput
    | MentionableSelectComponentForMessageRequestInput
    | RoleSelectComponentForMessageRequestInput
    | StringSelectComponentForMessageRequestInput
    | UserSelectComponentForMessageRequestInput
  )[]
}
type UnfurledMediaRequestWithAttachmentReferenceRequiredInput = { url: string }
type FileComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  spoiler?: boolean | null
  file: UnfurledMediaRequestWithAttachmentReferenceRequiredInput
}
type UnfurledMediaRequestInput = { url: string }
type MediaGalleryItemForMessageRequestInput = {
  description?: string | null
  spoiler?: boolean | null
  media: UnfurledMediaRequestInput
}
type MediaGalleryComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  items: MediaGalleryItemForMessageRequestInput[]
}
type TextDisplayComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  content: string
}
type ThumbnailComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  description?: string | null
  spoiler?: boolean | null
  media: UnfurledMediaRequestInput
}
type SectionComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  components: TextDisplayComponentForMessageRequestInput[]
  accessory: ButtonComponentForMessageRequestInput | ThumbnailComponentForMessageRequestInput
}
type MessageComponentSeparatorSpacingSizeInput = 1 | 2
type SeparatorComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  spacing?: null | MessageComponentSeparatorSpacingSizeInput
  divider?: boolean | null
}
type ContainerComponentForMessageRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  accent_color?: number | null
  components: (
    | ActionRowComponentForMessageRequestInput
    | FileComponentForMessageRequestInput
    | MediaGalleryComponentForMessageRequestInput
    | SectionComponentForMessageRequestInput
    | SeparatorComponentForMessageRequestInput
    | TextDisplayComponentForMessageRequestInput
  )[]
  spoiler?: boolean | null
}
type MessageAttachmentRequestInput = {
  id: SnowflakeTypeInput
  filename?: string | null
  description?: string | null
  duration_secs?: number | null
  waveform?: string | null
  title?: string | null
  is_spoiler?: boolean | null
}
type PollEmojiInput = {
  id?: null | SnowflakeTypeInput
  name?: string | null
  animated?: boolean | null
}
type PollMediaInput = { text?: string | null; emoji?: null | PollEmojiInput }
type PollEmojiCreateRequestInput = {
  id?: null | SnowflakeTypeInput
  name?: string | null
  animated?: boolean | null
}
type PollMediaCreateRequestInput = {
  text?: string | null
  emoji?: null | PollEmojiCreateRequestInput
}
type PollAnswerCreateRequestInput = { poll_media: PollMediaCreateRequestInput }
type PollLayoutTypesInput = 1
type PollCreateRequestInput = {
  question: PollMediaInput
  answers: PollAnswerCreateRequestInput[]
  allow_multiselect?: boolean | null
  layout_type?: null | PollLayoutTypesInput
  duration?: number | null
}
type MessageShareCustomUserThemeBaseThemeInput = 0 | 1 | 2 | 3 | 4
type CustomClientThemeShareRequestInput = {
  colors: string[]
  gradient_angle: number
  base_mix: number
  base_theme?: null | MessageShareCustomUserThemeBaseThemeInput
}
type MessageReferenceTypeInput = 0
type MessageReferenceRequestInput = {
  guild_id?: null | SnowflakeTypeInput
  channel_id?: null | SnowflakeTypeInput
  message_id: SnowflakeTypeInput
  fail_if_not_exists?: boolean | null
  type?: null | MessageReferenceTypeInput
}
type MessageCreateRequestInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  sticker_ids?: SnowflakeTypeInput[] | null
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  flags?: number | null
  attachments?: MessageAttachmentRequestInput[] | null
  poll?: null | PollCreateRequestInput
  shared_client_theme?: null | CustomClientThemeShareRequestInput
  message_reference?: null | MessageReferenceRequestInput
  nonce?: bigint | string | null
  enforce_nonce?: boolean | null
  tts?: boolean | null
}
type PinnedMessageResponse = { pinned_at: string; message: MessageResponse }
type PinnedMessagesResponse = { items: PinnedMessageResponse[]; has_more: boolean }
type MessageEditRequestPartialInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  flags?: number | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  sticker_ids?: SnowflakeTypeInput[] | null
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  attachments?: MessageAttachmentRequestInput[] | null
}
type CreateTextThreadWithMessageRequestInput = {
  name: string
  auto_archive_duration?: null | ThreadAutoArchiveDurationInput
  rate_limit_per_user?: number | null
}
type PermissionsResponse = { permissions: string }
type PollAnswerDetailsResponse = { users: UserResponse[] }
type SoundboardSoundSendRequestInput = {
  sound_id: SnowflakeTypeInput
  source_guild_id?: null | SnowflakeTypeInput
}
type BaseCreateMessageCreateRequestInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  sticker_ids?: SnowflakeTypeInput[] | null
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  flags?: number | null
  attachments?: MessageAttachmentRequestInput[] | null
  poll?: null | PollCreateRequestInput
  shared_client_theme?: null | CustomClientThemeShareRequestInput
}
type CreateForumThreadRequestInput = {
  name: string
  auto_archive_duration?: null | ThreadAutoArchiveDurationInput
  rate_limit_per_user?: number | null
  applied_tags?: SnowflakeTypeInput[] | null
  message: BaseCreateMessageCreateRequestInput
}
type CreateTextThreadWithoutMessageRequestInput = {
  name: string
  auto_archive_duration?: null | ThreadAutoArchiveDurationInput
  rate_limit_per_user?: number | null
  type?: null | ChannelTypesInput
  invitable?: boolean | null
}
type CreatedThreadResponse = {
  id: SnowflakeType
  type: ChannelTypes
  last_message_id?: (null | SnowflakeType) | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  guild_id: SnowflakeType
  name: string
  parent_id?: (null | SnowflakeType) | undefined
  rate_limit_per_user?: number | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rtc_region?: (string | null) | undefined
  video_quality_mode?: VideoQualityModes | undefined
  permissions?: string | undefined
  owner_id: SnowflakeType
  thread_metadata: ThreadMetadataResponse
  message_count: number
  member_count: number
  total_message_sent: number
  applied_tags?: SnowflakeType[] | undefined
  member?: ThreadMemberResponse | undefined
}
type ThreadsResponse = {
  threads: ThreadResponse[]
  members: ThreadMemberResponse[]
  has_more: boolean
  first_messages?: MessageResponse[] | undefined
}
type ThreadSortingModeInput = 'relevance' | 'creation_time' | 'last_message_time' | 'archive_time'
type SortingOrderInput = 'asc' | 'desc'
type ThreadSearchResponse = {
  threads: ThreadResponse[]
  members: ThreadMemberResponse[]
  has_more: boolean
  first_messages?: MessageResponse[] | undefined
  total_results: number
}
type SearchIndexNotReadyResponse = {
  message: string
  code: number
  documents_indexed: number
  retry_after: number
}
type TypingIndicatorResponse = { [key: string]: unknown }
type WebhookTypes = 1 | 2 | 3
type ApplicationIncomingWebhookResponse = {
  application_id: null | SnowflakeType
  avatar: string | null
  channel_id: null | SnowflakeType
  guild_id?: (null | SnowflakeType) | undefined
  id: SnowflakeType
  name: string
  type: WebhookTypes
  user?: UserResponse | undefined
}
type WebhookSourceGuildResponse = { id: SnowflakeType; icon: string | null; name: string }
type WebhookSourceChannelResponse = { id: SnowflakeType; name: string }
type ChannelFollowerWebhookResponse = {
  application_id: null | SnowflakeType
  avatar: string | null
  channel_id: null | SnowflakeType
  guild_id?: (null | SnowflakeType) | undefined
  id: SnowflakeType
  name: string
  type: WebhookTypes
  user?: UserResponse | undefined
  source_guild?: WebhookSourceGuildResponse | undefined
  source_channel?: WebhookSourceChannelResponse | undefined
}
type GuildIncomingWebhookResponse = {
  application_id: null | SnowflakeType
  avatar: string | null
  channel_id: null | SnowflakeType
  guild_id?: (null | SnowflakeType) | undefined
  id: SnowflakeType
  name: string
  type: WebhookTypes
  user?: UserResponse | undefined
  token?: string | undefined
  url?: string | undefined
}
type GatewayResponse = { url: string }
type GatewayBotSessionStartLimitResponse = {
  max_concurrency: number
  remaining: number
  reset_after: number
  total: number
}
type GatewayBotResponse = {
  url: string
  session_start_limit: GatewayBotSessionStartLimitResponse
  shards: number
}
type UserNotificationSettings = 0 | 1
type GuildExplicitContentFilterTypes = 0 | 1 | 2
type AvailableLocalesEnum =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en-GB'
  | 'en-US'
  | 'es-419'
  | 'es-ES'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'nl'
  | 'no'
  | 'pl'
  | 'pt-BR'
  | 'ro'
  | 'ru'
  | 'sv-SE'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh-CN'
  | 'zh-TW'
type AfkTimeouts = 60 | 300 | 900 | 1800 | 3600
type GuildTemplateRoleColorsResponse = {
  primary_color: number
  secondary_color: number | null
  tertiary_color: number | null
}
type GuildTemplateRoleResponse = {
  id: number
  name: string
  permissions: string
  color: number
  colors: null | GuildTemplateRoleColorsResponse
  hoist: boolean
  mentionable: boolean
  icon: string | null
  unicode_emoji: string | null
}
type GuildTemplateChannelTags = {
  id: number | null
  name: string
  emoji_id: null | SnowflakeType
  emoji_name: string | null
  moderated: boolean | null
}
type GuildTemplateChannelResponse = {
  id: number | null
  type: ChannelTypes
  name: string | null
  position: number | null
  topic: string | null
  bitrate: number
  user_limit: number
  nsfw: boolean
  rate_limit_per_user: number
  parent_id: null | SnowflakeType
  default_auto_archive_duration: null | ThreadAutoArchiveDuration
  permission_overwrites: ChannelPermissionOverwriteResponse[]
  available_tags: GuildTemplateChannelTags[] | null
  template: string
  default_reaction_emoji: null | DefaultReactionEmojiResponse
  default_thread_rate_limit_per_user: number | null
  default_sort_order: null | ThreadSortOrder
  default_forum_layout: null | ForumLayout
  default_tag_setting: null | ThreadSearchTagSetting
  theme_color: number | null
}
type GuildTemplateSnapshotResponse = {
  name: string
  description: string | null
  region: string | null
  verification_level: VerificationLevels
  default_message_notifications: UserNotificationSettings
  explicit_content_filter: GuildExplicitContentFilterTypes
  preferred_locale: AvailableLocalesEnum
  afk_channel_id: null | SnowflakeType
  afk_timeout: AfkTimeouts
  system_channel_id: null | SnowflakeType
  system_channel_flags: number
  roles: GuildTemplateRoleResponse[]
  channels: GuildTemplateChannelResponse[]
}
type GuildTemplateResponse = {
  code: string
  name: string
  description: string | null
  usage_count: number
  creator_id: SnowflakeType
  creator: null | UserResponse
  created_at: string
  updated_at: string
  source_guild_id: SnowflakeType
  serialized_source_guild: GuildTemplateSnapshotResponse
  is_dirty: boolean | null
}
type GuildMFALevel = 0 | 1
type PremiumGuildTiers = 0 | 1 | 2 | 3
type GuildIncidentsDataResponse = {
  invites_disabled_until: string | null
  dms_disabled_until: string | null
}
type GuildWithCountsResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string | null
  home_header: string | null
  splash: string | null
  discovery_splash: string | null
  features: GuildFeatures[]
  banner: string | null
  owner_id: SnowflakeType
  application_id: null | SnowflakeType
  region: string
  afk_channel_id: null | SnowflakeType
  afk_timeout: AfkTimeouts
  system_channel_id: null | SnowflakeType
  system_channel_flags: number
  widget_enabled: boolean
  widget_channel_id: null | SnowflakeType
  verification_level: VerificationLevels
  roles: GuildRoleResponse[]
  default_message_notifications: UserNotificationSettings
  mfa_level: GuildMFALevel
  explicit_content_filter: GuildExplicitContentFilterTypes
  max_presences: number | null
  max_members: number
  max_stage_video_channel_users: number
  max_video_channel_users: number
  vanity_url_code: string | null
  premium_tier: PremiumGuildTiers
  premium_subscription_count: number
  preferred_locale: AvailableLocalesEnum
  rules_channel_id: null | SnowflakeType
  safety_alerts_channel_id: null | SnowflakeType
  public_updates_channel_id: null | SnowflakeType
  premium_progress_bar_enabled: boolean
  premium_progress_bar_enabled_user_updated_at?: (string | null) | undefined
  nsfw: boolean
  nsfw_level: GuildNSFWContentLevel
  emojis: EmojiResponse[]
  stickers: GuildStickerResponse[]
  incidents_data: null | GuildIncidentsDataResponse
  approximate_member_count?: (number | null) | undefined
  approximate_presence_count?: (number | null) | undefined
}
type VerificationLevelsInput = 0 | 1 | 2 | 3 | 4
type UserNotificationSettingsInput = 0 | 1
type GuildExplicitContentFilterTypesInput = 0 | 1 | 2
type AvailableLocalesEnumInput =
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en-GB'
  | 'en-US'
  | 'es-419'
  | 'es-ES'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'nl'
  | 'no'
  | 'pl'
  | 'pt-BR'
  | 'ro'
  | 'ru'
  | 'sv-SE'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh-CN'
  | 'zh-TW'
type AfkTimeoutsInput = 60 | 300 | 900 | 1800 | 3600
type GuildPatchRequestPartialInput = {
  name?: string
  description?: string | null
  region?: string | null
  icon?: string | null
  verification_level?: null | VerificationLevelsInput
  default_message_notifications?: null | UserNotificationSettingsInput
  explicit_content_filter?: null | GuildExplicitContentFilterTypesInput
  preferred_locale?: null | AvailableLocalesEnumInput
  afk_timeout?: null | AfkTimeoutsInput
  afk_channel_id?: null | SnowflakeTypeInput
  system_channel_id?: null | SnowflakeTypeInput
  splash?: string | null
  banner?: string | null
  system_channel_flags?: number | null
  features?: (string | null)[] | null
  discovery_splash?: string | null
  home_header?: string | null
  rules_channel_id?: null | SnowflakeTypeInput
  safety_alerts_channel_id?: null | SnowflakeTypeInput
  public_updates_channel_id?: null | SnowflakeTypeInput
  premium_progress_bar_enabled?: boolean | null
}
type GuildResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string | null
  home_header: string | null
  splash: string | null
  discovery_splash: string | null
  features: GuildFeatures[]
  banner: string | null
  owner_id: SnowflakeType
  application_id: null | SnowflakeType
  region: string
  afk_channel_id: null | SnowflakeType
  afk_timeout: AfkTimeouts
  system_channel_id: null | SnowflakeType
  system_channel_flags: number
  widget_enabled: boolean
  widget_channel_id: null | SnowflakeType
  verification_level: VerificationLevels
  roles: GuildRoleResponse[]
  default_message_notifications: UserNotificationSettings
  mfa_level: GuildMFALevel
  explicit_content_filter: GuildExplicitContentFilterTypes
  max_presences: number | null
  max_members: number
  max_stage_video_channel_users: number
  max_video_channel_users: number
  vanity_url_code: string | null
  premium_tier: PremiumGuildTiers
  premium_subscription_count: number
  preferred_locale: AvailableLocalesEnum
  rules_channel_id: null | SnowflakeType
  safety_alerts_channel_id: null | SnowflakeType
  public_updates_channel_id: null | SnowflakeType
  premium_progress_bar_enabled: boolean
  premium_progress_bar_enabled_user_updated_at?: (string | null) | undefined
  nsfw: boolean
  nsfw_level: GuildNSFWContentLevel
  emojis: EmojiResponse[]
  stickers: GuildStickerResponse[]
  incidents_data: null | GuildIncidentsDataResponse
}
type AuditLogActionTypes =
  | 1
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 30
  | 31
  | 32
  | 33
  | 40
  | 41
  | 42
  | 50
  | 51
  | 52
  | 60
  | 61
  | 62
  | 72
  | 73
  | 74
  | 75
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 90
  | 91
  | 92
  | 100
  | 101
  | 102
  | 110
  | 111
  | 112
  | 121
  | 130
  | 131
  | 132
  | 140
  | 141
  | 142
  | 143
  | 144
  | 145
  | 146
  | 150
  | 151
  | 163
  | 164
  | 165
  | 166
  | 167
  | 171
  | 172
  | 180
  | 190
  | 191
  | 192
  | 193
  | 200
  | 201
  | 202
  | 211
type AuditLogObjectChangeResponse = {
  key: string | null
  new_value?: any | undefined
  old_value?: any | undefined
}
type AuditLogEntryResponse = {
  id: SnowflakeType
  action_type: AuditLogActionTypes
  user_id: null | SnowflakeType
  target_id: null | SnowflakeType
  changes?: AuditLogObjectChangeResponse[] | undefined
  options?: { [key: string]: string } | undefined
  reason?: string | undefined
}
type IntegrationTypes = 'discord' | 'twitch' | 'youtube' | 'guild_subscription'
type AccountResponse = { id: string; name: string | null }
type PartialDiscordIntegrationResponse = {
  id: SnowflakeType
  type: IntegrationTypes
  name: string | null
  account: AccountResponse
  application_id: SnowflakeType
}
type PartialExternalConnectionIntegrationResponse = {
  id: SnowflakeType
  type: IntegrationTypes
  name: string | null
  account: AccountResponse
}
type PartialGuildSubscriptionIntegrationResponse = {
  id: SnowflakeType
  type: IntegrationTypes
  name: string | null
  account: AccountResponse
}
type EntityMetadataExternalResponse = { location: string }
type ExternalScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: null | SnowflakeType
  creator_id: null | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: GuildScheduledEventEntityTypes
  entity_id: null | SnowflakeType
  recurrence_rule: null | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: (null | ScheduledEventUserResponse) | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
  entity_metadata: EntityMetadataExternalResponse
}
type EntityMetadataStageInstanceResponse = { [key: string]: unknown }
type StageScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: null | SnowflakeType
  creator_id: null | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: GuildScheduledEventEntityTypes
  entity_id: null | SnowflakeType
  recurrence_rule: null | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: (null | ScheduledEventUserResponse) | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
  entity_metadata: null | EntityMetadataStageInstanceResponse
}
type EntityMetadataVoiceResponse = { [key: string]: unknown }
type VoiceScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: null | SnowflakeType
  creator_id: null | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: GuildScheduledEventEntityTypes
  entity_id: null | SnowflakeType
  recurrence_rule: null | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: (null | ScheduledEventUserResponse) | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
  entity_metadata: null | EntityMetadataVoiceResponse
}
type AutomodEventType = 1 | 2
type AutomodActionType = 1 | 2 | 3 | 4
type BlockMessageActionMetadataResponse = { custom_message?: string | undefined }
type BlockMessageActionResponse = {
  type: AutomodActionType
  metadata: BlockMessageActionMetadataResponse
}
type FlagToChannelActionMetadataResponse = { channel_id: SnowflakeType }
type FlagToChannelActionResponse = {
  type: AutomodActionType
  metadata: FlagToChannelActionMetadataResponse
}
type QuarantineUserActionMetadataResponse = { [key: string]: unknown }
type QuarantineUserActionResponse = {
  type: AutomodActionType
  metadata: QuarantineUserActionMetadataResponse
}
type UserCommunicationDisabledActionMetadataResponse = { duration_seconds: number }
type UserCommunicationDisabledActionResponse = {
  type: AutomodActionType
  metadata: UserCommunicationDisabledActionMetadataResponse
}
type AutomodTriggerType = 1 | 3 | 4 | 5 | 6
type AutomodKeywordPresetType = 1 | 2 | 3
type DefaultKeywordListTriggerMetadataResponse = {
  allow_list: string[]
  presets: AutomodKeywordPresetType[]
}
type DefaultKeywordRuleResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  creator_id: SnowflakeType
  name: string
  event_type: AutomodEventType
  actions: (
    | BlockMessageActionResponse
    | FlagToChannelActionResponse
    | QuarantineUserActionResponse
    | UserCommunicationDisabledActionResponse
  )[]
  trigger_type: AutomodTriggerType
  enabled: boolean
  exempt_roles: SnowflakeType[]
  exempt_channels: SnowflakeType[]
  trigger_metadata: DefaultKeywordListTriggerMetadataResponse
}
type KeywordTriggerMetadataResponse = {
  keyword_filter: string[]
  regex_patterns: string[]
  allow_list: string[]
}
type KeywordRuleResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  creator_id: SnowflakeType
  name: string
  event_type: AutomodEventType
  actions: (
    | BlockMessageActionResponse
    | FlagToChannelActionResponse
    | QuarantineUserActionResponse
    | UserCommunicationDisabledActionResponse
  )[]
  trigger_type: AutomodTriggerType
  enabled: boolean
  exempt_roles: SnowflakeType[]
  exempt_channels: SnowflakeType[]
  trigger_metadata: KeywordTriggerMetadataResponse
}
type MLSpamTriggerMetadataResponse = { [key: string]: unknown }
type MLSpamRuleResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  creator_id: SnowflakeType
  name: string
  event_type: AutomodEventType
  actions: (
    | BlockMessageActionResponse
    | FlagToChannelActionResponse
    | QuarantineUserActionResponse
    | UserCommunicationDisabledActionResponse
  )[]
  trigger_type: AutomodTriggerType
  enabled: boolean
  exempt_roles: SnowflakeType[]
  exempt_channels: SnowflakeType[]
  trigger_metadata: MLSpamTriggerMetadataResponse
}
type MentionSpamTriggerMetadataResponse = {
  mention_total_limit: number
  mention_raid_protection_enabled: boolean
}
type MentionSpamRuleResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  creator_id: SnowflakeType
  name: string
  event_type: AutomodEventType
  actions: (
    | BlockMessageActionResponse
    | FlagToChannelActionResponse
    | QuarantineUserActionResponse
    | UserCommunicationDisabledActionResponse
  )[]
  trigger_type: AutomodTriggerType
  enabled: boolean
  exempt_roles: SnowflakeType[]
  exempt_channels: SnowflakeType[]
  trigger_metadata: MentionSpamTriggerMetadataResponse
}
type UserProfileMetadataResponse = {
  keyword_filter: string[]
  regex_patterns: string[]
  allow_list: string[]
}
type UserProfileRuleResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  creator_id: SnowflakeType
  name: string
  event_type: AutomodEventType
  actions: (
    | BlockMessageActionResponse
    | FlagToChannelActionResponse
    | QuarantineUserActionResponse
    | UserCommunicationDisabledActionResponse
  )[]
  trigger_type: AutomodTriggerType
  enabled: boolean
  exempt_roles: SnowflakeType[]
  exempt_channels: SnowflakeType[]
  trigger_metadata: UserProfileMetadataResponse
}
type GuildAuditLogResponse = {
  audit_log_entries: AuditLogEntryResponse[]
  users: UserResponse[]
  integrations: (
    | PartialDiscordIntegrationResponse
    | PartialExternalConnectionIntegrationResponse
    | PartialGuildSubscriptionIntegrationResponse
  )[]
  webhooks: (
    | ApplicationIncomingWebhookResponse
    | ChannelFollowerWebhookResponse
    | GuildIncomingWebhookResponse
  )[]
  guild_scheduled_events: (
    | ExternalScheduledEventResponse
    | StageScheduledEventResponse
    | VoiceScheduledEventResponse
  )[]
  threads: ThreadResponse[]
  application_commands: ApplicationCommandResponse[]
  auto_moderation_rules: (
    | DefaultKeywordRuleResponse
    | KeywordRuleResponse
    | MLSpamRuleResponse
    | MentionSpamRuleResponse
    | UserProfileRuleResponse
    | null
  )[]
}
type AutomodEventTypeInput = 1 | 2
type AutomodActionTypeInput = 1 | 2 | 3 | 4
type BlockMessageActionMetadataInput = { custom_message?: string | null }
type BlockMessageActionInput = {
  type: AutomodActionTypeInput
  metadata?: null | BlockMessageActionMetadataInput
}
type FlagToChannelActionMetadataInput = { channel_id: SnowflakeTypeInput }
type FlagToChannelActionInput = {
  type: AutomodActionTypeInput
  metadata: FlagToChannelActionMetadataInput
}
type QuarantineUserActionMetadataInput = { [key: string]: unknown }
type QuarantineUserActionInput = {
  type: AutomodActionTypeInput
  metadata?: null | QuarantineUserActionMetadataInput
}
type UserCommunicationDisabledActionMetadataInput = { duration_seconds?: number | null }
type UserCommunicationDisabledActionInput = {
  type: AutomodActionTypeInput
  metadata: UserCommunicationDisabledActionMetadataInput
}
type AutomodTriggerTypeInput = 1 | 3 | 4 | 5 | 6
type AutomodKeywordPresetTypeInput = 1 | 2 | 3
type DefaultKeywordListTriggerMetadataInput = {
  allow_list?: string[] | null
  presets?: AutomodKeywordPresetTypeInput[] | null
}
type DefaultKeywordListUpsertRequestInput = {
  name: string
  event_type: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type: AutomodTriggerTypeInput
  trigger_metadata: DefaultKeywordListTriggerMetadataInput
}
type KeywordTriggerMetadataInput = {
  keyword_filter?: string[] | null
  regex_patterns?: string[] | null
  allow_list?: string[] | null
}
type KeywordUpsertRequestInput = {
  name: string
  event_type: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type: AutomodTriggerTypeInput
  trigger_metadata?: null | KeywordTriggerMetadataInput
}
type MLSpamTriggerMetadataInput = { [key: string]: unknown }
type MLSpamUpsertRequestInput = {
  name: string
  event_type: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type: AutomodTriggerTypeInput
  trigger_metadata?: null | MLSpamTriggerMetadataInput
}
type MentionSpamTriggerMetadataInput = {
  mention_total_limit?: number | null
  mention_raid_protection_enabled?: boolean | null
}
type MentionSpamUpsertRequestInput = {
  name: string
  event_type: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type: AutomodTriggerTypeInput
  trigger_metadata?: null | MentionSpamTriggerMetadataInput
}
type UserProfileMetadataInput = {
  keyword_filter?: string[] | null
  regex_patterns?: string[] | null
  allow_list?: string[] | null
}
type UserProfileUpsertRequestInput = {
  name: string
  event_type: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type: AutomodTriggerTypeInput
  trigger_metadata: UserProfileMetadataInput
}
type DefaultKeywordListUpsertRequestPartialInput = {
  name?: string
  event_type?: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type?: AutomodTriggerTypeInput
  trigger_metadata?: DefaultKeywordListTriggerMetadataInput
}
type KeywordUpsertRequestPartialInput = {
  name?: string
  event_type?: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type?: AutomodTriggerTypeInput
  trigger_metadata?: null | KeywordTriggerMetadataInput
}
type MLSpamUpsertRequestPartialInput = {
  name?: string
  event_type?: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type?: AutomodTriggerTypeInput
  trigger_metadata?: null | MLSpamTriggerMetadataInput
}
type MentionSpamUpsertRequestPartialInput = {
  name?: string
  event_type?: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type?: AutomodTriggerTypeInput
  trigger_metadata?: null | MentionSpamTriggerMetadataInput
}
type UserProfileUpsertRequestPartialInput = {
  name?: string
  event_type?: AutomodEventTypeInput
  actions?:
    | (
        | BlockMessageActionInput
        | FlagToChannelActionInput
        | QuarantineUserActionInput
        | UserCommunicationDisabledActionInput
      )[]
    | null
  enabled?: boolean | null
  exempt_roles?: SnowflakeTypeInput[] | null
  exempt_channels?: SnowflakeTypeInput[] | null
  trigger_type?: AutomodTriggerTypeInput
  trigger_metadata?: UserProfileMetadataInput
}
type GuildBanResponse = { user: UserResponse; reason: string | null }
type BanUserFromGuildRequestInput = {
  delete_message_seconds?: number | null
  delete_message_days?: number | null
}
type UnbanUserFromGuildRequestInput = { [key: string]: unknown }
type BulkBanUsersRequestInput = {
  user_ids: SnowflakeTypeInput[]
  delete_message_seconds?: number | null
}
type BulkBanUsersResponse = { banned_users: SnowflakeType[]; failed_users: SnowflakeType[] }
type CreateOrUpdateThreadTagRequestInput = {
  name: string
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
  moderated?: boolean | null
}
type CreateGuildChannelRequestInput = {
  type?: null | ChannelTypesInput
  name: string
  position?: number | null
  topic?: string | null
  bitrate?: number | null
  user_limit?: number | null
  nsfw?: boolean | null
  rate_limit_per_user?: number | null
  parent_id?: null | SnowflakeTypeInput
  permission_overwrites?: ChannelPermissionOverwriteRequestInput[] | null
  rtc_region?: string | null
  video_quality_mode?: null | VideoQualityModesInput
  default_auto_archive_duration?: null | ThreadAutoArchiveDurationInput
  default_reaction_emoji?: null | UpdateDefaultReactionEmojiRequestInput
  default_thread_rate_limit_per_user?: number | null
  default_sort_order?: null | ThreadSortOrderInput
  default_forum_layout?: null | ForumLayoutInput
  default_tag_setting?: null | ThreadSearchTagSettingInput
  available_tags?: (null | CreateOrUpdateThreadTagRequestInput)[] | null
}
type GuildIncidentActionsRequestInput = {
  invites_disabled_until?: string | null
  dms_disabled_until?: string | null
}
type IntegrationApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: null | ApplicationTypes
  cover_image?: string | undefined
  primary_sku_id?: SnowflakeType | undefined
  flags: number
  flags_new: string
  bot?: UserResponse | undefined
}
type DiscordIntegrationResponse = {
  type: IntegrationTypes
  name: string | null
  account: AccountResponse
  enabled: boolean
  id: SnowflakeType
  application: IntegrationApplicationResponse
  scopes: OAuth2Scopes[]
  user?: UserResponse | undefined
}
type IntegrationExpireBehaviorTypes = 0 | 1
type IntegrationExpireGracePeriodTypes = 1 | 3 | 7 | 14 | 30
type ExternalConnectionIntegrationResponse = {
  type: IntegrationTypes
  name: string | null
  account: AccountResponse
  enabled: boolean
  id: string
  user: UserResponse
  revoked?: boolean | undefined
  expire_behavior?: IntegrationExpireBehaviorTypes | undefined
  expire_grace_period?: IntegrationExpireGracePeriodTypes | undefined
  subscriber_count?: number | undefined
  synced_at?: string | undefined
  role_id?: (null | SnowflakeType) | undefined
  syncing?: boolean | undefined
  enable_emoticons?: boolean | undefined
}
type GuildSubscriptionIntegrationResponse = {
  type: IntegrationTypes
  name: string | null
  account: AccountResponse
  enabled: boolean
  id: SnowflakeType
}
type PrivateGuildMemberResponse = {
  avatar: string | null
  avatar_decoration_data?: (null | UserAvatarDecorationResponse) | undefined
  banner: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: SnowflakeType[]
  collectibles?: (null | UserCollectiblesResponse) | undefined
  user: UserResponse
  mute: boolean
  deaf: boolean
  permissions?: string | undefined
}
type BotAddGuildMemberRequestInput = {
  nick?: string | null
  roles?: SnowflakeTypeInput[] | null
  mute?: boolean | null
  deaf?: boolean | null
  access_token: string
  flags?: number | null
}
type SortingModeInput = 'relevance' | 'timestamp'
type SearchMessageResponse = {
  type: MessageType
  content: string
  mentions: UserResponse[]
  mention_roles: SnowflakeType[]
  attachments: MessageAttachmentResponse[]
  embeds: MessageEmbedResponse[]
  timestamp: string
  edited_timestamp: string | null
  flags: number
  components: (
    | ActionRowComponentResponse
    | ContainerComponentResponse
    | FileComponentResponse
    | MediaGalleryComponentResponse
    | SectionComponentResponse
    | SeparatorComponentResponse
    | TextDisplayComponentResponse
  )[]
  stickers?: (GuildStickerResponse | StandardStickerResponse)[] | undefined
  sticker_items?: MessageStickerItemResponse[] | undefined
  id: SnowflakeType
  channel_id: SnowflakeType
  author: UserResponse
  pinned: boolean
  mention_everyone: boolean
  tts: boolean
  call?: MessageCallResponse | undefined
  activity?: MessageActivityResponse | undefined
  application?: BasicApplicationResponseWithBot | undefined
  application_id?: SnowflakeType | undefined
  interaction?: MessageInteractionResponse | undefined
  nonce?: (bigint | string) | undefined
  webhook_id?: SnowflakeType | undefined
  message_reference?: MessageReferenceResponse | undefined
  thread?: ThreadResponse | undefined
  mention_channels?: MessageMentionChannelResponse[] | undefined
  role_subscription_data?: MessageRoleSubscriptionDataResponse | undefined
  purchase_notification?: PurchaseNotificationResponse | undefined
  position?: number | undefined
  resolved?: ResolvedObjectsResponse | undefined
  poll?: PollResponse | undefined
  shared_client_theme?: CustomClientThemeResponse | undefined
  interaction_metadata?:
    | (
        | ApplicationCommandInteractionMetadataResponse
        | MessageComponentInteractionMetadataResponse
        | ModalSubmitInteractionMetadataResponse
      )
    | undefined
  message_snapshots?: MessageSnapshotResponse[] | undefined
  lobby_member?: MessageLobbyMemberResponse | undefined
  actor?: UserResponse | undefined
  reactions?: MessageReactionResponse[] | undefined
  referenced_message?: (null | BasicMessageResponse) | undefined
  hit: boolean
  restriction_count?: number | undefined
  author_restriction_count?: number | undefined
  source_author_restriction_count?: number | undefined
  forward_source_author_id?: SnowflakeType | undefined
}
type GuildSearchResponse = {
  messages: SearchMessageResponse[][]
  doing_deep_historical_index: boolean
  total_results: number
  threads?: (ThreadResponse[] | null) | undefined
  members?: (ThreadMemberResponse[] | null) | undefined
  documents_indexed?: (number | null) | undefined
}
type WelcomeMessageResponse = { author_ids: SnowflakeType[]; message: string }
type NewMemberActionType = 0 | 1
type SettingsEmojiResponse = { id: null | SnowflakeType; name: string | null; animated: boolean }
type NewMemberActionResponse = {
  channel_id: SnowflakeType
  action_type: NewMemberActionType
  title: string
  description: string
  emoji?: SettingsEmojiResponse | undefined
  icon?: string | undefined
}
type ResourceChannelResponse = {
  channel_id: SnowflakeType
  title: string
  emoji?: SettingsEmojiResponse | undefined
  icon?: string | undefined
  description: string
}
type GuildHomeSettingsResponse = {
  guild_id: SnowflakeType
  enabled: boolean
  welcome_message?: WelcomeMessageResponse | undefined
  new_member_actions: NewMemberActionResponse[]
  resource_channels: ResourceChannelResponse[]
}
type OnboardingPromptOptionResponse = {
  id: SnowflakeType
  title: string
  description: string
  emoji: SettingsEmojiResponse
  role_ids: SnowflakeType[]
  channel_ids: SnowflakeType[]
}
type OnboardingPromptType = 0 | 1
type OnboardingPromptResponse = {
  id: SnowflakeType
  title: string
  options: OnboardingPromptOptionResponse[]
  single_select: boolean
  required: boolean
  in_onboarding: boolean
  type: OnboardingPromptType
}
type GuildOnboardingMode = 0 | 1
type UserGuildOnboardingResponse = {
  guild_id: SnowflakeType
  prompts: OnboardingPromptResponse[]
  default_channel_ids: SnowflakeType[]
  enabled: boolean
  mode: GuildOnboardingMode
}
type OnboardingPromptOptionRequestInput = {
  id?: null | SnowflakeTypeInput
  title: string
  description?: string | null
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
  emoji_animated?: boolean | null
  role_ids?: SnowflakeTypeInput[] | null
  channel_ids?: SnowflakeTypeInput[] | null
}
type OnboardingPromptTypeInput = 0 | 1
type UpdateOnboardingPromptRequestInput = {
  title: string
  options: OnboardingPromptOptionRequestInput[]
  single_select?: boolean | null
  required?: boolean | null
  in_onboarding?: boolean | null
  type?: null | OnboardingPromptTypeInput
  id: SnowflakeTypeInput
}
type GuildOnboardingModeInput = 0 | 1
type UpdateGuildOnboardingRequestInput = {
  prompts?: UpdateOnboardingPromptRequestInput[] | null
  enabled?: boolean | null
  default_channel_ids?: SnowflakeTypeInput[] | null
  mode?: null | GuildOnboardingModeInput
}
type GuildOnboardingResponse = {
  guild_id: SnowflakeType
  prompts: OnboardingPromptResponse[]
  default_channel_ids: SnowflakeType[]
  enabled: boolean
  mode: GuildOnboardingMode
}
type GuildPreviewResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string | null
  home_header: string | null
  splash: string | null
  discovery_splash: string | null
  features: GuildFeatures[]
  approximate_member_count: number
  approximate_presence_count: number
  emojis: EmojiResponse[]
  stickers: GuildStickerResponse[]
}
type GuildPruneResponse = { pruned: number | null }
type PruneGuildRequestInput = {
  days?: number | null
  compute_prune_count?: boolean | null
  include_roles?: string | SnowflakeTypeInput[] | null
}
type VoiceRegionResponse = {
  id: string
  name: string
  custom: boolean
  deprecated: boolean
  optimal: boolean
}
type GuildJoinRequestApplicationStatus = 'STARTED' | 'SUBMITTED' | 'REJECTED' | 'APPROVED'
type GuildMemberVerificationFormFieldType = 'TERMS' | 'TEXT_INPUT' | 'PARAGRAPH' | 'MULTIPLE_CHOICE'
type MultipleChoiceFormFieldResponse = {
  field_type: GuildMemberVerificationFormFieldType
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  choices: string[]
  response?: number | undefined
}
type ParagraphFormFieldResponse = {
  field_type: GuildMemberVerificationFormFieldType
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  placeholder?: string | undefined
  response?: string | undefined
}
type TermsFormFieldResponse = {
  field_type: GuildMemberVerificationFormFieldType
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  values: string[]
  response?: boolean | undefined
}
type TextInputFormFieldResponse = {
  field_type: GuildMemberVerificationFormFieldType
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  placeholder?: string | undefined
  response?: string | undefined
}
type GuildJoinRequestResponse = {
  id: SnowflakeType
  created_at: string
  reviewed_at: string | null
  application_status: null | GuildJoinRequestApplicationStatus
  rejection_reason: string | null
  guild_id: SnowflakeType
  user_id: SnowflakeType
  user?: (null | UserResponse) | undefined
  form_responses?:
    | (
        | (
            | MultipleChoiceFormFieldResponse
            | ParagraphFormFieldResponse
            | TermsFormFieldResponse
            | TextInputFormFieldResponse
          )[]
        | null
      )
    | undefined
  actioned_by_user?: (null | UserResponse) | undefined
}
type GuildJoinRequestsListResponse = {
  total?: number | undefined
  guild_join_requests?: GuildJoinRequestResponse[] | undefined
}
type GuildJoinRequestApplicationStatusInput = 'STARTED' | 'SUBMITTED' | 'REJECTED' | 'APPROVED'
type RoleColorsInput = {
  primary_color?: number | null
  secondary_color?: number | null
  tertiary_color?: number | null
}
type CreateRoleRequestInput = {
  name?: string | null
  permissions?: number | null
  color?: number | null
  colors?: null | RoleColorsInput
  hoist?: boolean | null
  mentionable?: boolean | null
  icon?: string | null
  unicode_emoji?: string | null
}
type UpdateRolePositionsRequestInput = { id?: null | SnowflakeTypeInput; position?: number | null }
type UpdateRoleRequestPartialInput = {
  name?: string | null
  permissions?: number | null
  color?: number | null
  colors?: null | RoleColorsInput
  hoist?: boolean | null
  mentionable?: boolean | null
  icon?: string | null
  unicode_emoji?: string | null
}
type GuildScheduledEventPrivacyLevelsInput = 2
type GuildScheduledEventEntityTypesInput = 0 | 1 | 2 | 3
type RecurrenceRuleFrequenciesInput = 3 | 2 | 1 | 0
type RecurrenceRuleWeekdaysInput = 0 | 1 | 2 | 3 | 4 | 5 | 6
type ByNWeekdayInput = { n: number; day: RecurrenceRuleWeekdaysInput }
type RecurrenceRuleMonthsInput = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type RecurrenceRuleInput = {
  start: string
  end?: string | null
  frequency: RecurrenceRuleFrequenciesInput
  interval?: number | null
  by_weekday?: RecurrenceRuleWeekdaysInput[] | null
  by_n_weekday?: ByNWeekdayInput[] | null
  by_month?: RecurrenceRuleMonthsInput[] | null
  by_month_day?: number[] | null
  by_year_day?: number[] | null
  count?: number | null
}
type EntityMetadataExternalInput = { location: string }
type ExternalScheduledEventCreateRequestInput = {
  name: string
  description?: string | null
  image?: string | null
  scheduled_start_time: string
  scheduled_end_time?: string | null
  privacy_level: GuildScheduledEventPrivacyLevelsInput
  entity_type: GuildScheduledEventEntityTypesInput
  channel_id?: null | SnowflakeTypeInput
  recurrence_rule?: null | RecurrenceRuleInput
  entity_metadata: EntityMetadataExternalInput
}
type EntityMetadataStageInstanceInput = { [key: string]: unknown }
type StageScheduledEventCreateRequestInput = {
  name: string
  description?: string | null
  image?: string | null
  scheduled_start_time: string
  scheduled_end_time?: string | null
  privacy_level: GuildScheduledEventPrivacyLevelsInput
  entity_type: GuildScheduledEventEntityTypesInput
  channel_id?: null | SnowflakeTypeInput
  recurrence_rule?: null | RecurrenceRuleInput
  entity_metadata?: null | EntityMetadataStageInstanceInput
}
type EntityMetadataVoiceInput = { [key: string]: unknown }
type VoiceScheduledEventCreateRequestInput = {
  name: string
  description?: string | null
  image?: string | null
  scheduled_start_time: string
  scheduled_end_time?: string | null
  privacy_level: GuildScheduledEventPrivacyLevelsInput
  entity_type: GuildScheduledEventEntityTypesInput
  channel_id?: null | SnowflakeTypeInput
  recurrence_rule?: null | RecurrenceRuleInput
  entity_metadata?: null | EntityMetadataVoiceInput
}
type GuildScheduledEventStatusesInput = 1 | 2 | 3 | 4
type ExternalScheduledEventPatchRequestPartialInput = {
  status?: null | GuildScheduledEventStatusesInput
  name?: string
  description?: string | null
  image?: string | null
  scheduled_start_time?: string
  scheduled_end_time?: string | null
  entity_type?: null | GuildScheduledEventEntityTypesInput
  privacy_level?: GuildScheduledEventPrivacyLevelsInput
  channel_id?: null | SnowflakeTypeInput
  recurrence_rule?: null | RecurrenceRuleInput
  entity_metadata?: EntityMetadataExternalInput
}
type StageScheduledEventPatchRequestPartialInput = {
  status?: null | GuildScheduledEventStatusesInput
  name?: string
  description?: string | null
  image?: string | null
  scheduled_start_time?: string
  scheduled_end_time?: string | null
  entity_type?: null | GuildScheduledEventEntityTypesInput
  privacy_level?: GuildScheduledEventPrivacyLevelsInput
  channel_id?: null | SnowflakeTypeInput
  recurrence_rule?: null | RecurrenceRuleInput
  entity_metadata?: null | EntityMetadataStageInstanceInput
}
type VoiceScheduledEventPatchRequestPartialInput = {
  status?: null | GuildScheduledEventStatusesInput
  name?: string
  description?: string | null
  image?: string | null
  scheduled_start_time?: string
  scheduled_end_time?: string | null
  entity_type?: null | GuildScheduledEventEntityTypesInput
  privacy_level?: GuildScheduledEventPrivacyLevelsInput
  channel_id?: null | SnowflakeTypeInput
  recurrence_rule?: null | RecurrenceRuleInput
  entity_metadata?: null | EntityMetadataVoiceInput
}
type GuildScheduledEventExceptionCreateRequestInput = {
  scheduled_start_time?: string | null
  scheduled_end_time?: string | null
  original_scheduled_start_time: string
  is_canceled?: boolean | null
}
type GuildScheduledEventExceptionPatchRequestPartialInput = {
  scheduled_start_time?: string | null
  scheduled_end_time?: string | null
  is_canceled?: boolean | null
}
type ScheduledEventUserCountResponse = {
  guild_scheduled_event_count: number
  guild_scheduled_event_exception_counts: { [key: string]: number }
}
type SoundboardSoundResponse = {
  name: string
  sound_id: SnowflakeType
  volume: number
  emoji_id: null | SnowflakeType
  emoji_name: string | null
  guild_id?: SnowflakeType | undefined
  available: boolean
  user?: UserResponse | undefined
}
type ListGuildSoundboardSoundsResponse = { items: SoundboardSoundResponse[] }
type SoundboardCreateRequestInput = {
  name: string
  volume?: number | null
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
  sound: string
}
type SoundboardPatchRequestPartialInput = {
  name?: string
  volume?: number | null
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
}
type VanityURLErrorResponse = { message: string; code: number }
type VanityURLResponse = {
  code: string | null
  uses: number
  error?: (null | VanityURLErrorResponse) | undefined
}
type VoiceStateResponse = {
  channel_id: null | SnowflakeType
  deaf: boolean
  guild_id: null | SnowflakeType
  member?: GuildMemberResponse | undefined
  mute: boolean
  request_to_speak_timestamp: string | null
  suppress: boolean
  self_stream: boolean | null
  self_deaf: boolean
  self_mute: boolean
  self_video: boolean
  session_id: string
  user_id: SnowflakeType
}
type UpdateSelfVoiceStateRequestPartialInput = {
  request_to_speak_timestamp?: string | null
  suppress?: boolean | null
  channel_id?: null | SnowflakeTypeInput
}
type UpdateVoiceStateRequestPartialInput = {
  suppress?: boolean | null
  channel_id?: null | SnowflakeTypeInput
}
type GuildWelcomeScreenChannelResponse = {
  channel_id: SnowflakeType
  description: string
  emoji_id: null | SnowflakeType
  emoji_name: string | null
}
type GuildWelcomeScreenResponse = {
  description: string | null
  welcome_channels: GuildWelcomeScreenChannelResponse[]
}
type GuildWelcomeChannelInput = {
  channel_id: SnowflakeTypeInput
  description: string
  emoji_id?: null | SnowflakeTypeInput
  emoji_name?: string | null
}
type WelcomeScreenPatchRequestPartialInput = {
  description?: string | null
  welcome_channels?: GuildWelcomeChannelInput[] | null
  enabled?: boolean | null
}
type WidgetSettingsResponse = { enabled: boolean; channel_id: null | SnowflakeType }
type WidgetChannel = { id: SnowflakeType; name: string; position: number }
type WidgetUserDiscriminator = '0000'
type WidgetActivity = { name: string }
type WidgetMember = {
  id: string
  username: string
  discriminator: WidgetUserDiscriminator
  avatar: null
  status: string
  avatar_url: string
  activity?: WidgetActivity | undefined
  deaf?: boolean | undefined
  mute?: boolean | undefined
  self_deaf?: boolean | undefined
  self_mute?: boolean | undefined
  suppress?: boolean | undefined
  channel_id?: SnowflakeType | undefined
}
type WidgetResponse = {
  id: SnowflakeType
  name: string
  instant_invite: string | null
  channels: WidgetChannel[]
  members: WidgetMember[]
  presence_count: number
}
type WidgetImageStylesInput = 'shield' | 'banner1' | 'banner2' | 'banner3' | 'banner4'
type InteractionCallbackTypesInput = 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12 | 13
type InteractionApplicationCommandAutocompleteCallbackIntegerDataInput = {
  choices?: (null | ApplicationCommandOptionIntegerChoiceInput)[] | null
}
type InteractionApplicationCommandAutocompleteCallbackNumberDataInput = {
  choices?: (null | ApplicationCommandOptionNumberChoiceInput)[] | null
}
type InteractionApplicationCommandAutocompleteCallbackStringDataInput = {
  choices?: (null | ApplicationCommandOptionStringChoiceInput)[] | null
}
type ApplicationCommandAutocompleteCallbackRequestInput = {
  type: InteractionCallbackTypesInput
  data:
    | InteractionApplicationCommandAutocompleteCallbackIntegerDataInput
    | InteractionApplicationCommandAutocompleteCallbackNumberDataInput
    | InteractionApplicationCommandAutocompleteCallbackStringDataInput
}
type IncomingWebhookInteractionRequestInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  attachments?: MessageAttachmentRequestInput[] | null
  poll?: null | PollCreateRequestInput
  tts?: boolean | null
  flags?: number | null
}
type CreateMessageInteractionCallbackRequestInput = {
  type: InteractionCallbackTypesInput
  data?: null | IncomingWebhookInteractionRequestInput
}
type LaunchActivityInteractionCallbackRequestInput = { type: InteractionCallbackTypesInput }
type TextInputStyleTypesInput = 1 | 2
type TextInputComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  style: TextInputStyleTypesInput
  label?: string | null
  value?: string | null
  placeholder?: string | null
  required?: boolean | null
  min_length?: number | null
  max_length?: number | null
}
type ActionRowComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  components: TextInputComponentForModalRequestInput[]
}
type ChannelSelectComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: ChannelSelectDefaultValueInput[] | null
  channel_types?: ChannelTypesInput[] | null
}
type CheckboxComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  default?: boolean | null
}
type CheckboxGroupOptionForRequestInput = {
  label: string
  value: string
  description?: string | null
  default?: boolean | null
}
type CheckboxGroupComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  min_values?: number | null
  max_values?: number | null
  required?: boolean | null
  options: CheckboxGroupOptionForRequestInput[]
}
type FileUploadComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  min_values?: number | null
  max_values?: number | null
  required?: boolean | null
  file_types?: string[] | null
}
type MentionableSelectComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: (RoleSelectDefaultValueInput | UserSelectDefaultValueInput)[] | null
}
type RadioGroupOptionForRequestInput = {
  label: string
  value: string
  description?: string | null
  default?: boolean | null
}
type RadioGroupComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  required?: boolean | null
  options: RadioGroupOptionForRequestInput[]
}
type RoleSelectComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: RoleSelectDefaultValueInput[] | null
}
type StringSelectComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  options: StringSelectOptionForRequestInput[]
}
type UserSelectComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  custom_id: string
  placeholder?: string | null
  min_values?: number | null
  max_values?: number | null
  disabled?: boolean | null
  required?: boolean | null
  default_values?: UserSelectDefaultValueInput[] | null
}
type LabelComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  label: string
  description?: string | null
  component:
    | ChannelSelectComponentForModalRequestInput
    | CheckboxComponentForModalRequestInput
    | CheckboxGroupComponentForModalRequestInput
    | FileUploadComponentForModalRequestInput
    | MentionableSelectComponentForModalRequestInput
    | RadioGroupComponentForModalRequestInput
    | RoleSelectComponentForModalRequestInput
    | StringSelectComponentForModalRequestInput
    | TextInputComponentForModalRequestInput
    | UserSelectComponentForModalRequestInput
}
type TextDisplayComponentForModalRequestInput = {
  type: MessageComponentTypesInput
  id?: number | null
  content: string
}
type ModalInteractionCallbackRequestDataInput = {
  custom_id: string
  title: string
  components: (
    | ActionRowComponentForModalRequestInput
    | LabelComponentForModalRequestInput
    | TextDisplayComponentForModalRequestInput
  )[]
}
type ModalInteractionCallbackRequestInput = {
  type: InteractionCallbackTypesInput
  data: ModalInteractionCallbackRequestDataInput
}
type PongInteractionCallbackRequestInput = { type: InteractionCallbackTypesInput }
type SKUIneligibilityReasonInput = 0 | 1 | 2
type SocialLayerSKUPurchaseEligibilityCallbackDataInput = {
  eligible: boolean
  ineligible_reason?: null | SKUIneligibilityReasonInput
  ineligible_reason_description?: string | null
}
type SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput = {
  type: InteractionCallbackTypesInput
  data: SocialLayerSKUPurchaseEligibilityCallbackDataInput
}
type IncomingWebhookUpdateForInteractionCallbackRequestPartialInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  attachments?: MessageAttachmentRequestInput[] | null
  flags?: number | null
}
type UpdateMessageInteractionCallbackRequestInput = {
  type: InteractionCallbackTypesInput
  data?: null | IncomingWebhookUpdateForInteractionCallbackRequestPartialInput
}
type InteractionResponse = {
  id: SnowflakeType
  type: InteractionTypes
  activity_instance_id?: (string | null) | undefined
  response_message_id?: SnowflakeType | undefined
  response_message_loading?: boolean | undefined
  response_message_ephemeral?: boolean | undefined
  channel_id?: SnowflakeType | undefined
  guild_id?: SnowflakeType | undefined
}
type InteractionCallbackTypes = 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12 | 13
type CreateMessageInteractionCallbackResponse = {
  type: InteractionCallbackTypes
  message: MessageResponse
}
type ActivityInstanceCallbackResponse = { id: string }
type LaunchActivityInteractionCallbackResponse = {
  type: InteractionCallbackTypes
  activity_instance: ActivityInstanceCallbackResponse
}
type UpdateMessageInteractionCallbackResponse = {
  type: InteractionCallbackTypes
  message: MessageResponse
}
type InteractionCallbackResponse = {
  interaction: InteractionResponse
  resource?:
    | (
        | CreateMessageInteractionCallbackResponse
        | LaunchActivityInteractionCallbackResponse
        | UpdateMessageInteractionCallbackResponse
      )
    | undefined
}
type TargetUsersJobStatusTypes = 0 | 1 | 2 | 3
type TargetUsersJobStatusResponse = {
  status: TargetUsersJobStatusTypes
  total_users: UInt32Type
  processed_users: UInt32Type
  created_at: string | null
  completed_at: string | null
  error_message: string | null
}
type LobbyMemberResponse = {
  id: SnowflakeType
  metadata: { [key: string]: string } | null
  flags: number
  additional_name?: string | undefined
}
type LobbyResponse = {
  id: SnowflakeType
  application_id: SnowflakeType
  metadata: { [key: string]: string } | null
  members: LobbyMemberResponse[]
  linked_channel?: GuildChannelResponse | undefined
  flags: UInt32Type
  override_event_webhooks_url?: (string | null) | undefined
}
type LobbyMemberRequestInput = {
  id: SnowflakeTypeInput
  metadata?: { [key: string]: string } | null
  flags?: null | 1
  additional_name?: string | null
}
type LobbyGuildInviteResponse = { code: string }
type BulkLobbyMemberRequestInput = {
  id: SnowflakeTypeInput
  metadata?: { [key: string]: string } | null
  flags?: null | 1
  additional_name?: string | null
  remove_member?: boolean | null
}
type LobbyMessageResponse = {
  id: SnowflakeType
  type: MessageType
  content: string
  lobby_id: SnowflakeType
  channel_id: SnowflakeType
  author: UserResponse
  lobby_member?: MessageLobbyMemberResponse | undefined
  metadata?: { [key: string]: string } | undefined
  moderation_metadata?: { [key: string]: string } | undefined
  flags: number
  application_id?: SnowflakeType | undefined
}
type SDKMessageRequestInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  sticker_ids?: SnowflakeTypeInput[] | null
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  flags?: number | null
  attachments?: MessageAttachmentRequestInput[] | null
  poll?: null | PollCreateRequestInput
  shared_client_theme?: null | CustomClientThemeShareRequestInput
  message_reference?: null | MessageReferenceRequestInput
  nonce?: bigint | string | null
  enforce_nonce?: boolean | null
  tts?: boolean | null
}
type OAuth2GetAuthorizationResponse = {
  application: ApplicationResponse
  expires: string
  scopes: OAuth2Scopes[]
  user?: UserResponse | undefined
}
type OAuth2Key = { kty: string; use: string; kid: string; n: string; e: string; alg: string }
type OAuth2GetKeys = { keys: OAuth2Key[] }
type OAuth2GetOpenIDConnectUserInfoResponse = {
  sub: string
  email?: (string | null) | undefined
  email_verified?: boolean | undefined
  preferred_username?: string | undefined
  nickname?: (string | null) | undefined
  picture?: string | undefined
  locale?: string | undefined
}
type ApplicationIdentityProviderAuthTypeInput =
  | 'OIDC'
  | 'EPIC_ONLINE_SERVICES_ACCESS_TOKEN'
  | 'EPIC_ONLINE_SERVICES_ID_TOKEN'
  | 'STEAM_SESSION_TICKET'
  | 'UNITY_SERVICES_ID_TOKEN'
  | 'DISCORD_BOT_ISSUED_ACCESS_TOKEN'
  | 'APPLE_ID_TOKEN'
  | 'PLAYSTATION_NETWORK_ID_TOKEN'
type ProvisionalTokenResponse = {
  token_type: string
  access_token: string
  expires_in: number
  scope: string
  id_token: string
  refresh_token?: (string | null) | undefined
  scopes?: (string[] | null) | undefined
  expires_at_s?: (number | null) | undefined
}
type SubscriptionResponseStatusType = 0 | 1 | 2
type SubscriptionResponse = {
  id: SnowflakeType
  user_id: SnowflakeType
  sku_ids: SnowflakeType[]
  renewal_sku_ids: SnowflakeType[] | null
  entitlement_ids: SnowflakeType[]
  current_period_start: string
  current_period_end: string
  status: SubscriptionResponseStatusType
  canceled_at: string | null
  country?: (string | null) | undefined
}
type StageInstancesPrivacyLevelsInput = 1 | 2
type StageInstancesPrivacyLevels = 1 | 2
type StageInstanceResponse = {
  guild_id: SnowflakeType
  channel_id: SnowflakeType
  topic: string
  privacy_level: StageInstancesPrivacyLevels
  id: SnowflakeType
  discoverable_disabled: boolean
  guild_scheduled_event_id: null | SnowflakeType
}
type StickerPackResponse = {
  id: SnowflakeType
  sku_id: SnowflakeType
  name: string
  description: string | null
  stickers: StandardStickerResponse[]
  cover_sticker_id?: SnowflakeType | undefined
  banner_asset_id?: SnowflakeType | undefined
}
type StickerPackCollectionResponse = { sticker_packs: StickerPackResponse[] }
type PremiumTypes = 0 | 1 | 2 | 3
type UserPIIResponse = {
  id: SnowflakeType
  username: string
  avatar: string | null
  discriminator: string
  public_flags: number
  flags: Int53Type
  bot?: boolean | undefined
  system?: boolean | undefined
  banner?: (string | null) | undefined
  accent_color?: (number | null) | undefined
  global_name: string | null
  avatar_decoration_data?: (null | UserAvatarDecorationResponse) | undefined
  collectibles?: (null | UserCollectiblesResponse) | undefined
  primary_guild?: (null | UserPrimaryGuildResponse) | undefined
  mfa_enabled: boolean
  locale: AvailableLocalesEnum
  premium_type?: PremiumTypes | undefined
  email?: (string | null) | undefined
  verified?: boolean | undefined
}
type BotAccountPatchRequestInput = {
  username: string
  avatar?: string | null
  banner?: string | null
}
type ApplicationUserRoleConnectionResponse = {
  platform_name?: string | undefined
  platform_username?: (string | null) | undefined
  metadata?: { [key: string]: string } | undefined
}
type UpdateApplicationUserRoleConnectionRequestInput = {
  platform_name?: string | null
  platform_username?: string | null
  metadata?: { [key: string]: string } | null
}
type CreatePrivateChannelRequestInput = {
  recipient_id?: null | SnowflakeTypeInput
  access_tokens?: string[] | null
  nicks?: { [key: string]: string | null } | null
}
type ConnectedAccountProviders =
  | 'battlenet'
  | 'bluesky'
  | 'bungie'
  | 'ebay'
  | 'epicgames'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'letterboxd'
  | 'mastodon'
  | 'leagueoflegends'
  | 'paypal'
  | 'playstation'
  | 'reddit'
  | 'riotgames'
  | 'roblox'
  | 'skype'
  | 'spotify'
  | 'steam'
  | 'tiktok'
  | 'twitch'
  | 'twitter'
  | 'xbox'
  | 'youtube'
  | 'domain'
type ConnectedAccountGuildResponse = { id: SnowflakeType; name: string; icon: string | null }
type ConnectedAccountIntegrationResponse = {
  id: string
  type: IntegrationTypes
  account: AccountResponse
  guild: ConnectedAccountGuildResponse
}
type ConnectedAccountVisibility = 0 | 1
type ConnectedAccountResponse = {
  id: string
  name: string | null
  type: ConnectedAccountProviders
  friend_sync: boolean
  integrations?: ConnectedAccountIntegrationResponse[] | undefined
  show_activity: boolean
  two_way_link: boolean
  verified: boolean
  visibility: ConnectedAccountVisibility
  revoked?: boolean | undefined
}
type MyGuildResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  banner: string | null
  owner: boolean
  permissions: string
  features: GuildFeatures[]
  approximate_member_count?: (number | null) | undefined
  approximate_presence_count?: (number | null) | undefined
}
type IncomingWebhookRequestPartialInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  attachments?: MessageAttachmentRequestInput[] | null
  poll?: null | PollCreateRequestInput
  tts?: boolean | null
  flags?: number | null
  username?: string | null
  avatar_url?: string | null
  thread_name?: string | null
  applied_tags?: SnowflakeTypeInput[] | null
}
type IncomingWebhookUpdateRequestPartialInput = {
  content?: string | null
  embeds?: RichEmbedInput[] | null
  allowed_mentions?: null | MessageAllowedMentionsRequestInput
  components?:
    | (
        | ActionRowComponentForMessageRequestInput
        | ContainerComponentForMessageRequestInput
        | FileComponentForMessageRequestInput
        | MediaGalleryComponentForMessageRequestInput
        | SectionComponentForMessageRequestInput
        | SeparatorComponentForMessageRequestInput
        | TextDisplayComponentForMessageRequestInput
      )[]
    | null
  attachments?: MessageAttachmentRequestInput[] | null
  poll?: null | PollCreateRequestInput
  flags?: number | null
}
type GithubUserInput = { id: number; login: string; html_url: string; avatar_url: string }
type GithubCommentInput = {
  id: number
  html_url: string
  user: GithubUserInput
  commit_id?: string | null
  body: string
}
type GithubIssueInput = {
  id: number
  number: number
  html_url: string
  user: GithubUserInput
  title: string
  body?: string | null
  pull_request?: any
}
type GithubRepositoryInput = { id: number; html_url: string; name: string; full_name: string }
type GithubReleaseInput = {
  id: number
  tag_name: string
  html_url: string
  author: GithubUserInput
}
type GithubAuthorInput = { username?: string | null; name: string }
type GithubCommitInput = { id: string; url: string; message: string; author: GithubAuthorInput }
type GithubReviewInput = {
  user: GithubUserInput
  body?: string | null
  html_url: string
  state: string
}
type GithubCheckPullRequestInput = { number: number }
type GithubCheckAppInput = { name: string }
type GithubCheckSuiteInput = {
  conclusion?: string | null
  head_branch?: string | null
  head_sha: string
  pull_requests?: GithubCheckPullRequestInput[] | null
  app: GithubCheckAppInput
}
type GithubCheckRunOutputInput = { title?: string | null; summary?: string | null }
type GithubCheckRunInput = {
  conclusion?: string | null
  name: string
  html_url: string
  check_suite: GithubCheckSuiteInput
  details_url?: string | null
  output?: null | GithubCheckRunOutputInput
  pull_requests?: GithubCheckPullRequestInput[] | null
}
type GithubDiscussionInput = {
  title: string
  number: number
  html_url: string
  answer_html_url?: string | null
  body?: string | null
  user: GithubUserInput
}
type GithubWebhookInput = {
  action?: string | null
  ref?: string | null
  ref_type?: string | null
  comment?: null | GithubCommentInput
  issue?: null | GithubIssueInput
  pull_request?: null | GithubIssueInput
  repository?: null | GithubRepositoryInput
  forkee?: null | GithubRepositoryInput
  sender: GithubUserInput
  member?: null | GithubUserInput
  release?: null | GithubReleaseInput
  head_commit?: null | GithubCommitInput
  commits?: GithubCommitInput[] | null
  forced?: boolean | null
  compare?: string | null
  review?: null | GithubReviewInput
  check_run?: null | GithubCheckRunInput
  check_suite?: null | GithubCheckSuiteInput
  discussion?: null | GithubDiscussionInput
  answer?: null | GithubCommentInput
}
type WebhookSlackEmbedFieldInput = {
  name?: string | null
  value?: string | null
  inline?: boolean | null
}
type WebhookSlackEmbedInput = {
  title?: string | null
  title_link?: string | null
  text?: string | null
  color?: string | null
  ts?: number | null
  pretext?: string | null
  footer?: string | null
  footer_icon?: string | null
  author_name?: string | null
  author_link?: string | null
  author_icon?: string | null
  image_url?: string | null
  thumb_url?: string | null
  fields?: WebhookSlackEmbedFieldInput[] | null
}
type SlackWebhookInput = {
  text?: string | null
  username?: string | null
  icon_url?: string | null
  attachments?: WebhookSlackEmbedInput[] | null
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applications/@me': {
      $get:
        | { input: {}; output: PrivateApplicationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
      $patch:
        | {
            input: { json: ApplicationUpdateFormPartialInput }
            output: PrivateApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationUpdateFormPartialInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ApplicationUpdateFormPartialInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: PrivateApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationUpdateFormPartialInput
            }
            output: PrivateApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationUpdateFormPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationUpdateFormPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/activity-instances/:instance_id': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput; instance_id: string } }
            output: EmbeddedActivityInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; instance_id: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; instance_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/attachment': {
      $post:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & { form: { file: string } }
            output: ActivitiesAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & { form: { file: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & { form: { file: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/commands': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: { with_localizations?: string }
            }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: { with_localizations?: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: { with_localizations?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandUpdateRequestInput[] | null
            }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandUpdateRequestInput[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandUpdateRequestInput[] | null
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandCreateRequestInput
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandCreateRequestInput
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandCreateRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationCommandCreateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/commands/:command_id': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput } }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandPatchRequestPartialInput }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandPatchRequestPartialInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; command_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandPatchRequestPartialInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/emojis': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ListApplicationEmojisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: { name: string; image: string }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: { name: string; image: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: { name: string; image: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/emojis/:emoji_id': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput }
            } & { json: { name?: string } }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput }
            } & { json: { name?: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput }
            } & { json: { name?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/entitlements': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: {
                user_id?: SnowflakeTypeInput
                sku_ids?: string | (null | SnowflakeTypeInput)[]
                guild_id?: SnowflakeTypeInput
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                exclude_ended?: string
                exclude_deleted?: string
                only_active?: string
              }
            }
            output: EntitlementResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: {
                user_id?: SnowflakeTypeInput
                sku_ids?: string | (null | SnowflakeTypeInput)[]
                guild_id?: SnowflakeTypeInput
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                exclude_ended?: string
                exclude_deleted?: string
                only_active?: string
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: {
                user_id?: SnowflakeTypeInput
                sku_ids?: string | (null | SnowflakeTypeInput)[]
                guild_id?: SnowflakeTypeInput
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                exclude_ended?: string
                exclude_deleted?: string
                only_active?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: CreateEntitlementRequestDataInput
            }
            output: EntitlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: CreateEntitlementRequestDataInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: CreateEntitlementRequestDataInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/entitlements/:entitlement_id': {
      $get:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: EntitlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/entitlements/:entitlement_id/consume': {
      $post:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; entitlement_id: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/guilds/:guild_id/commands': {
      $get:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { query: { with_localizations?: string } }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { query: { with_localizations?: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { query: { with_localizations?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandUpdateRequestInput[] | null }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandUpdateRequestInput[] | null }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandUpdateRequestInput[] | null }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandCreateRequestInput }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandCreateRequestInput }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandCreateRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput }
            } & { json: ApplicationCommandCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/guilds/:guild_id/commands/permissions': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput } }
            output: CommandPermissionsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput; guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/guilds/:guild_id/commands/:command_id': {
      $get:
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            } & { json: ApplicationCommandPatchRequestPartialInput }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            } & { json: ApplicationCommandPatchRequestPartialInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            } & { json: ApplicationCommandPatchRequestPartialInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/guilds/:guild_id/commands/:command_id/permissions': {
      $get:
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: CommandPermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            } & { json: { permissions?: ApplicationCommandPermissionInput[] | null } }
            output: CommandPermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            } & { json: { permissions?: ApplicationCommandPermissionInput[] | null } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeTypeInput
                guild_id: SnowflakeTypeInput
                command_id: SnowflakeTypeInput
              }
            } & { json: { permissions?: ApplicationCommandPermissionInput[] | null } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/role-connections/metadata': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ApplicationRoleConnectionsMetadataItemResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationRoleConnectionsMetadataItemRequestInput[] | null
            }
            output: ApplicationRoleConnectionsMetadataItemResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationRoleConnectionsMetadataItemRequestInput[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: ApplicationRoleConnectionsMetadataItemRequestInput[] | null
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output:
              | GuildChannelResponse
              | PrivateChannelResponse
              | PrivateGroupChannelResponse
              | ThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output:
              | GuildChannelResponse
              | PrivateChannelResponse
              | PrivateGroupChannelResponse
              | ThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json:
                | UpdateDMRequestPartialInput
                | UpdateGroupDMRequestPartialInput
                | UpdateGuildChannelRequestPartialInput
                | UpdateThreadRequestPartialInput
            }
            output:
              | GuildChannelResponse
              | PrivateChannelResponse
              | PrivateGroupChannelResponse
              | ThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json:
                | UpdateDMRequestPartialInput
                | UpdateGroupDMRequestPartialInput
                | UpdateGuildChannelRequestPartialInput
                | UpdateThreadRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json:
                | UpdateDMRequestPartialInput
                | UpdateGroupDMRequestPartialInput
                | UpdateGuildChannelRequestPartialInput
                | UpdateThreadRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/followers': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { webhook_channel_id: SnowflakeTypeInput }
            }
            output: ChannelFollowerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { webhook_channel_id: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { webhook_channel_id: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/invites': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output:
              | (FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse | null)[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput
            } & {
              form:
                | (CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput)
                | ((CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput) & {
                    target_users_file?: string
                  })
            }
            output: FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput
            } & {
              form:
                | (CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput)
                | ((CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput) & {
                    target_users_file?: string
                  })
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput
            } & {
              form:
                | (CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput)
                | ((CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput) & {
                    target_users_file?: string
                  })
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput
            } & {
              form:
                | (CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput)
                | ((CreateGroupDMInviteRequestInput | CreateGuildInviteRequestInput) & {
                    target_users_file?: string
                  })
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                around?: SnowflakeTypeInput
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
              }
            }
            output: MessageResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                around?: SnowflakeTypeInput
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                around?: SnowflakeTypeInput
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: MessageCreateRequestInput
            } & {
              form:
                | MessageCreateRequestInput
                | (MessageCreateRequestInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: MessageCreateRequestInput
            } & {
              form:
                | MessageCreateRequestInput
                | (MessageCreateRequestInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: MessageCreateRequestInput
            } & {
              form:
                | MessageCreateRequestInput
                | (MessageCreateRequestInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/bulk-delete': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { messages: SnowflakeTypeInput[] }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { messages: SnowflakeTypeInput[] }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { messages: SnowflakeTypeInput[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/pins': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: PinnedMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/pins/:message_id': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: MessageEditRequestPartialInput
            } & {
              form:
                | MessageEditRequestPartialInput
                | (MessageEditRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: MessageEditRequestPartialInput
            } & {
              form:
                | MessageEditRequestPartialInput
                | (MessageEditRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: MessageEditRequestPartialInput
            } & {
              form:
                | MessageEditRequestPartialInput
                | (MessageEditRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/crosspost': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/reactions': {
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name': {
      $get:
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            } & { query: { after?: SnowflakeTypeInput; limit?: unknown; type?: unknown } }
            output: UserResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            } & { query: { after?: SnowflakeTypeInput; limit?: unknown; type?: unknown } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            } & { query: { after?: SnowflakeTypeInput; limit?: unknown; type?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/@me': {
      $put:
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/:user_id': {
      $delete:
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
                user_id: SnowflakeTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
                user_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                emoji_name: string
                user_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/threads': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: CreateTextThreadWithMessageRequestInput
            }
            output: ThreadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: CreateTextThreadWithMessageRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: CreateTextThreadWithMessageRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/permissions/member/:user_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              query: { implicit?: string }
            }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              query: { implicit?: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              query: { implicit?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/permissions/role/:role_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } } & {
              query: { implicit?: string }
            }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } } & {
              query: { implicit?: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } } & {
              query: { implicit?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/permissions/:overwrite_id': {
      $put:
        | {
            input: {
              param: { channel_id: SnowflakeTypeInput; overwrite_id: SnowflakeTypeInput }
            } & {
              json: {
                type?: null | ChannelPermissionOverwritesInput
                allow?: number | null
                deny?: number | null
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { channel_id: SnowflakeTypeInput; overwrite_id: SnowflakeTypeInput }
            } & {
              json: {
                type?: null | ChannelPermissionOverwritesInput
                allow?: number | null
                deny?: number | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { channel_id: SnowflakeTypeInput; overwrite_id: SnowflakeTypeInput }
            } & {
              json: {
                type?: null | ChannelPermissionOverwritesInput
                allow?: number | null
                deny?: number | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; overwrite_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; overwrite_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; overwrite_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/pins': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: MessageResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/pins/:message_id': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/polls/:message_id/answers/:answer_id': {
      $get:
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                answer_id: unknown
              }
            } & { query: { after?: SnowflakeTypeInput; limit?: unknown } }
            output: PollAnswerDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                answer_id: unknown
              }
            } & { query: { after?: SnowflakeTypeInput; limit?: unknown } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
                answer_id: unknown
              }
            } & { query: { after?: SnowflakeTypeInput; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/polls/:message_id/expire': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/recipients/:user_id': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: { access_token?: string | null; nick?: string | null }
            }
            output: PrivateChannelResponse | PrivateGroupChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: { access_token?: string | null; nick?: string | null }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: { access_token?: string | null; nick?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: { access_token?: string | null; nick?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/send-soundboard-sound': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: SoundboardSoundSendRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: SoundboardSoundSendRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: SoundboardSoundSendRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/thread-members': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { with_member?: string; limit?: unknown; after?: SnowflakeTypeInput }
            }
            output: ThreadMemberResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { with_member?: string; limit?: unknown; after?: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { with_member?: string; limit?: unknown; after?: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/thread-members/@me': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/thread-members/:user_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              query: { with_member?: string }
            }
            output: ThreadMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              query: { with_member?: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              query: { with_member?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/threads': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateForumThreadRequestInput | CreateTextThreadWithoutMessageRequestInput
            } & { form: CreateForumThreadRequestInput | CreateTextThreadWithoutMessageRequestInput }
            output: CreatedThreadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateForumThreadRequestInput | CreateTextThreadWithoutMessageRequestInput
            } & { form: CreateForumThreadRequestInput | CreateTextThreadWithoutMessageRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: CreateForumThreadRequestInput | CreateTextThreadWithoutMessageRequestInput
            } & { form: CreateForumThreadRequestInput | CreateTextThreadWithoutMessageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/threads/archived/private': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/threads/archived/public': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/threads/search': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                name?: string
                slop?: unknown
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                tag?: string | SnowflakeTypeInput[]
                tag_setting?: ThreadSearchTagSettingInput
                archived?: string
                sort_by?: ThreadSortingModeInput
                sort_order?: SortingOrderInput
                limit?: unknown
                offset?: unknown
              }
            }
            output: ThreadSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                name?: string
                slop?: unknown
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                tag?: string | SnowflakeTypeInput[]
                tag_setting?: ThreadSearchTagSettingInput
                archived?: string
                sort_by?: ThreadSortingModeInput
                sort_order?: SortingOrderInput
                limit?: unknown
                offset?: unknown
              }
            }
            output: SearchIndexNotReadyResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                name?: string
                slop?: unknown
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                tag?: string | SnowflakeTypeInput[]
                tag_setting?: ThreadSearchTagSettingInput
                archived?: string
                sort_by?: ThreadSortingModeInput
                sort_order?: SortingOrderInput
                limit?: unknown
                offset?: unknown
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: {
                name?: string
                slop?: unknown
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                tag?: string | SnowflakeTypeInput[]
                tag_setting?: ThreadSearchTagSettingInput
                archived?: string
                sort_by?: ThreadSortingModeInput
                sort_order?: SortingOrderInput
                limit?: unknown
                offset?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/typing': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: TypingIndicatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/users/@me/threads/archived/private': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: SnowflakeTypeInput; limit?: unknown }
            }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: SnowflakeTypeInput; limit?: unknown }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              query: { before?: SnowflakeTypeInput; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/voice-status': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { status?: string | null }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { status?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { status?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/webhooks': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output:
              | (
                  | ApplicationIncomingWebhookResponse
                  | ChannelFollowerWebhookResponse
                  | GuildIncomingWebhookResponse
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { name: string; avatar?: string | null }
            }
            output: GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { name: string; avatar?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { name: string; avatar?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/gateway': {
      $get:
        | { input: {}; output: GatewayResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/gateway/bot': {
      $get:
        | { input: {}; output: GatewayBotResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/guilds/templates/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { query: { with_counts?: string } }
            output: GuildWithCountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { query: { with_counts?: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { query: { with_counts?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: GuildPatchRequestPartialInput
            }
            output: GuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: GuildPatchRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: GuildPatchRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/audit-logs': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                user_id?: SnowflakeTypeInput
                target_id?: SnowflakeTypeInput
                action_type?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
              }
            }
            output: GuildAuditLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                user_id?: SnowflakeTypeInput
                target_id?: SnowflakeTypeInput
                action_type?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                user_id?: SnowflakeTypeInput
                target_id?: SnowflakeTypeInput
                action_type?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/auto-moderation/rules': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output:
              | (
                  | DefaultKeywordRuleResponse
                  | KeywordRuleResponse
                  | MLSpamRuleResponse
                  | MentionSpamRuleResponse
                  | UserProfileRuleResponse
                  | null
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json:
                | DefaultKeywordListUpsertRequestInput
                | KeywordUpsertRequestInput
                | MLSpamUpsertRequestInput
                | MentionSpamUpsertRequestInput
                | UserProfileUpsertRequestInput
            }
            output:
              | DefaultKeywordRuleResponse
              | KeywordRuleResponse
              | MLSpamRuleResponse
              | MentionSpamRuleResponse
              | UserProfileRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json:
                | DefaultKeywordListUpsertRequestInput
                | KeywordUpsertRequestInput
                | MLSpamUpsertRequestInput
                | MentionSpamUpsertRequestInput
                | UserProfileUpsertRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json:
                | DefaultKeywordListUpsertRequestInput
                | KeywordUpsertRequestInput
                | MLSpamUpsertRequestInput
                | MentionSpamUpsertRequestInput
                | UserProfileUpsertRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/auto-moderation/rules/:rule_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } }
            output:
              | DefaultKeywordRuleResponse
              | KeywordRuleResponse
              | MLSpamRuleResponse
              | MentionSpamRuleResponse
              | UserProfileRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } } & {
              json:
                | DefaultKeywordListUpsertRequestPartialInput
                | KeywordUpsertRequestPartialInput
                | MLSpamUpsertRequestPartialInput
                | MentionSpamUpsertRequestPartialInput
                | UserProfileUpsertRequestPartialInput
            }
            output:
              | DefaultKeywordRuleResponse
              | KeywordRuleResponse
              | MLSpamRuleResponse
              | MentionSpamRuleResponse
              | UserProfileRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } } & {
              json:
                | DefaultKeywordListUpsertRequestPartialInput
                | KeywordUpsertRequestPartialInput
                | MLSpamUpsertRequestPartialInput
                | MentionSpamUpsertRequestPartialInput
                | UserProfileUpsertRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; rule_id: SnowflakeTypeInput } } & {
              json:
                | DefaultKeywordListUpsertRequestPartialInput
                | KeywordUpsertRequestPartialInput
                | MLSpamUpsertRequestPartialInput
                | MentionSpamUpsertRequestPartialInput
                | UserProfileUpsertRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/bans': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; before?: SnowflakeTypeInput; after?: SnowflakeTypeInput }
            }
            output: GuildBanResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; before?: SnowflakeTypeInput; after?: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; before?: SnowflakeTypeInput; after?: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/bans/:user_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: GuildBanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BanUserFromGuildRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BanUserFromGuildRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BanUserFromGuildRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: UnbanUserFromGuildRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: UnbanUserFromGuildRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: UnbanUserFromGuildRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/bulk-ban': {
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: BulkBanUsersRequestInput }
            output: BulkBanUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: BulkBanUsersRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: BulkBanUsersRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/channels': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output:
              | (
                  | GuildChannelResponse
                  | PrivateChannelResponse
                  | PrivateGroupChannelResponse
                  | ThreadResponse
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: CreateGuildChannelRequestInput
            }
            output: GuildChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: CreateGuildChannelRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: CreateGuildChannelRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: {
                id?: null | SnowflakeTypeInput
                position?: number | null
                parent_id?: null | SnowflakeTypeInput
                lock_permissions?: boolean | null
              }[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: {
                id?: null | SnowflakeTypeInput
                position?: number | null
                parent_id?: null | SnowflakeTypeInput
                lock_permissions?: boolean | null
              }[]
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: {
                id?: null | SnowflakeTypeInput
                position?: number | null
                parent_id?: null | SnowflakeTypeInput
                lock_permissions?: boolean | null
              }[]
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/emojis': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: EmojiResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { name: string; image: string; roles?: (null | SnowflakeTypeInput)[] | null }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { name: string; image: string; roles?: (null | SnowflakeTypeInput)[] | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { name: string; image: string; roles?: (null | SnowflakeTypeInput)[] | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/emojis/:emoji_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } } & {
              json: { name?: string; roles?: (null | SnowflakeTypeInput)[] | null }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } } & {
              json: { name?: string; roles?: (null | SnowflakeTypeInput)[] | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; emoji_id: SnowflakeTypeInput } } & {
              json: { name?: string; roles?: (null | SnowflakeTypeInput)[] | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/incident-actions': {
      $put:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: GuildIncidentActionsRequestInput
            }
            output: GuildIncidentsDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: GuildIncidentActionsRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: GuildIncidentActionsRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/integrations': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output:
              | (
                  | DiscordIntegrationResponse
                  | ExternalConnectionIntegrationResponse
                  | GuildSubscriptionIntegrationResponse
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/integrations/:integration_id': {
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; integration_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; integration_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; integration_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/invites': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output:
              | (FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse | null)[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/members': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; after?: SnowflakeTypeInput }
            }
            output: GuildMemberResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; after?: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; after?: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/members/@me': {
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                avatar?: string | null
                bio?: string | null
                banner?: string | null
              }
            }
            output: PrivateGuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                avatar?: string | null
                bio?: string | null
                banner?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                avatar?: string | null
                bio?: string | null
                banner?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/members/search': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; query: string }
            }
            output: GuildMemberResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; query: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { limit?: unknown; query: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/members/:user_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: GuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BotAddGuildMemberRequestInput
            }
            output: GuildMemberResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BotAddGuildMemberRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BotAddGuildMemberRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: BotAddGuildMemberRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                roles?: (null | SnowflakeTypeInput)[] | null
                mute?: boolean | null
                deaf?: boolean | null
                channel_id?: null | SnowflakeTypeInput
                communication_disabled_until?: string | null
                flags?: number | null
              }
            }
            output: GuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                roles?: (null | SnowflakeTypeInput)[] | null
                mute?: boolean | null
                deaf?: boolean | null
                channel_id?: null | SnowflakeTypeInput
                communication_disabled_until?: string | null
                flags?: number | null
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                roles?: (null | SnowflakeTypeInput)[] | null
                mute?: boolean | null
                deaf?: boolean | null
                channel_id?: null | SnowflakeTypeInput
                communication_disabled_until?: string | null
                flags?: number | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                nick?: string | null
                roles?: (null | SnowflakeTypeInput)[] | null
                mute?: boolean | null
                deaf?: boolean | null
                channel_id?: null | SnowflakeTypeInput
                communication_disabled_until?: string | null
                flags?: number | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/members/:user_id/roles/:role_id': {
      $put:
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                user_id: SnowflakeTypeInput
                role_id: SnowflakeTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                user_id: SnowflakeTypeInput
                role_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                user_id: SnowflakeTypeInput
                role_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                user_id: SnowflakeTypeInput
                role_id: SnowflakeTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                user_id: SnowflakeTypeInput
                role_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                user_id: SnowflakeTypeInput
                role_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/messages/search': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                sort_by?: SortingModeInput
                sort_order?: SortingOrderInput
                content?: string
                slop?: unknown
                author_id?: unknown
                author_type?: unknown
                mentions?: unknown
                mentions_role_id?: unknown
                replied_to_user_id?: unknown
                replied_to_message_id?: unknown
                mention_everyone?: string
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                limit?: unknown
                offset?: unknown
                has?: unknown
                link_hostname?: unknown
                embed_provider?: unknown
                embed_type?: unknown
                attachment_extension?: unknown
                attachment_filename?: unknown
                pinned?: string
                include_nsfw?: string
                channel_id?: unknown
              }
            }
            output: GuildSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                sort_by?: SortingModeInput
                sort_order?: SortingOrderInput
                content?: string
                slop?: unknown
                author_id?: unknown
                author_type?: unknown
                mentions?: unknown
                mentions_role_id?: unknown
                replied_to_user_id?: unknown
                replied_to_message_id?: unknown
                mention_everyone?: string
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                limit?: unknown
                offset?: unknown
                has?: unknown
                link_hostname?: unknown
                embed_provider?: unknown
                embed_type?: unknown
                attachment_extension?: unknown
                attachment_filename?: unknown
                pinned?: string
                include_nsfw?: string
                channel_id?: unknown
              }
            }
            output: SearchIndexNotReadyResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                sort_by?: SortingModeInput
                sort_order?: SortingOrderInput
                content?: string
                slop?: unknown
                author_id?: unknown
                author_type?: unknown
                mentions?: unknown
                mentions_role_id?: unknown
                replied_to_user_id?: unknown
                replied_to_message_id?: unknown
                mention_everyone?: string
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                limit?: unknown
                offset?: unknown
                has?: unknown
                link_hostname?: unknown
                embed_provider?: unknown
                embed_type?: unknown
                attachment_extension?: unknown
                attachment_filename?: unknown
                pinned?: string
                include_nsfw?: string
                channel_id?: unknown
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                sort_by?: SortingModeInput
                sort_order?: SortingOrderInput
                content?: string
                slop?: unknown
                author_id?: unknown
                author_type?: unknown
                mentions?: unknown
                mentions_role_id?: unknown
                replied_to_user_id?: unknown
                replied_to_message_id?: unknown
                mention_everyone?: string
                min_id?: SnowflakeTypeInput
                max_id?: SnowflakeTypeInput
                limit?: unknown
                offset?: unknown
                has?: unknown
                link_hostname?: unknown
                embed_provider?: unknown
                embed_type?: unknown
                attachment_extension?: unknown
                attachment_filename?: unknown
                pinned?: string
                include_nsfw?: string
                channel_id?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/new-member-welcome': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: GuildHomeSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/onboarding': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: UserGuildOnboardingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateGuildOnboardingRequestInput
            }
            output: GuildOnboardingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateGuildOnboardingRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateGuildOnboardingRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/permissions/member/:user_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/permissions/role/:role_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/preview': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: GuildPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/prune': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { days?: unknown; include_roles?: string | (null | SnowflakeTypeInput)[] }
            }
            output: GuildPruneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { days?: unknown; include_roles?: string | (null | SnowflakeTypeInput)[] }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { days?: unknown; include_roles?: string | (null | SnowflakeTypeInput)[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: PruneGuildRequestInput }
            output: GuildPruneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: PruneGuildRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: PruneGuildRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/regions': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: VoiceRegionResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/requests': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                status?: unknown
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: GuildJoinRequestsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                status?: unknown
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: {
                status?: unknown
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/requests/:request_id': {
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; request_id: SnowflakeTypeInput } } & {
              json: {
                action?: GuildJoinRequestApplicationStatusInput
                rejection_reason?: string | null
              }
            }
            output: GuildJoinRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; request_id: SnowflakeTypeInput } } & {
              json: {
                action?: GuildJoinRequestApplicationStatusInput
                rejection_reason?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; request_id: SnowflakeTypeInput } } & {
              json: {
                action?: GuildJoinRequestApplicationStatusInput
                rejection_reason?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/roles': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: GuildRoleResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: CreateRoleRequestInput }
            output: GuildRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: CreateRoleRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & { json: CreateRoleRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateRolePositionsRequestInput[]
            }
            output: GuildRoleResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateRolePositionsRequestInput[]
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateRolePositionsRequestInput[]
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/roles/member-counts': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: { [key: string]: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/roles/:role_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: GuildRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } } & {
              json: UpdateRoleRequestPartialInput
            }
            output: GuildRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } } & {
              json: UpdateRoleRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; role_id: SnowflakeTypeInput } } & {
              json: UpdateRoleRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { with_user_count?: string }
            }
            output:
              | (
                  | ExternalScheduledEventResponse
                  | StageScheduledEventResponse
                  | VoiceScheduledEventResponse
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { with_user_count?: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { with_user_count?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json:
                | ExternalScheduledEventCreateRequestInput
                | StageScheduledEventCreateRequestInput
                | VoiceScheduledEventCreateRequestInput
            }
            output:
              | ExternalScheduledEventResponse
              | StageScheduledEventResponse
              | VoiceScheduledEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json:
                | ExternalScheduledEventCreateRequestInput
                | StageScheduledEventCreateRequestInput
                | VoiceScheduledEventCreateRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json:
                | ExternalScheduledEventCreateRequestInput
                | StageScheduledEventCreateRequestInput
                | VoiceScheduledEventCreateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id': {
      $get:
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { query: { with_user_count?: string } }
            output:
              | ExternalScheduledEventResponse
              | StageScheduledEventResponse
              | VoiceScheduledEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { query: { with_user_count?: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { query: { with_user_count?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & {
              json:
                | ExternalScheduledEventPatchRequestPartialInput
                | StageScheduledEventPatchRequestPartialInput
                | VoiceScheduledEventPatchRequestPartialInput
            }
            output:
              | ExternalScheduledEventResponse
              | StageScheduledEventResponse
              | VoiceScheduledEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & {
              json:
                | ExternalScheduledEventPatchRequestPartialInput
                | StageScheduledEventPatchRequestPartialInput
                | VoiceScheduledEventPatchRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & {
              json:
                | ExternalScheduledEventPatchRequestPartialInput
                | StageScheduledEventPatchRequestPartialInput
                | VoiceScheduledEventPatchRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions': {
      $post:
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { json: GuildScheduledEventExceptionCreateRequestInput }
            output: GuildScheduledEventExceptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { json: GuildScheduledEventExceptionCreateRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { json: GuildScheduledEventExceptionCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions/:exception_id': {
      $delete:
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                exception_id: SnowflakeTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                exception_id: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                exception_id: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                exception_id: SnowflakeTypeInput
              }
            } & { json: GuildScheduledEventExceptionPatchRequestPartialInput }
            output: GuildScheduledEventExceptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                exception_id: SnowflakeTypeInput
              }
            } & { json: GuildScheduledEventExceptionPatchRequestPartialInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                exception_id: SnowflakeTypeInput
              }
            } & { json: GuildScheduledEventExceptionPatchRequestPartialInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/users': {
      $get:
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & {
              query: {
                with_member?: string
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: ScheduledEventUserResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & {
              query: {
                with_member?: string
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & {
              query: {
                with_member?: string
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/users/counts': {
      $get:
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { query: { guild_scheduled_event_exception_ids?: unknown } }
            output: ScheduledEventUserCountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { query: { guild_scheduled_event_exception_ids?: unknown } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeTypeInput; guild_scheduled_event_id: SnowflakeTypeInput }
            } & { query: { guild_scheduled_event_exception_ids?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/:guild_scheduled_event_exception_id/users': {
      $get:
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                guild_scheduled_event_exception_id: SnowflakeTypeInput
              }
            } & {
              query: {
                with_member?: string
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: ScheduledEventUserResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                guild_scheduled_event_exception_id: SnowflakeTypeInput
              }
            } & {
              query: {
                with_member?: string
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeTypeInput
                guild_scheduled_event_id: SnowflakeTypeInput
                guild_scheduled_event_exception_id: SnowflakeTypeInput
              }
            } & {
              query: {
                with_member?: string
                limit?: unknown
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/soundboard-sounds': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ListGuildSoundboardSoundsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: SoundboardCreateRequestInput
            }
            output: SoundboardSoundResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: SoundboardCreateRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: SoundboardCreateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/soundboard-sounds/:sound_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } }
            output: SoundboardSoundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } } & {
              json: SoundboardPatchRequestPartialInput
            }
            output: SoundboardSoundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } } & {
              json: SoundboardPatchRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sound_id: SnowflakeTypeInput } } & {
              json: SoundboardPatchRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/stickers': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: GuildStickerResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              form: { name: string; tags: string; description?: string | null; file: string }
            }
            output: GuildStickerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              form: { name: string; tags: string; description?: string | null; file: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              form: { name: string; tags: string; description?: string | null; file: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/stickers/:sticker_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } }
            output: GuildStickerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } } & {
              json: { name?: string; tags?: string; description?: string | null }
            }
            output: GuildStickerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } } & {
              json: { name?: string; tags?: string; description?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; sticker_id: SnowflakeTypeInput } } & {
              json: { name?: string; tags?: string; description?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/templates': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: GuildTemplateResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { name: string; description?: string | null }
            }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { name: string; description?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { name: string; description?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/templates/:code': {
      $put:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } } & {
              json: { name?: string; description?: string | null }
            }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } } & {
              json: { name?: string; description?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; code: string } } & {
              json: { name?: string; description?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/threads/active': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/vanity-url': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: VanityURLResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/voice-states/@me': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: VoiceStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateSelfVoiceStateRequestPartialInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateSelfVoiceStateRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: UpdateSelfVoiceStateRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/voice-states/:user_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: VoiceStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: UpdateVoiceStateRequestPartialInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: UpdateVoiceStateRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: UpdateVoiceStateRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/webhooks': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output:
              | (
                  | ApplicationIncomingWebhookResponse
                  | ChannelFollowerWebhookResponse
                  | GuildIncomingWebhookResponse
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/welcome-screen': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: GuildWelcomeScreenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: WelcomeScreenPatchRequestPartialInput
            }
            output: GuildWelcomeScreenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: WelcomeScreenPatchRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: WelcomeScreenPatchRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/widget': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: WidgetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { channel_id?: null | SnowflakeTypeInput; enabled?: boolean | null }
            }
            output: WidgetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { channel_id?: null | SnowflakeTypeInput; enabled?: boolean | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              json: { channel_id?: null | SnowflakeTypeInput; enabled?: boolean | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/widget.json': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: WidgetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/widget.png': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { style?: WidgetImageStylesInput }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { style?: WidgetImageStylesInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } } & {
              query: { style?: WidgetImageStylesInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/interactions/:interaction_id/:interaction_token/callback': {
      $post:
        | {
            input: { param: { interaction_id: SnowflakeTypeInput; interaction_token: string } } & {
              query: { with_response?: string }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            }
            output: InteractionCallbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { interaction_id: SnowflakeTypeInput; interaction_token: string } } & {
              query: { with_response?: string }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { interaction_id: SnowflakeTypeInput; interaction_token: string } } & {
              query: { with_response?: string }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { interaction_id: SnowflakeTypeInput; interaction_token: string } } & {
              query: { with_response?: string }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequestInput
                | CreateMessageInteractionCallbackRequestInput
                | LaunchActivityInteractionCallbackRequestInput
                | ModalInteractionCallbackRequestInput
                | PongInteractionCallbackRequestInput
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequestInput
                | UpdateMessageInteractionCallbackRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code': {
      $get:
        | {
            input: { param: { code: string } } & {
              query: {
                with_counts?: string
                guild_scheduled_event_id?: SnowflakeTypeInput
                target_channel_id?: SnowflakeTypeInput
                target_message_id?: SnowflakeTypeInput
              }
            }
            output: FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & {
              query: {
                with_counts?: string
                guild_scheduled_event_id?: SnowflakeTypeInput
                target_channel_id?: SnowflakeTypeInput
                target_message_id?: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & {
              query: {
                with_counts?: string
                guild_scheduled_event_id?: SnowflakeTypeInput
                target_channel_id?: SnowflakeTypeInput
                target_message_id?: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { code: string } }
            output: FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code/target-users': {
      $get:
        | { input: { param: { code: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { code: string } } & { form: { target_users_file: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string } } & { form: { target_users_file: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & { form: { target_users_file: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code/target-users/bulk-add': {
      $post:
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeTypeInput[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeTypeInput[] } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeTypeInput[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code/target-users/bulk-delete': {
      $post:
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeTypeInput[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeTypeInput[] } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeTypeInput[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code/target-users/job-status': {
      $get:
        | {
            input: { param: { code: string } }
            output: TargetUsersJobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code/target-users/:user_id': {
      $put:
        | {
            input: { param: { code: string; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { code: string; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies': {
      $put:
        | {
            input: {
              json: {
                idle_timeout_seconds?: number | null
                lobby_metadata?: { [key: string]: string } | null
                member_metadata?: { [key: string]: string } | null
                secret: string
                flags?: null | 1
                name?: string | null
              }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: number | null
                lobby_metadata?: { [key: string]: string } | null
                member_metadata?: { [key: string]: string } | null
                secret: string
                flags?: null | 1
                name?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: number | null
                lobby_metadata?: { [key: string]: string } | null
                member_metadata?: { [key: string]: string } | null
                secret: string
                flags?: null | 1
                name?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                idle_timeout_seconds?: number | null
                members?: LobbyMemberRequestInput[] | null
                metadata?: { [key: string]: string } | null
                flags?: null | 1
                override_event_webhooks_url?: string | null
                name?: string | null
              }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: number | null
                members?: LobbyMemberRequestInput[] | null
                metadata?: { [key: string]: string } | null
                flags?: null | 1
                override_event_webhooks_url?: string | null
                name?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: number | null
                members?: LobbyMemberRequestInput[] | null
                metadata?: { [key: string]: string } | null
                flags?: null | 1
                override_event_webhooks_url?: string | null
                name?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id': {
      $get:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: {
                idle_timeout_seconds?: number | null
                metadata?: { [key: string]: string } | null
                members?: LobbyMemberRequestInput[] | null
                flags?: null | 1
                override_event_webhooks_url?: string | null
                name?: string | null
              }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: {
                idle_timeout_seconds?: number | null
                metadata?: { [key: string]: string } | null
                members?: LobbyMemberRequestInput[] | null
                flags?: null | 1
                override_event_webhooks_url?: string | null
                name?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: {
                idle_timeout_seconds?: number | null
                metadata?: { [key: string]: string } | null
                members?: LobbyMemberRequestInput[] | null
                flags?: null | 1
                override_event_webhooks_url?: string | null
                name?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/channel-linking': {
      $patch:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: { channel_id?: null | SnowflakeTypeInput }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: { channel_id?: null | SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: { channel_id?: null | SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/@me': {
      $delete:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/@me/invites': {
      $post:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: LobbyGuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/bulk': {
      $post:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: BulkLobbyMemberRequestInput[] | null
            }
            output: LobbyMemberResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: BulkLobbyMemberRequestInput[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: BulkLobbyMemberRequestInput[] | null
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/:user_id': {
      $put:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                metadata?: { [key: string]: string } | null
                flags?: null | 1
                additional_name?: string | null
              }
            }
            output: LobbyMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                metadata?: { [key: string]: string } | null
                flags?: null | 1
                additional_name?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } } & {
              json: {
                metadata?: { [key: string]: string } | null
                flags?: null | 1
                additional_name?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/:user_id/invites': {
      $post:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: LobbyGuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/messages': {
      $get:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & { query: { limit?: unknown } }
            output: LobbyMessageResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & { query: { limit?: unknown } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & { query: { limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: SDKMessageRequestInput
            } & { form: SDKMessageRequestInput }
            output: LobbyMessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: SDKMessageRequestInput
            } & { form: SDKMessageRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput } } & {
              json: SDKMessageRequestInput
            } & { form: SDKMessageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/messages/:message_id/moderation-metadata': {
      $put:
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: { [key: string]: string }
            } & { form: { [key: string]: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: { [key: string]: string }
            } & { form: { [key: string]: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeTypeInput; message_id: SnowflakeTypeInput } } & {
              json: { [key: string]: string }
            } & { form: { [key: string]: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth2/@me': {
      $get:
        | { input: {}; output: OAuth2GetAuthorizationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/oauth2/applications/@me': {
      $get:
        | { input: {}; output: PrivateApplicationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/oauth2/keys': {
      $get:
        | { input: {}; output: OAuth2GetKeys; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/oauth2/userinfo': {
      $get:
        | {
            input: {}
            output: OAuth2GetOpenIDConnectUserInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/partner-sdk/dms/:user_id_1/:user_id_2/messages/:message_id/moderation-metadata': {
      $put:
        | {
            input: {
              param: {
                user_id_1: SnowflakeTypeInput
                user_id_2: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
              }
            } & { json: { [key: string]: string } } & { form: { [key: string]: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                user_id_1: SnowflakeTypeInput
                user_id_2: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
              }
            } & { json: { [key: string]: string } } & { form: { [key: string]: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                user_id_1: SnowflakeTypeInput
                user_id_2: SnowflakeTypeInput
                message_id: SnowflakeTypeInput
              }
            } & { json: { [key: string]: string } } & { form: { [key: string]: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/partner-sdk/provisional-accounts/unmerge': {
      $post:
        | {
            input: {
              json: {
                client_id: SnowflakeTypeInput
                client_secret?: string | null
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                client_id: SnowflakeTypeInput
                client_secret?: string | null
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                client_id: SnowflakeTypeInput
                client_secret?: string | null
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/partner-sdk/provisional-accounts/unmerge/bot': {
      $post:
        | {
            input: { json: { external_user_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { external_user_id: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { external_user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/partner-sdk/token': {
      $post:
        | {
            input: {
              json: {
                client_id: SnowflakeTypeInput
                client_secret?: string | null
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthTypeInput
              }
            }
            output: ProvisionalTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id: SnowflakeTypeInput
                client_secret?: string | null
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                client_id: SnowflakeTypeInput
                client_secret?: string | null
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/partner-sdk/token/bot': {
      $post:
        | {
            input: {
              json: {
                provisional_user_id?: null | SnowflakeTypeInput
                external_user_id: string
                preferred_global_name?: string | null
              }
            }
            output: ProvisionalTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provisional_user_id?: null | SnowflakeTypeInput
                external_user_id: string
                preferred_global_name?: string | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                provisional_user_id?: null | SnowflakeTypeInput
                external_user_id: string
                preferred_global_name?: string | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/skus/:sku_id/subscriptions': {
      $get:
        | {
            input: { param: { sku_id: SnowflakeTypeInput } } & {
              query: {
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                user_id?: SnowflakeTypeInput
              }
            }
            output: SubscriptionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku_id: SnowflakeTypeInput } } & {
              query: {
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                user_id?: SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sku_id: SnowflakeTypeInput } } & {
              query: {
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                user_id?: SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/skus/:sku_id/subscriptions/:subscription_id': {
      $get:
        | {
            input: {
              param: { sku_id: SnowflakeTypeInput; subscription_id: SnowflakeTypeInput }
            } & { query: { user_id?: SnowflakeTypeInput } }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { sku_id: SnowflakeTypeInput; subscription_id: SnowflakeTypeInput }
            } & { query: { user_id?: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { sku_id: SnowflakeTypeInput; subscription_id: SnowflakeTypeInput }
            } & { query: { user_id?: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/soundboard-default-sounds': {
      $get:
        | { input: {}; output: SoundboardSoundResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/stage-instances': {
      $post:
        | {
            input: {
              json: {
                topic: string
                channel_id: SnowflakeTypeInput
                privacy_level?: null | StageInstancesPrivacyLevelsInput
                guild_scheduled_event_id?: null | SnowflakeTypeInput
                send_start_notification?: boolean | null
              }
            }
            output: StageInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                topic: string
                channel_id: SnowflakeTypeInput
                privacy_level?: null | StageInstancesPrivacyLevelsInput
                guild_scheduled_event_id?: null | SnowflakeTypeInput
                send_start_notification?: boolean | null
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                topic: string
                channel_id: SnowflakeTypeInput
                privacy_level?: null | StageInstancesPrivacyLevelsInput
                guild_scheduled_event_id?: null | SnowflakeTypeInput
                send_start_notification?: boolean | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stage-instances/:channel_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: StageInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { topic?: string; privacy_level?: StageInstancesPrivacyLevelsInput }
            }
            output: StageInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { topic?: string; privacy_level?: StageInstancesPrivacyLevelsInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeTypeInput } } & {
              json: { topic?: string; privacy_level?: StageInstancesPrivacyLevelsInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sticker-packs': {
      $get:
        | { input: {}; output: StickerPackCollectionResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sticker-packs/:pack_id': {
      $get:
        | {
            input: { param: { pack_id: SnowflakeTypeInput } }
            output: StickerPackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pack_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pack_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stickers/:sticker_id': {
      $get:
        | {
            input: { param: { sticker_id: SnowflakeTypeInput } }
            output: GuildStickerResponse | StandardStickerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sticker_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sticker_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me': {
      $get:
        | { input: {}; output: UserPIIResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
      $patch:
        | {
            input: { json: BotAccountPatchRequestInput }
            output: UserPIIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BotAccountPatchRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: BotAccountPatchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/applications/:application_id/entitlements': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: { sku_ids?: string | (null | SnowflakeTypeInput)[]; exclude_consumed?: string }
            }
            output: EntitlementResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: { sku_ids?: string | (null | SnowflakeTypeInput)[]; exclude_consumed?: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              query: { sku_ids?: string | (null | SnowflakeTypeInput)[]; exclude_consumed?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/applications/:application_id/role-connection': {
      $get:
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ApplicationUserRoleConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: UpdateApplicationUserRoleConnectionRequestInput
            }
            output: ApplicationUserRoleConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: UpdateApplicationUserRoleConnectionRequestInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } } & {
              json: UpdateApplicationUserRoleConnectionRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/channels': {
      $post:
        | {
            input: { json: CreatePrivateChannelRequestInput }
            output: PrivateChannelResponse | PrivateGroupChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePrivateChannelRequestInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreatePrivateChannelRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/connections': {
      $get:
        | {
            input: {}
            output: ConnectedAccountResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/users/@me/guilds': {
      $get:
        | {
            input: {
              query: {
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                shard?: unknown
                with_counts?: string
              }
            }
            output: MyGuildResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                shard?: unknown
                with_counts?: string
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                before?: SnowflakeTypeInput
                after?: SnowflakeTypeInput
                limit?: unknown
                shard?: unknown
                with_counts?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/guilds/:guild_id': {
      $delete:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/guilds/:guild_id/member': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: PrivateGuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/:user_id': {
      $get:
        | {
            input: { param: { user_id: SnowflakeTypeInput } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { user_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/voice/regions': {
      $get:
        | { input: {}; output: VoiceRegionResponse[] | null; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RatelimitedResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } } & {
              json: {
                name?: string
                avatar?: string | null
                channel_id?: null | SnowflakeTypeInput
              }
            }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } } & {
              json: {
                name?: string
                avatar?: string | null
                channel_id?: null | SnowflakeTypeInput
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput } } & {
              json: {
                name?: string
                avatar?: string | null
                channel_id?: null | SnowflakeTypeInput
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhook_id/:webhook_token': {
      $get:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput; with_components?: string }
            } & {
              json: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            } & {
              form: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput; with_components?: string }
            } & {
              json: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            } & {
              form: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput; with_components?: string }
            } & {
              json: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            } & {
              form: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput; with_components?: string }
            } & {
              json: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            } & {
              form: IncomingWebhookRequestPartialInput | IncomingWebhookUpdateRequestPartialInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              json: { name?: string; avatar?: string | null }
            }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              json: { name?: string; avatar?: string | null }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              json: { name?: string; avatar?: string | null }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhook_id/:webhook_token/github': {
      $post:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput }
            } & { json: GithubWebhookInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput }
            } & { json: GithubWebhookInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput }
            } & { json: GithubWebhookInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhook_id/:webhook_token/messages/@original': {
      $get:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput; with_components?: string }
            } & { json: IncomingWebhookUpdateRequestPartialInput } & {
              form:
                | IncomingWebhookUpdateRequestPartialInput
                | (IncomingWebhookUpdateRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput; with_components?: string }
            } & { json: IncomingWebhookUpdateRequestPartialInput } & {
              form:
                | IncomingWebhookUpdateRequestPartialInput
                | (IncomingWebhookUpdateRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { thread_id?: SnowflakeTypeInput; with_components?: string }
            } & { json: IncomingWebhookUpdateRequestPartialInput } & {
              form:
                | IncomingWebhookUpdateRequestPartialInput
                | (IncomingWebhookUpdateRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhook_id/:webhook_token/messages/:message_id': {
      $get:
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput; with_components?: string } } & {
              json: IncomingWebhookUpdateRequestPartialInput
            } & {
              form:
                | IncomingWebhookUpdateRequestPartialInput
                | (IncomingWebhookUpdateRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput; with_components?: string } } & {
              json: IncomingWebhookUpdateRequestPartialInput
            } & {
              form:
                | IncomingWebhookUpdateRequestPartialInput
                | (IncomingWebhookUpdateRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                webhook_id: SnowflakeTypeInput
                webhook_token: string
                message_id: SnowflakeTypeInput
              }
            } & { query: { thread_id?: SnowflakeTypeInput; with_components?: string } } & {
              json: IncomingWebhookUpdateRequestPartialInput
            } & {
              form:
                | IncomingWebhookUpdateRequestPartialInput
                | (IncomingWebhookUpdateRequestPartialInput & {
                    'files[0]'?: string
                    'files[1]'?: string
                    'files[2]'?: string
                    'files[3]'?: string
                    'files[4]'?: string
                    'files[5]'?: string
                    'files[6]'?: string
                    'files[7]'?: string
                    'files[8]'?: string
                    'files[9]'?: string
                  })
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhook_id/:webhook_token/slack': {
      $post:
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput }
            } & { json: SlackWebhookInput } & { form: SlackWebhookInput }
            output: string | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput }
            } & { json: SlackWebhookInput } & { form: SlackWebhookInput }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeTypeInput; webhook_token: string } } & {
              query: { wait?: string; thread_id?: SnowflakeTypeInput }
            } & { json: SlackWebhookInput } & { form: SlackWebhookInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
