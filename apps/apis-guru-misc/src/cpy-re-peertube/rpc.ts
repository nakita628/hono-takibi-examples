import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Abuses(
  args: InferRequestType<typeof client.api.v1.abuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abuses.$get(args, options))
}

export async function postApiV1Abuses(
  args: InferRequestType<typeof client.api.v1.abuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abuses.$post(args, options))
}

export async function putApiV1AbusesAbuseId(
  args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abuses[':abuseId'].$put(args, options))
}

export async function deleteApiV1AbusesAbuseId(
  args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abuses[':abuseId'].$delete(args, options))
}

export async function getApiV1AbusesAbuseIdMessages(
  args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abuses[':abuseId'].messages.$get(args, options))
}

export async function postApiV1AbusesAbuseIdMessages(
  args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abuses[':abuseId'].messages.$post(args, options))
}

export async function deleteApiV1AbusesAbuseIdMessagesAbuseMessageId(
  args: InferRequestType<
    (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.abuses[':abuseId'].messages[':abuseMessageId'].$delete(args, options),
  )
}

export async function getApiV1Accounts(
  args: InferRequestType<typeof client.api.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts.$get(args, options))
}

export async function getApiV1AccountsName(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':name'].$get(args, options))
}

export async function getApiV1AccountsNameFollowers(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':name'].followers.$get(args, options))
}

export async function getApiV1AccountsNameRatings(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':name'].ratings.$get(args, options))
}

export async function getApiV1AccountsNameVideoChannelSyncs(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':name']['video-channel-syncs'].$get(args, options),
  )
}

export async function getApiV1AccountsNameVideoChannels(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':name']['video-channels'].$get(args, options))
}

export async function getApiV1AccountsNameVideoPlaylists(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':name']['video-playlists'].$get(args, options))
}

export async function getApiV1AccountsNameVideos(
  args: InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':name'].videos.$get(args, options))
}

export async function getApiV1BlocklistStatus(
  args: InferRequestType<typeof client.api.v1.blocklist.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.blocklist.status.$get(args, options))
}

export async function getApiV1Config(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.$get(undefined, options))
}

export async function getApiV1ConfigAbout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.about.$get(undefined, options))
}

export async function getApiV1ConfigCustom(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.custom.$get(undefined, options))
}

export async function putApiV1ConfigCustom(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.custom.$put(undefined, options))
}

export async function deleteApiV1ConfigCustom(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.config.custom.$delete(undefined, options))
}

export async function getApiV1CustomPagesHomepageInstance(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v1['custom-pages'].homepage.instance.$get(undefined, options),
  )
}

export async function putApiV1CustomPagesHomepageInstance(
  args: InferRequestType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-pages'].homepage.instance.$put(args, options))
}

export async function postApiV1JobsPause(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.jobs.pause.$post(undefined, options))
}

export async function postApiV1JobsResume(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.jobs.resume.$post(undefined, options))
}

export async function getApiV1JobsState(
  args: InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.jobs[':state'].$get(args, options))
}

export async function postApiV1MetricsPlayback(
  args: InferRequestType<typeof client.api.v1.metrics.playback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.metrics.playback.$post(args, options))
}

export async function getApiV1OauthClientsLocal(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['oauth-clients'].local.$get(undefined, options))
}

export async function getApiV1Plugins(
  args: InferRequestType<typeof client.api.v1.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins.$get(args, options))
}

export async function getApiV1PluginsAvailable(
  args: InferRequestType<typeof client.api.v1.plugins.available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins.available.$get(args, options))
}

export async function postApiV1PluginsInstall(
  args: InferRequestType<typeof client.api.v1.plugins.install.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins.install.$post(args, options))
}

export async function postApiV1PluginsUninstall(
  args: InferRequestType<typeof client.api.v1.plugins.uninstall.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins.uninstall.$post(args, options))
}

export async function postApiV1PluginsUpdate(
  args: InferRequestType<typeof client.api.v1.plugins.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins.update.$post(args, options))
}

export async function getApiV1PluginsNpmName(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins[':npmName'].$get(args, options))
}

export async function getApiV1PluginsNpmNamePublicSettings(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.plugins[':npmName']['public-settings'].$get(args, options),
  )
}

export async function getApiV1PluginsNpmNameRegisteredSettings(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.plugins[':npmName']['registered-settings'].$get(args, options),
  )
}

export async function putApiV1PluginsNpmNameSettings(
  args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plugins[':npmName'].settings.$put(args, options))
}

export async function getApiV1SearchVideoChannels(
  args: InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search['video-channels'].$get(args, options))
}

