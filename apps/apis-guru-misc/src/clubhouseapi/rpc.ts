import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCallPhoneNumberAuth(
  args: InferRequestType<typeof client.call_phone_number_auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_phone_number_auth.$post(args, options))
}

export async function getCheckForUpdate(
  args: InferRequestType<typeof client.check_for_update.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_for_update.$get(args, options))
}

export async function postCheckWaitlistStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.check_waitlist_status.$post(undefined, options))
}

export async function postCompletePhoneNumberAuth(
  args: InferRequestType<typeof client.complete_phone_number_auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.complete_phone_number_auth.$post(args, options))
}

export async function postCreateChannel(
  args: InferRequestType<typeof client.create_channel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.create_channel.$post(args, options))
}

export async function postFollow(
  args: InferRequestType<typeof client.follow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.follow.$post(args, options))
}

export async function getGetActionableNotifications(options?: ClientRequestOptions) {
  return await parseResponse(client.get_actionable_notifications.$get(undefined, options))
}

export async function getGetAllTopics(options?: ClientRequestOptions) {
  return await parseResponse(client.get_all_topics.$get(undefined, options))
}

export async function getGetChannels(options?: ClientRequestOptions) {
  return await parseResponse(client.get_channels.$get(undefined, options))
}

export async function postGetClub(
  args: InferRequestType<typeof client.get_club.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_club.$post(args, options))
}

export async function postGetClubsForTopic(
  args: InferRequestType<typeof client.get_clubs_for_topic.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_clubs_for_topic.$post(args, options))
}

export async function postGetCreateChannelTargets(
  args: InferRequestType<typeof client.get_create_channel_targets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_create_channel_targets.$post(args, options))
}

export async function getGetEvents(
  args: InferRequestType<typeof client.get_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_events.$get(args, options))
}

export async function postGetFollowing(
  args: InferRequestType<typeof client.get_following.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_following.$post(args, options))
}

export async function getGetNotifications(
  args: InferRequestType<typeof client.get_notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_notifications.$get(args, options))
}

export async function postGetOnlineFriends(
  args: InferRequestType<typeof client.get_online_friends.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_online_friends.$post(args, options))
}

export async function postGetProfile(
  args: InferRequestType<typeof client.get_profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_profile.$post(args, options))
}

export async function postGetReleaseNotes(options?: ClientRequestOptions) {
  return await parseResponse(client.get_release_notes.$post(undefined, options))
}

export async function getGetSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.get_settings.$get(undefined, options))
}

export async function postGetSuggestedClubInvites(
  args: InferRequestType<typeof client.get_suggested_club_invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_suggested_club_invites.$post(args, options))
}

export async function getGetSuggestedFollowsAll(
  args: InferRequestType<typeof client.get_suggested_follows_all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_suggested_follows_all.$get(args, options))
}

export async function postGetSuggestedFollowsFriendsOnly(
  args: InferRequestType<typeof client.get_suggested_follows_friends_only.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_suggested_follows_friends_only.$post(args, options))
}

export async function postGetSuggestedFollowsSimilar(
  args: InferRequestType<typeof client.get_suggested_follows_similar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_suggested_follows_similar.$post(args, options))
}

export async function postGetSuggestedInvites(
  args: InferRequestType<typeof client.get_suggested_invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_suggested_invites.$post(args, options))
}

export async function postGetSuggestedSpeakers(
  args: InferRequestType<typeof client.get_suggested_speakers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_suggested_speakers.$post(args, options))
}

export async function postGetTopic(
  args: InferRequestType<typeof client.get_topic.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_topic.$post(args, options))
}

export async function getGetUsersForTopic(
  args: InferRequestType<typeof client.get_users_for_topic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.get_users_for_topic.$get(args, options))
}

export async function getGetWelcomeChannel(options?: ClientRequestOptions) {
  return await parseResponse(client.get_welcome_channel.$get(undefined, options))
}

export async function postInviteFromWaitlist(
  args: InferRequestType<typeof client.invite_from_waitlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invite_from_waitlist.$post(args, options))
}

export async function postInviteToApp(
  args: InferRequestType<typeof client.invite_to_app.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invite_to_app.$post(args, options))
}

export async function postJoinChannel(
  args: InferRequestType<typeof client.join_channel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.join_channel.$post(args, options))
}

export async function postLeaveChannel(
  args: InferRequestType<typeof client.leave_channel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.leave_channel.$post(args, options))
}

export async function postMe(
  args: InferRequestType<typeof client.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$post(args, options))
}

export async function postRecordActionTrails(
  args: InferRequestType<typeof client.record_action_trails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.record_action_trails.$post(args, options))
}

export async function postRefreshToken(
  args: InferRequestType<typeof client.refresh_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refresh_token.$post(args, options))
}

export async function postResendPhoneNumberAuth(
  args: InferRequestType<typeof client.resend_phone_number_auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resend_phone_number_auth.$post(args, options))
}

export async function postSearchClubs(
  args: InferRequestType<typeof client.search_clubs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search_clubs.$post(args, options))
}

export async function postSearchUsers(
  args: InferRequestType<typeof client.search_users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search_users.$post(args, options))
}

export async function postStartPhoneNumberAuth(
  args: InferRequestType<typeof client.start_phone_number_auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.start_phone_number_auth.$post(args, options))
}

export async function postUpdateNotifications(
  args: InferRequestType<typeof client.update_notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.update_notifications.$post(args, options))
}

export async function postUpdateUsername(
  args: InferRequestType<typeof client.update_username.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.update_username.$post(args, options))
}
