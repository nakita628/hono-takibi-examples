import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postChannelsCommercial(
  args: InferRequestType<typeof client.channels.commercial.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.commercial.$post(args, options))
}

export async function getChannelsAds(
  args: InferRequestType<typeof client.channels.ads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.ads.$get(args, options))
}

export async function postChannelsAdsScheduleSnooze(
  args: InferRequestType<typeof client.channels.ads.schedule.snooze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.ads.schedule.snooze.$post(args, options))
}

export async function getAnalyticsExtensions(
  args: InferRequestType<typeof client.analytics.extensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.extensions.$get(args, options))
}

export async function getAnalyticsGames(
  args: InferRequestType<typeof client.analytics.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.games.$get(args, options))
}

export async function getBitsLeaderboard(
  args: InferRequestType<typeof client.bits.leaderboard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bits.leaderboard.$get(args, options))
}

export async function getBitsCheermotes(
  args: InferRequestType<typeof client.bits.cheermotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bits.cheermotes.$get(args, options))
}

export async function getBitsCustomPowerUps(
  args: InferRequestType<typeof client.bits.custom_power_ups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bits.custom_power_ups.$get(args, options))
}

export async function getExtensionsTransactions(
  args: InferRequestType<typeof client.extensions.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.transactions.$get(args, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function patchChannels(
  args: InferRequestType<typeof client.channels.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$patch(args, options))
}

export async function getChannelsEditors(
  args: InferRequestType<typeof client.channels.editors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.editors.$get(args, options))
}

export async function getChannelsFollowed(
  args: InferRequestType<typeof client.channels.followed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.followed.$get(args, options))
}

export async function getChannelsFollowers(
  args: InferRequestType<typeof client.channels.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.followers.$get(args, options))
}

export async function getChannelPointsCustomRewards(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_points.custom_rewards.$get(args, options))
}

export async function postChannelPointsCustomRewards(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_points.custom_rewards.$post(args, options))
}

export async function deleteChannelPointsCustomRewards(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_points.custom_rewards.$delete(args, options))
}

export async function patchChannelPointsCustomRewards(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_points.custom_rewards.$patch(args, options))
}

export async function getChannelPointsCustomRewardsRedemptions(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_points.custom_rewards.redemptions.$get(args, options))
}

export async function patchChannelPointsCustomRewardsRedemptions(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_points.custom_rewards.redemptions.$patch(args, options))
}

export async function getCharityCampaigns(
  args: InferRequestType<typeof client.charity.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.charity.campaigns.$get(args, options))
}

export async function getCharityDonations(
  args: InferRequestType<typeof client.charity.donations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.charity.donations.$get(args, options))
}

export async function getChatChatters(
  args: InferRequestType<typeof client.chat.chatters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.chatters.$get(args, options))
}

export async function getChatEmotes(
  args: InferRequestType<typeof client.chat.emotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.emotes.$get(args, options))
}

export async function getChatEmotesGlobal(options?: ClientRequestOptions) {
  return await parseResponse(client.chat.emotes.global.$get(undefined, options))
}

export async function getChatEmotesSet(
  args: InferRequestType<typeof client.chat.emotes.set.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.emotes.set.$get(args, options))
}

export async function getChatBadges(
  args: InferRequestType<typeof client.chat.badges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.badges.$get(args, options))
}

export async function getChatBadgesGlobal(options?: ClientRequestOptions) {
  return await parseResponse(client.chat.badges.global.$get(undefined, options))
}

export async function getChatSettings(
  args: InferRequestType<typeof client.chat.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.settings.$get(args, options))
}

export async function patchChatSettings(
  args: InferRequestType<typeof client.chat.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.settings.$patch(args, options))
}

export async function getSharedChatSession(
  args: InferRequestType<typeof client.shared_chat.session.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shared_chat.session.$get(args, options))
}

export async function getChatEmotesUser(
  args: InferRequestType<typeof client.chat.emotes.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.emotes.user.$get(args, options))
}

export async function postChatAnnouncements(
  args: InferRequestType<typeof client.chat.announcements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.announcements.$post(args, options))
}

export async function postChatShoutouts(
  args: InferRequestType<typeof client.chat.shoutouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.shoutouts.$post(args, options))
}

export async function postChatMessages(
  args: InferRequestType<typeof client.chat.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.messages.$post(args, options))
}

export async function getChatPins(
  args: InferRequestType<typeof client.chat.pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.pins.$get(args, options))
}

export async function putChatPins(
  args: InferRequestType<typeof client.chat.pins.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.pins.$put(args, options))
}

