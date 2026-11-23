type SnowflakeType = string
type ApplicationTypes = 4
type Int53Type = bigint
type UserAvatarDecorationResponse = {
  asset: string
  sku_id: ({ [x: string]: unknown } | null) | SnowflakeType
}
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
  sku_id: ({ [x: string]: unknown } | null) | SnowflakeType
  asset: string
  label: string
  palette: NameplatePalette
}
type UserCollectiblesResponse = {
  nameplate: ({ [x: string]: unknown } | null) | UserNameplateResponse
}
type UserPrimaryGuildResponse = {
  identity_guild_id: ({ [x: string]: unknown } | null) | SnowflakeType
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
  avatar_decoration_data?:
    | ({ [x: string]: unknown } | null)
    | UserAvatarDecorationResponse
    | undefined
  collectibles?: ({ [x: string]: unknown } | null) | UserCollectiblesResponse | undefined
  primary_guild: ({ [x: string]: unknown } | null) | UserPrimaryGuildResponse
}
type ApplicationOAuth2InstallParamsResponse = { scopes: {}[]; permissions: string }
type ApplicationIntegrationTypeConfigurationResponse = {
  oauth2_install_params?: ApplicationOAuth2InstallParamsResponse | undefined
}
type ApplicationEventWebhooksStatus = 1 | 2 | 3
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
type PrivateApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: ({ [x: string]: unknown } | null) | ApplicationTypes
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
    | { [x: string]: ApplicationIntegrationTypeConfigurationResponse }
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
  event_webhooks_types?: {}[] | undefined
  explicit_content_filter: ApplicationExplicitContentFilterTypes
  team: ({ [x: string]: unknown } | null) | TeamResponse
  eligible_oauth2_scopes: OAuth2Scopes[]
}
type RatelimitedResponse = { code: number; message: string; retry_after: number; global: boolean }
type Error = { code: number; message: string }
type InnerErrors = { _errors: Error[] }
type ErrorDetails = { [x: string]: ErrorDetails } | InnerErrors
type ErrorResponse = { code: number; message: string; errors?: ErrorDetails | undefined }
type ApplicationOAuth2InstallParams = {
  scopes?: ({}[] | null) | undefined
  permissions?: (number | null) | undefined
}
type ApplicationIntegrationTypeConfiguration = {
  oauth2_install_params?:
    | ({ [x: string]: unknown } | null)
    | ApplicationOAuth2InstallParams
    | undefined
}
type ApplicationFormPartial = {
  description?:
    | ({ default: string; localizations?: ({ [x: string]: string } | null) | undefined } | null)
    | undefined
  icon?: (string | null) | undefined
  cover_image?: (string | null) | undefined
  team_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  flags?: (number | null) | undefined
  interactions_endpoint_url?: (string | null) | undefined
  explicit_content_filter?:
    | ({ [x: string]: unknown } | null)
    | ApplicationExplicitContentFilterTypes
    | undefined
  max_participants?: (number | null) | undefined
  type?: ({ [x: string]: unknown } | null) | ApplicationTypes | undefined
  tags?: (string[] | null) | undefined
  custom_install_url?: (string | null) | undefined
  install_params?: ({ [x: string]: unknown } | null) | ApplicationOAuth2InstallParams | undefined
  role_connections_verification_url?: (string | null) | undefined
  integration_types_config?:
    | ({
        [x: string]: ({ [x: string]: unknown } | null) | ApplicationIntegrationTypeConfiguration
      } | null)
    | undefined
  event_webhooks_status?: ({ [x: string]: unknown } | null) | {} | undefined
  event_webhooks_url?: (string | null) | undefined
  event_webhooks_types?: ({}[] | null) | undefined
}
type GuildChannelLocation = {
  id: string
  kind: {}
  channel_id: SnowflakeType
  guild_id: SnowflakeType
}
type PrivateChannelLocation = { id: string; kind: {}; channel_id: SnowflakeType }
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
  type: ({ [x: string]: unknown } | null) | ApplicationTypes
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
    | { [x: string]: ApplicationIntegrationTypeConfigurationResponse }
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
type ApplicationCommandAttachmentOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
  file_types?: string[] | undefined
}
type ApplicationCommandBooleanOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ChannelTypes = 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15
type ApplicationCommandChannelOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
  channel_types?: ChannelTypes[] | undefined
}
type ApplicationCommandOptionIntegerChoiceResponse = {
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  value: Int53Type
}
type ApplicationCommandIntegerOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
  autocomplete?: boolean | undefined
  choices?: ApplicationCommandOptionIntegerChoiceResponse[] | undefined
  min_value?: Int53Type | undefined
  max_value?: Int53Type | undefined
}
type ApplicationCommandMentionableOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ApplicationCommandOptionNumberChoiceResponse = {
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  value: number
}
type ApplicationCommandNumberOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
  autocomplete?: boolean | undefined
  choices?: ApplicationCommandOptionNumberChoiceResponse[] | undefined
  min_value?: number | undefined
  max_value?: number | undefined
}
type ApplicationCommandRoleOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ApplicationCommandOptionStringChoiceResponse = {
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  value: string
}
type ApplicationCommandStringOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
  autocomplete?: boolean | undefined
  choices?: ApplicationCommandOptionStringChoiceResponse[] | undefined
  min_length?: number | undefined
  max_length?: number | undefined
}
type ApplicationCommandUserOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: boolean | undefined
}
type ApplicationCommandSubcommandOptionResponse = {
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
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
  type: {}
  name: string
  name_localized?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
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
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localized?: string | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
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
type ApplicationCommandAttachmentOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  file_types?: (string[] | null) | undefined
}
type ApplicationCommandBooleanOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
}
type ApplicationCommandChannelOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  channel_types?: (ChannelTypes[] | null) | undefined
}
type ApplicationCommandOptionIntegerChoice = {
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  value: Int53Type
}
type ApplicationCommandIntegerOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  autocomplete?: (boolean | null) | undefined
  choices?: (ApplicationCommandOptionIntegerChoice[] | null) | undefined
  min_value?: ({ [x: string]: unknown } | null) | Int53Type | undefined
  max_value?: ({ [x: string]: unknown } | null) | Int53Type | undefined
}
type ApplicationCommandMentionableOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
}
type ApplicationCommandOptionNumberChoice = {
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  value: number
}
type ApplicationCommandNumberOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  autocomplete?: (boolean | null) | undefined
  choices?: (ApplicationCommandOptionNumberChoice[] | null) | undefined
  min_value?: (number | null) | undefined
  max_value?: (number | null) | undefined
}
type ApplicationCommandRoleOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
}
type ApplicationCommandOptionStringChoice = {
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  value: string
}
type ApplicationCommandStringOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  autocomplete?: (boolean | null) | undefined
  min_length?: (number | null) | undefined
  max_length?: (number | null) | undefined
  choices?: (ApplicationCommandOptionStringChoice[] | null) | undefined
}
type ApplicationCommandUserOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
}
type ApplicationCommandSubcommandOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  options?:
    | (
        | (
            | ApplicationCommandAttachmentOption
            | ApplicationCommandBooleanOption
            | ApplicationCommandChannelOption
            | ApplicationCommandIntegerOption
            | ApplicationCommandMentionableOption
            | ApplicationCommandNumberOption
            | ApplicationCommandRoleOption
            | ApplicationCommandStringOption
            | ApplicationCommandUserOption
          )[]
        | null
      )
    | undefined
}
type ApplicationCommandSubcommandGroupOption = {
  type: {}
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
  required?: (boolean | null) | undefined
  options?: (ApplicationCommandSubcommandOption[] | null) | undefined
}
type ApplicationCommandUpdateRequest = {
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description?: (string | null) | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  options?:
    | (
        | (
            | ApplicationCommandAttachmentOption
            | ApplicationCommandBooleanOption
            | ApplicationCommandChannelOption
            | ApplicationCommandIntegerOption
            | ApplicationCommandMentionableOption
            | ApplicationCommandNumberOption
            | ApplicationCommandRoleOption
            | ApplicationCommandStringOption
            | ApplicationCommandSubcommandGroupOption
            | ApplicationCommandSubcommandOption
            | ApplicationCommandUserOption
          )[]
        | null
      )
    | undefined
  default_member_permissions?: (number | null) | undefined
  dm_permission?: (boolean | null) | undefined
  contexts?: (InteractionContextType[] | null) | undefined
  integration_types?: (ApplicationIntegrationType[] | null) | undefined
  handler?: ({ [x: string]: unknown } | null) | ApplicationCommandHandler | undefined
  type?: ({ [x: string]: unknown } | null) | ApplicationCommandType | undefined
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
}
type ApplicationCommandCreateRequest = {
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description?: (string | null) | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  options?:
    | (
        | (
            | ApplicationCommandAttachmentOption
            | ApplicationCommandBooleanOption
            | ApplicationCommandChannelOption
            | ApplicationCommandIntegerOption
            | ApplicationCommandMentionableOption
            | ApplicationCommandNumberOption
            | ApplicationCommandRoleOption
            | ApplicationCommandStringOption
            | ApplicationCommandSubcommandGroupOption
            | ApplicationCommandSubcommandOption
            | ApplicationCommandUserOption
          )[]
        | null
      )
    | undefined
  default_member_permissions?: (number | null) | undefined
  dm_permission?: (boolean | null) | undefined
  contexts?: (InteractionContextType[] | null) | undefined
  integration_types?: (ApplicationIntegrationType[] | null) | undefined
  handler?: ({ [x: string]: unknown } | null) | ApplicationCommandHandler | undefined
  type?: ({ [x: string]: unknown } | null) | ApplicationCommandType | undefined
}
type ApplicationCommandPatchRequestPartial = {
  name?: string | undefined
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description?: (string | null) | undefined
  description_localizations?: ({ [x: string]: string } | null) | undefined
  options?:
    | (
        | (
            | ApplicationCommandAttachmentOption
            | ApplicationCommandBooleanOption
            | ApplicationCommandChannelOption
            | ApplicationCommandIntegerOption
            | ApplicationCommandMentionableOption
            | ApplicationCommandNumberOption
            | ApplicationCommandRoleOption
            | ApplicationCommandStringOption
            | ApplicationCommandSubcommandGroupOption
            | ApplicationCommandSubcommandOption
            | ApplicationCommandUserOption
          )[]
        | null
      )
    | undefined
  default_member_permissions?: (number | null) | undefined
  dm_permission?: (boolean | null) | undefined
  contexts?: (InteractionContextType[] | null) | undefined
  integration_types?: (ApplicationIntegrationType[] | null) | undefined
  handler?: ({ [x: string]: unknown } | null) | ApplicationCommandHandler | undefined
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
  guild_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  deleted: boolean
  starts_at: string | null
  ends_at: string | null
  type: EntitlementTypes
  fulfilled_at?: (string | null) | undefined
  fulfillment_status?:
    | ({ [x: string]: unknown } | null)
    | EntitlementTenantFulfillmentStatusResponse
    | undefined
  consumed?: boolean | undefined
  gifter_user_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
}
type EntitlementOwnerTypes = 1 | 2
type CreateEntitlementRequestData = {
  sku_id: SnowflakeType
  owner_id: SnowflakeType
  owner_type: EntitlementOwnerTypes
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
type ApplicationCommandPermission = {
  id: SnowflakeType
  type: ApplicationCommandPermissionType
  permission: boolean
}
type MetadataItemTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type ApplicationRoleConnectionsMetadataItemResponse = {
  type: MetadataItemTypes
  key: string
  name: string
  name_localizations?: ({ [x: string]: string } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string } | null) | undefined
}
type ApplicationRoleConnectionsMetadataItemRequest = {
  type: MetadataItemTypes
  key: string
  name: string
  name_localizations?: ({ [x: string]: string | null } | null) | undefined
  description: string
  description_localizations?: ({ [x: string]: string | null } | null) | undefined
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
  emoji_id: ({ [x: string]: unknown } | null) | SnowflakeType
  emoji_name: string | null
}
type DefaultReactionEmojiResponse = {
  emoji_id: ({ [x: string]: unknown } | null) | SnowflakeType
  emoji_name: string | null
}
type ThreadSortOrder = 0 | 1
type ForumLayout = 0 | 1 | 2
type ThreadSearchTagSetting = 'match_all' | 'match_some'
type GuildChannelResponse = {
  id: SnowflakeType
  type: {}
  last_message_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  guild_id: SnowflakeType
  name: string
  parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
  default_reaction_emoji?:
    | ({ [x: string]: unknown } | null)
    | DefaultReactionEmojiResponse
    | undefined
  default_sort_order?: ({ [x: string]: unknown } | null) | ThreadSortOrder | undefined
  default_forum_layout?: ForumLayout | undefined
  default_tag_setting?: ({ [x: string]: unknown } | null) | ThreadSearchTagSetting | undefined
}
type PrivateChannelResponse = {
  id: SnowflakeType
  type: {}
  last_message_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  recipients: UserResponse[]
}
type PrivateGroupChannelResponse = {
  id: SnowflakeType
  type: {}
  last_message_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
  avatar_decoration_data?:
    | ({ [x: string]: unknown } | null)
    | UserAvatarDecorationResponse
    | undefined
  banner: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: SnowflakeType[]
  collectibles?: ({ [x: string]: unknown } | null) | UserCollectiblesResponse | undefined
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
  type: {}
  last_message_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  guild_id: SnowflakeType
  name: string
  parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
type UpdateDMRequestPartial = { name?: (string | null) | undefined }
type UpdateGroupDMRequestPartial = {
  name?: (string | null) | undefined
  icon?: (string | null) | undefined
}
type ChannelPermissionOverwriteRequest = {
  id: SnowflakeType
  type?: ({ [x: string]: unknown } | null) | ChannelPermissionOverwrites | undefined
  allow?: (number | null) | undefined
  deny?: (number | null) | undefined
}
type UpdateDefaultReactionEmojiRequest = {
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
}
type UpdateThreadTagRequest = {
  name: string
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
  moderated?: (boolean | null) | undefined
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
}
type UpdateGuildChannelRequestPartial = {
  type?: ({ [x: string]: unknown } | null) | {} | undefined
  name?: string | undefined
  position?: (number | null) | undefined
  topic?: (string | null) | undefined
  bitrate?: (number | null) | undefined
  user_limit?: (number | null) | undefined
  nsfw?: (boolean | null) | undefined
  rate_limit_per_user?: (number | null) | undefined
  parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  permission_overwrites?: (ChannelPermissionOverwriteRequest[] | null) | undefined
  rtc_region?: (string | null) | undefined
  video_quality_mode?: ({ [x: string]: unknown } | null) | VideoQualityModes | undefined
  default_auto_archive_duration?:
    | ({ [x: string]: unknown } | null)
    | ThreadAutoArchiveDuration
    | undefined
  default_reaction_emoji?:
    | ({ [x: string]: unknown } | null)
    | UpdateDefaultReactionEmojiRequest
    | undefined
  default_thread_rate_limit_per_user?: (number | null) | undefined
  default_sort_order?: ({ [x: string]: unknown } | null) | ThreadSortOrder | undefined
  default_forum_layout?: ({ [x: string]: unknown } | null) | ForumLayout | undefined
  default_tag_setting?: ({ [x: string]: unknown } | null) | ThreadSearchTagSetting | undefined
  flags?: (number | null) | undefined
  available_tags?: (UpdateThreadTagRequest[] | null) | undefined
}
type UpdateThreadRequestPartial = {
  name?: (string | null) | undefined
  archived?: (boolean | null) | undefined
  locked?: (boolean | null) | undefined
  invitable?: (boolean | null) | undefined
  auto_archive_duration?: ({ [x: string]: unknown } | null) | ThreadAutoArchiveDuration | undefined
  rate_limit_per_user?: (number | null) | undefined
  flags?: (number | null) | undefined
  applied_tags?: (SnowflakeType[] | null) | undefined
  bitrate?: (number | null) | undefined
  user_limit?: (number | null) | undefined
  rtc_region?: (string | null) | undefined
  video_quality_mode?: ({ [x: string]: unknown } | null) | VideoQualityModes | undefined
}
type ChannelFollowerResponse = { channel_id: SnowflakeType; webhook_id: SnowflakeType }
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
  type: {}
  code: string
  inviter?: UserResponse | undefined
  max_age?: number | undefined
  created_at?: string | undefined
  expires_at: string | null
  friends_count?: number | undefined
  channel: ({ [x: string]: unknown } | null) | InviteChannelResponse
  is_contact?: boolean | undefined
  uses?: number | undefined
  max_uses?: number | undefined
  flags?: number | undefined
}
type GroupDMInviteResponse = {
  type: {}
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
  verification_level: ({ [x: string]: unknown } | null) | VerificationLevels
  vanity_url_code: string | null
  nsfw_level: ({ [x: string]: unknown } | null) | GuildNSFWContentLevel
  nsfw: boolean | null
  premium_subscription_count: number
}
type InviteTargetTypes = 1 | 2 | 3
type InviteApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: ({ [x: string]: unknown } | null) | ApplicationTypes
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
    | { [x: string]: ApplicationIntegrationTypeConfigurationResponse }
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
  guild_scheduled_event_exception_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: GuildScheduledEventEntityTypes
  entity_id: ({ [x: string]: unknown } | null) | SnowflakeType
  recurrence_rule: ({ [x: string]: unknown } | null) | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: ({ [x: string]: unknown } | null) | ScheduledEventUserResponse | undefined
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
  type: {}
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
type CreateGroupDMInviteRequest = { max_age?: (number | null) | undefined }
type CreateGuildInviteRequest = {
  max_age?: (number | null) | undefined
  temporary?: (boolean | null) | undefined
  max_uses?: (number | null) | undefined
  unique?: (boolean | null) | undefined
  target_user_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  target_application_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  target_type?: ({ [x: string]: unknown } | null) | {} | undefined
  role_ids?: string | SnowflakeType[] | ({ [x: string]: unknown } | null) | undefined
  target_user_ids?: string | SnowflakeType[] | ({ [x: string]: unknown } | null) | undefined
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
type ButtonStyleTypes = 1 | 2 | 3 | 4 | 5 | 6
type ComponentEmojiResponse = {
  id?: SnowflakeType | undefined
  name: string
  animated?: boolean | undefined
}
type ButtonComponentResponse = {
  type: {}
  id: number
  custom_id?: string | undefined
  style: ButtonStyleTypes
  label?: string | undefined
  disabled?: boolean | undefined
  emoji?: ComponentEmojiResponse | undefined
  url?: (string | null) | undefined
  sku_id?: SnowflakeType | undefined
}
type ChannelSelectDefaultValueResponse = { type: {}; id: SnowflakeType }
type ChannelSelectComponentResponse = {
  type: {}
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  channel_types?: ChannelTypes[] | undefined
  default_values?: ChannelSelectDefaultValueResponse[] | undefined
}
type RoleSelectDefaultValueResponse = { type: {}; id: SnowflakeType }
type UserSelectDefaultValueResponse = { type: {}; id: SnowflakeType }
type MentionableSelectComponentResponse = {
  type: {}
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  default_values?: (RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse)[] | undefined
}
type RoleSelectComponentResponse = {
  type: {}
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
  type: {}
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
  type: {}
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
  type: {}
  id: number
  custom_id: string
  placeholder?: string | undefined
  min_values: number
  max_values: number
  disabled?: boolean | undefined
  default_values?: UserSelectDefaultValueResponse[] | undefined
}
type ActionRowComponentResponse = {
  type: {}
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
  type: {}
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
type MediaGalleryComponentResponse = { type: {}; id: number; items: MediaGalleryItemResponse[] }
type TextDisplayComponentResponse = { type: {}; id: number; content: string }
type ThumbnailComponentResponse = {
  type: {}
  id: number
  media: UnfurledMediaResponse
  description: string | null
  spoiler: boolean
}
type SectionComponentResponse = {
  type: {}
  id: number
  components: TextDisplayComponentResponse[]
  accessory: ButtonComponentResponse | ThumbnailComponentResponse
}
type MessageComponentSeparatorSpacingSize = 1 | 2
type SeparatorComponentResponse = {
  type: {}
  id: number
  spacing: MessageComponentSeparatorSpacingSize
  divider: boolean
}
type ContainerComponentResponse = {
  type: {}
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
type StickerFormatTypes = 1 | 2 | 3 | 4
type GuildStickerResponse = {
  id: SnowflakeType
  name: string
  tags: string
  type: {}
  format_type: ({ [x: string]: unknown } | null) | StickerFormatTypes
  description: string | null
  available: boolean
  guild_id: SnowflakeType
  user?: UserResponse | undefined
}
type StandardStickerResponse = {
  id: SnowflakeType
  name: string
  tags: string
  type: {}
  format_type: ({ [x: string]: unknown } | null) | StickerFormatTypes
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
  type: ({ [x: string]: unknown } | null) | ApplicationTypes
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
  avatar_decoration_data?:
    | ({ [x: string]: unknown } | null)
    | UserAvatarDecorationResponse
    | undefined
  banner: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: SnowflakeType[]
  collectibles?: ({ [x: string]: unknown } | null) | UserCollectiblesResponse | undefined
}
type GuildRoleTagsResponse = {
  premium_subscriber?: ({ [x: string]: unknown } | null) | undefined
  bot_id?: SnowflakeType | undefined
  integration_id?: SnowflakeType | undefined
  subscription_listing_id?: SnowflakeType | undefined
  available_for_purchase?: ({ [x: string]: unknown } | null) | undefined
  guild_connections?: ({ [x: string]: unknown } | null) | undefined
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
  users?: ({ [x: string]: UserResponse } | null) | undefined
  members?: ({ [x: string]: BasicGuildMemberResponse } | null) | undefined
  channels?:
    | ({
        [x: string]:
          | GuildChannelResponse
          | PrivateChannelResponse
          | PrivateGroupChannelResponse
          | ThreadResponse
      } | null)
    | undefined
  roles?: ({ [x: string]: GuildRoleResponse } | null) | undefined
}
type MessageReactionEmojiResponse = {
  id: ({ [x: string]: unknown } | null) | SnowflakeType
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
  type: {}
  user?: UserResponse | undefined
  authorizing_integration_owners: { [x: string]: SnowflakeType }
  original_response_message_id?: SnowflakeType | undefined
  target_user?: UserResponse | undefined
  target_message_id?: SnowflakeType | undefined
}
type MessageComponentInteractionMetadataResponse = {
  id: SnowflakeType
  type: {}
  user?: UserResponse | undefined
  authorizing_integration_owners: { [x: string]: SnowflakeType }
  original_response_message_id?: SnowflakeType | undefined
  interacted_message_id: SnowflakeType
}
type ModalSubmitInteractionMetadataResponse = {
  id: SnowflakeType
  type: {}
  user?: UserResponse | undefined
  authorizing_integration_owners: { [x: string]: SnowflakeType }
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
  nonce?: bigint | string | undefined
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
    | ApplicationCommandInteractionMetadataResponse
    | MessageComponentInteractionMetadataResponse
    | ModalSubmitInteractionMetadataResponse
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
  nonce?: bigint | string | undefined
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
    | ApplicationCommandInteractionMetadataResponse
    | MessageComponentInteractionMetadataResponse
    | ModalSubmitInteractionMetadataResponse
    | undefined
  message_snapshots?: MessageSnapshotResponse[] | undefined
  lobby_member?: MessageLobbyMemberResponse | undefined
  actor?: UserResponse | undefined
  reactions?: MessageReactionResponse[] | undefined
  referenced_message?: ({ [x: string]: unknown } | null) | BasicMessageResponse | undefined
}
type RichEmbedAuthor = {
  name?: (string | null) | undefined
  url?: (string | null) | undefined
  icon_url?: (string | null) | undefined
}
type RichEmbedImage = {
  url?: (string | null) | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
  placeholder?: (string | null) | undefined
  placeholder_version?: (number | null) | undefined
  is_animated?: (boolean | null) | undefined
  description?: (string | null) | undefined
}
type RichEmbedThumbnail = {
  url?: (string | null) | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
  placeholder?: (string | null) | undefined
  placeholder_version?: (number | null) | undefined
  is_animated?: (boolean | null) | undefined
  description?: (string | null) | undefined
}
type RichEmbedFooter = {
  text?: (string | null) | undefined
  icon_url?: (string | null) | undefined
}
type RichEmbedField = { name: string; value: string; inline?: (boolean | null) | undefined }
type RichEmbedProvider = { name?: (string | null) | undefined; url?: (string | null) | undefined }
type RichEmbedVideo = {
  url?: (string | null) | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
  placeholder?: (string | null) | undefined
  placeholder_version?: (number | null) | undefined
  is_animated?: (boolean | null) | undefined
  description?: (string | null) | undefined
}
type RichEmbedAudio = {
  url?: (string | null) | undefined
  description?: (string | null) | undefined
}
type RichEmbed = {
  type?: (string | null) | undefined
  url?: (string | null) | undefined
  title?: (string | null) | undefined
  color?: (number | null) | undefined
  timestamp?: (string | null) | undefined
  description?: (string | null) | undefined
  author?: ({ [x: string]: unknown } | null) | RichEmbedAuthor | undefined
  image?: ({ [x: string]: unknown } | null) | RichEmbedImage | undefined
  thumbnail?: ({ [x: string]: unknown } | null) | RichEmbedThumbnail | undefined
  footer?: ({ [x: string]: unknown } | null) | RichEmbedFooter | undefined
  fields?: (RichEmbedField[] | null) | undefined
  provider?: ({ [x: string]: unknown } | null) | RichEmbedProvider | undefined
  video?: ({ [x: string]: unknown } | null) | RichEmbedVideo | undefined
  audio?: ({ [x: string]: unknown } | null) | RichEmbedAudio | undefined
}
type AllowedMentionTypes = 'users' | 'roles' | 'everyone'
type MessageAllowedMentionsRequest = {
  parse?: ((({ [x: string]: unknown } | null) | AllowedMentionTypes)[] | null) | undefined
  users?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
  roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
  replied_user?: (boolean | null) | undefined
}
type ComponentEmojiForRequest = {
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  name: string
}
type ButtonComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id?: (string | null) | undefined
  style: ButtonStyleTypes
  label?: (string | null) | undefined
  disabled?: (boolean | null) | undefined
  url?: (string | null) | undefined
  sku_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji?: ({ [x: string]: unknown } | null) | ComponentEmojiForRequest | undefined
}
type ChannelSelectDefaultValue = { type: {}; id: SnowflakeType }
type ChannelSelectComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: (ChannelSelectDefaultValue[] | null) | undefined
  channel_types?: (ChannelTypes[] | null) | undefined
}
type RoleSelectDefaultValue = { type: {}; id: SnowflakeType }
type UserSelectDefaultValue = { type: {}; id: SnowflakeType }
type MentionableSelectComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: ((RoleSelectDefaultValue | UserSelectDefaultValue)[] | null) | undefined
}
type RoleSelectComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: (RoleSelectDefaultValue[] | null) | undefined
}
type StringSelectOptionForRequest = {
  label: string
  value: string
  description?: (string | null) | undefined
  default?: (boolean | null) | undefined
  emoji?: ({ [x: string]: unknown } | null) | ComponentEmojiForRequest | undefined
}
type StringSelectComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  options: StringSelectOptionForRequest[]
}
type UserSelectComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: (UserSelectDefaultValue[] | null) | undefined
}
type ActionRowComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  components: (
    | ButtonComponentForMessageRequest
    | ChannelSelectComponentForMessageRequest
    | MentionableSelectComponentForMessageRequest
    | RoleSelectComponentForMessageRequest
    | StringSelectComponentForMessageRequest
    | UserSelectComponentForMessageRequest
  )[]
}
type UnfurledMediaRequestWithAttachmentReferenceRequired = { url: string }
type FileComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  spoiler?: (boolean | null) | undefined
  file: UnfurledMediaRequestWithAttachmentReferenceRequired
}
type UnfurledMediaRequest = { url: string }
type MediaGalleryItemForMessageRequest = {
  description?: (string | null) | undefined
  spoiler?: (boolean | null) | undefined
  media: UnfurledMediaRequest
}
type MediaGalleryComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  items: MediaGalleryItemForMessageRequest[]
}
type TextDisplayComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  content: string
}
type ThumbnailComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  description?: (string | null) | undefined
  spoiler?: (boolean | null) | undefined
  media: UnfurledMediaRequest
}
type SectionComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  components: TextDisplayComponentForMessageRequest[]
  accessory: ButtonComponentForMessageRequest | ThumbnailComponentForMessageRequest
}
type SeparatorComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  spacing?: ({ [x: string]: unknown } | null) | MessageComponentSeparatorSpacingSize | undefined
  divider?: (boolean | null) | undefined
}
type ContainerComponentForMessageRequest = {
  type: {}
  id?: (number | null) | undefined
  accent_color?: (number | null) | undefined
  components: (
    | ActionRowComponentForMessageRequest
    | FileComponentForMessageRequest
    | MediaGalleryComponentForMessageRequest
    | SectionComponentForMessageRequest
    | SeparatorComponentForMessageRequest
    | TextDisplayComponentForMessageRequest
  )[]
  spoiler?: (boolean | null) | undefined
}
type MessageAttachmentRequest = {
  id: SnowflakeType
  filename?: (string | null) | undefined
  description?: (string | null) | undefined
  duration_secs?: (number | null) | undefined
  waveform?: (string | null) | undefined
  title?: (string | null) | undefined
  is_spoiler?: (boolean | null) | undefined
}
type PollEmoji = {
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  name?: (string | null) | undefined
  animated?: (boolean | null) | undefined
}
type PollMedia = {
  text?: (string | null) | undefined
  emoji?: ({ [x: string]: unknown } | null) | PollEmoji | undefined
}
type PollEmojiCreateRequest = {
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  name?: (string | null) | undefined
  animated?: (boolean | null) | undefined
}
type PollMediaCreateRequest = {
  text?: (string | null) | undefined
  emoji?: ({ [x: string]: unknown } | null) | PollEmojiCreateRequest | undefined
}
type PollAnswerCreateRequest = { poll_media: PollMediaCreateRequest }
type PollCreateRequest = {
  question: PollMedia
  answers: PollAnswerCreateRequest[]
  allow_multiselect?: (boolean | null) | undefined
  layout_type?: ({ [x: string]: unknown } | null) | PollLayoutTypes | undefined
  duration?: (number | null) | undefined
}
type CustomClientThemeShareRequest = {
  colors: string[]
  gradient_angle: number
  base_mix: number
  base_theme?: ({ [x: string]: unknown } | null) | MessageShareCustomUserThemeBaseTheme | undefined
}
type MessageReferenceRequest = {
  guild_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  message_id: SnowflakeType
  fail_if_not_exists?: (boolean | null) | undefined
  type?: ({ [x: string]: unknown } | null) | MessageReferenceType | undefined
}
type MessageCreateRequest = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  sticker_ids?: (SnowflakeType[] | null) | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  flags?: (number | null) | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
  shared_client_theme?:
    | ({ [x: string]: unknown } | null)
    | CustomClientThemeShareRequest
    | undefined
  message_reference?: ({ [x: string]: unknown } | null) | MessageReferenceRequest | undefined
  nonce?: bigint | string | ({ [x: string]: unknown } | null) | undefined
  enforce_nonce?: (boolean | null) | undefined
  tts?: (boolean | null) | undefined
}
type PinnedMessageResponse = { pinned_at: string; message: MessageResponse }
type PinnedMessagesResponse = { items: PinnedMessageResponse[]; has_more: boolean }
type MessageEditRequestPartial = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  flags?: (number | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  sticker_ids?: (SnowflakeType[] | null) | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
}
type ReactionTypes = 0 | 1
type CreateTextThreadWithMessageRequest = {
  name: string
  auto_archive_duration?: ({ [x: string]: unknown } | null) | ThreadAutoArchiveDuration | undefined
  rate_limit_per_user?: (number | null) | undefined
}
type PermissionsResponse = { permissions: string }
type PollAnswerDetailsResponse = { users: UserResponse[] }
type SoundboardSoundSendRequest = {
  sound_id: SnowflakeType
  source_guild_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
}
type BaseCreateMessageCreateRequest = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  sticker_ids?: (SnowflakeType[] | null) | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  flags?: (number | null) | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
  shared_client_theme?:
    | ({ [x: string]: unknown } | null)
    | CustomClientThemeShareRequest
    | undefined
}
type CreateForumThreadRequest = {
  name: string
  auto_archive_duration?: ({ [x: string]: unknown } | null) | ThreadAutoArchiveDuration | undefined
  rate_limit_per_user?: (number | null) | undefined
  applied_tags?: (SnowflakeType[] | null) | undefined
  message: BaseCreateMessageCreateRequest
}
type CreateTextThreadWithoutMessageRequest = {
  name: string
  auto_archive_duration?: ({ [x: string]: unknown } | null) | ThreadAutoArchiveDuration | undefined
  rate_limit_per_user?: (number | null) | undefined
  type?: ({ [x: string]: unknown } | null) | {} | undefined
  invitable?: (boolean | null) | undefined
}
type CreatedThreadResponse = {
  id: SnowflakeType
  type: {}
  last_message_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  flags: number
  last_pin_timestamp?: (string | null) | undefined
  guild_id: SnowflakeType
  name: string
  parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
type ThreadSortingMode = 'relevance' | 'creation_time' | 'last_message_time' | 'archive_time'
type SortingOrder = 'asc' | 'desc'
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
type TypingIndicatorResponse = { [x: string]: unknown }
type ApplicationIncomingWebhookResponse = {
  application_id: ({ [x: string]: unknown } | null) | SnowflakeType
  avatar: string | null
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  guild_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  id: SnowflakeType
  name: string
  type: {}
  user?: UserResponse | undefined
}
type WebhookSourceGuildResponse = { id: SnowflakeType; icon: string | null; name: string }
type WebhookSourceChannelResponse = { id: SnowflakeType; name: string }
type ChannelFollowerWebhookResponse = {
  application_id: ({ [x: string]: unknown } | null) | SnowflakeType
  avatar: string | null
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  guild_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  id: SnowflakeType
  name: string
  type: {}
  user?: UserResponse | undefined
  source_guild?: WebhookSourceGuildResponse | undefined
  source_channel?: WebhookSourceChannelResponse | undefined
}
type GuildIncomingWebhookResponse = {
  application_id: ({ [x: string]: unknown } | null) | SnowflakeType
  avatar: string | null
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  guild_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  id: SnowflakeType
  name: string
  type: {}
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
  colors: ({ [x: string]: unknown } | null) | GuildTemplateRoleColorsResponse
  hoist: boolean
  mentionable: boolean
  icon: string | null
  unicode_emoji: string | null
}
type GuildTemplateChannelTags = {
  id: number | null
  name: string
  emoji_id: ({ [x: string]: unknown } | null) | SnowflakeType
  emoji_name: string | null
  moderated: boolean | null
}
type GuildTemplateChannelResponse = {
  id: number | null
  type: {}
  name: string | null
  position: number | null
  topic: string | null
  bitrate: number
  user_limit: number
  nsfw: boolean
  rate_limit_per_user: number
  parent_id: ({ [x: string]: unknown } | null) | SnowflakeType
  default_auto_archive_duration: ({ [x: string]: unknown } | null) | ThreadAutoArchiveDuration
  permission_overwrites: ChannelPermissionOverwriteResponse[]
  available_tags: GuildTemplateChannelTags[] | null
  template: string
  default_reaction_emoji: ({ [x: string]: unknown } | null) | DefaultReactionEmojiResponse
  default_thread_rate_limit_per_user: number | null
  default_sort_order: ({ [x: string]: unknown } | null) | ThreadSortOrder
  default_forum_layout: ({ [x: string]: unknown } | null) | ForumLayout
  default_tag_setting: ({ [x: string]: unknown } | null) | ThreadSearchTagSetting
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
  afk_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  afk_timeout: AfkTimeouts
  system_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
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
  creator: ({ [x: string]: unknown } | null) | UserResponse
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
  application_id: ({ [x: string]: unknown } | null) | SnowflakeType
  region: string
  afk_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  afk_timeout: AfkTimeouts
  system_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  system_channel_flags: number
  widget_enabled: boolean
  widget_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
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
  rules_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  safety_alerts_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  public_updates_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  premium_progress_bar_enabled: boolean
  premium_progress_bar_enabled_user_updated_at?: (string | null) | undefined
  nsfw: boolean
  nsfw_level: GuildNSFWContentLevel
  emojis: EmojiResponse[]
  stickers: GuildStickerResponse[]
  incidents_data: ({ [x: string]: unknown } | null) | GuildIncidentsDataResponse
  approximate_member_count?: (number | null) | undefined
  approximate_presence_count?: (number | null) | undefined
}
type GuildPatchRequestPartial = {
  name?: string | undefined
  description?: (string | null) | undefined
  region?: (string | null) | undefined
  icon?: (string | null) | undefined
  verification_level?: ({ [x: string]: unknown } | null) | VerificationLevels | undefined
  default_message_notifications?:
    | ({ [x: string]: unknown } | null)
    | UserNotificationSettings
    | undefined
  explicit_content_filter?:
    | ({ [x: string]: unknown } | null)
    | GuildExplicitContentFilterTypes
    | undefined
  preferred_locale?: ({ [x: string]: unknown } | null) | AvailableLocalesEnum | undefined
  afk_timeout?: ({ [x: string]: unknown } | null) | AfkTimeouts | undefined
  afk_channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  system_channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  splash?: (string | null) | undefined
  banner?: (string | null) | undefined
  system_channel_flags?: (number | null) | undefined
  features?: ((string | null)[] | null) | undefined
  discovery_splash?: (string | null) | undefined
  home_header?: (string | null) | undefined
  rules_channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  safety_alerts_channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  public_updates_channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  premium_progress_bar_enabled?: (boolean | null) | undefined
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
  application_id: ({ [x: string]: unknown } | null) | SnowflakeType
  region: string
  afk_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  afk_timeout: AfkTimeouts
  system_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  system_channel_flags: number
  widget_enabled: boolean
  widget_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
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
  rules_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  safety_alerts_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  public_updates_channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  premium_progress_bar_enabled: boolean
  premium_progress_bar_enabled_user_updated_at?: (string | null) | undefined
  nsfw: boolean
  nsfw_level: GuildNSFWContentLevel
  emojis: EmojiResponse[]
  stickers: GuildStickerResponse[]
  incidents_data: ({ [x: string]: unknown } | null) | GuildIncidentsDataResponse
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
  new_value?: { [x: string]: unknown } | undefined
  old_value?: { [x: string]: unknown } | undefined
}
type AuditLogEntryResponse = {
  id: SnowflakeType
  action_type: AuditLogActionTypes
  user_id: ({ [x: string]: unknown } | null) | SnowflakeType
  target_id: ({ [x: string]: unknown } | null) | SnowflakeType
  changes?: AuditLogObjectChangeResponse[] | undefined
  options?: { [x: string]: string } | undefined
  reason?: string | undefined
}
type AccountResponse = { id: string; name: string | null }
type PartialDiscordIntegrationResponse = {
  id: SnowflakeType
  type: {}
  name: string | null
  account: AccountResponse
  application_id: SnowflakeType
}
type PartialExternalConnectionIntegrationResponse = {
  id: SnowflakeType
  type: {}
  name: string | null
  account: AccountResponse
}
type PartialGuildSubscriptionIntegrationResponse = {
  id: SnowflakeType
  type: {}
  name: string | null
  account: AccountResponse
}
type EntityMetadataExternalResponse = { location: string }
type ExternalScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: {}
  entity_id: ({ [x: string]: unknown } | null) | SnowflakeType
  recurrence_rule: ({ [x: string]: unknown } | null) | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: ({ [x: string]: unknown } | null) | ScheduledEventUserResponse | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
  entity_metadata: EntityMetadataExternalResponse
}
type EntityMetadataStageInstanceResponse = { [x: string]: unknown }
type StageScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: {}
  entity_id: ({ [x: string]: unknown } | null) | SnowflakeType
  recurrence_rule: ({ [x: string]: unknown } | null) | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: ({ [x: string]: unknown } | null) | ScheduledEventUserResponse | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
  entity_metadata: ({ [x: string]: unknown } | null) | EntityMetadataStageInstanceResponse
}
type EntityMetadataVoiceResponse = { [x: string]: unknown }
type VoiceScheduledEventResponse = {
  id: SnowflakeType
  guild_id: SnowflakeType
  name: string
  description: string | null
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator_id: ({ [x: string]: unknown } | null) | SnowflakeType
  creator?: UserResponse | undefined
  image: string | null
  scheduled_start_time: string
  scheduled_end_time: string | null
  status: GuildScheduledEventStatuses
  entity_type: {}
  entity_id: ({ [x: string]: unknown } | null) | SnowflakeType
  recurrence_rule: ({ [x: string]: unknown } | null) | RecurrenceRuleResponse
  user_count?: number | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  user_rsvp?: ({ [x: string]: unknown } | null) | ScheduledEventUserResponse | undefined
  guild_scheduled_event_exceptions: GuildScheduledEventExceptionResponse[]
  entity_metadata: ({ [x: string]: unknown } | null) | EntityMetadataVoiceResponse
}
type AutomodEventType = 1 | 2
type BlockMessageActionMetadataResponse = { custom_message?: string | undefined }
type BlockMessageActionResponse = { type: {}; metadata: BlockMessageActionMetadataResponse }
type FlagToChannelActionMetadataResponse = { channel_id: SnowflakeType }
type FlagToChannelActionResponse = { type: {}; metadata: FlagToChannelActionMetadataResponse }
type QuarantineUserActionMetadataResponse = { [x: string]: unknown }
type QuarantineUserActionResponse = { type: {}; metadata: QuarantineUserActionMetadataResponse }
type UserCommunicationDisabledActionMetadataResponse = { duration_seconds: number }
type UserCommunicationDisabledActionResponse = {
  type: {}
  metadata: UserCommunicationDisabledActionMetadataResponse
}
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
  trigger_type: {}
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
  trigger_type: {}
  enabled: boolean
  exempt_roles: SnowflakeType[]
  exempt_channels: SnowflakeType[]
  trigger_metadata: KeywordTriggerMetadataResponse
}
type MLSpamTriggerMetadataResponse = { [x: string]: unknown }
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
  trigger_type: {}
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
  trigger_type: {}
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
  trigger_type: {}
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
    | ({ [x: string]: unknown } | null)
  )[]
}
type BlockMessageActionMetadata = { custom_message?: (string | null) | undefined }
type BlockMessageAction = {
  type: {}
  metadata?: ({ [x: string]: unknown } | null) | BlockMessageActionMetadata | undefined
}
type FlagToChannelActionMetadata = { channel_id: SnowflakeType }
type FlagToChannelAction = { type: {}; metadata: FlagToChannelActionMetadata }
type QuarantineUserActionMetadata = { [x: string]: unknown }
type QuarantineUserAction = {
  type: {}
  metadata?: ({ [x: string]: unknown } | null) | QuarantineUserActionMetadata | undefined
}
type UserCommunicationDisabledActionMetadata = { duration_seconds?: (number | null) | undefined }
type UserCommunicationDisabledAction = {
  type: {}
  metadata: UserCommunicationDisabledActionMetadata
}
type DefaultKeywordListTriggerMetadata = {
  allow_list?: (string[] | null) | undefined
  presets?: (AutomodKeywordPresetType[] | null) | undefined
}
type DefaultKeywordListUpsertRequest = {
  name: string
  event_type: AutomodEventType
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type: {}
  trigger_metadata: DefaultKeywordListTriggerMetadata
}
type KeywordTriggerMetadata = {
  keyword_filter?: (string[] | null) | undefined
  regex_patterns?: (string[] | null) | undefined
  allow_list?: (string[] | null) | undefined
}
type KeywordUpsertRequest = {
  name: string
  event_type: AutomodEventType
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type: {}
  trigger_metadata?: ({ [x: string]: unknown } | null) | KeywordTriggerMetadata | undefined
}
type MLSpamTriggerMetadata = { [x: string]: unknown }
type MLSpamUpsertRequest = {
  name: string
  event_type: AutomodEventType
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type: {}
  trigger_metadata?: ({ [x: string]: unknown } | null) | MLSpamTriggerMetadata | undefined
}
type MentionSpamTriggerMetadata = {
  mention_total_limit?: (number | null) | undefined
  mention_raid_protection_enabled?: (boolean | null) | undefined
}
type MentionSpamUpsertRequest = {
  name: string
  event_type: AutomodEventType
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type: {}
  trigger_metadata?: ({ [x: string]: unknown } | null) | MentionSpamTriggerMetadata | undefined
}
type UserProfileMetadata = {
  keyword_filter?: (string[] | null) | undefined
  regex_patterns?: (string[] | null) | undefined
  allow_list?: (string[] | null) | undefined
}
type UserProfileUpsertRequest = {
  name: string
  event_type: AutomodEventType
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type: {}
  trigger_metadata: UserProfileMetadata
}
type DefaultKeywordListUpsertRequestPartial = {
  name?: string | undefined
  event_type?: AutomodEventType | undefined
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type?: {} | undefined
  trigger_metadata?: DefaultKeywordListTriggerMetadata | undefined
}
type KeywordUpsertRequestPartial = {
  name?: string | undefined
  event_type?: AutomodEventType | undefined
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type?: {} | undefined
  trigger_metadata?: ({ [x: string]: unknown } | null) | KeywordTriggerMetadata | undefined
}
type MLSpamUpsertRequestPartial = {
  name?: string | undefined
  event_type?: AutomodEventType | undefined
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type?: {} | undefined
  trigger_metadata?: ({ [x: string]: unknown } | null) | MLSpamTriggerMetadata | undefined
}
type MentionSpamUpsertRequestPartial = {
  name?: string | undefined
  event_type?: AutomodEventType | undefined
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type?: {} | undefined
  trigger_metadata?: ({ [x: string]: unknown } | null) | MentionSpamTriggerMetadata | undefined
}
type UserProfileUpsertRequestPartial = {
  name?: string | undefined
  event_type?: AutomodEventType | undefined
  actions?:
    | (
        | (
            | BlockMessageAction
            | FlagToChannelAction
            | QuarantineUserAction
            | UserCommunicationDisabledAction
          )[]
        | null
      )
    | undefined
  enabled?: (boolean | null) | undefined
  exempt_roles?: (SnowflakeType[] | null) | undefined
  exempt_channels?: (SnowflakeType[] | null) | undefined
  trigger_type?: {} | undefined
  trigger_metadata?: UserProfileMetadata | undefined
}
type GuildBanResponse = { user: UserResponse; reason: string | null }
type BanUserFromGuildRequest = {
  delete_message_seconds?: (number | null) | undefined
  delete_message_days?: (number | null) | undefined
}
type UnbanUserFromGuildRequest = { [x: string]: unknown }
type BulkBanUsersRequest = {
  user_ids: SnowflakeType[]
  delete_message_seconds?: (number | null) | undefined
}
type BulkBanUsersResponse = { banned_users: SnowflakeType[]; failed_users: SnowflakeType[] }
type CreateOrUpdateThreadTagRequest = {
  name: string
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
  moderated?: (boolean | null) | undefined
}
type CreateGuildChannelRequest = {
  type?: ({ [x: string]: unknown } | null) | {} | undefined
  name: string
  position?: (number | null) | undefined
  topic?: (string | null) | undefined
  bitrate?: (number | null) | undefined
  user_limit?: (number | null) | undefined
  nsfw?: (boolean | null) | undefined
  rate_limit_per_user?: (number | null) | undefined
  parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  permission_overwrites?: (ChannelPermissionOverwriteRequest[] | null) | undefined
  rtc_region?: (string | null) | undefined
  video_quality_mode?: ({ [x: string]: unknown } | null) | VideoQualityModes | undefined
  default_auto_archive_duration?:
    | ({ [x: string]: unknown } | null)
    | ThreadAutoArchiveDuration
    | undefined
  default_reaction_emoji?:
    | ({ [x: string]: unknown } | null)
    | UpdateDefaultReactionEmojiRequest
    | undefined
  default_thread_rate_limit_per_user?: (number | null) | undefined
  default_sort_order?: ({ [x: string]: unknown } | null) | ThreadSortOrder | undefined
  default_forum_layout?: ({ [x: string]: unknown } | null) | ForumLayout | undefined
  default_tag_setting?: ({ [x: string]: unknown } | null) | ThreadSearchTagSetting | undefined
  available_tags?:
    | ((({ [x: string]: unknown } | null) | CreateOrUpdateThreadTagRequest)[] | null)
    | undefined
}
type GuildIncidentActionsRequest = {
  invites_disabled_until?: (string | null) | undefined
  dms_disabled_until?: (string | null) | undefined
}
type IntegrationApplicationResponse = {
  id: SnowflakeType
  name: string
  icon: string | null
  description: string
  type: ({ [x: string]: unknown } | null) | ApplicationTypes
  cover_image?: string | undefined
  primary_sku_id?: SnowflakeType | undefined
  flags: number
  flags_new: string
  bot?: UserResponse | undefined
}
type DiscordIntegrationResponse = {
  type: {}
  name: string | null
  account: AccountResponse
  enabled: boolean
  id: SnowflakeType
  application: IntegrationApplicationResponse
  scopes: {}[]
  user?: UserResponse | undefined
}
type IntegrationExpireBehaviorTypes = 0 | 1
type IntegrationExpireGracePeriodTypes = 1 | 3 | 7 | 14 | 30
type ExternalConnectionIntegrationResponse = {
  type: {}
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
  role_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  syncing?: boolean | undefined
  enable_emoticons?: boolean | undefined
}
type GuildSubscriptionIntegrationResponse = {
  type: {}
  name: string | null
  account: AccountResponse
  enabled: boolean
  id: SnowflakeType
}
type PrivateGuildMemberResponse = {
  avatar: string | null
  avatar_decoration_data?:
    | ({ [x: string]: unknown } | null)
    | UserAvatarDecorationResponse
    | undefined
  banner: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: SnowflakeType[]
  collectibles?: ({ [x: string]: unknown } | null) | UserCollectiblesResponse | undefined
  user: UserResponse
  mute: boolean
  deaf: boolean
  permissions?: string | undefined
}
type BotAddGuildMemberRequest = {
  nick?: (string | null) | undefined
  roles?: (SnowflakeType[] | null) | undefined
  mute?: (boolean | null) | undefined
  deaf?: (boolean | null) | undefined
  access_token: string
  flags?: (number | null) | undefined
}
type SortingMode = 'relevance' | 'timestamp'
type AuthorType = 'user' | 'bot' | 'webhook' | '-user' | '-bot' | '-webhook'
type HasOption =
  | 'link'
  | 'embed'
  | 'file'
  | 'image'
  | 'video'
  | 'sound'
  | 'sticker'
  | 'poll'
  | 'snapshot'
  | '-link'
  | '-embed'
  | '-file'
  | '-image'
  | '-video'
  | '-sound'
  | '-sticker'
  | '-poll'
  | '-snapshot'