export async function getApiV1SearchVideoPlaylists(
  args: InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search['video-playlists'].$get(args, options))
}

export async function getApiV1SearchVideos(
  args: InferRequestType<typeof client.api.v1.search.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.videos.$get(args, options))
}

export async function getApiV1ServerAuditLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.server['audit-logs'].$get(undefined, options))
}

export async function getApiV1ServerBlocklistAccounts(
  args: InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.blocklist.accounts.$get(args, options))
}

export async function postApiV1ServerBlocklistAccounts(
  args: InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.blocklist.accounts.$post(args, options))
}

export async function deleteApiV1ServerBlocklistAccountsAccountName(
  args: InferRequestType<
    (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.server.blocklist.accounts[':accountName'].$delete(args, options),
  )
}

export async function getApiV1ServerBlocklistServers(
  args: InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.blocklist.servers.$get(args, options))
}

export async function postApiV1ServerBlocklistServers(
  args: InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.blocklist.servers.$post(args, options))
}

export async function deleteApiV1ServerBlocklistServersHost(
  args: InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.blocklist.servers[':host'].$delete(args, options))
}

export async function getApiV1ServerFollowers(
  args: InferRequestType<typeof client.api.v1.server.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.followers.$get(args, options))
}

export async function deleteApiV1ServerFollowersNameWithHost(
  args: InferRequestType<(typeof client.api.v1.server.followers)[':nameWithHost']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.followers[':nameWithHost'].$delete(args, options))
}

export async function postApiV1ServerFollowersNameWithHostAccept(
  args: InferRequestType<
    (typeof client.api.v1.server.followers)[':nameWithHost']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.server.followers[':nameWithHost'].accept.$post(args, options),
  )
}

export async function postApiV1ServerFollowersNameWithHostReject(
  args: InferRequestType<
    (typeof client.api.v1.server.followers)[':nameWithHost']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.server.followers[':nameWithHost'].reject.$post(args, options),
  )
}

export async function getApiV1ServerFollowing(
  args: InferRequestType<typeof client.api.v1.server.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.following.$get(args, options))
}

export async function postApiV1ServerFollowing(
  args: InferRequestType<typeof client.api.v1.server.following.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.following.$post(args, options))
}

export async function deleteApiV1ServerFollowingHostOrHandle(
  args: InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.following[':hostOrHandle'].$delete(args, options))
}

export async function getApiV1ServerLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.server.logs.$get(undefined, options))
}

export async function postApiV1ServerLogsClient(
  args: InferRequestType<typeof client.api.v1.server.logs.client.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.logs.client.$post(args, options))
}

export async function getApiV1ServerRedundancyVideos(
  args: InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.redundancy.videos.$get(args, options))
}

export async function postApiV1ServerRedundancyVideos(
  args: InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.redundancy.videos.$post(args, options))
}

export async function deleteApiV1ServerRedundancyVideosRedundancyId(
  args: InferRequestType<
    (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.server.redundancy.videos[':redundancyId'].$delete(args, options),
  )
}

export async function putApiV1ServerRedundancyHost(
  args: InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.server.redundancy[':host'].$put(args, options))
}

export async function getApiV1ServerStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.server.stats.$get(undefined, options))
}

export async function getApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$get(args, options))
}

export async function postApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$post(args, options))
}

export async function postApiV1UsersAskSendVerifyEmail(
  args: InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users['ask-send-verify-email'].$post(args, options))
}

export async function getApiV1UsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.users.me.$get(undefined, options))
}

export async function putApiV1UsersMe(
  args: InferRequestType<typeof client.api.v1.users.me.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.$put(args, options))
}

export async function getApiV1UsersMeAbuses(
  args: InferRequestType<typeof client.api.v1.users.me.abuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.abuses.$get(args, options))
}

export async function deleteApiV1UsersMeAvatar(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.users.me.avatar.$delete(undefined, options))
}

export async function postApiV1UsersMeAvatarPick(
  args: InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.avatar.pick.$post(args, options))
}

export async function getApiV1UsersMeHistoryVideos(
  args: InferRequestType<typeof client.api.v1.users.me.history.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.history.videos.$get(args, options))
}

export async function postApiV1UsersMeHistoryVideosRemove(
  args: InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.history.videos.remove.$post(args, options))
}

export async function deleteApiV1UsersMeHistoryVideosVideoId(
  args: InferRequestType<(typeof client.api.v1.users.me.history.videos)[':videoId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.me.history.videos[':videoId'].$delete(args, options),
  )
}

export async function putApiV1UsersMeNotificationSettings(
  args: InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me['notification-settings'].$put(args, options))
}