export async function deleteChatPins(
  args: InferRequestType<typeof client.chat.pins.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.pins.$delete(args, options))
}

export async function patchChatPins(
  args: InferRequestType<typeof client.chat.pins.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.pins.$patch(args, options))
}

export async function getChatColor(
  args: InferRequestType<typeof client.chat.color.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.color.$get(args, options))
}

export async function putChatColor(
  args: InferRequestType<typeof client.chat.color.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.color.$put(args, options))
}

export async function getClips(
  args: InferRequestType<typeof client.clips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clips.$get(args, options))
}

export async function postClips(
  args: InferRequestType<typeof client.clips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clips.$post(args, options))
}

export async function postVideosClips(
  args: InferRequestType<typeof client.videos.clips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.clips.$post(args, options))
}

export async function getClipsDownloads(
  args: InferRequestType<typeof client.clips.downloads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clips.downloads.$get(args, options))
}

export async function getEventsubConduits(options?: ClientRequestOptions) {
  return await parseResponse(client.eventsub.conduits.$get(undefined, options))
}

export async function postEventsubConduits(
  args: InferRequestType<typeof client.eventsub.conduits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.conduits.$post(args, options))
}

export async function deleteEventsubConduits(
  args: InferRequestType<typeof client.eventsub.conduits.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.conduits.$delete(args, options))
}

export async function patchEventsubConduits(
  args: InferRequestType<typeof client.eventsub.conduits.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.conduits.$patch(args, options))
}

export async function getEventsubConduitsShards(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.conduits.shards.$get(args, options))
}

export async function patchEventsubConduitsShards(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.conduits.shards.$patch(args, options))
}

export async function getContentClassificationLabels(
  args: InferRequestType<typeof client.content_classification_labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_classification_labels.$get(args, options))
}

export async function getEntitlementsDrops(
  args: InferRequestType<typeof client.entitlements.drops.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entitlements.drops.$get(args, options))
}

export async function patchEntitlementsDrops(
  args: InferRequestType<typeof client.entitlements.drops.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entitlements.drops.$patch(args, options))
}

export async function getExtensionsConfigurations(
  args: InferRequestType<typeof client.extensions.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.configurations.$get(args, options))
}

export async function putExtensionsConfigurations(
  args: InferRequestType<typeof client.extensions.configurations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.configurations.$put(args, options))
}

export async function putExtensionsRequiredConfiguration(
  args: InferRequestType<typeof client.extensions.required_configuration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.required_configuration.$put(args, options))
}

export async function postExtensionsPubsub(
  args: InferRequestType<typeof client.extensions.pubsub.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.pubsub.$post(args, options))
}

export async function getExtensionsLive(
  args: InferRequestType<typeof client.extensions.live.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.live.$get(args, options))
}

export async function getExtensionsJwtSecrets(options?: ClientRequestOptions) {
  return await parseResponse(client.extensions.jwt.secrets.$get(undefined, options))
}

export async function postExtensionsJwtSecrets(
  args: InferRequestType<typeof client.extensions.jwt.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.jwt.secrets.$post(args, options))
}

export async function postExtensionsChat(
  args: InferRequestType<typeof client.extensions.chat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.chat.$post(args, options))
}

export async function getExtensions(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.$get(args, options))
}

export async function getExtensionsReleased(
  args: InferRequestType<typeof client.extensions.released.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.released.$get(args, options))
}

export async function getBitsExtensions(
  args: InferRequestType<typeof client.bits.extensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bits.extensions.$get(args, options))
}

export async function putBitsExtensions(
  args: InferRequestType<typeof client.bits.extensions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bits.extensions.$put(args, options))
}

export async function getEventsubSubscriptions(
  args: InferRequestType<typeof client.eventsub.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.subscriptions.$get(args, options))
}

export async function postEventsubSubscriptions(
  args: InferRequestType<typeof client.eventsub.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.subscriptions.$post(args, options))
}

export async function deleteEventsubSubscriptions(
  args: InferRequestType<typeof client.eventsub.subscriptions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsub.subscriptions.$delete(args, options))
}

export async function getGamesTop(
  args: InferRequestType<typeof client.games.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.top.$get(args, options))
}

export async function getGames(
  args: InferRequestType<typeof client.games.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.games.$get(args, options))
}

export async function getGoals(
  args: InferRequestType<typeof client.goals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals.$get(args, options))
}

export async function getGuestStarChannelSettings(
  args: InferRequestType<typeof client.guest_star.channel_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.channel_settings.$get(args, options))
}