type SearchableEmbedType = 'image' | 'video' | 'gif' | 'sound' | 'article'
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
  nonce?: bigint | string | undefined
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
    | ApplicationCommandInteractionMetadataResponse
    | MessageComponentInteractionMetadataResponse
    | ModalSubmitInteractionMetadataResponse
    | undefined
  message_snapshots?: MessageSnapshotResponse[] | undefined
  lobby_member?: MessageLobbyMemberResponse | undefined
  actor?: UserResponse | undefined
  reactions?: MessageReactionResponse[] | undefined
  referenced_message?: ({ [x: string]: unknown } | null) | BasicMessageResponse | undefined
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
type SettingsEmojiResponse = {
  id: ({ [x: string]: unknown } | null) | SnowflakeType
  name: string | null
  animated: boolean
}
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
type OnboardingPromptOptionRequest = {
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  title: string
  description?: (string | null) | undefined
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
  emoji_animated?: (boolean | null) | undefined
  role_ids?: (SnowflakeType[] | null) | undefined
  channel_ids?: (SnowflakeType[] | null) | undefined
}
type UpdateOnboardingPromptRequest = {
  title: string
  options: OnboardingPromptOptionRequest[]
  single_select?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  in_onboarding?: (boolean | null) | undefined
  type?: ({ [x: string]: unknown } | null) | OnboardingPromptType | undefined
  id: SnowflakeType
}
type UpdateGuildOnboardingRequest = {
  prompts?: (UpdateOnboardingPromptRequest[] | null) | undefined
  enabled?: (boolean | null) | undefined
  default_channel_ids?: (SnowflakeType[] | null) | undefined
  mode?: ({ [x: string]: unknown } | null) | GuildOnboardingMode | undefined
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
type PruneGuildRequest = {
  days?: (number | null) | undefined
  compute_prune_count?: (boolean | null) | undefined
  include_roles?: string | SnowflakeType[] | ({ [x: string]: unknown } | null) | undefined
}
type VoiceRegionResponse = {
  id: string
  name: string
  custom: boolean
  deprecated: boolean
  optimal: boolean
}
type GuildJoinRequestApplicationStatus = 'STARTED' | 'SUBMITTED' | 'REJECTED' | 'APPROVED'
type MultipleChoiceFormFieldResponse = {
  field_type: {}
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  choices: string[]
  response?: number | undefined
}
type ParagraphFormFieldResponse = {
  field_type: {}
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  placeholder?: string | undefined
  response?: string | undefined
}
type TermsFormFieldResponse = {
  field_type: {}
  label?: string | undefined
  description?: string | undefined
  required?: boolean | undefined
  values: string[]
  response?: boolean | undefined
}
type TextInputFormFieldResponse = {
  field_type: {}
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
  application_status: ({ [x: string]: unknown } | null) | GuildJoinRequestApplicationStatus
  rejection_reason: string | null
  guild_id: SnowflakeType
  user_id: SnowflakeType
  user?: ({ [x: string]: unknown } | null) | UserResponse | undefined
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
  actioned_by_user?: ({ [x: string]: unknown } | null) | UserResponse | undefined
}
type GuildJoinRequestsListResponse = {
  total?: number | undefined
  guild_join_requests?: GuildJoinRequestResponse[] | undefined
}
type RoleColors = {
  primary_color?: (number | null) | undefined
  secondary_color?: (number | null) | undefined
  tertiary_color?: (number | null) | undefined
}
type CreateRoleRequest = {
  name?: (string | null) | undefined
  permissions?: (number | null) | undefined
  color?: (number | null) | undefined
  colors?: ({ [x: string]: unknown } | null) | RoleColors | undefined
  hoist?: (boolean | null) | undefined
  mentionable?: (boolean | null) | undefined
  icon?: (string | null) | undefined
  unicode_emoji?: (string | null) | undefined
}
type UpdateRolePositionsRequest = {
  id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  position?: (number | null) | undefined
}
type UpdateRoleRequestPartial = {
  name?: (string | null) | undefined
  permissions?: (number | null) | undefined
  color?: (number | null) | undefined
  colors?: ({ [x: string]: unknown } | null) | RoleColors | undefined
  hoist?: (boolean | null) | undefined
  mentionable?: (boolean | null) | undefined
  icon?: (string | null) | undefined
  unicode_emoji?: (string | null) | undefined
}
type ByNWeekday = { n: number; day: RecurrenceRuleWeekdays }
type RecurrenceRule = {
  start: string
  end?: (string | null) | undefined
  frequency: RecurrenceRuleFrequencies
  interval?: (number | null) | undefined
  by_weekday?: (RecurrenceRuleWeekdays[] | null) | undefined
  by_n_weekday?: (ByNWeekday[] | null) | undefined
  by_month?: (RecurrenceRuleMonths[] | null) | undefined
  by_month_day?: (number[] | null) | undefined
  by_year_day?: (number[] | null) | undefined
  count?: (number | null) | undefined
}
type EntityMetadataExternal = { location: string }
type ExternalScheduledEventCreateRequest = {
  name: string
  description?: (string | null) | undefined
  image?: (string | null) | undefined
  scheduled_start_time: string
  scheduled_end_time?: (string | null) | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  entity_type: {}
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  recurrence_rule?: ({ [x: string]: unknown } | null) | RecurrenceRule | undefined
  entity_metadata: EntityMetadataExternal
}
type EntityMetadataStageInstance = { [x: string]: unknown }
type StageScheduledEventCreateRequest = {
  name: string
  description?: (string | null) | undefined
  image?: (string | null) | undefined
  scheduled_start_time: string
  scheduled_end_time?: (string | null) | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  entity_type: {}
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  recurrence_rule?: ({ [x: string]: unknown } | null) | RecurrenceRule | undefined
  entity_metadata?: ({ [x: string]: unknown } | null) | EntityMetadataStageInstance | undefined
}
type EntityMetadataVoice = { [x: string]: unknown }
type VoiceScheduledEventCreateRequest = {
  name: string
  description?: (string | null) | undefined
  image?: (string | null) | undefined
  scheduled_start_time: string
  scheduled_end_time?: (string | null) | undefined
  privacy_level: GuildScheduledEventPrivacyLevels
  entity_type: {}
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  recurrence_rule?: ({ [x: string]: unknown } | null) | RecurrenceRule | undefined
  entity_metadata?: ({ [x: string]: unknown } | null) | EntityMetadataVoice | undefined
}
type ExternalScheduledEventPatchRequestPartial = {
  status?: ({ [x: string]: unknown } | null) | GuildScheduledEventStatuses | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  image?: (string | null) | undefined
  scheduled_start_time?: string | undefined
  scheduled_end_time?: (string | null) | undefined
  entity_type?: ({ [x: string]: unknown } | null) | {} | undefined
  privacy_level?: GuildScheduledEventPrivacyLevels | undefined
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  recurrence_rule?: ({ [x: string]: unknown } | null) | RecurrenceRule | undefined
  entity_metadata?: EntityMetadataExternal | undefined
}
type StageScheduledEventPatchRequestPartial = {
  status?: ({ [x: string]: unknown } | null) | GuildScheduledEventStatuses | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  image?: (string | null) | undefined
  scheduled_start_time?: string | undefined
  scheduled_end_time?: (string | null) | undefined
  entity_type?: ({ [x: string]: unknown } | null) | {} | undefined
  privacy_level?: GuildScheduledEventPrivacyLevels | undefined
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  recurrence_rule?: ({ [x: string]: unknown } | null) | RecurrenceRule | undefined
  entity_metadata?: ({ [x: string]: unknown } | null) | EntityMetadataStageInstance | undefined
}
type VoiceScheduledEventPatchRequestPartial = {
  status?: ({ [x: string]: unknown } | null) | GuildScheduledEventStatuses | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  image?: (string | null) | undefined
  scheduled_start_time?: string | undefined
  scheduled_end_time?: (string | null) | undefined
  entity_type?: ({ [x: string]: unknown } | null) | {} | undefined
  privacy_level?: GuildScheduledEventPrivacyLevels | undefined
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  recurrence_rule?: ({ [x: string]: unknown } | null) | RecurrenceRule | undefined
  entity_metadata?: ({ [x: string]: unknown } | null) | EntityMetadataVoice | undefined
}
type GuildScheduledEventExceptionCreateRequest = {
  scheduled_start_time?: (string | null) | undefined
  scheduled_end_time?: (string | null) | undefined
  original_scheduled_start_time: string
  is_canceled?: (boolean | null) | undefined
}
type GuildScheduledEventExceptionPatchRequestPartial = {
  scheduled_start_time?: (string | null) | undefined
  scheduled_end_time?: (string | null) | undefined
  is_canceled?: (boolean | null) | undefined
}
type ScheduledEventUserCountResponse = {
  guild_scheduled_event_count: number
  guild_scheduled_event_exception_counts: { [x: string]: number }
}
type SoundboardSoundResponse = {
  name: string
  sound_id: SnowflakeType
  volume: number
  emoji_id: ({ [x: string]: unknown } | null) | SnowflakeType
  emoji_name: string | null
  guild_id?: SnowflakeType | undefined
  available: boolean
  user?: UserResponse | undefined
}
type ListGuildSoundboardSoundsResponse = { items: SoundboardSoundResponse[] }
type SoundboardCreateRequest = {
  name: string
  volume?: (number | null) | undefined
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
  sound: string
}
type SoundboardPatchRequestPartial = {
  name?: string | undefined
  volume?: (number | null) | undefined
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
}
type VanityURLErrorResponse = { message: string; code: number }
type VanityURLResponse = {
  code: string | null
  uses: number
  error?: ({ [x: string]: unknown } | null) | VanityURLErrorResponse | undefined
}
type VoiceStateResponse = {
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
  deaf: boolean
  guild_id: ({ [x: string]: unknown } | null) | SnowflakeType
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
type UpdateSelfVoiceStateRequestPartial = {
  request_to_speak_timestamp?: (string | null) | undefined
  suppress?: (boolean | null) | undefined
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
}
type UpdateVoiceStateRequestPartial = {
  suppress?: (boolean | null) | undefined
  channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
}
type GuildWelcomeScreenChannelResponse = {
  channel_id: SnowflakeType
  description: string
  emoji_id: ({ [x: string]: unknown } | null) | SnowflakeType
  emoji_name: string | null
}
type GuildWelcomeScreenResponse = {
  description: string | null
  welcome_channels: GuildWelcomeScreenChannelResponse[]
}
type GuildWelcomeChannel = {
  channel_id: SnowflakeType
  description: string
  emoji_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  emoji_name?: (string | null) | undefined
}
type WelcomeScreenPatchRequestPartial = {
  description?: (string | null) | undefined
  welcome_channels?: (GuildWelcomeChannel[] | null) | undefined
  enabled?: (boolean | null) | undefined
}
type WidgetSettingsResponse = {
  enabled: boolean
  channel_id: ({ [x: string]: unknown } | null) | SnowflakeType
}
type WidgetChannel = { id: SnowflakeType; name: string; position: number }
type WidgetUserDiscriminator = '0000'
type WidgetActivity = { name: string }
type WidgetMember = {
  id: string
  username: string
  discriminator: WidgetUserDiscriminator
  avatar: { [x: string]: unknown } | null
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
type WidgetImageStyles = 'shield' | 'banner1' | 'banner2' | 'banner3' | 'banner4'
type InteractionApplicationCommandAutocompleteCallbackIntegerData = {
  choices?:
    | ((({ [x: string]: unknown } | null) | ApplicationCommandOptionIntegerChoice)[] | null)
    | undefined
}
type InteractionApplicationCommandAutocompleteCallbackNumberData = {
  choices?:
    | ((({ [x: string]: unknown } | null) | ApplicationCommandOptionNumberChoice)[] | null)
    | undefined
}
type InteractionApplicationCommandAutocompleteCallbackStringData = {
  choices?:
    | ((({ [x: string]: unknown } | null) | ApplicationCommandOptionStringChoice)[] | null)
    | undefined
}
type ApplicationCommandAutocompleteCallbackRequest = {
  type: {}
  data:
    | InteractionApplicationCommandAutocompleteCallbackIntegerData
    | InteractionApplicationCommandAutocompleteCallbackNumberData
    | InteractionApplicationCommandAutocompleteCallbackStringData
}
type IncomingWebhookInteractionRequest = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
  tts?: (boolean | null) | undefined
  flags?: (number | null) | undefined
}
type CreateMessageInteractionCallbackRequest = {
  type: {}
  data?: ({ [x: string]: unknown } | null) | IncomingWebhookInteractionRequest | undefined
}
type LaunchActivityInteractionCallbackRequest = { type: {} }
type TextInputComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  style: TextInputStyleTypes
  label?: (string | null) | undefined
  value?: (string | null) | undefined
  placeholder?: (string | null) | undefined
  required?: (boolean | null) | undefined
  min_length?: (number | null) | undefined
  max_length?: (number | null) | undefined
}
type ActionRowComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  components: TextInputComponentForModalRequest[]
}
type ChannelSelectComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: (ChannelSelectDefaultValue[] | null) | undefined
  channel_types?: (ChannelTypes[] | null) | undefined
}
type CheckboxComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  default?: (boolean | null) | undefined
}
type CheckboxGroupOptionForRequest = {
  label: string
  value: string
  description?: (string | null) | undefined
  default?: (boolean | null) | undefined
}
type CheckboxGroupComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  required?: (boolean | null) | undefined
  options: CheckboxGroupOptionForRequest[]
}
type FileUploadComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  required?: (boolean | null) | undefined
  file_types?: (string[] | null) | undefined
}
type MentionableSelectComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: ((RoleSelectDefaultValue | UserSelectDefaultValue)[] | null) | undefined
}
type RadioGroupOptionForRequest = {
  label: string
  value: string
  description?: (string | null) | undefined
  default?: (boolean | null) | undefined
}
type RadioGroupComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  required?: (boolean | null) | undefined
  options: RadioGroupOptionForRequest[]
}
type RoleSelectComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: (RoleSelectDefaultValue[] | null) | undefined
}
type StringSelectComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  options: StringSelectOptionForRequest[]
}
type UserSelectComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  custom_id: string
  placeholder?: (string | null) | undefined
  min_values?: (number | null) | undefined
  max_values?: (number | null) | undefined
  disabled?: (boolean | null) | undefined
  required?: (boolean | null) | undefined
  default_values?: (UserSelectDefaultValue[] | null) | undefined
}
type LabelComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  label: string
  description?: (string | null) | undefined
  component:
    | ChannelSelectComponentForModalRequest
    | CheckboxComponentForModalRequest
    | CheckboxGroupComponentForModalRequest
    | FileUploadComponentForModalRequest
    | MentionableSelectComponentForModalRequest
    | RadioGroupComponentForModalRequest
    | RoleSelectComponentForModalRequest
    | StringSelectComponentForModalRequest
    | TextInputComponentForModalRequest
    | UserSelectComponentForModalRequest
}
type TextDisplayComponentForModalRequest = {
  type: {}
  id?: (number | null) | undefined
  content: string
}
type ModalInteractionCallbackRequestData = {
  custom_id: string
  title: string
  components: (
    | ActionRowComponentForModalRequest
    | LabelComponentForModalRequest
    | TextDisplayComponentForModalRequest
  )[]
}
type ModalInteractionCallbackRequest = { type: {}; data: ModalInteractionCallbackRequestData }
type PongInteractionCallbackRequest = { type: {} }
type SKUIneligibilityReason = 0 | 1 | 2
type SocialLayerSKUPurchaseEligibilityCallbackData = {
  eligible: boolean
  ineligible_reason?: ({ [x: string]: unknown } | null) | SKUIneligibilityReason | undefined
  ineligible_reason_description?: (string | null) | undefined
}
type SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest = {
  type: {}
  data: SocialLayerSKUPurchaseEligibilityCallbackData
}
type IncomingWebhookUpdateForInteractionCallbackRequestPartial = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  flags?: (number | null) | undefined
}
type UpdateMessageInteractionCallbackRequest = {
  type: {}
  data?:
    | ({ [x: string]: unknown } | null)
    | IncomingWebhookUpdateForInteractionCallbackRequestPartial
    | undefined
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
type CreateMessageInteractionCallbackResponse = { type: {}; message: MessageResponse }
type ActivityInstanceCallbackResponse = { id: string }
type LaunchActivityInteractionCallbackResponse = {
  type: {}
  activity_instance: ActivityInstanceCallbackResponse
}
type UpdateMessageInteractionCallbackResponse = { type: {}; message: MessageResponse }
type InteractionCallbackResponse = {
  interaction: InteractionResponse
  resource?:
    | CreateMessageInteractionCallbackResponse
    | LaunchActivityInteractionCallbackResponse
    | UpdateMessageInteractionCallbackResponse
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
  metadata: { [x: string]: string } | null
  flags: number
  additional_name?: string | undefined
}
type LobbyResponse = {
  id: SnowflakeType
  application_id: SnowflakeType
  metadata: { [x: string]: string } | null
  members: LobbyMemberResponse[]
  linked_channel?: GuildChannelResponse | undefined
  flags: UInt32Type
  override_event_webhooks_url?: (string | null) | undefined
}
type LobbyMemberRequest = {
  id: SnowflakeType
  metadata?: ({ [x: string]: string } | null) | undefined
  flags?: ({ [x: string]: unknown } | null) | 1 | undefined
  additional_name?: (string | null) | undefined
}
type LobbyGuildInviteResponse = { code: string }
type BulkLobbyMemberRequest = {
  id: SnowflakeType
  metadata?: ({ [x: string]: string } | null) | undefined
  flags?: ({ [x: string]: unknown } | null) | 1 | undefined
  additional_name?: (string | null) | undefined
  remove_member?: (boolean | null) | undefined
}
type LobbyMessageResponse = {
  id: SnowflakeType
  type: MessageType
  content: string
  lobby_id: SnowflakeType
  channel_id: SnowflakeType
  author: UserResponse
  lobby_member?: MessageLobbyMemberResponse | undefined
  metadata?: { [x: string]: string } | undefined
  moderation_metadata?: { [x: string]: string } | undefined
  flags: number
  application_id?: SnowflakeType | undefined
}
type SDKMessageRequest = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  sticker_ids?: (SnowflakeType[] | null) | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  flags?: (number | null) | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
  shared_client_theme?:
    | ({ [x: string]: unknown } | null)
    | CustomClientThemeShareRequest
    | undefined
  message_reference?: ({ [x: string]: unknown } | null) | MessageReferenceRequest | undefined
  nonce?: bigint | string | ({ [x: string]: unknown } | null) | undefined
  enforce_nonce?: (boolean | null) | undefined
  tts?: (boolean | null) | undefined
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
type ApplicationIdentityProviderAuthType =
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
type StageInstancesPrivacyLevels = 1 | 2
type StageInstanceResponse = {
  guild_id: SnowflakeType
  channel_id: SnowflakeType
  topic: string
  privacy_level: StageInstancesPrivacyLevels
  id: SnowflakeType
  discoverable_disabled: boolean
  guild_scheduled_event_id: ({ [x: string]: unknown } | null) | SnowflakeType
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
  avatar_decoration_data?:
    | ({ [x: string]: unknown } | null)
    | UserAvatarDecorationResponse
    | undefined
  collectibles?: ({ [x: string]: unknown } | null) | UserCollectiblesResponse | undefined
  primary_guild?: ({ [x: string]: unknown } | null) | UserPrimaryGuildResponse | undefined
  mfa_enabled: boolean
  locale: AvailableLocalesEnum
  premium_type?: PremiumTypes | undefined
  email?: (string | null) | undefined
  verified?: boolean | undefined
}
type BotAccountPatchRequest = {
  username: string
  avatar?: (string | null) | undefined
  banner?: (string | null) | undefined
}
type ApplicationUserRoleConnectionResponse = {
  platform_name?: string | undefined
  platform_username?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type UpdateApplicationUserRoleConnectionRequest = {
  platform_name?: (string | null) | undefined
  platform_username?: (string | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
}
type CreatePrivateChannelRequest = {
  recipient_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
  access_tokens?: (string[] | null) | undefined
  nicks?: ({ [x: string]: string | null } | null) | undefined
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
type IntegrationTypes = 'discord' | 'twitch' | 'youtube' | 'guild_subscription'
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
type IncomingWebhookRequestPartial = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
  tts?: (boolean | null) | undefined
  flags?: (number | null) | undefined
  username?: (string | null) | undefined
  avatar_url?: (string | null) | undefined
  thread_name?: (string | null) | undefined
  applied_tags?: (SnowflakeType[] | null) | undefined
}
type IncomingWebhookUpdateRequestPartial = {
  content?: (string | null) | undefined
  embeds?: (RichEmbed[] | null) | undefined
  allowed_mentions?: ({ [x: string]: unknown } | null) | MessageAllowedMentionsRequest | undefined
  components?:
    | (
        | (
            | ActionRowComponentForMessageRequest
            | ContainerComponentForMessageRequest
            | FileComponentForMessageRequest
            | MediaGalleryComponentForMessageRequest
            | SectionComponentForMessageRequest
            | SeparatorComponentForMessageRequest
            | TextDisplayComponentForMessageRequest
          )[]
        | null
      )
    | undefined
  attachments?: (MessageAttachmentRequest[] | null) | undefined
  poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
  flags?: (number | null) | undefined
}
type GithubUser = { id: number; login: string; html_url: string; avatar_url: string }
type GithubComment = {
  id: number
  html_url: string
  user: GithubUser
  commit_id?: (string | null) | undefined
  body: string
}
type GithubIssue = {
  id: number
  number: number
  html_url: string
  user: GithubUser
  title: string
  body?: (string | null) | undefined
  pull_request?: { [x: string]: unknown } | undefined
}
type GithubRepository = { id: number; html_url: string; name: string; full_name: string }
type GithubRelease = { id: number; tag_name: string; html_url: string; author: GithubUser }
type GithubAuthor = { username?: (string | null) | undefined; name: string }
type GithubCommit = { id: string; url: string; message: string; author: GithubAuthor }
type GithubReview = {
  user: GithubUser
  body?: (string | null) | undefined
  html_url: string
  state: string
}
type GithubCheckPullRequest = { number: number }
type GithubCheckApp = { name: string }
type GithubCheckSuite = {
  conclusion?: (string | null) | undefined
  head_branch?: (string | null) | undefined
  head_sha: string
  pull_requests?: (GithubCheckPullRequest[] | null) | undefined
  app: GithubCheckApp
}
type GithubCheckRunOutput = {
  title?: (string | null) | undefined
  summary?: (string | null) | undefined
}
type GithubCheckRun = {
  conclusion?: (string | null) | undefined
  name: string
  html_url: string
  check_suite: GithubCheckSuite
  details_url?: (string | null) | undefined
  output?: ({ [x: string]: unknown } | null) | GithubCheckRunOutput | undefined
  pull_requests?: (GithubCheckPullRequest[] | null) | undefined
}
type GithubDiscussion = {
  title: string
  number: number
  html_url: string
  answer_html_url?: (string | null) | undefined
  body?: (string | null) | undefined
  user: GithubUser
}
type GithubWebhook = {
  action?: (string | null) | undefined
  ref?: (string | null) | undefined
  ref_type?: (string | null) | undefined
  comment?: ({ [x: string]: unknown } | null) | GithubComment | undefined
  issue?: ({ [x: string]: unknown } | null) | GithubIssue | undefined
  pull_request?: ({ [x: string]: unknown } | null) | GithubIssue | undefined
  repository?: ({ [x: string]: unknown } | null) | GithubRepository | undefined
  forkee?: ({ [x: string]: unknown } | null) | GithubRepository | undefined
  sender: GithubUser
  member?: ({ [x: string]: unknown } | null) | GithubUser | undefined
  release?: ({ [x: string]: unknown } | null) | GithubRelease | undefined
  head_commit?: ({ [x: string]: unknown } | null) | GithubCommit | undefined
  commits?: (GithubCommit[] | null) | undefined
  forced?: (boolean | null) | undefined
  compare?: (string | null) | undefined
  review?: ({ [x: string]: unknown } | null) | GithubReview | undefined
  check_run?: ({ [x: string]: unknown } | null) | GithubCheckRun | undefined
  check_suite?: ({ [x: string]: unknown } | null) | GithubCheckSuite | undefined
  discussion?: ({ [x: string]: unknown } | null) | GithubDiscussion | undefined
  answer?: ({ [x: string]: unknown } | null) | GithubComment | undefined
}
type WebhookSlackEmbedField = {
  name?: (string | null) | undefined
  value?: (string | null) | undefined
  inline?: (boolean | null) | undefined
}
type WebhookSlackEmbed = {
  title?: (string | null) | undefined
  title_link?: (string | null) | undefined
  text?: (string | null) | undefined
  color?: (string | null) | undefined
  ts?: (number | null) | undefined
  pretext?: (string | null) | undefined
  footer?: (string | null) | undefined
  footer_icon?: (string | null) | undefined
  author_name?: (string | null) | undefined
  author_link?: (string | null) | undefined
  author_icon?: (string | null) | undefined
  image_url?: (string | null) | undefined
  thumb_url?: (string | null) | undefined
  fields?: (WebhookSlackEmbedField[] | null) | undefined
}
type SlackWebhook = {
  text?: (string | null) | undefined
  username?: (string | null) | undefined
  icon_url?: (string | null) | undefined
  attachments?: (WebhookSlackEmbed[] | null) | undefined
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
            input: { json: ApplicationFormPartial }
            output: PrivateApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationFormPartial }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ApplicationFormPartial }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType } }
            output: PrivateApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { application_id: SnowflakeType } } & { json: ApplicationFormPartial }
            output: PrivateApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & { json: ApplicationFormPartial }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & { json: ApplicationFormPartial }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/activity-instances/:instance_id': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType; instance_id: string } }
            output: EmbeddedActivityInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; instance_id: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; instance_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/attachment': {
      $post:
        | {
            input: { param: { application_id: SnowflakeType } } & { form: { file: string } }
            output: ActivitiesAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & { form: { file: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & { form: { file: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/commands': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: { with_localizations?: boolean | undefined }
            }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: { with_localizations?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: { with_localizations?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandUpdateRequest[] | null
            }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandUpdateRequest[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandUpdateRequest[] | null
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
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
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } } & {
              json: ApplicationCommandPatchRequestPartial
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } } & {
              json: ApplicationCommandPatchRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; command_id: SnowflakeType } } & {
              json: ApplicationCommandPatchRequestPartial
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/emojis': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ListApplicationEmojisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: { name: string; image: string }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: { name: string; image: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
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
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } } & {
              json: { name?: string | undefined }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } } & {
              json: { name?: string | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; emoji_id: SnowflakeType } } & {
              json: { name?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/entitlements': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: {
                user_id?: SnowflakeType | undefined
                sku_ids?: string | (({ [x: string]: unknown } | null) | SnowflakeType)[] | undefined
                guild_id?: SnowflakeType | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                exclude_ended?: boolean | undefined
                exclude_deleted?: boolean | undefined
                only_active?: boolean | undefined
              }
            }
            output: EntitlementResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: {
                user_id?: SnowflakeType | undefined
                sku_ids?: string | (({ [x: string]: unknown } | null) | SnowflakeType)[] | undefined
                guild_id?: SnowflakeType | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                exclude_ended?: boolean | undefined
                exclude_deleted?: boolean | undefined
                only_active?: boolean | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: {
                user_id?: SnowflakeType | undefined
                sku_ids?: string | (({ [x: string]: unknown } | null) | SnowflakeType)[] | undefined
                guild_id?: SnowflakeType | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                exclude_ended?: boolean | undefined
                exclude_deleted?: boolean | undefined
                only_active?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: CreateEntitlementRequestData
            }
            output: EntitlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: CreateEntitlementRequestData
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: CreateEntitlementRequestData
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
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: EntitlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/entitlements/:entitlement_id/consume': {
      $post:
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; entitlement_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/guilds/:guild_id/commands': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              query: { with_localizations?: boolean | undefined }
            }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              query: { with_localizations?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              query: { with_localizations?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandUpdateRequest[] | null
            }
            output: ApplicationCommandResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandUpdateRequest[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandUpdateRequest[] | null
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } } & {
              json: ApplicationCommandCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/guilds/:guild_id/commands/permissions': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } }
            output: CommandPermissionsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType; guild_id: SnowflakeType } }
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
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
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
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
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
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            } & { json: ApplicationCommandPatchRequestPartial }
            output: ApplicationCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            } & { json: ApplicationCommandPatchRequestPartial }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            } & { json: ApplicationCommandPatchRequestPartial }
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
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            }
            output: CommandPermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
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
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            } & { json: { permissions?: (ApplicationCommandPermission[] | null) | undefined } }
            output: CommandPermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            } & { json: { permissions?: (ApplicationCommandPermission[] | null) | undefined } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                application_id: SnowflakeType
                guild_id: SnowflakeType
                command_id: SnowflakeType
              }
            } & { json: { permissions?: (ApplicationCommandPermission[] | null) | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/applications/:application_id/role-connections/metadata': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ApplicationRoleConnectionsMetadataItemResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationRoleConnectionsMetadataItemRequest[] | null
            }
            output: ApplicationRoleConnectionsMetadataItemResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationRoleConnectionsMetadataItemRequest[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: ApplicationRoleConnectionsMetadataItemRequest[] | null
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
            input: { param: { channel_id: SnowflakeType } }
            output:
              | GuildChannelResponse
              | PrivateChannelResponse
              | PrivateGroupChannelResponse
              | ThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType } }
            output:
              | GuildChannelResponse
              | PrivateChannelResponse
              | PrivateGroupChannelResponse
              | ThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json:
                | UpdateDMRequestPartial
                | UpdateGroupDMRequestPartial
                | UpdateGuildChannelRequestPartial
                | UpdateThreadRequestPartial
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
            input: { param: { channel_id: SnowflakeType } } & {
              json:
                | UpdateDMRequestPartial
                | UpdateGroupDMRequestPartial
                | UpdateGuildChannelRequestPartial
                | UpdateThreadRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json:
                | UpdateDMRequestPartial
                | UpdateGroupDMRequestPartial
                | UpdateGuildChannelRequestPartial
                | UpdateThreadRequestPartial
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
            input: { param: { channel_id: SnowflakeType } } & {
              json: { webhook_channel_id: SnowflakeType }
            }
            output: ChannelFollowerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { webhook_channel_id: SnowflakeType }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { webhook_channel_id: SnowflakeType }
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
            input: { param: { channel_id: SnowflakeType } }
            output:
              | (
                  | FriendInviteResponse
                  | GroupDMInviteResponse
                  | GuildInviteResponse
                  | ({ [x: string]: unknown } | null)
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateGroupDMInviteRequest | CreateGuildInviteRequest
            } & {
              form:
                | CreateGroupDMInviteRequest
                | CreateGuildInviteRequest
                | { target_users_file?: string | undefined }
            }
            output: FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateGroupDMInviteRequest | CreateGuildInviteRequest
            } & {
              form:
                | CreateGroupDMInviteRequest
                | CreateGuildInviteRequest
                | { target_users_file?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateGroupDMInviteRequest | CreateGuildInviteRequest
            } & {
              form:
                | CreateGroupDMInviteRequest
                | CreateGuildInviteRequest
                | { target_users_file?: string | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateGroupDMInviteRequest | CreateGuildInviteRequest
            } & {
              form:
                | CreateGroupDMInviteRequest
                | CreateGuildInviteRequest
                | { target_users_file?: string | undefined }
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
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                around?: SnowflakeType | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
              }
            }
            output: MessageResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                around?: SnowflakeType | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                around?: SnowflakeType | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { channel_id: SnowflakeType } } & { json: MessageCreateRequest } & {
              form:
                | MessageCreateRequest
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    sticker_ids?: (SnowflakeType[] | null) | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    flags?: (number | null) | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    shared_client_theme?:
                      | ({ [x: string]: unknown } | null)
                      | CustomClientThemeShareRequest
                      | undefined
                    message_reference?:
                      | ({ [x: string]: unknown } | null)
                      | MessageReferenceRequest
                      | undefined
                    nonce?: bigint | string | ({ [x: string]: unknown } | null) | undefined
                    enforce_nonce?: (boolean | null) | undefined
                    tts?: (boolean | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & { json: MessageCreateRequest } & {
              form:
                | MessageCreateRequest
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    sticker_ids?: (SnowflakeType[] | null) | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    flags?: (number | null) | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    shared_client_theme?:
                      | ({ [x: string]: unknown } | null)
                      | CustomClientThemeShareRequest
                      | undefined
                    message_reference?:
                      | ({ [x: string]: unknown } | null)
                      | MessageReferenceRequest
                      | undefined
                    nonce?: bigint | string | ({ [x: string]: unknown } | null) | undefined
                    enforce_nonce?: (boolean | null) | undefined
                    tts?: (boolean | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & { json: MessageCreateRequest } & {
              form:
                | MessageCreateRequest
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    sticker_ids?: (SnowflakeType[] | null) | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    flags?: (number | null) | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    shared_client_theme?:
                      | ({ [x: string]: unknown } | null)
                      | CustomClientThemeShareRequest
                      | undefined
                    message_reference?:
                      | ({ [x: string]: unknown } | null)
                      | MessageReferenceRequest
                      | undefined
                    nonce?: bigint | string | ({ [x: string]: unknown } | null) | undefined
                    enforce_nonce?: (boolean | null) | undefined
                    tts?: (boolean | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
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
            input: { param: { channel_id: SnowflakeType } } & {
              json: { messages: SnowflakeType[] }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { messages: SnowflakeType[] }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { messages: SnowflakeType[] }
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
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
            }
            output: PinnedMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
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
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: MessageEditRequestPartial
            } & {
              form:
                | MessageEditRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    flags?: (number | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    sticker_ids?: (SnowflakeType[] | null) | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: MessageEditRequestPartial
            } & {
              form:
                | MessageEditRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    flags?: (number | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    sticker_ids?: (SnowflakeType[] | null) | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: MessageEditRequestPartial
            } & {
              form:
                | MessageEditRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    flags?: (number | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    sticker_ids?: (SnowflakeType[] | null) | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
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
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/messages/:message_id/reactions': {
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
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
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            } & {
              query: {
                after?: SnowflakeType | undefined
                limit?: number | undefined
                type?: ReactionTypes | undefined
              }
            }
            output: UserResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            } & {
              query: {
                after?: SnowflakeType | undefined
                limit?: number | undefined
                type?: ReactionTypes | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            } & {
              query: {
                after?: SnowflakeType | undefined
                limit?: number | undefined
                type?: ReactionTypes | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
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
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; emoji_name: string }
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
                channel_id: SnowflakeType
                message_id: SnowflakeType
                emoji_name: string
                user_id: SnowflakeType
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeType
                message_id: SnowflakeType
                emoji_name: string
                user_id: SnowflakeType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                channel_id: SnowflakeType
                message_id: SnowflakeType
                emoji_name: string
                user_id: SnowflakeType
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
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: CreateTextThreadWithMessageRequest
            }
            output: ThreadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: CreateTextThreadWithMessageRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: CreateTextThreadWithMessageRequest
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
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              query: { implicit?: boolean | undefined }
            }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              query: { implicit?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              query: { implicit?: boolean | undefined }
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
            input: { param: { channel_id: SnowflakeType; role_id: SnowflakeType } } & {
              query: { implicit?: boolean | undefined }
            }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; role_id: SnowflakeType } } & {
              query: { implicit?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; role_id: SnowflakeType } } & {
              query: { implicit?: boolean | undefined }
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
            input: { param: { channel_id: SnowflakeType; overwrite_id: SnowflakeType } } & {
              json: {
                type?: ({ [x: string]: unknown } | null) | ChannelPermissionOverwrites | undefined
                allow?: (number | null) | undefined
                deny?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; overwrite_id: SnowflakeType } } & {
              json: {
                type?: ({ [x: string]: unknown } | null) | ChannelPermissionOverwrites | undefined
                allow?: (number | null) | undefined
                deny?: (number | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; overwrite_id: SnowflakeType } } & {
              json: {
                type?: ({ [x: string]: unknown } | null) | ChannelPermissionOverwrites | undefined
                allow?: (number | null) | undefined
                deny?: (number | null) | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; overwrite_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; overwrite_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; overwrite_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/pins': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: MessageResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/pins/:message_id': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
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
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; answer_id: number }
            } & { query: { after?: SnowflakeType | undefined; limit?: number | undefined } }
            output: PollAnswerDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; answer_id: number }
            } & { query: { after?: SnowflakeType | undefined; limit?: number | undefined } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { channel_id: SnowflakeType; message_id: SnowflakeType; answer_id: number }
            } & { query: { after?: SnowflakeType | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/polls/:message_id/expire': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; message_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/recipients/:user_id': {
      $put:
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                access_token?: (string | null) | undefined
                nick?: (string | null) | undefined
              }
            }
            output: PrivateChannelResponse | PrivateGroupChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                access_token?: (string | null) | undefined
                nick?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                access_token?: (string | null) | undefined
                nick?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                access_token?: (string | null) | undefined
                nick?: (string | null) | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/send-soundboard-sound': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeType } } & { json: SoundboardSoundSendRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & { json: SoundboardSoundSendRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & { json: SoundboardSoundSendRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/thread-members': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: ThreadMemberResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                after?: SnowflakeType | undefined
              }
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
            input: { param: { channel_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/thread-members/:user_id': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              query: { with_member?: boolean | undefined }
            }
            output: ThreadMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              query: { with_member?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } } & {
              query: { with_member?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/threads': {
      $post:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest
            } & { form: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest }
            output: CreatedThreadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest
            } & { form: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest
            } & { form: CreateForumThreadRequest | CreateTextThreadWithoutMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/threads/archived/private': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
            }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
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
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
            }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: string | undefined; limit?: number | undefined }
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
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                name?: string | undefined
                slop?: number | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                tag?: string | SnowflakeType[] | undefined
                tag_setting?: ThreadSearchTagSetting | undefined
                archived?: boolean | undefined
                sort_by?: ThreadSortingMode | undefined
                sort_order?: SortingOrder | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ThreadSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                name?: string | undefined
                slop?: number | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                tag?: string | SnowflakeType[] | undefined
                tag_setting?: ThreadSearchTagSetting | undefined
                archived?: boolean | undefined
                sort_by?: ThreadSortingMode | undefined
                sort_order?: SortingOrder | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: SearchIndexNotReadyResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                name?: string | undefined
                slop?: number | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                tag?: string | SnowflakeType[] | undefined
                tag_setting?: ThreadSearchTagSetting | undefined
                archived?: boolean | undefined
                sort_by?: ThreadSortingMode | undefined
                sort_order?: SortingOrder | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: {
                name?: string | undefined
                slop?: number | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                tag?: string | SnowflakeType[] | undefined
                tag_setting?: ThreadSearchTagSetting | undefined
                archived?: boolean | undefined
                sort_by?: ThreadSortingMode | undefined
                sort_order?: SortingOrder | undefined
                limit?: number | undefined
                offset?: number | undefined
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
            input: { param: { channel_id: SnowflakeType } }
            output: TypingIndicatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/users/@me/threads/archived/private': {
      $get:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: SnowflakeType | undefined; limit?: number | undefined }
            }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: SnowflakeType | undefined; limit?: number | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              query: { before?: SnowflakeType | undefined; limit?: number | undefined }
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
            input: { param: { channel_id: SnowflakeType } } & {
              json: { status?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { status?: (string | null) | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { status?: (string | null) | undefined }
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
            input: { param: { channel_id: SnowflakeType } }
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
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { name: string; avatar?: (string | null) | undefined }
            }
            output: GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { name: string; avatar?: (string | null) | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: { name: string; avatar?: (string | null) | undefined }
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
            input: { param: { guild_id: SnowflakeType } } & {
              query: { with_counts?: boolean | undefined }
            }
            output: GuildWithCountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { with_counts?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { with_counts?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: GuildPatchRequestPartial }
            output: GuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: GuildPatchRequestPartial }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: GuildPatchRequestPartial }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/audit-logs': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                user_id?: SnowflakeType | undefined
                target_id?: SnowflakeType | undefined
                action_type?: AuditLogActionTypes | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
              }
            }
            output: GuildAuditLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                user_id?: SnowflakeType | undefined
                target_id?: SnowflakeType | undefined
                action_type?: AuditLogActionTypes | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                user_id?: SnowflakeType | undefined
                target_id?: SnowflakeType | undefined
                action_type?: AuditLogActionTypes | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
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
            input: { param: { guild_id: SnowflakeType } }
            output:
              | (
                  | DefaultKeywordRuleResponse
                  | KeywordRuleResponse
                  | MLSpamRuleResponse
                  | MentionSpamRuleResponse
                  | UserProfileRuleResponse
                  | ({ [x: string]: unknown } | null)
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json:
                | DefaultKeywordListUpsertRequest
                | KeywordUpsertRequest
                | MLSpamUpsertRequest
                | MentionSpamUpsertRequest
                | UserProfileUpsertRequest
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
            input: { param: { guild_id: SnowflakeType } } & {
              json:
                | DefaultKeywordListUpsertRequest
                | KeywordUpsertRequest
                | MLSpamUpsertRequest
                | MentionSpamUpsertRequest
                | UserProfileUpsertRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json:
                | DefaultKeywordListUpsertRequest
                | KeywordUpsertRequest
                | MLSpamUpsertRequest
                | MentionSpamUpsertRequest
                | UserProfileUpsertRequest
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
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } }
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
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } } & {
              json:
                | DefaultKeywordListUpsertRequestPartial
                | KeywordUpsertRequestPartial
                | MLSpamUpsertRequestPartial
                | MentionSpamUpsertRequestPartial
                | UserProfileUpsertRequestPartial
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
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } } & {
              json:
                | DefaultKeywordListUpsertRequestPartial
                | KeywordUpsertRequestPartial
                | MLSpamUpsertRequestPartial
                | MentionSpamUpsertRequestPartial
                | UserProfileUpsertRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; rule_id: SnowflakeType } } & {
              json:
                | DefaultKeywordListUpsertRequestPartial
                | KeywordUpsertRequestPartial
                | MLSpamUpsertRequestPartial
                | MentionSpamUpsertRequestPartial
                | UserProfileUpsertRequestPartial
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
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: GuildBanResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
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
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: GuildBanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BanUserFromGuildRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BanUserFromGuildRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BanUserFromGuildRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: UnbanUserFromGuildRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: UnbanUserFromGuildRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: UnbanUserFromGuildRequest
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
            input: { param: { guild_id: SnowflakeType } } & { json: BulkBanUsersRequest }
            output: BulkBanUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: BulkBanUsersRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: BulkBanUsersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/channels': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
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
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: CreateGuildChannelRequest }
            output: GuildChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: CreateGuildChannelRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: CreateGuildChannelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                position?: (number | null) | undefined
                parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                lock_permissions?: (boolean | null) | undefined
              }[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                position?: (number | null) | undefined
                parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                lock_permissions?: (boolean | null) | undefined
              }[]
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                position?: (number | null) | undefined
                parent_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                lock_permissions?: (boolean | null) | undefined
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
            input: { param: { guild_id: SnowflakeType } }
            output: EmojiResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                name: string
                image: string
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
              }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                name: string
                image: string
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                name: string
                image: string
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
              }
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
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
              }
            }
            output: EmojiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; emoji_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
              }
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
            input: { param: { guild_id: SnowflakeType } } & { json: GuildIncidentActionsRequest }
            output: GuildIncidentsDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: GuildIncidentActionsRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: GuildIncidentActionsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/integrations': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
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
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/integrations/:integration_id': {
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; integration_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; integration_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; integration_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/invites': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output:
              | (
                  | FriendInviteResponse
                  | GroupDMInviteResponse
                  | GuildInviteResponse
                  | ({ [x: string]: unknown } | null)
                )[]
              | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/members': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { limit?: number | undefined; after?: SnowflakeType | undefined }
            }
            output: GuildMemberResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { limit?: number | undefined; after?: SnowflakeType | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { limit?: number | undefined; after?: SnowflakeType | undefined }
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
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                avatar?: (string | null) | undefined
                bio?: (string | null) | undefined
                banner?: (string | null) | undefined
              }
            }
            output: PrivateGuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                avatar?: (string | null) | undefined
                bio?: (string | null) | undefined
                banner?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                avatar?: (string | null) | undefined
                bio?: (string | null) | undefined
                banner?: (string | null) | undefined
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
            input: { param: { guild_id: SnowflakeType } } & {
              query: { limit?: number | undefined; query: string }
            }
            output: GuildMemberResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { limit?: number | undefined; query: string }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { limit?: number | undefined; query: string }
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
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: GuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BotAddGuildMemberRequest
            }
            output: GuildMemberResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BotAddGuildMemberRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BotAddGuildMemberRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: BotAddGuildMemberRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
                mute?: (boolean | null) | undefined
                deaf?: (boolean | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                communication_disabled_until?: (string | null) | undefined
                flags?: (number | null) | undefined
              }
            }
            output: GuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
                mute?: (boolean | null) | undefined
                deaf?: (boolean | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                communication_disabled_until?: (string | null) | undefined
                flags?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
                mute?: (boolean | null) | undefined
                deaf?: (boolean | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                communication_disabled_until?: (string | null) | undefined
                flags?: (number | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                nick?: (string | null) | undefined
                roles?: ((({ [x: string]: unknown } | null) | SnowflakeType)[] | null) | undefined
                mute?: (boolean | null) | undefined
                deaf?: (boolean | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                communication_disabled_until?: (string | null) | undefined
                flags?: (number | null) | undefined
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
              param: { guild_id: SnowflakeType; user_id: SnowflakeType; role_id: SnowflakeType }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; user_id: SnowflakeType; role_id: SnowflakeType }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; user_id: SnowflakeType; role_id: SnowflakeType }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: { guild_id: SnowflakeType; user_id: SnowflakeType; role_id: SnowflakeType }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; user_id: SnowflakeType; role_id: SnowflakeType }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; user_id: SnowflakeType; role_id: SnowflakeType }
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
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                sort_by?: SortingMode | undefined
                sort_order?: SortingOrder | undefined
                content?: string | undefined
                slop?: number | undefined
                author_id?: SnowflakeType[] | undefined
                author_type?: AuthorType[] | undefined
                mentions?: SnowflakeType[] | undefined
                mentions_role_id?: SnowflakeType[] | undefined
                replied_to_user_id?: SnowflakeType[] | undefined
                replied_to_message_id?: SnowflakeType[] | undefined
                mention_everyone?: boolean | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                limit?: number | undefined
                offset?: number | undefined
                has?: HasOption[] | undefined
                link_hostname?: string[] | undefined
                embed_provider?: string[] | undefined
                embed_type?: SearchableEmbedType[] | undefined
                attachment_extension?: string[] | undefined
                attachment_filename?: string[] | undefined
                pinned?: boolean | undefined
                include_nsfw?: boolean | undefined
                channel_id?: SnowflakeType[] | undefined
              }
            }
            output: GuildSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                sort_by?: SortingMode | undefined
                sort_order?: SortingOrder | undefined
                content?: string | undefined
                slop?: number | undefined
                author_id?: SnowflakeType[] | undefined
                author_type?: AuthorType[] | undefined
                mentions?: SnowflakeType[] | undefined
                mentions_role_id?: SnowflakeType[] | undefined
                replied_to_user_id?: SnowflakeType[] | undefined
                replied_to_message_id?: SnowflakeType[] | undefined
                mention_everyone?: boolean | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                limit?: number | undefined
                offset?: number | undefined
                has?: HasOption[] | undefined
                link_hostname?: string[] | undefined
                embed_provider?: string[] | undefined
                embed_type?: SearchableEmbedType[] | undefined
                attachment_extension?: string[] | undefined
                attachment_filename?: string[] | undefined
                pinned?: boolean | undefined
                include_nsfw?: boolean | undefined
                channel_id?: SnowflakeType[] | undefined
              }
            }
            output: SearchIndexNotReadyResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                sort_by?: SortingMode | undefined
                sort_order?: SortingOrder | undefined
                content?: string | undefined
                slop?: number | undefined
                author_id?: SnowflakeType[] | undefined
                author_type?: AuthorType[] | undefined
                mentions?: SnowflakeType[] | undefined
                mentions_role_id?: SnowflakeType[] | undefined
                replied_to_user_id?: SnowflakeType[] | undefined
                replied_to_message_id?: SnowflakeType[] | undefined
                mention_everyone?: boolean | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                limit?: number | undefined
                offset?: number | undefined
                has?: HasOption[] | undefined
                link_hostname?: string[] | undefined
                embed_provider?: string[] | undefined
                embed_type?: SearchableEmbedType[] | undefined
                attachment_extension?: string[] | undefined
                attachment_filename?: string[] | undefined
                pinned?: boolean | undefined
                include_nsfw?: boolean | undefined
                channel_id?: SnowflakeType[] | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                sort_by?: SortingMode | undefined
                sort_order?: SortingOrder | undefined
                content?: string | undefined
                slop?: number | undefined
                author_id?: SnowflakeType[] | undefined
                author_type?: AuthorType[] | undefined
                mentions?: SnowflakeType[] | undefined
                mentions_role_id?: SnowflakeType[] | undefined
                replied_to_user_id?: SnowflakeType[] | undefined
                replied_to_message_id?: SnowflakeType[] | undefined
                mention_everyone?: boolean | undefined
                min_id?: SnowflakeType | undefined
                max_id?: SnowflakeType | undefined
                limit?: number | undefined
                offset?: number | undefined
                has?: HasOption[] | undefined
                link_hostname?: string[] | undefined
                embed_provider?: string[] | undefined
                embed_type?: SearchableEmbedType[] | undefined
                attachment_extension?: string[] | undefined
                attachment_filename?: string[] | undefined
                pinned?: boolean | undefined
                include_nsfw?: boolean | undefined
                channel_id?: SnowflakeType[] | undefined
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
            input: { param: { guild_id: SnowflakeType } }
            output: GuildHomeSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/onboarding': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: UserGuildOnboardingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: UpdateGuildOnboardingRequest }
            output: GuildOnboardingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: UpdateGuildOnboardingRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: UpdateGuildOnboardingRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/permissions/member/:user_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/permissions/role/:role_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/preview': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: GuildPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/prune': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                days?: number | undefined
                include_roles?:
                  | string
                  | (({ [x: string]: unknown } | null) | SnowflakeType)[]
                  | undefined
              }
            }
            output: GuildPruneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                days?: number | undefined
                include_roles?:
                  | string
                  | (({ [x: string]: unknown } | null) | SnowflakeType)[]
                  | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                days?: number | undefined
                include_roles?:
                  | string
                  | (({ [x: string]: unknown } | null) | SnowflakeType)[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: PruneGuildRequest }
            output: GuildPruneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: PruneGuildRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: PruneGuildRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/regions': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: VoiceRegionResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/requests': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                status?: {} | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: GuildJoinRequestsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                status?: {} | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: {
                status?: {} | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
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
            input: { param: { guild_id: SnowflakeType; request_id: SnowflakeType } } & {
              json: { action?: {} | undefined; rejection_reason?: (string | null) | undefined }
            }
            output: GuildJoinRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; request_id: SnowflakeType } } & {
              json: { action?: {} | undefined; rejection_reason?: (string | null) | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; request_id: SnowflakeType } } & {
              json: { action?: {} | undefined; rejection_reason?: (string | null) | undefined }
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
            input: { param: { guild_id: SnowflakeType } }
            output: GuildRoleResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: CreateRoleRequest }
            output: GuildRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: CreateRoleRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: CreateRoleRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: UpdateRolePositionsRequest[] }
            output: GuildRoleResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: UpdateRolePositionsRequest[] }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: UpdateRolePositionsRequest[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/roles/member-counts': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: { [x: string]: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/roles/:role_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: GuildRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } } & {
              json: UpdateRoleRequestPartial
            }
            output: GuildRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } } & {
              json: UpdateRoleRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; role_id: SnowflakeType } } & {
              json: UpdateRoleRequestPartial
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
            input: { param: { guild_id: SnowflakeType } } & {
              query: { with_user_count?: boolean | undefined }
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
            input: { param: { guild_id: SnowflakeType } } & {
              query: { with_user_count?: boolean | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { with_user_count?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json:
                | ExternalScheduledEventCreateRequest
                | StageScheduledEventCreateRequest
                | VoiceScheduledEventCreateRequest
            }
            output:
              | ExternalScheduledEventResponse
              | StageScheduledEventResponse
              | VoiceScheduledEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json:
                | ExternalScheduledEventCreateRequest
                | StageScheduledEventCreateRequest
                | VoiceScheduledEventCreateRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json:
                | ExternalScheduledEventCreateRequest
                | StageScheduledEventCreateRequest
                | VoiceScheduledEventCreateRequest
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
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { query: { with_user_count?: boolean | undefined } }
            output:
              | ExternalScheduledEventResponse
              | StageScheduledEventResponse
              | VoiceScheduledEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { query: { with_user_count?: boolean | undefined } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { query: { with_user_count?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & {
              json:
                | ExternalScheduledEventPatchRequestPartial
                | StageScheduledEventPatchRequestPartial
                | VoiceScheduledEventPatchRequestPartial
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
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & {
              json:
                | ExternalScheduledEventPatchRequestPartial
                | StageScheduledEventPatchRequestPartial
                | VoiceScheduledEventPatchRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & {
              json:
                | ExternalScheduledEventPatchRequestPartial
                | StageScheduledEventPatchRequestPartial
                | VoiceScheduledEventPatchRequestPartial
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
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { json: GuildScheduledEventExceptionCreateRequest }
            output: GuildScheduledEventExceptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { json: GuildScheduledEventExceptionCreateRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { json: GuildScheduledEventExceptionCreateRequest }
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
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                exception_id: SnowflakeType
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                exception_id: SnowflakeType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                exception_id: SnowflakeType
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
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                exception_id: SnowflakeType
              }
            } & { json: GuildScheduledEventExceptionPatchRequestPartial }
            output: GuildScheduledEventExceptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                exception_id: SnowflakeType
              }
            } & { json: GuildScheduledEventExceptionPatchRequestPartial }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                exception_id: SnowflakeType
              }
            } & { json: GuildScheduledEventExceptionPatchRequestPartial }
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
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: ScheduledEventUserResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
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
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { query: { guild_scheduled_event_exception_ids?: SnowflakeType[] | undefined } }
            output: ScheduledEventUserCountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { query: { guild_scheduled_event_exception_ids?: SnowflakeType[] | undefined } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { guild_id: SnowflakeType; guild_scheduled_event_id: SnowflakeType }
            } & { query: { guild_scheduled_event_exception_ids?: SnowflakeType[] | undefined } }
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
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                guild_scheduled_event_exception_id: SnowflakeType
              }
            } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: ScheduledEventUserResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                guild_scheduled_event_exception_id: SnowflakeType
              }
            } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                guild_id: SnowflakeType
                guild_scheduled_event_id: SnowflakeType
                guild_scheduled_event_exception_id: SnowflakeType
              }
            } & {
              query: {
                with_member?: boolean | undefined
                limit?: number | undefined
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
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
            input: { param: { guild_id: SnowflakeType } }
            output: ListGuildSoundboardSoundsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: SoundboardCreateRequest }
            output: SoundboardSoundResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: SoundboardCreateRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & { json: SoundboardCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/soundboard-sounds/:sound_id': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } }
            output: SoundboardSoundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } } & {
              json: SoundboardPatchRequestPartial
            }
            output: SoundboardSoundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } } & {
              json: SoundboardPatchRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; sound_id: SnowflakeType } } & {
              json: SoundboardPatchRequestPartial
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
            input: { param: { guild_id: SnowflakeType } }
            output: GuildStickerResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              form: {
                name: string
                tags: string
                description?: (string | null) | undefined
                file: string
              }
            }
            output: GuildStickerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              form: {
                name: string
                tags: string
                description?: (string | null) | undefined
                file: string
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              form: {
                name: string
                tags: string
                description?: (string | null) | undefined
                file: string
              }
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
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } }
            output: GuildStickerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                tags?: string | undefined
                description?: (string | null) | undefined
              }
            }
            output: GuildStickerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                tags?: string | undefined
                description?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; sticker_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                tags?: string | undefined
                description?: (string | null) | undefined
              }
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
            input: { param: { guild_id: SnowflakeType } }
            output: GuildTemplateResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: { name: string; description?: (string | null) | undefined }
            }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: { name: string; description?: (string | null) | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: { name: string; description?: (string | null) | undefined }
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
            input: { param: { guild_id: SnowflakeType; code: string } }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { guild_id: SnowflakeType; code: string } }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; code: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; code: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; code: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
            }
            output: GuildTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; code: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; code: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
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
            input: { param: { guild_id: SnowflakeType } }
            output: ThreadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/vanity-url': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: VanityURLResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/voice-states/@me': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: VoiceStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: UpdateSelfVoiceStateRequestPartial
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: UpdateSelfVoiceStateRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: UpdateSelfVoiceStateRequestPartial
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
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: VoiceStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: UpdateVoiceStateRequestPartial
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: UpdateVoiceStateRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: UpdateVoiceStateRequestPartial
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
            input: { param: { guild_id: SnowflakeType } }
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
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/welcome-screen': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: GuildWelcomeScreenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: WelcomeScreenPatchRequestPartial
            }
            output: GuildWelcomeScreenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: WelcomeScreenPatchRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: WelcomeScreenPatchRequestPartial
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
            input: { param: { guild_id: SnowflakeType } }
            output: WidgetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                enabled?: (boolean | null) | undefined
              }
            }
            output: WidgetSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                enabled?: (boolean | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              json: {
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                enabled?: (boolean | null) | undefined
              }
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
            input: { param: { guild_id: SnowflakeType } }
            output: WidgetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/guilds/:guild_id/widget.png': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { style?: WidgetImageStyles | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { style?: WidgetImageStyles | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } } & {
              query: { style?: WidgetImageStyles | undefined }
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
            input: { param: { interaction_id: SnowflakeType; interaction_token: string } } & {
              query: { with_response?: boolean | undefined }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            }
            output: InteractionCallbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { interaction_id: SnowflakeType; interaction_token: string } } & {
              query: { with_response?: boolean | undefined }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { interaction_id: SnowflakeType; interaction_token: string } } & {
              query: { with_response?: boolean | undefined }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { interaction_id: SnowflakeType; interaction_token: string } } & {
              query: { with_response?: boolean | undefined }
            } & {
              json:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
            } & {
              form:
                | ApplicationCommandAutocompleteCallbackRequest
                | CreateMessageInteractionCallbackRequest
                | LaunchActivityInteractionCallbackRequest
                | ModalInteractionCallbackRequest
                | PongInteractionCallbackRequest
                | SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest
                | UpdateMessageInteractionCallbackRequest
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
                with_counts?: boolean | undefined
                guild_scheduled_event_id?: SnowflakeType | undefined
                target_channel_id?: SnowflakeType | undefined
                target_message_id?: SnowflakeType | undefined
              }
            }
            output: FriendInviteResponse | GroupDMInviteResponse | GuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & {
              query: {
                with_counts?: boolean | undefined
                guild_scheduled_event_id?: SnowflakeType | undefined
                target_channel_id?: SnowflakeType | undefined
                target_message_id?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & {
              query: {
                with_counts?: boolean | undefined
                guild_scheduled_event_id?: SnowflakeType | undefined
                target_channel_id?: SnowflakeType | undefined
                target_message_id?: SnowflakeType | undefined
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
        | { input: { param: { code: string } }; output: string; outputFormat: 'text'; status: 200 }
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
            input: { param: { code: string } } & { json: { user_ids: SnowflakeType[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeType[] } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeType[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:code/target-users/bulk-delete': {
      $post:
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeType[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeType[] } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } } & { json: { user_ids: SnowflakeType[] } }
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
            input: { param: { code: string; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { code: string; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { code: string; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string; user_id: SnowflakeType } }
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
                idle_timeout_seconds?: (number | null) | undefined
                lobby_metadata?: ({ [x: string]: string } | null) | undefined
                member_metadata?: ({ [x: string]: string } | null) | undefined
                secret: string
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                name?: (string | null) | undefined
              }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                lobby_metadata?: ({ [x: string]: string } | null) | undefined
                member_metadata?: ({ [x: string]: string } | null) | undefined
                secret: string
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                name?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                lobby_metadata?: ({ [x: string]: string } | null) | undefined
                member_metadata?: ({ [x: string]: string } | null) | undefined
                secret: string
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                name?: (string | null) | undefined
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
                idle_timeout_seconds?: (number | null) | undefined
                members?: (LobbyMemberRequest[] | null) | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                override_event_webhooks_url?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                members?: (LobbyMemberRequest[] | null) | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                override_event_webhooks_url?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                members?: (LobbyMemberRequest[] | null) | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                override_event_webhooks_url?: (string | null) | undefined
                name?: (string | null) | undefined
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
            input: { param: { lobby_id: SnowflakeType } }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
                members?: (LobbyMemberRequest[] | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                override_event_webhooks_url?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
                members?: (LobbyMemberRequest[] | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                override_event_webhooks_url?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: {
                idle_timeout_seconds?: (number | null) | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
                members?: (LobbyMemberRequest[] | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                override_event_webhooks_url?: (string | null) | undefined
                name?: (string | null) | undefined
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
            input: { param: { lobby_id: SnowflakeType } } & {
              json: { channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined }
            }
            output: LobbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: { channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: { channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined }
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
            input: { param: { lobby_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/@me/invites': {
      $post:
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: LobbyGuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/bulk': {
      $post:
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: BulkLobbyMemberRequest[] | null
            }
            output: LobbyMemberResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: BulkLobbyMemberRequest[] | null
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              json: BulkLobbyMemberRequest[] | null
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
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                additional_name?: (string | null) | undefined
              }
            }
            output: LobbyMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                additional_name?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                flags?: ({ [x: string]: unknown } | null) | 1 | undefined
                additional_name?: (string | null) | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/members/:user_id/invites': {
      $post:
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } }
            output: LobbyGuildInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType; user_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/messages': {
      $get:
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              query: { limit?: number | undefined }
            }
            output: LobbyMessageResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              query: { limit?: number | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & {
              query: { limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { lobby_id: SnowflakeType } } & { json: SDKMessageRequest } & {
              form: SDKMessageRequest
            }
            output: LobbyMessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & { json: SDKMessageRequest } & {
              form: SDKMessageRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType } } & { json: SDKMessageRequest } & {
              form: SDKMessageRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/lobbies/:lobby_id/messages/:message_id/moderation-metadata': {
      $put:
        | {
            input: { param: { lobby_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: { [x: string]: string }
            } & { form: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { lobby_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: { [x: string]: string }
            } & { form: { [x: string]: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { lobby_id: SnowflakeType; message_id: SnowflakeType } } & {
              json: { [x: string]: string }
            } & { form: { [x: string]: string } }
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
                user_id_1: SnowflakeType
                user_id_2: SnowflakeType
                message_id: SnowflakeType
              }
            } & { json: { [x: string]: string } } & { form: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                user_id_1: SnowflakeType
                user_id_2: SnowflakeType
                message_id: SnowflakeType
              }
            } & { json: { [x: string]: string } } & { form: { [x: string]: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                user_id_1: SnowflakeType
                user_id_2: SnowflakeType
                message_id: SnowflakeType
              }
            } & { json: { [x: string]: string } } & { form: { [x: string]: string } }
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
                client_id: SnowflakeType
                client_secret?: (string | null) | undefined
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthType
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                client_id: SnowflakeType
                client_secret?: (string | null) | undefined
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                client_id: SnowflakeType
                client_secret?: (string | null) | undefined
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthType
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
                client_id: SnowflakeType
                client_secret?: (string | null) | undefined
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthType
              }
            }
            output: ProvisionalTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id: SnowflakeType
                client_secret?: (string | null) | undefined
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthType
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                client_id: SnowflakeType
                client_secret?: (string | null) | undefined
                external_auth_token: string
                external_auth_type: ApplicationIdentityProviderAuthType
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
                provisional_user_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                external_user_id: string
                preferred_global_name?: (string | null) | undefined
              }
            }
            output: ProvisionalTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                provisional_user_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                external_user_id: string
                preferred_global_name?: (string | null) | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                provisional_user_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
                external_user_id: string
                preferred_global_name?: (string | null) | undefined
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
            input: { param: { sku_id: SnowflakeType } } & {
              query: {
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                user_id?: SnowflakeType | undefined
              }
            }
            output: SubscriptionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku_id: SnowflakeType } } & {
              query: {
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                user_id?: SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sku_id: SnowflakeType } } & {
              query: {
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                user_id?: SnowflakeType | undefined
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
            input: { param: { sku_id: SnowflakeType; subscription_id: SnowflakeType } } & {
              query: { user_id?: SnowflakeType | undefined }
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku_id: SnowflakeType; subscription_id: SnowflakeType } } & {
              query: { user_id?: SnowflakeType | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sku_id: SnowflakeType; subscription_id: SnowflakeType } } & {
              query: { user_id?: SnowflakeType | undefined }
            }
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
                channel_id: SnowflakeType
                privacy_level?:
                  | ({ [x: string]: unknown } | null)
                  | StageInstancesPrivacyLevels
                  | undefined
                guild_scheduled_event_id?:
                  | ({ [x: string]: unknown } | null)
                  | SnowflakeType
                  | undefined
                send_start_notification?: (boolean | null) | undefined
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
                channel_id: SnowflakeType
                privacy_level?:
                  | ({ [x: string]: unknown } | null)
                  | StageInstancesPrivacyLevels
                  | undefined
                guild_scheduled_event_id?:
                  | ({ [x: string]: unknown } | null)
                  | SnowflakeType
                  | undefined
                send_start_notification?: (boolean | null) | undefined
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
                channel_id: SnowflakeType
                privacy_level?:
                  | ({ [x: string]: unknown } | null)
                  | StageInstancesPrivacyLevels
                  | undefined
                guild_scheduled_event_id?:
                  | ({ [x: string]: unknown } | null)
                  | SnowflakeType
                  | undefined
                send_start_notification?: (boolean | null) | undefined
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
            input: { param: { channel_id: SnowflakeType } }
            output: StageInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: {
                topic?: string | undefined
                privacy_level?: StageInstancesPrivacyLevels | undefined
              }
            }
            output: StageInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: {
                topic?: string | undefined
                privacy_level?: StageInstancesPrivacyLevels | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { channel_id: SnowflakeType } } & {
              json: {
                topic?: string | undefined
                privacy_level?: StageInstancesPrivacyLevels | undefined
              }
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
            input: { param: { pack_id: SnowflakeType } }
            output: StickerPackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pack_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { pack_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/stickers/:sticker_id': {
      $get:
        | {
            input: { param: { sticker_id: SnowflakeType } }
            output: GuildStickerResponse | StandardStickerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sticker_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sticker_id: SnowflakeType } }
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
            input: { json: BotAccountPatchRequest }
            output: UserPIIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BotAccountPatchRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: BotAccountPatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/applications/:application_id/entitlements': {
      $get:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: {
                sku_ids?: string | (({ [x: string]: unknown } | null) | SnowflakeType)[] | undefined
                exclude_consumed?: boolean | undefined
              }
            }
            output: EntitlementResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: {
                sku_ids?: string | (({ [x: string]: unknown } | null) | SnowflakeType)[] | undefined
                exclude_consumed?: boolean | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              query: {
                sku_ids?: string | (({ [x: string]: unknown } | null) | SnowflakeType)[] | undefined
                exclude_consumed?: boolean | undefined
              }
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
            input: { param: { application_id: SnowflakeType } }
            output: ApplicationUserRoleConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: UpdateApplicationUserRoleConnectionRequest
            }
            output: ApplicationUserRoleConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: UpdateApplicationUserRoleConnectionRequest
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } } & {
              json: UpdateApplicationUserRoleConnectionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { application_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { application_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/channels': {
      $post:
        | {
            input: { json: CreatePrivateChannelRequest }
            output: PrivateChannelResponse | PrivateGroupChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePrivateChannelRequest }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreatePrivateChannelRequest }
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
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                shard?: number | undefined
                with_counts?: boolean | undefined
              }
            }
            output: MyGuildResponse[] | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                shard?: number | undefined
                with_counts?: boolean | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                before?: SnowflakeType | undefined
                after?: SnowflakeType | undefined
                limit?: number | undefined
                shard?: number | undefined
                with_counts?: boolean | undefined
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
            input: { param: { guild_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/@me/guilds/:guild_id/member': {
      $get:
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: PrivateGuildMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { guild_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/:user_id': {
      $get:
        | {
            input: { param: { user_id: SnowflakeType } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { user_id: SnowflakeType } }
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
            input: { param: { webhook_id: SnowflakeType } }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { webhook_id: SnowflakeType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeType } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { webhook_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                avatar?: (string | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
            input: { param: { webhook_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                avatar?: (string | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
              }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType } } & {
              json: {
                name?: string | undefined
                avatar?: (string | null) | undefined
                channel_id?: ({ [x: string]: unknown } | null) | SnowflakeType | undefined
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
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                wait?: boolean | undefined
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial } & {
              form: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                wait?: boolean | undefined
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial } & {
              form: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                wait?: boolean | undefined
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial } & {
              form: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                wait?: boolean | undefined
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial } & {
              form: IncomingWebhookRequestPartial | IncomingWebhookUpdateRequestPartial
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              json: { name?: string | undefined; avatar?: (string | null) | undefined }
            }
            output:
              | ApplicationIncomingWebhookResponse
              | ChannelFollowerWebhookResponse
              | GuildIncomingWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              json: { name?: string | undefined; avatar?: (string | null) | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              json: { name?: string | undefined; avatar?: (string | null) | undefined }
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
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { wait?: boolean | undefined; thread_id?: SnowflakeType | undefined }
            } & { json: GithubWebhook }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { wait?: boolean | undefined; thread_id?: SnowflakeType | undefined }
            } & { json: GithubWebhook }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { wait?: boolean | undefined; thread_id?: SnowflakeType | undefined }
            } & { json: GithubWebhook }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhook_id/:webhook_token/messages/@original': {
      $get:
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { thread_id?: SnowflakeType | undefined }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { thread_id?: SnowflakeType | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { thread_id?: SnowflakeType | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { thread_id?: SnowflakeType | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { thread_id?: SnowflakeType | undefined }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { thread_id?: SnowflakeType | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookUpdateRequestPartial } & {
              form:
                | IncomingWebhookUpdateRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    flags?: (number | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookUpdateRequestPartial } & {
              form:
                | IncomingWebhookUpdateRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    flags?: (number | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: {
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookUpdateRequestPartial } & {
              form:
                | IncomingWebhookUpdateRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    flags?: (number | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
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
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & { query: { thread_id?: SnowflakeType | undefined } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & { query: { thread_id?: SnowflakeType | undefined } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & { query: { thread_id?: SnowflakeType | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & { query: { thread_id?: SnowflakeType | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & { query: { thread_id?: SnowflakeType | undefined } }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & { query: { thread_id?: SnowflakeType | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & {
              query: {
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookUpdateRequestPartial } & {
              form:
                | IncomingWebhookUpdateRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    flags?: (number | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & {
              query: {
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookUpdateRequestPartial } & {
              form:
                | IncomingWebhookUpdateRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    flags?: (number | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
            }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { webhook_id: SnowflakeType; webhook_token: string; message_id: SnowflakeType }
            } & {
              query: {
                thread_id?: SnowflakeType | undefined
                with_components?: boolean | undefined
              }
            } & { json: IncomingWebhookUpdateRequestPartial } & {
              form:
                | IncomingWebhookUpdateRequestPartial
                | {
                    content?: (string | null) | undefined
                    embeds?: (RichEmbed[] | null) | undefined
                    allowed_mentions?:
                      | ({ [x: string]: unknown } | null)
                      | MessageAllowedMentionsRequest
                      | undefined
                    components?:
                      | (
                          | (
                              | ActionRowComponentForMessageRequest
                              | ContainerComponentForMessageRequest
                              | FileComponentForMessageRequest
                              | MediaGalleryComponentForMessageRequest
                              | SectionComponentForMessageRequest
                              | SeparatorComponentForMessageRequest
                              | TextDisplayComponentForMessageRequest
                            )[]
                          | null
                        )
                      | undefined
                    attachments?: (MessageAttachmentRequest[] | null) | undefined
                    poll?: ({ [x: string]: unknown } | null) | PollCreateRequest | undefined
                    flags?: (number | null) | undefined
                    'files[0]'?: string | undefined
                    'files[1]'?: string | undefined
                    'files[2]'?: string | undefined
                    'files[3]'?: string | undefined
                    'files[4]'?: string | undefined
                    'files[5]'?: string | undefined
                    'files[6]'?: string | undefined
                    'files[7]'?: string | undefined
                    'files[8]'?: string | undefined
                    'files[9]'?: string | undefined
                  }
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
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { wait?: boolean | undefined; thread_id?: SnowflakeType | undefined }
            } & { json: SlackWebhook } & { form: SlackWebhook }
            output: string | null
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { wait?: boolean | undefined; thread_id?: SnowflakeType | undefined }
            } & { json: SlackWebhook } & { form: SlackWebhook }
            output: RatelimitedResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhook_id: SnowflakeType; webhook_token: string } } & {
              query: { wait?: boolean | undefined; thread_id?: SnowflakeType | undefined }
            } & { json: SlackWebhook } & { form: SlackWebhook }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