export async function getApiV1UsersMeNotifications(
  args: InferRequestType<typeof client.api.v1.users.me.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.notifications.$get(args, options))
}

export async function postApiV1UsersMeNotificationsRead(
  args: InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.notifications.read.$post(args, options))
}

export async function postApiV1UsersMeNotificationsReadAll(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v1.users.me.notifications['read-all'].$post(undefined, options),
  )
}

export async function getApiV1UsersMeSubscriptions(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.subscriptions.$get(args, options))
}

export async function postApiV1UsersMeSubscriptions(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.subscriptions.$post(args, options))
}

export async function getApiV1UsersMeSubscriptionsExist(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.subscriptions.exist.$get(args, options))
}

export async function getApiV1UsersMeSubscriptionsVideos(
  args: InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.subscriptions.videos.$get(args, options))
}

export async function getApiV1UsersMeSubscriptionsSubscriptionHandle(
  args: InferRequestType<
    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.me.subscriptions[':subscriptionHandle'].$get(args, options),
  )
}

export async function deleteApiV1UsersMeSubscriptionsSubscriptionHandle(
  args: InferRequestType<
    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.me.subscriptions[':subscriptionHandle'].$delete(args, options),
  )
}

export async function getApiV1UsersMeVideoPlaylistsVideosExist(
  args: InferRequestType<
    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.me['video-playlists']['videos-exist'].$get(args, options),
  )
}

export async function getApiV1UsersMeVideoQuotaUsed(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.users.me['video-quota-used'].$get(undefined, options))
}

export async function getApiV1UsersMeVideos(
  args: InferRequestType<typeof client.api.v1.users.me.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.videos.$get(args, options))
}

export async function getApiV1UsersMeVideosImports(
  args: InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.videos.imports.$get(args, options))
}

export async function getApiV1UsersMeVideosVideoIdRating(
  args: InferRequestType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.me.videos[':videoId'].rating.$get(args, options))
}

export async function postApiV1UsersRegister(
  args: InferRequestType<typeof client.api.v1.users.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.register.$post(args, options))
}

export async function getApiV1UsersRegistrations(
  args: InferRequestType<typeof client.api.v1.users.registrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.registrations.$get(args, options))
}

export async function postApiV1UsersRegistrationsAskSendVerifyEmail(
  args: InferRequestType<
    (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.registrations['ask-send-verify-email'].$post(args, options),
  )
}

export async function postApiV1UsersRegistrationsRequest(
  args: InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.registrations.request.$post(args, options))
}

export async function deleteApiV1UsersRegistrationsRegistrationId(
  args: InferRequestType<(typeof client.api.v1.users.registrations)[':registrationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.registrations[':registrationId'].$delete(args, options),
  )
}

export async function postApiV1UsersRegistrationsRegistrationIdAccept(
  args: InferRequestType<
    (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.registrations[':registrationId'].accept.$post(args, options),
  )
}

export async function postApiV1UsersRegistrationsRegistrationIdReject(
  args: InferRequestType<
    (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.registrations[':registrationId'].reject.$post(args, options),
  )
}

export async function postApiV1UsersRegistrationsRegistrationIdVerifyEmail(
  args: InferRequestType<
    (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users.registrations[':registrationId']['verify-email'].$post(args, options),
  )
}

export async function postApiV1UsersRevokeToken(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.users['revoke-token'].$post(undefined, options))
}

export async function postApiV1UsersToken(
  args: InferRequestType<typeof client.api.v1.users.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.token.$post(args, options))
}

export async function getApiV1UsersId(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].$get(args, options))
}

export async function putApiV1UsersId(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].$put(args, options))
}

export async function deleteApiV1UsersId(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].$delete(args, options))
}

export async function postApiV1UsersIdTwoFactorConfirmRequest(
  args: InferRequestType<
    (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':id']['two-factor']['confirm-request'].$post(args, options),
  )
}

export async function postApiV1UsersIdTwoFactorDisable(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id']['two-factor'].disable.$post(args, options))
}

export async function postApiV1UsersIdTwoFactorRequest(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id']['two-factor'].request.$post(args, options))
}

export async function postApiV1UsersIdVerifyEmail(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id']['verify-email'].$post(args, options))
}

export async function postApiV1VideoChannelSyncs(
  args: InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-channel-syncs'].$post(args, options))
}

export async function deleteApiV1VideoChannelSyncsChannelSyncId(
  args: InferRequestType<
    (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channel-syncs'][':channelSyncId'].$delete(args, options),
  )
}