export async function putGuestStarChannelSettings(
  args: InferRequestType<typeof client.guest_star.channel_settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.channel_settings.$put(args, options))
}

export async function getGuestStarSession(
  args: InferRequestType<typeof client.guest_star.session.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.session.$get(args, options))
}

export async function postGuestStarSession(
  args: InferRequestType<typeof client.guest_star.session.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.session.$post(args, options))
}

export async function deleteGuestStarSession(
  args: InferRequestType<typeof client.guest_star.session.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.session.$delete(args, options))
}

export async function getGuestStarInvites(
  args: InferRequestType<typeof client.guest_star.invites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.invites.$get(args, options))
}

export async function postGuestStarInvites(
  args: InferRequestType<typeof client.guest_star.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.invites.$post(args, options))
}

export async function deleteGuestStarInvites(
  args: InferRequestType<typeof client.guest_star.invites.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.invites.$delete(args, options))
}

export async function postGuestStarSlot(
  args: InferRequestType<typeof client.guest_star.slot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.slot.$post(args, options))
}

export async function deleteGuestStarSlot(
  args: InferRequestType<typeof client.guest_star.slot.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.slot.$delete(args, options))
}

export async function patchGuestStarSlot(
  args: InferRequestType<typeof client.guest_star.slot.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.slot.$patch(args, options))
}

export async function patchGuestStarSlotSettings(
  args: InferRequestType<typeof client.guest_star.slot_settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest_star.slot_settings.$patch(args, options))
}

export async function getHypetrainStatus(
  args: InferRequestType<typeof client.hypetrain.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hypetrain.status.$get(args, options))
}

export async function postModerationEnforcementsStatus(
  args: InferRequestType<typeof client.moderation.enforcements.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.enforcements.status.$post(args, options))
}

export async function postModerationAutomodMessage(
  args: InferRequestType<typeof client.moderation.automod.message.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.automod.message.$post(args, options))
}

export async function getModerationAutomodSettings(
  args: InferRequestType<typeof client.moderation.automod.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.automod.settings.$get(args, options))
}

export async function putModerationAutomodSettings(
  args: InferRequestType<typeof client.moderation.automod.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.automod.settings.$put(args, options))
}

export async function getModerationBanned(
  args: InferRequestType<typeof client.moderation.banned.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.banned.$get(args, options))
}

export async function postModerationBans(
  args: InferRequestType<typeof client.moderation.bans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.bans.$post(args, options))
}

export async function deleteModerationBans(
  args: InferRequestType<typeof client.moderation.bans.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.bans.$delete(args, options))
}

export async function getModerationUnbanRequests(
  args: InferRequestType<typeof client.moderation.unban_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.unban_requests.$get(args, options))
}

export async function patchModerationUnbanRequests(
  args: InferRequestType<typeof client.moderation.unban_requests.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.unban_requests.$patch(args, options))
}

export async function getModerationBlockedTerms(
  args: InferRequestType<typeof client.moderation.blocked_terms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.blocked_terms.$get(args, options))
}

export async function postModerationBlockedTerms(
  args: InferRequestType<typeof client.moderation.blocked_terms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.blocked_terms.$post(args, options))
}

export async function deleteModerationBlockedTerms(
  args: InferRequestType<typeof client.moderation.blocked_terms.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.blocked_terms.$delete(args, options))
}

export async function deleteModerationChat(
  args: InferRequestType<typeof client.moderation.chat.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.chat.$delete(args, options))
}

export async function getModerationChannels(
  args: InferRequestType<typeof client.moderation.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.channels.$get(args, options))
}

export async function getModerationModerators(
  args: InferRequestType<typeof client.moderation.moderators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.moderators.$get(args, options))
}

export async function postModerationModerators(
  args: InferRequestType<typeof client.moderation.moderators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.moderators.$post(args, options))
}

export async function deleteModerationModerators(
  args: InferRequestType<typeof client.moderation.moderators.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.moderators.$delete(args, options))
}

export async function getChannelsVips(
  args: InferRequestType<typeof client.channels.vips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.vips.$get(args, options))
}

export async function postChannelsVips(
  args: InferRequestType<typeof client.channels.vips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.vips.$post(args, options))
}

export async function deleteChannelsVips(
  args: InferRequestType<typeof client.channels.vips.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.vips.$delete(args, options))
}

export async function getModerationShieldMode(
  args: InferRequestType<typeof client.moderation.shield_mode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.shield_mode.$get(args, options))
}

export async function putModerationShieldMode(
  args: InferRequestType<typeof client.moderation.shield_mode.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.shield_mode.$put(args, options))
}

