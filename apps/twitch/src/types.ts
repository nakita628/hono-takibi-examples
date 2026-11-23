type StartCommercialBody = { broadcaster_id: string; length: number }
type StartCommercialResponse = { data: { length: number; message: string; retry_after: number }[] }
type GetAdScheduleResponse = {
  data: {
    snooze_count: number
    snooze_refresh_at: bigint
    next_ad_at: bigint
    duration: number
    last_ad_at: bigint
    preroll_free_time: number
  }[]
}
type SnoozeNextAdResponse = {
  data: { snooze_count: number; snooze_refresh_at: bigint; next_ad_at: bigint }[]
}
type ExtensionAnalytics = {
  extension_id: string
  URL: string
  type: string
  date_range: { started_at: string; ended_at: string }
}
type GetExtensionAnalyticsResponse = {
  data: ExtensionAnalytics[]
  pagination?: { cursor?: string | undefined } | undefined
}
type GameAnalytics = {
  game_id: string
  URL: string
  type: string
  date_range: { started_at: string; ended_at: string }
}
type GetGameAnalyticsResponse = {
  data: GameAnalytics[]
  pagination?: { cursor?: string | undefined } | undefined
}
type BitsLeaderboard = {
  user_id: string
  user_login: string
  user_name: string
  rank: number
  score: number
}
type GetBitsLeaderboardResponse = {
  data: BitsLeaderboard[]
  date_range: { started_at: string; ended_at: string }
  total: number
}
type CheermoteImageFormat = {
  '1'?: string | undefined
  '2'?: string | undefined
  '3'?: string | undefined
  '4'?: string | undefined
  '1.5'?: string | undefined
}
type CheermoteImageTheme = {
  animated?: CheermoteImageFormat | undefined
  static?: CheermoteImageFormat | undefined
}
type CheermoteImages = {
  light?: CheermoteImageTheme | undefined
  dark?: CheermoteImageTheme | undefined
}
type Cheermote = {
  prefix: string
  tiers: {
    min_bits: number
    id: '1' | '100' | '500' | '1000' | '5000' | '10000' | '100000'
    color: string
    images: CheermoteImages
    can_cheer: boolean
    show_in_bits_card: boolean
  }[]
  type:
    | 'global_first_party'
    | 'global_third_party'
    | 'channel_custom'
    | 'display_only'
    | 'sponsored'
  order: number
  last_updated: string
  is_charitable: boolean
}
type GetCheermotesResponse = { data: Cheermote[] }
type GetCustomPowerUpResponse = {
  data: {
    broadcaster_id: string
    broadcaster_login: string
    broadcaster_name: string
    id: string
    title: string
    prompt: string
    bits: number
    image: { url_1x: string; url_2x: string; url_4x: string }
    default_image: { url_1x: string; url_2x: string; url_4x: string }
    background_color: string
    is_enabled: boolean
    is_user_input_required: boolean
    max_per_stream_setting: { is_enabled: boolean; max_per_stream: bigint }
    max_per_user_per_stream_setting: { is_enabled: boolean; max_per_user_per_stream: bigint }
    global_cooldown_setting: { is_enabled: boolean; global_cooldown_seconds: bigint }
    is_paused: boolean
    is_in_stock: boolean
    redemptions_redeemed_current_stream: number | null
    cooldown_expires_at: string | null
  }[]
}
type ExtensionTransaction = {
  id: string
  timestamp: string
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  user_id: string
  user_login: string
  user_name: string
  product_type: 'BITS_IN_EXTENSION'
  product_data: {
    sku: string
    domain: string
    cost: { amount: number; type: 'bits' }
    inDevelopment: boolean
    displayName: string
    expiration: string
    broadcast: boolean
  }
}
type GetExtensionTransactionsResponse = {
  data: ExtensionTransaction[]
  pagination?: { cursor?: string | undefined } | undefined
}
type ChannelInformation = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  broadcaster_language: string
  game_name: string
  game_id: string
  title: string
  delay: number
  tags: string[]
  content_classification_labels: string[]
  is_branded_content: boolean
}
type GetChannelInformationResponse = { data: ChannelInformation[] }
type ModifyChannelInformationBody = {
  game_id?: string | undefined
  broadcaster_language?: string | undefined
  title?: string | undefined
  delay?: number | undefined
  tags?: string[] | undefined
  content_classification_labels?:
    | {
        id:
          | 'DebatedSocialIssuesAndPolitics'
          | 'DrugsIntoxication'
          | 'SexualThemes'
          | 'ViolentGraphic'
          | 'Gambling'
          | 'ProfanityVulgarity'
        is_enabled: boolean
      }[]
    | undefined
  is_branded_content?: boolean | undefined
}
type ChannelEditor = { user_id: string; user_name: string; created_at: string }
type GetChannelEditorsResponse = { data: ChannelEditor[] }
type GetFollowedChannelsResponse = {
  data: {
    broadcaster_id: string
    broadcaster_login: string
    broadcaster_name: string
    followed_at: string
  }[]
  pagination?: { cursor?: string | undefined } | undefined
  total: number
}
type GetChannelFollowersResponse = {
  data: { followed_at: string; user_id: string; user_login: string; user_name: string }[]
  pagination?: { cursor?: string | undefined } | undefined
  total: number
}
type CreateCustomRewardsBody = {
  title: string
  cost: bigint
  prompt?: string | undefined
  is_enabled?: boolean | undefined
  background_color?: string | undefined
  is_user_input_required?: boolean | undefined
  is_max_per_stream_enabled?: boolean | undefined
  max_per_stream?: number | undefined
  is_max_per_user_per_stream_enabled?: boolean | undefined
  max_per_user_per_stream?: number | undefined
  is_global_cooldown_enabled?: boolean | undefined
  global_cooldown_seconds?: number | undefined
  should_redemptions_skip_request_queue?: boolean | undefined
}
type CustomReward = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  id: string
  title: string
  prompt: string
  cost: bigint
  image: { url_1x: string; url_2x: string; url_4x: string }
  default_image: { url_1x: string; url_2x: string; url_4x: string }
  background_color: string
  is_enabled: boolean
  is_user_input_required: boolean
  max_per_stream_setting: { is_enabled: boolean; max_per_stream: bigint }
  max_per_user_per_stream_setting: { is_enabled: boolean; max_per_user_per_stream: bigint }
  global_cooldown_setting: { is_enabled: boolean; global_cooldown_seconds: bigint }
  is_paused: boolean
  is_in_stock: boolean
  should_redemptions_skip_request_queue: boolean
  redemptions_redeemed_current_stream: number | null
  cooldown_expires_at: string | null
}
type CreateCustomRewardsResponse = { data: CustomReward[] }
type GetCustomRewardResponse = { data: CustomReward[] }
type UpdateCustomRewardBody = {
  title?: string | undefined
  prompt?: string | undefined
  cost?: bigint | undefined
  background_color?: string | undefined
  is_enabled?: boolean | undefined
  is_user_input_required?: boolean | undefined
  is_max_per_stream_enabled?: boolean | undefined
  max_per_stream?: bigint | undefined
  is_max_per_user_per_stream_enabled?: boolean | undefined
  max_per_user_per_stream?: bigint | undefined
  is_global_cooldown_enabled?: boolean | undefined
  global_cooldown_seconds?: bigint | undefined
  is_paused?: boolean | undefined
  should_redemptions_skip_request_queue?: boolean | undefined
}
type UpdateCustomRewardResponse = { data: CustomReward[] }
type CustomRewardRedemption = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  id: string
  user_id: string
  user_name: string
  user_login: string
  reward: { id: string; title: string; prompt: string; cost: bigint }
  user_input: string
  status: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED'
  redeemed_at: string
}
type GetCustomRewardRedemptionResponse = {
  data: CustomRewardRedemption[]
  pagination?: { cursor?: string | undefined } | undefined
}
type UpdateRedemptionStatusBody = { status: 'CANCELED' | 'FULFILLED' }
type UpdateRedemptionStatusResponse = { data: CustomRewardRedemption[] }
type CharityCampaign = {
  id: string
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  charity_name: string
  charity_description: string
  charity_logo: string
  charity_website: string
  current_amount: { value: number; decimal_places: number; currency: string }
  target_amount: { value: number; decimal_places: number; currency: string }
}
type GetCharityCampaignResponse = { data: CharityCampaign[] }
type CharityCampaignDonation = {
  id: string
  campaign_id: string
  user_id: string
  user_login: string
  user_name: string
  amount: { value: number; decimal_places: number; currency: string }
}
type GetCharityCampaignDonationsResponse = {
  data: CharityCampaignDonation[]
  pagination?: { cursor?: string | undefined } | undefined
}
type Chatter = { user_id: string; user_login: string; user_name: string }
type GetChattersResponse = {
  data: Chatter[]
  pagination?: { cursor?: string | undefined } | undefined
  total: number
}
type ChannelEmote = {
  id: string
  name: string
  images: { url_1x: string; url_2x: string; url_4x: string }
  tier: string
  emote_type: 'bitstier' | 'follower' | 'subscriptions'
  emote_set_id: string
  format: ('animated' | 'static')[]
  scale: ('1.0' | '2.0' | '3.0')[]
  theme_mode: ('dark' | 'light')[]
}
type GetChannelEmotesResponse = { data: ChannelEmote[]; template: string }
type GlobalEmote = {
  id: string
  name: string
  images: { url_1x: string; url_2x: string; url_4x: string }
  format: ('animated' | 'static')[]
  scale: ('1.0' | '2.0' | '3.0')[]
  theme_mode: ('dark' | 'light')[]
}
type GetGlobalEmotesResponse = { data: GlobalEmote[]; template: string }
type Emote = {
  id: string
  name: string
  images: { url_1x: string; url_2x: string; url_4x: string }
  emote_type: 'bitstier' | 'follower' | 'subscriptions'
  emote_set_id: string
  owner_id: string
  format: ('animated' | 'static')[]
  scale: ('1.0' | '2.0' | '3.0')[]
  theme_mode: ('dark' | 'light')[]
}
type GetEmoteSetsResponse = { data: Emote[]; template: string }
type ChatBadge = {
  set_id: string
  versions: {
    id: string
    image_url_1x: string
    image_url_2x: string
    image_url_4x: string
    title: string
    description: string
    click_action: string
    click_url: string
  }[]
}
type GetChannelChatBadgesResponse = { data: ChatBadge[] }
type GetGlobalChatBadgesResponse = { data: ChatBadge[] }
type ChatSettings = {
  broadcaster_id: string
  emote_mode: boolean
  follower_mode: boolean
  follower_mode_duration: number | null
  moderator_id?: string | undefined
  non_moderator_chat_delay?: boolean | undefined
  non_moderator_chat_delay_duration?: (number | null) | undefined
  slow_mode: boolean
  slow_mode_wait_time: number | null
  subscriber_mode: boolean
  unique_chat_mode: boolean
}
type GetChatSettingsResponse = { data: ChatSettings[] }
type UpdateChatSettingsBody = {
  emote_mode?: boolean | undefined
  follower_mode?: boolean | undefined
  follower_mode_duration?: number | undefined
  non_moderator_chat_delay?: boolean | undefined
  non_moderator_chat_delay_duration?: 2 | 4 | 6 | undefined
  slow_mode?: boolean | undefined
  slow_mode_wait_time?: number | undefined
  subscriber_mode?: boolean | undefined
  unique_chat_mode?: boolean | undefined
}
type ChatSettingsUpdated = {
  broadcaster_id: string
  emote_mode: boolean
  follower_mode: boolean
  follower_mode_duration: number | null
  moderator_id?: string | undefined
  non_moderator_chat_delay: boolean
  non_moderator_chat_delay_duration: number | null
  slow_mode: boolean
  slow_mode_wait_time: number | null
  subscriber_mode: boolean
  unique_chat_mode: boolean
}
type UpdateChatSettingsResponse = { data: ChatSettingsUpdated[] }
type GetSharedChatSessionResponse = {
  data: {
    session_id: string
    host_broadcaster_id: string
    participants: { broadcaster_id: string }[]
    created_at: string
    updated_at: string
  }[]
}
type GetUserEmotesResponse = {
  data: {
    id: string
    name: string
    emote_type:
      | 'none'
      | 'bitstier'
      | 'follower'
      | 'subscriptions'
      | 'channelpoints'
      | 'rewards'
      | 'hypetrain'
      | 'prime'
      | 'turbo'
      | 'smilies'
      | 'globals'
      | 'owl2019'
      | 'twofactor'
      | 'limitedtime'
    emote_set_id: string
    owner_id: string
    format: string[]
    scale: string[]
    theme_mode: string[]
  }[]
  template: string
  pagination?: { cursor?: string | undefined } | undefined
}
type SendChatAnnouncementBody = {
  message: string
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'primary' | undefined
  for_source_only?: boolean | undefined
}
type SendChatMessageBody = {
  broadcaster_id: string
  sender_id: string
  message: string
  reply_parent_message_id?: string | undefined
  for_source_only?: boolean | undefined
  pin?: boolean | undefined
}
type SendChatMessageResponse = {
  data: {
    message_id: string
    is_sent: boolean
    drop_reason?: { code: string; message: string } | undefined
  }[]
}
type GetPinnedChatMessageResponse = {
  data: {
    message_id: string
    broadcaster_id: string
    sender_user_id: string
    sender_user_login: string
    sender_user_name: string
    pinned_by_user_id: string
    pinned_by_user_login: string
    pinned_by_user_name: string
    message: {
      text: string
      fragments: {
        type: string
        text: string
        cheermote: { [x: string]: unknown }
        prefix: string
        bits: number
        tier: number
        emote: { [x: string]: unknown }
        id: string
        emote_set_id: string
        owner_id: string
        format: string[]
        mention: { [x: string]: unknown }
        user_id: string
        user_login: string
        user_name: string
      }[]
    }
    starts_at: string
    ends_at: string
    updated_at: string
  }[]
}
type UserChatColor = { user_id: string; user_login: string; user_name: string; color: string }
type GetUserChatColorResponse = { data: UserChatColor[] }
type CreateClipResponse = { data: { id: string; edit_url: string }[] }
type Clip = {
  id: string
  url: string
  embed_url: string
  broadcaster_id: string
  broadcaster_name: string
  creator_id: string
  creator_name: string
  video_id: string
  game_id: string
  language: string
  title: string
  view_count: number
  created_at: string
  thumbnail_url: string
  duration: number
  vod_offset: number | null
  is_featured: boolean
}
type GetClipsResponse = { data: Clip[]; pagination?: { cursor?: string | undefined } | undefined }
type CreateClipFromVODResponse = { data: { id: string; edit_url: string }[] }
type GetClipsDownloadResponse = {
  data: { clip_id: string; landscape_download_url: string; portrait_download_url: string }[]
}
type GetConduitsResponse = { data: { id: string; shard_count: number }[] }
type CreateConduitsBody = { shard_count: number }
type CreateConduitsResponse = { data: { id: string; shard_count: number }[] }
type UpdateConduitsBody = { id: string; shard_count: number }
type UpdateConduitsResponse = { data: { id: string; shard_count: number }[] }
type GetConduitShardsResponse = {
  data: {
    id: string
    status:
      | 'enabled'
      | 'webhook_callback_verification_pending'
      | 'webhook_callback_verification_failed'
      | 'notification_failures_exceeded'
      | 'websocket_disconnected'
      | 'websocket_failed_ping_pong'
      | 'websocket_received_inbound_traffic'
      | 'websocket_internal_error'
      | 'websocket_network_timeout'
      | 'websocket_network_error'
      | 'websocket_failed_to_reconnect'
    transport: {
      method: 'webhook' | 'websocket'
      callback?: string | undefined
      session_id?: string | undefined
      connected_at?: string | undefined
      disconnected_at?: string | undefined
    }
  }[]
  pagination?: { cursor?: string | undefined } | undefined
}
type UpdateConduitShardsBody = {
  conduit_id: string
  shards: {
    id: string
    transport: {
      method?: 'webhook' | 'websocket' | undefined
      callback?: string | undefined
      secret?: string | undefined
      session_id?: string | undefined
    }
  }[]
}
type UpdateConduitShardsResponse = {
  data: {
    id: string
    status:
      | 'enabled'
      | 'webhook_callback_verification_pending'
      | 'webhook_callback_verification_failed'
      | 'notification_failures_exceeded'
      | 'websocket_disconnected'
      | 'websocket_failed_ping_pong'
      | 'websocket_received_inbound_traffic'
      | 'websocket_internal_error'
      | 'websocket_network_timeout'
      | 'websocket_network_error'
      | 'websocket_failed_to_reconnect'
    transport: {
      method: 'webhook' | 'websocket'
      callback?: string | undefined
      session_id?: string | undefined
      connected_at?: string | undefined
      disconnected_at?: string | undefined
    }
  }[]
  errors: { id: string; message: string; code: string }[]
}
type ContentClassificationLabel = { id: string; description: string; name: string }
type GetContentClassificationLabelsResponse = { data: ContentClassificationLabel[] }
type DropsEntitlement = {
  id: string
  benefit_id: string
  timestamp: string
  user_id: string
  game_id: string
  fulfillment_status: 'CLAIMED' | 'FULFILLED'
  last_updated: string
}
type GetDropsEntitlementsResponse = {
  data: DropsEntitlement[]
  pagination?: { cursor?: string | undefined } | undefined
}
type UpdateDropsEntitlementsBody = {
  entitlement_ids?: string[] | undefined
  fulfillment_status?: 'CLAIMED' | 'FULFILLED' | undefined
}
type DropsEntitlementUpdated = {
  status: 'INVALID_ID' | 'NOT_FOUND' | 'SUCCESS' | 'UNAUTHORIZED' | 'UPDATE_FAILED'
  ids: string[]
}
type UpdateDropsEntitlementsResponse = { data: DropsEntitlementUpdated[] }
type ExtensionConfigurationSegment = {
  segment: 'broadcaster' | 'developer' | 'global'
  broadcaster_id?: string | undefined
  content: string
  version: string
}
type GetExtensionConfigurationSegmentResponse = { data: ExtensionConfigurationSegment[] }
type SetExtensionConfigurationSegmentBody = {
  extension_id: string
  segment: 'broadcaster' | 'developer' | 'global'
  broadcaster_id?: string | undefined
  content?: string | undefined
  version?: string | undefined
}
type SetExtensionRequiredConfigurationBody = {
  extension_id: string
  extension_version: string
  required_configuration: string
}
type SendExtensionPubSubMessageBody = {
  target: ('broadcast' | 'global' | 'whisper-<user-id>')[]
  broadcaster_id: string
  is_global_broadcast?: boolean | undefined
  message: string
}
type ExtensionLiveChannel = {
  broadcaster_id: string
  broadcaster_name: string
  game_name: string
  game_id: string
  title: string
}
type GetExtensionLiveChannelsResponse = {
  data: ExtensionLiveChannel[]
  pagination?: string | undefined
}
type ExtensionSecret = {
  format_version: number
  secrets: { content: string; active_at: string; expires_at: string }[]
}
type GetExtensionSecretsResponse = { data: ExtensionSecret[] }
type CreateExtensionSecretResponse = { data: ExtensionSecret[] }
type SendExtensionChatMessageBody = {
  text: string
  extension_id: string
  extension_version: string
}
type ExtensionIconUrls = {
  '100x100'?: string | undefined
  '24x24'?: string | undefined
  '300x200'?: string | undefined
}
type Extension = {
  author_name: string
  bits_enabled: boolean
  can_install: boolean
  configuration_location: 'hosted' | 'custom' | 'none'
  description: string
  eula_tos_url: string
  has_chat_support: boolean
  icon_url: string
  icon_urls: ExtensionIconUrls
  id: string
  name: string
  privacy_policy_url: string
  request_identity_link: boolean
  screenshot_urls: string[]
  state:
    | 'Approved'
    | 'AssetsUploaded'
    | 'Deleted'
    | 'Deprecated'
    | 'InReview'
    | 'InTest'
    | 'PendingAction'
    | 'Rejected'
    | 'Released'
  subscriptions_support_level: 'none' | 'optional'
  summary: string
  support_email: string
  version: string
  viewer_summary: string
  views: {
    mobile: { viewer_url: string }
    panel: { viewer_url: string; height: number; can_link_external_content: boolean }
    video_overlay: { viewer_url: string; can_link_external_content: boolean }
    component: {
      viewer_url: string
      aspect_ratio_x: number
      aspect_ratio_y: number
      autoscale: boolean
      scale_pixels: number
      target_height: number
      can_link_external_content: boolean
    }
    config: { viewer_url: string; can_link_external_content: boolean }
  }
  allowlisted_config_urls: string[]
  allowlisted_panel_urls: string[]
}
type GetExtensionsResponse = { data: Extension[] }
type GetReleasedExtensionsResponse = { data: Extension[] }
type ExtensionBitsProduct = {
  sku: string
  cost: { amount: number; type: 'bits' }
  in_development: boolean
  display_name: string
  expiration: string
  is_broadcast: boolean
}
type GetExtensionBitsProductsResponse = { data: ExtensionBitsProduct[] }
type UpdateExtensionBitsProductBody = {
  sku: string
  cost: { amount: number; type: 'bits' }
  display_name: string
  in_development?: boolean | undefined
  expiration?: string | undefined
  is_broadcast?: boolean | undefined
}
type UpdateExtensionBitsProductResponse = { data: ExtensionBitsProduct[] }
type CreateEventSubSubscriptionBody = {
  type:
    | 'automod.message.hold'
    | 'automod.message.update'
    | 'automod.settings.update'
    | 'automod.terms.update'
    | 'channel.bits.use'
    | 'channel.update'
    | 'channel.follow'
    | 'channel.ad_break.begin'
    | 'channel.chat.clear'
    | 'channel.chat.clear_user_messages'
    | 'channel.chat.message'
    | 'channel.chat.message_delete'
    | 'channel.chat.notification'
    | 'channel.chat_settings.update'
    | 'channel.chat.user_message_hold'
    | 'channel.chat.user_message_update'
    | 'channel.shared_chat.begin'
    | 'channel.shared_chat.update'
    | 'channel.shared_chat.end'
    | 'channel.subscribe'
    | 'channel.subscription.end'
    | 'channel.subscription.gift'
    | 'channel.subscription.message'
    | 'channel.cheer'
    | 'channel.raid'
    | 'channel.ban'
    | 'channel.unban'
    | 'channel.unban_request.create'
    | 'channel.unban_request.resolve'
    | 'channel.moderate'
    | 'channel.moderator.add'
    | 'channel.moderator.remove'
    | 'channel.guest_star_session.begin'
    | 'channel.guest_star_session.end'
    | 'channel.guest_star_guest.update'
    | 'channel.guest_star_settings.update'
    | 'channel.channel_points_automatic_reward_redemption.add'
    | 'channel.channel_points_custom_reward.add'
    | 'channel.channel_points_custom_reward.update'
    | 'channel.channel_points_custom_reward.remove'
    | 'channel.channel_points_custom_reward_redemption.add'
    | 'channel.channel_points_custom_reward_redemption.update'
    | 'channel.custom_power_up_redemption.add'
    | 'channel.poll.begin'
    | 'channel.poll.progress'
    | 'channel.poll.end'
    | 'channel.prediction.begin'
    | 'channel.prediction.progress'
    | 'channel.prediction.lock'
    | 'channel.prediction.end'
    | 'channel.suspicious_user.message'
    | 'channel.suspicious_user.update'
    | 'channel.vip.add'
    | 'channel.vip.remove'
    | 'channel.warning.acknowledge'
    | 'channel.warning.send'
    | 'channel.charity_campaign.donate'
    | 'channel.charity_campaign.start'
    | 'channel.charity_campaign.progress'
    | 'channel.charity_campaign.stop'
    | 'conduit.shard.disabled'
    | 'drop.entitlement.grant'
    | 'extension.bits_transaction.create'
    | 'channel.goal.begin'
    | 'channel.goal.progress'
    | 'channel.goal.end'
    | 'channel.hype_train.begin'
    | 'channel.hype_train.progress'
    | 'channel.hype_train.end'
    | 'channel.shield_mode.begin'
    | 'channel.shield_mode.end'
    | 'channel.shoutout.create'
    | 'channel.shoutout.receive'
    | 'stream.online'
    | 'stream.offline'
    | 'user.authorization.grant'
    | 'user.authorization.revoke'
    | 'user.update'
    | 'user.whisper.message'
  version: string
  condition: { [x: string]: unknown }
  transport: {
    method: 'webhook' | 'websocket' | 'conduit'
    callback?: string | undefined
    secret?: string | undefined
    session_id?: string | undefined
    conduit_id?: string | undefined
  }
}
type EventSubSubscription = {
  id: string
  status:
    | 'enabled'
    | 'webhook_callback_verification_pending'
    | 'webhook_callback_verification_failed'
    | 'notification_failures_exceeded'
    | 'authorization_revoked'
    | 'moderator_removed'
    | 'user_removed'
    | 'version_removed'
    | 'beta_maintenance'
    | 'websocket_disconnected'
    | 'websocket_failed_ping_pong'
    | 'websocket_received_inbound_traffic'
    | 'websocket_connection_unused'
    | 'websocket_internal_error'
    | 'websocket_network_timeout'
    | 'websocket_network_error'
  type:
    | 'automod.message.hold'
    | 'automod.message.update'
    | 'automod.settings.update'
    | 'automod.terms.update'
    | 'channel.bits.use'
    | 'channel.update'
    | 'channel.follow'
    | 'channel.ad_break.begin'
    | 'channel.chat.clear'
    | 'channel.chat.clear_user_messages'
    | 'channel.chat.message'
    | 'channel.chat.message_delete'
    | 'channel.chat.notification'
    | 'channel.chat_settings.update'
    | 'channel.chat.user_message_hold'
    | 'channel.chat.user_message_update'
    | 'channel.shared_chat.begin'
    | 'channel.shared_chat.update'
    | 'channel.shared_chat.end'
    | 'channel.subscribe'
    | 'channel.subscription.end'
    | 'channel.subscription.gift'
    | 'channel.subscription.message'
    | 'channel.cheer'
    | 'channel.raid'
    | 'channel.ban'
    | 'channel.unban'
    | 'channel.unban_request.create'
    | 'channel.unban_request.resolve'
    | 'channel.moderate'
    | 'channel.moderator.add'
    | 'channel.moderator.remove'
    | 'channel.guest_star_session.begin'
    | 'channel.guest_star_session.end'
    | 'channel.guest_star_guest.update'
    | 'channel.guest_star_settings.update'
    | 'channel.channel_points_automatic_reward_redemption.add'
    | 'channel.channel_points_custom_reward.add'
    | 'channel.channel_points_custom_reward.update'
    | 'channel.channel_points_custom_reward.remove'
    | 'channel.channel_points_custom_reward_redemption.add'
    | 'channel.channel_points_custom_reward_redemption.update'
    | 'channel.custom_power_up_redemption.add'
    | 'channel.poll.begin'
    | 'channel.poll.progress'
    | 'channel.poll.end'
    | 'channel.prediction.begin'
    | 'channel.prediction.progress'
    | 'channel.prediction.lock'
    | 'channel.prediction.end'
    | 'channel.suspicious_user.message'
    | 'channel.suspicious_user.update'
    | 'channel.vip.add'
    | 'channel.vip.remove'
    | 'channel.warning.acknowledge'
    | 'channel.warning.send'
    | 'channel.charity_campaign.donate'
    | 'channel.charity_campaign.start'
    | 'channel.charity_campaign.progress'
    | 'channel.charity_campaign.stop'
    | 'conduit.shard.disabled'
    | 'drop.entitlement.grant'
    | 'extension.bits_transaction.create'
    | 'channel.goal.begin'
    | 'channel.goal.progress'
    | 'channel.goal.end'
    | 'channel.hype_train.begin'
    | 'channel.hype_train.progress'
    | 'channel.hype_train.end'
    | 'channel.shield_mode.begin'
    | 'channel.shield_mode.end'
    | 'channel.shoutout.create'
    | 'channel.shoutout.receive'
    | 'stream.online'
    | 'stream.offline'
    | 'user.authorization.grant'
    | 'user.authorization.revoke'
    | 'user.update'
    | 'user.whisper.message'
  version: string
  condition: { [x: string]: unknown }
  created_at: string
  transport: {
    method: 'webhook' | 'websocket'
    callback?: string | undefined
    session_id?: string | undefined
    connected_at?: string | undefined
    disconnected_at?: string | undefined
  }
  cost: number
}
type CreateEventSubSubscriptionResponse = {
  data: EventSubSubscription[]
  total: number
  total_cost: number
  max_total_cost: number
}
type GetEventSubSubscriptionsResponse = {
  data: EventSubSubscription[]
  total: number
  total_cost: number
  max_total_cost: number
  pagination?: { cursor?: string | undefined } | undefined
}
type Game = { id: string; name: string; box_art_url: string; igdb_id: string }
type GetTopGamesResponse = {
  data: Game[]
  pagination?: { cursor?: string | undefined } | undefined
}
type GetGamesResponse = { data: Game[] }
type CreatorGoal = {
  id: string
  broadcaster_id: string
  broadcaster_name: string
  broadcaster_login: string
  type:
    | 'follower'
    | 'subscription'
    | 'subscription_count'
    | 'new_subscription'
    | 'new_subscription_count'
    | 'new_bit'
    | 'new_cheerer'
  description: string
  current_amount: number
  target_amount: number
  created_at: string
}
type GetCreatorGoalsResponse = { data: CreatorGoal[] }
type GetChannelGuestStarSettingsResponse = {
  is_moderator_send_live_enabled: boolean
  slot_count: number
  is_browser_source_audio_enabled: boolean
  group_layout: 'TILED_LAYOUT' | 'SCREENSHARE_LAYOUT'
  browser_source_token: string
}
type UpdateChannelGuestStarSettingsBody = {
  is_moderator_send_live_enabled?: boolean | undefined
  slot_count?: number | undefined
  is_browser_source_audio_enabled?: boolean | undefined
  group_layout?:
    | 'TILED_LAYOUT'
    | 'SCREENSHARE_LAYOUT'
    | 'HORIZONTAL_LAYOUT'
    | 'VERTICAL_LAYOUT'
    | undefined
  regenerate_browser_sources?: boolean | undefined
}
type Guest = {
  slot_id: string
  is_live: boolean
  user_id: string
  user_display_name: string
  user_login: string
  volume: number
  assigned_at: string
  audio_settings: { is_host_enabled: boolean; is_guest_enabled: boolean; is_available: boolean }
  video_settings: { is_host_enabled: boolean; is_guest_enabled: boolean; is_available: boolean }
}
type GuestStarSession = { id: string; guests: Guest[] }
type GetGuestStarSessionResponse = { data: GuestStarSession[] }
type CreateGuestStarSessionResponse = { data: GuestStarSession[] }
type EndGuestStarSessionResponse = { data: GuestStarSession[] }
type GuestStarInvite = {
  user_id: string
  invited_at: string
  status: string
  is_video_enabled: boolean
  is_audio_enabled: boolean
  is_video_available: boolean
  is_audio_available: boolean
}
type GetGuestStarInvitesResponse = { data: GuestStarInvite[] }
type GetHypeTrainStatusResponse = {
  data: {
    current: {
      id: string
      broadcaster_user_id: string
      broadcaster_user_login: string
      broadcaster_user_name: string
      level: number
      total: number
      progress: number
      goal: number
      top_contributions: {
        user_id: string
        user_login: string
        user_name: string
        type: 'treasure' | 'golden_kappa' | 'regular'
        total: number
        shared_train_participants: {
          broadcaster_user_id: string
          broadcaster_user_login: string
          broadcaster_user_name: string
        }[]
        started_at: string
        expires_at: string
        is_shared_train: boolean
      }[]
    }
  }[]
  all_time_high: { level: number; total: number; achieved_at: string }
  shared_all_time_high: { level: number; total: number; achieved_at: string }
}
type CheckAutoModStatusBody = { data: { msg_id: string; msg_text: string }[] }
type AutoModStatus = { msg_id: string; is_permitted: boolean }
type CheckAutoModStatusResponse = { data: AutoModStatus[] }
type ManageHeldAutoModMessagesBody = { user_id: string; msg_id: string; action: 'ALLOW' | 'DENY' }
type AutoModSettings = {
  broadcaster_id: string
  moderator_id: string
  overall_level: number | null
  disability: number
  aggression: number
  sexuality_sex_or_gender: number
  misogyny: number
  bullying: number
  swearing: number
  race_ethnicity_or_religion: number
  sex_based_terms: number
}
type GetAutoModSettingsResponse = { data: AutoModSettings[] }
type UpdateAutoModSettingsBody = {
  aggression?: number | undefined
  bullying?: number | undefined
  disability?: number | undefined
  misogyny?: number | undefined
  overall_level?: number | undefined
  race_ethnicity_or_religion?: number | undefined
  sex_based_terms?: number | undefined
  sexuality_sex_or_gender?: number | undefined
  swearing?: number | undefined
}
type UpdateAutoModSettingsResponse = { data: AutoModSettings[] }
type BannedUser = {
  user_id: string
  user_login: string
  user_name: string
  expires_at: string
  created_at: string
  reason: string
  moderator_id: string
  moderator_login: string
  moderator_name: string
}
type GetBannedUsersResponse = {
  data: BannedUser[]
  pagination?: { cursor?: string | undefined } | undefined
}
type BanUserBody = {
  data: { user_id: string; duration?: number | undefined; reason?: string | undefined }
}
type BanUserResponse = {
  data: {
    broadcaster_id: string
    moderator_id: string
    user_id: string
    created_at: string
    end_time: string | null
  }[]
}
type GetUnbanRequestsResponse = {
  data: {
    id: string
    broadcaster_id: string
    broadcaster_name: string
    broadcaster_login: string
    moderator_id: string
    moderator_login: string
    moderator_name: string
    user_id: string
    user_login: string
    user_name: string
    text: string
    status: string
    created_at: string
    resolved_at: string
    resolution_text: string
  }[]
  pagination?: { cursor?: string | undefined } | undefined
}
type ResolveUnbanRequestsResponse = {
  data: {
    id: string
    broadcaster_id: string
    broadcaster_login: string
    broadcaster_name: string
    moderator_id: string
    moderator_login: string
    moderator_name: string
    user_id: string
    user_login: string
    user_name: string
    text: string
    status: string
    created_at: string
    resolved_at: string
    resolution_text: string
  }[]
}
type BlockedTerm = {
  broadcaster_id: string
  moderator_id: string
  id: string
  text: string
  created_at: string
  updated_at: string
  expires_at: string | null
}
type GetBlockedTermsResponse = {
  data: BlockedTerm[]
  pagination?: { cursor?: string | undefined } | undefined
}
type AddBlockedTermBody = { text: string }
type AddBlockedTermResponse = { data: BlockedTerm[] }
type GetModeratedChannelsResponse = {
  data: { broadcaster_id: string; broadcaster_login: string; broadcaster_name: string }[]
  pagination?: { cursor?: string | undefined } | undefined
}
type UserModerator = { user_id: string; user_login: string; user_name: string }
type GetModeratorsResponse = {
  data: UserModerator[]
  pagination?: { cursor?: string | undefined } | undefined
}
type UserVip = { user_id: string; user_name: string; user_login: string }
type GetVIPsResponse = { data: UserVip[]; pagination?: { cursor?: string | undefined } | undefined }
type UpdateShieldModeStatusBody = { is_active: boolean }
type UpdateShieldModeStatusResponse = {
  data: {
    is_active: boolean
    moderator_id: string
    moderator_login: string
    moderator_name: string
    last_activated_at: string
  }[]
}
type GetShieldModeStatusResponse = {
  data: {
    is_active: boolean
    moderator_id: string
    moderator_login: string
    moderator_name: string
    last_activated_at: string
  }[]
}
type WarnChatUserBody = { data: { user_id: string; reason: string } }
type WarnChatUserResponse = {
  data: { broadcaster_id: string; user_id: string; moderator_id: string; reason: string }[]
}
type AddSuspiciousStatusToChatUserBody = {
  user_id: string
  status: 'ACTIVE_MONITORING' | 'RESTRICTED'
}
type AddSuspiciousStatusToChatUserResponse = {
  data: {
    user_id: string
    broadcaster_id: string
    moderator_id: string
    updated_at: string
    status: 'ACTIVE_MONITORING' | 'RESTRICTED'
    types: (
      | 'MANUALLY_ADDED'
      | 'DETECTED_BAN_EVADER'
      | 'DETECTED_SUS_CHATTER'
      | 'BANNED_IN_SHARED_CHANNEL'
    )[]
  }[]
}
type RemoveSuspiciousStatusFromChatUserResponse = {
  data: {
    user_id: string
    broadcaster_id: string
    moderator_id: string
    updated_at: string
    status: 'NO_TREATMENT'
    types: (
      | 'MANUALLY_ADDED'
      | 'DETECTED_BAN_EVADER'
      | 'DETECTED_SUS_CHATTER'
      | 'BANNED_IN_SHARED_CHANNEL'
    )[]
  }[]
}
type Poll = {
  id: string
  broadcaster_id: string
  broadcaster_name: string
  broadcaster_login: string
  title: string
  choices: {
    id: string
    title: string
    votes: number
    channel_points_votes: number
    bits_votes: number
  }[]
  bits_voting_enabled: boolean
  bits_per_vote: number
  channel_points_voting_enabled: boolean
  channel_points_per_vote: number
  status: 'ACTIVE' | 'COMPLETED' | 'TERMINATED' | 'ARCHIVED' | 'MODERATED' | 'INVALID'
  duration: number
  started_at: string
  ended_at: string | null
}
type GetPollsResponse = { data: Poll[]; pagination?: { cursor?: string | undefined } | undefined }
type CreatePollBody = {
  broadcaster_id: string
  title: string
  choices: { title: string }[]
  duration: number
  channel_points_voting_enabled?: boolean | undefined
  channel_points_per_vote?: number | undefined
}
type CreatePollResponse = { data: Poll[] }
type EndPollBody = { broadcaster_id: string; id: string; status: 'TERMINATED' | 'ARCHIVED' }
type EndPollResponse = { data: Poll[] }
type PredictionOutcome = {
  id: string
  title: string
  users: number
  channel_points: number
  top_predictors:
    | {
        user_id: string
        user_name: string
        user_login: string
        channel_points_used: number
        channel_points_won: number
      }[]
    | null
  color: 'BLUE' | 'PINK'
}
type Prediction = {
  id: string
  broadcaster_id: string
  broadcaster_name: string
  broadcaster_login: string
  title: string
  winning_outcome_id: string | null
  outcomes: PredictionOutcome[]
  prediction_window: number
  status: 'ACTIVE' | 'CANCELED' | 'LOCKED' | 'RESOLVED'
  created_at: string
  ended_at: string | null
  locked_at: string | null
}
type GetPredictionsResponse = {
  data: Prediction[]
  pagination?: { cursor?: string | undefined } | undefined
}
type CreatePredictionBody = {
  broadcaster_id: string
  title: string
  outcomes: { title: string }[]
  prediction_window: number
}
type CreatePredictionResponse = { data: Prediction[] }
type EndPredictionBody = {
  broadcaster_id: string
  id: string
  status: 'RESOLVED' | 'CANCELED' | 'LOCKED'
  winning_outcome_id?: string | undefined
}
type EndPredictionResponse = { data: Prediction[] }
type StartARaidResponse = { data: { created_at: string; is_mature: boolean }[] }
type ChannelStreamScheduleSegment = {
  id: string
  start_time: string
  end_time: string
  title: string
  canceled_until: string | null
  category: { id: string; name: string }
  is_recurring: boolean
}
type GetChannelStreamScheduleResponse = {
  data: {
    segments: ChannelStreamScheduleSegment[]
    broadcaster_id: string
    broadcaster_name: string
    broadcaster_login: string
    vacation: { start_time: string; end_time: string }
    pagination?: { cursor?: string | undefined } | undefined
  }
}
type CreateChannelStreamScheduleSegmentBody = {
  start_time: string
  timezone: string
  duration: string
  is_recurring?: boolean | undefined
  category_id?: string | undefined
  title?: string | undefined
}
type CreateChannelStreamScheduleSegmentResponse = {
  data: {
    segments: ChannelStreamScheduleSegment[]
    broadcaster_id: string
    broadcaster_name: string
    broadcaster_login: string
    vacation: { start_time: string; end_time: string }
  }
}
type UpdateChannelStreamScheduleSegmentBody = {
  start_time?: string | undefined
  duration?: string | undefined
  category_id?: string | undefined
  title?: string | undefined
  is_canceled?: boolean | undefined
  timezone?: string | undefined
}
type UpdateChannelStreamScheduleSegmentResponse = {
  data: {
    segments: ChannelStreamScheduleSegment[]
    broadcaster_id: string
    broadcaster_name: string
    broadcaster_login: string
    vacation: { start_time: string; end_time: string }
  }
}
type Category = { box_art_url: string; name: string; id: string }
type SearchCategoriesResponse = {
  data: Category[]
  pagination?: { cursor?: string | undefined } | undefined
}
type Channel = {
  broadcaster_language: string
  broadcaster_login: string
  display_name: string
  game_id: string
  game_name: string
  id: string
  is_live: boolean
  tag_ids: string[]
  tags: string[]
  thumbnail_url: string
  title: string
  started_at: string
}
type SearchChannelsResponse = {
  data: Channel[]
  pagination?: { cursor?: string | undefined } | undefined
}
type GetStreamKeyResponse = { data: { stream_key: string }[] }
type Stream = {
  id: string
  user_id: string
  user_login: string
  user_name: string
  game_id: string
  game_name: string
  type: 'live'
  title: string
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: string[]
  tags: string[]
  is_mature: boolean
}
type GetStreamsResponse = {
  data: Stream[]
  pagination?: { cursor?: string | undefined } | undefined
}
type GetFollowedStreamsResponse = {
  data: Stream[]
  pagination?: { cursor?: string | undefined } | undefined
}
type CreateStreamMarkerBody = { user_id: string; description?: string | undefined }
type StreamMarkerCreated = {
  id: string
  created_at: string
  position_seconds: number
  description: string
}
type CreateStreamMarkerResponse = { data: StreamMarkerCreated[] }
type StreamMarkers = {
  user_id: string
  user_name: string
  user_login: string
  videos: {
    video_id: string
    markers: {
      id: string
      created_at: string
      description: string
      position_seconds: number
      url: string
    }[]
  }[]
}
type GetStreamMarkersResponse = {
  data: StreamMarkers[]
  pagination?: { cursor?: string | undefined } | undefined
}
type BroadcasterSubscription = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  gifter_id: string
  gifter_login: string
  gifter_name: string
  is_gift: boolean
  plan_name: string
  tier: '1000' | '2000' | '3000'
  user_id: string
  user_name: string
  user_login: string
}
type GetBroadcasterSubscriptionsResponse = {
  data: BroadcasterSubscription[]
  pagination?: { cursor?: string | undefined } | undefined
  points: number
  total: number
}
type UserSubscription = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  gifter_id?: string | undefined
  gifter_login?: string | undefined
  gifter_name?: string | undefined
  is_gift: boolean
  tier: '1000' | '2000' | '3000'
}
type CheckUserSubscriptionResponse = { data: UserSubscription[] }
type StreamTag = {
  tag_id: string
  is_auto: boolean
  localization_names: { [x: string]: string }
  localization_descriptions: { [x: string]: string }
}
type GetAllStreamTagsResponse = {
  data: StreamTag[]
  pagination?: { cursor?: string | undefined } | undefined
}
type GetStreamTagsResponse = { data: StreamTag[] }
type ChannelTeam = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  background_image_url: string | null
  banner: string | null
  created_at: string
  updated_at: string
  info: string
  thumbnail_url: string
  team_name: string
  team_display_name: string
  id: string
}
type GetChannelTeamsResponse = { data: ChannelTeam[] }
type Team = {
  users: { user_id: string; user_login: string; user_name: string }[]
  background_image_url: string | null
  banner: string | null
  created_at: string
  updated_at: string
  info: string
  thumbnail_url: string
  team_name: string
  team_display_name: string
  id: string
}
type GetTeamsResponse = { data: Team[] }
type User = {
  id: string
  login: string
  display_name: string
  type: 'admin' | 'global_mod' | 'staff' | ''
  broadcaster_type: 'affiliate' | 'partner' | ''
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  email?: string | undefined
  created_at: string
}
type GetUsersResponse = { data: User[] }
type UpdateUserResponse = { data: User[] }
type GetAuthorizationByUserResponse = {
  data: {
    user_id: string
    user_name: string
    user_login: string
    scopes: (
      | 'analytics:read:extensions'
      | 'analytics:read:games'
      | 'bits:read'
      | 'channel:bot'
      | 'channel:manage:ads'
      | 'channel:read:ads'
      | 'channel:manage:broadcast'
      | 'channel:read:charity'
      | 'channel:manage:clips'
      | 'channel:edit:commercial'
      | 'channel:read:editors'
      | 'channel:manage:extensions'
      | 'channel:read:goals'
      | 'channel:read:guest_star'
      | 'channel:manage:guest_star'
      | 'channel:read:hype_train'
      | 'channel:manage:moderators'
      | 'channel:read:polls'
      | 'channel:manage:polls'
      | 'channel:read:predictions'
      | 'channel:manage:predictions'
      | 'channel:manage:raids'
      | 'channel:read:redemptions'
      | 'channel:manage:redemptions'
      | 'channel:manage:schedule'
      | 'channel:read:stream_key'
      | 'channel:read:subscriptions'
      | 'channel:manage:videos'
      | 'channel:read:vips'
      | 'channel:manage:vips'
      | 'channel:moderate'
      | 'clips:edit'
      | 'editor:manage:clips'
      | 'moderation:read'
      | 'moderator:manage:announcements'
      | 'moderator:manage:automod'
      | 'moderator:read:automod_settings'
      | 'moderator:manage:automod_settings'
      | 'moderator:read:banned_users'
      | 'moderator:manage:banned_users'
      | 'moderator:read:blocked_terms'
      | 'moderator:manage:blocked_terms'
      | 'moderator:read:chat_messages'
      | 'moderator:manage:chat_messages'
      | 'moderator:read:chat_settings'
      | 'moderator:manage:chat_settings'
      | 'moderator:read:chatters'
      | 'moderator:read:followers'
      | 'moderator:read:guest_star'
      | 'moderator:manage:guest_star'
      | 'moderator:read:moderators'
      | 'moderator:read:shield_mode'
      | 'moderator:manage:shield_mode'
      | 'moderator:read:shoutouts'
      | 'moderator:manage:shoutouts'
      | 'moderator:read:suspicious_users'
      | 'moderator:manage:suspicious_users'
      | 'moderator:read:unban_requests'
      | 'moderator:manage:unban_requests'
      | 'moderator:read:vips'
      | 'moderator:read:warnings'
      | 'moderator:manage:warnings'
      | 'user:bot'
      | 'user:edit'
      | 'user:edit:broadcast'
      | 'user:read:blocked_users'
      | 'user:manage:blocked_users'
      | 'user:read:broadcast'
      | 'user:read:chat'
      | 'user:manage:chat_color'
      | 'user:read:email'
      | 'user:read:emotes'
      | 'user:read:follows'
      | 'user:read:moderated_channels'
      | 'user:read:subscriptions'
      | 'user:read:whispers'
      | 'user:manage:whispers'
      | 'user:write:chat'
      | 'chat:edit'
      | 'chat:read'
      | 'whispers:read'
    )[]
    has_authorized: boolean
  }[]
}
type UserBlockList = { user_id: string; user_login: string; display_name: string }
type GetUserBlockListResponse = {
  data: UserBlockList[]
  pagination?: { cursor?: string | undefined } | undefined
}
type UserExtension = {
  id: string
  version: string
  name: string
  can_activate: boolean
  type: ('component' | 'mobile' | 'overlay' | 'panel')[]
}
type GetUserExtensionsResponse = { data: UserExtension[] }
type UserExtensionPanel = {
  active: boolean
  id?: string | undefined
  version?: string | undefined
  name?: string | undefined
}
type UserExtensionOverlay = {
  active: boolean
  id?: string | undefined
  version?: string | undefined
  name?: string | undefined
}
type UserExtensionComponent = {
  active: boolean
  id?: string | undefined
  version?: string | undefined
  name?: string | undefined
  x?: number | undefined
  y?: number | undefined
}
type GetUserActiveExtensionsResponse = {
  data?:
    | {
        panel?: { [x: string]: UserExtensionPanel } | undefined
        overlay?: { [x: string]: UserExtensionOverlay } | undefined
        component?: { [x: string]: UserExtensionComponent } | undefined
      }
    | undefined
}
type UserExtensionPanelUpdate = {
  active: boolean
  id?: string | undefined
  version?: string | undefined
}
type UserExtensionOverlayUpdate = {
  active: boolean
  id?: string | undefined
  version?: string | undefined
}
type UserExtensionComponentUpdate = {
  active: boolean
  id?: string | undefined
  version?: string | undefined
  x?: number | undefined
  y?: number | undefined
}
type UpdateUserExtensionsBody = {
  data: {
    panel?: { [x: string]: UserExtensionPanelUpdate } | undefined
    overlay?: { [x: string]: UserExtensionOverlayUpdate } | undefined
    component?: { [x: string]: UserExtensionComponentUpdate } | undefined
  }
}
type UpdateUserExtensionsResponse = {
  data: {
    panel: { [x: string]: UserExtensionPanel }
    overlay: { [x: string]: UserExtensionOverlay }
    component: { [x: string]: UserExtensionComponent }
  }
}
type Video = {
  id: string
  stream_id: string | null
  user_id: string
  user_login: string
  user_name: string
  title: string
  description: string
  created_at: string
  published_at: string
  url: string
  thumbnail_url: string
  viewable: string
  view_count: number
  language: string
  type: 'archive' | 'highlight' | 'upload'
  duration: string
  muted_segments: { duration: number; offset: number }[] | null
}
type GetVideosResponse = { data: Video[]; pagination?: { cursor?: string | undefined } | undefined }
type DeleteVideosResponse = { data: string[] }
type SendWhisperBody = { message: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/channels/commercial': {
      $post:
        | {
            input: { json: StartCommercialBody }
            output: StartCommercialResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: StartCommercialBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: StartCommercialBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: StartCommercialBody }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: StartCommercialBody }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/channels/ads': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetAdScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/channels/ads/schedule/snooze': {
      $post:
        | {
            input: { query: { broadcaster_id: string } }
            output: SnoozeNextAdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/analytics/extensions': {
      $get:
        | {
            input: {
              query: {
                extension_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetExtensionAnalyticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                extension_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                extension_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                extension_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/analytics/games': {
      $get:
        | {
            input: {
              query: {
                game_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetGameAnalyticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                game_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                game_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                game_id?: string | undefined
                type?: 'overview_v2' | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/bits/leaderboard': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                period?: 'day' | 'week' | 'month' | 'year' | 'all' | undefined
                started_at?: string | undefined
                user_id?: string | undefined
              }
            }
            output: GetBitsLeaderboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                period?: 'day' | 'week' | 'month' | 'year' | 'all' | undefined
                started_at?: string | undefined
                user_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                period?: 'day' | 'week' | 'month' | 'year' | 'all' | undefined
                started_at?: string | undefined
                user_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/bits/cheermotes': {
      $get:
        | {
            input: { query: { broadcaster_id?: string | undefined } }
            output: GetCheermotesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/bits/custom_power_ups': {
      $get:
        | {
            input: { query: { broadcaster_id: string; id?: string[] | undefined } }
            output: GetCustomPowerUpResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { broadcaster_id: string; id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/extensions/transactions': {
      $get:
        | {
            input: {
              query: {
                extension_id: string
                id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetExtensionTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                extension_id: string
                id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                extension_id: string
                id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                extension_id: string
                id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/channels': {
      $get:
        | {
            input: { query: { broadcaster_id: string[] } }
            output: GetChannelInformationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string[] } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { broadcaster_id: string[] } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { query: { broadcaster_id: string } } & { json: ModifyChannelInformationBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: ModifyChannelInformationBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: ModifyChannelInformationBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: ModifyChannelInformationBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: ModifyChannelInformationBody }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: ModifyChannelInformationBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/channels/editors': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetChannelEditorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/channels/followed': {
      $get:
        | {
            input: {
              query: {
                user_id: string
                broadcaster_id?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetFollowedChannelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_id: string
                broadcaster_id?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id: string
                broadcaster_id?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/channels/followers': {
      $get:
        | {
            input: {
              query: {
                user_id?: string | undefined
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetChannelFollowersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_id?: string | undefined
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id?: string | undefined
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/channel_points/custom_rewards': {
      $post:
        | {
            input: { query: { broadcaster_id: string } } & { json: CreateCustomRewardsBody }
            output: CreateCustomRewardsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CreateCustomRewardsBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CreateCustomRewardsBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CreateCustomRewardsBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CreateCustomRewardsBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                only_manageable_rewards?: boolean | undefined
              }
            }
            output: GetCustomRewardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                only_manageable_rewards?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                only_manageable_rewards?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                only_manageable_rewards?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                only_manageable_rewards?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                only_manageable_rewards?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateCustomRewardBody
            }
            output: UpdateCustomRewardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateCustomRewardBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateCustomRewardBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateCustomRewardBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateCustomRewardBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateCustomRewardBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/channel_points/custom_rewards/redemptions': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                reward_id: string
                status?: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED' | undefined
                id?: string[] | undefined
                sort?: 'OLDEST' | 'NEWEST' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: GetCustomRewardRedemptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                reward_id: string
                status?: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED' | undefined
                id?: string[] | undefined
                sort?: 'OLDEST' | 'NEWEST' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                reward_id: string
                status?: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED' | undefined
                id?: string[] | undefined
                sort?: 'OLDEST' | 'NEWEST' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                reward_id: string
                status?: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED' | undefined
                id?: string[] | undefined
                sort?: 'OLDEST' | 'NEWEST' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                reward_id: string
                status?: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED' | undefined
                id?: string[] | undefined
                sort?: 'OLDEST' | 'NEWEST' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                reward_id: string
                status?: 'CANCELED' | 'FULFILLED' | 'UNFULFILLED' | undefined
                id?: string[] | undefined
                sort?: 'OLDEST' | 'NEWEST' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { query: { id: string[]; broadcaster_id: string; reward_id: string } } & {
              json: UpdateRedemptionStatusBody
            }
            output: UpdateRedemptionStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string[]; broadcaster_id: string; reward_id: string } } & {
              json: UpdateRedemptionStatusBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { id: string[]; broadcaster_id: string; reward_id: string } } & {
              json: UpdateRedemptionStatusBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string[]; broadcaster_id: string; reward_id: string } } & {
              json: UpdateRedemptionStatusBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { id: string[]; broadcaster_id: string; reward_id: string } } & {
              json: UpdateRedemptionStatusBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { id: string[]; broadcaster_id: string; reward_id: string } } & {
              json: UpdateRedemptionStatusBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/charity/campaigns': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetCharityCampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/charity/donations': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetCharityCampaignDonationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/chat/chatters': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetChattersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/chat/emotes': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetChannelEmotesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/chat/emotes/global': {
      $get:
        | { input: {}; output: GetGlobalEmotesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/chat/emotes/set': {
      $get:
        | {
            input: { query: { emote_set_id: string[] } }
            output: GetEmoteSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { emote_set_id: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { emote_set_id: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/chat/badges': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetChannelChatBadgesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/chat/badges/global': {
      $get:
        | { input: {}; output: GetGlobalChatBadgesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/chat/settings': {
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id?: string | undefined } }
            output: GetChatSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateChatSettingsBody
            }
            output: UpdateChatSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateChatSettingsBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateChatSettingsBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateChatSettingsBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/shared_chat/session': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetSharedChatSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/chat/emotes/user': {
      $get:
        | {
            input: {
              query: {
                user_id: string
                after?: string | undefined
                broadcaster_id?: string | undefined
              }
            }
            output: GetUserEmotesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_id: string
                after?: string | undefined
                broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id: string
                after?: string | undefined
                broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/chat/announcements': {
      $post:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: SendChatAnnouncementBody
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: SendChatAnnouncementBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: SendChatAnnouncementBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: SendChatAnnouncementBody
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/chat/shoutouts': {
      $post:
        | {
            input: {
              query: {
                from_broadcaster_id: string
                to_broadcaster_id: string
                moderator_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                from_broadcaster_id: string
                to_broadcaster_id: string
                moderator_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                from_broadcaster_id: string
                to_broadcaster_id: string
                moderator_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                from_broadcaster_id: string
                to_broadcaster_id: string
                moderator_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                from_broadcaster_id: string
                to_broadcaster_id: string
                moderator_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/chat/messages': {
      $post:
        | {
            input: { json: SendChatMessageBody }
            output: SendChatMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SendChatMessageBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SendChatMessageBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SendChatMessageBody }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: SendChatMessageBody }; output: {}; outputFormat: string; status: 422 }
        | { input: { json: SendChatMessageBody }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/chat/pins': {
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: GetPinnedChatMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id: string
                duration_seconds?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; message_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; message_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; message_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; message_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; message_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; message_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/chat/color': {
      $get:
        | {
            input: { query: { user_id: string[] } }
            output: GetUserChatColorResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { user_id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { user_id: string[] } }; output: {}; outputFormat: string; status: 401 }
      $put:
        | {
            input: {
              query: {
                user_id: string
                color:
                  | 'blue'
                  | 'blue_violet'
                  | 'cadet_blue'
                  | 'chocolate'
                  | 'coral'
                  | 'dodger_blue'
                  | 'firebrick'
                  | 'golden_rod'
                  | 'green'
                  | 'hot_pink'
                  | 'orange_red'
                  | 'red'
                  | 'sea_green'
                  | 'spring_green'
                  | 'yellow_green'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                user_id: string
                color:
                  | 'blue'
                  | 'blue_violet'
                  | 'cadet_blue'
                  | 'chocolate'
                  | 'coral'
                  | 'dodger_blue'
                  | 'firebrick'
                  | 'golden_rod'
                  | 'green'
                  | 'hot_pink'
                  | 'orange_red'
                  | 'red'
                  | 'sea_green'
                  | 'spring_green'
                  | 'yellow_green'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id: string
                color:
                  | 'blue'
                  | 'blue_violet'
                  | 'cadet_blue'
                  | 'chocolate'
                  | 'coral'
                  | 'dodger_blue'
                  | 'firebrick'
                  | 'golden_rod'
                  | 'green'
                  | 'hot_pink'
                  | 'orange_red'
                  | 'red'
                  | 'sea_green'
                  | 'spring_green'
                  | 'yellow_green'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/clips': {
      $post:
        | {
            input: {
              query: {
                broadcaster_id: string
                title?: string | undefined
                duration?: number | undefined
              }
            }
            output: CreateClipResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                title?: string | undefined
                duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                title?: string | undefined
                duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                title?: string | undefined
                duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                title?: string | undefined
                duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                game_id?: string | undefined
                id?: string[] | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
                is_featured?: boolean | undefined
              }
            }
            output: GetClipsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                game_id?: string | undefined
                id?: string[] | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
                is_featured?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                game_id?: string | undefined
                id?: string[] | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
                is_featured?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                game_id?: string | undefined
                id?: string[] | undefined
                started_at?: string | undefined
                ended_at?: string | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
                is_featured?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/videos/clips': {
      $post:
        | {
            input: {
              query: {
                editor_id: string
                broadcaster_id: string
                vod_id: string
                vod_offset: number
                duration?: number | undefined
                title: string
              }
            }
            output: CreateClipFromVODResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                editor_id: string
                broadcaster_id: string
                vod_id: string
                vod_offset: number
                duration?: number | undefined
                title: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                editor_id: string
                broadcaster_id: string
                vod_id: string
                vod_offset: number
                duration?: number | undefined
                title: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                editor_id: string
                broadcaster_id: string
                vod_id: string
                vod_offset: number
                duration?: number | undefined
                title: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                editor_id: string
                broadcaster_id: string
                vod_id: string
                vod_offset: number
                duration?: number | undefined
                title: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/clips/downloads': {
      $get:
        | {
            input: { query: { editor_id: string; broadcaster_id: string; clip_id: string[] } }
            output: GetClipsDownloadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { editor_id: string; broadcaster_id: string; clip_id: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { editor_id: string; broadcaster_id: string; clip_id: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { editor_id: string; broadcaster_id: string; clip_id: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { editor_id: string; broadcaster_id: string; clip_id: string[] } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/eventsub/conduits': {
      $get:
        | { input: {}; output: GetConduitsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: CreateConduitsBody }
            output: CreateConduitsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateConduitsBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateConduitsBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateConduitsBody }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { json: UpdateConduitsBody }
            output: UpdateConduitsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: UpdateConduitsBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: UpdateConduitsBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UpdateConduitsBody }; output: {}; outputFormat: string; status: 404 }
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/eventsub/conduits/shards': {
      $get:
        | {
            input: {
              query: { conduit_id: string; status?: string | undefined; after?: string | undefined }
            }
            output: GetConduitShardsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { conduit_id: string; status?: string | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { conduit_id: string; status?: string | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { conduit_id: string; status?: string | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { json: UpdateConduitShardsBody }
            output: UpdateConduitShardsResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: UpdateConduitShardsBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: UpdateConduitShardsBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UpdateConduitShardsBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/content_classification_labels': {
      $get:
        | {
            input: { query: { locale?: string | undefined } }
            output: GetContentClassificationLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entitlements/drops': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                fulfillment_status?: 'CLAIMED' | 'FULFILLED' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: GetDropsEntitlementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                fulfillment_status?: 'CLAIMED' | 'FULFILLED' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                fulfillment_status?: 'CLAIMED' | 'FULFILLED' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                fulfillment_status?: 'CLAIMED' | 'FULFILLED' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                fulfillment_status?: 'CLAIMED' | 'FULFILLED' | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { json: UpdateDropsEntitlementsBody }
            output: UpdateDropsEntitlementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateDropsEntitlementsBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: UpdateDropsEntitlementsBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UpdateDropsEntitlementsBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/extensions/configurations': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                extension_id: string
                segment: 'broadcaster' | 'developer' | 'global'
              }
            }
            output: GetExtensionConfigurationSegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                extension_id: string
                segment: 'broadcaster' | 'developer' | 'global'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                extension_id: string
                segment: 'broadcaster' | 'developer' | 'global'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id?: string | undefined
                extension_id: string
                segment: 'broadcaster' | 'developer' | 'global'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $put:
        | {
            input: { json: SetExtensionConfigurationSegmentBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SetExtensionConfigurationSegmentBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SetExtensionConfigurationSegmentBody }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/extensions/required_configuration': {
      $put:
        | {
            input: { query: { broadcaster_id: string } } & {
              json: SetExtensionRequiredConfigurationBody
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string } } & {
              json: SetExtensionRequiredConfigurationBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } } & {
              json: SetExtensionRequiredConfigurationBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/extensions/pubsub': {
      $post:
        | {
            input: { json: SendExtensionPubSubMessageBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SendExtensionPubSubMessageBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SendExtensionPubSubMessageBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: SendExtensionPubSubMessageBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: SendExtensionPubSubMessageBody }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/extensions/live': {
      $get:
        | {
            input: {
              query: {
                extension_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetExtensionLiveChannelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                extension_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                extension_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                extension_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/extensions/jwt/secrets': {
      $get:
        | { input: {}; output: GetExtensionSecretsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { query: { extension_id: string; delay?: number | undefined } }
            output: CreateExtensionSecretResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { extension_id: string; delay?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { extension_id: string; delay?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/extensions/chat': {
      $post:
        | {
            input: { query: { broadcaster_id: string } } & { json: SendExtensionChatMessageBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: SendExtensionChatMessageBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: SendExtensionChatMessageBody }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/extensions': {
      $get:
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: GetExtensionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/extensions/released': {
      $get:
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: GetReleasedExtensionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { extension_id: string; extension_version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/bits/extensions': {
      $get:
        | {
            input: { query: { should_include_all?: boolean | undefined } }
            output: GetExtensionBitsProductsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { should_include_all?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { should_include_all?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { json: UpdateExtensionBitsProductBody }
            output: UpdateExtensionBitsProductResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateExtensionBitsProductBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: UpdateExtensionBitsProductBody }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/eventsub/subscriptions': {
      $post:
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: CreateEventSubSubscriptionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: { json: CreateEventSubSubscriptionBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: {
              query: {
                status?:
                  | 'enabled'
                  | 'webhook_callback_verification_pending'
                  | 'webhook_callback_verification_failed'
                  | 'notification_failures_exceeded'
                  | 'authorization_revoked'
                  | 'moderator_removed'
                  | 'user_removed'
                  | 'chat_user_banned'
                  | 'version_removed'
                  | 'beta_maintenance'
                  | 'websocket_disconnected'
                  | 'websocket_failed_ping_pong'
                  | 'websocket_received_inbound_traffic'
                  | 'websocket_connection_unused'
                  | 'websocket_internal_error'
                  | 'websocket_network_timeout'
                  | 'websocket_network_error'
                  | 'websocket_failed_to_reconnect'
                  | 'conduit_deleted'
                  | undefined
                type?:
                  | 'automod.message.hold'
                  | 'automod.message.update'
                  | 'automod.settings.update'
                  | 'automod.terms.update'
                  | 'channel.bits.use'
                  | 'channel.update'
                  | 'channel.follow'
                  | 'channel.ad_break.begin'
                  | 'channel.chat.clear'
                  | 'channel.chat.clear_user_messages'
                  | 'channel.chat.message'
                  | 'channel.chat.message_delete'
                  | 'channel.chat.notification'
                  | 'channel.chat_settings.update'
                  | 'channel.chat.user_message_hold'
                  | 'channel.chat.user_message_update'
                  | 'channel.shared_chat.begin'
                  | 'channel.shared_chat.update'
                  | 'channel.shared_chat.end'
                  | 'channel.subscribe'
                  | 'channel.subscription.end'
                  | 'channel.subscription.gift'
                  | 'channel.subscription.message'
                  | 'channel.cheer'
                  | 'channel.raid'
                  | 'channel.ban'
                  | 'channel.unban'
                  | 'channel.unban_request.create'
                  | 'channel.unban_request.resolve'
                  | 'channel.moderate'
                  | 'channel.moderator.add'
                  | 'channel.moderator.remove'
                  | 'channel.guest_star_session.begin'
                  | 'channel.guest_star_session.end'
                  | 'channel.guest_star_guest.update'
                  | 'channel.guest_star_settings.update'
                  | 'channel.channel_points_automatic_reward_redemption.add'
                  | 'channel.channel_points_custom_reward.add'
                  | 'channel.channel_points_custom_reward.update'
                  | 'channel.channel_points_custom_reward.remove'
                  | 'channel.channel_points_custom_reward_redemption.add'
                  | 'channel.channel_points_custom_reward_redemption.update'
                  | 'channel.custom_power_up_redemption.add'
                  | 'channel.poll.begin'
                  | 'channel.poll.progress'
                  | 'channel.poll.end'
                  | 'channel.prediction.begin'
                  | 'channel.prediction.progress'
                  | 'channel.prediction.lock'
                  | 'channel.prediction.end'
                  | 'channel.suspicious_user.message'
                  | 'channel.suspicious_user.update'
                  | 'channel.vip.add'
                  | 'channel.vip.remove'
                  | 'channel.warning.acknowledge'
                  | 'channel.warning.send'
                  | 'channel.charity_campaign.donate'
                  | 'channel.charity_campaign.start'
                  | 'channel.charity_campaign.progress'
                  | 'channel.charity_campaign.stop'
                  | 'conduit.shard.disabled'
                  | 'drop.entitlement.grant'
                  | 'extension.bits_transaction.create'
                  | 'channel.goal.begin'
                  | 'channel.goal.progress'
                  | 'channel.goal.end'
                  | 'channel.hype_train.begin'
                  | 'channel.hype_train.progress'
                  | 'channel.hype_train.end'
                  | 'channel.shield_mode.begin'
                  | 'channel.shield_mode.end'
                  | 'channel.shoutout.create'
                  | 'channel.shoutout.receive'
                  | 'stream.online'
                  | 'stream.offline'
                  | 'user.authorization.grant'
                  | 'user.authorization.revoke'
                  | 'user.update'
                  | 'user.whisper.message'
                  | undefined
                user_id?: string | undefined
                subscription_id?: string | undefined
                conduit_id?: string | undefined
                after?: string | undefined
              }
            }
            output: GetEventSubSubscriptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?:
                  | 'enabled'
                  | 'webhook_callback_verification_pending'
                  | 'webhook_callback_verification_failed'
                  | 'notification_failures_exceeded'
                  | 'authorization_revoked'
                  | 'moderator_removed'
                  | 'user_removed'
                  | 'chat_user_banned'
                  | 'version_removed'
                  | 'beta_maintenance'
                  | 'websocket_disconnected'
                  | 'websocket_failed_ping_pong'
                  | 'websocket_received_inbound_traffic'
                  | 'websocket_connection_unused'
                  | 'websocket_internal_error'
                  | 'websocket_network_timeout'
                  | 'websocket_network_error'
                  | 'websocket_failed_to_reconnect'
                  | 'conduit_deleted'
                  | undefined
                type?:
                  | 'automod.message.hold'
                  | 'automod.message.update'
                  | 'automod.settings.update'
                  | 'automod.terms.update'
                  | 'channel.bits.use'
                  | 'channel.update'
                  | 'channel.follow'
                  | 'channel.ad_break.begin'
                  | 'channel.chat.clear'
                  | 'channel.chat.clear_user_messages'
                  | 'channel.chat.message'
                  | 'channel.chat.message_delete'
                  | 'channel.chat.notification'
                  | 'channel.chat_settings.update'
                  | 'channel.chat.user_message_hold'
                  | 'channel.chat.user_message_update'
                  | 'channel.shared_chat.begin'
                  | 'channel.shared_chat.update'
                  | 'channel.shared_chat.end'
                  | 'channel.subscribe'
                  | 'channel.subscription.end'
                  | 'channel.subscription.gift'
                  | 'channel.subscription.message'
                  | 'channel.cheer'
                  | 'channel.raid'
                  | 'channel.ban'
                  | 'channel.unban'
                  | 'channel.unban_request.create'
                  | 'channel.unban_request.resolve'
                  | 'channel.moderate'
                  | 'channel.moderator.add'
                  | 'channel.moderator.remove'
                  | 'channel.guest_star_session.begin'
                  | 'channel.guest_star_session.end'
                  | 'channel.guest_star_guest.update'
                  | 'channel.guest_star_settings.update'
                  | 'channel.channel_points_automatic_reward_redemption.add'
                  | 'channel.channel_points_custom_reward.add'
                  | 'channel.channel_points_custom_reward.update'
                  | 'channel.channel_points_custom_reward.remove'
                  | 'channel.channel_points_custom_reward_redemption.add'
                  | 'channel.channel_points_custom_reward_redemption.update'
                  | 'channel.custom_power_up_redemption.add'
                  | 'channel.poll.begin'
                  | 'channel.poll.progress'
                  | 'channel.poll.end'
                  | 'channel.prediction.begin'
                  | 'channel.prediction.progress'
                  | 'channel.prediction.lock'
                  | 'channel.prediction.end'
                  | 'channel.suspicious_user.message'
                  | 'channel.suspicious_user.update'
                  | 'channel.vip.add'
                  | 'channel.vip.remove'
                  | 'channel.warning.acknowledge'
                  | 'channel.warning.send'
                  | 'channel.charity_campaign.donate'
                  | 'channel.charity_campaign.start'
                  | 'channel.charity_campaign.progress'
                  | 'channel.charity_campaign.stop'
                  | 'conduit.shard.disabled'
                  | 'drop.entitlement.grant'
                  | 'extension.bits_transaction.create'
                  | 'channel.goal.begin'
                  | 'channel.goal.progress'
                  | 'channel.goal.end'
                  | 'channel.hype_train.begin'
                  | 'channel.hype_train.progress'
                  | 'channel.hype_train.end'
                  | 'channel.shield_mode.begin'
                  | 'channel.shield_mode.end'
                  | 'channel.shoutout.create'
                  | 'channel.shoutout.receive'
                  | 'stream.online'
                  | 'stream.offline'
                  | 'user.authorization.grant'
                  | 'user.authorization.revoke'
                  | 'user.update'
                  | 'user.whisper.message'
                  | undefined
                user_id?: string | undefined
                subscription_id?: string | undefined
                conduit_id?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                status?:
                  | 'enabled'
                  | 'webhook_callback_verification_pending'
                  | 'webhook_callback_verification_failed'
                  | 'notification_failures_exceeded'
                  | 'authorization_revoked'
                  | 'moderator_removed'
                  | 'user_removed'
                  | 'chat_user_banned'
                  | 'version_removed'
                  | 'beta_maintenance'
                  | 'websocket_disconnected'
                  | 'websocket_failed_ping_pong'
                  | 'websocket_received_inbound_traffic'
                  | 'websocket_connection_unused'
                  | 'websocket_internal_error'
                  | 'websocket_network_timeout'
                  | 'websocket_network_error'
                  | 'websocket_failed_to_reconnect'
                  | 'conduit_deleted'
                  | undefined
                type?:
                  | 'automod.message.hold'
                  | 'automod.message.update'
                  | 'automod.settings.update'
                  | 'automod.terms.update'
                  | 'channel.bits.use'
                  | 'channel.update'
                  | 'channel.follow'
                  | 'channel.ad_break.begin'
                  | 'channel.chat.clear'
                  | 'channel.chat.clear_user_messages'
                  | 'channel.chat.message'
                  | 'channel.chat.message_delete'
                  | 'channel.chat.notification'
                  | 'channel.chat_settings.update'
                  | 'channel.chat.user_message_hold'
                  | 'channel.chat.user_message_update'
                  | 'channel.shared_chat.begin'
                  | 'channel.shared_chat.update'
                  | 'channel.shared_chat.end'
                  | 'channel.subscribe'
                  | 'channel.subscription.end'
                  | 'channel.subscription.gift'
                  | 'channel.subscription.message'
                  | 'channel.cheer'
                  | 'channel.raid'
                  | 'channel.ban'
                  | 'channel.unban'
                  | 'channel.unban_request.create'
                  | 'channel.unban_request.resolve'
                  | 'channel.moderate'
                  | 'channel.moderator.add'
                  | 'channel.moderator.remove'
                  | 'channel.guest_star_session.begin'
                  | 'channel.guest_star_session.end'
                  | 'channel.guest_star_guest.update'
                  | 'channel.guest_star_settings.update'
                  | 'channel.channel_points_automatic_reward_redemption.add'
                  | 'channel.channel_points_custom_reward.add'
                  | 'channel.channel_points_custom_reward.update'
                  | 'channel.channel_points_custom_reward.remove'
                  | 'channel.channel_points_custom_reward_redemption.add'
                  | 'channel.channel_points_custom_reward_redemption.update'
                  | 'channel.custom_power_up_redemption.add'
                  | 'channel.poll.begin'
                  | 'channel.poll.progress'
                  | 'channel.poll.end'
                  | 'channel.prediction.begin'
                  | 'channel.prediction.progress'
                  | 'channel.prediction.lock'
                  | 'channel.prediction.end'
                  | 'channel.suspicious_user.message'
                  | 'channel.suspicious_user.update'
                  | 'channel.vip.add'
                  | 'channel.vip.remove'
                  | 'channel.warning.acknowledge'
                  | 'channel.warning.send'
                  | 'channel.charity_campaign.donate'
                  | 'channel.charity_campaign.start'
                  | 'channel.charity_campaign.progress'
                  | 'channel.charity_campaign.stop'
                  | 'conduit.shard.disabled'
                  | 'drop.entitlement.grant'
                  | 'extension.bits_transaction.create'
                  | 'channel.goal.begin'
                  | 'channel.goal.progress'
                  | 'channel.goal.end'
                  | 'channel.hype_train.begin'
                  | 'channel.hype_train.progress'
                  | 'channel.hype_train.end'
                  | 'channel.shield_mode.begin'
                  | 'channel.shield_mode.end'
                  | 'channel.shoutout.create'
                  | 'channel.shoutout.receive'
                  | 'stream.online'
                  | 'stream.offline'
                  | 'user.authorization.grant'
                  | 'user.authorization.revoke'
                  | 'user.update'
                  | 'user.whisper.message'
                  | undefined
                user_id?: string | undefined
                subscription_id?: string | undefined
                conduit_id?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/games/top': {
      $get:
        | {
            input: {
              query: {
                first?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: GetTopGamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                first?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                first?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/games': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string[] | undefined
                igdb_id?: string[] | undefined
              }
            }
            output: GetGamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string[] | undefined
                igdb_id?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string[] | undefined
                igdb_id?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/goals': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetCreatorGoalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/guest_star/channel_settings': {
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: GetChannelGuestStarSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { query: { broadcaster_id: string } } & {
              json: UpdateChannelGuestStarSettingsBody
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string } } & {
              json: UpdateChannelGuestStarSettingsBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/guest_star/session': {
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: GetGuestStarSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { broadcaster_id: string } }
            output: CreateGuestStarSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; session_id: string } }
            output: EndGuestStarSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; session_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; session_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/guest_star/invites': {
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; session_id: string } }
            output: GetGuestStarInvitesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; session_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; session_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; session_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/guest_star/slot': {
      $post:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                source_slot_id: string
                destination_slot_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                source_slot_id: string
                destination_slot_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $delete:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
                should_reinvite_guest?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
                should_reinvite_guest?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
                should_reinvite_guest?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                guest_id: string
                slot_id: string
                should_reinvite_guest?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/guest_star/slot_settings': {
      $patch:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                slot_id: string
                is_audio_enabled?: boolean | undefined
                is_video_enabled?: boolean | undefined
                is_live?: boolean | undefined
                volume?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                slot_id: string
                is_audio_enabled?: boolean | undefined
                is_video_enabled?: boolean | undefined
                is_live?: boolean | undefined
                volume?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                session_id: string
                slot_id: string
                is_audio_enabled?: boolean | undefined
                is_video_enabled?: boolean | undefined
                is_live?: boolean | undefined
                volume?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/hypetrain/status': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetHypeTrainStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/moderation/enforcements/status': {
      $post:
        | {
            input: { query: { broadcaster_id: string } } & { json: CheckAutoModStatusBody }
            output: CheckAutoModStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CheckAutoModStatusBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CheckAutoModStatusBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CheckAutoModStatusBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string } } & { json: CheckAutoModStatusBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/moderation/automod/message': {
      $post:
        | {
            input: { json: ManageHeldAutoModMessagesBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ManageHeldAutoModMessagesBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ManageHeldAutoModMessagesBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ManageHeldAutoModMessagesBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: ManageHeldAutoModMessagesBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/moderation/automod/settings': {
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: GetAutoModSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateAutoModSettingsBody
            }
            output: UpdateAutoModSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateAutoModSettingsBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateAutoModSettingsBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateAutoModSettingsBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/moderation/banned': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: GetBannedUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/moderation/bans': {
      $post:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: BanUserBody
            }
            output: BanUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: BanUserBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: BanUserBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: BanUserBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: BanUserBody
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: BanUserBody
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/moderation/unban_requests': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                status: string
                user_id?: string | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: GetUnbanRequestsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                status: string
                user_id?: string | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                status: string
                user_id?: string | undefined
                after?: string | undefined
                first?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                unban_request_id: string
                status: string
                resolution_text?: string | undefined
              }
            }
            output: ResolveUnbanRequestsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                unban_request_id: string
                status: string
                resolution_text?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                unban_request_id: string
                status: string
                resolution_text?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                unban_request_id: string
                status: string
                resolution_text?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/moderation/blocked_terms': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetBlockedTermsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddBlockedTermBody
            }
            output: AddBlockedTermResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddBlockedTermBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddBlockedTermBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddBlockedTermBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/moderation/chat': {
      $delete:
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                moderator_id: string
                message_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/moderation/channels': {
      $get:
        | {
            input: {
              query: { user_id: string; after?: string | undefined; first?: number | undefined }
            }
            output: GetModeratedChannelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { user_id: string; after?: string | undefined; first?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { user_id: string; after?: string | undefined; first?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { user_id: string; after?: string | undefined; first?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/moderation/moderators': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: GetModeratorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/channels/vips': {
      $get:
        | {
            input: {
              query: {
                user_id?: string[] | undefined
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetVIPsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_id?: string[] | undefined
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id?: string[] | undefined
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 425
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { query: { user_id: string; broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/moderation/shield_mode': {
      $put:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateShieldModeStatusBody
            }
            output: UpdateShieldModeStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateShieldModeStatusBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateShieldModeStatusBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: UpdateShieldModeStatusBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: GetShieldModeStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/moderation/warnings': {
      $post:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: WarnChatUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: WarnChatUserBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/moderation/suspicious_users': {
      $post:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddSuspiciousStatusToChatUserBody
            }
            output: AddSuspiciousStatusToChatUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddSuspiciousStatusToChatUserBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddSuspiciousStatusToChatUserBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string } } & {
              json: AddSuspiciousStatusToChatUserBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: RemoveSuspiciousStatusFromChatUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; moderator_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/polls': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: GetPollsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreatePollBody }
            output: CreatePollResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreatePollBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreatePollBody }; output: {}; outputFormat: string; status: 401 }
      $patch:
        | {
            input: { json: EndPollBody }
            output: EndPollResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: EndPollBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: EndPollBody }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/predictions': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: GetPredictionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreatePredictionBody }
            output: CreatePredictionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreatePredictionBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreatePredictionBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreatePredictionBody }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { json: EndPredictionBody }
            output: EndPredictionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: EndPredictionBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: EndPredictionBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: EndPredictionBody }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/raids': {
      $post:
        | {
            input: {
              query: {
                from_broadcaster_id?: string | undefined
                to_broadcaster_id?: string | undefined
              }
            }
            output: StartARaidResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from_broadcaster_id?: string | undefined
                to_broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                from_broadcaster_id?: string | undefined
                to_broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                from_broadcaster_id?: string | undefined
                to_broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                from_broadcaster_id?: string | undefined
                to_broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                from_broadcaster_id?: string | undefined
                to_broadcaster_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/schedule': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                start_time?: string | undefined
                utc_offset?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetChannelStreamScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                start_time?: string | undefined
                utc_offset?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                start_time?: string | undefined
                utc_offset?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                start_time?: string | undefined
                utc_offset?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                id?: string[] | undefined
                start_time?: string | undefined
                utc_offset?: string | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/schedule/icalendar': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/schedule/settings': {
      $patch:
        | {
            input: {
              query: {
                broadcaster_id: string
                is_vacation_enabled?: boolean | undefined
                vacation_start_time?: string | undefined
                vacation_end_time?: string | undefined
                timezone?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                is_vacation_enabled?: boolean | undefined
                vacation_start_time?: string | undefined
                vacation_end_time?: string | undefined
                timezone?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                is_vacation_enabled?: boolean | undefined
                vacation_start_time?: string | undefined
                vacation_end_time?: string | undefined
                timezone?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                is_vacation_enabled?: boolean | undefined
                vacation_start_time?: string | undefined
                vacation_end_time?: string | undefined
                timezone?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/schedule/segment': {
      $post:
        | {
            input: { query: { broadcaster_id: string } } & {
              json: CreateChannelStreamScheduleSegmentBody
            }
            output: CreateChannelStreamScheduleSegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } } & {
              json: CreateChannelStreamScheduleSegmentBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } } & {
              json: CreateChannelStreamScheduleSegmentBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } } & {
              json: CreateChannelStreamScheduleSegmentBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateChannelStreamScheduleSegmentBody
            }
            output: UpdateChannelStreamScheduleSegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateChannelStreamScheduleSegmentBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateChannelStreamScheduleSegmentBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; id: string } } & {
              json: UpdateChannelStreamScheduleSegmentBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/search/categories': {
      $get:
        | {
            input: {
              query: { query: string; first?: number | undefined; after?: string | undefined }
            }
            output: SearchCategoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; first?: number | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { query: string; first?: number | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/search/channels': {
      $get:
        | {
            input: {
              query: {
                query: string
                live_only?: boolean | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: SearchChannelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                live_only?: boolean | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                live_only?: boolean | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/streams/key': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetStreamKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/streams': {
      $get:
        | {
            input: {
              query: {
                user_id?: string[] | undefined
                user_login?: string[] | undefined
                game_id?: string[] | undefined
                type?: 'all' | 'live' | undefined
                language?: string[] | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: GetStreamsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_id?: string[] | undefined
                user_login?: string[] | undefined
                game_id?: string[] | undefined
                type?: 'all' | 'live' | undefined
                language?: string[] | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id?: string[] | undefined
                user_login?: string[] | undefined
                game_id?: string[] | undefined
                type?: 'all' | 'live' | undefined
                language?: string[] | undefined
                first?: number | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/streams/followed': {
      $get:
        | {
            input: {
              query: { user_id: string; first?: number | undefined; after?: string | undefined }
            }
            output: GetFollowedStreamsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { user_id: string; first?: number | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { user_id: string; first?: number | undefined; after?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/streams/markers': {
      $post:
        | {
            input: { json: CreateStreamMarkerBody }
            output: CreateStreamMarkerResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateStreamMarkerBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateStreamMarkerBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateStreamMarkerBody }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: CreateStreamMarkerBody }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: {
              query: {
                user_id?: string | undefined
                video_id?: string | undefined
                first?: string | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: GetStreamMarkersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_id?: string | undefined
                video_id?: string | undefined
                first?: string | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                user_id?: string | undefined
                video_id?: string | undefined
                first?: string | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                user_id?: string | undefined
                video_id?: string | undefined
                first?: string | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                user_id?: string | undefined
                video_id?: string | undefined
                first?: string | undefined
                before?: string | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: GetBroadcasterSubscriptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                user_id?: string[] | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/subscriptions/user': {
      $get:
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: CheckUserSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/tags/streams': {
      $get:
        | {
            input: {
              query: {
                tag_id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetAllStreamTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tag_id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                tag_id?: string[] | undefined
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/streams/tags': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetStreamTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/channel': {
      $get:
        | {
            input: { query: { broadcaster_id: string } }
            output: GetChannelTeamsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { broadcaster_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/teams': {
      $get:
        | {
            input: { query: { name?: string | undefined; id?: string | undefined } }
            output: GetTeamsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined; id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { name?: string | undefined; id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { name?: string | undefined; id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { query: { id?: string[] | undefined; login?: string[] | undefined } }
            output: GetUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: string[] | undefined; login?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { id?: string[] | undefined; login?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { query: { description?: string | undefined } }
            output: UpdateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { description?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { description?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { description?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/authorization/users': {
      $get:
        | {
            input: { query: { user_id: string[] } }
            output: GetAuthorizationByUserResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { user_id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { user_id: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { user_id: string[] } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { user_id: string[] } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/users/blocks': {
      $get:
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: GetUserBlockListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                broadcaster_id: string
                first?: number | undefined
                after?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: {
              query: {
                target_user_id: string
                source_context?: 'chat' | 'whisper' | undefined
                reason?: 'harassment' | 'spam' | 'other' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                target_user_id: string
                source_context?: 'chat' | 'whisper' | undefined
                reason?: 'harassment' | 'spam' | 'other' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                target_user_id: string
                source_context?: 'chat' | 'whisper' | undefined
                reason?: 'harassment' | 'spam' | 'other' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $delete:
        | {
            input: { query: { target_user_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { target_user_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { target_user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/users/extensions/list': {
      $get:
        | { input: {}; output: GetUserExtensionsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/users/extensions': {
      $get:
        | {
            input: { query: { user_id?: string | undefined } }
            output: GetUserActiveExtensionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { user_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { json: UpdateUserExtensionsBody }
            output: UpdateUserExtensionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateUserExtensionsBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: UpdateUserExtensionsBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UpdateUserExtensionsBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/videos': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                language?: string | undefined
                period?: 'all' | 'day' | 'month' | 'week' | undefined
                sort?: 'time' | 'trending' | 'views' | undefined
                type?: 'all' | 'archive' | 'highlight' | 'upload' | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: GetVideosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                language?: string | undefined
                period?: 'all' | 'day' | 'month' | 'week' | undefined
                sort?: 'time' | 'trending' | 'views' | undefined
                type?: 'all' | 'archive' | 'highlight' | 'upload' | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                language?: string | undefined
                period?: 'all' | 'day' | 'month' | 'week' | undefined
                sort?: 'time' | 'trending' | 'views' | undefined
                type?: 'all' | 'archive' | 'highlight' | 'upload' | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                user_id?: string | undefined
                game_id?: string | undefined
                language?: string | undefined
                period?: 'all' | 'day' | 'month' | 'week' | undefined
                sort?: 'time' | 'trending' | 'views' | undefined
                type?: 'all' | 'archive' | 'highlight' | 'upload' | undefined
                first?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { query: { id: string[] } }
            output: DeleteVideosResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/whispers': {
      $post:
        | {
            input: { query: { from_user_id: string; to_user_id: string } } & {
              json: SendWhisperBody
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { from_user_id: string; to_user_id: string } } & {
              json: SendWhisperBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { from_user_id: string; to_user_id: string } } & {
              json: SendWhisperBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { from_user_id: string; to_user_id: string } } & {
              json: SendWhisperBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { from_user_id: string; to_user_id: string } } & {
              json: SendWhisperBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { from_user_id: string; to_user_id: string } } & {
              json: SendWhisperBody
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