export async function postApiV1VideoChannelSyncsChannelSyncIdSync(
  args: InferRequestType<
    (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channel-syncs'][':channelSyncId'].sync.$post(args, options),
  )
}

export async function getApiV1VideoChannels(
  args: InferRequestType<(typeof client.api.v1)['video-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-channels'].$get(args, options))
}

export async function postApiV1VideoChannels(
  args: InferRequestType<(typeof client.api.v1)['video-channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-channels'].$post(args, options))
}

export async function getApiV1VideoChannelsChannelHandle(
  args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-channels'][':channelHandle'].$get(args, options))
}

export async function putApiV1VideoChannelsChannelHandle(
  args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-channels'][':channelHandle'].$put(args, options))
}

export async function deleteApiV1VideoChannelsChannelHandle(
  args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].$delete(args, options),
  )
}

export async function deleteApiV1VideoChannelsChannelHandleAvatar(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].avatar.$delete(args, options),
  )
}

export async function postApiV1VideoChannelsChannelHandleAvatarPick(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].avatar.pick.$post(args, options),
  )
}

export async function deleteApiV1VideoChannelsChannelHandleBanner(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].banner.$delete(args, options),
  )
}

export async function postApiV1VideoChannelsChannelHandleBannerPick(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].banner.pick.$post(args, options),
  )
}

export async function getApiV1VideoChannelsChannelHandleFollowers(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].followers.$get(args, options),
  )
}

export async function postApiV1VideoChannelsChannelHandleImportVideos(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle']['import-videos'].$post(args, options),
  )
}

export async function getApiV1VideoChannelsChannelHandleVideoPlaylists(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle']['video-playlists'].$get(args, options),
  )
}

export async function getApiV1VideoChannelsChannelHandleVideos(
  args: InferRequestType<
    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-channels'][':channelHandle'].videos.$get(args, options),
  )
}

export async function getApiV1VideoPlaylists(
  args: InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-playlists'].$get(args, options))
}

export async function postApiV1VideoPlaylists(
  args: InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-playlists'].$post(args, options))
}

export async function getApiV1VideoPlaylistsPrivacies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['video-playlists'].privacies.$get(undefined, options))
}

export async function getApiV1VideoPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-playlists'][':playlistId'].$get(args, options))
}

export async function putApiV1VideoPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-playlists'][':playlistId'].$put(args, options))
}

export async function deleteApiV1VideoPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-playlists'][':playlistId'].$delete(args, options))
}

export async function getApiV1VideoPlaylistsPlaylistIdVideos(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-playlists'][':playlistId'].videos.$get(args, options),
  )
}

export async function postApiV1VideoPlaylistsPlaylistIdVideos(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-playlists'][':playlistId'].videos.$post(args, options),
  )
}

export async function postApiV1VideoPlaylistsPlaylistIdVideosReorder(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-playlists'][':playlistId'].videos.reorder.$post(args, options),
  )
}

export async function putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementId(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-playlists'][':playlistId'].videos[':playlistElementId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementId(
  args: InferRequestType<
    (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-playlists'][':playlistId'].videos[':playlistElementId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV1Videos(
  args: InferRequestType<typeof client.api.v1.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.$get(args, options))
}

export async function getApiV1VideosBlacklist(
  args: InferRequestType<typeof client.api.v1.videos.blacklist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.blacklist.$get(args, options))
}

export async function getApiV1VideosCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.videos.categories.$get(undefined, options))
}

export async function postApiV1VideosImports(
  args: InferRequestType<typeof client.api.v1.videos.imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.imports.$post(args, options))
}

export async function deleteApiV1VideosImportsId(
  args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.imports[':id'].$delete(args, options))
}

export async function postApiV1VideosImportsIdCancel(
  args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.imports[':id'].cancel.$post(args, options))
}

export async function getApiV1VideosLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.videos.languages.$get(undefined, options))
}

export async function getApiV1VideosLicences(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.videos.licences.$get(undefined, options))
}

export async function postApiV1VideosLive(
  args: InferRequestType<typeof client.api.v1.videos.live.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.live.$post(args, options))
}

export async function getApiV1VideosLiveId(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.live[':id'].$get(args, options))
}

export async function putApiV1VideosLiveId(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.live[':id'].$put(args, options))
}

export async function getApiV1VideosLiveIdSessions(
  args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.live[':id'].sessions.$get(args, options))
}

export async function getApiV1VideosOwnership(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.videos.ownership.$get(undefined, options))
}

export async function postApiV1VideosOwnershipIdAccept(
  args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.ownership[':id'].accept.$post(args, options))
}

export async function postApiV1VideosOwnershipIdRefuse(
  args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.ownership[':id'].refuse.$post(args, options))
}