export async function postModerationWarnings(
  args: InferRequestType<typeof client.moderation.warnings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.warnings.$post(args, options))
}

export async function postModerationSuspiciousUsers(
  args: InferRequestType<typeof client.moderation.suspicious_users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.suspicious_users.$post(args, options))
}

export async function deleteModerationSuspiciousUsers(
  args: InferRequestType<typeof client.moderation.suspicious_users.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.suspicious_users.$delete(args, options))
}

export async function getPolls(
  args: InferRequestType<typeof client.polls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.polls.$get(args, options))
}

export async function postPolls(
  args: InferRequestType<typeof client.polls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.polls.$post(args, options))
}

export async function patchPolls(
  args: InferRequestType<typeof client.polls.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.polls.$patch(args, options))
}

export async function getPredictions(
  args: InferRequestType<typeof client.predictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions.$get(args, options))
}

export async function postPredictions(
  args: InferRequestType<typeof client.predictions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions.$post(args, options))
}

export async function patchPredictions(
  args: InferRequestType<typeof client.predictions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions.$patch(args, options))
}

export async function postRaids(
  args: InferRequestType<typeof client.raids.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.raids.$post(args, options))
}

export async function deleteRaids(
  args: InferRequestType<typeof client.raids.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.raids.$delete(args, options))
}

export async function getSchedule(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.$get(args, options))
}

export async function getScheduleIcalendar(
  args: InferRequestType<typeof client.schedule.icalendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.icalendar.$get(args, options))
}

export async function patchScheduleSettings(
  args: InferRequestType<typeof client.schedule.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.settings.$patch(args, options))
}

export async function postScheduleSegment(
  args: InferRequestType<typeof client.schedule.segment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.segment.$post(args, options))
}

export async function deleteScheduleSegment(
  args: InferRequestType<typeof client.schedule.segment.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.segment.$delete(args, options))
}

export async function patchScheduleSegment(
  args: InferRequestType<typeof client.schedule.segment.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.segment.$patch(args, options))
}

export async function getSearchCategories(
  args: InferRequestType<typeof client.search.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.categories.$get(args, options))
}

export async function getSearchChannels(
  args: InferRequestType<typeof client.search.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.channels.$get(args, options))
}

export async function getStreamsKey(
  args: InferRequestType<typeof client.streams.key.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.key.$get(args, options))
}

export async function getStreams(
  args: InferRequestType<typeof client.streams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.$get(args, options))
}

export async function getStreamsFollowed(
  args: InferRequestType<typeof client.streams.followed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.followed.$get(args, options))
}

export async function getStreamsMarkers(
  args: InferRequestType<typeof client.streams.markers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.markers.$get(args, options))
}

export async function postStreamsMarkers(
  args: InferRequestType<typeof client.streams.markers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.markers.$post(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function getSubscriptionsUser(
  args: InferRequestType<typeof client.subscriptions.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.user.$get(args, options))
}

export async function getTagsStreams(
  args: InferRequestType<typeof client.tags.streams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.streams.$get(args, options))
}

export async function getStreamsTags(
  args: InferRequestType<typeof client.streams.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.tags.$get(args, options))
}

export async function getTeamsChannel(
  args: InferRequestType<typeof client.teams.channel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.channel.$get(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function putUsers(
  args: InferRequestType<typeof client.users.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$put(args, options))
}

export async function getAuthorizationUsers(
  args: InferRequestType<typeof client.authorization.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.users.$get(args, options))
}

export async function getUsersBlocks(
  args: InferRequestType<typeof client.users.blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.blocks.$get(args, options))
}

export async function putUsersBlocks(
  args: InferRequestType<typeof client.users.blocks.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.blocks.$put(args, options))
}

export async function deleteUsersBlocks(
  args: InferRequestType<typeof client.users.blocks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.blocks.$delete(args, options))
}

export async function getUsersExtensionsList(options?: ClientRequestOptions) {
  return await parseResponse(client.users.extensions.list.$get(undefined, options))
}

export async function getUsersExtensions(
  args: InferRequestType<typeof client.users.extensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.extensions.$get(args, options))
}

export async function putUsersExtensions(
  args: InferRequestType<typeof client.users.extensions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.extensions.$put(args, options))
}

export async function getVideos(
  args: InferRequestType<typeof client.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$get(args, options))
}

export async function deleteVideos(
  args: InferRequestType<typeof client.videos.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videos.$delete(args, options))
}

export async function postWhispers(
  args: InferRequestType<typeof client.whispers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whispers.$post(args, options))
}