export async function getApiV1VideosPrivacies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.videos.privacies.$get(undefined, options))
}

export async function postApiV1VideosUpload(
  args: InferRequestType<typeof client.api.v1.videos.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos.upload.$post(args, options))
}

export async function putApiV1VideosUploadResumable(
  args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos['upload-resumable'].$put(args, options))
}

export async function postApiV1VideosUploadResumable(
  args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos['upload-resumable'].$post(args, options))
}

export async function deleteApiV1VideosUploadResumable(
  args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos['upload-resumable'].$delete(args, options))
}

export async function getApiV1VideosId(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].$get(args, options))
}

export async function putApiV1VideosId(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].$put(args, options))
}

export async function deleteApiV1VideosId(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].$delete(args, options))
}

export async function postApiV1VideosIdBlacklist(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].blacklist.$post(args, options))
}

export async function deleteApiV1VideosIdBlacklist(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].blacklist.$delete(args, options))
}

export async function getApiV1VideosIdCaptions(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].captions.$get(args, options))
}

export async function putApiV1VideosIdCaptionsCaptionLanguage(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.videos[':id'].captions[':captionLanguage'].$put(args, options),
  )
}

export async function deleteApiV1VideosIdCaptionsCaptionLanguage(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.videos[':id'].captions[':captionLanguage'].$delete(args, options),
  )
}

export async function getApiV1VideosIdCommentThreads(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id']['comment-threads'].$get(args, options))
}

export async function postApiV1VideosIdCommentThreads(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id']['comment-threads'].$post(args, options))
}

export async function getApiV1VideosIdCommentThreadsThreadId(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.videos[':id']['comment-threads'][':threadId'].$get(args, options),
  )
}

export async function postApiV1VideosIdCommentsCommentId(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.videos[':id'].comments[':commentId'].$post(args, options),
  )
}

export async function deleteApiV1VideosIdCommentsCommentId(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.videos[':id'].comments[':commentId'].$delete(args, options),
  )
}

export async function getApiV1VideosIdDescription(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['description']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].description.$get(args, options))
}

export async function postApiV1VideosIdGiveOwnership(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['give-ownership']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id']['give-ownership'].$post(args, options))
}

export async function deleteApiV1VideosIdHls(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].hls.$delete(args, options))
}

export async function getApiV1VideosIdLiveSession(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id']['live-session'].$get(args, options))
}

export async function putApiV1VideosIdRate(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].rate.$put(args, options))
}

export async function postApiV1VideosIdSource(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].source.$post(args, options))
}

export async function getApiV1VideosIdStatsOverall(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].stats.overall.$get(args, options))
}

export async function getApiV1VideosIdStatsRetention(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].stats.retention.$get(args, options))
}

export async function getApiV1VideosIdStatsTimeseriesMetric(
  args: InferRequestType<
    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.videos[':id'].stats.timeseries[':metric'].$get(args, options),
  )
}

export async function postApiV1VideosIdStudioEdit(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].studio.edit.$post(args, options))
}

export async function postApiV1VideosIdToken(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].token.$post(args, options))
}

export async function postApiV1VideosIdTranscoding(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].transcoding.$post(args, options))
}

export async function postApiV1VideosIdViews(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].views.$post(args, options))
}

export async function putApiV1VideosIdWatching(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['watching']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].watching.$put(args, options))
}

export async function deleteApiV1VideosIdWebtorrent(
  args: InferRequestType<(typeof client.api.v1.videos)[':id']['webtorrent']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.videos[':id'].webtorrent.$delete(args, options))
}

export async function getFeedsSubscriptionsFormat(
  args: InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds['subscriptions.{format}'].$get(args, options))
}

export async function getFeedsVideoCommentsFormat(
  args: InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds['video-comments.{format}'].$get(args, options))
}

export async function getFeedsVideosFormat(
  args: InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds['videos.{format}'].$get(args, options))
}

export async function getStaticStreamingPlaylistsHlsPrivateFilename(
  args: InferRequestType<
    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.static['streaming-playlists'].hls.private[':filename'].$get(args, options),
  )
}

export async function getStaticStreamingPlaylistsHlsFilename(
  args: InferRequestType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.static['streaming-playlists'].hls[':filename'].$get(args, options),
  )
}

export async function getStaticWebseedPrivateFilename(
  args: InferRequestType<(typeof client.static.webseed.private)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.static.webseed.private[':filename'].$get(args, options))
}

export async function getStaticWebseedFilename(
  args: InferRequestType<(typeof client.static.webseed)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.static.webseed[':filename'].$get(args, options))
}
